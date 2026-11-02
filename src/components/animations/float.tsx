"use client"

import { motion, useReducedMotion } from "motion/react"

type FloatProps = {
  children: React.ReactNode
  className?: string
  duration?: number
  delay?: number
  x?: number[]
  y?: number[]
}

export function Float({
  children,
  className,
  duration = 7.5,
  delay = 0,
  x = [0, 6, -5, 4, 0],
  y = [0, -5, 6, -4, 0],
}: FloatProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      animate={shouldReduceMotion ? { x: 0, y: 0 } : { x, y }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }
      }
    >
      {children}
    </motion.div>
  )
}
