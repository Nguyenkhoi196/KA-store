<template>
  <div>
    <!-- <HeaderMarket
      :total-product="productsList.length"
      :products="productsList"
      :total-quantity="total"
      @searched-product="searchedProduct"
      @filtered-product="filteredProduct"
    /> -->
    <ul class="my-[100px]">
      <li v-for="product in products" :key="product.id">
        <show-products :product="product.attributes" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// import { computed, ComputedRef, ref, watch } from 'vue'
// import axios from 'axios'
// import { store } from '../../store'

import { ref } from 'vue'
import axios from 'axios'
import { Product } from '~/types/Product'

// import ShowProducts from '~/components/ShowProducts.vue'
// import HeaderMarket from '~/components/HeaderMarket.vue'
// import { Product } from '~/types/Product'

// export default {
//   components: { ShowProducts, HeaderMarket },
//   transition: 'slide-left',

//   setup() {
//     const total = ref(0)
//     store.dispatch('getAllProducts')
//     const productsList: ComputedRef<Product[]> = computed(
//       () => store.state.products.products
//     )

//     watch(productsList, () => {
//       const totalInventory: ComputedRef<number> = computed(() => {
//         return store.getters.getTotalInventory
//       })
//       total.value = totalInventory.value
//     })

//     const searchedProduct = async (searchKeyword: string) => {
//       await store.dispatch('searchProducts', searchKeyword)

//       console.log('page', searchKeyword)
//     }

//     const filteredProduct = async (category: Product, stock: string) => {
//       console.log('filter')

//       await store.dispatch('filterProduct', category, stock)
//     }

//     axios.get('http://localhost:1337/api/products').then((response) => {
//       console.log(response)
//     })
//     const testApi = async () => {
//       try {
//         const response = await $strapi.$product.find()
//         console.log(response)
//       } catch (error) {}
//     }
//     testApi()

//     return {
//       productsList,
//       total,
//       searchedProduct,
//       filteredProduct,
//     }
//   },
// }
//
const products = ref<Product[]>()
axios.get('http://localhost:1337/api/products').then((response) => {
  products.value = response.data.data
  console.log(products.value)
})
</script>

<style lang="scss" scoped></style>
