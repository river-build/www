import { Button as ButtonComponent } from '@/components/ui/button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ButtonComponent> = { component: ButtonComponent, title: 'Common/Button' }

export default meta

type Story = StoryObj<typeof ButtonComponent>

export const Button: Story = {
  args: {
    children: 'Button',
    size: 'lg',
    variant: 'primary',
  },
  argTypes: {
    size: { control: 'select', options: ['lg', 'sm', 'default'] },
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
}
