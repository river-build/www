'use client'

import { Loader2 } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useAccount } from 'wagmi'

const Loading = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Loader2 className="h-4 w-4 animate-spin" />
    </div>
  )
}

const ConnectWallet = dynamic(
  () => import('../../components/delegate/connect-wallet').then((mod) => mod.ConnectWallet),
  {
    loading: Loading,
  },
)

const DelegateSection = dynamic(
  () => import('../../components/delegate/delegate-section').then((mod) => mod.DelegateSection),
  {
    loading: Loading,
  },
)

export const DelegatePageContent = () => {
  const { isConnected } = useAccount()
  return isConnected ? <DelegateSection /> : <ConnectWallet />
}
