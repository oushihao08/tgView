System.register(["./base-legacy-94cc1f63.js","./progress-legacy-4fee3d34.js","./button-legacy-73c91ac1.js","../js/index-legacy-v1.1.28-55e764dd.js","./index-legacy-3ada6c0d.js","./index-legacy-f4f15655.js","./vue-legacy-ad0cdcd9.js","./vendor-legacy-d0deb908.js","./__commonjsHelpers__-legacy-f21eb433.js","./vue-router-legacy-e150e856.js","./vant-legacy-6ea358c0.js","./vue-i18n-legacy-60f56202.js","./index-legacy-7f75df50.js","./lodash-es-legacy-9b7a5f41.js","./index-legacy-06c116be.js","./index-legacy-51f63e39.js","./index-legacy-a84d9ef3.js","./index-legacy-1cf689c4.js"],(function(A,e){"use strict";var a,d,s,l,t,o,c,n,i,r,f,b,u,m,g,w,B,h=document.createElement("style");return h.textContent=".demo-progress{width:2.29333rem}.no-andriod{background:#9A9FB5;width:3.04rem;height:.74667rem;border-radius:.37333rem}.dl-tips{background:#F7F9FC;border-radius:.10667rem}\n",document.head.appendChild(h),{setters:[()=>{},()=>{},()=>{},A=>{a=A._,d=A.a,s=A.c},A=>{l=A.E},A=>{t=A.E},A=>{o=A.r,c=A.c,n=A.b,i=A.M,r=A.R,f=A.S,b=A.j,u=A.y,m=A.U,g=A.N,w=A.$,B=A.Z},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){const h=""+new URL("../webp/downLoad_logo-v1.1.28-552a90cd.webp",e.meta.url).href,v=B("img",{class:"w-236 h-236",src:h},null,-1),L={key:1,class:"demo-progress"},Q=B("img",{class:"w-38 h-38",src:"data:image/webp;base64,UklGRrAFAABXRUJQVlA4WAoAAAAwAAAASwAASwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDhMwgMAAC9LwBIQD+Q2kiRJqe797ng0sJfAHnxCR0L792bccOC2bSSxzszs9f+n3rvJOogkSZHqZnefmeW8fztMO2UgbVvc7A9Q/nGFC7rB2dXRzd3LwdfD38l+Tz+Lv2Hr672me+mahem7vXrfeyq3VE18n6lIXOj3TH21sX7315h8SvHuG6dx/0/iIH/EQf5oStZMsuSlSVahX1G2kWhbfEVTnH4K8haLVi2KdilGEd2vbLUgOo8qqZXl1FIV0f1RSk4k0iqQBx7DkjMKkJDjCGlESEKQBoSY4VSKBkUaKSFGhDQgFCMBIU0gFCOHEkRMqBZ1i2oWdYuqRd2yapFRtYhE3SxEO5eqRUbVol0uIeoWQYJt24Yk3bJt27Zt27Zv2Yyhd1dUZLwXfwAR/Xfgtm0kCTXQmdkjeyST+AkAAAAAAAAAAAAAAKSU1rUPTi4dHS1NDrbXlSQDAAAAAAAAAAAA0msBWd0bJEmSJEmSG12ZAR6cCSke3CdJ0veJ/YGiEOVd8xFJkm5PHDYqbgLrtklSttmuCdTZ+VWsk6R8s1bup6DceZLU2czliM/2kqTepld2MmiM1F1jQQKFT5PaazrctWJXSP21EutSGS7/gQr/yiR3ebFEerMWQ90wTv5d6i/mQm2kd6vNp6pIL1eJD6VfyGK8eX59lMV1kuicZmtCfVuW9S6LbNUx8aqFX92TZVmWJQyt2um9toQBvmiw6VD6mqiCNLb6v+l/oIvrO0aEnR7qIA6u06boSzM4jbG/ih7SF7EVAFMY/33lc1M4DwVKqYVCePnAkDn0AAfe4aLHQSrV0Igvtc4k6tr0UKnrPYpoPHDEJEamTGJq3STWz0zibF8XcR1e1EOlC5k0ickhkxjqVEV+q6k3qg5UmkRpvEZsD2rEQyPhrn8sy3rTSLffO7zGeni5o869IZskSZIkve0ks4HAMx2pZG6AXrOtUjVtvYcWSr1H1JUZuoq0NVgK6Xv/8f1+K+/V7H1fhLh23v6myJc0toNwk3rbpr99cuim92w5mQh1KkhLk6PjsCp85K9+hAZCoOLs9GlZ1oMorovU/4OY48QjffLdtda0ozEQyP/SvudWfw/LwYRJs/myO08p7sAb7cT5NiDsg8+CF5qNdm+Rjehr1MmwceMcaNe3RqEpVXbsS8LxPkfslcUM62k4xqWJ58uLmFZyo9K1zMViW4kRGg7/rBBFp7LhULbbrQvUdVCDC/q2XRta/YXBPqxdJfMzrcWFZznfmubnnecclpBX2zE8s7c3M9xRm5cQJowS"},null,-1),C={class:"w-100b font-28 bold f-wrap",y:"c"},j={class:"c-info"},k=B("img",{class:"w-40 m-lr-4",src:"data:image/webp;base64,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"},null,-1),y={class:"c-primary"},p={class:"c-primary w-100b font-28 bold",y:"c"},V={class:"c-info font-30"},Z={class:"c-dark font-30 bold"},E={class:"c-info font-30"},M={class:"c-dark font-30 bold"},J={class:"c-info font-30"},x={class:"c-dark font-30 bold"},D={class:"c-info font-30"},S={class:"c-dark font-30 bold"};A("default",{__name:"DownLoad",setup(A){let e=o(0),h=o(1);// 1 未开始 2下载中 3下载完成
const X=()=>{const A=`itms-services://?action=download-manifest&url=${s}`;window.open(A,"_blank"),h.value=2,e.value=0,R()},F=c((()=>{const A=navigator.userAgent,e=A.indexOf("Android")>-1||A.indexOf("Linux")>-1,a=!!A.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);return e?"android":a?"ios":""})),R=()=>{const A=setInterval((()=>{const a=10*Math.random()+3;e.value=e.value+Math.ceil(a),e.value>100&&(e.value=100,h.value=3,clearInterval(A))}),4e3)};return n((()=>{})),(A,s)=>{const o=a,c=d,n=l,R=t;return i(),r(o,{class:"p-lr-40 p-tb-28"},{default:f((()=>[b(c,{class:"w-100b p-b-40"},{default:f((()=>[b(o,{class:"w-236 h-236 m-r-40"},{default:f((()=>[v])),_:1}),b(o,null,{default:f((()=>[b(c,{class:"font-44 bold"},{default:f((()=>[u(m(A.$t("downLoad.comTitile")),1)])),_:1}),b(c,{class:"c-info font-28"},{default:f((()=>[u(m(A.$t("downLoad.subTitle1")),1)])),_:1}),"android"===F.value?(i(),r(c,{key:0,class:"c-white no-andriod m-t-22",x:"c",y:"c"},{default:f((()=>[u(m(A.$t("downLoad.subTitle2")),1)])),_:1})):(i(),r(o,{key:1,class:"m-t-22"},{default:f((()=>[1===h.value?(i(),r(n,{key:0,type:"primary",class:"w-172 h-56 radius-28 font-28",onClick:X},{default:f((()=>[u(m(A.$t("downLoad.downNow")),1)])),_:1})):2===h.value?(i(),g("div",L,[b(R,{"text-inside":!0,"stroke-width":28,percentage:e.value},null,8,["percentage"])])):w("",!0),3===h.value?(i(),r(n,{key:2,type:"primary",class:"w-172 h-56 radius-28 font-28"},{default:f((()=>[u(m(A.$t("downLoad.downFinished")),1)])),_:1})):w("",!0)])),_:1}))])),_:1})])),_:1}),b(o,{class:"w-100b p-lr-20 p-tb-28 dl-tips radius-8"},{default:f((()=>[b(o,{class:"w-100b"},{default:f((()=>[b(c,{class:"m-b-16"},{default:f((()=>[Q,b(c,{class:"font-30 bold c-dark m-l-20"},{default:f((()=>[u(m(A.$t("downLoad.tips1")),1)])),_:1})])),_:1}),B("span",C,[B("span",j,m(A.$t("downLoad.tips2")),1),k,B("span",y,m(A.$t("downLoad.tips3")),1),B("span",p,m(A.$t("downLoad.tips4")),1)])])),_:1})])),_:1}),b(o,{class:"m-t-40 w-100b"},{default:f((()=>[b(c,{class:"font-44 c-dark bold"},{default:f((()=>[u(m(A.$t("downLoad.info")),1)])),_:1}),b(c,{class:"border-b w-100b p-tb-28",x:"sb"},{default:f((()=>[B("div",V,m(A.$t("downLoad.info2")),1),B("div",Z,m(A.$t("downLoad.comTitile")),1)])),_:1}),b(c,{class:"border-b w-100b p-tb-28",x:"sb"},{default:f((()=>[B("div",E,m(A.$t("downLoad.iosSize")),1),B("div",M,m(A.$t("downLoad.iosSizeCon")),1)])),_:1}),b(c,{class:"border-b w-100b p-tb-28",x:"sb"},{default:f((()=>[B("div",J,m(A.$t("downLoad.ages")),1),B("div",x,m(A.$t("downLoad.agesLimit")),1)])),_:1}),b(c,{class:"border-b w-100b p-tb-28",x:"sb"},{default:f((()=>[B("div",D,m(A.$t("downLoad.price")),1),B("div",S,m(A.$t("downLoad.free")),1)])),_:1})])),_:1})])),_:1})}}})}}}));
//# sourceMappingURL=DownLoad-legacy-6088c043.js.map
