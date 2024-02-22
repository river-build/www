import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Accordion> = { component: Accordion, title: 'Common/Accordion' }

export default meta

type Story = StoryObj<typeof Accordion>

export const AccordionComponent: Story = {
  render() {
    return (
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  },
}
