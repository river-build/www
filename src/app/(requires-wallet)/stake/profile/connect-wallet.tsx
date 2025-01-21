import { DelegateAscii } from '@/components/delegate/delegate-ascii'
import { ConnectWalletButton } from '@/components/ui/connect-wallet-button'
import { Typography } from '@/components/ui/typography'
import { cn } from '@/lib/utils'

export const ConnectWalletSection = () => {
  return (
    <section
      className={cn(
        'hero-glow relative w-full overflow-x-clip bg-gray-90',
        'flex w-full flex-col items-start justify-center gap-6',
        'px-4 py-24',
        'min-h-screen items-center',
      )}
    >
      <DelegateAscii />
      <div className="flex flex-col items-center gap-2">
        <Typography
          as="h1"
          size="4xl"
          className="text-[32px] font-semibold leading-[44px] text-gray-10"
        >
          My Stakes
        </Typography>
        <Typography size="sm" as="span" className="text-gray-20">
          View your staked RVR
        </Typography>
      </div>
      <ConnectWalletButton>Connect Wallet</ConnectWalletButton>
    </section>
  )
}
