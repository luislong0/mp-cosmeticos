'use client'

import { useState } from 'react'
import { AddToCartButton } from './AddToCartButton'
import { GoToWhatsBtn } from './GoToWhatsBtn'

interface ProductDescriptionBoxProps {
  id: string
  title: string
  description: string
  sizes: string[]
  image: string
}

interface SelectCategory {
  index: number
  size: string
}

export function ProductDescriptionBox({
  description,
  id,
  image,
  sizes,
  title,
}: ProductDescriptionBoxProps) {
  const [selectSize, setSelectSize] = useState<SelectCategory>(
    {} as SelectCategory,
  )

  return (
    <div className="flex w-full flex-col justify-center px-5">
      <h1 className="text-3xl font-bold leading-tight">{title}</h1>

      <p className="mt-2 leading-relaxed text-zinc-400">{description}</p>

      <div className="mt-8 space-y-4">
        <span className="block font-semibold">Tamanhos</span>

        <div className="flex gap-2">
          {sizes.map((size, i) => (
            <button
              onClick={() => setSelectSize({ index: i, size })}
              key={size}
              type="button"
              className={`${
                selectSize.index === i
                  ? 'border-rose-500 bg-rose-400'
                  : 'border-zinc-700 bg-zinc-800'
              } flex h-9 w-fit min-w-[66px] items-center justify-center rounded-full border px-2 text-sm font-semibold transition-all hover:border-rose-500 hover:bg-rose-400`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <AddToCartButton
          productId={String(id)}
          productImage={image}
          productQuantity={1}
          productTitle={title}
          productSize={selectSize.size}
          disabled={!selectSize.size}
        />

        <GoToWhatsBtn
          disabled={!selectSize.size}
          products={[
            {
              id: String(id),
              image,
              quantity: 1,
              size: selectSize.size,
              title,
            },
          ]}
        />
      </div>
    </div>
  )
}
