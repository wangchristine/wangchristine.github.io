---
category: server
title: Linux 常用指令
createdAt: "2022-07-08"
updatedAt: "2023-08-14"
---

這裡列出一些 Linux 常用但又很容易會忘的指令(畢竟工程師要背的東西太多了XD)，列在這邊供平日查詢(陸續更新)。

## 取得當前路徑下所有 folder 內總檔案大小
```sh
du -sh *
```
du: Disk Usage

-s: --summarize

-h: --human-readable

## 查看 CPU 資訊
```sh
cat /proc/cpuinfo
```

## 磁碟使用狀況
```sh
df -h
```
會顯示各磁碟總容量(Size)、已使用容量(Used)、可用容量(Avail)...等大小的資訊。

## Linux 版本和作業系統
```sh
cat /proc/version
```
