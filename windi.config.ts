import { defineConfig } from "vite-plugin-windicss";
const filters = require("windicss/plugin/filters");
const colors = require("windicss/colors");
const typography = require("windicss/plugin/typography");

export default defineConfig({
  darkMode: "class",
  plugins: [filters, typography],
  theme: {
    colors: {
      gray: colors.trueGray,
      blue: colors.cyan,
      green: colors.emerald,
      violet: colors.violet,
      purple: colors.purple,
      pink: colors.pink,
      red: colors.red,
      yellow: colors.amber,
      orange: colors.orange,
    },
  },
});
