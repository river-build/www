import Layout from '@/components/Layout'
import Benefits from '@/components/benefits'
import Features from '@/components/features'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import JoinTheCommunity from '@/components/join-the-community'
import TownsSection from '@/components/towns-section'
import { useIsMounted } from '@/lib/hooks/use-mounted'
import Image from 'next/image'

const IndexPage = () => {
  const isMounted = useIsMounted()

  if (!isMounted) return null

  return (
    <Layout title="River Protocol">
      <Header />
      <Hero />
      <Benefits />
      <Features />
      <TownsSection />
      <JoinTheCommunity />

      <div className="relative mt-16 h-[134px] w-full lg:mt-32">
        <Image src="/images/footer-divider.webp" alt="divider" fill className="object-cover" />
      </div>
      <Footer />
    </Layout>
  )
}

export default IndexPage
