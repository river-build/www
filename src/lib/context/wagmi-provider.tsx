'use client'
import { projectId, wagmiConfig } from '@/lib/wagmi'
import { ReactNode } from 'react'

import { createWeb3Modal } from '@web3modal/wagmi/react'

import { State, WagmiProvider } from 'wagmi'

if (!projectId) throw new Error('Project ID is not defined')

// Create modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
})

export function WalletConnectProvider({
  children,
  initialState,
}: {
  children: ReactNode
  initialState?: State
}) {
  return (
    <WagmiProvider config={wagmiConfig} initialState={initialState}>
      {children}
    </WagmiProvider>
  )
}
