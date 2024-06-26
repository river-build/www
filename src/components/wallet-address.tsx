import { useCopyToClipboard } from '@/lib/hooks/use-copy-to-clipboard'
import { formatAddress } from '@/lib/utils'
import { Check, Copy } from 'lucide-react'
import { Typography } from './ui/typography'

type AddressProps = {
  address: `0x${string}`
}

export const WalletAddress = ({ address }: AddressProps) => {
  const { copy, hasCopied } = useCopyToClipboard()

  return (
    <Typography
      as="span"
      className="flex items-center justify-center gap-2 text-inherit text-white"
    >
      {formatAddress(address)}
      {hasCopied ? (
        <Check className="h-4 w-4 text-green-300" />
      ) : (
        <button type="button" onClick={() => copy(address)}>
          <Copy className="h-4 w-4 text-gray-100" />
        </button>
      )}
    </Typography>
  )
}
