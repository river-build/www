'use client'
import {
  useReadRewardsDistributionDepositById,
  useReadRewardsDistributionStakingState,
  useWriteRewardsDistributionIncreaseStake,
} from '@/contracts'
import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useAccount, useWaitForTransactionReceipt } from 'wagmi'

export const useIncreaseStake = (depositId: bigint) => {
  const { address } = useAccount()
  const qc = useQueryClient()

  const {
    writeContract: increaseStake,
    data: hash,
    isPending,
  } = useWriteRewardsDistributionIncreaseStake()
  const { isLoading: isTxPending, isSuccess: isTxConfirmed } = useWaitForTransactionReceipt({
    hash: hash,
  })

  const {
    queryKey: currentDepositQueryKey,
    data: currentDeposit,
    isLoading: isCurrentDepositLoading,
  } = useReadRewardsDistributionDepositById({
    args: [depositId],
    query: {
      enabled: !!address,
    },
  })
  const { queryKey: stakingStateQueryKey } = useReadRewardsDistributionStakingState({
    query: {
      enabled: !!address,
    },
  })

  useEffect(() => {
    if (isTxConfirmed) {
      qc.invalidateQueries({ queryKey: [currentDepositQueryKey] })
      qc.invalidateQueries({ queryKey: [stakingStateQueryKey] })
    }
  }, [isTxConfirmed, qc, currentDepositQueryKey, stakingStateQueryKey])

  return {
    increaseStake,
    isPending,
    isTxPending,
    isTxConfirmed,
    currentDeposit,
    isCurrentDepositLoading,
  }
}
