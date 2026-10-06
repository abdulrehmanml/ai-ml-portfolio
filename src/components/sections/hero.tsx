"use client"

import Link from "next/link"
import type { ElementType } from "react"
import {ArrowRight, BrainCircuit, Cloud, Database, Network, Server, } from "lucide-react"
import { SiGit, SiPython, SiScikitlearn } from "@icons-pack/react-simple-icons"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideUp } from "@/components/animations/slide-up"
import { Float } from "@/components/animations/float"
import { scrollToSection } from "@/lib/scroll-to-section"

type TechNodeProps = {
  label: string
  icon?: ElementType
  className?: string
}

function TechNode({ label, icon: Icon, className }: TechNodeProps) {
  return (
    <div
      className={`group flex w-fit items-center gap-2 rounded-xl border border-border/80 bg-card px-3 py-2 text-xs font-medium text-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/10 hover:text-primary hover:shadow-[0_4px_18px_-8px_var(--primary)] dark:bg-card dark:hover:border-primary/70 dark:hover:bg-primary/15 dark:hover:text-primary dark:hover:shadow-[0_4px_20px_-8px_var(--primary)] ${className ?? ""}`}
    >
      {Icon && (
        <Icon
          className="size-4 shrink-0 text-primary transition-transform duration-200 group-hover:scale-105"
          aria-hidden="true"
        />
      )}

      <span className="whitespace-nowrap">{label}</span>
    </div>
  )
}

type WorkflowItemProps = {
  icon: ElementType
  label: string
}

function WorkflowItem({ icon: Icon, label }: WorkflowItemProps) {
  return (
    <div className="flex h-11 items-center gap-3 rounded-lg border border-border/30 bg-background/45 px-3">
      <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
        <Icon className="size-4" aria-hidden="true" />
      </div>

      <span className="text-sm font-medium leading-none text-foreground">
        {label}
      </span>

      <span className="ml-auto h-px w-10 bg-border/70" aria-hidden="true" />
    </div>
  )
}

