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
      <div class="flex flex-row gap-2">
        <div
          class="w-4 h-4 rounded-full bg-secondaryDark animate-bounce [animation-delay:.5s]"
        ></div>
        <div
          class="w-4 h-4 rounded-full bg-secondaryDark animate-bounce [animation-delay:.3s]"
        ></div>
        <div
          class="w-4 h-4 rounded-full bg-secondaryDark animate-bounce [animation-delay:.5s]"
        ></div>
      </div>
    </div>
    <div
      :style="{ background: loading === true ? '#cbcbcb' : '' }"
      class="overflow-y-scroll min-h-[200px] max-h-[70vh] w-auto static overflow-auto border-[1px] border-solid border-tertiary"
    >
      <slot name="body" />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  loading: {
    type: Boolean,
    required: true,
  },
})
</script>

<style scoped></style>
