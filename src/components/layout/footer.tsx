import Link from "next/link"
import { Container } from "@/components/layout/container"

export function Footer() {
  return (
    <footer className="border-t border-border/70">
      <Container>
        <div className="flex flex-col gap-4 pt-4">
          {/* Brand */}
          <div className="flex max-w-md flex-col gap-2">
            <Link
              href="/"
              className="text-base font-semibold tracking-tight transition-colors hover:text-primary"
            >
              Abdul Rehman
            </Link>

            <p className="text-sm leading-6 text-muted-foreground md:text-[13px] lg:text-sm">
              Turning data and models into practical, deployable solutions.
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-3 border-t border-border/60 py-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Abdul Rehman. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
