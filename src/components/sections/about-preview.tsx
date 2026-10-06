"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowRight, BarChart3, BrainCircuit, Cloud, MessageSquareText, } from "lucide-react"

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
    <Section id="about" className="border-y border-accent/30">
      <Container>
        <FadeIn>
          {/* Section heading */}
          <div className="w-full">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.14em] text-primary">
              About Me
            </p>

            <h2 className="w-full text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[42px] lg:leading-[1.1]">
              I&apos;m Abdul Rehman.
            </h2>

            <p className="mt-3 w-full max-w-6xl text-justify text-sm leading-6 text-foreground/70 lg:text-[15px]">
              An Artificial Intelligence undergraduate focused on machine learning, data analysis, NLP, and generative AI. I build practical AI solutions that turn ideas and data into useful, deployable applications.
            </p>
          </div>

          {/* Profile + Technical Skills */}
          <div className="mt-7 grid gap-8 lg:grid-cols-[260px_minmax(0,680px)] lg:items-start lg:justify-center lg:gap-16">
            {/* Profile visual */}
            <SlideUp>
              <div className="mx-auto flex w-full max-w-65 flex-col justify-center lg:mx-0 lg:justify-self-center">
                <div className="relative pt-1 lg:pt-2">
                  <div aria-hidden="true" className="pointer-events-none absolute -inset-5 hidden rounded-2xl bg-primary/10 blur-2xl lg:block"/>


                  <div className="group relative aspect-portrait overflow-hidden rounded-lg border border-border/70 bg-muted/10">
                    <Image src="/images/abdul-rehman.png" alt="Abdul Rehman" fill loading="eager" sizes="280px" className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]" />

                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/10 via-transparent to-transparent" />
                  </div>
                </div>

                <div className="mt-4 flex justify-center">
                  <Link href="/about" className="group inline-flex h-11 items-center justify-center gap-2 rounded-[10px] bg-primary px-5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/80 hover:shadow-[0_8px_24px_-8px_var(--primary)] active:translate-y-0 active:bg-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    More About Me
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </SlideUp>

            {/* Technical Skills */}
            <SlideUp>
              <div
                className="mx-auto w-fit max-w-full rounded-xl border border-border/70 bg-card/40 p-2"
                onMouseLeave={() => setSkillHover(null)}
              >
                <div className="px-3 py-2.5">
                  <h3 className="text-lg font-semibold text-primary">
                    Technical Skills
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
                          "grid rounded-lg border border-border/60 bg-background/60 px-4 py-3 transition-all duration-200",
                          "sm:grid-cols-[175px_auto] sm:items-center",
                          isActive
                            ? "-translate-y-0.5 border-primary/25 bg-primary/5"
                            : "",
                        ].join(" ")}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={[
                              "inline-flex size-8 shrink-0 items-center justify-center rounded-md border transition-all duration-200",
                              isActive
                                ? "border-primary/25 bg-primary/5"
                                : "border-border/70",
                            ].join(" ")}
                          >
                            <Icon
                              className={[
                                "size-4 transition-colors duration-200",
                                isActive
                                  ? "text-primary"
                                  : "text-muted-foreground",
                              ].join(" ")}
                            />
                          </span>

                          <span
                            className={[
                              "text-sm font-medium transition-colors duration-200",
                              isActive ? "text-primary" : "text-foreground",
                            ].join(" ")}
                          >
                            {title}
                          </span>
                        </div>

                        <p
                          className={[
                            "text-sm leading-6 transition-colors duration-200",
                            isActive
                              ? "text-foreground/90"
                              : "text-muted-foreground",
                          ].join(" ")}
                        >
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
