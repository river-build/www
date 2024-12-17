import { wagmiAdapter } from '@/lib/wagmi'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { FooterDivider } from '@/components/footer/footer-divider'
import { TanstackQueryProvider } from '@/lib/context/tanstack-query-provider'
import { WalletConnectProvider } from '@/lib/context/wallet-connect-provider'
import { headers } from 'next/headers'
import { cookieToInitialState } from 'wagmi'

const WalletLayout = ({ children }: { children: React.ReactNode }) => {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig, headers().get('cookie'))

  return (
    <WalletConnectProvider initialState={initialState}>
      <TanstackQueryProvider>
        {children}
        <FooterDivider />
        <ReactQueryDevtools initialIsOpen={false} />
      </TanstackQueryProvider>
    </WalletConnectProvider>
  )
}

export default WalletLayout
