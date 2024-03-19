import { ReactNode } from 'react'

import useCMSState from '@/stores/cms.store'
import Head from 'next/head'

const Layout = ({
  children,
  title = 'This is the default title',
}: {
  children: ReactNode
  title: string
}) => {
  const metaImageUrl = 'https://hnt-river-dev-portal.vercel.app/og-image.jpeg'

  const { cmsData } = useCMSState()

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={
            cmsData?._site?.globalSeo?.fallbackSeo?.description ||
            'River is a permissionless protocol for social networking apps. Create dynamic on-chain spaces that feature memberships, reputation, and end-to-end message encryption.'
          }
        />
        <meta
          property="og:image"
          content={cmsData?._site?.globalSeo?.fallbackSeo?.image?.url || metaImageUrl}
        />
        <meta
          property="og:title"
          content={cmsData?._site?.globalSeo?.fallbackSeo?.title || 'River Protocol'}
        />

        <meta
          property="og:description"
          content={
            cmsData?._site?.globalSeo?.fallbackSeo?.description ||
            'River is a permissionless protocol for social networking apps. Create dynamic on-chain spaces that feature memberships, reputation, and end-to-end message encryption.'
          }
        />
        <meta property="og:url" content="https://river.build" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@townsxyz" />
        <meta name="twitter:title" content="River" />
        <meta
          name="twitter:description"
          content={
            cmsData?._site?.globalSeo?.fallbackSeo?.description ||
            'River is a permissionless protocol for social networking apps. Create dynamic on-chain spaces that feature memberships, reputation, and end-to-end message encryption.'
          }
        />
        <meta
          name="twitter:image"
          content={cmsData?._site?.globalSeo?.fallbackSeo?.image?.url || metaImageUrl}
        />
      </Head>

      {children}
    </div>
  )
}

export default Layout
