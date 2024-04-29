import { z } from 'zod'
import data from '../../data.json'

export async function GET(_: Request, { params }: { params: { id: string } }) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const id = z.string().parse(params.id)
  console.log('veio aqui')

  console.log('ID: ' + id)

  const products = data.products.filter((product) => {
    return product.categories.includes(id)
  })

  console.log(products)

  if (!products) {
    Response.json({ message: 'Product not found.' }, { status: 400 })
  }

  return Response.json(products)
}
