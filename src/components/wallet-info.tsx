'use client'

import { ADDRESS_ZERO } from '@/constants/contracts'
import {
  useAuthorizedClaimer,
  useDelegatee,
  useRewardsBalance,
  useRiverToken,
} from '@/lib/hooks/contract-reads'
import { formatUnits } from 'viem'
import { useAccount, useDisconnect } from 'wagmi'
import { Button } from './ui/button'
import { Skeleton } from './ui/skeleton'
import { WalletAddress } from './wallet-address'

type WalletInfoProps = {
  showRvrBalance?: boolean
  showDelegatee?: boolean
  showRewards?: boolean
  showAuthorizedClaimer?: boolean
}
export const WalletInfo = ({
  showRvrBalance,
  showDelegatee,
  showRewards,
  showAuthorizedClaimer,
}: WalletInfoProps) => {
  const { address } = useAccount()
  const { chainId } = useAccount()
  const { disconnect, isPending } = useDisconnect()

  const riverToken = useRiverToken({
    enabled: showRvrBalance && !!address && !!chainId,
  })

  const rewardsBalance = useRewardsBalance({ enabled: showRewards && !!address && !!chainId })

  const delegatee = useDelegatee({ enabled: showDelegatee && !!address && !!chainId })

  const authorizedClaimer = useAuthorizedClaimer({
    enabled: showAuthorizedClaimer && !!address && !!chainId,
  })

  return (
    <div className="w-full rounded-3xl border border-solid border-gray-60 bg-gray-80 p-6">
      <div className="flex justify-between gap-4">
        <span className="text-gray-20">Connected:</span>
        {address && <WalletAddress address={address} />}
      </div>
      {showRvrBalance && (
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
      )}
      {showDelegatee && (
        <div className="flex justify-between">
          <span className="text-gray-20">Delegating to:</span>
          {delegatee.isLoading ? (
            <Skeleton className="inline-block h-4 w-36" />
          ) : delegatee.data && delegatee.data !== ADDRESS_ZERO ? (
            <WalletAddress address={delegatee.data} />
          ) : null}
        </div>
      )}
      {showRewards && (
        <div className="flex justify-between">
          <span className="text-gray-20">Rewards Balance:</span>
          <span className="text-white">
            {rewardsBalance.isLoading ? (
              <Skeleton className="inline-block h-4 w-20" />
            ) : rewardsBalance.data?.[0] && rewardsBalance.data?.[1] ? (
              formatUnits(rewardsBalance.data[0], rewardsBalance.data[1])
            ) : (
              0
            )}
          </span>
        </div>
      )}
      {showAuthorizedClaimer && (
        <div className="flex justify-between">
          <span className="text-gray-20">Authorized claimer:</span>
          {authorizedClaimer.isLoading ? (
            <Skeleton className="inline-block h-4 w-36" />
          ) : authorizedClaimer.data && authorizedClaimer.data !== ADDRESS_ZERO ? (
            <WalletAddress address={authorizedClaimer.data} />
          ) : null}
        </div>
      )}
      <Button
        aria-label="Disconnect your wallet"
        variant="secondary"
        className="w-full"
        isLoading={isPending}
        onClick={() => disconnect()}
      >
        {isPending ? 'Disconnecting...' : 'Disconnect'}
      </Button>
    </div>
  )
}
