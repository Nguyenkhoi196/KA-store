import { Product } from '~/types/Product'

export interface productState {
  products: Product[]
  product: Product | null
  totalQuantity: number
  searchKeyword: string | null
  filterState: any
}
