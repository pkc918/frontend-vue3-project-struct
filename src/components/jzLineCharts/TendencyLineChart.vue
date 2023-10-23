<script setup lang="ts">
import { TLineChartData } from "@/components/types.ts";
import { ChartOptions } from "chart.js";

const chartDatas: TLineChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July","January", "February", "March", "April", "May", "June", "July","January", "February", "March", "April"],
  datasets: [
    {
      label: "Data One",
      backgroundColor: "#f87979",
      data: [40, 39, 10, 40, 39, 80, 40,40, 39, 10, 40, 39, 80, 40,40, 39, 10, 20]
    }
  ]
};

const chartOptions: ChartOptions<"line"> = {
  scales: {
    y: {
      min: 0,
      max: 100,
      border: {
        display: false
      },
      ticks: {
        crossAlign: "far",
        maxTicksLimit: 6,
        showLabelBackdrop: true,
      },
    },
    x: {
      grid: {
        display: false
      }
    }
  },
  plugins: {
    title: {
      align: "start",
      display: true,
      position: "top",
      text: "指标趋势分析"
    },
    legend: {
      position: "top",
      align: "end",
      labels: {
        textAlign: "right",
        font: {
          size: 14,
        },
        usePointStyle: false,
      },
    },
    tooltip: {
      bodyFont: {
        size: 14,
        family: "sans-serif",
      },
      boxPadding: 4,
    },
  },
  datasets: {
    line: {
      fill: false,
      tension: 0.5,
      borderColor: "#1681FF",
    },
    bubble: {
      borderColor: "transparent",
    },
    bar: {
      borderColor: "transparent",
    }
  },
  maintainAspectRatio: false,
};

</script>

<template>
  <div style="min-width: 1000px;height: 400px;">
    <LineChart :chart-data="chartDatas" :chart-options="chartOptions"/>
  </div>
</template>

<style scoped>

</style>
