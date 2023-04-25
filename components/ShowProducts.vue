<template>
  <div>
    <nuxt-link :to="'/market/' + product.id">
      <div
        class="rounded-md shadow-lg lg:hover:scale-105 transition duration-500 cursor-pointer w-screen"
      >
        <div class="p-3 bg-primary flex flex-row gap-3 lg:px-14">
          <img
            src="~/assets/images/logo.png"
            alt=""
            class="rounded-lg overflow-hidden h-12 border-2 border-secondary"
          />
          <div class="flex-1 min-w-0">
            <p class="text-base font-medium text-tertiary truncate">
              {{ product.name }}
            </p>
            <p class="text-sm text-gray-500 truncate">
              {{ product.category }}
            </p>
          </div>
          <div class="flex-end">
            <p class="text-base font-medium text-tertiary truncate">
              {{ product.price }} &#8363;
            </p>
            <p class="text-sm text-gray-500 truncate">
              {{ product.inventory }}
            </p>
          </div>
        </div>
      </div>
    </nuxt-link>
    <product-info v-if="showModal" />
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  props: ['product'],
  setup() {
    const showModal = ref(false)
    let timer = null

    const startTimer = () => {
      timer = setTimeout(() => {
        showModal.value = true
      }, 1000)
    }

    const clearTimer = () => {
      clearTimeout(timer)
      showModal.value = false
    }

    return {
      startTimer,
      clearTimer,
      showModal,
    }
  },
}
</script>
