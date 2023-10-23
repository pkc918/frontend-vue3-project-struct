<script setup lang="ts">
import { TBarChartData } from "@/components/types.ts";
import { BarElement, CategoryScale, Chart as ChartJS, ChartOptions, Legend, LinearScale, Tooltip } from "chart.js";
import { BarChartOptions } from "@/components/jzBarCharts/ChartConfigOptions.ts";
ChartJS.register(Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const chartDatas: TBarChartData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  datasets: [
    {
      data: [1,2,3,4,5,6,7,8,9],
      indexAxis: "y",
      yAxisID: "yAxis",
      backgroundColor: "#f87979",
      borderRadius: Number.MAX_VALUE,
      borderSkipped: false,
      hidden: false,
      barPercentage: 0.5,
      categoryPercentage: 0.9,
      barThickness: "flex",
    }
  ]
};

let chartOptions: ChartOptions<"bar"> = {
  ...BarChartOptions,
  scales: {
    ...BarChartOptions.scales,
    yAxis: {
      labels: ["1", "20w", "30w", "40w", "50w", "60w", "70w", "80w", "90w"],
      position: "right",
      grid: {
        display: false
      },
      border: {
        display: false
      },
      ticks: {
        maxTicksLimit: 9
      }
    }
  },
  plugins: {
    ...BarChartOptions?.plugins,
    title: {
      ...BarChartOptions?.plugins?.title,
      text: "达人带货排行榜"
    }
  }
};
</script>

<template>
    <div style="min-width: 480px;">
      <BarChart :chart-data="chartDatas" :chart-options="chartOptions"/>
    </div>
</template>

<style scoped>

</style>
