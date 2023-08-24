<template>
  <div class>
    <section class="container mx-auto min-h-screen h-full">
      <section class="w-full flex">
        <section class="max-w-[234px] min-w-[200px] h-auto mr-8 mb-8 mt-6">
          <h1 class="text-4xl font-bold pb-6 items-center">
            <span> Hàng hóa </span>
          </h1>
          <section>
            <article class="relative bg-primary mb-4 p-3 shadow-xl rounded-md">
              <button
                type="button"
                class="w-full p-1"
                aria-controls="dropdown-product-classification"
                data-collapse-toggle="dropdown-product-classification"
              >
                <span> Loại hàng </span>
              </button>
              <ul id="dropdown-product-classification" class="hidden pt-4">
                <div class="pb-2">
                  <input
                    id="hanghoa"
                    v-model="checkTypeProduct"
                    class="focus:ring-0 ring-0 border-[1px] border-solid border-black rounded-full"
                    type="checkbox"
                    value="hanghoa"
                    checked
                  />

                  <label for="hanghoa" class="pl-1 text-xs">Hàng hóa</label>
                </div>
                <div class="pb-2">
                  <input
                    id="dichvu"
                    v-model="checkTypeProduct"
                    class="focus:ring-0 ring-0 border-[1px] border-solid border-black rounded-full"
                    type="checkbox"
                    value="dichvu"
                  />

                  <label for="dichvu" class="pl-1 text-xs">Dịch vụ</label>
                </div>
              </ul>
            </article>
            <article class="relative bg-primary mb-4 p-3 shadow-xl rounded-md">
              <button
                type="button"
                class="w-full p-1"
                aria-controls="dropdown-product-supplier"
                data-collapse-toggle="dropdown-product-supplier"
              >
                <span>Nhà cung cấp</span>
              </button>
              <div id="dropdown-product-supplier" class="hidden pt-4">
                <div class="relative max-w-[175px]">
                  <input
                    v-model="checkSupplier"
                    type="text"
                    placeholder="Nhà cung cấp"
                    class="flex-auto border-[1px] border-solid w-full border-black pl-2 p-0 mb-0 focus:outline-dotted focus:shadow-inner focus:ring-none bg-transparent rounded"
                  />
                  <button
                    class="absolute self-center right-1 top-[-8px] p-2"
                    data-collapse-toggle="dropdown-supplier"
                    aria-controls="dropdown-supplier"
                  >
                    <span>
                      <fa icon="sort-down" />
                    </span>
                  </button>
                </div>
                <div
                  id="dropdown-supplier"
                  class="hidden over-flow-hidden pt-3"
                >
                  <ul class="overflow-y-scroll max-h-32">
                    <li
                      v-for="product in products"
                      :key="product.id"
                      class="py-1 px-2 cursor-pointer hover:bg-secondaryLight rounded"
                      @click="setSupplierFilter(product.attributes.brand)"
                    >
                      {{ product.attributes.brand }}
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article class="relative bg-primary mb-4 p-3 shadow-xl rounded-md">
              <button
                type="button"
                class="w-full p-1"
                aria-controls="dropdown-product-inventory"
                data-collapse-toggle="dropdown-product-inventory"
              >
                <span>Tình trạnh trong kho</span>
              </button>
              <ul id="dropdown-product-inventory" class="hidden pt-4">
                <div class="pb-2">
                  <input
                    id="overall-inventory"
                    v-model="checkStockProduct"
                    class="focus:ring-0 ring-0 border-[1px] border-solid border-black rounded-full"
                    type="radio"
                    name="inventory-status"
                    @change="setStockFilter('overAll')"
                  />

                  <label for="overall-inventory" class="pl-1 text-xs"
                    >Tất cả</label
                  >
                </div>
                <div class="pb-2">
                  <input
                    id="outstock-inventory"
                    v-model="checkStockProduct"
                    class="focus:ring-0 ring-0 border-[1px] border-solid border-black rounded-full"
                    type="radio"
                    name="inventory-status"
                    @change="setStockFilter('outStock')"
                  />
                  <label for="outstock-inventory" class="pl-1 text-xs"
                    >Hết hàng
                  </label>
                </div>
                <div class="pb-2">
                  <input
                    id="instock-inventory"
                    v-model="checkStockProduct"
                    class="focus:ring-0 ring-0 border-[1px] border-solid border-black rounded-full"
                    type="radio"
                    name="inventory-status"
                    @change="setStockFilter('inStock')"
                  />

                  <label for="instock-inventory" class="pl-1 text-xs"
                    >Còn hàng</label
                  >
                </div>
              </ul>
            </article>
          </section>
        </section>
        <section class="grow min-w-[468px] min-h-[400px] relative mb-5">
          <div class="mt-6 min-h-[inherit] w-full relative">
            <article class="flex mt-0 items-baseline min-h-[54px]">
              <div class="grow shrink items-center flex min-h-[40px]">
                <div
                  class="max-w-[450px] min-w-[200px] mr-4 rounded relative grow flex-wrap items-stretch flex bg-transparent"
                >
                  <span class="absolute self-center left-4">
                    <fa icon="magnifying-glass" />
                  </span>
                  <input
                    type="text"
                    placeholder="Nhập mặt hàng"
                    class="flex-auto border-[1px] border-solid border-black relative float-left pl-10 mb-0 z-[2] focus:outline-dotted focus:shadow-inner focus:ring-none bg-transparent rounded-lg"
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
                            <span class="box-content">Tồn Kho</span>
                          </th>
                          <th class="p-3 min-w-[112px] text-end">
                            <span class="box-content">Thương Hiệu</span>
                          </th>
                          <th class="p-3 min-w-[112px] text-end">
                            <span class="box-content">Giá Bán</span>
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
                    <tr class="box-content bg-gray-200">
                      <th
                        class="p-3 min-w-[140px] max-w-[140px] w-[140px] break-normal"
                      >
                        <span class="box-content"></span>
                      </th>
                      <th class="p-3 min-w-[200px]">
                        <span class="box-content"></span>
                      </th>
                      <th class="p-3 min-w-[112px] text-end">
                        <span class="box-content">{{ totalInventory }}</span>
                      </th>
                      <th class="p-3 min-w-[112px] text-end">
                        <span class="box-content"></span>
                      </th>
                      <th class="p-3 min-w-[112px] text-end">
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
                          product.attributes.inventory
                        }}</span>
                      </th>
                      <th class="p-3 min-w-[112px] text-end">
                        <span class="box-content">{{
                          product.attributes.brand
                        }}</span>
                      </th>
                      <th class="p-3 min-w-[112px] text-end">
                        <span class="box-content">{{
                          product.attributes.price.toLocaleString('de-DE')
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
const totalInventory = ref<number>()
const checkTypeProduct = ref<string[]>([])
const checkSupplier = ref<string>()
const checkStockProduct = ref<string>()

onMounted(() => {
  getAllProducts().then((res) => {
    products.value = res.data
    totalInventory.value = res.meta.totalInventory
  })
})

const handleProductDetails = (params: string) => {
  router.push('/market/' + params)
}
const setSupplierFilter = (param: string) => {
  checkSupplier.value = param
}
const setStockFilter = (param: string) => {
  checkStockProduct.value = param
}
</script>
<script lang="ts">
export default {
  layout: 'DefaultLayout',
}
</script>
<style lang="scss" scoped></style>
