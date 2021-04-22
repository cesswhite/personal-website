import { defineConfig } from "vite-plugin-windicss";
import filters from "windicss/plugin/filters";

export default defineConfig({
  darkMode: "class",
  plugins: [filters],
  shortcuts: {},
  theme: {
    extend: {},
  },
  variants: {},
});
