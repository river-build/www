import { RVR_TOKEN } from '@/constants/contracts'
import { zodResolver } from '@hookform/resolvers/zod'
import { QueryKey, useQueryClient } from '@tanstack/react-query'
import { Check } from 'lucide-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { isAddress } from 'viem'
import { useWaitForTransactionReceipt, useWriteContract } from 'wagmi'
import { z } from 'zod'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

const formSchema = z.object({
  address: z.custom((value) => typeof value === 'string' && isAddress(value), {
    message: 'Invalid address',
  }),
})

type DelegateFormProps = {
  delegateeQueryKey: QueryKey
}

export const DelegateForm = ({ delegateeQueryKey }: DelegateFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const qc = useQueryClient()
  const { data: hash, writeContract, isPending } = useWriteContract()

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  })

  useEffect(() => {
    if (isConfirmed) {
      qc.invalidateQueries({ queryKey: delegateeQueryKey })
    }
  }, [delegateeQueryKey, isConfirmed, qc])

  function onSubmit(form: z.infer<typeof formSchema>) {
    writeContract({
      address: RVR_TOKEN.sepolia,
      abi: RVR_TOKEN.abi,
      functionName: 'delegate',
      args: [form.address],
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
