(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3,6,9],{439:function(t,e,r){var content=r(445);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("cfc8c304",content,!0,{sourceMap:!1})},440:function(t,e,r){"use strict";r.r(e);var o=[function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"profile"},[e("img",{staticClass:"avatar",attrs:{src:r(442),alt:"My Avatar"}}),t._v(" "),e("h1",[t._v("Chris Wang")]),t._v(" "),e("p",[t._v("Keep Learning, and Keep Coding.")])]),t._v(" "),e("div",{staticClass:"introduction"},[e("p",[t._v("草木園丁兼全端工程師 • 期許自己每天多懂一點新知識 • 莫欺少年窮")])])])}],n={name:"MyProfile"},c=(r(444),r(63)),component=Object(c.a)(n,(function(){this._self._c;return this._m(0)}),o,!1,null,"a7ca8918",null);e.default=component.exports},441:function(t,e,r){t.exports=r.p+"img/fish.32d9e04.gif"},442:function(t,e,r){t.exports=r.p+"img/avatar.61527b4.png"},443:function(t,e,r){var content=r(451);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("73d1306f",content,!0,{sourceMap:!1})},444:function(t,e,r){"use strict";r(439)},445:function(t,e,r){var o=r(61)(!1);o.push([t.i,".introduction[data-v-a7ca8918],.profile[data-v-a7ca8918]{background-color:#f9f2e9;padding:20px}.introduction[data-v-a7ca8918]{margin-top:20px}.avatar[data-v-a7ca8918]{border-radius:50%;width:150px;height:150px}",""]),t.exports=o},446:function(t,e,r){"use strict";r.r(e);var o=[function(){var t=this._self._c;return t("div",{staticClass:"aquarium"},[t("img",{staticClass:"fish1",attrs:{src:r(441),alt:"fish"}}),this._v(" "),t("img",{staticClass:"fish2",attrs:{src:r(441),alt:"fish"}})])}],n=(r(39),r(14),{name:"SideBar",components:{MyProfile:r(440).default},computed:{articlesByPopular:function(){return this.$store.getters.getArticles().filter((function(article){return!0===article.isPopular}))}}}),c=(r(450),r(63)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"side-block"},[e("MyProfile"),t._v(" "),e("div",{staticClass:"popular"},[e("div",{staticClass:"title"},[t._v("熱門文章 📌")]),t._v(" "),e("div",{staticClass:"list"},t._l(t.articlesByPopular,(function(article){return e("NuxtLink",{key:article.title,staticClass:"article",attrs:{to:{name:"article-category-slug",params:{category:article.category,slug:article.slug}}}},[t._v("\n        "+t._s(article.title)+"\n      ")])})),1)]),t._v(" "),t._m(0)],1)}),o,!1,null,"d5ea14da",null);e.default=component.exports;installComponents(component,{MyProfile:r(440).default})},447:function(t,e,r){t.exports=r.p+"img/aquarium.c8d0712.jpg"},448:function(t,e,r){var content=r(455);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("05ae54ac",content,!0,{sourceMap:!1})},449:function(t,e,r){var o=r(3);t.exports=o(1..valueOf)},450:function(t,e,r){"use strict";r(443)},451:function(t,e,r){var o=r(61),n=r(282),c=r(447),l=o(!1),d=n(c);l.push([t.i,".side-block[data-v-d5ea14da]{width:400px;text-align:center;margin:0 0 40px 40px}.popular[data-v-d5ea14da]{background-color:#f9f2e9;padding:20px;margin-top:20px}.popular .title[data-v-d5ea14da]{font-size:18px;border-bottom:1px solid #9b9b9b;padding:5px}.popular .list[data-v-d5ea14da]{margin-top:10px}.popular .article[data-v-d5ea14da]{display:block;text-decoration:none;padding:5px;color:#9f3448;border-bottom:1px dashed;margin-top:10px}.aquarium[data-v-d5ea14da]{position:relative;background-color:#a0bed5;margin-top:20px;height:200px;background-image:url("+d+");background-size:cover;overflow:hidden}.fish1[data-v-d5ea14da]{position:absolute;top:10px;left:20px;width:80px;height:80px;animation:animationFish1-d5ea14da 10s linear infinite}@keyframes animationFish1-d5ea14da{0%{transform:translate(0) rotateY(180deg)}20%{transform:translate(30px,100px) rotateY(180deg)}50%{transform:translate(250px,20px) rotateY(180deg)}51%{transform:translate(250px,20px) rotateY(0deg)}75%{transform:translate(180px,50px) rotateY(0deg)}to{transform:translate(0) rotateY(0deg)}}.fish2[data-v-d5ea14da]{position:absolute;top:100px;left:320px;width:50px;height:50px;animation:animationFish2-d5ea14da 8s linear infinite}@keyframes animationFish2-d5ea14da{0%{transform:translate(0) rotateY(0deg)}45%{transform:translate(-200px,20px) rotateY(0deg)}50%{transform:translate(-200px,20px) rotateY(0deg)}51%{transform:translate(-200px,20px) rotateY(180deg)}90%{transform:translate(0) rotateY(180deg)}to{transform:translate(0) rotateY(180deg)}}@media (max-width:768px){.side-block[data-v-d5ea14da]{width:100%;margin:40px 0}}",""]),t.exports=l},452:function(t,e,r){"use strict";r.r(e);r(453);var o={name:"ListPagination",props:{pageSize:{type:Number,required:!0},currentPage:{type:Number,required:!0},totalCount:{type:Number,required:!0}},methods:{currentChange:function(t){this.$emit("currentChange",t)}}},n=(r(454),r(63)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"paginate"},[e("el-pagination",{staticClass:"list-pagination",attrs:{background:"","page-size":t.pageSize,layout:"prev, pager, next","current-page":t.currentPage,total:t.totalCount},on:{"current-change":t.currentChange}})],1)}),[],!1,null,"075af8e0",null);e.default=component.exports},453:function(t,e,r){"use strict";var o=r(10),n=r(5),c=r(3),l=r(142),d=r(18),f=r(13),h=r(284),v=r(49),m=r(105),x=r(283),y=r(4),_=r(106).f,C=r(41).f,k=r(17).f,N=r(449),w=r(285).trim,P="Number",I=n.Number,M=I.prototype,T=n.TypeError,B=c("".slice),S=c("".charCodeAt),Y=function(t){var e=x(t,"number");return"bigint"==typeof e?e:E(e)},E=function(t){var e,r,o,n,c,l,d,code,f=x(t,"number");if(m(f))throw T("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=w(f),43===(e=S(f,0))||45===e){if(88===(r=S(f,2))||120===r)return NaN}else if(48===e){switch(S(f,1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+f}for(l=(c=B(f,2)).length,d=0;d<l;d++)if((code=S(c,d))<48||code>n)return NaN;return parseInt(c,o)}return+f};if(l(P,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var A,L=function(t){var e=arguments.length<1?0:I(Y(t)),r=this;return v(M,r)&&y((function(){N(r)}))?h(Object(e),r,L):e},F=o?_(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),$=0;F.length>$;$++)f(I,A=F[$])&&!f(L,A)&&k(L,A,C(I,A));L.prototype=M,M.constructor=L,d(n,P,L,{constructor:!0})}},454:function(t,e,r){"use strict";r(448)},455:function(t,e,r){var o=r(61)(!1);o.push([t.i,".paginate[data-v-075af8e0]{text-align:center;padding:15px 25px 25px;background-color:#f9f2e9}.list-pagination[data-v-075af8e0]{overflow-x:auto}.list-pagination[data-v-075af8e0] button{height:40px}.list-pagination[data-v-075af8e0] button,.list-pagination[data-v-075af8e0] li{padding:10px;margin:5px;color:#9f3448!important;background-color:transparent!important}.list-pagination[data-v-075af8e0] li{font-size:16px;font-weight:400;height:auto;line-height:normal}.list-pagination[data-v-075af8e0] li.active{background-color:#e7ccba!important}",""]),t.exports=o},619:function(t,e,r){var content=r(632);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("5ed09dd6",content,!0,{sourceMap:!1})},631:function(t,e,r){"use strict";r(619)},632:function(t,e,r){var o=r(61)(!1);o.push([t.i,".content-block[data-v-41a58763]{display:flex;max-width:1440px;margin:0 auto}.main-block[data-v-41a58763]{width:1000px}.category-block[data-v-41a58763],.search-block[data-v-41a58763]{background-color:#f9f2e9;padding:20px 40px}.search-block[data-v-41a58763]{display:flex;align-items:center;margin-top:20px}.search-block .description[data-v-41a58763]{margin-right:10px}.search-block input[data-v-41a58763]{padding:8px 10px;border:1px solid #b1b0b0;border-radius:4px;font-size:16px;width:100%}.articles-block[data-v-41a58763]{background-color:#f9f2e9;padding:20px 40px;margin-top:20px}.articles-block .article a[data-v-41a58763]{padding:10px;margin:15px;display:block;text-decoration:none;border-bottom:1px solid;color:#9f3448;letter-spacing:1px}.articles-block .article a>.title[data-v-41a58763]{margin-bottom:20px;font-weight:700}@media (max-width:768px){.content-block[data-v-41a58763]{flex-direction:column}.main-block[data-v-41a58763]{width:100%}}",""]),t.exports=o},679:function(t,e,r){"use strict";r.r(e);r(20),r(64),r(31),r(65),r(52),r(67),r(42),r(39),r(14),r(286);var o=r(446),n=r(452),c={name:"CategoryIndex",components:{SideBar:o.default,ListPagination:n.default},validate:function(t){var e=t.params;return!!t.store.getters.getCategories.map((function(t){return t.routeName})).includes(e.category.toLowerCase())},data:function(){return{category:"",perPage:9,searchText:""}},head:function(){var t,e;return{title:(null!==(t=this.category.name)&&void 0!==t?t:"Blog")+" - Chris",meta:[{hid:"og:title",property:"og:title",content:(null!==(e=this.category.name)&&void 0!==e?e:"Blog")+" - Chris"}]}},computed:{page:function(){return parseInt(this.$route.query.page)||1},articlesByCategory:function(){var t=this;return this.$store.getters.getArticles(this.searchText).filter((function(article){return article.category===t.category.routeName})).slice((this.page-1)*this.perPage,this.page*this.perPage)},totalCountByCategory:function(){var t=this;return this.$store.getters.getArticles(this.searchText).filter((function(article){return article.category===t.category.routeName})).length}},mounted:function(){var t=this;this.category=this.$store.getters.getCategories.find((function(e){return e.routeName===t.$route.params.category.toLowerCase()})),this.page>Math.ceil(this.totalCountByCategory/this.perPage)&&this.$nuxt.error({statusCode:404,message:"Page not found"})},methods:{setCurrentPage:function(t){this.$router.push({name:"article-category",params:{category:this.category.routeName},query:{page:t}})},changeSearchText:function(){this.$router.push({name:"article-category",params:{category:this.category.routeName},query:{page:1}})}}},l=(r(631),r(63)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-block"},[e("div",{staticClass:"main-block"},[e("div",{staticClass:"category-block"},[e("h2",[t._v("Category: "+t._s(t.category.name))])]),t._v(" "),e("div",{staticClass:"search-block"},[e("div",{staticClass:"description"},[e("p",[t._v("搜尋文章標題：")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],attrs:{type:"text",placeholder:"請輸入..."},domProps:{value:t.searchText},on:{input:[function(e){e.target.composing||(t.searchText=e.target.value)},t.changeSearchText]}})])]),t._v(" "),e("div",{staticClass:"articles-block"},[t._l(t.articlesByCategory,(function(article){return e("div",{key:article.title,staticClass:"article"},[e("NuxtLink",{attrs:{to:{name:"article-category-slug",params:{category:t.category.routeName,slug:article.slug}}}},[e("div",{staticClass:"title"},[t._v(t._s(article.title))]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n            "+t._s(article.description.slice(0,80))+" ......\n          ")])])],1)})),t._v(" "),0===t.totalCountByCategory?e("h4",[t._v("查無結果，換個關鍵字吧！")]):t._e(),t._v(" "),0!==t.totalCountByCategory?e("ListPagination",{attrs:{"page-size":t.perPage,"current-page":t.page,"total-count":t.totalCountByCategory},on:{currentChange:t.setCurrentPage}}):t._e()],2)]),t._v(" "),e("side-bar")],1)}),[],!1,null,"41a58763",null);e.default=component.exports;installComponents(component,{ListPagination:r(452).default,SideBar:r(446).default})}}]);