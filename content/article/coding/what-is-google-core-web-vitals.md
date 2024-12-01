---
category: coding
title: 網站體驗核心指標(Core Web Vitals) 是什麼呢
description: "網站體驗核心指標(Core Web Vitals) 包含 Google 最在意的幾個核心的網頁性能指標，像是"
createdAt: "2023-01-04"
updatedAt: "2023-01-04"
---

網站體驗核心指標(Core Web Vitals) 包含 Google 最在意的幾個核心的網頁性能指標，像是 LCP、FID、CLS 等，這幾個核心的性能指標對於網站的 SEO 關鍵字排名的影響非常大，也同時反應出使用者的用戶體驗，以下就專門針對這三個指標來說明：

<markdown-img src="articles/what-is-google-core-web-vitals-1.png" name="Core Web Vitals" origin-link="https://web.dev/vitals/"></markdown-img>

## 最大內容繪製 LCP (Largest Contentful Paint)

在使用者打開網頁的第一個畫面所顯示「最大元素」所需的載入時間，可反應網站的速度。最佳為 2.5 秒以內。

優化方式: 減少伺服器的反應時間、優化網頁資源(ex: image、JavaScript、CSS) 的載入狀況與時間。

## 首次輸入延遲 FID (First Input Delay)

在使用者第一次對網站的物件互動時，網站花了多少時間去產生相對應的反應時間，而這個互動是僅算「單次互動」例如點擊...等。最佳為 100毫秒(0.1秒)以內。

優化方式: 減少網站載入一些未使用的資源、能用 CSS 就用來減少 Javascript 執行時間。

## 累計版面配置轉移 CLS (Cumulative Layout Shift)

當使用者想要點擊網頁上的某物件時，可能會因為網站加載未完成而導致版面發生位移，使用者就點不到預期的物件，使用者體驗就很糟糕。最佳分數為 0.1 以內。至於這個分數是怎麼計算的就參考[官方文件](https://web.dev/i18n/en/cls/){target="_blank"}。

優化方式: 可先設定外部嵌入資源尺寸、需載入時間的元素先設定尺寸固定。
