import { getDocs, collection, getFirestore } from 'firebase/firestore'

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
    console.log('store', products)

    commit('LIST_PRODUCTS', products)
  },
}

export default actions
