(window.webpackJsonp=window.webpackJsonp||[]).push([[11,3,6,8],{438:function(t,e,r){var content=r(443);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(61).default)("2fc2c4bf",content,!0,{sourceMap:!1})},439:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"profile"},[e("img",{staticClass:"avatar",attrs:{src:r(441),alt:"My Avatar"}}),t._v(" "),e("h1",[t._v("Chris Wang")]),t._v(" "),e("p",[t._v("Keep Learning, and Keep Coding.")])]),t._v(" "),e("div",{staticClass:"introduction"},[e("p",[t._v("\n      長期耕耘且涉略前端的後端工程師 • 期許自己每天多懂一點新知識 • 莫欺少年窮\n    ")])])])}],o={name:"MyProfile"},l=(r(442),r(62)),component=Object(l.a)(o,(function(){this._self._c;return this._m(0)}),n,!1,null,"ec6d202e",null);e.default=component.exports},440:function(t,e,r){t.exports=r.p+"img/fish.32d9e04.gif"},441:function(t,e,r){t.exports=r.p+"img/avatar.61527b4.png"},442:function(t,e,r){"use strict";r(438)},443:function(t,e,r){var n=r(60)(!1);n.push([t.i,".introduction[data-v-ec6d202e],.profile[data-v-ec6d202e]{background-color:#f9f2e9;padding:20px}.introduction[data-v-ec6d202e]{margin-top:20px}.avatar[data-v-ec6d202e]{border-radius:50%;width:150px;height:150px}",""]),t.exports=n},444:function(t,e,r){var content=r(450);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(61).default)("2a3a5c79",content,!0,{sourceMap:!1})},445:function(t,e,r){t.exports=r.p+"img/aquarium.c8d0712.jpg"},446:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this._self._c;return t("div",{staticClass:"aquarium"},[t("img",{staticClass:"fish1",attrs:{src:r(440),alt:"fish"}}),this._v(" "),t("img",{staticClass:"fish2",attrs:{src:r(440),alt:"fish"}})])}],o=(r(39),r(14),{name:"SideBar",components:{MyProfile:r(439).default},computed:{articlesByPopular:function(){return this.$store.getters.getAllArticles.filter((function(article){return!0===article.isPopular}))}}}),l=(r(449),r(62)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"side-block"},[e("MyProfile"),t._v(" "),e("div",{staticClass:"popular"},[e("div",{staticClass:"title"},[t._v("熱門文章 📌")]),t._v(" "),e("div",{staticClass:"list"},t._l(t.articlesByPopular,(function(article){return e("NuxtLink",{key:article.title,staticClass:"article",attrs:{to:{name:"article-category-slug",params:{category:article.category,slug:article.slug}}}},[t._v("\n        "+t._s(article.title)+"\n      ")])})),1)]),t._v(" "),t._m(0)],1)}),n,!1,null,"7eb7bee6",null);e.default=component.exports;installComponents(component,{MyProfile:r(439).default})},447:function(t,e,r){var n=r(3);t.exports=n(1..valueOf)},448:function(t,e,r){var content=r(570);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(61).default)("7902298e",content,!0,{sourceMap:!1})},449:function(t,e,r){"use strict";r(444)},450:function(t,e,r){var n=r(60),o=r(281),l=r(445),c=n(!1),d=o(l);c.push([t.i,".side-block[data-v-7eb7bee6]{width:400px;text-align:center;margin:0 0 40px 40px}.popular[data-v-7eb7bee6]{background-color:#f9f2e9;padding:20px;margin-top:20px}.popular .title[data-v-7eb7bee6]{font-size:18px;border-bottom:1px solid #9b9b9b;padding:5px}.popular .list[data-v-7eb7bee6]{margin-top:10px}.popular .article[data-v-7eb7bee6]{display:block;text-decoration:none;padding:5px;color:#9f3448;border-bottom:1px dashed;margin-top:10px}.aquarium[data-v-7eb7bee6]{position:relative;background-color:#a0bed5;margin-top:20px;height:200px;background-image:url("+d+");background-size:cover;overflow:hidden}.fish1[data-v-7eb7bee6]{position:absolute;top:10px;left:20px;width:80px;height:80px;animation:animationFish1-7eb7bee6 10s linear infinite}@keyframes animationFish1-7eb7bee6{0%{transform:translate(0) rotateY(180deg)}20%{transform:translate(30px,100px) rotateY(180deg)}50%{transform:translate(250px,20px) rotateY(180deg)}51%{transform:translate(250px,20px) rotateY(0deg)}75%{transform:translate(180px,50px) rotateY(0deg)}to{transform:translate(0) rotateY(0deg)}}.fish2[data-v-7eb7bee6]{position:absolute;top:100px;left:320px;width:50px;height:50px;animation:animationFish2-7eb7bee6 8s linear infinite}@keyframes animationFish2-7eb7bee6{0%{transform:translate(0) rotateY(0deg)}45%{transform:translate(-200px,20px) rotateY(0deg)}50%{transform:translate(-200px,20px) rotateY(0deg)}51%{transform:translate(-200px,20px) rotateY(180deg)}90%{transform:translate(0) rotateY(180deg)}to{transform:translate(0) rotateY(180deg)}}@media (max-width:768px){.side-block[data-v-7eb7bee6]{width:100%;margin:40px 0}}",""]),t.exports=c},451:function(t,e,r){"use strict";r.r(e);r(568);var n={name:"ListPagination",props:{pageSize:{type:Number,required:!0},currentPage:{type:Number,required:!0},totalCount:{type:Number,required:!0}},methods:{currentChange:function(t){this.$emit("currentChange",t)}}},o=(r(569),r(62)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"paginate"},[e("el-pagination",{staticClass:"list-pagination",attrs:{background:"","page-size":t.pageSize,layout:"prev, pager, next","current-page":t.currentPage,total:t.totalCount},on:{"current-change":t.currentChange}})],1)}),[],!1,null,"10d1e05a",null);e.default=component.exports},568:function(t,e,r){"use strict";var n=r(10),o=r(5),l=r(3),c=r(142),d=r(18),f=r(13),v=r(283),m=r(49),h=r(105),x=r(282),y=r(4),_=r(106).f,C=r(40).f,k=r(17).f,N=r(447),w=r(285).trim,P="Number",I=o.Number,M=I.prototype,A=o.TypeError,Y=l("".slice),E=l("".charCodeAt),L=function(t){var e=x(t,"number");return"bigint"==typeof e?e:S(e)},S=function(t){var e,r,n,o,l,c,d,code,f=x(t,"number");if(h(f))throw A("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=w(f),43===(e=E(f,0))||45===e){if(88===(r=E(f,2))||120===r)return NaN}else if(48===e){switch(E(f,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(c=(l=Y(f,2)).length,d=0;d<c;d++)if((code=E(l,d))<48||code>o)return NaN;return parseInt(l,n)}return+f};if(c(P,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var B,F=function(t){var e=arguments.length<1?0:I(L(t)),r=this;return m(M,r)&&y((function(){N(r)}))?v(Object(e),r,F):e},$=n?_(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),O=0;$.length>O;O++)f(I,B=$[O])&&!f(F,B)&&k(F,B,C(I,B));F.prototype=M,M.constructor=F,d(o,P,F,{constructor:!0})}},569:function(t,e,r){"use strict";r(448)},570:function(t,e,r){var n=r(60)(!1);n.push([t.i,".paginate[data-v-10d1e05a]{text-align:center;padding:15px 25px 25px;background-color:#f9f2e9}.list-pagination[data-v-10d1e05a]{overflow-x:auto}.list-pagination[data-v-10d1e05a] button{height:40px}.list-pagination[data-v-10d1e05a] button,.list-pagination[data-v-10d1e05a] li{padding:10px;margin:5px;color:#9f3448!important;background-color:transparent!important}.list-pagination[data-v-10d1e05a] li{font-size:16px;font-weight:400;height:auto;line-height:normal}.list-pagination[data-v-10d1e05a] li.active{background-color:#e7ccba!important}",""]),t.exports=n},579:function(t,e,r){var content=r(590);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(61).default)("0d460d33",content,!0,{sourceMap:!1})},589:function(t,e,r){"use strict";r(579)},590:function(t,e,r){var n=r(60)(!1);n.push([t.i,".content-block[data-v-3eea0981]{display:flex;max-width:1440px;margin:0 auto}.main-block[data-v-3eea0981]{width:1000px}.articles-block[data-v-3eea0981],.category-block[data-v-3eea0981]{background-color:#f9f2e9;padding:20px 40px}.articles-block[data-v-3eea0981]{margin-top:20px}.articles-block .article a[data-v-3eea0981]{padding:10px;margin:15px;display:block;text-decoration:none;border-bottom:1px solid;color:#9f3448;letter-spacing:1px}.articles-block .article a>.title[data-v-3eea0981]{margin-bottom:20px;font-weight:700}@media (max-width:768px){.content-block[data-v-3eea0981]{flex-direction:column}.main-block[data-v-3eea0981]{width:100%}}",""]),t.exports=n},625:function(t,e,r){"use strict";r.r(e);r(20),r(64),r(31),r(63),r(66),r(86),r(42),r(39),r(14),r(284);var n=r(446),o=r(451),l={name:"CategoryIndex",components:{SideBar:n.default,ListPagination:o.default},validate:function(t){var e=t.params;return!!t.store.getters.getCategories.map((function(t){return t.routeName})).includes(e.category.toLowerCase())},data:function(){return{category:"",perPage:9}},computed:{page:function(){return this.$route.query.page||1},allArticlesByCategory:function(){var t=this;return this.$store.getters.getAllArticles.filter((function(article){return article.category===t.category.routeName})).slice((this.page-1)*this.perPage,this.page*this.perPage)},totalCountByCategory:function(){var t=this;return this.$store.getters.getAllArticles.filter((function(article){return article.category===t.category.routeName})).length}},mounted:function(){var t=this;this.category=this.$store.getters.getCategories.find((function(e){return e.routeName===t.$route.params.category.toLowerCase()})),this.page>Math.ceil(this.totalCountByCategory/this.perPage)&&this.$nuxt.error({statusCode:404,message:"Page not found"})},methods:{setCurrentPage:function(t){this.$router.push({name:"article-category",params:{category:this.category.routeName},query:{page:t}})}}},c=(r(589),r(62)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-block"},[e("div",{staticClass:"main-block"},[e("div",{staticClass:"category-block"},[e("h2",[t._v("Category: "+t._s(t.category.name))])]),t._v(" "),e("div",{staticClass:"articles-block"},[t._l(t.allArticlesByCategory,(function(article){return e("div",{key:article.title,staticClass:"article"},[e("NuxtLink",{attrs:{to:{name:"article-category-slug",params:{category:t.category.routeName,slug:article.slug}}}},[e("div",{staticClass:"title"},[t._v(t._s(article.title))]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n            "+t._s(article.description.slice(0,80))+" ......\n          ")])])],1)})),t._v(" "),e("ListPagination",{attrs:{"page-size":t.perPage,"current-page":t.page,"total-count":t.totalCountByCategory},on:{currentChange:t.setCurrentPage}})],2)]),t._v(" "),e("side-bar")],1)}),[],!1,null,"3eea0981",null);e.default=component.exports;installComponents(component,{ListPagination:r(451).default,SideBar:r(446).default})}}]);