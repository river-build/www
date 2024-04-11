import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-full',
          'border border-gray-60 ring-offset-gray-10',
          'bg-gray-80 text-base text-white',
          'px-4 py-2',
          'file:border-0 file:bg-transparent file:text-sm file:font-medium',
          'placeholder:text-[#706A7B] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 ',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
