import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof DropdownMenu> = { component: DropdownMenu, title: 'Common/DropdownMenu' }

export default meta

type Story = StoryObj<typeof DropdownMenu>

export const Dropdown: Story = {
  render() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button asChild>
            <span>Open</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}
