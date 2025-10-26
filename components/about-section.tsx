import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, Award } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground">Experience the difference quality makes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Clock className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Fresh & Fast</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                All dishes are prepared fresh to order. Average delivery time is 30-45 minutes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Expert Chefs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our team of experienced chefs brings years of culinary expertise to every dish.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Award className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Quality Guaranteed</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We use only the finest ingredients and maintain the highest standards of quality.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
