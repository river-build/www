import { communityItems } from '@/constants/links'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu'
import { Typography } from '../ui/typography'

export default function Community() {
  return (
    <NavigationMenu skipDelayDuration={1}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white">Community</NavigationMenuTrigger>
          <NavigationMenuContent className="flex !w-[266px] flex-col gap-y-2 !rounded-xl bg-gray-80 p-2">
            {communityItems.map(({ heading, icon, url }, index) => (
              <NavigationMenuLink
                key={index}
                className="flex items-center gap-3 rounded-lg p-3 transition-all hover:bg-gray-50"
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
