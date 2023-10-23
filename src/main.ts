import { createApp } from "vue";
import App from "./App.vue";
import { createPinia, Pinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./style.css";
import "virtual:uno.css";

const pinia: Pinia = createPinia();

createApp(App).use(pinia).use(ElementPlus).mount("#app");
