import { toast } from '@/components/ui/use-toast'
import { useReadRiverTokenDelegates, useWriteRiverTokenDelegate } from '@/contracts'
import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useWaitForTransactionReceipt } from 'wagmi'

const isRiverInvalidTokenAmountError = (error: Error) => {
  return error.message.includes('River__InvalidTokenAmount')
}

const isDelegateeSameAsCurrent = (error: Error) => {
  return error.message.includes('River__DelegateeSameAsCurrent')
}

export const useDelegate = () => {
  const qc = useQueryClient()
  const {
    data: hash,
    writeContract,
    isPending,
  } = useWriteRiverTokenDelegate({
    mutation: {
      onError: (e) => {
        if (isRiverInvalidTokenAmountError(e)) {
          toast({
            title: 'Insufficient RVR balance',
            description: 'You need some RVR token in order to delegate.',
          })
        } else if (isDelegateeSameAsCurrent(e)) {
          toast({
            title: 'Delegatee is the same as current',
            description: 'You cannot delegate to the same address.',
          })
        } else {
          console.error(e)
        }
      },
    },
  })

  const { isLoading: isTxPending, isSuccess: isTxConfirmed } = useWaitForTransactionReceipt({
    hash,
  })
  const { queryKey: delegateeQueryKey } = useReadRiverTokenDelegates()

  useEffect(() => {
    if (isTxConfirmed) {
      qc.invalidateQueries({ queryKey: delegateeQueryKey })
    }
  }, [delegateeQueryKey, isTxConfirmed, qc])

  return {
    writeDelegate: writeContract,
    isPending,
    isTxPending,
    isTxConfirmed,
  }
}
