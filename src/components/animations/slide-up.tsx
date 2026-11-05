"use client"

import { motion, useReducedMotion } from "motion/react"
import { motionDistance, motionDuration, motionEase, motionViewport, } from "@/lib/motion"

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
        y: shouldReduceMotion ? 0 : motionDistance.enter,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
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