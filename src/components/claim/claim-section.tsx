import { cn } from '@/lib/utils'
import Confetti from 'js-confetti'
import { useEffect, useMemo, useState } from 'react'
import { useWaitForTransactionReceipt, useWriteContract } from 'wagmi'
import { Button } from '../ui/button'
import { Typography } from '../ui/typography'
import { WalletInfo } from '../wallet-info'
import { Counter } from './counter'

export const ClaimSection = () => {
  const { data: hash, writeContract, isPending } = useWriteContract()
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash })

  const confetti = useMemo(() => new Confetti(), [])

  useEffect(() => {
    if (isConfirmed) {
      confetti
        .addConfetti({
          confettiColors: ['#F7F7F8', '#3A3941', '#959499'],
          confettiNumber: 500,
        })
        .then(() => {
          confetti.clearCanvas()
        })
    }
  }, [confetti, isConfirmed])

  const [count, setCount] = useState(420)
  return (
    <section
      className={cn(
        'hero-glow relative w-full overflow-x-clip bg-gray-90 md:min-h-screen',
        'flex w-full flex-col items-center',
        'pb-24 pt-[88px]',
      )}
    >
      <section className={cn('flex w-full flex-col gap-6 px-4', 'sm:max-w-lg')}>
        <div className="flex flex-col gap-1.5 text-balance">
          <Typography
            as="h1"
            size="3xl"
            className="text-2xl font-semibold leading-[44px] text-gray-10"
          >
            Claim
          </Typography>

          <Typography as="span" size="md" className="text-gray-20">
            Claim your rewards
          </Typography>
        </div>

        <WalletInfo showRvrBalance showAuthorizedClaimer />

        <div className="flex flex-col items-center gap-4">
          <Counter value={count} />
          <Button type="submit" isLoading={isPending} aria-label="Claim rewards">
            {isConfirmed ? 'Claimed' : isPending || isConfirming ? 'Claiming...' : 'Claim'}
          </Button>
        </div>
      </section>
    </section>
  )
}
