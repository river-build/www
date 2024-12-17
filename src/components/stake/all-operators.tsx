'use client'

import {
  rewardsDistributionAbi,
  rewardsDistributionAddress,
  useReadRewardsDistributionGetDepositsByDepositor,
} from '@/contracts'
import type { StackableNodeData } from '@/lib/hooks/use-node-data'
import { useAccount, useReadContracts } from 'wagmi'
import { NodeCard } from './node-card'

export const AllOperators = ({ operators }: { operators: StackableNodeData[] }) => {
  const { data: operatorsWithDeposits } = useStackableNodeData(operators)
  return (
    <div id="all-operators">
      <h2 className="mb-4 text-center text-2xl font-bold">All Operators</h2>
      <p className="text-muted-foreground mb-6 text-center text-sm">
        To distribute power on the network, please delegate to top performing operators.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* TODO: this page wont be live fetching node data - right? */}
        {operatorsWithDeposits.map((operator) => (
          <NodeCard key={operator.id} node={operator} allNodes={operators} showButton />
        ))}
      </div>
    </div>
  )
}

type Deposit = {
  depositId: bigint
  amount: bigint
  owner: `0x${string}`
  commissionEarningPower: bigint
  delegatee: `0x${string}`
  pendingWithdrawal: bigint
  beneficiary: `0x${string}`
}

export type StackableNodeDataWithDeposits = StackableNodeData & {
  deposits?: Deposit
}

const useStackableNodeData = (initialData: StackableNodeData[]) => {
  const { address, isConnected, chainId } = useAccount()
  const { data: allDepositIds } = useReadRewardsDistributionGetDepositsByDepositor({
    args: [address!],
    query: { enabled: isConnected },
  })

  const depositsQueries = useReadContracts({
    contracts: (allDepositIds || []).map(
      (id) =>
        ({
          abi: rewardsDistributionAbi,
          address: rewardsDistributionAddress[chainId as keyof typeof rewardsDistributionAddress],
          functionName: 'depositById',
          args: [id],
        }) as const,
    ),
    query: { enabled: isConnected && !!allDepositIds },
  })

  const deposits = depositsQueries.data
    ?.flatMap((query) => query.result)
    .filter((deposit): deposit is NonNullable<typeof deposit> => deposit !== undefined)

  const operators = allDepositIds
    ? Object.fromEntries(
        (deposits ?? [])
          .filter((deposit): deposit is NonNullable<typeof deposit> => deposit !== undefined)
          .map((deposit, idx) => [
            deposit.delegatee,
            { ...deposit, depositId: allDepositIds[idx] },
          ]),
      )
    : {}

  const stackableNodes = initialData.map((node) => {
    const nodeDeposits = operators?.[node.operator]
    return {
      ...node,
      deposits: nodeDeposits,
    }
  })
  // TODO: sort by staked & total deposit amount (?)

  return {
    data: isConnected ? stackableNodes : initialData,
  }
}
