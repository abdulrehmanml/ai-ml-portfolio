"use client"

import Link from "next/link"
import type { ElementType } from "react"
import {
  ArrowRight,
  BrainCircuit,
  Cloud,
  Database,
  Network,
  Server,
} from "lucide-react"
import { SiGit } from "@icons-pack/react-simple-icons"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideUp } from "@/components/animations/slide-up"
import { Float } from "@/components/animations/float"
import { scrollToSection } from "@/lib/scroll-to-section"
import { sendGAEvent } from "@next/third-parties/google"
import Image from "next/image"

type TechNodeProps = {
  label: string
  icon?: ElementType
  className?: string
  iconClassName?: string
  iconSrc?: string
}

function TechNode({
  label,
  icon: Icon,
  className,
  iconClassName,
  iconSrc,
}: TechNodeProps) {
  return (
    <div
      className={`group flex w-fit items-center gap-2 rounded-xl border border-border/80 bg-card px-3 py-2 text-xs font-medium text-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/10 hover:text-primary hover:shadow-[0_4px_18px_-8px_var(--primary)] dark:bg-card dark:hover:border-primary/70 dark:hover:bg-primary/15 dark:hover:text-primary dark:hover:shadow-[0_4px_20px_-8px_var(--primary)] ${className ?? ""}`}
    >
      {iconSrc ? (
        <Image
          src={iconSrc}
          alt=""
          width={20}
          height={20}
          className="size-4 shrink-0 object-contain transition-transform duration-200 group-hover:scale-105"
          aria-hidden="true"
        />
      ) : Icon ? (
        <Icon
          className={`size-4 shrink-0 transition-transform duration-200 group-hover:scale-105 ${
            iconClassName ?? "text-primary"
          }`}
          aria-hidden="true"
        />
      ) : null}

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
    <div className="mx-2 flex h-11 items-center gap-3 rounded-lg border border-[#D1D9E6] bg-background/45 px-2 min-[560px]:mx-3 min-[560px]:px-3 dark:border-[#414B5C]">
      <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
        <Icon className="size-4" aria-hidden="true" />
      </div>

      <span className="text-sm font-medium leading-none text-foreground">
        {label}
      </span>

      <span
        className="ml-auto h-px w-10 shrink-0 bg-[#C3CDDA] dark:bg-[#566273]"
        aria-hidden="true"
      />
    </div>
  )
}

