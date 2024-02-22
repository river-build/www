/* tslint:disable */

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Input> = { component: Input, title: 'Form/Input' }

export default meta

type Story = StoryObj<typeof Input>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Base: Story = {
  render() {
    return (
      <div
        style={{
          width: '400px',
        }}
        className="grid w-full max-w-sm items-center gap-1.5"
      >
        <Label htmlFor="title">TITLE</Label>
        <Input className="mt-2" type="text" id="title" placeholder="Title" />
      </div>
    )
  },
}

export const Disabled: Story = {
  render() {
    return (
      <div
        style={{
          width: '400px',
        }}
        className="grid w-full max-w-sm items-center gap-1.5"
      >
        <Label htmlFor="title">TITLE</Label>
        <Input className="mt-2" type="text" id="title" placeholder="Title" disabled />
      </div>
    )
  },
}

export const Error: Story = {
  render() {
    return (
      <div
        style={{
          width: '400px',
        }}
        className="grid w-full max-w-sm items-center gap-1.5"
      >
        <Label htmlFor="title">TITLE</Label>
        <Input
          style={{
            borderColor: '#E24F4F',
          }}
          className="mt-2"
          type="text"
          id="title"
          placeholder="Title"
        />
      </div>
    )
  },
}
