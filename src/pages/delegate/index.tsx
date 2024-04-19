import Layout from '@/components/Layout'
import Header from '@/components/header'
import { WalletConnectProvider } from '@/components/wallet-connect'
import { wagmiConfig } from '@/lib/wagmi'
import { Loader2 } from 'lucide-react'
import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import superjson from 'superjson'
import { State, cookieToInitialState, useAccount } from 'wagmi'

const Loading = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Loader2 className="h-4 w-4 animate-spin" />
    </div>
  )
}

const ConnectWallet = dynamic(
  () => import('../../components/delegate/connect-wallet').then((mod) => mod.ConnectWallet),
  {
    loading: Loading,
  },
)

const DelegateSection = dynamic(
  () => import('../../components/delegate/delegate-section').then((mod) => mod.DelegateSection),
  {
    loading: Loading,
  },
)

const PageContent = () => {
  const { isConnected } = useAccount()
  return isConnected ? <DelegateSection /> : <ConnectWallet />
}

type DelegatePageProps = {
  initialState: string | null
}

export const getServerSideProps: GetServerSideProps<DelegatePageProps> = async ({ req }) => {
  const initialState = cookieToInitialState(wagmiConfig, req.headers.cookie)
  return {
    props: {
      initialState: initialState ? superjson.stringify(initialState) : null,
    },
  }
}

const DelegatePage = ({ initialState }: DelegatePageProps) => {
  return (
    <Layout title="Delegate">
      {/* render favicon here */}
      {/* <Head>{renderMetaTags([...cmsData._site.faviconMetaTags])}</Head> */}

      <Header />

      <WalletConnectProvider
        initialState={initialState ? superjson.parse<State>(initialState) : undefined}
      >
        <PageContent />
      </WalletConnectProvider>

      <div className="fixed inset-x-0 -bottom-4 h-[200px] w-full opacity-55 md:-bottom-52 md:h-[340px]">
        <Image
          src="/images/hero-wave.webp"
          alt="hero image"
          className="object-cover"
          fill
          priority
          quality={90}
          loading="eager"
        />
      </div>
    </Layout>
  )
}

export default DelegatePage
