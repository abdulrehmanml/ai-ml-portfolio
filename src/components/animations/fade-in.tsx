"use client"

import { motion, useReducedMotion } from "motion/react"
import { motionEase } from "@/lib/motion"

type FadeInProps = {
  children: React.ReactNode
  className?: string
}

export function FadeIn({ children, className }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
      whileInView={{ opacity: 1 }}
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
