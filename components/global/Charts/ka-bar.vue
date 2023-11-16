<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :width="400"
    :height="400"
  />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Bar } from 'vue-chartjs'
import { getAllProducts } from '../../../api/Product'

const randomNum = () => Math.floor(Math.random() * (235 - 52 + 1) + 52)
const randomRGB = () => `${randomNum()}, ${randomNum()}, ${randomNum()}`

const data = ref<string[]>([])
const labels = ref<string[]>([])
const backgroundColor = ref<string[]>([])

const getData = async () => {
  try {
    const response = await getAllProducts()
    const products = response.data.data

    for (const product of products) {
      data.value.push(product.inventory)
      labels.value.push(product.name)
      backgroundColor.value.push(`rgba(${randomRGB()}, 0.5)`)
    }
  } catch (err) {
    console.error('Failed to fetch data', err)
  }
}

onMounted(() => {
  getData()
})

const chartData = ref({
  labels: labels.value,
  datasets: [
    {
      axis: 'y',
      label: 'My First Dataset',
      data: data.value,
      backgroundColor: backgroundColor.value,
      fill: true,
      borderWidth: 2,
      maxBarThickness: 8,
      minBarLength: 5,
    },
  ],
})

const chartOptions = {
  indexAxis: 'y',
  plugins: {
    customCanvasBackgroundColor: {
      color: 'lightGreen',
    },
  },
}
</script>
