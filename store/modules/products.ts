import Vue from 'vue'
import Vuex from 'vuex'
import {
  getFirestore,
  collection,
  getDoc,
  doc
} from 'firebase/firestore'
Vue.use(Vuex)

const products = new Vuex.Store ({
  state: {
  product: [],
  quantity: 0,
  totalQuantity: 0
},
  getters:{
    totalProduct : state => state.totalQuantity,
  },
  mutations: {
    incrementItemCount(state, count) {
      state.totalQuantity = count
    },
    setTotalProduct(state, totalQuantity) {
      state.totalQuantity = totalQuantity;
    },
  },
  actions: {
    async incrementItemCount({commit}){
      try{
        const fs = getFirestore();
        const fsProduct = collection(fs, 'products')
        const productSnapshot = await getDoc(fsProduct)
        let totalQuantity = 0;
        productSnapshot.forEach((doc) => {
          const product = doc.data()
          totalQuantity += product.inventory
          console.log('product',product);

        })
        commit('setTotalProduct', totalQuantity)
      }
      catch(e){
        console.log('error',e);

      }
    }
  }
})
export default products;
