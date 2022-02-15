import { createApp } from "vue";
import VueSmoothScroll from "vue3-smooth-scroll";
import App from "./App.vue";
import "virtual:windi.css";
import "../src/assets/index.css";

createApp(App)
  .use(VueSmoothScroll, { updateHistory: false, duration: 300 })
  .mount("#app");
