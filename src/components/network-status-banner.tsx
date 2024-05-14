'use client'

import Satellite from '@/components/icons/Satellite'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Typography } from './ui/typography'

export const NetworkStatusBanner = () => {
  return (
    <div className="flex w-full items-center justify-center bg-[linear-gradient(to_left,#82E4A3_14.13%,#E48290_50%,#8C84F7_86%)] py-2 text-white">
      <Link href="/status">
        <div className="flex items-center gap-2">
          <Satellite height={16} width={16} />
          <Typography as="span" size="sm" className="font-medium">
            Node Network Status
          </Typography>
          <ChevronRight height={16} width={16} />
        </div>
      </Link>
    </div>
  )
}
