import { GetterTree } from 'vueX'
import { userState } from './type'
import { rootState } from '~/store/type'
const getters: GetterTree<userState, rootState> = {
  user(state) {
    return state.user
  },
  isAuthenticated(state) {
    return !!state.user.token
  },
}
export default getters
