export const data = {
  "key": "v-b73c4100",
  "path": "/hknews/",
  "title": "香港新聞",
  "lang": "zh-Hant",
  "frontmatter": {
    "lang": "zh-Hant",
    "title": "香港新聞",
    "sidebar": "auto",
    "summary": "香港新聞 自然災害",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://citenote.github.io/hknews/"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "資料類編"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "香港新聞"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "article"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-Hant"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "自然災害",
      "slug": "自然災害",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 0.04,
    "words": 11
  },
  "filePathRelative": "hknews/README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
