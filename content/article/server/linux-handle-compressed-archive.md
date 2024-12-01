---
category: server
title: "Linux 處理壓縮檔案"
description: "在 Linux 中常需要處理壓縮檔案，相關的指令如下"
createdAt: "2024-07-28"
updatedAt: "2024-07-28"
---

在 Linux 中常需要處理壓縮檔案，相關的指令如下:

## 使用 curl 下載 tar.gz 檔案(以 Github release 為例)

```sh
curl -L -o release.tar.gz https://github.com/laravel/laravel/archive/refs/tags/v11.1.4.tar.gz
```

`-L`: 自動跟隨重定向。

`-o release.tar.gz`: 將下載的檔案儲存為 release.tar.gz。

## 使用 tar 解壓縮 tar.gz 檔案

```sh
tar -xzf release.tar.gz
```

`-x`: extract，表示 tar 要提取檔案。

`-z`: gzip，表示 tar 處理的是 gzip 壓縮檔案。

`-f` release.tar.gz: file，指定要操作的檔名是 release.tar.gz。
