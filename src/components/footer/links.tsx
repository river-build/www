import { communityItems, developersItems, governanceItems } from '@/constants/links'
import { SiteDataQuery } from '@/gql/graphql'
import { Typography } from '../ui/typography'

export function DeveloperLinks({ cms }: { cms: SiteDataQuery }) {
  const developerLinks = cms?.headerFooterLink?.developerItems.map((item, index) => ({
    heading: item.text,
    icon: developersItems[index].icon,
    url: item.url as string,
  }))

  return (
    <>
      {developerLinks?.map(({ heading, url }, index) => (
        <a key={index} href={url} target="_blank" rel="noreferrer">
          <Typography as="span" className="text-gray-20 transition-colors hover:text-gray-10">
            {heading}
          </Typography>
        </a>
      ))}
    </>
  )
}

export function GovernanceLinks({ cms }: { cms: SiteDataQuery }) {
  const governanceLinks = cms?.headerFooterLink?.governanceItems.map((item, index) => ({
    heading: item.text,
    icon: governanceItems[index].icon,
    url: item.url as string,
  }))

  return (
    <>
      {governanceLinks?.map(({ heading, url }, index) => (
        <a key={index} href={url} target="_blank" rel="noreferrer">
          <Typography as="span" className="text-gray-20 transition-colors hover:text-gray-10">
            {heading}
          </Typography>
        </a>
      ))}
    </>
  )
}

export function CommunityLinks({ cms }: { cms: SiteDataQuery }) {
  const communityLinks = cms?.headerFooterLink?.communityItems.map((item, index) => ({
    heading: item.text,
    icon: communityItems[index].icon,
    url: item.url as string,
  }))

  return (
    <>
      {communityLinks?.map(({ heading, url }, index) => (
        <a key={index} href={url} target="_blank" rel="noreferrer">
          <Typography as="span" className="text-gray-20 transition-colors hover:text-gray-10">
            {heading}
          </Typography>
        </a>
      ))}
    </>
  )
}
