import { links } from '@/constants/links'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { Button } from './ui/button'
import { ContainerScroll } from './ui/container-scroll'
import { GridBackgroundDemo } from './ui/grid-bg'
import { Typography } from './ui/typography'

export default function TownsSection() {
  const containerRef = useRef<any>(null)
  const [fullyScrolled, setFullyScrolled] = useState(false)
  const [lineAnimationCompleted, setLineAnimationCompleted] = useState(false)

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

  return (
    <section
      className="flex w-full items-center justify-center py-24 pb-0 md:pb-24 lg:py-32"
      ref={containerRef}
    >
      <div className="flex w-full items-start justify-between">
        <div className="mx-auto flex w-full flex-col items-center justify-center">
          <div className="mx-auto flex max-w-4xl flex-col items-center justify-center px-4 lg:px-0">
            <div className="background-gradient inline-block w-auto rounded-[2000px] p-[1.5px]">
              <div
                className={cn(
                  'text-gray relative flex h-7 items-center justify-center gap-1 rounded-[2000px] bg-gray-90 px-3 transition-all',
                )}
              >
                <span className={cn('relative z-20 text-[13px] font-medium', 'text-gray-10')}>
                  Coming Soon
                </span>
              </div>
            </div>
            <Typography size="6xl" className={cn('hero-text-gradient mt-6 text-center font-bold')}>
              Towns
            </Typography>

            <Typography
              size="2xl"
              as="p"
              className="mx-auto !mt-3 w-[90%] text-center font-normal text-gray-20 md:w-full lg:!mt-5"
            >
              Ownable town squares for online communities, built on River.
            </Typography>

            <a
              href={links.Towns}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-20 mt-8"
            >
              <Button variant="primary" aria-label="Open Towns App">
                <div className="flex h-10 w-full items-center gap-2">
                  <span>Learn More</span>
                  <ArrowUpRight className="inline-block" color="#02000A" height={16} width={16} />
                </div>
              </Button>
            </a>
          </div>

          <GridBackgroundDemo className="mt-8 px-4">
            <div className="relative z-10 flex aspect-[1.6] w-full max-w-[1440px] items-center justify-center">
              {/* <Image
              src="/images/towns-section-ascii.webp"
              className="z-20 object-cover"
              fill
              alt="towns"
              quality={100}
              priority
            /> */}

              <ContainerScroll containerRef={containerRef}>
                <motion.div
                  className={cn(
                    'towns-section-image-blur absolute z-0 h-full w-full object-cover',
                    fullyScrolled && 'delay-[600ms] animate-towns-glow',
                  )}
                ></motion.div>

                <motion.div className="background-gradient relative aspect-[1.7] w-full max-w-[1260px] overflow-hidden rounded-lg p-[1.5px] md:rounded-xl lg:rounded-2xl 2xl:mx-auto">
                  {fullyScrolled && (
                    <>
                      <span>
                        <span className="spark mask-gradient before:aspect-square absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-lg [mask:linear-gradient(white,_transparent_50%)] before:absolute before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%] md:rounded-xl lg:rounded-2xl" />
                      </span>
                      <span className="backdrop absolute inset-[1px] rounded-lg bg-gray-80 transition-colors duration-200 md:rounded-xl lg:rounded-2xl" />
                    </>
                  )}

                  <AnimatePresence>
                    {fullyScrolled && lineAnimationCompleted ? (
                      <motion.div
                        key="towns-image"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.75, ease: 'easeInOut' }}
                        className="z-20 h-full w-full rounded-lg p-[1.5px] md:rounded-xl lg:rounded-2xl"
                      >
                        <Image
                          src="/images/towns-section-image.webp"
                          className="z-20 h-full w-full rounded-lg p-[1.5px] md:rounded-xl lg:rounded-2xl"
                          fill
                          alt="towns"
                          quality={100}
                          priority
                        />
                      </motion.div>
                    ) : (
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
                          d="M220 1500L220 -50%"
                          className="stroke-current text-gray-50"
                          whileInView={{ pathLength: [0, 1], opacity: [0, 1] }}
                          transition={{ duration: 0.5, delay: 0.25 }}
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
                    )}
                  </AnimatePresence>
                </motion.div>
              </ContainerScroll>
            </div>
          </GridBackgroundDemo>
        </div>
      </div>
    </section>
  )
}
