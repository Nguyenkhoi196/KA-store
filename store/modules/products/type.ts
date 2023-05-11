import { Product } from '~/types/Product'

export interface productState {
  products: Product[]
  product: Product
  totalQuantity: number
  searchKeyword: string | null
  filterState: any
}
