// import Vue from 'vue'
// import Vuex from 'vuex'
// import { User } from '../../../types/User'

import state from './state'
import getters from './getters'
import mutations from './muttations'
import actions from './actions'

export default {
  namespace: true,
  state,
  getters,
  mutations,
  actions,
}
