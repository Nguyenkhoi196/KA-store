import { MutationTree } from 'vuex'
import { productState } from './type'

const mutations: MutationTree<productState> = {
  LIST_PRODUCTS(state, products) {
    state.products = products
  },
  ADD_PRODUCT(state, product) {
    state.product = product
    state.products.push(product)
  },
  DELETE_PRODUCT(state, products) {
    const index = state.products.findIndex((product) => product.id === products)
    state.products.splice(index, 1)
  },
  UPDATE_PRODUCT(state, product) {
    state.product = product
    console.log('mutation', product)
  },
  // FILTER_PRODUCTS(state, fields) {},
  SEARCH_PRODUCTS(state, keyword) {
    if (!keyword || keyword === '') {
      state.searchKeyword = null
      state.filterState = null
    } else {
      state.searchKeyword = keyword
      state.filterState = state.products.filter((product) =>
        product.name.toLowerCase().includes(keyword.toLowerCase())
      )
    }
  },
}

export default mutations
