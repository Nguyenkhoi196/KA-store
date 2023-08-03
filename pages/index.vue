<template>
  <div>
    <div class="flex flex-col items-center gap-32 h-full">
      <div class="text-blue-700 font-semibold">Xin chào !</div>
      <div class="font-semibold px-4 py-3 mt-1 text-center flex row gap-5">
        <nuxt-link to="/login"> Đăng nhập </nuxt-link>
        <nuxt-link to="/signup"> Đăng ký </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<script lang="ts">
export default {
  layout: 'DefaultLayout',
}
</script>
<style lang="scss" scoped></style>
