import Benefits from '@/components/benefits'
import Features from '@/components/features'
import { FooterDivider } from '@/components/footer/footer-divider'
import Header from '@/components/header'
import Hero from '@/components/hero'
import JoinTheCommunity from '@/components/join-the-community'
import RunsOnRiver from '@/components/runs-on-river'
import { client } from '@/gql/client'
import { siteDataQuery } from '@/gql/query'

const IndexPage = async () => {
  const cmsData = await client.request(siteDataQuery)

  return (
    <>
      <Header cms={cmsData} withNetworkStatusBanner />
      <Hero cms={cmsData} withNetworkStatusBanner />
      <Benefits cms={cmsData} />
      <Features cms={cmsData} />
      <RunsOnRiver cms={cmsData} />
      <JoinTheCommunity cms={cmsData} />
      <FooterDivider className="mt-16 lg:mt-32" />
    </>
  )
}

export default IndexPage
