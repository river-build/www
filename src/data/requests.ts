import { nodeOperatorAbi, nodeOperatorAddress } from '@/contracts'
import { createPublicClient, formatUnits, http, isAddress, type Address } from 'viem'
import { base } from 'viem/chains'
import { z } from 'zod'

// TODO: [HNT-6333] The main node should be decided by making a read call from the RiverRegistry in RiverChain
// instead of picking a random node from the hardcoded list.
const nodes = [
  'https://framework-1.nodes.towns-u4.com',
  'https://framework-2.nodes.towns-u4.com',
  'https://framework-3.nodes.towns-u4.com',
  'https://haneda-1.nodes.towns-u4.com',
  'https://haneda-2.nodes.towns-u4.com',
  'https://hnt-labs-1.staking.production.figment.io',
  'https://hnt-labs-2.staking.production.figment.io',
  'https://hnt-labs-3.staking.production.figment.io',
  'https://ohare-1.staking.production.figment.io',
  'https://ohare-2.staking.production.figment.io',
  'https://ohare-3.staking.production.figment.io',
]

const getRandomNode = (nodes: string[]) => {
  return nodes[Math.floor(Math.random() * nodes.length)]
}

export const getNodeData = async () => {
  const maxRetries = nodes.length
  let attempts = 0
  let lastError
  let lastNode
  let randomNode = getRandomNode(nodes)

  while (attempts < maxRetries) {
    while (randomNode === lastNode) {
      randomNode = getRandomNode(nodes)
    }
    try {
      const res = await fetch(`${randomNode}/debug/multi/json`)
      if (!res.ok) throw new Error(`${randomNode} failed with status: ${res.status}`)
      return res.json() as Promise<NodeStatusSchema>
    } catch (error) {
      attempts++
      lastError = error
      lastNode = randomNode
      console.warn(`Attempt ${attempts} failed. Trying another node...`)
    }
  }

  throw new Error(
    `Failed to fetch node data after ${maxRetries} attempts. Last error: ${lastError}`,
  )
}

const zodAddress = z.string().refine(isAddress)
export type NodeStatusSchema = z.infer<typeof nodeStatusSchema>

export type NodeData = Awaited<ReturnType<typeof getNodeData>>['nodes'][number]

export const nodeStatusSchema = z.object({
  nodes: z.array(
    z.object({
      record: z.object({
        address: zodAddress,
        url: z.string(),
        operator: zodAddress,
        status: z.number(),
        status_text: z.string(),
      }),
      local: z.boolean().optional(),
      http11: z.object({
        success: z.boolean(),
        status: z.number(),
        status_text: z.string(),
        elapsed: z.string(),
        elapsed_after_dns: z.string(),
        elapsed_after_conn: z.string(),
        response: z.object({
          status: z.string(),
          instance_id: z.string(),
          address: z.string(),
          version: z.string(),
          start_time: z.string(),
          uptime: z.string(),
          graffiti: z.string(),
        }),
        protocol: z.string(),
        used_tls: z.boolean(),
        remote_address: z.string(),
        dns_addresses: z.array(z.string()),
      }),
      http20: z.object({
        success: z.boolean(),
        status: z.number(),
        status_text: z.string(),
        elapsed: z.string(),
        elapsed_after_dns: z.string(),
        elapsed_after_conn: z.string(),
        response: z.object({
          status: z.string(),
          instance_id: z.string(),
          address: z.string(),
          version: z.string(),
          start_time: z.string(),
          uptime: z.string(),
          graffiti: z.string(),
        }),
        protocol: z.string(),
        used_tls: z.boolean(),
        remote_address: z.string(),
        dns_addresses: z.array(z.string()),
      }),
      grpc: z.object({
        success: z.boolean(),
        status_text: z.string(),
        elapsed: z.string(),
        elapsed_after_dns: z.string(),
        elapsed_after_conn: z.string(),
        version: z.string(),
        start_time: z.string(),
        uptime: z.string(),
        graffiti: z.string(),
        protocol: z.string(),
        x_http_version: z.string(),
        remote_address: z.string(),
        dns_addresses: z.array(z.string()),
      }),
      river_eth_balance: z.string(),
    }),
  ),
  query_time: z.string(),
  elapsed: z.string(),
})

export type StackableNode = Awaited<ReturnType<typeof getStakeableNodes>>[number]

// wip 🏗️
export const getStakeableNodes = async () => {
  // todo: change depending on chain
  const client = createPublicClient({
    chain: base,
    transport: http(),
  })
  const nodeData = await getNodeData()
  const operators = nodeData.nodes.map((node) => node.record.operator)
  // get all operators
  const uniqueOperators = Array.from(new Set(operators)) // Get unique operators

  // get all comission rates
  const comissionRates = await Promise.all(
    uniqueOperators.map((operator) =>
      client.readContract({
        abi: nodeOperatorAbi,
        address: nodeOperatorAddress[base.id],
        functionName: 'getCommissionRate',
        args: [operator],
      }),
    ),
  )

  // Create a hashmap from unique operator address to commission rate
  const operatorCommissionMap = uniqueOperators.reduce<Record<Address, bigint>>(
    (map, operator, index) => {
      map[operator] = comissionRates[index]
      return map
    },
    {},
  )

  // calculate APR for each operator
  const calculateApr = (comissionRate: bigint) => {
    return Number(comissionRate) / 10000 // todo: calculate APR
  }
  // skip - check depositIds (? - think we cant do this here)
  // sort by APR

  return nodeData.nodes.map((node) => {
    const commissionRate = operatorCommissionMap[node.record.operator]
    const estimatedApr = calculateApr(commissionRate)
    return { ...node, commissionRatePercentage: formatUnits(commissionRate, 3), estimatedApr }
  })
}
