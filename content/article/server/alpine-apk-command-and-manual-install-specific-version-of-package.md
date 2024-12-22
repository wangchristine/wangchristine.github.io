---
category: server
title: "Alpine Linux 包管理工具指令用法與手動安裝特定版本套件"
createdAt: "2022-09-30"
updatedAt: "2022-12-05"
---

Alpine 是一個輕量級的 Linux 發行版本，同時提供包管理工具 `apk`，以下介紹 `apk` 相關操作指令，以 `curl` 套件為例:
## 更新鏡像源
```sh
apk update
```

## 升級系統已安裝套件包
```sh
apk upgrade
```

## 搜尋可用套件
1. 使用指令查找:
```sh
apk search curl
```
2. 或是從官網查找在 Alpine 不同版本下有支援的套件與版本:
   [https://pkgs.alpinelinux.org/packages](https://pkgs.alpinelinux.org/packages){target="_blank"}

## 安裝套件
```sh
apk add curl
```

## 刪除套件
```sh
apk del curl
```

## 列出所有已安裝套件與版本
```sh
apk list -I
```

## 手動安裝套件特定版本

有時候在專案 Alpine 版本不更動的情況下，會有需求要求套件升級，但需求升級版本已經超過 Alpine 該版本所提供的套件版本，除了 Alpine 外其他 OS 像是 CentOS 等也會有類似的問題可如下類似方式解決，以安裝 `curl` 特定版本為例:

1. 先用上面教的使用指令查找版本，以 `alpine3.12` 的版本是到 `curl-7.79.1-r1`，但我們要裝 `7.85.0-r0` 這版

2. 從官網查找所需版本壓縮檔路徑
   [https://curl.se/download.html](https://curl.se/download.html){target="_blank"}
   這個是我要的版本: [https://curl.se/download/curl-7.85.0.tar.gz](https://curl.se/download/curl-7.85.0.tar.gz){target="_blank"}

3. 指令安裝套件
```bash
wget https://curl.se/download/curl-7.85.0.tar.gz && \
tar -xvf curl-7.85.0.tar.gz && cd curl-7.85.0 && \
./configure --with-openssl && make && make install; \
cd ../ && rm -rf curl-7.85.0*; \
```

4. 驗證安裝版本為 `7.85.0`
```sh
curl --version
```
這樣就完成了安裝特定版本了。
