'use client'
import { governanceItems } from '@/constants/links'
import { SiteDataQuery } from '@/gql/graphql'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu'
import { Typography } from '../ui/typography'

export default function Governance({ cms }: { cms: SiteDataQuery }) {
  //! map the icon for now since we only allow text changes in the CMS
  const governanceLinks = cms?.headerFooterLink?.governanceItems.map((item, index) => ({
    heading: item.text,
    icon: governanceItems[index].icon,
    url: item.url as string,
  }))

  return (
    <NavigationMenu skipDelayDuration={1}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white">Governance</NavigationMenuTrigger>
          <NavigationMenuContent className="flex !w-[266px] flex-col gap-y-2 !rounded-xl p-2">
            {governanceLinks?.map(({ heading, icon, url }, index) => (
              <NavigationMenuLink
                key={index}
                className="flex items-center gap-3 rounded-lg p-3 transition-all hover:bg-[#f7f7f81a]"
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                {icon}
                <div>
                  <Typography as="h4" size="sm" className="font-medium">
                    {heading}
                  </Typography>
                </div>
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
