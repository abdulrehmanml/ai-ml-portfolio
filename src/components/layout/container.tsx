import * as React from "react"
import { cn } from "@/lib/utils"

type ContainerProps = React.HTMLAttributes<HTMLDivElement>

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "site-container mx-auto w-full max-w-[var(--container-max)] px-[var(--page-padding)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
