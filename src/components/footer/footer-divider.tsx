import { cn } from '@/lib/utils'
import Image from 'next/image'

export const FooterDivider = ({ className }: { className?: string }) => {
  return (
    <div className={cn('relative h-[134px] w-full', className)}>
      <Image src="/images/footer-divider.webp" alt="divider" fill className="object-cover" />
    </div>
  )
}
