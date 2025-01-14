'use client'
import {
  useReadRewardsDistributionDepositById,
  useReadRewardsDistributionStakingState,
  useWriteRewardsDistributionIncreaseStake,
} from '@/contracts'
import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useAccount, useWaitForTransactionReceipt } from 'wagmi'
import { useOperatorsWithDeposits } from './use-stakeable-operators'

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

  const { queryKey: currentDepositQueryKey } = useReadRewardsDistributionDepositById({
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

  const { queryKey: operatorsQueryKey } = useOperatorsWithDeposits()

  useEffect(() => {
    if (isTxConfirmed) {
      qc.invalidateQueries({
        queryKey: [currentDepositQueryKey, stakingStateQueryKey, operatorsQueryKey],
      })
    }
  }, [isTxConfirmed, qc, currentDepositQueryKey, stakingStateQueryKey, operatorsQueryKey])

  return {
    increaseStake,
    isPending,
    isTxPending,
    isTxConfirmed,
  }
}
