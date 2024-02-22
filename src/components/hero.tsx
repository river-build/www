import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { CryptoCurrency } from './icons/Benefits'
import { Button } from './ui/button'

const AsciiHeroImage = dynamic(() => import('./ascii-hero-image'), { ssr: false })

export default function Hero() {
  return (
    <section className="relative flex w-full flex-col items-start justify-center overflow-x-clip bg-gray-90 py-24 pb-0 pt-16 md:min-h-screen lg:items-center">
      <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-between gap-8 px-4 py-8 lg:flex-row lg:py-[58px] xl:gap-14 xl:py-[200px]">
        <div className="flex w-full flex-col items-center justify-center md:px-0 lg:w-[62%] lg:items-start xl:w-[56%]">
          <a
            href="https://blog.river.build"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-8 overflow-hidden rounded-[2000px] p-[1.5px]"
          >
            <span className="absolute inset-[-1000%] bg-[conic-gradient(from_-45deg_at_50%_49.97%,#8C84F7_0deg,#82E4A3_115.19999742507935deg,#E48290_232.19999313354492deg,#8C84F7_360deg)] opacity-100 transition-opacity group-hover:animate-[spin_2s_linear_infinite]" />
            <span className="relative z-10 inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-[2000px] bg-gray-90 px-3 py-1 text-sm font-medium group-hover:bg-gray-70">
              <span className="text-gray-10">Introducing River Protocol</span>
              <ChevronRight color={'#F7F7F8'} height={16} width={16} />
            </span>
          </a>

          <h1
            className={cn(
              'mt-6 text-center text-[32px] font-semibold leading-[42px] text-gray-10',
              'md:text-[56px] md:leading-[64px]',
              'lg:text-left xl:text-[64px] xl:leading-[72px]',
            )}
          >
            Build secure, real time <br />{' '}
            <span className="hero-text-gradient"> messaging apps.</span>
          </h1>

          <p
            className={cn(
              'mt-2 max-w-[592px] text-center text-base leading-6 text-gray-20',
              'md:mt-4 md:text-lg md:leading-[28px]',
              'lg:text-left lg:text-xl lg:leading-[32px]',
            )}
          >
            River is an open protocol that empowers you to build dynamic spaces with encrypted
            communication that seamlessly integrates your on-chain communities.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <Button
              variant="primary"
              size="lg"
              className="text-sm"
              aria-label="Read the docs"
              onClick={() => window.open('https://docs.river.build', '_blank')}
            >
              <div className="flex items-center gap-1">
                <span>Read the Docs</span>
                <ChevronRight color="#02000A" height={16} width={16} />
              </div>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              aria-label="Run a node"
              onClick={() => window.open('https://docs.river.build/run/introduction', '_blank')}
            >
              <div className="flex items-center gap-2">
                <CryptoCurrency />
                <span>Run a Node</span>
              </div>
            </Button>
          </div>
        </div>

        <AsciiHeroImage />
      </div>
      <div className="relative inset-x-0 h-[200px] w-full md:mt-0 md:h-[340px] ">
        <Image
          src="/images/hero-wave.webp"
          alt="hero image"
          className="object-cover"
          fill
          priority
          quality={90}
          loading="eager"
        />
        <div className="fade-hero-bg absolute inset-x-0 -bottom-[100px] h-[300px] w-full md:bottom-0 md:h-[221px]"></div>
      </div>
    </section>
  )
}
