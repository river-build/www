import {
  useReadAuthorizerGetAuthorizedClaimer,
  useWriteAuthorizerAuthorizeClaimer,
} from '@/contracts'
import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useWaitForTransactionReceipt } from 'wagmi'

export const useAuthorizeClaimer = () => {
  const qc = useQueryClient()
  const {
    data: hash,
    writeContract: writeAuthorizer,
    isPending,
  } = useWriteAuthorizerAuthorizeClaimer({
    mutation: {
      onError: (e) => {
        console.error(e)
      },
    },
  })
  const { isLoading: isTxPending, isSuccess: isTxConfirmed } = useWaitForTransactionReceipt({
    hash,
  })

  const { queryKey: authorizedClaimerQueryKey } = useReadAuthorizerGetAuthorizedClaimer()

  useEffect(() => {
    if (isTxConfirmed) {
      qc.invalidateQueries({ queryKey: authorizedClaimerQueryKey })
    }
  }, [authorizedClaimerQueryKey, isTxConfirmed, qc])

  return {
    isPending,
    isTxConfirmed,
    isTxPending,
    writeAuthorizer,
  }
}
