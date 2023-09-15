<template>
  <div>
    <section class="container mx-auto min-h-screen h-full">
      <section class="w-auto mx-8 flex">
        <section class="max-w-[234px] min-w-[200px] h-auto mr-8 mb-8 mt-6">
          <button
            id="button-sidebar"
            type="button"
            class="text-4xl font-bold pb-6 items-center flex -translate-x-[10%]"
          >
            <fa class="icon text-base self-center" icon="angles-left" />
            <span class="pl-2"> Hàng hóa </span>
          </button>
          <section>
            <article class="relative bg-primary mb-4 p-3 shadow-xl rounded-md">
              <button
                id="button-dropdown-product-classification"
                type="button"
                class="w-full p-1 flex justify-between"
                aria-controls="dropdown-product-classification"
                data-collapse-toggle="dropdown-product-classification"
                aria-expanded="true"
                @click="showClassFilter()"
              >
                <span> Loại hàng </span>
                <fa :icon="classFilter === false ? 'caret-down' : 'caret-up'" />
              </button>
              <ul id="dropdown-product-classification" class="pt-4">
                <div class="pb-2">
                  <input
                    id="hanghoa"
                    v-model="checkTypeProduct"
                    class="cursor-pointer focus:ring-0 text-secondary ring-0 border-[1px] border-solid border-black rounded"
                    type="checkbox"
                    value="hanghoa"
                  />

                  <label for="hanghoa" class="pl-1 text-xs cursor-pointer"
                    >Hàng hóa</label
                  >
                </div>
                <div class="pb-2">
                  <input
                    id="dichvu"
                    v-model="checkTypeProduct"
                    class="cursor-pointer focus:ring-0 text-secondary ring-0 border-[1px] border-solid border-black rounded"
                    type="checkbox"
                    value="dichvu"
                  />

                  <label for="dichvu" class="pl-1 text-xs cursor-pointer"
                    >Dịch vụ</label
                  >
                </div>
              </ul>
            </article>
            <article class="relative bg-primary mb-4 p-3 shadow-xl rounded-md">
              <button
                id="button-dropdown-product-supplier"
                type="button"
                class="w-full p-1 flex justify-between"
                aria-controls="dropdown-product-supplier"
                data-collapse-toggle="dropdown-product-supplier"
                aria-expanded="true"
                @click="showSupplierFilter()"
              >
                <span>Nhà cung cấp</span>
                <fa
                  :icon="supplierFilter === false ? 'caret-down' : 'caret-up'"
                />
              </button>
              <div
                id="dropdown-product-supplier"
                class="pt-4 transition-transform duration-1000"
              >
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
                      @click="
                        showSelectSupplierFilter(product.attributes?.brand)
                      "
                    >
                      {{ product.attributes?.brand }}
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article
              class="relative bg-primary mb-4 p-3 shadow-xl rounded-md transition-all duration-1000"
            >
              <button
                type="button"
                class="w-full p-1 flex justify-between"
                aria-controls="dropdown-product-inventory"
                data-collapse-toggle="dropdown-product-inventory"
                aria-expanded="true"
                @click="showStockFilter()"
              >
                <span>Tình trạnh trong kho</span>
                <fa :icon="stockFilter === false ? 'caret-down' : 'caret-up'" />
              </button>
              <ul id="dropdown-product-inventory" class="pt-4">
                <div class="pb-2">
                  <input
                    id="overall-inventory"
                    v-model="checkStockProduct"
                    class="cursor-pointer focus:ring-0 text-secondary ring-0 border-[1px] border-solid border-black rounded-full"
                    type="radio"
                    name="inventory-status"
                    :value="{ $gte: 0 }"
                    @change="handleFindProducts()"
                  />
                  {{ checkStockProduct }}
                  <label
                    for="overall-inventory"
                    class="pl-1 text-xs cursor-pointer"
                    >Tất cả</label
                  >
                </div>
                <div class="pb-2">
                  <input
                    id="outstock-inventory"
                    v-model="checkStockProduct"
                    class="cursor-pointer focus:ring-0 text-secondary ring-0 border-[1px] border-solid border-black rounded-full"
                    type="radio"
                    name="inventory-status"
                    :value="{ $eq: 0 }"
                    @change="handleFindProducts()"
                  />
                  <label
                    for="outstock-inventory"
                    class="pl-1 text-xs cursor-pointer"
                    >Hết hàng
                  </label>
                </div>
                <div class="pb-2">
                  <input
                    id="instock-inventory"
                    v-model="checkStockProduct"
                    class="cursor-pointer focus:ring-0 text-secondary ring-0 border-[1px] border-solid border-black rounded-full"
                    type="radio"
                    name="inventory-status"
                    :value="{ $gt: 0 }"
                    @change="handleFindProducts()"
                  />

                  <label
                    for="instock-inventory"
                    class="pl-1 text-xs cursor-pointer"
                    >Còn hàng</label
                  >
                </div>
              </ul>
            </article>
            <aside class="pr-0 pt-3 pl-3 items-center flex justify-end">
              <div
                class="cursor-pointer flex items-baseline gap-1"
                data-dropdown-toggle="dropdown-pageSize"
                data-dropdown-trigger="click"
                data-dropdown-placement="bottom-end"
              >
                <span for="pageSize" class="pr-2"> Số bản ghi </span>
                <span>
                  {{ pagination.pageSize }}
                </span>
                <fa icon="sort-down" />
              </div>
              <div
                id="dropdown-pageSize"
                class="hidden divide-y divide-gray-100 bg-secondary shadow-lg text-primary text-base z-10 rounded-lg"
              >
                <ul class="py-2">
                  <li class="hover:bg-secondaryDark">
                    <input
                      id="pageSize-10"
                      v-model="pagination.pageSize"
                      class="hidden"
                      type="radio"
                      name="pageSize"
                      :value="10"
                      @change="handleFindProducts()"
                    />
                    <label for="pageSize-10" class="cursor-pointer px-3 py-1"
                      >10</label
                    >
                  </li>
                  <li class="hover:bg-secondaryDark">
                    <input
                      id="pageSize-20"
                      v-model="pagination.pageSize"
                      class="hidden"
                      type="radio"
                      name="pageSize"
                      :value="20"
                      @change="handleFindProducts()"
                    />
                    <label for="pageSize-20" class="cursor-pointer px-3 py-1"
                      >20</label
                    >
                  </li>
                  <li class="hover:bg-secondaryDark">
                    <input
                      id="pageSize-50"
                      v-model="pagination.pageSize"
                      class="hidden"
                      type="radio"
                      name="pageSize"
                      :value="50"
                      @change="handleFindProducts()"
                    />
                    <label for="pageSize-50" class="cursor-pointer px-3 py-1"
                      >50</label
                    >
                  </li>
                </ul>
              </div>
            </aside>
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
                    v-model="inputFilter"
                    type="text"
                    placeholder="Nhập mặt hàng"
                    class="flex-auto border-[1px] border-solid border-black relative float-left pl-10 mb-0 z-[2] focus:outline-dotted focus:shadow-inner focus:ring-none bg-transparent rounded-lg"
                    @keyup.enter="handleFindProducts()"
                  />
                </div>
              </div>
              <aside class="flex self-start gap-4 min-h-[40px]">
                <div
                  data-dropdown-toggle="dropdown-add"
                  data-dropdown-trigger="click"
                  data-dropdown-delay="500"
                  data-dropdown-placement="bottom-start"
                  class="button shadow-xl flex gap-1 text-primary bg-secondary hover:bg-secondaryDark"
                >
                  <fa icon="plus" />
                  <p class="pl-3">Thêm mới</p>
                  <fa icon="angle-down" />
                </div>
                <div
                  data-dropdown-toggle="dropdown-more"
                  data-dropdown-trigger="click"
                  data-dropdown-delay="500"
                  data-dropdown-placement="bottom-end"
                  class="button shadow-xl flex gap-1 text-primary bg-secondary hover:bg-secondaryDark"
                >
                  <fa icon="table-list" />
                </div>
                <!-- dropdown-menu -->
                <div
                  id="dropdown-add"
                  class="hidden shadow-xl divide-y divide-gray-100 bg-secondary text-sm z-10 rounded-lg"
                >
                  <ul class="py-2">
                    <li
                      id="button-modal-1"
                      class="cursor-pointer flex items-center gap-1 px-3 py-1 text-primary hover:bg-secondaryDark"
                    >
                      <fa icon="plus" />
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
                  class="hidden shadow-xl divide-y divide-gray-100 bg-secondary text-sm z-10 rounded-lg"
                >
                  <ul class="py-2">
                    <li
                      v-for="(dataCol, index) in dataTable"
                      :key="index"
                      class="px-3 py-1 text-primary"
                    >
                      <input
                        :id="`checkbox-show-${dataCol.label}`"
                        v-model="dataCol.checked"
                        type="checkbox"
                        :checked="dataCol.checked"
                        :disabled="dataCol?.disable"
                        class="cursor-pointer focus:ring-0 disabled:cursor-not-allowed text-secondaryDark ring-0 border-[1px] border-solid border-black rounded"
                      />
                      <label
                        :for="`checkbox-show-${dataCol.label}`"
                        class="pl-1 text-xs cursor-pointer"
                        >{{ dataCol.label }}</label
                      >
                    </li>
                  </ul>
                </div>
              </aside>
            </article>
            <article class="w-full left">
              <TableViewerGrid :loading="loading">
                <template #header>
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
                      <th
                        v-if="dataTable[1].checked"
                        class="p-3 min-w-[112px] max-w-[112px] w-[112px] text-end"
                      >
                        <span class="box-content">Ngày Cập Nhật</span>
                      </th>
                      <th
                        v-if="dataTable[2].checked"
                        class="p-3 min-w-[112px] max-w-[112px] w-[112px] text-end"
                      >
                        <span class="box-content">Tồn Kho</span>
                      </th>
                      <th
                        v-if="dataTable[3].checked"
                        class="p-3 min-w-[112px] max-w-[112px] w-[112px] text-end"
                      >
                        <span class="box-content">Thương Hiệu</span>
                      </th>
                      <th
                        class="p-3 min-w-[112px] max-w-[112px] w-[112px] text-end"
                      >
                        <span class="box-content">Giá Bán</span>
                      </th>
                    </tr>
                  </thead>
                </template>
                <template #body>
                  <table class="table-fixed w-auto min-w-full max-w-none">
                    <thead class="">
                      <tr
                        class="box-content bg-gray-200 border-b-[1px] border-solid border-gray-500"
                      >
                        <th
                          class="p-3 min-w-[140px] max-w-[140px] w-[140px] break-normal"
                        >
                          <span class="box-content"></span>
                        </th>
                        <th class="p-3 min-w-[200px]">
                          <span class="box-content"></span>
                        </th>
                        <th
                          v-if="dataTable[1].checked"
                          class="p-3 min-w-[112px] max-w-[112px] w-[112px] text-end"
                        >
                          <span class="box-content"></span>
                        </th>
                        <th
                          v-if="dataTable[2].checked"
                          class="p-3 min-w-[112px] max-w-[112px] w-[112px] text-end"
                        >
                          <span class="box-content">{{ totalInventory }}</span>
                        </th>
                        <th
                          v-if="dataTable[3].checked"
                          class="p-3 min-w-[112px] max-w-[112px] w-[112px] text-end"
                        >
                          <span class="box-content"></span>
                        </th>
                        <th
                          class="p-3 min-w-[112px] max-w-[112px] w-[112px] text-end"
                        >
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
                        <th
                          v-if="dataTable[1].checked"
                          class="p-3 min-w-[112px] max-w-[112px] w-[112px] text-end"
                        >
                          <span class="box-content">{{
                            convertDate(product.attributes.updatedAt)
                          }}</span>
                        </th>
                        <th
                          v-if="dataTable[2].checked"
                          class="p-3 min-w-[112px] max-w-[112px] w-[112px] text-end"
                        >
                          <span class="box-content">{{
                            product.attributes.inventory
                          }}</span>
                        </th>
                        <th
                          v-if="dataTable[3].checked"
                          class="p-3 min-w-[112px] max-w-[112px] w-[112px] text-end"
                        >
                          <span class="box-content">{{
                            product.attributes.brand
                          }}</span>
                        </th>
                        <th
                          class="p-3 min-w-[112px] max-w-[112px] w-[112px] text-end"
                        >
                          <span class="box-content">{{
                            product.attributes.price.toLocaleString('de-DE')
                          }}</span>
                        </th>
                      </tr>
                    </thead>
                  </table>
                </template>
              </TableViewerGrid>
              <div class="flex py-5 items-baseline">
                <PaginationPageControls
                  :pagination="pagination"
                  @set-page="(param) => (pagination.page = param)"
                  @find="handleFindProducts()"
                />
                <span class="pl-5 text-gray-600">
                  Hiển thị
                  {{ pagination.pageSize * (pagination.page - 1) + 1 }} -
                  {{
                    pagination.pageSize * (pagination.page - 1) +
                    products.length
                  }}
                  / trong tổng số {{ pagination.total }} mã hàng
                </span>
              </div>
            </article>
          </div>
        </section>
      </section>
    </section>
    <SidebarLeftDrawer :sidebar="'sidebar'" />
    <ModalAddProduct :modal="'modal-1'" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from '@nuxtjs/composition-api'
