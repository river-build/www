import Layout from '@/components/Layout'
import Benefits from '@/components/benefits'
import Features from '@/components/features'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import JoinTheCommunity from '@/components/join-the-community'
import TownsSection from '@/components/towns-section'
import { graphql } from '@/gql'
import { client } from '@/gql/client'
import { useIsMounted } from '@/lib/hooks/use-mounted'
import useCMSState, { CMSData } from '@/stores/cms.store'
import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'

import { renderMetaTags } from 'react-datocms'

const siteDataQuery = graphql(`
  query SiteData {
    headerFooterLink {
      communityItems {
        text
        url
      }
      developerItems {
        url
        text
      }
      governanceItems {
        url
        text
      }
    }

    footerSection {
      footerNewsletterHeading
      footerNewsletterSubheading
    }

    globalLink {
      twitterUrl
      townsUrl
      githubUrl
      blogUrl
    }

    heroSection {
      leftButtonText
      rightButtonText
      heroSectionRainbowHeading
      heroSectionMainHeading
      heroSectionDescription
      leftButtonUrl
      rightButtonUrl
      topButtonText
      topButtonUrl
    }

    benefitsSection {
      benefits {
        benefitUrl
        benefitSubheading
        benefitHeading
        benefitButtonText
      }
    }

    featuresSection {
      featuresSubheading
      featuresHeading
      features {
        label
        subheading
        heading
        featureUrl
      }
    }

    townsSection {
      townsUrl
      townsTopText
      townsSubheading
      townsHeading
      townsButtonText
    }

    communitySection {
      communitySubheading
      communityHeading
      communityLinks {
        subheading
        url
        heading
      }
    }

    _site {
      globalSeo {
        siteName
        titleSuffix
        twitterAccount
        fallbackSeo {
          title
          twitterCard
          image {
            url
          }
          description
        }
      }
      faviconMetaTags(variants: [icon, appleTouchIcon, msApplication]) {
        attributes
        content
        tag
      }
    }
  }
`)

export const getStaticProps = async () => {
  const cmsData = await client.request(siteDataQuery)

  return {
    props: {
      cmsData,
    },
  }
}

const IndexPage = ({ cmsData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const isMounted = useIsMounted()
  const { setCmsData } = useCMSState()

  useEffect(() => {
    setCmsData(cmsData as CMSData)
  }, [setCmsData, cmsData])

  if (!isMounted) return null

  return (
    <Layout title={cmsData._site.globalSeo?.siteName as string}>
      {/* render favicon here */}
      <Head>{renderMetaTags([...cmsData._site.faviconMetaTags])}</Head>

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
