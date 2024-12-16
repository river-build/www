'use client'
import { useWriteRewardsDistributionWithdraw } from '@/contracts'
import { useWaitForTransactionReceipt } from 'wagmi'

export const useWithdraw = (depositId: bigint) => {
  const { writeContract: withdraw, data: hash, isPending } = useWriteRewardsDistributionWithdraw()
  const { isLoading: isTxPending, isSuccess: isTxConfirmed } = useWaitForTransactionReceipt({
    hash: hash,
  })
  // TODO: add query to get the amount of tokens to withdraw using the depositId
  const amountToWithdraw = 42069n
  const isAmountToWithdrawLoading = false

  return {
    withdraw,
    isPending,
    isTxPending,
    isTxConfirmed,
    amountToWithdraw,
    isAmountToWithdrawLoading,
  }
}
