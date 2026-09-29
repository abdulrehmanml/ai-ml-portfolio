import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { ProjectCard } from "@/components/projects/project-card"
import { projects } from "@/data/projects"

export function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <Section id="projects">
      <Container>
        <div className="flex flex-col gap-10">
          {/* Section heading */}
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
                Selected Work
              </p>

              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                Projects built with data, AI, and machine learning.
              </h2>

              <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
                A selection of practical projects spanning machine learning,
                NLP, generative AI, and data-driven applications.
              </p>
            </div>

            <Link
              href="/projects"
              className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground transition-colors duration-200 hover:text-primary"
            >
              View all projects
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Project grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}