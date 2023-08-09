import { GetterTree } from 'vuex'
import { userState } from './type'
import { rootState } from '~/store/type'
const getters: GetterTree<userState, rootState> = {
  isAuthenticated: (state) => !!state.user.token,
}
export default getters
