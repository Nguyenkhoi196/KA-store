<template>
  <div>
    <nuxt-link :to="'/market/' + product.id">
      <div class="card-container">
        <div class="card-bg">
          <img src="~/assets/images/logo.png" alt="" class="card-img" />
          <div class="flex-1 min-w-0">
            <p class="card-name">
              {{ product.name }}
            </p>
            <p class="card-category">
              {{ product.category }}
            </p>
          </div>
          <div class="flex-end">
            <p class="card-price">{{ product.price }} &#8363;</p>
            <p class="card-inventory">
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

<style lang="scss" scoped>
@import '../assets/scss/components/card';
</style>
