import { links } from '@/constants/links'
import { Blog } from '../icons/Blog'
import { Github } from '../icons/Github'
import Logo from '../icons/Logo'
import { Towns } from '../icons/Towns'
import { X } from '../icons/X'
import NavigationLink from '../navigation-link'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { Typography } from '../ui/typography'
import { CommunityLinks, DeveloperLinks, GovernanceLinks } from './links'

type FooterAccordionProps = {
  triggerText?: string
  children?: React.ReactNode
}

function FooterSocialMedia() {
  return (
    <div className="flex items-center gap-4 opacity-60 md:gap-6">
      <NavigationLink href={links.Towns}>
        <Towns />
      </NavigationLink>
      <NavigationLink href={links.X}>
        <X />
      </NavigationLink>
      <NavigationLink href={links.Github}>
        <Github />
      </NavigationLink>
      <NavigationLink href={links.Blog}>
        <Blog />
      </NavigationLink>
    </div>
  )
}

function FooterAccordion({ triggerText, children }: FooterAccordionProps) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-base font-medium text-gray-10">
          {triggerText}
        </AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default function Footer() {
  return (
    <footer className="gray-90 flex w-full flex-col items-center justify-center py-4 md:py-24">
      <div className="flex w-full max-w-7xl flex-col px-4 md:items-start md:justify-between lg:flex-row">
        <div className="flex w-full flex-col lg:w-auto">
          <div className="flex w-full items-center justify-between">
            <Logo />
            <div className="md:hidden">
              <FooterSocialMedia />
            </div>
          </div>
          <div className="mt-6 lg:mt-8">
            <Typography as="h5" size="lg" className="text-lg font-medium">
              Sign up for our newsletter
            </Typography>
            <Typography as="p" size="sm" className="mt-1 font-normal text-gray-20">
              Get the most recent news about River Protocol
            </Typography>
            <iframe
              src="https://blog.river.build/embed?minimal=true"
              height="45"
              frameBorder="0"
              scrolling="no"
              className="mt-6 w-full lg:w-[400px]"
            ></iframe>

            {/* <div className="mt-6 flex h-12 items-center gap-4 overflow-hidden rounded-[100px] border border-solid border-[#ffffff] border-opacity-5 bg-gray-80 p-1">
              <Input
                className="flex-1 rounded-[100px] !border-none bg-gray-80 bg-transparent px-3 text-base text-gray-10 !outline-none ring-0 placeholder:text-gray-10 focus:ring-0"
                placeholder="Email"
              />
              <Button
                variant="primary"
                size="sm"
                className="h-[37px] w-[100px] text-sm"
                aria-label="Subscribe"
              >
                Subscribe
              </Button>
            </div> */}
          </div>
        </div>

        <div className="hidden items-start gap-8 lg:flex">
          <div className="flex w-44 flex-col space-y-3">
            <Typography as="h5" size="md" className="font-medium text-gray-10">
              Developers
            </Typography>
            <DeveloperLinks />
          </div>

          <div className="flex w-44 flex-col space-y-3">
            <Typography as="h5" className="font-medium text-gray-10">
              Governance
            </Typography>
            <GovernanceLinks />
          </div>
          <div className="flex w-44 flex-col space-y-3">
            <Typography as="h5" className="text-base font-medium text-gray-10">
              Community
            </Typography>
            <CommunityLinks />
          </div>
        </div>

        <div className="mt-8 w-full lg:hidden">
          <FooterAccordion triggerText="Developers">
            <div className="flex flex-col gap-4">
              <DeveloperLinks />
            </div>
          </FooterAccordion>
          <FooterAccordion triggerText="Governance">
            <div className="flex flex-col gap-4">
              <GovernanceLinks />
            </div>
          </FooterAccordion>
          <FooterAccordion triggerText="Community">
            <div className="flex flex-col gap-4">
              <CommunityLinks />
            </div>
          </FooterAccordion>
        </div>
      </div>

      <div className="mt-8 flex w-full max-w-7xl items-center justify-center px-4 pb-4 md:mt-16 md:justify-between md:pb-0">
        <div className="hidden md:flex">
          <FooterSocialMedia />
        </div>
        <Typography as="p" size="sm" className="text-center font-normal text-gray-20">
          © River Eridanus Association, 2024
        </Typography>
      </div>
    </footer>
  )
}
