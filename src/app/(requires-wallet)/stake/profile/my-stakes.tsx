import { OperatorCard } from '@/components/stake/operator-card'
import { SwitchToBase } from '@/components/switch-to-base'
import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useOperatorsWithDeposits, type Deposit } from '@/lib/hooks/use-stakeable-operators'
import { useWithdraw } from '@/lib/hooks/use-withdraw'
import { useWithdrawTimer } from '@/lib/hooks/use-withdraw-timer'
import { cn } from '@/lib/utils'
import { formatRVRAmount } from '@/lib/utils/formatRVRAmount'
import Link from 'next/link'
import { useMemo } from 'react'

export const MyStakesSection = () => {
  // TODO: this is slow and should be better with a better initial data
  const { data: operators, pendingWithdrawals } = useOperatorsWithDeposits()

  const myStakes = useMemo(() => operators.filter((operator) => operator.deposits), [operators])

  return (
    <section
      className={cn(
        'hero-glow relative w-full overflow-x-clip bg-gray-90 text-white',
        'pb-24 pt-[88px]',
      )}
    >
      <div className="container space-y-12 px-4 md:px-8 xl:max-w-screen-xl">
        <SwitchToBase />

        <section className="mx-auto max-w-lg space-y-4">
          <h1 className="text-center text-2xl font-bold">My Stakes</h1>
          {myStakes.length === 0 ? (
            <div className="flex w-full items-center justify-center py-12">
              <div className="flex flex-col items-center justify-center gap-4">
                <p className="text-center text-gray-20">
                  You currently have no stakes. Stake to start earning rewards.
                </p>
                <div className="w-3/4">
                  <Link
                    href="/stake"
                    className={cn(
                      buttonVariants({ variant: 'primary' }),
                      'w-full bg-gray-10 text-gray-90',
                    )}
                  >
                    Stake
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div
              className={cn(
                'grid grid-cols-1 gap-4',
                myStakes.length > 2 ? 'md:grid-cols-2' : 'md:grid-cols-1',
              )}
            >
              {myStakes.map((operator) => (
                <OperatorCard key={operator.address} operator={operator} showButton />
              ))}
            </div>
          )}
        </section>
        {pendingWithdrawals && (
          <section className="mx-auto max-w-3xl space-y-4">
            <h1 className="text-center text-2xl font-bold">Pending Withdrawals</h1>
            <div
              className={cn(
                'grid grid-cols-2 place-items-center gap-4',
                pendingWithdrawals.length > 2 ? 'grid-cols-2' : 'grid-cols-1',
              )}
            >
              {pendingWithdrawals.map((withdrawal) => (
                <WithdrawalCard
                  key={`${withdrawal.delegatee}-${withdrawal.pendingWithdrawal}-${withdrawal.amount}`}
                  withdrawal={withdrawal}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </section>
  )
}

const WithdrawalCard = ({ withdrawal }: { withdrawal: Deposit }) => {
  const { lockCooldown } = useWithdraw(withdrawal.depositId)
  const withdrawTimer = useWithdrawTimer(lockCooldown)
  const isWithdrawable = withdrawTimer === null

  return (
    <Card className="max-w-sm">
      <CardHeader className="p-4 pb-0">
        <CardTitle className="text-center text-xl">
          {formatRVRAmount(withdrawal.pendingWithdrawal)} RVR
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-4 pt-0">
        <h2 className="text-center text-lg font-bold"></h2>
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <span className="text-gray-20">Time left</span>
          <span className="font-medium">{withdrawTimer}</span>
        </div>
        <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center">
          <Button
            className={isWithdrawable ? 'w-full' : 'p-4'}
            variant={isWithdrawable ? 'secondary' : 'primary'}
          >
            Redelegate
          </Button>
          {isWithdrawable && <Button className="-order-1 w-full">Withdrawable</Button>}
        </div>
      </CardContent>
    </Card>
  )
}
