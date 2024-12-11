import { formatAddress } from '@/lib/utils'
import type { Address } from 'viem'
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog'
import { RedelegateButton } from './redelegate-button'

export const RedelegateDialogContent = ({
  deposits,
}: {
  deposits: { id: bigint; delegatee: Address }[]
}) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Redelegate</DialogTitle>
      </DialogHeader>
      <DialogDescription>Select the address you want to redelegate to.</DialogDescription>
      <div className="flex max-h-96 flex-col gap-2 overflow-y-auto">
        {deposits.map((deposit) => (
          <div className="flex w-full items-center justify-between" key={deposit.id}>
            <span className="font-mono text-sm font-medium text-gray-10">
              {formatAddress(deposit.delegatee)}
            </span>
            <RedelegateButton
              depositId={deposit.id}
              delegatedAddress={deposit.delegatee}
              variant="secondary"
            />
          </div>
        ))}
      </div>
    </DialogContent>
  )
}
