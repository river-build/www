import { cn } from '@/lib/utils'
import React from 'react'

interface TypographyProps {
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'
  children: React.ReactNode
  id?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'label' | 'a'
}

const SIZE = {
  xs: 'text-xs leading-4',
  sm: 'text-sm leading-5',
  md: 'text-base leading-6',
  lg: 'text-base leading-6 md:text-lg md:leading-7',
  '2xl': 'text-base leading-6 md:text-xl md:leading-8',
  '3xl': 'text-xl leading-8 md:text-[28px] md:leading-9',
  '4xl': 'text-[28px] leading-9 md:text-[40px] md:leading-[3rem]',
  '5xl': 'text-[40px] leading-[48px] md:text-[56px] md:leading-[4rem]',
  '6xl': 'text-[32px] leading-[40px] md:text-[64px] md:leading-[5rem]',
}

const baseClass = cn('text-gray-10 font-primary')

export function Typography({
  className,
  size = 'md',
  children,
  id,
  as: Element = 'h2',
}: TypographyProps) {
  return (
    <Element id={id} className={cn(baseClass, SIZE[size], className)}>
      {children}
    </Element>
  )
}
