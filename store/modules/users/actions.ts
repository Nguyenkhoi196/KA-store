import * as auth from 'firebase/auth'
import axios from 'axios'

import { ActionTree } from 'vuex'
import { userState } from './type'
import { rootState } from '~/store/type'

const actions: ActionTree<userState, rootState> = {
  signup({ commit }, { email, password }) {
    return new Promise((resolve, reject) => {
      auth
        .createUserWithEmailAndPassword(auth.getAuth(), email, password)
        .then((data) => {
          // dang ky mutations set_login = field data.user
          commit('SET_LOGIN', data.user)
          const user: any = auth.getAuth().currentUser
          resolve(user)
        })
        .catch((error) => {
          reject(error)
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
        .catch((error) => {
          reject(error)
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
              localStorage.setItem(
                'roles',

                res.data.role
                  ? `${JSON.stringify(res.data.role.name)}`
                  : 'Client'
              )
            })
          commit('SET_LOGIN', res.data)
          localStorage.setItem('user', JSON.stringify(res.data.user))
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
