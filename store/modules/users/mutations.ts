import { MutationTree } from 'vuex'
import { userState } from './type'

const mutations: MutationTree<userState> = {
  SET_LOGIN(state, payload) {
    state.user.login = true
    state.user.data = payload.user
    state.user.token = payload.jwt
  },
  SET_ROLE(state, payload) {
    state.user.role = payload.role?.name
  },
  SET_SIGNUP() {},
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
