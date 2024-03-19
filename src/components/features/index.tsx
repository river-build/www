import useWindowSize from '@/lib/hooks/use-window-size'
import dynamic from 'next/dynamic'
const TextGenerateEffect = dynamic(() => import('../text-generate'), { ssr: false })

import useCMSState from '@/stores/cms.store'
import Image from 'next/image'
import { Typography } from '../ui/typography'

// dont load this component on the server and only on certain breakpoints
const KeyFeaturesCarousel = dynamic(() => import('./features-carousel'), { ssr: false })
const FeaturesMobile = dynamic(() => import('./features-mobile'), { ssr: false })

export default function Features() {
  const { isMobile } = useWindowSize()
  const { cmsData } = useCMSState()

  return (
    <>
      <div className="relative z-0 h-0.5 w-full">
        <div className="absolute inset-x-0 mx-auto h-[1000px] max-w-[696px] bg-[radial-gradient(43.84%_43.84%_at_50%_0%,rgba(217,132,247,0.10)_15%,rgba(102,96,182,0.10)_38.5%,rgba(3,1,11,0.10)_100%)] md:w-[48%]"></div>
        {isMobile ? (
          <Image
            src="/images/mobile-key-features-divider.png"
            alt="divider"
            fill
            className="object-cover md:hidden "
          />
        ) : (
          <Image
            src="/images/key-features-divider.png"
            alt="divider"
            fill
            className="hidden object-cover md:inline-block"
          />
        )}
      </div>
      <section className="relative z-10 flex w-full flex-col items-center justify-center gap-16 pt-16 lg:pt-24">
        <div className="flex w-full max-w-5xl flex-col items-start justify-between px-4 md:px-8">
          <div className="flex w-full flex-col items-center justify-center">
            <TextGenerateEffect
              words={cmsData?.featuresSection?.featuresHeading ?? 'Key Features'}
              className="text-center text-[40px] font-bold leading-[48px] md:text-[64px] md:leading-[5rem]"
            />
            <Typography
              size="2xl"
              as="p"
              className="mx-auto mt-3 text-center font-normal text-gray-20 md:w-3/5 lg:mt-5"
            >
              {cmsData?.featuresSection?.featuresSubheading ??
                'River gives you all the building blocks to create real-time social apps that its members own and operate easily.'}
            </Typography>
          </div>
        </div>
      </section>
      {isMobile ? <FeaturesMobile /> : <KeyFeaturesCarousel />}
    </>
  )
}
