<template>
  <div>
    <section class="container mx-auto min-h-screen h-full">
      <div class="w-auto mx-8 mt-5">
        <nuxt-link to="/market">Trở lại</nuxt-link>
        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            id="TabDetails"
            class="flex flex-wrap -mb-px text-sm font-medium text-center"
            data-tabs-toggle="#TabDetails"
            role="tablist"
          >
            <li class="mr-2" role="presentation">
              <button
                id="details-tab"
                class="inline-block p-3 border-b-2 rounded-t-lg"
                data-tabs-target="#details"
                type="button"
                role="tab"
                aria-controls="details"
                aria-selected="false"
              >
                Thông tin
              </button>
            </li>
            <li class="mr-2" role="presentation">
              <button
                id="dashboard-tab"
                class="inline-block p-3 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                data-tabs-target="#dashboard"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected="false"
              >
                Dashboard
              </button>
            </li>
          </ul>
        </div>
        <div id="TabDetails">
          <div
            id="details"
            class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            role="tabpanel"
            aria-labelledby="details-tab"
          >
            {{ product }}
          </div>
          <div
            id="dashboard"
            class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
            <p class="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the
              <strong class="font-medium text-gray-800 dark:text-white"
                >Dashboard tab's associated content</strong
              >. Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, useRoute } from '@nuxtjs/composition-api'
import { productDetails } from '~/api/Product'
import { Product } from '~/types/Product'

const product = ref<Product>()
const route: any = useRoute()

const id = route.value.params.id
onMounted(() => {
  productDetails(id).then((res) => {
    product.value = res.data
  })
})
</script>

<style lang="scss" scoped>
[aria-selected='true'] {
  color: #9ae29b;
  border-color: #9ae29b;
}
</style>
