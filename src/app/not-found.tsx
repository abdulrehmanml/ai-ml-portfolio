import Link from "next/link"
import { ArrowLeft, ArrowRight, FileQuestion } from "lucide-react"

import { Container } from "@/components/layout/container"
import { FadeIn } from "@/components/animations/fade-in"
import { Navbar } from "@/components/layout/navbar"
import { Section } from "@/components/layout/section"

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="bg-background">
        <Section id="not-found" className="flex min-h-[calc(100svh-4.5rem)] items-center">
          <Container>
            <FadeIn>
              <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-1 text-center">
                <div className="flex size-14 items-center justify-center rounded-2xl border border-border bg-card text-primary shadow-sm">
                  <FileQuestion className="size-6" aria-hidden="true" />
                </div>

                <p className="mt-6 font-mono text-sm font-medium uppercase tracking-[0.14em] text-primary">
                  404 — Page Not Found
                </p>

                <h1 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-tight min-[560px]:text-[40px] lg:text-[56px] lg:leading-[1.05]">
                  The page you&apos;re looking for isn&apos;t available.
                </h1>

                <p className="mt-4 w-full max-w-xl text-sm leading-6 text-muted-foreground min-[560px]:max-w-3xl min-[560px]:text-base lg:max-w-3xl lg:text-[15px]">
                  The page may have been moved, removed, or the address may be incorrect.
                </p>

                <div className="mt-8 flex w-full flex-row items-center justify-center gap-3">
                  <Link href="/" className="group inline-flex h-11 w-fit max-w-full items-center justify-center gap-2 rounded-[10px] bg-primary px-5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/80 hover:shadow-[0_8px_24px_-8px_var(--primary)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true"/>
                    Back Home
                  </Link>

                  <Link href="/projects" className="group inline-flex h-11 w-fit max-w-full items-center justify-center gap-2 rounded-[10px] border border-border bg-card px-5 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 hover:shadow-[0_4px_18px_-10px_var(--primary)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    View Projects
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true"/>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </Container>
        </Section>
      </main>
    </>
  )
}
