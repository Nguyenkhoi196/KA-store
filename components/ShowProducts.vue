<template>
  <div class="">
    <div class="rounded-md shadow-lg hover:scale-105 transition duration-500 cursor-pointer w-screen">

      <div class="py-4 px-4 bg-primary flex flex-row ">
        <img src="~/assets/images/logo.png" alt="" class="rounded-full overflow-hidden h-12">
        <h3 class="text-lg font-semibold text-tertiary">{{ name }}</h3>
        <p class=" text-lg font-thin">{{ price }}</p>
      </div>
    </div>

      <!-- <div>{{ brand }}</div>
      <div>{{ category }}</div> -->
  </div>
</template>
<script lang="ts">
export default{
  name: 'ShowProducts',
  props: [ 'name', 'price', 'brand', 'category'],
  setup() {

  }
}
</script>
