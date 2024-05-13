import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useMemo } from 'react'

type NavigationLinkProps = {
  href: string
  target?: string
  rel?: string
  children: React.ReactNode
  className?: string
}

export default function NavigationLink({
  href,
  children,
  rel = 'noopener noreferrer',
  target = '_blank',
  className,
}: NavigationLinkProps) {
  const isSameOrigin = useMemo(() => {
    try {
      const url = new URL(href)
      return url.origin === window.location.origin
    } catch (error) {
      return false
    }
  }, [href])

  return (
    <Link
      href={href}
      target={isSameOrigin ? '_self' : target}
      rel={isSameOrigin ? '' : rel}
      className={cn(
        'flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-transparent-gray',
        className,
      )}
    >
      {children}
    </Link>
  )
}
