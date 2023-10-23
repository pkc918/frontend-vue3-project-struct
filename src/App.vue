<script setup lang="ts">
import { useCounterStore } from "@/store/index.ts";
import { getUserInfo } from "@/api/users.ts";


const counterStore = useCounterStore();
console.log(counterStore);


</script>

<template>
  <div>
    <BringGoodsRankList/>
    <TendencyLineChart/>
    <el-button @click="getUserInfo(1)">getUserInfo</el-button>
<!--    <a href="https://vitejs.dev" target="_blank">-->
<!--      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">-->
<!--        <g>-->
<!--          <circle cx="12" cy="3" r="1" fill="currentColor">-->
<!--            <animate id="svgSpinners12DotsScaleRotate0" attributeName="r"-->
<!--                     begin="0;svgSpinners12DotsScaleRotate2.end-0.5s" calcMode="spline" dur="0.6s"-->
<!--                     keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/>-->
<!--          </circle>-->
<!--          <circle cx="16.5" cy="4.21" r="1" fill="currentColor">-->
<!--            <animate id="svgSpinners12DotsScaleRotate1" attributeName="r"-->
<!--                     begin="svgSpinners12DotsScaleRotate0.begin+0.1s" calcMode="spline" dur="0.6s"-->
<!--                     keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/>-->
<!--          </circle>-->
<!--          <circle cx="7.5" cy="4.21" r="1" fill="currentColor">-->
<!--            <animate id="svgSpinners12DotsScaleRotate2" attributeName="r"-->
<!--                     begin="svgSpinners12DotsScaleRotate4.begin+0.1s" calcMode="spline" dur="0.6s"-->
<!--                     keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/>-->
<!--          </circle>-->
<!--          <circle cx="19.79" cy="7.5" r="1" fill="currentColor">-->
<!--            <animate id="svgSpinners12DotsScaleRotate3" attributeName="r"-->
<!--                     begin="svgSpinners12DotsScaleRotate1.begin+0.1s" calcMode="spline" dur="0.6s"-->
<!--                     keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/>-->
<!--          </circle>-->
<!--          <circle cx="4.21" cy="7.5" r="1" fill="currentColor">-->
<!--            <animate id="svgSpinners12DotsScaleRotate4" attributeName="r"-->
<!--                     begin="svgSpinners12DotsScaleRotate6.begin+0.1s" calcMode="spline" dur="0.6s"-->
<!--                     keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/>-->
<!--          </circle>-->
<!--          <circle cx="21" cy="12" r="1" fill="currentColor">-->
<!--            <animate id="svgSpinners12DotsScaleRotate5" attributeName="r"-->
<!--                     begin="svgSpinners12DotsScaleRotate3.begin+0.1s" calcMode="spline" dur="0.6s"-->
<!--                     keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/>-->
<!--          </circle>-->
<!--          <circle cx="3" cy="12" r="1" fill="currentColor">-->
<!--            <animate id="svgSpinners12DotsScaleRotate6" attributeName="r"-->
<!--                     begin="svgSpinners12DotsScaleRotate8.begin+0.1s" calcMode="spline" dur="0.6s"-->
<!--                     keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/>-->
<!--          </circle>-->
<!--          <circle cx="19.79" cy="16.5" r="1" fill="currentColor">-->
<!--            <animate id="svgSpinners12DotsScaleRotate7" attributeName="r"-->
<!--                     begin="svgSpinners12DotsScaleRotate5.begin+0.1s" calcMode="spline" dur="0.6s"-->
<!--                     keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/>-->
<!--          </circle>-->
<!--          <circle cx="4.21" cy="16.5" r="1" fill="currentColor">-->
<!--            <animate id="svgSpinners12DotsScaleRotate8" attributeName="r"-->
<!--                     begin="svgSpinners12DotsScaleRotatea.begin+0.1s" calcMode="spline" dur="0.6s"-->
<!--                     keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/>-->
<!--          </circle>-->
<!--          <circle cx="16.5" cy="19.79" r="1" fill="currentColor">-->
<!--            <animate id="svgSpinners12DotsScaleRotate9" attributeName="r"-->
<!--                     begin="svgSpinners12DotsScaleRotate7.begin+0.1s" calcMode="spline" dur="0.6s"-->
<!--                     keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/>-->
<!--          </circle>-->
<!--          <circle cx="7.5" cy="19.79" r="1" fill="currentColor">-->
<!--            <animate id="svgSpinners12DotsScaleRotatea" attributeName="r"-->
<!--                     begin="svgSpinners12DotsScaleRotateb.begin+0.1s" calcMode="spline" dur="0.6s"-->
<!--                     keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/>-->
<!--          </circle>-->
<!--          <circle cx="12" cy="21" r="1" fill="currentColor">-->
<!--            <animate id="svgSpinners12DotsScaleRotateb" attributeName="r"-->
<!--                     begin="svgSpinners12DotsScaleRotate9.begin+0.1s" calcMode="spline" dur="0.6s"-->
<!--                     keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/>-->
<!--          </circle>-->
<!--          <animateTransform attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate"-->
<!--                            values="360 12 12;0 12 12"/>-->
<!--        </g>-->
<!--      </svg>-->
<!--      <img src="/vite.svg" class="logo" alt="Vite logo"/>-->
<!--    </a>-->
<!--    <a href="https://vuejs.org/" target="_blank">-->
<!--      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo"/>-->
<!--    </a>-->
  </div>
  <HelloWorld msg="Vite + Vue"/>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
