(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2,4],{422:function(t,e,r){var content=r(426);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("2dff517e",content,!0,{sourceMap:!1})},423:function(t,e,r){"use strict";r.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"profile"},[o("img",{staticClass:"avatar",attrs:{src:r(424),alt:"My Avatar"}}),t._v(" "),o("h1",[t._v("Chris Wang")]),t._v(" "),o("p",[t._v("Keep Learning, and Keep Coding.")])]),t._v(" "),o("div",{staticClass:"introduction"},[o("p",[t._v("\n      長期耕耘且涉略前端的後端工程師 • 期許自己每天多懂一點新知識 • 莫欺少年窮\n    ")])])])}],n={name:"MyProfile"},c=(r(425),r(58)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),o,!1,null,"ec6d202e",null);e.default=component.exports},424:function(t,e,r){t.exports=r.p+"img/avatar.61527b4.png"},425:function(t,e,r){"use strict";r(422)},426:function(t,e,r){var o=r(56)(!1);o.push([t.i,".introduction[data-v-ec6d202e],.profile[data-v-ec6d202e]{background-color:#f9f2e9;padding:20px}.introduction[data-v-ec6d202e]{margin-top:20px}.avatar[data-v-ec6d202e]{border-radius:50%;width:150px;height:150px}",""]),t.exports=o},427:function(t,e,r){var content=r(430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("ab2f5650",content,!0,{sourceMap:!1})},428:function(t,e,r){"use strict";r.r(e);var o={name:"SideBar",components:{MyProfile:r(423).default}},n=(r(429),r(58)),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"side-block"},[e("MyProfile")],1)}),[],!1,null,"40b7a496",null);e.default=component.exports;installComponents(component,{MyProfile:r(423).default})},429:function(t,e,r){"use strict";r(427)},430:function(t,e,r){var o=r(56)(!1);o.push([t.i,".side-block[data-v-40b7a496]{width:400px;text-align:center;margin:0 0 40px 40px}",""]),t.exports=o},432:function(t,e,r){var content=r(439);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("1c711fc8",content,!0,{sourceMap:!1})},438:function(t,e,r){"use strict";r(432)},439:function(t,e,r){var o=r(56)(!1);o.push([t.i,".content-block[data-v-62fe6bde]{display:flex;max-width:1440px;margin:0 auto}.main-block[data-v-62fe6bde]{width:1000px}.articles-block[data-v-62fe6bde],.category-block[data-v-62fe6bde]{background-color:#f9f2e9;padding:20px 40px}.articles-block[data-v-62fe6bde]{margin-top:20px}.articles-block .article a[data-v-62fe6bde]{padding:10px;margin:15px;display:block;text-decoration:none;border-bottom:1px solid;color:#9f3448}.articles-block .article a>.title[data-v-62fe6bde]{margin-bottom:20px;font-weight:700}.articles-block .paginate[data-v-62fe6bde]{text-align:center;padding:10px;margin:15px}.articles-block .paginate a[data-v-62fe6bde]{padding:10px;margin:5px;text-decoration:none;color:#9f3448}.articles-block .paginate a.nuxt-link-exact-active[data-v-62fe6bde]{background-color:#e7ccba}",""]),t.exports=o},461:function(t,e,r){"use strict";r.r(e);r(61),r(81),r(45),r(59),r(44),r(15),r(273);var o={name:"CategoryIndex",components:{SideBar:r(428).default},validate:function(t){var e=t.params;return!!t.store.getters.getCategories.map((function(t){return t.routeName})).includes(e.category.toLowerCase())},data:function(){return{category:"",perPage:10}},computed:{page:function(){return this.$route.query.page||1},allArticlesByCategory:function(){var t=this;return this.$store.getters.getAllArticles.filter((function(article){return article.category===t.category.routeName})).slice((this.page-1)*this.perPage,this.page*this.perPage)},totalCountByCategory:function(){var t=this;return this.$store.getters.getAllArticles.filter((function(article){return article.category===t.category.routeName})).length}},mounted:function(){var t=this;this.category=this.$store.getters.getCategories.find((function(e){return e.routeName===t.$route.params.category.toLowerCase()}))}},n=(r(438),r(58)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content-block"},[r("div",{staticClass:"main-block"},[r("div",{staticClass:"category-block"},[r("h2",[t._v("Category: "+t._s(t.category.name))])]),t._v(" "),r("div",{staticClass:"articles-block"},[t._l(t.allArticlesByCategory,(function(article){return r("div",{key:article.title,staticClass:"article"},[r("NuxtLink",{attrs:{to:{name:"article-category-slug",params:{category:t.category.routeName,slug:article.slug}}}},[r("div",{staticClass:"title"},[t._v(t._s(article.title))]),t._v(" "),r("div",{staticClass:"description"},[t._v("\n            "+t._s(article.description.slice(0,80))+" ......\n          ")])])],1)})),t._v(" "),r("div",{staticClass:"paginate"},t._l(Math.ceil(t.totalCountByCategory/t.perPage),(function(e){return r("NuxtLink",{key:e,class:{"nuxt-link-exact-active nuxt-link-active":1===t.page&&1===e},attrs:{to:{name:"article-category",params:{category:t.category.routeName},query:{page:e}}}},[t._v(t._s(e))])})),1)],2)]),t._v(" "),r("side-bar")],1)}),[],!1,null,"62fe6bde",null);e.default=component.exports;installComponents(component,{SideBar:r(428).default})}}]);