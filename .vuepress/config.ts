import { defineUserConfig } from "vuepress";
import theme from "./theme";
const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')

export default defineUserConfig({
  lang: "zh-TW",
  title: "研究資料類編",
  description: "",

  base: "/",

    plugins: [
      googleAnalyticsPlugin({
        id: 'G-63383XK452',
      }),
    ],

  theme,
});
