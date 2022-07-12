export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-TW\",\"title\":\"文獻類編\",\"description\":\"\",\"head\":[[\"script\",{\"data-ad-client\":\"ca-pub-8975507583219124\",\"async\":true,\"src\":\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
