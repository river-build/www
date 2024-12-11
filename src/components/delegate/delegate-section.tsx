import { useRedelegate } from '@/lib/hooks/use-redelegate'
import { cn } from '@/lib/utils'
import type { Address } from 'viem'
import { Button } from '../ui/button'
import { Dialog, DialogTrigger } from '../ui/dialog'
import { Typography } from '../ui/typography'
import { WalletInfo } from '../wallet-info'
import { AuthorizeClaimerForm } from './authorize-claimer-form'
import { DelegateForm } from './delegate-form'
import { RedelegateButton } from './redelegate-button'
import { RedelegateDialogContent } from './redelegate-dialog'

const fakeDeposits = Array.from({ length: 4 }, (_, i) => ({
  id: BigInt(i),
  delegatee: ('0x' + i.toString(16).padStart(40, '0')) as Address,
})) satisfies { id: bigint; delegatee: Address }[]

const fakeSingleDeposit = [
  {
    id: 1n,
    delegatee: '0x1234567890' as Address,
  },
]

export const DelegateSection = () => {
  const { deposits } = useRedelegate()

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
        <div className="flex flex-col gap-3">
          <DelegateForm />
          {!deposits || deposits.length === 0 ? null : (
            <>
              <div className="flex flex-col gap-1.5">
                <div className="flex w-full items-center justify-between gap-2">
                  <hr className="w-full border-gray-30" />
                  <p className="text-sm text-gray-20">OR</p>
                  <hr className="w-full border-gray-30" />
                </div>
                <p className="text-sm text-gray-20">
                  You can also redelegate to a previous delegatee
                </p>
                {deposits.length === 1 ? (
                  <RedelegateButton
                    depositId={deposits[0].id}
                    delegatedAddress={deposits[0].delegatee}
                    variant="secondary"
                    showAddress
                  />
                ) : (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="secondary">Redelegate</Button>
                    </DialogTrigger>
                    <RedelegateDialogContent deposits={deposits} />
                  </Dialog>
                )}
              </div>
            </>
          )}
        </div>
        <AuthorizeClaimerForm />
      </section>
    </section>
  )
}
