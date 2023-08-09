<template>
  <div class="sticky z-10 left-0 bg-secondary justify-between rounded-b-lg">
    <div
      class="flex flex-row items-center justify-between h-16 px-4 w-screen bg-secondary text-tertiary"
    >
      <h1 v-if="!isActive.showInput" class="font-bold text-2xl">Hàng Hóa</h1>
      <input
        v-if="isActive.showInput"
        v-model="searchKeyword"
        type="text"
        class="form-input"
        placeholder="Tìm kiếm"
        style="border-bottom: 1px solid white; color: white"
        @input="searchedProduct"
      />
      <div class="flex flex-row gap-4 text-base pl-4">
        <button class="button-icon">
          <fa :icon="['fas', 'magnifying-glass']" />
        </button>
        <button class="button-icon">
          <fa :icon="['fas', 'filter']" />
        </button>
        <button class="button-icon">
          <fa :icon="['fas', 'ellipsis-vertical']" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ProductAttributes } from '~/types/Product'
defineProps({
  totalProduct: {
    type: Number,
    required: true,
  },
  products: {
    type: Array as () => ProductAttributes[],
    required: true,
  },
  totalQuantity: {
    type: Number,
    required: true,
  },
})
const emit = defineEmits(['searched-product', 'filtered-product'])
const stock = ref<number>()
const category = ref<number>()
const searchKeyword = ref<string>('')
const isActive = reactive({ showModal: 0, showInput: false })

const setActive = (numberModal: any) => {
  if (isActive.showModal === numberModal) {
    isActive.showModal = 0
  } else {
    isActive.showModal = numberModal
  }
  if (numberModal === 1) {
    isActive.showInput = !isActive.showInput
  } else {
    isActive.showInput = false
  }
}

const searchedProduct = () => {
  emit('searched-product', searchKeyword.value)
}

const filterChange = () => {
  emit('filtered-product', category.value, stock.value)
  console.log('header', category.value, stock.value)
}
</script>

<style lang="scss" scoped>
::placeholder {
  color: white;
}
</style>
