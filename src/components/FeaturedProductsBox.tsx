import { api } from '@/app/data/api'
import { Product } from '@/app/data/types/product'
import { BadgeDollarSign } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured', {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })
  const products = await response.json()
  return products
}

export async function FeaturedProductsBox() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div>
      <span className="mb-5 flex items-center gap-2 text-2xl font-semibold uppercase text-zinc-200">
        <BadgeDollarSign /> Destaques
      </span>
      <div className="flex grid-cols-9 grid-rows-6 flex-col gap-6 md:grid xl:max-h-[860px]">
        <Link
          href={`/catalog/product/${highlightedProduct.slug}`}
          className="group relative col-span-6 row-span-6 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900 md:max-w-full"
        >
          <Image
            src={highlightedProduct.image}
            alt=""
            width={1400}
            height={1400}
            quality={100}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute bottom-10 right-auto flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5 md:bottom-28 md:right-28">
            <span className="truncate text-sm">{highlightedProduct.title}</span>
            <span className="flex h-full items-center justify-center rounded-full bg-rose-400 px-4 font-semibold uppercase">
              new
            </span>
          </div>
        </Link>

        {otherProducts.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/catalog/product/${product.slug}`}
              className="group relative col-span-3 row-span-3 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
            >
              <Image
                src={product.image}
                alt=""
                width={400}
                height={400}
                quality={100}
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-10 right-auto flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5 md:right-10">
                <span className="truncate text-sm">{product.title}</span>
                <span className="flex h-full items-center justify-center rounded-full bg-rose-400 px-4 font-semibold uppercase">
                  new
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
