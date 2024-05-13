import Footer from '@/components/footer'
import { FooterDivider } from '@/components/footer/footer-divider'
import Header from '@/components/header'
import { sharedMetadata } from '@/constants/metadata'
import { client } from '@/gql/client'
import { siteDataQuery } from '@/gql/query'
import { TanstackQueryProvider } from '@/lib/context/tanstack-query-provider'
import { Metadata } from 'next'

const metadataTitle = 'River Node Network Status'
const metadataDescription = 'Monitor the health, uptime and status of the River Node Network.'

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  openGraph: {
    ...sharedMetadata.openGraph,
    url: 'https://river.build/status',
    title: metadataTitle,
    description: metadataDescription,
    images: [
      {
        url: '/og-image-status.jpg',
        alt: metadataTitle,
      },
    ],
  },
  twitter: {
    ...sharedMetadata.twitter,
    description: metadataDescription,
  },
}

const StatusLayout = async ({ children }: { children: React.ReactNode }) => {
  const cmsData = await client.request(siteDataQuery)

  return (
    <>
      <Header cms={cmsData} />
      <TanstackQueryProvider>{children}</TanstackQueryProvider>
      <FooterDivider />
      <Footer cms={cmsData} />
    </>
  )
}

export default StatusLayout
