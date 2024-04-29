export interface Product {
  id: number
  title: string
  slug: string
  price: number
  image: string
  description: string
  categories: string[]
  sizes: string[]
  featured: boolean
}
