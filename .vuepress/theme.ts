import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  themeColor: false,
  darkmode: "disable",
  fullscreen: false,
  hostname: "https://citenote.github.io",

  author: {
    name: "NGKinchung",
    url: "https://citenote.github.io",
  },

  iconAssets: "//at.alicdn.com/t/font_3432689_cekvg7mzu1v.css",

  logo: "/logo.svg",

  repo: "citenote/citenote.github.io",

  editLink: false,

  displayFooter: true,

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "考古的",
    intro: "",
    medias: {
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    mdEnhance: {
//    enableAll: true,
      footnote: true,
      lazyLoad: true,
      sup: true,
      sub: true,
      mark: true,
      container: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
