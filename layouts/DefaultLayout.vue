<template>
<<<<<<< HEAD
  <div class="bg-auth ">
=======
  <div class="layout-container">
>>>>>>> a4a9f0c0ff4a53d48e776ef404059345d05f2554
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
<<<<<<< HEAD

<style lang="scss" scoped>
 .bg-auth {
  @apply bg-gradient-to-br from-primary to-secondary from-20% h-screen w-screen
 }
=======
<style scoped lang="scss">
.layout-container {
  @apply h-screen bg-gradient-to-t from-primary  via-secondary from-10%;
}
>>>>>>> a4a9f0c0ff4a53d48e776ef404059345d05f2554
</style>
