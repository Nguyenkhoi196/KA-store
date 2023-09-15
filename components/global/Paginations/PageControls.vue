<template>
  <div>
    <t-pagination
      v-model="currentPage"
      variant="rounded"
      :total-items="Number(pagination.total)"
      :per-page="pagination.pageSize"
      :limit="5"
      @change="setPage()"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
  pagination: {
    type: Object,
    required: true,
  },
})
const currentPage = ref<number>(1)
watch(
  () => props.pagination.pageSize,
  (pre, next) => {
    if (pre !== next) {
      currentPage.value = 1
    }
  }
)
const emit = defineEmits(['set-page', 'find'])
const setPage = () => {
  emit('set-page', currentPage.value)
  emit('find')
}
</script>
<style scoped></style>
