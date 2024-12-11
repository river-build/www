import { useDelegate } from '@/lib/hooks/use-delegate'
import { formatAddress } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { Check } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { isAddress, type Address } from 'viem'
import { useAccount } from 'wagmi'
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
  address: z.string().refine((value) => isAddress(value), {
    message: 'Invalid address',
  }),
})

export const DelegateForm = () => {
  const [delegatedAddress, setDelegatedAddress] = useState<`0x${string}` | null>(null)
  const { toast } = useToast()
  const { chainId } = useAccount()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })
  const { writeDelegate, isPending, isTxPending, isTxConfirmed } = useDelegate()

  useEffect(() => {
    if (isTxConfirmed && delegatedAddress) {
      toast({
        title: `You've delegated your RVR balance to ${formatAddress(delegatedAddress)}.`,
      })
    }
  }, [delegatedAddress, isTxConfirmed, toast])

  function onSubmit(formValue: z.infer<typeof formSchema>) {
    if (!chainId) return
    const address = formValue.address as Address
    setDelegatedAddress(address)
    writeDelegate({ args: [address] })
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
        <Button type="submit" isLoading={isPending || isTxPending} aria-label="Delegate">
          {isTxConfirmed && <Check className="mr-2 h-4 w-4" />}
          {isTxConfirmed ? 'Delegated' : isTxPending || isTxPending ? 'Delegating...' : 'Delegate'}
        </Button>
      </form>
    </Form>
  )
}
