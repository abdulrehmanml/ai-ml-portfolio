import Image from "next/image"

import { FadeIn } from "@/components/animations/fade-in"
import { SlideUp } from "@/components/animations/slide-up"
import { Container } from "@/components/layout/container"
import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { Section } from "@/components/layout/section"
import { projects } from "@/data/projects"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  const selectedProjectSlugs = [
    "customer-churn-prediction",
    "sentiment-analysis",
    "agrofarm-ai",
  ]
  const selectedProjects = selectedProjectSlugs.flatMap((slug) =>
    projects.filter((project) => project.slug === slug),
  )

  return (
    <>
      <Navbar />

      <main className="bg-background">
        <Section
          id="about-introduction"
          className="pt-26 sm:pt-32 lg:pt-24 xl:pt-28 2xl:pt-36"
        >
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              {/* Introduction */}
              <SlideUp>
                <div className="max-w-5xl">
                  <p className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-primary">
                    About Me
                  </p>

                  <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight min-[560px]:text-[48px] lg:text-[56px] lg:leading-[1.05]">
                    I&apos;m Abdul Rehman.
                  </h1>

                    <p className="mt-6 text-justify text-sm leading-7 text-foreground/70 min-[560px]:text-base lg:text-[15px]">
                      I&apos;m an AI/ML engineer focused on building practical solutions that turn data, machine learning, and AI technologies into useful applications. My work spans data analysis, predictive modeling, NLP, generative AI, and the development of interactive machine learning applications. 
                    </p>

                  <div className="mt-7 ml-2">
                    <Link
                      href="https://abdulrehmanml.github.io/abdul-rehman-cv/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex h-11 items-center justify-center gap-2 rounded-[10px] bg-primary px-5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/80 hover:shadow-[0_8px_24px_-8px_var(--primary)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      View CV
                      <ArrowRight
                        className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </SlideUp>

              <FadeIn>
                <div className="relative mx-auto w-full max-w-md px-4 pb-8 min-[560px]:px-6 min-[560px]:pb-10 lg:px-0 lg:pr-8">
                  <div
                    className="pointer-events-none absolute -right-1 -top-1 z-10 h-10 w-10 border-r border-t border-primary/50"
                    aria-hidden="true"
                  />

                  <div
                    className="pointer-events-none absolute -bottom-1 -left-1 z-10 h-10 w-10 border-b border-l border-accent/40"
                    aria-hidden="true"
                  />

                  <div
                    className="pointer-events-none absolute left-3 top-3 z-10 h-5 w-5 border-l border-t border-primary/30"
                    aria-hidden="true"
                  />

                  <div
                    className="pointer-events-none absolute bottom-3 right-3 z-10 h-5 w-5 border-b border-r border-accent/30"
                    aria-hidden="true"
                  />

                  <div
                    className="pointer-events-none absolute -right-1 top-1/2 z-10 h-px w-12 bg-primary/50 motion-safe:animate-pulse"
                    aria-hidden="true"
                  />

                  <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-[0_12px_32px_-16px_var(--primary)]">
                    <Image
                      src="/images/abdul-rehman.png"
                      alt="Abdul Rehman"
                      width={640}
                      height={640}
                      className="aspect-square w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      priority
                    />

                    <div
                      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-primary/30 motion-safe:animate-pulse"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </Container>
        </Section>

        {/* Section Divider */}
        <div
          className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent"
          aria-hidden="true"
        />

        {/* My Approach */}
        <Section id="my-approach">
          <Container>
            <FadeIn>
              <div className="w-full">
                <p className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-primary">
                  My Approach
                </p>

                <h2 className="mt-4 max-w-5xl text-3xl font-semibold leading-[1.08] tracking-tight min-[560px]:text-[40px] lg:text-[44px] lg:leading-[1.08]">
                  From problem to{" "}
                  <span className="text-primary">deployable solution.</span>
                </h2>

                <p className="mt-4 w-full text-justify text-sm leading-6 text-foreground/70 min-[560px]:text-base lg:text-[15px]">
                  I approach AI/ML projects as complete workflows, starting with a clear understanding of the problem and the data, then building and evaluating the right solution before turning it into a practical, usable application.
                </p>
              </div>
            </FadeIn>

            <div className="mt-12 grid gap-8 min-[560px]:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {[
                {
                  number: "01",
                  title: "Problem",
                  description:
                    "Understand the objective, requirements, constraints, and what the solution needs to achieve.",
                },
                {
                  number: "02",
                  title: "Data",
                  description:
                    "Prepare, explore, clean, and analyze the data before selecting an appropriate modeling approach.",
                },
                {
                  number: "03",
                  title: "Model",
                  description:
                    "Build and evaluate models using suitable algorithms, metrics, and iterative improvement.",
                },
                {
                  number: "04",
                  title: "Deployment",
                  description:
                    "Turn the final solution into a usable application through APIs, interfaces, and deployment workflows.",
                },
              ].map((step) => (
                <SlideUp key={step.number}>
                  <div className="group relative h-full border-t-2 border-border/80 px-4 pt-5 transition-colors duration-200 hover:border-primary">
                    <span className="font-mono text-xs font-medium tracking-[0.12em] text-primary">
                      {step.number}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold tracking-tight transition-colors duration-200 group-hover:text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-justify text-sm leading-6 text-foreground/70">
                      {step.description}
                    </p>
                  </div>
                </SlideUp>
              ))}
            </div>
          </Container>
        </Section>

        {/* Section Divider */}
        <div
          className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent"
          aria-hidden="true"
        />

        {/* Core Expertise */}
        <Section id="core-expertise">
          <Container>
            <FadeIn>
              <div className="w-full">
                <p className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-primary">
                  Core Expertise
                </p>

                <h2 className="mt-4 max-w-5xl text-3xl font-semibold leading-[1.08] tracking-tight min-[560px]:text-[40px] lg:text-[44px] lg:leading-[1.08]">
                  Technical capabilities for{" "}
                  <span className="text-primary">practical AI/ML systems.</span>
                </h2>

                <p className="mt-4 w-full text-justify text-sm leading-6 text-foreground/70 min-[560px]:text-base lg:text-[15px]">
                  I work across the data and machine learning lifecycle, combining analytical thinking, model development, AI techniques, and deployment to build usable solutions.
                </p>
              </div>
            </FadeIn>

            <div className="mx-auto mt-12 grid w-full max-w-md gap-6 px-4 min-[560px]:max-w-none min-[560px]:px-0 min-[560px]:grid-cols-2 lg:gap-7">
              {[
                {
                  number: "01",
                  title: "Machine Learning",
                  description:
                    "Build and evaluate predictive models for classification, regression, and practical decision-making.",
                  skills: ["Python", "NumPy", "Pandas", "Scikit-learn"],
                },
                {
                  number: "02",
                  title: "Data & Analytics",
                  description:
                    "Turn raw datasets into useful insights through cleaning, exploration, visualization, and analysis.",
                  skills: [
                    "EDA",
                    "Matplotlib",
                    "Seaborn",
                    "Data Visualization",
                  ],
                },
                {
                  number: "03",
                  title: "AI & NLP",
                  description:
                    "Develop knowledge-based and language-focused applications using retrieval, NLP, and generative AI techniques.",
                  skills: ["NLP", "TF-IDF", "RAG", "Generative AI"],
                },
                {
                  number: "04",
                  title: "Deployment",
                  description:
                    "Move machine learning solutions from notebooks into usable applications through APIs, interfaces, and deployment workflows.",
                  skills: ["Streamlit", "APIs", "Joblib", "Git & GitHub"],
                },
              ].map((item) => (
                <SlideUp key={item.number} className="min-w-0">
                  <div className="project-card-shadow min-w-0 h-full rounded-2xl">
                    <div className="group relative h-full rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-[0_12px_32px_-16px_var(--primary)] min-[560px]:p-7">
                      <div className="flex items-start justify-between gap-4">
                        <span className="font-mono text-xs font-medium tracking-[0.12em] text-primary">
                          {item.number}
                        </span>

                        <span className="size-2 rounded-full bg-primary/40 transition-all duration-300 group-hover:scale-125 group-hover:bg-primary" />
                      </div>

                      <h3 className="mt-5 text-xl font-semibold tracking-tight">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-justify text-sm leading-6 text-foreground/70">
                        {item.description}
                      </p>

                      <div className="mt-5 flex flex-nowrap gap-1 overflow-x-auto min-[560px]:gap-2">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="shrink-0 rounded-md border border-border bg-card px-2 py-1 font-mono text-[10px] text-muted-foreground transition-all duration-300 group-hover:border-primary/20 group-hover:text-foreground min-[560px]:px-2.5 min-[560px]:text-[11px]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </SlideUp>
              ))}
            </div>
          </Container>
        </Section>

        {/* Section Divider */}
        <div
          className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent"
          aria-hidden="true"
        />

        {/* Technical Toolkit */}
        <Section id="technical-toolkit">
          <Container>
            <FadeIn>
              <div className="w-full">
                <p className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-primary">
                  Technical Toolkit
                </p>

                <h2 className="mt-4 w-full text-3xl font-semibold leading-[1.08] tracking-tight min-[560px]:text-[40px] lg:text-[44px] lg:leading-[1.08]">
                  Tools I use to build and{" "}
                  <span className="text-primary">ship AI/ML solutions.</span>
                </h2>

                <p className="mt-4 w-full text-justify text-sm leading-6 text-foreground/70 min-[560px]:text-base lg:text-[15px]">
                  A focused set of technologies I use across data preparation, machine learning, AI applications, and deployment.
                </p>
              </div>
            </FadeIn>

            <div className="mx-auto mt-12 w-fit max-w-full">
              {[
                {
                  category: "Programming",
                  tools: ["Python", "C++", "SQL"],
                },
                {
                  category: "Data",
                  tools: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
                },
                {
                  category: "Machine Learning",
                  tools: ["Scikit-learn", "Joblib"],
                },
                {
                  category: "AI & GenAI",
                  tools: ["Gemini", "ChromaDB"],
                },
                {
                  category: "Applications",
                  tools: ["Streamlit", "FastAPI"],
                },
                {
                  category: "Development",
                  tools: ["Git", "GitHub", "VS Code"],
                },
              ].map((item) => (
                <SlideUp key={item.category}>
                  <div className="group relative border-t border-border px-4 py-5 transition-colors duration-200 last:border-b min-[560px]:grid min-[560px]:min-h-18 min-[560px]:grid-cols-[160px_1fr] min-[560px]:items-center min-[560px]:gap-6 min-[560px]:px-5 min-[560px]:hover:border-primary/40 lg:grid-cols-[180px_1fr] lg:gap-8">
                    {/* Desktop / Tablet hover accent */}
                    <span
                      className="pointer-events-none absolute inset-y-0 left-0 hidden w-px origin-top bg-primary transition-transform duration-300 ease-out min-[560px]:block min-[560px]:scale-y-0 min-[560px]:group-hover:scale-y-100"
                      aria-hidden="true"
                    />

                    <h3 className="text-sm font-semibold tracking-tight transition-colors duration-200 min-[560px]:group-hover:text-primary">
                      {item.category}
                    </h3>

                    <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 min-[560px]:mt-0">
                      {item.tools.map((tool) => (
                        <span
                          key={tool}
                          className="font-mono text-xs text-muted-foreground transition-colors duration-200 min-[560px]:group-hover:text-primary"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </SlideUp>
              ))}
            </div>
          </Container>
        </Section>

        {/* Section Divider */}
        <div
          className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent"
          aria-hidden="true"
        />

        {/* Selected Work */}
        <Section id="selected-work">
          <Container>
            <FadeIn>
              <div className="w-full">
                <p className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-primary">
                  Selected Work
                </p>

                <h2 className="mt-4 max-w-5xl text-3xl font-semibold leading-[1.08] tracking-tight min-[560px]:text-[40px] lg:text-[44px] lg:leading-[1.08]">
                  Projects that turn ideas into{" "}
                  <span className="text-primary">working solutions.</span>
                </h2>

                <p className="mt-4 w-full text-justify text-sm leading-6 text-foreground/70 min-[560px]:text-base lg:text-[15px]">
                  A selection of practical projects covering predictive machine learning, NLP, and retrieval-augmented generative AI applications.
                </p>
              </div>
            </FadeIn>

            <div className="mx-auto mt-12 grid w-full max-w-md gap-6 px-4 md:max-lg:max-w-xl md:max-lg:px-4 lg:max-w-none lg:px-0 lg:grid-cols-3 lg:gap-7">
              {selectedProjects.map((project) => (
                <SlideUp key={project.slug}>
                  <Link href={project.href} className="group block h-full">
                    <div className="project-card-shadow h-full rounded-2xl">
                      <article className="flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-[0_12px_32px_-16px_var(--primary)] min-[560px]:p-7">
                        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-primary">
                          {project.category}
                        </p>

                        <h3 className="mt-4 text-xl font-semibold tracking-tight">
                          {project.title}
                        </h3>

                        <p className="mt-3 px-1 text-justify text-sm leading-6 text-foreground/70">
                          {project.description}
                        </p>

                        <p className="mt-5 px-1 text-justify font-mono text-[11px] leading-5 text-muted-foreground">
                          {project.technologies.join(" · ")}
                        </p>

                        <div className="mt-auto pt-6">
                          <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors duration-200 group-hover:text-primary">
                            View Project
                            <ArrowRight
                              className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                      </article>
                    </div>
                  </Link>
                </SlideUp>
              ))}
            </div>
          </Container>
        </Section>

        {/* Section Divider */}
        <div
          className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent"
          aria-hidden="true"
        />

        {/* Current Focus */}
        <Section id="current-focus">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-10">
              <FadeIn>
                <div>
                  <p className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-primary">
                    Current Focus
                  </p>

                  <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-tight min-[560px]:text-[40px] lg:text-[44px] lg:leading-[1.08]">
                    Expanding from models to{" "}
                    <span className="text-primary">production AI systems.</span>
                  </h2>

                  <p className="mt-4 text-justify text-sm leading-6 text-foreground/70 min-[560px]:text-base lg:text-[15px]">
                    Building stronger skills in production machine learning, AI applications, APIs, cloud deployment, and agentic systems.
                  </p>
                </div>
              </FadeIn>

              <div className="mx-auto w-fit max-w-full px-4">
                <div className="grid w-fit grid-cols-1 min-[560px]:grid-cols-2 min-[560px]:gap-x-10">
                  {[
                    "Production ML",
                    "AI Applications",
                    "API Development",
                    "Cloud Deployment",
                    "Agentic AI",
                    "MLOps Workflows",
                  ].map((focus, index, array) => (
                    <SlideUp key={focus}>
                      <div className={`group flex w-full items-center justify-start gap-4 border-t-2 border-border/80 px-4 py-5 transition-colors duration-200 hover:border-primary ${
                          index === array.length - 1 ? "border-b-2" : ""
                        } ${
                          index === array.length - 2 ? "min-[560px]:border-b-2" : ""
                        }`}
                      >
                        <span className="font-mono text-xs text-primary">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      
                        <span className="shrink-0 whitespace-nowrap text-sm font-medium transition-colors duration-200 group-hover:text-primary">
                          {focus}
                        </span>
                      </div>
                    </SlideUp>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Section Divider */}
        <div
          className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent"
          aria-hidden="true"
        />

        {/* CTA */}
        <Section id="about-cta">
          <Container>
            <FadeIn>
              <div className="project-card-shadow mx-auto flex w-[calc(100%-2rem)] flex-col gap-6 rounded-2xl border border-border bg-card p-6 min-[560px]:w-fit min-[560px]:p-7 lg:w-fit lg:max-w-full lg:flex-row lg:items-center lg:justify-center lg:gap-7 lg:px-8 lg:py-7">
                <div>
                  <p className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-primary">
                    Let&apos;s Work Together
                  </p>

                  <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-tight min-[560px]:text-[40px] lg:text-[44px] lg:leading-[1.08]">
                    Have a project?{" "}
                    <span className="text-primary">
                      Let&apos;s make it real.
                    </span>
                  </h2>

                  <p className="mt-4 max-w-2xl text-justify text-sm leading-6 text-foreground/70 min-[560px]:text-base lg:text-[15px]">
                    Looking to turn an idea, dataset, or AI concept into a practical solution? Let&apos;s talk.
                  </p>
                </div>

                <Link
                  href="/#contact"
                  className="group mx-auto inline-flex h-11 w-fit items-center justify-center gap-2 rounded-[10px] bg-primary px-5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/80 hover:shadow-[0_8px_24px_-8px_var(--primary)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 lg:mx-0"
                >
                  Get in touch
                  <ArrowRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </FadeIn>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  )
}
