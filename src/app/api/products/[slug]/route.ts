import { z } from 'zod'
import data from '../data.json'

export async function GET(
  _: Request,
  { params }: { params: { slug: string } },
) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const slug = z.string().parse(params.slug)

  const product = data.products.find((product) => product.slug === slug)

  if (!product) {
    // Aqui você precisa retornar a resposta usando 'new Response' ou apenas 'Response'
    return new Response(JSON.stringify({ message: 'Product not found.' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  // Aqui você retorna a resposta com o produto encontrado, garantindo que o tipo de conteúdo seja JSON
  return new Response(JSON.stringify(product), {
    headers: { 'Content-Type': 'application/json' },
  })
}
