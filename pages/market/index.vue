<template>
  <div>
    <!-- <header-market />
    <ul class="my-[100px]">
      <li v-for="product in products" :key="product.id">
        <show-products :product="product.attributes" />
      </li>
    </ul> -->
    <section class="container mx-auto">
      <section class="w-full flex">
        <section class="max-w-[234px] min-w-[200px] h-auto mr-8 mb-8 mt-6">
          <h1 class="text-4xl font-bold pb-6 items-center">
            <span> Hàng hóa </span>
          </h1>
          <product-filter>
            <article class="relative bg-primary mb-4 p-3 shadow-md rounded-md">
              box1
            </article>
          </product-filter>
        </section>
        <section class="grow min-w-[468px] min-h-[400px] relative mb-5">
          <div class="mt-6 min-h-[inherit] w-full bg-primary relative">
            <article class="flex mt-0 items-baseline min-h-[54px]">
              <div class="grow shrink items-center flex">
                <div
                  class="max-w-[450px] min-w-[200px] mr-4 rounded border-[1px] border-solid border-tertiary bg-primary relative grow px-1 py-2 flex-wrap items-stretch flex focus:shadow-xl"
                >
                  <input
                    type="text"
                    placeholder="Nhập mặt hàng"
                    class="flex-auto relative float-left mb-0 z-[2] focus:outline-none ml-5"
                  />
                </div>
                <aside class="flex self-end">
                  <div class="button">Thêm mới</div>
                </aside>
              </div>
            </article>
          </div>
          List product
        </section>
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { Product } from '~/types/Product'

const products = ref<Product[]>()
// axios.get('http://localhost:1337/api/products').then((response) => {
//   products.value = response.data.data
//   console.log(products.value)
// })
</script>
<script lang="ts">
export default {
  layout: 'DefaultLayout',
}
</script>
<style lang="scss" scoped></style>
