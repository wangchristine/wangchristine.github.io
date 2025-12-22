---
category: coding
title: "在 Laravel 中簡單快速的 debug 方法"
createdAt: "2024-05-14"
updatedAt: "2025-12-22"
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

## 觀察本次 Request 消耗的資源

分別印出記憶體使用量、記憶體使用峰值、CPU 使用時間(s)
```php
$startMemory = memory_get_usage();
$cpuStart = getrusage();
// your code...
$endMemory = memory_get_usage();
$peakMemory = memory_get_peak_usage();
$cpuEnd = getrusage();
dd("Memory: " . (($endMemory - $startMemory) / 1024 / 1024) .
    "MB。 Peak Memory: " . ($peakMemory / 1024 / 1024) . "MB。 CPU: " . (($cpuEnd['ru_utime.tv_sec'] - $cpuStart['ru_utime.tv_sec']) +
        ($cpuEnd['ru_utime.tv_usec'] - $cpuStart['ru_utime.tv_usec']) / 1000000));
```
