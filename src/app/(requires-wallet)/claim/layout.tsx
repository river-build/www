import { DelegateFooter } from '@/components/delegate/delegate-footer'
import { sharedMetadata } from '@/constants/metadata'
import { Metadata } from 'next'

const metadataTitle = 'Claim - River Protocol'
const metadataDescription = 'Claim your rewards'

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  openGraph: {
    ...sharedMetadata.openGraph,
    url: 'https://river.build/claim',
    title: metadataTitle,
    description: metadataDescription,
    images: [
      {
        url: '/og-image-claim.jpg',
        alt: metadataTitle,
      },
    ],
  },
  twitter: {
    ...sharedMetadata.twitter,
    description: metadataDescription,
  },
}

const ClaimLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <DelegateFooter />
    </>
  )
}

export default ClaimLayout
