"use client"

import { motion } from "motion/react"

type FloatProps = {
  children: React.ReactNode
  className?: string
}

export function Float({ children, className }: FloatProps) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}