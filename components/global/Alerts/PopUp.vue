<template>
  <div
    class="fixed left-1/2 z-[1000] top-5 -translate-x-1/2 min-w-[250px] shadow-sm transition-opacity"
  >
    <t-alert
      :variant="alert.type"
      :show="showAlert"
      :timeout="alert.timeout || Number(2000)"
      :dismissible="false"
      >{{ alert?.message }}</t-alert
    >
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { Alert } from './Alert'
interface Props {
  alert: Alert
}
const prop = defineProps<Props>()

const showAlert = ref(false)

watch(
  () => prop.alert.message,
  (newMessage, oldMessage) => {
    showAlert.value = !!newMessage

    setTimeout(() => {
      showAlert.value = false
    }, prop.alert.timeout || 2000)
  }
)
</script>

<style scoped lang="scss"></style>
