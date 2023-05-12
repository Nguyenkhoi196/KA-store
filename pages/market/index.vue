<template>
  <div>
    <HeaderMarket
      :total-product="productsList.length"
      :products="productsList"
      :total-quantity="total"
      @searched-product="searchedProduct"
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
    const total = ref(0)

    store.dispatch('getAllProducts')
    const productsList: ComputedRef<Product[]> = computed(
      () => store.state.products.products
    )

    watch(productsList, () => {
      const totalInventory: ComputedRef<number> = computed(() => {
        return store.getters.getTotalInventory
      })
      total.value = totalInventory.value
    })
    const searchedProduct = async (searchKeyword: string) => {
      await store.dispatch('searchProducts', searchKeyword)

      console.log('page', searchKeyword)
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
