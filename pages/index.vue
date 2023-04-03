<template>
  <div class="flex flex-col items-center justify-between h-full gap-10">
    <DefaultLayout />
    <div class="text-blue-700 font-semibold">
      Xin chào !
    </div>
    <div class="font-semibold px-4 py-3 mt-1 text-center flex row gap-5">
      <nuxt-link to="/login">
        LogIn
      </nuxt-link>
      <nuxt-link to="/signup">
        SignUp
      </nuxt-link>
    </div>
  </div>
</template>
<script lang='ts'>
import DefaultLayout from '~/layouts/DefaultLayout.vue'
export default {
  components: {
    DefaultLayout
  }
}
</script>
