'use client'

import { cartStore } from '@/contexts/cart-context'
import { PlusCircle } from 'lucide-react'
import { successNotification } from './Notifiers/Success'

export interface AddToCartButtonProps {
  productId: string
  productTitle: string
  productQuantity: number
  productImage: string
  productSize: string
  disabled: boolean
}

export function AddToCartButton({
  productId,
  productImage,
  productQuantity,
  productTitle,
  productSize,
  disabled,
}: AddToCartButtonProps) {
  const { addProducts } = cartStore()

  function addProductToCart() {
    addProducts({
      id: productId,
      image: productImage,
      quantity: productQuantity,
      title: productTitle,
      size: productSize,
    })

    successNotification(`${productTitle} adicionado ao carrinho!`)
  }

  return (
    <button
      disabled={disabled}
      type="button"
      onClick={addProductToCart}
      className="mt-8 flex h-12 items-center justify-center gap-2 rounded-full bg-rose-400 font-semibold text-white transition-all hover:bg-rose-500 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <PlusCircle />
      Adicionar ao carrinho
    </button>
  )
}
