export interface Product {
  id: string
  name: string
  brand: string
  price: number
  inventory: number
  description?: string
  updatedAt: string
  image?: string | null
  category?: number | string
  state?: boolean
  img: {
    url: string
    name: string
  }
}
