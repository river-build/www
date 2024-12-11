import { useRedelegate } from '@/lib/hooks/use-redelegate'
import { formatAddress } from '@/lib/utils'
import { Check } from 'lucide-react'
import { useEffect } from 'react'
import type { Address } from 'viem'
import { Button } from '../ui/button'
import { useToast } from '../ui/use-toast'

export const RedelegateButton = ({
  depositId,
  delegatedAddress,
  variant = 'primary',
  showAddress,
}: {
  depositId: bigint
  delegatedAddress: Address
  variant?: 'primary' | 'secondary'
  showAddress?: boolean
}) => {
  const { toast } = useToast()
  const { isTxConfirmed, isPending, isTxPending, writeRedelegate } = useRedelegate()

  useEffect(() => {
    if (isTxConfirmed && delegatedAddress) {
      toast({
        title: `You've redelegated your RVR balance to ${formatAddress(delegatedAddress)}.`,
      })
    }
  }, [delegatedAddress, isTxConfirmed, toast])

  return (
    <Button
      isLoading={isTxPending || isPending}
      aria-label="Redelegate"
      onClick={() => {
        if (!delegatedAddress) return
        writeRedelegate({ args: [depositId, delegatedAddress] })
      }}
      variant={variant}
    >
      {isTxConfirmed && <Check className="mr-2 h-4 w-4" />}
      {isTxConfirmed
        ? 'Redelegated'
        : isPending || isTxPending
          ? 'Redelegating...'
          : showAddress
            ? `Redelegate to ${formatAddress(delegatedAddress)}`
            : 'Redelegate'}
    </Button>
  )
}
