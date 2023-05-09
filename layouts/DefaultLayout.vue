<template>
  <div class="bg-auth">
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

<style lang="scss" scoped>
.bg-auth {
  @apply bg-gradient-to-b from-primary via-secondary to-secondary from-10% via-50% h-screen w-screen;
}
</style>
