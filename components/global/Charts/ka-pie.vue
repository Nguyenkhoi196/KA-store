<template>
  <Pie :chart-options="chartOptions" :chart-data="chartData" :width="400" :height="400" class="overflow-visible" />
</template>

<script setup>
import { Pie } from 'vue-chartjs'
const chartData = {
  labels: ['Eating', '2', '3'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
      ],
      hoverOffset: 4,
      borderAlign: 'center',
      borderColor: '#43k345',
      borderWidth: 2,
      hoverBorderDashOffset: 2,
    },
  ],
}
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
}
</script>
