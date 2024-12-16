'use client'
import {
  useReadRewardsDistributionStakingState,
  useWriteRewardsDistributionIncreaseStake,
} from '@/contracts'
import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useAccount, useWaitForTransactionReceipt } from 'wagmi'

export const useIncreaseStake = () => {
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
    queryKey: stakingStateQueryKey,
    data: stakingState,
    isLoading: isStakingStateLoading,
  } = useReadRewardsDistributionStakingState({
    query: {
      enabled: !!address,
    },
  })

  useEffect(() => {
    if (isTxConfirmed) {
      qc.invalidateQueries({ queryKey: [stakingStateQueryKey] })
    }
  }, [isTxConfirmed])

  return {
    increaseStake,
    isPending,
    isTxPending,
    isTxConfirmed,
    stakingState,
    isStakingStateLoading,
  }
}
