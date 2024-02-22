import beaverAscii from '@/data/beaver-ascii-2.json'
import useBeaverStore from '@/stores/beaver.store'
import { motion } from 'framer-motion'
import { useCallback, useEffect } from 'react'

const Text = ({
  x,
  y,
  fill = 'url(#gradient)',
  index = 0,
}: {
  x: string
  y: string
  fill?: string
  index: number
}) => {
  const curCharIndex = useBeaverStore((state) => state.lines[index]).curCharIndex
  const updateText = useBeaverStore((state) => state.updateLineText)
  const isAnimating = useBeaverStore((state) => state.lines[index].animating)
  const line = useBeaverStore((state) => state.lines[index])
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        updateText(index)
      }, 40)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [index, isAnimating, updateText, curCharIndex])

  return (
    <text fill={fill} x={x} y={y} dangerouslySetInnerHTML={{ __html: line.currentText.join('') }} />
  )
}

const getRandomElement = (arr: any[]) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

export default function AsciiHeroImage() {
  const { startLineAnimation, getNonAnimatingLines } = useBeaverStore.getState()
  const animatNextLine = useCallback(() => {
    const nonAnimatingLines = getNonAnimatingLines()
    if (nonAnimatingLines.length === 0) return
    const randomLine = getRandomElement(nonAnimatingLines)
    startLineAnimation(randomLine)
  }, [getNonAnimatingLines, startLineAnimation])

  useEffect(() => {
    const intervalId = setInterval(animatNextLine, 1)
    return () => {
      clearInterval(intervalId)
    }
  }, [animatNextLine])

  return (
    <div className="relative mx-auto flex aspect-[1.22] w-[90%] flex-1 items-center justify-center md:mx-auto md:w-[60%] lg:mx-0 lg:w-[55%]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 808 640"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="13px"
        strokeLinecap="round"
        className="w-full"
      >
        <defs>
          <motion.linearGradient
            gradientTransform="rotate(180 0.5 0.5)"
            animate={{
              gradientTransform: ['rotate(0 0.5 0.5)', 'rotate(180 0.5 0.5)'],
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              },
            }}
            id="gradient"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#82E4A3" />
            <stop offset="0.5" stopColor="#E48290" />
            <stop offset="1" stopColor="#8C84F7" />
          </motion.linearGradient>
        </defs>

        <g>
          {beaverAscii.map((line, index) => {
            return <Text index={index} key={index} x={line.x} y={line.y} fill="url(#gradient)" />
          })}
        </g>
        {/* <rect x="0" y="0" width="500" height="200" fill="url(#gradient)" /> */}
      </svg>
    </div>
  )
}
