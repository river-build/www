'use client'
import { useAccount } from 'wagmi'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

export const TotalSupplyCard = () => {
  const { isConnected } = useAccount()

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
            <div className="font-bold">4,345,345,333 (mock data) RVR</div>
          </div>
        </div>

        <div className="h-48 w-48">
          {/* TODO: Add chart */}
          <div className="mt-4 text-center">
            <div className="text-muted-foreground text-sm">Rewards Claimed</div>
            <div className="font-bold">1,035,345 RVR (mock data)</div>
          </div>
        </div>

        <Tooltip>
          <TooltipTrigger>
            <div className="text-center">
              <div className="text-4xl font-bold">4.3% (mock data)</div>
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
