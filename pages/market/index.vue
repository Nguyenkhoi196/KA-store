<template>
  <div>
    <HeaderMarket
      :quantity="quantity"
      :products="products.length"
      @filter="filteredProduct"
    />
    <ul class="my-[100px]">
      <li v-for="product in products" :key="product.id" :attrs="product">
        <show-products :product="product" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { reactive, ref } from 'vue'

import ShowProducts from '~/components/ShowProducts.vue'
import HeaderMarket from '~/components/HeaderMarket.vue'

import { Product } from '~/types/Product'

export default {
  components: { ShowProducts, HeaderMarket },
  layout: 'AuthLayout',
  transition: 'slide-left',

  setup() {
    const fs = getFirestore()
    const products = reactive([]) // Khởi tạo biến reactive để lưu trữ danh sách sản phẩm
    const quantity = ref(0)
    const searchProduct = ref('')
    const productSearched = reactive([])
    const readData = async () => {
      const fsProduct = collection(fs, 'products')
      const querySnapshot = await getDocs(fsProduct)
      products.length = 0 // Xóa các phần tử cũ trong mảng reactive
      querySnapshot.forEach((doc) => {
        const data: Product = doc.data()
        products.push({ id: doc.id, ...data })
        quantity.value += +data.inventory
      })
    }
    readData()

    const filteredProduct = (text: any) => {
      searchProduct.value = text
      console.log(products)

      console.log(searchProduct.value)
      productSearched = products.filter((product) =>
        product.name.includes(text)
      )
      console.log(productSearched)
    }
    return {
      products,
      quantity,
      searchProduct,
      readData,
      filteredProduct,
    }
  },
}
</script>

<style></style>
