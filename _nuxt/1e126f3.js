(window.webpackJsonp=window.webpackJsonp||[]).push([[13,2,3,6,9],Array(450).concat([function(t,o,e){var content=e(456);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(62).default)("5aff4908",content,!0,{sourceMap:!1})},function(t,o,e){"use strict";e.r(o);var n=[function(){var t=this,o=t._self._c;return o("div",[o("div",{staticClass:"profile"},[o("img",{staticClass:"avatar",attrs:{src:e(453),alt:"My Avatar"}}),t._v(" "),o("h1",[t._v("Chris Wang")]),t._v(" "),o("p",[t._v("Keep Learning, and Keep Coding.")])]),t._v(" "),o("div",{staticClass:"introduction"},[o("p",[t._v("草木園丁兼全端工程師 • 期許自己每天多懂一點新知識 • 莫欺少年窮")])])])}],r={name:"MyProfile"},c=(e(455),e(63)),component=Object(c.a)(r,(function(){this._self._c;return this._m(0)}),n,!1,null,"a7ca8918",null);o.default=component.exports},function(t,o,e){t.exports=e.p+"img/fish.32d9e04.gif"},function(t,o,e){t.exports=e.p+"img/avatar.61527b4.png"},function(t,o,e){var content=e(461);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(62).default)("774eaf22",content,!0,{sourceMap:!1})},function(t,o,e){"use strict";e(450)},function(t,o,e){var n=e(61)((function(i){return i[1]}));n.push([t.i,".introduction[data-v-a7ca8918],.profile[data-v-a7ca8918]{background-color:#f9f2e9;padding:20px}.introduction[data-v-a7ca8918]{margin-top:20px}.avatar[data-v-a7ca8918]{border-radius:50%;height:150px;width:150px}",""]),n.locals={},t.exports=n},function(t,o,e){"use strict";e.r(o);var n=[function(){var t=this._self._c;return t("div",{staticClass:"aquarium"},[t("img",{staticClass:"fish1",attrs:{src:e(452),alt:"fish"}}),this._v(" "),t("img",{staticClass:"fish2",attrs:{src:e(452),alt:"fish"}})])}],r=(e(42),e(14),{name:"SideBar",components:{MyProfile:e(451).default},computed:{articlesByPopular:function(){return this.$store.getters.getArticles("").filter((function(article){return!0===article.isPopular}))}}}),c=(e(460),e(63)),component=Object(c.a)(r,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"side-block"},[o("MyProfile"),t._v(" "),o("div",{staticClass:"popular"},[o("div",{staticClass:"title"},[t._v("熱門文章 📌")]),t._v(" "),o("div",{staticClass:"list"},t._l(t.articlesByPopular,(function(article){return o("NuxtLink",{key:article.title,staticClass:"article",attrs:{to:{name:"article-category-slug",params:{category:article.category,slug:article.slug}}}},[t._v("\n        "+t._s(article.title)+"\n      ")])})),1)]),t._v(" "),t._m(0)],1)}),n,!1,null,"3ae7a033",null);o.default=component.exports;installComponents(component,{MyProfile:e(451).default})},function(t,o,e){t.exports=e.p+"img/aquarium.c8d0712.jpg"},function(t,o,e){var content=e(464);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(62).default)("41416c2a",content,!0,{sourceMap:!1})},function(t,o,e){"use strict";e(454)},function(t,o,e){var n=e(61),r=e(293),c=e(458),f=n((function(i){return i[1]})),d=r(c);f.push([t.i,".side-block[data-v-3ae7a033]{margin:0 0 40px 40px;text-align:center;width:400px}.popular[data-v-3ae7a033]{background-color:#f9f2e9;margin-top:20px;padding:20px}.popular .title[data-v-3ae7a033]{border-bottom:1px solid #9b9b9b;font-size:18px;padding:5px}.popular .list[data-v-3ae7a033]{margin-top:10px}.popular .article[data-v-3ae7a033]{border-bottom:1px dashed;color:#9f3448;display:block;margin-top:10px;padding:5px;-webkit-text-decoration:none;text-decoration:none}.aquarium[data-v-3ae7a033]{background-color:#a0bed5;background-image:url("+d+");background-size:cover;height:200px;margin-top:20px;overflow:hidden;position:relative}.fish1[data-v-3ae7a033]{animation:animationFish1-3ae7a033 10s linear infinite;height:80px;left:20px;position:absolute;top:10px;width:80px}@keyframes animationFish1-3ae7a033{0%{transform:translate(0) rotateY(180deg)}20%{transform:translate(30px,100px) rotateY(180deg)}50%{transform:translate(250px,20px) rotateY(180deg)}51%{transform:translate(250px,20px) rotateY(0deg)}75%{transform:translate(180px,50px) rotateY(0deg)}to{transform:translate(0) rotateY(0deg)}}.fish2[data-v-3ae7a033]{animation:animationFish2-3ae7a033 8s linear infinite;height:50px;left:320px;position:absolute;top:100px;width:50px}@keyframes animationFish2-3ae7a033{0%{transform:translate(0) rotateY(0deg)}45%{transform:translate(-200px,20px) rotateY(0deg)}50%{transform:translate(-200px,20px) rotateY(0deg)}51%{transform:translate(-200px,20px) rotateY(180deg)}90%{transform:translate(0) rotateY(180deg)}to{transform:translate(0) rotateY(180deg)}}@media (max-width:768px){.side-block[data-v-3ae7a033]{margin:40px 0;width:100%}}",""]),f.locals={},t.exports=f},function(t,o,e){"use strict";e.r(o);e(294);var n={name:"ListPagination",props:{pageSize:{type:Number,required:!0},currentPage:{type:Number,required:!0},totalCount:{type:Number,required:!0}},methods:{currentChange:function(t){this.$emit("currentChange",t)}}},r=(e(463),e(63)),component=Object(r.a)(n,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"paginate"},[o("el-pagination",{staticClass:"list-pagination",attrs:{background:"","page-size":t.pageSize,layout:"prev, pager, next","current-page":t.currentPage,total:t.totalCount},on:{"current-change":t.currentChange}})],1)}),[],!1,null,"075af8e0",null);o.default=component.exports},function(t,o,e){"use strict";e(459)},function(t,o,e){var n=e(61)((function(i){return i[1]}));n.push([t.i,".paginate[data-v-075af8e0]{background-color:#f9f2e9;padding:15px 25px 25px;text-align:center}.list-pagination[data-v-075af8e0]{overflow-x:auto}.list-pagination[data-v-075af8e0] button{background-color:transparent!important;color:#9f3448!important}.list-pagination[data-v-075af8e0] button{height:40px;margin:5px;padding:10px}.list-pagination[data-v-075af8e0] li{background-color:transparent!important;color:#9f3448!important}.list-pagination[data-v-075af8e0] li{font-size:16px;font-weight:400;height:auto;line-height:normal;margin:5px;padding:10px}.list-pagination[data-v-075af8e0] li.active{background-color:#e7ccba!important}",""]),n.locals={},t.exports=n},function(t,o,e){var map={"./20210201.jpg":466,"./20210604.jpg":467,"./20210809.jpg":468,"./20210812.jpg":469,"./20210908.jpg":470,"./20211101.jpg":471,"./20211117.jpg":472,"./20211208.jpg":473,"./20220126.jpg":474,"./20220719.jpg":475,"./20220720.jpg":476,"./20220721.jpg":477,"./20220722.jpg":478,"./20220725.jpg":479,"./20220726.jpg":480,"./20220727.jpg":481,"./20220728.jpg":482,"./20220729.jpg":483,"./20220801.jpg":484,"./20220802.jpg":485,"./20220803.jpg":486,"./20220804.jpg":487,"./20220805.jpg":488,"./20220808.jpg":489,"./20220809.jpg":490,"./20220810.jpg":491,"./20220811.jpg":492,"./20220812.jpg":493,"./20220815.jpg":494,"./20220816.jpg":495,"./20220817.jpg":496,"./20220818.jpg":497,"./20220819.jpg":498,"./20220822.jpg":499,"./20220823.jpg":500,"./20220824.jpg":501,"./20220825.jpg":502,"./20220826.jpg":503,"./20220829.jpg":504,"./20220830.jpg":505,"./20220831.jpg":506,"./20220901.jpg":507,"./20220912.jpg":508,"./20220913.jpg":509,"./20220914.jpg":510,"./20220915.jpg":511,"./20220916.jpg":512,"./20220919.jpg":513,"./20220920.jpg":514,"./20220921.jpg":515,"./20220922.jpg":516,"./20220923.jpg":517,"./20220926.jpg":518,"./20220927.jpg":519,"./20220928.jpg":520,"./20220929.jpg":521,"./20220930.jpg":522,"./20221003.jpg":523,"./20221004.jpg":524,"./20221005.jpg":525,"./20221006.jpg":526,"./20221007.jpg":527,"./20221011.jpg":528,"./20221012.jpg":529,"./20221013.jpg":530,"./20221014.jpg":531,"./20221017.jpg":532,"./20221018.jpg":533,"./20221019.jpg":534,"./20221020.jpg":535,"./20221021.jpg":536,"./20221024.jpg":537,"./20221025.jpg":538,"./20221026.jpg":539,"./20221027.jpg":540,"./20221028.jpg":541,"./20221031.jpg":542,"./20221101.jpg":543,"./20221102.jpg":544,"./20221103.jpg":545,"./20221104.jpg":546,"./20221107.jpg":547,"./20221108.jpg":548,"./20221109.jpg":549,"./20221110.jpg":550,"./20221111.jpg":551,"./20221114.jpg":552,"./20221115.jpg":553,"./20221116.jpg":554,"./20221117.jpg":555,"./20221118.jpg":556,"./20221121.jpg":557,"./20221122.jpg":558,"./20221123.jpg":559,"./20221124.jpg":560,"./20221125.jpg":561,"./20221202.jpg":562,"./20221205.jpg":563,"./20221206.jpg":564,"./20221207.jpg":565,"./20221208.jpg":566,"./20221209.jpg":567,"./20221212.jpg":568,"./20221213.jpg":569,"./20221214.jpg":570,"./20221215.jpg":571,"./20221216.jpg":572,"./20221219.jpg":573,"./20221221.jpg":574,"./20221222.jpg":575,"./20221226.jpg":576,"./20221227.jpg":577,"./20221228.jpg":578,"./20221229.jpg":579,"./20230103.jpg":580,"./20230104.jpg":581,"./20230105.jpg":582,"./20230106.jpg":583,"./20230109.jpg":584,"./20230111.jpg":585,"./20230113.jpg":586,"./20230119.jpg":587,"./20230206.jpg":588,"./20230207.jpg":589,"./20230208.jpg":590,"./20230209.jpg":591,"./20230210.jpg":592,"./20230214.jpg":593,"./20230215.jpg":594,"./20230216.jpg":595,"./20230217.jpg":596,"./20230220.jpg":597,"./20230221.jpg":598,"./20230222.jpg":599,"./20230301.jpg":600,"./20230302.jpg":601,"./20230306.jpg":602,"./20230307.jpg":603,"./20230308.jpg":604,"./20230309.jpg":605,"./20230310.jpg":606,"./20230313.jpg":607,"./20230314.jpg":608,"./20230315.jpg":609,"./20230316.jpg":610,"./20230317.jpg":611,"./20230320.jpg":612,"./20230321.jpg":613,"./20230322.jpg":614,"./20230323.jpg":615,"./20230324.jpg":616,"./20230328.jpg":617,"./20230331.jpg":618,"./20230412.jpg":619,"./20230413.jpg":620,"./20230414.jpg":621,"./20230417.jpg":622,"./20230418-1.jpg":623,"./20230418.jpg":624,"./20230419.jpg":625,"./20230420.jpg":626};function n(t){var o=r(t);return e(o)}function r(t){if(!e.o(map,t)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=r,t.exports=n,n.id=465},function(t,o,e){t.exports=e.p+"img/20210201.b329d97.jpg"},function(t,o,e){t.exports=e.p+"img/20210604.3cef7dd.jpg"},function(t,o,e){t.exports=e.p+"img/20210809.062dda5.jpg"},function(t,o,e){t.exports=e.p+"img/20210812.358ae60.jpg"},function(t,o,e){t.exports=e.p+"img/20210908.f2cb4c3.jpg"},function(t,o,e){t.exports=e.p+"img/20211101.3fa7d44.jpg"},function(t,o,e){t.exports=e.p+"img/20211117.3cc86c3.jpg"},function(t,o,e){t.exports=e.p+"img/20211208.4d9aa6e.jpg"},function(t,o,e){t.exports=e.p+"img/20220126.99d2010.jpg"},function(t,o,e){t.exports=e.p+"img/20220719.a2cf035.jpg"},function(t,o,e){t.exports=e.p+"img/20220720.ee3438a.jpg"},function(t,o,e){t.exports=e.p+"img/20220721.6cd632f.jpg"},function(t,o,e){t.exports=e.p+"img/20220722.101dd21.jpg"},function(t,o,e){t.exports=e.p+"img/20220725.a6f8301.jpg"},function(t,o,e){t.exports=e.p+"img/20220726.0ac8eeb.jpg"},function(t,o,e){t.exports=e.p+"img/20220727.df97957.jpg"},function(t,o,e){t.exports=e.p+"img/20220728.2e85177.jpg"},function(t,o,e){t.exports=e.p+"img/20220729.9e4e9b9.jpg"},function(t,o,e){t.exports=e.p+"img/20220801.01ffae9.jpg"},function(t,o,e){t.exports=e.p+"img/20220802.c48b9c6.jpg"},function(t,o,e){t.exports=e.p+"img/20220803.024cd3e.jpg"},function(t,o,e){t.exports=e.p+"img/20220804.ab1bb2a.jpg"},function(t,o,e){t.exports=e.p+"img/20220805.2e9b547.jpg"},function(t,o,e){t.exports=e.p+"img/20220808.813b1a4.jpg"},function(t,o,e){t.exports=e.p+"img/20220809.37c2e84.jpg"},function(t,o,e){t.exports=e.p+"img/20220810.12a98ed.jpg"},function(t,o,e){t.exports=e.p+"img/20220811.f599309.jpg"},function(t,o,e){t.exports=e.p+"img/20220812.328baf6.jpg"},function(t,o,e){t.exports=e.p+"img/20220815.9054318.jpg"},function(t,o,e){t.exports=e.p+"img/20220816.f794f2a.jpg"},function(t,o,e){t.exports=e.p+"img/20220817.48be95e.jpg"},function(t,o,e){t.exports=e.p+"img/20220818.53ad309.jpg"},function(t,o,e){t.exports=e.p+"img/20220819.1321699.jpg"},function(t,o,e){t.exports=e.p+"img/20220822.cdefc3a.jpg"},function(t,o,e){t.exports=e.p+"img/20220823.0dbc779.jpg"},function(t,o,e){t.exports=e.p+"img/20220824.77bb1f3.jpg"},function(t,o,e){t.exports=e.p+"img/20220825.3f4cd5d.jpg"},function(t,o,e){t.exports=e.p+"img/20220826.b36de08.jpg"},function(t,o,e){t.exports=e.p+"img/20220829.87c67b5.jpg"},function(t,o,e){t.exports=e.p+"img/20220830.519e7c3.jpg"},function(t,o,e){t.exports=e.p+"img/20220831.699062b.jpg"},function(t,o,e){t.exports=e.p+"img/20220901.8623d0b.jpg"},function(t,o,e){t.exports=e.p+"img/20220912.37bbb44.jpg"},function(t,o,e){t.exports=e.p+"img/20220913.e3b70c3.jpg"},function(t,o,e){t.exports=e.p+"img/20220914.3886166.jpg"},function(t,o,e){t.exports=e.p+"img/20220915.a40afd6.jpg"},function(t,o,e){t.exports=e.p+"img/20220916.922c38f.jpg"},function(t,o,e){t.exports=e.p+"img/20220919.21e49f9.jpg"},function(t,o,e){t.exports=e.p+"img/20220920.74378c9.jpg"},function(t,o,e){t.exports=e.p+"img/20220921.8f229c5.jpg"},function(t,o,e){t.exports=e.p+"img/20220922.54fe79e.jpg"},function(t,o,e){t.exports=e.p+"img/20220923.481ac86.jpg"},function(t,o,e){t.exports=e.p+"img/20220926.6f2ff89.jpg"},function(t,o,e){t.exports=e.p+"img/20220927.1a07c46.jpg"},function(t,o,e){t.exports=e.p+"img/20220928.a91fb6f.jpg"},function(t,o,e){t.exports=e.p+"img/20220929.2ca0f76.jpg"},function(t,o,e){t.exports=e.p+"img/20220930.c41d9a7.jpg"},function(t,o,e){t.exports=e.p+"img/20221003.c6c2d94.jpg"},function(t,o,e){t.exports=e.p+"img/20221004.0624dcd.jpg"},function(t,o,e){t.exports=e.p+"img/20221005.3b48ca2.jpg"},function(t,o,e){t.exports=e.p+"img/20221006.20bf2c5.jpg"},function(t,o,e){t.exports=e.p+"img/20221007.ae7fb10.jpg"},function(t,o,e){t.exports=e.p+"img/20221011.1adf926.jpg"},function(t,o,e){t.exports=e.p+"img/20221012.2f824cb.jpg"},function(t,o,e){t.exports=e.p+"img/20221013.b1f1060.jpg"},function(t,o,e){t.exports=e.p+"img/20221014.85064ce.jpg"},function(t,o,e){t.exports=e.p+"img/20221017.4b9cd7f.jpg"},function(t,o,e){t.exports=e.p+"img/20221018.525ea0e.jpg"},function(t,o,e){t.exports=e.p+"img/20221019.788ad4b.jpg"},function(t,o,e){t.exports=e.p+"img/20221020.9ffb015.jpg"},function(t,o,e){t.exports=e.p+"img/20221021.3017d3b.jpg"},function(t,o,e){t.exports=e.p+"img/20221024.be6d056.jpg"},function(t,o,e){t.exports=e.p+"img/20221025.af287e3.jpg"},function(t,o,e){t.exports=e.p+"img/20221026.5825c67.jpg"},function(t,o,e){t.exports=e.p+"img/20221027.b8c5b92.jpg"},function(t,o,e){t.exports=e.p+"img/20221028.5ff3dab.jpg"},function(t,o,e){t.exports=e.p+"img/20221031.e661fbe.jpg"},function(t,o,e){t.exports=e.p+"img/20221101.6e58876.jpg"},function(t,o,e){t.exports=e.p+"img/20221102.b372fb2.jpg"},function(t,o,e){t.exports=e.p+"img/20221103.5e66e8d.jpg"},function(t,o,e){t.exports=e.p+"img/20221104.5e1cbc3.jpg"},function(t,o,e){t.exports=e.p+"img/20221107.388fa0a.jpg"},function(t,o,e){t.exports=e.p+"img/20221108.75ffbe2.jpg"},function(t,o,e){t.exports=e.p+"img/20221109.d80bb02.jpg"},function(t,o,e){t.exports=e.p+"img/20221110.5bc81dd.jpg"},function(t,o,e){t.exports=e.p+"img/20221111.42d6935.jpg"},function(t,o,e){t.exports=e.p+"img/20221114.b4524c1.jpg"},function(t,o,e){t.exports=e.p+"img/20221115.565b206.jpg"},function(t,o,e){t.exports=e.p+"img/20221116.67a08ee.jpg"},function(t,o,e){t.exports=e.p+"img/20221117.38e1f2a.jpg"},function(t,o,e){t.exports=e.p+"img/20221118.eb3e8e0.jpg"},function(t,o,e){t.exports=e.p+"img/20221121.50b15f7.jpg"},function(t,o,e){t.exports=e.p+"img/20221122.d845927.jpg"},function(t,o,e){t.exports=e.p+"img/20221123.8364d5e.jpg"},function(t,o,e){t.exports=e.p+"img/20221124.769dceb.jpg"},function(t,o,e){t.exports=e.p+"img/20221125.53ce785.jpg"},function(t,o,e){t.exports=e.p+"img/20221202.4689655.jpg"},function(t,o,e){t.exports=e.p+"img/20221205.2c327f0.jpg"},function(t,o,e){t.exports=e.p+"img/20221206.91ed92c.jpg"},function(t,o,e){t.exports=e.p+"img/20221207.8f825cb.jpg"},function(t,o,e){t.exports=e.p+"img/20221208.c23e4a9.jpg"},function(t,o,e){t.exports=e.p+"img/20221209.10e4ff3.jpg"},function(t,o,e){t.exports=e.p+"img/20221212.f6b4d47.jpg"},function(t,o,e){t.exports=e.p+"img/20221213.a6dcf98.jpg"},function(t,o,e){t.exports=e.p+"img/20221214.d417ba0.jpg"},function(t,o,e){t.exports=e.p+"img/20221215.ea832a9.jpg"},function(t,o,e){t.exports=e.p+"img/20221216.51f0585.jpg"},function(t,o,e){t.exports=e.p+"img/20221219.8f8f294.jpg"},function(t,o,e){t.exports=e.p+"img/20221221.1fbde2e.jpg"},function(t,o,e){t.exports=e.p+"img/20221222.1e14953.jpg"},function(t,o,e){t.exports=e.p+"img/20221226.61765b4.jpg"},function(t,o,e){t.exports=e.p+"img/20221227.e93cabd.jpg"},function(t,o,e){t.exports=e.p+"img/20221228.3c67eb4.jpg"},function(t,o,e){t.exports=e.p+"img/20221229.15fca0e.jpg"},function(t,o,e){t.exports=e.p+"img/20230103.12c26e3.jpg"},function(t,o,e){t.exports=e.p+"img/20230104.9f6ff78.jpg"},function(t,o,e){t.exports=e.p+"img/20230105.8cb5d5b.jpg"},function(t,o,e){t.exports=e.p+"img/20230106.23d085b.jpg"},function(t,o,e){t.exports=e.p+"img/20230109.a0247fa.jpg"},function(t,o,e){t.exports=e.p+"img/20230111.a86b3c2.jpg"},function(t,o,e){t.exports=e.p+"img/20230113.33aa611.jpg"},function(t,o,e){t.exports=e.p+"img/20230119.f957076.jpg"},function(t,o,e){t.exports=e.p+"img/20230206.23fa4e9.jpg"},function(t,o,e){t.exports=e.p+"img/20230207.5050cdd.jpg"},function(t,o,e){t.exports=e.p+"img/20230208.fc028e6.jpg"},function(t,o,e){t.exports=e.p+"img/20230209.8dad410.jpg"},function(t,o,e){t.exports=e.p+"img/20230210.5f55c8f.jpg"},function(t,o,e){t.exports=e.p+"img/20230214.ebb72eb.jpg"},function(t,o,e){t.exports=e.p+"img/20230215.ec2f950.jpg"},function(t,o,e){t.exports=e.p+"img/20230216.d3744ed.jpg"},function(t,o,e){t.exports=e.p+"img/20230217.92b6479.jpg"},function(t,o,e){t.exports=e.p+"img/20230220.2ffd1b7.jpg"},function(t,o,e){t.exports=e.p+"img/20230221.f5adde8.jpg"},function(t,o,e){t.exports=e.p+"img/20230222.65a5505.jpg"},function(t,o,e){t.exports=e.p+"img/20230301.2cf247d.jpg"},function(t,o,e){t.exports=e.p+"img/20230302.c4753b0.jpg"},function(t,o,e){t.exports=e.p+"img/20230306.59f6cd6.jpg"},function(t,o,e){t.exports=e.p+"img/20230307.331ffbd.jpg"},function(t,o,e){t.exports=e.p+"img/20230308.081563a.jpg"},function(t,o,e){t.exports=e.p+"img/20230309.1db2d79.jpg"},function(t,o,e){t.exports=e.p+"img/20230310.a114365.jpg"},function(t,o,e){t.exports=e.p+"img/20230313.fc719f1.jpg"},function(t,o,e){t.exports=e.p+"img/20230314.96099c3.jpg"},function(t,o,e){t.exports=e.p+"img/20230315.5211af1.jpg"},function(t,o,e){t.exports=e.p+"img/20230316.27d7436.jpg"},function(t,o,e){t.exports=e.p+"img/20230317.c0b7ac7.jpg"},function(t,o,e){t.exports=e.p+"img/20230320.c591a25.jpg"},function(t,o,e){t.exports=e.p+"img/20230321.1e7b091.jpg"},function(t,o,e){t.exports=e.p+"img/20230322.d798ffa.jpg"},function(t,o,e){t.exports=e.p+"img/20230323.ac0cd70.jpg"},function(t,o,e){t.exports=e.p+"img/20230324.817881d.jpg"},function(t,o,e){t.exports=e.p+"img/20230328.2f1750e.jpg"},function(t,o,e){t.exports=e.p+"img/20230331.5db106c.jpg"},function(t,o,e){t.exports=e.p+"img/20230412.3ec567e.jpg"},function(t,o,e){t.exports=e.p+"img/20230413.bb64099.jpg"},function(t,o,e){t.exports=e.p+"img/20230414.ea5f081.jpg"},function(t,o,e){t.exports=e.p+"img/20230417.ea09574.jpg"},function(t,o,e){t.exports=e.p+"img/20230418-1.4e1ace4.jpg"},function(t,o,e){t.exports=e.p+"img/20230418.56cdb72.jpg"},function(t,o,e){t.exports=e.p+"img/20230419.164776f.jpg"},function(t,o,e){t.exports=e.p+"img/20230420.d110c6e.jpg"},function(t,o,e){var content=e(648);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(62).default)("60ea5be8",content,!0,{sourceMap:!1})},,,,,,,,,,,,,,,,,,,function(t,o,e){"use strict";var n=e(2),r=e(4),c=e(51),f=e(297),d=e(296),l=e(3),m=RangeError,j=String,x=Math.floor,v=r(d),h=r("".slice),_=r(1..toFixed),k=function(t,o,e){return 0===o?e:o%2==1?k(t,o-1,e*t):k(t*t,o/2,e)},y=function(data,t,o){for(var e=-1,n=o;++e<6;)n+=t*data[e],data[e]=n%1e7,n=x(n/1e7)},C=function(data,t){for(var o=6,e=0;--o>=0;)e+=data[o],data[o]=x(e/t),e=e%t*1e7},w=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var o=j(data[t]);s=""===s?o:s+v("0",7-o.length)+o}return s};n({target:"Number",proto:!0,forced:l((function(){return"0.000"!==_(8e-5,3)||"1"!==_(.9,0)||"1.25"!==_(1.255,2)||"1000000000000000128"!==_(0xde0b6b3a7640080,0)}))||!l((function(){_({})}))},{toFixed:function(t){var o,e,n,r,d=f(this),l=c(t),data=[0,0,0,0,0,0],x="",_="0";if(l<0||l>20)throw m("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return j(d);if(d<0&&(x="-",d=-d),d>1e-21)if(e=(o=function(t){for(var o=0,e=t;e>=4096;)o+=12,e/=4096;for(;e>=2;)o+=1,e/=2;return o}(d*k(2,69,1))-69)<0?d*k(2,-o,1):d/k(2,o,1),e*=4503599627370496,(o=52-o)>0){for(y(data,0,e),n=l;n>=7;)y(data,1e7,0),n-=7;for(y(data,k(10,n,1),0),n=o-1;n>=23;)C(data,1<<23),n-=23;C(data,1<<n),y(data,1,1),C(data,2),_=w(data)}else y(data,0,e),y(data,1<<-o,0),_=w(data)+v("0",l);return _=l>0?x+((r=_.length)<=l?"0."+v("0",l-r)+_:h(_,0,r-l)+"."+h(_,r-l)):x+_}})},function(t,o,e){"use strict";e(627)},function(t,o,e){var n=e(61)((function(i){return i[1]}));n.push([t.i,".food[data-v-29053bcf]{font-size:16px}.food .image[data-v-29053bcf]{width:100%}.image[data-v-29053bcf] img{max-height:135px;-o-object-fit:cover;object-fit:cover}.food .name[data-v-29053bcf]{line-break:anywhere}.food .price[data-v-29053bcf]{color:#9f3448}.food .store-name[data-v-29053bcf]{margin:0}.food .created-at[data-v-29053bcf]{color:#b1908b;margin:8px 0}.food .description[data-v-29053bcf]{line-break:anywhere;margin:0}.star-number-bg[data-v-29053bcf]{background-color:#fffcf5;border-radius:0 0 0 100%;height:40px;position:absolute;right:0;top:0;width:55px;z-index:1}.star-block[data-v-29053bcf]{position:absolute;right:8px;top:2px;z-index:1}.star-rate[data-v-29053bcf]{display:inline-block;vertical-align:top}.star-number[data-v-29053bcf]{color:#ff8100;font-size:22px;font-style:italic;font-weight:700}",""]),n.locals={},t.exports=n},,,,,,function(t,o,e){"use strict";e.r(o);e(43),e(14),e(146),e(646),e(108),e(21),e(33),e(65);var n={name:"FoodCard",props:{food:{type:Object,default:function(){}}}},r=(e(647),e(63)),component=Object(r.a)(n,(function(){var t=this,o=t._self._c;return 0!==Object.keys(t.food).length?o("div",{staticClass:"food"},[o("div",{staticClass:"star-number-bg"}),t._v(" "),o("div",{staticClass:"star-block"},[o("el-rate",{staticClass:"star-rate",attrs:{disabled:"",value:t.food.star,colors:["#ff8100","#ff8100","#ff8100"],"disabled-void-color":"#bfb5b3","score-template":t.food.star.toString()}}),t._v(" "),o("span",{staticClass:"star-number"},[t._v(t._s(t.food.star.toFixed(1)))])],1),t._v(" "),o("el-image",{staticClass:"image",attrs:{src:e(465)("./".concat(t.food.id,".").concat(t.food.extension)),"preview-src-list":[e(465)("./".concat(t.food.id,".").concat(t.food.extension))],alt:t.food.name}}),t._v(" "),o("h3",{staticClass:"name"},[t._v("\n    "+t._s(t.food.name)+"\n    "),t.food.price?o("span",{staticClass:"price"},[t._v("$"+t._s(t.food.price))]):t._e()]),t._v(" "),o("h4",{staticClass:"store-name"},[t._v(t._s(t.food.storeName))]),t._v(" "),o("h4",{staticClass:"created-at"},[t._v(t._s(t.food.createdAt))]),t._v(" "),o("p",{staticClass:"description"},[t._v(t._s(t.food.description))]),t._v(" "),t._t("action")],2):t._e()}),[],!1,null,"29053bcf",null);o.default=component.exports},,function(t,o,e){var content=e(667);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(62).default)("4d047a90",content,!0,{sourceMap:!1})},,,,,,,,,,function(t,o,e){"use strict";e(656)},function(t,o,e){var n=e(61)((function(i){return i[1]}));n.push([t.i,".content-block[data-v-03ff2fde]{display:flex;margin:0 auto;max-width:1440px}.main-block[data-v-03ff2fde]{width:1000px}.category-block[data-v-03ff2fde],.search-block[data-v-03ff2fde]{background-color:#f9f2e9;padding:20px 40px}.search-block[data-v-03ff2fde]{align-items:center;display:flex;margin-top:20px}.search-block .description[data-v-03ff2fde]{margin-right:10px}.search-block .search[data-v-03ff2fde]{margin:auto}.search-block select[data-v-03ff2fde]{border:1px solid #b1b0b0;border-radius:4px;font-size:16px;padding:8px 10px;width:100%}.foods-block[data-v-03ff2fde]{background-color:#f9f2e9;display:flex;flex-wrap:wrap;justify-content:space-around;margin-top:20px;padding:20px}.food[data-v-03ff2fde]{background-color:#f7eade;box-shadow:2px 2px 10px -1px rgba(0,0,0,.3);display:inline-block;flex-basis:25%;margin:10px 0;min-width:180px;padding:20px;position:relative;text-align:center}.comment-button[data-v-03ff2fde]{border:1px solid #ff7d2d;border-radius:50%;bottom:20px;color:#ff7d2d;cursor:pointer;display:inline-block;font-size:32px;height:38px;left:calc(50% - 20px);margin-top:5px;position:absolute;width:38px}.comment-button[data-v-03ff2fde]:hover{background-color:#ff7d2d;color:#f7eade}.el-skeleton.is-animated .el-skeleton__item[data-v-03ff2fde]{animation:el-skeleton-loading 1.4s ease infinite;background:linear-gradient(90deg,#ddc3b5 25%,#e7d0c2 37%,#ddc3b5 63%);background-size:400% 100%}.comment-dialog[data-v-03ff2fde] .el-dialog{min-width:300px;width:55%}.comment-dialog[data-v-03ff2fde] .el-dialog__header{background-color:#f9f2e9}.comment-dialog[data-v-03ff2fde] .el-dialog__body{background-color:#fffbf0}.comment-dialog[data-v-03ff2fde] .el-dialog__body .el-aside{padding-right:20px}@media (max-width:768px){.content-block[data-v-03ff2fde]{flex-direction:column}.main-block[data-v-03ff2fde]{width:100%}.search-block[data-v-03ff2fde]{flex-direction:column}.search-block .description[data-v-03ff2fde]{margin-right:0}.food[data-v-03ff2fde]{flex-basis:40%}}@media (max-width:1024px){.el-container[data-v-03ff2fde]{align-items:center;flex-direction:column}.comment-dialog[data-v-03ff2fde] .el-dialog__body{padding:30px 10px}.comment-dialog[data-v-03ff2fde] .el-dialog__body .el-aside{margin:0 auto;padding-right:20px}}",""]),n.locals={},t.exports=n},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,o,e){"use strict";e.r(o);e(21),e(64);var n=e(457),r=e(654),c=e(462),f={name:"FoodIndex",components:{SideBar:n.default,FoodCard:r.default,ListPagination:c.default},data:function(){return{isFoodsLoading:!0,perPage:9,currentPage:1,storeId:null,dialogVisible:!0,dialogModal:!1,clickFood:{},commentLoading:!0}},head:function(){return{title:"食物 - Chris",meta:[{hid:"og:title",property:"og:title",content:"食物 - Chris"}]}},computed:{foods:function(){return this.$store.getters.getFoods(this.storeId).slice((this.currentPage-1)*this.perPage,this.currentPage*this.perPage)},totalCountFoods:function(){return this.$store.getters.getFoods(this.storeId).length},stores:function(){return this.$store.getters.getStores}},mounted:function(){this.dialogVisible=!1,this.dialogModal=!0,this.$store.dispatch("setFoods"),this.isFoodsLoading=!1},methods:{setCurrentPage:function(t){this.currentPage=t},selectStore:function(t){this.currentPage=1,this.storeId=t.target.value},openFoodComment:function(t){var o=this;this.clickFood=t,this.dialogVisible=!this.dialogVisible,this.commentLoading=!0;var e=document.createElement("div");e.id="comment-detail",e.className="fb-comments",e.dataset.href="https://wangchristine.github.io/food/?"+this.clickFood.id,e.dataset.width="100%",e.dataset.num_posts="5",e.dataset.lazy="true";var n=document.getElementById("comment-main");n.appendChild(e),window.FB.XFBML.parse(n,(function(){o.commentLoading=!1}))},closeFoodComment:function(){this.clickFood={};var t=document.getElementById("comment-main"),o=document.getElementById("comment-detail");null!==o&&t.removeChild(o)}}},d=f,l=(e(666),e(63)),component=Object(l.a)(d,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"content-block"},[o("div",{staticClass:"main-block"},[t._m(0),t._v(" "),o("div",{staticClass:"search-block"},[t._m(1),t._v(" "),o("div",{staticClass:"search"},[o("span",[t._v("店家：")]),t._v(" "),o("select",{attrs:{name:"store"},on:{change:function(o){return t.selectStore(o)}}},[o("option",{attrs:{value:"null"}},[t._v("-- 全部 --")]),t._v(" "),t._l(t.stores,(function(e){return o("option",{key:e.id,domProps:{value:e.id}},[t._v("\n            "+t._s(e.name)+"\n          ")])}))],2)])]),t._v(" "),o("el-skeleton",{attrs:{loading:t.isFoodsLoading,animated:""}},[o("template",{slot:"template"},[o("div",{staticClass:"foods-block"},t._l(6,(function(e,n){return o("div",{key:n,staticClass:"food"},[o("el-skeleton-item",{staticStyle:{width:"100%",height:"135px"},attrs:{variant:"image"}}),t._v(" "),o("el-skeleton-item",{staticStyle:{width:"70%",height:"24px",margin:"1em 0"},attrs:{variant:"h3"}}),t._v(" "),o("el-skeleton-item",{staticStyle:{width:"60%",height:"20px"},attrs:{variant:"text"}}),t._v(" "),o("el-skeleton-item",{staticStyle:{width:"60%",height:"20px",margin:"8px 0"},attrs:{variant:"text"}}),t._v(" "),o("el-skeleton-item",{staticStyle:{width:"100%",height:"40px"},attrs:{variant:"text"}})],1)})),0)]),t._v(" "),o("template",{slot:"default"},[o("div",{staticStyle:{display:"flex","justify-content":"space-around","flex-wrap":"wrap","background-color":"#f9f2e9",padding:"20px","margin-top":"20px"}},[t._l(t.foods,(function(e,n){return[o("FoodCard",{key:n,attrs:{food:e},scopedSlots:t._u([{key:"action",fn:function(){return[o("div",{staticStyle:{height:"50px"}}),t._v(" "),o("a",{staticClass:"comment-button",on:{click:function(o){return t.openFoodComment(e)}}},[o("i",{staticClass:"el-icon-s-comment"})])]},proxy:!0}],null,!0)})]}))],2),t._v(" "),o("ListPagination",{attrs:{"page-size":t.perPage,"current-page":t.currentPage,"total-count":t.totalCountFoods},on:{currentChange:t.setCurrentPage}})],1)],2),t._v(" "),o("el-dialog",{ref:"commentDialog",staticClass:"comment-dialog",staticStyle:{display:"none"},attrs:{title:"留言",visible:t.dialogVisible,modal:t.dialogModal,top:"10vh"},on:{"update:visible":function(o){t.dialogVisible=o},close:function(o){return t.closeFoodComment()}}},[o("el-container",{staticStyle:{"min-height":"50vh"}},[o("el-aside",[o("FoodCard",{attrs:{food:t.clickFood}})],1),t._v(" "),o("el-main",{directives:[{name:"loading",rawName:"v-loading",value:t.commentLoading,expression:"commentLoading"}],attrs:{id:"comment-main","element-loading-background":"inherit"}})],1)],1)],1),t._v(" "),o("side-bar")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"category-block"},[t("h2",[this._v("Category: 食物")])])},function(){var t=this,o=t._self._c;return o("div",{staticClass:"description"},[o("p",[t._v("星等為依據個人喜好跟主觀判斷所評分，僅供參考。")]),t._v(" "),o("p",[t._v("\n          1⭐: 不喜歡； 2⭐: 普通，以填飽肚子為主； 3⭐: 還不錯； 4⭐: 超好吃\n        ")])])}],!1,null,"03ff2fde",null);o.default=component.exports;installComponents(component,{FoodCard:e(654).default,ListPagination:e(462).default,SideBar:e(457).default})}])]);