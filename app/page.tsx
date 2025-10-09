import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"
import { ThemeButton } from "@/components/ui/themeButton"

export default function HomePage() {
  return (
    <div>
      <SiteHeader />

      <main id="main" className="container mx-auto px-4 py-10 md: py-16 space-y-20">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
