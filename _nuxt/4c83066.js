(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{416:function(t,e,n){var content=n(422);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(79).default)("b5ac6290",content,!0,{sourceMap:!1})},421:function(t,e,n){"use strict";n(416)},422:function(t,e,n){var r=n(78)(!1);r.push([t.i,".article-block[data-v-91a0a464]{background-color:#f3f4f6;padding:20px 40px}",""]),t.exports=r},438:function(t,e,n){"use strict";n.r(e);var r=n(9),c=(n(56),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,c=t.error,e.next=3,n(r.slug).where({category:r.category}).fetch().catch((function(){c({statusCode:404,message:"Page not found"})}));case 3:return o=e.sent,e.abrupt("return",{page:o});case 5:case"end":return e.stop()}}),e)})))()}}),o=(n(421),n(54)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article-block"},[n("h1",[t._v(t._s(t.page.title))]),t._v(" "),n("h2",[t._v("Last Modify Datetime: "+t._s(t.page.updatedAt))]),t._v(" "),n("p",[t._v(t._s(t.page.description))]),t._v(" "),n("nuxt-content",{attrs:{document:t.page}})],1)}),[],!1,null,"91a0a464",null);e.default=component.exports}}]);