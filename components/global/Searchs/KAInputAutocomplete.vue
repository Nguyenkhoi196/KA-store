<template>
  <div class="card flex content-center">
    <AutoComplete v-model="value" :suggestions="items" @complete="search" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
const items = ref([
  {
    id: 9,
    name: 'Lion',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
])

const search = (event) => {
  items.value = [...Array(10).keys()].map((item) => event.query + '-' + item)
}
</script>
