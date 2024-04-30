/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'
import WhatsLogo from '../assets/whats.svg'
import Link from 'next/link'
import { Product } from '@/contexts/cart-context'

interface GoToWhatsBtnProps {
  disabled: boolean
  products: Product[]
}

export function GoToWhatsBtn({ products, disabled }: GoToWhatsBtnProps) {
  function createWhatsAppLink(number: string, products: any[]): string {
    let message = 'Olá, tenho interesse nos seguintes produtos:\n\n'

    for (const product of products) {
      message += ` | Produto: ${product.title}, Tamanho: ${product.size}, Quantidade: ${product.quantity}\n`
    }

    message +=
      '. Por favor, poderia informar o valor total destes itens? Muito obrigado(a)!'

    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${number}?text=${encodedMessage}`
  }

  const whatsLink = createWhatsAppLink('18996665180', products)

  return (
    <>
      {disabled ? (
        <button
          disabled={true}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-emerald-600 font-semibold transition-all hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Image src={WhatsLogo} alt="" />
          Pedir pelo WhatsApp
        </button>
      ) : (
        <Link
          href={whatsLink}
          target="_blank"
          className="flex h-12 items-center justify-center gap-2 rounded-full bg-emerald-600 font-semibold transition-all hover:bg-emerald-500"
        >
          <Image src={WhatsLogo} alt="" />
          Pedir pelo WhatsApp
        </Link>
      )}
    </>
  )
}
