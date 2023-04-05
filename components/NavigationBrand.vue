<template>
  <div class="relative">
    <div>
      <img :src="require('~/assets/images/logo.png')" alt="logo" class="relative z-0 w-1/5 top-0 mx-auto object-cover" />

    </div>
    <div class="w-1/5 mx-auto top-0 absolute animate-[spin_3s_linear_infinite] border-4 border-solid border-gray-800 rounded-full z-0"></div>
  </div>
</template>
<script>
export default {
  name: "NavigationBrand",
}
