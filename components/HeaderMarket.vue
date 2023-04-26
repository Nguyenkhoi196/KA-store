<template>
  <div
    class="fixed top-0 left-0 z-50 bg-secondary justify-between rounded-b-lg"
  >
    <div
      class="flex flex-row items-center justify-between h-16 px-4 w-screen bg-secondary text-tertiary"
    >
      <h1 v-show="!isActive" class="font-bold text-2xl">Hàng Hóa</h1>
      <!-- tìm sản phẩm -->
      <input
        v-show="isActive"
        v-model="search"
        type="text"
        class="searchBox-input"
        autofocus
        placeholder="Tên hàng hóa"
        @keydown="searchChange"
      />
      <div class="flex flex-row gap-4 text-base pl-4">
        <button class="button-icon" @click="setAcitve">
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
    <div class="border-t-[1px] border-primary py-1 px-4 text-gray-500">
      {{ products }} Hàng hóa - Tồn kho: {{ quantity }}
    </div>
  </div>
</template>

<script lang="ts">
import { ref, watch } from 'vue'
export default {
  name: 'HeaderMarket',
  props: ['quantity', 'products'],
  emits: ['filter'],

  setup(props, context) {
    const search = ref('')
    const isActive = ref<boolean>(false)
    const setAcitve = () => {
      isActive.value = !isActive.value
    }
    const searchChange = () => {
      context.emit('filter', search.value)
    }
    return {
      isActive,
      search,
      searchChange,
      setAcitve,
    }
  },
}
</script>

<style lang="scss">
@import '../assets/scss/components/button';
@import '../assets/scss/components/searchBox';
</style>
