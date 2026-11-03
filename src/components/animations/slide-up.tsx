"use client"

import { motion, useReducedMotion } from "motion/react"
import { motionEase } from "@/lib/motion"

type SlideUpProps = {
  children: React.ReactNode
  className?: string
}

export function SlideUp({ children, className }: SlideUpProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={{
        opacity: shouldReduceMotion ? 1 : 0,
        y: shouldReduceMotion ? 0 : 18,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: motionEase,
      }}
    >
      {children}
    </motion.div>
  )
}
