(window.webpackJsonp=window.webpackJsonp||[]).push([[11,2,5,7],{438:function(t,e,o){var content=o(443);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(61).default)("2fc2c4bf",content,!0,{sourceMap:!1})},439:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"profile"},[e("img",{staticClass:"avatar",attrs:{src:o(441),alt:"My Avatar"}}),t._v(" "),e("h1",[t._v("Chris Wang")]),t._v(" "),e("p",[t._v("Keep Learning, and Keep Coding.")])]),t._v(" "),e("div",{staticClass:"introduction"},[e("p",[t._v("\n      長期耕耘且涉略前端的後端工程師 • 期許自己每天多懂一點新知識 • 莫欺少年窮\n    ")])])])}],r={name:"MyProfile"},c=(o(442),o(62)),component=Object(c.a)(r,(function(){this._self._c;return this._m(0)}),n,!1,null,"ec6d202e",null);e.default=component.exports},440:function(t,e,o){t.exports=o.p+"img/fish.32d9e04.gif"},441:function(t,e,o){t.exports=o.p+"img/avatar.61527b4.png"},442:function(t,e,o){"use strict";o(438)},443:function(t,e,o){var n=o(60)(!1);n.push([t.i,".introduction[data-v-ec6d202e],.profile[data-v-ec6d202e]{background-color:#f9f2e9;padding:20px}.introduction[data-v-ec6d202e]{margin-top:20px}.avatar[data-v-ec6d202e]{border-radius:50%;width:150px;height:150px}",""]),t.exports=n},444:function(t,e,o){var content=o(448);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(61).default)("2a3a5c79",content,!0,{sourceMap:!1})},445:function(t,e,o){t.exports=o.p+"img/aquarium.c8d0712.jpg"},446:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this._self._c;return t("div",{staticClass:"aquarium"},[t("img",{staticClass:"fish1",attrs:{src:o(440),alt:"fish"}}),this._v(" "),t("img",{staticClass:"fish2",attrs:{src:o(440),alt:"fish"}})])}],r=(o(39),o(14),{name:"SideBar",components:{MyProfile:o(439).default},computed:{articlesByPopular:function(){return this.$store.getters.getAllArticles.filter((function(article){return!0===article.isPopular}))}}}),c=(o(447),o(62)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"side-block"},[e("MyProfile"),t._v(" "),e("div",{staticClass:"popular"},[e("div",{staticClass:"title"},[t._v("熱門文章 📌")]),t._v(" "),e("div",{staticClass:"list"},t._l(t.articlesByPopular,(function(article){return e("NuxtLink",{key:article.title,staticClass:"article",attrs:{to:{name:"article-category-slug",params:{category:article.category,slug:article.slug}}}},[t._v("\n        "+t._s(article.title)+"\n      ")])})),1)]),t._v(" "),t._m(0)],1)}),n,!1,null,"7eb7bee6",null);e.default=component.exports;installComponents(component,{MyProfile:o(439).default})},447:function(t,e,o){"use strict";o(444)},448:function(t,e,o){var n=o(60),r=o(281),c=o(445),d=n(!1),f=r(c);d.push([t.i,".side-block[data-v-7eb7bee6]{width:400px;text-align:center;margin:0 0 40px 40px}.popular[data-v-7eb7bee6]{background-color:#f9f2e9;padding:20px;margin-top:20px}.popular .title[data-v-7eb7bee6]{font-size:18px;border-bottom:1px solid #9b9b9b;padding:5px}.popular .list[data-v-7eb7bee6]{margin-top:10px}.popular .article[data-v-7eb7bee6]{display:block;text-decoration:none;padding:5px;color:#9f3448;border-bottom:1px dashed;margin-top:10px}.aquarium[data-v-7eb7bee6]{position:relative;background-color:#a0bed5;margin-top:20px;height:200px;background-image:url("+f+");background-size:cover;overflow:hidden}.fish1[data-v-7eb7bee6]{position:absolute;top:10px;left:20px;width:80px;height:80px;animation:animationFish1-7eb7bee6 10s linear infinite}@keyframes animationFish1-7eb7bee6{0%{transform:translate(0) rotateY(180deg)}20%{transform:translate(30px,100px) rotateY(180deg)}50%{transform:translate(250px,20px) rotateY(180deg)}51%{transform:translate(250px,20px) rotateY(0deg)}75%{transform:translate(180px,50px) rotateY(0deg)}to{transform:translate(0) rotateY(0deg)}}.fish2[data-v-7eb7bee6]{position:absolute;top:100px;left:320px;width:50px;height:50px;animation:animationFish2-7eb7bee6 8s linear infinite}@keyframes animationFish2-7eb7bee6{0%{transform:translate(0) rotateY(0deg)}45%{transform:translate(-200px,20px) rotateY(0deg)}50%{transform:translate(-200px,20px) rotateY(0deg)}51%{transform:translate(-200px,20px) rotateY(180deg)}90%{transform:translate(0) rotateY(180deg)}to{transform:translate(0) rotateY(180deg)}}@media (max-width:768px){.side-block[data-v-7eb7bee6]{width:100%;margin:40px 0}}",""]),t.exports=d},449:function(t,e,o){var map={"./20210201.jpg":450,"./20210604.jpg":451,"./20210809.jpg":452,"./20210812.jpg":453,"./20210908.jpg":454,"./20211101.jpg":455,"./20211117.jpg":456,"./20211208.jpg":457,"./20220126.jpg":458,"./20220719.jpg":459,"./20220720.jpg":460,"./20220721.jpg":461,"./20220722.jpg":462,"./20220725.jpg":463,"./20220726.jpg":464,"./20220727.jpg":465,"./20220728.jpg":466,"./20220729.jpg":467,"./20220801.jpg":468,"./20220802.jpg":469,"./20220803.jpg":470,"./20220804.jpg":471,"./20220805.jpg":472,"./20220808.jpg":473,"./20220809.jpg":474,"./20220810.jpg":475,"./20220811.jpg":476,"./20220812.jpg":477,"./20220815.jpg":478,"./20220816.jpg":479,"./20220817.jpg":480,"./20220818.jpg":481,"./20220819.jpg":482,"./20220822.jpg":483,"./20220823.jpg":484,"./20220824.jpg":485,"./20220825.jpg":486,"./20220826.jpg":487,"./20220829.jpg":488,"./20220830.jpg":489,"./20220831.jpg":490,"./20220901.jpg":491,"./20220912.jpg":492,"./20220913.jpg":493,"./20220914.jpg":494,"./20220915.jpg":495,"./20220916.jpg":496,"./20220919.jpg":497,"./20220920.jpg":498,"./20220921.jpg":499,"./20220922.jpg":500,"./20220923.jpg":501,"./20220926.jpg":502,"./20220927.jpg":503,"./20220928.jpg":504,"./20220929.jpg":505,"./20220930.jpg":506,"./20221003.jpg":507,"./20221004.jpg":508,"./20221005.jpg":509,"./20221006.jpg":510,"./20221007.jpg":511,"./20221011.jpg":512,"./20221012.jpg":513,"./20221013.jpg":514,"./20221014.jpg":515,"./20221017.jpg":516,"./20221018.jpg":517,"./20221019.jpg":518,"./20221020.jpg":519,"./20221021.jpg":520,"./20221024.jpg":521,"./20221025.jpg":522,"./20221026.jpg":523,"./20221027.jpg":524,"./20221028.jpg":525,"./20221031.jpg":526,"./20221101.jpg":527,"./20221102.jpg":528,"./20221103.jpg":529,"./20221104.jpg":530,"./20221107.jpg":531,"./20221108.jpg":532,"./20221109.jpg":533,"./20221110.jpg":534,"./20221111.jpg":535,"./20221114.jpg":536,"./20221115.jpg":537,"./20221116.jpg":538,"./20221117.jpg":539,"./20221118.jpg":540,"./20221121.jpg":541,"./20221122.jpg":542,"./20221123.jpg":543,"./20221124.jpg":544,"./20221125.jpg":545,"./20221202.jpg":546};function n(t){var e=r(t);return o(e)}function r(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=r,t.exports=n,n.id=449},450:function(t,e,o){t.exports=o.p+"img/20210201.b329d97.jpg"},451:function(t,e,o){t.exports=o.p+"img/20210604.3cef7dd.jpg"},452:function(t,e,o){t.exports=o.p+"img/20210809.062dda5.jpg"},453:function(t,e,o){t.exports=o.p+"img/20210812.358ae60.jpg"},454:function(t,e,o){t.exports=o.p+"img/20210908.f2cb4c3.jpg"},455:function(t,e,o){t.exports=o.p+"img/20211101.3fa7d44.jpg"},456:function(t,e,o){t.exports=o.p+"img/20211117.3cc86c3.jpg"},457:function(t,e,o){t.exports=o.p+"img/20211208.4d9aa6e.jpg"},458:function(t,e,o){t.exports=o.p+"img/20220126.99d2010.jpg"},459:function(t,e,o){t.exports=o.p+"img/20220719.a2cf035.jpg"},460:function(t,e,o){t.exports=o.p+"img/20220720.ee3438a.jpg"},461:function(t,e,o){t.exports=o.p+"img/20220721.6cd632f.jpg"},462:function(t,e,o){t.exports=o.p+"img/20220722.101dd21.jpg"},463:function(t,e,o){t.exports=o.p+"img/20220725.a6f8301.jpg"},464:function(t,e,o){t.exports=o.p+"img/20220726.0ac8eeb.jpg"},465:function(t,e,o){t.exports=o.p+"img/20220727.df97957.jpg"},466:function(t,e,o){t.exports=o.p+"img/20220728.2e85177.jpg"},467:function(t,e,o){t.exports=o.p+"img/20220729.9e4e9b9.jpg"},468:function(t,e,o){t.exports=o.p+"img/20220801.01ffae9.jpg"},469:function(t,e,o){t.exports=o.p+"img/20220802.c48b9c6.jpg"},470:function(t,e,o){t.exports=o.p+"img/20220803.024cd3e.jpg"},471:function(t,e,o){t.exports=o.p+"img/20220804.ab1bb2a.jpg"},472:function(t,e,o){t.exports=o.p+"img/20220805.2e9b547.jpg"},473:function(t,e,o){t.exports=o.p+"img/20220808.813b1a4.jpg"},474:function(t,e,o){t.exports=o.p+"img/20220809.37c2e84.jpg"},475:function(t,e,o){t.exports=o.p+"img/20220810.12a98ed.jpg"},476:function(t,e,o){t.exports=o.p+"img/20220811.f599309.jpg"},477:function(t,e,o){t.exports=o.p+"img/20220812.328baf6.jpg"},478:function(t,e,o){t.exports=o.p+"img/20220815.9054318.jpg"},479:function(t,e,o){t.exports=o.p+"img/20220816.f794f2a.jpg"},480:function(t,e,o){t.exports=o.p+"img/20220817.48be95e.jpg"},481:function(t,e,o){t.exports=o.p+"img/20220818.53ad309.jpg"},482:function(t,e,o){t.exports=o.p+"img/20220819.1321699.jpg"},483:function(t,e,o){t.exports=o.p+"img/20220822.cdefc3a.jpg"},484:function(t,e,o){t.exports=o.p+"img/20220823.0dbc779.jpg"},485:function(t,e,o){t.exports=o.p+"img/20220824.77bb1f3.jpg"},486:function(t,e,o){t.exports=o.p+"img/20220825.3f4cd5d.jpg"},487:function(t,e,o){t.exports=o.p+"img/20220826.b36de08.jpg"},488:function(t,e,o){t.exports=o.p+"img/20220829.87c67b5.jpg"},489:function(t,e,o){t.exports=o.p+"img/20220830.519e7c3.jpg"},490:function(t,e,o){t.exports=o.p+"img/20220831.699062b.jpg"},491:function(t,e,o){t.exports=o.p+"img/20220901.8623d0b.jpg"},492:function(t,e,o){t.exports=o.p+"img/20220912.37bbb44.jpg"},493:function(t,e,o){t.exports=o.p+"img/20220913.e3b70c3.jpg"},494:function(t,e,o){t.exports=o.p+"img/20220914.3886166.jpg"},495:function(t,e,o){t.exports=o.p+"img/20220915.a40afd6.jpg"},496:function(t,e,o){t.exports=o.p+"img/20220916.922c38f.jpg"},497:function(t,e,o){t.exports=o.p+"img/20220919.21e49f9.jpg"},498:function(t,e,o){t.exports=o.p+"img/20220920.74378c9.jpg"},499:function(t,e,o){t.exports=o.p+"img/20220921.8f229c5.jpg"},500:function(t,e,o){t.exports=o.p+"img/20220922.54fe79e.jpg"},501:function(t,e,o){t.exports=o.p+"img/20220923.481ac86.jpg"},502:function(t,e,o){t.exports=o.p+"img/20220926.6f2ff89.jpg"},503:function(t,e,o){t.exports=o.p+"img/20220927.1a07c46.jpg"},504:function(t,e,o){t.exports=o.p+"img/20220928.a91fb6f.jpg"},505:function(t,e,o){t.exports=o.p+"img/20220929.2ca0f76.jpg"},506:function(t,e,o){t.exports=o.p+"img/20220930.c41d9a7.jpg"},507:function(t,e,o){t.exports=o.p+"img/20221003.c6c2d94.jpg"},508:function(t,e,o){t.exports=o.p+"img/20221004.0624dcd.jpg"},509:function(t,e,o){t.exports=o.p+"img/20221005.3b48ca2.jpg"},510:function(t,e,o){t.exports=o.p+"img/20221006.20bf2c5.jpg"},511:function(t,e,o){t.exports=o.p+"img/20221007.ae7fb10.jpg"},512:function(t,e,o){t.exports=o.p+"img/20221011.1adf926.jpg"},513:function(t,e,o){t.exports=o.p+"img/20221012.2f824cb.jpg"},514:function(t,e,o){t.exports=o.p+"img/20221013.b1f1060.jpg"},515:function(t,e,o){t.exports=o.p+"img/20221014.85064ce.jpg"},516:function(t,e,o){t.exports=o.p+"img/20221017.4b9cd7f.jpg"},517:function(t,e,o){t.exports=o.p+"img/20221018.525ea0e.jpg"},518:function(t,e,o){t.exports=o.p+"img/20221019.788ad4b.jpg"},519:function(t,e,o){t.exports=o.p+"img/20221020.9ffb015.jpg"},520:function(t,e,o){t.exports=o.p+"img/20221021.3017d3b.jpg"},521:function(t,e,o){t.exports=o.p+"img/20221024.be6d056.jpg"},522:function(t,e,o){t.exports=o.p+"img/20221025.af287e3.jpg"},523:function(t,e,o){t.exports=o.p+"img/20221026.5825c67.jpg"},524:function(t,e,o){t.exports=o.p+"img/20221027.b8c5b92.jpg"},525:function(t,e,o){t.exports=o.p+"img/20221028.5ff3dab.jpg"},526:function(t,e,o){t.exports=o.p+"img/20221031.e661fbe.jpg"},527:function(t,e,o){t.exports=o.p+"img/20221101.6e58876.jpg"},528:function(t,e,o){t.exports=o.p+"img/20221102.b372fb2.jpg"},529:function(t,e,o){t.exports=o.p+"img/20221103.5e66e8d.jpg"},530:function(t,e,o){t.exports=o.p+"img/20221104.5e1cbc3.jpg"},531:function(t,e,o){t.exports=o.p+"img/20221107.388fa0a.jpg"},532:function(t,e,o){t.exports=o.p+"img/20221108.75ffbe2.jpg"},533:function(t,e,o){t.exports=o.p+"img/20221109.d80bb02.jpg"},534:function(t,e,o){t.exports=o.p+"img/20221110.5bc81dd.jpg"},535:function(t,e,o){t.exports=o.p+"img/20221111.42d6935.jpg"},536:function(t,e,o){t.exports=o.p+"img/20221114.b4524c1.jpg"},537:function(t,e,o){t.exports=o.p+"img/20221115.565b206.jpg"},538:function(t,e,o){t.exports=o.p+"img/20221116.67a08ee.jpg"},539:function(t,e,o){t.exports=o.p+"img/20221117.38e1f2a.jpg"},540:function(t,e,o){t.exports=o.p+"img/20221118.eb3e8e0.jpg"},541:function(t,e,o){t.exports=o.p+"img/20221121.50b15f7.jpg"},542:function(t,e,o){t.exports=o.p+"img/20221122.d845927.jpg"},543:function(t,e,o){t.exports=o.p+"img/20221123.8364d5e.jpg"},544:function(t,e,o){t.exports=o.p+"img/20221124.769dceb.jpg"},545:function(t,e,o){t.exports=o.p+"img/20221125.53ce785.jpg"},546:function(t,e,o){t.exports=o.p+"img/20221202.4689655.jpg"},547:function(t,e,o){var content=o(551);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(61).default)("88db20cc",content,!0,{sourceMap:!1})},548:function(t,e,o){"use strict";var n=o(2),r=o(3),c=o(49),d=o(549),f=o(283),l=o(4),x=RangeError,m=String,j=Math.floor,v=r(f),h=r("".slice),_=r(1..toFixed),k=function(t,e,o){return 0===e?o:e%2==1?k(t,e-1,o*t):k(t*t,e/2,o)},y=function(data,t,e){for(var o=-1,n=e;++o<6;)n+=t*data[o],data[o]=n%1e7,n=j(n/1e7)},C=function(data,t){for(var e=6,o=0;--e>=0;)o+=data[e],data[e]=j(o/t),o=o%t*1e7},w=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=m(data[t]);s=""===s?e:s+v("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:l((function(){return"0.000"!==_(8e-5,3)||"1"!==_(.9,0)||"1.25"!==_(1.255,2)||"1000000000000000128"!==_(0xde0b6b3a7640080,0)}))||!l((function(){_({})}))},{toFixed:function(t){var e,o,n,r,f=d(this),l=c(t),data=[0,0,0,0,0,0],j="",_="0";if(l<0||l>20)throw x("Incorrect fraction digits");if(f!=f)return"NaN";if(f<=-1e21||f>=1e21)return m(f);if(f<0&&(j="-",f=-f),f>1e-21)if(o=(e=function(t){for(var e=0,o=t;o>=4096;)e+=12,o/=4096;for(;o>=2;)e+=1,o/=2;return e}(f*k(2,69,1))-69)<0?f*k(2,-e,1):f/k(2,e,1),o*=4503599627370496,(e=52-e)>0){for(y(data,0,o),n=l;n>=7;)y(data,1e7,0),n-=7;for(y(data,k(10,n,1),0),n=e-1;n>=23;)C(data,1<<23),n-=23;C(data,1<<n),y(data,1,1),C(data,2),_=w(data)}else y(data,0,o),y(data,1<<-e,0),_=w(data)+v("0",l);return _=l>0?j+((r=_.length)<=l?"0."+v("0",l-r)+_:h(_,0,r-l)+"."+h(_,r-l)):j+_}})},549:function(t,e,o){var n=o(3);t.exports=n(1..valueOf)},550:function(t,e,o){"use strict";o(547)},551:function(t,e,o){var n=o(60)(!1);n.push([t.i,".food[data-v-d4d7503c]{position:relative;display:inline-block;flex-basis:25%;margin:10px 0;padding:20px;box-shadow:2px 2px 10px -1px rgba(0,0,0,.3);text-align:center;background-color:#f7eade;min-width:180px;font-size:16px}.food .image[data-v-d4d7503c]{width:100%}.image[data-v-d4d7503c] img{-o-object-fit:cover;object-fit:cover;max-height:135px}.food .name[data-v-d4d7503c]{line-break:anywhere}.food .price[data-v-d4d7503c]{color:#9f3448}.food .store-name[data-v-d4d7503c]{margin:0}.food .created-at[data-v-d4d7503c]{margin:8px 0;color:#b1908b}.food .description[data-v-d4d7503c]{margin:0;line-break:anywhere}.star-number-bg[data-v-d4d7503c]{position:absolute;top:0;right:0;width:55px;height:40px;background-color:#fffcf5;z-index:1;border-radius:0 0 0 100%}.star-block[data-v-d4d7503c]{position:absolute;top:2px;right:10px;z-index:1}.star-rate[data-v-d4d7503c]{display:inline-block;vertical-align:top}.star-number[data-v-d4d7503c]{color:#ff8100;font-size:22px;font-style:italic;font-weight:700}",""]),t.exports=n},554:function(t,e,o){"use strict";o.r(e);o(40),o(14),o(142),o(548),o(106),o(20),o(31),o(64);var n={name:"FoodCard",props:{food:{type:Object,default:function(){}}}},r=(o(550),o(62)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return 0!==Object.keys(t.food).length?e("div",{staticClass:"food"},[e("div",{staticClass:"star-number-bg"}),t._v(" "),e("div",{staticClass:"star-block"},[e("el-rate",{staticClass:"star-rate",attrs:{disabled:"",value:t.food.star,colors:["#ff8100","#ff8100","#ff8100"],"disabled-void-color":"#bfb5b3","score-template":t.food.star.toString()}}),t._v(" "),e("span",{staticClass:"star-number"},[t._v(t._s(t.food.star.toFixed(1)))])],1),t._v(" "),e("el-image",{staticClass:"image",attrs:{src:o(449)("./".concat(t.food.id,".").concat(t.food.extension)),"preview-src-list":[o(449)("./".concat(t.food.id,".").concat(t.food.extension))],alt:t.food.name}}),t._v(" "),e("h3",{staticClass:"name"},[t._v("\n    "+t._s(t.food.name)+"\n    "),t.food.price?e("span",{staticClass:"price"},[t._v("$"+t._s(t.food.price))]):t._e()]),t._v(" "),e("h4",{staticClass:"store-name"},[t._v(t._s(t.food.storeName))]),t._v(" "),e("h4",{staticClass:"created-at"},[t._v(t._s(t.food.createdAt))]),t._v(" "),e("p",{staticClass:"description"},[t._v(t._s(t.food.description))]),t._v(" "),t._t("action")],2):t._e()}),[],!1,null,"d4d7503c",null);e.default=component.exports},555:function(t,e,o){var content=o(564);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(61).default)("4922c7e9",content,!0,{sourceMap:!1})},563:function(t,e,o){"use strict";o(555)},564:function(t,e,o){var n=o(60)(!1);n.push([t.i,".content-block[data-v-4483d1e2]{display:flex;max-width:1440px;margin:0 auto}.main-block[data-v-4483d1e2]{width:1000px}.category-block[data-v-4483d1e2],.search-block[data-v-4483d1e2]{background-color:#f9f2e9;padding:20px 40px}.search-block[data-v-4483d1e2]{display:flex;align-items:center;margin-top:20px}.search-block .description[data-v-4483d1e2]{margin-right:10px}.search-block .search[data-v-4483d1e2]{margin:auto}.search-block select[data-v-4483d1e2]{padding:8px 10px;border:1px solid #b1b0b0;border-radius:4px;font-size:16px;width:100%}.foods-block[data-v-4483d1e2]{display:flex;justify-content:space-around;flex-wrap:wrap;background-color:#f9f2e9;padding:20px;margin-top:20px}.food[data-v-4483d1e2]{position:relative;display:inline-block;flex-basis:25%;margin:10px 0;padding:20px;box-shadow:2px 2px 10px -1px rgba(0,0,0,.3);background-color:#f7eade;min-width:180px}.food[data-v-4483d1e2],.paginate[data-v-4483d1e2]{text-align:center}.paginate[data-v-4483d1e2]{padding:15px 25px 25px;background-color:#f9f2e9}.food-pagination[data-v-4483d1e2]{overflow-x:auto}.food-pagination[data-v-4483d1e2] button{height:40px}.food-pagination[data-v-4483d1e2] button,.food-pagination[data-v-4483d1e2] li{padding:10px;margin:5px;color:#9f3448!important;background-color:transparent!important}.food-pagination[data-v-4483d1e2] li{font-size:16px;font-weight:400;height:auto;line-height:normal}.food-pagination[data-v-4483d1e2] li.active{background-color:#e7ccba!important}.el-skeleton.is-animated .el-skeleton__item[data-v-4483d1e2]{background:linear-gradient(90deg,#ddc3b5 25%,#e7d0c2 37%,#ddc3b5 63%);background-size:400% 100%;animation:el-skeleton-loading 1.4s ease infinite}.comment-dialog[data-v-4483d1e2] .el-dialog__header{background-color:#f9f2e9}.comment-dialog[data-v-4483d1e2] .el-dialog__body{background-color:#fffbf0}@media (max-width:768px){.content-block[data-v-4483d1e2]{flex-direction:column}.main-block[data-v-4483d1e2]{width:100%}.search-block[data-v-4483d1e2]{flex-direction:column}.search-block .description[data-v-4483d1e2]{margin-right:0}.food[data-v-4483d1e2]{flex-basis:40%}}",""]),t.exports=n},596:function(t,e,o){"use strict";o.r(e);o(20),o(63);var n=o(446),r=o(554),c={name:"FoodIndex",components:{SideBar:n.default,FoodCard:r.default},data:function(){return{isFoodsLoading:!0,perPage:9,currentPage:1,storeId:null,dialogVisible:!0,dialogModal:!1,clickFood:{}}},computed:{foods:function(){return this.$store.getters.getFoods(this.storeId).slice((this.currentPage-1)*this.perPage,this.currentPage*this.perPage)},totalCountFoods:function(){return this.$store.getters.getFoods(this.storeId).length},stores:function(){return this.$store.getters.getStores}},mounted:function(){this.dialogVisible=!1,this.dialogModal=!0,this.$store.dispatch("setFoods"),this.isFoodsLoading=!1},methods:{setCurrentPage:function(t){this.currentPage=t},selectStore:function(t){this.currentPage=1,this.storeId=t.target.value},openFoodComment:function(t){this.dialogVisible=!this.dialogVisible,this.clickFood=t}}},d=c,f=(o(563),o(62)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-block"},[e("div",{staticClass:"main-block"},[t._m(0),t._v(" "),e("div",{staticClass:"search-block"},[t._m(1),t._v(" "),e("div",{staticClass:"search"},[e("span",[t._v("店家：")]),t._v(" "),e("select",{attrs:{name:"store"},on:{change:function(e){return t.selectStore(e)}}},[e("option",{attrs:{value:"null"}},[t._v("-- 全部 --")]),t._v(" "),t._l(t.stores,(function(o){return e("option",{key:o.id,domProps:{value:o.id}},[t._v("\n            "+t._s(o.name)+"\n          ")])}))],2)])]),t._v(" "),e("el-skeleton",{attrs:{loading:t.isFoodsLoading,animated:""}},[e("template",{slot:"template"},[e("div",{staticClass:"foods-block"},t._l(6,(function(o,n){return e("div",{key:n,staticClass:"food"},[e("el-skeleton-item",{staticStyle:{width:"100%",height:"135px"},attrs:{variant:"image"}}),t._v(" "),e("el-skeleton-item",{staticStyle:{width:"70%",height:"24px",margin:"1em 0"},attrs:{variant:"h3"}}),t._v(" "),e("el-skeleton-item",{staticStyle:{width:"60%",height:"20px"},attrs:{variant:"text"}}),t._v(" "),e("el-skeleton-item",{staticStyle:{width:"60%",height:"20px",margin:"8px 0"},attrs:{variant:"text"}}),t._v(" "),e("el-skeleton-item",{staticStyle:{width:"100%",height:"40px"},attrs:{variant:"text"}})],1)})),0)]),t._v(" "),e("template",{slot:"default"},[e("div",{staticStyle:{display:"flex","justify-content":"space-around","flex-wrap":"wrap","background-color":"#f9f2e9",padding:"20px","margin-top":"20px"}},[t._l(t.foods,(function(o,n){return[e("FoodCard",{key:n,attrs:{food:o},scopedSlots:t._u([{key:"action",fn:function(){return[e("button",{staticStyle:{"margin-top":"5px"},on:{click:function(e){return t.openFoodComment(o)}}},[t._v("\n                  F\n                ")])]},proxy:!0}],null,!0)})]}))],2),t._v(" "),e("div",{staticStyle:{"text-align":"center",padding:"15px 25px 25px 25px","background-color":"#f9f2e9"}},[e("el-pagination",{staticClass:"food-pagination",attrs:{background:"","page-size":9,layout:"prev, pager, next","current-page":t.currentPage,total:t.totalCountFoods},on:{"current-change":t.setCurrentPage}})],1)])],2),t._v(" "),e("el-dialog",{ref:"commentDialog",staticClass:"comment-dialog",staticStyle:{display:"none"},attrs:{title:"留言",visible:t.dialogVisible,modal:t.dialogModal},on:{"update:visible":function(e){t.dialogVisible=e},close:function(e){t.clickFood={}}}},[e("el-container",{staticStyle:{"min-height":"50vh"}},[e("el-aside",{staticStyle:{"padding-right":"20px"}},[e("FoodCard",{attrs:{food:t.clickFood}})],1),t._v(" "),e("el-main",[e("div",{staticClass:"fb-comments",attrs:{"data-href":"https://wangchristine.github.io/food#"+t.clickFood.id,"data-width":"100%","data-numposts":"5","data-lazy":"true"}})])],1)],1)],1),t._v(" "),e("side-bar")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"category-block"},[t("h2",[this._v("Category: 食物")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"description"},[e("p",[t._v("星等為依據個人喜好跟主觀判斷所評分，僅供參考。")]),t._v(" "),e("p",[t._v("\n          1⭐: 不喜歡； 2⭐: 普通，以填飽肚子為主； 3⭐: 還不錯； 4⭐: 超好吃\n        ")])])}],!1,null,"4483d1e2",null);e.default=component.exports;installComponents(component,{FoodCard:o(554).default,SideBar:o(446).default})}}]);