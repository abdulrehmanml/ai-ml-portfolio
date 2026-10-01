import * as React from "react"
import { cn } from "@/lib/utils"

type SectionProps = React.HTMLAttributes<HTMLElement>

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "scroll-mt-24 pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-16",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  )
}
