---
category: coding
title: "在 Laravel 中簡單快速的 debug 方法"
description: "簡單記錄一下之前 debug 的方式"
createdAt: "2024-05-14"
updatedAt: "2024-05-14"
---

簡單記錄一下之前 debug 的方式。

## 在程式中排查

`dd()`、`dump()`

## 程式執行過慢

```php
$start = microtime(true);
// your code...
$end = microtime(true);
$execution = $end - $start;
Log::info("Execution time: $execution");
```

## 印出 Query

```php
\DB::connection()->enableQueryLog();
// your code...
$queries = \DB::getQueryLog();
dd($queries)
```
