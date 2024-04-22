import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { cookieStorage, createStorage } from 'wagmi'

import { mainnet, sepolia } from 'wagmi/chains'

// TODO: Replace with an actual projectId
export const projectId = '7db466fa83570eabebac57214dd06ddd'

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://delegate.river.build', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
}

const isProd = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'

// Create wagmiConfig
export const wagmiConfig = defaultWagmiConfig({
  chains: isProd ? [mainnet] : [mainnet, sepolia],
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({  
    storage: cookieStorage, 
  }), 
})
