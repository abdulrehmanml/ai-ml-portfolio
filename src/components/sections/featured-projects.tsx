import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideUp } from "@/components/animations/slide-up"
import { ProjectCard } from "@/components/projects/project-card"
import { projects } from "@/data/projects"

export function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 4)

  return (
    <Section
      id="featured-work"
      className="border-y border-accent/30 pt-14 pb-14 min-[390px]:pt-16 min-[390px]:pb-16 min-[560px]:pt-18 min-[560px]:pb-18 sm:pt-18 sm:pb-18 md:pt-20 md:pb-20 lg:pt-16 lg:pb-16 xl:pt-20 xl:pb-20 2xl:pt-24 2xl:pb-24"
    >    
      <Container>
        <div className="flex min-w-0 flex-col gap-7 min-[560px]:gap-8 md:gap-10">
          {/* Section heading */}
          <FadeIn>
            <div className="flex min-w-0 flex-col gap-5 min-[560px]:gap-6 2xl:flex-row 2xl:items-end 2xl:justify-between">
              <div className="w-full min-w-0 max-w-none 2xl:w-[72%] 2xl:max-w-[1120px]">
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-primary min-[560px]:mb-5 min-[560px]:text-sm min-[560px]:tracking-[0.16em]">
                  Featured Work
                </p>

                <h2 className="w-full min-w-0 text-left text-[28px] font-semibold leading-[1.1] tracking-tight min-[390px]:text-3xl min-[560px]:text-4xl md:text-[42px] xl:text-[clamp(36px,3vw,44px)] 2xl:text-[48px]">
                  Projects built with{" "}
                  <span className="text-primary">
                    data, machine learning, and AI.
                  </span>
                </h2>

                <p className="mt-3 w-full min-w-0 text-left text-sm leading-6 text-muted-foreground min-[560px]:text-base min-[560px]:leading-7 xl:text-[15px]">
                  A selection of practical projects spanning machine learning, NLP, generative AI, and data-driven applications.
                </p>
              </div>

              <Link
                href="/projects"
                className="group inline-flex h-11 w-fit shrink-0 whitespace-nowrap items-center justify-center gap-2 self-start rounded-[10px] bg-primary px-5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/80 hover:shadow-[0_8px_24px_-8px_var(--primary)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 2xl:self-end"
              >
                View all projects
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>

          {/* Project grid */}
          <div
            className={`mx-auto grid w-full max-w-[1600px] grid-cols-1 justify-items-center gap-x-6 gap-y-7 min-[560px]:gap-x-7 min-[560px]:gap-y-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ${
              featuredProjects.length < 4 ? "2xl:grid-cols-3" : ""
            }`}
          >
            {featuredProjects.map((project, index) => {
              const isThird = index === 2
              const isFourth = index === 3
            
              return (
                <SlideUp
                  key={project.slug}
                  className={[
                    "w-full min-w-0 max-w-[360px]",
                    isThird
                      ? "md:col-span-2 md:w-1/2 lg:col-span-1 lg:w-full"
                      : "",
                    isFourth ? "hidden 2xl:block" : "",
                  ].join(" ")}
                >
                <ProjectCard
                  project={project}
                  priority={index === 0}
                  compact
                />
              </SlideUp>
            )
          })}
          </div>
        </div>
      </Container>
    </Section>
  )
}
