import Logo from '@/components/icons/Logo'
import { links } from '@/constants/links'
import useScroll from '@/lib/hooks/use-scroll'
import useWindowSize from '@/lib/hooks/use-window-size'
import { cn } from '@/lib/utils'
import dynamic from 'next/dynamic'
import { Blog } from '../icons/Blog'
import { Github } from '../icons/Github'
import { Towns } from '../icons/Towns'
import { X } from '../icons/X'
import NavigationLink from '../navigation-link'
import Community from './community'
import Developers from './developers'
import Governance from './governance'
const MobileDropownMenu = dynamic(() => import('./mobile-dropdown-menu'), { ssr: false })

export default function Header() {
  const { isMobile } = useWindowSize()

  const isScrolled = useScroll(isMobile ? 20 : 100)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 flex w-full items-center justify-center border-b border-solid transition-colors',
        isScrolled ? 'border-b-gray-70 bg-gray-90' : 'border-transparent bg-gray-90',
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4">
        <Logo />
        <div className="hidden items-center gap-8 lg:flex">
          <Developers />
          <Governance />
          <Community />
        </div>
        <div className="hidden items-center gap-6 lg:flex">
          <NavigationLink href={links.Towns}>
            <Towns />
          </NavigationLink>
          <NavigationLink href={links.X}>
            <X />
          </NavigationLink>
          <NavigationLink href={links.Github}>
            <Github />
          </NavigationLink>
          <NavigationLink href={links.Blog}>
            <Blog />
          </NavigationLink>
        </div>
        {isMobile && <MobileDropownMenu />}
      </div>
    </header>
  )
}
