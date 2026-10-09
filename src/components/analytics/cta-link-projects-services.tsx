"use client"

import Link from "next/link"
import type { ReactNode } from "react"
import { sendGAEvent } from "@next/third-parties/google"

type ContactCtaLinkProps = {
  href: string
  ctaLocation: string
  className?: string
  children: ReactNode
}

export function ContactCtaLink({
  href,
  ctaLocation,
  className,
  children,
}: ContactCtaLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        sendGAEvent("event", "contact_cta_click", {
          cta_location: ctaLocation,
        })
      }}
    >
      {children}
    </Link>
  )
}