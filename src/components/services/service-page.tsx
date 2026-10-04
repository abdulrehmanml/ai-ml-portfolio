import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { FadeIn } from "@/components/animations/fade-in"
import { SlideUp } from "@/components/animations/slide-up"
import { Container } from "@/components/layout/container"
import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { Section } from "@/components/layout/section"
import { projects } from "@/data/projects"
import type { Project } from "@/types"
import type { Service } from "@/data/services"

type ServicePageProps = {
  service: Service
}

export function ServicePage({ service }: ServicePageProps) {
  const Icon = service.icon

  const relatedProjects = service.projectSlugs
    .map((slug) => projects.find((project: Project) => project.slug === slug))
    .filter((project): project is Project => project !== undefined)

  return (
    <>
      <Navbar />

      <main className="bg-background">
        {/* Hero */}
        <Section
          id="service-hero"
          className="pt-16 pb-16 min-[560px]:pt-20 min-[560px]:pb-20 lg:pt-24 lg:pb-20"
        >
          <Container>
            <FadeIn>
              <Link
                href="/#services"
                className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
              >
                <ArrowLeft
                  className="size-4 transition-transform duration-200 group-hover:-translate-x-1"
                  aria-hidden="true"
                />
                Back to Services
              </Link>
            </FadeIn>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
              <SlideUp>
                <div className="max-w-3xl">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-primary">
                      {service.number}
                    </span>

                    <span
                      className="h-px w-12 bg-accent/40"
                      aria-hidden="true"
                    />

                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      Service
                    </span>
                  </div>

                  <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-primary min-[560px]:text-[48px] lg:text-[60px]">
                    {service.title}
                  </h1>

                  <p className="mt-6 max-w-2xl text-sm leading-7 text-foreground/70 min-[560px]:text-base lg:text-[15px]">
                    {service.description}
                  </p>
                </div>
              </SlideUp>

              <FadeIn>
                <div className="mx-auto w-full max-w-sm">
                  <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_32px_-16px_var(--primary)] min-[560px]:p-7">
                    <div
                      className="pointer-events-none absolute right-0 top-0 h-8 w-8 border-r border-t border-primary/35 transition-all duration-300 group-hover:h-10 group-hover:w-10 group-hover:border-primary/60"
                      aria-hidden="true"
                    />

                    <div
                      className="pointer-events-none absolute bottom-0 left-0 h-8 w-8 border-b border-l border-accent/30 transition-all duration-300 group-hover:h-10 group-hover:w-10 group-hover:border-accent/50"
                      aria-hidden="true"
                    />

                    <div className="relative flex items-center justify-between">
                      <div className="flex min-w-0 items-center gap-4">
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/15 group-hover:shadow-[0_6px_20px_-10px_var(--primary)]">
                          <Icon
                            className="size-5 transition-transform duration-300 group-hover:scale-105"
                            aria-hidden="true"
                          />
                        </div>

                        <p className="min-w-0 flex-1 text-sm font-medium uppercase tracking-[0.09em] text-primary transition-colors duration-300 group-hover:text-primary min-[560px]:text-base">
                          {service.title}
                        </p>
                      </div>

                      <span className="ml-4 shrink-0 font-mono text-xs tracking-[0.12em] text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                        {service.number}
                      </span>
                    </div>

                    <div
                      className="mt-5 h-px w-12 bg-accent/40 transition-all duration-300 group-hover:w-16 group-hover:bg-primary/60"
                      aria-hidden="true"
                    />

                    <p className="mt-4 text-sm leading-6 text-foreground/70">
                      {service.shortDescription}
                    </p>

                    <div className="mt-6 border-t border-border pt-4">
                      <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                        {service.technologies.slice(0, 3).map((technology) => (
                          <span
                            key={technology}
                            className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </Container>
        </Section>

        {/* Divider */}
        <div
          className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent"
          aria-hidden="true"
        />

        {/* Capabilities */}
        <Section
          id="what-i-can-do"
          className="py-16 min-[560px]:py-20 lg:py-24"
        >
          <Container>
            <FadeIn>
              <div className="max-w-none">
                <p className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-primary">
                  What I Can Do
                </p>

                <h2 className="mt-4 whitespace-normal text-3xl font-semibold leading-[1.08] tracking-tight min-[560px]:text-[40px] lg:whitespace-nowrap lg:text-[44px]">
                  Practical capabilities for{" "}
                  <span className="text-primary">
                    real project requirements.
                  </span>
                </h2>
              </div>
            </FadeIn>

            <div className="mt-10 grid gap-x-8 gap-y-8 min-[560px]:grid-cols-2 lg:grid-cols-3">
              {service.capabilities.map((capability, index) => (
                <SlideUp key={capability}>
                  <div className="group relative h-full border-t border-border pt-5 transition-colors duration-200 hover:border-primary">
                    <span className="font-mono text-xs font-medium text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-3 text-base font-semibold tracking-tight transition-colors duration-200 group-hover:text-primary">
                      {capability}
                    </h3>
                  </div>
                </SlideUp>
              ))}
            </div>
          </Container>
        </Section>

        {/* Divider */}
        <div
          className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent"
          aria-hidden="true"
        />

        {/* Process */}
        <Section id="how-i-work" className="py-16 min-[560px]:py-20 lg:py-24">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
              <FadeIn>
                <div className="max-w-xl">
                  <p className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-primary">
                    How I Work
                  </p>

                  <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-tight min-[560px]:text-[40px] lg:text-[44px]">
                    A clear workflow from problem to usable solution.
                  </h2>
                </div>
              </FadeIn>

              <div className="mx-auto w-full max-w-2xl">
                <div className="grid gap-0">
                  {service.process.map((step, index) => (
                    <SlideUp key={step}>
                      <div className="group relative grid gap-3 border-t border-border py-5 min-[560px]:grid-cols-[56px_1fr] min-[560px]:items-center min-[560px]:gap-5">
                        <span className="font-mono text-xs font-medium text-primary">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="text-sm font-medium leading-6 transition-colors duration-200 group-hover:text-primary min-[560px]:text-base">
                          {step}
                        </p>
                      </div>
                    </SlideUp>
                  ))}

                  <div className="border-t border-border" aria-hidden="true" />
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Divider */}
        <div
          className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent"
          aria-hidden="true"
        />

        {/* Tools */}
        <Section
          id="tools-technologies"
          className="py-16 min-[560px]:py-20 lg:py-24"
        >
          <Container>
            <FadeIn>
              <div className="max-w-none">
                <p className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-primary">
                  Tools & Technologies
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-tight min-[560px]:text-[40px] lg:text-[44px]">
                  Technologies used across the workflow.
                </h2>
              </div>
            </FadeIn>

            <div className="mx-auto mt-10 max-w-3xl">
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-border bg-card px-4 py-2.5 font-mono text-xs text-muted-foreground transition-colors duration-200 hover:border-primary/40 hover:text-primary"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Divider */}
        <div
          className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent"
          aria-hidden="true"
        />

        {/* Relevant Work */}
        <Section
          id="relevant-work"
          className="py-16 min-[560px]:py-20 lg:py-24"
        >
          <Container>
            <FadeIn>
              <div className="max-w-3xl">
                <p className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-primary">
                  Relevant Work
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-tight min-[560px]:text-[40px] lg:text-[44px]">
                  Related projects from my portfolio.
                </h2>
              </div>
            </FadeIn>

            {relatedProjects.length > 0 ? (
              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                {relatedProjects.map((project) => (
                  <SlideUp key={project.slug}>
                    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_12px_32px_-16px_var(--primary)] min-[560px]:p-7">
                      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-primary">
                        {project.category}
                      </p>

                      <h3 className="mt-4 text-xl font-semibold tracking-tight">
                        {project.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-foreground/70">
                        {project.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="font-mono text-[11px] text-muted-foreground"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto pt-6">
                        <Link
                          href={project.href}
                          className="group/link inline-flex items-center gap-2 text-sm font-medium text-primary"
                        >
                          View Project
                          <ArrowRight
                            className="size-4 transition-transform duration-200 group-hover/link:translate-x-1"
                            aria-hidden="true"
                          />
                        </Link>
                      </div>
                    </article>
                  </SlideUp>
                ))}
              </div>
            ) : (
              <div className="mt-10 max-w-2xl border-t border-border pt-6">
                <p className="text-sm leading-6 text-foreground/70">
                  Relevant project work will be added here as the portfolio
                  expands.
                </p>
              </div>
            )}
          </Container>
        </Section>

        {/* Divider */}
        <div
          className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent"
          aria-hidden="true"
        />

        {/* CTA */}
        <Section id="service-cta" className="py-16 min-[560px]:py-20 lg:py-24">
          <Container>
            <FadeIn>
              <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 rounded-2xl border border-border bg-card p-6 min-[560px]:p-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
                <div className="max-w-2xl">
                  <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-primary">
                    Start a Project
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold tracking-tight min-[560px]:text-3xl">
                    Need help with {service.title.toLowerCase()}?
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-foreground/70">
                    Share the problem, requirements, or dataset and we can
                    discuss the right approach.
                  </p>
                </div>

                <Link
                  href="/#contact"
                  className="group inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-[10px] bg-primary px-5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/80 hover:shadow-[0_8px_24px_-8px_var(--primary)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Get in Touch
                  <ArrowRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </FadeIn>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  )
}
