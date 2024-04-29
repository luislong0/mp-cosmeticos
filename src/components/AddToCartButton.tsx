'use client'

import { cartStore } from '@/contexts/cart-context'
import { PlusCircle } from 'lucide-react'

export interface AddToCartButtonProps {
  productId: string
  productTitle: string
  productQuantity: number
  productImage: string
  productSize: string
}

export function AddToCartButton({
  productId,
  productImage,
  productQuantity,
  productTitle,
  productSize,
}: AddToCartButtonProps) {
  const { addProducts, products } = cartStore()

  function addProductToCart() {
    addProducts({
      id: productId,
      image: productImage,
      quantity: productQuantity,
      title: productTitle,
      size: productSize,
    })

    console.log(products)
  }

  return (
    <button
      type="button"
      onClick={addProductToCart}
      className="mt-8 flex h-12 items-center justify-center gap-2 rounded-full bg-rose-400 font-semibold text-white transition-all hover:bg-rose-500"
    >
      <PlusCircle />
      Adicionar ao carrinho
    </button>
  )
}
