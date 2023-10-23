import { ChartOptions } from "chart.js";

export const BarChartOptions: ChartOptions<"bar"> = {
    responsive: true,
    indexAxis: "y",
    plugins: {
        title: {
            align: "start",
            display: true,
            position: "top",
            text: "柱状图"
        },
        legend: {
            display: false
        }
    },
    layout:{
        padding: 20
    },
    scales: {
        y: {
            offset: true,
            beginAtZero: true,

            title: {
                display: false
            },
            border: {
                display: false
            },
            grid: {
                display: false
            },
            // y 轴左对齐
            ticks: {
                crossAlign: "far",
                maxTicksLimit: 9,
                showLabelBackdrop: true,
            },
        },
        x: {
            display: false
        }
    }
};
