import { DOCS_URL } from '@/constants/links'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { CardBody, CardContainer } from './ui/3d-card'
import { Button } from './ui/button'
import { Typography } from './ui/typography'

const TextGenerateEffect = dynamic(() => import('./text-generate'), { ssr: false })

export const MiniCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="inline-flex items-center justify-center rounded-xl border border-solid border-[#ffffff20] bg-gray-80 p-2">
      {children}
    </div>
  )
}

const BenefitInnerContent = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'flex w-full flex-1 flex-col items-center md:w-3/4 lg:w-[45%] lg:items-start',
        className,
      )}
    >
      {children}
    </div>
  )
}

function BenefitContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-8 lg:flex-row lg:gap-32">
      {children}
    </div>
  )
}

function BenefitImageContainer({
  children,
  href = '',
  className,
}: {
  children: React.ReactNode
  className?: string
  href?: string
}) {
  return (
    <CardContainer
      containerClassName={cn(
        'inter-var max-w-[500px] w-[70%] aspect-1 md:w-full lg:w-[35%] py-0 cursor-pointer',
        className,
      )}
      className="aspect-1 h-full w-full"
      onClick={() => {
        window.open(href, '_blank')
      }}
    >
      <CardBody
        className={cn(
          'relative h-full w-full overflow-hidden rounded-[48px] border border-solid border-gray-60 ',
        )}
      >
        {children}
      </CardBody>
    </CardContainer>
  )
}

export default function Benefits() {
  return (
    <section className="flex w-full items-center justify-center py-24 lg:py-48">
      <div className="flex w-full max-w-7xl flex-col items-start justify-between gap-24 px-4 md:gap-32">
        <BenefitContainer>
          <BenefitInnerContent className="order-2 lg:order-1">
            {/* <MiniCard>
              <Clock />
            </MiniCard> */}
            <TextGenerateEffect
              words="Built for messaging"
              className="w-3/5 text-center !text-[40px] font-semibold !leading-[48px] text-gray-10 md:!text-[56px] md:!leading-[4rem] lg:text-left"
            />
            <Typography
              as="p"
              size="2xl"
              className="mt-2 text-center font-normal text-gray-20 md:mt-4 lg:text-left"
            >
              River secures read/write entitlements on Base, allowing our app chain to make
              liveliness tradeoffs that keep the network as fast and 100x less expensive than paid
              centralized solutions.
            </Typography>
            <a
              href={`${DOCS_URL}/river-messaging-protocol/overview`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6"
            >
              <Button asChild variant="secondary">
                <div className="flex h-10 items-center gap-2">
                  <span className="text-gray-10">River Messaging Protocol</span>
                  <ChevronRight color="#F7F7F8" height={16} width={16} />
                </div>
              </Button>
            </a>
          </BenefitInnerContent>
          <BenefitImageContainer
            className="order-1 lg:order-2"
            href={`${DOCS_URL}/river-messaging-protocol/overview`}
          >
            <Image
              src="/images/benefits/1.webp"
              fill
              className="object-contain"
              alt="1"
              quality={100}
              priority
            />
          </BenefitImageContainer>
        </BenefitContainer>

        <BenefitContainer>
          <BenefitImageContainer href={`${DOCS_URL}/river-smart-contracts/overview`}>
            <Image
              src="/images/benefits/2.webp"
              fill
              className="object-cover"
              alt="1"
              quality={100}
              priority
            />
          </BenefitImageContainer>
          <BenefitInnerContent>
            {/* <MiniCard>
              <CodeBrowser />
            </MiniCard> */}
            <TextGenerateEffect
              words="Programmable spaces"
              className="text-center !text-[40px] font-semibold !leading-[48px] text-gray-10 md:!text-[56px] md:!leading-[4rem] lg:w-4/5 lg:text-left"
            />
            <Typography
              size="2xl"
              as="p"
              className="mt-2 text-center font-normal text-gray-20 md:mt-4 lg:text-left"
            >
              Spaces are deployed on-chain with programmable interfaces allowing the rules, like who
              can read and write, to be customized to integrate with any other external
              EVM-compatible contract.
            </Typography>
            <a
              href={`${DOCS_URL}/river-smart-contracts/overview`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6"
            >
              <Button asChild variant="secondary">
                <div className="flex h-10 items-center gap-2">
                  <span className="text-gray-10">River Smart Contracts</span>
                  <ChevronRight color="#F7F7F8" height={16} width={16} />
                </div>
              </Button>
            </a>
          </BenefitInnerContent>
        </BenefitContainer>

        <BenefitContainer>
          <BenefitInnerContent className="order-2 lg:order-1">
            {/* <MiniCard>
              <CryptoCurrencyGradient />
            </MiniCard> */}
            <TextGenerateEffect
              words="Ownable communication"
              className="text-center !text-[40px] font-semibold !leading-[48px] text-gray-10 md:!text-[56px] md:!leading-[4rem] lg:w-4/5 lg:text-left"
            />
            <Typography
              size="2xl"
              as="p"
              className="mt-2 text-center font-normal text-gray-20 md:mt-4 lg:text-left"
            >
              Space creators have true ownership over their Spaces as an on-chain asset and
              completely control their data, privacy, and engagement.
            </Typography>
            <a
              href={`${DOCS_URL}/river-smart-contracts/space-ownership`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6"
            >
              <Button asChild variant="secondary">
                <div className="flex h-10 items-center gap-2">
                  <span className="text-gray-10">Space Ownership</span>
                  <ChevronRight color="#F7F7F8" height={16} width={16} />
                </div>
              </Button>
            </a>
          </BenefitInnerContent>
          <BenefitImageContainer
            className="order-1 lg:order-2"
            href={`${DOCS_URL}/river-smart-contracts/space-ownership`}
          >
            <Image
              src="/images/benefits/3.webp"
              fill
              className="object-cover"
              alt="1"
              quality={100}
              priority
            />
          </BenefitImageContainer>
        </BenefitContainer>
      </div>
    </section>
  )
}
