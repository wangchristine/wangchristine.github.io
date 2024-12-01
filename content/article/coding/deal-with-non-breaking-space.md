---
category: coding
title: 不換行空格處理
description: "最近爬資料時遇到一個很奇怪的問題，拿到的資料字串前後都有空格，無法直接用 PHP 的"
createdAt: "2023-04-03"
updatedAt: "2023-04-03"
---

最近爬資料時遇到一個很奇怪的問題，拿到的資料字串前後都有空格，無法直接用 PHP 的 `trim()` 或是 `str_replace()` 拿掉空格，仔細排查了一下原來這是一個叫做不換行空格 Non-breaking space 的東西，知道這是啥東西之後就好辦了，以下兩種處理方式都可以:

1. UTF-8 編碼 `C2 A0`
```php
preg_replace("/\xc2\xa0/", "", $firstChild->data);
```

2. Unicode 編碼 `U+00A0`
```php
preg_replace("/\x{00a0}/u", "", $firstChild->data);
```

這樣就移除掉空白了！
