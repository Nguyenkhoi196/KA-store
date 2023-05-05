import * as auth from 'firebase/auth'

import { ActionTree } from 'vuex'
import { userState } from './type'
import { rootState } from '~/store/type'

const actions: ActionTree<userState, rootState> = {
  signup(context: any, { email, password }) {
    return new Promise((resolve, reject) => {
      auth
        .createUserWithEmailAndPassword(auth.getAuth(), email, password)
        .then((data) => {
          // dang ky mutations set_login = field data.user
          context.commit('SET_LOGIN', data.user)
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

  login(context: any, { email, password }) {
    return new Promise((resolve, reject) => {
      auth
        .signInWithEmailAndPassword(auth.getAuth(), email, password)
        .then((data) => {
          data.user.getIdToken().then((token) => {
            localStorage.setItem('user', JSON.stringify(data.user))
            localStorage.setItem('token', JSON.stringify(token))
            context.commit('SET_LOGIN', data.user)
            context.commit('SET_TOKEN', token)
          })
          const user: any = auth.getAuth().currentUser
          console.log(user)

          resolve(user)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}

export default actions
