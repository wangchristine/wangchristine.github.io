---
category: coding
title: PHP Laravel + Swoole 初體驗
description: '繼上次的 PHP Laravel + RoadRunner 初體驗初次玩了 RoadRunner 的架設之後，今天就來體驗一下'
createdAt: '2022-09-01'
updatedAt: '2022-09-01'
---

繼上次的 [PHP Laravel + RoadRunner 初體驗](https://wangchristine.github.io/article/coding/php-laravel-roadrunner-first-experience) 初次玩了 RoadRunner 的架設之後，今天就來體驗一下號稱高性能、加快速度的 Swoole 吧!

## 環境

1. Docker: 主要使用 Swoole 官方提供的 image，PHP 擴充記得安裝 `sockets`，其他像是 PHP 的 image 版本和相關執行指令看個人專案去安裝。
    ```dockerfile
    FROM phpswoole/swoole:php8.0-alpine
    ```
2. Laravel
   * Composer 裝這個: `swooletw/laravel-swoole`
   * 產生套件設定檔(`swoole_http.php` and `swoole_websocket.php`):
    ```
    php artisan vendor:publish --tag=laravel-swoole
    ```

## 設定

這次我們主要先玩 `swoole_http.php` 設定檔，可以看到這設定檔滿滿的註解，很貼心的跟我們說每一行主要的用途，想了解細部的解釋可以看[官方文件](https://github.com/swooletw/laravel-swoole/wiki/5.-Configuration)。

基本上到這邊就設定完畢了，但因為我要測試所以在 `.env` 做覆蓋設定:
```
SWOOLE_HTTP_HOST=0.0.0.0
SWOOLE_HTTP_REACTOR_NUM=1
SWOOLE_HTTP_WORKER_NUM=1
SWOOLE_HOT_RELOAD_ENABLE=true
SWOOLE_OB_OUTPUT=false
```

## 執行
執行 `php artisan swoole:http start` 就可以啟動專案囉！

## 小測試
使用 serialize() 序列化作測試函數，分別用 FPM 和 Swoole 各做一百萬和五百萬次的測試，如下圖所示，Request 也分別用 1 和 3 來測試執行的時間：
<markdown-img src="articles/php-laravel-swoole-first-experience-1.png"></markdown-img>
看到沒有! 由上圖資訊完全可以看出差異，不管是在 Request 數為 1 或 3 時，表現都比 FPM 速度來的優異，快了好幾倍! 可見 Swoole 的速度真的不是浪得虛名。這邊測試的環境皆為 1 CPU，兩者的 work_processes 皆為 1。

## 結語
這次體驗 Swoole 的速度真的讓我大吃一驚，差點覺得是不是設定改錯了(笑)。雖然這次實驗 Swoole 是直接當它為 Http Server，不過它並不能完全取代 Nginx，畢竟 Swoole 能夠大大提升 PHP 的速度，但 Nginx 能夠更優異的處理靜態檔案等，兩者搭配起來才能各自發揮優勢，下次有空再找時間玩看看兩者搭配的效能如何好了XD
