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
    title: '考古資料類編',
    description: '考古、歷史、人文、科技',
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
            '/overview/yearbook/',
            '/overview/article/', 
            '/overview/monograph/',
            '/catalogue/',
          ],
        },
        {
          text: '考古發現',
          children: [
            '/discovery/yangshao-culture/',
            '/discovery/xiantouling-culture/',
            '/discovery/erlitou-site/',
            '/discovery/zhengzhou-shang-city/',
            '/discovery/yanshi-shang-city/',
            '/discovery/huanbei-shang-city/',
            '/discovery/yin-ruins/', 
          ],
        },
        {
          text: '專題',
          children: [
            '/subject/epigraphy/',
            '/subject/theory-and-method/',
            '/subject/archaeometry/',
            '/subject/archaeometallurgy/',
            '/subject/remote-sensing-in-archaeology/',
            '/subject/laboratory-archaeology/',
            '/subject/zooarchaeology/',
            '/subject/phytarchaeology/',
            '/subject/ceramic-archaeology',
            '/subject/public-archaeology',
            '/subject/paleography',
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