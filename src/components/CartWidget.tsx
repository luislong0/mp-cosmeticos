'use client'

import { cartStore } from '@/contexts/cart-context'
import { ShoppingBag } from 'lucide-react'

export function CartWidget() {
  const { products } = cartStore()

  return (
    <div className="flex items-center gap-2">
      <span className="text-rose-400">
        <ShoppingBag className="h-4 w-4" />
      </span>
      <div className="h-4 w-px bg-zinc-700" />
      <span className="mt-0.5 text-sm">Carrinho ({products.length})</span>
    </div>
  )
}
