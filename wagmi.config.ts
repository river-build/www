import { defineConfig, loadEnv } from '@wagmi/cli'
import { etherscan, react } from '@wagmi/cli/plugins'
import { mainnet, sepolia, base, baseSepolia } from 'wagmi/chains'
 
const env = loadEnv({
  mode: process.env.NODE_ENV,
  envDir: process.cwd(),
})

export default defineConfig({
  out: 'src/contracts.ts',
  plugins: [
    etherscan({
      apiKey: env.ETHERSCAN_API_KEY!,
      chainId: mainnet.id,
      contracts: [
        {
          name: 'RiverToken',
          address: {
            [mainnet.id]: '0x53319181e003e7f86fb79f794649a2ab680db244',
            [sepolia.id]: '0x40ef1bb984503bb5adef041a88a4f9180e8586f9',
            [base.id]: '0x9172852305F32819469bf38A3772f29361d7b768'
          },
        },
        {
          name: 'RiverAuthorizer',
          address: {
            [mainnet.id]: '0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05',
            [sepolia.id]: '0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B',
          },
        },
      ],
    }),
    etherscan({
      apiKey: env.BASESCAN_API_KEY!,
      chainId: base.id,
      contracts: [
        {
          name: 'RiverClaimer',
          address: {
            [base.id]: '0x7c0422b31401c936172c897802cf0373b35b7698',
            [baseSepolia.id]: '0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F',
          },
        },
      ],
    }),
    react(),
  ],
})