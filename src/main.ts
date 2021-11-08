import { createApp } from "vue";
import VueSmoothScroll from "vue3-smooth-scroll";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "virtual:windi.css";
import "../src/assets/index.css";

createApp(App)
  .use(router)
  .use(VueSmoothScroll, { updateHistory: false, duration: 300 })
  .use(createPinia())
  .mount("#app");
