import { Slot } from '@radix-ui/react-slot'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'group inline-flex items-center justify-center whitespace-nowrap text-sm font-medium relative h-10 overflow-hidden rounded-full p-[2px]',
  {
    variants: {
      variant: {
        primary: '',
        secondary: '',
      },
      size: {
        default: 'h-11',
        sm: 'h-11',
        lg: 'h-11',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

const borderClassName = cva('opacity-1 absolute z-0 inset-[-1000%] transition-all ', {
  variants: {
    variant: {
      primary: 'group-hover:opacity-0 bg-gray-10',
      secondary: 'bg-gray-60 group-hover:bg-gray-30',
    },
  },
})

const bgClassName = cva(
  'relative z-10 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-4 text-sm font-medium',
  {
    variants: {
      variant: {
        primary: 'bg-gray-10 text-gray-90',
        secondary: 'bg-gray-60 text-gray-10 transition-all group-hover:bg-gray-30',
      },
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp className={cn(buttonVariants({ variant, size }))} ref={ref} {...props}>
        <div className="relative h-full w-full">
          {variant === 'primary' && (
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_-45deg_at_50%_49.97%,#8C84F7_0deg,#82E4A3_115.19999742507935deg,#E48290_232.19999313354492deg,#8C84F7_360deg)] opacity-0 transition-opacity group-hover:opacity-100" />
          )}
          {/* <span className={borderClassName({ variant })} /> */}

          <span className={bgClassName({ variant })}>{children}</span>
        </div>
      </Comp>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
