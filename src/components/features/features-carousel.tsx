/* eslint-disable react/jsx-no-target-blank */
import * as React from 'react'

import type { CarouselApi } from '@/components/ui/carousel'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import { generateRandomString } from '@/lib/utils/generateRandomString'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import Image from 'next/image'
import { BackgroundGradient } from '../ui/background-gradient'
import { Typography } from '../ui/typography'

type CarouselItem = {
  heading: string
  subheading: string
  imageUrl: string
  aspectRatio?: number
  link?: string
}

export const carouselItems: CarouselItem[] = [
  {
    heading: 'On-chain memberships',
    subheading: 'Generate revenue for Space creators and members through paid membership tokens.',
    imageUrl: '/images/features/2.webp',
    aspectRatio: 2.121,
    link: 'https://docs.river.build/river-smart-contracts/space-membership',
  },
  {
    heading: 'On-chain social graph',
    subheading:
      'Membership tokens and spaces are discoverable on-chain, unlocking unique opportunities for discovery and recommendations.',
    imageUrl: '/images/features/1.webp',
    aspectRatio: 2.121,
    link: 'https://docs.river.build/river-smart-contracts/space-membership',
  },
  {
    heading: 'End-to-end encrypted messaging',
    subheading:
      'Ensures secure, private communication with advanced encryption, protecting messages between sender and entitled users',
    imageUrl: '/images/features/4.webp',
    aspectRatio: 2.121,
    link: 'https://docs.river.build/river-messaging-protocol/overview',
  },
  {
    heading: 'Extendable reputation system',
    subheading: 'Enable peer-based, Space-specific ratings that are discoverable on-chain.',
    imageUrl: '/images/features/3.webp',
    aspectRatio: 2.24,
    link: 'https://docs.river.build/river-smart-contracts/space-membership',
  },
]

const TabCard = ({
  children,
  isActive,
  onClick,
}: {
  children: React.ReactNode
  isActive?: boolean
  onClick: () => void
}) => {
  return (
    <button
      className={cn(
        'flex h-full items-center justify-center rounded-[100px] bg-transparent px-4',
        isActive ? 'bg-gray-10 text-gray-80' : 'bg-transparent text-white',
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

function CarouselCard({
  item,
  index,
  onClick,
}: {
  item: CarouselItem
  index: number
  onClick: () => void
}) {
  const [localCoords, setLocalCoords] = React.useState({ x: 0, y: 0 })
  const [isAsciiVisible, setIsAsciiVisible] = React.useState(false)
  const myElementRef = React.useRef<HTMLDivElement>(null)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (myElementRef.current) {
      const rect = myElementRef.current.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      setLocalCoords({ x, y })
    }
  }

  React.useEffect(() => {
    document.documentElement.style.setProperty(`--x`, localCoords.x + 'px')
    document.documentElement.style.setProperty(`--y`, localCoords.y + 'px')
  }, [localCoords.x, localCoords.y])

  return (
    <CarouselItem ref={myElementRef} className={cn('h-[480px] basis-full')}>
      <a href={item.link} target="_blank">
        <BackgroundGradient className="w-full overflow-hidden bg-gray-80" animate={false}>
          <div
            className="oveflow-hidden relative flex h-[480px] flex-col"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsAsciiVisible(true)}
            onMouseLeave={() => setIsAsciiVisible(false)}
            onClick={onClick}
          >
            <div
              className={cn(
                'features-ascii absolute h-full w-full rounded-[23px] font-secondary text-xs leading-[1.15] text-gray-10 transition-all',
                isAsciiVisible ? 'opacity-30' : 'opacity-0',
              )}
              style={{
                wordWrap: 'break-word',
              }}
            >
              {generateRandomString(4000)}
            </div>
            <div className="flex flex-col items-start justify-center overflow-hidden p-6">
              <div className="w-full">
                <Typography as="h3" size="2xl" className="w-3/5 font-medium">
                  {item.heading}
                </Typography>
                <Typography as="p" size="md" className="!mt-2 font-normal text-gray-20">
                  {item.subheading}
                </Typography>
              </div>
            </div>
            <div
              className={cn('relative w-full flex-1')}
              style={{
                aspectRatio: `${item.aspectRatio}`,
              }}
            >
              <Image
                src={item.imageUrl}
                fill
                alt="features"
                className="object-cover"
                quality={100}
              />
            </div>
          </div>
        </BackgroundGradient>
      </a>
    </CarouselItem>
  )
}

export default function KeyFeaturesCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="relative z-40 mt-8 hidden flex-col items-center gap-16 pb-32 lg:flex">
      <div className="flex h-[48px] items-center gap-1 rounded-[100px] border border-solid border-gray-60 bg-gray-80 p-1">
        <TabCard
          onClick={() => {
            api?.scrollTo(0)
          }}
          isActive={current === 1}
        >
          Memberships
        </TabCard>
        <TabCard
          onClick={() => {
            api?.scrollTo(1)
          }}
          isActive={current === 2}
        >
          Social Graph
        </TabCard>
        <TabCard
          onClick={() => {
            api?.scrollTo(2)
          }}
          isActive={current === 3}
        >
          Messaging
        </TabCard>
        <TabCard
          onClick={() => {
            api?.scrollTo(3)
          }}
          isActive={current === 4}
        >
          Reputation
        </TabCard>
      </div>
      <Carousel
        opts={{
          align: 'center',
          loop: false,
          axis: 'x',
        }}
        plugins={[
          WheelGesturesPlugin({
            forceWheelAxis: 'x',
          }),
        ]}
        setApi={setApi}
        className="mx-auto h-[480px] w-full"
      >
        <CarouselContent className="mx-auto h-[480px] max-w-[752px]">
          {carouselItems.map((item, index) => (
            <CarouselCard
              key={index}
              onClick={() => api?.scrollTo(index)}
              item={item}
              index={index}
            />
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
