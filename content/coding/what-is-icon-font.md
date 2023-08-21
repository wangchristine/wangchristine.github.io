---
category: coding
title: Icon Font 是什麼？要怎麼使用呢？
description: 'Icon Font 在現今網頁運用廣泛，用來輔助搭配文字等也能增加使用者介面的美感，那到底什麼是 Icon Font 呢'
createdAt: '2023-08-21'
updatedAt: '2023-08-22'
---

Icon Font 在現今網頁運用廣泛，用來輔助搭配文字等也能增加使用者介面的美感，那到底什麼是 Icon Font 呢? 它基本上就是把 icon 當作字體，放入相對應的代碼或指定的名稱，就能夠產生一個小圖示，以下圖 Font Awesome 為例，可以看到利用偽元素來將特定的 Unicode 轉換顯示成好看的圖示：

<markdown-img src="articles/what-is-icon-font-1.jpg"></markdown-img>

要產出這樣的圖示也很簡單，可參考[官方網站](https://fontawesome.com/)如何用 NPM 或 Yarn 拉取圖示庫後，在 HTML 貼上如下：

```html
<i class="fa-brands fa-docker"></i>
```

即可產生出 Docker 的 Icon！官方也推出一個蠻酷的功能，可根據你用的不同開發工具來引入：

<markdown-img src="articles/what-is-icon-font-2.jpg"></markdown-img>

以 Vue 為例，可使用 bind 功能來動態綁定想要的 Icon！

<markdown-img src="articles/what-is-icon-font-3.jpg"></markdown-img>

Icon Font 被當作文字一樣所以可以加上 CSS 像是加顏色，但同樣也跟文字一樣只能用單色，其他優點像是在顯示上縮放不會失真，更酷的是它還可以做到動畫效果(animation)，很不可思議吧！有興趣的人可以到[官方網站的範例 Docker Icon](https://fontawesome.com/icons/docker?f=brands&s=solid)看看實際動畫效果吧！