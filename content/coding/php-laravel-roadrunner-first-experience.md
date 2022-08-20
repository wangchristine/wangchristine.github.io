---
category: coding
title: PHP Laravel + RoadRunner 初體驗
description: '最近準備接手一個用 RoadRunner 架設的專案，之前沒接觸過這工具，在接專案前就先自己架設一個新專案'
createdAt: '2022-08-20'
updatedAt: '2022-08-20'
---

最近準備接手一個用 RoadRunner 架設的專案，之前沒接觸過這工具，在接專案前就先自己架設一個新專案體驗看看吧！

## 環境

1. Docker: 主要要引入 RoadRunner 執行指令，PHP 的 image 版本和相關執行指令看個人專案去安裝。
```dockerfile
FROM ghcr.io/roadrunner-server/roadrunner:latest AS roadrunner
FROM php:8.1-cli

COPY --from=roadrunner /usr/bin/rr /usr/local/bin/rr
```

2. Laravel 
   * Composer 裝這三個:
      `nyholm/psr7`, `spiral/roadrunner`, `spiral/roadrunner-laravel`
   * 產生套件設定檔:
     ```shell
     php ./artisan vendor:publish --provider='Spiral\RoadRunnerLaravel\ServiceProvider' --tag=config
     ```

## 設定

RoadRunner 有兩個地方很重要需要做設定，一個是執行的入口點，另一個是 `.rr.yaml` 參數設定檔。

首先執行入口點因為我們專案是用 PHP Laravel 框架，剛剛已經安裝了相關套件，所以不需要另外做設定。若是使用純 PHP 那就需要在專案根目錄下新建 `worker.php`，內容大致如下(請根據專案需求、使用的框架做調整):
```php
<?php

use Spiral\RoadRunner;
use Nyholm\Psr7;

include "vendor/autoload.php";

$worker = RoadRunner\Worker::create();
$psrFactory = new Psr7\Factory\Psr17Factory();

$worker = new RoadRunner\Http\PSR7Worker($worker, $psrFactory, $psrFactory, $psrFactory);

while ($req = $worker->waitRequest()) {
    try {
        $rsp = $psrFactory->createResponse();
        $rsp->getBody()->write('Hello world! Bello!');

        $worker->respond($rsp);
    } catch (\Throwable $e) {
        $worker->getWorker()->error((string)$e);
    }
}
```

再來是 `.rr.yaml` 參數設定檔，[官方文件](https://github.com/roadrunner-server/roadrunner/blob/master/.rr.yaml)有非常多的參數可用，下例陳列部分參數用法:
```yaml
version: '2.7'

rpc:
  listen: tcp://127.0.0.1:6001

server:
  command: "php ./vendor/bin/rr-worker start --relay-dsn unix:///var/run/rr-relay.sock"
  relay: "unix:///var/run/rr-relay.sock"

http:
  address: 0.0.0.0:8080
  middleware: ["static", "headers", "gzip"]
  pool:
    max_jobs: 64
    supervisor:
      exec_ttl: 60s
  headers:
    response:
      X-Powered-By: "RoadRunner"
  static:
    dir: "public"
    forbid: [".php"]

```

## 執行
以上設定完後，下 `rr serve -c ./.rr.yaml` 就可以啟動專案囉！

## 小測試
使用 `serialize()` 序列化作測試函數，分別用 FPM 和 RoadRunner 各做一百萬和五百萬次的測試，如下圖所示，Request 也分別用 1 和 3 來測試執行的時間：
<markdown-img src="articles/php-laravel-roadrunner-first-experience-1.png" alt="Image"></markdown-img>
由上圖可發現，在一百萬次的 FPM 和 RoadRunner 表現效果差不多，Request 數為 3 時開始有些微的時間差距；在五百萬次的 FPM 和 RoadRunner 表現效果越來越明顯，再加上Request 數為 3 時，我把 RoadRunner 的 worker 提高成 2 個，速度就比 FPM 快一些。這邊測試的環境皆為 1 CPU，兩者的 work_processes 皆為 1。 

## 結語
初體驗 RoadRunner 的確速度上快於 FPM，即便沒有額外調整設定也是快於 FPM，不過 FPM 和 RoadRunner 各有優缺點，要根據專案的需求決定要採用哪個工具。RoadRunner 畢竟社群還不夠廣且對大家的熟悉度不高，而目前業界普遍使用 FPM 偏高，期待 RoadRunner 官方能提供更多功能且更完善的文件方便各位工程師們使用！

## 參考文件
* https://roadrunner.dev/docs/intro-install/2.x/en
* https://github.com/roadrunner-server/roadrunner/blob/master/.rr.yaml
* https://github.com/spiral/roadrunner-laravel
