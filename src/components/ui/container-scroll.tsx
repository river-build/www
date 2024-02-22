import { motion, useScroll, useTransform } from 'framer-motion'
import React from 'react'

export const ContainerScroll = ({
  children,
  containerRef,
}: {
  children: React.ReactNode
  containerRef: React.MutableRefObject<any>
}) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  })

  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1]
  }

  const rotate = useTransform(scrollYProgress, [0.3, 0.8], [20, 0])
  const scale = useTransform(scrollYProgress, [0.3, 0.8], scaleDimensions())
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div className="relative flex w-full items-center justify-center" ref={containerRef}>
      <div
        className="relative aspect-[1.7] w-full"
        style={{
          perspective: '1000px',
        }}
      >
        <motion.div
          // style={{
          //   rotateX: rotate, // rotate in X-axis
          //   scale,
          // }}
          initial={{ rotateX: 25, scale: 0.9 }}
          whileInView={{ rotateX: 0, scale: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.25 }}
          viewport={{
            once: true,
          }}
          className="flex aspect-[1.7] w-full items-center justify-center"
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}
