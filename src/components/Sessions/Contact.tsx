'use client'

import AOS from 'aos'
import Image from 'next/image'
import { useEffect } from 'react'
import contactImg from '../../assets/contact-img.svg'
import { ContactFormBox } from '../ContactFormBox'

export function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duração da animação em milissegundos
    })
  }, [])

  return (
    <div id="contact" className="w-full max-w-full bg-rose-400 px-10 py-20">
      <div
        data-aos="zoom-in"
        className="mx-auto flex max-w-[1400px] flex-col gap-20 xl:flex-row"
      >
        <div className="flex flex-col items-center justify-center gap-10 xl:max-w-[800px]">
          <div className="flex flex-col gap-20">
            <h2 className="text-5xl font-extrabold uppercase text-rose-950 sm:text-6xl">
              Entre em contato!
            </h2>
            <span className="-mt-14 text-xl font-bold text-zinc-100 sm:text-2xl">
              <b className="text-rose-950">Estamos Aqui Para Você! </b> <br />{' '}
              Se você tem perguntas, nós temos respostas. Seja uma dúvida sobre
              o produto mais adequado para o seu tipo de pele, uma curiosidade
              sobre as nossas práticas sustentáveis ou uma sugestão para
              aprimorar ainda mais nossa linha de cosméticos, adoraríamos ouvir
              de você. Junte-se a nós nesta jornada de realçar sua beleza
              natural, pois acreditamos que cada indivíduo é único e merece o
              melhor cuidado. Somos apaixonados pelo que fazemos, e estamos
              ansiosos para compartilhar esse entusiasmo com você. Fique à
              vontade para nos contatar. Sua opinião é muito importante para
              nós. A Equipe da <b className="text-rose-950">MP Cosméticos</b>{' '}
              está sempre em prontidão para você!
            </span>
          </div>

          <Image src={contactImg} alt="About Image" width={600} height={600} />
        </div>

        <ContactFormBox />
      </div>
    </div>
  )
}
