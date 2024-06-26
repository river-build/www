import { WalletConnectProvider } from '@/components/wallet-connect'
import { wagmiConfig } from '@/lib/wagmi'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { FooterDivider } from '@/components/footer/footer-divider'
import { TanstackQueryProvider } from '@/lib/context/tanstack-query-provider'
import { headers } from 'next/headers'
import { cookieToInitialState } from 'wagmi'

const WalletLayout = ({ children }: { children: React.ReactNode }) => {
  const initialState = cookieToInitialState(wagmiConfig, headers().get('cookie'))

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
