<template>
  <div>
    <div class="flex items-center py-5">
      <ul class="flex items-center -space-x-px h-8 text-sm">
        <li>
          <a
            href="#"
            class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-tertiary bg-white border border-gray-300 rounded-l-lg hover:bg-secondary hover:text-primary"
          >
            <span class="sr-only">Previous</span>
            <fa icon="angle-left" />
          </a>
        </li>
        <li
          v-for="(value, index) in new Array(pagination.pageCount)"
          :key="index"
        >
          <a
            href="#"
            class="flex items-center justify-center px-3 h-8 leading-tight text-tertiary bg-white border border-gray-300 hover:bg-secondary hover:text-primary"
            :style="{
              background: +(index + 1) === +pagination.page ? '#9ae29b' : '',
            }"
            @click="setPage(index + 1)"
            >{{ index + 1 }}</a
          >
        </li>
        <li>
          <a
            href="#"
            class="flex items-center justify-center px-3 h-8 leading-tight text-tertiary bg-white border border-gray-300 rounded-r-lg hover:bg-secondary hover:text-primary"
          >
            <span class="sr-only">Next</span>
            <fa icon="angle-right" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  pagination: {
    type: Object,
    required: true,
  },
})
const pageNumber = ref<number>()
const emit = defineEmits(['set-page', 'find'])
const setPage = (param: number) => {
  pageNumber.value = param
  emit('set-page', pageNumber.value)
  emit('find')
}
</script>
<style scoped></style>
