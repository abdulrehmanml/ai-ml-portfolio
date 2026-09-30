import Link from "next/link"
import { Container } from "@/components/layout/container"

export function Footer() {
  return (
    <footer className="border-t border-border/70">
      <Container>
        <div className="flex flex-col gap-8 pt-5">
          {/* Brand */}
          <div className="flex max-w-md flex-col gap-2">
            <Link
              href="/"
              className="text-base font-semibold tracking-tight transition-colors hover:text-primary"
            >
              Abdul Rehman
            </Link>

            <p className="text-sm leading-6 text-muted-foreground md:text-[13px] lg:whitespace-nowrap lg:text-sm">
              AI/ML Engineer building practical machine learning, AI, and
              data-driven applications.
            </p>
          </div>
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