"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"

type HoverProps = {
  children: React.ReactNode
  className?: string
}

export function Hover({ children, className }: HoverProps) {
  return (
    <motion.div
      className={cn(
        "rounded-card border border-border bg-card text-card-foreground",
        "transition-colors duration-200",
        "hover:border-primary/50 hover:bg-primary/5",
        className,
      )}
      whileHover={{
        y: -4,
        scale: 1.01,
      }}
      whileTap={{
        scale: 0.99,
      }}
      transition={{
        duration: 0.18,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  )
}
