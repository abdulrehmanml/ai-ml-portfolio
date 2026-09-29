import Link from "next/link"
import { Mail, ExternalLink } from "lucide-react"

import { Container } from "@/components/layout/container"

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/abdulrehmanml",
    icon: ExternalLink,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdul-rehmanmughal/",
    icon: ExternalLink,
  },
  {
    label: "Email",
    href: "mailto:hello.arehmanmughal@gmail.com",
    icon: Mail,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border/70">
      <Container>
        <div className="flex flex-col gap-8 pt-5 lg:flex-row lg:items-center lg:justify-between">
          {/* Brand */}          
          <div className="flex max-w-md flex-col gap-2">
            <Link
              href="/"
              className="text-base font-semibold tracking-tight transition-colors hover:text-primary"
            >
              Abdul Rehman
            </Link>

            <p className="text-sm leading-6 text-muted-foreground md:text-[13px] lg:whitespace-nowrap lg:text-sm">
                AI/ML Engineer building practical machine learning, AI, and data-driven applications.
            </p>
          </div>

          {/* Social links */}
          <nav aria-label="Social links" className="flex justify-center lg:justify-end">
            <div className="flex items-center gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={label === "Email" ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className="inline-flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </nav>
        </div>

        {/* Bottom row */}
        <div className="mt-2 border-t border-border/60 py-5">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Abdul Rehman. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}