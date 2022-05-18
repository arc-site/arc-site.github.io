const { viteBundler } = require('@vuepress/bundler-vite')
const { defaultTheme } = require('@vuepress/theme-default')
const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')
const { searchPlugin } = require('@vuepress/plugin-search')
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
          id: 'G-PQXR54EQKR',
        }),
      ],
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
          text: '總覽',
          children: [
            '/overview/news/',
            '/archaeology/yearbook/',
            '/overview/article/', 
            '/overview/monograph/',
            '/catalogue/',
          ],
        },
        {
          text: '考古發現',
          children: [
            '/archaeology/yangshao-culture/',
            '/archaeology/xiantouling-culture/',
            '/archaeology/erlitou-site/',
            '/archaeology/zhengzhou-shang-city/',
            '/archaeology/yanshi-shang-city/',
            '/archaeology/huanbei-shang-city/',
            '/archaeology/yin-ruins/', 
          ],
        },
        {
          text: '專題',
          children: [
            '/archaeology/epigraphy/',
            '/archaeology/theory-and-method/',
            '/archaeology/archaeometry/',
            '/archaeology/archaeometallurgy/',
            '/archaeology/remote-sensing-in-archaeology/',
            '/archaeology/laboratory-archaeology/',
            '/archaeology/zooarchaeology/',
            '/archaeology/phytarchaeology/',
            '/archaeology/ceramic-archaeology',
            '/archaeology/public-archaeology',
            '/archaeology/paleography',
          ],
        },
        {
          text: '文化遺產',
          children: [
            '/heritage/convention/',
          ],
        },
        {
          text: '數據庫',
          link: '/database/', 
        },
    ],
  }),
}