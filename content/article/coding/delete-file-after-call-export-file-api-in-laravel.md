---
category: coding
title: 在 Laravel 中下載檔案 api 送出後刪除檔案
description: '專案有兩隻 API 是去產生 zip 檔後，分別為寄送信件和回傳檔案給前端'
createdAt: '2024-07-04'
updatedAt: '2024-07-04'
---

專案有兩隻 API 是去產生 zip 檔後，分別為寄送信件和回傳檔案給前端，寄送信件 API 有特別定義 Response 格式，因這兩隻產生檔案採共用 function 會產生檔案後放在 `storage/app` 內，但回傳檔案 API 本來我只想就回傳檔案就好不想真的存一份檔案在伺服器上，所以有套件是可以直接做一個串流回傳 zip 檔的，像是:

[https://github.com/maennchen/ZipStream-PHP](https://github.com/maennchen/ZipStream-PHP)

但因為寫法共用的關係(我就懶)會讓寄送信件 API Response 會變成串流資料，所以這套件暫時不適合我的專案，那只好將檔案存放在伺服器上了，接下來要解決的是如何在回傳檔案 API 後刪除檔案，用排程定時刪嗎? 好像不太好，可能會將同時間進來的 Request 做好的檔案刪掉，有沒有比較好的方式呢，在早期官方文件(新版文件沒有)有提到這樣的功能:

```php
public function download(ExportValidation $request)
{
    // 將檔案儲存在 storage/app ...
    $response = response()->download(storage_path('app') . '/' . $zipName . '.zip');
    return $response->deleteFileAfterSend(true);
}
```

這樣子可以直接回傳檔案後直接刪除，不需要排程另外刪囉！
