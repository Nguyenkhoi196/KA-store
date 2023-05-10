import {
  getDocs,
  collection,
  getFirestore,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore'

import { ActionTree } from 'vuex'
import { productState } from './type'
import { rootState } from '~/store/type'
import { Product } from '~/types/Product'

const actions: ActionTree<productState, rootState> = {
  async getAllProducts({ commit }) {
    const fs = getFirestore()
    const fsProduct = collection(fs, 'products')
    try {
      const querySnapshot = await getDocs(fsProduct)
      const products = []
      querySnapshot.forEach((doc) => {
        const product = {
          id: doc.id,
          ...doc.data(),
        }
        products.push(product)
      })
      commit('LIST_PRODUCTS', products)
      localStorage.setItem('products', JSON.stringify(products))
      console.log('action setItem', products)
    } catch (e) {
      console.log(e)
    }
  },
  // filterProducts ({commit}, fields){
  //   commit('FILTER_PRODUCTS', fields)
  // },
  searchProducts({ commit }, word) {
    commit('SEARCH_PRODUCTS', word)
  },

  async deleteProduct({ commit }, id) {
    try {
      await deleteDoc(id)
      localStorage.removeItem(`products/${id}`)
      commit('DELETE_PRODUCT', id)
    } catch (e) {
      console.log(e)
    }
  },

  async updateProduct({ commit }, { id, value }) {
    try {
      const updated = await updateDoc(id, value)
      commit('UPDATE_PRODUCT', { id, value: updated })
      console.log(id, value)
    } catch (error) {
      console.log(error)
    }
  },
}

export default actions
