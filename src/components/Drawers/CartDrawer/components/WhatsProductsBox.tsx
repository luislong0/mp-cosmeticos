'use client'

import { GoToWhatsBtn } from '@/components/GoToWhatsBtn'
import { cartStore } from '@/contexts/cart-context'

export function WhatsProductsBox() {
  const { products } = cartStore()

  return (
    <div className="w-full px-6 py-10">
      <GoToWhatsBtn products={products} />
    </div>
  )
}
