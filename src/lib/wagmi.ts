import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { cookieStorage, createStorage } from 'wagmi'

import { base, mainnet, sepolia } from 'wagmi/chains'

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) {
  throw new Error('WalletConnect Project ID is not defined')
}

const metadata = {
  name: 'River Delegate',
  description: 'Delegate your RVR tokens to a claimer',
  url: 'https://river.build', // origin must match your domain & subdomain
  icons: ['https://www.river.build/favicon/dark/apple-icon.png'],
}

// Create wagmiConfig
export const wagmiConfig = defaultWagmiConfig({
  chains: [mainnet, base, sepolia],
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({  
    storage: cookieStorage, 
  }), 
})
