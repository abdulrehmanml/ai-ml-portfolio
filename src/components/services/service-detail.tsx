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
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger"
import type { Project } from "@/types"
import type { Service } from "@/data/services"
import { ContactCtaLink } from "@/components/analytics/cta-link-projects-services"

type ServiceDetailProps = { service: Service }

export function ServiceDetail({ service }: ServiceDetailProps) {
  const Icon = service.icon

  const longestCapability = service.capabilities.reduce(
    (longest, capability) =>
      capability.length > longest.length ? capability : longest,
    "",
  )

  const relatedProjects = service.projectSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is Project => project !== undefined)

  return (
    <>
      <Navbar />

      <main className="bg-background">
        {/* Hero */}
        <Section id="service-hero" className="pt-24 min-[390px]:pt-26 min-[560px]:pt-24 lg:pt-28 xl:pt-32 2xl:pt-36">
          <Container>
            <FadeIn>
              <div className="pt-0 min-[560px]:pt-10 lg:pt-0">
                <Link
                  href="/#services"
                  className="group inline-flex w-fit items-center gap-2 rounded-md px-1 py-1 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <ArrowLeft
                    className="size-4 transition-transform duration-200 group-hover:-translate-x-1"
                    aria-hidden="true"
                  />
                  Back to Services
                </Link>
              </div>
            </FadeIn>

            <div className="mx-auto mt-6 grid w-full max-w-360 min-w-0 grid-cols-1 gap-10 min-[560px]:mt-8 lg:mt-4 lg:pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(300px,380px)] lg:items-center lg:gap-x-[clamp(24px,3.5vw,64px)]">
              <SlideUp>
                <div className="lg:flex lg:h-full lg:items-center">
                  <div className="w-full">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-primary">
                        {service.number}
                      </span>

                      <span
                        className="h-px w-12 shrink-0 bg-accent/40 dark:bg-primary/70"
                        aria-hidden="true"
                      />

                      <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                        Service
                      </span>
                    </div>

                    <h1 className="mt-5 w-full min-w-0 text-balance text-[clamp(30px,4vw,60px)] font-semibold leading-[1.08] tracking-tight text-foreground">
                      {service.title}
                    </h1>

                    <p className="mt-6 w-full min-w-0 text-left text-sm leading-7 text-muted-foreground min-[560px]:text-base lg:text-[15px]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </SlideUp>

              <FadeIn>
                <div className="mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto">
                  <div className="project-card-shadow group relative w-full overflow-hidden rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-[0_12px_32px_-16px_var(--primary)] min-[560px]:p-7">
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
                    </div>
                    <div
                      className="mt-5 h-px w-12 bg-accent/40 transition-all duration-300 group-hover:w-16 group-hover:bg-primary/60"
                      aria-hidden="true"
                    />
                    <p className="mt-4 text-left text-sm leading-6 text-muted-foreground">
                      {service.shortDescription}
                    </p>
                    <div className="mt-6 border-t border-border pt-4">
                      <p className="text-center font-mono text-[10px] uppercase tracking-[0.08em] text-muted-foreground transition-colors duration-300 group-hover:text-muted-foreground">
                        {service.technologies
                          .slice(0, 3)
                          .map((technology, index) => (
                            <span key={technology}>
                              {index > 0 && (
                                <span
                                  className="mx-2 text-primary"
                                  aria-hidden="true"
                                >
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
        <div
          className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent dark:via-[#70C9C2]/70"
          aria-hidden="true"
        />

        {/* Capabilities */}
        <Section id="what-i-can-do">
          <Container>
            <FadeIn>
              <div className="w-full max-w-none text-left">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-primary min-[560px]:text-sm min-[560px]:tracking-[0.16em]">
                  What I Can Do
                </p>

                <h2 className="mt-4 w-full min-w-0 text-left text-[28px] font-semibold leading-[1.1] tracking-tight min-[390px]:text-3xl min-[560px]:text-4xl md:text-[42px] xl:text-[clamp(36px,3vw,44px)] 2xl:text-[48px]">
                  Practical capabilities for{" "}
                  <span className="text-primary">
                    real project requirements
                  </span>
                </h2>
              </div>
            </FadeIn>

            <StaggerContainer className="mx-auto mt-10 grid w-fit max-w-full grid-cols-1 gap-x-12 gap-y-8 min-[560px]:grid-cols-2 lg:grid-cols-3">
              {service.capabilities.map((capability, index) => (
                <StaggerItem key={capability}>
                  <div className="group relative mx-auto h-full w-full border-t-2 border-border/80 px-3 pt-5 transition-colors duration-200 hover:border-primary lg:w-auto lg:px-4">
                    <span
                      className="invisible block h-0 overflow-hidden whitespace-nowrap text-base font-semibold tracking-tight"
                      aria-hidden="true"
                    >
                      {longestCapability}
                    </span>                  
                    <div className="pl-4 min-[560px]:pl-6 lg:pl-0">
                      <span className="font-mono text-xs font-medium text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-3 text-base font-semibold tracking-tight transition-colors duration-200 group-hover:text-primary">
                        {capability}
                      </h3>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </Section>

        {/* Divider */}
        <div
          className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent dark:via-[#70C9C2]/70"
          aria-hidden="true"
        />

        {/* Process */}
        <Section id="how-i-work">
          <Container>
            <div className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(460px,520px)] lg:items-center lg:gap-6 xl:mx-auto xl:w-fit xl:max-w-full xl:grid-cols-[minmax(0,680px)_minmax(0,520px)] xl:gap-10 2xl:grid-cols-[680px_520px] 2xl:gap-8 *:min-w-0">
              <FadeIn>
                <div className="flex w-full lg:h-full lg:items-center">
                  <div className="w-full">
                    <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-primary min-[560px]:text-sm min-[560px]:tracking-[0.16em]">
                      How I Work
                    </p>
                    <h2 className="mt-4 w-full min-w-0 text-balance text-[28px] font-semibold leading-[1.1] tracking-tight min-[390px]:text-3xl min-[560px]:text-4xl md:text-[42px] xl:text-[clamp(36px,3vw,44px)] 2xl:text-[48px]">
                      A clear workflow from{" "}
                      <span className="text-primary">
                        problem to usable solution
                      </span>
                    </h2>
                  </div>
                </div>
              </FadeIn>

              <div className="w-full min-w-0">
                <StaggerContainer className="mx-auto grid w-fit min-w-0 max-w-full gap-0 xl:mx-0">
                  {service.process.map((step, index) => (
                    <StaggerItem key={step}>
                      <div className="group relative grid min-w-0 gap-3 px-3 py-5 before:absolute before:inset-x-4 before:top-0 before:border-t-2 before:border-border/80 min-[560px]:before:inset-x-0 min-[560px]:grid-cols-[56px_max-content] min-[560px]:items-center min-[560px]:gap-5">
                        <span className="px-6 font-mono text-xs font-medium text-primary min-[560px]:pl-8 min-[560px]:pr-0">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="min-w-0 whitespace-normal px-6 text-sm font-medium leading-6 transition-colors duration-200 group-hover:text-primary min-[560px]:pl-8 min-[560px]:pr-3 min-[560px]:text-base min-[560px]:whitespace-nowrap">
                          {step}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </Container>
        </Section>

        {/* Divider */}
        <div
          className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent dark:via-[#70C9C2]/70"
          aria-hidden="true"
        />

        {/* Tools */}
        <Section id="tools-technologies">
          <Container>
            <FadeIn>
              <div className="w-full">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-primary min-[560px]:text-sm min-[560px]:tracking-[0.16em]">
                  Tools & Technologies
                </p>
                        
                <h2 className="mt-4 w-full min-w-0 text-[28px] font-semibold leading-[1.1] tracking-tight min-[390px]:text-3xl min-[560px]:text-4xl md:text-[42px] xl:text-[clamp(36px,3vw,44px)] 2xl:text-[48px]">
                  Technologies used{" "}
                  <span className="text-primary">across the workflow</span>
                </h2>
              </div>
            </FadeIn>
                        
            <div className="mx-auto mt-10 w-full max-w-3xl px-4 min-[560px]:px-6 lg:px-0">
              <StaggerContainer className="flex flex-wrap justify-center gap-x-3 gap-y-6">
                {service.technologies.map((technology) => (
                  <StaggerItem key={technology}>
                    <span className="rounded-lg border border-border bg-card px-4 py-2.5 font-mono text-xs text-muted-foreground shadow-[0_2px_8px_-6px_var(--primary)] transition-colors duration-200 hover:border-primary/40 hover:text-primary">
                      {technology}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </Container>
        </Section>

        {/* Divider */}
        <div
          className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent dark:via-[#70C9C2]/70"
          aria-hidden="true"
        />

        {/* Relevant Work */}
        <Section id="relevant-work">
          <Container>
            <FadeIn>
              <div className="mx-auto w-full max-w-none text-left">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-primary min-[560px]:text-sm min-[560px]:tracking-[0.16em]">
                  Relevant Work
                </p>

                <h2 className="mt-4 w-full min-w-0 text-left text-[28px] font-semibold leading-[1.1] tracking-tight min-[390px]:text-3xl min-[560px]:text-4xl md:text-[42px] xl:text-[clamp(36px,3vw,44px)] 2xl:text-[48px]">
                  Related projects{" "}
                  <span className="text-primary">from my portfolio</span>
                </h2>
              </div>
            </FadeIn>
            {relatedProjects.length > 0 ? (
              <StaggerContainer className="mx-auto mt-10 flex w-full max-w-6xl flex-wrap justify-center gap-4 px-4 min-[560px]:px-0">
                {relatedProjects.map((project) => (
                  <StaggerItem
                    key={project.slug}
                    className={[
                      "w-full min-w-0 max-w-105",
                      relatedProjects.length >= 2
                        ? "min-[560px]:w-[calc(50%-0.5rem)]"
                        : "",
                      relatedProjects.length >= 3
                        ? "min-[1280px]:w-[calc(33.333%-0.667rem)]"
                        : "",
                    ].join(" ")}
                  >
                    <ProjectCard project={project} showImage={false} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
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
        <div
          className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent dark:via-[#70C9C2]/70"
          aria-hidden="true"
        />

        {/* CTA */}
        <Section id="service-cta">
          <Container>
            <FadeIn>
              <div className="project-card-shadow mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-6 rounded-2xl border border-border bg-card p-6 min-[560px]:p-7 lg:w-fit lg:flex-row lg:items-center lg:gap-x-6 xl:gap-x-8 lg:px-8 lg:py-7">
                <div className="min-w-0 lg:w-fit lg:flex-none">
                  <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-primary min-[560px]:text-sm min-[560px]:tracking-[0.16em]">
                    Start a Project
                  </p>

                  <h2 className="mt-4 w-full min-w-0 text-[28px] font-semibold leading-[1.1] tracking-tight min-[390px]:text-3xl min-[560px]:text-4xl md:text-[42px] xl:text-[clamp(36px,3vw,44px)] 2xl:text-[48px] 2xl:whitespace-nowrap">
                    Need help with{" "}
                    <span className="text-primary">{service.title}?</span>
                  </h2>

                  <p className="mt-4 w-full max-w-2xl text-left text-sm leading-6 text-muted-foreground min-[560px]:text-base lg:text-[15px]">
                    Share the problem, requirements, or project details and we can discuss the right approach.
                  </p>
                </div>

                <ContactCtaLink
                  href="/#contact"
                  ctaLocation="service_page"
                  className="group mx-auto inline-flex h-11 w-fit shrink-0 items-center justify-center gap-2 rounded-[10px] bg-primary px-5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/80 hover:shadow-[0_8px_24px_-8px_var(--primary)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 lg:mx-0"
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
