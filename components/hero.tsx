import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-gradient-to-b from-primary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Culinary Excellence Awaits</h1>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Experience authentic flavors crafted with passion and the finest ingredients
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#menu">
              <Button size="lg" className="w-full sm:w-auto">
                Explore Menu
              </Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                Reserve a Table
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
