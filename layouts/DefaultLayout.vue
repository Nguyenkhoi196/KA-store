<template>
  <div class="bg-auth ">
    <navigation-brand />
    <nuxt />
  </div>

</template>

<script>
import NavigationBrand from "~/components/NavigationBrand.vue";
export default {
  name: 'DefaultLayout',
  components: { NavigationBrand },
};
</script>

<style lang="scss" scoped>
 .bg-auth {
  @apply bg-gradient-to-br from-primary to-secondary from-20% h-screen w-screen
 }
</style>
