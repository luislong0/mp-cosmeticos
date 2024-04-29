import { redirect } from 'next/navigation'
import { api } from '../../data/api'
import { Product } from '../../data/types/product'
import { Metadata } from 'next'
import { ProductBox } from '@/components/ProductBox'

interface SearchProps {
  searchParams: {
    q: string
  }
}

export const metadata: Metadata = {
  title: 'Catálogo',
}

async function searchProducts(query: string): Promise<Product[]> {
  const response = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })
  const products = await response.json()
  return products
}

export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = searchParams

  if (!query) {
    redirect('/')
  }

  const products = await searchProducts(query)

  return (
    <div className="flex min-h-screen w-full max-w-7xl flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

      <div className="mt-4 grid  grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {products.map((product) => {
          return (
            <ProductBox
              key={String(product.id)}
              img={product.image}
              name={product.title}
              slug={product.slug}
            />
          )
        })}
      </div>
    </div>
  )
}
