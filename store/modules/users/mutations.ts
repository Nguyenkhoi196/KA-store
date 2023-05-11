const mutations = {
  SET_LOGIN(state: any, payload: any) {
    state.user.login = true
    state.user.data = payload.value
    state.user.token = payload.token
  },
  SET_LOGOUT(state: any) {
    state.user.login = false
    state.user.data = null
    state.user.token = null
  },
  SET_TOKEN(state: any, token: string) {
    state.token = token
  },
  REMOVE_TOKEN(state: any) {
    state.token = null
  },
}
export default mutations
