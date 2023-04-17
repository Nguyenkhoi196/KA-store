<template>
  <div>
    <ul>
      <!-- <li v-for="product in products" :key="product.id"> -->
      <ShowProducts
      v-for="product in products"
        :key="product.id"
        class=" grid grid-cols-2 grid-flow-row justify-between gap-3 content-center"
        :name="product.name"
        :price="product.price"
        :brand="product.brand"
        :category="product.category"
      />
      <!-- </li> -->
    </ul>
  </div>
</template>

<script lang="ts">
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { reactive, ref } from 'vue'

import ShowProducts from '~/components/ShowProducts.vue'

export default {
  components: { ShowProducts },
  layout: 'AuthLayout',
  setup() {
    const fs = getFirestore()
    const products = reactive([]) // Khởi tạo biến reactive để lưu trữ danh sách sản phẩm

    const readData = async () => {
      const fsProduct = collection(fs, 'products')
      const querySnapshot = await getDocs(fsProduct)

      products.length = 0 // Xóa các phần tử cũ trong mảng reactive
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        products.push({ id: doc.id, ...data })
        // console.log({ id: doc.id, ...data });
      })
    }

    readData() // Gọi hàm readData để đọc dữ liệu

    return {
      products, // Trả về biến reactive products
      readData, // Trả về hàm readData
    }
  },
}
</script>

<style lang="scss" scoped></style>
