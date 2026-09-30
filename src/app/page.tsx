import { Navbar } from "@/components/layout/navbar"
import { Hero } from "@/components/sections/hero"
import { AboutPreview } from "@/components/sections/about-preview"
import { FeaturedProjects } from "@/components/sections/featured-projects"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <AboutPreview />
        <FeaturedProjects />
      </main>

      <Footer />
    </>
  )
}