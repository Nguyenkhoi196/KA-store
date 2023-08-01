<template>
  <div class="bg-auth">
    <HeaderNavbar />
    <nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.bg-auth {
  @apply bg-gradient-to-b from-primary via-secondary to-secondary from-10% via-50% h-screen w-screen;
}
</style>
