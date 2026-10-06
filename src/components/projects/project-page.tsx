import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { ArrowLeft, ArrowUpRight, MoveRight } from "lucide-react"

import { FadeIn } from "@/components/animations/fade-in"
import { SlideUp } from "@/components/animations/slide-up"
import { Container } from "@/components/layout/container"
import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { Section } from "@/components/layout/section"
import type { Project } from "@/types"

type ProjectPageProps = {
  project: Project
}

export function ProjectPage({ project }: ProjectPageProps) {
  return (
    <>
      <Navbar />

      <main className="bg-background">
        {/* Project Hero */}
        <Section id="project-hero" className="pt-28 min-[560px]:pt-32 lg:pt-28">
          <Container>
            <FadeIn>
              <Link href="/projects" className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-primary">
                <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true"/>
                Back to Projects
              </Link>
            </FadeIn>

            <div className="mt-12 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-16">
              {/* Project information */}
              <SlideUp>
                <div className="max-w-3xl">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-primary">
                      Project
                    </span>
                    <span className="h-px w-12 bg-accent/40" aria-hidden="true"/>
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {project.category}
                    </span>
                  </div>

                  <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-primary min-[560px]:text-[48px] lg:text-[60px] lg:whitespace-nowrap">
                    {project.title}
                  </h1>

                  <p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground min-[560px]:text-base lg:text-[15px]">
                    {project.description}
                  </p>
                </div>
              </SlideUp>

              {/* Project preview */}
              <FadeIn>
                <div className="mx-auto w-100 max-w-[calc(100vw-2rem)]">
                    <div className="project-card-shadow group relative overflow-hidden rounded-2xl border border-border bg-card p-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_32px_-16px_var(--primary)]">
                    <div className="pointer-events-none absolute right-0 top-0 h-9 w-9 border-r border-t border-primary/40 transition-all duration-300 group-hover:h-11 group-hover:w-11 group-hover:border-primary/60"
                      aria-hidden="true"/>
                    <div className="pointer-events-none absolute bottom-0 left-0 h-9 w-9 border-b border-l border-accent/30 transition-all duration-300 group-hover:h-11 group-hover:w-11 group-hover:border-accent/50" aria-hidden="true"/>
                    <div className="group relative overflow-hidden rounded-xl border border-border/70">
                      <Image src={project.image} alt={`${project.title} project preview`} width={800} height={500} sizes="(min-width: 1024px) 28vw, (min-width: 560px) 70vw, 100vw" className="aspect-[1.6] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]" priority/>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </Container>
        </Section>

        {/* Divider */}
        <div className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent" aria-hidden="true"/>

        {/* Problem & Solution */}
        <Section id="problem-solution">
          <Container>
            <FadeIn>
              <div className="w-full">
                <p className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-primary">
                  Problem & Solution
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-tight min-[560px]:text-[40px] lg:text-[44px]">
                  From a defined problem{" "}
                  <span className="text-primary">to a practical solution.</span>
                </h2>
              </div>
            </FadeIn>

            <div className="mx-auto mt-10 grid w-full max-w-2xl gap-10 px-4 min-[560px]:px-6 lg:max-w-none lg:px-8 lg:grid-cols-2 lg:gap-16">
              <SlideUp>
                <article className="group h-full border-t-2 border-border/80 px-3 pt-5 transition-colors duration-200 hover:border-primary">
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-primary">
                    01 — Problem
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                    What needed to be solved?
                  </h3>

                  <p className="mt-4 max-w-xl text-justify text-sm leading-7 text-muted-foreground min-[560px]:text-base lg:text-[15px]">
                    {project.problem}
                  </p>
                </article>
              </SlideUp>

              <SlideUp>
                <article className="group h-full border-t-2 border-border/80 px-3 pt-5 transition-colors duration-200 hover:border-primary">
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-primary">
                    02 — Solution
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                    What was built?
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground min-[560px]:text-base lg:text-[15px]">
                    {project.solution}
                  </p>
                </article>
              </SlideUp>
            </div>
          </Container>
        </Section>

        {/* Divider */}
        <div className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent" aria-hidden="true"/>

        {/* Approach / Workflow */}
        <Section id="project-workflow">
          <Container>
            <FadeIn>
              <div className="w-full">
                <p className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-primary">
                  Approach / Workflow
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-tight min-[560px]:text-[40px] lg:text-[44px]">
                  How the project moves{" "}
                  <span className="text-primary">from input to outcome.</span>
                </h2>
              </div>
            </FadeIn>

            {/* Desktop workflow */}
            <div className="mx-auto mt-14 hidden w-full max-w-6xl lg:flex lg:items-start lg:gap-4">
              {project.workflow.map((step, index) => (
                <React.Fragment key={`${step}-${index}`}>
                  {/* Workflow step */}
                  <div className="min-w-0 flex-1">
                    <SlideUp>
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
                    </SlideUp>
                  </div>
              
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
            </div>

            {/* Mobile / Tablet workflow */}
            <div className="mt-12 lg:hidden">
              <div className="flex flex-col items-center">
                {project.workflow.map((step, index) => (
                  <React.Fragment key={step}>
                    {/* Workflow step */}
                    <SlideUp>
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
                    </SlideUp>

                    {/* Mobile arrow */}
                    {index < project.workflow.length - 1 && (
                      <div className="flex h-12 items-center justify-center" aria-hidden="true">
                        <MoveRight className="size-5 rotate-90 text-muted-foreground transition-all duration-300 hover:translate-y-1 hover:text-primary" strokeWidth={1.5}/>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Divider */}
        <div className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent" aria-hidden="true"/>

        {/* Tools & Technologies */}
        <Section id="technology-stack">
          <Container>
            <FadeIn>
              <div className="w-full">
                <p className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-primary">
                  Tools & Technologies
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-tight min-[560px]:text-[40px] lg:text-[44px]">
                  Technologies used to{" "}
                  <span className="text-primary">build the project.</span>
                </h2>
              </div>
            </FadeIn>
              <SlideUp>
                <div className="mx-auto mt-10 w-full max-w-3xl px-4 min-[560px]:px-6 lg:px-0">
                  <div className="flex flex-wrap justify-center gap-3">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="rounded-lg border border-border bg-card px-4 py-2.5 font-mono text-xs text-muted-foreground shadow-[0_2px_8px_-6px_var(--primary)] transition-colors duration-200 hover:border-primary/40 hover:text-primary">
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </SlideUp>
          </Container>
        </Section>

        {/* Divider */}
        <div className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent" aria-hidden="true"/>

        {/* Key Work / Technical Details */}
        <Section id="key-work">
          <Container>
            <FadeIn>
              <div className="w-full">
                <p className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-primary">
                  Key Work
                </p>

                <h2 className="mt-4 max-w-5xl text-3xl font-semibold leading-[1.08] tracking-tight min-[560px]:text-[40px] lg:text-[44px]">
                  What went into{" "}
                  <span className="text-primary">building the project.</span>
                </h2>
              </div>
            </FadeIn>

            <div className="mx-auto mt-10 grid w-full max-w-2xl gap-x-10 gap-y-8 px-4 min-[560px]:grid-cols-2 min-[560px]:px-6 lg:max-w-none lg:px-8 lg:grid-cols-4">
              {project.keyWork.map((item, index) => (
                <SlideUp key={`${item}-${index}`}>
                  <div className="group border-t-2 border-border/80 px-3 pt-5 transition-colors duration-200 hover:border-primary">
                    <span className="font-mono text-xs font-medium tracking-[0.12em] text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-4 text-base font-medium leading-6 tracking-tight transition-colors duration-200 group-hover:text-primary">
                      {item}
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

        {/* Project Preview */}
        <Section id="project-preview">
          <Container>
            <FadeIn>
              <div className="w-full">
                <p className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-primary">
                  Project Preview
                </p>

                <h2 className="mt-4 max-w-5xl text-3xl font-semibold leading-[1.08] tracking-tight min-[560px]:text-[40px] lg:text-[44px]">
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
        <div className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent" aria-hidden="true"/>

        {/* Project Links */}
        <Section id="project-links">
          <Container>
            <FadeIn>
              <div className="w-full">
                <p className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-primary">
                  Project Links
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-tight min-[560px]:text-[40px] lg:text-[44px]">
                  Explore the source code and live application.
                </h2>
              </div>
            </FadeIn> 
            <div className="mt-8 grid w-fit gap-x-4 gap-y-6 min-[560px]:grid-cols-2">
              <SlideUp>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="group block w-48 border-t-2 border-border/80 py-4 pl-3 transition-colors duration-200 hover:border-primary">
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
              </SlideUp>  
              {project.liveDemoUrl && (
                <SlideUp>
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
                      <ArrowUpRight className="ml-1 size-5 shrink-0 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </div>
                  </a>
                </SlideUp>
              )}
            </div>
          </Container>
        </Section>

        {/* Divider */}
        <div
          className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent"
          aria-hidden="true"
        />

        {/* Project CTA */}
        <Section id="project-cta">
          <Container>
            <FadeIn>
              <div className="project-card-shadow mx-auto flex w-[calc(100%-2rem)] flex-col gap-6 rounded-2xl border border-border bg-card p-6 min-[560px]:w-fit min-[560px]:p-7 lg:w-fit lg:max-w-full lg:flex-row lg:items-center lg:justify-center lg:gap-7 lg:px-8 lg:py-7">
                <div>
                  <p className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-primary">
                    HAVE A PROJECT?
                  </p>

                  <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-tight min-[560px]:text-[40px] lg:text-[44px]">
                    Let&apos;s build{" "}
                    <span className="text-primary">something useful.</span>
                  </h2>

                  <p className="mt-4 max-w-3xl text-justify text-sm leading-6 text-muted-foreground min-[560px]:text-base lg:text-[15px]">
                    Have a problem, dataset, or application idea? Let&apos;s discuss the right approach.
                  </p>
                </div>

                <Link href="/#contact" className="group mx-auto inline-flex h-11 w-fit items-center justify-center gap-2 rounded-[10px] bg-primary px-5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/80 hover:shadow-[0_8px_24px_-8px_var(--primary)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 lg:mx-0">
                  Get in touch
                  <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.7} aria-hidden="true"/>
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
