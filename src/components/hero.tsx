import { SiteDataQuery } from '@/gql/graphql'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { HeroInteract } from './hero-interact'

const AsciiHeroImage = dynamic(() => import('./ascii-hero-image'), { ssr: false })

//! the heading and subheading on the Hero section doesn't follow the same size as the rest of the text on the page
//! this is why we are not using the Typography component
export default function Hero({
  cms,
  withNetworkStatusBanner,
}: {
  cms: SiteDataQuery
  withNetworkStatusBanner?: boolean
}) {
  return (
    <section
      className={cn(
        'hero-glow relative flex w-full flex-col items-start justify-center overflow-x-clip bg-gray-90 py-24 pb-0  md:min-h-screen lg:items-center',
        withNetworkStatusBanner ? 'pt-[100px] sm:pt-16' : 'pt-16',
      )}
    >
      <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-between gap-8 px-4 py-8 md:px-8 lg:flex-row lg:py-[58px] xl:gap-14 xl:py-[200px]">
        <div className="flex w-full flex-col items-center justify-center md:px-0 lg:w-[62%] lg:items-start xl:w-[60%]">
          <a
            href={cms.heroSection?.topButtonUrl ?? '"https://blog.river.build"'}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-8 overflow-hidden rounded-[2000px] p-[1.5px]"
          >
            <span className="absolute inset-[-1000%] bg-[conic-gradient(from_-45deg_at_50%_49.97%,#8C84F7_0deg,#82E4A3_115.19999742507935deg,#E48290_232.19999313354492deg,#8C84F7_360deg)] opacity-100 transition-opacity group-hover:animate-[spin_2s_linear_infinite]" />
            <span className="relative z-10 inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-[2000px] bg-gray-90 px-3 py-1 text-sm font-medium group-hover:bg-gray-70">
              <span className="text-gray-10">
                {cms.heroSection?.topButtonText ?? 'Introducing River Protocol'}
              </span>
              <ChevronRight color={'#F7F7F8'} height={16} width={16} />
            </span>
          </a>

          <h1
            className={cn(
              'mt-6 text-center text-[32px] font-semibold leading-[40px] text-gray-10',
              'md:text-[56px] md:leading-[64px]',
              'lg:text-left xl:text-[64px] xl:leading-[72px]',
            )}
          >
            {cms.heroSection?.heroSectionMainHeading ?? 'Build secure, real time'} <br />{' '}
            <span className="hero-text-gradient">
              {cms.heroSection?.heroSectionRainbowHeading ?? 'messaging apps.'}
            </span>
          </h1>

          <p
            className={cn(
              'mt-2 max-w-[592px] text-center text-base leading-6 text-gray-20',
              'md:mt-4 md:text-lg md:leading-[28px]',
              'lg:text-left lg:text-xl lg:leading-[32px]',
            )}
          >
            {cms.heroSection?.heroSectionDescription ??
              `River is an open protocol that empowers you to build dynamic spaces with encrypted communication that seamlessly integrates your on-chain communities.`}
          </p>

          <HeroInteract cms={cms} />
        </div>

        <AsciiHeroImage className="w-[90%] flex-1 items-center justify-center md:mx-auto md:w-[60%] lg:mx-0 lg:w-[55%]" />
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
