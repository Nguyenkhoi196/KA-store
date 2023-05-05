// import { GetterTree } from 'vueX'
const getters = {
  user(state) {
    return state.user.data
  },
  isAuthenticated(state) {
    return !!state.user.token
  },
}
export default getters
