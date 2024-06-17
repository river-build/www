import {
  riverClaimerAbi,
  riverClaimerAddress,
  useReadBaseRiverTokenBalanceOf,
  useReadRiverClaimer,
  useReadRiverTokenBalanceOf,
} from '@/contracts'
import { useQueryClient } from '@tanstack/react-query'
import Confetti from 'js-confetti'
import { useEffect, useMemo } from 'react'
import { formatUnits } from 'viem'
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from 'wagmi'
import { Button } from '../ui/button'
import { Skeleton } from '../ui/skeleton'
import { Typography } from '../ui/typography'
import { toast } from '../ui/use-toast'
import { cn } from '@/lib/utils'

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
  const qc = useQueryClient()
  const confetti = useMemo(() => new Confetti(), [])
  const { queryKey: riverBalanceQueryKey } = useReadRiverTokenBalanceOf({
    args: [address!],
    query: {
      enabled: false,
    }
  })
  const { queryKey: riverBaseBalanceQueryKey } = useReadBaseRiverTokenBalanceOf({
    args: [address!],
    query: {
      enabled: false,
    }
  })

  const {
    data: claimableBalance,
    isLoading: isLoadingClaimableBalance,
    queryKey: riverClaimBalanceQueryKey,
  } = useReadRiverClaimer({ 
    functionName: getBalance[type],
    args: [address!],
    query: { 
      enabled: !!address 
    }
  })
  const { data: hash, writeContract, isPending } = useWriteContract({
    mutation: {
      onError: (e) => {
        toast({
          title: 'Error',
          description: e.name,
        })
      }
    }
  })
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash })

  useEffect(() => {
    if (isConfirmed) {
      Promise.all([
        confetti
          .addConfetti({
            confettiColors: ['#F7F7F8', '#3A3941', '#959499'],
            confettiNumber: 250,
          })
          .then(() => {
            confetti.clearCanvas()
          }),
        qc.invalidateQueries({ queryKey: [riverBalanceQueryKey] }),
        qc.invalidateQueries({ queryKey: [riverBaseBalanceQueryKey] }),
        qc.invalidateQueries({ queryKey: [riverClaimBalanceQueryKey] }),
      ])
    }
  }, [confetti, isConfirmed, qc, riverBalanceQueryKey, riverBaseBalanceQueryKey, riverClaimBalanceQueryKey])

  return (
    <section className="flex flex-col gap-2">
      <Typography as="h2" size="lg" className="text-2xl font-semibold leading-[44px] text-gray-10">
        {text[type]}
      </Typography>
      <div className="flex items-center justify-between gap-2">
        {isLoadingClaimableBalance  ? (
          <Skeleton className="inline-block h-6 w-32" />
        ) : (
          <Typography as="span" size="md" className={cn("text-gray-20", !!claimableBalance && 'font-mono tabular-nums')}> 
            {!claimableBalance
              ? 'No claimable balance'
              : formatUnits(claimableBalance, 18)}
          </Typography>
        )}
        <Button
          size="sm"
          type="submit"
          isLoading={isPending || isConfirming}
          aria-label="Claim rewards"
          onClick={() => {
            if (!claimableBalance || claimableBalance === 0n) {
              toast({
                title: 'No claimable balance',
                description: `You don't have any claimable balance.`,
                duration: 2500,
              })
              return
            }
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
