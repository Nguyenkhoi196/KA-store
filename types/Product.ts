export interface Product {
  id: string
  name: string
  brand: string
  price: number
  inventory: number
  description?: string
  image?: string | null
  category?: number | string
}
