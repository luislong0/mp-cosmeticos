import { create } from 'zustand'

export interface Product {
  id: string
  quantity: number
  title: string
  image: string
  size: string
  slug?: string
}

type Store = {
  products: Product[]
  addProducts: (product: Product) => void
  removeProducts: (productId: string) => void
}

export const cartStore = create<Store>()((set) => ({
  products: [],
  addProducts: (newProduct: Product) =>
    set((state) => {
      const productIndex = state.products.findIndex(
        (p) => p.id === newProduct.id,
      )

      if (productIndex !== -1) {
        const updatedProducts = state.products.map((product, index) => {
          if (index === productIndex) {
            return { ...product, quantity: product.quantity + 1 }
          }
          return product
        })

        return { products: updatedProducts }
      } else {
        return { products: [...state.products, newProduct] }
      }
    }),
  removeProducts: (productId: string) => {
    set((state) => ({
      products: state.products.filter((product) => product.id !== productId),
    }))
  },
}))
