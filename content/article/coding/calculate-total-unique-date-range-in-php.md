---
category: coding
title: "在 PHP 中計算不重複的日期區間加總"
description: "有一組不固定長度的 array，裡面包含了工作經歷的起訖日期"
createdAt: "2024-11-03"
updatedAt: "2024-11-03"
---

有一組不固定長度的 array，裡面包含了工作經歷的起訖日期，例如:

```php
$workExps = [
    ['startDate' => '2020/01', 'endDate' => '2023/02'], ['startDate' => '2024/06', 'endDate' => '2024/07'],
];
// or
$workExps = [
    ['startDate' => '2020/01', 'endDate' => '2022/08'], ['startDate' => '2021/05', 'endDate' => '2023/05'],
    ['startDate' => '2020/01', 'endDate' => '2022/08'], ['startDate' => '2021/05', 'endDate' => '2023/05'],
];
```
需要去計算工作日期的區間總合，且不能計算重複的日期，回傳一個 array 包含計算後的年和月。

## 範例

```php
$totalMonths = 0;
$periods = [];

foreach ($workExps as $workExp) {
    $start = Carbon::createFromFormat('Y/m', $workExp['startDate'])->startOfMonth();
    $end = Carbon::createFromFormat('Y/m', $workExp['endDate'])->startOfMonth();
    $newPeriod = CarbonPeriod::create($start, $end);
    $overlap = false;
    foreach ($periods as $index => $period) {
        if ($newPeriod->overlaps($period)) {
            $periods[$index] = CarbonPeriod::create(
                min($period->getStartDate(), $newPeriod->getStartDate()),
                max($period->getEndDate(), $newPeriod->getEndDate())
            );
            $overlap = true;
            break;
        }
    }
    if (!$overlap) {
        $periods[] = $newPeriod;
    }
}
foreach ($periods as $period) {
    $start = $period->getStartDate();
    $end = $period->getEndDate();
    $totalMonths += $start->diffInMonths($end);
}
$resumeData['seniority'] = [(int) floor($totalMonths / 12), $totalMonths % 12];
```
