import { GetterTree } from 'vuex'
import { productState } from './type'
import { rootState } from '~/store/type'

const getters: GetterTree<productState, rootState> = {
  getAllProducts: (state) => state.products,
  getProduct: (state) => state.product,
  getSearchWords: (state) => state.searchWords,
  getfilterState: (state) => state.filterState,
}

export default getters
