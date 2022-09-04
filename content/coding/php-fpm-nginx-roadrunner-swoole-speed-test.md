---
category: coding
title: PHP-FPM 搭配 Nginx vs Roadrunner vs Swoole 速度實驗
description: '這次實驗是出於好奇心，想要比較看看 PHP-FPM 搭配 Nginx 和 Roadrunner 和 Swoole 在相同的程式碼、執行環境下'
createdAt: '2022-09-04'
updatedAt: '2022-09-04'
---

這次實驗是出於好奇心，想要比較看看 PHP-FPM 搭配 Nginx 和 Roadrunner 和 Swoole 在相同的程式碼、執行環境下，速度的表現是如何。這邊使用 serialize() 序列化作測試函數一百萬次，然後三種架設的最大連接數都設為 3000，Request 數量分別使用 1、20、100、1000、4000 次去做測試，看下圖:

<markdown-img src="articles/php-fpm-nginx-roadrunner-swoole-speed-test-1.png" alt="Image"></markdown-img>

我在 Roadrunner 和 Swoole 環境下都分別使用 1、2、8 workers 去執行，如上圖可以發現，在 Request 數少的時候，執行速度由 PHP-FPM 搭配 Nginx 和 Swoole 環境下最快，而且 Request 數越來越多且 workers 開啟的數量適當時，Swoole 能夠 100% 且快速的回應大量的成功 Response，這效能真猛阿！

## 結語
Roadrunner 在我本次測驗的成果並沒有我預期的這麼好，不確定是不是我的測試環境影響。總之，這次實驗我對 Swoole 相當滿意，我自己是如果之後有機會碰到有高併發需求的專案，就會優先使用 Swoole 來架設啦！
