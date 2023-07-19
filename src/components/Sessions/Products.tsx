'use client'

import { PopularProductCard } from '../PopularProductCard'
import AOS from 'aos'
import { useEffect } from 'react'

export function Products() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duração da animação em milissegundos
    })
  }, [])

  return (
    <div className="w-full bg-zinc-100 px-10 py-20">
      <div
        data-aos="zoom-in"
        className="mx-auto flex max-w-[1400px] flex-col gap-20"
      >
        <h2 className="bg-rose-gradient bg-clip-text text-6xl font-extrabold uppercase text-transparent">
          Nossos Produtos!
        </h2>
        <span className="-mt-14 text-2xl font-bold">
          Explore nossa seleção cuidadosamente curada dos melhores produtos de
          cosméticos para cabelos. Desde luxuosos kits de uso pessoal, ideais
          para nutrir e revigorar cada tipo de cabelo, até nossa exclusiva linha
          profissional para salões, desenhada para proporcionar transformações
          capilares inigualáveis. Criados com ingredientes de alta qualidade e
          inovação, nossos produtos são mais do que apenas cosméticos. Eles são
          a chave para a descoberta da verdadeira beleza dos seus cabelos. A
          jornada para o cabelo dos sonhos começa aqui,
        </span>
        <div className="flex flex-wrap items-center justify-between gap-10 sm:gap-0">
          <PopularProductCard />
          <PopularProductCard />
          <PopularProductCard />
          <PopularProductCard />
        </div>
      </div>
    </div>
  )
}