import { findProducts } from '~/api/Product'
import { Product } from '~/types/Product'
import { Pagination } from '~/types/Response'

const router = useRouter()

const products = ref<Product[]>([])
const totalInventory = ref<number>()
const loading = ref<boolean>(false)
const inputFilter = ref<string | undefined>(undefined)
const pagination: Pagination<number> = reactive({
  page: 1,
  pageSize: 10,
  pageCount: '',
  total: '',
})

const checkTypeProduct = ref<string[]>([])
const checkStockProduct = ref<string | null>()
type Query = {
  sort: Array<string>
  filters: {
    $and: Array<{}> | null
  }
  pagination: Pagination<number>
}
const query: Query = reactive({
  sort: ['updateAt:asc'],
  filters: {
    $and: [
      {
        name: {
          $eqi: inputFilter,
        },
        inventory: checkStockProduct,
      },
    ],
  },
  pagination,
})

onMounted(() => {
  handleFindProducts()
})

const handleFindProducts = () => {
  loading.value = true
  findProducts(query)
    .then((res) => {
      if (inputFilter.value === null || inputFilter.value === '') {
        inputFilter.value = undefined
      }
      products.value = res.data
      totalInventory.value = res.totalInventory
      pagination.pageCount = res.meta.pagination.pageCount
      pagination.total = res.meta.pagination.total
    })
    .catch((err) => {
      throw err
    })
    .finally(() => {
      loading.value = false
    })
}

