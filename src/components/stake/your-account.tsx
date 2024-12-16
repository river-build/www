'use client'

import { useReadRiverTokenBalanceOf } from '@/contracts'
import { useStake } from '@/lib/hooks/use-stake'
import { useEffect, useRef } from 'react'
import { formatUnits } from 'viem'
import { useAccount } from 'wagmi'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Skeleton } from '../ui/skeleton'

export const YourAccountCard = () => {
  const { isConnected, address } = useAccount()
  const { data: balance, isLoading: isBalanceLoading } = useReadRiverTokenBalanceOf({
    args: [address!],
    query: { enabled: isConnected && !!address },
  })
  const { stakingState, isStakingStateLoading } = useStake()
  const allOperatorsListRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    // not getting the from the parent with useRef
    // because we dont want the parent to be a client component
    allOperatorsListRef.current = document.getElementById('all-operators')
    console.log(allOperatorsListRef.current)
  }, [])

  return (
    <Card disableHover>
      <CardHeader>
        <CardTitle className="text-center">Your Account</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Wallet Balance</span>
          <span>
            {!isConnected && '-'}
            {isConnected && isBalanceLoading ? (
              <Skeleton className="h-4 w-16" />
            ) : (
              <span>{formatUnits(balance ?? 0n, 18)}</span>
            )}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Staked</span>
          <span>
            {!isConnected && '-'}
            {isConnected && isStakingStateLoading ? (
              <Skeleton className="h-4 w-16" />
            ) : (
              <span>{formatUnits(stakingState?.totalStaked ?? 0n, 18)}</span>
            )}
          </span>
        </div>
        <Button
          className="w-full"
          disabled={!isConnected}
          // TODO: make this button a wallet connect button
          onClick={() => allOperatorsListRef.current?.scrollIntoView({ behavior: 'smooth' })}
        >
          {isConnected ? 'Stake to Operator' : 'Connect Wallet to Stake'}
        </Button>
      </CardContent>
    </Card>
  )
}
