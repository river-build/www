'use client'
import {
  useReadRewardsDistributionStakingState,
  useWriteRewardsDistributionStake,
} from '@/contracts'
import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useWaitForTransactionReceipt } from 'wagmi'
import { useOperatorsWithDeposits } from './use-stakeable-operators'

export const useStake = () => {
  const qc = useQueryClient()

  const {
    writeContract: stake,
    data: hash,
    isPending,
  } = useWriteRewardsDistributionStake({
    mutation: {
      onError: (error) => {
        console.error(error)
      },
    },
  })
  const { isLoading: isTxPending, isSuccess: isTxConfirmed } = useWaitForTransactionReceipt({
    hash: hash,
  })

  const {
    queryKey: stakingStateQueryKey,
    data: stakingState,
    isPending: isStakingStatePending,
  } = useReadRewardsDistributionStakingState()
  const { queryKey: operatorsQueryKey } = useOperatorsWithDeposits()

  useEffect(() => {
    if (isTxConfirmed) {
      qc.invalidateQueries({ queryKey: [stakingStateQueryKey, operatorsQueryKey] })
    }
  }, [isTxConfirmed, qc, stakingStateQueryKey, operatorsQueryKey])

  return {
    stake,
    isPending,
    isTxPending,
    isTxConfirmed,
    stakingState,
    isStakingStatePending,
  }
}
