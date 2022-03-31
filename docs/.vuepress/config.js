const { sitemap } = require("vuepress-plugin-sitemap2");
module.exports = {
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
      sitemap({
        hostname: "https://arc-site.github.io/",
      }),
      [
        '@vuepress/plugin-google-analytics',
        {
          id: 'G-3BT2HTNJK0',
        },
      ],
      [
        '@vuepress/plugin-search',
        {
          placeholder: '搜索',
        },
      ],
    ],
    themeConfig: {
      darkMode: false,
      lastUpdated: true,
      lastUpdatedText: '更新',
      contributors: true,
      contributorsText: '編輯',
      navbar:[
        {
          text: '總覽',
          children: [
            '/overview/yearbook/',
            '/overview/article/', 
            '/overview/monograph/',
            '/catalogue/',
          ],
        },
        {
          text: '考古學文化',
          children: [
            '/culture/yinxu/', 
          ],
        },
        {
          text: '專題',
          children: [
            '/subject/epigraphy/',
            '/subject/theory-and-method/',
            '/subject/archaeometry/',
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
//        {
//          text: '簡介',
//          link: '/about/', 
//        },
    ],
      sidebar: {
    }
  }
}