import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
import Pages from "vite-plugin-pages";
import Components from "unplugin-vue-components/vite";
// import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Pages(),
    Components({
      resolvers: [],
      dts: true,
      directoryAsNamespace: true,
      include: [/\.vue$/, /\.vue\?vue/],
    }),
    VitePWA(),
    WindiCSS(),
  ],
});
