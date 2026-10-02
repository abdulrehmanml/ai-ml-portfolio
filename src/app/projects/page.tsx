import Image from "next/image"
import type { Metadata } from "next"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { FadeIn } from "@/components/animations/fade-in"
import { SlideUp } from "@/components/animations/slide-up"
import { Container } from "@/components/layout/container"
import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { Section } from "@/components/layout/section"
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
                  <Link href={project.href} className="group block h-full">
                    <article className="flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-[0_12px_32px_-16px_var(--primary)] min-[560px]:p-7">
                      {/* Project image */}
                      <div className="relative overflow-hidden rounded-xl border border-border/70 bg-card/40">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={800}
                          height={500}
                          sizes="(min-width: 1024px) 33vw, (min-width: 560px) 50vw, 100vw"
                          className="aspect-[1.6] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                        />

                        <div
                          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-primary/0 transition-colors duration-300 group-hover:bg-primary/40"
                          aria-hidden="true"
                        />
                      </div>

                      {/* Project information */}
                      <div className="mt-6">
                        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-primary">
                          {project.category}
                        </p>

                        <h3 className="mt-3 text-xl font-semibold tracking-tight transition-colors duration-200 group-hover:text-primary">
                          {project.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-foreground/70">
                          {project.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                          {project.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="font-mono text-[11px] text-muted-foreground"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Project link indicator */}
                      <div className="mt-auto pt-7">
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors duration-200 group-hover:text-primary">
                          View Project
                          <ArrowRight
                            className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </article>
                  </Link>
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
