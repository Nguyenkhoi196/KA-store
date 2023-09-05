<template>
  <div>
    <div>
      <div
        class="bg-secondary text-tertiary border-[1px] border-solid border-secondaryDark rounded-t-md"
      >
        <div class="touch-pan-y border-none">
          <table class="table-fixed max-w-none w-auto min-w-full">
            <slot name="header" />
          </table>
        </div>
      </div>
    </div>
    <div v-show="loading === true" class="z-50 absolute top-1/2 left-1/2">
      <fa
        icon="spinner"
        spin
        style="height: 50px; width: 50px; color: #777d88"
      />
    </div>
    <div
      :style="{ background: loading === true ? '#cbcbcb' : '' }"
      class="overflow-y-scroll min-h-[200px] max-h-[70vh] w-auto static overflow-auto border-[1px] border-solid border-tertiary"
    >
      <slot name="body" :products="props.products" :totals="props.totals" />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  loading: {
    type: Boolean,
    required: true,
  },
  products: {
    type: Array,
    required: true,
  },
  totals: {
    type: Number,
    required: true,
  },
})
console.log(props)

// const emit = defineEmits(['view-product-details'])
// const viewProductDetails = () => {
//   emit('view-product-details')
// }
</script>

<style scoped></style>
