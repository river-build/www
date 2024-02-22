import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Dialog> = { component: Dialog, title: 'Common/Dialog' }

export default meta

type Story = StoryObj<typeof Dialog>

export const Body: Story = {
  render() {
    return (
      <Dialog>
        <DialogTrigger>
          <Button asChild>
            <span>Open</span>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-primary">Are you sure absolutely sure?</DialogTitle>
            <DialogDescription className="font-primary">
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
  },
}
