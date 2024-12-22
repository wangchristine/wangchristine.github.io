---
category: coding
title: 在 Laravel/Lumen 使用 Service Repository 來分層設計架構
createdAt: "2022-07-14"
updatedAt: "2022-07-14"
---

在 Laravel/Lumen 優雅的框架下，為使程式的耦合度降低、降低維護成本，也為了將程式模組化以方便管理與重複利用，而引進 `Service` 和 `Repository` 這兩個概念，功能分別為：
```
Service: 只專注在商業邏輯
Repository: 只專注於操作 Model 
```

以下教學如何在 Laravel/Lumen 使用 `Service` 和 `Repository` 這兩個概念：

## 安裝套件
在 command line 中下以下指令安裝
```sh
$ composer require chhw/commander
```
* 使用 Laravel 框架基本上這樣就安裝完畢了，除非是 5.5 以下版本還要另外設定，就到官方套件查看說明。
* 使用 Lumen 框架則要再 `bootstrap/app.php` 檔案做以下設定:
  * 取消註解 `$app->withEloquent();`
  * 新增一行 `$app->register(CHHW\Commander\CommanderServiceProvider::class);`
  * 另外再自行複製 Laravel 框架中的 `config/database.php` 放置相同目錄內

## Service

在 command line 中下以下指令即可創建 `Service`
```sh
$ php artisan make:service UserService
```

## Repository

在 command line 中下以下其中一個指令即可創建 `Repository`
```bash
$ php artisan make:repository UserRepository
$ php artisan make:repository UserRepository --model=User
```
這兩個指令差別在於，下第二條指令可以在你已經有 `Model`，會在創建 `Repository` 時綁定所指定的 `Model` (推薦使用)。

## 好用 Methods

套件中有提供一些好用的 methods 預設在 `Repository` 中，像是可能會常用的 `all`、`create`、`paginate`...等，其他可用的 methods 可以在官方套件中找到。

## 範例

建立完 `Service` 和 `Repository` 後，在 `Service` 中依賴注入 `Repository` 後初始化，即可在 `Service` 中使用 `$this->userRepository` 來呼叫 `Repository` 自定義 function 或如上所述套件提供的 methods。

app/Services/UserService.php

```php
protected $userRepository;

public function __construct(UserRepository $repository)
{
    $this->userRepository = $repository;
}

public function getAll()
{
    return $this->userRepository->all();
}
```

## 結語

如果善用這兩個功能，你在開發上會容易許多，多人合作開發也較易拆分功能，程式也會跟框架一樣很優雅，別人之後維護這樣相同模式的開發也會容易許多。或許你會說，為什麼離職後還要考慮別人維護我 code 容不容易呢? 我相信你跳槽之後絕對不想碰別人的爛 code，所以，己所不欲勿施於人呀~ 
