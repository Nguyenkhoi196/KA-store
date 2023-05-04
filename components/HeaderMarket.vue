<template>
  <div
    class="fixed top-0 left-0 z-50 bg-secondary justify-between rounded-b-lg"
  >
    <div
      class="flex flex-row items-center justify-between h-16 px-4 w-screen bg-secondary text-tertiary"
    >
      <h1 v-if="!isActive.showInput" class="font-bold text-2xl">Hàng Hóa</h1>
      <input
        v-if="isActive.showInput"
        v-model="search"
        type="text"
        class="form-input h-1/2 w-full placeholder-primary"
        placeholder="Tìm kiếm"
        @keydown="searchChange"
      />
      <div class="flex flex-row gap-4 text-base pl-4">
        <button class="button-icon" @click="setActive(1, true)">
          <fa :icon="['fas', 'magnifying-glass']" />
        </button>
        <button class="button-icon" @click="setActive(2, false)">
          <fa :icon="['fas', 'filter']" />
        </button>
        <button class="button-icon" @click="setActive(3, false)">
          <fa :icon="['fas', 'ellipsis-vertical']" />
        </button>
      </div>
    </div>
    <div
      class="border-t-[1px] border-primary py-1 px-4 justify-between flex flex-row items-center"
    >
      <p class="text-gray-500">
        {{ totalProduct }} Hàng hóa - Tồn kho: {{ quantity }}
      </p>
      <button class="button-icon text-tertiary" @click="setActive(4, false)">
        <fa :icon="['fas', 'plus']" />
      </button>
    </div>
    <div
      v-if="isActive.showModal === 2"
      class="border-t-[1px] py-4 px-4 border-primary"
    >
      <div>
        <label for="category" class="modal-label">Loại hàng</label>
        <select
          id="category"
          v-model="category"
          class="form-input w-1/2"
          style="padding: 4px"
        >
          <option disabled value="">Chọn loại hàng</option>
          <option
            v-for="(filterSelect, index) in filterSelects"
            id="filterSelect"
            :key="index"
            :value="filterSelect"
          >
            {{ filterSelect }}
          </option>
        </select>
        {{ category }}
      </div>
      <div>
        <label for="inventory" class="modal-label"> Tồn kho </label>
        <div>
          <input
            id="1"
            v-model="stock"
            type="radio"
            value="inStock"
            class="radio"
            checked
          />
          <label for="">Còn hàng</label>
          <input
            id="2"
            v-model="stock"
            type="radio"
            value="outOfStock"
            class="radio"
          />
          <label for="">Hết hàng</label>
        </div>
        {{ stock }}
      </div>
      <div class="flex justify-end">
        <button
          class="form-button"
          style="font-size: 13px; padding: 5px"
          type="submit"
          @click="filterChange"
        >
          Lọc sản phầm
        </button>
      </div>
    </div>
    <div v-if="isActive.showModal === 3">modal3</div>
    <modal-product v-if="isActive.showModal === 4" />
  </div>
</template>

<script lang="ts">
import { reactive, ref } from 'vue'
import ModalProduct from '~/components/Modal.vue'
export default {
  name: 'HeaderMarket',
  components: { ModalProduct },
  props: ['quantity', 'total-product', 'products', 'filterSelects'],
  emits: ['filter', 'search'],

  setup(props, context) {
    const stock = ref('')
    const category = ref('')
    const search = ref('')
    const isActive = reactive({ showModal: 0, showInput: false })

    const setActive = (numberModal: any, showInput: boolean) => {
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

    const searchChange = () => {
      context.emit('search', search.value)
      console.log(search.value)
    }

    const filterChange = () => {
      context.emit('filter', stock.value, category.value)
      // console.log(stock.value, category.value)
    }

    return {
      isActive,
      search,
      stock,
      category,
      searchChange,
      setActive,
      filterChange,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/components/button';
@import '../assets/scss/components/searchBox';
@import '../assets/scss/components/modal';
</style>
