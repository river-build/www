'use client'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import React from 'react'

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
  borderRadius = 24,
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  animate?: boolean
  borderRadius?: number
}) => {
  const variants = {
    initial: {
      backgroundPosition: '0 50%',
    },
    animate: {
      backgroundPosition: ['0, 50%', '100% 50%', '0 50%'],
    },
  }
  return (
    <div className={cn('group relative rounded-3xl p-[1.5px]', containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? '400% 400%' : undefined,
          borderRadius: `${borderRadius}px`,
        }}
        className={cn(
          'absolute inset-0 z-[1] opacity-0 blur-xl transition duration-500 group-hover:opacity-35',
          'background-gradient',
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? '400% 400%' : undefined,
          borderRadius: `${borderRadius}px`,
        }}
        className={cn(
          'absolute inset-0 z-[1] opacity-0 group-hover:opacity-100',
          'background-gradient',
        )}
      />

      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? '400% 400%' : undefined,
          borderRadius: `${borderRadius}px`,
        }}
        className={cn('absolute inset-0 z-[2] opacity-100 group-hover:opacity-0', 'bg-gray-60')}
      />

      <div
        style={{
          borderRadius: `${borderRadius - 1.5}px`,
        }}
        className={cn('relative z-10', className)}
      >
        {children}
      </div>
    </div>
  )
}
