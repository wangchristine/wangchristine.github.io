---
category: coding
title: Javascript 正則表達式 Regular Expression 詳細範例用法
description: '每次要用正則表達式 Regular Expression 的時候，很容易忘記它的規則，因為英文我看的比較習慣且解釋的很精確'
---

每次要用正則表達式 Regular Expression 的時候，很容易忘記它的規則，因為英文我看的比較習慣且解釋的很精確，所以以下就用英文說明在 Javascript 中詳細範例用法：

## 文字:

| 用法 | 說明 | 範例
| -------- | -------- | --------
| . | Any character except newline. |
| \w | Word. Alphanumeric & Underscore | Equivalent to [A-Za-z0-9_]
| \d | Digit. 0-9 |
| \s | Whitespace. Spaces & Tabs & Line breaks |
| \W \D \S | Reverse \w, \d, \s |
| [abc] | Match any character in the set. | any of a, b, c
| [^abc] | Match any character that is not in the set. | not a, b, or c
| [a-z] | Matches a character having a character code between the two specified characters inclusive. | character between a & z

## 位置:

| 用法 | 說明 | 範例
| -------- | -------- | --------
| ^abc$ | Matches start / end of the string. |
| \b \B | Word, not-word boundary | /s\b/g => she ha<b>s</b> many sister<b>s</b>

## 跳脫字元:

| 用法 | 說明 | 範例
| -------- | -------- | --------
| \ | Escaped special characters, including: +*?^$\\.[]{}()&#124;/ <br /> Within a character set, only \, -, and ] need to be escaped. | \\. \\* \\\
| \t \n \r | Tab, linefeed, carriage return |

## 群組:

| 用法 | 說明 | 範例
| -------- | -------- | --------
| (abc) | Capture group | /(https?):\\/\\/([^\r\n]+)/g => <b><span>https://</span>google.com/</b> <br /> Group 1: "https:" <br /> Group 2: "google.com/"
| (?:abc) | Non-capturing group | /(?:https?):\\/\\/([^\r\n]+)/g => <b><span>https://</span>google.com/</b> <br /> Group 1: "google.com/"
| x(?=abc) | Positive lookahead. Matches only if followed by condition and without including it in the result. | /x(?=abc)/g => <b>x</b>abc
| x(?!abc) | Negative lookahead. Matches only if not followed by condition and without including it in the result. | /x(?!abc)/g => <b>x</b>def

## 數量:

| 用法 | 說明 | 範例
| -------- | -------- | --------
| a* a+ a? | 0 or more, 1 or more, 0 or 1 |
| a{5} a{2,} a{1,3} | Matches the specified quantity. | Exactly five, two or more, between one & three
| a+? a{2,}? | ? after *+?{} will match as few as possible. | /\d+/ => <b>123</b> <br /> /\d+?/ => <b>1</b>23  
| ab&#124;cd | Acts like a boolean OR. | match ab or cd

<br />

## Flags:

最後來介紹 flags，語法:
```
/pattern/flags
```

| 用法 | 說明
| -------- | --------
| (nothing) | Return first matches.
| g | Global search.
| i | Case-insensitive search.
| m | Multi-line search.
| u | Use unicode.

## 常用範例:

1. 驗證為 youtube 連結
* 條件1: 需為 `https://www.youtube.com/watch?` 或 `https://youtu.be/` 開頭，前方`www`可有可無
* 條件2: 後方需要至少一字元的任何值 

```
/^https:\/\/(?:www\.)?(?:youtu\.be\/|youtube\.com\/watch\?).+$/g
```

2. 驗證密碼格式
* 條件1: 長度8-16位
* 條件2: 至少需要一個數字及一個英文。數字：0 到 9(10個字元)；英文不限大小寫: A 到 Z, a 到 z)
* 條件3: 僅接受 數字/英文/特殊符號
* 條件4: 符號： !" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~ (32個字元)
* 條件5: 不接受其他格式如空格及其他語言(中文/日文...等)

```
/^(?=.*[0-9])(?=.*[A-Z])([A-Z0-9\w\!"#$%&\'()*+,-.\/:;<=>?@[\]^_`{|}~\\]){8,16}$/g
```
