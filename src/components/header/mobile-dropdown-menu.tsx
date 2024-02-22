import { ChevronRight } from 'lucide-react'
import React, { useEffect } from 'react'
import { Button } from '../ui/button'

import { communityItems, developersItems, governanceItems } from '@/constants/links'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
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

export default function MobileDropownMenu() {
  const [isOpen, setIsOpen] = React.useState(false)

  useEffect(() => {
    // close on resize
    const handleResize = () => {
      setIsOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Popover modal={true} open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger
        aria-label="hamburger menu"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-60 lg:hidden"
      >
        <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        className="scroll-container h-[calc(100vh-40px)] w-screen gap-4 overflow-y-scroll rounded-none border-none !bg-gray-90 px-4 py-4 pb-20 pt-8"
      >
        <div className="flex flex-col gap-4">
          <Button
            onClick={() => window.open('https://docs.river.build', '_blank')}
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
            {developersItems.map(({ heading, icon, url }, index) => (
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
            {governanceItems.map(({ heading, icon, url }, index) => (
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
            {communityItems.map(({ heading, icon, url }, index) => (
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
      </PopoverContent>
    </Popover>
  )
}
