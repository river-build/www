'use client'

import { Button } from '@/components/ui/button'
import type { StackableOperator } from '@/data/requests'
import { useWithdraw } from '@/lib/hooks/use-withdraw'
import { useWithdrawTimer } from '@/lib/hooks/use-withdraw-timer'
import { cn, formatUptime } from '@/lib/utils'
import { formatPrecisionNumber } from '@/lib/utils/formatPrecisionNumber'
import { ArrowRightLeftIcon, EllipsisVertical, InfoIcon, LogOutIcon, XIcon } from 'lucide-react'
import { useMemo, useState } from 'react'
import { formatUnits } from 'viem'
import { Dialog, DialogTrigger } from '../ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
import { Typography } from '../ui/typography'
import { toast } from '../ui/use-toast'
import { IncreaseStakeDialogContent } from './increase-stake'
import { InitiateWithdrawDialogContent } from './initiate-withdraw'
import { RedelegateDialog, RedelegateDialogContent, RedelegateProvider } from './redelegate'
import { StakeDialogContent } from './stake-to-operator'
import { WithdrawDialogContent } from './withdraw'

export interface NodeCardProps {
  operator: StackableOperator
  deposits?: {
    depositId: bigint
    amount: bigint
    pendingWithdrawal: bigint
  }
  allOperators?: StackableOperator[]
  className?: string
  showButton?: boolean
  button?: React.ReactNode
  onSelect?: (operator: StackableOperator) => void
  ringColor?: string
}

type StakeState = 'stakeable' | 'staked' | 'locked' | 'can-withdraw'

