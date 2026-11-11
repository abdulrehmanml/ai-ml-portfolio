import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

import { Hero } from "./hero"
import { AboutPreview } from "./about-preview"
import { ServicesPreview } from "./services-preview"
import { FeaturedProjects } from "./featured-projects"
import { ContactPreview } from "./contact-preview"
import { SectionDivider } from "@/components/ui/section-divider"

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <SectionDivider />
        <AboutPreview />
        <SectionDivider />
        <ServicesPreview />
        <SectionDivider />
        <FeaturedProjects />
        <SectionDivider />
        <ContactPreview />
      </main>

      <Footer />
    </>
  )
}