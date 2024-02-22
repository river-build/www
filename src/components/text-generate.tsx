import useIntersectionObserver from '@/lib/hooks/use-intersection-observer'
import { cn } from '@/lib/utils'
import { motion, stagger, useAnimate } from 'framer-motion'
import { useEffect, useState } from 'react'

const getRandomCharacter = (): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const randomIndex = Math.floor(Math.random() * characters.length)
  return characters[randomIndex]
}

const TextGenerateEffect = ({ words, className }: { words: string; className?: string }) => {
  const [scope, animate] = useAnimate()
  const entry = useIntersectionObserver(scope, {
    rootMargin: '0px 0px -300px 0px',
  })
  const isVisible = !!entry?.isIntersecting

  let letterArray = words.split('')

  const randomizedWordsLetter = letterArray.map((letter) => {
    if (letter === ' ') return ' '
    return getRandomCharacter()
  })

  const [currentWords, setCurrentWords] = useState(randomizedWordsLetter)

  useEffect(() => {
    if (!isVisible) return

    animate(
      'span',
      {
        opacity: 1,
      },
      {
        duration: 0.5,
        delay: stagger(0.03),
        ease: 'easeInOut',
      },
    )

    // animate each letter from random to actual using framer motion

    // turn the random letters into the actual word one by one
    // loop through the words and letters and replace the random letters with the actual ones
    // set the state on each letter change
    currentWords.forEach((_, index) => {
      const newWords = [...currentWords]

      setTimeout(() => {
        newWords[index] = letterArray[index]

        setCurrentWords((prev) => {
          return [...prev.slice(0, index), letterArray[index], ...prev.slice(index + 1)]
        })
      }, 30 * index)
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope.current, isVisible])

  const renderWords = () => {
    return currentWords.map((word, wordIndex) => (
      <motion.span key={wordIndex} className="opacity-30">
        {
          // if the word is a space, render a space
          word === ' ' ? ' ' : word
        }
      </motion.span>
    ))
  }

  return (
    <div className={cn('font-bold', className)}>
      <div className="mt-4">
        <h3 ref={scope} className="font-family-inherit font-size-inherit text-gray-10">
          {renderWords()}
        </h3>
      </div>
    </div>
  )
}

export default TextGenerateEffect
