import Benefits from '@/components/benefits'
import Features from '@/components/features'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import JoinTheCommunity from '@/components/join-the-community'
import TownsSection from '@/components/towns-section'
import { client } from '@/gql/client'
import { siteDataQuery } from '@/gql/query'
import Image from 'next/image'

const IndexPage = async () => {
  const cmsData = await client.request(siteDataQuery)

  return (
    <>
      <Header cms={cmsData} />
      <Hero cms={cmsData} />
      <Benefits cms={cmsData} />
      <Features cms={cmsData} />
      <TownsSection cms={cmsData} />
      <JoinTheCommunity cms={cmsData} />

      <div className="relative mt-16 h-[134px] w-full lg:mt-32">
        <Image src="/images/footer-divider.webp" alt="divider" fill className="object-cover" />
      </div>
      <Footer cms={cmsData} />
    </>
  )
}

export default IndexPage
