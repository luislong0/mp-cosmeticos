import { api } from '@/app/data/api'
import { Product } from '@/app/data/types/product'
import { AddToCartButton } from '@/components/AddToCartButton'
import { GoToWhatsBtn } from '@/components/GoToWhatsBtn'
import { Metadata } from 'next'
import Image from 'next/image'

interface ProductProps {
  params: {
    slug: string
  }
}

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const responseBody = await response.json()
  console.log(responseBody)
  return responseBody
}

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  const product = await getProduct(params.slug)
  return {
    title: product.title,
  }
}

export async function generateStaticParams() {
  const response = await api('/products/featured')
  const products: Product[] = await response.json()

  // return [{ slug: 'moletom-never-stop-learning' }]
  return products.map((product) => {
    return { slug: product.slug }
  })
}

export default async function ProductPage({ params }: ProductProps) {
  const product = await getProduct(params.slug)

  if (!product) {
    return <div>Product not found or failed to load.</div>
  }

  return (
    <div className="relative flex min-h-[600px] grid-cols-2 flex-col content-center items-center gap-20 lg:grid xl:min-h-[860px] xl:grid-cols-3">
      <div className="col-span-1 overflow-hidden xl:col-span-2">
        <Image
          className="rounded-3xl"
          src={product.image}
          alt=""
          width={700}
          height={700}
          quality={100}
        />
      </div>

      <div className="flex flex-col justify-center px-5 md:px-12">
        <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
          {product.description}
        </p>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>

          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              P
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              M
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              G
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              GG
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <AddToCartButton
            productId={String(product.id)}
            productImage={product.image}
            productQuantity={1}
            productTitle={product.title}
            productSize={'1 Litro'}
          />

          <GoToWhatsBtn
            products={[
              {
                id: String(product.id),
                image: product.image,
                quantity: 1,
                size: '1 Litro',
                title: product.title,
              },
            ]}
          />
        </div>
      </div>
    </div>
  )
}
