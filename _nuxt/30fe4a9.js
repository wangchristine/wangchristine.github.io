(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{193:function(t,e,n){"use strict";var o=n(0),r=n(271),c=n.n(r),l=n(272),f=n.n(l);o.default.use(c.a,{locale:f.a})},232:function(t,e,n){var content=n(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("4b84c9ae",content,!0,{sourceMap:!1})},234:function(t,e,n){var content=n(353);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("56b15182",content,!0,{sourceMap:!1})},268:function(t){t.exports=JSON.parse('[{"routeName":"coding","name":"Backend & Frontend"},{"routeName":"server","name":"Server"},{"routeName":"drama","name":"Drama"},{"routeName":"experience","name":"Experience"}]')},269:function(t){t.exports=JSON.parse('[{"id":1,"name":"小劉便當","foods":[{"name":"蝦排飯","image":"foods/20210201.jpg","star":3.5,"price":null,"createdAt":"2021-02-01","description":"還不錯，炸蝦造型可愛。"}]},{"id":2,"name":"蔡老師","foods":[{"name":"金瓜米粉+椒麻炸豆包","image":"foods/20210604.jpg","star":2.8,"price":null,"createdAt":"2021-06-04","description":"豆皮上面的醬辣，米粉味道清淡。"},{"name":"日式牛蒡菌菇炊飯","image":"foods/20210809.jpg","star":2.5,"price":null,"createdAt":"2021-08-09","description":"個人不太喜歡這種牛蒡，飯偏硬。(橘子非便當提供)"}]}]')},275:function(t,e,n){"use strict";var o={name:"LayoutDefault",computed:{categories:function(){return this.$store.getters.getCategories}}},r=(n(352),n(61)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-header",[n("div",{staticClass:"container"},[n("NuxtLink",{staticClass:"brand-title",attrs:{to:{name:"index"}}},[t._v("Chris 主頁")]),t._v(" "),n("nav",{staticClass:"navigation-link"},[t._l(t.categories,(function(e,o){return n("NuxtLink",{key:o,attrs:{to:{name:"article-category",params:{category:e.routeName}}}},[t._v(t._s(e.name))])})),t._v(" "),n("NuxtLink",{attrs:{to:{name:"food"}}},[t._v("Food")])],2)],1)]),t._v(" "),n("el-main",[n("Nuxt")],1),t._v(" "),n("el-footer",[t._v("\n    Copyright © 2022 Chris Wang\n    "),n("br"),t._v("\n    本網站為個人使用，參考\n    "),n("a",{attrs:{href:"https://www.facebook.com/TIPO.gov.tw/posts/1804286156280593/"}},[t._v("經濟部智慧財產局")]),t._v("，有使用到的網路圖片來源在\n    "),n("NuxtLink",{attrs:{to:{name:"ImageOrigin"}}},[t._v("此連結")])],1)],1)}),[],!1,null,null,null);e.a=component.exports},279:function(t,e,n){t.exports=n.p+"img/minion-find-the-way.d76c50c.jpg"},280:function(t,e,n){var content=n(349);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("02097838",content,!0,{sourceMap:!1})},281:function(t,e,n){n(282),t.exports=n(283)},341:function(t,e,n){"use strict";n(232)},342:function(t,e,n){var o=n(59)(!1);o.push([t.i,".content-block[data-v-345fa7a2]{display:flex;flex-direction:column;max-width:1440px;margin:0 auto}.error-code[data-v-345fa7a2]{font-size:40px;letter-spacing:10px;padding:20px 0}.error-code[data-v-345fa7a2],.error-message[data-v-345fa7a2]{flex-basis:100%;margin:auto}.error-message[data-v-345fa7a2]{font-size:20px;letter-spacing:5px}.redirect[data-v-345fa7a2]{flex-basis:100%;margin:auto;padding:30px}.redirect a[data-v-345fa7a2]{color:#983a2a;font-weight:700;text-decoration:underline}.image[data-v-345fa7a2]{flex-basis:100%;margin:auto}.image img[data-v-345fa7a2]{width:400px}",""]),t.exports=o},349:function(t,e,n){var o=n(59)(!1);o.push([t.i,".nuxt-content h2{margin:1em 0}.nuxt-content h2:not(:first-of-type){padding-top:10px}.nuxt-content ol,.nuxt-content p,.nuxt-content ul{line-height:30px}.nuxt-content :not(pre)>code,.nuxt-content pre[class*=language-]{font-size:16px;background:#efe2d9}.nuxt-content :not(pre)>code{padding:4px;color:#c1622b}.nuxt-content table{display:block;width:100%;overflow:auto}.nuxt-content table td,.nuxt-content table th{padding:6px 13px;border:1px solid #c77a7a}.nuxt-content b{background-color:#c9989a}.nuxt-content .token.operator{background-color:transparent}.nuxt-content .token.variable{color:#d98b00}",""]),t.exports=o},352:function(t,e,n){"use strict";n(234)},353:function(t,e,n){var o=n(59)(!1);o.push([t.i,'body{margin:0;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"}h2{font-size:20px}.el-container{min-height:100vh}.el-header{background-color:#943d24;line-height:60px}.el-header .container{max-width:1200px;margin:0 auto}.brand-title{border:0;padding:8px;font-weight:700;letter-spacing:1px;color:#fffbf0;font-size:18px;text-decoration:none}.navigation-link{display:inline-block}.navigation-link a{margin-left:30px;text-decoration:none;font-weight:700;color:#fffbf0;font-size:18px}.el-footer{background-color:#943d24;color:#fffbf0;text-align:center;line-height:20px;padding:10px}.el-footer a{text-decoration:none;font-weight:700;color:#3e9bed}.el-main{background-color:#fffbf0;color:#333;letter-spacing:.5px}',""]),t.exports=o},354:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return d})),n.d(e,"actions",(function(){return m})),n.d(e,"mutations",(function(){return x})),n.d(e,"getters",(function(){return v}));n(41),n(33),n(39),n(14),n(75),n(34),n(76);var o=n(24),r=n(9),c=(n(355),n(359),n(361),n(40),n(28),n(48),n(268)),l=n(269);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d=function(){return{categories:[],allArticles:[],foods:[]}},m={nuxtServerInit:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function n(){var o,r,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.commit,r=e.$content,o("setCategories",c),n.next=5,r({deep:!0}).sortBy("updatedAt","desc").fetch();case 5:l=n.sent,o("setAllArticles",l);case 7:case"end":return n.stop()}}),n)})))()},setCategories:function(t,e){(0,t.commit)("setCategories",e)},setFoods:function(t){(0,t.commit)("setFoods",l)}},x={setAllArticles:function(t,e){t.allArticles=e},setCategories:function(t,e){t.categories=e},setFoods:function(t,e){t.foods=e}},v={getAllArticles:function(t){return t.allArticles},getCategories:function(t){return t.categories},getFoods:function(t){return t.foods.map((function(t){return t.foods.map((function(e){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({storeId:t.id,storeName:t.name},e)}))})).flat().sort((function(a,b){var t=new Date(a.createdAt),e=new Date(b.createdAt);return t>e?-1:t<e?1:0}))}}},47:function(t,e,n){"use strict";var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"image"},[e("img",{attrs:{src:n(279),alt:"FindTheWay"}})])}],r={name:"LayoutError",layout:"error",props:{error:{type:Object,default:function(){}}}},c=(n(341),n(61)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-block"},[n("div",{staticClass:"error-code"},[t._v("\n    "+t._s(t.error.statusCode||500)+"\n  ")]),t._v(" "),n("div",{staticClass:"error-message"},[t._v("\n    "+t._s(t.error.message||"Something went wrong")+"\n  ")]),t._v(" "),n("div",{staticClass:"redirect"},[n("NuxtLink",{attrs:{to:{name:"index"}}},[t._v(" Go to Home page")])],1),t._v(" "),t._m(0)])}),o,!1,null,"345fa7a2",null);e.a=component.exports}},[[281,10,1,11]]]);