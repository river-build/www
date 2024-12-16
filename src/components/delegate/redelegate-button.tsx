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
  className,
  onRedelegateFinish,
}: {
  depositId: bigint
  delegatedAddress: Address | undefined
  variant?: 'primary' | 'secondary'
  showAddress?: boolean
  className?: string
  onRedelegateFinish?: () => void
}) => {
  const { toast } = useToast()
  const { isTxConfirmed, isPending, isTxPending, writeRedelegate } = useRedelegate()

  useEffect(() => {
    if (isTxConfirmed && delegatedAddress) {
      toast({
        title: `You've redelegated your RVR balance to ${formatAddress(delegatedAddress)}.`,
      })
      onRedelegateFinish?.()
    }
  }, [delegatedAddress, isTxConfirmed, toast])

  return (
    <Button
      isLoading={isTxPending || isPending}
      aria-label="Redelegate"
      disabled={!delegatedAddress || isTxPending || isPending}
      onClick={() => {
        if (!delegatedAddress) return
        writeRedelegate({ args: [depositId, delegatedAddress] })
      }}
      variant={variant}
      className={className}
    >
      {isTxConfirmed && <Check className="mr-2 h-4 w-4" />}
      {isTxConfirmed
        ? 'Redelegated'
        : isPending || isTxPending
          ? 'Redelegating...'
          : showAddress && !!delegatedAddress
            ? `Redelegate to ${formatAddress(delegatedAddress)}`
            : 'Redelegate'}
    </Button>
  )
}
