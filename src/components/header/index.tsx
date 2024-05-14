'use client'
import Logo from '@/components/icons/Logo'
import { links } from '@/constants/links'
import { SiteDataQuery } from '@/gql/graphql'
import useWindowSize from '@/lib/hooks/use-window-size'
import { cn } from '@/lib/utils'
import useAppStore from '@/stores/app.store'
import Link from 'next/link'
import { Blog } from '../icons/Blog'
import { Github } from '../icons/Github'
import { Towns } from '../icons/Towns'
import { X } from '../icons/X'
import NavigationLink from '../navigation-link'
import { NetworkStatusBanner } from '../network-status-banner'
import Community from './community'
import Developers from './developers'
import Governance from './governance'
import MobileDropownMenu from './mobile-dropdown-menu'

type HeaderProps = {
  cms: SiteDataQuery
  withNetworkStatusBanner?: boolean
}

export default function Header({ cms, withNetworkStatusBanner }: HeaderProps) {
  const { isMobile } = useWindowSize()
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useAppStore()

  return (
    <header className="fixed top-0 z-50 flex w-full flex-col">
      {withNetworkStatusBanner && <NetworkStatusBanner />}
      <div className="relative">
        <div
          className={cn(
            'header-bg flex w-full items-center justify-center border-b border-solid border-b-gray-70 transition-colors',
          )}
        >
          <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-8 lg:grid lg:grid-cols-3">
            <div className="relative z-20">
              <Link href="/">
                <Logo />
              </Link>
            </div>
            <div className="hidden items-center gap-8 lg:flex lg:justify-self-center">
              <Developers cms={cms} />
              <Governance cms={cms} />
              <Community cms={cms} />
            </div>
            <div className="z-40 hidden items-center gap-6 lg:flex lg:justify-self-end">
              <NavigationLink href={cms.globalLink?.townsUrl ?? links.Towns}>
                <Towns />
              </NavigationLink>
              <NavigationLink href={cms.globalLink?.twitterUrl ?? links.X}>
                <X />
              </NavigationLink>
              <NavigationLink href={cms.globalLink?.githubUrl ?? links.Github}>
                <Github />
              </NavigationLink>
              <NavigationLink href={cms.globalLink?.blogUrl ?? links.Blog}>
                <Blog />
              </NavigationLink>
            </div>
            {isMobileMenuOpen && <div className="fixed top-0 z-10 h-16 w-full bg-gray-90" />}
            {isMobile && (
              <MobileDropownMenu
                isOpen={isMobileMenuOpen}
                setIsOpen={setIsMobileMenuOpen}
                cms={cms}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