export function OperatorCard({
  operator,
  deposits,
  className,
  showButton,
  allOperators,
  button,
  ringColor,
}: NodeCardProps) {
  const depositId = deposits?.depositId ?? 1n // TODO: Remove this
  const { lockCooldown } = useWithdraw(depositId)
  const withdrawTimer = useWithdrawTimer(lockCooldown)

  const [openRedelegate, setOpenRedelegate] = useState(false)
  const [openWithdraw, setOpenWithdraw] = useState(false)
  const [openCancelWithdraw, setOpenCancelWithdraw] = useState(false)

  const stakeState = useMemo(() => {
    if (!deposits) return 'stakeable'
    if (deposits.pendingWithdrawal > 0n) {
      // If there's a pending withdrawal, check if we have a timer
      return withdrawTimer ? 'locked' : 'can-withdraw'
    }
    if (deposits.amount > 0n) return 'staked'
    return 'stakeable'
  }, [deposits, withdrawTimer]) satisfies StakeState

  return (
    <div
      className={cn('flex flex-col gap-2 rounded-lg bg-[#222026] p-4', className)}
      style={{ '--tw-ring-color': ringColor } as any}
    >
      {/* Header */}
      <div className="flex flex-col justify-center gap-2">
        <div className="size-12 rounded-lg bg-gray-20" />
        <span className="text-primary text-lg font-medium leading-6 text-gray-10">
          {operator.name}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <InfoRow
          label="Health"
          value={
            <>
              {operator.metrics.http20}ms HTTP
              <span className="text-[#CECBD8]"> &bull; </span>
              {operator.metrics.grpc}ms gRPC
            </>
          }
        />
        <InfoRow label="Uptime" value={formatUptime(new Date(operator.metrics.grpc_start_time))} />
        <InfoRow label="Commission" value={`${operator.commissionPercentage}%`} />
        <InfoRow
          label="Estimated APR"
          value={
            <Tooltip>
              <TooltipTrigger className="inline-flex items-center gap-1.5">
                <span>{formatPrecisionNumber(operator.estimatedApr, 2)}%</span>
                <InfoIcon className="size-4 text-[#EAEAEA]" />
              </TooltipTrigger>
              <TooltipContent className="text-foreground max-w-sm text-wrap bg-gray-80 text-center">
                APR may vary and depends on delegation amount or total period reward.
              </TooltipContent>
            </Tooltip>
          }
        />
        {deposits?.amount && (
          <InfoRow label="Staked" variant="staked" value={<>{deposits.amount} RVR</>} />
        )}
      </div>

      {/* Bottom Row */}
      {button && <div className="flex items-center gap-2">{button}</div>}
      {showButton ? (
        <div className="flex items-center gap-1">
          {stakeState === 'stakeable' && (
            <Dialog modal>
              <DialogTrigger asChild>
                <Button className="w-full">Stake</Button>
              </DialogTrigger>
              <StakeDialogContent
                operator={operator}
                onStakeFinish={(amount) => {
                  toast({
                    title: 'Stake finished',
                    description: `You have staked ${formatUnits(BigInt(amount), 18)} RVR to ${operator.name}`,
                  })
                }}
              />
            </Dialog>
          )}
          {stakeState === 'staked' && deposits?.depositId && (
            <>
              <Dialog modal>
                <DialogTrigger asChild>
                  <Button className="w-full">Increase Stake</Button>
                </DialogTrigger>
                <IncreaseStakeDialogContent operator={operator} depositId={depositId} />
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
          {stakeState === 'locked' && (
            <>
              <Button className="w-full" disabled>
                Withdraw in {withdrawTimer}
              </Button>
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
                <DropdownMenuContent align="end" className="w-44 space-y-1">
                  <DropdownMenuItem
                    className="gap-2"
                    onClick={() => setOpenCancelWithdraw(true)}
                    asChild
                  >
                    <div className="flex items-center gap-2">
                      <XIcon className="h-4 w-4" />
                      <span>Cancel Withdraw</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
          {stakeState === 'can-withdraw' && depositId && (
            <>
              <Dialog modal>
                <DialogTrigger asChild>
                  <Button className="w-full">Withdraw</Button>
                </DialogTrigger>
                <WithdrawDialogContent
                  operator={operator}
                  depositId={depositId}
                  onWithdrawFinish={(amount) => {
                    setOpenWithdraw(false)
                    toast({
                      title: 'Withdraw finished.',
                      description: `You have withdrawn ${formatUnits(BigInt(amount), 18)} RVR.`,
                    })
                  }}
                />
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
                <DropdownMenuContent align="end" className="w-44 space-y-1">
                  <DropdownMenuItem
                    className="gap-2"
                    onClick={() => setOpenCancelWithdraw(true)}
                    asChild
                  >
                    <div className="flex items-center gap-2">
                      <XIcon className="h-4 w-4" />
                      <span>Cancel Withdraw</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
        </div>
      ) : null}

      <RedelegateProvider>
        <RedelegateDialog open={openRedelegate} onOpenChange={setOpenRedelegate} modal>
          <RedelegateDialogContent
            currentOperator={operator}
            availableOperators={allOperators || []}
            depositId={depositId!}
          />
        </RedelegateDialog>
      </RedelegateProvider>

      {/* Cancel withdraw is pretty much redelegating */}
      <RedelegateProvider>
        <RedelegateDialog open={openCancelWithdraw} onOpenChange={setOpenCancelWithdraw} modal>
          <RedelegateDialogContent
            currentOperator={operator}
            availableOperators={allOperators || []}
            depositId={depositId!}
            isCancelWithdraw
          />
        </RedelegateDialog>
      </RedelegateProvider>

      <Dialog modal open={openWithdraw} onOpenChange={setOpenWithdraw}>
        <InitiateWithdrawDialogContent
          operator={operator}
          depositId={depositId!}
          onInitiateWithdrawFinish={() => {
            setOpenWithdraw(false)
            toast({
              title: 'Withdraw initiated',
              description: 'Your withdrawal is being processed',
            })
          }}
        />
      </Dialog>
    </div>
  )
}

const InfoRow = ({
  label,
  value,
  variant,
}: {
  label: React.ReactNode
  value: React.ReactNode
  variant?: 'default' | 'staked'
}) => {
  return (
    <div
      className={cn('flex gap-1.5', variant === 'staked' && 'rounded-lg bg-[#21E078]/10 px-2 py-1')}
    >
      <Typography as="span" className="text-[#8A8791]">
        {label}
      </Typography>
      <Typography as="span" className="truncate text-[#CECBD8]">
        {value}
      </Typography>
    </div>
  )
}
