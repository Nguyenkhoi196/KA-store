<template>
  <div>
    <HeaderMarket
      :total-product="productsList.length"
      :products="productsList"
      :total-quantity="total"
      @search="searchedProduct"
    />
    <ul class="my-[100px]">
      <li v-for="product in productsList" :key="product.id">
        <show-products :product="product" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, ref, watch } from 'vue'
import { store } from '../../store'

import ShowProducts from '~/components/ShowProducts.vue'
import HeaderMarket from '~/components/HeaderMarket.vue'
import { Product } from '~/types/Product'

export default {
  components: { ShowProducts, HeaderMarket },
  layout: 'AuthLayout',
  transition: 'slide-left',

  setup() {
    // const fs = getFirestore()

    // const products = reactive([]) // Khởi tạo biến reactive để lưu trữ danh sách sản phẩm
    // const filterCategory = reactive([])
    // const productSearcheds = reactive([])
    // // const productFilterd = reactive([])
    // const filterSelects = reactive([])
    // const search = ref('')
    // const quantity = ref(0)

    // const fsProduct = collection(fs, 'products')

    // const readData = async () => {
    //   const querySnapshot = await getDocs(fsProduct)
    //   products.length = 0 // Xóa các phần tử cũ trong mảng reactive
    //   querySnapshot.forEach((doc) => {
    //     const data: Product = doc.data()
    //     products.push({ id: doc.id, ...data })
    //     filterCategory.push(data.category)
    //   })
    //   filterSelects.length = 0
    //   filterSelects.push(...new Set(filterCategory))
    // }

    // const searchedProduct = (text: any) => {
    //   search.value = text

    //   productSearcheds.length = 0 // Xóa các phần tử cũ trong mảng reactive
    //   productSearcheds.push(
    //     ...products.filter((product) =>
    //       product.name.toLowerCase().includes(text.toLowerCase())
    //     )
    //   )
    //   const sum = productSearcheds.reduce(
    //     (accumulator, productSearched) =>
    //       accumulator + Number(productSearched.inventory),
    //     0
    //   )
    //   quantity.value = sum
    // }

    // const filteredProduct = async (stock: any, category: number) => {
    //   console.log('da truyen', stock, category)
    //   productSearcheds.length = 0
    //   if (stock === 'inStock') {
    //     const queryFilter = query(
    //       fsProduct,
    //       where('category', '==', `${category}`),
    //       where('inventory', '>', 0)
    //     )
    //     const querySnapshot = await getDocs(queryFilter)
    //     querySnapshot.forEach((doc) => {
    //       productSearcheds.push({ id: doc.id, ...doc.data() })
    //       console.log('filter', { id: doc.id, ...doc.data() })
    //     })
    //   } else if (stock === 'outOfStock') {
    //     const queryFilter = query(
    //       fsProduct,
    //       where('category', '==', `${category}`),
    //       where('inventory', '==', 0)
    //     )
    //     const querySnapshot = await getDocs(queryFilter)
    //     querySnapshot.forEach((doc) => {
    //       productSearcheds.push({ id: doc.id, ...doc.data() })
    //       console.log('filteroutStock', { id: doc.id, ...doc.data() })
    //     })
    //   }
    // }

    // readData().then(() => {
    //   searchedProduct('')
    // })
    // return {
    //   products,
    //   quantity,
    //   search,
    //   productSearcheds,
    //   filterSelects,
    //   readData,
    //   searchedProduct,
    //   filteredProduct,
    // }
    const total = ref()
    store.dispatch('getAllProducts')
    const productsList: ComputedRef<Product[]> = computed(
      () => store.state.products.products
    )

    watch(productsList, () => {
      const totalInventory = computed(() => {
        return store.getters.getTotalInventory
      })
      console.log(totalInventory.value)
      total.value = totalInventory
    })
    const searchedProduct = async (word: string) => {
      await store.dispatch('searchProducts', word)
    }
    return {
      productsList,
      total,
      searchedProduct,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/components/modal';
</style>
