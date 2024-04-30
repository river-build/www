import Header from '@/components/header'
import { WalletConnectProvider } from '@/components/wallet-connect'
import { client } from '@/gql/client'
import { siteDataQuery } from '@/gql/query'
import { wagmiConfig } from '@/lib/wagmi'

import { Metadata } from 'next'
import { headers } from 'next/headers'
import Image from 'next/image'
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

      <div className="fixed inset-x-0 -bottom-4 h-[200px] w-full opacity-55 md:-bottom-52 md:h-[340px]">
        <Image
          src="/images/hero-wave.webp"
          alt="hero image"
          className="object-cover"
          fill
          priority
          quality={90}
          loading="eager"
        />
      </div>
    </>
  )
}

export default DelegatePage
