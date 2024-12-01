---
category: coding
title: "Vue Nuxt 內容安全策略 CSP 資安設定"
description: "被弱掃工具掃出前端專案有資安風險，之前因為知道前端資安這水很深阿，想說要處理起來會很難很麻煩"
createdAt: "2024-02-04"
updatedAt: "2024-02-04"
---

被弱掃工具掃出前端專案有資安風險，之前因為知道前端資安這水很深阿，想說要處理起來會很難很麻煩，但其實不會，一起來看看吧！

## Nuxt 2 設定

內容安全策略 Content-Security-Policy(CSP) 可用來防禦 XSS 攻擊，在 Nuxt 2 中的 `nuxt.config.js` 確保 `target` 值為 `server`，然後在 `csp` 新增內容如下:

```js
export default {
  render: {
    csp: {
      reportOnly: false,
      policies: {
        'default-src': ["'self'", 'cdnjs.cloudflare.com', '*.your-domain.com', 'www.google-analytics.com', 'stats.g.doubleclick.net'],
        'img-src': ["'self'", 'www.w3.org', 'data:', 'www.google-analytics.com'],
        'style-src': ["'self'", 'cdnjs.cloudflare.com', "'unsafe-inline'"],
        'script-src': ["'self'", 'www.google-analytics.com', 'www.googletagmanager.com'],
        'frame-ancestors': ["'self'"],
      }
    }
  },
};

```
這裡示範網站有使用第三方服務(ex: CDN、GA、...)的相關設定，將 `your-domain.com` 替換成前端網站的 domain。

`reportOnly` 設定為 `false` 使不合規定的檔案忽略不載入，適合用在正式環境；設定為 `true` 時檔案依然會載入，但會將資源載入警告列在 console log 內，用在測試環境 debug 用。
