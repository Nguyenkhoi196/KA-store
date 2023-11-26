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
            <article
              id="accordion-collapse-heading-classification"
              data-accordion="collapse"
              class="relative bg-primary mb-4 p-3 shadow-xl rounded-md h-full transition-all duration-200"
            >
              <button
                type="button"
                class="w-full p-1 bg-white flex justify-between"
                data-accordion-target="#accordion-collapse-body-classification"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-classification"
              >
                <span> Loại hàng </span>
                <fa data-accordion-icon icon="caret-down" />
              </button>
              <ul
                id="accordion-collapse-body-classification"
                class="hidden pt-4"
                aria-labelledby="accordion-collapse-heading-classification"
              >
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
            <article
              id="accordion-collapse-heading-suplier"
              data-accordion="collapse"
              class="relative bg-primary mb-4 p-3 shadow-xl rounded-md"
            >
              <button
                type="button"
                class="w-full p-1 bg-white flex justify-between"
                data-accordion-target="#accordion-collapse-body-suplier"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-suplier"
              >
                <span>Nhà cung cấp</span>
                <fa data-accordion-icon icon="caret-down" />
              </button>
              <div
                id="accordion-collapse-body-suplier"
                aria-labelledby="accordion-collapse-heading-suplier"
                class="hidden pt-4 transition-transform duration-1000"
              >
                <div
                  id="accordion-collapse-heading-stock-child"
                  class="relative max-w-[175px]"
                  data-accordion="collapse"
                >
                  <input
                    v-model="checkSupplier"
                    type="text"
                    placeholder="Nhà cung cấp"
                    class="flex-auto border-[1px] border-solid w-full border-black pl-2 p-0 mb-0 focus:outline-dotted focus:shadow-inner focus:ring-none bg-transparent rounded"
                  />
                  <button
                    class="absolute self-center bg-transparent right-1 top-[-8px] p-2"
                    data-accordion-target="#accordion-collapse-body-stock-child"
                    aria-expanded="false"
                    aria-controls="accordion-collapse-body-stock-child"
                  >
                    <fa data-accordion-icon icon="caret-down" />
                  </button>
                </div>
                <div
                  id="accordion-collapse-body-stock-child"
                  aria-labelledby="accordion-collapse-heading-stock-child"
                  class="hidden pt-4 transition-transform duration-1000"
                >
                  <ul class="overflow-y-scroll max-h-32">
                    <li
                      v-for="product in products"
                      :key="product.id"
                      class="py-1 px-2 cursor-pointer hover:bg-secondaryLight rounded"
                      @click="showSelectSupplierFilter(product?.brand)"
                    >
                      {{ product?.brand }}
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article
              id="accordion-collapse-heading-suplier"
              data-accordion="collapse"
              class="relative bg-primary mb-4 p-3 shadow-xl rounded-md transition-all duration-1000"
            >
              <button
                type="button"
                class="w-full bg-white p-1 flex justify-between"
                data-accordion-target="#accordion-collapse-body-stock"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-stock"
              >
                <span>Tình trạnh trong kho</span>
                <fa data-accordion-icon icon="caret-down" />
              </button>
              <ul
                id="accordion-collapse-body-stock"
                aria-labelledby="accordion-collapse-heading-stock"
                class="hidden pt-4 transition-transform duration-1000"
              >
                <div class="pb-2">
                  <input
                    id="overall-inventory"
                    v-model="checkStockProduct"
                    class="cursor-pointer focus:ring-0 text-secondary ring-0 border-[1px] border-solid border-black rounded-full"
                    type="radio"
                    name="inventory-status"
                    :value="{ $gte: 0 }"
                    @change="handleFindProducts"
                  />
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
                    @change="handleFindProducts"
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
                    @change="handleFindProducts"
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
                      @change="handleFindProducts"
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
              <table-viewer-grid :loading="loading">
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
                          <span class="box-content">{{ product.name }}</span>
                        </th>
                        <th
                          v-if="dataTable[1].checked"
                          class="p-3 min-w-[112px] max-w-[112px] w-[112px] text-end"
                        >
                          <span class="box-content">{{
                            convertDate(product.updatedAt)
                          }}</span>
                        </th>
                        <th
                          v-if="dataTable[2].checked"
                          class="p-3 min-w-[112px] max-w-[112px] w-[112px] text-end"
                        >
                          <span class="box-content">{{
                            product.inventory
                          }}</span>
                        </th>
                        <th
                          v-if="dataTable[3].checked"
                          class="p-3 min-w-[112px] max-w-[112px] w-[112px] text-end"
                        >
                          <span class="box-content">{{ product.brand }}</span>
                        </th>
                        <th
                          class="p-3 min-w-[112px] max-w-[112px] w-[112px] text-end"
                        >
                          <span class="box-content">{{
                            product.price.toLocaleString('de-DE')
                          }}</span>
                        </th>
                      </tr>
                    </thead>
                  </table>
                </template>
              </table-viewer-grid>
              <div class="flex py-5 items-baseline">
                <pagination-page-control
                  :pagination="pagination"
                  @set-page="setPage"
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
    <sidebar-left-drawer :sidebar="'sidebar'" />
    <modal-ka-modal :modal="'modal-1'" :close="!!alert.type">
      <template #header>
        <div>
          <div class="px-6 py-4 border-b rounded-t dark:border-gray-600">
            <h3
              class="text-base font-semibold text-gray-900 lg:text-xl dark:text-white"
            >
              Sản Phẩm
            </h3>
          </div>
        </div>
      </template>
      <template #body>
        <div>
          <form class="px-6" @submit.prevent="handleAddProduct">
            <div class="grid gap-4 m-4 sm:grid-cols-2">
              <div class="relative">
                <input
                  id="product-name"
                  v-model="productAtrributes.name"
                  required
                  autocomplete="off"
                  type="text"
                  class="form-input peer"
                />
                <label for="productAtrributes-name" class="form-label"
                  >Tên sản phẩm
                </label>
              </div>
              <div class="relative">
                <input
                  id="price"
                  v-model="productAtrributes.price"
                  required
                  autocomplete="off"
                  type="number"
                  class="form-input peer"
                />
                <label for="price" class="form-label">Giá </label>
              </div>
              <div class="relative">
                <input
                  id="inventory"
                  v-model="productAtrributes.inventory"
                  required
                  autocomplete="off"
                  type="number"
                  class="form-input peer"
                />
                <label for="inventory" class="form-label">Số lượng </label>
              </div>
              <div class="relative">
                <input
                  id="brand"
                  v-model="productAtrributes.brand"
                  required
                  autocomplete="off"
                  type="text"
                  class="form-input peer"
                />
                <label for="brand" class="form-label">Thương hiệu </label>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Mô tả</label
                >
                <textarea
                  id="description"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 max-h-40"
                ></textarea>
              </div>
            </div>
            <div class="border-t py-4 flex justify-end">
              <button
                type="submit"
                class="text-secondary hover:text-green-700 active:text-green-400 inline-flex items-center bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm px-5 text-center"
              >
                <fa icon="plus" />
                <span class="pl-2"> Thêm sản phẩm </span>
              </button>
            </div>
          </form>
        </div>
      </template>
    </modal-ka-modal>
    <alert-pop-up :alert="alert" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, watchEffect } from 'vue'
