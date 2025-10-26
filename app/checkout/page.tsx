"use client"

import { useAppSelector } from "@/lib/hooks"
import { Header } from "@/components/header"
import { CheckoutForm } from "@/components/checkout-form"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { redirect } from "next/navigation"

export default function CheckoutPage() {
  const { items } = useAppSelector((state) => state.cart)

  if (items.length === 0) {
    redirect("/cart")
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Link href="/cart">
              <Button variant="ghost" className="mb-4">
                ← Back to Cart
              </Button>
            </Link>
            <h1 className="text-4xl font-bold">Checkout</h1>
          </div>

          <CheckoutForm />
        </div>
      </main>
    </div>
  )
}
