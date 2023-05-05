import Vue from 'vue'
import Vuex from 'vuex'
// import { createStore } from 'vuex'

import users from './modules/users'
import products from './modules/products'
// import { rootState } from './type'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    users,
    products,
  },
})
