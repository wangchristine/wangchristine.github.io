(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,4],{422:function(t,e,r){var content=r(426);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("2dff517e",content,!0,{sourceMap:!1})},423:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"profile"},[n("img",{staticClass:"avatar",attrs:{src:r(424),alt:"My Avatar"}}),t._v(" "),n("h1",[t._v("Chris Wang")]),t._v(" "),n("p",[t._v("Keep Learning, and Keep Coding.")])]),t._v(" "),n("div",{staticClass:"introduction"},[n("p",[t._v("\n      長期耕耘且涉略前端的後端工程師 • 期許自己每天多懂一點新知識 • 莫欺少年窮\n    ")])])])}],o={name:"MyProfile"},c=(r(425),r(57)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),n,!1,null,"ec6d202e",null);e.default=component.exports},424:function(t,e,r){t.exports=r.p+"img/avatar.61527b4.png"},425:function(t,e,r){"use strict";r(422)},426:function(t,e,r){var n=r(55)(!1);n.push([t.i,".introduction[data-v-ec6d202e],.profile[data-v-ec6d202e]{background-color:#f9f2e9;padding:20px}.introduction[data-v-ec6d202e]{margin-top:20px}.avatar[data-v-ec6d202e]{border-radius:50%;width:150px;height:150px}",""]),t.exports=n},427:function(t,e,r){var content=r(430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("ab2f5650",content,!0,{sourceMap:!1})},428:function(t,e,r){"use strict";r.r(e);var n={name:"SideBar",components:{MyProfile:r(423).default}},o=(r(429),r(57)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"side-block"},[e("MyProfile")],1)}),[],!1,null,"40b7a496",null);e.default=component.exports;installComponents(component,{MyProfile:r(423).default})},429:function(t,e,r){"use strict";r(427)},430:function(t,e,r){var n=r(55)(!1);n.push([t.i,".side-block[data-v-40b7a496]{width:400px;text-align:center;margin:0 0 40px 40px}",""]),t.exports=n},431:function(t,e,r){var content=r(436);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("42eea9f7",content,!0,{sourceMap:!1})},435:function(t,e,r){"use strict";r(431)},436:function(t,e,r){var n=r(55)(!1);n.push([t.i,".content-block[data-v-3dc8b586]{display:flex;max-width:1440px;margin:0 auto}.main-block[data-v-3dc8b586]{width:1000px}.articles-block[data-v-3dc8b586],.category-block[data-v-3dc8b586]{background-color:#f9f2e9;padding:20px 40px}.articles-block[data-v-3dc8b586]{margin-top:20px}.articles-block a[data-v-3dc8b586]{padding:10px;margin:15px;display:block;text-decoration:none;border-bottom:1px solid;color:#9f3448}.articles-block>a>.title[data-v-3dc8b586]{margin-bottom:20px;font-weight:700}",""]),t.exports=n},457:function(t,e,r){"use strict";r.r(e);var n=r(9),o=(r(58),r(60),r(81),r(43),r(273),r(15),{name:"CategoryIndex",components:{SideBar:r(428).default},validate:function(t){var e=t.params;return!!t.store.getters.getCategories.map((function(t){return t.routeName})).includes(e.category.toLowerCase())},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,n=t.$content,t.error,e.next=3,n(r.category.toLowerCase()).where({category:r.category.toLowerCase()}).sortBy("updatedAt","desc").limit(10).fetch();case 3:return o=e.sent,e.abrupt("return",{articles:o});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{category:""}},mounted:function(){var t=this;this.category=this.$store.getters.getCategories.find((function(e){return e.routeName===t.$route.params.category.toLowerCase()}))}}),c=(r(435),r(57)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content-block"},[r("div",{staticClass:"main-block"},[r("div",{staticClass:"category-block"},[r("h2",[t._v("Category: "+t._s(t.category.name))])]),t._v(" "),t._l(t.articles,(function(article){return r("div",{key:article.title,staticClass:"articles-block"},[r("NuxtLink",{attrs:{to:{name:"article-category-slug",params:{category:t.category.routeName,slug:article.slug}}}},[r("div",{staticClass:"title"},[t._v(t._s(article.title))]),t._v(" "),r("div",{staticClass:"description"},[t._v("\n          "+t._s(article.description.slice(0,80))+" ......\n        ")])])],1)}))],2),t._v(" "),r("side-bar")],1)}),[],!1,null,"3dc8b586",null);e.default=component.exports;installComponents(component,{SideBar:r(428).default})}}]);