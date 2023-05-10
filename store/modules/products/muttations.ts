import { MutationTree } from 'vuex'
import { productState } from './type'

const mutations: MutationTree<productState> = {
  LIST_PRODUCTS(state, products) {
    state.products = products
  },
  DELETE_PRODUCT(state, products) {
    const index = state.products.findIndex((product) => product.id === products)
    state.products.splice(index, 1)
    console.log('mutations', state.products)
  },
  UPDATE_PRODUCT(state, product) {
    state.product = product
  },
  // FILTER_PRODUCTS(state, fields) {},
  SEARCH_PRODCUT(state, word) {
    if (!word || word === '') {
      state.searchWords = null
      state.filterState = null
    } else {
      state.searchWords = word
      state.filterState = state.products.filter((product) =>
        product.name.toLowerCase().includes(word.toLowerCase())
      )
    }
  },
}

export default mutations
