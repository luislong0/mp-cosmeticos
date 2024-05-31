'use client'

import { PopularProductCard } from '../PopularProductCard'
import AOS from 'aos'
import { useEffect } from 'react'
import productImage1 from '../../assets/ImageProduct1.png'
import productImage2 from '../../assets/ImageProduct2.png'
import productImage3 from '../../assets/ImageProduct3.png'
import productImage5 from '../../assets/ImageProduct5.png'
import Link from 'next/link'

export function Products() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duração da animação em milissegundos
    })
  }, [])

  return (
    <div id="products" className="w-full max-w-full bg-zinc-100 px-10 py-20">
      <div
        data-aos="zoom-in"
        className="mx-auto flex max-w-[1400px] flex-col gap-20"
      >
        <h2 className="bg-rose-gradient bg-clip-text text-5xl font-extrabold uppercase text-transparent sm:text-6xl">
          Nossos Produtos!
        </h2>
        <span className="-mt-14 text-xl font-bold sm:text-2xl">
          Explore nossa seleção cuidadosamente curada dos melhores produtos de
          cosméticos para cabelos. Desde luxuosos kits de uso pessoal, ideais
          para nutrir e revigorar cada tipo de cabelo, até nossa exclusiva linha
          profissional para salões, desenhada para proporcionar transformações
          capilares inigualáveis. Criados com ingredientes de alta qualidade e
          inovação, nossos produtos são mais do que apenas cosméticos. Eles são
          a chave para a descoberta da verdadeira beleza dos seus cabelos. A
          jornada para o cabelo dos sonhos começa aqui,
        </span>
        <div className="flex flex-wrap items-start justify-between gap-10 sm:gap-x-0 sm:gap-y-10">
          <PopularProductCard
            title="Perfume Capilar GLAMOUR Luisot"
            img={productImage1}
            about="O perfume capilar é enriquecido com ativos nutritivos e essências aromáticas, projetado para oferecer uma hidratação intensiva aos seus fios. Seu uso regular trará um brilho radiante aos cabelos, controlará o indesejável frizz e deixará uma fragrância inconfundível que perdura por todo o dia."
          />
          <PopularProductCard
            title="Kit de Cuidados Capilares Banana e Mel Luisot"
            img={productImage3}
            about="O Kit de Cuidados Capilares Bananas e Mel é a solução completa para o seu cabelo. Composto por um Shampoo de limpeza suave, que limpa os fios sem causar danos e deixa um aroma de banana com mel inconfundível; um Condicionador que revitaliza e protege os fios, adicionando uma fragrância inconfundível de banana com mel, e uma Máscara de Hidratação que proporciona hidratação profunda, deixa o cabelo protegido e exala o mesmo perfume inesquecível. Juntos, esses produtos oferecem limpeza, revitalização e proteção, deixando seu cabelo mais saudável e perfumado."
          />
          <PopularProductCard
            title="Kit de Cuidados Capilares Restore Force Luisot"
            img={productImage5}
            about="O Kit Completo Restore Force é a solução definitiva para os cuidados capilares. Composto por Shampoo Restore Force que higieniza e disciplina, Condicionador que reestrutura fios danificados, Leave-in multifuncional para finalização e proteção, e Máscara de Hidratação antioxidante para rejuvenescer e nutrir os fios. Este kit proporciona um tratamento capilar completo, desde a limpeza até a hidratação intensa, para cabelos brilhantes e saudáveis."
          />
          <PopularProductCard
            title="Nutrição Capilar sem Enxágue Prime Blur Korban"
            img={productImage2}
            about="Este é um produto capilar que nutre, hidrata e repara os fios, conferindo-lhes brilho, maciez e vitalidade. Composto por proteínas e óleos, também oferece proteção térmica, protegendo os cabelos de danos causados pelo calor como como: secadores e chapinhas, tornando-o ideal para uso diário e para quem frequenta regularmente salões de beleza."
          />
        </div>

        <div className="flex flex-col gap-2 text-lg font-medium sm:text-xl">
          <h3 className="bg-rose-gradient bg-clip-text text-4xl font-extrabold uppercase text-transparent sm:text-5xl">
            Catálogo
          </h3>

          <p>
            Em nosso catálogo, você encontrará uma variedade inigualável de
            itens cuidadosamente selecionados para atender a todas as suas
            necessidades e desejos. Estamos comprometidos em garantir que você
            encontre exatamente o que procura, seja para uso pessoal, presente
            para alguém especial ou para uso profissional em salão.
          </p>

          <p>
            Por isso, venha dar uma conferida! Navegue pelo nosso catálogo e
            descubra o mundo de opções que temos disponíveis para você. Estamos
            confiantes de que você vai encontrar o que precisa e muito mais.
            Afinal, o nosso objetivo é superar as suas expectativas, sempre.
          </p>

          <p>
            Não perca tempo, nossos produtos incríveis estão esperando por você.
            Venha explorar nosso catálogo agora mesmo!
          </p>

          <Link
            href={'/catalog'}
            className="mt-10 flex h-14 max-w-fit items-center justify-center gap-3 rounded-md bg-rose-500 px-8 py-3 font-bold uppercase text-white transition-all hover:scale-105 hover:bg-rose-600 hover:text-white disabled:cursor-not-allowed hover:disabled:bg-rose-500"
          >
            Nosso Catálogo
          </Link>
        </div>
      </div>
    </div>
  )
}
