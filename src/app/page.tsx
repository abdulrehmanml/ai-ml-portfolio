import { Navbar } from "@/components/layout/navbar"
import { Hero } from "@/components/sections/hero"
import { AboutPreview } from "@/components/sections/about-preview"
import { ServicesPreview } from "@/components/sections/services-preview"
import { FeaturedProjects } from "@/components/sections/featured-projects"
import { ContactPreview } from "@/components/sections/contact-preview"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* Section Divider */}
        <div className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent dark:via-[#70C9C2]/70" aria-hidden="true" />

        <AboutPreview />

        {/* Section Divider */}
        <div className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent dark:via-[#70C9C2]/70" aria-hidden="true" />

        <ServicesPreview />

        {/* Section Divider */}
        <div className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent dark:via-[#70C9C2]/70" aria-hidden="true" />

        <FeaturedProjects />

        {/* Section Divider */}
        <div className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-accent/35 to-transparent dark:via-[#70C9C2]/70" aria-hidden="true" />
        
        <ContactPreview />
      </main>

      <Footer />
    </>
  )
}
