<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS, ChartOptions, Legend, LinearScale, Title, Tooltip,
} from "chart.js"
import { TBarChartData } from "@/components/types.ts";

ChartJS.register(Title, Tooltip, Legend, BarElement, LinearScale, CategoryScale);

const props = defineProps<{
  chartData: TBarChartData
  chartOptions: ChartOptions<'bar'>
}>()

console.log("bar chart config", props.chartData, props.chartOptions)
</script>

<template>
    <Bar :options="props.chartOptions" :data="props.chartData" />
</template>
