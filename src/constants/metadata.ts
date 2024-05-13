import { Metadata } from "next";

const defaultDescription = 'River is a permissionless protocol for social networking apps. Create dynamic on-chain spaces that feature memberships, reputation, and end-to-end message encryption.'
  
export const sharedMetadata: Metadata = {
  title: 'River Protocol',
  description: defaultDescription,
  openGraph: {
    type: 'website',
    url: 'https://river.build',
    title: 'River Protocol',
    description: defaultDescription,
    images: [
      {
        url: '/og-image.jpeg',
        alt: 'River Protocol',
      },
    ],
  },
  twitter: {
    creator: '@townsxyz',
    site: '@townsxyz',
    card: 'summary_large_image',
    description: defaultDescription,
  },
}