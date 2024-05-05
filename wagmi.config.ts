import { defineConfig } from '@wagmi/cli'
import { etherscan, react } from '@wagmi/cli/plugins'
import { mainnet, sepolia } from 'wagmi/chains'
 
export default defineConfig({
  out: 'src/contracts.ts',
  plugins: [
    etherscan({
      apiKey: process.env.ETHERSCAN_API_KEY!,
      chainId: mainnet.id,
      contracts: [
        {
          name: 'RiverToken',
          address: {
            [mainnet.id]: '0x53319181e003e7f86fb79f794649a2ab680db244',
            [sepolia.id]: '0x40ef1bb984503bb5adef041a88a4f9180e8586f9',
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
    react(),
  ],
})