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
  const [skillHover, setSkillHover] = useState<"all" | number | null>(null)

  return (
    <Section
      id="about"
      className="border-t border-accent/30 lg:min-h-[calc(100svh-4rem)] lg:py-6"
    >
      <Container className="lg:flex lg:min-h-[calc(100svh-7rem)] lg:flex-col lg:justify-center">
        <FadeIn>
          {/* Section heading */}
          <div className="w-full">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-primary">
              About Me
            </p>
          
            <h2 className="w-full text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[42px] lg:leading-[1.1]">
              An AI/ML undergraduate building practical solutions.
            </h2>
          
            <p className="mt-3 w-full text-justify text-sm leading-6 text-muted-foreground sm:text-base lg:w-[82%] lg:pl-6 lg:text-[15px]">
              I&apos;m Abdul Rehman, an Artificial Intelligence undergraduate focused
              on machine learning, data analysis, NLP, generative AI, and deployment. I
              build hands-on projects that turn ideas and experiments into usable AI
              applications.
            </p>
          </div>

          {/* Profile + Technical Skills */}
          <div className="mt-5 grid gap-7 lg:grid-cols-[260px_1fr] lg:items-center lg:gap-12">
            {/* Profile visual */}
            <SlideUp>
              <div className="relative pt-1 lg:pt-4">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-7 overflow-hidden opacity-70"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.primary/8),transparent_65%)]" />

                  <div className="absolute left-[18%] top-[20%] h-px w-[64%] rotate-[16deg] bg-primary/10" />
                  <div className="absolute left-[12%] top-[48%] h-px w-[72%] -rotate-[12deg] bg-primary/10" />
                  <div className="absolute left-[30%] top-[72%] h-px w-[52%] rotate-[7deg] bg-primary/10" />

                  {particles.map((particle, index) => (
                    <motion.span
                      key={index}
                      className="absolute size-1 rounded-full bg-primary/40 shadow-[0_0_10px_theme(colors.primary/30)]"
                      style={{
                        left: particle.left,
                        top: particle.top,
                      }}
                      animate={{
                        y: [0, -7, 0],
                        x: [0, index % 2 === 0 ? 4 : -4, 0],
                        opacity: [0.2, 0.65, 0.2],
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
                    sizes="(max-width: 1023px) 70vw, 260px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent" />
                </div>
              </div>
            </SlideUp>

            {/* Technical Skills */}
            <SlideUp>
              <div
                className="w-full overflow-hidden rounded-lg border border-border/70 lg:w-fit lg:max-w-full"
                onMouseLeave={() => setSkillHover(null)}
              >
                {/* Technical Skills heading */}
                <div
                  className="border-b border-border/70 px-4 py-3.5 transition-colors duration-200"
                  onMouseEnter={() => setSkillHover("all")}
                >
                  <h3 className="text-lg font-semibold transition-colors duration-200 hover:text-primary">
                    Technical Skills
                  </h3>
                </div>

                {/* Skill rows */}
                <div>
                  {skillGroups.map(
                    ({ icon: Icon, title, skills }, index) => {
                      const isActive =
                        skillHover === "all" || skillHover === index
                    
                      return (
                        <div
                          key={title}
                          onMouseEnter={() => setSkillHover(index)}
                          className={[
                            "grid gap-2 px-4 py-3.5 transition-all duration-200",
                            "sm:grid-cols-[175px_auto] sm:items-center",
                            isActive
                              ? "-translate-y-0.5 bg-primary/5"
                              : "",
                            index !== skillGroups.length - 1
                              ? "border-b border-border/60"
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
                                isActive
                                  ? "text-primary"
                                  : "text-foreground",
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
                    }
                  )}
                </div>
              </div>
            </SlideUp>
          </div>

          {/* About link */}
          <div className="mt-5">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              More About Me
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}