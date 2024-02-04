__NUXT_JSONP__("/article/coding/vue-nuxt-content-security-policy", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J){return {data:[{page:{slug:"vue-nuxt-content-security-policy",description:"被弱掃工具掃出前端專案有資安風險，之前因為知道前端資安這水很深阿，想說要處理起來會很難很麻煩",category:"coding",title:"Vue Nuxt 內容安全策略 CSP 資安設定",createdAt:y,updatedAt:y,toc:[{id:z,depth:2,text:A}],body:{type:"root",children:[{type:b,tag:s,props:{},children:[{type:a,value:"被弱掃工具掃出前端專案有資安風險，之前因為知道前端資安這水很深阿，想說要處理起來會很難很麻煩，但其實不會，一起來看看吧！"}]},{type:a,value:m},{type:b,tag:"h2",props:{id:z},children:[{type:b,tag:"a",props:{ariaHidden:B,href:"#nuxt-2-%E8%A8%AD%E5%AE%9A",tabIndex:-1},children:[{type:b,tag:c,props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:A}]},{type:a,value:m},{type:b,tag:s,props:{},children:[{type:a,value:"內容安全策略 Content-Security-Policy(CSP) 可用來防禦 XSS 攻擊，在 Nuxt 2 中的 "},{type:b,tag:i,props:{},children:[{type:a,value:"nuxt.config.js"}]},{type:a,value:" 確保 "},{type:b,tag:i,props:{},children:[{type:a,value:"target"}]},{type:a,value:" 值為 "},{type:b,tag:i,props:{},children:[{type:a,value:"server"}]},{type:a,value:"，然後在 "},{type:b,tag:i,props:{},children:[{type:a,value:C}]},{type:a,value:" 新增內容如下:"}]},{type:a,value:m},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-js","line-numbers"]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,D,E]},children:[{type:a,value:"export"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,D,E]},children:[{type:a,value:"default"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,u,j]},children:[{type:a,value:"render"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,u,j]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,u,j]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,"boolean"]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,u,j]},children:[{type:a,value:"policies"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,o,j]},children:[{type:a,value:"'default-src'"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"'*.your-domain.com'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"'stats.g.doubleclick.net'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,o,j]},children:[{type:a,value:"'img-src'"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"'www.w3.org'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"'data:'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,o,j]},children:[{type:a,value:"'style-src'"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"\"'unsafe-inline'\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,o,j]},children:[{type:a,value:"'script-src'"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"'www.googletagmanager.com'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,o,j]},children:[{type:a,value:"'frame-ancestors'"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:";"}]},{type:a,value:"\n\n"}]}]}]},{type:a,value:m},{type:b,tag:s,props:{},children:[{type:a,value:"這裡示範網站有使用第三方服務(ex: CDN、GA、...)的相關設定，將 "},{type:b,tag:i,props:{},children:[{type:a,value:"your-domain.com"}]},{type:a,value:" 替換成前端網站的 domain。"}]},{type:a,value:m},{type:b,tag:s,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:H}]},{type:a,value:" 設定為 "},{type:b,tag:i,props:{},children:[{type:a,value:I}]},{type:a,value:" 使不合規定的檔案忽略不載入，適合用在正式環境；設定為 "},{type:b,tag:i,props:{},children:[{type:a,value:B}]},{type:a,value:" 時檔案依然會載入，但會將資源載入警告列在 console log 內，用在測試環境 debug 用。"}]}]},dir:"\u002Fcoding",path:"\u002Fcoding\u002Fvue-nuxt-content-security-policy",extension:".md"}}],fetch:{},mutations:[]}}("text","element","span","token","punctuation"," ",",","string","code","property","operator",":","\n","\n        ","string-property","[","\"'self'\"","]","p","{","literal-property","}","\n      ","'www.google-analytics.com'","2024-02-04T00:00:00.000Z","nuxt-2-設定","Nuxt 2 設定","true","csp","keyword","module","\n  ","\n    ","reportOnly","false","'cdnjs.cloudflare.com'")));