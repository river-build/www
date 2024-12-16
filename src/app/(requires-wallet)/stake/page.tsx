import { NodeCard } from '@/components/stake/node-card'
import { TotalSupplyCard } from '@/components/stake/total-supply'
import { YourAccountCard } from '@/components/stake/your-account'
import { YourRewardsCard } from '@/components/stake/your-rewards'
import { SwitchToBase } from '@/components/switch-to-base'
import { getStakeableNodes } from '@/data/requests'
import { formatStackableNodeData } from '@/lib/hooks/use-node-data'
import { cn } from '@/lib/utils'

const totalSupplyData = [
  { name: 'Staked', value: 4345345333, color: 'green' },
  { name: 'Unstaked', value: 1035345, color: 'gray' },
]

const rewardsClaimedData = [
  { name: 'Claimed', value: 1035345, color: 'hsl(var(--chart-3))' },
  { name: 'Unclaimed', value: 4345345333 - 1035345, color: 'hsl(var(--muted))' },
]

const colors = [
  '#1DDCF2',
  '#AFDD79',
  '#FED83D',
  '#C740F2',
  '#9558FA',
  '#FEA56F',
  '#FF60B2',
  '#FEA56F',
  '#DBDE54',
]

const StakePage = async () => {
  // Get data from SSR
  // live data probably doesnt make sense here.
  const initialData = await getStakeableNodes().catch(() => undefined)
  const operators = formatStackableNodeData(initialData)

  return (
    <section
      className={cn(
        'hero-glow relative w-full overflow-x-clip bg-gray-90 text-white',
        'pb-24 pt-[88px]',
      )}
    >
      <div className="container space-y-12 px-4 md:px-8 xl:max-w-screen-xl">
        <SwitchToBase />

        <TotalSupplyCard />
        <div className="grid gap-6 md:grid-cols-2">
          <YourAccountCard />
          <YourRewardsCard />
        </div>
        <div id="all-operators">
          <h2 className="mb-4 text-center text-2xl font-bold">All Operators</h2>
          <p className="text-muted-foreground mb-6 text-center text-sm">
            To distribute power on the network, please delegate to top performing operators.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* TODO: this page wont be live fetching node data - right? */}
            {operators.map((operator) => (
              <NodeCard key={operator.id} node={operator} showButton />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StakePage
