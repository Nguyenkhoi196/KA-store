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
        class="form-input h-1/2"
        autofocus
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
    <div class="border-t-[1px] border-primary py-1 px-4 text-gray-500">
      {{ totalProduct }} Hàng hóa - Tồn kho: {{ quantity }}
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
          required
          class="form-input w-1/2"
          style="padding: 4px"
        >
          <option
            v-for="(filterSelect, index) in filterSelects"
            :key="index"
            value="filterSelect"
          >
            {{ filterSelect }}
          </option>
        </select>
      </div>
      <div>
        <label for="inventory" class="modal-label"> Tồn kho </label>
        <div>
          <input type="checkbox" value="1" class="radio" />
          <label for="">Còn hàng</label>
          <input type="checkbox" value="1" class="radio" />
          <label for="">Hết hàng</label>
        </div>
      </div>
      <button class="form-button" style="font-size: 13px; padding: 5px">
        Lọc sản phầm
      </button>
    </div>
    <div v-if="isActive.showModal === 3">modal3</div>
  </div>
</template>

<script lang="ts">
import { reactive, ref, watch } from 'vue'
export default {
  name: 'HeaderMarket',
  props: ['quantity', 'total-product', 'products', 'filter-selects'],
  emits: ['filter'],

  setup(props, context) {
    const search = ref('')
    const isActive = reactive({ showModal: 0, showInput: false })
    const setActive = (numberModal, numberInput) => {
      isActive.showModal = numberModal
      isActive.showInput = numberInput
    }
    const searchChange = () => {
      context.emit('filter', search.value)
    }
    return {
      isActive,
      search,
      searchChange,
      setActive,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/components/button';
@import '../assets/scss/components/searchBox';
@import '../assets/scss/components/modal';
</style>
