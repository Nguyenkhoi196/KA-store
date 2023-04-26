<template>
  <div>
    <HeaderMarket
      :quantity="quantity"
      :products="productSearcheds.length"
      @filter="filteredProduct"
    />
    <ul class="my-[100px]">
      <li
        v-for="productSearched in productSearcheds"
        :key="productSearched.id"
        :attrs="productSearched"
      >
        <show-products :product="productSearched" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { computed, reactive, ref } from 'vue'

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
    const searchProduct = ref(null)
    const productSearcheds = reactive([])
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
      // productSearched.values= products.values
      searchProduct.value = text
      console.log(searchProduct.value)

      productSearcheds.length = 0 // Xóa các phần tử cũ trong mảng reactive
      productSearcheds.push(
        ...products.filter((product) =>
          product.name.toLowerCase().includes(text.toLowerCase())
        )
      )
      console.log(productSearcheds.length)
      console.log(productSearcheds)
    }
    return {
      products,
      quantity,
      searchProduct,
      productSearcheds,
      readData,
      filteredProduct,
    }
  },
}
</script>

<style></style>
