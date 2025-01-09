'use client'
import {
  useReadRewardsDistributionStakingState,
  useWriteRewardsDistributionStake,
} from '@/contracts'
import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useWaitForTransactionReceipt } from 'wagmi'

export const useStake = () => {
  const qc = useQueryClient()

  const { writeContract: stake, data: hash, isPending } = useWriteRewardsDistributionStake()
  const { isLoading: isTxPending, isSuccess: isTxConfirmed } = useWaitForTransactionReceipt({
    hash: hash,
  })

  const {
    queryKey: stakingStateQueryKey,
    data: stakingState,
    isPending: isStakingStatePending,
  } = useReadRewardsDistributionStakingState()

  useEffect(() => {
    if (isTxConfirmed) {
      qc.invalidateQueries({ queryKey: [stakingStateQueryKey] })
    }
  }, [isTxConfirmed, qc, stakingStateQueryKey])

  return {
    stake,
    isPending,
    isTxPending,
    isTxConfirmed,
    stakingState,
    isStakingStatePending,
  }
}
