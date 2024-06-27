import { FooterDivider } from '@/components/footer/footer-divider'
import { sharedMetadata } from '@/constants/metadata'
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
  return (
    <TanstackQueryProvider>
      {children}
      <FooterDivider className="mt-8 lg:mt-16" />
    </TanstackQueryProvider>
  )
}

export default StatusLayout
