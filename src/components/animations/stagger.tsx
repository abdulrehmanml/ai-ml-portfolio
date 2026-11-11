"use client"

import { motion } from "motion/react"
import { motionDistance, motionDuration, motionEase, motionStagger, motionViewport, } from "@/lib/motion"

type StaggerProps = {
  children: React.ReactNode
  className?: string
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: motionStagger.normal,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: motionDistance.enter,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionDuration.enter,
      ease: motionEase,
    },
  },
}

export function StaggerContainer({
  children,
  className,
}: StaggerProps) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={motionViewport}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: StaggerProps) {
  return (
    <motion.div
      data-reduced-motion="visible"
      className={className}
      variants={itemVariants}
    >
      {children}
    </motion.div>
  )
}