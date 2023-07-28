'use client'

import Image from 'next/image'
import aboutImg from '../../assets/about-img.svg'
import { Instagram } from 'lucide-react'
import { SocialMedia } from '../Buttons/SocialMedia'
import whatsLogo from '../../assets/whats.svg'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react'

export function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duração da animação em milissegundos
    })
  }, [])

  return (
    <div id="about" className="w-full bg-zinc-950 px-10 py-40">
      <div
        data-aos="zoom-in"
        className="mx-auto flex max-w-[1400px] flex-col-reverse gap-20 sm:flex-row"
      >
        <div className="flex flex-col gap-8">
          <h2 className="text-6xl font-extrabold uppercase text-rose-400">
            Sobre a empresa!
          </h2>
          <span className="text-2xl font-medium text-zinc-300">
            A MP Cosméticos, líder em beleza e bem-estar, une a excelência
            profissional à simplicidade dos cuidados diários. Como uma
            proeminente vendedora e distribuidora de cosméticos para cabelo,
            oferecemos linhas exclusivas para profissionais de salão, além de
            uma ampla gama de produtos desenvolvidos para elevar a sua rotina de
            cuidados capilares em casa. Experimente a qualidade de nossos
            produtos e sinta a diferença em cada fio.
          </span>

          <div className="flex w-full flex-col items-center gap-5 sm:flex-row sm:gap-10">
            <SocialMedia
              socialMedia="Instagram"
              name="Instagram"
              svg={<Instagram size={25} />}
            />
            <SocialMedia
              socialMedia="WhatsApp"
              name="WhatsApp"
              svg={<Image src={whatsLogo} alt="" />}
            />
          </div>
        </div>
        <Image src={aboutImg} alt="About Image" width={600} height={600} />
      </div>
    </div>
  )
}
