'use client'
import { Button } from '@/components/ui/button'
import type { StackableNodeData } from '@/lib/hooks/use-node-data'
import { useWithdraw } from '@/lib/hooks/use-withdraw'
import type { DialogContentProps } from '@radix-ui/react-dialog'
import { formatUnits } from 'viem'
import { DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { Skeleton } from '../ui/skeleton'
import { Typography } from '../ui/typography'
import { NodeCard } from './node-card'

type WithdrawFormProps = {
  node: StackableNodeData
  depositId: bigint // TODO: how should we archicture around this?
  onStakeFinish?: (amount: number) => void
}

export function WithdrawForm({ node, depositId }: WithdrawFormProps) {
  const {
    withdraw,
    isPending,
    isTxPending,
    isTxConfirmed,
    amountToWithdraw,
    isAmountToWithdrawLoading,
  } = useWithdraw(depositId)
  const isWithdrawing = isPending || isTxPending

  return (
    <div className="space-y-6 py-4">
      <div className="space-y-2">
        <div className="space-y-2">
          <Typography className="text-sm font-medium">Currently delegated to:</Typography>
          <NodeCard node={node} />
        </div>

        <Typography className="font-medium">Amount to withdraw:</Typography>
        {isAmountToWithdrawLoading ? (
          <Skeleton className="h-4 w-16" />
        ) : (
          <Typography as="span" size="md">
            {formatUnits(amountToWithdraw ?? 0n, 18)} RVR
          </Typography>
        )}
      </div>

      <Typography className="text-sm font-medium">
        Initiating withdraw will take 3 days lock up period, after which you can withdraw the tokens
        to your wallet.
      </Typography>

      <Button
        type="submit"
        className="w-full"
        isLoading={isWithdrawing}
        disabled={isWithdrawing}
        onClick={() => withdraw()}
      >
        {isWithdrawing ? 'Initiating Withdraw...' : 'Initiate Withdraw'}
      </Button>
    </div>
  )
}

export const WithdrawDialogContent = ({
  node,
  depositId,
  onStakeFinish,
  ...rest
}: WithdrawFormProps & DialogContentProps) => {
  return (
    <DialogContent disableInteractOutside {...rest}>
      <DialogHeader>
        <DialogTitle className="text-center">Withdraw</DialogTitle>
      </DialogHeader>
      <WithdrawForm node={node} depositId={depositId} onStakeFinish={onStakeFinish} />
    </DialogContent>
  )
}
