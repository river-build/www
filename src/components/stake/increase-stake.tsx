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
import { useReadRewardsDistributionDepositById, useReadRiverTokenBalanceOf } from '@/contracts'
import type { StackableOperator } from '@/data/requests'
import { useIncreaseStake } from '@/lib/hooks/use-increase-stake'
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
import { OperatorCard } from './operator-card'

type IncreaseStakeFormProps = {
  operator: StackableOperator
  depositId: bigint
  onIncreaseStakeFinish?: (amount: number) => void
}

export function IncreaseStakeForm({
  operator,
  depositId,
  onIncreaseStakeFinish,
}: IncreaseStakeFormProps) {
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
          .refine((val) => val > 0, {
            message: 'Amount must be a positive number',
          })
          .refine((val) => BigInt(val) <= avaliableBalance, {
            message: 'Amount can not be greater than available balance',
          }),
      }),
    [avaliableBalance],
  )

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const { data: currentDeposit, isPending: isCurrentDepositPending } =
    useReadRewardsDistributionDepositById({
      args: [depositId],
      query: { enabled: !!address },
    })

  const { increaseStake, isPending, isTxPending, isTxConfirmed } = useIncreaseStake(depositId)
  const isStaking = isPending || isTxPending

  useEffect(() => {
    if (isTxConfirmed) {
      onIncreaseStakeFinish?.(form.getValues('amount'))
      form.reset()
    }
  }, [isTxConfirmed, onIncreaseStakeFinish, form])

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
          <FormLabel className="text-sm font-medium">Stake to:</FormLabel>
          <OperatorCard operator={operator} />
        </div>
        <div className="flex flex-col gap-2">
          <FormLabel className="font-medium">Currently Staked:</FormLabel>
          {isCurrentDepositPending ? (
            <Skeleton className="h-4 w-16" />
          ) : (
            <Typography as="p" size="lg" className="font-medium">
              {formatUnits(currentDeposit?.amount ?? 0n, 18)} RVR
            </Typography>
          )}
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
                  onChange={(e) => {
                    const value = Number(e.target.value)
                    field.onChange(value)
                  }}
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
  operator,
  depositId,
  onIncreaseStakeFinish,
  ...rest
}: IncreaseStakeFormProps & DialogContentProps) => {
  return (
    <DialogContent {...rest}>
      <DialogHeader>
        <DialogTitle className="text-center">Increase Stake</DialogTitle>
      </DialogHeader>
      <IncreaseStakeForm
        operator={operator}
        depositId={depositId}
        onIncreaseStakeFinish={onIncreaseStakeFinish}
      />
    </DialogContent>
  )
}
