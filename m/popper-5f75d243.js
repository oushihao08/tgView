import{k as e,e as t,b as n,_ as o,w as r}from"./index-8763a24f.js";import{c as a,ad as i,w as s,b as l,g as p,L as u,u as f,p as c,k as d,r as m,O as v,i as g,l as h,M as y,N as b,P as w,a6 as x,s as O,ae as E,a3 as k,F as C,af as A,ag as T,j as R,R as S,S as j,q as B,$ as M,Q as I,aa as L,ah as P,v as _,T as D,t as N,ai as F,e as H,U as $}from"./vue-10f3042e.js";import{c as W,p as q,t as z,k as K,q as V,u as U,m as Y}from"./index-dea076ad.js";import{b as J,o as X}from"./index-5cef0a1f.js";import{i as Q}from"./lodash-es-87d81e2d.js";import{u as Z,f as G,a as ee,i as te}from"./index-ee5248b7.js";import{u as ne}from"./index-8561ad5c.js";import{E as oe}from"./focus-trap-898cd3a3.js";import{E as re}from"./aria-b0977c34.js";const ae=(e,t,{checkForDefaultPrevented:n=!0}={})=>o=>{const r=null==e?void 0:e(o);if(!1===n||!r)return null==t?void 0:t(o)},ie=e=>t=>"mouse"===t.pointerType?e(t):void 0,se=Symbol("popper"),le=Symbol("popperContent"),pe=Symbol("elTooltip"),ue=e({type:t(Boolean),default:null}),fe=e({type:t(Function)});var ce="top",de="bottom",me="right",ve="left",ge="auto",he=[ce,de,me,ve],ye="start",be="end",we="viewport",xe="popper",Oe=he.reduce((function(e,t){return e.concat([t+"-"+ye,t+"-"+be])}),[]),Ee=[].concat(he,[ge]).reduce((function(e,t){return e.concat([t,t+"-"+ye,t+"-"+be])}),[]),ke=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function Ce(e){return e?(e.nodeName||"").toLowerCase():null}function Ae(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Te(e){return e instanceof Ae(e).Element||e instanceof Element}function Re(e){return e instanceof Ae(e).HTMLElement||e instanceof HTMLElement}function Se(e){return"undefined"!=typeof ShadowRoot&&(e instanceof Ae(e).ShadowRoot||e instanceof ShadowRoot)}var je={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},r=t.elements[e];!Re(r)||!Ce(r)||(Object.assign(r.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],r=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});!Re(o)||!Ce(o)||(Object.assign(o.style,a),Object.keys(r).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]};function Be(e){return e.split("-")[0]}var Me=Math.max,Ie=Math.min,Le=Math.round;function Pe(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),o=1,r=1;if(Re(e)&&t){var a=e.offsetHeight,i=e.offsetWidth;i>0&&(o=Le(n.width)/i||1),a>0&&(r=Le(n.height)/a||1)}return{width:n.width/o,height:n.height/r,top:n.top/r,right:n.right/o,bottom:n.bottom/r,left:n.left/o,x:n.left/o,y:n.top/r}}function _e(e){var t=Pe(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function De(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Se(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function Ne(e){return Ae(e).getComputedStyle(e)}function Fe(e){return["table","td","th"].indexOf(Ce(e))>=0}function He(e){return((Te(e)?e.ownerDocument:e.document)||window.document).documentElement}function $e(e){return"html"===Ce(e)?e:e.assignedSlot||e.parentNode||(Se(e)?e.host:null)||He(e)}function We(e){return Re(e)&&"fixed"!==Ne(e).position?e.offsetParent:null}function qe(e){for(var t=Ae(e),n=We(e);n&&Fe(n)&&"static"===Ne(n).position;)n=We(n);return n&&("html"===Ce(n)||"body"===Ce(n)&&"static"===Ne(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&Re(e)&&"fixed"===Ne(e).position)return null;var n=$e(e);for(Se(n)&&(n=n.host);Re(n)&&["html","body"].indexOf(Ce(n))<0;){var o=Ne(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||t&&"filter"===o.willChange||t&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(e)||t}function ze(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Ke(e,t,n){return Me(e,Ie(t,n))}function Ve(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Ue(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var Ye={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,o=e.name,r=e.options,a=n.elements.arrow,i=n.modifiersData.popperOffsets,s=Be(n.placement),l=ze(s),p=[ve,me].indexOf(s)>=0?"height":"width";if(a&&i){var u=function(e,t){return Ve("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:Ue(e,he))}(r.padding,n),f=_e(a),c="y"===l?ce:ve,d="y"===l?de:me,m=n.rects.reference[p]+n.rects.reference[l]-i[l]-n.rects.popper[p],v=i[l]-n.rects.reference[l],g=qe(a),h=g?"y"===l?g.clientHeight||0:g.clientWidth||0:0,y=m/2-v/2,b=u[c],w=h-f[p]-u[d],x=h/2-f[p]/2+y,O=Ke(b,x,w),E=l;n.modifiersData[o]=((t={})[E]=O,t.centerOffset=O-x,t)}},effect:function(e){var t=e.state,n=e.options.element,o=void 0===n?"[data-popper-arrow]":n;null!=o&&("string"==typeof o&&!(o=t.elements.popper.querySelector(o))||!De(t.elements.popper,o)||(t.elements.arrow=o))},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Je(e){return e.split("-")[1]}var Xe={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Qe(e){var t,n=e.popper,o=e.popperRect,r=e.placement,a=e.variation,i=e.offsets,s=e.position,l=e.gpuAcceleration,p=e.adaptive,u=e.roundOffsets,f=e.isFixed,c=i.x,d=void 0===c?0:c,m=i.y,v=void 0===m?0:m,g="function"==typeof u?u({x:d,y:v}):{x:d,y:v};d=g.x,v=g.y;var h=i.hasOwnProperty("x"),y=i.hasOwnProperty("y"),b=ve,w=ce,x=window;if(p){var O=qe(n),E="clientHeight",k="clientWidth";if(O===Ae(n)&&("static"!==Ne(O=He(n)).position&&"absolute"===s&&(E="scrollHeight",k="scrollWidth")),r===ce||(r===ve||r===me)&&a===be)w=de,v-=(f&&O===x&&x.visualViewport?x.visualViewport.height:O[E])-o.height,v*=l?1:-1;if(r===ve||(r===ce||r===de)&&a===be)b=me,d-=(f&&O===x&&x.visualViewport?x.visualViewport.width:O[k])-o.width,d*=l?1:-1}var C,A=Object.assign({position:s},p&&Xe),T=!0===u?function(e){var t=e.x,n=e.y,o=window.devicePixelRatio||1;return{x:Le(t*o)/o||0,y:Le(n*o)/o||0}}({x:d,y:v}):{x:d,y:v};return d=T.x,v=T.y,l?Object.assign({},A,((C={})[w]=y?"0":"",C[b]=h?"0":"",C.transform=(x.devicePixelRatio||1)<=1?"translate("+d+"px, "+v+"px)":"translate3d("+d+"px, "+v+"px, 0)",C)):Object.assign({},A,((t={})[w]=y?v+"px":"",t[b]=h?d+"px":"",t.transform="",t))}var Ze={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=void 0===o||o,a=n.adaptive,i=void 0===a||a,s=n.roundOffsets,l=void 0===s||s,p={placement:Be(t.placement),variation:Je(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Qe(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:l})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Qe(Object.assign({},p,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},Ge={passive:!0};var et={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,a=void 0===r||r,i=o.resize,s=void 0===i||i,l=Ae(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&p.forEach((function(e){e.addEventListener("scroll",n.update,Ge)})),s&&l.addEventListener("resize",n.update,Ge),function(){a&&p.forEach((function(e){e.removeEventListener("scroll",n.update,Ge)})),s&&l.removeEventListener("resize",n.update,Ge)}},data:{}},tt={left:"right",right:"left",bottom:"top",top:"bottom"};function nt(e){return e.replace(/left|right|bottom|top/g,(function(e){return tt[e]}))}var ot={start:"end",end:"start"};function rt(e){return e.replace(/start|end/g,(function(e){return ot[e]}))}function at(e){var t=Ae(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function it(e){return Pe(He(e)).left+at(e).scrollLeft}function st(e){var t=Ne(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function lt(e){return["html","body","#document"].indexOf(Ce(e))>=0?e.ownerDocument.body:Re(e)&&st(e)?e:lt($e(e))}function pt(e,t){var n;void 0===t&&(t=[]);var o=lt(e),r=o===(null==(n=e.ownerDocument)?void 0:n.body),a=Ae(o),i=r?[a].concat(a.visualViewport||[],st(o)?o:[]):o,s=t.concat(i);return r?s:s.concat(pt($e(i)))}function ut(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ft(e,t){return t===we?ut(function(e){var t=Ae(e),n=He(e),o=t.visualViewport,r=n.clientWidth,a=n.clientHeight,i=0,s=0;return o&&(r=o.width,a=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(i=o.offsetLeft,s=o.offsetTop)),{width:r,height:a,x:i+it(e),y:s}}(e)):Te(t)?function(e){var t=Pe(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ut(function(e){var t,n=He(e),o=at(e),r=null==(t=e.ownerDocument)?void 0:t.body,a=Me(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),i=Me(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),s=-o.scrollLeft+it(e),l=-o.scrollTop;return"rtl"===Ne(r||n).direction&&(s+=Me(n.clientWidth,r?r.clientWidth:0)-a),{width:a,height:i,x:s,y:l}}(He(e)))}function ct(e,t,n){var o="clippingParents"===t?function(e){var t=pt($e(e)),n=["absolute","fixed"].indexOf(Ne(e).position)>=0&&Re(e)?qe(e):e;return Te(n)?t.filter((function(e){return Te(e)&&De(e,n)&&"body"!==Ce(e)})):[]}(e):[].concat(t),r=[].concat(o,[n]),a=r[0],i=r.reduce((function(t,n){var o=ft(e,n);return t.top=Me(o.top,t.top),t.right=Ie(o.right,t.right),t.bottom=Ie(o.bottom,t.bottom),t.left=Me(o.left,t.left),t}),ft(e,a));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function dt(e){var t,n=e.reference,o=e.element,r=e.placement,a=r?Be(r):null,i=r?Je(r):null,s=n.x+n.width/2-o.width/2,l=n.y+n.height/2-o.height/2;switch(a){case ce:t={x:s,y:n.y-o.height};break;case de:t={x:s,y:n.y+n.height};break;case me:t={x:n.x+n.width,y:l};break;case ve:t={x:n.x-o.width,y:l};break;default:t={x:n.x,y:n.y}}var p=a?ze(a):null;if(null!=p){var u="y"===p?"height":"width";switch(i){case ye:t[p]=t[p]-(n[u]/2-o[u]/2);break;case be:t[p]=t[p]+(n[u]/2-o[u]/2)}}return t}function mt(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=void 0===o?e.placement:o,a=n.boundary,i=void 0===a?"clippingParents":a,s=n.rootBoundary,l=void 0===s?we:s,p=n.elementContext,u=void 0===p?xe:p,f=n.altBoundary,c=void 0!==f&&f,d=n.padding,m=void 0===d?0:d,v=Ve("number"!=typeof m?m:Ue(m,he)),g=u===xe?"reference":xe,h=e.rects.popper,y=e.elements[c?g:u],b=ct(Te(y)?y:y.contextElement||He(e.elements.popper),i,l),w=Pe(e.elements.reference),x=dt({reference:w,element:h,strategy:"absolute",placement:r}),O=ut(Object.assign({},h,x)),E=u===xe?O:w,k={top:b.top-E.top+v.top,bottom:E.bottom-b.bottom+v.bottom,left:b.left-E.left+v.left,right:E.right-b.right+v.right},C=e.modifiersData.offset;if(u===xe&&C){var A=C[r];Object.keys(k).forEach((function(e){var t=[me,de].indexOf(e)>=0?1:-1,n=[ce,de].indexOf(e)>=0?"y":"x";k[e]+=A[n]*t}))}return k}var vt={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,a=void 0===r||r,i=n.altAxis,s=void 0===i||i,l=n.fallbackPlacements,p=n.padding,u=n.boundary,f=n.rootBoundary,c=n.altBoundary,d=n.flipVariations,m=void 0===d||d,v=n.allowedAutoPlacements,g=t.options.placement,h=Be(g),y=l||(h===g||!m?[nt(g)]:function(e){if(Be(e)===ge)return[];var t=nt(e);return[rt(e),t,rt(t)]}(g)),b=[g].concat(y).reduce((function(e,n){return e.concat(Be(n)===ge?function(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=n.boundary,a=n.rootBoundary,i=n.padding,s=n.flipVariations,l=n.allowedAutoPlacements,p=void 0===l?Ee:l,u=Je(o),f=u?s?Oe:Oe.filter((function(e){return Je(e)===u})):he,c=f.filter((function(e){return p.indexOf(e)>=0}));0===c.length&&(c=f);var d=c.reduce((function(t,n){return t[n]=mt(e,{placement:n,boundary:r,rootBoundary:a,padding:i})[Be(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:u,rootBoundary:f,padding:p,flipVariations:m,allowedAutoPlacements:v}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,E=!0,k=b[0],C=0;C<b.length;C++){var A=b[C],T=Be(A),R=Je(A)===ye,S=[ce,de].indexOf(T)>=0,j=S?"width":"height",B=mt(t,{placement:A,boundary:u,rootBoundary:f,altBoundary:c,padding:p}),M=S?R?me:ve:R?de:ce;w[j]>x[j]&&(M=nt(M));var I=nt(M),L=[];if(a&&L.push(B[T]<=0),s&&L.push(B[M]<=0,B[I]<=0),L.every((function(e){return e}))){k=A,E=!1;break}O.set(A,L)}if(E)for(var P=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return k=t,"break"},_=m?3:1;_>0;_--){if("break"===P(_))break}t.placement!==k&&(t.modifiersData[o]._skip=!0,t.placement=k,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function gt(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ht(e){return[ce,me,de,ve].some((function(t){return e[t]>=0}))}var yt={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,a=t.modifiersData.preventOverflow,i=mt(t,{elementContext:"reference"}),s=mt(t,{altBoundary:!0}),l=gt(i,o),p=gt(s,r,a),u=ht(l),f=ht(p);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:p,isReferenceHidden:u,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}};var bt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.offset,a=void 0===r?[0,0]:r,i=Ee.reduce((function(e,n){return e[n]=function(e,t,n){var o=Be(e),r=[ve,ce].indexOf(o)>=0?-1:1,a="function"==typeof n?n(Object.assign({},t,{placement:e})):n,i=a[0],s=a[1];return i=i||0,s=(s||0)*r,[ve,me].indexOf(o)>=0?{x:s,y:i}:{x:i,y:s}}(n,t.rects,a),e}),{}),s=i[t.placement],l=s.x,p=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=p),t.modifiersData[o]=i}};var wt={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=dt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var xt={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,a=void 0===r||r,i=n.altAxis,s=void 0!==i&&i,l=n.boundary,p=n.rootBoundary,u=n.altBoundary,f=n.padding,c=n.tether,d=void 0===c||c,m=n.tetherOffset,v=void 0===m?0:m,g=mt(t,{boundary:l,rootBoundary:p,padding:f,altBoundary:u}),h=Be(t.placement),y=Je(t.placement),b=!y,w=ze(h),x=function(e){return"x"===e?"y":"x"}(w),O=t.modifiersData.popperOffsets,E=t.rects.reference,k=t.rects.popper,C="function"==typeof v?v(Object.assign({},t.rects,{placement:t.placement})):v,A="number"==typeof C?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),T=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,R={x:0,y:0};if(O){if(a){var S,j="y"===w?ce:ve,B="y"===w?de:me,M="y"===w?"height":"width",I=O[w],L=I+g[j],P=I-g[B],_=d?-k[M]/2:0,D=y===ye?E[M]:k[M],N=y===ye?-k[M]:-E[M],F=t.elements.arrow,H=d&&F?_e(F):{width:0,height:0},$=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},W=$[j],q=$[B],z=Ke(0,E[M],H[M]),K=b?E[M]/2-_-z-W-A.mainAxis:D-z-W-A.mainAxis,V=b?-E[M]/2+_+z+q+A.mainAxis:N+z+q+A.mainAxis,U=t.elements.arrow&&qe(t.elements.arrow),Y=U?"y"===w?U.clientTop||0:U.clientLeft||0:0,J=null!=(S=null==T?void 0:T[w])?S:0,X=I+V-J,Q=Ke(d?Ie(L,I+K-J-Y):L,I,d?Me(P,X):P);O[w]=Q,R[w]=Q-I}if(s){var Z,G="x"===w?ce:ve,ee="x"===w?de:me,te=O[x],ne="y"===x?"height":"width",oe=te+g[G],re=te-g[ee],ae=-1!==[ce,ve].indexOf(h),ie=null!=(Z=null==T?void 0:T[x])?Z:0,se=ae?oe:te-E[ne]-k[ne]-ie+A.altAxis,le=ae?te+E[ne]+k[ne]-ie-A.altAxis:re,pe=d&&ae?function(e,t,n){var o=Ke(e,t,n);return o>n?n:o}(se,te,le):Ke(d?se:oe,te,d?le:re);O[x]=pe,R[x]=pe-te}t.modifiersData[o]=R}},requiresIfExists:["offset"]};function Ot(e,t,n){void 0===n&&(n=!1);var o=Re(t),r=Re(t)&&function(e){var t=e.getBoundingClientRect(),n=Le(t.width)/e.offsetWidth||1,o=Le(t.height)/e.offsetHeight||1;return 1!==n||1!==o}(t),a=He(t),i=Pe(e,r),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(o||!o&&!n)&&(("body"!==Ce(t)||st(a))&&(s=function(e){return e!==Ae(e)&&Re(e)?function(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}(e):at(e)}(t)),Re(t)?((l=Pe(t,!0)).x+=t.clientLeft,l.y+=t.clientTop):a&&(l.x=it(a))),{x:i.left+s.scrollLeft-l.x,y:i.top+s.scrollTop-l.y,width:i.width,height:i.height}}function Et(e){var t=new Map,n=new Set,o=[];function r(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var o=t.get(e);o&&r(o)}})),o.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||r(e)})),o}function kt(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var Ct={placement:"bottom",modifiers:[],strategy:"absolute"};function At(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Tt(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,o=void 0===n?[]:n,r=t.defaultOptions,a=void 0===r?Ct:r;return function(e,t,n){void 0===n&&(n=a);var r={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ct,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},i=[],s=!1,l={state:r,setOptions:function(n){var s="function"==typeof n?n(r.options):n;p(),r.options=Object.assign({},a,r.options,s),r.scrollParents={reference:Te(e)?pt(e):e.contextElement?pt(e.contextElement):[],popper:pt(t)};var u=function(e){var t=Et(e);return ke.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(o,r.options.modifiers)));return r.orderedModifiers=u.filter((function(e){return e.enabled})),r.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,o=void 0===n?{}:n,a=e.effect;if("function"==typeof a){var s=a({state:r,name:t,instance:l,options:o}),p=function(){};i.push(s||p)}})),l.update()},forceUpdate:function(){if(!s){var e=r.elements,t=e.reference,n=e.popper;if(At(t,n)){r.rects={reference:Ot(t,qe(n),"fixed"===r.options.strategy),popper:_e(n)},r.reset=!1,r.placement=r.options.placement,r.orderedModifiers.forEach((function(e){return r.modifiersData[e.name]=Object.assign({},e.data)}));for(var o=0;o<r.orderedModifiers.length;o++)if(!0!==r.reset){var a=r.orderedModifiers[o],i=a.fn,p=a.options,u=void 0===p?{}:p,f=a.name;"function"==typeof i&&(r=i({state:r,options:u,name:f,instance:l})||r)}else r.reset=!1,o=-1}}},update:kt((function(){return new Promise((function(e){l.forceUpdate(),e(r)}))})),destroy:function(){p(),s=!0}};if(!At(e,t))return l;function p(){i.forEach((function(e){return e()})),i=[]}return l.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),l}}Tt(),Tt({defaultModifiers:[et,wt,Ze,je]});var Rt=Tt({defaultModifiers:[et,wt,Ze,je,bt,vt,xt,Ye,yt]});let St;const jt=()=>{const e=K("namespace",V),t=Z(),n=a((()=>`${e.value}-popper-container-${t.prefix}`)),o=a((()=>`#${n.value}`));return{id:n,selector:o}},Bt=()=>{u((()=>{if(!W)return;const{id:e,selector:t}=jt();St||document.body.querySelector(t.value)||(St=(e=>{const t=document.createElement("div");return t.id=e,document.body.appendChild(t),t})(e.value))}))},Mt=n({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200}}),It=({showAfter:e,hideAfter:t,open:n,close:o})=>{const{registerTimeout:r}=function(){let e;const t=()=>window.clearTimeout(e);return z((()=>t())),{registerTimeout:(n,o)=>{t(),e=window.setTimeout(n,o)},cancelTimeout:t}}();return{onOpen:t=>{r((()=>{n(t)}),f(e))},onClose:e=>{r((()=>{o(e)}),f(t))}}},Lt=Symbol("elForwardRef"),Pt=n({role:{type:String,values:["dialog","grid","group","listbox","menu","navigation","tooltip","tree"],default:"tooltip"}}),_t=d({name:"ElPopperRoot",inheritAttrs:!1});var Dt=o(d({..._t,props:Pt,setup(e,{expose:t}){const n=e,o={triggerRef:m(),popperInstanceRef:m(),contentRef:m(),referenceRef:m(),role:a((()=>n.role))};return t(o),c(se,o),(e,t)=>v(e.$slots,"default")}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);const Nt=n({arrowOffset:{type:Number,default:5}}),Ft=d({name:"ElPopperArrow",inheritAttrs:!1});var Ht=o(d({...Ft,props:Nt,setup(e,{expose:t}){const n=e,o=U("popper"),{arrowOffset:r,arrowRef:a}=g(le,void 0);return s((()=>n.arrowOffset),(e=>{r.value=e})),h((()=>{a.value=void 0})),t({arrowRef:a}),(e,t)=>(y(),b("span",{ref_key:"arrowRef",ref:a,class:w(f(o).e("arrow")),"data-popper-arrow":""},null,2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);const $t=d({name:"ElOnlyChild",setup(e,{slots:t,attrs:n}){var o;const r=g(Lt),a=(i=null!=(o=null==r?void 0:r.setForwardRef)?o:x,{mounted(e){i(e)},updated(e){i(e)},unmounted(){i(null)}});var i;return()=>{var e;const o=null==(e=t.default)?void 0:e.call(t,n);if(!o)return null;if(o.length>1)return null;const r=Wt(o);return r?O(E(r,n),[[a]]):null}}});function Wt(e){if(!e)return null;const t=e;for(const n of t){if(k(n))switch(n.type){case T:continue;case A:case"svg":return qt(n);case C:return Wt(n.children);default:return n}return qt(n)}return null}function qt(e){const t=U("only-child");return R("span",{class:t.e("content")},[e])}const zt=n({virtualRef:{type:t(Object)},virtualTriggering:Boolean,onMouseenter:{type:t(Function)},onMouseleave:{type:t(Function)},onClick:{type:t(Function)},onKeydown:{type:t(Function)},onFocus:{type:t(Function)},onBlur:{type:t(Function)},onContextmenu:{type:t(Function)},id:String,open:Boolean}),Kt=d({name:"ElPopperTrigger",inheritAttrs:!1});var Vt=o(d({...Kt,props:zt,setup(e,{expose:t}){const n=e,{role:o,triggerRef:r}=g(se,void 0);var i;i=r,c(Lt,{setForwardRef:e=>{i.value=e}});const p=a((()=>d.value?n.id:void 0)),u=a((()=>{if(o&&"tooltip"===o.value)return n.open&&n.id?n.id:void 0})),d=a((()=>{if(o&&"tooltip"!==o.value)return o.value})),m=a((()=>d.value?`${n.open}`:void 0));let b;return l((()=>{s((()=>n.virtualRef),(e=>{e&&(r.value=J(e))}),{immediate:!0}),s(r,((e,t)=>{null==b||b(),b=void 0,Y(e)&&(["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"].forEach((o=>{var r;const a=n[o];a&&(e.addEventListener(o.slice(2).toLowerCase(),a),null==(r=null==t?void 0:t.removeEventListener)||r.call(t,o.slice(2).toLowerCase(),a))})),b=s([p,u,d,m],(t=>{["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach(((n,o)=>{Q(t[o])?e.removeAttribute(n):e.setAttribute(n,t[o])}))}),{immediate:!0})),Y(t)&&["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach((e=>t.removeAttribute(e)))}),{immediate:!0})})),h((()=>{null==b||b(),b=void 0})),t({triggerRef:r}),(e,t)=>e.virtualTriggering?M("v-if",!0):(y(),S(f($t),B({key:0},e.$attrs,{"aria-controls":f(p),"aria-describedby":f(u),"aria-expanded":f(m),"aria-haspopup":f(d)}),{default:j((()=>[v(e.$slots,"default")])),_:3},16,["aria-controls","aria-describedby","aria-expanded","aria-haspopup"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);const Ut=n({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:t(Array),default:void 0},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:Ee,default:"bottom"},popperOptions:{type:t(Object),default:()=>({})},strategy:{type:String,values:["fixed","absolute"],default:"absolute"}}),Yt=n({...Ut,id:String,style:{type:t([String,Array,Object])},className:{type:t([String,Array,Object])},effect:{type:String,default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,focusOnShow:{type:Boolean,default:!1},trapping:{type:Boolean,default:!1},popperClass:{type:t([String,Array,Object])},popperStyle:{type:t([String,Array,Object])},referenceEl:{type:t(Object)},triggerTargetEl:{type:t(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},ariaLabel:{type:String,default:void 0},virtualTriggering:Boolean,zIndex:Number}),Jt={mouseenter:e=>e instanceof MouseEvent,mouseleave:e=>e instanceof MouseEvent,focus:()=>!0,blur:()=>!0,close:()=>!0},Xt=(e,t)=>{const{placement:n,strategy:o,popperOptions:r}=e,a={placement:n,strategy:o,...r,modifiers:Qt(e)};return function(e,{arrowEl:t,arrowOffset:n}){e.modifiers.push({name:"arrow",options:{element:t,padding:null!=n?n:5}})}(a,t),function(e,t){t&&(e.modifiers=[...e.modifiers,...null!=t?t:[]])}(a,null==r?void 0:r.modifiers),a};function Qt(e){const{offset:t,gpuAcceleration:n,fallbackPlacements:o}=e;return[{name:"offset",options:{offset:[0,null!=t?t:12]}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5,fallbackPlacements:o}},{name:"computeStyles",options:{gpuAcceleration:n}}]}const Zt=d({name:"ElPopperContent"});var Gt=o(d({...Zt,props:Yt,emits:Jt,setup(e,{expose:t,emit:n}){const o=e,{popperInstanceRef:r,contentRef:i,triggerRef:p,role:u}=g(se,void 0),d=g(G,void 0),{nextZIndex:O}=ne(),E=U("popper"),k=m(),C=m("first"),A=m(),T=m();c(le,{arrowRef:A,arrowOffset:T}),d&&(d.addInputId||d.removeInputId)&&c(G,{...d,addInputId:x,removeInputId:x});const S=m(o.zIndex||O()),B=m(!1);let M;const L=a((()=>(e=>{if(W)return J(e)})(o.referenceEl)||f(p))),P=a((()=>[{zIndex:f(S)},o.popperStyle])),_=a((()=>[E.b(),E.is("pure",o.pure),E.is(o.effect),o.popperClass])),D=a((()=>u&&"dialog"===u.value?"false":void 0)),N=(e=!0)=>{var t;null==(t=f(r))||t.update(),e&&(S.value=o.zIndex||O())},F=()=>{var e,t;const n={name:"eventListeners",enabled:o.visible};null==(t=null==(e=f(r))?void 0:e.setOptions)||t.call(e,(e=>({...e,modifiers:[...e.modifiers||[],n]}))),N(!1),o.visible&&o.focusOnShow?B.value=!0:!1===o.visible&&(B.value=!1)},H=()=>{n("focus")},$=e=>{var t;"pointer"!==(null==(t=e.detail)?void 0:t.focusReason)&&(C.value="first",n("blur"))},q=e=>{o.visible&&!B.value&&(e.target&&(C.value=e.target),B.value=!0)},z=e=>{o.trapping||("pointer"===e.detail.focusReason&&e.preventDefault(),B.value=!1)},K=()=>{B.value=!1,n("close")};return l((()=>{let e;s(L,(t=>{var n;null==e||e();const a=f(r);if(null==(n=null==a?void 0:a.destroy)||n.call(a),t){const n=f(k);i.value=n,r.value=(({referenceEl:e,popperContentEl:t,arrowEl:n})=>{const r=Xt(o,{arrowEl:n,arrowOffset:f(T)});return Rt(e,t,r)})({referenceEl:t,popperContentEl:n,arrowEl:f(A)}),e=s((()=>t.getBoundingClientRect()),(()=>N()),{immediate:!0})}else r.value=void 0}),{immediate:!0}),s((()=>o.triggerTargetEl),((e,t)=>{null==M||M(),M=void 0;const n=f(e||k.value),r=f(t||k.value);Y(n)&&(M=s([u,()=>o.ariaLabel,D,()=>o.id],(e=>{["role","aria-label","aria-modal","id"].forEach(((t,o)=>{Q(e[o])?n.removeAttribute(t):n.setAttribute(t,e[o])}))}),{immediate:!0})),r!==n&&Y(r)&&["role","aria-label","aria-modal","id"].forEach((e=>{r.removeAttribute(e)}))}),{immediate:!0}),s((()=>o.visible),F,{immediate:!0}),s((()=>Xt(o,{arrowEl:f(A),arrowOffset:f(T)})),(e=>{var t;return null==(t=r.value)?void 0:t.setOptions(e)}))})),h((()=>{null==M||M(),M=void 0})),t({popperContentRef:k,popperInstanceRef:r,updatePopper:N,contentStyle:P}),(e,t)=>(y(),b("div",{ref_key:"popperContentRef",ref:k,style:I(f(P)),class:w(f(_)),tabindex:"-1",onMouseenter:t[0]||(t[0]=t=>e.$emit("mouseenter",t)),onMouseleave:t[1]||(t[1]=t=>e.$emit("mouseleave",t))},[R(f(oe),{trapped:B.value,"trap-on-focus-in":!0,"focus-trap-el":k.value,"focus-start-el":C.value,onFocusAfterTrapped:H,onFocusAfterReleased:$,onFocusin:q,onFocusoutPrevented:z,onReleaseRequested:K},{default:j((()=>[v(e.$slots,"default")])),_:3},8,["trapped","focus-trap-el","focus-start-el"])],38))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);const en=r(Dt),tn=U("tooltip"),nn=n({...Mt,...Yt,appendTo:{type:t([String,Object])},content:{type:String,default:""},rawContent:{type:Boolean,default:!1},persistent:Boolean,ariaLabel:String,visible:{type:t(Boolean),default:null},transition:{type:String,default:`${tn.namespace.value}-fade-in-linear`},teleported:{type:Boolean,default:!0},disabled:{type:Boolean}}),on=n({...zt,disabled:Boolean,trigger:{type:t([String,Array]),default:"hover"},triggerKeys:{type:t(Array),default:()=>[re.enter,re.space]}}),{useModelToggleProps:rn,useModelToggleEmits:an,useModelToggle:sn}=(e=>{const t=`update:${e}`,n=`onUpdate:${e}`;return{useModelToggle:({indicator:o,toggleReason:r,shouldHideWhenRouteChanges:u,shouldProceed:f,onShow:c,onHide:d})=>{const m=p(),{emit:v}=m,g=m.props,h=a((()=>i(g[n]))),y=a((()=>null===g[e])),b=e=>{!0!==o.value&&(o.value=!0,r&&(r.value=e),i(c)&&c(e))},w=e=>{!1!==o.value&&(o.value=!1,r&&(r.value=e),i(d)&&d(e))},x=e=>{if(!0===g.disabled||i(f)&&!f())return;const n=h.value&&W;n&&v(t,!0),!y.value&&n||b(e)},O=e=>{if(!0===g.disabled||!W)return;const n=h.value&&W;n&&v(t,!1),!y.value&&n||w(e)},E=e=>{q(e)&&(g.disabled&&e?h.value&&v(t,!1):o.value!==e&&(e?b():w()))};return s((()=>g[e]),E),u&&void 0!==m.appContext.config.globalProperties.$route&&s((()=>({...m.proxy.$route})),(()=>{u.value&&o.value&&O()})),l((()=>{E(g[e])})),{hide:O,show:x,toggle:()=>{o.value?O():x()},hasUpdateHandler:h}},useModelToggleProps:{[e]:ue,[n]:fe},useModelToggleEmits:[t]}})("visible"),ln=n({...Pt,...rn,...nn,...on,...Nt,showArrow:{type:Boolean,default:!0}}),pn=[...an,"before-show","before-hide","show","hide","open","close"],un=(e,t,n)=>o=>{((e,t)=>L(e)?e.includes(t):e===t)(f(e),t)&&n(o)},fn=d({name:"ElTooltipTrigger"});var cn=o(d({...fn,props:on,setup(e,{expose:t}){const n=e,o=U("tooltip"),{controlled:r,id:a,open:i,onOpen:s,onClose:l,onToggle:p}=g(pe,void 0),u=m(null),c=()=>{if(f(r)||n.disabled)return!0},d=P(n,"trigger"),h=ae(c,un(d,"hover",s)),b=ae(c,un(d,"hover",l)),x=ae(c,un(d,"click",(e=>{0===e.button&&p(e)}))),O=ae(c,un(d,"focus",s)),E=ae(c,un(d,"focus",l)),k=ae(c,un(d,"contextmenu",(e=>{e.preventDefault(),p(e)}))),C=ae(c,(e=>{const{code:t}=e;n.triggerKeys.includes(t)&&(e.preventDefault(),p(e))}));return t({triggerRef:u}),(e,t)=>(y(),S(f(Vt),{id:f(a),"virtual-ref":e.virtualRef,open:f(i),"virtual-triggering":e.virtualTriggering,class:w(f(o).e("trigger")),onBlur:f(E),onClick:f(x),onContextmenu:f(k),onFocus:f(O),onMouseenter:f(h),onMouseleave:f(b),onKeydown:f(C)},{default:j((()=>[v(e.$slots,"default")])),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);const dn=d({name:"ElTooltipContent",inheritAttrs:!1});var mn=o(d({...dn,props:nn,setup(e,{expose:t}){const n=e,{selector:o}=jt(),r=m(null),i=m(!1),{controlled:l,id:p,open:u,trigger:c,onClose:d,onOpen:b,onShow:w,onHide:x,onBeforeShow:E,onBeforeHide:k}=g(pe,void 0),C=a((()=>n.persistent));h((()=>{i.value=!0}));const A=a((()=>!!f(C)||f(u))),T=a((()=>!n.disabled&&f(u))),I=a((()=>n.appendTo||o.value)),L=a((()=>{var e;return null!=(e=n.style)?e:{}})),P=a((()=>!f(u))),F=()=>{x()},H=()=>{if(f(l))return!0},$=ae(H,(()=>{n.enterable&&"hover"===f(c)&&b()})),W=ae(H,(()=>{"hover"===f(c)&&d()})),q=()=>{var e,t;null==(t=null==(e=r.value)?void 0:e.updatePopper)||t.call(e),null==E||E()},z=()=>{null==k||k()},K=()=>{w(),U=X(a((()=>{var e;return null==(e=r.value)?void 0:e.popperContentRef})),(()=>{if(f(l))return;"hover"!==f(c)&&d()}))},V=()=>{n.virtualTriggering||d()};let U;return s((()=>f(u)),(e=>{e||null==U||U()}),{flush:"post"}),s((()=>n.content),(()=>{var e,t;null==(t=null==(e=r.value)?void 0:e.updatePopper)||t.call(e)})),t({contentRef:r}),(e,t)=>(y(),S(N,{disabled:!e.teleported,to:f(I)},[R(D,{name:e.transition,onAfterLeave:F,onBeforeEnter:q,onAfterEnter:K,onBeforeLeave:z},{default:j((()=>[f(A)?O((y(),S(f(Gt),B({key:0,id:f(p),ref_key:"contentRef",ref:r},e.$attrs,{"aria-label":e.ariaLabel,"aria-hidden":f(P),"boundaries-padding":e.boundariesPadding,"fallback-placements":e.fallbackPlacements,"gpu-acceleration":e.gpuAcceleration,offset:e.offset,placement:e.placement,"popper-options":e.popperOptions,strategy:e.strategy,effect:e.effect,enterable:e.enterable,pure:e.pure,"popper-class":e.popperClass,"popper-style":[e.popperStyle,f(L)],"reference-el":e.referenceEl,"trigger-target-el":e.triggerTargetEl,visible:f(T),"z-index":e.zIndex,onMouseenter:f($),onMouseleave:f(W),onBlur:V,onClose:f(d)}),{default:j((()=>[i.value?M("v-if",!0):v(e.$slots,"default",{key:0})])),_:3},16,["id","aria-label","aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","trigger-target-el","visible","z-index","onMouseenter","onMouseleave","onClose"])),[[_,f(T)]]):M("v-if",!0)])),_:3},8,["name"])],8,["disabled","to"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);const vn=["innerHTML"],gn={key:1},hn=d({name:"ElTooltip"});const yn=r(o(d({...hn,props:ln,emits:pn,setup(e,{expose:t,emit:n}){const o=e;Bt();const r=ee(),i=m(),l=m(),p=()=>{var e;const t=f(i);t&&(null==(e=t.popperInstanceRef)||e.update())},u=m(!1),d=m(),{show:g,hide:h,hasUpdateHandler:w}=sn({indicator:u,toggleReason:d}),{onOpen:x,onClose:O}=It({showAfter:P(o,"showAfter"),hideAfter:P(o,"hideAfter"),open:g,close:h}),E=a((()=>q(o.visible)&&!w.value));c(pe,{controlled:E,id:r,open:F(u),trigger:P(o,"trigger"),onOpen:e=>{x(e)},onClose:e=>{O(e)},onToggle:e=>{f(u)?O(e):x(e)},onShow:()=>{n("show",d.value)},onHide:()=>{n("hide",d.value)},onBeforeShow:()=>{n("before-show",d.value)},onBeforeHide:()=>{n("before-hide",d.value)},updatePopper:p}),s((()=>o.disabled),(e=>{e&&u.value&&(u.value=!1)}));return H((()=>u.value&&h())),t({popperRef:i,contentRef:l,isFocusInsideContent:()=>{var e,t;const n=null==(t=null==(e=l.value)?void 0:e.contentRef)?void 0:t.popperContentRef;return n&&n.contains(document.activeElement)},updatePopper:p,onOpen:x,onClose:O,hide:h}),(e,t)=>(y(),S(f(en),{ref_key:"popperRef",ref:i,role:e.role},{default:j((()=>[R(cn,{disabled:e.disabled,trigger:e.trigger,"trigger-keys":e.triggerKeys,"virtual-ref":e.virtualRef,"virtual-triggering":e.virtualTriggering},{default:j((()=>[e.$slots.default?v(e.$slots,"default",{key:0}):M("v-if",!0)])),_:3},8,["disabled","trigger","trigger-keys","virtual-ref","virtual-triggering"]),R(mn,{ref_key:"contentRef",ref:l,"aria-label":e.ariaLabel,"boundaries-padding":e.boundariesPadding,content:e.content,disabled:e.disabled,effect:e.effect,enterable:e.enterable,"fallback-placements":e.fallbackPlacements,"hide-after":e.hideAfter,"gpu-acceleration":e.gpuAcceleration,offset:e.offset,persistent:e.persistent,"popper-class":e.popperClass,"popper-style":e.popperStyle,placement:e.placement,"popper-options":e.popperOptions,pure:e.pure,"raw-content":e.rawContent,"reference-el":e.referenceEl,"trigger-target-el":e.triggerTargetEl,"show-after":e.showAfter,strategy:e.strategy,teleported:e.teleported,transition:e.transition,"virtual-triggering":e.virtualTriggering,"z-index":e.zIndex,"append-to":e.appendTo},{default:j((()=>[v(e.$slots,"content",{},(()=>[e.rawContent?(y(),b("span",{key:0,innerHTML:e.content},null,8,vn)):(y(),b("span",gn,$(e.content),1))])),e.showArrow?(y(),S(f(Ht),{key:0,"arrow-offset":e.arrowOffset},null,8,["arrow-offset"])):M("v-if",!0)])),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","pure","raw-content","reference-el","trigger-target-el","show-after","strategy","teleported","transition","virtual-triggering","z-index","append-to"])])),_:3},8,["role"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]));var bn=o(d({inheritAttrs:!1}),[["render",function(e,t,n,o,r,a){return v(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);var wn=o(d({name:"ElCollectionItem",inheritAttrs:!1}),[["render",function(e,t,n,o,r,a){return v(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const xn="data-el-collection-item",On=e=>{const t=`El${e}Collection`,n=`${t}Item`,o=Symbol(t),r=Symbol(n),a={...bn,name:t,setup(){const e=m(null),t=new Map;c(o,{itemMap:t,getItems:()=>{const n=f(e);if(!n)return[];const o=Array.from(n.querySelectorAll("[data-el-collection-item]"));return[...t.values()].sort(((e,t)=>o.indexOf(e.ref)-o.indexOf(t.ref)))},collectionRef:e})}},i={...wn,name:n,setup(e,{attrs:t}){const n=m(null),a=g(o,void 0);c(r,{collectionItemRef:n}),l((()=>{const e=f(n);e&&a.itemMap.set(e,{ref:e,...t})})),h((()=>{const e=f(n);a.itemMap.delete(e)}))}};return{COLLECTION_INJECTION_KEY:o,COLLECTION_ITEM_INJECTION_KEY:r,ElCollection:a,ElCollectionItem:i}},En=n({trigger:on.trigger,effect:{...nn.effect,default:"light"},type:{type:t(String)},placement:{type:t(String),default:"bottom"},popperOptions:{type:t(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:t([Number,String]),default:0},maxHeight:{type:t([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:t(Object)},teleported:nn.teleported}),kn=n({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:te}}),Cn=n({onKeydown:{type:t(Function)}}),An=[re.down,re.pageDown,re.home],Tn=[re.up,re.pageUp,re.end],Rn=[...An,...Tn],{ElCollection:Sn,ElCollectionItem:jn,COLLECTION_INJECTION_KEY:Bn,COLLECTION_ITEM_INJECTION_KEY:Mn}=On("Dropdown");export{Mn as C,yn as E,Rn as F,Tn as L,$t as O,nn as a,ae as b,On as c,En as d,Sn as e,kn as f,xn as g,jn as h,Cn as i,Bn as j,on as u,ie as w};
//# sourceMappingURL=popper-5f75d243.js.map
