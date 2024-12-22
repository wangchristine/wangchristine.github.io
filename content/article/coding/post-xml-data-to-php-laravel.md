---
category: coding
title: PHP Laravel 讀取 XML 格式資料
createdAt: "2022-12-07"
updatedAt: "2022-12-07"
---

這邊紀錄一下如何用 PHP Laravel 讀取一串 XML 格式的資料，如下圖所示:

<markdown-img src="articles/post_xml_data_to_php_laravel-1.jpg"></markdown-img>

在 `Body` 中選擇 `XML` 格式後，內容貼上 XML 格式的資料，最後 PHP 語法如下:

```php
public function getXml(Request $request)
{
    $data = simplexml_load_string($request->getContent());
    $data = json_decode(json_encode($data), true);
    dd($data);
}
```

即可拿到 array 的格式資料。
