<template>
  <div></div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  layout: 'AuthLayout',
  transition: 'slide-left',
  setup() {
    const isModalVisible = ref(false) // Sử dụng ref để gắn biến reactive
    const setShowModal = (value: boolean) => {
      isModalVisible.value = value // Truy cập giá trị của ref thông qua .value
    }
    return {
      setShowModal,
      isModalVisible,
    }
  },
}
</script>

<style>
@import '../../assets/scss/components/_pageTransition.scss';
</style>
