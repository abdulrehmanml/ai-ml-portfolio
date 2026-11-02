import * as React from "react"
import { cn } from "@/lib/utils"

type ContainerProps = React.HTMLAttributes<HTMLDivElement>

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "site-container mx-auto w-full max-w-[var(--container-max)] px-5 md:px-8 lg:px-16 2xl:px-8 min-[1800px]:px-12",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
