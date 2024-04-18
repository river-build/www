import type { AppProps } from 'next/app'

import '../styles/global.css'

import { Toaster } from '@/components/ui/toaster'

import { GeistSans } from 'geist/font/sans'
import localFont from 'next/font/local'
import Head from 'next/head'
import { useEffect, useState } from 'react'

// Font files can be colocated inside of `pages`
const menloFont = localFont({ src: '../lib/fonts/Menlo-Regular.woff', variable: '--font-menlo' })

function MyApp({ Component, pageProps }: AppProps) {
  const [faviconPath, setFaviconPath] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const getFaviconPath = () => {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

      const faviconPath = prefersDarkMode ? 'dark' : 'light'

      setFaviconPath(faviconPath)
    }

    const updateFavicon = () => {
      getFaviconPath()
    }

    getFaviconPath()

    mediaQuery.addEventListener('change', updateFavicon)

    return () => {
      mediaQuery.removeEventListener('change', updateFavicon)
    }
  }, [])

  return (
    <main className={`${GeistSans.variable} font-primary ${menloFont.variable}`}>
      <Head>
        {/* <link
          rel="apple-touch-icon"
          sizes="57x57"
          href={`/favicon/${faviconPath}/apple-icon-57x57.png`}
        />

        <link rel="icon" type="image/x-icon" href={`/favicon/${faviconPath}/favicon.ico`} />

        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href={`/favicon/${faviconPath}/apple-icon-60x60.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href={`/favicon/${faviconPath}/apple-icon-72x72.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href={`/favicon/${faviconPath}/apple-icon-76x76.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href={`/favicon/${faviconPath}/apple-icon-114x114.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href={`/favicon/${faviconPath}/apple-icon-120x120.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href={`/favicon/${faviconPath}/apple-icon-144x144.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href={`/favicon/${faviconPath}/apple-icon-152x152.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`/favicon/${faviconPath}/apple-icon-180x180.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={`/favicon/${faviconPath}/android-icon-192x192.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={`/favicon/${faviconPath}/android-icon-192x192.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/favicon/${faviconPath}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href={`/favicon/${faviconPath}/favicon-96x96.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/favicon/${faviconPath}/favicon-16x16.png`}
        />
        <meta
          name="msapplication-TileImage"
          content={`/favicon/${faviconPath}/ms-icon-144x144.png`}
        />

        <link rel="manifest" href={`/favicon/${faviconPath}/manifest.json`} />
        <meta name="msapplication-TileColor" content="#ffffff" /> */}

        <meta name="theme-color" content="#02000a" />
        <meta name="theme-color" content="#02000a" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#02000a" media="(prefers-color-scheme: dark)" />
      </Head>
      <Component {...pageProps} />
      <Toaster />
      <style jsx global>{`
        :root {
          --font-geist-mono: ${GeistSans.style.fontFamily};
        }
      `}</style>
    </main>
  )
}

export default MyApp
