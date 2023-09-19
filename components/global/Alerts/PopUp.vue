<template>
  <div
    class="fixed left-1/2 z-[1000] top-5 -translate-x-1/2 min-w-[250px] shadow-sm transition-opacity"
  >
    <t-alert
      :variant="type"
      :show="message != undefined"
      :timeout="timeout || Number(2000)"
      :dismissible="false"
      >{{ message }}</t-alert
    >
  </div>
</template>

<script setup lang="ts">
interface Alert {
  message?: string
  type?: string
  timeout?: number
}
defineProps<Alert>()
</script>

<style scoped lang="scss"></style>