import { useRouter } from '@nuxtjs/composition-api'
import { addProduct, findProducts } from '~/api/Product'
import { Product } from '~/types/Product'
import { Pagination } from '~/types/Response'
import Alert from '~/components/global/Alerts/Alert'

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

const handleFindProducts = async () => {
  loading.value = true
  try {
    console.log(query)

    const res = await findProducts(query)
    if (!inputFilter.value) {
      inputFilter.value = undefined
    }
    products.value = res.data.data
    totalInventory.value = res.data.totalInventory
    pagination.pageCount = res.data.meta.pagination.pageCount
    pagination.total = res.data.meta.pagination.total
  } catch (err: any) {
    alert.message = err.message
    alert.type = 'danger'
  } finally {
    loading.value = false
  }
}
const alert = reactive<Alert>({
  message: undefined,
  type: undefined,
  show: false,
  timeout: 2000,
})
const productAtrributes = reactive({
  name: '',
  price: 0,
  brand: '',
  inventory: 0,
})
const handleAddProduct = async () => {
  const data = { data: { ...productAtrributes } }
  try {
    const res = await addProduct(data)
    if (res.status === 200) {
      alert.message = `Thêm sản phẩm ${res.data.data.attributes?.name} thành công`
      alert.type = 'success'
      const id = ref<number>(res.data.data.id)
      watchEffect(() => {
        if (id.value) {
          alert.show = true
          setTimeout(() => {
            alert.show = false
            window.location.reload()
          }, alert.timeout)
        }
      })
    }
  } catch (err: any) {
    alert.message = err.message
    alert.type = 'danger'
  }
}

const handleProductDetails = (params: string) => {
  router.push('/manage/market/' + params)
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

const checkSupplier = ref<string>()
const showSelectSupplierFilter = (param: string) => {
  checkSupplier.value = param
}

const convertDate = (date: any): string => {
  const newDate = new Date(date)
  return `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`
}
const setPage = (param: number): void => {
  pagination.page = param
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
