(window.webpackJsonp=window.webpackJsonp||[]).push([[10,4,6],{431:function(t,e,o){var content=o(436);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(60).default)("2dff517e",content,!0,{sourceMap:!1})},432:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"profile"},[n("img",{staticClass:"avatar",attrs:{src:o(433),alt:"My Avatar"}}),t._v(" "),n("h1",[t._v("Chris Wang")]),t._v(" "),n("p",[t._v("Keep Learning, and Keep Coding.")])]),t._v(" "),n("div",{staticClass:"introduction"},[n("p",[t._v("\n      長期耕耘且涉略前端的後端工程師 • 期許自己每天多懂一點新知識 • 莫欺少年窮\n    ")])])])}],r={name:"MyProfile"},d=(o(435),o(61)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),n,!1,null,"ec6d202e",null);e.default=component.exports},433:function(t,e,o){t.exports=o.p+"img/avatar.61527b4.png"},434:function(t,e,o){t.exports=o.p+"img/fish.32d9e04.gif"},435:function(t,e,o){"use strict";o(431)},436:function(t,e,o){var n=o(59)(!1);n.push([t.i,".introduction[data-v-ec6d202e],.profile[data-v-ec6d202e]{background-color:#f9f2e9;padding:20px}.introduction[data-v-ec6d202e]{margin-top:20px}.avatar[data-v-ec6d202e]{border-radius:50%;width:150px;height:150px}",""]),t.exports=n},437:function(t,e,o){var content=o(441);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(60).default)("83f6761a",content,!0,{sourceMap:!1})},438:function(t,e,o){t.exports=o.p+"img/aquarium.c8d0712.jpg"},439:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"aquarium"},[n("img",{staticClass:"fish1",attrs:{src:o(434),alt:"fish"}}),t._v(" "),n("img",{staticClass:"fish2",attrs:{src:o(434),alt:"fish"}})])}],r=(o(39),o(14),{name:"SideBar",components:{MyProfile:o(432).default},computed:{articlesByPopular:function(){return this.$store.getters.getAllArticles.filter((function(article){return!0===article.isPopular}))}}}),d=(o(440),o(61)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"side-block"},[o("MyProfile"),t._v(" "),o("div",{staticClass:"popular"},[o("div",{staticClass:"title"},[t._v("熱門文章 📌")]),t._v(" "),o("div",{staticClass:"list"},t._l(t.articlesByPopular,(function(article){return o("NuxtLink",{key:article.title,staticClass:"article",attrs:{to:{name:"article-category-slug",params:{category:article.category,slug:article.slug}}}},[t._v("\n        "+t._s(article.title)+"\n      ")])})),1)]),t._v(" "),t._m(0)],1)}),n,!1,null,"d768cae8",null);e.default=component.exports;installComponents(component,{MyProfile:o(432).default})},440:function(t,e,o){"use strict";o(437)},441:function(t,e,o){var n=o(59),r=o(276),d=o(438),c=n(!1),l=r(d);c.push([t.i,".side-block[data-v-d768cae8]{width:400px;text-align:center;margin:0 0 40px 40px}.popular[data-v-d768cae8]{background-color:#f9f2e9;padding:20px;margin-top:20px}.popular .title[data-v-d768cae8]{font-size:18px;border-bottom:1px solid #9b9b9b;padding:5px}.popular .list[data-v-d768cae8]{margin-top:10px}.popular .article[data-v-d768cae8]{display:block;text-decoration:none;padding:5px;color:#9f3448;border-bottom:1px dashed;margin-top:10px}.aquarium[data-v-d768cae8]{position:relative;background-color:#a0bed5;margin-top:20px;height:200px;background-image:url("+l+");background-size:cover}.fish1[data-v-d768cae8]{position:absolute;top:10px;left:20px;width:80px;height:80px;-webkit-animation:animationFish1-data-v-d768cae8 10s linear infinite;animation:animationFish1-data-v-d768cae8 10s linear infinite}@-webkit-keyframes animationFish1-data-v-d768cae8{0%{transform:translate(0) rotateY(180deg)}20%{transform:translate(30px,100px) rotateY(180deg)}50%{transform:translate(250px,20px) rotateY(180deg)}51%{transform:translate(250px,20px) rotateY(0deg)}75%{transform:translate(180px,50px) rotateY(0deg)}to{transform:translate(0) rotateY(0deg)}}@keyframes animationFish1-data-v-d768cae8{0%{transform:translate(0) rotateY(180deg)}20%{transform:translate(30px,100px) rotateY(180deg)}50%{transform:translate(250px,20px) rotateY(180deg)}51%{transform:translate(250px,20px) rotateY(0deg)}75%{transform:translate(180px,50px) rotateY(0deg)}to{transform:translate(0) rotateY(0deg)}}.fish2[data-v-d768cae8]{position:absolute;top:100px;left:320px;width:50px;height:50px;-webkit-animation:animationFish2-data-v-d768cae8 8s linear infinite;animation:animationFish2-data-v-d768cae8 8s linear infinite}@-webkit-keyframes animationFish2-data-v-d768cae8{0%{transform:translate(0) rotateY(0deg)}45%{transform:translate(-200px,20px) rotateY(0deg)}50%{transform:translate(-200px,20px) rotateY(0deg)}51%{transform:translate(-200px,20px) rotateY(180deg)}90%{transform:translate(0) rotateY(180deg)}to{transform:translate(0) rotateY(180deg)}}@keyframes animationFish2-data-v-d768cae8{0%{transform:translate(0) rotateY(0deg)}45%{transform:translate(-200px,20px) rotateY(0deg)}50%{transform:translate(-200px,20px) rotateY(0deg)}51%{transform:translate(-200px,20px) rotateY(180deg)}90%{transform:translate(0) rotateY(180deg)}to{transform:translate(0) rotateY(180deg)}}@media (max-width:768px){.side-block[data-v-d768cae8]{width:100%;margin:40px 0}}",""]),t.exports=c},442:function(t,e,o){t.exports=o.p+"img/github.0035c30.png"},443:function(t,e,o){t.exports=o.p+"img/minion-sketch.9878bf4.png"},444:function(t,e,o){var map={"./app.css":279,"./aquarium.jpg":438,"./articles/php-fpm-nginx-roadrunner-swoole-speed-test-1.png":445,"./articles/php-laravel-roadrunner-first-experience-1.png":446,"./articles/php-laravel-swoole-first-experience-1.png":447,"./avatar.png":433,"./fish.gif":434,"./foods/20210201.jpg":448,"./foods/20210604.jpg":449,"./foods/20210809.jpg":450,"./foods/20210812.jpg":451,"./foods/20210908.jpg":452,"./foods/20211101.jpg":453,"./foods/20211117.jpg":454,"./foods/20211208.jpg":455,"./foods/20220126.jpg":456,"./foods/20220719.jpg":457,"./foods/20220720.jpg":458,"./foods/20220721.jpg":459,"./foods/20220722.jpg":460,"./foods/20220725.jpg":461,"./foods/20220726.jpg":462,"./foods/20220727.jpg":463,"./foods/20220728.jpg":464,"./foods/20220729.jpg":465,"./foods/20220801.jpg":466,"./foods/20220802.jpg":467,"./foods/20220803.jpg":468,"./foods/20220804.jpg":469,"./foods/20220805.jpg":470,"./foods/20220808.jpg":471,"./foods/20220809.jpg":472,"./foods/20220810.jpg":473,"./foods/20220811.jpg":474,"./foods/20220812.jpg":475,"./foods/20220815.jpg":476,"./foods/20220816.jpg":477,"./foods/20220817.jpg":478,"./foods/20220818.jpg":479,"./foods/20220819.jpg":480,"./foods/20220822.jpg":481,"./foods/20220823.jpg":482,"./foods/20220824.jpg":483,"./foods/20220825.jpg":484,"./foods/20220826.jpg":485,"./github.png":442,"./go-up.jpg":280,"./minion-find-the-way.jpg":278,"./minion-sketch.png":443};function n(t){var e=r(t);return o(e)}function r(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=r,t.exports=n,n.id=444},445:function(t,e,o){t.exports=o.p+"img/php-fpm-nginx-roadrunner-swoole-speed-test-1.1a49688.png"},446:function(t,e,o){t.exports=o.p+"img/php-laravel-roadrunner-first-experience-1.3125550.png"},447:function(t,e,o){t.exports=o.p+"img/php-laravel-swoole-first-experience-1.01b392e.png"},448:function(t,e,o){t.exports=o.p+"img/20210201.e42bacd.jpg"},449:function(t,e,o){t.exports=o.p+"img/20210604.e45588a.jpg"},450:function(t,e,o){t.exports=o.p+"img/20210809.d30f2a8.jpg"},451:function(t,e,o){t.exports=o.p+"img/20210812.c459835.jpg"},452:function(t,e,o){t.exports=o.p+"img/20210908.5e861e9.jpg"},453:function(t,e,o){t.exports=o.p+"img/20211101.4138c92.jpg"},454:function(t,e,o){t.exports=o.p+"img/20211117.acfc7f6.jpg"},455:function(t,e,o){t.exports=o.p+"img/20211208.94cdce2.jpg"},456:function(t,e,o){t.exports=o.p+"img/20220126.bbaca25.jpg"},457:function(t,e,o){t.exports=o.p+"img/20220719.c948169.jpg"},458:function(t,e,o){t.exports=o.p+"img/20220720.0642856.jpg"},459:function(t,e,o){t.exports=o.p+"img/20220721.1c9d7cf.jpg"},460:function(t,e,o){t.exports=o.p+"img/20220722.e177033.jpg"},461:function(t,e,o){t.exports=o.p+"img/20220725.a062c03.jpg"},462:function(t,e,o){t.exports=o.p+"img/20220726.84811a9.jpg"},463:function(t,e,o){t.exports=o.p+"img/20220727.5af1820.jpg"},464:function(t,e,o){t.exports=o.p+"img/20220728.c98721c.jpg"},465:function(t,e,o){t.exports=o.p+"img/20220729.8683112.jpg"},466:function(t,e,o){t.exports=o.p+"img/20220801.2db8e84.jpg"},467:function(t,e,o){t.exports=o.p+"img/20220802.e28f5ad.jpg"},468:function(t,e,o){t.exports=o.p+"img/20220803.d8fc678.jpg"},469:function(t,e,o){t.exports=o.p+"img/20220804.055f97d.jpg"},470:function(t,e,o){t.exports=o.p+"img/20220805.0f5281e.jpg"},471:function(t,e,o){t.exports=o.p+"img/20220808.445027b.jpg"},472:function(t,e,o){t.exports=o.p+"img/20220809.4ddb757.jpg"},473:function(t,e,o){t.exports=o.p+"img/20220810.9c631e2.jpg"},474:function(t,e,o){t.exports=o.p+"img/20220811.c053877.jpg"},475:function(t,e,o){t.exports=o.p+"img/20220812.90e8f39.jpg"},476:function(t,e,o){t.exports=o.p+"img/20220815.9353c70.jpg"},477:function(t,e,o){t.exports=o.p+"img/20220816.dafcdd3.jpg"},478:function(t,e,o){t.exports=o.p+"img/20220817.61be5db.jpg"},479:function(t,e,o){t.exports=o.p+"img/20220818.d703898.jpg"},480:function(t,e,o){t.exports=o.p+"img/20220819.678b5ef.jpg"},481:function(t,e,o){t.exports=o.p+"img/20220822.8ae50db.jpg"},482:function(t,e,o){t.exports=o.p+"img/20220823.fce8523.jpg"},483:function(t,e,o){t.exports=o.p+"img/20220824.793cd0b.jpg"},484:function(t,e,o){t.exports=o.p+"img/20220825.4b1133c.jpg"},485:function(t,e,o){t.exports=o.p+"img/20220826.44fd7fe.jpg"},486:function(t,e,o){var content=o(495);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(60).default)("516ab918",content,!0,{sourceMap:!1})},494:function(t,e,o){"use strict";o(486)},495:function(t,e,o){var n=o(59)(!1);n.push([t.i,".content-block[data-v-307222e2]{display:flex;max-width:1440px;margin:0 auto}.main-block[data-v-307222e2]{width:1000px}.category-block[data-v-307222e2],.search-block[data-v-307222e2]{background-color:#f9f2e9;padding:20px 40px}.foods-block[data-v-307222e2],.search-block[data-v-307222e2]{margin-top:20px}.foods-block[data-v-307222e2]{display:flex;justify-content:space-around;flex-wrap:wrap;background-color:#f9f2e9;padding:20px}.food[data-v-307222e2]{position:relative;display:inline-block;flex-basis:25%;margin:10px 0;padding:20px;box-shadow:2px 2px 10px -1px rgba(0,0,0,.3);text-align:center;background-color:#f7eade;min-width:180px}.food .image[data-v-307222e2]{width:100%}.food .name[data-v-307222e2]{line-break:anywhere}.food .price[data-v-307222e2]{color:#9f3448}.food .store-name[data-v-307222e2]{margin:0}.food .created-at[data-v-307222e2]{margin:8px 0;color:#b1908b}.food .description[data-v-307222e2]{margin:0;line-break:anywhere}.paginate[data-v-307222e2]{text-align:center;padding:15px 25px 25px;background-color:#f9f2e9}.paginate a[data-v-307222e2]{display:inline-block;padding:10px;margin:5px;text-decoration:none;color:#9f3448}.paginate-active[data-v-307222e2]{background-color:#e7ccba}.el-skeleton.is-animated .el-skeleton__item[data-v-307222e2]{background:linear-gradient(90deg,#ddc3b5 25%,#e7d0c2 37%,#ddc3b5 63%);background-size:400% 100%;-webkit-animation:el-skeleton-loading 1.4s ease infinite;animation:el-skeleton-loading 1.4s ease infinite}.star-block[data-v-307222e2]{position:absolute;top:2px;right:10px}.star-rate[data-v-307222e2]{display:inline-block;vertical-align:top}.star-number[data-v-307222e2]{color:#ff8100;font-size:22px;font-style:italic;font-weight:700}@media (max-width:768px){.content-block[data-v-307222e2]{flex-direction:column}.main-block[data-v-307222e2]{width:100%}.food[data-v-307222e2]{flex-basis:40%}}",""]),t.exports=n},522:function(t,e,o){"use strict";o.r(e);o(62);var n={name:"FoodIndex",components:{SideBar:o(439).default},data:function(){return{isFoodsLoading:!0,perPage:9,currentPage:1}},computed:{foods:function(){return this.$store.getters.getFoods.slice((this.currentPage-1)*this.perPage,this.currentPage*this.perPage)},totalCountFoods:function(){return this.$store.getters.getFoods.length}},mounted:function(){this.$store.dispatch("setFoods"),this.isFoodsLoading=!1},methods:{setCurrentPage:function(t){this.currentPage=t}}},r=(o(494),o(61)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-block"},[n("div",{staticClass:"main-block"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("el-skeleton",{attrs:{loading:t.isFoodsLoading,animated:""}},[n("template",{slot:"template"},[n("div",{staticClass:"foods-block"},t._l(6,(function(e,o){return n("div",{key:o,staticClass:"food"},[n("el-skeleton-item",{staticStyle:{width:"100%",height:"135px"},attrs:{variant:"image"}}),t._v(" "),n("el-skeleton-item",{staticStyle:{width:"70%",height:"24px",margin:"1em 0"},attrs:{variant:"h3"}}),t._v(" "),n("el-skeleton-item",{staticStyle:{width:"60%",height:"20px"},attrs:{variant:"text"}}),t._v(" "),n("el-skeleton-item",{staticStyle:{width:"60%",height:"20px",margin:"8px 0"},attrs:{variant:"text"}}),t._v(" "),n("el-skeleton-item",{staticStyle:{width:"100%",height:"40px"},attrs:{variant:"text"}})],1)})),0)]),t._v(" "),n("template",{slot:"default"},[n("div",{staticStyle:{display:"flex","justify-content":"space-around","flex-wrap":"wrap","background-color":"#f9f2e9",padding:"20px","margin-top":"20px"}},t._l(t.foods,(function(e,r){return n("div",{key:r,staticClass:"food"},[n("div",{staticClass:"star-block"},[n("el-rate",{staticClass:"star-rate",attrs:{disabled:"",value:e.star,colors:["#ff8100","#ff8100","#ff8100"],"disabled-void-color":"#bfb5b3","score-template":e.star.toString()}}),t._v(" "),n("span",{staticClass:"star-number"},[t._v(t._s(e.star))])],1),t._v(" "),n("img",{staticClass:"image",attrs:{src:o(444)("./"+e.image),alt:e.name}}),t._v(" "),n("h3",{staticClass:"name"},[t._v("\n              "+t._s(e.name)+"\n              "),e.price?n("span",{staticClass:"price"},[t._v("$"+t._s(e.price))]):t._e()]),t._v(" "),n("h4",{staticClass:"store-name"},[t._v(t._s(e.storeName))]),t._v(" "),n("h4",{staticClass:"created-at"},[t._v(t._s(e.createdAt))]),t._v(" "),n("p",{staticClass:"description"},[t._v(t._s(e.description))])])})),0),t._v(" "),n("div",{staticStyle:{"text-align":"center",padding:"15px 25px 25px 25px","background-color":"#f9f2e9"}},t._l(Math.ceil(t.totalCountFoods/t.perPage),(function(e){return n("a",{key:e,class:{"paginate-active":t.currentPage===e},staticStyle:{display:"inline-block",padding:"10px",margin:"5px","text-decoration":"none",color:"#9f3448"},attrs:{href:"#"},on:{click:function(o){return o.preventDefault(),t.setCurrentPage(e)}}},[t._v(t._s(e))])})),0)])],2)],1),t._v(" "),n("side-bar")],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"category-block"},[o("h2",[t._v("Category: 食物")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"search-block"},[o("p",[t._v("星等為依據個人喜好跟主觀判斷所評分，僅供參考。")]),t._v(" "),o("p",[t._v("\n        1⭐: 不喜歡； 2⭐: 普通，以填飽肚子為主； 3⭐: 還不錯； 4⭐: 超好吃\n      ")])])}],!1,null,"307222e2",null);e.default=component.exports;installComponents(component,{SideBar:o(439).default})}}]);