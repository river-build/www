'use client'
import { useWriteRewardsDistributionInitiateWithdraw } from '@/contracts'
import { useWaitForTransactionReceipt } from 'wagmi'

export const useInitiateWithdraw = () => {
  const {
    writeContract: initiateWithdraw,
    data: hash,
    isPending,
  } = useWriteRewardsDistributionInitiateWithdraw()
  const { isLoading: isTxPending, isSuccess: isTxConfirmed } = useWaitForTransactionReceipt({
    hash: hash,
  })

  return {
    initiateWithdraw,
    isPending,
    isTxPending,
    isTxConfirmed,
  }
}
