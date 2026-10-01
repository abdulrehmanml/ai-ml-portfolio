"use client"

import { motion } from "motion/react"

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
  duration = 6,
  delay = 0,
  x = [0, 8, -6, 4, 0],
  y = [0, -6, 8, -4, 0],
}: FloatProps) {
  return (
    <motion.div
      className={className}
      animate={{ x, y }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}
