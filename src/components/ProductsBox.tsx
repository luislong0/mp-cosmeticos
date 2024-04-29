'use client'

import { api } from '@/app/data/api'
import { Product } from '@/contexts/cart-context'
import { NoBgButton } from './Buttons/NoBgButton'
import { Separator } from './Separator'
import { useState } from 'react'
import { ProductBox } from './ProductBox'

interface ProductCategory {
  id: string
  name: string
}

const categories = [
  {
    id: 'shampoo',
    name: 'Shampoo',
  },
  {
    id: 'condicionador',
    name: 'Condicionador',
  },
  {
    id: 'kit',
    name: 'Kits',
  },
  {
    id: 'uso-diario',
    name: 'Uso Diário',
  },
  {
    id: 'loiros',
    name: 'Loiros',
  },
  {
    id: 'reconstrucao',
    name: 'Reconstrução',
  },
  {
    id: 'hidratacao',
    name: 'Hidratação',
  },
  {
    id: 'perfume',
    name: 'Perfumes Capilares',
  },
]

export function ProductsBox() {
  const [products, setProducts] = useState<Product[]>([])
  const [category, setCategory] = useState<ProductCategory | null>(null)

  async function getProductsByCategory(
    categoryId: string,
    categoryName: string,
  ) {
    console.log(categoryId, categoryName)
    const response = await api(`/products/category/${categoryId}`, {
      next: {
        revalidate: 60 * 60, // 1 hour
      },
    })
    const fetchProducts = await response.json()
    console.log(fetchProducts)

    setProducts(fetchProducts)
    setCategory({
      id: categoryId,
      name: categoryName,
    })

    console.log(products)
  }

  return (
    <div className="w-full">
      <div className="my-5 flex w-full flex-wrap gap-4">
        {categories.map((category) => (
          <NoBgButton
            onClick={() => getProductsByCategory(category.id, category.name)}
            key={category.id}
            label={category.name}
            className="text-wrap w-fit border-2 border-rose-400 px-4 py-1 hover:bg-rose-400 xl:w-fit"
          />
        ))}
      </div>

      <Separator />

      <div className="mt-10 flex flex-col gap-10">
        {products.length > 0 && (
          <div>
            <span className="text-xl font-semibold text-zinc-200">
              {category?.name}
            </span>
            <div
              id="shampoo"
              className="mt-4 grid  grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
            >
              {products.map((product) => (
                <ProductBox
                  key={String(product.id)}
                  img={product.image}
                  name={product.title}
                  slug={product.slug || ''}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
