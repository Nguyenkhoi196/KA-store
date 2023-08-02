<template>
  <div class="flex flex-col items-center gap-32 h-full">
    <DefaultLayout />
    <div class="text-blue-700 font-semibold">Xin chào !</div>
    <div class="font-semibold px-4 py-3 mt-1 text-center flex row gap-5">
      <nuxt-link to="/login"> Đăng nhập </nuxt-link>
      <nuxt-link to="/signup"> Đăng ký </nuxt-link>
    </div>
    <div>
      <video autoplay loop playsinline class="object-cover w-[400px]">
        <source src="../assets/images/video_login.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>
<script lang="ts">
// import DefaultLayout from '~/layouts/DefaultLayout.vue';
export default {
  layout: 'DefaultLayout',
}
</script>
<style lang="scss" scoped></style>
