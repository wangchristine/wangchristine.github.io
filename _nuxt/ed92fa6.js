(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3,6,9],{450:function(t,e,r){var content=r(456);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("5aff4908",content,!0,{sourceMap:!1})},451:function(t,e,r){"use strict";r.r(e);var o=[function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"profile"},[e("img",{staticClass:"avatar",attrs:{src:r(453),alt:"My Avatar"}}),t._v(" "),e("h1",[t._v("Chris Wang")]),t._v(" "),e("p",[t._v("Keep Learning, and Keep Coding.")])]),t._v(" "),e("div",{staticClass:"introduction"},[e("p",[t._v("草木園丁兼全端工程師 • 期許自己每天多懂一點新知識 • 莫欺少年窮")])])])}],n={name:"MyProfile"},c=(r(455),r(63)),component=Object(c.a)(n,(function(){this._self._c;return this._m(0)}),o,!1,null,"a7ca8918",null);e.default=component.exports},452:function(t,e,r){t.exports=r.p+"img/fish.32d9e04.gif"},453:function(t,e,r){t.exports=r.p+"img/avatar.61527b4.png"},454:function(t,e,r){var content=r(461);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("774eaf22",content,!0,{sourceMap:!1})},455:function(t,e,r){"use strict";r(450)},456:function(t,e,r){var o=r(61)((function(i){return i[1]}));o.push([t.i,".introduction[data-v-a7ca8918],.profile[data-v-a7ca8918]{background-color:#f9f2e9;padding:20px}.introduction[data-v-a7ca8918]{margin-top:20px}.avatar[data-v-a7ca8918]{border-radius:50%;height:150px;width:150px}",""]),o.locals={},t.exports=o},457:function(t,e,r){"use strict";r.r(e);var o=[function(){var t=this._self._c;return t("div",{staticClass:"aquarium"},[t("img",{staticClass:"fish1",attrs:{src:r(452),alt:"fish"}}),this._v(" "),t("img",{staticClass:"fish2",attrs:{src:r(452),alt:"fish"}})])}],n=(r(42),r(14),{name:"SideBar",components:{MyProfile:r(451).default},computed:{articlesByPopular:function(){return this.$store.getters.getArticles("").filter((function(article){return!0===article.isPopular}))}}}),c=(r(460),r(63)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"side-block"},[e("MyProfile"),t._v(" "),e("div",{staticClass:"popular"},[e("div",{staticClass:"title"},[t._v("熱門文章 📌")]),t._v(" "),e("div",{staticClass:"list"},t._l(t.articlesByPopular,(function(article){return e("NuxtLink",{key:article.title,staticClass:"article",attrs:{to:{name:"article-category-slug",params:{category:article.category,slug:article.slug}}}},[t._v("\n        "+t._s(article.title)+"\n      ")])})),1)]),t._v(" "),t._m(0)],1)}),o,!1,null,"3ae7a033",null);e.default=component.exports;installComponents(component,{MyProfile:r(451).default})},458:function(t,e,r){t.exports=r.p+"img/aquarium.c8d0712.jpg"},459:function(t,e,r){var content=r(464);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("41416c2a",content,!0,{sourceMap:!1})},460:function(t,e,r){"use strict";r(454)},461:function(t,e,r){var o=r(61),n=r(293),c=r(458),l=o((function(i){return i[1]})),d=n(c);l.push([t.i,".side-block[data-v-3ae7a033]{margin:0 0 40px 40px;text-align:center;width:400px}.popular[data-v-3ae7a033]{background-color:#f9f2e9;margin-top:20px;padding:20px}.popular .title[data-v-3ae7a033]{border-bottom:1px solid #9b9b9b;font-size:18px;padding:5px}.popular .list[data-v-3ae7a033]{margin-top:10px}.popular .article[data-v-3ae7a033]{border-bottom:1px dashed;color:#9f3448;display:block;margin-top:10px;padding:5px;-webkit-text-decoration:none;text-decoration:none}.aquarium[data-v-3ae7a033]{background-color:#a0bed5;background-image:url("+d+");background-size:cover;height:200px;margin-top:20px;overflow:hidden;position:relative}.fish1[data-v-3ae7a033]{animation:animationFish1-3ae7a033 10s linear infinite;height:80px;left:20px;position:absolute;top:10px;width:80px}@keyframes animationFish1-3ae7a033{0%{transform:translate(0) rotateY(180deg)}20%{transform:translate(30px,100px) rotateY(180deg)}50%{transform:translate(250px,20px) rotateY(180deg)}51%{transform:translate(250px,20px) rotateY(0deg)}75%{transform:translate(180px,50px) rotateY(0deg)}to{transform:translate(0) rotateY(0deg)}}.fish2[data-v-3ae7a033]{animation:animationFish2-3ae7a033 8s linear infinite;height:50px;left:320px;position:absolute;top:100px;width:50px}@keyframes animationFish2-3ae7a033{0%{transform:translate(0) rotateY(0deg)}45%{transform:translate(-200px,20px) rotateY(0deg)}50%{transform:translate(-200px,20px) rotateY(0deg)}51%{transform:translate(-200px,20px) rotateY(180deg)}90%{transform:translate(0) rotateY(180deg)}to{transform:translate(0) rotateY(180deg)}}@media (max-width:768px){.side-block[data-v-3ae7a033]{margin:40px 0;width:100%}}",""]),l.locals={},t.exports=l},462:function(t,e,r){"use strict";r.r(e);r(294);var o={name:"ListPagination",props:{pageSize:{type:Number,required:!0},currentPage:{type:Number,required:!0},totalCount:{type:Number,required:!0}},methods:{currentChange:function(t){this.$emit("currentChange",t)}}},n=(r(463),r(63)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"paginate"},[e("el-pagination",{staticClass:"list-pagination",attrs:{background:"","page-size":t.pageSize,layout:"prev, pager, next","current-page":t.currentPage,total:t.totalCount},on:{"current-change":t.currentChange}})],1)}),[],!1,null,"075af8e0",null);e.default=component.exports},463:function(t,e,r){"use strict";r(459)},464:function(t,e,r){var o=r(61)((function(i){return i[1]}));o.push([t.i,".paginate[data-v-075af8e0]{background-color:#f9f2e9;padding:15px 25px 25px;text-align:center}.list-pagination[data-v-075af8e0]{overflow-x:auto}.list-pagination[data-v-075af8e0] button{background-color:transparent!important;color:#9f3448!important}.list-pagination[data-v-075af8e0] button{height:40px;margin:5px;padding:10px}.list-pagination[data-v-075af8e0] li{background-color:transparent!important;color:#9f3448!important}.list-pagination[data-v-075af8e0] li{font-size:16px;font-weight:400;height:auto;line-height:normal;margin:5px;padding:10px}.list-pagination[data-v-075af8e0] li.active{background-color:#e7ccba!important}",""]),o.locals={},t.exports=o},696:function(t,e,r){var content=r(710);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("31502450",content,!0,{sourceMap:!1})},709:function(t,e,r){"use strict";r(696)},710:function(t,e,r){var o=r(61)((function(i){return i[1]}));o.push([t.i,".content-block[data-v-41a58763]{display:flex;margin:0 auto;max-width:1440px}.main-block[data-v-41a58763]{width:1000px}.category-block[data-v-41a58763],.search-block[data-v-41a58763]{background-color:#f9f2e9;padding:20px 40px}.search-block[data-v-41a58763]{align-items:center;display:flex;margin-top:20px}.search-block .description[data-v-41a58763]{margin-right:10px}.search-block input[data-v-41a58763]{border:1px solid #b1b0b0;border-radius:4px;font-size:16px;padding:8px 10px;width:100%}.articles-block[data-v-41a58763]{background-color:#f9f2e9;margin-top:20px;padding:20px 40px}.articles-block .article a[data-v-41a58763]{border-bottom:1px solid;color:#9f3448;display:block;letter-spacing:1px;margin:15px;padding:10px;-webkit-text-decoration:none;text-decoration:none}.articles-block .article a>.title[data-v-41a58763]{font-weight:700;margin-bottom:20px}@media (max-width:768px){.content-block[data-v-41a58763]{flex-direction:column}.main-block[data-v-41a58763]{width:100%}}",""]),o.locals={},t.exports=o},760:function(t,e,r){"use strict";r.r(e);r(21),r(64),r(33),r(65),r(53),r(67),r(44),r(42),r(14),r(295);var o=r(457),n=r(462),c={name:"CategoryIndex",components:{SideBar:o.default,ListPagination:n.default},validate:function(t){var e=t.params;return!!t.store.getters.getCategories.map((function(t){return t.routeName})).includes(e.category.toLowerCase())},data:function(){return{category:"",perPage:9,searchText:""}},head:function(){var t,e;return{title:(null!==(t=this.category.name)&&void 0!==t?t:"Blog")+" - Chris",meta:[{hid:"og:title",property:"og:title",content:(null!==(e=this.category.name)&&void 0!==e?e:"Blog")+" - Chris"}]}},computed:{page:function(){return parseInt(this.$route.query.page)||1},articlesByCategory:function(){var t=this;return this.$store.getters.getArticles(this.searchText).filter((function(article){return article.category===t.category.routeName})).slice((this.page-1)*this.perPage,this.page*this.perPage)},totalCountByCategory:function(){var t=this;return this.$store.getters.getArticles(this.searchText).filter((function(article){return article.category===t.category.routeName})).length}},mounted:function(){var t=this;this.category=this.$store.getters.getCategories.find((function(e){return e.routeName===t.$route.params.category.toLowerCase()})),this.page>Math.ceil(this.totalCountByCategory/this.perPage)&&this.$nuxt.error({statusCode:404,message:"Page not found"})},methods:{setCurrentPage:function(t){this.$router.push({name:"article-category",params:{category:this.category.routeName},query:{page:t}})},changeSearchText:function(){this.$router.push({name:"article-category",params:{category:this.category.routeName},query:{page:1}})}}},l=(r(709),r(63)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-block"},[e("div",{staticClass:"main-block"},[e("div",{staticClass:"category-block"},[e("h2",[t._v("Category: "+t._s(t.category.name))])]),t._v(" "),e("div",{staticClass:"search-block"},[e("div",{staticClass:"description"},[e("p",[t._v("搜尋文章標題：")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],attrs:{type:"text",placeholder:"請輸入..."},domProps:{value:t.searchText},on:{input:[function(e){e.target.composing||(t.searchText=e.target.value)},t.changeSearchText]}})])]),t._v(" "),e("div",{staticClass:"articles-block"},[t._l(t.articlesByCategory,(function(article){return e("div",{key:article.title,staticClass:"article"},[e("NuxtLink",{attrs:{to:{name:"article-category-slug",params:{category:t.category.routeName,slug:article.slug}}}},[e("div",{staticClass:"title"},[t._v(t._s(article.title))]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n            "+t._s(article.description.slice(0,80))+" ......\n          ")])])],1)})),t._v(" "),0===t.totalCountByCategory?e("h4",[t._v("查無結果，換個關鍵字吧！")]):t._e(),t._v(" "),0!==t.totalCountByCategory?e("ListPagination",{attrs:{"page-size":t.perPage,"current-page":t.page,"total-count":t.totalCountByCategory},on:{currentChange:t.setCurrentPage}}):t._e()],2)]),t._v(" "),e("side-bar")],1)}),[],!1,null,"41a58763",null);e.default=component.exports;installComponents(component,{ListPagination:r(462).default,SideBar:r(457).default})}}]);