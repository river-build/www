import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useReadRiverTokenBalanceOf } from '@/contracts'
import { useIncreaseStake } from '@/lib/hooks/use-increase-stake'
import type { StackableNodeData } from '@/lib/hooks/use-node-data'
import { zodResolver } from '@hookform/resolvers/zod'
import type { DialogContentProps } from '@radix-ui/react-dialog'
import { useCallback, useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { formatUnits } from 'viem'
import { useAccount } from 'wagmi'
import * as z from 'zod'
import { MaxButton } from '../max-button'
import { DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { Skeleton } from '../ui/skeleton'
import { Typography } from '../ui/typography'
import { NodeCard } from './node-card'

type IncreaseStakeFormProps = {
  node: StackableNodeData
  depositId: bigint // TODO: how should we archicture around this?
  onStakeFinish?: (amount: number) => void
}

export function IncreaseStakeForm({ node, depositId, onStakeFinish }: IncreaseStakeFormProps) {
  const { address } = useAccount()
  const { data: balance } = useReadRiverTokenBalanceOf({
    args: [address!],
    query: { enabled: !!address },
  })
  const avaliableBalance = balance || 0n
  const formSchema = useMemo(
    () =>
      z.object({
        amount: z
          .number()
          .refine((val) => Number(val) > 0, {
            message: 'Amount must be a positive number',
          })
          .refine((val) => val <= avaliableBalance, {
            message: 'Amount can not be greater than available balance',
          }),
      }),
    [avaliableBalance],
  )

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 0,
    },
  })

  const {
    isCurrentDepositLoading,
    currentDeposit,
    increaseStake,
    isPending,
    isTxPending,
    isTxConfirmed,
  } = useIncreaseStake(depositId)
  const isStaking = isPending || isTxPending

  useEffect(() => {
    if (isTxConfirmed) {
      onStakeFinish?.(form.getValues('amount'))
      form.reset()
    }
  }, [isTxConfirmed, onStakeFinish, form])

  const handleSetMax = useCallback(() => {
    form.setValue('amount', Number(avaliableBalance))
  }, [avaliableBalance, form])

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) =>
          increaseStake({
            args: [depositId, BigInt(values.amount)],
          }),
        )}
        className="space-y-6 py-4"
      >
        <div className="space-y-2">
          <FormLabel className="font-medium">Currently Staked:</FormLabel>
          {isCurrentDepositLoading ? (
            <Skeleton className="h-4 w-16" />
          ) : (
            <Typography as="span" size="md">
              {formatUnits(currentDeposit?.amount ?? 0n, 18)} RVR
            </Typography>
          )}
        </div>
        <div className="space-y-2">
          <FormLabel className="text-sm font-medium">Stake to:</FormLabel>
          <NodeCard node={node} />
        </div>

        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Enter amount</FormLabel>
                <MaxButton onClick={handleSetMax} />
              </div>
              <FormControl>
                <Input
                  type="number"
                  placeholder="0"
                  {...field}
                  className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
              </FormControl>
              <FormMessage />
              <FormDescription className="flex w-full justify-end">
                Available Balance {formatUnits(avaliableBalance, 18)} RVR
              </FormDescription>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isStaking} isLoading={isStaking}>
          {isStaking ? 'Staking...' : 'Stake'}
        </Button>
      </form>
    </Form>
  )
}

export const IncreaseStakeDialogContent = ({
  node,
  depositId,
  onStakeFinish,
  ...rest
}: IncreaseStakeFormProps & DialogContentProps) => {
  return (
    <DialogContent {...rest}>
      <DialogHeader>
        <DialogTitle className="text-center">Increase Stake</DialogTitle>
      </DialogHeader>
      <IncreaseStakeForm node={node} depositId={depositId} onStakeFinish={onStakeFinish} />
    </DialogContent>
  )
}
