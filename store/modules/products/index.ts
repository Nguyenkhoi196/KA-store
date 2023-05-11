// import Vue from 'vue'
// import Vuex from 'vuex'
// import { Product } from '../../../types/Product'

import { state } from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default {
  namespace: true,
  state,
  getters,
  mutations,
  actions,
}
