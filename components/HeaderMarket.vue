<template>
  <div
    class="fixed top-0 left-0 z-50 bg-secondary justify-between rounded-b-lg"
  >
    <div
      class="flex flex-row items-center justify-between h-16 px-4 w-screen bg-secondary text-tertiary"
    >
      <h1 class="font-bold text-2xl">Hàng Hóa</h1>
      <div class="flex flex-row gap-4 text-base">
        <button class="button-icon ">
          <fa :icon="['fas', 'magnifying-glass']" />
        </button>
        <button class="button-icon ">
          <fa :icon="['fas', 'filter']" />
        </button>
        <button class="button-icon ">
          <fa :icon="['fas', 'ellipsis-vertical']" />
        </button>
      </div>
    </div>
    <div class="border-t-[1px] border-primary py-1 px-4 text-gray-500">
      Tồn kho: {{  }}
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { store } from '~/store'
export default {
  name: 'HeaderMarket',
  setup() {
    computed: {
      productCount() {
        const inventory =store.getters.totalProduct
        return inventory
      }
    }
    return productCount
  }
}
</script>

<style >
@import '~/assets/css/button.css';
</style>