const handleProductDetails = (params: string) => {
  router.push('/market/' + params)
}

const dataTable = ref([
  {
    label: 'Tên mặt hàng',
    checked: true,
    disable: true,
  },
  {
    label: 'Ngày cập nhật',
    checked: false,
  },
  {
    label: 'Tồn kho',
    checked: true,
  },
  {
    label: 'Thương hiệu',
    checked: true,
  },
  {
    label: 'Giá bán',
    checked: true,
    disable: true,
  },
])
console.log(dataTable)

const checkSupplier = ref<string>()
const showSelectSupplierFilter = (param: string) => {
  supplierFilter.value = false
  checkSupplier.value = param
}

const classFilter = ref<boolean>(true)
const showClassFilter = () => {
  classFilter.value = !classFilter.value
}

const supplierFilter = ref<boolean>(true)
const showSupplierFilter = () => {
  supplierFilter.value = !supplierFilter.value
}

const stockFilter = ref<boolean>(true)
const showStockFilter = () => {
  stockFilter.value = !stockFilter.value
}

const convertDate = (date: any) => {
  const newDate = new Date(date)
  return `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`
}
</script>

<style lang="scss" scoped>
#button-sidebar {
  .icon {
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    .icon {
      transform: translateX(-4px);
    }
  }
}
</style>
