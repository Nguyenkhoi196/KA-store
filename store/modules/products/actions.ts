import {
  getDocs,
  collection,
  getFirestore,
  deleteDoc,
  updateDoc,
  addDoc,
  query,
  where,
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
    } catch (e) {}
  },

  async searchProducts({ commit }, text) {
    const fs = getFirestore()
    const fsProduct = collection(fs, 'products')
    try {
      const products: Array<Product> = []
      if (text) {
        await (
          await getDocs(
            query(
              fsProduct,
              where('name', '>=', text),
              where('name', '<=', text + '\uF8FF')
            )
          )
        ).forEach((doc) => {
          const product = {
            id: doc.id,
            ...doc.data(),
          }
          products.push(product)
        })
      } else {
        await (
          await getDocs(fsProduct)
        ).forEach((doc) => {
          const product = {
            id: doc.id,
            ...doc.data(),
          }
          products.push(product)
        })
      }
      console.log(products)
      commit('LIST_PRODUCTS', products)
      commit('SEARCH_PRODUCTS', text)
    } catch (e) {}
  },

  async filterProduct({ commit }, { category, stock }) {
    const fs = getFirestore()
    const fsProduct = collection(fs, 'products')
    try {
      const products: Array<Product> = []
      await (
        await getDocs(
          query(
            fsProduct,
            where('category', '==', `${category}`)
            // where('inventory', '==', `${}`)
          )
        )
      ).forEach((doc) => {
        const product = {
          id: doc.id,
          ...doc.data(),
        }
        products.push(product)
      })
      console.log(products)

      commit('LIST_PRODUCTS', products)
    } catch (e) {}
    // commit('FILTER_PRODUCTS',)
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
