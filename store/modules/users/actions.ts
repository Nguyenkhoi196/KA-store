import { ActionTree } from 'vuex'
import { axios } from '../../../plugins/axios'

import { userState } from './type'
import { rootState } from '~/store/type'
import { getUserDetails, login } from '~/api/User'

const actions: ActionTree<userState, rootState> = {
  signup({ commit }, { email, username, password }) {
    return new Promise((resolve, reject) => {
      axios
        .post('/api/auth/local/register', {
          email,
          username,
          password,
        })
        .then((res: any) => {
          commit('SET_SIGNUP', res.data)
          resolve(res.data)
        })
        .catch((e: any) => {
          reject(e.response.data.error)
        })
    })
  },

  logout: ({ commit }) => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    commit('SET_LOGOUT') // Gọi mutation để đặt trạng thái logout
  },
  login({ commit }, { identifier, password }) {
    return new Promise((resolve, reject) => {
      login({ identifier, password })
        .then((res: any) => {
          getUserDetails({ populate: '*' }).then((res: any) => {
            commit('SET_ROLE', res.data)
            localStorage.setItem('user', JSON.stringify(res.data))
            localStorage.setItem('role', JSON.stringify(res.data.role))
            resolve(res.data)
          })
          commit('SET_LOGIN', res.data)
          localStorage.setItem('token', JSON.stringify(res.data.jwt))
          return res.data.jwt
        })
        .catch((e: any) => {
          reject(e)
        })
    })
  },
}

export default actions
