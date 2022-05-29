import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-TW",
  title: "研究資料類編",
  description: "vuepress-theme-hope 的演示",

  base: "/",

  theme,
});
