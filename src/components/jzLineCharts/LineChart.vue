<script setup lang="ts">
import { Line } from 'vue-chartjs'
import {
  CategoryScale,
  Chart as ChartJS, ChartOptions, Filler, Legend, LinearScale, LineElement, PointElement, Title, Tooltip,
} from "chart.js";
import { TLineChartData } from "@/components/types.ts";

ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale, Filler);

const props = defineProps<{
  chartData: TLineChartData
  chartOptions: ChartOptions<'line'>
}>()

console.log("bar chart config", props.chartData, props.chartOptions)
</script>

<template>
  <Line :options="props.chartOptions" :data="props.chartData" />
</template>
