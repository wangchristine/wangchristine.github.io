---
category: coding
title: 解決在 Laravel 使用 PHPUnit + SQLite 的 RefreshDatabase 失敗問題
description: '之前在做單元測試需要用到 RefreshDatabase 的時候，專案內部分的 migration 會讓 SQLite 噴錯無法順利執行'
createdAt: '2024-05-10'
updatedAt: '2024-05-10'
---

之前在做單元測試需要用到 RefreshDatabase 的時候，專案內部分的 migration 會讓 SQLite 噴錯無法順利執行，以下紀錄解決方法:

## 1. SQLite 無法使用 drop foreign key

`database/migrations/xxx.php`:
```php
Schema::table('users', function(Blueprint $table) {
    // ...
    $table->dropForeign(['role_id']);
});

```

錯誤訊息:
```
BadMethodCallException: SQLite doesn't support dropping foreign keys (you would need to re-create the table).
```

解法參考: [GitHub Laravel Issue](https://github.com/laravel/framework/issues/25475){target="_blank"}

`tests/TestCase.php`:
```php
<?php

namespace Tests;

use Closure;
use Illuminate\Database\Connection;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\SQLiteBuilder;
use Illuminate\Database\SQLiteConnection;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;
    use RefreshDatabase;

    public function __construct()
    {
        parent::__construct();
        $this->withoutForeign();
    }

    private function withoutForeign()
    {
        Connection::resolverFor('sqlite', function ($connection, $database, $prefix, $config) {
            return new class($connection, $database, $prefix, $config) extends SQLiteConnection
            {
                public function getSchemaBuilder()
                {
                    if ($this->schemaGrammar === null) {
                        $this->useDefaultSchemaGrammar();
                    }
                    return new class($this) extends SQLiteBuilder
                    {
                        protected function createBlueprint($table, Closure $callback = null)
                        {
                            return new class($table, $callback) extends Blueprint
                            {
                                public function dropForeign($index)
                                {
                                }
                            };
                        }
                    };
                }
            };
        });
    }
}

```

## 2. 在 SQLite 顯示無法 dropColumn

`database/migrations/xxx.php`:
```php
Schema::table('users', function(Blueprint $table) {
    // ...
    $table->dropColumn('description');
    $table->dropColumn('deleted_at');
});

```

錯誤訊息:
```
BadMethodCallException: SQLite doesn't support multiple calls to dropColumn / renameColumn in a single modification.
```

解法:
將 migration 改為如下:
```php
Schema::table('users', function(Blueprint $table) {
    // ...
    $table->dropColumn(['description', 'deleted_at']);
});

```
