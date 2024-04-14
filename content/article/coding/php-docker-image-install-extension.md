---
category: coding
title: 使用 PHP Docker image 安裝 PHP 擴展
description: '以下介紹使用 PHP Docker image 安裝 PHP 擴展的方式，以及可以使用此方法安裝的擴展'
createdAt: '2022-07-05'
updatedAt: '2022-07-05'
---

以下介紹使用 PHP Docker image 安裝 PHP 擴展的方式，以及可以使用此方法安裝的擴展：

## docker-php-ext-install

安裝並自動調用 docker-php-ext-enable 來啟動 PHP 擴展

| 可使用擴展
| --------
| bcmath
| bz2
| calendar
| ctype
| curl
| dba
| dom
| enchant
| exif
| fileinfo
| filter
| ftp
| gd
| gettext
| gmp
| hash
| iconv
| imap
| interbase
| intl
| json
| ldap
| mbstring
| mcrypt
| mysqli
| oci8
| odbc
| opcache
| pcntl
| pdo
| pdo_dblib
| pdo_firebird
| pdo_mysql
| pdo_oci
| pdo_odbc
| pdo_pgsql
| pdo_sqlite
| pgsql
| phar
| posix
| pspell
| readline
| recode
| reflection
| session
| shmop
| simplexml
| snmp
| soap
| sockets
| spl
| standard
| sysvmsg
| sysvsem
| sysvshm
| tidy
| tokenizer
| wddx
| xml
| xmlreader
| xmlrpc
| xmlwriter
| xsl
| zip

## docker-php-ext-enable

使用 pecl 安裝 PHP 擴展時默認是沒有啟動這個擴展，此指令則是自動幫我們來啟動 PHP 擴展，而不需手動去 php.ini 裡啟動。
