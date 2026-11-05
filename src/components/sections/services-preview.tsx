import Link from "next/link"
import { ArrowRight, BarChart3, BrainCircuit, Cloud, Sparkles, } from "lucide-react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger"

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
    <Section
      id="services"
      className="pt-14 pb-14 min-[390px]:pt-16 min-[390px]:pb-16 min-[560px]:pt-18 min-[560px]:pb-18 sm:pt-18 sm:pb-18 md:pt-20 md:pb-20 lg:pt-16 lg:pb-16 xl:pt-20 xl:pb-20 2xl:pt-24 2xl:pb-24"
    >
      <Container>
        <div className="grid min-w-0 grid-cols-1 gap-8 min-[560px]:gap-10 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] xl:items-start xl:gap-14 2xl:gap-16">
            {/* Section introduction */}
            <div className="min-w-0 xl:sticky xl:top-28">
              <FadeIn>
                <div className="min-w-0">
                  <p className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-primary min-[560px]:mb-5 min-[560px]:text-sm min-[560px]:tracking-[0.16em]">
                    Services
                  </p>

                  <h2 className="w-full min-w-0 text-[28px] font-semibold leading-[1.1] tracking-tight min-[390px]:text-3xl min-[560px]:text-4xl md:text-[42px] xl:text-[clamp(36px,3vw,44px)] 2xl:text-[48px]">
                    <span>AI/ML Solutions </span>
                    <span className="text-primary">built for practical use</span>
                  </h2>

                  <p className="mt-4 w-full max-w-none text-left text-sm leading-6 text-muted-foreground min-[560px]:text-base min-[560px]:leading-7 xl:text-[15px]">
                    From data analysis and machine learning to generative AI and deployment, I build practical solutions that move beyond experimentation into usable applications.
                  </p>
                </div>
              </FadeIn>
            </div>

          {/* Service list */}
          <StaggerContainer className="min-w-0 border-t border-border px-0 min-[560px]:px-2 xl:px-0">
            {services.map(
              ({ number, slug, icon: Icon, title, description }) => (
                <StaggerItem key={number}>
                  <Link href={`/services/${slug}`} className="block">
                    <div className="group grid min-w-0 grid-cols-[24px_minmax(0,1fr)_16px] items-start gap-2 border-b border-border/70 py-4 transition-all duration-200 min-[390px]:grid-cols-[28px_minmax(0,1fr)_16px] min-[390px]:gap-3 min-[560px]:grid-cols-[40px_minmax(0,1fr)_20px] min-[560px]:gap-4 min-[560px]:py-6 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-primary/5 xl:gap-5 xl:py-5">
                      <span className="font-mono text-xs tracking-[0.12em] text-primary transition-colors duration-200">
                        {number}
                      </span>
                      <div className="flex min-w-0 items-start gap-3 min-[560px]:gap-4">
                        <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-border/80 bg-card/50 text-primary transition-all duration-200 min-[560px]:size-10 group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:shadow-[0_4px_18px_-10px_var(--primary)]">
                          <Icon className="size-5" aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <h3 className="text-base font-semibold tracking-tight text-foreground transition-colors duration-200 min-[390px]:text-[17px] min-[560px]:text-lg group-hover:text-primary">
                            {title}
                          </h3>
                          <p className="mt-1.5 w-full min-w-0 text-left text-sm leading-6 text-muted-foreground transition-colors duration-200 min-[560px]:text-[15px] group-hover:text-muted-foreground">
                            {description}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-all duration-200 min-[560px]:size-5 group-hover:translate-x-1 group-hover:text-primary" />
                    </div>
                  </Link>
                </StaggerItem>
              ),
            )}
          </StaggerContainer>
        </div>
      </Container>
    </Section>
  )
}
