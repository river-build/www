import { cn } from '@/lib/utils'
import { Typography } from '../ui/typography'
import { WalletInfo } from '../wallet-info'

export const ClaimSection = () => {
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
            Get your tokens brooo
          </Typography>
        </div>

        <WalletInfo showRvrBalance showAuthorizedClaimer />

        <>TODO</>
      </section>
    </section>
  )
}
