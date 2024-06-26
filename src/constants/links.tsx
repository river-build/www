import { CryptoCurrencyGradient } from '@/components/icons/Benefits'
import { BlogGradient } from '@/components/icons/Blog'
import Chat from '@/components/icons/Chat'
import Claim from '@/components/icons/Claim'
import Coins from '@/components/icons/Coins'
import Data from '@/components/icons/Data'
import Delegate from '@/components/icons/Delegate'
import File from '@/components/icons/File'
import { GithubGradient } from '@/components/icons/Github'
import RouteIcon from '@/components/icons/Route'
import Satellite from '@/components/icons/Satellite'
import { TownsGradient } from '@/components/icons/Towns'
import { XGradient } from '@/components/icons/X'
import { NavItem } from '@/types'

export const DOCS_URL = `https://docs.river.build`
export const RIVER_BUILD_URL = 'https://www.river.build'

export const links = {
  X: 'https://twitter.com/buildonriver',
  Towns: 'https://towns.com/',
  Github: 'https://github.com/river-build',
  Blog: 'https://blog.river.build',
  BugBounty: 'https://hackenproof.com/',
  Explorer: 'https://explorer.river.build/',
  Propeller: 'https://propeller.chat/',
}

export const developersItems: NavItem[] = [
  {
    heading: 'Run a node',
    icon: <CryptoCurrencyGradient />,
    url: `${DOCS_URL}/run/introduction`,
  },
  {
    heading: 'Node Network Status',
    icon: <Satellite withGradient />,
    url: `${RIVER_BUILD_URL}/status`,
  },
  {
    heading: 'Documentation',
    icon: <File />,
    url: `${DOCS_URL}/introduction`,
  },
  {
    heading: 'Explore',
    icon: <RouteIcon />,
    url: links.Explorer,
  },
  {
    heading: 'Bug Bounty',
    icon: <Coins />,
    url: links.BugBounty,
  },
  {
    heading: 'Github',
    icon: <GithubGradient />,
    url: links.Github,
  },
]

export const communityItems: NavItem[] = [
  {
    heading: 'Towns App',
    icon: <TownsGradient />,
    url: links.Towns,
  },
  {
    heading: 'X (ex. Twitter)',
    icon: <XGradient />,
    url: links.X,
  },
  {
    heading: 'Github',
    icon: <GithubGradient />,
    url: links.Github,
  },
  {
    heading: 'Blog',
    icon: <BlogGradient />,
    url: links.Blog,
  },
]

export const governanceItems: NavItem[] = [
  {
    heading: 'River Association',
    icon: <Data />,
    url: `${DOCS_URL}/river-dao/overview`,
  },
  {
    heading: 'Forum',
    icon: <Chat />,
    url: 'https://gov.river.build',
  },
  {
    heading: 'Delegation',
    icon: <Delegate />,
    url: `${RIVER_BUILD_URL}/delegate`,
  },
  {
    heading: 'Claim Rewards',
    icon: <Claim />,
    url: 'https://www.river.build/claim',
  },
]
