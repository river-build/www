import { cn } from '@/lib/utils'
import { Typography } from '../ui/typography'
import { WalletInfo } from '../wallet-info'
import { AuthorizeClaimerForm } from './authorize-claimer-form'
import { DelegateForm } from './delegate-form'

export const DelegateSection = () => {
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
            Delegate
          </Typography>

          <Typography as="span" size="md" className="text-gray-20">
            Let someone you trust manage your RVR. They can make transfers or spend it for you.
          </Typography>
        </div>
        <WalletInfo showRvrBalance showDelegatee showAuthorizedClaimer />
        <DelegateForm />
        <AuthorizeClaimerForm />
      </section>
    </section>
  )
}
