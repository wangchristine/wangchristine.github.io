(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,4],{430:function(t,e,r){var content=r(435);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(60).default)("2dff517e",content,!0,{sourceMap:!1})},431:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"profile"},[n("img",{staticClass:"avatar",attrs:{src:r(432),alt:"My Avatar"}}),t._v(" "),n("h1",[t._v("Chris Wang")]),t._v(" "),n("p",[t._v("Keep Learning, and Keep Coding.")])]),t._v(" "),n("div",{staticClass:"introduction"},[n("p",[t._v("\n      長期耕耘且涉略前端的後端工程師 • 期許自己每天多懂一點新知識 • 莫欺少年窮\n    ")])])])}],o={name:"MyProfile"},l=(r(434),r(61)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),n,!1,null,"ec6d202e",null);e.default=component.exports},432:function(t,e,r){t.exports=r.p+"img/avatar.61527b4.png"},433:function(t,e,r){t.exports=r.p+"img/fish.32d9e04.gif"},434:function(t,e,r){"use strict";r(430)},435:function(t,e,r){var n=r(59)(!1);n.push([t.i,".introduction[data-v-ec6d202e],.profile[data-v-ec6d202e]{background-color:#f9f2e9;padding:20px}.introduction[data-v-ec6d202e]{margin-top:20px}.avatar[data-v-ec6d202e]{border-radius:50%;width:150px;height:150px}",""]),t.exports=n},436:function(t,e,r){var content=r(440);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(60).default)("6e96ad31",content,!0,{sourceMap:!1})},437:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"aquarium"},[n("img",{staticClass:"fish1",attrs:{src:r(433),alt:"fish"}}),t._v(" "),n("img",{staticClass:"fish2",attrs:{src:r(433),alt:"fish"}})])}],o=(r(39),r(14),{name:"SideBar",components:{MyProfile:r(431).default},computed:{articlesByPopular:function(){return this.$store.getters.getAllArticles.filter((function(article){return!0===article.isPopular}))}}}),l=(r(439),r(61)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"side-block"},[r("MyProfile"),t._v(" "),r("div",{staticClass:"popular"},[r("div",{staticClass:"title"},[t._v("熱門文章 📌")]),t._v(" "),r("div",{staticClass:"list"},t._l(t.articlesByPopular,(function(article){return r("NuxtLink",{key:article.title,staticClass:"article",attrs:{to:{name:"article-category-slug",params:{category:article.category,slug:article.slug}}}},[t._v("\n        "+t._s(article.title)+"\n      ")])})),1)]),t._v(" "),t._m(0)],1)}),n,!1,null,"54700b20",null);e.default=component.exports;installComponents(component,{MyProfile:r(431).default})},438:function(t,e,r){t.exports=r.p+"img/aquarium.c8d0712.jpg"},439:function(t,e,r){"use strict";r(436)},440:function(t,e,r){var n=r(59),o=r(276),l=r(438),d=n(!1),c=o(l);d.push([t.i,".side-block[data-v-54700b20]{width:400px;text-align:center;margin:0 0 40px 40px}.popular[data-v-54700b20]{background-color:#f9f2e9;padding:20px;margin-top:20px}.popular .title[data-v-54700b20]{font-size:18px;border-bottom:1px solid #9b9b9b;padding:5px}.popular .list[data-v-54700b20]{margin-top:10px}.popular .article[data-v-54700b20]{display:block;text-decoration:none;padding:5px;color:#9f3448;border-bottom:1px dashed;margin-top:10px}.aquarium[data-v-54700b20]{position:relative;background-color:#a0bed5;margin-top:20px;height:200px;background-image:url("+c+");background-size:cover}.fish1[data-v-54700b20]{position:absolute;top:10px;left:20px;width:80px;height:80px;-webkit-animation:animationFish1-data-v-54700b20 10s linear infinite;animation:animationFish1-data-v-54700b20 10s linear infinite}@-webkit-keyframes animationFish1-data-v-54700b20{0%{transform:translate(0) rotateY(180deg)}20%{transform:translate(30px,100px) rotateY(180deg)}50%{transform:translate(250px,20px) rotateY(180deg)}51%{transform:translate(250px,20px) rotateY(0deg)}75%{transform:translate(180px,50px) rotateY(0deg)}to{transform:translate(0) rotateY(0deg)}}@keyframes animationFish1-data-v-54700b20{0%{transform:translate(0) rotateY(180deg)}20%{transform:translate(30px,100px) rotateY(180deg)}50%{transform:translate(250px,20px) rotateY(180deg)}51%{transform:translate(250px,20px) rotateY(0deg)}75%{transform:translate(180px,50px) rotateY(0deg)}to{transform:translate(0) rotateY(0deg)}}.fish2[data-v-54700b20]{position:absolute;top:100px;left:320px;width:50px;height:50px;-webkit-animation:animationFish2-data-v-54700b20 8s linear infinite;animation:animationFish2-data-v-54700b20 8s linear infinite}@-webkit-keyframes animationFish2-data-v-54700b20{0%{transform:translate(0) rotateY(0deg)}45%{transform:translate(-200px,20px) rotateY(0deg)}50%{transform:translate(-200px,20px) rotateY(0deg)}51%{transform:translate(-200px,20px) rotateY(180deg)}90%{transform:translate(0) rotateY(180deg)}to{transform:translate(0) rotateY(180deg)}}@keyframes animationFish2-data-v-54700b20{0%{transform:translate(0) rotateY(0deg)}45%{transform:translate(-200px,20px) rotateY(0deg)}50%{transform:translate(-200px,20px) rotateY(0deg)}51%{transform:translate(-200px,20px) rotateY(180deg)}90%{transform:translate(0) rotateY(180deg)}to{transform:translate(0) rotateY(180deg)}}",""]),t.exports=d},446:function(t,e,r){var content=r(460);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(60).default)("b1c7a168",content,!0,{sourceMap:!1})},459:function(t,e,r){"use strict";r(446)},460:function(t,e,r){var n=r(59)(!1);n.push([t.i,".content-block[data-v-5ed389f2]{display:flex;max-width:1440px;margin:0 auto}.article-block[data-v-5ed389f2]{background-color:#f9f2e9;padding:20px 40px;width:1000px}.article-header[data-v-5ed389f2]{border-bottom:1px solid #d7d7d7;margin-bottom:20px;padding-bottom:15px}.timeAt[data-v-5ed389f2]{color:#6e7780;font-size:14px}",""]),t.exports=n},480:function(t,e,r){"use strict";r.r(e);var n=r(9),o=(r(48),{components:{SideBar:r(437).default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,n=t.$content,o=t.error,e.next=3,n(r.category.toLowerCase(),r.slug).where({category:r.category}).fetch().catch((function(){o({statusCode:404,message:"Page not found"})}));case 3:return l=e.sent,e.abrupt("return",{page:l});case 5:case"end":return e.stop()}}),e)})))()}}),l=(r(459),r(61)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content-block"},[r("div",{staticClass:"article-block"},[r("div",{staticClass:"article-header"},[r("h1",[t._v(t._s(t.page.title))]),t._v(" "),r("div",{staticClass:"timeAt"},[t._v("\n        建立於 "+t._s(new Date(t.page.createdAt).toLocaleDateString())+" • 更新於\n        "+t._s(new Date(t.page.updatedAt).toLocaleDateString())+"\n      ")])]),t._v(" "),r("nuxt-content",{attrs:{document:t.page}})],1),t._v(" "),r("side-bar")],1)}),[],!1,null,"5ed389f2",null);e.default=component.exports;installComponents(component,{SideBar:r(437).default})}}]);