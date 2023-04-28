<template>
  <div class="layout-container">
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
  @apply h-screen bg-gradient-to-t from-primary  via-secondary from-10%;
}
</style>
