import { cn } from '@/lib/utils'

export function GridBackgroundDemo({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'relative flex w-full items-center justify-center bg-gray-90 bg-grid-white/[0.2]',
        className,
      )}
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="grid-layer pointer-events-none absolute inset-0 flex items-center justify-center bg-gray-90"></div>
      {children}
    </div>
  )
}