export function Hero() {
  return (
    <Section className="relative flex min-h-0 items-center overflow-hidden border-b border-accent/30 pt-24 pb-14 min-[390px]:pt-26 min-[560px]:pt-28 min-[560px]:pb-16 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 lg:pt-24 lg:pb-16 xl:pt-28 xl:pb-20 2xl:pt-32 2xl:pb-24">
      <Container>
        <div className="relative mx-auto grid w-full min-w-0 grid-cols-1 items-center gap-8 lg:max-w-225 xl:max-w-290 xl:grid-cols-[minmax(0,1fr)_580px] xl:gap-6 2xl:max-w-330 2xl:gap-10 min-[1800px]:max-w-360">
          {/* Main content */}
          <div className="relative z-10 w-full min-w-0 max-w-3xl lg:max-w-none">
            <FadeIn>
              <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.16em] text-primary min-[560px]:mb-5 min-[560px]:text-sm min-[560px]:tracking-[0.2em]">
                AI Engineer
              </p>
            </FadeIn>

            <SlideUp>
              <h1 className="w-full min-w-0 text-[30px] font-semibold leading-[1.08] tracking-tight text-left min-[390px]:text-[32px] min-[560px]:text-[40px] md:text-5xl lg:text-[clamp(40px,3.8vw,48px)] xl:text-[clamp(44px,3.5vw,54px)] 2xl:text-[clamp(54px,3.7vw,68px)] min-[1800px]:text-[clamp(64px,3.8vw,72px)]">
                <span className="inline 2xl:block 2xl:whitespace-nowrap">
                  Building AI/ML systems
                </span>{" "}
                <span className="inline text-primary text-[0.94em] 2xl:block 2xl:whitespace-nowrap">
                  from data to deployment
                </span>
              </h1>
            </SlideUp>

            <FadeIn>
              <p className="mt-5 w-full max-w-none text-left text-sm leading-6 text-muted-foreground min-[560px]:mt-6 min-[560px]:text-base min-[560px]:leading-7 md:text-lg md:leading-8 xl:max-w-none">
                I build practical machine learning and AI applications, turning
                data and AI models into usable solutions.
              </p>
            </FadeIn>

            <SlideUp>
              <div className="mt-6 flex w-full max-w-full flex-wrap items-center gap-2 min-[390px]:w-fit min-[560px]:mt-8 min-[560px]:gap-3">
                <Link
                  href="#featured-work"
                  onClick={(event) => {
                    event.preventDefault()
                    scrollToSection("featured-work")
                  }}
                  className="group inline-flex h-11 items-center justify-center gap-2 rounded-[10px] bg-primary px-3 text-[13px] min-[560px]:px-5 min-[560px]:text-sm font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/80 hover:shadow-[0_8px_24px_-8px_var(--primary)] active:translate-y-0 active:bg-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  View Projects
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="#contact"
                  onClick={(event) => {
                    event.preventDefault()
                    sendGAEvent("event", "contact_cta_click", {
                      cta_location: "hero",
                    })

                    scrollToSection("contact")
                  }}
                  className="inline-flex h-11 items-center justify-center rounded-[10px] border border-primary/35 bg-card px-3 text-[13px] min-[560px]:px-5 min-[560px]:text-sm font-medium text-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/65 hover:bg-primary/5 hover:shadow-[0_4px_18px_-10px_var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Contact Me
                </Link>
              </div>
            </SlideUp>
          </div>

          {/* AI / ML engineering visual */}
          <div
            aria-hidden="true"
            className="relative mx-auto hidden h-97.5 w-145 max-w-full overflow-hidden xl:block xl:scale-[0.9] xl:origin-center min-[1366px]:scale-100"
          >
            {/* Ambient glow */}
            <div className="absolute inset-[28%] rounded-full bg-primary/2 blur-2xl" />

            {/* Central engineering panel */}
            <div className="absolute left-1/2 top-1/2 z-10 w-70 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-card p-5 shadow-[0_12px_32px_-20px_var(--primary)]">
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
              className="absolute left-0 top-[6%] z-20 min-[768px]:left-[6%] lg:hidden xl:block xl:left-[6%] xl:top-[6%]"
              delay={0.2}
              x={[0, 6, -5, 4, 0]}
              y={[0, 0, 0, 0, 0]}
            >
              <TechNode label="Python" iconSrc="/icons/python.svg" />
            </Float>

            {/* Scikit-learn — Y only */}
            <Float
              className="absolute right-0 top-[10%] z-20 min-[768px]:right-[4%] lg:right-1.5 lg:top-0 xl:right-[4%] xl:top-[10%]"
              delay={0.9}
              x={[0, 0, 0, 0, 0]}
              y={[0, -5, 6, -4, 0]}
            >
              <TechNode
                label="Scikit-learn"
                iconSrc="/icons/scikit-learn.png"
              />
            </Float>

            {/* RAG — 2D */}
            <Float
              className="absolute left-0 top-[48%] z-20 min-[768px]:left-[10%] lg:left-[calc(50%-40px)] lg:top-0 xl:left-[10%] xl:top-[48%]"
              delay={1.2}
              x={[0, 5, -4, 3, 0]}
              y={[0, -5, 6, -4, 0]}
            >
              <TechNode
                label="RAG"
                icon={Database}
                iconClassName="text-primary"
              />
            </Float>

            {/* API — X only */}
            <Float
              className="absolute right-0 top-[46%] z-20 min-[768px]:right-[6%] lg:left-[calc(50%-28px)] lg:right-auto lg:top-auto lg:bottom-[2%] xl:left-auto xl:right-[6%] xl:top-[46%] xl:bottom-auto"
              delay={1.7}
              x={[0, -5, 6, -4, 0]}
              y={[0, 0, 0, 0, 0]}
            >
              <TechNode
                label="API"
                icon={Server}
                iconClassName="text-primary"
              />
            </Float>

            {/* Git — 2D */}
            <Float
              className="absolute bottom-[2%] left-0 z-20 min-[768px]:left-[8%]"
              delay={0.6}
              x={[0, -5, 6, -4, 0]}
              y={[0, 5, -6, 4, 0]}
            >
              <TechNode
                label="Git"
                icon={SiGit}
                iconClassName="text-[#F05032]"
              />
            </Float>

            {/* Cloud — Y only */}
            <Float
              className="absolute bottom-[2%] right-0 z-20 min-[768px]:right-[8%]"
              delay={1.5}
              x={[0, 0, 0, 0, 0]}
              y={[0, 5, -6, 4, 0]}
            >
              <TechNode
                label="Cloud"
                icon={Cloud}
                iconClassName="text-primary"
              />
            </Float>
          </div>
        </div>

        {/* Mobile / tablet AI / ML visual */}
        <div className="mt-6 flex w-full justify-center min-[560px]:mt-8 xl:hidden">
          <div className="mx-auto w-full max-w-70 rounded-2xl border border-border bg-card p-5 shadow-[0_12px_30px_-20px_var(--primary)]">
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <BrainCircuit className="size-5" aria-hidden="true" />
              </div>

              <div className="min-w-0">
                <p className="text-base font-semibold leading-5 tracking-tight text-foreground">
                  AI / ML Engineering
                </p>

                <p className="mt-1 font-mono text-[10px] font-medium leading-4 tracking-[0.12em] text-muted-foreground min-[390px]:text-[11px] min-[390px]:tracking-[0.14em]">
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
