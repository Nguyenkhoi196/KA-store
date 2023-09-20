<template>
  <div
    class="fixed left-1/2 z-[1000] top-5 -translate-x-1/2 min-w-[250px] shadow-sm transition-opacity"
  >
    <t-alert
      :variant="alert.type"
      :show="alert.message != undefined"
      :timeout="alert.timeout || Number(2000)"
      :dismissible="false"
      >{{ alert.message }}</t-alert
    >
  </div>
</template>

<script setup lang="ts">
import { Alert } from './Alert'
interface Props {
  alert: Alert
}
defineProps<Props>()
// const props = withDefaults(defineProps<Props>(),{})
</script>

<style scoped lang="scss"></style>
