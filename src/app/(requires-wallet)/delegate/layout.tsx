import { sharedMetadata } from '@/constants/metadata'
import { Metadata } from 'next'

const metadataTitle = 'Delegate - River Protocol'
const metadataDescription = 'Delegate and authorize your votes'

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

const DelegateLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export default DelegateLayout
