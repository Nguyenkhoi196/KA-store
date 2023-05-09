import {
  getDocs,
  collection,
  getFirestore,
  doc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore'

import { ActionTree } from 'vuex'
import { productState } from './type'
import { rootState } from '~/store/type'

const actions: ActionTree<productState, rootState> = {
  async getAllProducts({ commit }) {
    const fs = getFirestore()
    const products: any = []
    const fsProduct = collection(fs, 'products')
    const querySnapshot = await getDocs(fsProduct)
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() })
    })
    localStorage.setItem('products', JSON.stringify(products))
    console.log('store', products)
    commit('LIST_PRODUCTS', products)
  },
  // filterProducts ({commit}, fields){
  //   commit('FILTER_PRODUCTS', fields)
  // },
  searchProducts({ commit }, word) {
    commit('SEARCH_PRODUCTS', word)
  },

  // ở đây //////////////////////////////////////////////////////////////////
  async deleteProduct({ commit }, id) {
    try {
      await deleteDoc(id)
      const remove = localStorage.removeItem(`products/${id}`)
      console.log(remove)

      commit('DELETE_PRODUCTS', id)
    } catch (e) {
      console.log(e)
    }
  },

  async updateProduct({ commit }, product, value) {
    try {
      await updateDoc(product, value)
      commit('UPDATE_PRODUCT', product, value)
    } catch (error) {
      console.log(error)
    }
  },
}

export default actions
