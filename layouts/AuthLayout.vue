<template>
  <div>
    <nuxt />

    <div
      class="fixed bottom-0 left-0 z-50 w-full h-16 bg-secondary border-t border-gray-200"
    >
      <div class="grid h-full max-w-lg grid-cols-4 mx-auto text-2xl">
        <nuxt-link to="/market" class="button-menu">
          <fa :icon="['fas', 'chart-simple']" />
        </nuxt-link>
        <nuxt-link to="/update" class="button-menu">
          <fa :icon="['fas', 'file-invoice']" />
        </nuxt-link>
        <nuxt-link to="/warehouse" class="button-menu">
          <fa :icon="['fas', 'box-archive']" />
        </nuxt-link>
        <nuxt-link to="/profile" class="button-menu">
          <fa :icon="['fas', 'circle-user']" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AuthLayout',
}
</script>

<style>
@import '../assets/scss/components/_button.scss';
</style>
