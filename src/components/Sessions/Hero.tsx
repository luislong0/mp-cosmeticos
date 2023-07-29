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
      id="home"
      className={`w-full bg-[url(/heroImage.jpg)] bg-right py-20 sm:flex sm:h-[calc(100vh_-_5rem)] sm:items-center sm:justify-center`}
    >
      <div
        data-aos="zoom-in"
        className="mx-auto flex max-w-[1400px] flex-col items-center justify-center gap-10 px-10 text-center text-zinc-100"
      >
        <h2 className="max-w-6xl text-left text-5xl font-bold uppercase sm:text-center sm:text-6xl">
          Desperte a Beleza dos seus Cabelos <br /> com a{' '}
          <b className="text-5xl font-extrabold text-rose-950 sm:text-7xl">
            MP Cosméticos
          </b>
        </h2>
        <span className="max-w-6xl text-left text-2xl font-bold sm:text-center sm:text-3xl">
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
