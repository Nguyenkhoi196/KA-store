import * as auth from 'firebase/auth'
// import axios from 'axios'
import { ActionTree } from 'vuex'
import { axios } from '../../../plugins/axios'

import { userState } from './type'
import { rootState } from '~/store/type'

const actions: ActionTree<userState, rootState> = {
  signup({ commit }, { email, username, password }) {
    return new Promise((resolve, reject) => {
      axios
        .post('/auth/local/register', {
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

  logout({ commit }) {
    return new Promise((resolve, reject) => {
      auth
        .signOut(auth.getAuth())
        .then((user) => {
          // Xóa token từ localStorage
          localStorage.removeItem('user')
          localStorage.removeItem('token')
          localStorage.removeItem('role')
          commit('SET_LOGOUT') // Gọi mutation để đặt trạng thái logout
          resolve(user)
        })
        .catch((e) => {
          reject(e)
        })
    })
  },

  login({ commit }, { identifier, password }) {
    return new Promise((resolve, reject) => {
      axios
        .post('/auth/local', {
          identifier,
          password,
        })
        .then((res: any) => {
          axios.get('/users/me?populate=*').then((res: any) => {
            console.log('me', res)
            commit('SET_ROLE', res.data)
            localStorage.setItem('user', JSON.stringify(res.data))
            localStorage.setItem('role', JSON.stringify(res.data.role.name))
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
