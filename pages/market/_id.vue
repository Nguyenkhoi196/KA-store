<template>
  <div>
    {{ product }}
  </div>
</template>
<script setup lang="ts">
import { ref, useRoute } from '@nuxtjs/composition-api'
import { productDetails } from '~/api/Product'
import { Product } from '~/types/Product'

const product = ref<Product>()
const route: any = useRoute()
const id = route.value.params.id
productDetails(id).then((res) => {
  product.value = res.data
})
</script>
sc

<style lang="scss" scoped></style>
