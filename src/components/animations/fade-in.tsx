"use client"

import { motion } from "motion/react"
import { motionEase } from "@/lib/motion"

type FadeInProps = {
  children: React.ReactNode
  className?: string
}

export function FadeIn({ children, className }: FadeInProps) {
  return (
    <motion.div
      data-reduced-motion="visible"
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
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