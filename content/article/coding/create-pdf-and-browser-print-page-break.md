---
category: coding
title: '程式匯出成 PDF 和瀏覽器列印設定換頁'
description: '最近有個需求是用程式產出內容有兩大區塊的 PDF，試了使用的程式套件一陣子後發現不是在套件做設定'
createdAt: '2022-09-26'
updatedAt: '2022-09-26'
---
  
最近有個需求是用程式產出內容有兩大區塊的 PDF，試了使用的程式套件一陣子後發現不是在套件做設定，而是直接在 css 上調整就可以了，像是這樣:
```html
<head>
    <style>
    .container {
        page-break-before: always;
    }
    </style>
</head>
<body>
    <div class="container">
        Block A ...
    </div>
    <div class="container">
        Block B ...
    </div>
</body>
```
透過設定 `page-break-before: always;` 讓此 DOM 元素之前強制換頁， 即可看到第二個區塊 Block B 的內容在匯出的 PDF 內的下一頁開頭印出，而在瀏覽器列印也是可以使用此 css 來設定下一個區塊換頁!
