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
import { motion } from "motion/react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideUp } from "@/components/animations/slide-up"
import { motionEase } from "@/lib/motion"

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
    skills: "Streamlit · Joblib · Git · GitHub",
  },
]

const particles = [
  { left: "8%", top: "18%", delay: 0 },
  { left: "82%", top: "12%", delay: 0.8 },
  { left: "88%", top: "42%", delay: 1.6 },
  { left: "12%", top: "58%", delay: 2.4 },
  { left: "76%", top: "76%", delay: 1.2 },
  { left: "24%", top: "84%", delay: 2 },
]

export function AboutPreview() {
  const [skillHover, setSkillHover] = useState<number | null>(null)

  return (
    <Section
      id="about"
      className="border-y border-accent/30"
    >
      <Container>
        <FadeIn>
          {/* Section heading */}
          <div className="w-full">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-primary">
              About Me
            </p>

            <h2 className="w-full pl-2 text-3xl font-semibold tracking-tight sm:text-4xl lg:pl-4 lg:text-[42px] lg:leading-[1.1]">
              From machine learning to{" "}
              <span className="text-primary">usable AI applications.</span>
            </h2>
            
            <p className="mx-auto mt-3 w-[92%] text-sm leading-6 text-foreground/70 lg:text-[15px]">
              I&apos;m Abdul Rehman, an Artificial Intelligence undergraduate focused on
              machine learning, data analysis, NLP, and generative AI. I build practical
              projects that move from experimentation and evaluation to clean, usable,
              deployable applications designed for real-world use.
            </p>
          </div>

          {/* Profile + Technical Skills */}
          <div className="mt-7 grid gap-8 lg:grid-cols-[260px_minmax(0,680px)] lg:items-center lg:justify-center lg:gap-16">
            {/* Profile visual */}
            <SlideUp>
              <div className="mx-auto flex w-full max-w-[260px] flex-col justify-center lg:mx-0 lg:justify-self-center">
                <div className="relative pt-1 lg:pt-2">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-5 hidden rounded-2xl bg-primary/10 blur-2xl lg:block"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-8 z-10 overflow-visible opacity-90 lg:overflow-visible"
                  >
                    {/* Soft ambient field */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.primary/12),transparent_62%)]" />

                    {/* Subtle connection lines */}
                    <div className="absolute left-[16%] top-[20%] h-px w-[68%] rotate-[16deg] bg-primary/15" />
                    <div className="absolute left-[10%] top-[48%] h-px w-[76%] -rotate-[12deg] bg-primary/15" />
                    <div className="absolute left-[26%] top-[74%] h-px w-[56%] rotate-[7deg] bg-primary/15" />

                    {/* Moving particles */}
                    {particles.map((particle, index) => (
                      <motion.span
                        key={index}
                        className="absolute size-2 rounded-full bg-primary/70 shadow-[0_0_14px_theme(colors.primary/45)]"
                        style={{
                          left: particle.left,
                          top: particle.top,
                        }}
                        animate={{
                          y: [0, -7, 0],
                          x: [0, index % 2 === 0 ? 4 : -4, 0],
                          opacity: [0.35, 0.8, 0.35],
                        }}
                        transition={{
                          duration: 4.5,
                          delay: particle.delay,
                          repeat: Infinity,
                          ease: motionEase,
                        }}
                      />
                    ))}
                  </div>
                  
                  <div className="group relative aspect-[4/5] overflow-hidden rounded-lg border border-border/70 bg-muted/10">
                    <Image
                      src="/images/abdul-rehman.png"
                      alt="Abdul Rehman"
                      fill
                      loading="eager"
                      sizes="280px"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                    />
            
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent" />
                  </div>
                </div>
                  
                <div className="mt-5">
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

            {/* Technical Skills */}
            <SlideUp>
              <div
                className="mx-auto w-fit max-w-full rounded-xl border border-border/70 bg-card/40 p-2"
                onMouseLeave={() => setSkillHover(null)}
              >
                <div className="px-3 py-2.5">
                  <h3 className="text-lg font-semibold text-primary">Technical Skills</h3>
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
                                isActive ? "text-primary" : "text-muted-foreground",
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
                            isActive ? "text-foreground/90" : "text-muted-foreground",
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