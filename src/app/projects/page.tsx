import type { Metadata } from "next"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { FadeIn } from "@/components/animations/fade-in"
import { SlideUp } from "@/components/animations/slide-up"
import { Container } from "@/components/layout/container"
import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { Section } from "@/components/layout/section"
import { ProjectCard } from "@/components/projects/project-card"
import { projects } from "@/data/projects"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of practical machine learning, NLP, generative AI, and data analysis projects.",
}

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-background">
        {/* Hero */}
        <Section
          id="projects-hero"
          className="pt-24 pb-16 min-[560px]:pt-28 min-[560px]:pb-20 lg:pt-32 lg:pb-20"
        >
          <Container>
            <FadeIn>
              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
              >
                <ArrowRight
                  className="size-4 rotate-180 transition-transform duration-200 group-hover:-translate-x-1"
                  aria-hidden="true"
                />
                Back to Home
              </Link>
            </FadeIn>

            <div className="mt-10">
              <FadeIn>
                <p className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-primary">
                  Projects
                </p>
              </FadeIn>

              <FadeIn>
                <div
                  className="mt-3 h-px w-12 bg-accent/40"
                  aria-hidden="true"
                />
              </FadeIn>

              <SlideUp>
                <h1 className="mt-4 max-w-none text-4xl font-semibold leading-[1.05] tracking-tight min-[560px]:text-[48px] lg:text-[60px]">
                  Practical projects across{" "}
                  <span className="text-primary">
                    AI, machine learning, and data.
                  </span>
                </h1>
              </SlideUp>

              <FadeIn>
                <p className="mt-6 max-w-3xl text-sm leading-7 text-foreground/70 min-[560px]:text-base lg:text-[15px]">
                  A collection of projects covering predictive modeling, NLP,
                  generative AI, retrieval workflows, and data analysis.
                </p>
              </FadeIn>
            </div>
          </Container>
        </Section>

        {/* Divider */}
        <div
          className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent"
          aria-hidden="true"
        />

        {/* All Projects */}
        <Section id="all-projects">
          <Container>
            <FadeIn>
              <div className="w-full">
                <p className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-primary">
                  All Projects
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-tight min-[560px]:text-[40px] lg:whitespace-nowrap lg:text-[44px]">
                  Selected work built from{" "}
                  <span className="text-primary">problem to solution.</span>
                </h2>
              </div>
            </FadeIn>
            
            <div className="mt-12 grid gap-6 min-[560px]:grid-cols-2 lg:grid-cols-3 lg:gap-7">
              {projects.map((project) => (
                <SlideUp key={project.slug}>
                  <ProjectCard project={project} />
                </SlideUp>
              ))}
            </div>

          </Container>
        </Section>
      </main>

      <Footer />
    </>
  )
}
