<template>
  <div class="layout-container gap-2">
    <navigation-brand />
    <nuxt />
  </div>
</template>

<script>
import NavigationBrand from '~/components/NavigationBrand.vue'
export default {
  name: 'DefaultLayout',
  components: { NavigationBrand },
}
</script>
<style scoped lang="scss">
.layout-container {
  @apply h-screen bg-gradient-to-br from-primary to-secondary from-30%;
}
</style>
