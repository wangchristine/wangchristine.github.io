(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,4],{420:function(t,e,r){var content=r(425);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("6506b98b",content,!0,{sourceMap:!1})},421:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile"},[n("img",{staticClass:"avatar",attrs:{src:r(423),alt:"My Avatar"}}),t._v(" "),n("h1",[t._v("Chris Wang")])])}],o={name:"MyProfile"},c=(r(424),r(56)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),n,!1,null,"97dac448",null);e.default=component.exports},422:function(t,e,r){var content=r(428);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("ab2f5650",content,!0,{sourceMap:!1})},423:function(t,e,r){t.exports=r.p+"img/avatar.028f3aa.png"},424:function(t,e,r){"use strict";r(420)},425:function(t,e,r){var n=r(54)(!1);n.push([t.i,".avatar[data-v-97dac448]{border-radius:50%;width:150px;height:150px}",""]),t.exports=n},426:function(t,e,r){"use strict";r.r(e);var n={name:"SideBar",components:{MyProfile:r(421).default}},o=(r(427),r(56)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"side-block"},[e("MyProfile")],1)}),[],!1,null,"40b7a496",null);e.default=component.exports;installComponents(component,{MyProfile:r(421).default})},427:function(t,e,r){"use strict";r(422)},428:function(t,e,r){var n=r(54)(!1);n.push([t.i,".side-block[data-v-40b7a496]{width:400px;text-align:center;margin:0 0 40px 40px}",""]),t.exports=n},430:function(t,e,r){var content=r(435);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("e93f07c8",content,!0,{sourceMap:!1})},434:function(t,e,r){"use strict";r(430)},435:function(t,e,r){var n=r(54)(!1);n.push([t.i,".content-block[data-v-422c6f74]{display:flex;max-width:1440px;margin:0 auto}.article-block[data-v-422c6f74]{background-color:#f9f2e9;padding:20px 40px;width:1000px}.article-header[data-v-422c6f74]{border-bottom:1px solid #d7d7d7;margin-bottom:20px;padding-bottom:15px}.updateAt[data-v-422c6f74]{color:#6e7780;font-size:14px}",""]),t.exports=n},451:function(t,e,r){"use strict";r.r(e);var n=r(9),o=(r(57),{components:{SideBar:r(426).default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,n=t.$content,o=t.error,e.next=3,n(r.category.toLowerCase(),r.slug).where({category:r.category}).fetch().catch((function(){o({statusCode:404,message:"Page not found"})}));case 3:return c=e.sent,e.abrupt("return",{page:c});case 5:case"end":return e.stop()}}),e)})))()}}),c=(r(434),r(56)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content-block"},[r("div",{staticClass:"article-block"},[r("div",{staticClass:"article-header"},[r("h1",[t._v(t._s(t.page.title))]),t._v(" "),r("div",{staticClass:"updateAt"},[t._v("\n        更新於 "+t._s(new Date(t.page.updatedAt).toLocaleDateString())+"\n      ")])]),t._v(" "),r("nuxt-content",{attrs:{document:t.page}})],1),t._v(" "),r("side-bar")],1)}),[],!1,null,"422c6f74",null);e.default=component.exports;installComponents(component,{SideBar:r(426).default})}}]);