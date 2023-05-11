import {
  getDocs,
  collection,
  getFirestore,
  deleteDoc,
  updateDoc,
  addDoc,
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
      const products: Array<Product> = []
      querySnapshot.forEach((doc) => {
        const product = {
          id: doc.id,
          ...doc.data(),
        }
        products.push(product)
      })
      commit('LIST_PRODUCTS', products)
      // localStorage.setItem('products', JSON.stringify(products))
    } catch (e) {
      console.log(e)
    }
  },

  async addProduct({ commit }, product) {
    try {
      const fs = getFirestore()
      const fsProduct = collection(fs, 'products')
      await addDoc(fsProduct, product)
      commit('ADD_PRODUCT', product)
      // dispatch('getAllProducts')
    } catch (e) {}
  },
  // filterProducts ({commit}, fields){
  //   commit('FILTER_PRODUCTS', fields)
  // },
  searchProducts({ commit }, text) {
    // commit('FILTER_PRODUCTS')
    commit('SEARCH_PRODUCTS', text)
    console.log('action')
  },

  async deleteProduct({ commit }, id) {
    try {
      await deleteDoc(id)
      // localStorage.removeItem(`products/${id}`)
      commit('DELETE_PRODUCT', id)
    } catch (e) {}
  },

  async updateProduct({ commit }, { docRef, value }) {
    try {
      await updateDoc(docRef, value)
      commit('UPDATE_PRODUCT', value)
    } catch (e) {}
  },
}

export default actions
