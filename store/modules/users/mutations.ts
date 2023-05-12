import { MutationTree } from 'vuex'
import { userState } from './type'
const mutations: MutationTree<userState> = {
  SET_LOGIN(state, payload) {
    state.user.login = true
    state.user.data = payload.value
    state.user.token = payload.token
  },
  SET_LOGOUT(state) {
    state.user.login = false
    state.user.data = null
    state.user.token = null
  },
  SET_TOKEN(state, token) {
    state.user.token = token
  },
  REMOVE_TOKEN(state) {
    state.user.token = null
  },
}
export default mutations
