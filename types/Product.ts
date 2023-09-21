export interface ProductAtrributes {
  name: string
  brand: string
  price: number
  inventory: number
  description?: string
  updatedAt: string
  image?: string | null
  category?: number | string
  state?: boolean
}
export interface Product {
  id: string
  attributes: ProductAtrributes
}
