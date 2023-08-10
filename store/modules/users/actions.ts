import * as auth from 'firebase/auth'
import axios from 'axios'

import { ActionTree } from 'vuex'
import { userState } from './type'
import { rootState } from '~/store/type'

const actions: ActionTree<userState, rootState> = {
  signup({ commit }, { email, username, password }) {
    return new Promise((resolve, reject) => {
      axios
        .post('http://localhost:1337/api/auth/local/register', {
          email,
          username,
          password,
        })
        .then((res) => {
          commit('SET_SIGNUP', res.data)
          resolve(res.data)
        })
        .catch((e) => {
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
        .post('http://localhost:1337/api/auth/local', {
          identifier,
          password,
        })
        .then((res) => {
          axios
            .get('http://localhost:1337/api/users/me?populate=*', {
              headers: {
                authorization: `Bearer ${res.data.jwt}`,
              },
            })
            .then((res) => {
              commit('SET_ROLE', res.data)
              localStorage.setItem('user', JSON.stringify(res.data))
              localStorage.setItem('role', JSON.stringify(res.data.role.name))
            })
          commit('SET_LOGIN', res.data)
          localStorage.setItem('token', JSON.stringify(res.data.jwt))
          resolve(res.data)
        })
        .catch((e) => {
          reject(e)
        })
    })
  },
}

export default actions
