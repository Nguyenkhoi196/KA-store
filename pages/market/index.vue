<template>
  <div>
    <HeaderMarket :quantity="quantity" />
    <ul class="mt-[100px]">
      <ShowProducts
        v-for="product in products"
        :key="product.id"
        class="grid grid-cols-2 grid-flow-row justify-between gap-3 content-center"
        :name="product.name"
        :price="product.price"
        :brand="product.brand"
        :inventory="product.inventory"
        :category="product.category"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { reactive, ref } from 'vue'

import ShowProducts from '~/components/ShowProducts.vue'
import HeaderMarket from '~/components/HeaderMarket.vue'

export default {
  components: { ShowProducts, HeaderMarket },
  layout: 'AuthLayout',
  transition: 'slide-left',
  setup() {
    const fs = getFirestore()
    const products = reactive([]) // Khởi tạo biến reactive để lưu trữ danh sách sản phẩm
    const quantity = ref(0)
    const readData = async () => {
      const fsProduct = collection(fs, 'products')
      const querySnapshot = await getDocs(fsProduct)
      products.length = 0 // Xóa các phần tử cũ trong mảng reactive
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        products.push({ id: doc.id, ...data })
        quantity.value += +data.inventory
        // console.log(quantity.value);
      })
      return quantity
    }
    readData()
    return {
      products, // Trả về biến reactive products
      readData,
      quantity
    }
  },
}
</script>

<style lang="scss" scoped></style>
