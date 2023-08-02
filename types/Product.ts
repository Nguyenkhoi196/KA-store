export interface ProductAttributes {
  name: string
  brand: string
  price: number
  inventory: number
  description?: string
  image?: string | null
}
export interface Product {
  attributes: ProductAttributes
  id: number | string
}
