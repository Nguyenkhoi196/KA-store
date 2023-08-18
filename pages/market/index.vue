<template>
  <div class>
    <section class="container mx-auto">
      <section class="w-full flex">
        <section class="max-w-[234px] min-w-[200px] h-auto mr-8 mb-8 mt-6">
          <h1 class="text-4xl font-bold pb-6 items-center">
            <span> Hàng hóa </span>
          </h1>
          <section>
            <article class="relative bg-primary mb-4 p-3 shadow-md rounded-md">
              box1
            </article>
          </section>
        </section>
        <section class="grow min-w-[468px] min-h-[400px] relative mb-5">
          <div class="mt-6 min-h-[inherit] w-full bg-primary relative">
            <article class="flex mt-0 items-baseline min-h-[54px]">
              <div class="grow shrink items-center flex min-h-[40px]">
                <div
                  class="max-w-[450px] min-w-[200px] mr-4 rounded relative grow flex-wrap items-stretch flex focus:shadow-xl"
                >
                  <span class="absolute self-center left-4">
                    <fa icon="magnifying-glass" />
                  </span>
                  <input
                    type="text"
                    placeholder="Nhập mặt hàng"
                    class="flex-auto border-[1px] border-solid border-black relative float-left pl-10 mb-0 z-[2] focus:outline-dotted focus:ring-none bg-transparent rounded-lg"
                  />
                </div>
              </div>
              <aside class="flex self-start gap-4 min-h-[40px]">
                <div
                  data-dropdown-toggle="dropdown-add"
                  data-dropdown-trigger="click"
                  data-dropdown-placement="bottom-start"
                  class="button flex gap-1 text-primary bg-secondary hover:bg-secondaryDark"
                >
                  <span>
                    <svg
                      class="w-3 h-3 text-current dark:text-tertiary"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </span>
                  <p class="pl-3">Thêm mới</p>
                  <span>
                    <svg
                      class="w-3 h-3 text-current dark:text-tertiary"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </span>
                </div>
                <div
                  data-dropdown-toggle="dropdown-more"
                  data-dropdown-trigger="click"
                  data-dropdown-placement="bottom-end"
                  class="button flex gap-1 text-primary bg-secondary hover:bg-secondaryDark"
                >
                  <fa icon="table-list" />
                </div>
                <!-- dropdown-menu -->
                <div
                  id="dropdown-add"
                  class="hidden divide-y divide-gray-100 bg-secondary text-sm z-10 rounded-lg"
                >
                  <ul class="py-2">
                    <li
                      id="button-modal-1"
                      class="cursor-pointer flex items-center gap-1 px-3 py-1 text-primary hover:bg-secondaryDark"
                    >
                      <span>
                        <svg
                          class="w-3 h-3 text-current dark:text-tertiary"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </span>
                      <span class="pl-3"> Thêm hàng hóa </span>
                    </li>
                    <li
                      class="cursor-pointer flex items-center gap-1 px-3 py-1 text-primary hover:bg-secondaryDark"
                    >
                      <span class="pl-3"> Thêm Dịch vụ </span>
                    </li>
                  </ul>
                </div>
                <div
                  id="dropdown-more"
                  class="hidden divide-y divide-gray-100 bg-secondary text-sm z-10 rounded-lg"
                >
                  <ul>
                    <li>a</li>
                    <li>b</li>
                  </ul>
                </div>
              </aside>
            </article>
            <article class="w-full left">
              <div>
                <div
                  class="bg-secondary text-tertiary border-[1px] border-solid border-secondaryDark rounded-t-md"
                >
                  <div class="touch-pan-y border-none">
                    <table class="table-fixed max-w-none w-auto min-w-full">
                      <thead>
                        <tr class="box-content">
                          <th
                            class="p-3 min-w-[140px] max-w-[140px] w-[140px] break-normal"
                          >
                            <span class="box-content">Mã Sản Phẩm</span>
                          </th>
                          <th class="p-3 min-w-[200px]">
                            <span class="box-content">Tên Mặt Hàng</span>
                          </th>
                          <th class="p-3 min-w-[112px] text-end">
                            <span class="box-content">Giá Bán</span>
                          </th>
                          <th class="p-3 min-w-[112px] text-end">
                            <span class="box-content">Tồn Kho</span>
                          </th>
                          <th class="p-3 min-w-[112px]">
                            <span class="box-content">Thương Hiệu</span>
                          </th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </div>
              <div
                class="overflow-y-scroll min-h-[400px] w-auto static overflow-auto border-l-[1px] border-r-[1px] border-solid border-tertiary"
              >
                <table class="table-fixed max-w-none w-auto min-w-full">
                  <thead class="">
                    <tr class="box-content bg-gray-400">
                      <th
                        class="p-3 min-w-[140px] max-w-[140px] w-[140px] break-normal"
                      >
                        <span class="box-content"></span>
                      </th>
                      <th class="p-3 min-w-[200px]">
                        <span class="box-content"></span>
                      </th>
                      <th class="p-3 min-w-[112px] text-end">
                        <span class="box-content"></span>
                      </th>
                      <th class="p-3 min-w-[112px] text-end">
                        <span class="box-content"></span>
                      </th>
                      <th class="p-3 min-w-[112px]">
                        <span class="box-content"></span>
                      </th>
                    </tr>
                    <tr
                      v-for="product in products"
                      :key="product.id"
                      class="cursor-pointer box-content border-b-[1px] border-solid border-gray-500 even:bg-secondary/20 hover:bg-secondary"
                      @click="handleProductDetails(product.id)"
                    >
                      <th
                        class="p-3 min-w-[140px] max-w-[140px] w-[140px] break-normal"
                      >
                        <span class="box-content">{{ product.id }}</span>
                      </th>
                      <th class="p-3 min-w-[200px]">
                        <span class="box-content">{{
                          product.attributes.name
                        }}</span>
                      </th>
                      <th class="p-3 min-w-[112px] text-end">
                        <span class="box-content">{{
                          product.attributes.price.toLocaleString('de-DE')
                        }}</span>
                      </th>
                      <th class="p-3 min-w-[112px] text-end">
                        <span class="box-content">{{
                          product.attributes.inventory
                        }}</span>
                      </th>
                      <th class="p-3 min-w-[112px]">
                        <span class="box-content">{{
                          product.attributes.brand
                        }}</span>
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
            </article>
            <!-- <div>
              {{ product }}
            </div> -->
          </div>
        </section>
      </section>
    </section>
    <ModalAddProduct :modal="'modal-1'" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from '@nuxtjs/composition-api'
import { getAllProducts } from '~/api/Product'
import { Product } from '~/types/Product'

const router = useRouter()
const products = ref<Product[]>([])
let totalInventory = 0
// console.log(totalInventory)

onMounted(() => {
  getAllProducts().then((res) => {
    products.value = res.data
  })
})

const handleProductDetails = (params: string) => {
  router.push('/market/' + params)
}
const getTotalInventory = () => {
  console.log(
    products.value.reduce(
      (totalInventory, product) =>
        totalInventory + product.attributes.inventory,
      0
    )
  )
  // products.value.forEach((product: Product) => {
  //   const inventory = product.attributes.inventory
  //   console.log(inventory)
  //   totalInventory += Number(inventory)
  //   return totalInventory
  // })
}
getTotalInventory()
</script>
<script lang="ts">
export default {
  layout: 'DefaultLayout',
}
</script>
<style lang="scss" scoped></style>
