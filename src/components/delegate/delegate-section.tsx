import { ADDRESS_ZERO, getRiverAddress, RVR_AUTHORIZER, RVR_TOKEN } from '@/constants/contracts'
import { cn } from '@/lib/utils'
import { formatUnits } from 'viem'
import { sepolia } from 'viem/chains'
import { useAccount, useDisconnect, useReadContract, useReadContracts } from 'wagmi'
import { Button } from '../ui/button'
import { Skeleton } from '../ui/skeleton'
import { Typography } from '../ui/typography'
import { WalletAddress } from '../wallet-address'
import { AuthorizeClaimerForm } from './authorize-claimer-form'
import { DelegateForm } from './delegate-form'

export const DelegateSection = () => {
  const { address } = useAccount()
  const { chainId } = useAccount()
  const { disconnect } = useDisconnect()

  const riverToken = useReadContracts({
    allowFailure: false,
    contracts: [
      {
        address: chainId ? getRiverAddress(RVR_TOKEN, chainId) : undefined,
        abi: RVR_TOKEN.abi,
        functionName: 'balanceOf',
        args: address ? [address] : undefined,
      },
      {
        address: chainId ? getRiverAddress(RVR_TOKEN, chainId) : undefined,
        abi: RVR_TOKEN.abi,
        functionName: 'decimals',
      },
    ],
    query: {
      enabled: !!address && !!chainId,
    },
  })

  const delegatee = useReadContract({
    address: chainId ? getRiverAddress(RVR_TOKEN, chainId) : undefined,
    abi: RVR_TOKEN.abi,
    functionName: 'delegates',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address && !!chainId,
    },
  })

  const authorizedClaimer = useReadContract({
    address: chainId ? getRiverAddress(RVR_AUTHORIZER, chainId) : undefined,
    abi: RVR_AUTHORIZER.abi,
    functionName: 'getAuthorizedClaimer',
    args: address ? [address] : undefined,
    query: {
      // TODO: Enable this query when we have a mainnet contract for this
      enabled: !!address && chainId === sepolia.id,
    },
  })

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

        <div className="w-full rounded-3xl border border-solid border-gray-60 bg-gray-80 p-6">
          <div className="flex justify-between gap-4">
            <span className="text-gray-20">Connected:</span>
            {address && <WalletAddress address={address} />}
          </div>
          <div className="flex justify-between">
            <span className="text-gray-20">RVR Balance:</span>
            <span className="text-white">
              {riverToken.isLoading ? (
                <Skeleton className="inline-block h-4 w-20" />
              ) : riverToken.data?.[0] && riverToken.data?.[1] ? (
                formatUnits(riverToken.data[0], riverToken.data[1])
              ) : (
                0
              )}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-20">Delegating to:</span>
            {delegatee.isLoading ? (
              <Skeleton className="inline-block h-4 w-36" />
            ) : delegatee.data && delegatee.data !== ADDRESS_ZERO ? (
              <WalletAddress address={delegatee.data} />
            ) : null}
          </div>
          <div className="flex justify-between">
            <span className="text-gray-20">Authorized claimer:</span>
            {authorizedClaimer.isLoading ? (
              <Skeleton className="inline-block h-4 w-36" />
            ) : authorizedClaimer.data && authorizedClaimer.data !== ADDRESS_ZERO ? (
              <WalletAddress address={authorizedClaimer.data} />
            ) : null}
          </div>
          <Button
            aria-label="Disconnect your wallet"
            variant="secondary"
            className="w-full"
            onClick={() => disconnect()}
          >
            Disconnect
          </Button>
        </div>

        <DelegateForm delegateeQueryKey={delegatee.queryKey} />
        <AuthorizeClaimerForm authorizedClaimerQueryKey={authorizedClaimer.queryKey} />
      </section>
    </section>
  )
}
