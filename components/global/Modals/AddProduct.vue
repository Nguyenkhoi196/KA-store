<template>
  <div>
    <!-- Main modal -->

    <div
      :id="props.modal"
      tabindex="-1"
      aria-hidden="true"
      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] bg-transparent"
    >
      <div class="relative w-full max-w-md">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            :id="'button-close-' + props.modal"
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <!-- Modal header -->
          <div class="px-6 py-4 border-b rounded-t dark:border-gray-600">
            <h3
              class="text-base font-semibold text-gray-900 lg:text-xl dark:text-white"
            >
              Sản Phẩm
            </h3>
          </div>
          <form action="#" class="px-6">
            <div class="grid gap-4 m-4 sm:grid-cols-2">
              <div class="relative">
                <input
                  id="product-name"
                  v-model="product.name"
                  required
                  autocomplete="off"
                  type="text"
                  class="form-input peer"
                />
                <label for="product-name" class="form-label"
                  >Tên sản phẩm
                </label>
              </div>
              <div class="relative">
                <input
                  id="price"
                  v-model="product.price"
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
                  v-model="product.inventory"
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
                  v-model="product.brand"
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
                @click="handleAddProduct()"
              >
                <svg
                  class="mr-1 -ml-1 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Thêm sản phẩm
              </button>
            </div>
          </form>
          <!-- form-footer -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { Modal, ModalInterface, ModalOptions } from 'flowbite'
import { addProduct } from '~/api/Product'
import { ProductAttributes } from '~/types/Product'

interface Props {
  modal: string
}
const props = defineProps<Props>()

const product: Partial<ProductAttributes> = reactive({
  name: '',
  price: 0,
  brand: '',
  inventory: 0,
})

let modal: ModalInterface
const handleAddProduct = () => {
  const data = { data: { ...product } }
  addProduct(data)
    .then((res) => {
      if (res.status === 200) {
        console.log('Product added successfully')
        if (modal) {
          modal.hide()
        }
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

onMounted(() => {
  const $buttonElement: any = document.getElementById(`button-${props.modal}`)
  const $modalElement: HTMLElement | null = document.getElementById(
    `${props.modal}`
  )
  const $closeElement: any = document.getElementById(
    `button-close-${props.modal}`
  )
  const modalOptions: ModalOptions = {
    backdropClasses: 'bg-gray-900 bg-opacity-40 fixed inset-0 z-40',
  }

  if ($modalElement) {
    modal = new Modal($modalElement, modalOptions)
    $buttonElement.addEventListener('click', () => modal.show())
    $closeElement.addEventListener('click', () => modal.hide())
  }
})
</script>

<style scoped lang="scss">
.form-input {
  @apply relative z-10;
}
.form-label {
  @apply peer-focus:text-secondary peer-checked:text-secondary;
}
.form-input:hover ~ .form-label {
  @apply text-secondary;
}
</style>
