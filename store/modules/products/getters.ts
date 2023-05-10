import { GetterTree } from 'vuex'
import { productState } from './type'
import { rootState } from '~/store/type'

const getters: GetterTree<productState, rootState> = {
  getAllProducts: (state) => state.products,
  getProduct: (state) => state.product,
  getSearchWords: (state) => state.searchWords,
  getfilterState: (state) => state.filterState,
  // getTotalInventory: (state) =>
  //   state.products.products.reduce(
  //     (total: number, current: any) => total + Number(current.inventory),
  //     0
  //   ),
  getTotalInventory: (state) => {
    let total = 0
    state.products.products.forEach((product: any) => {
      total += Number(product.inventory)
    })
    return total
  },
}

export default getters
