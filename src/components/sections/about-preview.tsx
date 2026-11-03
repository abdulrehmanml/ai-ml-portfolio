"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Cloud,
  MessageSquareText,
} from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideUp } from "@/components/animations/slide-up"

const skillGroups = [
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    skills: "Python · NumPy · Pandas · Scikit-learn",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    skills: "EDA · Matplotlib · Seaborn · Data Visualization",
  },
  {
    icon: MessageSquareText,
    title: "AI & NLP",
    skills: "NLP · TF-IDF · RAG · Generative AI",
  },
  {
    icon: Cloud,
    title: "Deployment",
    skills: "Streamlit · Joblib · Git · GitHub · AWS",
  },
]

export function AboutPreview() {
  const [skillHover, setSkillHover] = useState<number | null>(null)

  return (
    <Section
      id="about"
      className="border-y border-accent/30 pt-14 pb-14 min-[390px]:pt-16 min-[390px]:pb-16 min-[560px]:pt-18 min-[560px]:pb-18 sm:pt-18 sm:pb-18 md:pt-20 md:pb-20 lg:pt-16 lg:pb-16 xl:pt-20 xl:pb-20 2xl:pt-24 2xl:pb-24"
    >
      <Container>
        <FadeIn>
          {/* Section heading */}
          <div className="w-full min-w-0">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-primary min-[560px]:mb-5 min-[560px]:text-sm min-[560px]:tracking-[0.16em]">
              About Me
            </p>

            <h2 className="w-full min-w-0 text-[28px] font-semibold leading-[1.1] tracking-tight min-[390px]:text-3xl min-[560px]:text-4xl lg:text-[42px] xl:text-[clamp(36px,3vw,44px)] 2xl:text-[48px]">
              I&apos;m Abdul Rehman
            </h2>

            <p className="mt-3 w-full max-w-none min-w-0 text-left text-sm leading-6 text-muted-foreground min-[560px]:text-base min-[560px]:leading-7 lg:text-[15px]">
              An Artificial Intelligence undergraduate focused on machine learning, data analysis, NLP, and generative AI. I build practical AI solutions that turn ideas and data into useful, deployable applications.
            </p>
          </div>

          {/* Profile + Technical Skills */}
          <div className="mt-6 grid min-w-0 grid-cols-1 gap-7 min-[560px]:mt-8 min-[560px]:gap-8 md:mx-auto md:w-fit md:grid-cols-[190px_auto] md:items-center md:gap-14 lg:mx-auto lg:w-fit lg:grid-cols-[190px_auto] lg:gap-18 xl:grid-cols-[210px_auto] xl:gap-22 2xl:gap-26">
            {/* Profile visual */}
            <SlideUp>
              <div className="mx-auto flex w-full min-w-0 max-w-47.5 flex-col justify-center lg:mx-0 lg:justify-self-center xl:max-w-52.5">
                <div className="relative pt-1 lg:pt-2">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-5 hidden rounded-2xl bg-primary/10 blur-2xl lg:block"
                  />

                  <div className="group relative aspect-portrait overflow-hidden rounded-lg border border-border/70 bg-muted/10">
                    <Image
                      src="/images/abdul-rehman.png"
                      alt="Abdul Rehman"
                      fill
                      loading="eager"
                      sizes="(min-width: 1280px) 210px, 190px"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/10 via-transparent to-transparent" />
                  </div>
                </div>

                <div className="mt-4 flex justify-center">
                  <Link
                    href="/about"
                    className="group inline-flex h-11 items-center justify-center gap-2 rounded-[10px] bg-primary px-5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/80 hover:shadow-[0_8px_24px_-8px_var(--primary)] active:translate-y-0 active:bg-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    More About Me
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </SlideUp>

            {/* Technical Expertise */}
            <SlideUp>
              <div
                className="mx-auto w-fit min-w-0 max-w-full rounded-xl border-[1.5px] border-border bg-card/40 p-2 min-[560px]:p-3 md:mx-0"
                onMouseLeave={() => setSkillHover(null)}
              >
                <div className="px-3 py-2.5">
                  <h3 className="text-base font-semibold text-primary min-[560px]:text-lg">
                    Technical Expertise
                  </h3>
                </div>

                <div className="flex flex-col gap-1.5">
                  {skillGroups.map(({ icon: Icon, title, skills }, index) => {
                    const isActive = skillHover === index

                    return (
                      <div
                        key={title}
                        onMouseEnter={() => setSkillHover(index)}
                        className={[
                          "grid min-w-0 grid-cols-1 gap-2 rounded-lg border-[1.5px] border-border/90 bg-background/60 px-3 py-3 transition-all duration-200 min-[390px]:px-4",
                          "lg:grid-cols-[175px_minmax(0,1fr)] lg:items-center lg:gap-3",
                          isActive
                            ? "-translate-y-0.5 border-primary/25 bg-primary/5"
                            : "",
                        ].join(" ")}
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <span
                            className={[
                              "inline-flex size-8 shrink-0 items-center justify-center rounded-md border-[1.5px] transition-all duration-200",
                              isActive
                                ? "border-primary/25 bg-primary/5"
                                : "border-border/90",
                            ].join(" ")}
                          >
                            <Icon className="size-4 text-primary" />
                          </span>

                          <span className="min-w-0 text-sm font-medium text-foreground">
                            {title}
                          </span>
                        </div>

                        <p className="min-w-0 text-left text-sm leading-6 text-muted-foreground transition-colors duration-200">
                          {skills}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </SlideUp>
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
