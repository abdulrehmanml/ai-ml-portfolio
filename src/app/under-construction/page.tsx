import Link from "next/link"
import { ArrowLeft, ArrowRight, Construction } from "lucide-react"

import { FadeIn } from "@/components/animations/fade-in"
import { Container } from "@/components/layout/container"
import { Navbar } from "@/components/layout/navbar"
import { Section } from "@/components/layout/section"
import { Footer } from "@/components/layout/footer"

export default function UnderConstruction() {
  return (
    <>
      <Navbar />

      <div className="flex min-h-svh flex-col pt-18">
        <main className="flex flex-1 flex-col bg-background">
          <Section
            id="under-construction"
            className="flex flex-1 items-center"
          >
            <Container>
              <FadeIn>
                <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-1 text-center">
                  <div className="flex size-14 items-center justify-center rounded-2xl border border-border bg-card text-primary shadow-sm">
                    <Construction className="size-6" aria-hidden="true" />
                  </div>

                  <p className="mt-6 font-mono text-sm font-medium uppercase tracking-[0.14em] text-primary">
                    Under Construction
                  </p>

                  <h1 className="mt-4 w-full min-w-0 text-[28px] font-semibold leading-[1.1] tracking-tight min-[390px]:text-3xl min-[560px]:text-4xl md:text-[42px] xl:text-[clamp(36px,3vw,44px)] 2xl:text-[48px]">
                    This section is being prepared.
                  </h1>

                  <p className="mt-4 w-full max-w-xl text-sm leading-6 text-muted-foreground min-[560px]:max-w-3xl min-[560px]:text-base lg:max-w-3xl lg:text-[15px]">
                    This section of the portfolio is not available yet. Please check back soon for the completed experience.
                  </p>

                  <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 min-[390px]:flex-row min-[390px]:items-center">
                    <Link
                      href="/"
                      className="group inline-flex h-11 w-full min-[390px]:w-fit max-w-full items-center justify-center gap-2 rounded-[10px] bg-primary px-5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/80 hover:shadow-[0_8px_24px_-8px_var(--primary)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <ArrowLeft
                        className="size-4 transition-transform duration-200 group-hover:-translate-x-1"
                        aria-hidden="true"
                      />
                      Back Home
                    </Link>

                    <Link
                      href="/projects"
                      className="group inline-flex h-11 w-full min-[390px]:w-fit max-w-full items-center justify-center gap-2 rounded-[10px] border border-border bg-card px-5 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 hover:shadow-[0_4px_18px_-10px_var(--primary)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      View Projects
                      <ArrowRight
                        className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </Container>
          </Section>
        </main>
        <Footer />
      </div>
    </>
  )
}
