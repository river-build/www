'use client'

import {
  useReadRewardsDistributionStakedByDepositor,
  useReadRiverTokenBalanceOf,
} from '@/contracts'
import { cn } from '@/lib/utils'
import { formatRVRAmount } from '@/lib/utils/formatRVRAmount'
import Link from 'next/link'
import { useAccount } from 'wagmi'
import { buttonVariants } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { ConnectWalletButton } from '../ui/connect-wallet-button'
import { Skeleton } from '../ui/skeleton'

export const YourAccountCard = () => {
  const { isConnected, address } = useAccount()
  const { data: balance, isPending: isBalancePending } = useReadRiverTokenBalanceOf({
    args: [address!],
    query: { enabled: isConnected && !!address },
  })

  const { data: stakedByUser, isPending: isStakedByUserPending } =
    useReadRewardsDistributionStakedByDepositor({
      args: [address!],
      query: { enabled: isConnected && !!address },
    })

  return (
    <Card className={isConnected ? '' : 'col-span-2'} disableHover>
      <CardHeader>
        <CardTitle className="text-center">Your Account</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {isConnected ? (
          <>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Wallet Balance</span>
              {isConnected ? (
                isBalancePending ? (
                  <Skeleton className="h-4 w-16" />
                ) : (
                  <span>{formatRVRAmount(balance ?? 0n)} RVR</span>
                )
              ) : (
                <span>-</span>
              )}
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Staked</span>
              {isConnected ? (
                isStakedByUserPending ? (
                  <Skeleton className="h-4 w-16" />
                ) : (
                  <span>{formatRVRAmount(stakedByUser ?? 0n)} RVR</span>
                )
              ) : (
                <span>-</span>
              )}
            </div>
            <Link
              href="/stake/profile"
              className={cn(
                buttonVariants({ variant: 'primary' }),
                'w-full bg-gray-10 text-gray-90',
              )}
            >
              View Account
            </Link>
          </>
        ) : (
          <>
            <p className="text-center text-gray-20">Log in to view your account</p>
            <ConnectWalletButton className="w-full">Log In</ConnectWalletButton>
          </>
        )}
      </CardContent>
    </Card>
  )
}
