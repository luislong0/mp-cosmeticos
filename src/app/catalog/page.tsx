import Link from 'next/link'
import { Product } from '../data/types/product'
import { api } from '../data/api'
import { Metadata } from 'next'
import { Separator } from '@/components/Separator'
import { NoBgButton } from '@/components/Buttons/NoBgButton'
import { ProductBox } from '@/components/ProductBox'
import { FeaturedProductsBox } from '@/components/FeaturedProductsBox'
import { ShoppingCart } from 'lucide-react'
import { ProductsBox } from '@/components/ProductsBox'

export const metadata: Metadata = {
  title: 'Catálogo',
}

export default async function Catalog() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <FeaturedProductsBox />

      <div className="mt-10 w-full">
        <span className="flex items-center gap-3 text-2xl font-semibold uppercase text-zinc-200">
          <ShoppingCart fontWeight={700} /> Todos os produtos
        </span>

        <ProductsBox />
      </div>
    </div>
  )
}
