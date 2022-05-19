const { viteBundler } = require('@vuepress/bundler-vite')
const { defaultTheme } = require('@vuepress/theme-default')
const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')
const { searchPlugin } = require('@vuepress/plugin-search')
const { sitemapPlugin } = require("vuepress-plugin-sitemap2")
const { seoPlugin } = require("vuepress-plugin-seo2");
module.exports = {
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
    base: '/',
    lang: 'zh-Hant',
    title: '科研資料類編',
    description: '實踐考古、發現歷史、應用科技、感知人文',
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
    markdown: {
      externalLinks: 
      { target: '_blank', rel: 'nofollow noopener noreferrer' }
    },
    plugins: [
      [
        googleAnalyticsPlugin({
          id: 'G-63383XK452',
        }),
      ],
      seoPlugin({
        hostname: "https://citenote.github.io"
      }),
      sitemapPlugin({
        hostname: "https://citenote.github.io"
      }),
      [
        searchPlugin({
          placeholder: '搜索',
        }),
      ],
    ],
    theme: defaultTheme({
      darkMode: false,
      lastUpdated: true,
      lastUpdatedText: '更新',
      contributors: true,
      contributorsText: '編輯',
      navbar:[
        {
          text: '考古學',
          children: [
            '/archaeology/site-and-culture/',
            '/archaeology/news/',
            '/archaeology/yearbook/',
            '/archaeology/article/', 
            '/overview/monograph/',
            '/catalogue/',
          ],
        },
        {
          text: '文化遺產',
          children: [
            '/cultural-heritage/convention/',
          ],
        },
        {
          text: '傳理學',
          children: [
            '/hknews/',
          ],
        },
        {
          text: '數據庫',
          link: '/database/', 
        },
    ],
  }),
}