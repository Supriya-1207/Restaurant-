"use client"

import { useState } from "react"
import { useAppSelector, useAppDispatch } from "@/lib/hooks"
import { setSelectedCategory } from "@/lib/slices/menuSlice"
import { addToCart } from "@/lib/slices/cartSlice"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const CATEGORIES = ["All", "Pizza", "Salads", "Main Courses", "Desserts"]

export function MenuDisplay() {
  const dispatch = useAppDispatch()
  const { items, selectedCategory } = useAppSelector((state) => state.menu)
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set())

  const filteredItems = selectedCategory === "All" ? items : items.filter((item) => item.category === selectedCategory)

  const handleAddToCart = (item: (typeof items)[0]) => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
      }),
    )

    // Show feedback
    setAddedItems((prev) => new Set(prev).add(item.id))
    setTimeout(() => {
      setAddedItems((prev) => {
        const newSet = new Set(prev)
        newSet.delete(item.id)
        return newSet
      })
    }, 2000)
  }

  return (
    <section id="menu" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Menu</h2>
          <p className="text-lg text-muted-foreground">Carefully curated dishes prepared fresh daily</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {CATEGORIES.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => dispatch(setSelectedCategory(category))}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full bg-muted">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">${item.price.toFixed(2)}</span>
                  <Button
                    onClick={() => handleAddToCart(item)}
                    className={addedItems.has(item.id) ? "bg-green-600 hover:bg-green-700" : ""}
                  >
                    {addedItems.has(item.id) ? "Added!" : "Add to Cart"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
