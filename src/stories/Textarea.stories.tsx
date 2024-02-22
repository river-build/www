/* tslint:disable */
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Textarea> = { component: Textarea, title: 'Input/Textarea' }

export default meta

type Story = StoryObj<typeof Textarea>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Base: Story = {
  render() {
    return (
      <div>
        <div
          style={{
            width: '400px',
          }}
        >
          <Label htmlFor="base-textarea">Input Your Name</Label>
          <Textarea placeholder="Enter Value Here" id="base-textarea" />
        </div>
      </div>
    )
  },
}

export const Disabled: Story = {
  render() {
    return (
      <div>
        <div
          style={{
            width: '400px',
          }}
        >
          <Label htmlFor="disabled-textarea">Input Your Name</Label>
          <Textarea disabled placeholder="Disabled" id="disabled-textarea" />
        </div>
      </div>
    )
  },
}

export const HasError: Story = {
  render() {
    return (
      <div>
        <div
          style={{
            width: '400px',
          }}
        >
          <Label htmlFor="error-textarea">Input Your Name</Label>
          <Textarea
            placeholder="Has Error"
            id="error-textarea"
            style={{
              border: '1px solid red',
            }}
          />
        </div>
      </div>
    )
  },
}
