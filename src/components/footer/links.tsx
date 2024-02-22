import { communityItems, developersItems, governanceItems } from '@/constants/links'
import { Typography } from '../ui/typography'

export function DeveloperLinks() {
  return (
    <>
      {developersItems.map(({ heading, url }, index) => (
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
  return (
    <>
      {governanceItems.map(({ heading, url }, index) => (
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
  return (
    <>
      {communityItems.map(({ heading, url }, index) => (
        <a key={index} href={url} target="_blank" rel="noreferrer">
          <Typography as="span" className="text-gray-20 transition-colors hover:text-gray-10">
            {heading}
          </Typography>
        </a>
      ))}
    </>
  )
}
