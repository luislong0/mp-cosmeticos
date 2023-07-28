'use client'

import Image from 'next/image'
import StarRating from './StarRating'
import { useEffect, useState } from 'react'
import { limitText } from '@/lib/limitText'

interface PopularProductCardProps {
  title: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  img: any
  about: string
}

export function PopularProductCard({
  title,
  about,
  img,
}: PopularProductCardProps) {
  const [limitedText, setLimitedText] = useState('')

  const [isHided, setIsHided] = useState(true)

  function handleHided() {
    setIsHided(!isHided)
  }

  useEffect(() => {
    if (about.length > 290) {
      const limitedText = limitText(about, 300)
      setLimitedText(limitedText)
    }
  }, [about])

  return (
    <div className="max-w-fit rounded-md bg-rose-gradient p-[2px]">
      <div className="flex min-h-[705px] max-w-xs flex-col items-center justify-start gap-5 rounded-md bg-zinc-200 px-4 py-8">
        <Image
          src={img}
          alt={title}
          height={250}
          width={320}
          className="h-[320px] w-[250px] rounded-md"
        />
        <span className="text-lg font-bold text-zinc-900">{title}</span>

        <StarRating value={5} />

        <span className="text-sm font-medium leading-normal">
          {isHided === true ? limitedText : about}
          {about.length > 300 &&
            (isHided === true ? (
              <button
                onClick={handleHided}
                className="ml-2 font-extrabold text-rose-500"
              >
                Ver mais
              </button>
            ) : (
              <button
                onClick={handleHided}
                className="ml-2 font-extrabold text-rose-500"
              >
                Ver menos
              </button>
            ))}
        </span>
      </div>
    </div>
  )
}
