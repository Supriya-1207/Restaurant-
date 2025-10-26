"use client"

import { useAppDispatch } from "@/lib/hooks"
import { removeFromCart, updateQuantity } from "@/lib/slices/cartSlice"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2 } from "lucide-react"
import Image from "next/image"
import type { CartItem } from "@/lib/slices/cartSlice"

interface CartItemProps {
  item: CartItem
}

export function CartItemComponent({ item }: CartItemProps) {
  const dispatch = useAppDispatch()

  return (
    <div className="flex gap-4 py-4 border-b border-border last:border-b-0">
      <div className="relative h-24 w-24 flex-shrink-0 bg-muted rounded-lg overflow-hidden">
        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" sizes="96px" />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <p className="text-primary font-bold">${item.price.toFixed(2)}</p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 bg-transparent"
            onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-8 text-center font-semibold">{item.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 bg-transparent"
            onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
          >
            <Plus className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 ml-auto text-destructive hover:text-destructive"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="text-right flex flex-col justify-between">
        <span className="text-sm text-muted-foreground">Subtotal</span>
        <span className="text-xl font-bold">${(item.price * item.quantity).toFixed(2)}</span>
      </div>
    </div>
  )
}
