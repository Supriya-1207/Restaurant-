import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MenuDisplay } from "@/components/menu-display"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <MenuDisplay />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
