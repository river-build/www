import { communityItems, developersItems, governanceItems } from '@/constants/links'
import useCMSState from '@/stores/cms.store'
import { Typography } from '../ui/typography'

export function DeveloperLinks() {
  const { cmsData } = useCMSState()

  const developerLinks = cmsData?.headerFooterLink.developerItems.map((item, index) => ({
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

export function GovernanceLinks() {
  const { cmsData } = useCMSState()

  const governanceLinks = cmsData?.headerFooterLink.governanceItems.map((item, index) => ({
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

export function CommunityLinks() {
  const { cmsData } = useCMSState()

  const communityLinks = cmsData?.headerFooterLink.communityItems.map((item, index) => ({
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
