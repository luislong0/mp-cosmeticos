'use client'

import { cartStore } from '@/contexts/cart-context'
import Image from 'next/image'

export function CartProducts() {
  const { products } = cartStore()

  return (
    <div className="flex h-full w-full flex-col gap-4 overflow-y-auto px-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex items-start gap-4 rounded-md bg-zinc-800 p-5"
        >
          <Image
            src={product.image}
            width={150}
            height={150}
            alt=""
            className="rounded-md bg-zinc-900"
          />

          <div className="flex h-full flex-col justify-between">
            <div className="flex flex-col gap-1">
              <span className="font-medium">{product.title}</span>
              <span className="text-sm text-zinc-500">{product.size}</span>
            </div>

            <span className="text-zinc-500">
              Quantidade:{' '}
              <span className="font-medium text-zinc-100">
                {product.quantity}
              </span>
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
