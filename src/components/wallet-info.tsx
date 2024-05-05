'use client'

import {
  useReadRiverAuthorizerGetAuthorizedClaimer,
  useReadRiverTokenBalanceOf,
  useReadRiverTokenDecimals,
  useReadRiverTokenDelegates,
} from '@/contracts'
import { useMemo } from 'react'
import { formatUnits, zeroAddress } from 'viem'
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
  const { disconnect, isPending } = useDisconnect()

  const riverBalance = useReadRiverTokenBalanceOf({
    args: [address!],
    query: {
      enabled: showRvrBalance && !!address,
    },
  })
  const riverDecimals = useReadRiverTokenDecimals({
    query: {
      enabled: showRvrBalance && !!address,
    },
  })
  const isRiverTokenLoading = useMemo(
    () => riverBalance.isLoading || riverDecimals.isLoading,
    [riverBalance.isLoading, riverDecimals.isLoading],
  )

  const delegatee = useReadRiverTokenDelegates({
    args: [address!],
    query: { enabled: showDelegatee && !!address },
  })

  const authorizedClaimer = useReadRiverAuthorizerGetAuthorizedClaimer({
    args: [address!],
    query: {
      enabled: showAuthorizedClaimer && !!address,
    },
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
            {isRiverTokenLoading ? (
              <Skeleton className="inline-block h-4 w-20" />
            ) : riverBalance.data && riverDecimals.data ? (
              formatUnits(riverBalance.data, riverDecimals.data)
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
          ) : delegatee.data && delegatee.data !== zeroAddress ? (
            <WalletAddress address={delegatee.data} />
          ) : null}
        </div>
      )}
      {/* {showRewards && (
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
      )} */}
      {showAuthorizedClaimer && (
        <div className="flex justify-between">
          <span className="text-gray-20">Authorized claimer:</span>
          {authorizedClaimer.isLoading ? (
            <Skeleton className="inline-block h-4 w-36" />
          ) : authorizedClaimer.data && authorizedClaimer.data !== zeroAddress ? (
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
