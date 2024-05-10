import { WalletConnectProvider } from '@/components/wallet-connect'
import { wagmiConfig } from '@/lib/wagmi'

import { TanstackQueryProvider } from '@/lib/context/tanstack-query-provider'
import { headers } from 'next/headers'
import { cookieToInitialState } from 'wagmi'
import { DelegatePageContent } from './content'

const DelegatePage = () => {
  const initialState = cookieToInitialState(wagmiConfig, headers().get('cookie'))

  return (
    <WalletConnectProvider initialState={initialState}>
      <TanstackQueryProvider>
        <DelegatePageContent />
      </TanstackQueryProvider>
    </WalletConnectProvider>
  )
}

export default DelegatePage
