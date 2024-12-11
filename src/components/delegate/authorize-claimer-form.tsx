'use client'

import { useAuthorizeClaimer } from '@/lib/hooks/use-authorize-claimer'
import { formatAddress } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { Check } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { isAddress } from 'viem'
import { base, mainnet } from 'viem/chains'
import { useAccount, useSwitchChain } from 'wagmi'
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

export const AuthorizeClaimerForm = () => {
  const [authorizedClaimerAddress, setAuthorizedClaimerAddress] = useState<`0x${string}` | null>(
    null,
  )
  const { isPending, isTxConfirmed, isTxPending, writeAuthorizer } = useAuthorizeClaimer()
  const { switchChain } = useSwitchChain()
  const { chainId } = useAccount()
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  useEffect(() => {
    if (isTxConfirmed && authorizedClaimerAddress) {
      toast({
        title: `You've authorized ${formatAddress(
          authorizedClaimerAddress,
        )} as the wallet that can claim on your behalf.`,
      })
    }
  }, [authorizedClaimerAddress, isTxConfirmed, toast])

  function onSubmit(formValue: z.infer<typeof formSchema>) {
    if (!chainId) return
    if (chainId === base.id) {
      toast({
        title: 'Please switch to mainnet',
        description: 'Base not supported yet.',
      })
      switchChain({ chainId: mainnet.id })
      return
    }
    setAuthorizedClaimerAddress(formValue.address)
    writeAuthorizer({
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
          {isTxConfirmed && <Check className="mr-2 h-4 w-4" />}
          {isTxConfirmed ? 'Authorized' : isPending || isTxPending ? 'Authorizing...' : 'Authorize'}
        </Button>
      </form>
    </Form>
  )
}
