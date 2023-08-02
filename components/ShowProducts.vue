<template>
  <div>
    <nuxt-link :to="'/market/' + product.id">
      <div class="card-container">
        <div class="card-bg">
          <img src="~/assets/images/logo.png" alt="" class="card-img" />
          <div class="flex-1 min-w-0">
            <p class="card-name">
              {{ product.product }}
            </p>
            <!-- <p class="card-category">
              {{ product.category }}
            </p> -->
          </div>
          <div class="flex text-end flex-col">
            <p class="card-price">{{ product.price }} &#8363;</p>
            <p class="card-inventory">
              {{ product.inventory }}
            </p>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: ['product'],
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
