(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3,5],{430:function(t,e,r){var content=r(435);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(60).default)("2dff517e",content,!0,{sourceMap:!1})},431:function(t,e,r){"use strict";r.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"profile"},[o("img",{staticClass:"avatar",attrs:{src:r(432),alt:"My Avatar"}}),t._v(" "),o("h1",[t._v("Chris Wang")]),t._v(" "),o("p",[t._v("Keep Learning, and Keep Coding.")])]),t._v(" "),o("div",{staticClass:"introduction"},[o("p",[t._v("\n      長期耕耘且涉略前端的後端工程師 • 期許自己每天多懂一點新知識 • 莫欺少年窮\n    ")])])])}],n={name:"MyProfile"},c=(r(434),r(61)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),o,!1,null,"ec6d202e",null);e.default=component.exports},432:function(t,e,r){t.exports=r.p+"img/avatar.61527b4.png"},433:function(t,e,r){t.exports=r.p+"img/fish.32d9e04.gif"},434:function(t,e,r){"use strict";r(430)},435:function(t,e,r){var o=r(59)(!1);o.push([t.i,".introduction[data-v-ec6d202e],.profile[data-v-ec6d202e]{background-color:#f9f2e9;padding:20px}.introduction[data-v-ec6d202e]{margin-top:20px}.avatar[data-v-ec6d202e]{border-radius:50%;width:150px;height:150px}",""]),t.exports=o},436:function(t,e,r){var content=r(440);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(60).default)("83f6761a",content,!0,{sourceMap:!1})},437:function(t,e,r){t.exports=r.p+"img/aquarium.c8d0712.jpg"},438:function(t,e,r){"use strict";r.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"aquarium"},[o("img",{staticClass:"fish1",attrs:{src:r(433),alt:"fish"}}),t._v(" "),o("img",{staticClass:"fish2",attrs:{src:r(433),alt:"fish"}})])}],n=(r(39),r(14),{name:"SideBar",components:{MyProfile:r(431).default},computed:{articlesByPopular:function(){return this.$store.getters.getAllArticles.filter((function(article){return!0===article.isPopular}))}}}),c=(r(439),r(61)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"side-block"},[r("MyProfile"),t._v(" "),r("div",{staticClass:"popular"},[r("div",{staticClass:"title"},[t._v("熱門文章 📌")]),t._v(" "),r("div",{staticClass:"list"},t._l(t.articlesByPopular,(function(article){return r("NuxtLink",{key:article.title,staticClass:"article",attrs:{to:{name:"article-category-slug",params:{category:article.category,slug:article.slug}}}},[t._v("\n        "+t._s(article.title)+"\n      ")])})),1)]),t._v(" "),t._m(0)],1)}),o,!1,null,"d768cae8",null);e.default=component.exports;installComponents(component,{MyProfile:r(431).default})},439:function(t,e,r){"use strict";r(436)},440:function(t,e,r){var o=r(59),n=r(276),c=r(437),l=o(!1),d=n(c);l.push([t.i,".side-block[data-v-d768cae8]{width:400px;text-align:center;margin:0 0 40px 40px}.popular[data-v-d768cae8]{background-color:#f9f2e9;padding:20px;margin-top:20px}.popular .title[data-v-d768cae8]{font-size:18px;border-bottom:1px solid #9b9b9b;padding:5px}.popular .list[data-v-d768cae8]{margin-top:10px}.popular .article[data-v-d768cae8]{display:block;text-decoration:none;padding:5px;color:#9f3448;border-bottom:1px dashed;margin-top:10px}.aquarium[data-v-d768cae8]{position:relative;background-color:#a0bed5;margin-top:20px;height:200px;background-image:url("+d+");background-size:cover}.fish1[data-v-d768cae8]{position:absolute;top:10px;left:20px;width:80px;height:80px;-webkit-animation:animationFish1-data-v-d768cae8 10s linear infinite;animation:animationFish1-data-v-d768cae8 10s linear infinite}@-webkit-keyframes animationFish1-data-v-d768cae8{0%{transform:translate(0) rotateY(180deg)}20%{transform:translate(30px,100px) rotateY(180deg)}50%{transform:translate(250px,20px) rotateY(180deg)}51%{transform:translate(250px,20px) rotateY(0deg)}75%{transform:translate(180px,50px) rotateY(0deg)}to{transform:translate(0) rotateY(0deg)}}@keyframes animationFish1-data-v-d768cae8{0%{transform:translate(0) rotateY(180deg)}20%{transform:translate(30px,100px) rotateY(180deg)}50%{transform:translate(250px,20px) rotateY(180deg)}51%{transform:translate(250px,20px) rotateY(0deg)}75%{transform:translate(180px,50px) rotateY(0deg)}to{transform:translate(0) rotateY(0deg)}}.fish2[data-v-d768cae8]{position:absolute;top:100px;left:320px;width:50px;height:50px;-webkit-animation:animationFish2-data-v-d768cae8 8s linear infinite;animation:animationFish2-data-v-d768cae8 8s linear infinite}@-webkit-keyframes animationFish2-data-v-d768cae8{0%{transform:translate(0) rotateY(0deg)}45%{transform:translate(-200px,20px) rotateY(0deg)}50%{transform:translate(-200px,20px) rotateY(0deg)}51%{transform:translate(-200px,20px) rotateY(180deg)}90%{transform:translate(0) rotateY(180deg)}to{transform:translate(0) rotateY(180deg)}}@keyframes animationFish2-data-v-d768cae8{0%{transform:translate(0) rotateY(0deg)}45%{transform:translate(-200px,20px) rotateY(0deg)}50%{transform:translate(-200px,20px) rotateY(0deg)}51%{transform:translate(-200px,20px) rotateY(180deg)}90%{transform:translate(0) rotateY(180deg)}to{transform:translate(0) rotateY(180deg)}}@media (max-width:768px){.side-block[data-v-d768cae8]{width:100%;margin:40px 0}}",""]),t.exports=l},487:function(t,e,r){var content=r(497);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(60).default)("35b57150",content,!0,{sourceMap:!1})},496:function(t,e,r){"use strict";r(487)},497:function(t,e,r){var o=r(59)(!1);o.push([t.i,".content-block[data-v-13c3f0b6]{display:flex;max-width:1440px;margin:0 auto}.main-block[data-v-13c3f0b6]{width:1000px}.articles-block[data-v-13c3f0b6],.category-block[data-v-13c3f0b6]{background-color:#f9f2e9;padding:20px 40px}.articles-block[data-v-13c3f0b6]{margin-top:20px}.articles-block .article a[data-v-13c3f0b6]{padding:10px;margin:15px;display:block;text-decoration:none;border-bottom:1px solid;color:#9f3448}.articles-block .article a>.title[data-v-13c3f0b6]{margin-bottom:20px;font-weight:700}.articles-block .paginate[data-v-13c3f0b6]{text-align:center;padding:10px;margin:15px}.articles-block .paginate a[data-v-13c3f0b6]{padding:10px;margin:5px;text-decoration:none;color:#9f3448}.articles-block .paginate a.nuxt-link-exact-active[data-v-13c3f0b6]{background-color:#e7ccba}@media (max-width:768px){.content-block[data-v-13c3f0b6]{flex-direction:column}.main-block[data-v-13c3f0b6]{width:100%}}",""]),t.exports=o},520:function(t,e,r){"use strict";r.r(e);r(64),r(84),r(40),r(62),r(39),r(14),r(277);var o={name:"CategoryIndex",components:{SideBar:r(438).default},validate:function(t){var e=t.params;return!!t.store.getters.getCategories.map((function(t){return t.routeName})).includes(e.category.toLowerCase())},data:function(){return{category:"",perPage:10}},computed:{page:function(){return this.$route.query.page||1},allArticlesByCategory:function(){var t=this;return this.$store.getters.getAllArticles.filter((function(article){return article.category===t.category.routeName})).slice((this.page-1)*this.perPage,this.page*this.perPage)},totalCountByCategory:function(){var t=this;return this.$store.getters.getAllArticles.filter((function(article){return article.category===t.category.routeName})).length}},mounted:function(){var t=this;this.category=this.$store.getters.getCategories.find((function(e){return e.routeName===t.$route.params.category.toLowerCase()})),this.page>Math.ceil(this.totalCountByCategory/this.perPage)&&this.$nuxt.error({statusCode:404,message:"Page not found"})}},n=(r(496),r(61)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content-block"},[r("div",{staticClass:"main-block"},[r("div",{staticClass:"category-block"},[r("h2",[t._v("Category: "+t._s(t.category.name))])]),t._v(" "),r("div",{staticClass:"articles-block"},[t._l(t.allArticlesByCategory,(function(article){return r("div",{key:article.title,staticClass:"article"},[r("NuxtLink",{attrs:{to:{name:"article-category-slug",params:{category:t.category.routeName,slug:article.slug}}}},[r("div",{staticClass:"title"},[t._v(t._s(article.title))]),t._v(" "),r("div",{staticClass:"description"},[t._v("\n            "+t._s(article.description.slice(0,80))+" ......\n          ")])])],1)})),t._v(" "),r("div",{staticClass:"paginate"},t._l(Math.ceil(t.totalCountByCategory/t.perPage),(function(e){return r("NuxtLink",{key:e,class:{"nuxt-link-exact-active nuxt-link-active":1===t.page&&1===e},attrs:{to:{name:"article-category",params:{category:t.category.routeName},query:{page:e}}}},[t._v(t._s(e))])})),1)],2)]),t._v(" "),r("side-bar")],1)}),[],!1,null,"13c3f0b6",null);e.default=component.exports;installComponents(component,{SideBar:r(438).default})}}]);