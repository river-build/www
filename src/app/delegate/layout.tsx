import Header from '@/components/header'
import { client } from '@/gql/client'
import { siteDataQuery } from '@/gql/query'

import { DelegateFooter } from '@/components/delegate/delegate-footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delegate - River Protocol',
  description: 'Delegate your RVR tokens for someone you trust.',
}
export const fetchCache = 'force-cache'

const DelegateLayout = async ({ children }: { children: React.ReactNode }) => {
  const cmsData = await client.request(siteDataQuery)

  return (
    <>
      <Header cms={cmsData} />
      {children}
      <DelegateFooter />
    </>
  )
}

export default DelegateLayout
