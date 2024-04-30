'use client'

import { RVR_AUTHORIZER, getRiverAddress } from '@/constants/contracts'
import { zodResolver } from '@hookform/resolvers/zod'
import { QueryKey, useQueryClient } from '@tanstack/react-query'
import { Check } from 'lucide-react'
import { useEffect } from 'react'
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

const formSchema = z.object({
  address: z.custom((value) => typeof value === 'string' && isAddress(value), {
    message: 'Invalid address',
  }),
})

type AuthorizeClaimerFormProps = {
  authorizedClaimerQueryKey: QueryKey
}

export const AuthorizeClaimerForm = ({ authorizedClaimerQueryKey }: AuthorizeClaimerFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const qc = useQueryClient()
  const { chainId } = useAccount()
  const { data: hash, writeContract, isPending } = useWriteContract()

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  })

  useEffect(() => {
    if (isConfirmed) {
      qc.invalidateQueries({ queryKey: authorizedClaimerQueryKey })
    }
  }, [authorizedClaimerQueryKey, isConfirmed, qc])

  function onSubmit(formValue: z.infer<typeof formSchema>) {
    if (!chainId) return
    writeContract({
      address: getRiverAddress(RVR_AUTHORIZER, chainId),
      abi: RVR_AUTHORIZER.abi,
      functionName: 'authorizeClaimer',
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
              <FormLabel>Authorize claimer:</FormLabel>
              <FormControl>
                <Input placeholder="0x55555" {...field} value={field.value ?? ''} />
              </FormControl>
              <FormDescription>
                The wallet address of the person that you want to give permissions to transfer or
                spend your RVR
              </FormDescription>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" isLoading={isPending} aria-label="Authorize">
          {isConfirmed && <Check className="mr-2 h-4 w-4" />}
          {isConfirmed ? 'Authorized' : isPending || isConfirming ? 'Authorizing...' : 'Authorize'}
        </Button>
      </form>
    </Form>
  )
}
