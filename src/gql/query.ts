import { graphql } from "./gql";

export const siteDataQuery = graphql(`
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
