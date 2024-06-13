import {
  riverClaimerAbi,
  riverClaimerAddress,
  useReadRiverClaimer,
  useReadRiverTokenBalanceOf,
  useReadRiverTokenDecimals,
} from '@/contracts'
import { useQueryClient } from '@tanstack/react-query'
import Confetti from 'js-confetti'
import { useEffect, useMemo } from 'react'
import { formatUnits } from 'viem'
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from 'wagmi'
import { Button } from '../ui/button'
import { Skeleton } from '../ui/skeleton'
import { Typography } from '../ui/typography'

const text = {
  operator: 'Operator rewards',
  mainnet: 'Mainnet rewards',
  delegator: 'Delegator rewards',
}

const getBalance = {
  operator: 'getClaimableAmountForOperator',
  mainnet: 'getClaimableAmountForAuthorizedClaimer',
  delegator: 'getClaimableAmountForDelegator',
} as const

type Props = {
  type: 'operator' | 'mainnet' | 'delegator'
}

export const Claimable = ({ type }: Props) => {
  const { address, chainId } = useAccount()

  const { queryKey: riverBalanceQueryKey } = useReadRiverTokenBalanceOf({
    args: [address!],
  })
  const { data: decimals, isLoading: isLoadingDecimals } = useReadRiverTokenDecimals()

  const {
    data: claimableBalance,
    isLoading: isLoadingClaimableBalance,
    queryKey: riverClaimBalanceQueryKey,
    error: riverClaimBalanceError,
  } = useReadRiverClaimer({ functionName: getBalance[type] })
  const { data: hash, writeContract, isPending } = useWriteContract()
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash })
  const qc = useQueryClient()

  useEffect(() => {
    if (riverClaimBalanceError) {
      console.error('riverClaimBalanceError', riverClaimBalanceError)
    }
  }, [riverClaimBalanceError])

  const confetti = useMemo(() => new Confetti(), [])

  useEffect(() => {
    if (isConfirmed) {
      Promise.all([
        qc.invalidateQueries({ queryKey: [riverBalanceQueryKey] }),
        qc.invalidateQueries({ queryKey: [riverClaimBalanceQueryKey] }),
      ])
      confetti
        .addConfetti({
          confettiColors: ['#F7F7F8', '#3A3941', '#959499'],
          confettiNumber: 500,
        })
        .then(() => {
          confetti.clearCanvas()
        })
    }
  }, [confetti, isConfirmed, qc, riverBalanceQueryKey, riverClaimBalanceQueryKey])

  return (
    <section className="flex flex-col gap-2">
      <Typography as="h2" size="lg" className="text-2xl font-semibold leading-[44px] text-gray-10">
        {text[type]}
      </Typography>
      <div className="flex items-center justify-between gap-2">
        {isLoadingClaimableBalance || isLoadingDecimals ? (
          <Skeleton className="inline-block h-6 w-32" />
        ) : (
          <Typography as="span" size="md" className="text-gray-20">
            {!claimableBalance || !decimals
              ? 'No claimable balance'
              : formatUnits(claimableBalance, decimals)}
          </Typography>
        )}
        <Button
          type="submit"
          isLoading={isPending}
          disabled={!claimableBalance || claimableBalance === 0n}
          aria-label="Claim rewards"
          onClick={() => {
            if (!chainId) return
            writeContract({
              address: riverClaimerAddress[chainId as keyof typeof riverClaimerAddress],
              abi: riverClaimerAbi,
              functionName: `${type}Claim`,
            })
          }}
        >
          {isConfirmed ? 'Claimed' : isPending || isConfirming ? 'Claiming...' : 'Claim'}
        </Button>
      </div>
    </section>
  )
}
