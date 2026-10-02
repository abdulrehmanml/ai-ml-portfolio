import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideUp } from "@/components/animations/slide-up"
import { ProjectCard } from "@/components/projects/project-card"
import { projects } from "@/data/projects"

export function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <Section id="featured-work" className="border-y border-accent/30 lg:pt-16">
      <Container>
        <div className="flex flex-col gap-10">
          {/* Section heading */}
          <FadeIn>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="w-full max-w-3xl">
                <p className="mb-5 text-sm font-medium uppercase tracking-[0.14em] text-primary">
                  Featured Work
                </p>

                <h2 className="w-full text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[40px] lg:leading-[1.1] lg:whitespace-nowrap">
                  Projects built with data, AI, and machine learning.
                </h2>

                <p className="mt-3 w-full text-sm leading-6 text-foreground/70 sm:text-base lg:text-[15px] lg:whitespace-nowrap">
                  A selection of practical projects spanning machine learning,
                  NLP, generative AI, and data-driven applications.
                </p>
              </div>

              <Link
                href="/projects"
                className="group inline-flex h-11 w-fit whitespace-nowrap items-center justify-center gap-2 rounded-[10px] bg-primary px-5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/80 hover:shadow-[0_8px_24px_-8px_var(--primary)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                View all projects
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>

          {/* Project grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => {
              const isThird = index === 2

              return (
                <SlideUp
                  key={project.slug}
                  className={
                    isThird
                      ? "md:col-span-2 md:flex md:justify-center lg:col-span-1 lg:block"
                      : ""
                  }
                >
                  <div
                    className={isThird ? "w-full md:w-1/2 lg:w-full" : "w-full"}
                  >
                    <ProjectCard
                      project={project}
                      priority={index === 0}
                      compact
                    />
                  </div>
                </SlideUp>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}
