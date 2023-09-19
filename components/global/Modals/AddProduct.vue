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
          <slot name="body" />
        </div>
      </div>
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
    <AlertPopUp :type="errType" :message="notification"></AlertPopUp>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { Modal, ModalInterface, ModalOptions } from 'flowbite'
import { ProductAtrributes } from '~/types/Product'
import { addProduct } from '~/api/Product'

type Props = {
  modal: string
}
const props = defineProps<Props>()

const notification = ref<string>()
const errType = ref<string | undefined>()

let modal: ModalInterface

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
    $buttonElement.addEventListener('click', () => modal.toggle())
    $closeElement.addEventListener('click', () => {
      modal.hide()
    })
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
