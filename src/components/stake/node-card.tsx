'use client'

import { Button } from '@/components/ui/button'
import type { StackableNodeData } from '@/lib/hooks/use-node-data'
import { cn, formatUptime } from '@/lib/utils'
import { MoreVertical } from 'lucide-react'
import { Dialog, DialogTrigger } from '../ui/dialog'
import { Typography } from '../ui/typography'
import { RedelegateDialog, RedelegateDialogContent, RedelegateProvider } from './redelegate'
import { StakeDialogContent } from './stake-to-operator'
import { WithdrawDialogContent } from './withdraw'

export interface NodeCardProps {
  node: StackableNodeData
  allNodes?: StackableNodeData[]
  onMenuClick?: () => void
  className?: string
  showButton?: boolean
  onSelect?: () => void
  ringColor?: string
}

type Status = 'stakeable' | 'staked' | 'locked' | 'can-withdraw'

export function NodeCard({
  node,
  onMenuClick,
  className,
  showButton,
  allNodes,
  onSelect,
  ringColor,
}: NodeCardProps) {
  const estimatedApr = 10 // TODO:
  const withdrawalTime = '10 days' // TODO:
  const amountStaked = false // TODO:
  const name = new URL(node.data.record.url).hostname
  const status = 'stakeable' as Status // TODO:

  return (
    <div
      className={cn('flex flex-col gap-2 rounded-lg bg-[#222026] p-4', className)}
      style={{ '--tw-ring-color': ringColor } as any}
    >
      {/* Header */}
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-sm" style={{ backgroundColor: node.color }} />
        <span className="text-primary text-sm font-medium leading-6" style={{ color: node.color }}>
          {name}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <InfoRow
          label="Health"
          value={
            <>
              {node.data.http20.elapsed} HTTP/2
              <span className="text-[#CECBD8]"> &bull; </span>
              {node.data.grpc.elapsed} gRPC
            </>
          }
        />
        <InfoRow label="Uptime" value={formatUptime(new Date(node.data.grpc.start_time))} />
        <InfoRow label="Commission" value={`${node.data.commissionRatePercentage}%`} />
        <InfoRow
          label="Estimated APR"
          value={
            // <Tooltip>
            //   <TooltipTrigger>
            <span>{estimatedApr}%</span>
            //   </TooltipTrigger>
            //   <TooltipContent className="text-foreground max-w-sm bg-gray-80">
            //     <p>APR may vary and depends on delegation amount or total period reward.</p>
            //   </TooltipContent>
            // </Tooltip>
          }
        />
        {amountStaked && <InfoRow label="Staked" value={<>{amountStaked} RVR</>} />}
      </div>

      {/* Bottom Row */}
      {onSelect && (
        <div className="flex items-center gap-2">
          <Button onClick={onSelect} className="w-full">
            Select
          </Button>
        </div>
      )}
      {showButton ? (
        <div className="flex items-center gap-2">
          {status === 'stakeable' && (
            <Dialog modal>
              <DialogTrigger asChild>
                <Button className="w-full">Stake</Button>
              </DialogTrigger>
              <StakeDialogContent node={node} />
            </Dialog>
          )}
          {status === 'staked' && (
            <RedelegateProvider>
              <RedelegateDialog modal>
                <DialogTrigger asChild>
                  <Button className="w-full">Redelegate</Button>
                </DialogTrigger>
                <RedelegateDialogContent
                  currentNode={node}
                  availableNodes={allNodes || []}
                  depositId={42069n}
                />
              </RedelegateDialog>
            </RedelegateProvider>
          )}
          {status === 'locked' && <Button className="w-full">Withdraw in {withdrawalTime}</Button>}
          {status === 'can-withdraw' && (
            <Dialog modal>
              <DialogTrigger asChild>
                <Button className="w-full">Withdraw</Button>
              </DialogTrigger>
              <WithdrawDialogContent node={node} depositId={42069n} />
            </Dialog>
          )}
          {onMenuClick && (
            <Button size="icon" className="ml-auto h-8 w-8" onClick={onMenuClick}>
              <MoreVertical className="h-4 w-4" />
            </Button>
          )}
        </div>
      ) : null}
    </div>
  )
}

const InfoRow = ({ label, value }: { label: React.ReactNode; value: React.ReactNode }) => {
  return (
    <div className="flex gap-1.5">
      <Typography as="span" className="text-[#8A8791]">
        {label}
      </Typography>
      <Typography as="span" className="truncate text-[#CECBD8]">
        {value}
      </Typography>
    </div>
  )
}
