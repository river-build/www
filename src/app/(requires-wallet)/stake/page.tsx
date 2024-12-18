import { AllOperators } from '@/components/stake/all-operators'
import { TotalSupplyCard } from '@/components/stake/total-supply'
import { YourAccountCard } from '@/components/stake/your-account'
import { YourRewardsCard } from '@/components/stake/your-rewards'
import { SwitchToBase } from '@/components/switch-to-base'
import { getStakeableNodes } from '@/data/requests'
import { formatStackableNodeData } from '@/lib/hooks/use-node-data'
import { cn } from '@/lib/utils'
import { wagmiAdapter } from '@/lib/wagmi'
import { headers } from 'next/headers'
import { baseSepolia } from 'viem/chains'
import { cookieToInitialState } from 'wagmi'

// keep in cache for 1 minute
export const revalidate = 60

const getSsrChainId = () => {
  return cookieToInitialState(wagmiAdapter.wagmiConfig, headers().get('cookie'))?.chainId
}

const StakePage = async () => {
  // Get data from SSR
  // live data probably doesnt make sense here.
  const chainId = getSsrChainId()
  const initialData = await getStakeableNodes(chainId === baseSepolia.id ? 'gamma' : 'omega').catch(
    () => undefined,
  )
  const operators = formatStackableNodeData(initialData?.nodes)

  return (
    <section
      className={cn(
        'hero-glow relative w-full overflow-x-clip bg-gray-90 text-white',
        'pb-24 pt-[88px]',
      )}
    >
      <div className="container space-y-12 px-4 md:px-8 xl:max-w-screen-xl">
        <SwitchToBase />

        <TotalSupplyCard networkEstimatedApy={initialData?.networkEstimatedApy || 0} />
        <div className="grid gap-6 md:grid-cols-2">
          <YourAccountCard />
          <YourRewardsCard />
        </div>
        <AllOperators operators={operators} />
      </div>
    </section>
  )
}

export default StakePage
