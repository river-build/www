import { links } from '@/constants/links'
import { cn } from '@/lib/utils'
import useCMSState from '@/stores/cms.store'
import Code from './icons/Code'
import { Towns } from './icons/Towns'
import { X } from './icons/X'
import { BackgroundGradient } from './ui/background-gradient'
import { Typography } from './ui/typography'

export default function JoinTheCommunity() {
  const { cmsData } = useCMSState()

  //! links are static in size only 4. we can use this variable to map the icon for now since we only allow text changes in the CMS
  const linkOne = cmsData?.communitySection?.communityLinks[0]
  const linkTwo = cmsData?.communitySection?.communityLinks[1]
  const linkThree = cmsData?.communitySection?.communityLinks[2]
  const linkFour = cmsData?.communitySection?.communityLinks[3]

  return (
    <section className="flex w-full items-center justify-center py-24 pb-0 md:pb-24 lg:py-32">
      <div className="flex w-full max-w-5xl items-start justify-between px-4 md:px-8">
        <div className="flex w-full flex-col items-center justify-center">
          <Typography size="6xl" className={cn('hero-text-gradient text-center font-bold')}>
            {cmsData?.communitySection?.communityHeading ?? 'Join the community.'}
          </Typography>

          <Typography
            size="2xl"
            as="p"
            className="mt-3 w-4/5 text-center font-normal text-gray-20 md:w-full lg:mt-5"
          >
            {cmsData?.communitySection?.communitySubheading ??
              'Get involved with the River dev community.'}
          </Typography>

          <div className="mt-12 grid w-full gap-6 md:gap-8 lg:mt-16 lg:grid-cols-2">
            <a
              href={linkOne?.url ?? 'https://docs.river.build/introduction'}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <BackgroundGradient
                className="w-full overflow-hidden bg-gray-80 p-6 lg:min-h-[100px]"
                animate={false}
                borderRadius={20}
              >
                <div className="flex items-start gap-4">
                  <Code />
                  <div className="flex-1">
                    <Typography as="h4" size="md" className="text-base font-semibold">
                      {linkOne?.heading ?? 'Read the docs'}
                    </Typography>
                    <Typography as="p" size="md" className="!mt-1 font-normal text-gray-20">
                      {linkOne?.subheading ?? 'Learn about the River Protocol.'}
                    </Typography>
                  </div>
                </div>
              </BackgroundGradient>
            </a>

            <a
              href={linkTwo?.url ?? links.Towns}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <BackgroundGradient
                className="w-full overflow-hidden bg-gray-80 p-6 lg:min-h-[100px]"
                animate={false}
                borderRadius={20}
              >
                <div className="flex items-start gap-4">
                  <Towns fill="#959499" width={28} height={28} />
                  <div className="flex-1">
                    <Typography as="h4" size="md" className="text-base font-semibold">
                      {linkTwo?.heading ?? 'River on Towns'}
                    </Typography>
                    <Typography as="p" size="md" className="!mt-1 font-normal text-gray-20">
                      {linkTwo?.subheading ?? 'Join the discussion on Towns.'}
                    </Typography>
                  </div>
                </div>
              </BackgroundGradient>
            </a>

            <a
              href={linkThree?.url ?? links.X}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <BackgroundGradient
                className="w-full overflow-hidden bg-gray-80 p-6 lg:min-h-[100px]"
                animate={false}
                borderRadius={20}
              >
                <div className="flex items-start gap-4">
                  <X fill="#959499" width={28} height={28} />
                  <div className="flex-1">
                    <Typography as="h4" size="md" className="font-semibold">
                      {linkThree?.heading ?? 'River on X (ex. Twitter)'}
                    </Typography>
                    <Typography as="p" size="md" className="!mt-1 font-normal text-gray-20">
                      {linkThree?.subheading ?? 'Follow River announcements on X.'}
                    </Typography>
                  </div>
                </div>
              </BackgroundGradient>
            </a>

            <a
              href={linkFour?.url ?? links.Blog}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <BackgroundGradient
                className="w-full overflow-hidden bg-gray-80 p-6 lg:min-h-[100px]"
                animate={false}
                borderRadius={20}
              >
                <div className="flex items-start gap-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1724_1488)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.3994 29.3779H18.1772H29.8004V9.35525H27.329V27.1567H13.0876V21.6001C13.6313 21.6001 14.1714 21.6077 14.7086 21.6154C15.9269 21.6326 17.1307 21.6497 18.329 21.5768C20.0118 21.4745 21.4321 20.7516 22.5162 19.3802C23.5159 18.1155 23.6571 16.6918 23.6387 15.1596C23.6112 12.8725 22.1341 11.0112 20.0984 10.2327C18.4771 9.61272 16.8045 9.61697 15.1225 9.62123C15.0503 9.62142 14.9781 9.6216 14.9059 9.62174C13.87 9.62366 12.8341 9.62319 11.804 9.62272C11.35 9.62251 10.8971 9.62231 10.4459 9.62231V18.1309H13.0763V11.8001C13.4825 11.8001 13.8831 11.7975 14.2795 11.7949C15.1806 11.7889 16.0609 11.7831 16.9403 11.8087C18.0222 11.8402 19.0332 12.2134 19.8238 12.9308C21.3269 14.295 21.3536 18.103 18.9707 19.002C18.232 19.2807 17.4342 19.526 16.6556 19.5521C15.0768 19.6049 13.4959 19.5952 11.915 19.5855C11.2922 19.5817 10.6693 19.5779 10.0466 19.5779H5.14218V4.64341H22.9679V2.65332H2.65234V21.6779H10.3994V25.4891V29.3779ZM24.29 4.64467H25.6471H27.3844V7.70987H29.7982V2.66797H24.29V4.64467Z"
                        fill="#959499"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1724_1488">
                        <rect width="28" height="28" fill="white" transform="translate(2 2)" />
                      </clipPath>
                    </defs>
                  </svg>

                  <div className="flex-1">
                    <Typography as="h4" size="md" className="text-base font-semibold">
                      {linkFour?.heading ?? 'River on Paragraph'}
                    </Typography>
                    <Typography as="p" size="md" className="!mt-1 text-gray-20">
                      {linkFour?.subheading ?? 'Get River updates on Paragraph.'}
                    </Typography>
                  </div>
                </div>
              </BackgroundGradient>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
