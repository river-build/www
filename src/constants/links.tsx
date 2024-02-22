import { CryptoCurrencyGradient } from '@/components/icons/Benefits'
import { BlogGradient } from '@/components/icons/Blog'
import Chat from '@/components/icons/Chat'
import Coins from '@/components/icons/Coins'
import Data from '@/components/icons/Data'
import File from '@/components/icons/File'
import { GithubGradient } from '@/components/icons/Github'
import RouteIcon from '@/components/icons/Route'
import { TownsGradient } from '@/components/icons/Towns'
import { XGradient } from '@/components/icons/X'
import { NavItem } from '@/types'

export const DOCS_URL = `https://docs.river.build/introduction`

export const links = {
  X: 'https://twitter.com/buildonriver',
  Towns: 'https://towns.com/',
  Github: 'https://github.com/RiverAssociation',
  Blog: 'https://blog.river.build',
  BugBounty: 'https://hackenproof.com/hnt-labs-inc/river-protocol',
  Explorer: 'https://river-devnet.explorer.caldera.xyz/',
}

export const developersItems: NavItem[] = [
  {
    heading: 'Run a node',
    icon: <CryptoCurrencyGradient />,
    url: `${DOCS_URL}/run/introduction`,
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
    url: 'https://github.com/RiverAssociation',
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
]
