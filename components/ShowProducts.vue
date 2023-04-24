<template>
  <div class="">
    <nuxt-link to="'/market/' + productId">
      <div
        class="rounded-md shadow-lg lg:hover:scale-105 transition duration-500 cursor-pointer w-screen"
      >
        <div class="p-3 bg-primary flex flex-row gap-3 lg:px-14">
          <img
            src="~/assets/images/logo.png"
            alt=""
            class="rounded-lg overflow-hidden h-12 border-2 border-secondary"
          />
          <div class="flex-1 min-w-0">
            <p class="text-base font-medium text-tertiary truncate">
              {{ name }}
            </p>
            <p class="text-sm text-gray-500 truncate">
              {{ category }}
            </p>
          </div>
          <div class="flex-end">
            <p class="text-base font-medium text-tertiary truncate">
              {{ price }} &#8363;
            </p>
            <p class="text-sm text-gray-500 truncate">
              {{ inventory }}
            </p>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>
<script lang="ts">
export default {
  props: ['productId' ,'name', 'price', 'brand', 'category', 'inventory', ],
  setup() {},
}
</script>
