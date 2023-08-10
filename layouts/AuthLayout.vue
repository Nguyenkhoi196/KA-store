<template>
  <div>
    <HeaderNavbar />
    <nuxt class="pt-24" />
    <Footer />
  </div>
</template>
<script></script>

<style lang="scss" scoped>
.nav-li {
  @apply list-none relative z-20 transition ease-in-out duration-200
  active:transform
  focus:text-primary focus:transform
  hover:-translate-y-1 hover:transform;
}

.nav-link {
  @apply flex justify-center items-center flex-col text-center h-full;
}

.icon-menu {
  @apply block text-tertiary;
}
</style>
