---
category: coding
title: Voyager 升至 1.2 踩坑紀錄
description: "公司舊專案因資安問題需要做升級，有個專案使用 Voyager 1.1 版本，我需要一路往上升上去"
createdAt: "2023-03-17"
updatedAt: "2023-03-17"
---

公司舊專案因資安問題需要做升級，有個專案使用 Voyager 1.1 版本，我需要一路往上升上去，照著官方文件的步驟升級結果才升到 1.2，系統就各種噴錯，都是文件根本沒有提到的升版注意事項，本來我懶惰想直接丟這些錯誤訊息給谷歌大神，結果幾乎沒有相關說明，無奈之下本宮只好翻底層程式碼一個一個抓問題了，以下稍微紀錄一下要調整的部分:

## 1. 改用 voyager 提供介面替代
已不支援 `TCG\Voyager\Voyager::can()`, `TCG\Voyager\Voyager::canOrAbort()`, `TCG\Voyager\Voyager::canOrFail()` 相關語法，改用 `Auth::user()->hasPermission()`

<markdown-img src="articles/record-of-upgrading-voyager-version-to-1.2-1.jpg"></markdown-img>

## 2. 原方法已被改寫，不使用

<markdown-img src="articles/record-of-upgrading-voyager-version-to-1.2-2.jpg"></markdown-img>

## 3. 自行複製 voyager 同檔名檔案

<markdown-img src="articles/record-of-upgrading-voyager-version-to-1.2-3.jpg"></markdown-img>

## 4. Media Page 內容無法顯示
在以下各檔案做調整:
```php
// config/filesystems.php 

return [
    'disks' => [
        'voyager' => [
            'driver' => 'local',
            'root' => public_path('storage'),
            'url' => env('APP_URL').'/storage',
            'visibility' => 'public',
        ],
    ],
];

// config/voyager.php
return [
    // ...
    'storage' => [
        'disk' => 'voyager',
    ],
    'media' => [
        // ...
        'path'                => '',
    ],
];

// resources/views/vendor/voyager/master.blade.php
<meta name="assets-path" content="{{ route('voyager.voyager_assets') }}"/>
// ...
@include('voyager::media.manager')
```

<markdown-img src="articles/record-of-upgrading-voyager-version-to-1.2-4.jpg"></markdown-img>

## 5. 套件已自行處理 json_decode

<markdown-img src="articles/record-of-upgrading-voyager-version-to-1.2-5.jpg"></markdown-img>

## 6. 側邊攔錯誤訊息
`resources/views/vendor/voyager/dashboard/sidebar.blade.php`
原寫法
```php
{!! menu('admin', 'admin_menu') !!}
```
改為
```php
<div id="adminmenu">
    <admin-menu :items="{{ menu('admin', '_json') }}"></admin-menu>
</div>
```

<markdown-img src="articles/record-of-upgrading-voyager-version-to-1.2-6.jpg"></markdown-img>

## 7. 已移除 $searchable
將 `$searchable` 改為 `$searchNames`

<markdown-img src="articles/record-of-upgrading-voyager-version-to-1.2-7.jpg"></markdown-img>

## 8. sortByUrl() 參數必填
將 `{{ $row->sortByUrl() }}` 改為 `{{ $row->sortByUrl($row->field, 'asc') }}`

<markdown-img src="articles/record-of-upgrading-voyager-version-to-1.2-8.jpg"></markdown-img>

## 9. isCurrentSortField() 參數必填
將 `$row->isCurrentSortField()` 改為 `$row->isCurrentSortField('')`

<markdown-img src="articles/record-of-upgrading-voyager-version-to-1.2-9.jpg"></markdown-img>
