import Header from '@/components/header'
import { WalletConnectProvider } from '@/components/wallet-connect'
import { client } from '@/gql/client'
import { siteDataQuery } from '@/gql/query'
import { wagmiConfig } from '@/lib/wagmi'

import { DelegateFooter } from '@/components/delegate/delegate-footer'
import { Metadata } from 'next'
import { headers } from 'next/headers'
import { cookieToInitialState } from 'wagmi'
import { DelegatePageContent } from './content'

export const metadata: Metadata = {
  title: 'Delegate',
}

export const fetchCache = 'force-cache'

const DelegatePage = async () => {
  const initialState = cookieToInitialState(wagmiConfig, headers().get('cookie'))
  const cmsData = await client.request(siteDataQuery)

  return (
    <>
      <Header cms={cmsData} />

      <WalletConnectProvider initialState={initialState}>
        <DelegatePageContent />
      </WalletConnectProvider>
      <DelegateFooter />
    </>
  )
}

export default DelegatePage
