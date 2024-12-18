'use client'
import { useStake } from '@/lib/hooks/use-stake'
import { formatPrecisionNumber } from '@/lib/utils/formatPrecisionNumber'
import { formatUnits } from 'viem'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Skeleton } from '../ui/skeleton'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

export const TotalSupplyCard = ({
  networkEstimatedApy,
}: {
  networkEstimatedApy: number | undefined
}) => {
  const { isStakingStateLoading, stakingState } = useStake()

  return (
    <Card className="w-full" disableHover>
      <CardHeader>
        <CardTitle className="text-center">Total Supply</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-around gap-8 md:flex-row">
        <div className="h-48 w-48">
          {/* TODO: Add chart */}
          <div className="mt-4 text-center">
            <div className="text-muted-foreground text-sm">Staked</div>
            <div className="font-bold">
              {isStakingStateLoading ? (
                <Skeleton className="h-4 w-16" />
              ) : (
                <span>{formatUnits(stakingState?.totalStaked ?? 0n, 18)} RVR</span>
              )}
            </div>
          </div>
        </div>

        <Tooltip>
          <TooltipTrigger>
            <div className="text-center">
              <div className="flex items-center justify-center text-4xl font-bold">
                {!networkEstimatedApy ? (
                  <Skeleton className="h-10 w-28" />
                ) : (
                  <span>{formatPrecisionNumber(networkEstimatedApy, 2)}%</span>
                )}
              </div>
              <div className="text-muted-foreground text-sm">Estimated APR*</div>
            </div>
          </TooltipTrigger>
          <TooltipContent side="bottom" className="text-foreground max-w-sm bg-gray-80">
            <p>APR may vary and depends on delegation amount or total period reward.</p>
          </TooltipContent>
        </Tooltip>
      </CardContent>
    </Card>
  )
}
