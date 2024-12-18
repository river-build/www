'use client'
import {
  useReadRewardsDistributionDepositById,
  useReadRiverTokenLockCooldown,
  useWriteRewardsDistributionWithdraw,
} from '@/contracts'
import { useQueryClient } from '@tanstack/react-query'
import { useCallback, useEffect } from 'react'
import { useAccount, useWaitForTransactionReceipt } from 'wagmi'

export const useWithdraw = (depositId: bigint | undefined) => {
  const { address } = useAccount()
  const qc = useQueryClient()
  const { data: lockCooldown, isLoading: isLockCooldownLoading } = useReadRiverTokenLockCooldown({
    args: [address!],
    query: {
      enabled: !!address,
    },
  })

  const { writeContract, data: hash, isPending } = useWriteRewardsDistributionWithdraw()
  const { isLoading: isTxPending, isSuccess: isTxConfirmed } = useWaitForTransactionReceipt({
    hash: hash,
  })

  const {
    data: deposit,
    isLoading: isAmountToWithdrawLoading,
    queryKey: depositQueryKey,
  } = useReadRewardsDistributionDepositById({
    args: [depositId!],
    query: {
      enabled: !!depositId,
    },
  })
  const amountToWithdraw = deposit?.amount

  const withdraw = useCallback(() => {
    if (!address) return
    writeContract({
      args: [depositId!],
    })
  }, [address, depositId, writeContract])

  useEffect(() => {
    if (isTxConfirmed) {
      qc.invalidateQueries({ queryKey: depositQueryKey })
    }
  }, [isTxConfirmed])

  return {
    withdraw,
    isPending,
    isTxPending,
    isTxConfirmed,
    amountToWithdraw,
    isAmountToWithdrawLoading,
    lockCooldown,
    isLockCooldownLoading,
  }
}
