import Header from '@/components/header'
import { client } from '@/gql/client'
import { siteDataQuery } from '@/gql/query'

import { DelegateFooter } from '@/components/delegate/delegate-footer'
import { sharedMetadata } from '@/constants/metadata'
import { Metadata } from 'next'

const metadataTitle = 'Delegate - River Protocol'
const metadataDescription = 'Delegate your RVR tokens for someone you trust.'

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  openGraph: {
    ...sharedMetadata.openGraph,
    url: 'https://river.build/delegate',
    title: metadataTitle,
    description: metadataDescription,
    images: [
      {
        url: '/og-image-delegate.jpg',
        alt: metadataTitle,
      },
    ],
  },
  twitter: {
    ...sharedMetadata.twitter,
    description: metadataDescription,
  },
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
