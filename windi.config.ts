import { defineConfig } from "vite-plugin-windicss";
import filters from "windicss/plugin/filters";
import typography from "windicss/plugin/typography";
import forms from "windicss/plugin/forms";

export default defineConfig({
  darkMode: "class",
  plugins: [filters, typography, forms],
  shortcuts: {},
  theme: {
    extend: {},
  },
  variants: {},
});
