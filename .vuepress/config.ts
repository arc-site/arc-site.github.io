import { defineUserConfig } from "vuepress";
import theme from "./theme";
const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')

export default defineUserConfig({
  lang: "zh-TW",
  title: "研究資料類編",
  description: "",
  head: [
    [
      "script",
      {
        "data-ad-client": "ca-pub-8975507583219124",
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      }
    ]
  ],
  base: "/",

    plugins: [
      googleAnalyticsPlugin({
        id: 'G-63383XK452',
      }),
    ],

  theme,
});
