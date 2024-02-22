import { ReactNode } from 'react'

import Head from 'next/head'

// Test

const Layout = ({
  children,
  title = 'This is the default title',
}: {
  children: ReactNode
  title: string
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="River is a permissionless protocol for social networking apps. Create dynamic on-chain spaces that feature memberships, reputation, and end-to-end message encryption."
      />
      <meta
        property="og:image"
        content="https://fiahybyamyfmfeczssiz.supabase.co/storage/v1/object/public/Public%20CDN/river-twitter-image.jpg?t=2024-02-20T04%3A14%3A34.009Z"
      />
      <meta property="og:title" content="River" />
      <meta
        property="og:description"
        content="River is a permissionless protocol for social networking apps."
      />
      <meta property="og:url" content="https://river.build" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@townsxyz" />
      <meta name="twitter:title" content="River" />
      <meta
        name="twitter:description"
        content="River is a permissionless protocol for social networking apps."
      />
      <meta
        name="twitter:image"
        content="https://fiahybyamyfmfeczssiz.supabase.co/storage/v1/object/public/Public%20CDN/river-twitter-image.jpg?t=2024-02-20T04%3A14%3A34.009Z"
      />
    </Head>

    {children}
  </div>
)

export default Layout
