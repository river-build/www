import { cn } from '@/lib/utils'
import { useAccount, useSwitchChain } from 'wagmi'
import { Typography } from '../ui/typography'
import { WalletInfo } from '../wallet-info'
import { Claimable } from './claimable'
import {  base, baseSepolia } from 'viem/chains'
import { Button } from '../ui/button'

export const ClaimPage = () => {
  const { chainId } = useAccount()
  const { switchChain } = useSwitchChain()

  const isBase = chainId === base.id || chainId === baseSepolia.id

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
          {/* It's impossible to the disconnect user to get to this page without being on the base network
              But they can change the network after, that's why this toast is necessary  */}
          {!isBase && (
            <div className="flex  items-center justify-between gap-2">
              <Typography
                size="sm"
                className="text-red-400 "
              >
                You can only claim on the Base chain.
              </Typography>
                <Button size="sm" onClick={() => switchChain({ chainId: base.id })}>Switch</Button>
            </div>
          )}
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

        <div className="flex flex-col gap-4 pt-6">
          <Claimable type="mainnet" />
          <Claimable type="delegator" />
          <Claimable type="operator" />
        </div>
      </section>
    </section>
  )
}
