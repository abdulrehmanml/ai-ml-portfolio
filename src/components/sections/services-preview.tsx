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
    description:
      "Build and evaluate predictive models for classification, regression, and practical decision-making.",
  },
  {
    number: "02",
    slug: "data-analysis-visualization",
    icon: BarChart3,
    title: "Data Analysis & Visualization",
    description:
      "Turn raw datasets into clear insights through data cleaning, exploratory analysis, visualization, and reporting.",
  },
  {
    number: "03",
    slug: "generative-ai-rag",
    icon: Sparkles,
    title: "Generative AI & RAG",
    description:
      "Build retrieval-augmented AI systems that combine generative models with relevant knowledge sources to provide grounded answers.",
  },
  {
    number: "04",
    slug: "deployment-ml-apis",
    icon: Cloud,
    title: "Deployment & ML APIs",
    description:
      "Deploy machine learning models through APIs and applications with reliable, maintainable workflows.",
  },
]

export function ServicesPreview() {
  return (
    <Section id="services" className="border-y border-accent/30">
      <Container>
        <FadeIn>
          <div className="grid gap-12 text-left lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
            {/* Section introduction */}
            <div className="lg:sticky lg:top-28 lg:pt-0">
              <p className="mb-5 text-sm font-medium min-[560px]:text-base uppercase tracking-[0.14em] text-primary">
                Services
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[44px] lg:leading-[1.08] lg:text-justify">
                <span>
                  AI/ML Solutions{" "}
                </span>
                <span className="text-primary">
                  built for practical use.
                </span>
              </h2>

              <p className="mt-4 w-full max-w-xl text-justify text-sm leading-6 text-muted-foreground sm:text-base md:w-[92%] md:max-w-none lg:w-full lg:max-w-md">
                From data analysis and machine learning to generative AI and deployment, I build practical solutions that move beyond experimentation into usable applications.
              </p>
            </div>

            {/* Service list */}
            <div className="border-t border-border px-3 sm:px-5 lg:px-0">
              {services.map(
                ({ number, slug, icon: Icon, title, description }) => (
                  <SlideUp key={number}>
                    <Link href={`/services/${slug}`} className="block">
                      <div className="group grid grid-cols-[28px_minmax(0,1fr)_auto] items-start gap-3 border-b border-border/70 py-5 transition-all duration-200 min-[560px]:grid-cols-[40px_minmax(0,1fr)_auto] min-[560px]:gap-4 min-[560px]:py-6 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-primary/5 lg:grid-cols-[40px_1fr_auto] lg:gap-6 lg:py-5">
                        <span className="font-mono text-xs tracking-[0.12em] text-primary transition-colors duration-200">
                          {number}
                        </span>

                        <div className="flex min-w-0 items-start gap-3 min-[560px]:gap-4">
                          <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-border/70 bg-card/50 text-primary transition-all duration-200 group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:shadow-[0_4px_18px_-10px_var(--primary)]">
                            <Icon className="size-5" aria-hidden="true" />
                          </span>

                          <div className="min-w-0">
                            <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors duration-200 min-[560px]:text-xl lg:text-lg group-hover:text-primary">
                              {title}
                            </h3>

                            <p className="mt-1.5 w-full max-w-xl text-justify text-sm leading-6 text-muted-foreground transition-colors duration-200 min-[560px]:text-[15px] lg:text-left lg:text-sm group-hover:text-muted-foreground">
                              {description}
                            </p>
                          </div>
                        </div>

                        <ArrowRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-all duration-200 min-[560px]:size-5 group-hover:translate-x-1 group-hover:text-primary"/>
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
