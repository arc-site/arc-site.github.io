import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  "/slide",
  {
    text: "考古",
    icon: "guyizhi",
    prefix: "/archaeology/",
    link: "/archaeology/",
    children: "structure",
  },
  {
    text: "文化遺產",
    icon: "zhihuiwenwu1",
    prefix: "/cultural-heritage/",
    link: "/cultural-heritage/",
    children: "structure",
  },
  {
    text: "檔案",
    icon: "dataarchive",
    prefix: "/archive/",
    link: "/archive/",
    children: "structure",
  },
  {
    text: "傳理",
    icon: "xinwen",
    prefix: "/communication/",
    link: "/communication/",
    children: "structure",
  },

//  {
//    text: "文章",
//    icon: "note",
//    prefix: "/posts/",
//    children: [
//      {
//        text: "文章 1-4",
//        icon: "note",
//        collapsable: true,
//        prefix: "article/",
//        children: ["article1", "article2", "article3", "article4"],
//      },
//      {
//        text: "文章 5-12",
//        icon: "note",
//        children: [
//          {
//            text: "文章 5-8",
//            icon: "note",
//            collapsable: true,
//            prefix: "article/",
//           children: ["article5", "article6", "article7", "article8"],
//          },
//          {
//            text: "文章 9-12",
//            icon: "note",
//            children: ["article9", "article10", "article11", "article12"],
//          },
//        ],
//      },
//    ],
//  },
]);
