'use client'
import { Button } from '@/components/ui/button'
import { useReadRiverTokenBalanceOf } from '@/contracts'
import { useInitiateWithdraw } from '@/lib/hooks/use-initiate-withdraw'
import type { StackableNodeData } from '@/lib/hooks/use-node-data'
import { useStake } from '@/lib/hooks/use-stake'
import type { DialogContentProps } from '@radix-ui/react-dialog'
import { formatUnits } from 'viem'
import { useAccount } from 'wagmi'
import { DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { Skeleton } from '../ui/skeleton'
import { Typography } from '../ui/typography'
import { NodeCard } from './node-card'

type InitiateWithdrawFormProps = {
  node: StackableNodeData
  depositId: bigint // TODO: how should we archicture around this?
  onStakeFinish?: (amount: number) => void
}

export function InitiateWithdrawForm({ node }: InitiateWithdrawFormProps) {
  const { address } = useAccount()
  const { data: balance } = useReadRiverTokenBalanceOf({
    args: [address!],
    query: { enabled: !!address },
  })
  const avaliableBalance = balance || 0n
  const { isStakingStateLoading, stakingState } = useStake()
  const { initiateWithdraw, isPending, isTxPending, isTxConfirmed } = useInitiateWithdraw()
  const isWithdrawing = isPending || isTxPending

  return (
    <div className="space-y-6 py-4">
      <div className="space-y-2">
        <Typography className="font-medium">Currently Staked:</Typography>
        {isStakingStateLoading ? (
          <Skeleton className="h-4 w-16" />
        ) : (
          <Typography as="span" size="md">
            {formatUnits(stakingState?.totalStaked ?? 0n, 18)} RVR
          </Typography>
        )}
      </div>
      <div className="space-y-2">
        <Typography className="text-sm font-medium">Currently delegated to:</Typography>
        <NodeCard node={node} />
      </div>

      <Typography className="text-sm font-medium">
        Initiating withdraw will take 3 days lock up period, after which you can withdraw the tokens
        to your wallet.
      </Typography>

      <Button type="submit" className="w-full" isLoading={isWithdrawing} disabled={isWithdrawing}>
        {isWithdrawing ? 'Initiating Withdraw...' : 'Initiate Withdraw'}
      </Button>
    </div>
  )
}

export const InitiateWithdrawDialogContent = ({
  node,
  depositId,
  onStakeFinish,
  ...rest
}: InitiateWithdrawFormProps & DialogContentProps) => {
  return (
    <DialogContent disableInteractOutside {...rest}>
      <DialogHeader>
        <DialogTitle className="text-center">Initiate Withdraw</DialogTitle>
      </DialogHeader>
      <InitiateWithdrawForm node={node} depositId={depositId} onStakeFinish={onStakeFinish} />
    </DialogContent>
  )
}
