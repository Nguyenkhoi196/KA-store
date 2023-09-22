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
        <div
          class="relative flex flex-col p-4 bg-white rounded-lg shadow dark:bg-gray-700"
        >
          <button
            :id="'button-x-' + props.modal"
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <fa icon="rectangle-xmark" />
            <span class="sr-only">Close modal</span>
          </button>
          <!-- Modal header -->
          <slot name="header" :modal="modal" />
          <slot name="body" :modal="modal" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { Modal, ModalInterface, ModalOptions } from 'flowbite'

type Props = {
  modal: string
  close?: boolean
}
const props = defineProps<Props>()

let modal: ModalInterface
onMounted(() => {
  const $buttonElement: any = document.getElementById(`button-${props.modal}`)
  const $modalElement: HTMLElement | null = document.getElementById(
    `${props.modal}`
  )
  const $closeElement: any = document.getElementById(`button-x-${props.modal}`)
  const $closeButton: any = document.getElementById(
    `button-close-${props.modal}`
  )
    ? document.getElementById(`button-close-${props.modal}`)
    : null
  const modalOptions: ModalOptions = {
    placement: 'center',
    backdrop: 'dynamic',
    backdropClasses:
      'bg-gray-400 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    closable: true,
  }

  if ($modalElement) {
    modal = new Modal($modalElement, modalOptions)
    $buttonElement.addEventListener('click', () => {
      modal.show()
    })
    $closeElement.addEventListener('click', () => {
      modal.hide()
    })
    $closeButton?.addEventListener('click', () => {
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
