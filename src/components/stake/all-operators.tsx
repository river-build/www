'use client'

import {
  rewardsDistributionAbi,
  rewardsDistributionAddress,
  useReadRewardsDistributionGetDepositsByDepositor,
} from '@/contracts'
import type { StakeableNodesResponse } from '@/data/requests'
import {
  formatStackableNodeData,
  useStakeableNodes,
  type StackableNodeData,
} from '@/lib/hooks/use-node-data'
import { useAccount, useReadContracts } from 'wagmi'
import { Typography } from '../ui/typography'
import { NodeCard } from './node-card'

export const AllOperators = ({
  initialData,
}: {
  initialData: StakeableNodesResponse | undefined
}) => {
  const { data: operatorsWithDeposits } = useOperatorsWithDeposits(initialData)
  return (
    <div id="all-operators" className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-center text-2xl font-bold">All Operators</h2>
        <Typography size="md" className="text-center font-medium text-gray-20">
          To distribute power on the network, please delegate to top performing operators.
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {operatorsWithDeposits.map((operator) => (
          <NodeCard key={operator.id} node={operator} allNodes={operatorsWithDeposits} showButton />
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

const useOperatorsWithDeposits = (initialData: StakeableNodesResponse | undefined) => {
  const { address, isConnected, chainId } = useAccount()
  const { operators: _operators } = useStakeableNodes({
    initialData,
    liveQuery: true,
  })
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

  const stackableNodes = _operators.map((node) => {
    const nodeDeposits = operators?.[node.operator]
    return {
      ...node,
      deposits: nodeDeposits,
    }
  })
  // TODO: sort by staked & total deposit amount (?)

  return {
    data: isConnected ? stackableNodes : formatStackableNodeData(initialData?.nodes),
  }
}
