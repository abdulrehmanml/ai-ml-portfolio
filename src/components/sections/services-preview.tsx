import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Cloud,
  Sparkles,
} from "lucide-react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideUp } from "@/components/animations/slide-up"

const services = [
  {
    number: "01",
    slug: "machine-learning",
    icon: BrainCircuit,
    title: "Machine Learning",
    description: (
      <>
        Build and evaluate predictive models for classification,{" "}
        <br className="hidden lg:block" />
        regression, and practical real-world decision-making.
      </>
    ),
  },
  {
    number: "02",
    slug: "data-analysis-visualization",
    icon: BarChart3,
    title: "Data Analysis & Visualization",
    description: (
      <>
        Turn raw datasets into clear insights through data cleaning,{" "}
        <br className="hidden lg:block" />
        exploratory analysis, visualization, and reporting.
      </>
    ),
  },
  {
    number: "03",
    slug: "generative-ai-rag",
    icon: Sparkles,
    title: "Generative AI & RAG",
    description: (
      <>
        Turn raw datasets into clear insights through data cleaning,{" "}
        <br className="hidden lg:block" />
        exploratory analysis, visualization, and reporting.
      </>
    ),
  },
  {
    number: "04",
    slug: "deployment-ml-apis",
    icon: Cloud,
    title: "Deployment & ML APIs",
    description: (
      <>
        Turn raw datasets into clear insights through data cleaning,{" "}
        <br className="hidden lg:block" />
        exploratory analysis, visualization, and reporting.
      </>
    ),
  },
]

export function ServicesPreview() {
  return (
    <Section id="services" className="border-y border-accent/30 pt-0 pb-0">
      <Container>
        <FadeIn>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
            {/* Section introduction */}
            <div className="lg:sticky lg:top-28 lg:pt-0">
              <p className="mb-5 text-sm font-medium min-[560px]:text-base uppercase tracking-[0.14em] text-primary">
                Services
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:leading-[1.08]">
                <span className="block lg:text-[44px] lg:whitespace-nowrap">
                  AI/ML Solutions
                </span>
                <span className="block text-primary lg:text-[40px] lg:whitespace-nowrap">
                  built for practical use.
                </span>
              </h2>

              <p className="mt-4 w-full max-w-xl text-sm leading-6 text-foreground/70 sm:text-base md:w-[92%] md:max-w-none lg:w-full lg:max-w-md">
                From data analysis and machine learning to generative AI and
                deployment, I build practical solutions designed to move beyond
                experimentation.
              </p>
            </div>

            {/* Service list */}
            <div className="border-t border-border">
              {services.map(
                ({ number, slug, icon: Icon, title, description }) => (
                  <SlideUp key={number}>
                    <Link href={`/services/${slug}`} className="block">
                      <div className="group grid gap-4 border-b border-border/70 py-5 transition-all duration-200 min-[560px]:py-6 lg:py-5 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-primary/5 lg:grid-cols-[56px_1fr_auto] lg:items-start lg:gap-6">
                        <span className="font-mono text-xs tracking-[0.12em] text-muted-foreground transition-colors duration-200 group-hover:text-primary">
                          {number}
                        </span>

                        <div className="flex gap-4">
                          <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-border/70 bg-card/50 text-primary transition-all duration-200 group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:shadow-[0_4px_18px_-10px_var(--primary)]">
                            <Icon className="size-5" aria-hidden="true" />
                          </span>

                          <div>
                            <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors duration-200 min-[560px]:text-xl lg:text-lg group-hover:text-primary">
                              {title}
                            </h3>

                            <p className="mt-1.5 w-full max-w-xl text-balance text-sm leading-6 text-muted-foreground transition-colors duration-200 min-[560px]:text-[15px] lg:text-sm group-hover:text-foreground/90">
                              {description}
                            </p>
                          </div>
                        </div>

                        <ArrowRight className="mt-1 hidden size-5 text-muted-foreground transition-all duration-200 group-hover:translate-x-1 group-hover:text-primary lg:block" />
                      </div>
                    </Link>
                  </SlideUp>
                ),
              )}
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
