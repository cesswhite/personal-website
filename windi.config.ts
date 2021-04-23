import { defineConfig } from "vite-plugin-windicss";
import filters from "windicss/plugin/filters";
import typography from "windicss/plugin/typography";

export default defineConfig({
  darkMode: "class",
  plugins: [filters, typography],
  shortcuts: {},
  theme: {
    extend: {},
  },
  variants: {},
});
