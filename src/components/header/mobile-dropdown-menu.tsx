import { ChevronRight } from 'lucide-react'
import React, { useEffect } from 'react'
import { Button } from '../ui/button'

import { communityItems, developersItems, governanceItems } from '@/constants/links'
import { cn } from '@/lib/utils'
import useCMSState from '@/stores/cms.store'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { Typography } from '../ui/typography'

type FooterAccordionProps = {
  triggerText?: string
  children?: React.ReactNode
}

function MobileAccordion({ triggerText, children }: FooterAccordionProps) {
  return (
    <Accordion
      onClick={(e) => e.stopPropagation()}
      type="single"
      className="w-full !bg-transparent"
      collapsible
    >
      <AccordionItem className="!bg-transparent" value="item-1">
        <AccordionTrigger>
          <Typography as="span" size="lg" className="!font-medium text-gray-10">
            {triggerText}
          </Typography>
        </AccordionTrigger>
        <AccordionContent className="bg-gray-90">{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default function MobileDropownMenu({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}) {
  useEffect(() => {
    // close on resize
    const handleResize = () => {
      setIsOpen(false)
      document.documentElement.style.position = ''
      document.documentElement.style.top = ''
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [setIsOpen])

  const handleOpen = () => {
    setIsOpen(!isOpen)

    // lock scroll
    document.documentElement.style.position = isOpen ? '' : 'fixed'
    document.documentElement.style.top = isOpen ? '' : '0'
  }

  const { cmsData } = useCMSState()

  //! map the icon for now since we only allow text changes in the CMS
  const communityLinks = cmsData?.headerFooterLink.communityItems.map((item, index) => ({
    heading: item.text,
    icon: communityItems[index].icon,
    url: item.url as string,
  }))

  const governanceLinks = cmsData?.headerFooterLink.governanceItems.map((item, index) => ({
    heading: item.text,
    icon: governanceItems[index].icon,
    url: item.url as string,
  }))

  const developerLinks = cmsData?.headerFooterLink.developerItems.map((item, index) => ({
    heading: item.text,
    icon: developersItems[index].icon,
    url: item.url as string,
  }))

  return (
    <>
      <button
        aria-label="hamburger menu"
        className="relative z-20 flex h-8 w-8 items-center justify-center rounded-full bg-[#3a394166] lg:hidden"
        onClick={() => handleOpen()}
      >
        <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </button>

      <div
        className={cn(
          'mobile-dropdown fixed inset-x-0 top-0 z-0 h-[calc(100vh)] w-screen gap-4 overflow-y-scroll rounded-none border-none !bg-gray-90 px-4 py-4 pb-20 pt-24 md:px-8',
          isOpen && 'open',
        )}
      >
        <div className="flex flex-col gap-4">
          <Button
            onClick={() => window.open('https://docs.river.build/introduction', '_blank')}
            variant="primary"
            size="lg"
            className="w-full text-sm"
            aria-label="Read the docs"
          >
            <div className="flex items-center gap-1">
              <span>Read the docs</span>
              <ChevronRight color="#02000A" height={16} width={16} />
            </div>
          </Button>
          <Button
            onClick={() => window.open('https://docs.river.build/run/introduction', '_blank')}
            variant="secondary"
            size="lg"
            className="w-full text-sm"
            aria-label="Run a node"
          >
            Run a node
          </Button>
        </div>
        <div className="mt-4 flex h-auto flex-col gap-4 bg-transparent">
          <MobileAccordion triggerText="Developers">
            {developerLinks?.map(({ heading, icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg px-1 py-3 transition-all hover:bg-gray-50"
              >
                {icon}
                <div>
                  <Typography as="h5" size="sm" className="font-medium">
                    {heading}
                  </Typography>
                </div>
              </a>
            ))}
          </MobileAccordion>
          <MobileAccordion triggerText="Governance">
            {governanceLinks?.map(({ heading, icon, url }, index) => (
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                key={index}
                className="flex items-center gap-3 rounded-lg px-1 py-3 transition-all hover:bg-gray-50"
              >
                {icon}
                <div>
                  <Typography as="h5" size="sm" className="font-medium">
                    {heading}
                  </Typography>
                </div>
              </a>
            ))}
          </MobileAccordion>
          <MobileAccordion triggerText="Community">
            {communityLinks?.map(({ heading, icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg px-1 py-3 transition-all hover:bg-gray-50"
              >
                {icon}
                <div>
                  <Typography as="h5" size="sm" className="!text-sm font-medium">
                    {heading}
                  </Typography>
                </div>
              </a>
            ))}
          </MobileAccordion>
        </div>
      </div>
    </>
  )
}
