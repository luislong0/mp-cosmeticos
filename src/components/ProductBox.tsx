import Image from 'next/image'
import Link from 'next/link'

interface ProductBoxProps {
  img: string
  name: string
  slug: string
  key?: string
}

export function ProductBox({ img, name, slug, key }: ProductBoxProps) {
  return (
    <Link
      key={key}
      href={`/catalog/product/${slug}`}
      className="group relative flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
    >
      <Image
        src={img}
        alt=""
        width={480}
        height={480}
        quality={100}
        className="transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute bottom-10  flex h-12 max-w-[250px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
        <span className="truncate text-sm">{name}</span>
        <span className="flex h-full items-center justify-center rounded-full bg-rose-400 px-4 font-semibold uppercase">
          Veja
        </span>
      </div>
    </Link>
  )
}
