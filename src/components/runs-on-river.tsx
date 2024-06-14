'use client'
import { links } from '@/constants/links'
import { SiteDataQuery } from '@/gql/graphql'
import { cn } from '@/lib/utils'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Button } from './ui/button'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from './ui/carousel'
import { ContainerScroll } from './ui/container-scroll'
import { GridBackgroundDemo } from './ui/grid-bg'
import { Typography } from './ui/typography'

const texts = {
  title: {
    1: 'Propeller',
    2: 'Towns',
  },
  subheading: {
    1: 'Build stronger product communities',
    2: 'Ownable town squares for online communities.',
  },
  link: {
    1: links.Propeller,
    2: links.Towns,
  },
}

export default function RunsOnRiver({ cms }: { cms: SiteDataQuery }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [fullyScrolled, setFullyScrolled] = useState<boolean>(false)
  const [lineAnimationCompleted, setLineAnimationCompleted] = useState<boolean>(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest >= 0.6) {
      setTimeout(() => {
        setFullyScrolled(true)
      }, 400)
    }
  })

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(1)

  useEffect(() => {
    if (!api) {
      return
    }

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  useEffect(() => {
    console.log(current)
  }, [current])

  return (
    <section
      className="flex w-full items-center justify-center py-24 pb-0 md:pb-24 lg:py-32"
      ref={containerRef}
    >
      <div className="flex w-full items-start justify-between">
        <div className="mx-auto flex w-full flex-col items-center justify-center">
          <div className="mx-auto flex max-w-4xl flex-col items-center justify-center px-4 md:px-8 lg:px-0">
            <div className="background-gradient inline-block w-auto rounded-[2000px] p-[1.5px]">
              <div
                className={cn(
                  'text-gray relative flex h-7 items-center justify-center gap-1 rounded-[2000px] bg-gray-90 px-3 transition-all',
                )}
              >
                <span className={cn('relative z-20 text-[13px] font-medium', 'text-gray-10')}>
                  {/* {cms?.townsSection?.townsTopText ?? 'Runs on River'} */}
                  Runs on River
                </span>
              </div>
            </div>
            <Typography size="6xl" className={cn('hero-text-gradient mt-6 text-center font-bold')}>
              {/* {cms?.townsSection?.townsHeading ?? 'Towns'} */}
              {texts.title[current as keyof typeof texts.title]}
            </Typography>

            <Typography
              size="2xl"
              as="p"
              className="mx-auto !mt-3 w-[90%] text-center font-normal text-gray-20 md:w-full lg:!mt-5"
            >
              {/* {cms?.townsSection?.townsSubheading ??
                'Ownable town squares for online communities, built on River.'} */}
              {texts.subheading[current as keyof typeof texts.subheading]}
            </Typography>

            <div className="relative z-20 mt-8">
              <Button variant="primary" aria-label="Open Towns App" asChild>
                <Link
                  href={texts.link[current as keyof typeof texts.link]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex h-10 w-full items-center gap-2">
                    <span>{cms?.townsSection?.townsButtonText ?? 'Learn More'}</span>
                    <ArrowUpRight className="inline-block" color="#02000A" height={16} width={16} />
                  </div>
                </Link>
              </Button>
            </div>
          </div>

          <GridBackgroundDemo className="mt-8 px-4 md:px-8">
            <div className="relative z-10 flex aspect-[1.6] w-full max-w-[1440px] items-center justify-center">
              <ContainerScroll containerRef={containerRef}>
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
                  className="mx-auto h-[100%] w-full"
                >
                  <CarouselContent className="mx-auto flex max-w-[1260px] items-center">
                    <CarouselItem>
                      <FeaturedItem
                        fullyScrolled={fullyScrolled}
                        lineAnimationCompleted={lineAnimationCompleted}
                        setLineAnimationCompleted={setLineAnimationCompleted}
                        imageUrl={'/images/runs-on-river-propeller.webp'}
                        className="aspect-[1.41]"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <FeaturedItem
                        showTownsLineSvg
                        fullyScrolled={fullyScrolled}
                        lineAnimationCompleted={lineAnimationCompleted}
                        setLineAnimationCompleted={setLineAnimationCompleted}
                        imageUrl={'/images/runs-on-river-towns.webp'}
                        className="aspect-[1.7]"
                      />
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </ContainerScroll>
            </div>
          </GridBackgroundDemo>
        </div>
      </div>
    </section>
  )
}

type FeaturedItemProps = {
  fullyScrolled: boolean
  lineAnimationCompleted: boolean
  setLineAnimationCompleted: (value: boolean) => void
  imageUrl: string
  className?: string
  showTownsLineSvg?: boolean
}

function FeaturedItem(props: FeaturedItemProps) {
  const {
    fullyScrolled,
    lineAnimationCompleted,
    imageUrl,
    className,
    setLineAnimationCompleted,
    showTownsLineSvg,
  } = props
  return (
    <>
      <motion.div
        className={cn(
          'runs-on-river-image-blur absolute z-0 h-full w-full object-cover',
          fullyScrolled && 'delay-[600ms] animate-towns-glow',
        )}
      />

      <div
        className={cn(
          'background-gradient relative w-full max-w-[1260px] overflow-hidden rounded-lg p-[1.5px] md:rounded-xl lg:rounded-2xl 2xl:mx-auto',
          className,
        )}
      >
        {fullyScrolled && <ShootingStarBorder />}

        <AnimatePresence>
          {/* animate the towns section image */}
          {fullyScrolled && lineAnimationCompleted ? (
            <motion.div
              key={imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.75, ease: 'easeInOut' }}
              className="max-hh-full z-20 w-full rounded-lg p-[1.5px] md:rounded-xl lg:rounded-2xl"
            >
              <Image
                src={imageUrl}
                className="z-20 h-full w-full rounded-lg p-[1.5px] md:rounded-xl lg:rounded-2xl"
                fill
                alt="propeller"
                quality={100}
                priority
              />
            </motion.div>
          ) : (
            showTownsLineSvg && <TownsSvg setLineAnimationCompleted={setLineAnimationCompleted} />
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

function TownsSvg({
  setLineAnimationCompleted,
}: {
  setLineAnimationCompleted: (value: boolean) => void
}) {
  return (
    <motion.svg
      key="towns-svg"
      width="100%"
      height="100%"
      viewBox="0 0 1499 778"
      fill="none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.25, ease: 'easeInOut' }}
      exit={{ opacity: 0 }}
      onAnimationComplete={() => setLineAnimationCompleted(true)}
      className="relative z-20 h-[calc(100%-3px)] w-full rounded-lg bg-gray-80 md:h-full md:rounded-xl lg:rounded-2xl"
    >
      <motion.path
        pathLength="1"
        d="M220 1600L220 0"
        className="-translate-y-[10%] stroke-current text-gray-50"
        whileInView={{ pathLength: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 1, delay: 0.25 }}
        onAnimationComplete={() => setLineAnimationCompleted(true)}
      ></motion.path>

      <motion.path
        pathLength="1"
        d="M1500 72L220 72"
        className="stroke-current text-gray-50"
        whileInView={{ pathLength: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.25 }}
        onAnimationComplete={() => setLineAnimationCompleted(true)}
      ></motion.path>

      <motion.path
        pathLength="1"
        d="M1500 120L220 120"
        className="stroke-current text-gray-50"
        whileInView={{ pathLength: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.25 }}
        onAnimationComplete={() => setLineAnimationCompleted(true)}
      ></motion.path>
    </motion.svg>
  )
}

function ShootingStarBorder() {
  return (
    <>
      <span>
        <span className="spark mask-gradient before:aspect-square absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-lg [mask:linear-gradient(white,_transparent_50%)] before:absolute before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%] md:rounded-xl lg:rounded-2xl" />
      </span>
      <span className="backdrop absolute inset-[1px] rounded-lg bg-gray-80 transition-colors duration-200 md:rounded-xl lg:rounded-2xl" />
    </>
  )
}
