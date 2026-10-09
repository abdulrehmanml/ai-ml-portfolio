import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { FadeIn } from "@/components/animations/fade-in"
import { SlideUp } from "@/components/animations/slide-up"
import { Container } from "@/components/layout/container"
import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { Section } from "@/components/layout/section"
import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/projects/project-card"

import type { Project } from "@/types"
import type { Service } from "@/data/services"
import { ContactCtaLink } from "@/components/analytics/cta-link-projects-services"

type ServicePageProps = { service: Service }

export function ServicePage({ service }: ServicePageProps) {
  const Icon = service.icon

  const relatedProjects = service.projectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => project !== undefined)

  return (
    <>
      <Navbar />

      <main className="bg-background">
        {/* Hero */}
        <Section id="service-hero" className="pt-28 min-[560px]:pt-32 lg:pt-28">  
          <Container>
            <FadeIn>
              <div className="pt-0 min-[560px]:pt-10 lg:pt-0">
                <Link href="/#services" className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-primary">
                <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true" />
                Back to Services
                </Link>
              </div>
            </FadeIn>

            <div className="mt-6 grid gap-10 min-[560px]:mt-8 lg:mt-4 lg:pt-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-start lg:gap-16">
              <SlideUp>
                <div className="lg:flex lg:h-full lg:items-center">
                <div className="w-full">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-primary">
                      {service.number}
                    </span>

                    <span className="h-px w-12 bg-accent/40" aria-hidden="true" />

                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      Service
                    </span>
                  </div>

                  <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-primary min-[560px]:text-[48px] lg:text-[60px]">
                    {service.title}
                  </h1>

                  <p className="mt-6 max-w-2xl text-justify text-sm leading-7 text-muted-foreground min-[560px]:text-base lg:text-[15px]">
                    {service.description}
                  </p>
                </div>
                </div>
              </SlideUp>

              <FadeIn>
                <div className="mx-auto w-[calc(100%-2rem)] max-w-sm min-[560px]:w-full lg:mx-0 lg:ml-auto lg:mr-0">
                  <div className="project-card-shadow group relative w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-primary/50 hover:bg-primary/5 min-[560px]:p-7">
                    <div className="pointer-events-none absolute right-0 top-0 h-8 w-8 border-r border-t border-primary/35 transition-all duration-300 group-hover:h-10 group-hover:w-10 group-hover:border-primary/60" aria-hidden="true" />
                      <div className="pointer-events-none absolute bottom-0 left-0 h-8 w-8 border-b border-l border-accent/30 transition-all duration-300 group-hover:h-10 group-hover:w-10 group-hover:border-accent/50"
                        aria-hidden="true" />

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
                      </div>
                    <div className="mt-5 h-px w-12 bg-accent/40 transition-all duration-300 group-hover:w-16 group-hover:bg-primary/60"
                      aria-hidden="true"/>
                    <p className="mt-4 text-justify text-sm leading-6 text-muted-foreground">
                      {service.shortDescription}
                    </p>
                    <div className="mt-6 border-t border-border pt-4">
                      <p className="text-center font-mono text-[10px] uppercase tracking-[0.08em] text-muted-foreground transition-colors duration-300 group-hover:text-muted-foreground">
                        {service.technologies.slice(0, 3).map((technology, index) => (
                          <span key={technology}>
                            {index > 0 && (
                              <span className="mx-2 text-primary" aria-hidden="true">
                                ·
                              </span>
                            )}
                            {technology}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </Container>
        </Section>

        {/* Divider */}
        <div className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent" aria-hidden="true"/>

        {/* Capabilities */}
        <Section id="what-i-can-do">
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
            <div className="mx-auto mt-10 grid w-fit gap-x-12 gap-y-8 min-[560px]:grid-cols-2 lg:grid-cols-3">
              {service.capabilities.map((capability, index) => (
                <SlideUp key={capability}>
                  <div className="group relative mx-auto h-full w-full border-t-2 border-border/80 pt-5 transition-colors duration-200 hover:border-primary lg:w-64 lg:px-4">
                    <div className="pl-4 min-[560px]:pl-6 lg:pl-0">
                      <span className="font-mono text-xs font-medium text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-3 text-base font-semibold tracking-tight transition-colors duration-200 group-hover:text-primary">
                        {capability}
                      </h3>
                    </div>
                  </div>
                </SlideUp>
              ))}
            </div>
          </Container>
        </Section>

        {/* Divider */}
        <div className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent" aria-hidden="true"/>

        {/* Process */}
        <Section id="how-i-work">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-12">
              <FadeIn>
                <div className="flex w-full lg:h-full lg:items-center">
                  <div className="w-full">
                    <p className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-primary">
                      How I Work
                    </p>
                    <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-tight min-[560px]:text-[40px] lg:text-[44px]">
                      A clear workflow from{" "}
                      <span className="text-primary">
                        problem to usable solution.
                      </span>
                    </h2>
                  </div>
                </div>
              </FadeIn>

              <div className="mx-auto w-fit max-w-full">
                <div className="grid gap-0">
                  {service.process.map((step, index) => (
                    <SlideUp key={step}>
                      <div className="group relative grid gap-3 py-5 before:absolute before:inset-x-4 before:top-0 before:border-t-2 before:border-border/80 min-[560px]:before:inset-x-6 lg:before:inset-x-0 min-[560px]:grid-cols-[56px_1fr] min-[560px]:items-center min-[560px]:gap-5">
                        <span className="px-6 font-mono text-xs font-medium text-primary min-[560px]:px-8">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="px-6 text-sm font-medium leading-6 transition-colors duration-200 group-hover:text-primary min-[560px]:px-8 min-[560px]:text-base">
                          {step}
                        </p>
                      </div>                      
                    </SlideUp>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Divider */}
        <div className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent" aria-hidden="true"/>

        {/* Tools */}
        <Section id="tools-technologies">
          <Container>
            <FadeIn>
              <div className="max-w-none">
                <p className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-primary">
                  Tools & Technologies
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-tight min-[560px]:text-[40px] lg:text-[44px]">
                  Technologies used{" "}
                  <span className="text-primary">
                    across the workflow.
                  </span>
                </h2>
              </div>
            </FadeIn>

            <div className="mx-auto mt-10 w-full max-w-3xl px-4 min-[560px]:px-6 lg:px-0">
              <div className="flex flex-wrap justify-center gap-3">
                {service.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-border bg-card px-4 py-2.5 font-mono text-xs text-muted-foreground shadow-[0_2px_8px_-6px_var(--primary)] transition-colors duration-200 hover:border-primary/40 hover:text-primary"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Divider */}
        <div className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent" aria-hidden="true"/>

        {/* Relevant Work */}
        <Section id="relevant-work">
          <Container>
            <FadeIn>
              <div className="max-w-3xl">
                <p className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-primary">
                  Relevant Work
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-tight min-[560px]:text-[40px] lg:text-[44px]">
                  Related projects {" "}
                  <span className="text-primary">from my portfolio.</span>
                </h2>
              </div>
            </FadeIn>
            {relatedProjects.length > 0 ? (
              <div className="mx-auto mt-10 grid w-full max-w-4xl grid-cols-1 gap-6 px-4 min-[560px]:grid-cols-2 min-[560px]:px-0">
                {relatedProjects.map((project) => (
                  <SlideUp key={project.slug}>
                    <ProjectCard project={project} showImage={false} />
                  </SlideUp>
                ))}
              </div>
            ) : (
              <div className="mt-10 max-w-2xl border-t border-border pt-6">
                <p className="text-sm leading-6 text-muted-foreground">
                  Relevant project work will be added here as the portfolio expands.
                </p>
              </div>
            )}
          </Container>
        </Section>

        {/* Divider */}
        <div className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent" aria-hidden="true"/>

        {/* CTA */}
        <Section id="service-cta">
          <Container>
            <FadeIn>
              <div className="project-card-shadow mx-auto flex w-[calc(100%-2rem)] flex-col gap-6 rounded-2xl border border-border bg-card p-6 min-[560px]:w-fit min-[560px]:p-7 lg:w-fit lg:max-w-full lg:flex-row lg:items-center lg:justify-center lg:gap-7 lg:px-8 lg:py-7">
                <div>
                  <p className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-primary">
                    Start a Project
                  </p>

                  <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-tight min-[560px]:text-[40px] lg:text-[44px] lg:leading-[1.08]">
                    Need help with{" "}
                    <span className="text-primary">
                      {service.title}?
                    </span>
                  </h2>

                  <p className="mt-4 max-w-2xl text-justify text-sm leading-6 text-muted-foreground min-[560px]:text-base lg:text-[15px]">
                    Share the problem, requirements, or project details and we can discuss the right approach.
                  </p>
                </div>

                <ContactCtaLink
                  href="/#contact"
                  ctaLocation="service_page"
                  className="group mx-auto inline-flex h-11 w-fit items-center justify-center gap-2 rounded-[10px] bg-primary px-5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/80 hover:shadow-[0_8px_24px_-8px_var(--primary)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 lg:mx-0"
                >
                  Get in touch
                  <ArrowRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </ContactCtaLink>
              </div>
            </FadeIn>
          </Container>
        </Section>

      </main>

      <Footer />
    </>
  )
}
