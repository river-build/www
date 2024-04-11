import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { mainnet, sepolia } from 'wagmi/chains'

// Get projectId at https://cloud.walletconnect.com
// TODO: Replace with an actual projectId, this one is for testing purposes only
export const projectId = '7db466fa83570eabebac57214dd06ddd'

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://delegate.river.build', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
}

// Create wagmiConfig
const chains = [mainnet, sepolia] as const
export const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
})
