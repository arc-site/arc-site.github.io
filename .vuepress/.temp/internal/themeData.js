export const themeData = {
  "blog": {
    "description": "一个前端开发者",
    "intro": "/intro.html",
    "medias": {
      "Baidu": "https://example.com",
      "Bitbucket": "https://example.com",
      "Dingding": "https://example.com",
      "Discord": "https://example.com",
      "Dribbble": "https://example.com",
      "Email": "https://example.com",
      "Evernote": "https://example.com",
      "Facebook": "https://example.com",
      "Flipboard": "https://example.com",
      "Gitee": "https://example.com",
      "GitHub": "https://example.com",
      "Gitlab": "https://example.com",
      "Gmail": "https://example.com",
      "Instagram": "https://example.com",
      "Lines": "https://example.com",
      "Linkedin": "https://example.com",
      "Pinterest": "https://example.com",
      "Pocket": "https://example.com",
      "QQ": "https://example.com",
      "Qzone": "https://example.com",
      "Reddit": "https://example.com",
      "Rss": "https://example.com",
      "Steam": "https://example.com",
      "Twitter": "https://example.com",
      "Wechat": "https://example.com",
      "Weibo": "https://example.com",
      "Whatsapp": "https://example.com",
      "Youtube": "https://example.com",
      "Zhihu": "https://example.com"
    }
  },
  "encrypt": {
    "config": {
      "/guide/encrypt.html": [
        "$2a$10$UVXbb9d5q8wvtHOeZzZAZesDPYf7DCHogat5YWpxEuWUl9aRNtm2K"
      ]
    }
  },
  "pure": false,
  "darkmode": "disable",
  "themeColor": false,
  "fullscreen": false,
  "locales": {
    "/": {
      "lang": "zh-TW",
      "navbarLocales": {
        "langName": "繁體中文",
        "selectLangText": "選擇語言",
        "selectLangAriaLabel": "選擇語言"
      },
      "metaLocales": {
        "author": "作者",
        "date": "寫作日期",
        "origin": "原創",
        "views": "訪問量",
        "category": "分類",
        "tag": "標籤",
        "readingTime": "閱讀時間",
        "words": "字數",
        "toc": "此頁內容",
        "prev": "上一頁",
        "next": "下一頁",
        "lastUpdated": "上次編輯於",
        "contributors": "貢獻者",
        "editLink": "編輯此頁"
      },
      "blogLocales": {
        "article": "文章",
        "articleList": "文章列表",
        "category": "分類",
        "tag": "標籤",
        "timeline": "時間軸",
        "timelineTitle": "昨日不在",
        "all": "全部",
        "intro": "個人介紹",
        "star": "收藏",
        "slides": "幻燈片",
        "encrypt": "加密"
      },
      "paginationLocales": {
        "prev": "上一頁",
        "next": "下一頁",
        "navigate": "跳轉到",
        "action": "前往",
        "errorText": "請輸入 1 到 $page 之前的頁碼！"
      },
      "outlookLocales": {
        "themeColor": "主題色",
        "darkmode": "主題模式",
        "fullscreen": "全屏"
      },
      "encryptLocales": {
        "title": "頁面已加密",
        "placeholder": "輸入密碼",
        "remember": "記憶密碼",
        "errorHint": "請輸入正確密碼"
      },
      "routeLocales": {
        "404msg": [
          "這裡什麼也沒有",
          "我們是怎麼來到這兒的？",
          "這 是 四 零 四 !",
          "看起来你訪問了一個失效的鏈結"
        ],
        "back": "返回上一頁",
        "home": "帶我回家",
        "openInNewWindow": "Open in new window"
      },
      "blog": {},
      "repoDisplay": true,
      "navbarIcon": true,
      "navbarAutoHide": "mobile",
      "hideSiteNameonMobile": true,
      "sidebar": [
        "/slide",
        {
          "text": "考古學",
          "icon": "kaoguxue",
          "prefix": "/archaeology/",
          "link": "/archaeology/",
          "children": "structure"
        },
        {
          "text": "文化遺產",
          "icon": "zhihuiwenwu1",
          "prefix": "/cultural-heritage/",
          "link": "/cultural-heritage/",
          "children": "structure"
        },
        {
          "text": "檔案",
          "icon": "dataarchive",
          "prefix": "/archive/",
          "link": "/archive/",
          "children": "structure"
        },
        {
          "text": "傳理",
          "icon": "xinwen",
          "prefix": "/communication/",
          "link": "/communication/",
          "children": "structure"
        }
      ],
      "sidebarIcon": true,
      "headerDepth": 2,
      "author": {
        "name": "NGKinchung",
        "url": "https://citenote.github.io"
      },
      "logo": "/logo.svg",
      "repo": "vuepress-theme-hope/vuepress-theme-hope",
      "docsDir": "demo/src",
      "navbar": [
        {
          "text": "使用指南",
          "icon": "creative",
          "link": "/guide/"
        },
        {
          "text": "博文",
          "icon": "edit",
          "prefix": "/posts/",
          "children": [
            {
              "text": "文章 1-4",
              "icon": "edit",
              "prefix": "article/",
              "children": [
                {
                  "text": "文章 1",
                  "icon": "edit",
                  "link": "article1"
                },
                {
                  "text": "文章 2",
                  "icon": "edit",
                  "link": "article2"
                },
                "article3",
                "article4"
              ]
            },
            {
              "text": "文章 5-12",
              "icon": "edit",
              "children": [
                {
                  "text": "文章 5",
                  "icon": "edit",
                  "link": "article/article5"
                },
                {
                  "text": "文章 6",
                  "icon": "edit",
                  "link": "article/article6"
                },
                "article/article7",
                "article/article8"
              ]
            },
            {
              "text": "文章 9",
              "icon": "edit",
              "link": "article9"
            },
            {
              "text": "文章 10",
              "icon": "edit",
              "link": "article10"
            },
            "article11",
            "article12"
          ]
        }
      ],
      "footer": "",
      "displayFooter": true,
      "pageInfo": [
        "Author",
        "Original",
        "Date",
        "Category",
        "Tag",
        "ReadingTime"
      ]
    }
  }
}
