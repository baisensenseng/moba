(function(t){function e(e){for(var s,i,c=e[0],o=e[1],l=e[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var o=a[i];0!==n[o]&&(s=!1)}s&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},n={app:0},r=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"bb1ba287"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=n[t]=[e,s]}));e.push(a[2]=s);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.src=i(t);var l=new Error;r=function(e){o.onerror=o.onload=null,clearTimeout(d);var a=n[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",l.name="ChunkLoadError",l.type=s,l.request=r,a[1](l)}n[t]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:o})}),12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0972":function(t,e,a){},1399:function(t,e,a){"use strict";a("ef4a")},"21bb":function(t,e,a){"use strict";a("2dad")},"2dad":function(t,e,a){},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return a(e)}function r(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],i=a("2877"),c={},o=Object(i["a"])(c,n,r,!1,null,null,null),l=o.exports,d=(a("be35"),a("78a7"),a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"bg-primary pt-3 pb-2"},[a("div",{staticClass:"nav nav-inverse jc-around pb-1"},[a("div",{staticClass:"nav-item active"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/",tag:"div"}},[t._v(" 首页 ")])],1),a("div",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/",tag:"div"}},[t._v(" 攻略中心 ")])],1),a("div",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/",tag:"div"}},[t._v(" 赛事中心 ")])],1)])]),a("router-view")],1)},f=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"topbar bg-black py-1 text-white px-3 d-flex ai-center"},[s("img",{attrs:{src:a("9d64"),alt:"",height:"30"}}),s("div",{staticClass:"pl-3 flex-1"},[s("div",{staticClass:"text-white"},[t._v("王者荣耀")]),s("div",{staticClass:"text-grey-1 fs-xxs"},[t._v("团队成就更多")])]),s("button",{staticClass:"btn bg-primary",attrs:{type:"button"}},[t._v("立即下载")])])}],p={data:function(){return{}}},b=p,v=(a("a006"),Object(i["a"])(b,u,f,!1,null,null,null)),m=v.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[s("swiper-slide",[s("img",{staticClass:"w-100",attrs:{src:a("6aeb"),alt:""}})]),s("swiper-slide",[s("img",{staticClass:"w-100",attrs:{src:a("b8d4"),alt:""}})]),s("swiper-slide",[s("img",{staticClass:"w-100",attrs:{src:a("5afc"),alt:""}})]),s("div",{staticClass:"swiper-pagination pagination-home text-right px-3 pb-2",attrs:{slot:"pagination"},slot:"pagination"})],1),s("div",{staticClass:"nav-icons bg-white mt-3  text-center pt-3 text-dark-1"},[s("div",{staticClass:"d-flex flex-wrap"},t._l(10,(function(e){return s("div",{key:e,staticClass:"nav-item mb-3"},[s("i",{staticClass:"sprite sprite-news"}),s("div",{staticClass:"py-2"},[t._v("爆料站")])])})),0),t._m(0)]),s("m-list-card",{attrs:{icon:"caidan1",title:"新闻资讯",categories:t.newsCats},scopedSlots:t._u([{key:"items",fn:function(e){var a=e.category;return t._l(a.newsList,(function(e,a){return s("router-link",{key:a,staticClass:"py-2 fs-lg d-flex",attrs:{tag:"div",to:"/articles/"+e._id}},[s("span",{staticClass:"text-info"},[t._v(t._s(e.categoryName))]),s("span",{staticClass:"px-2"},[t._v("|")]),s("span",{staticClass:"flex-1 text-dark-1 text-ellipsis pr-2"},[t._v(t._s(e.title))]),s("span",{staticClass:"text-grey-1 fs-sm"},[t._v(t._s(t._f("date")(e.createdAt)))])])}))}}])}),s("m-list-card",{attrs:{icon:"yingxiongxiangqing",title:"英雄列表",categories:t.heroCats},scopedSlots:t._u([{key:"items",fn:function(e){var a=e.category;return[s("div",{staticClass:"d-flex flex-wrap",staticStyle:{margin:"0 -0.5rem"}},t._l(a.heroList,(function(e,a){return s("router-link",{key:a,staticClass:"p-2 text-center",staticStyle:{width:"20%"},attrs:{tag:"div",to:"/heroes/"+e._id}},[s("img",{staticClass:"w-100",attrs:{src:e.avatar,alt:""}}),s("div",[t._v(t._s(e.name))])])})),1)]}}])}),s("m-crad",{attrs:{icon:"caidan1",title:"视频列表"}},t._l(t.videoList,(function(e){return s("router-link",{key:e._id,staticClass:"py-2",attrs:{tag:"div",to:"/videos/"+e._id}},[t._v(t._s(e.name))])})),1),s("m-crad",{attrs:{icon:"caidan1",title:"支付模块"}},[s("div",{staticClass:"components-input-demo-presuffix"},[s("a-input",{attrs:{prefix:"￥",suffix:"RMB"},model:{value:t.alipayinfo.totalAmount,callback:function(e){t.$set(t.alipayinfo,"totalAmount",t._n(e))},expression:"alipayinfo.totalAmount"}}),s("a-input",{attrs:{prefix:"",suffix:"tradeNo",placeholder:"必填，随便填不能重复"},model:{value:t.alipayinfo.tradeNo,callback:function(e){t.$set(t.alipayinfo,"tradeNo",t._n(e))},expression:"alipayinfo.tradeNo"}}),s("div",{staticClass:"text-center mt-3"},[s("a-button",{attrs:{type:"primary"},on:{click:t.alipay}},[t._v(" 支付 ")])],1),s("a-modal",{staticClass:"qrcode-content",attrs:{title:"支付二维码"},on:{ok:t.handleOk},model:{value:t.isPayqrcode,callback:function(e){t.isPayqrcode=e},expression:"isPayqrcode"}},[t.isPayqrcode?s("div",{ref:"qrcode",staticClass:"code text-center",attrs:{id:"qrcode"},on:{click:t.handleQrcode}}):t._e()])],1)]),s("m-crad",{attrs:{icon:"caidan1",title:"抖音无水印视频解析"}},[s("div",{staticClass:"components-input-demo-presuffix"},[s("a-input",{model:{value:t.analysisurl.url,callback:function(e){t.$set(t.analysisurl,"url",e)},expression:"analysisurl.url"}}),s("div",{staticClass:"text-center mt-3"},[s("a-button",{attrs:{type:"primary"},on:{click:t.analysis}},[t._v("解析")])],1),s("div",[t._v("dy视频链接："+t._s(t.nodedata.dyurl))]),s("div",[t._v("视频链接："+t._s(t.nodedata.url))]),s("div",[t._v("音频链接："+t._s(t.nodedata.music))])],1)])],1)},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-light py-2 fs-sm"},[a("i",{staticClass:"sprite sprite-arrow mr-2"}),a("span",[t._v("收起")])])}],g=a("1da1"),y=(a("96cf"),a("5a0c")),_=a.n(y),x=a("d044"),w=a.n(x),C={data:function(){return{swiperOption:{pagination:{el:".pagination-home"}},newsCats:[],heroCats:[],videoList:[],alipayinfo:{tradeNo:"",subject:"女装",totalAmount:.5,body:"黑丝吊带小蜡烛",timeExpress:5},isPayqrcode:!1,qrcode:"",analysisurl:{dyurl:"",url:"",cover:"",music:"",title:""},nodedata:{dyurl:"",url:"",cover:"",music:"",title:""}}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},filters:{date:function(t){return _()(t).format("MM/DD")}},created:function(){this.fetchNewsCats(),this.fetchHeroCats(),this.fetchVideo()},mounted:function(){console.log("alipay"),console.log("this is current swiper instance object",this.swiper),this.swiper.slideTo(3,1e3,!1)},methods:{fetchNewsCats:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("news/list");case 2:a=e.sent,t.newsCats=a.data;case 4:case"end":return e.stop()}}),e)})))()},fetchHeroCats:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("heroes/list");case 2:a=e.sent,t.heroCats=a.data;case 4:case"end":return e.stop()}}),e)})))()},fetchVideo:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("videos/list");case 2:a=e.sent,console.log(a),t.videoList=a.data;case 5:case"end":return e.stop()}}),e)})))()},alipay:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.post("createInvoice",t.alipayinfo);case 2:a=e.sent,console.log(a.data),s=a.data,"10000"===s.code&&(t.qrcode=s.qr_code,t.payOrder());case 6:case"end":return e.stop()}}),e)})))()},payOrder:function(){var t=this;console.log("payOrder"),this.isPayqrcode=!0,this.$nextTick((function(){t.crateQrcode()}))},crateQrcode:function(){this.qr=new w.a("qrcode",{width:150,height:150,text:this.qrcode})},closeCode:function(){this.$refs.qrcode.innerHTML=""},handleOk:function(t){console.log(t),this.isPayqrcode=!1,this.$refs.qrcode.innerHTML=""},handleQrcode:function(){window.open("".concat(this.qrcode))},analysis:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.analysisurl),e.next=3,t.$http.post("analysisurl",t.analysisurl);case 3:a=e.sent,console.log(a),a.data.code?t.nodedata=a.data:(console.log(a.data),t.nodedata.dyurl=a.data);case 6:case"end":return e.stop()}}),e)})))()}}},k=C,O=(a("21bb"),Object(i["a"])(k,h,j,!1,null,null,null)),$=O.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.model?a("div",{staticClass:"page-article"},[a("div",{staticClass:"d-flex py-3 px-2 border-bottom"},[a("div",{staticClass:"iconfont icon-fanhui text-blue"}),a("div",{staticClass:"flex-1 text-blue pl-2"},[t._v(" "+t._s(t.model.title)+" ")]),a("div",{staticClass:"text-grey fs-xs"})]),a("div",{staticClass:"px-3 body fs-lg",domProps:{innerHTML:t._s(t.model.body)}}),t._m(0),a("div",{staticClass:"px-3"},t._l(t.model.related,(function(e){return a("router-link",{key:e._id,staticClass:"pt-2",attrs:{tag:"div",to:"/articles/"+e._id}},[t._v(t._s(e.title))])})),1)]):t._e()},z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"px-3 border-top py-2"},[a("div",{staticClass:"d-flex ai-center"},[a("i",{staticClass:"iconfont icon-fanhui"}),a("strong",{staticClass:"text-bule fs-lg ml-2"},[t._v("相关资讯")])])])}],E={data:function(){return{model:null}},props:{id:{required:!0}},watch:{id:"fetch"},created:function(){this.fetch()},methods:{fetch:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("articles/".concat(t.id));case 2:a=e.sent,t.model=a.data;case 4:case"end":return e.stop()}}),e)})))()}}},P=E,R=(a("1399"),Object(i["a"])(P,q,z,!1,null,null,null)),S=R.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.model?s("div",{staticClass:"page-hero"},[s("div",{staticClass:"topbar bg-black py-1 text-white px-3 d-flex ai-center"},[s("img",{attrs:{src:a("9d64"),alt:"",height:"30"}}),t._m(0),s("router-link",{attrs:{to:"/",tag:"div"}},[t._v("更多英雄 >")])],1),s("h1",[t._v(t._s(t.model.name))])]):t._e()},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pl-3 flex-1"},[a("span",{staticClass:"text-white"},[t._v("王者荣耀")]),a("span",{staticClass:"ml-2"},[t._v("攻略站")])])}],T={data:function(){return{model:null}},props:{id:{required:!0}},created:function(){this.fecth()},methods:{fecth:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("heroes/".concat(t.id));case 2:a=e.sent,t.model=a.data;case 4:case"end":return e.stop()}}),e)})))()}}},A=T,M=Object(i["a"])(A,L,N,!1,null,null,null),H=M.exports,U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.model?s("div",{staticClass:"page-hero"},[s("div",{staticClass:"topbar bg-black py-1 text-white px-3 d-flex ai-center"},[s("img",{attrs:{src:a("9d64"),alt:"",height:"30"}}),t._m(0),s("router-link",{attrs:{to:"/",tag:"div"}},[t._v("更多英雄 >")])],1),s("h1",[t._v(t._s(t.model.name))]),s("video",{staticClass:"video-style",staticStyle:{width:"100%"},attrs:{src:t.model.url,controls:"controls","webkit-playsinline":"true",playsinline:"true","x5-video-player-type":"h5","x5-video-player-fullscreen":"true"}})]):t._e()},D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pl-3 flex-1"},[a("span",{staticClass:"text-white"},[t._v("王者荣耀")]),a("span",{staticClass:"ml-2"},[t._v("攻略站")])])}],Q={data:function(){return{model:null}},props:{id:{required:!0}},created:function(){this.fecth()},methods:{fecth:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.id),e.next=3,t.$http.get("videos/".concat(t.id));case 3:a=e.sent,t.model=a.data;case 5:case"end":return e.stop()}}),e)})))()}}},V=Q,I=Object(i["a"])(V,U,D,!1,null,null,null),B=I.exports;s["a"].use(d["a"]);var J=[{path:"/",component:m,children:[{path:"/",name:"home",component:$},{path:"/articles/:id",name:"article",component:S,props:!0}]},{path:"/heroes/:id",name:"hero",component:H,props:!0},{path:"/videos/:id",name:"video",component:B,props:!0},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],F=new d["a"]({routes:J}),G=F,K=a("7212"),W=a.n(K),X=(a("dfa4"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card bg-white mt-2 p-3 "},[a("div",{staticClass:"card-header d-flex pb-3"},[a("i",{staticClass:"iconfont icon-caidan1",class:"icon-"+t.icon}),a("div",{staticClass:"fs-xl flex-1 px-2 "},[t._v(t._s(t.title))]),a("i",{staticClass:"iconfont icon-more"})]),a("div",{staticClass:"card-body pt-3"},[t._t("default")],2)])}),Y=[],Z={props:{title:{type:String,required:!0},icon:{type:String,required:!0}},data:function(){return{}}},tt=Z,et=(a("e60d"),Object(i["a"])(tt,X,Y,!1,null,null,null)),at=et.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("m-crad",{attrs:{icon:t.icon,title:t.title}},[a("div",{staticClass:"nav jc-between"},t._l(t.categories,(function(e,s){return a("div",{key:s,staticClass:"nav-item",class:{active:t.active===s},on:{click:function(e){return t.$refs.list.swiper.slideTo(s)}}},[a("div",{staticClass:"nav-link"},[t._v(t._s(e.name))])])})),0),a("div",{staticClass:"pt-3"},[a("swiper",{ref:"list",attrs:{options:{autoHeight:!0}},on:{"slide-change":function(){return t.active=t.$refs.list.swiper.realIndex}}},t._l(t.categories,(function(e,s){return a("swiper-slide",{key:s},[t._t("items",null,{category:e})],2)})),1)],1)])},nt=[],rt={props:{title:{type:String,required:!0},icon:{type:String,required:!0},categories:{type:Array,required:!0}},data:function(){return{active:0}}},it=rt,ct=Object(i["a"])(it,st,nt,!1,null,null,null),ot=ct.exports,lt=a("bc3a"),dt=a.n(lt),ut=a("f23d");a("202f");s["a"].config.productionTip=!1,s["a"].use(W.a),s["a"].component("m-crad",at),s["a"].component("m-list-card",ot),s["a"].prototype.$http=dt.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL||"/web/api"}),s["a"].use(ut["a"]),new s["a"]({router:G,render:function(t){return t(l)}}).$mount("#app")},"5afc":function(t,e,a){t.exports=a.p+"img/ae37bd718aa19d57ae7c80e0843aef86.ae37bd71.jpeg"},"6aeb":function(t,e,a){t.exports=a.p+"img/88f7acf6451d67170ba172091af7fa42.88f7acf6.jpeg"},"78a7":function(t,e,a){},"9d64":function(t,e,a){t.exports=a.p+"img/logo.b3b3bca8.png"},a006:function(t,e,a){"use strict";a("0972")},b8d4:function(t,e,a){t.exports=a.p+"img/3da84d86175a05e5b9fd62beeff35e13.3da84d86.jpeg"},be35:function(t,e,a){},e60d:function(t,e,a){"use strict";a("e9ec")},e9ec:function(t,e,a){},ef4a:function(t,e,a){}});
//# sourceMappingURL=app.77b1d5de.js.map