export function Hero() {
  return (
    <Section className="relative flex min-h-0 items-center overflow-hidden border-b border-accent/30 pt-26 sm:pt-32 lg:pt-24 xl:pt-28 2xl:pt-36">
      <Container>
        <div className="relative grid items-center gap-10 lg:gap-16 lg:grid-cols-[1fr_0.95fr]">
          {/* Main content */}
          <div className="relative z-10 max-w-3xl">
            <FadeIn>
              <p className="mb-5 font-mono text-sm font-medium uppercase tracking-[0.2em] text-primary">
                AI / ML Engineer
              </p>
            </FadeIn>

            <SlideUp>
              <h1 className="w-full max-w-none text-[30px] font-semibold leading-[1.08] tracking-tight text-justify [text-align-last:justify] min-[380px]:text-[32px] min-[420px]:text-[34px] min-[560px]:max-w-2xl min-[560px]:text-[40px] sm:text-6xl md:max-w-none md:text-5xl lg:max-w-2xl lg:text-6xl lg:text-left lg:[text-align-last:auto] md:max-lg:text-left md:max-lg:[text-align-last:auto]">
                <span className="block whitespace-nowrap md:inline lg:block lg:whitespace-nowrap min-[560px]:whitespace-normal">
                  Building AI/ML systems{" "}
                </span>

                <span className="inline whitespace-nowrap text-primary text-[0.94em] lg:block lg:whitespace-nowrap min-[560px]:whitespace-normal">
                  from data to deployment.
                </span>
              </h1>
            </SlideUp>

            <FadeIn>
              <p className="mt-6 w-full max-w-none text-justify text-base leading-7 text-muted-foreground min-[560px]:max-w-2xl min-[560px]:text-justify sm:text-lg md:max-lg:max-w-none lg:max-w-none lg:text-left">
                I build practical machine learning and AI applications, turning data and AI models into usable solutions.
              </p>
            </FadeIn>

            <SlideUp>
              <div className="mt-8 flex w-fit max-w-full flex-row flex-wrap gap-3">
                <Link
                  href="#featured-work"
                  onClick={(event) => {
                    event.preventDefault()
                    scrollToSection("featured-work")
                  }}
                  className="group inline-flex h-11 items-center justify-center gap-2 rounded-[10px] bg-primary px-5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/80 hover:shadow-[0_8px_24px_-8px_var(--primary)] active:translate-y-0 active:bg-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  View Projects
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="#contact"
                  onClick={(event) => {
                    event.preventDefault()
                    scrollToSection("contact")
                  }}
                  className="inline-flex h-11 items-center justify-center rounded-[10px] border border-primary/35 bg-card px-5 text-sm font-medium text-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/65 hover:bg-primary/5 hover:shadow-[0_4px_18px_-10px_var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Contact Me
                </Link>
              </div>
            </SlideUp>
          </div>

          {/* AI / ML engineering visual */}
          <div
            aria-hidden="true"
            className="relative mx-auto hidden h-97.5 w-145 max-w-full overflow-visible lg:block lg:-translate-x-28"
          >
            {/* Ambient glow */}
            <div className="absolute inset-[22%] rounded-full bg-primary/3 blur-3xl" />

            {/* Central engineering panel */}
            <div className="absolute left-1/2 top-1/2 z-10 w-70 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-card p-5 shadow-[0_18px_45px_-18px_var(--primary)]">
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <BrainCircuit className="size-5" aria-hidden="true" />
                </div>

                <div className="w-47.5">
                  <p className="whitespace-nowrap text-[21px] font-semibold leading-5 tracking-tight text-foreground">
                    AI / ML Engineering
                  </p>

                  <p className="mt-0.5 whitespace-nowrap font-mono text-[13px] font-medium leading-4 tracking-[0.17em] text-muted-foreground">
                    END-TO-END WORKFLOW
                  </p>
                </div>
              </div>

              {/* Vertical workflow */}
              <div className="mt-4 space-y-1.5">
                <WorkflowItem icon={Database} label="Data" />

                <WorkflowItem icon={Network} label="Model" />

                <WorkflowItem icon={Server} label="API" />

                <WorkflowItem icon={Cloud} label="Deploy" />
              </div>
            </div>

            {/* Python — X only */}
            <Float
              className="absolute left-[6%] top-[6%] z-20"
              duration={5.8}
              delay={0.2}
              x={[0, 10, -6, 5, 0]}
              y={[0, 0, 0, 0, 0]}
            >
              <TechNode label="Python" icon={SiPython} />
            </Float>

            {/* Scikit-learn — Y only */}
            <Float
              className="absolute right-[2%] top-[10%] z-20"
              duration={6.4}
              delay={0.9}
              x={[0, 0, 0, 0, 0]}
              y={[0, -8, 7, -5, 0]}
            >
              <TechNode label="Scikit-learn" icon={SiScikitlearn} />
            </Float>

            {/* RAG — 2D */}
            <Float
              className="absolute left-[10%] top-[48%] z-20"
              duration={6.8}
              delay={1.2}
              x={[0, 5, -4, 3, 0]}
              y={[0, -6, 7, -4, 0]}
            >
              <TechNode label="RAG" icon={Database} />
            </Float>

            {/* API — X only */}
            <Float
              className="absolute right-[6%] top-[46%] z-20"
              duration={5.5}
              delay={1.7}
              x={[0, -7, 5, -4, 0]}
              y={[0, 0, 0, 0, 0]}
            >
              <TechNode label="API" icon={Server} />
            </Float>

            {/* Git — 2D */}
            <Float
              className="absolute bottom-[2%] left-[8%] z-20"
              duration={6.7}
              delay={0.6}
              x={[0, -6, 7, -4, 0]}
              y={[0, 5, -6, 4, 0]}
            >
              <TechNode label="Git" icon={SiGit} />
            </Float>

            {/* Cloud — Y only */}
            <Float
              className="absolute bottom-[2%] right-[8%] z-20"
              duration={6}
              delay={1.5}
              x={[0, 0, 0, 0, 0]}
              y={[0, 6, -7, 4, 0]}
            >
              <TechNode label="Cloud" icon={Cloud} />
            </Float>
          </div>
        </div>

        {/* Mobile / tablet AI / ML visual */}
        <div className="mt-6 md:mt-8 lg:hidden">
          <div className="mx-auto w-70 rounded-2xl border border-border bg-card p-5 shadow-[0_16px_40px_-18px_var(--primary)]">
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <BrainCircuit className="size-5" aria-hidden="true" />
              </div>

              <div className="min-w-0">
                <p className="text-base font-semibold leading-5 tracking-tight text-foreground">
                  AI / ML Engineering
                </p>

                <p className="mt-1 font-mono text-[9px] font-medium leading-4 tracking-[0.16em] text-muted-foreground">
                  END-TO-END WORKFLOW
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-1.5">
              <WorkflowItem icon={Database} label="Data" />

              <WorkflowItem icon={Network} label="Model" />

              <WorkflowItem icon={Server} label="API" />

              <WorkflowItem icon={Cloud} label="Deploy" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
