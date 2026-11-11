import type { Metadata } from "next"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideUp } from "@/components/animations/slide-up"
import { Container } from "@/components/layout/container"
import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { Section } from "@/components/layout/section"
import { ProjectCard } from "@/components/project-card/project-card"
import { projects } from "@/data/projects"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger"
import { SectionDivider } from "@/components/ui/section-divider"

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
          className="pt-28 min-[560px]:pt-32 lg:pt-28"
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

            <div className="mt-6 min-[560px]:mt-8 lg:mt-4 lg:pt-12">
              <FadeIn>
                <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-primary min-[560px]:text-sm min-[560px]:tracking-[0.16em]">
                  Projects
                </p>
              </FadeIn>

              <FadeIn>
                <div
                  className="h-px w-12 shrink-0 bg-accent/40 dark:bg-primary/70"
                  aria-hidden="true"
                />
              </FadeIn>

              <SlideUp>
                <h1 className="mt-5 w-full text-4xl font-semibold leading-[1.05] tracking-tight min-[560px]:text-[48px] lg:text-[60px]">
                  Practical projects across{" "}
                  <span className="text-primary">
                    AI, machine learning, and data
                  </span>
                </h1>
              </SlideUp>
            </div>
          </Container>
        </Section>

        {/* Divider */}
        <SectionDivider />

        {/* All Projects */}
        <Section id="all-projects">
          <Container>
            <FadeIn>
              <div className="w-full">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-primary min-[560px]:text-sm min-[560px]:tracking-[0.16em]">
                  All Projects
                </p>

                <h2 className="mt-4 w-full min-w-0 text-[28px] font-semibold leading-[1.1] tracking-tight min-[390px]:text-3xl min-[560px]:text-4xl md:text-[42px] xl:text-[clamp(36px,3vw,44px)] 2xl:text-[48px]">
                  Projects built from{" "}
                  <span className="text-primary">problem to solution</span>
                </h2>
              </div>
            </FadeIn>
            <StaggerContainer className="mx-auto mt-12 grid w-full max-w-7xl grid-cols-1 justify-items-center gap-x-6 gap-y-7 min-[560px]:grid-cols-4 min-[560px]:gap-x-7 min-[560px]:gap-y-8 lg:grid-cols-6">
              {projects.map((project, index) => {
                const isLastProject = index === projects.length - 1
                const isPenultimateProject = index === projects.length - 2
              
                const desktopRemainder = projects.length % 3
              
                const centerLastTabletCard =
                  projects.length % 2 === 1 && isLastProject
              
                const desktopSingleCard =
                  desktopRemainder === 1 && isLastProject
              
                const desktopPairCard =
                  desktopRemainder === 2 &&
                  (isPenultimateProject || isLastProject)
              
                let desktopPairPosition = ""
              
                if (desktopPairCard) {
                  desktopPairPosition = isPenultimateProject
                    ? "lg:col-start-2"
                    : "lg:col-start-4"
                }
              
                let tabletPosition = ""
              
                if (centerLastTabletCard) {
                  tabletPosition =
                    desktopRemainder === 0
                      ? "min-[560px]:col-start-2 lg:col-start-auto"
                      : "min-[560px]:col-start-2"
                }
              
                return (
                  <StaggerItem
                    key={project.slug}
                    className={[
                      "col-span-1 w-full min-w-0 max-w-[384px] min-[560px]:col-span-2",
                      tabletPosition,
                      desktopSingleCard ? "lg:col-start-3" : "",
                      desktopPairPosition,
                    ].join(" ")}
                  >
                    <ProjectCard project={project} compact />
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  )
}
