import { Product } from '~/types/Product'

const mutations = {
  LIST_PRODUCTS(state, products) {
    state.products = products
  },
  DELETE_PRODUCTS(state, products) {
    const index = state.products.findIndex((product) => product.id === products)
    state.products.splice(index, 1)
    console.log('mutations', state.products)
  },
  UPDATE_PRODUCTS(state, products) {
    state.products = products
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
