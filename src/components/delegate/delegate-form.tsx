import { RVR_TOKEN, getRiverAddress } from '@/constants/contracts'
import { formatAddress } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { QueryKey, useQueryClient } from '@tanstack/react-query'
import { Check } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { isAddress } from 'viem'
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from 'wagmi'
import { z } from 'zod'
import { Button } from '../ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { useToast } from '../ui/use-toast'

const formSchema = z.object({
  address: z.custom((value) => typeof value === 'string' && isAddress(value), {
    message: 'Invalid address',
  }),
})

type DelegateFormProps = {
  delegateeQueryKey: QueryKey
}

export const DelegateForm = ({ delegateeQueryKey }: DelegateFormProps) => {
  const [delegatedAddress, setDelegatedAddress] = useState<`0x${string}` | null>(null)
  const { toast } = useToast()
  const { chainId } = useAccount()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const qc = useQueryClient()
  const { data: hash, writeContract, isPending } = useWriteContract()

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  })

  useEffect(() => {
    if (isConfirmed && delegatedAddress) {
      qc.invalidateQueries({ queryKey: delegateeQueryKey })
      toast({
        title: `You've authorized ${formatAddress(
          delegatedAddress,
        )} as the wallet that can claim on your behalf.`,
      })
    }
  }, [delegatedAddress, delegateeQueryKey, isConfirmed, qc, toast])

  function onSubmit(formValue: z.infer<typeof formSchema>) {
    if (!chainId) return
    setDelegatedAddress(formValue.address)
    writeContract({
      address: getRiverAddress(RVR_TOKEN, chainId),
      abi: RVR_TOKEN.abi,
      functionName: 'delegate',
      args: [formValue.address],
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col gap-2">
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Delegate to:</FormLabel>
              <FormControl>
                <Input placeholder="0x55555" {...field} value={field.value ?? ''} />
              </FormControl>
              <FormDescription>
                The wallet address of the person you want to delegate control to
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" isLoading={isPending || isConfirming} aria-label="Delegate">
          {isConfirmed && <Check className="mr-2 h-4 w-4" />}
          {isConfirmed ? 'Delegated' : isPending || isConfirming ? 'Delegating...' : 'Delegate'}
        </Button>
      </form>
    </Form>
  )
}
