import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ArrowUpRight, MoveRight } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideUp } from "@/components/animations/slide-up"
import { Container } from "@/components/layout/container"
import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { Section } from "@/components/layout/section"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger"
import type { Project } from "@/types"
import { ContactCtaLink } from "@/components/analytics/cta-link-projects-services"

type ProjectPageProps = {
  project: Project
}

export function ProjectPage({ project }: ProjectPageProps) {
  const longestKeyWork = project.keyWork.reduce(
    (longest, item) =>
      item.length > longest.length ? item : longest,
    "",
  )

  const projectLinksHeadingAccent = (
    project.projectLinksDescription ?? "project resources"
  ).replace(/^Explore the\s*/i, "")
  
  return (
    <>
      <Navbar />

      <main className="bg-background">
        {/* Project Hero */}
        <Section
          id="project-hero"
          className="pt-24 min-[390px]:pt-26 min-[560px]:pt-24 lg:pt-28 xl:pt-32 2xl:pt-36"
        >
          <Container>
            {/* Back navigation */}
            <FadeIn>
              <div className="pt-0 min-[560px]:pt-10 lg:pt-0">
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                >
                  <ArrowLeft
                    className="size-4 transition-transform duration-200 group-hover:-translate-x-1"
                    aria-hidden="true"
                  />
                  Back to Projects
                </Link>
              </div>
            </FadeIn>          
            {/* Project information and preview */}
            <div className="mx-auto mt-6 grid w-full max-w-360 min-w-0 grid-cols-1 gap-10 min-[560px]:mt-8 lg:mt-4 lg:pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(300px,400px)] lg:items-center lg:gap-x-[clamp(24px,3.5vw,64px)]">
              {/* Project information */}
              <SlideUp>
                <div className="lg:flex lg:h-full lg:items-center">
                  <div className="w-full">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-primary">
                        Project
                      </span>
          
                      <span
                        className="h-px w-12 shrink-0 bg-accent/40 dark:bg-primary/70"
                        aria-hidden="true"
                      />
        
                      <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                        {project.category}
                      </span>
                    </div>
          
                    <h1 className="mt-5 w-full min-w-0 text-balance text-[clamp(30px,4vw,60px)] font-semibold leading-[1.08] tracking-tight text-foreground">
                      {project.title}
                    </h1>
          
                    <p className="mt-6 w-full min-w-0 text-left text-sm leading-7 text-muted-foreground min-[560px]:text-base lg:text-[15px]">
                      {project.description}
                    </p>
                  </div>
                </div>
              </SlideUp>
          
              {/* Project preview */}
              <FadeIn>
                <div className="mx-auto w-full max-w-100 lg:mx-0 lg:ml-auto">
                  <div className="project-card-shadow group relative w-full overflow-hidden rounded-2xl border border-border bg-card p-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_32px_-16px_var(--primary)]">
                    <div
                      className="pointer-events-none absolute right-0 top-0 h-9 w-9 border-r border-t border-primary/40 transition-all duration-300 group-hover:h-11 group-hover:w-11 group-hover:border-primary/60"
                      aria-hidden="true"
                    />
        
                    <div
                      className="pointer-events-none absolute bottom-0 left-0 h-9 w-9 border-b border-l border-accent/30 transition-all duration-300 group-hover:h-11 group-hover:w-11 group-hover:border-accent/50"
                      aria-hidden="true"
                    />
        
                    <div className="relative overflow-hidden rounded-xl border border-border/70">
                      <Image
                        src={project.image}
                        alt={`${project.title} project preview`}
                        width={800}
                        height={500}
                        sizes="(min-width: 448px) 400px, calc(100vw - 2rem)"
                        className="aspect-[1.6] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                        priority
                      />
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

        {/* Problem & Solution */}
        <Section id="problem-solution">
          <Container>
            <FadeIn>
              <div className="w-full">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-primary min-[560px]:text-sm min-[560px]:tracking-[0.16em]">
                  Problem & Solution
                </p>

                <h2 className="mt-4 w-full min-w-0 text-[28px] font-semibold leading-[1.1] tracking-tight min-[390px]:text-3xl min-[560px]:text-4xl md:text-[42px] xl:text-[clamp(36px,3vw,44px)] 2xl:text-[48px]">
                  From a defined problem{" "}
                  <span className="text-primary">to a practical solution.</span>
                </h2>
              </div>
            </FadeIn>

            <StaggerContainer className="mx-auto mt-10 grid w-full max-w-2xl grid-cols-1 gap-10 min-[560px]:px-6 lg:max-w-none lg:grid-cols-2 lg:gap-16 lg:px-8">
              <StaggerItem>
                <article className="group h-full w-full border-t-2 border-border/80 pt-5 transition-colors duration-200 hover:border-primary">
                  <div className="px-4 min-[560px]:px-5 lg:px-6">
                    <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-primary">
                      01 — Problem
                    </p>

                    <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                      What was the objective?
                    </h3>

                    <p className="mt-4 min-w-0 text-left text-sm leading-7 text-muted-foreground min-[560px]:text-base lg:text-[15px]">
                      {project.problem}
                    </p>
                  </div>
                </article>
              </StaggerItem>

              <StaggerItem>
                <article className="group h-full w-full border-t-2 border-border/80 pt-5 transition-colors duration-200 hover:border-primary">
                  <div className="px-4 min-[560px]:px-5 lg:px-6">
                    <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-primary">
                      02 — Solution
                    </p>

                    <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                      What was built?
                    </h3>

                    <p className="mt-4 min-w-0 text-left text-sm leading-7 text-muted-foreground min-[560px]:text-base lg:text-[15px]">
                      {project.solution}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            </StaggerContainer>
          </Container>
        </Section>

        {/* Divider */}
        <div
          className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent dark:via-[#70C9C2]/70"
          aria-hidden="true"
        />

        {/* Approach / Workflow */}
        <Section id="project-workflow">
          <Container>
            <FadeIn>
              <div className="w-full">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-primary min-[560px]:text-sm min-[560px]:tracking-[0.16em]">
                  Approach / Workflow
                </p>

                <h2 className="mt-4 w-full min-w-0 text-[28px] font-semibold leading-[1.1] tracking-tight min-[390px]:text-3xl min-[560px]:text-4xl md:text-[42px] xl:text-[clamp(36px,3vw,44px)] 2xl:text-[48px]">
                  How the project moves{" "}
                  <span className="text-primary">from input to outcome.</span>
                </h2>
              </div>
            </FadeIn>

            {/* Desktop workflow */}
            <StaggerContainer className="mx-auto mt-14 hidden w-full max-w-6xl lg:flex lg:items-start lg:gap-4">
              {project.workflow.map((step, index) => (
                <React.Fragment key={`${step}-${index}`}>
                  {/* Workflow step */}
                  <StaggerItem className="min-w-0 flex-1">
                    <div className="group w-full text-center transition-transform duration-300 hover:-translate-y-1">
                      {/* Node */}
                      <div className="flex justify-center">
                        <div className="flex size-12 items-center justify-center rounded-full border border-border bg-background font-mono text-xs font-medium text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10 group-hover:shadow-[0_0_20px_-8px_var(--primary)]">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>
                      {/* Step */}
                      <h3 className="mt-6 px-2 text-base font-semibold leading-6 tracking-tight transition-colors duration-300 group-hover:text-primary">
                        {step}
                      </h3>
                    </div>
                  </StaggerItem>

                  {/* Desktop arrow */}
                  {index < project.workflow.length - 1 && (
                    <div
                      className="flex w-12 shrink-0 items-center justify-center pt-4 xl:w-16"
                      aria-hidden="true"
                    >
                      <MoveRight
                        className="h-7 w-14 text-muted-foreground transition-all duration-300 hover:translate-x-1 hover:text-primary"
                        strokeWidth={1.5}
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </StaggerContainer>

            {/* Mobile / Tablet workflow */}
            <div className="mt-12 lg:hidden">
              <StaggerContainer className="flex flex-col items-center">
                {project.workflow.map((step, index) => (
                  <React.Fragment key={`${step}-${index}`}>
                    {/* Workflow step */}
                    <StaggerItem>
                      <div className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1">
                        {/* Node */}
                        <div className="flex size-12 items-center justify-center rounded-full border border-border bg-background font-mono text-xs font-medium text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10 group-hover:shadow-[0_0_20px_-8px_var(--primary)]">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        {/* Step */}
                        <h3 className="mt-4 text-base font-semibold leading-6 tracking-tight transition-colors duration-300 group-hover:text-primary">
                          {step}
                        </h3>
                      </div>
                    </StaggerItem>

                    {/* Mobile arrow */}
                    {index < project.workflow.length - 1 && (
                      <div
                        className="flex h-12 items-center justify-center"
                        aria-hidden="true"
                      >
                        <MoveRight
                          className="size-5 rotate-90 text-muted-foreground transition-all duration-300 hover:translate-y-1 hover:text-primary"
                          strokeWidth={1.5}
                        />
                      </div>
                    )}
                  </React.Fragment>
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

        {/* Tools & Technologies */}
        <Section id="technology-stack">
          <Container>
            <FadeIn>
              <div className="w-full">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-primary min-[560px]:text-sm min-[560px]:tracking-[0.16em]">
                  Tools & Technologies
                </p>

                <h2 className="mt-4 w-full min-w-0 text-[28px] font-semibold leading-[1.1] tracking-tight min-[390px]:text-3xl min-[560px]:text-4xl md:text-[42px] xl:text-[clamp(36px,3vw,44px)] 2xl:text-[48px]">
                  Technologies used to{" "}
                  <span className="text-primary">build the project.</span>
                </h2>
              </div>
            </FadeIn>
            <div className="mx-auto mt-10 w-full max-w-3xl px-4 min-[560px]:px-6 lg:px-0">
              <StaggerContainer className="flex flex-wrap justify-center gap-3">
                {project.technologies.map((technology) => (
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

        {/* Key Work / Technical Details */}
        <Section id="key-work">
          <Container>
            <FadeIn>
              <div className="w-full">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-primary min-[560px]:text-sm min-[560px]:tracking-[0.16em]">
                  Key Work
                </p>

                <h2 className="mt-4 w-full min-w-0 max-w-5xl text-[28px] font-semibold leading-[1.1] tracking-tight min-[390px]:text-3xl min-[560px]:text-4xl md:text-[42px] xl:text-[clamp(36px,3vw,44px)] 2xl:text-[48px]">
                  What went into{" "}
                  <span className="text-primary">building the project.</span>
                </h2>
              </div>
            </FadeIn>
              <StaggerContainer className="mx-auto mt-10 grid w-fit max-w-full grid-cols-1 justify-items-center gap-x-6 gap-y-7 min-[560px]:grid-cols-2 min-[560px]:gap-x-7 min-[560px]:gap-y-8 lg:grid-cols-4">
                {project.keyWork.map((item, index) => (
                  <StaggerItem key={`${item}-${index}`}>
                    <div className="group mx-auto w-fit max-w-full border-t-2 border-border/80 px-3 pt-5 transition-colors duration-200 hover:border-primary">
                      <span
                        className="invisible block h-0 overflow-hidden whitespace-nowrap text-base font-medium leading-6 tracking-tight"
                        aria-hidden="true"
                      >
                        {longestKeyWork}
                      </span>
                
                      <span className="font-mono text-xs font-medium tracking-[0.12em] text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                
                      <h3 className="mt-4 text-base font-medium leading-6 tracking-tight transition-colors duration-200 group-hover:text-primary">
                        {item}
                      </h3>
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

        {/* Project Preview */}
        <Section id="project-preview">
          <Container>
            <FadeIn>
              <div className="w-full">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-primary min-[560px]:text-sm min-[560px]:tracking-[0.16em]">
                  Project Preview
                </p>

                <h2 className="mt-4 w-full min-w-0 max-w-5xl text-[28px] font-semibold leading-[1.1] tracking-tight min-[390px]:text-3xl min-[560px]:text-4xl md:text-[42px] xl:text-[clamp(36px,3vw,44px)] 2xl:text-[48px]">
                  A closer look{" "}
                  <span className="text-primary">at the application.</span>
                </h2>
              </div>
            </FadeIn>

            <SlideUp>
              <div className="mt-10 flex justify-center px-4 min-[560px]:px-6 lg:px-0">
                <div className="group w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-card p-3 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_12px_32px_-16px_var(--primary)] min-[560px]:p-4">
                  <div className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]">
                    <Image
                      src={project.image}
                      alt={`${project.title} project preview`}
                      width={1200}
                      height={750}
                      sizes="(min-width: 1024px) 48rem, (min-width: 560px) 85vw, 92vw"
                      className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                </div>
              </div>
            </SlideUp>
          </Container>
        </Section>

        {/* Divider */}
        <div
          className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent dark:via-[#70C9C2]/70"
          aria-hidden="true"
        />

        {/* Project Links */}
        <Section id="project-links">
          <Container>
            <FadeIn>
              <div className="w-full">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-primary min-[560px]:text-sm min-[560px]:tracking-[0.16em]">
                  Project Links
                </p>
                <h2 className="mt-4 w-full min-w-0 text-[28px] font-semibold leading-[1.1] tracking-tight text-foreground min-[390px]:text-3xl min-[560px]:text-4xl md:text-[42px] xl:text-[clamp(36px,3vw,44px)] 2xl:text-[48px]">
                  Explore the{" "}
                  <span className="text-primary">
                    {projectLinksHeadingAccent}
                  </span>
                </h2>
              </div>
            </FadeIn>
              <StaggerContainer className="mx-auto mt-8 grid w-fit max-w-full grid-cols-1 justify-items-center gap-x-6 gap-y-7 min-[560px]:grid-cols-2 min-[560px]:gap-x-7 min-[560px]:gap-y-8">
                <StaggerItem>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block w-48 border-t-2 border-border/80 py-4 pl-3 transition-colors duration-200 hover:border-primary"
                >
                  <div className="inline-flex items-center">
                    <div>
                      <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-primary transition-colors duration-200 group-hover:text-primary">
                        Repository
                      </p>
                      <h3 className="mt-2 text-base font-semibold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
                        View Repository
                      </h3>
                    </div>
                    <ArrowUpRight
                      className="ml-1 size-5 shrink-0 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>
                </a>
              </StaggerItem>

              {project.documentationUrl ? (
                <StaggerItem>
                  <a
                    href={project.documentationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block w-48 border-t-2 border-border/80 py-4 pl-3 transition-colors duration-200 hover:border-primary"
                  >
                    <div className="inline-flex items-center">
                      <div>
                        <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-primary transition-colors duration-200 group-hover:text-primary">
                          Documentation
                        </p>

                        <h3 className="mt-2 text-base font-semibold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
                          View Documentation
                        </h3>
                      </div>

                      <ArrowUpRight
                        className="ml-1 size-5 shrink-0 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </div>
                  </a>
                </StaggerItem>
              ) : project.liveDemoUrl ? (
                <StaggerItem>
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block w-48 border-t-2 border-border/80 py-4 pl-3 transition-colors duration-200 hover:border-primary"
                  >
                    <div className="inline-flex items-center">
                      <div>
                        <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-primary transition-colors duration-200 group-hover:text-primary">
                          Live Application
                        </p>

                        <h3 className="mt-2 text-base font-semibold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
                          Open Application
                        </h3>
                      </div>

                      <ArrowUpRight
                        className="ml-1 size-5 shrink-0 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </div>
                  </a>
                </StaggerItem>
              ) : null}
            </StaggerContainer>
          </Container>
        </Section>

        {/* Divider */}
        <div
          className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent dark:via-[#70C9C2]/70"
          aria-hidden="true"
        />

        {/* Project CTA */}
        <Section id="project-cta">
          <Container>
            <FadeIn>
              <div className="project-card-shadow mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-6 rounded-2xl border border-border bg-card p-6 min-[560px]:w-fit min-[560px]:max-w-full min-[560px]:p-7 lg:flex-row lg:items-center lg:gap-x-6 xl:gap-x-8 lg:px-8 lg:py-7">
                <div className="min-w-0 lg:w-fit lg:flex-none">
                  <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-primary min-[560px]:text-sm min-[560px]:tracking-[0.16em]">
                    HAVE A PROJECT?
                  </p>

                  <h2 className="mt-4 w-full min-w-0 text-[28px] font-semibold leading-[1.1] tracking-tight min-[390px]:text-3xl min-[560px]:text-4xl md:text-[42px] xl:text-[clamp(36px,3vw,44px)] 2xl:text-[48px] 2xl:whitespace-nowrap">
                    Let&apos;s build{" "}
                    <span className="text-primary">something useful.</span>
                  </h2>

                  <p className="mt-4 w-full max-w-2xl text-left text-sm leading-6 text-muted-foreground min-[560px]:text-base lg:text-[15px]">
                    Have a problem, dataset, or application idea? Let&apos;s
                    discuss the right approach.
                  </p>
                </div>

                <ContactCtaLink
                  href="/#contact"
                  ctaLocation="project_page"
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
