"use client"

import { motion, useReducedMotion } from "motion/react"
import { motionDuration, motionEase, motionViewport, } from "@/lib/motion"

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
      viewport={motionViewport}
      transition={{
        duration: shouldReduceMotion ? 0 : motionDuration.enter,
        ease: motionEase,
      }}
    >
      {children}
    </motion.div>
  )
}