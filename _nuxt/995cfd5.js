(window.webpackJsonp=window.webpackJsonp||[]).push([[10,5,7],{438:function(t,e,r){var content=r(443);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(61).default)("2fc2c4bf",content,!0,{sourceMap:!1})},439:function(t,e,r){"use strict";r.r(e);var o=[function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"profile"},[e("img",{staticClass:"avatar",attrs:{src:r(441),alt:"My Avatar"}}),t._v(" "),e("h1",[t._v("Chris Wang")]),t._v(" "),e("p",[t._v("Keep Learning, and Keep Coding.")])]),t._v(" "),e("div",{staticClass:"introduction"},[e("p",[t._v("\n      長期耕耘且涉略前端的後端工程師 • 期許自己每天多懂一點新知識 • 莫欺少年窮\n    ")])])])}],n={name:"MyProfile"},l=(r(442),r(62)),component=Object(l.a)(n,(function(){this._self._c;return this._m(0)}),o,!1,null,"ec6d202e",null);e.default=component.exports},440:function(t,e,r){t.exports=r.p+"img/fish.32d9e04.gif"},441:function(t,e,r){t.exports=r.p+"img/avatar.61527b4.png"},442:function(t,e,r){"use strict";r(438)},443:function(t,e,r){var o=r(60)(!1);o.push([t.i,".introduction[data-v-ec6d202e],.profile[data-v-ec6d202e]{background-color:#f9f2e9;padding:20px}.introduction[data-v-ec6d202e]{margin-top:20px}.avatar[data-v-ec6d202e]{border-radius:50%;width:150px;height:150px}",""]),t.exports=o},444:function(t,e,r){var content=r(448);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(61).default)("2a3a5c79",content,!0,{sourceMap:!1})},445:function(t,e,r){t.exports=r.p+"img/aquarium.c8d0712.jpg"},446:function(t,e,r){"use strict";r.r(e);var o=[function(){var t=this._self._c;return t("div",{staticClass:"aquarium"},[t("img",{staticClass:"fish1",attrs:{src:r(440),alt:"fish"}}),this._v(" "),t("img",{staticClass:"fish2",attrs:{src:r(440),alt:"fish"}})])}],n=(r(39),r(14),{name:"SideBar",components:{MyProfile:r(439).default},computed:{articlesByPopular:function(){return this.$store.getters.getAllArticles.filter((function(article){return!0===article.isPopular}))}}}),l=(r(447),r(62)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"side-block"},[e("MyProfile"),t._v(" "),e("div",{staticClass:"popular"},[e("div",{staticClass:"title"},[t._v("熱門文章 📌")]),t._v(" "),e("div",{staticClass:"list"},t._l(t.articlesByPopular,(function(article){return e("NuxtLink",{key:article.title,staticClass:"article",attrs:{to:{name:"article-category-slug",params:{category:article.category,slug:article.slug}}}},[t._v("\n        "+t._s(article.title)+"\n      ")])})),1)]),t._v(" "),t._m(0)],1)}),o,!1,null,"7eb7bee6",null);e.default=component.exports;installComponents(component,{MyProfile:r(439).default})},447:function(t,e,r){"use strict";r(444)},448:function(t,e,r){var o=r(60),n=r(281),l=r(445),c=o(!1),d=n(l);c.push([t.i,".side-block[data-v-7eb7bee6]{width:400px;text-align:center;margin:0 0 40px 40px}.popular[data-v-7eb7bee6]{background-color:#f9f2e9;padding:20px;margin-top:20px}.popular .title[data-v-7eb7bee6]{font-size:18px;border-bottom:1px solid #9b9b9b;padding:5px}.popular .list[data-v-7eb7bee6]{margin-top:10px}.popular .article[data-v-7eb7bee6]{display:block;text-decoration:none;padding:5px;color:#9f3448;border-bottom:1px dashed;margin-top:10px}.aquarium[data-v-7eb7bee6]{position:relative;background-color:#a0bed5;margin-top:20px;height:200px;background-image:url("+d+");background-size:cover;overflow:hidden}.fish1[data-v-7eb7bee6]{position:absolute;top:10px;left:20px;width:80px;height:80px;animation:animationFish1-7eb7bee6 10s linear infinite}@keyframes animationFish1-7eb7bee6{0%{transform:translate(0) rotateY(180deg)}20%{transform:translate(30px,100px) rotateY(180deg)}50%{transform:translate(250px,20px) rotateY(180deg)}51%{transform:translate(250px,20px) rotateY(0deg)}75%{transform:translate(180px,50px) rotateY(0deg)}to{transform:translate(0) rotateY(0deg)}}.fish2[data-v-7eb7bee6]{position:absolute;top:100px;left:320px;width:50px;height:50px;animation:animationFish2-7eb7bee6 8s linear infinite}@keyframes animationFish2-7eb7bee6{0%{transform:translate(0) rotateY(0deg)}45%{transform:translate(-200px,20px) rotateY(0deg)}50%{transform:translate(-200px,20px) rotateY(0deg)}51%{transform:translate(-200px,20px) rotateY(180deg)}90%{transform:translate(0) rotateY(180deg)}to{transform:translate(0) rotateY(180deg)}}@media (max-width:768px){.side-block[data-v-7eb7bee6]{width:100%;margin:40px 0}}",""]),t.exports=c},557:function(t,e,r){var content=r(568);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(61).default)("3abfcf20",content,!0,{sourceMap:!1})},567:function(t,e,r){"use strict";r(557)},568:function(t,e,r){var o=r(60)(!1);o.push([t.i,".content-block[data-v-8bb91762]{display:flex;max-width:1440px;margin:0 auto}.main-block[data-v-8bb91762]{width:1000px}.articles-block[data-v-8bb91762],.category-block[data-v-8bb91762]{background-color:#f9f2e9;padding:20px 40px}.articles-block[data-v-8bb91762]{margin-top:20px}.articles-block .article a[data-v-8bb91762]{padding:10px;margin:15px;display:block;text-decoration:none;border-bottom:1px solid;color:#9f3448;letter-spacing:1px}.articles-block .article a>.title[data-v-8bb91762]{margin-bottom:20px;font-weight:700}.articles-block .paginate[data-v-8bb91762]{text-align:center;padding:10px;margin:15px}.articles-block .paginate a[data-v-8bb91762]{padding:10px;margin:5px;text-decoration:none;color:#9f3448}.articles-block .paginate a.nuxt-link-exact-active[data-v-8bb91762]{background-color:#e7ccba}@media (max-width:768px){.content-block[data-v-8bb91762]{flex-direction:column}.main-block[data-v-8bb91762]{width:100%}}",""]),t.exports=o},598:function(t,e,r){"use strict";r.r(e);r(20),r(63),r(31),r(64),r(66),r(86),r(41),r(39),r(14),r(282);var o={name:"CategoryIndex",components:{SideBar:r(446).default},validate:function(t){var e=t.params;return!!t.store.getters.getCategories.map((function(t){return t.routeName})).includes(e.category.toLowerCase())},data:function(){return{category:"",perPage:9}},computed:{page:function(){return this.$route.query.page||1},allArticlesByCategory:function(){var t=this;return this.$store.getters.getAllArticles.filter((function(article){return article.category===t.category.routeName})).slice((this.page-1)*this.perPage,this.page*this.perPage)},totalCountByCategory:function(){var t=this;return this.$store.getters.getAllArticles.filter((function(article){return article.category===t.category.routeName})).length}},mounted:function(){var t=this;this.category=this.$store.getters.getCategories.find((function(e){return e.routeName===t.$route.params.category.toLowerCase()})),this.page>Math.ceil(this.totalCountByCategory/this.perPage)&&this.$nuxt.error({statusCode:404,message:"Page not found"})}},n=(r(567),r(62)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-block"},[e("div",{staticClass:"main-block"},[e("div",{staticClass:"category-block"},[e("h2",[t._v("Category: "+t._s(t.category.name))])]),t._v(" "),e("div",{staticClass:"articles-block"},[t._l(t.allArticlesByCategory,(function(article){return e("div",{key:article.title,staticClass:"article"},[e("NuxtLink",{attrs:{to:{name:"article-category-slug",params:{category:t.category.routeName,slug:article.slug}}}},[e("div",{staticClass:"title"},[t._v(t._s(article.title))]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n            "+t._s(article.description.slice(0,80))+" ......\n          ")])])],1)})),t._v(" "),e("div",{staticClass:"paginate"},t._l(Math.ceil(t.totalCountByCategory/t.perPage),(function(r){return e("NuxtLink",{key:r,class:{"nuxt-link-exact-active nuxt-link-active":1===t.page&&1===r},attrs:{to:{name:"article-category",params:{category:t.category.routeName},query:{page:r}}}},[t._v(t._s(r))])})),1)],2)]),t._v(" "),e("side-bar")],1)}),[],!1,null,"8bb91762",null);e.default=component.exports;installComponents(component,{SideBar:r(446).default})}}]);