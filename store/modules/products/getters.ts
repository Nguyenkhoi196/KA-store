import { GetterTree } from 'vuex'
import { productState } from './type'
import { rootState } from '~/store/type'

const getters: GetterTree<productState, rootState> = {
  getAllProducts: (state) => state.products,
  getProduct: (state) => state.product,
  getSearchWords: (state) => state.searchKeyword,
  getfilterState: (state) => state.filterState,
  getTotalInventory: (state) =>
    state.products.reduce((total: number, current: any) => {
      total += Number(current.inventory)
      return total
    }, 0),
}

export default getters
