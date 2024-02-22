import { cn } from '@/lib/utils'

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
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cn(
        'flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-gray-80',
        className,
      )}
    >
      {children}
    </a>
  )
}
