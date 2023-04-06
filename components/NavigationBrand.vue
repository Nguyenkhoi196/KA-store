<template>
  <div class="flex justify-center relative mx-auto w-1/2">
    <div class=" absolute w-min h-min border-x-2 border-solid border-gray-800 rounded-full animate-[spin_3s_linear_infinite]"></div>
    <img :src="require('~/assets/images/logo.png')" alt="logo" class=" w-max top-0 mx-auto"/>
  </div>
</template>
<script>
export default {
  name: "NavigationBrand",
}
