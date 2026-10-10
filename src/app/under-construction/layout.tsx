import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Under Construction",
  robots: {
    index: false,
    follow: false,
  },
}

export default function UnderConstructionLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children
}
