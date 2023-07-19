'use client'

import '../../app/globals.css'
import { ChangeColorButton } from '../Buttons/ChangeColorButton'
import AOS from 'aos'
import { useEffect } from 'react'

export function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duração da animação em milissegundos
    })
  }, [])

  return (
    <div
      className={`flex w-full min-w-full items-center justify-center bg-red-500 bg-[url(/heroImage.jpg)] bg-right px-5 py-20 sm:h-[calc(100vh_-_5rem)]`}
    >
      <div
        data-aos="zoom-in"
        className="flex flex-col items-center justify-center gap-10 text-center text-zinc-100"
      >
        <h2 className="max-w-6xl text-6xl font-bold uppercase sm:text-6xl">
          Desperte a Beleza dos seus Cabelos <br /> com a{' '}
          <b className="text-6xl text-rose-950 sm:text-7xl">MP Cosméticos</b>
        </h2>
        <span className="max-w-6xl text-2xl font-bold sm:text-3xl">
          Seja profissional de salão ou buscando o melhor para seus fios em
          casa, a <b className="uppercase text-rose-950">MP Cosméticos</b> é a
          sua melhor escolha. Nossos produtos profissionais, agora ao seu
          alcance, irão transformar a saúde e beleza dos seus cabelos.
          Experimente o cuidado de um salão na comodidade da sua casa. Descubra
          MP Cosméticos. A Beleza se revela aqui!
        </span>

        <div>
          <ChangeColorButton href="" />
        </div>
      </div>
    </div>
  )
}
