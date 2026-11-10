"use client"

import { motion } from "motion/react"
import { motionEase } from "@/lib/motion"

type SlideUpProps = {
  children: React.ReactNode
  className?: string
}

export function SlideUp({ children, className }: SlideUpProps) {
  return (
    <motion.div
      data-reduced-motion="visible"
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: motionEase,
      }}
    >
      {children}
    </motion.div>
  )
}