import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import products from './modules/products'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    users,
    products,
  },
})
