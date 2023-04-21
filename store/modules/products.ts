import Vue from 'vue';
import Vuex from 'vuex';
import { getFirestore, collection, getDocs } from 'firebase/firestore'; // Import các hàm từ module firestore

Vue.use(Vuex);

const products = new Vuex.Store({
  state: {
    totalQuantity: 0
  },
  mutations: {
    setTotalQuantity(state, totalQuantity) {
      state.totalQuantity = totalQuantity;
    }
  },
  actions: {
    async fetchTotalQuantity({ commit }) {
      try {
        const fs = getFirestore();
        const fsProducts = collection(fs, 'products');
        const productSnapshots = await getDocs(fsProducts);
        let totalQuantity = 0;

        productSnapshots.forEach((doc) => {
          const product = doc.data();
          console.log(product);
          totalQuantity += product.inventory;
          console.log(totalQuantity);

        });

        commit('setTotalQuantity', totalQuantity);
      } catch (error) {
        console.error('Error fetching total quantity:', error);
      }
    }
  }
});

export default products;
