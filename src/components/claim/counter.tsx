'use client'

import { MotionValue, motion, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'

const fontSize = 64
const padding = 6
const height = fontSize + padding

type CounterProps = {
  value: number
}
export const Counter = ({ value }: CounterProps) => {
  return (
    <div
      className="flex items-center justify-center overflow-hidden rounded leading-none text-white"
      style={{ fontSize }}
    >
      <Digit place={100} value={value} />
      <Digit place={10} value={value} />
      <Digit place={1} value={value} />
    </div>
  )
}

const Digit = ({ place, value }: { place: number; value: number }) => {
  const valueRoundedToPlace = Math.floor(value / place)
  const animatedValue = useSpring(valueRoundedToPlace)

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace)
  }, [animatedValue, valueRoundedToPlace])

  return (
    <div style={{ height }} className="relative w-[1ch] tabular-nums">
      {[...Array(10).keys()].map((i) => (
        <Number mv={animatedValue} key={i} value={i} />
      ))}
    </div>
  )
}

const Number = ({ value, mv }: { value: number; mv: MotionValue }) => {
  let y = useTransform(mv, (latest) => {
    const placeValue = latest % 10
    const offset = (10 + value - placeValue) % 10
    let diff = offset * height
    if (diff > 5) {
      diff -= 10 * height
    }
    return diff
  })

  return (
    <motion.span style={{ y }} className="absolute inset-0 flex items-center justify-center">
      {value}
    </motion.span>
  )
}
