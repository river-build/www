'use client'

import { Button } from '@/components/ui/button'
import type { StackableNodeData } from '@/lib/hooks/use-node-data'
import { useWithdraw } from '@/lib/hooks/use-withdraw'
import { useWithdrawTimer } from '@/lib/hooks/use-withdraw-timer'
import { cn, formatUptime } from '@/lib/utils'
import { formatPrecisionNumber } from '@/lib/utils/formatPrecisionNumber'
import { ArrowRightLeftIcon, EllipsisVertical, LogOutIcon } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Dialog, DialogTrigger } from '../ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
import { Typography } from '../ui/typography'
import type { StackableNodeDataWithDeposits } from './all-operators'
import { IncreaseStakeDialogContent } from './increase-stake'
import { RedelegateDialog, RedelegateDialogContent, RedelegateProvider } from './redelegate'
import { StakeDialogContent } from './stake-to-operator'
import { WithdrawDialogContent } from './withdraw'

export interface NodeCardProps {
  node: StackableNodeDataWithDeposits
  allNodes?: StackableNodeData[]
  className?: string
  showButton?: boolean
  onSelect?: () => void
  ringColor?: string
}

type Status = 'stakeable' | 'staked' | 'locked' | 'can-withdraw'

export function NodeCard({
  node,
  className,
  showButton,
  allNodes,
  onSelect,
  ringColor,
}: NodeCardProps) {
  const name = new URL(node.data.record.url).hostname
  const { lockCooldown } = useWithdraw(node.deposits?.depositId)
  const withdrawTimer = useWithdrawTimer(lockCooldown)

  const [openRedelegate, setOpenRedelegate] = useState(false)
  const [openWithdraw, setOpenWithdraw] = useState(false)

  const status = useMemo(() => {
    if (!node.deposits) return 'stakeable'
    if (node.deposits.pendingWithdrawal > 0n) {
      // If there's a pending withdrawal, check if we have a timer
      return withdrawTimer ? 'locked' : 'can-withdraw'
    }
    if (node.deposits.amount > 0n) return 'staked'
    return 'stakeable'
  }, [node.deposits, withdrawTimer]) satisfies Status

  return (
    <div
      className={cn('flex flex-col gap-2 rounded-lg bg-[#222026] p-4', className)}
      style={{ '--tw-ring-color': ringColor } as any}
    >
      {/* Header */}
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rotate-45 rounded-sm" style={{ backgroundColor: node.color }} />
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
        <InfoRow label="Commission" value={`${node.data.commissionRate}%`} />
        <InfoRow
          label="Estimated APR*"
          value={
            <Tooltip>
              <TooltipTrigger>
                <span>{formatPrecisionNumber(node.data.estimatedApr, 2)}%</span>
              </TooltipTrigger>
              <TooltipContent className="text-foreground max-w-sm text-wrap bg-gray-80 text-center">
                APR may vary and depends on delegation amount or total period reward.
              </TooltipContent>
            </Tooltip>
          }
        />
        {/* TODO: unsure if we need to format this to 18 decimals - test later */}
        {node.deposits?.amount && (
          <InfoRow label="Staked" value={<>{node.deposits.amount} RVR</>} />
        )}
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
        <div className="flex items-center gap-1">
          {status === 'stakeable' && (
            <Dialog modal>
              <DialogTrigger asChild>
                <Button className="w-full">Stake</Button>
              </DialogTrigger>
              <StakeDialogContent node={node} />
            </Dialog>
          )}
          {status === 'staked' && node.deposits?.depositId && (
            <>
              <Dialog modal>
                <DialogTrigger asChild>
                  <Button className="w-full">Increase Stake</Button>
                </DialogTrigger>
                <IncreaseStakeDialogContent node={node} depositId={node.deposits.depositId} />
              </Dialog>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className={cn(
                      'inline-flex items-center justify-center rounded-full bg-white p-3',
                      'h-11 w-11 min-w-11',
                    )}
                  >
                    <EllipsisVertical className="h-4 w-4 text-black" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40 space-y-1">
                  <DropdownMenuItem
                    className="gap-2"
                    onClick={() => setOpenRedelegate(true)}
                    asChild
                  >
                    <div className="flex items-center gap-2">
                      <ArrowRightLeftIcon className="h-4 w-4" />
                      <span>Redelegate</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="gap-2" onClick={() => setOpenWithdraw(true)} asChild>
                    <div className="flex items-center gap-2">
                      <LogOutIcon className="h-4 w-4" />
                      <span>Withdraw</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
          {status === 'locked' && (
            <Button className="w-full" disabled>
              Withdraw in {withdrawTimer}
            </Button>
          )}
          {status === 'can-withdraw' && node.deposits?.depositId && (
            <Dialog modal>
              <DialogTrigger asChild>
                <Button className="w-full">Withdraw</Button>
              </DialogTrigger>
              <WithdrawDialogContent node={node} depositId={node.deposits.depositId} />
            </Dialog>
          )}
        </div>
      ) : null}

      <RedelegateProvider>
        <RedelegateDialog open={openRedelegate} onOpenChange={setOpenRedelegate} modal>
          <RedelegateDialogContent
            currentNode={node}
            availableNodes={allNodes || []}
            depositId={node.deposits?.depositId!}
          />
        </RedelegateDialog>
      </RedelegateProvider>

      <Dialog modal open={openWithdraw} onOpenChange={setOpenWithdraw}>
        <WithdrawDialogContent node={node} depositId={node.deposits?.depositId!} />
      </Dialog>
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
