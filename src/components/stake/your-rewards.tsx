'use client'

import { useClaim } from '@/lib/hooks/use-claim'
import { formatUnits } from 'viem'
import { useAccount } from 'wagmi'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Skeleton } from '../ui/skeleton'

export const YourRewardsCard = () => {
  const { isConnected, address } = useAccount()
  const {
    isPending,
    claimableBalance,
    isTxConfirmed,
    isLoadingClaimableBalance,
    isTxPending,
    claimReward,
  } = useClaim()
  return (
    <Card disableHover>
      <CardHeader>
        <CardTitle className="text-center">Your Rewards</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center">
          <span className="text-2xl">
            {isConnected ? (
              isLoadingClaimableBalance ? (
                <Skeleton className="h-4 w-16" />
              ) : (
                formatUnits(claimableBalance ?? 0n, 18)
              )
            ) : (
              '-'
            )}
          </span>
        </div>
        <Button
          className="w-full"
          disabled={!isConnected || claimableBalance === 0n}
          isLoading={isPending || isTxPending}
          onClick={() =>
            claimReward({
              args: [
                // beneficiary - in the case of this button - its the connected wallet
                // TODO: advanced mode: allow to set any address
                // including wallets that the user is an authorized claimer (?)
                address!,
                // recipient - in the case of this button - its the connected wallet
                // but it could be any other address - including mainnet address
                // TODO: advanced mode: allow to set any address
                address!,
              ],
            })
          }
        >
          {isConnected ? 'Claim Rewards' : 'Connect Wallet to Claim Rewards'}
        </Button>
      </CardContent>
    </Card>
  )
}
