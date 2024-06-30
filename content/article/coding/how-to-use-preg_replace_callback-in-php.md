---
category: coding
title: php preg_replace_callback 客製替換文字用法
description: '之前有個需求要將輸入的文字轉成客製想要的文字後回傳，此例也很難用一般的 preg_replace 做到'
createdAt: '2024-06-30'
updatedAt: '2024-06-30'
---

之前有個需求要將輸入的文字轉成客製想要的文字後回傳，此例也很難用一般的 preg_replace 做到，需求:

- 字串前兩個字母為英文大寫
- 第三位開始後面可能有長度小於 4 但想要用 0 補滿 4 位數字
- 最後一位可能有字母也可能沒有，有的話想要轉大寫

即當輸入為 AA1D、AA01d、AA001D、...等輸出結果為 AA0001D。

## 範例
```php
$data = "AA01";

$result = preg_replace_callback('/^([A-Z]{2})(\d*)([A-Za-z]?)$/', function ($matches) {
    $prefix = $matches[1];
    $numberPart = str_pad($matches[2], 4, "0", STR_PAD_LEFT);
    $lastChar = strtoupper($matches[3]);
    return $prefix . $numberPart . $lastChar;
}, $data);

echo $result;
```

輸出結果為: AA0001
