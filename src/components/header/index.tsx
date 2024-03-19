import Logo from '@/components/icons/Logo'
import { links } from '@/constants/links'
import useWindowSize from '@/lib/hooks/use-window-size'
import { cn } from '@/lib/utils'
import useAppStore from '@/stores/app.store'
import useCMSState from '@/stores/cms.store'
import { Blog } from '../icons/Blog'
import { Github } from '../icons/Github'
import { Towns } from '../icons/Towns'
import { X } from '../icons/X'
import NavigationLink from '../navigation-link'
import Community from './community'
import Developers from './developers'
import Governance from './governance'
import MobileDropownMenu from './mobile-dropdown-menu'

export default function Header() {
  const { isMobile } = useWindowSize()
  const { cmsData } = useCMSState()
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useAppStore()

  return (
    <header
      className={cn(
        'header-bg fixed inset-x-0 top-0 z-50 flex w-full items-center justify-center border-b border-solid border-b-gray-70 transition-colors',
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-8">
        <div className="relative z-20">
          <Logo />
        </div>
        <div className="hidden items-center gap-8 lg:flex">
          <Developers />
          <Governance />
          <Community />
        </div>
        <div className="z-40 hidden items-center gap-6 lg:flex">
          <NavigationLink href={cmsData?.globalLink.townsUrl ?? links.Towns}>
            <Towns />
          </NavigationLink>
          <NavigationLink href={cmsData?.globalLink.twitterUrl ?? links.X}>
            <X />
          </NavigationLink>
          <NavigationLink href={cmsData?.globalLink.githubUrl ?? links.Github}>
            <Github />
          </NavigationLink>
          <NavigationLink href={cmsData?.globalLink.blogUrl ?? links.Blog}>
            <Blog />
          </NavigationLink>
        </div>
        {isMobileMenuOpen && <div className="fixed top-0 z-10 h-16 w-full bg-gray-90" />}
        {isMobile && (
          <MobileDropownMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
        )}
      </div>
    </header>
  )
}
