(function(t){function e(e){for(var s,i,c=e[0],o=e[1],l=e[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var o=a[i];0!==n[o]&&(s=!1)}s&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},n={app:0},r=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a7e07b44"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=n[t]=[e,s]}));e.push(a[2]=s);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.src=i(t);var l=new Error;r=function(e){o.onerror=o.onload=null,clearTimeout(d);var a=n[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",l.name="ChunkLoadError",l.type=s,l.request=r,a[1](l)}n[t]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:o})}),12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0972":function(t,e,a){},1399:function(t,e,a){"use strict";a("ef4a")},"21bb":function(t,e,a){"use strict";a("2dad")},"2dad":function(t,e,a){},"306d":function(t,e,a){},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return a(e)}function r(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],i=a("2877"),c={},o=Object(i["a"])(c,n,r,!1,null,null,null),l=o.exports,d=(a("be35"),a("78a7"),a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"bg-primary pt-3 pb-2"},[a("div",{staticClass:"nav nav-inverse jc-around pb-1"},[a("div",{staticClass:"nav-item active"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/",tag:"div"}},[t._v(" 首页 ")])],1),a("div",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/",tag:"div"}},[t._v(" 攻略中心 ")])],1),a("div",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/",tag:"div"}},[t._v(" 赛事中心 ")])],1)])]),a("router-view")],1)},f=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"topbar bg-black py-1 text-white px-3 d-flex ai-center"},[s("img",{attrs:{src:a("9d64"),alt:"",height:"30"}}),s("div",{staticClass:"pl-3 flex-1"},[s("div",{staticClass:"text-white"},[t._v("王者荣耀")]),s("div",{staticClass:"text-grey-1 fs-xxs"},[t._v("团队成就更多")])]),s("button",{staticClass:"btn bg-primary",attrs:{type:"button"}},[t._v("立即下载")])])}],p={data:function(){return{}}},m=p,v=(a("a006"),Object(i["a"])(m,u,f,!1,null,null,null)),b=v.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[s("swiper-slide",[s("img",{staticClass:"w-100",attrs:{src:a("6aeb"),alt:""}})]),s("swiper-slide",[s("img",{staticClass:"w-100",attrs:{src:a("b8d4"),alt:""}})]),s("swiper-slide",[s("img",{staticClass:"w-100",attrs:{src:a("5afc"),alt:""}})]),s("div",{staticClass:"swiper-pagination pagination-home text-right px-3 pb-2",attrs:{slot:"pagination"},slot:"pagination"})],1),s("div",{staticClass:"nav-icons bg-white mt-3  text-center pt-3 text-dark-1"},[s("div",{staticClass:"d-flex flex-wrap"},t._l(10,(function(e){return s("div",{key:e,staticClass:"nav-item mb-3"},[s("i",{staticClass:"sprite sprite-news"}),s("div",{staticClass:"py-2"},[t._v("爆料站")])])})),0),t._m(0)]),s("m-list-card",{attrs:{icon:"caidan1",title:"新闻资讯测试jenkins",categories:t.newsCats},scopedSlots:t._u([{key:"items",fn:function(e){var a=e.category;return t._l(a.newsList,(function(e,a){return s("router-link",{key:a,staticClass:"py-2 fs-lg d-flex",attrs:{tag:"div",to:"/articles/"+e._id}},[s("span",{staticClass:"text-info"},[t._v(t._s(e.categoryName))]),s("span",{staticClass:"px-2"},[t._v("|")]),s("span",{staticClass:"flex-1 text-dark-1 text-ellipsis pr-2"},[t._v(t._s(e.title))]),s("span",{staticClass:"text-grey-1 fs-sm"},[t._v(t._s(t._f("date")(e.createdAt)))])])}))}}])}),s("m-list-card",{attrs:{icon:"yingxiongxiangqing",title:"英雄列表",categories:t.heroCats},scopedSlots:t._u([{key:"items",fn:function(e){var a=e.category;return[s("div",{staticClass:"d-flex flex-wrap",staticStyle:{margin:"0 -0.5rem"}},t._l(a.heroList,(function(e,a){return s("router-link",{key:a,staticClass:"p-2 text-center",staticStyle:{width:"20%"},attrs:{tag:"div",to:"/heroes/"+e._id}},[s("img",{staticClass:"w-100",attrs:{src:e.avatar,alt:""}}),s("div",[t._v(t._s(e.name))])])})),1)]}}])}),s("m-crad",{attrs:{icon:"caidan1",title:"视频列表"}},t._l(t.videoList,(function(e){return s("router-link",{key:e._id,staticClass:"py-2",attrs:{tag:"div",to:"/videos/"+e._id}},[t._v(t._s(e.name))])})),1),s("m-crad",{attrs:{icon:"caidan1",title:"支付模块"}},[s("div",{staticClass:"components-input-demo-presuffix"},[s("a-input",{attrs:{prefix:"￥",suffix:"RMB"},model:{value:t.alipayinfo.totalAmount,callback:function(e){t.$set(t.alipayinfo,"totalAmount",t._n(e))},expression:"alipayinfo.totalAmount"}}),s("a-input",{attrs:{prefix:"",suffix:"tradeNo",placeholder:"必填，随便填不能重复"},model:{value:t.alipayinfo.tradeNo,callback:function(e){t.$set(t.alipayinfo,"tradeNo",t._n(e))},expression:"alipayinfo.tradeNo"}}),s("div",{staticClass:"text-center mt-3"},[s("a-button",{attrs:{type:"primary"},on:{click:t.alipay}},[t._v(" 支付 ")])],1),s("a-modal",{staticClass:"qrcode-content",attrs:{title:"支付二维码"},on:{ok:t.handleOk},model:{value:t.isPayqrcode,callback:function(e){t.isPayqrcode=e},expression:"isPayqrcode"}},[t.isPayqrcode?s("div",{ref:"qrcode",staticClass:"code text-center",attrs:{id:"qrcode"},on:{click:t.handleQrcode}}):t._e()])],1)]),s("m-crad",{attrs:{icon:"caidan1",title:"抖音无水印视频解析"},on:{click:t.playAudio}},[s("div",{staticClass:"components-input-demo-presuffix"},[s("a-input",{model:{value:t.analysisurl.url,callback:function(e){t.$set(t.analysisurl,"url",e)},expression:"analysisurl.url"}}),s("div",{staticClass:"text-center mt-3"},[s("a-button",{attrs:{type:"primary"},on:{click:t.analysis}},[t._v("解析")])],1),s("div",[t._v("dy视频链接："+t._s(t.nodedata.dyurl))]),s("div",[t._v("视频链接："+t._s(t.nodedata.url))]),s("div",[t._v("音频链接："+t._s(t.nodedata.music))])],1)]),s("m-crad",{attrs:{icon:"caidan1",title:"文字转语音测试111"},on:{click:t.playAudio}},[s("div",{staticClass:"text-center mt-3"},[s("a-button",{attrs:{type:"primary"},on:{click:t.playAudio}},[t._v(" 播放 ")])],1)])],1)},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-light py-2 fs-sm"},[a("i",{staticClass:"sprite sprite-arrow mr-2"}),a("span",[t._v("收起")])])}],j=a("1da1"),y=(a("4de4"),a("b0c0"),a("96cf"),a("5a0c")),_=a.n(y),x=a("d044"),k=a.n(x),w={data:function(){return{swiperOption:{pagination:{el:".pagination-home"}},newsCats:[],heroCats:[],videoList:[],alipayinfo:{tradeNo:"",subject:"女装",totalAmount:.5,body:"黑丝吊带小蜡烛",timeExpress:5},isPayqrcode:!1,qrcode:"",analysisurl:{dyurl:"",url:"",cover:"",music:"",title:""},nodedata:{dyurl:"",url:"",cover:"",music:"",title:""}}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},filters:{date:function(t){return _()(t).format("MM/DD")}},created:function(){this.fetchNewsCats(),this.fetchHeroCats(),this.fetchVideo()},mounted:function(){console.log("alipay"),console.log("xigua111"),this.swiper.slideTo(3,1e3,!1)},methods:{fetchNewsCats:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("news/list");case 2:a=e.sent,t.newsCats=a.data;case 4:case"end":return e.stop()}}),e)})))()},fetchHeroCats:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("heroes/list");case 2:a=e.sent,t.heroCats=a.data;case 4:case"end":return e.stop()}}),e)})))()},fetchVideo:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("videos/list");case 2:a=e.sent,t.videoList=a.data;case 4:case"end":return e.stop()}}),e)})))()},alipay:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.post("createInvoice",t.alipayinfo);case 2:a=e.sent,s=a.data,"10000"===s.code&&(t.qrcode=s.qr_code,t.payOrder());case 5:case"end":return e.stop()}}),e)})))()},payOrder:function(){var t=this;this.isPayqrcode=!0,this.$nextTick((function(){t.crateQrcode()}))},crateQrcode:function(){this.qr=new k.a("qrcode",{width:150,height:150,text:this.qrcode})},closeCode:function(){this.$refs.qrcode.innerHTML=""},handleOk:function(t){console.log(t),this.isPayqrcode=!1,this.$refs.qrcode.innerHTML=""},handleQrcode:function(){window.open("".concat(this.qrcode))},analysis:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.post("analysisurl",t.analysisurl);case 2:a=e.sent,a.data.code?t.nodedata=a.data:t.nodedata.dyurl=a.data;case 4:case"end":return e.stop()}}),e)})))()},playAudio:function(){console.log("123");var t=new SpeechSynthesisUtterance,e=window.speechSynthesis.getVoices();t.voice=e[10],t.voiceURI="native",t.volume=1,t.rate=1.2,t.pitch=0,t.text="上海市公共数据开放暂行办法第一章　总则第一条（目的和依据） 为了促进和规范本市公共数据开放和利用，提升政府治理能力和公共服务水平，推动数字经济发展，根据相关法律法规，结合本市实际，制定本办法。第二条（适用范围） 本市行政区域内公共数据开放及其相关管理活动，适用本办法。 涉及国家秘密的公共数据管理，按照相关保密法律、法规的规定执行。第三条（定义） 本办法所称公共数据，是指本市各级行政机关以及履行公共管理和服务职能的事业单位（以下统称公共管理和服务机构）在依法履职过程中，采集和产生的各类数据资源。 本办法所称公共数据开放，是指公共管理和服务机构在公共数据范围内，面向社会提供具备原始性、可机器读取、可供社会化再利用的数据集的公共服务。第四条（工作原则） 本市公共数据开放工作，遵循“需求导向、安全可控、分级分类、统一标准、便捷高效”的原则。第五条（职责分工） 市政府办公厅负责推动、监督本市公共数据开放工作。 市经济信息化部门负责指导协调、统筹推进本市公共数据开放、利用和相关产业发展。 市大数据中心负责本市公共数据统一开放平台（以下简称开放平台）的建设、运行和维护，并制订相关技术标准。 区人民政府确定的部门负责指导、推进和协调本行政区域内公共数据开放工作。 其他公共管理和服务机构根据相关法律、法规和规章，做好公共数据开放的相关工作。第六条（数据安全保护） 市、区人民政府及各相关部门在公共数据开放过程中，应当落实数据安全管理要求，采取措施保护商业秘密和个人隐私，防止公共数据被非法获取或者不当利用。第七条（协调机制） 市人民政府建立健全公共数据开放工作的协调机制，协调解决公共数据开放的重大事项。第八条（专家委员会） 市经济信息化部门应当建立由高校、科研机构、企业、相关部门的专家组成的公共数据开放专家委员会。 公共数据开放专家委员会负责研究论证公共数据开放中的疑难问题，评估公共数据利用风险，对公共数据开放工作提出专业建议。第二章　开放机制第九条（数据开放主体） 市人民政府各部门、区人民政府以及其他公共管理和服务机构（以下统称数据开放主体）分别负责本系统、本行政区域和本单位的公共数据开放。 对于纳入开放范围的公共数据,应当在本市公共数据资源目录中列明数据开放主体。第十条（开放重点） 市经济信息化部门应当根据本市经济社会发展需要，确定年度公共数据开放重点。与民生紧密相关、社会迫切需要、行业增值潜力显著和产业战略意义重大的公共数据，应当优先纳入公共数据开放重点。 市经济信息化部门在确定公共数据开放重点时，应当听取相关行业主管部门和社会公众的意见。 自然人、法人和非法人组织可以通过开放平台对公共数据的开放范围提出需求和意见建议。第十一条（分级分类） 市经济信息化部门应当会同市大数据中心结合公共数据安全要求、个人信息保护要求和应用要求等因素，制定本市公共数据分级分类规则。数据开放主体应当按照分级分类规则，结合行业、区域特点，制定相应的实施细则，并对公共数据进行分级分类，确定开放类型、开放条件和监管措施。 对涉及商业秘密、个人隐私，或者法律法规规定不得开放的公共数据，列入非开放类；对数据安全和处理能力要求较高、时效性较强或者需要持续获取的公共数据，列入有条件开放类；其他公共数据列入无条件开放类。 非开放类公共数据依法进行脱密、脱敏处理，或者相关权利人同意开放的，可以列入无条件开放类或者有条件开放类。第十二条（开放清单） 数据开放主体应当按照年度开放重点和公共数据分级分类规则，在本市公共数据资源目录范围内，制定公共数据开放清单（以下简称开放清单），列明可以向社会开放的公共数据。通过共享等手段获取的公共数据，不纳入本单位的开放清单。 开放清单应当标注数据领域、数据摘要、数据项和数据格式等信息，明确数据的开放类型、开放条件和更新频率等。 市经济信息化部门应当会同数据开放主体建立开放清单审查机制。经审查后，开放清单应当通过开放平台予以公布。第十三条（动态调整） 数据开放主体应当在市经济信息化部门的指导下建立开放清单动态调整机制，对尚未开放的公共数据进行定期评估，及时更新开放清单，不断扩大公共数据的开放范围。第十四条（无条件开放类数据获取方式） 对列入无条件开放类的公共数据，自然人、法人和非法人组织可以通过开放平台以数据下载或者接口调用的方式直接获取。第十五条（有条件开放类数据获取方式） 对列入有条件开放类的公共数据，数据开放主体应当通过开放平台公布利用数据的技术能力和安全保障措施等条件，向符合条件的自然人、法人和非法人组织开放。 数据开放主体应当与符合条件的自然人、法人和非法人组织签订数据利用协议，明确数据利用的条件和具体要求，并按照协议约定通过数据下载、接口访问、数据沙箱等方式开放公共数据。 数据利用协议示范文本由市经济信息化部门会同市大数据中心和数据开放主体制定。第十六条（数据质量） 数据开放主体应当按照相关技术标准和要求，对列入开放清单的公共数据（以下简称开放数据）进行整理、清洗、脱敏、格式转换等处理，并根据开放清单明确的更新频率，及时更新数据。第三章　平台建设第十七条（开放平台） 市大数据中心应当依托市大数据资源平台建设开放平台。 数据开放主体应当通过开放平台开放公共数据，原则上不再新建独立的开放渠道。已经建成的开放渠道，应当按照有关规定进行整合、归并，将其纳入开放平台。第十八条（平台功能） 开放平台为数据开放主体提供数据预处理、安全加密、日志记录等数据管理功能。 开放平台为获取、使用和传播公共数据的自然人、法人和非法人组织（以下统称数据利用主体）提供数据查询、预览和获取等功能。 市大数据中心应当根据数据开放主体和数据利用主体的需求，推进开放平台技术升级、功能迭代和资源扩展，确保开放平台具备必要的服务能力。第十九条（平台规范） 市大数据中心应当制定并公布开放平台管理制度，明确数据开放主体和数据利用主体在开放平台上的行为规范和安全责任，对开放平台上开放数据的存储、传输、利用等环节建立透明化、可审计、可追溯的全过程管理机制。第二十条（行为记录） 市大数据中心应当依托开放平台，形成数据开放和利用行为的全程记录，为数据开放和利用的日常监管提供支撑。 数据开放主体应当对数据处理和数据开放情况进行记录；数据利用主体应当对有条件开放类公共数据的访问、调用和利用等情况进行记录。记录应当通过开放平台提交市大数据中心。第二十一条（数据纠错） 自然人、法人和非法人组织认为开放数据存在错误、遗漏等情形，可以通过开放平台向数据开放主体提出异议。数据开放主体经基本确认后，应当立即进行异议标注，并由数据开放主体和市大数据中心在各自职责范围内，及时处理并反馈。第二十二条（权益保护） 自然人、法人和非法人组织认为开放数据侵犯其商业秘密、个人隐私等合法权益的，可以通过开放平台告知数据开放主体，并提交相关证据材料。 数据开放主体收到相关证据材料后，认为必要的，应当立即中止开放，同时进行核实。根据核实结果，分别采取撤回数据、恢复开放或者处理后再开放等措施，并及时反馈。第四章　数据利用第二十三条（鼓励数据利用） 本市鼓励数据利用主体利用公共数据开展科技研究、咨询服务、产品开发、数据加工等活动。 数据利用主体应当遵循合法、正当的原则利用公共数据，不得损害国家利益、社会公共利益和第三方合法权益。第二十四条（成果展示与合作应用） 市经济信息化部门应当会同市大数据中心和数据开放主体通过开放平台，对社会价值或者市场价值显著的公共数据利用案例进行示范展示。 本市鼓励数据利用主体与市经济信息化部门、市大数据中心以及数据开放主体开展合作，将利用公共数据形成的各类成果用于行政监管和公共服务，提升公共管理的科学性和有效性。第二十五条（数据利用反馈与来源披露） 对有条件开放类公共数据，数据利用主体应当按照数据利用协议的约定，向数据开放主体反馈数据利用情况。 数据利用主体利用公共数据形成数据产品、研究报告、学术论文等成果的，应当在成果中注明数据来源。第二十六条（数据利用安全保障） 数据利用主体应当按照开放平台管理制度的要求和数据利用协议的约定，在利用公共数据的过程中，采取必要的安全保障措施，并接受有关部门的监督检查。第二十七条（利用监管） 数据开放主体应当建立有效的监管制度，对有条件开放类公共数据的利用情况进行跟踪，判断数据利用行为是否合法正当。 任何单位和个人可以对违法违规利用公共数据的行为向数据开放主体及有关部门举报。第二十八条（违法违规行为处理） 数据利用主体在利用公共数据的过程中有下列行为之一，市经济信息化部门应当会同市大数据中心和数据开放主体对其予以记录：（一）违反开放平台管理制度；（二）采用非法手段获取公共数据；（三）侵犯商业秘密、个人隐私等他人合法权益；（四）超出数据利用协议限制的应用场景使用公共数据；（五）违反法律、法规、规章和数据利用协议的其他行为。对存在前款行为的数据利用主体，市大数据中心和数据开放主体应当按照各自职责，采取限制或者关闭其数据获取权限等措施，并可以在开放平台对违法违规行为和处理措施予以公示。第五章　多元开放第二十九条（优化开放环境） 市经济信息化部门结合本市大数据应用和产业发展现状，通过产业政策引导、社会资本引入、应用模式创新以及优秀服务推荐、联合创新实验室等方式，推动“产学研用”协同发展，营造良好的数据开放氛围。第三十条（多元主体参与） 市经济信息化部门应当会同市大数据中心、相关行业主管部门建立多元化的数据合作交流机制，引导企业、行业协会等单位依法开放自有数据，促进公共数据和非公共数据的多维度开放和融合应用。 本市鼓励具备相应能力的企业、行业协会等专业服务机构通过开放平台提供各类数据服务。第三十一条（非公共数据交易） 市经济信息化部门应当会同相关行业主管部门制定非公共数据交易流通标准，依托数据交易机构开展非公共数据交易流通的试点示范，推动建立合法合规、安全有序的数据交易体系。第三十二条（标准体系和技术规范） 本市鼓励企业、科研机构和社会团体参与制订数据开放利用、数据安全保护等相关国家标准、行业标准、地方标准以及相关技术规范，推动形成相关行业公约，建立行业自律体系。第三十三条（国际合作交流） 本市鼓励企业、科研机构和社会团体依法与境外企业、科研机构等开展公共数据开放领域的国际合作交流，提升本市公共数据开放的创新应用能力和认知水平。第三十四条（表彰机制） 市经济信息化部门应当会同市大数据中心和相关行业主管部门对在数据技术研发、数据服务提供、数据利用实践、数据合作交流等方面有突出表现的单位和个人，按照规定给予表彰。第六章　监督保障第三十五条（安全管理职责） 市网信、公安等部门应当会同其他具有网络安全管理职能的部门建立本市公共数据开放的安全管理体系，协调处理公共数据开放重大安全事件，指导数据开放主体制定本机构的安全管理制度。 市大数据中心应当根据法律法规和相关要求，加强开放平台的安全管理，健全安全防护体系，完善安全防护措施，保障开放平台安全可靠运行。 数据开放主体应当制定并落实与公共数据分级分类开放相适应的安全管理制度，并按照相关法律法规，在数据开放前评估安全风险。第三十六条（安全保障措施监管） 数据利用主体未按照开放平台管理制度和数据利用协议落实数据安全保障措施的，市大数据中心应当提出整改要求,并暂时关闭其数据获取权限；对未按照要求进行整改的，市大数据中心应当终止对其提供数据服务。第三十七条（预警机制） 市网信、公安和保密部门应当会同数据开放主体建立公共数据开放安全预警机制，对涉密数据和敏感数据泄漏等异常情况进行监测和预警。第三十八条（应急管理） 市网信、公安部门应当建立公共数据开放应急管理制度，指导数据开放主体制定安全处置应急预案、定期组织应急演练，确保公共数据开放工作安全有序。第三十九条（组织保障） 数据开放主体应当加强公共数据开放工作的组织保障，明确牵头负责数据开放工作的机构，建立数据开放专人专岗管理制度。 市经济信息化部门应当会同市大数据中心制定公共数据开放工作培训计划，定期对数据开放工作相关机构工作人员开展培训，并纳入本市公务员培训工作体系。第四十条（资金保障） 行政事业单位开展公共数据开放所涉及的信息系统建设、改造、运维以及考核评估等相关经费，按照有关规定纳入市、区两级财政资金预算。第四十一条（考核评估） 市经济信息化部门可以委托第三方专业机构，对本市公共数据开放工作和数据利用成效等进行评估。评估结果纳入本市公共数据和一网通办管理考核。 市大数据中心应当对开放数据质量和开放平台运行情况进行监测统计，并将监测统计结果和开放平台运行报告提交市经济信息化部门，作为考核评估的依据。第七章　法律责任第四十二条（数据开放主体责任） 数据开放主体有下列行为之一，由本级人民政府或者上级主管部门责令改正；情节严重的，依法对直接负责的主管人员和其他直接责任人员给予处分：（一）未按照规定开放和更新本单位公共数据；（二）未按照规定对开放数据进行脱敏、脱密等处理；（三）不符合统一标准、新建独立开放渠道或者未按照规定将已有开放渠道纳入开放平台；（四）未按照规定处理自然人、法人和非法人组织的异议或者告知；（五）未按照规定履行数据开放职责的其他行为。第四十三条（数据利用主体责任） 数据利用主体在数据利用过程中有下列行为之一，依法追究相应法律责任：（一）未履行数据利用协议规定的义务；（二）侵犯商业秘密、个人隐私等他人合法权益；（三）利用公共数据获取非法收益；（四）未按照规定采取安全保障措施，造成危害信息安全事件；（五）违反本办法规定，依法应当追究法律责任的其他行为。第四十四条（平台管理主体责任） 市大数据中心有下列行为之一，由主管部门责令改正；情节严重的，由主管部门对直接负责的主管人员和其他直接责任人员依法给予处分：（一）未按照规定记录开放平台中公共数据开放和利用的全程行为；（二）未按照规定处理自然人、法人和非法人组织的异议或者告知；（三）未按照规定履行平台管理职责的其他行为。第四十五条（安全管理主体责任） 市网信和公安部门、市大数据中心、数据开放主体等具有网络安全管理职能的部门及其工作人员未按照规定履行安全管理职责的，由本级人民政府或者上级主管部门责令改正；情节严重的，依法对直接主管人员和其他直接责任人员给予处分。第四十六条（责任豁免） 数据开放主体按照法律、法规和规章的规定开放公共数据，并履行了监督管理职责和合理注意义务的，对因开放数据质量等问题导致数据利用主体或者其他第三方的损失，依法不承担或者免予承担相应责任。第八章　附则第四十七条（遵照执行） 水务、电力、燃气、通信、公共交通、民航、铁路等公用事业运营单位涉及公共属性的数据开放，适用本办法。法律法规另有规定的，从其规定。第四十八条（实施日期） 本办法自2019年10月1日起施行。",t.lang="zh-CN",t.onend=function(t){var e=new SpeechSynthesisUtterance("上海市公共数据开放暂行办法第一章　总则第一条（目的和依据） 为了促进和规范本市公共数据开放和利用，提升政府治理能力和公共服务水平，推动数字经济发展，根据相关法律法规，结合本市实际，制定本办法。第二条（适用范围） 本市行政区域内公共数据开放及其相关管理活动，适用本办法。 涉及国家秘密的公共数据管理，按照相关保密法律、法规的规定执行。第三条（定义） 本办法所称公共数据，是指本市各级行政机关以及履行公共管理和服务职能的事业单位（以下统称公共管理和服务机构）在依法履职过程中，采集和产生的各类数据资源。 本办法所称公共数据开放，是指公共管理和服务机构在公共数据范围内，面向社会提供具备原始性、可机器读取、可供社会化再利用的数据集的公共服务。第四条（工作原则） 本市公共数据开放工作，遵循“需求导向、安全可控、分级分类、统一标准、便捷高效”的原则。第五条（职责分工） 市政府办公厅负责推动、监督本市公共数据开放工作。 市经济信息化部门负责指导协调、统筹推进本市公共数据开放、利用和相关产业发展。 市大数据中心负责本市公共数据统一开放平台（以下简称开放平台）的建设、运行和维护，并制订相关技术标准。 区人民政府确定的部门负责指导、推进和协调本行政区域内公共数据开放工作。 其他公共管理和服务机构根据相关法律、法规和规章，做好公共数据开放的相关工作。第六条（数据安全保护） 市、区人民政府及各相关部门在公共数据开放过程中，应当落实数据安全管理要求，采取措施保护商业秘密和个人隐私，防止公共数据被非法获取或者不当利用。第七条（协调机制） 市人民政府建立健全公共数据开放工作的协调机制，协调解决公共数据开放的重大事项。第八条（专家委员会） 市经济信息化部门应当建立由高校、科研机构、企业、相关部门的专家组成的公共数据开放专家委员会。 公共数据开放专家委员会负责研究论证公共数据开放中的疑难问题，评估公共数据利用风险，对公共数据开放工作提出专业建议。第二章　开放机制第九条（数据开放主体） 市人民政府各部门、区人民政府以及其他公共管理和服务机构（以下统称数据开放主体）分别负责本系统、本行政区域和本单位的公共数据开放。 对于纳入开放范围的公共数据,应当在本市公共数据资源目录中列明数据开放主体。第十条（开放重点） 市经济信息化部门应当根据本市经济社会发展需要，确定年度公共数据开放重点。与民生紧密相关、社会迫切需要、行业增值潜力显著和产业战略意义重大的公共数据，应当优先纳入公共数据开放重点。 市经济信息化部门在确定公共数据开放重点时，应当听取相关行业主管部门和社会公众的意见。 自然人、法人和非法人组织可以通过开放平台对公共数据的开放范围提出需求和意见建议。第十一条（分级分类） 市经济信息化部门应当会同市大数据中心结合公共数据安全要求、个人信息保护要求和应用要求等因素，制定本市公共数据分级分类规则。数据开放主体应当按照分级分类规则，结合行业、区域特点，制定相应的实施细则，并对公共数据进行分级分类，确定开放类型、开放条件和监管措施。 对涉及商业秘密、个人隐私，或者法律法规规定不得开放的公共数据，列入非开放类；对数据安全和处理能力要求较高、时效性较强或者需要持续获取的公共数据，列入有条件开放类；其他公共数据列入无条件开放类。 非开放类公共数据依法进行脱密、脱敏处理，或者相关权利人同意开放的，可以列入无条件开放类或者有条件开放类。第十二条（开放清单） 数据开放主体应当按照年度开放重点和公共数据分级分类规则，在本市公共数据资源目录范围内，制定公共数据开放清单（以下简称开放清单），列明可以向社会开放的公共数据。通过共享等手段获取的公共数据，不纳入本单位的开放清单。 开放清单应当标注数据领域、数据摘要、数据项和数据格式等信息，明确数据的开放类型、开放条件和更新频率等。 市经济信息化部门应当会同数据开放主体建立开放清单审查机制。经审查后，开放清单应当通过开放平台予以公布。第十三条（动态调整） 数据开放主体应当在市经济信息化部门的指导下建立开放清单动态调整机制，对尚未开放的公共数据进行定期评估，及时更新开放清单，不断扩大公共数据的开放范围。第十四条（无条件开放类数据获取方式） 对列入无条件开放类的公共数据，自然人、法人和非法人组织可以通过开放平台以数据下载或者接口调用的方式直接获取。第十五条（有条件开放类数据获取方式） 对列入有条件开放类的公共数据，数据开放主体应当通过开放平台公布利用数据的技术能力和安全保障措施等条件，向符合条件的自然人、法人和非法人组织开放。 数据开放主体应当与符合条件的自然人、法人和非法人组织签订数据利用协议，明确数据利用的条件和具体要求，并按照协议约定通过数据下载、接口访问、数据沙箱等方式开放公共数据。 数据利用协议示范文本由市经济信息化部门会同市大数据中心和数据开放主体制定。第十六条（数据质量） 数据开放主体应当按照相关技术标准和要求，对列入开放清单的公共数据（以下简称开放数据）进行整理、清洗、脱敏、格式转换等处理，并根据开放清单明确的更新频率，及时更新数据。第三章　平台建设第十七条（开放平台） 市大数据中心应当依托市大数据资源平台建设开放平台。 数据开放主体应当通过开放平台开放公共数据，原则上不再新建独立的开放渠道。已经建成的开放渠道，应当按照有关规定进行整合、归并，将其纳入开放平台。第十八条（平台功能） 开放平台为数据开放主体提供数据预处理、安全加密、日志记录等数据管理功能。 开放平台为获取、使用和传播公共数据的自然人、法人和非法人组织（以下统称数据利用主体）提供数据查询、预览和获取等功能。 市大数据中心应当根据数据开放主体和数据利用主体的需求，推进开放平台技术升级、功能迭代和资源扩展，确保开放平台具备必要的服务能力。第十九条（平台规范） 市大数据中心应当制定并公布开放平台管理制度，明确数据开放主体和数据利用主体在开放平台上的行为规范和安全责任，对开放平台上开放数据的存储、传输、利用等环节建立透明化、可审计、可追溯的全过程管理机制。第二十条（行为记录） 市大数据中心应当依托开放平台，形成数据开放和利用行为的全程记录，为数据开放和利用的日常监管提供支撑。 数据开放主体应当对数据处理和数据开放情况进行记录；数据利用主体应当对有条件开放类公共数据的访问、调用和利用等情况进行记录。记录应当通过开放平台提交市大数据中心。第二十一条（数据纠错） 自然人、法人和非法人组织认为开放数据存在错误、遗漏等情形，可以通过开放平台向数据开放主体提出异议。数据开放主体经基本确认后，应当立即进行异议标注，并由数据开放主体和市大数据中心在各自职责范围内，及时处理并反馈。第二十二条（权益保护） 自然人、法人和非法人组织认为开放数据侵犯其商业秘密、个人隐私等合法权益的，可以通过开放平台告知数据开放主体，并提交相关证据材料。 数据开放主体收到相关证据材料后，认为必要的，应当立即中止开放，同时进行核实。根据核实结果，分别采取撤回数据、恢复开放或者处理后再开放等措施，并及时反馈。第四章　数据利用第二十三条（鼓励数据利用） 本市鼓励数据利用主体利用公共数据开展科技研究、咨询服务、产品开发、数据加工等活动。 数据利用主体应当遵循合法、正当的原则利用公共数据，不得损害国家利益、社会公共利益和第三方合法权益。第二十四条（成果展示与合作应用） 市经济信息化部门应当会同市大数据中心和数据开放主体通过开放平台，对社会价值或者市场价值显著的公共数据利用案例进行示范展示。 本市鼓励数据利用主体与市经济信息化部门、市大数据中心以及数据开放主体开展合作，将利用公共数据形成的各类成果用于行政监管和公共服务，提升公共管理的科学性和有效性。第二十五条（数据利用反馈与来源披露） 对有条件开放类公共数据，数据利用主体应当按照数据利用协议的约定，向数据开放主体反馈数据利用情况。 数据利用主体利用公共数据形成数据产品、研究报告、学术论文等成果的，应当在成果中注明数据来源。第二十六条（数据利用安全保障） 数据利用主体应当按照开放平台管理制度的要求和数据利用协议的约定，在利用公共数据的过程中，采取必要的安全保障措施，并接受有关部门的监督检查。第二十七条（利用监管） 数据开放主体应当建立有效的监管制度，对有条件开放类公共数据的利用情况进行跟踪，判断数据利用行为是否合法正当。 任何单位和个人可以对违法违规利用公共数据的行为向数据开放主体及有关部门举报。第二十八条（违法违规行为处理） 数据利用主体在利用公共数据的过程中有下列行为之一，市经济信息化部门应当会同市大数据中心和数据开放主体对其予以记录：（一）违反开放平台管理制度；（二）采用非法手段获取公共数据；（三）侵犯商业秘密、个人隐私等他人合法权益；（四）超出数据利用协议限制的应用场景使用公共数据；（五）违反法律、法规、规章和数据利用协议的其他行为。对存在前款行为的数据利用主体，市大数据中心和数据开放主体应当按照各自职责，采取限制或者关闭其数据获取权限等措施，并可以在开放平台对违法违规行为和处理措施予以公示。第五章　多元开放第二十九条（优化开放环境） 市经济信息化部门结合本市大数据应用和产业发展现状，通过产业政策引导、社会资本引入、应用模式创新以及优秀服务推荐、联合创新实验室等方式，推动“产学研用”协同发展，营造良好的数据开放氛围。第三十条（多元主体参与） 市经济信息化部门应当会同市大数据中心、相关行业主管部门建立多元化的数据合作交流机制，引导企业、行业协会等单位依法开放自有数据，促进公共数据和非公共数据的多维度开放和融合应用。 本市鼓励具备相应能力的企业、行业协会等专业服务机构通过开放平台提供各类数据服务。第三十一条（非公共数据交易） 市经济信息化部门应当会同相关行业主管部门制定非公共数据交易流通标准，依托数据交易机构开展非公共数据交易流通的试点示范，推动建立合法合规、安全有序的数据交易体系。第三十二条（标准体系和技术规范） 本市鼓励企业、科研机构和社会团体参与制订数据开放利用、数据安全保护等相关国家标准、行业标准、地方标准以及相关技术规范，推动形成相关行业公约，建立行业自律体系。第三十三条（国际合作交流） 本市鼓励企业、科研机构和社会团体依法与境外企业、科研机构等开展公共数据开放领域的国际合作交流，提升本市公共数据开放的创新应用能力和认知水平。第三十四条（表彰机制） 市经济信息化部门应当会同市大数据中心和相关行业主管部门对在数据技术研发、数据服务提供、数据利用实践、数据合作交流等方面有突出表现的单位和个人，按照规定给予表彰。第六章　监督保障第三十五条（安全管理职责） 市网信、公安等部门应当会同其他具有网络安全管理职能的部门建立本市公共数据开放的安全管理体系，协调处理公共数据开放重大安全事件，指导数据开放主体制定本机构的安全管理制度。 市大数据中心应当根据法律法规和相关要求，加强开放平台的安全管理，健全安全防护体系，完善安全防护措施，保障开放平台安全可靠运行。 数据开放主体应当制定并落实与公共数据分级分类开放相适应的安全管理制度，并按照相关法律法规，在数据开放前评估安全风险。第三十六条（安全保障措施监管） 数据利用主体未按照开放平台管理制度和数据利用协议落实数据安全保障措施的，市大数据中心应当提出整改要求,并暂时关闭其数据获取权限；对未按照要求进行整改的，市大数据中心应当终止对其提供数据服务。第三十七条（预警机制） 市网信、公安和保密部门应当会同数据开放主体建立公共数据开放安全预警机制，对涉密数据和敏感数据泄漏等异常情况进行监测和预警。第三十八条（应急管理） 市网信、公安部门应当建立公共数据开放应急管理制度，指导数据开放主体制定安全处置应急预案、定期组织应急演练，确保公共数据开放工作安全有序。第三十九条（组织保障） 数据开放主体应当加强公共数据开放工作的组织保障，明确牵头负责数据开放工作的机构，建立数据开放专人专岗管理制度。 市经济信息化部门应当会同市大数据中心制定公共数据开放工作培训计划，定期对数据开放工作相关机构工作人员开展培训，并纳入本市公务员培训工作体系。第四十条（资金保障） 行政事业单位开展公共数据开放所涉及的信息系统建设、改造、运维以及考核评估等相关经费，按照有关规定纳入市、区两级财政资金预算。第四十一条（考核评估） 市经济信息化部门可以委托第三方专业机构，对本市公共数据开放工作和数据利用成效等进行评估。评估结果纳入本市公共数据和一网通办管理考核。 市大数据中心应当对开放数据质量和开放平台运行情况进行监测统计，并将监测统计结果和开放平台运行报告提交市经济信息化部门，作为考核评估的依据。第七章　法律责任第四十二条（数据开放主体责任） 数据开放主体有下列行为之一，由本级人民政府或者上级主管部门责令改正；情节严重的，依法对直接负责的主管人员和其他直接责任人员给予处分：（一）未按照规定开放和更新本单位公共数据；（二）未按照规定对开放数据进行脱敏、脱密等处理；（三）不符合统一标准、新建独立开放渠道或者未按照规定将已有开放渠道纳入开放平台；（四）未按照规定处理自然人、法人和非法人组织的异议或者告知；（五）未按照规定履行数据开放职责的其他行为。第四十三条（数据利用主体责任） 数据利用主体在数据利用过程中有下列行为之一，依法追究相应法律责任：（一）未履行数据利用协议规定的义务；（二）侵犯商业秘密、个人隐私等他人合法权益；（三）利用公共数据获取非法收益；（四）未按照规定采取安全保障措施，造成危害信息安全事件；（五）违反本办法规定，依法应当追究法律责任的其他行为。第四十四条（平台管理主体责任） 市大数据中心有下列行为之一，由主管部门责令改正；情节严重的，由主管部门对直接负责的主管人员和其他直接责任人员依法给予处分：（一）未按照规定记录开放平台中公共数据开放和利用的全程行为；（二）未按照规定处理自然人、法人和非法人组织的异议或者告知；（三）未按照规定履行平台管理职责的其他行为。第四十五条（安全管理主体责任） 市网信和公安部门、市大数据中心、数据开放主体等具有网络安全管理职能的部门及其工作人员未按照规定履行安全管理职责的，由本级人民政府或者上级主管部门责令改正；情节严重的，依法对直接主管人员和其他直接责任人员给予处分。第四十六条（责任豁免） 数据开放主体按照法律、法规和规章的规定开放公共数据，并履行了监督管理职责和合理注意义务的，对因开放数据质量等问题导致数据利用主体或者其他第三方的损失，依法不承担或者免予承担相应责任。第八章　附则第四十七条（遵照执行） 水务、电力、燃气、通信、公共交通、民航、铁路等公用事业运营单位涉及公共属性的数据开放，适用本办法。法律法规另有规定的，从其规定。第四十八条（实施日期） 本办法自2019年10月1日起施行。");e.voice=speechSynthesis.getVoices().filter((function(t){return"Whisper"==t.name}))[0],e.pitch=1,e.rate=1,speechSynthesis.speak(e),console.log("Finished in "+t.elapsedTime+" seconds.")},speechSynthesis.speak(t)}}},C=w,O=(a("21bb"),Object(i["a"])(C,h,g,!1,null,null,null)),$=O.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.model?a("div",{staticClass:"page-article"},[a("div",{staticClass:"d-flex py-3 px-2 border-bottom"},[a("div",{staticClass:"iconfont icon-fanhui text-blue"}),a("div",{staticClass:"flex-1 text-blue pl-2"},[t._v(" "+t._s(t.model.title)+" ")]),a("div",{staticClass:"text-grey fs-xs"})]),a("div",{staticClass:"px-3 body fs-lg",domProps:{innerHTML:t._s(t.model.body)}}),t._m(0),a("div",{staticClass:"px-3"},t._l(t.model.related,(function(e){return a("router-link",{key:e._id,staticClass:"pt-2",attrs:{tag:"div",to:"/articles/"+e._id}},[t._v(t._s(e.title))])})),1)]):t._e()},z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"px-3 border-top py-2"},[a("div",{staticClass:"d-flex ai-center"},[a("i",{staticClass:"iconfont icon-fanhui"}),a("strong",{staticClass:"text-bule fs-lg ml-2"},[t._v("相关资讯")])])])}],S={data:function(){return{model:null}},props:{id:{required:!0}},watch:{id:"fetch"},created:function(){this.fetch()},methods:{fetch:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("articles/".concat(t.id));case 2:a=e.sent,t.model=a.data;case 4:case"end":return e.stop()}}),e)})))()}}},E=S,R=(a("1399"),Object(i["a"])(E,q,z,!1,null,null,null)),P=R.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.model?s("div",{staticClass:"page-hero"},[s("div",{staticClass:"topbar bg-black py-1 text-white px-3 d-flex ai-center"},[s("img",{attrs:{src:a("9d64"),alt:"",height:"30"}}),t._m(0),s("router-link",{attrs:{to:"/",tag:"div"}},[t._v("更多英雄 >")])],1),s("h1",[t._v(t._s(t.model.name))])]):t._e()},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pl-3 flex-1"},[a("span",{staticClass:"text-white"},[t._v("王者荣耀")]),a("span",{staticClass:"ml-2"},[t._v("攻略站")])])}],N={data:function(){return{model:null}},props:{id:{required:!0}},created:function(){this.fecth()},methods:{fecth:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("heroes/".concat(t.id));case 2:a=e.sent,t.model=a.data;case 4:case"end":return e.stop()}}),e)})))()}}},T=N,M=Object(i["a"])(T,A,L,!1,null,null,null),U=M.exports,V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.model?s("div",{staticClass:"page-hero"},[s("div",{staticClass:"topbar bg-black py-1 text-white px-3 d-flex ai-center"},[s("img",{attrs:{src:a("9d64"),alt:"",height:"30"}}),t._m(0),s("router-link",{attrs:{to:"/",tag:"div"}},[t._v("更多英雄 >")])],1),s("h1",[t._v(t._s(t.model.name))]),s("video",{staticClass:"video-style",staticStyle:{width:"100%"},attrs:{src:t.model.url,controls:"controls","webkit-playsinline":"true",playsinline:"true","x5-video-player-type":"h5","x5-video-player-fullscreen":"true"}})]):t._e()},H=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pl-3 flex-1"},[a("span",{staticClass:"text-white"},[t._v("王者荣耀")]),a("span",{staticClass:"ml-2"},[t._v("攻略站")])])}],D={data:function(){return{model:null}},props:{id:{required:!0}},created:function(){this.fecth()},methods:{fecth:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.id),e.next=3,t.$http.get("videos/".concat(t.id));case 3:a=e.sent,t.model=a.data;case 5:case"end":return e.stop()}}),e)})))()}}},I=D,Q=Object(i["a"])(I,V,H,!1,null,null,null),B=Q.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-alysisvideo"},[a("el-card",{staticClass:"box-card"},[a("div",{},[a("span",[a("img",{attrs:{src:"",alt:""}})])]),a("h1",[t._v("短视频/图集在线去水印解析")]),a("div",{staticClass:"text"},[a("strong",[t._v("目前支持")]),t._v(" 抖音/皮皮虾/火山/微视/微博/绿洲/最右/轻视频/instagram/哔哩哔哩/快手/全民小视频/皮皮搞笑/全民k歌/巴塞电影/陌陌/Before避风/开眼/Vue Vlog/小咖秀/西瓜视频/逗拍/虎牙/6间房/新片场/Acfun/美拍")]),a("div",{staticClass:"text"},[a("strong",[t._v("温馨提示")]),t._v(" 粘贴视频地址时无需删除文案 但如果视频链接正确但解析失败请删掉文案后重试")]),a("el-divider"),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"main-box"},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入内容"},model:{value:t.model.url,callback:function(e){t.$set(t.model,"url",e)},expression:"model.url"}},[a("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:t.model.select,callback:function(e){t.$set(t.model,"select",e)},expression:"model.select"}},[a("el-option",{attrs:{label:"视频",value:"1"}}),a("el-option",{attrs:{label:"图集",value:"2"}})],1),a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.analysis},slot:"append"})],1)],1),200!==t.backdata.code||t.backdata.images?t._e():a("div",{staticClass:"back-box"},[a("div",{staticClass:"back-box-title"},[a("strong",[t._v(t._s(t.backdata.title))])]),a("div",{staticClass:"back-box-main"},[a("el-button",[a("a",{attrs:{href:t.backdata.cover,target:"_blank"}},[t._v("下载封面")])]),a("el-button",[a("a",{attrs:{href:t.backdata.url,target:"_blank"}},[t._v("下载视频")])]),a("el-button",[a("a",{attrs:{href:t.backdata.music,target:"_blank"}},[t._v("下载音频")])])],1)]),200===t.backdata.code&&t.backdata.images?a("div",{staticClass:"back-box"},t._l(t.backdata.images,(function(e){return a("el-image",{key:e,staticStyle:{width:"100px",height:"100px"},attrs:{src:e,"preview-src-list":t.backdata.images}})})),1):t._e()],1)],1)},J=[],Z=(a("ac1f"),a("466d"),{data:function(){return{model:{url:"",select:"1"},url:"",select:"1",backdata:{code:"",title:"",cover:"",url:"",music:""},loading:!1}},created:function(){},methods:{analysis:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var a,s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,a=/(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g,s=t.model.url.match(a),t.model.url=s[0],console.log(t.model),e.next=7,t.$http.post("analysisurlapi",t.model);case 7:n=e.sent,200===n.data.code?(t.backdata=n.data,t.loading=!1):t.$message({message:"".concat(n.data.msg),type:"warning"});case 9:case"end":return e.stop()}}),e)})))()}}}),W=Z,G=(a("9c48"),Object(i["a"])(W,F,J,!1,null,null,null)),K=G.exports;s["default"].use(d["a"]);var X=[{path:"/",component:b,children:[{path:"/",name:"home",component:$},{path:"/articles/:id",name:"article",component:P,props:!0}]},{path:"/heroes/:id",name:"hero",component:U,props:!0},{path:"/analysisvideo",name:"analysisvideo",component:K,props:!0,meta:{title:"洪专属页面"}},{path:"/videos/:id",name:"video",component:B,props:!0},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/test",name:"Test",component:function(){return a.e("about").then(a.bind(null,"78c1"))}}],Y=new d["a"]({routes:X}),tt=Y,et=a("7212"),at=a.n(et),st=(a("dfa4"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card bg-white mt-2 p-3 "},[a("div",{staticClass:"card-header d-flex pb-3"},[a("i",{staticClass:"iconfont icon-caidan1",class:"icon-"+t.icon}),a("div",{staticClass:"fs-xl flex-1 px-2 "},[t._v(t._s(t.title))]),a("i",{staticClass:"iconfont icon-more"})]),a("div",{staticClass:"card-body pt-3"},[t._t("default")],2)])}),nt=[],rt={props:{title:{type:String,required:!0},icon:{type:String,required:!0}},data:function(){return{}}},it=rt,ct=(a("e60d"),Object(i["a"])(it,st,nt,!1,null,null,null)),ot=ct.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("m-crad",{attrs:{icon:t.icon,title:t.title}},[a("div",{staticClass:"nav jc-between"},t._l(t.categories,(function(e,s){return a("div",{key:s,staticClass:"nav-item",class:{active:t.active===s},on:{click:function(e){return t.$refs.list.swiper.slideTo(s)}}},[a("div",{staticClass:"nav-link"},[t._v(t._s(e.name))])])})),0),a("div",{staticClass:"pt-3"},[a("swiper",{ref:"list",attrs:{options:{autoHeight:!0}},on:{"slide-change":function(){return t.active=t.$refs.list.swiper.realIndex}}},t._l(t.categories,(function(e,s){return a("swiper-slide",{key:s},[t._t("items",null,{category:e})],2)})),1)],1)])},dt=[],ut={props:{title:{type:String,required:!0},icon:{type:String,required:!0},categories:{type:Array,required:!0}},data:function(){return{active:0}}},ft=ut,pt=Object(i["a"])(ft,lt,dt,!1,null,null,null),mt=pt.exports,vt=a("5c96"),bt=a.n(vt),ht=(a("0fae"),a("bc3a")),gt=a.n(ht),jt=a("f23d"),yt=(a("202f"),a("c695"),a("a388")),_t=a.n(yt);a("778e");s["default"].config.productionTip=!1,s["default"].use(at.a),s["default"].component("m-crad",ot),s["default"].component("m-list-card",mt),s["default"].use(bt.a),s["default"].prototype.$http=gt.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL||"/web/api"}),s["default"].use(jt["a"]),s["default"].use(_t.a),console.log(_t.a),tt.beforeEach((function(t,e,a){t.meta.title&&(document.title=t.meta.title),a()})),new s["default"]({router:tt,render:function(t){return t(l)}}).$mount("#app")},"5afc":function(t,e,a){t.exports=a.p+"img/ae37bd718aa19d57ae7c80e0843aef86.ae37bd71.jpeg"},"6aeb":function(t,e,a){t.exports=a.p+"img/88f7acf6451d67170ba172091af7fa42.88f7acf6.jpeg"},"78a7":function(t,e,a){},"9c48":function(t,e,a){"use strict";a("306d")},"9d64":function(t,e,a){t.exports=a.p+"img/logo.b3b3bca8.png"},a006:function(t,e,a){"use strict";a("0972")},b8d4:function(t,e,a){t.exports=a.p+"img/3da84d86175a05e5b9fd62beeff35e13.3da84d86.jpeg"},be35:function(t,e,a){},e60d:function(t,e,a){"use strict";a("e9ec")},e9ec:function(t,e,a){},ef4a:function(t,e,a){}});
//# sourceMappingURL=app.22cbc9a3.js.map