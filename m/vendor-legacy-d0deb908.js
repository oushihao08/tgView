System.register(["./__commonjsHelpers__-legacy-f21eb433.js","./vue-legacy-ad0cdcd9.js"],(function(e,t){"use strict";var n,r,o,i,s,a,u,c,l,f,h,p,d,g,m,_,y,v;return{setters:[e=>{n=e.c,r=e.g,o=e.a},e=>{i=e.C,s=e.r,a=e.D,u=e.g,c=e.i,l=e.w,f=e.a,h=e.f,p=e.E,d=e.G,g=e.o,m=e.n,_=e.H,y=e.c,v=e.I}],execute:function(){e({a:
/**
       * Creates a Pinia instance to be used by the application
       */
function(){const e=i(!0),t=e.run((()=>s({})));// NOTE: here we could check the window object for a state and directly set it
// if there is anything like it with Vue 3 SSR
let n=[],r=[];// plugins added before calling app.use(pinia)
const o=a({install(e){// this allows calling useStore() outside of a component setup after
// installing pinia's plugin
O(o),o._a=e,e.provide(w,o),e.config.globalProperties.$pinia=o,r.forEach((e=>n.push(e))),r=[]},use(e){return this._a?n.push(e):r.push(e),this},_p:n,// it's actually undefined here
// @ts-expect-error
_a:null,_e:e,_s:new Map,state:t});return o},d:function(// TODO: add proper types from above
e,t,n){let r,o;const i="function"==typeof t;function s(e,n){const s=u();// StoreGeneric cannot be casted towards Store
return(e=// in test mode, ignore the argument provided as we can always retrieve a
// pinia instance with getActivePinia()
e||s&&c(w))&&O(e),(e=S)._s.has(r)||(// creating the store registers it in `pinia._s`
i?P(r,t,o,e):function(e,t,n,r){const{state:o,actions:i,getters:s}=t,u=n.state.value[e];let c;function l(){u||(n.state.value[e]=o?o():{});// avoid creating a state in pinia.state.value
const t=_(n.state.value[e]);return k(t,i,Object.keys(s||{}).reduce(((t,r)=>(t[r]=a(y((()=>{O(n);// it was created just before
const t=n._s.get(e);// @ts-expect-error
// return getters![name].call(context, context)
// TODO: avoid reading the getter while assigning with a global variable
return s[r].call(t,t)}))),t)),{}))}c=P(e,l,t,n,0,!0),c.$reset=function(){const e=o?o():{};// we use a patch to group all changes into one single subscription
this.$patch((t=>{k(t,e)}))}}(r,o,e)),e._s.get(r)}return"string"==typeof e?(r=e,// the option store setup will contain the actual options in this case
o=i?n:t):(o=e,r=e.id),s.$id=r,s},m:function(e){return{all:e=e||new Map,on:function(t,n){var r=e.get(t);r?r.push(n):e.set(t,[n])},off:function(t,n){var r=e.get(t);r&&(n?r.splice(r.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var r=e.get(t);r&&r.slice().map((function(e){e(n)})),(r=e.get("*"))&&r.slice().map((function(e){e(t,n)}))}}},u:function(){return null==Xt&&(Xt=new zt),{cookies:f(Xt)}}});var t={exports:{}};!function(e,t){e.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",o="second",i="minute",s="hour",a="day",u="week",c="month",l="quarter",f="year",h="date",p="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},_=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},y={s:_,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),o=n%60;return(t<=0?"+":"-")+_(r,2,"0")+":"+_(o,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(r,c),i=n-o<0,s=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-o)/(i?o-s:s-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:f,w:u,d:a,D:h,h:s,m:i,s:o,ms:r,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",E={};E[v]=m;var b=function(e){return e instanceof C},S=function e(t,n,r){var o;if(!t)return v;if("string"==typeof t){var i=t.toLowerCase();E[i]&&(o=i),n&&(E[i]=n,o=i);var s=t.split("-");if(!o&&s.length>1)return e(s[0])}else{var a=t.name;E[a]=t,o=a}return!r&&o&&(v=o),o||!r&&v},O=function(e,t){if(b(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new C(n)},w=y;w.l=S,w.i=b,w.w=function(e,t){return O(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var C=function(){function m(e){this.$L=S(e.locale,null,!0),this.parse(e)}var _=m.prototype;return _.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(d);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},_.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},_.$utils=function(){return w},_.isValid=function(){return!(this.$d.toString()===p)},_.isSame=function(e,t){var n=O(e);return this.startOf(t)<=n&&n<=this.endOf(t)},_.isAfter=function(e,t){return O(e)<this.startOf(t)},_.isBefore=function(e,t){return this.endOf(t)<O(e)},_.$g=function(e,t,n){return w.u(e)?this[t]:this.set(n,e)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(e,t){var n=this,r=!!w.u(t)||t,l=w.p(e),p=function(e,t){var o=w.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?o:o.endOf(a)},d=function(e,t){return w.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(l){case f:return r?p(1,0):p(31,11);case c:return r?p(1,m):p(0,m+1);case u:var v=this.$locale().weekStart||0,E=(g<v?g+7:g)-v;return p(r?_-E:_+(6-E),m);case a:case h:return d(y+"Hours",0);case s:return d(y+"Minutes",1);case i:return d(y+"Seconds",2);case o:return d(y+"Milliseconds",3);default:return this.clone()}},_.endOf=function(e){return this.startOf(e,!1)},_.$set=function(e,t){var n,u=w.p(e),l="set"+(this.$u?"UTC":""),p=(n={},n[a]=l+"Date",n[h]=l+"Date",n[c]=l+"Month",n[f]=l+"FullYear",n[s]=l+"Hours",n[i]=l+"Minutes",n[o]=l+"Seconds",n[r]=l+"Milliseconds",n)[u],d=u===a?this.$D+(t-this.$W):t;if(u===c||u===f){var g=this.clone().set(h,1);g.$d[p](d),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else p&&this.$d[p](d);return this.init(),this},_.set=function(e,t){return this.clone().$set(e,t)},_.get=function(e){return this[w.p(e)]()},_.add=function(r,l){var h,p=this;r=Number(r);var d=w.p(l),g=function(e){var t=O(p);return w.w(t.date(t.date()+Math.round(e*r)),p)};if(d===c)return this.set(c,this.$M+r);if(d===f)return this.set(f,this.$y+r);if(d===a)return g(1);if(d===u)return g(7);var m=(h={},h[i]=t,h[s]=n,h[o]=e,h)[d]||1,_=this.$d.getTime()+r*m;return w.w(_,this)},_.subtract=function(e,t){return this.add(-1*e,t)},_.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var r=e||"YYYY-MM-DDTHH:mm:ssZ",o=w.z(this),i=this.$H,s=this.$m,a=this.$M,u=n.weekdays,c=n.months,l=function(e,n,o,i){return e&&(e[n]||e(t,r))||o[n].slice(0,i)},f=function(e){return w.s(i%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},d={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:w.s(a+1,2,"0"),MMM:l(n.monthsShort,a,c,3),MMMM:l(c,a),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,u,2),ddd:l(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(i),HH:w.s(i,2,"0"),h:f(1),hh:f(2),a:h(i,s,!0),A:h(i,s,!1),m:String(s),mm:w.s(s,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:o};return r.replace(g,(function(e,t){return t||d[e]||o.replace(":","")}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(r,h,p){var d,g=w.p(h),m=O(r),_=(m.utcOffset()-this.utcOffset())*t,y=this-m,v=w.m(this,m);return v=(d={},d[f]=v/12,d[c]=v,d[l]=v/3,d[u]=(y-_)/6048e5,d[a]=(y-_)/864e5,d[s]=y/n,d[i]=y/t,d[o]=y/e,d)[g]||y,p?v:w.a(v)},_.daysInMonth=function(){return this.endOf(c).$D},_.$locale=function(){return E[this.$L]},_.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},_.clone=function(){return w.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},m}(),A=C.prototype;return O.prototype=A,[["$ms",r],["$s",o],["$m",i],["$H",s],["$W",a],["$M",c],["$y",f],["$D",h]].forEach((function(e){A[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),O.extend=function(e,t){return e.$i||(e(t,C,O),e.$i=!0),O},O.locale=S,O.isDayjs=b,O.unix=function(e){return O(1e3*e)},O.en=E[v],O.Ls=E,O.p={},O}()}(t),e("g",t.exports);var E=function(e){return parseInt(e,16)},b=function(e,t){var n,r=e.r,o=e.g,i=e.b,s=e.a,a=(n=t,!isNaN(parseFloat(n))&&isFinite(n)?t:s);return"rgba(".concat(r,", ").concat(o,", ").concat(i,", ").concat(a,")")};
/*!
        * pinia v2.0.21
        * (c) 2022 Eduardo San Martin Morote
        * @license MIT
        */
/**
       * setActivePinia must be called to handle SSR at the top of functions like
       * `fetch`, `setup`, `serverPrefetch` and others
       */
let S;
/**
       * Sets or unsets the active pinia. Used in SSR and internally when calling
       * actions and getters
       *
       * @param pinia - Pinia instance
       */e("b",(function(e,t){var n,r,o=function(e){return"#"===e.charAt(0)?e.slice(1):e}(e),i=function(e){var t=e.r,n=e.g,r=e.b,o=e.a;return{r:E(t),g:E(n),b:E(r),a:+(E(o)/255).toFixed(2)}}({r:(r=3===(n=o).length||4===n.length)?"".concat(n.slice(0,1)).concat(n.slice(0,1)):n.slice(0,2),g:r?"".concat(n.slice(1,2)).concat(n.slice(1,2)):n.slice(2,4),b:r?"".concat(n.slice(2,3)).concat(n.slice(2,3)):n.slice(4,6),a:(r?"".concat(n.slice(3,4)).concat(n.slice(3,4)):n.slice(6,8))||"ff"});return b(i,t)}));const O=e=>S=e,w=/* istanbul ignore next */Symbol();function C(// eslint-disable-next-line @typescript-eslint/no-explicit-any
e){return e&&"object"==typeof e&&"[object Object]"===Object.prototype.toString.call(e)&&"function"!=typeof e.toJSON}// type DeepReadonly<T> = { readonly [P in keyof T]: DeepReadonly<T[P]> }
// TODO: can we change these to numbers?
/**
       * Possible types for SubscriptionCallback
       */var A;!function(e){
/**
           * Direct mutation of the state:
           *
           * - `store.name = 'new name'`
           * - `store.$state.name = 'new name'`
           * - `store.list.push('new item')`
           */
e.direct="direct",
/**
           * Mutated the state with `$patch` and an object
           *
           * - `store.$patch({ name: 'newName' })`
           */
e.patchObject="patch object",
/**
           * Mutated the state with `$patch` and a function
           *
           * - `store.$patch(state => state.name = 'newName')`
           */
e.patchFunction="patch function"}(A||(A={}));const L=()=>{};function N(e,t,n,r=L){e.push(t);const o=()=>{const n=e.indexOf(t);n>-1&&(e.splice(n,1),r())};return!n&&u()&&g(o),o}function T(e,...t){e.slice().forEach((e=>{e(...t)}))}function M(e,t){// no need to go through symbols because they cannot be serialized anyway
for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],o=e[n];C(o)&&C(r)&&e.hasOwnProperty(n)&&!h(r)&&!p(r)?e[n]=M(o,r):// @ts-expect-error: subPatch is a valid value
e[n]=r}return e}const R=/* istanbul ignore next */Symbol(),{assign:k}=Object;function D(e){return!(!h(e)||!e.effect)}function P(e,t,n={},r,o,u){let c;const g=k({actions:{}},n),_={deep:!0};// watcher options for $subscribe
// internal state
let y,v,E,b=a([]),S=a([]);// set to true at the end
const w=r.state.value[e];// avoid setting the state for option stores if it is set
// by the setup
// avoid triggering too many listeners
// https://github.com/vuejs/pinia/issues/1129
let P;function x(t){let n;y=v=!1,"function"==typeof t?(t(r.state.value[e]),n={type:A.patchFunction,storeId:e,events:E}):(M(r.state.value[e],t),n={type:A.patchObject,payload:t,storeId:e,events:E});const o=P=Symbol();m().then((()=>{P===o&&(y=!0)})),v=!0,// because we paused the watcher, we need to manually call the subscriptions
T(b,n,r.state.value[e])}/* istanbul ignore next */u||w||(r.state.value[e]={}),s({});const I=L;
/**
           * Wraps an action to handle subscriptions.
           *
           * @param name - name of the action
           * @param action - action to wrap
           * @returns a wrapped action to handle subscriptions
           */
function $(t,n){return function(){O(r);const o=Array.from(arguments),i=[],s=[];function a(e){i.push(e)}function u(e){s.push(e)}// @ts-expect-error
let c;T(S,{args:o,name:t,store:j,after:a,onError:u});try{c=n.apply(this&&this.$id===e?this:j,o);// handle sync errors
}catch(l){throw T(s,l),l}return c instanceof Promise?c.then((e=>(T(i,e),e))).catch((e=>(T(s,e),Promise.reject(e)))):(// allow the afterCallback to override the return value
T(i,c),c)}}const U={_p:r,// _s: scope,
$id:e,$onAction:N.bind(null,S),$patch:x,$reset:I,$subscribe(t,n={}){const o=N(b,t,n.detached,(()=>i())),i=c.run((()=>l((()=>r.state.value[e]),(r=>{("sync"===n.flush?v:y)&&t({storeId:e,type:A.direct,events:E},r)}),k({},_,n))));return o},$dispose:function(){c.stop(),b=[],S=[],r._s.delete(e)}},j=f(k({},U));// store the partial store now so the setup of stores can instantiate each other before they are finished without
// creating infinite loops.
r._s.set(e,j);// TODO: idea create skipSerialize that marks properties as non serializable and they are skipped
const F=r._e.run((()=>(c=i(),c.run((()=>t())))));// overwrite existing actions to support $onAction
for(const i in F){const t=F[i];if(h(t)&&!D(t)||p(t))// mark it as a piece of state to be serialized
u||(// in setup stores we must hydrate the state and sync pinia state tree with the refs the user just created
!w||C(B=t)&&B.hasOwnProperty(R)||(h(t)?t.value=w[i]:// probably a reactive object, lets recursively assign
M(t,w[i])),r.state.value[e][i]=t);// action
else if("function"==typeof t){// @ts-expect-error: we are overriding the function we avoid wrapping if
const e=$(i,t);// this a hot module replacement store because the hotUpdate method needs
// to do it with the right context
/* istanbul ignore if */ // @ts-expect-error
F[i]=e,// list actions so they can be used in plugins
// @ts-expect-error
g.actions[i]=t}}// add the state, getters, and action properties
/* istanbul ignore if */var B;return k(j,F),// allows retrieving reactive objects with `storeToRefs()`. Must be called after assigning to the reactive object.
// Make `storeToRefs()` work with `reactive()` #799
k(d(j),F),// use this instead of a computed with setter to be able to create it anywhere
// without linking the computed lifespan to wherever the store is first
// created.
Object.defineProperty(j,"$state",{get:()=>r.state.value[e],set:e=>{x((t=>{k(t,e)}))}}),// apply all plugins
r._p.forEach((e=>{k(j,c.run((()=>e({store:j,app:r._a,pinia:r,options:g}))))})),// only apply hydrate to option stores with an initial state in pinia
w&&u&&n.hydrate&&n.hydrate(j.$state,w),y=!0,v=!0,j}var x={exports:{}},I={exports:{}};const $=Object.freeze(Object.defineProperty({__proto__:null,default:{}},Symbol.toStringTag,{value:"Module"})),U=r($);var j;function F(){return j||(j=1,function(e,t){var r;// CommonJS
e.exports=(r=r||function(e,t){var r;// Native crypto from window (Browser)
// Native crypto import via require (NodeJS)
if("undefined"!=typeof window&&window.crypto&&(r=window.crypto),// Native crypto in web worker (Browser)
"undefined"!=typeof self&&self.crypto&&(r=self.crypto),// Native crypto from worker
"undefined"!=typeof globalThis&&globalThis.crypto&&(r=globalThis.crypto),// Native (experimental IE 11) crypto from window (Browser)
!r&&"undefined"!=typeof window&&window.msCrypto&&(r=window.msCrypto),// Native crypto from global (NodeJS)
!r&&void 0!==n&&n.crypto&&(r=n.crypto),!r)try{r=U}catch(m){}
/*
      			     * Cryptographically secure pseudorandom number generator
      			     *
      			     * As Math.random() is cryptographically not safe to use
      			     */var o=function(){if(r){// Use getRandomValues method (Browser)
if("function"==typeof r.getRandomValues)try{return r.getRandomValues(new Uint32Array(1))[0]}catch(m){}// Use randomBytes method (NodeJS)
if("function"==typeof r.randomBytes)try{return r.randomBytes(4).readInt32LE()}catch(m){}}throw new Error("Native crypto module could not be used to get secure random number.")},i=Object.create||function(){function e(){}return function(t){var n;return e.prototype=t,n=new e,e.prototype=null,n}}(),s={},a=s.lib={},u=a.Base={
/**
      			             * Creates a new object that inherits from this object.
      			             *
      			             * @param {Object} overrides Properties to copy into the new object.
      			             *
      			             * @return {Object} The new object.
      			             *
      			             * @static
      			             *
      			             * @example
      			             *
      			             *     var MyType = CryptoJS.lib.Base.extend({
      			             *         field: 'value',
      			             *
      			             *         method: function () {
      			             *         }
      			             *     });
      			             */
extend:function(e){// Spawn
var t=i(this);// Augment
return e&&t.mixIn(e),// Create default initializer
t.hasOwnProperty("init")&&this.init!==t.init||(t.init=function(){t.$super.init.apply(this,arguments)}),// Initializer's prototype is the subtype object
t.init.prototype=t,// Reference supertype
t.$super=this,t},
/**
      			             * Extends this object and runs the init method.
      			             * Arguments to create() will be passed to init().
      			             *
      			             * @return {Object} The new object.
      			             *
      			             * @static
      			             *
      			             * @example
      			             *
      			             *     var instance = MyType.create();
      			             */
create:function(){var e=this.extend();return e.init.apply(e,arguments),e},
/**
      			             * Initializes a newly created object.
      			             * Override this method to add some logic when your objects are created.
      			             *
      			             * @example
      			             *
      			             *     var MyType = CryptoJS.lib.Base.extend({
      			             *         init: function () {
      			             *             // ...
      			             *         }
      			             *     });
      			             */
init:function(){},
/**
      			             * Copies properties into this object.
      			             *
      			             * @param {Object} properties The properties to mix in.
      			             *
      			             * @example
      			             *
      			             *     MyType.mixIn({
      			             *         field: 'value'
      			             *     });
      			             */
mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);// IE won't copy toString using the loop above
e.hasOwnProperty("toString")&&(this.toString=e.toString)},
/**
      			             * Creates a copy of this object.
      			             *
      			             * @return {Object} The clone.
      			             *
      			             * @example
      			             *
      			             *     var clone = instance.clone();
      			             */
clone:function(){return this.init.prototype.extend(this)}},c=a.WordArray=u.extend({
/**
      			         * Initializes a newly created word array.
      			         *
      			         * @param {Array} words (Optional) An array of 32-bit words.
      			         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
      			         *
      			         * @example
      			         *
      			         *     var wordArray = CryptoJS.lib.WordArray.create();
      			         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
      			         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
      			         */
init:function(e,n){e=this.words=e||[],this.sigBytes=n!=t?n:4*e.length},
/**
      			         * Converts this word array to a string.
      			         *
      			         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
      			         *
      			         * @return {string} The stringified word array.
      			         *
      			         * @example
      			         *
      			         *     var string = wordArray + '';
      			         *     var string = wordArray.toString();
      			         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
      			         */
toString:function(e){return(e||f).stringify(this)},
/**
      			         * Concatenates a word array to this word array.
      			         *
      			         * @param {WordArray} wordArray The word array to append.
      			         *
      			         * @return {WordArray} This word array.
      			         *
      			         * @example
      			         *
      			         *     wordArray1.concat(wordArray2);
      			         */
concat:function(e){// Shortcuts
var t=this.words,n=e.words,r=this.sigBytes,o=e.sigBytes;// Concat
if(// Clamp excess bits
this.clamp(),r%4)// Copy one byte at a time
for(var i=0;i<o;i++){var s=n[i>>>2]>>>24-i%4*8&255;t[r+i>>>2]|=s<<24-(r+i)%4*8}else// Copy one word at a time
for(var a=0;a<o;a+=4)t[r+a>>>2]=n[a>>>2];// Chainable
return this.sigBytes+=o,this},
/**
      			         * Removes insignificant bits.
      			         *
      			         * @example
      			         *
      			         *     wordArray.clamp();
      			         */
clamp:function(){// Shortcuts
var t=this.words,n=this.sigBytes;// Clamp
t[n>>>2]&=4294967295<<32-n%4*8,t.length=e.ceil(n/4)},
/**
      			         * Creates a copy of this word array.
      			         *
      			         * @return {WordArray} The clone.
      			         *
      			         * @example
      			         *
      			         *     var clone = wordArray.clone();
      			         */
clone:function(){var e=u.clone.call(this);return e.words=this.words.slice(0),e},
/**
      			         * Creates a word array filled with random bytes.
      			         *
      			         * @param {number} nBytes The number of random bytes to generate.
      			         *
      			         * @return {WordArray} The random word array.
      			         *
      			         * @static
      			         *
      			         * @example
      			         *
      			         *     var wordArray = CryptoJS.lib.WordArray.random(16);
      			         */
random:function(e){for(var t=[],n=0;n<e;n+=4)t.push(o());return new c.init(t,e)}}),l=s.enc={},f=l.Hex={
/**
      			         * Converts a word array to a hex string.
      			         *
      			         * @param {WordArray} wordArray The word array.
      			         *
      			         * @return {string} The hex string.
      			         *
      			         * @static
      			         *
      			         * @example
      			         *
      			         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
      			         */
stringify:function(e){for(// Shortcuts
var t=e.words,n=e.sigBytes,r=[],o=0;o<n;o++){var i=t[o>>>2]>>>24-o%4*8&255;r.push((i>>>4).toString(16)),r.push((15&i).toString(16))}return r.join("")},
/**
      			         * Converts a hex string to a word array.
      			         *
      			         * @param {string} hexStr The hex string.
      			         *
      			         * @return {WordArray} The word array.
      			         *
      			         * @static
      			         *
      			         * @example
      			         *
      			         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
      			         */
parse:function(e){for(// Shortcut
var t=e.length,n=[],r=0// Convert
;r<t;r+=2)n[r>>>3]|=parseInt(e.substr(r,2),16)<<24-r%8*4;return new c.init(n,t/2)}},h=l.Latin1={
/**
      			         * Converts a word array to a Latin1 string.
      			         *
      			         * @param {WordArray} wordArray The word array.
      			         *
      			         * @return {string} The Latin1 string.
      			         *
      			         * @static
      			         *
      			         * @example
      			         *
      			         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
      			         */
stringify:function(e){for(// Shortcuts
var t=e.words,n=e.sigBytes,r=[],o=0;o<n;o++){var i=t[o>>>2]>>>24-o%4*8&255;r.push(String.fromCharCode(i))}return r.join("")},
/**
      			         * Converts a Latin1 string to a word array.
      			         *
      			         * @param {string} latin1Str The Latin1 string.
      			         *
      			         * @return {WordArray} The word array.
      			         *
      			         * @static
      			         *
      			         * @example
      			         *
      			         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
      			         */
parse:function(e){for(// Shortcut
var t=e.length,n=[],r=0// Convert
;r<t;r++)n[r>>>2]|=(255&e.charCodeAt(r))<<24-r%4*8;return new c.init(n,t)}},p=l.Utf8={
/**
      			         * Converts a word array to a UTF-8 string.
      			         *
      			         * @param {WordArray} wordArray The word array.
      			         *
      			         * @return {string} The UTF-8 string.
      			         *
      			         * @static
      			         *
      			         * @example
      			         *
      			         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
      			         */
stringify:function(e){try{return decodeURIComponent(escape(h.stringify(e)))}catch(Ao){throw new Error("Malformed UTF-8 data")}},
/**
      			         * Converts a UTF-8 string to a word array.
      			         *
      			         * @param {string} utf8Str The UTF-8 string.
      			         *
      			         * @return {WordArray} The word array.
      			         *
      			         * @static
      			         *
      			         * @example
      			         *
      			         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
      			         */
parse:function(e){return h.parse(unescape(encodeURIComponent(e)))}},d=a.BufferedBlockAlgorithm=u.extend({
/**
      			         * Resets this block algorithm's data buffer to its initial state.
      			         *
      			         * @example
      			         *
      			         *     bufferedBlockAlgorithm.reset();
      			         */
reset:function(){// Initial values
this._data=new c.init,this._nDataBytes=0},
/**
      			         * Adds new data to this block algorithm's buffer.
      			         *
      			         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
      			         *
      			         * @example
      			         *
      			         *     bufferedBlockAlgorithm._append('data');
      			         *     bufferedBlockAlgorithm._append(wordArray);
      			         */
_append:function(e){// Convert string to WordArray, else assume WordArray already
"string"==typeof e&&(e=p.parse(e)),// Append
this._data.concat(e),this._nDataBytes+=e.sigBytes},
/**
      			         * Processes available data blocks.
      			         *
      			         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
      			         *
      			         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
      			         *
      			         * @return {WordArray} The processed data.
      			         *
      			         * @example
      			         *
      			         *     var processedData = bufferedBlockAlgorithm._process();
      			         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
      			         */
_process:function(t){var n,r=this._data,o=r.words,i=r.sigBytes,s=this.blockSize,a=i/(4*s),u=(// Round up to include partial blocks
a=t?e.ceil(a):e.max((0|a)-this._minBufferSize,0))*s,l=e.min(4*u,i);// Shortcuts
// Process blocks
if(u){for(var f=0;f<u;f+=s)// Perform concrete-algorithm logic
this._doProcessBlock(o,f);// Remove processed words
n=o.splice(0,u),r.sigBytes-=l}// Return processed words
return new c.init(n,l)},
/**
      			         * Creates a copy of this object.
      			         *
      			         * @return {Object} The clone.
      			         *
      			         * @example
      			         *
      			         *     var clone = bufferedBlockAlgorithm.clone();
      			         */
clone:function(){var e=u.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0});
/*
      			     * Local polyfill of Object.create

      			     */
/**
      			     * Abstract hasher template.
      			     *
      			     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
      			     */
a.Hasher=d.extend({
/**
      			         * Configuration options.
      			         */
cfg:u.extend(),
/**
      			         * Initializes a newly created hasher.
      			         *
      			         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
      			         *
      			         * @example
      			         *
      			         *     var hasher = CryptoJS.algo.SHA256.create();
      			         */
init:function(e){// Apply config defaults
this.cfg=this.cfg.extend(e),// Set initial values
this.reset()},
/**
      			         * Resets this hasher to its initial state.
      			         *
      			         * @example
      			         *
      			         *     hasher.reset();
      			         */
reset:function(){// Reset data buffer
d.reset.call(this),// Perform concrete-hasher logic
this._doReset()},
/**
      			         * Updates this hasher with a message.
      			         *
      			         * @param {WordArray|string} messageUpdate The message to append.
      			         *
      			         * @return {Hasher} This hasher.
      			         *
      			         * @example
      			         *
      			         *     hasher.update('message');
      			         *     hasher.update(wordArray);
      			         */
update:function(e){// Chainable
// Append
return this._append(e),// Update the hash
this._process(),this},
/**
      			         * Finalizes the hash computation.
      			         * Note that the finalize operation is effectively a destructive, read-once operation.
      			         *
      			         * @param {WordArray|string} messageUpdate (Optional) A final message update.
      			         *
      			         * @return {WordArray} The hash.
      			         *
      			         * @example
      			         *
      			         *     var hash = hasher.finalize();
      			         *     var hash = hasher.finalize('message');
      			         *     var hash = hasher.finalize(wordArray);
      			         */
finalize:function(e){// Final message update
return e&&this._append(e),this._doFinalize()},blockSize:16,
/**
      			         * Creates a shortcut function to a hasher's object interface.
      			         *
      			         * @param {Hasher} hasher The hasher to create a helper for.
      			         *
      			         * @return {Function} The shortcut function.
      			         *
      			         * @static
      			         *
      			         * @example
      			         *
      			         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
      			         */
_createHelper:function(e){return function(t,n){return new e.init(n).finalize(t)}},
/**
      			         * Creates a shortcut function to the HMAC's object interface.
      			         *
      			         * @param {Hasher} hasher The hasher to use in this HMAC helper.
      			         *
      			         * @return {Function} The shortcut function.
      			         *
      			         * @static
      			         *
      			         * @example
      			         *
      			         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
      			         */
_createHmacHelper:function(e){return function(t,n){return new g.HMAC.init(e,n).finalize(t)}}});
/**
      			     * Algorithm namespace.
      			     */
var g=s.algo={};return s}(Math),r)}(I)),I.exports}!function(e,t){var n;// CommonJS
e.exports=(n=F(),function(e){// Shortcuts
var t=n,r=t.lib,o=r.WordArray,i=r.Hasher,s=t.algo,a=[];// Compute constants
!function(){for(var t=0;t<64;t++)a[t]=4294967296*e.abs(e.sin(t+1))|0}();
/**
      		     * MD5 hash algorithm.
      		     */
var u=s.MD5=i.extend({_doReset:function(){this._hash=new o.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,t){// Swap endian
for(var n=0;n<16;n++){// Shortcuts
var r=t+n,o=e[r];e[r]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8)}// Shortcuts
var i=this._hash.words,s=e[t+0],u=e[t+1],p=e[t+2],d=e[t+3],g=e[t+4],m=e[t+5],_=e[t+6],y=e[t+7],v=e[t+8],E=e[t+9],b=e[t+10],S=e[t+11],O=e[t+12],w=e[t+13],C=e[t+14],A=e[t+15],L=i[0],N=i[1],T=i[2],M=i[3];// Computation
L=c(L,N,T,M,s,7,a[0]),M=c(M,L,N,T,u,12,a[1]),T=c(T,M,L,N,p,17,a[2]),N=c(N,T,M,L,d,22,a[3]),L=c(L,N,T,M,g,7,a[4]),M=c(M,L,N,T,m,12,a[5]),T=c(T,M,L,N,_,17,a[6]),N=c(N,T,M,L,y,22,a[7]),L=c(L,N,T,M,v,7,a[8]),M=c(M,L,N,T,E,12,a[9]),T=c(T,M,L,N,b,17,a[10]),N=c(N,T,M,L,S,22,a[11]),L=c(L,N,T,M,O,7,a[12]),M=c(M,L,N,T,w,12,a[13]),T=c(T,M,L,N,C,17,a[14]),L=l(L,N=c(N,T,M,L,A,22,a[15]),T,M,u,5,a[16]),M=l(M,L,N,T,_,9,a[17]),T=l(T,M,L,N,S,14,a[18]),N=l(N,T,M,L,s,20,a[19]),L=l(L,N,T,M,m,5,a[20]),M=l(M,L,N,T,b,9,a[21]),T=l(T,M,L,N,A,14,a[22]),N=l(N,T,M,L,g,20,a[23]),L=l(L,N,T,M,E,5,a[24]),M=l(M,L,N,T,C,9,a[25]),T=l(T,M,L,N,d,14,a[26]),N=l(N,T,M,L,v,20,a[27]),L=l(L,N,T,M,w,5,a[28]),M=l(M,L,N,T,p,9,a[29]),T=l(T,M,L,N,y,14,a[30]),L=f(L,N=l(N,T,M,L,O,20,a[31]),T,M,m,4,a[32]),M=f(M,L,N,T,v,11,a[33]),T=f(T,M,L,N,S,16,a[34]),N=f(N,T,M,L,C,23,a[35]),L=f(L,N,T,M,u,4,a[36]),M=f(M,L,N,T,g,11,a[37]),T=f(T,M,L,N,y,16,a[38]),N=f(N,T,M,L,b,23,a[39]),L=f(L,N,T,M,w,4,a[40]),M=f(M,L,N,T,s,11,a[41]),T=f(T,M,L,N,d,16,a[42]),N=f(N,T,M,L,_,23,a[43]),L=f(L,N,T,M,E,4,a[44]),M=f(M,L,N,T,O,11,a[45]),T=f(T,M,L,N,A,16,a[46]),L=h(L,N=f(N,T,M,L,p,23,a[47]),T,M,s,6,a[48]),M=h(M,L,N,T,y,10,a[49]),T=h(T,M,L,N,C,15,a[50]),N=h(N,T,M,L,m,21,a[51]),L=h(L,N,T,M,O,6,a[52]),M=h(M,L,N,T,d,10,a[53]),T=h(T,M,L,N,b,15,a[54]),N=h(N,T,M,L,u,21,a[55]),L=h(L,N,T,M,v,6,a[56]),M=h(M,L,N,T,A,10,a[57]),T=h(T,M,L,N,_,15,a[58]),N=h(N,T,M,L,w,21,a[59]),L=h(L,N,T,M,g,6,a[60]),M=h(M,L,N,T,S,10,a[61]),T=h(T,M,L,N,p,15,a[62]),N=h(N,T,M,L,E,21,a[63]),// Intermediate hash value
i[0]=i[0]+L|0,i[1]=i[1]+N|0,i[2]=i[2]+T|0,i[3]=i[3]+M|0},_doFinalize:function(){// Shortcuts
var t=this._data,n=t.words,r=8*this._nDataBytes,o=8*t.sigBytes;// Add padding
n[o>>>5]|=128<<24-o%32;var i=e.floor(r/4294967296),s=r;n[15+(o+64>>>9<<4)]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),n[14+(o+64>>>9<<4)]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),t.sigBytes=4*(n.length+1),// Hash final blocks
this._process();// Swap endian
for(// Shortcuts
var a=this._hash,u=a.words,c=0;c<4;c++){// Shortcut
var l=u[c];u[c]=16711935&(l<<8|l>>>24)|4278255360&(l<<24|l>>>8)}// Return final computed hash
return a},clone:function(){var e=i.clone.call(this);return e._hash=this._hash.clone(),e}});function c(e,t,n,r,o,i,s){var a=e+(t&n|~t&r)+o+s;return(a<<i|a>>>32-i)+t}function l(e,t,n,r,o,i,s){var a=e+(t&r|n&~r)+o+s;return(a<<i|a>>>32-i)+t}function f(e,t,n,r,o,i,s){var a=e+(t^n^r)+o+s;return(a<<i|a>>>32-i)+t}function h(e,t,n,r,o,i,s){var a=e+(n^(t|~r))+o+s;return(a<<i|a>>>32-i)+t}
/**
      		     * Shortcut function to the hasher's object interface.
      		     *
      		     * @param {WordArray|string} message The message to hash.
      		     *
      		     * @return {WordArray} The hash.
      		     *
      		     * @static
      		     *
      		     * @example
      		     *
      		     *     var hash = CryptoJS.MD5('message');
      		     *     var hash = CryptoJS.MD5(wordArray);
      		     */t.MD5=i._createHelper(u),
/**
      		     * Shortcut function to the HMAC's object interface.
      		     *
      		     * @param {WordArray|string} message The message to hash.
      		     * @param {WordArray|string} key The secret key.
      		     *
      		     * @return {WordArray} The HMAC.
      		     *
      		     * @static
      		     *
      		     * @example
      		     *
      		     *     var hmac = CryptoJS.HmacMD5(message, key);
      		     */
t.HmacMD5=i._createHmacHelper(u)}(Math),n.MD5)}(x),e("e",x.exports);var B={exports:{}},G={exports:{}},W=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},H=W,Y=Object.prototype.toString,V=function(e){// eslint-disable-next-line func-names
return function(t){var n=Y.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())}}(Object.create(null));function z(e){return e=e.toLowerCase(),function(t){return V(t)===e}}
/**
       * Determine if a value is an Array
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an Array, otherwise false
       */function X(e){return Array.isArray(e)}
/**
       * Determine if a value is undefined
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if the value is undefined, otherwise false
       */function K(e){return void 0===e}
/**
       * Determine if a value is a Buffer
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Buffer, otherwise false
       */
/**
       * Determine if a value is an ArrayBuffer
       *
       * @function
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an ArrayBuffer, otherwise false
       */
var q=z("ArrayBuffer");
/**
       * Determine if a value is a view on an ArrayBuffer
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
       */
/**
       * Determine if a value is an Object
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an Object, otherwise false
       */
function J(e){return null!==e&&"object"==typeof e}
/**
       * Determine if a value is a plain Object
       *
       * @param {Object} val The value to test
       * @return {boolean} True if value is a plain Object, otherwise false
       */function Q(e){if("object"!==V(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}
/**
       * Determine if a value is a Date
       *
       * @function
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Date, otherwise false
       */var Z=z("Date"),ee=z("File"),te=z("Blob"),ne=z("FileList");
/**
       * Determine if a value is a File
       *
       * @function
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a File, otherwise false
       */
/**
       * Determine if a value is a Function
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Function, otherwise false
       */
function re(e){return"[object Function]"===Y.call(e)}
/**
       * Determine if a value is a Stream
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Stream, otherwise false
       */
/**
       * Determine if a value is a URLSearchParams object
       * @function
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a URLSearchParams object, otherwise false
       */
var oe=z("URLSearchParams");
/**
       * Trim excess whitespace off the beginning and end of a string
       *
       * @param {String} str The String to trim
       * @returns {String} The String freed of excess whitespace
       */
/**
       * Iterate over an Array or an Object invoking a function for each item.
       *
       * If `obj` is an Array callback will be called passing
       * the value, index, and complete array for each item.
       *
       * If 'obj' is an Object callback will be called passing
       * the value, key, and complete object for each property.
       *
       * @param {Object|Array} obj The object to iterate
       * @param {Function} fn The callback to invoke for each item
       */
function ie(e,t){// Don't bother if no value provided
if(null!=e)if(// Force an array if not already something iterable
"object"!=typeof e&&(/*eslint no-param-reassign:0*/e=[e]),X(e))// Iterate over array values
for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else// Iterate over object keys
for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}
/**
       * Accepts varargs expecting each argument to be an object, then
       * immutably merges the properties of each object and returns result.
       *
       * When multiple objects contain the same key the later object in
       * the arguments list will take precedence.
       *
       * Example:
       *
       * ```js
       * var result = merge({foo: 123}, {foo: 456});
       * console.log(result.foo); // outputs 456
       * ```
       *
       * @param {Object} obj1 Object to merge
       * @returns {Object} Result of all merge properties
       */ // eslint-disable-next-line func-names
var se,ae=(se="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return se&&e instanceof se}),ue={isArray:X,isArrayBuffer:q,isBuffer:function(e){return null!==e&&!K(e)&&null!==e.constructor&&!K(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:
/**
       * Determine if a value is a FormData
       *
       * @param {Object} thing The value to test
       * @returns {boolean} True if value is an FormData, otherwise false
       */
function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||Y.call(e)===t||re(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&q(e.buffer)}
/**
       * Determine if a value is a String
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a String, otherwise false
       */,isString:function(e){return"string"==typeof e}
/**
       * Determine if a value is a Number
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Number, otherwise false
       */,isNumber:function(e){return"number"==typeof e},isObject:J,isPlainObject:Q,isUndefined:K,isDate:Z,isFile:ee,isBlob:te,isFunction:re,isStream:function(e){return J(e)&&re(e.pipe)},isURLSearchParams:oe,isStandardBrowserEnv:
/**
       * Determine if we're running in a standard browser environment
       *
       * This allows axios to run in a web worker, and react-native.
       * Both environments support XMLHttpRequest, but not fully standard globals.
       *
       * web workers:
       *  typeof window -> undefined
       *  typeof document -> undefined
       *
       * react-native:
       *  navigator.product -> 'ReactNative'
       * nativescript
       *  navigator.product -> 'NativeScript' or 'NS'
       */
function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:ie,merge:function/* obj1, obj2, obj3, ... */e(){var t={};function n(n,r){Q(t[r])&&Q(n)?t[r]=e(t[r],n):Q(n)?t[r]=e({},n):X(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)ie(arguments[r],n);return t}
/**
       * Extends object a by mutably adding to it the properties of object b.
       *
       * @param {Object} a The object to be extended
       * @param {Object} b The object to copy properties from
       * @param {Object} thisArg The object to bind function to
       * @return {Object} The resulting value of object a
       */,extend:function(e,t,n){return ie(t,(function(t,r){e[r]=n&&"function"==typeof t?H(t,n):t})),e}
/**
       * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
       *
       * @param {string} content with BOM
       * @return {string} content value without BOM
       */,trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}
/**
       * Inherit the prototype methods from one constructor into another
       * @param {function} constructor
       * @param {function} superConstructor
       * @param {object} [props]
       * @param {object} [descriptors]
       */,inherits:function(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)}
/**
       * Resolve object with deep prototype chain to a flat object
       * @param {Object} sourceObj source object
       * @param {Object} [destObj]
       * @param {Function} [filter]
       * @returns {Object}
       */,toFlatObject:function(e,t,n){var r,o,i,s={};t=t||{};do{for(o=(r=Object.getOwnPropertyNames(e)).length;o-- >0;)s[i=r[o]]||(t[i]=e[i],s[i]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t}
/*
       * determines whether a string ends with the characters of a specified string
       * @param {String} str
       * @param {String} searchString
       * @param {Number} [position= 0]
       * @returns {boolean}
       */,kindOf:V,kindOfTest:z,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return-1!==r&&r===n}
/**
       * Returns new array from array like object
       * @param {*} [thing]
       * @returns {Array}
       */,toArray:function(e){if(!e)return null;var t=e.length;if(K(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},isTypedArray:ae,isFileList:ne},ce=ue;function le(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}
/**
       * Build a URL by appending params to the end
       *
       * @param {string} url The base of the url (e.g., http://www.google.com)
       * @param {object} [params] The params to be appended
       * @returns {string} The formatted url
       */var fe=function(e,t,n){/*eslint no-param-reassign:0*/if(!t)return e;var r;if(n)r=n(t);else if(ce.isURLSearchParams(t))r=t.toString();else{var o=[];ce.forEach(t,(function(e,t){null!=e&&(ce.isArray(e)?t+="[]":e=[e],ce.forEach(e,(function(e){ce.isDate(e)?e=e.toISOString():ce.isObject(e)&&(e=JSON.stringify(e)),o.push(le(t)+"="+le(e))})))})),r=o.join("&")}if(r){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e},he=ue;function pe(){this.handlers=[]}
/**
       * Add a new interceptor to the stack
       *
       * @param {Function} fulfilled The function to handle `then` for a `Promise`
       * @param {Function} rejected The function to handle `reject` for a `Promise`
       *
       * @return {Number} An ID used to remove interceptor later
       */pe.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},
/**
       * Remove an interceptor from the stack
       *
       * @param {Number} id The ID that was returned by `use`
       */
pe.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},
/**
       * Iterate over all the registered interceptors
       *
       * This method is particularly useful for skipping over any
       * interceptors that may have become `null` calling `eject`.
       *
       * @param {Function} fn The function to call for each interceptor
       */
pe.prototype.forEach=function(e){he.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var de=pe,ge=ue,me=ue;
/**
       * Create an Error with the specified message, config, error code, request and response.
       *
       * @param {string} message The error message.
       * @param {string} [code] The error code (for example, 'ECONNABORTED').
       * @param {Object} [config] The config.
       * @param {Object} [request] The request.
       * @param {Object} [response] The response.
       * @returns {Error} The created error.
       */
function _e(e,t,n,r,o){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}me.inherits(_e,Error,{toJSON:function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var ye=_e.prototype,ve={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){ve[e]={value:e}})),Object.defineProperties(_e,ve),Object.defineProperty(ye,"isAxiosError",{value:!0}),// eslint-disable-next-line func-names
_e.from=function(e,t,n,r,o,i){var s=Object.create(ye);return me.toFlatObject(e,s,(function(e){return e!==Error.prototype})),_e.call(s,e.message,t,n,r,o),s.name=e.name,i&&Object.assign(s,i),s};var Ee,be,Se,Oe,we=_e,Ce={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ae=ue,Le=
/**
       * Convert a data object to FormData
       * @param {Object} obj
       * @param {?Object} [formData]
       * @returns {Object}
       **/
function(e,t){// eslint-disable-next-line no-param-reassign
t=t||new FormData;var n=[];function r(e){return null===e?"":Ae.isDate(e)?e.toISOString():Ae.isArrayBuffer(e)||Ae.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}return function e(o,i){if(Ae.isPlainObject(o)||Ae.isArray(o)){if(-1!==n.indexOf(o))throw Error("Circular reference detected in "+i);n.push(o),Ae.forEach(o,(function(n,o){if(!Ae.isUndefined(n)){var s,a=i?i+"."+o:o;if(n&&!i&&"object"==typeof n)if(Ae.endsWith(o,"{}"))// eslint-disable-next-line no-param-reassign
n=JSON.stringify(n);else if(Ae.endsWith(o,"[]")&&(s=Ae.toArray(n)))// eslint-disable-next-line func-names
return void s.forEach((function(e){!Ae.isUndefined(e)&&t.append(a,r(e))}));e(n,a)}})),n.pop()}else t.append(i,r(o))}(e),t};function Ne(){if(be)return Ee;be=1;var e=we;
/**
      	 * Resolve or reject a Promise based on response status.
      	 *
      	 * @param {Function} resolve A function that resolves the promise.
      	 * @param {Function} reject A function that rejects the promise.
      	 * @param {object} response The response.
      	 */return Ee=function(t,n,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?n(new e("Request failed with status code "+r.status,[e.ERR_BAD_REQUEST,e.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):t(r)}}function Te(){if(Oe)return Se;Oe=1;var e=ue;return Se=e.isStandardBrowserEnv()?{write:function(t,n,r,o,i,s){var a=[];a.push(t+"="+encodeURIComponent(n)),e.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),e.isString(o)&&a.push("path="+o),e.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}}
/**
       * Determines whether the specified URL is absolute
       *
       * @param {string} url The URL to test
       * @returns {boolean} True if the specified URL is absolute, otherwise false
       */var Me,Re,ke,De,Pe,xe,Ie,$e,Ue,je,Fe,Be,Ge=function(e){// A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
// RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
// by any combination of letters, digits, plus, period, or hyphen.
return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},We=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},He=function(e,t){return e&&!Ge(t)?We(e,t):t};
/**
       * Creates a new URL by combining the specified URLs
       *
       * @param {string} baseURL The base URL
       * @param {string} relativeURL The relative URL
       * @returns {string} The combined URL
       */function Ye(){if(Re)return Me;Re=1;var e=ue,t=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
/**
      	 * Parse headers into an object
      	 *
      	 * ```
      	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
      	 * Content-Type: application/json
      	 * Connection: keep-alive
      	 * Transfer-Encoding: chunked
      	 * ```
      	 *
      	 * @param {String} headers Headers needing to be parsed
      	 * @returns {Object} Headers parsed into an object
      	 */return Me=function(n){var r,o,i,s={};return n?(e.forEach(n.split("\n"),(function(n){if(i=n.indexOf(":"),r=e.trim(n.substr(0,i)).toLowerCase(),o=e.trim(n.substr(i+1)),r){if(s[r]&&t.indexOf(r)>=0)return;s[r]="set-cookie"===r?(s[r]?s[r]:[]).concat([o]):s[r]?s[r]+", "+o:o}})),s):s}}function Ve(){if(De)return ke;De=1;var e=ue;return ke=e.isStandardBrowserEnv()?// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function(){var t,n=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");
/**
      	    * Parse a URL to discover it's components
      	    *
      	    * @param {String} url The URL to be parsed
      	    * @returns {Object}
      	    */
function o(e){var t=e;// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
return n&&(// IE needs attribute set twice to normalize properties
r.setAttribute("href",t),t=r.href),r.setAttribute("href",t),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}
/**
      	    * Determine if a URL shares the same origin as the current location
      	    *
      	    * @param {String} requestURL The URL to test
      	    * @returns {boolean} True if URL shares the same origin, otherwise false
      	    */
return t=o(window.location.href),function(n){var r=e.isString(n)?o(n):n;return r.protocol===t.protocol&&r.host===t.host}}():function(){return!0}}function ze(){if(xe)return Pe;xe=1;var e=we;
/**
      	 * A `CanceledError` is an object that is thrown when an operation is canceled.
      	 *
      	 * @class
      	 * @param {string=} message The message.
      	 */
function t(t){// eslint-disable-next-line no-eq-null,eqeqeq
e.call(this,null==t?"canceled":t,e.ERR_CANCELED),this.name="CanceledError"}return ue.inherits(t,e,{__CANCEL__:!0}),Pe=t}function Xe(){return $e?Ie:($e=1,Ie=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""})}function Ke(){if(je)return Ue;je=1;var e=ue,t=Ne(),n=Te(),r=fe,o=He,i=Ye(),s=Ve(),a=Ce,u=we,c=ze(),l=Xe();return Ue=function(f){return new Promise((function(h,p){var d,g=f.data,m=f.headers,_=f.responseType;function y(){f.cancelToken&&f.cancelToken.unsubscribe(d),f.signal&&f.signal.removeEventListener("abort",d)}e.isFormData(g)&&e.isStandardBrowserEnv()&&delete m["Content-Type"];var v=new XMLHttpRequest;// HTTP basic authentication
if(f.auth){var E=f.auth.username||"",b=f.auth.password?unescape(encodeURIComponent(f.auth.password)):"";m.Authorization="Basic "+btoa(E+":"+b)}var S=o(f.baseURL,f.url);function O(){if(v){// Prepare the response
var e="getAllResponseHeaders"in v?i(v.getAllResponseHeaders()):null,n={data:_&&"text"!==_&&"json"!==_?v.response:v.responseText,status:v.status,statusText:v.statusText,headers:e,config:f,request:v};t((function(e){h(e),y()}),(function(e){p(e),y()}),n),// Clean up request
v=null}}// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(v.open(f.method.toUpperCase(),r(S,f.params,f.paramsSerializer),!0),// Set the request timeout in MS
v.timeout=f.timeout,"onloadend"in v?// Use onloadend if available
v.onloadend=O:// Listen for ready state to emulate onloadend
v.onreadystatechange=function(){v&&4===v.readyState&&(0!==v.status||v.responseURL&&0===v.responseURL.indexOf("file:"))&&// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(O);// The request errored out and we didn't get a response, this will be
// handled by onerror instead
// With one exception: request that using file: protocol, most browsers
// will return status as 0 even though it's a successful request
},// Handle browser request cancellation (as opposed to a manual cancellation)
v.onabort=function(){v&&(p(new u("Request aborted",u.ECONNABORTED,f,v)),// Clean up request
v=null)},// Handle low level network errors
v.onerror=function(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
p(new u("Network Error",u.ERR_NETWORK,f,v,v)),// Clean up request
v=null},// Handle timeout
v.ontimeout=function(){var e=f.timeout?"timeout of "+f.timeout+"ms exceeded":"timeout exceeded",t=f.transitional||a;f.timeoutErrorMessage&&(e=f.timeoutErrorMessage),p(new u(e,t.clarifyTimeoutError?u.ETIMEDOUT:u.ECONNABORTED,f,v)),// Clean up request
v=null},e.isStandardBrowserEnv()){// Add xsrf header
var w=(f.withCredentials||s(S))&&f.xsrfCookieName?n.read(f.xsrfCookieName):void 0;w&&(m[f.xsrfHeaderName]=w)}// Add headers to the request
"setRequestHeader"in v&&e.forEach(m,(function(e,t){void 0===g&&"content-type"===t.toLowerCase()?// Remove Content-Type if data is undefined
delete m[t]:// Otherwise add header to the request
v.setRequestHeader(t,e)})),// Add withCredentials to request if needed
e.isUndefined(f.withCredentials)||(v.withCredentials=!!f.withCredentials),// Add responseType to request if needed
_&&"json"!==_&&(v.responseType=f.responseType),// Handle progress if needed
"function"==typeof f.onDownloadProgress&&v.addEventListener("progress",f.onDownloadProgress),// Not all browsers support upload events
"function"==typeof f.onUploadProgress&&v.upload&&v.upload.addEventListener("progress",f.onUploadProgress),(f.cancelToken||f.signal)&&(// Handle cancellation
// eslint-disable-next-line func-names
d=function(e){v&&(p(!e||e&&e.type?new c:e),v.abort(),v=null)},f.cancelToken&&f.cancelToken.subscribe(d),f.signal&&(f.signal.aborted?d():f.signal.addEventListener("abort",d))),g||(g=null);var C=l(S);C&&-1===["http","https","file"].indexOf(C)?p(new u("Unsupported protocol "+C+":",u.ERR_BAD_REQUEST,f)):// Send the request
v.send(g)}))},Ue}var qe=ue,Je=function(e,t){ge.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))},Qe=we,Ze=Le,et={"Content-Type":"application/x-www-form-urlencoded"};function tt(e,t){!qe.isUndefined(e)&&qe.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var nt,rt={transitional:Ce,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(// For browsers use XHR adapter
nt=Ke()),nt),transformRequest:[function(e,t){if(Je(t,"Accept"),Je(t,"Content-Type"),qe.isFormData(e)||qe.isArrayBuffer(e)||qe.isBuffer(e)||qe.isStream(e)||qe.isFile(e)||qe.isBlob(e))return e;if(qe.isArrayBufferView(e))return e.buffer;if(qe.isURLSearchParams(e))return tt(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,r=qe.isObject(e),o=t&&t["Content-Type"];if((n=qe.isFileList(e))||r&&"multipart/form-data"===o){var i=this.env&&this.env.FormData;return Ze(n?{"files[]":e}:e,i&&new i)}return r||"application/json"===o?(tt(t,"application/json"),function(e,t,n){if(qe.isString(e))try{return(t||JSON.parse)(e),qe.trim(e)}catch(Ao){if("SyntaxError"!==Ao.name)throw Ao}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||rt.transitional,n=t&&t.silentJSONParsing,r=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||r&&qe.isString(e)&&e.length)try{return JSON.parse(e)}catch(Ao){if(o){if("SyntaxError"===Ao.name)throw Qe.from(Ao,Qe.ERR_BAD_RESPONSE,this,null,this.response);throw Ao}}return e}],
/**
         * A timeout in milliseconds to abort a request. If set to 0 (default) a
         * timeout is not created.
         */
timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Be?Fe:(Be=1,// eslint-disable-next-line strict
Fe=null)},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};qe.forEach(["delete","get","head"],(function(e){rt.headers[e]={}})),qe.forEach(["post","put","patch"],(function(e){rt.headers[e]=qe.merge(et)}));var ot,it,st=rt,at=ue,ut=st;function ct(){return it?ot:(it=1,ot=function(e){return!(!e||!e.__CANCEL__)})}var lt=ue,ft=function(e,t,n){var r=this||ut;/*eslint no-param-reassign:0*/return at.forEach(n,(function(n){e=n.call(r,e,t)})),e},ht=ct(),pt=st,dt=ze();
/**
       * Throws a `CanceledError` if cancellation has been requested.
       */
function gt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new dt}
/**
       * Dispatch a request to the server using the configured adapter.
       *
       * @param {object} config The config that is to be used for the request
       * @returns {Promise} The Promise to be fulfilled
       */var mt,_t,yt=ue,vt=function(e,t){// eslint-disable-next-line no-param-reassign
t=t||{};var n={};function r(e,t){return yt.isPlainObject(e)&&yt.isPlainObject(t)?yt.merge(e,t):yt.isPlainObject(t)?yt.merge({},t):yt.isArray(t)?t.slice():t}// eslint-disable-next-line consistent-return
function o(n){return yt.isUndefined(t[n])?yt.isUndefined(e[n])?void 0:r(void 0,e[n]):r(e[n],t[n])}// eslint-disable-next-line consistent-return
function i(e){if(!yt.isUndefined(t[e]))return r(void 0,t[e])}// eslint-disable-next-line consistent-return
function s(n){return yt.isUndefined(t[n])?yt.isUndefined(e[n])?void 0:r(void 0,e[n]):r(void 0,t[n])}// eslint-disable-next-line consistent-return
function a(n){return n in t?r(e[n],t[n]):n in e?r(void 0,e[n]):void 0}var u={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a};return yt.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||o,r=t(e);yt.isUndefined(r)&&t!==a||(n[e]=r)})),n};function Et(){return _t?mt:(_t=1,mt={version:"0.27.2"})}var bt=Et().version,St=we,Ot={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach((function(e,t){Ot[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var wt={};
/**
       * Transitional option validator
       * @param {function|boolean?} validator - set to false if the transitional option has been removed
       * @param {string?} version - deprecated version / removed since version
       * @param {string?} message - some message with additional info
       * @returns {function}
       */Ot.transitional=function(e,t,n){function r(e,t){return"[Axios v"+bt+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}// eslint-disable-next-line func-names
return function(n,o,i){if(!1===e)throw new St(r(o," has been removed"+(t?" in "+t:"")),St.ERR_DEPRECATED);return t&&!wt[o]&&(wt[o]=!0,// eslint-disable-next-line no-console
console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}};var Ct,At,Lt,Nt,Tt,Mt,Rt={assertOptions:
/**
       * Assert object's properties type
       * @param {object} options
       * @param {object} schema
       * @param {boolean?} allowUnknown
       */
function(e,t,n){if("object"!=typeof e)throw new St("options must be an object",St.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(e),o=r.length;o-- >0;){var i=r[o],s=t[i];if(s){var a=e[i],u=void 0===a||s(a,i,e);if(!0!==u)throw new St("option "+i+" must be "+u,St.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new St("Unknown option "+i,St.ERR_BAD_OPTION)}},validators:Ot},kt=ue,Dt=fe,Pt=de,xt=function(e){return gt(e),// Ensure headers exist
e.headers=e.headers||{},// Transform request data
e.data=ft.call(e,e.data,e.headers,e.transformRequest),// Flatten headers
e.headers=lt.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),lt.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||pt.adapter)(e).then((function(t){return gt(e),// Transform response data
t.data=ft.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return ht(t)||(gt(e),// Transform response data
t&&t.response&&(t.response.data=ft.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},It=vt,$t=He,Ut=Rt,jt=Ut.validators;
/**
       * Create a new instance of Axios
       *
       * @param {Object} instanceConfig The default config for the instance
       */
function Ft(e){this.defaults=e,this.interceptors={request:new Pt,response:new Pt}}
/**
       * Dispatch a request
       *
       * @param {Object} config The config specific for this request (merged with this.defaults)
       */Ft.prototype.request=function(e,t){/*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
"string"==typeof e?(t=t||{}).url=e:t=e||{},// Set config.method
(t=It(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&Ut.assertOptions(n,{silentJSONParsing:jt.transitional(jt.boolean),forcedJSONParsing:jt.transitional(jt.boolean),clarifyTimeoutError:jt.transitional(jt.boolean)},!1);// filter out skipped interceptors
var r=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var i,s=[];if(this.interceptors.response.forEach((function(e){s.push(e.fulfilled,e.rejected)})),!o){var a=[xt,void 0];for(Array.prototype.unshift.apply(a,r),a=a.concat(s),i=Promise.resolve(t);a.length;)i=i.then(a.shift(),a.shift());return i}for(var u=t;r.length;){var c=r.shift(),l=r.shift();try{u=c(u)}catch(f){l(f);break}}try{i=xt(u)}catch(f){return Promise.reject(f)}for(;s.length;)i=i.then(s.shift(),s.shift());return i},Ft.prototype.getUri=function(e){e=It(this.defaults,e);var t=$t(e.baseURL,e.url);return Dt(t,e.params,e.paramsSerializer)},// Provide aliases for supported request methods
kt.forEach(["delete","get","head","options"],(function(e){/*eslint func-names:0*/Ft.prototype[e]=function(t,n){return this.request(It(n||{},{method:e,url:t,data:(n||{}).data}))}})),kt.forEach(["post","put","patch"],(function(e){/*eslint func-names:0*/function t(t){return function(n,r,o){return this.request(It(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Ft.prototype[e]=t(),Ft.prototype[e+"Form"]=t(!0)}));var Bt=ue,Gt=W,Wt=Ft,Ht=vt,Yt=
/**
       * Create an instance of Axios
       *
       * @param {Object} defaultConfig The default config for the instance
       * @return {Axios} A new instance of Axios
       */
function e(t){var n=new Wt(t),r=Gt(Wt.prototype.request,n);// Copy axios.prototype to instance
return Bt.extend(r,Wt.prototype,n),// Copy context to instance
Bt.extend(r,n),// Factory for creating new instances
r.create=function(n){return e(Ht(t,n))},r}// Create the default instance to be exported
(st);// Expose Axios class to allow class inheritance
Yt.Axios=Wt,// Expose Cancel & CancelToken
Yt.CanceledError=ze(),Yt.CancelToken=function(){if(At)return Ct;At=1;var e=ze();
/**
      	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
      	 *
      	 * @class
      	 * @param {Function} executor The executor function.
      	 */function t(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var n;this.promise=new Promise((function(e){n=e}));var r=this;// eslint-disable-next-line func-names
this.promise.then((function(e){if(r._listeners){var t,n=r._listeners.length;for(t=0;t<n;t++)r._listeners[t](e);r._listeners=null}})),// eslint-disable-next-line func-names
this.promise.then=function(e){var t,n=new Promise((function(e){r.subscribe(e),t=e})).then(e);// eslint-disable-next-line func-names
return n.cancel=function(){r.unsubscribe(t)},n},t((function(t){r.reason||(r.reason=new e(t),n(r.reason))}))}
/**
      	 * Throws a `CanceledError` if cancellation has been requested.
      	 */return t.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},
/**
      	 * Subscribe to the cancel signal
      	 */
t.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},
/**
      	 * Unsubscribe from the cancel signal
      	 */
t.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},
/**
      	 * Returns an object that contains a new `CancelToken` and a function that, when called,
      	 * cancels the `CancelToken`.
      	 */
t.source=function(){var e;return{token:new t((function(t){e=t})),cancel:e}},Ct=t}(),Yt.isCancel=ct(),Yt.VERSION=Et().version,Yt.toFormData=Le,// Expose AxiosError class
Yt.AxiosError=we,// alias for CanceledError for backward compatibility
Yt.Cancel=Yt.CanceledError,// Expose all/spread
Yt.all=function(e){return Promise.all(e)},Yt.spread=Nt?Lt:(Nt=1,
/**
      	 * Syntactic sugar for invoking a function and expanding an array for arguments.
      	 *
      	 * Common use case would be to use `Function.prototype.apply`.
      	 *
      	 *  ```js
      	 *  function f(x, y, z) {}
      	 *  var args = [1, 2, 3];
      	 *  f.apply(null, args);
      	 *  ```
      	 *
      	 * With `spread` this example can be re-written.
      	 *
      	 *  ```js
      	 *  spread(function(x, y, z) {})([1, 2, 3]);
      	 *  ```
      	 *
      	 * @param {Function} callback
      	 * @returns {Function}
      	 */
Lt=function(e){return function(t){return e.apply(null,t)}}),// Expose isAxiosError
Yt.isAxiosError=function(){if(Mt)return Tt;Mt=1;var e=ue;
/**
      	 * Determines whether the payload is an error thrown by Axios
      	 *
      	 * @param {*} payload The value to test
      	 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
      	 */return Tt=function(t){return e.isObject(t)&&!0===t.isAxiosError}}(),G.exports=Yt,// Allow use of default import syntax in TypeScript
G.exports.default=Yt,function(e){e.exports=G.exports}(B),e("f",o(B.exports));
/**
       * Vue3 Cookies v1.0.0
       *
       * Forked from
       * https://github.com/cmp-cc/vue-cookies
       * And changed format to support Vue.js 3
       *
       */
var Vt={expireTimes:"1d",path:"; path=/",domain:"",secure:!1,sameSite:"; SameSite=Lax"},zt=/** @class */function(){function e(){this.current_default_config=Vt}return e.prototype.config=function(e){for(var t in this.current_default_config)this.current_default_config[t]=e[t]?e[t]:Vt[t]},e.prototype.get=function(e){var t=decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null;if(t&&"{"===t.substring(0,1)&&"}"===t.substring(t.length-1,t.length))try{t=JSON.parse(t)}catch(Ao){return t}return t},e.prototype.set=function(e,t,n,r,o,i,s){if(!e)throw new Error("Cookie name is not found in the first argument.");// support json object
if(/^(?:expires|max-age|path|domain|secure|SameSite)$/i.test(e))throw new Error('Cookie name illegality. Cannot be set to ["expires","max-age","path","domain","secure","SameSite"]\t current key name: '+e);t&&t.constructor===Object&&(t=JSON.stringify(t));var a="";if(null==n&&(n=this.current_default_config.expireTimes?this.current_default_config.expireTimes:""),n&&0!=n)switch(n.constructor){case Number:a=n===1/0||-1===n?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+n;break;case String:if(/^(?:\d+(y|m|d|h|min|s))$/i.test(n)){// get capture number group
var u=n.replace(/^(\d+)(?:y|m|d|h|min|s)$/i,"$1");// get capture type group , to lower case
switch(n.replace(/^(?:\d+)(y|m|d|h|min|s)$/i,"$1").toLowerCase()){// Frequency sorting
case"m":a="; max-age="+2592e3*+u;break;// 60 * 60 * 24 * 30
case"d":a="; max-age="+86400*+u;break;// 60 * 60 * 24
case"h":a="; max-age="+3600*+u;break;// 60 * 60
case"min":a="; max-age="+60*+u;break;// 60
case"s":a="; max-age="+u;break;case"y":a="; max-age="+31104e3*+u;// 60 * 60 * 24 * 30 * 12
}}else a="; expires="+n;break;case Date:a="; expires="+n.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+a+(o?"; domain="+o:this.current_default_config.domain?this.current_default_config.domain:"")+(r?"; path="+r:this.current_default_config.path?this.current_default_config.path:"; path=/")+(null==i?this.current_default_config.secure?"; Secure":"":i?"; Secure":"")+(null==s?this.current_default_config.sameSite?"; SameSute="+this.current_default_config.sameSite:"":s?"; SameSite="+s:""),this},e.prototype.remove=function(e,t,n){return!(!e||!this.isKey(e)||(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(n?"; domain="+n:this.current_default_config.domain?this.current_default_config.domain:"")+(t?"; path="+t:this.current_default_config.path?this.current_default_config.path:"; path=/")+"; SameSite=Lax",0))},e.prototype.isKey=function(e){return new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},e.prototype.keys=function(){if(!document.cookie)return[];for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),t=0;t<e.length;t++)e[t]=decodeURIComponent(e[t]);return e},e}(),Xt=null,Kt=e("s",{exports:{}}),qt={};
/*!
        * shared v9.2.2
        * (c) 2022 kazuya kawaguchi
        * Released under the MIT License.
        */
Object.defineProperty(qt,"__esModule",{value:!0});
/**
       * Original Utilities
       * written by kazuya kawaguchi
       */
const Jt="undefined"!=typeof window,Qt=/\{([0-9a-zA-Z]+)\}/g,Zt="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,en=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),tn=Object.assign;let nn;const rn=Object.prototype.hasOwnProperty,on=Array.isArray,sn=e=>"function"==typeof e,an=e=>// eslint-disable-line
null!==e&&"object"==typeof e,un=Object.prototype.toString,cn=e=>un.call(e),ln=e=>"[object Object]"===cn(e)// for converting list and named values to displayed strings.;
qt.assign=tn,qt.createEmitter=
/**
       * Event emitter, forked from the below:
       * - original repository url: https://github.com/developit/mitt
       * - code url: https://github.com/developit/mitt/blob/master/src/index.ts
       * - author: Jason Miller (https://github.com/developit)
       * - license: MIT
       */
/**
       * Create a event emitter
       *
       * @returns An event emitter
       */
function(){const e=new Map;return{events:e,on(t,n){const r=e.get(t);r&&r.push(n)||e.set(t,[n])},off(t,n){const r=e.get(t);r&&r.splice(r.indexOf(n)>>>0,1)},emit(t,n){(e.get(t)||[]).slice().map((e=>e(n))),(e.get("*")||[]).slice().map((e=>e(t,n)))}}},qt.escapeHtml=function(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")},qt.format=/* eslint-disable */function(e,...t){return 1===t.length&&an(t[0])&&(t=t[0]),t&&t.hasOwnProperty||(t={}),e.replace(Qt,((e,n)=>t.hasOwnProperty(n)?t[n]:""))},qt.friendlyJSONstringify=en,qt.generateCodeFrame=function(e,t=0,n=e.length){const r=e.split(/\r?\n/);let o=0;const i=[];for(let s=0;s<r.length;s++)if(o+=r[s].length+1,o>=t){for(let e=s-2;e<=s+2||n>o;e++){if(e<0||e>=r.length)continue;const a=e+1;i.push(`${a}${" ".repeat(3-String(a).length)}|  ${r[e]}`);const u=r[e].length;if(e===s){// push underline
const e=t-(o-u)+1,r=Math.max(1,n>o?u-e:n-t);i.push("   |  "+" ".repeat(e)+"^".repeat(r))}else if(e>s){if(n>o){const e=Math.max(Math.min(n-o,u),1);i.push("   |  "+"^".repeat(e))}o+=u+1}}break}return i.join("\n")},qt.generateFormatCacheKey=(e,t,n)=>en({l:e,k:t,s:n}),qt.getGlobalThis=()=>nn||(nn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n?n:{}),qt.hasOwn=function(e,t){return rn.call(e,t)}/* eslint-enable */
/**
       * Useful Utilities By Evan you
       * Modified by kazuya kawaguchi
       * MIT License
       * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/index.ts
       * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/codeframe.ts
       */,qt.inBrowser=Jt,qt.isArray=on,qt.isBoolean=e=>"boolean"==typeof e,qt.isDate=e=>"[object Date]"===cn(e),qt.isEmptyObject=e=>ln(e)&&0===Object.keys(e).length,qt.isFunction=sn,qt.isNumber=e=>"number"==typeof e&&isFinite(e),qt.isObject=an,qt.isPlainObject=ln,qt.isPromise=e=>an(e)&&sn(e.then)&&sn(e.catch),qt.isRegExp=e=>"[object RegExp]"===cn(e),qt.isString=e=>"string"==typeof e,qt.isSymbol=e=>"symbol"==typeof e,qt.makeSymbol=e=>Zt?Symbol(e):e,qt.mark=void 0,qt.measure=void 0,qt.objectToString=un,qt.toDisplayString=e=>null==e?"":on(e)||ln(e)&&e.toString===un?JSON.stringify(e,null,2):String(e),qt.toTypeString=cn,qt.warn=function(e,t){"undefined"!=typeof console&&(console.warn("[intlify] "+e),/* istanbul ignore if */t&&console.warn(t.stack))},function(e){e.exports=qt}(Kt);var fn=e("c",{exports:{}}),hn={},pn={exports:{}},dn={},gn={},mn={},_n={},yn={},vn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
/**
       * Encode an integer in the range of 0 to 63 to a single base 64 digit.
       */
yn.encode=function(e){if(0<=e&&e<vn.length)return vn[e];throw new TypeError("Must be between 0 and 63: "+e)},
/**
       * Decode a single base 64 character code digit to an integer. Returns -1 on
       * failure.
       */
yn.decode=function(e){// 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
return 65<=e&&e<=90?e-65:// 26 - 51: abcdefghijklmnopqrstuvwxyz
97<=e&&e<=122?e-97+26:// 52 - 61: 0123456789
48<=e&&e<=57?e-48+52:// 62: +
43==e?62:// 63: /
47==e?63:-1};/* -*- Mode: js; js-indent-level: 2; -*- */
/*
       * Copyright 2011 Mozilla Foundation and contributors
       * Licensed under the New BSD license. See LICENSE or:
       * http://opensource.org/licenses/BSD-3-Clause
       *
       * Based on the Base 64 VLQ implementation in Closure Compiler:
       * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
       *
       * Copyright 2011 The Closure Compiler Authors. All rights reserved.
       * Redistribution and use in source and binary forms, with or without
       * modification, are permitted provided that the following conditions are
       * met:
       *
       *  * Redistributions of source code must retain the above copyright
       *    notice, this list of conditions and the following disclaimer.
       *  * Redistributions in binary form must reproduce the above
       *    copyright notice, this list of conditions and the following
       *    disclaimer in the documentation and/or other materials provided
       *    with the distribution.
       *  * Neither the name of Google Inc. nor the names of its
       *    contributors may be used to endorse or promote products derived
       *    from this software without specific prior written permission.
       *
       * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
       * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
       * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
       * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
       * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
       * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
       * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
       * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
       * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
       * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
       * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
       */
var En=yn;// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.

//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011
/**
       * Returns the base 64 VLQ encoded value.
       */
_n.encode=function(e){var t,n="",r=
/**
       * Converts from a two-complement value to a value where the sign bit is
       * placed in the least significant bit.  For example, as decimals:
       *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
       *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
       */
function(e){return e<0?1+(-e<<1):0+(e<<1)}
/**
       * Converts to a two-complement value from a value where the sign bit is
       * placed in the least significant bit.  For example, as decimals:
       *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
       *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
       */(e);do{t=31&r,(r>>>=5)>0&&(// There are still more digits in this value, so we must make sure the
// continuation bit is marked.
t|=32),n+=En.encode(t)}while(r>0);return n},
/**
       * Decodes the next base 64 VLQ value from the given string and returns the
       * value and the rest of the string via the out parameter.
       */
_n.decode=function(e,t,n){var r,o,i,s,a=e.length,u=0,c=0;do{if(t>=a)throw new Error("Expected more digits in base 64 VLQ value.");if(-1===(o=En.decode(e.charCodeAt(t++))))throw new Error("Invalid base64 digit: "+e.charAt(t-1));r=!!(32&o),u+=(o&=31)<<c,c+=5}while(r);n.value=(s=(i=u)>>1,1==(1&i)?-s:s),n.rest=t};var bn={};/* -*- Mode: js; js-indent-level: 2; -*- */!function(e){e.getArg=
/*
      	 * Copyright 2011 Mozilla Foundation and contributors
      	 * Licensed under the New BSD license. See LICENSE or:
      	 * http://opensource.org/licenses/BSD-3-Clause
      	 */
/**
      	 * This is a helper function for getting values from parameter/options
      	 * objects.
      	 *
      	 * @param args The object we are extracting values from
      	 * @param name The name of the property we are getting.
      	 * @param defaultValue An optional value to return if the property is missing
      	 * from the object. If this is not specified and the property is missing, an
      	 * error will be thrown.
      	 */
function(e,t,n){if(t in e)return e[t];if(3===arguments.length)return n;throw new Error('"'+t+'" is a required argument.')};var t=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,n=/^data:.+\,.+$/;function r(e){var n=e.match(t);return n?{scheme:n[1],auth:n[2],host:n[3],port:n[4],path:n[5]}:null}function o(e){var t="";return e.scheme&&(t+=e.scheme+":"),t+="//",e.auth&&(t+=e.auth+"@"),e.host&&(t+=e.host),e.port&&(t+=":"+e.port),e.path&&(t+=e.path),t}
/**
      	 * Normalizes a path, or the path portion of a URL:
      	 *
      	 * - Replaces consecutive slashes with one slash.
      	 * - Removes unnecessary '.' parts.
      	 * - Removes unnecessary '<dir>/..' parts.
      	 *
      	 * Based on code in the Node.js 'path' core module.
      	 *
      	 * @param aPath The path or url to normalize.
      	 */
function i(t){var n=t,i=r(t);if(i){if(!i.path)return t;n=i.path}for(var s,a=e.isAbsolute(n),u=n.split(/\/+/),c=0,l=u.length-1;l>=0;l--)"."===(s=u[l])?u.splice(l,1):".."===s?c++:c>0&&(""===s?(// The first part is blank if the path is absolute. Trying to go
// above the root is a no-op. Therefore we can remove all '..' parts
// directly after the root.
u.splice(l+1,c),c=0):(u.splice(l,2),c--));return""===(n=u.join("/"))&&(n=a?"/":"."),i?(i.path=n,o(i)):n}
/**
      	 * Joins two paths/URLs.
      	 *
      	 * @param aRoot The root path or URL.
      	 * @param aPath The path or URL to be joined with the root.
      	 *
      	 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
      	 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
      	 *   first.
      	 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
      	 *   is updated with the result and aRoot is returned. Otherwise the result
      	 *   is returned.
      	 *   - If aPath is absolute, the result is aPath.
      	 *   - Otherwise the two paths are joined with a slash.
      	 * - Joining for example 'http://' and 'www.example.com' is also supported.
      	 */
function s(e,t){""===e&&(e="."),""===t&&(t=".");var s=r(t),a=r(e);// `join(foo, '//www.example.org')`
if(a&&(e=a.path||"/"),s&&!s.scheme)return a&&(s.scheme=a.scheme),o(s);if(s||t.match(n))return t;// `join('http://', 'www.example.com')`
if(a&&!a.host&&!a.path)return a.host=t,o(a);var u="/"===t.charAt(0)?t:i(e.replace(/\/+$/,"")+"/"+t);return a?(a.path=u,o(a)):u}e.urlParse=r,e.urlGenerate=o,e.normalize=i,e.join=s,e.isAbsolute=function(e){return"/"===e.charAt(0)||t.test(e)},e.relative=
/**
      	 * Make a path relative to a URL or another path.
      	 *
      	 * @param aRoot The root path or URL.
      	 * @param aPath The path or URL to be made relative to aRoot.
      	 */
function(e,t){""===e&&(e="."),e=e.replace(/\/$/,"");for(// It is possible for the path to be above the root. In this case, simply
// checking whether the root is a prefix of the path won't work. Instead, we
// need to remove components from the root one by one, until either we find
// a prefix that fits, or we run out of components to remove.
var n=0;0!==t.indexOf(e+"/");){var r=e.lastIndexOf("/");if(r<0)return t;// If the only part of the root that is left is the scheme (i.e. http://,
// file:///, etc.), one or more slashes (/), or simply nothing at all, we
// have exhausted all components, so the path is not relative to the root.
if((e=e.slice(0,r)).match(/^([^\/]+:\/)?\/*$/))return t;++n}// Make sure we add a "../" for each component we removed from the root.
return Array(n+1).join("../")+t.substr(e.length+1)};var a=!("__proto__"in Object.create(null));function u(e){return e}
/**
      	 * Because behavior goes wacky when you set `__proto__` on objects, we
      	 * have to prefix all the strings in our set with an arbitrary character.
      	 *
      	 * See https://github.com/mozilla/source-map/pull/31 and
      	 * https://github.com/mozilla/source-map/issues/30
      	 *
      	 * @param String aStr
      	 */function c(e){if(!e)return!1;var t=e.length;if(t<9/* "__proto__".length */)return!1;if(95/* '_' */!==e.charCodeAt(t-1)||95/* '_' */!==e.charCodeAt(t-2)||111/* 'o' */!==e.charCodeAt(t-3)||116/* 't' */!==e.charCodeAt(t-4)||111/* 'o' */!==e.charCodeAt(t-5)||114/* 'r' */!==e.charCodeAt(t-6)||112/* 'p' */!==e.charCodeAt(t-7)||95/* '_' */!==e.charCodeAt(t-8)||95/* '_' */!==e.charCodeAt(t-9))return!1;for(var n=t-10;n>=0;n--)if(36/* '$' */!==e.charCodeAt(n))return!1;return!0}
/**
      	 * Comparator between two mappings where the original positions are compared.
      	 *
      	 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
      	 * mappings with the same original source/line/column, but different generated
      	 * line and column the same. Useful when searching for a mapping with a
      	 * stubbed out mapping.
      	 */function l(e,t){return e===t?0:null===e?1:null===t?-1:e>t?1:-1}
/**
      	 * Comparator between two mappings with inflated source and name strings where
      	 * the generated positions are compared.
      	 */e.toSetString=a?u:function(e){return c(e)?"$"+e:e},e.fromSetString=a?u:function(e){return c(e)?e.slice(1):e},e.compareByOriginalPositions=function(e,t,n){var r=l(e.source,t.source);return 0!==r||0!=(r=e.originalLine-t.originalLine)||0!=(r=e.originalColumn-t.originalColumn)||n||0!=(r=e.generatedColumn-t.generatedColumn)||0!=(r=e.generatedLine-t.generatedLine)?r:l(e.name,t.name)},e.compareByGeneratedPositionsDeflated=
/**
      	 * Comparator between two mappings with deflated source and name indices where
      	 * the generated positions are compared.
      	 *
      	 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
      	 * mappings with the same generated line and column, but different
      	 * source/name/original line and column the same. Useful when searching for a
      	 * mapping with a stubbed out mapping.
      	 */
function(e,t,n){var r=e.generatedLine-t.generatedLine;return 0!==r||0!=(r=e.generatedColumn-t.generatedColumn)||n||0!==(r=l(e.source,t.source))||0!=(r=e.originalLine-t.originalLine)||0!=(r=e.originalColumn-t.originalColumn)?r:l(e.name,t.name)},e.compareByGeneratedPositionsInflated=function(e,t){var n=e.generatedLine-t.generatedLine;return 0!==n||0!=(n=e.generatedColumn-t.generatedColumn)||0!==(n=l(e.source,t.source))||0!=(n=e.originalLine-t.originalLine)||0!=(n=e.originalColumn-t.originalColumn)?n:l(e.name,t.name)},e.parseSourceMapInput=
/**
      	 * Strip any JSON XSSI avoidance prefix from the string (as documented
      	 * in the source maps specification), and then parse the string as
      	 * JSON.
      	 */
function(e){return JSON.parse(e.replace(/^\)]}'[^\n]*\n/,""))},e.computeSourceURL=
/**
      	 * Compute the URL of a source given the the source root, the source's
      	 * URL, and the source map's URL.
      	 */
function(e,t,n){// Historically, SourceMapConsumer did not take the sourceMapURL as
// a parameter.  This mode is still somewhat supported, which is why
// this code block is conditional.  However, it's preferable to pass
// the source map URL to SourceMapConsumer, so that this function
// can implement the source URL resolution algorithm as outlined in
// the spec.  This block is basically the equivalent of:
//    new URL(sourceURL, sourceMapURL).toString()
// ... except it avoids using URL, which wasn't available in the
// older releases of node still supported by this library.
// The spec says:
//   If the sources are not absolute URLs after prepending of the
//   “sourceRoot”, the sources are resolved relative to the
//   SourceMap (like resolving script src in a html document).
if(t=t||"",e&&(// This follows what Chrome does.
"/"!==e[e.length-1]&&"/"!==t[0]&&(e+="/"),// The spec says:
//   Line 4: An optional source root, useful for relocating source
//   files on a server or removing repeated values in the
//   “sources” entry.  This value is prepended to the individual
//   entries in the “source” field.
t=e+t),n){var a=r(n);if(!a)throw new Error("sourceMapURL could not be parsed");if(a.path){// Strip the last path component, but keep the "/".
var u=a.path.lastIndexOf("/");u>=0&&(a.path=a.path.substring(0,u+1))}t=s(o(a),t)}return i(t)}}(bn);var Sn={},On=bn,wn=Object.prototype.hasOwnProperty,Cn="undefined"!=typeof Map;/* -*- Mode: js; js-indent-level: 2; -*- */
/*
       * Copyright 2011 Mozilla Foundation and contributors
       * Licensed under the New BSD license. See LICENSE or:
       * http://opensource.org/licenses/BSD-3-Clause
       */
/**
       * A data structure which is a combination of an array and a set. Adding a new
       * member is O(1), testing for membership is O(1), and finding the index of an
       * element is O(1). Removing elements from the set is not supported. Only
       * strings are supported for membership.
       */
function An(){this._array=[],this._set=Cn?new Map:Object.create(null)}
/**
       * Static method for creating ArraySet instances from an existing array.
       */An.fromArray=function(e,t){for(var n=new An,r=0,o=e.length;r<o;r++)n.add(e[r],t);return n},
/**
       * Return how many unique items are in this ArraySet. If duplicates have been
       * added, than those do not count towards the size.
       *
       * @returns Number
       */
An.prototype.size=function(){return Cn?this._set.size:Object.getOwnPropertyNames(this._set).length},
/**
       * Add the given string to this set.
       *
       * @param String aStr
       */
An.prototype.add=function(e,t){var n=Cn?e:On.toSetString(e),r=Cn?this.has(e):wn.call(this._set,n),o=this._array.length;r&&!t||this._array.push(e),r||(Cn?this._set.set(e,o):this._set[n]=o)},
/**
       * Is the given string a member of this set?
       *
       * @param String aStr
       */
An.prototype.has=function(e){if(Cn)return this._set.has(e);var t=On.toSetString(e);return wn.call(this._set,t)},
/**
       * What is the index of the given string in the array?
       *
       * @param String aStr
       */
An.prototype.indexOf=function(e){if(Cn){var t=this._set.get(e);if(t>=0)return t}else{var n=On.toSetString(e);if(wn.call(this._set,n))return this._set[n]}throw new Error('"'+e+'" is not in the set.')},
/**
       * What is the element at the given index?
       *
       * @param Number aIdx
       */
An.prototype.at=function(e){if(e>=0&&e<this._array.length)return this._array[e];throw new Error("No element indexed by "+e)},
/**
       * Returns the array representation of this set (which has the proper indices
       * indicated by indexOf). Note that this is a copy of the internal array used
       * for storing the members so that no one can mess with internal state.
       */
An.prototype.toArray=function(){return this._array.slice()},Sn.ArraySet=An;var Ln={},Nn=bn;/* -*- Mode: js; js-indent-level: 2; -*- */
/*
       * Copyright 2014 Mozilla Foundation and contributors
       * Licensed under the New BSD license. See LICENSE or:
       * http://opensource.org/licenses/BSD-3-Clause
       */
/**
       * A data structure to provide a sorted view of accumulated mappings in a
       * performance conscious manner. It trades a neglibable overhead in general
       * case for a large speedup in case of mappings being added in order.
       */
function Tn(){this._array=[],this._sorted=!0,// Serves as infimum
this._last={generatedLine:-1,generatedColumn:0}}
/**
       * Iterate through internal items. This method takes the same arguments that
       * `Array.prototype.forEach` takes.
       *
       * NOTE: The order of the mappings is NOT guaranteed.
       */Tn.prototype.unsortedForEach=function(e,t){this._array.forEach(e,t)},
/**
       * Add the given source mapping.
       *
       * @param Object aMapping
       */
Tn.prototype.add=function(e){
/**
       * Determine whether mappingB is after mappingA with respect to generated
       * position.
       */
var t,n,r,o,i,s;t=this._last,n=e,r=t.generatedLine,o=n.generatedLine,i=t.generatedColumn,s=n.generatedColumn,o>r||o==r&&s>=i||Nn.compareByGeneratedPositionsInflated(t,n)<=0?(this._last=e,this._array.push(e)):(this._sorted=!1,this._array.push(e))},
/**
       * Returns the flat, sorted array of mappings. The mappings are sorted by
       * generated position.
       *
       * WARNING: This method returns internal data without copying, for
       * performance. The return value must NOT be mutated, and should be treated as
       * an immutable borrow. If you want to take ownership, you must make your own
       * copy.
       */
Tn.prototype.toArray=function(){return this._sorted||(this._array.sort(Nn.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},Ln.MappingList=Tn;/* -*- Mode: js; js-indent-level: 2; -*- */
/*
       * Copyright 2011 Mozilla Foundation and contributors
       * Licensed under the New BSD license. See LICENSE or:
       * http://opensource.org/licenses/BSD-3-Clause
       */
var Mn=_n,Rn=bn,kn=Sn.ArraySet,Dn=Ln.MappingList;
/**
       * An instance of the SourceMapGenerator represents a source map which is
       * being built incrementally. You may pass an object with the following
       * properties:
       *
       *   - file: The filename of the generated source.
       *   - sourceRoot: A root for all relative URLs in this source map.
       */
function Pn(e){e||(e={}),this._file=Rn.getArg(e,"file",null),this._sourceRoot=Rn.getArg(e,"sourceRoot",null),this._skipValidation=Rn.getArg(e,"skipValidation",!1),this._sources=new kn,this._names=new kn,this._mappings=new Dn,this._sourcesContents=null}Pn.prototype._version=3,
/**
       * Creates a new SourceMapGenerator based on a SourceMapConsumer
       *
       * @param aSourceMapConsumer The SourceMap.
       */
Pn.fromSourceMap=function(e){var t=e.sourceRoot,n=new Pn({file:e.file,sourceRoot:t});return e.eachMapping((function(e){var r={generated:{line:e.generatedLine,column:e.generatedColumn}};null!=e.source&&(r.source=e.source,null!=t&&(r.source=Rn.relative(t,r.source)),r.original={line:e.originalLine,column:e.originalColumn},null!=e.name&&(r.name=e.name)),n.addMapping(r)})),e.sources.forEach((function(r){var o=r;null!==t&&(o=Rn.relative(t,r)),n._sources.has(o)||n._sources.add(o);var i=e.sourceContentFor(r);null!=i&&n.setSourceContent(r,i)})),n},
/**
       * Add a single mapping from original source line and column to the generated
       * source's line and column for this source map being created. The mapping
       * object should have the following properties:
       *
       *   - generated: An object with the generated line and column positions.
       *   - original: An object with the original line and column positions.
       *   - source: The original source file (relative to the sourceRoot).
       *   - name: An optional original token name for this mapping.
       */
Pn.prototype.addMapping=function(e){var t=Rn.getArg(e,"generated"),n=Rn.getArg(e,"original",null),r=Rn.getArg(e,"source",null),o=Rn.getArg(e,"name",null);this._skipValidation||this._validateMapping(t,n,r,o),null!=r&&(r=String(r),this._sources.has(r)||this._sources.add(r)),null!=o&&(o=String(o),this._names.has(o)||this._names.add(o)),this._mappings.add({generatedLine:t.line,generatedColumn:t.column,originalLine:null!=n&&n.line,originalColumn:null!=n&&n.column,source:r,name:o})},
/**
       * Set the source content for a source file.
       */
Pn.prototype.setSourceContent=function(e,t){var n=e;null!=this._sourceRoot&&(n=Rn.relative(this._sourceRoot,n)),null!=t?(// Add the source content to the _sourcesContents map.
// Create a new _sourcesContents map if the property is null.
this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[Rn.toSetString(n)]=t):this._sourcesContents&&(// Remove the source file from the _sourcesContents map.
// If the _sourcesContents map is empty, set the property to null.
delete this._sourcesContents[Rn.toSetString(n)],0===Object.keys(this._sourcesContents).length&&(this._sourcesContents=null))},
/**
       * Applies the mappings of a sub-source-map for a specific source file to the
       * source map being generated. Each mapping to the supplied source file is
       * rewritten using the supplied source map. Note: The resolution for the
       * resulting mappings is the minimium of this map and the supplied map.
       *
       * @param aSourceMapConsumer The source map to be applied.
       * @param aSourceFile Optional. The filename of the source file.
       *        If omitted, SourceMapConsumer's file property will be used.
       * @param aSourceMapPath Optional. The dirname of the path to the source map
       *        to be applied. If relative, it is relative to the SourceMapConsumer.
       *        This parameter is needed when the two source maps aren't in the same
       *        directory, and the source map to be applied contains relative source
       *        paths. If so, those relative source paths need to be rewritten
       *        relative to the SourceMapGenerator.
       */
Pn.prototype.applySourceMap=function(e,t,n){var r=t;// If aSourceFile is omitted, we will use the file property of the SourceMap
if(null==t){if(null==e.file)throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');r=e.file}var o=this._sourceRoot;// Make "sourceFile" relative if an absolute Url is passed.
null!=o&&(r=Rn.relative(o,r));// Applying the SourceMap can add and remove items from the sources and
// the names array.
var i=new kn,s=new kn;// Find mappings for the "sourceFile"
this._mappings.unsortedForEach((function(t){if(t.source===r&&null!=t.originalLine){// Check if it can be mapped by the source map, then update the mapping.
var a=e.originalPositionFor({line:t.originalLine,column:t.originalColumn});null!=a.source&&(// Copy mapping
t.source=a.source,null!=n&&(t.source=Rn.join(n,t.source)),null!=o&&(t.source=Rn.relative(o,t.source)),t.originalLine=a.line,t.originalColumn=a.column,null!=a.name&&(t.name=a.name))}var u=t.source;null==u||i.has(u)||i.add(u);var c=t.name;null==c||s.has(c)||s.add(c)}),this),this._sources=i,this._names=s,// Copy sourcesContents of applied map.
e.sources.forEach((function(t){var r=e.sourceContentFor(t);null!=r&&(null!=n&&(t=Rn.join(n,t)),null!=o&&(t=Rn.relative(o,t)),this.setSourceContent(t,r))}),this)},
/**
       * A mapping can have one of the three levels of data:
       *
       *   1. Just the generated position.
       *   2. The Generated position, original position, and original source.
       *   3. Generated and original position, original source, as well as a name
       *      token.
       *
       * To maintain consistency, we validate that any new mapping being added falls
       * in to one of these categories.
       */
Pn.prototype._validateMapping=function(e,t,n,r){// When aOriginal is truthy but has empty values for .line and .column,
// it is most likely a programmer error. In this case we throw a very
// specific error message to try to guide them the right way.
// For example: https://github.com/Polymer/polymer-bundler/pull/519
if(t&&"number"!=typeof t.line&&"number"!=typeof t.column)throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if((!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0)||t||n||r)&&!(e&&"line"in e&&"column"in e&&t&&"line"in t&&"column"in t&&e.line>0&&e.column>=0&&t.line>0&&t.column>=0&&n))throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:n,original:t,name:r}))},
/**
       * Serialize the accumulated mappings in to the stream of base 64 VLQs
       * specified by the source map format.
       */
Pn.prototype._serializeMappings=function(){for(var e,t,n,r,o=0,i=1,s=0,a=0,u=0,c=0,l="",f=this._mappings.toArray(),h=0,p=f.length;h<p;h++){if(e="",(t=f[h]).generatedLine!==i)for(o=0;t.generatedLine!==i;)e+=";",i++;else if(h>0){if(!Rn.compareByGeneratedPositionsInflated(t,f[h-1]))continue;e+=","}e+=Mn.encode(t.generatedColumn-o),o=t.generatedColumn,null!=t.source&&(r=this._sources.indexOf(t.source),e+=Mn.encode(r-c),c=r,// lines are stored 0-based in SourceMap spec version 3
e+=Mn.encode(t.originalLine-1-a),a=t.originalLine-1,e+=Mn.encode(t.originalColumn-s),s=t.originalColumn,null!=t.name&&(n=this._names.indexOf(t.name),e+=Mn.encode(n-u),u=n)),l+=e}return l},Pn.prototype._generateSourcesContent=function(e,t){return e.map((function(e){if(!this._sourcesContents)return null;null!=t&&(e=Rn.relative(t,e));var n=Rn.toSetString(e);return Object.prototype.hasOwnProperty.call(this._sourcesContents,n)?this._sourcesContents[n]:null}),this)},
/**
       * Externalize the source map.
       */
Pn.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return null!=this._file&&(e.file=this._file),null!=this._sourceRoot&&(e.sourceRoot=this._sourceRoot),this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)),e},
/**
       * Render the source map being generated to a string.
       */
Pn.prototype.toString=function(){return JSON.stringify(this.toJSON())},mn.SourceMapGenerator=Pn;var xn={},In={};/* -*- Mode: js; js-indent-level: 2; -*- */!function(e){
/**
      	 * Recursive implementation of binary search.
      	 *
      	 * @param aLow Indices here and lower do not contain the needle.
      	 * @param aHigh Indices here and higher do not contain the needle.
      	 * @param aNeedle The element being searched for.
      	 * @param aHaystack The non-empty array being searched.
      	 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
      	 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
      	 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
      	 *     closest element that is smaller than or greater than the one we are
      	 *     searching for, respectively, if the exact element cannot be found.
      	 */
function t(n,r,o,i,s,a){// This function terminates when one of the following is true:
//   1. We find the exact element we are looking for.
//   2. We did not find the exact element, but we can return the index of
//      the next-closest element.
//   3. We did not find the exact element, and there is no next-closest
//      element than the one we are searching for, so we return -1.
var u=Math.floor((r-n)/2)+n,c=s(o,i[u],!0);return 0===c?u:c>0?// Our needle is greater than aHaystack[mid].
r-u>1?t(u,r,o,i,s,a):// The exact needle element was not found in this haystack. Determine if
// we are in termination case (3) or (2) and return the appropriate thing.
a==e.LEAST_UPPER_BOUND?r<i.length?r:-1:u:// Our needle is less than aHaystack[mid].
u-n>1?t(n,u,o,i,s,a):// we are in termination case (3) or (2) and return the appropriate thing.
a==e.LEAST_UPPER_BOUND?u:n<0?-1:n}
/**
      	 * This is an implementation of binary search which will always try and return
      	 * the index of the closest element if there is no exact hit. This is because
      	 * mappings between original and generated line/col pairs are single points,
      	 * and there is an implicit region between each of them, so a miss just means
      	 * that you aren't on the very start of a region.
      	 *
      	 * @param aNeedle The element you are looking for.
      	 * @param aHaystack The array that is being searched.
      	 * @param aCompare A function which takes the needle and an element in the
      	 *     array and returns -1, 0, or 1 depending on whether the needle is less
      	 *     than, equal to, or greater than the element, respectively.
      	 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
      	 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
      	 *     closest element that is smaller than or greater than the one we are
      	 *     searching for, respectively, if the exact element cannot be found.
      	 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
      	 */
/*
      	 * Copyright 2011 Mozilla Foundation and contributors
      	 * Licensed under the New BSD license. See LICENSE or:
      	 * http://opensource.org/licenses/BSD-3-Clause
      	 */
e.GREATEST_LOWER_BOUND=1,e.LEAST_UPPER_BOUND=2,e.search=function(n,r,o,i){if(0===r.length)return-1;var s=t(-1,r.length,n,r,o,i||e.GREATEST_LOWER_BOUND);if(s<0)return-1;// We have found either the exact element, or the next-closest element than
// the one we are searching for. However, there may be more than one such
// element. Make sure we always return the smallest of these.
for(;s-1>=0&&0===o(r[s],r[s-1],!0);)--s;return s}}(In);var $n={};/* -*- Mode: js; js-indent-level: 2; -*- */
/*
       * Copyright 2011 Mozilla Foundation and contributors
       * Licensed under the New BSD license. See LICENSE or:
       * http://opensource.org/licenses/BSD-3-Clause
       */
// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.
/**
       * Swap the elements indexed by `x` and `y` in the array `ary`.
       *
       * @param {Array} ary
       *        The array.
       * @param {Number} x
       *        The index of the first item.
       * @param {Number} y
       *        The index of the second item.
       */function Un(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}
/**
       * Returns a random integer within the range `low .. high` inclusive.
       *
       * @param {Number} low
       *        The lower bound on the range.
       * @param {Number} high
       *        The upper bound on the range.
       */
/**
       * The Quick Sort algorithm.
       *
       * @param {Array} ary
       *        An array to sort.
       * @param {function} comparator
       *        Function to use to compare two items.
       * @param {Number} p
       *        Start index of the array
       * @param {Number} r
       *        End index of the array
       */
function jn(e,t,n,r){// If our lower bound is less than our upper bound, we (1) partition the
// array into two pieces and (2) recurse on each half. If it is not, this is
// the empty array and our base case.
if(n<r){// (1) Partitioning.
// The partitioning chooses a pivot between `p` and `r` and moves all
// elements that are less than or equal to the pivot to the before it, and
// all the elements that are greater than it after it. The effect is that
// once partition is done, the pivot is in the exact place it will be when
// the array is put in sorted order, and it will not need to be moved
// again. This runs in O(n) time.
// Always choose a random pivot so that an input array which is reverse
// sorted does not cause O(n^2) running time.
var o=n-1;Un(e,(u=n,c=r,Math.round(u+Math.random()*(c-u))),r);// Immediately after `j` is incremented in this loop, the following hold
// true:
//   * Every element in `ary[p .. i]` is less than or equal to the pivot.
//   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
for(var i=e[r],s=n;s<r;s++)t(e[s],i)<=0&&Un(e,o+=1,s);Un(e,o+1,s);var a=o+1;// (2) Recurse on each half.
jn(e,t,n,a-1),jn(e,t,a+1,r)}var u,c}
/**
       * Sort the given array in-place with the given comparator function.
       *
       * @param {Array} ary
       *        An array to sort.
       * @param {function} comparator
       *        Function to use to compare two items.
       */$n.quickSort=function(e,t){jn(e,t,0,e.length-1)};/* -*- Mode: js; js-indent-level: 2; -*- */
/*
       * Copyright 2011 Mozilla Foundation and contributors
       * Licensed under the New BSD license. See LICENSE or:
       * http://opensource.org/licenses/BSD-3-Clause
       */
var Fn=bn,Bn=In,Gn=Sn.ArraySet,Wn=_n,Hn=$n.quickSort;function Yn(e,t){var n=e;return"string"==typeof e&&(n=Fn.parseSourceMapInput(e)),null!=n.sections?new Xn(n,t):new Vn(n,t)}
/**
       * A BasicSourceMapConsumer instance represents a parsed source map which we can
       * query for information about the original file positions by giving it a file
       * position in the generated source.
       *
       * The first parameter is the raw source map (either as a JSON string, or
       * already parsed to an object). According to the spec, source maps have the
       * following attributes:
       *
       *   - version: Which version of the source map spec this map is following.
       *   - sources: An array of URLs to the original source files.
       *   - names: An array of identifiers which can be referrenced by individual mappings.
       *   - sourceRoot: Optional. The URL root from which all sources are relative.
       *   - sourcesContent: Optional. An array of contents of the original source files.
       *   - mappings: A string of base64 VLQs which contain the actual mappings.
       *   - file: Optional. The generated file this source map is associated with.
       *
       * Here is an example source map, taken from the source map spec[0]:
       *
       *     {
       *       version : 3,
       *       file: "out.js",
       *       sourceRoot : "",
       *       sources: ["foo.js", "bar.js"],
       *       names: ["src", "maps", "are", "fun"],
       *       mappings: "AA,AB;;ABCDE;"
       *     }
       *
       * The second parameter, if given, is a string whose value is the URL
       * at which the source map was found.  This URL is used to compute the
       * sources array.
       *
       * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
       */
function Vn(e,t){var n=e;"string"==typeof e&&(n=Fn.parseSourceMapInput(e));var r=Fn.getArg(n,"version"),o=Fn.getArg(n,"sources"),i=Fn.getArg(n,"names",[]),s=Fn.getArg(n,"sourceRoot",null),a=Fn.getArg(n,"sourcesContent",null),u=Fn.getArg(n,"mappings"),c=Fn.getArg(n,"file",null);// Once again, Sass deviates from the spec and supplies the version as a
// string rather than a number, so we use loose equality checking here.
if(r!=this._version)throw new Error("Unsupported version: "+r);s&&(s=Fn.normalize(s)),o=o.map(String).map(Fn.normalize).map((function(e){return s&&Fn.isAbsolute(s)&&Fn.isAbsolute(e)?Fn.relative(s,e):e})),// Pass `true` below to allow duplicate names and sources. While source maps
// are intended to be compressed and deduplicated, the TypeScript compiler
// sometimes generates source maps with duplicates in them. See Github issue
// #72 and bugzil.la/889492.
this._names=Gn.fromArray(i.map(String),!0),this._sources=Gn.fromArray(o,!0),this._absoluteSources=this._sources.toArray().map((function(e){return Fn.computeSourceURL(s,e,t)})),this.sourceRoot=s,this.sourcesContent=a,this._mappings=u,this._sourceMapURL=t,this.file=c}
/**
       * Provide the JIT with a nice shape / hidden class.
       */
function zn(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}
/**
       * Parse the mappings in a string in to a data structure which we can easily
       * query (the ordered arrays in the `this.__generatedMappings` and
       * `this.__originalMappings` properties).
       */
/**
       * An IndexedSourceMapConsumer instance represents a parsed source map which
       * we can query for information. It differs from BasicSourceMapConsumer in
       * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
       * input.
       *
       * The first parameter is a raw source map (either as a JSON string, or already
       * parsed to an object). According to the spec for indexed source maps, they
       * have the following attributes:
       *
       *   - version: Which version of the source map spec this map is following.
       *   - file: Optional. The generated file this source map is associated with.
       *   - sections: A list of section definitions.
       *
       * Each value under the "sections" field has two fields:
       *   - offset: The offset into the original specified at which this section
       *       begins to apply, defined as an object with a "line" and "column"
       *       field.
       *   - map: A source map definition. This source map could also be indexed,
       *       but doesn't have to be.
       *
       * Instead of the "map" field, it's also possible to have a "url" field
       * specifying a URL to retrieve a source map from, but that's currently
       * unsupported.
       *
       * Here's an example source map, taken from the source map spec[0], but
       * modified to omit a section which uses the "url" field.
       *
       *  {
       *    version : 3,
       *    file: "app.js",
       *    sections: [{
       *      offset: {line:100, column:10},
       *      map: {
       *        version : 3,
       *        file: "section.js",
       *        sources: ["foo.js", "bar.js"],
       *        names: ["src", "maps", "are", "fun"],
       *        mappings: "AAAA,E;;ABCDE;"
       *      }
       *    }],
       *  }
       *
       * The second parameter, if given, is a string whose value is the URL
       * at which the source map was found.  This URL is used to compute the
       * sources array.
       *
       * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
       */
function Xn(e,t){var n=e;"string"==typeof e&&(n=Fn.parseSourceMapInput(e));var r=Fn.getArg(n,"version"),o=Fn.getArg(n,"sections");if(r!=this._version)throw new Error("Unsupported version: "+r);this._sources=new Gn,this._names=new Gn;var i={line:-1,column:0};this._sections=o.map((function(e){if(e.url)// The url field will require support for asynchronicity.
// See https://github.com/mozilla/source-map/issues/16
throw new Error("Support for url field in sections not implemented.");var n=Fn.getArg(e,"offset"),r=Fn.getArg(n,"line"),o=Fn.getArg(n,"column");if(r<i.line||r===i.line&&o<i.column)throw new Error("Section offsets must be ordered and non-overlapping.");return i=n,{generatedOffset:{// The offset fields are 0-based, but we use 1-based indices when
// encoding/decoding from VLQ.
generatedLine:r+1,generatedColumn:o+1},consumer:new Yn(Fn.getArg(e,"map"),t)}}))}Yn.fromSourceMap=function(e,t){return Vn.fromSourceMap(e,t)},
/**
       * The version of the source mapping spec that we are consuming.
       */
Yn.prototype._version=3,// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
// Each object in the arrays is of the form:
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
// `_generatedMappings` is ordered by the generated positions.
// `_originalMappings` is ordered by the original positions.
Yn.prototype.__generatedMappings=null,Object.defineProperty(Yn.prototype,"_generatedMappings",{configurable:!0,enumerable:!0,get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),Yn.prototype.__originalMappings=null,Object.defineProperty(Yn.prototype,"_originalMappings",{configurable:!0,enumerable:!0,get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),Yn.prototype._charIsMappingSeparator=function(e,t){var n=e.charAt(t);return";"===n||","===n},
/**
       * Parse the mappings in a string in to a data structure which we can easily
       * query (the ordered arrays in the `this.__generatedMappings` and
       * `this.__originalMappings` properties).
       */
Yn.prototype._parseMappings=function(e,t){throw new Error("Subclasses must implement _parseMappings")},Yn.GENERATED_ORDER=1,Yn.ORIGINAL_ORDER=2,Yn.GREATEST_LOWER_BOUND=1,Yn.LEAST_UPPER_BOUND=2,
/**
       * Iterate over each mapping between an original source/line/column and a
       * generated line/column in this source map.
       *
       * @param Function aCallback
       *        The function that is called with each mapping.
       * @param Object aContext
       *        Optional. If specified, this object will be the value of `this` every
       *        time that `aCallback` is called.
       * @param aOrder
       *        Either `SourceMapConsumer.GENERATED_ORDER` or
       *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
       *        iterate over the mappings sorted by the generated file's line/column
       *        order or the original's source/line/column order, respectively. Defaults to
       *        `SourceMapConsumer.GENERATED_ORDER`.
       */
Yn.prototype.eachMapping=function(e,t,n){var r,o=t||null;switch(n||Yn.GENERATED_ORDER){case Yn.GENERATED_ORDER:r=this._generatedMappings;break;case Yn.ORIGINAL_ORDER:r=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var i=this.sourceRoot;r.map((function(e){var t=null===e.source?null:this._sources.at(e.source);return{source:t=Fn.computeSourceURL(i,t,this._sourceMapURL),generatedLine:e.generatedLine,generatedColumn:e.generatedColumn,originalLine:e.originalLine,originalColumn:e.originalColumn,name:null===e.name?null:this._names.at(e.name)}}),this).forEach(e,o)},
/**
       * Returns all generated line and column information for the original source,
       * line, and column provided. If no column is provided, returns all mappings
       * corresponding to a either the line we are searching for or the next
       * closest line that has any mappings. Otherwise, returns all mappings
       * corresponding to the given line and either the column we are searching for
       * or the next closest column that has any offsets.
       *
       * The only argument is an object with the following properties:
       *
       *   - source: The filename of the original source.
       *   - line: The line number in the original source.  The line number is 1-based.
       *   - column: Optional. the column number in the original source.
       *    The column number is 0-based.
       *
       * and an array of objects is returned, each with the following properties:
       *
       *   - line: The line number in the generated source, or null.  The
       *    line number is 1-based.
       *   - column: The column number in the generated source, or null.
       *    The column number is 0-based.
       */
Yn.prototype.allGeneratedPositionsFor=function(e){var t=Fn.getArg(e,"line"),n={source:Fn.getArg(e,"source"),originalLine:t,originalColumn:Fn.getArg(e,"column",0)};// When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
// returns the index of the closest mapping less than the needle. By
// setting needle.originalColumn to 0, we thus find the last mapping for
// the given line, provided such a mapping exists.
if(n.source=this._findSourceIndex(n.source),n.source<0)return[];var r=[],o=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",Fn.compareByOriginalPositions,Bn.LEAST_UPPER_BOUND);if(o>=0){var i=this._originalMappings[o];if(void 0===e.column)// Iterate until either we run out of mappings, or we run into
// a mapping for a different line than the one we found. Since
// mappings are sorted, this is guaranteed to find all mappings for
// the line we found.
for(var s=i.originalLine;i&&i.originalLine===s;)r.push({line:Fn.getArg(i,"generatedLine",null),column:Fn.getArg(i,"generatedColumn",null),lastColumn:Fn.getArg(i,"lastGeneratedColumn",null)}),i=this._originalMappings[++o];else// Iterate until either we run out of mappings, or we run into
// a mapping for a different line than the one we were searching for.
// Since mappings are sorted, this is guaranteed to find all mappings for
// the line we are searching for.
for(var a=i.originalColumn;i&&i.originalLine===t&&i.originalColumn==a;)r.push({line:Fn.getArg(i,"generatedLine",null),column:Fn.getArg(i,"generatedColumn",null),lastColumn:Fn.getArg(i,"lastGeneratedColumn",null)}),i=this._originalMappings[++o]}return r},xn.SourceMapConsumer=Yn,Vn.prototype=Object.create(Yn.prototype),Vn.prototype.consumer=Yn,
/**
       * Utility function to find the index of a source.  Returns -1 if not
       * found.
       */
Vn.prototype._findSourceIndex=function(e){var t,n=e;if(null!=this.sourceRoot&&(n=Fn.relative(this.sourceRoot,n)),this._sources.has(n))return this._sources.indexOf(n);// Maybe aSource is an absolute URL as returned by |sources|.  In
// this case we can't simply undo the transform.
for(t=0;t<this._absoluteSources.length;++t)if(this._absoluteSources[t]==e)return t;return-1},
/**
       * Create a BasicSourceMapConsumer from a SourceMapGenerator.
       *
       * @param SourceMapGenerator aSourceMap
       *        The source map that will be consumed.
       * @param String aSourceMapURL
       *        The URL at which the source map can be found (optional)
       * @returns BasicSourceMapConsumer
       */
Vn.fromSourceMap=function(e,t){var n=Object.create(Vn.prototype),r=n._names=Gn.fromArray(e._names.toArray(),!0),o=n._sources=Gn.fromArray(e._sources.toArray(),!0);n.sourceRoot=e._sourceRoot,n.sourcesContent=e._generateSourcesContent(n._sources.toArray(),n.sourceRoot),n.file=e._file,n._sourceMapURL=t,n._absoluteSources=n._sources.toArray().map((function(e){return Fn.computeSourceURL(n.sourceRoot,e,t)}));for(// Because we are modifying the entries (by converting string sources and
// names to indices into the sources and names ArraySets), we have to make
// a copy of the entry or else bad things happen. Shared mutable state
// strikes again! See github issue #191.
var i=e._mappings.toArray().slice(),s=n.__generatedMappings=[],a=n.__originalMappings=[],u=0,c=i.length;u<c;u++){var l=i[u],f=new zn;f.generatedLine=l.generatedLine,f.generatedColumn=l.generatedColumn,l.source&&(f.source=o.indexOf(l.source),f.originalLine=l.originalLine,f.originalColumn=l.originalColumn,l.name&&(f.name=r.indexOf(l.name)),a.push(f)),s.push(f)}return Hn(n.__originalMappings,Fn.compareByOriginalPositions),n},
/**
       * The version of the source mapping spec that we are consuming.
       */
Vn.prototype._version=3,
/**
       * The list of original sources.
       */
Object.defineProperty(Vn.prototype,"sources",{get:function(){return this._absoluteSources.slice()}}),Vn.prototype._parseMappings=function(e,t){for(var n,r,o,i,s,a=1,u=0,c=0,l=0,f=0,h=0,p=e.length,d=0,g={},m={},_=[],y=[];d<p;)if(";"===e.charAt(d))a++,d++,u=0;else if(","===e.charAt(d))d++;else{// Because each offset is encoded relative to the previous one,
// many segments often have the same encoding. We can exploit this
// fact by caching the parsed variable length fields of each segment,
// allowing us to avoid a second parse if we encounter the same
// segment again.
for((n=new zn).generatedLine=a,i=d;i<p&&!this._charIsMappingSeparator(e,i);i++);if(o=g[r=e.slice(d,i)])d+=r.length;else{for(o=[];d<i;)Wn.decode(e,d,m),s=m.value,d=m.rest,o.push(s);if(2===o.length)throw new Error("Found a source, but no line and column");if(3===o.length)throw new Error("Found a source and line, but no column");g[r]=o}// Generated column.
n.generatedColumn=u+o[0],u=n.generatedColumn,o.length>1&&(// Original source.
n.source=f+o[1],f+=o[1],// Original line.
n.originalLine=c+o[2],c=n.originalLine,// Lines are stored 0-based
n.originalLine+=1,// Original column.
n.originalColumn=l+o[3],l=n.originalColumn,o.length>4&&(// Original name.
n.name=h+o[4],h+=o[4])),y.push(n),"number"==typeof n.originalLine&&_.push(n)}Hn(y,Fn.compareByGeneratedPositionsDeflated),this.__generatedMappings=y,Hn(_,Fn.compareByOriginalPositions),this.__originalMappings=_},
/**
       * Find the mapping that best matches the hypothetical "needle" mapping that
       * we are searching for in the given "haystack" of mappings.
       */
Vn.prototype._findMapping=function(e,t,n,r,o,i){// To return the position we are searching for, we must first find the
// mapping for the given position and then return the opposite position it
// points to. Because the mappings are sorted, we can use binary search to
// find the best mapping.
if(e[n]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+e[n]);if(e[r]<0)throw new TypeError("Column must be greater than or equal to 0, got "+e[r]);return Bn.search(e,t,o,i)},
/**
       * Compute the last column for each generated mapping. The last column is
       * inclusive.
       */
Vn.prototype.computeColumnSpans=function(){for(var e=0;e<this._generatedMappings.length;++e){var t=this._generatedMappings[e];// Mappings do not contain a field for the last generated columnt. We
// can come up with an optimistic estimate, however, by assuming that
// mappings are contiguous (i.e. given two consecutive mappings, the
// first mapping ends where the second one starts).
if(e+1<this._generatedMappings.length){var n=this._generatedMappings[e+1];if(t.generatedLine===n.generatedLine){t.lastGeneratedColumn=n.generatedColumn-1;continue}}// The last mapping for each line spans the entire line.
t.lastGeneratedColumn=1/0}},
/**
       * Returns the original source, line, and column information for the generated
       * source's line and column positions provided. The only argument is an object
       * with the following properties:
       *
       *   - line: The line number in the generated source.  The line number
       *     is 1-based.
       *   - column: The column number in the generated source.  The column
       *     number is 0-based.
       *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
       *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
       *     closest element that is smaller than or greater than the one we are
       *     searching for, respectively, if the exact element cannot be found.
       *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
       *
       * and an object is returned with the following properties:
       *
       *   - source: The original source file, or null.
       *   - line: The line number in the original source, or null.  The
       *     line number is 1-based.
       *   - column: The column number in the original source, or null.  The
       *     column number is 0-based.
       *   - name: The original identifier, or null.
       */
Vn.prototype.originalPositionFor=function(e){var t={generatedLine:Fn.getArg(e,"line"),generatedColumn:Fn.getArg(e,"column")},n=this._findMapping(t,this._generatedMappings,"generatedLine","generatedColumn",Fn.compareByGeneratedPositionsDeflated,Fn.getArg(e,"bias",Yn.GREATEST_LOWER_BOUND));if(n>=0){var r=this._generatedMappings[n];if(r.generatedLine===t.generatedLine){var o=Fn.getArg(r,"source",null);null!==o&&(o=this._sources.at(o),o=Fn.computeSourceURL(this.sourceRoot,o,this._sourceMapURL));var i=Fn.getArg(r,"name",null);return null!==i&&(i=this._names.at(i)),{source:o,line:Fn.getArg(r,"originalLine",null),column:Fn.getArg(r,"originalColumn",null),name:i}}}return{source:null,line:null,column:null,name:null}},
/**
       * Return true if we have the source content for every source in the source
       * map, false otherwise.
       */
Vn.prototype.hasContentsOfAllSources=function(){return!!this.sourcesContent&&this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some((function(e){return null==e}))},
/**
       * Returns the original source content. The only argument is the url of the
       * original source file. Returns null if no original source content is
       * available.
       */
Vn.prototype.sourceContentFor=function(e,t){if(!this.sourcesContent)return null;var n=this._findSourceIndex(e);if(n>=0)return this.sourcesContent[n];var r,o=e;if(null!=this.sourceRoot&&(o=Fn.relative(this.sourceRoot,o)),null!=this.sourceRoot&&(r=Fn.urlParse(this.sourceRoot))){// XXX: file:// URIs and absolute paths lead to unexpected behavior for
// many users. We can help them out when they expect file:// URIs to
// behave like it would if they were running a local HTTP server. See
// https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
var i=o.replace(/^file:\/\//,"");if("file"==r.scheme&&this._sources.has(i))return this.sourcesContent[this._sources.indexOf(i)];if((!r.path||"/"==r.path)&&this._sources.has("/"+o))return this.sourcesContent[this._sources.indexOf("/"+o)]}// This function is used recursively from
// IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
// don't want to throw if we can't find the source - we just want to
// return null, so we provide a flag to exit gracefully.
if(t)return null;throw new Error('"'+o+'" is not in the SourceMap.')},
/**
       * Returns the generated line and column information for the original source,
       * line, and column positions provided. The only argument is an object with
       * the following properties:
       *
       *   - source: The filename of the original source.
       *   - line: The line number in the original source.  The line number
       *     is 1-based.
       *   - column: The column number in the original source.  The column
       *     number is 0-based.
       *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
       *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
       *     closest element that is smaller than or greater than the one we are
       *     searching for, respectively, if the exact element cannot be found.
       *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
       *
       * and an object is returned with the following properties:
       *
       *   - line: The line number in the generated source, or null.  The
       *     line number is 1-based.
       *   - column: The column number in the generated source, or null.
       *     The column number is 0-based.
       */
Vn.prototype.generatedPositionFor=function(e){var t=Fn.getArg(e,"source");if((t=this._findSourceIndex(t))<0)return{line:null,column:null,lastColumn:null};var n={source:t,originalLine:Fn.getArg(e,"line"),originalColumn:Fn.getArg(e,"column")},r=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",Fn.compareByOriginalPositions,Fn.getArg(e,"bias",Yn.GREATEST_LOWER_BOUND));if(r>=0){var o=this._originalMappings[r];if(o.source===n.source)return{line:Fn.getArg(o,"generatedLine",null),column:Fn.getArg(o,"generatedColumn",null),lastColumn:Fn.getArg(o,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},xn.BasicSourceMapConsumer=Vn,Xn.prototype=Object.create(Yn.prototype),Xn.prototype.constructor=Yn,
/**
       * The version of the source mapping spec that we are consuming.
       */
Xn.prototype._version=3,
/**
       * The list of original sources.
       */
Object.defineProperty(Xn.prototype,"sources",{get:function(){for(var e=[],t=0;t<this._sections.length;t++)for(var n=0;n<this._sections[t].consumer.sources.length;n++)e.push(this._sections[t].consumer.sources[n]);return e}}),
/**
       * Returns the original source, line, and column information for the generated
       * source's line and column positions provided. The only argument is an object
       * with the following properties:
       *
       *   - line: The line number in the generated source.  The line number
       *     is 1-based.
       *   - column: The column number in the generated source.  The column
       *     number is 0-based.
       *
       * and an object is returned with the following properties:
       *
       *   - source: The original source file, or null.
       *   - line: The line number in the original source, or null.  The
       *     line number is 1-based.
       *   - column: The column number in the original source, or null.  The
       *     column number is 0-based.
       *   - name: The original identifier, or null.
       */
Xn.prototype.originalPositionFor=function(e){var t={generatedLine:Fn.getArg(e,"line"),generatedColumn:Fn.getArg(e,"column")},n=Bn.search(t,this._sections,(function(e,t){var n=e.generatedLine-t.generatedOffset.generatedLine;return n||e.generatedColumn-t.generatedOffset.generatedColumn})),r=this._sections[n];// Find the section containing the generated position we're trying to map
// to an original position.
return r?r.consumer.originalPositionFor({line:t.generatedLine-(r.generatedOffset.generatedLine-1),column:t.generatedColumn-(r.generatedOffset.generatedLine===t.generatedLine?r.generatedOffset.generatedColumn-1:0),bias:e.bias}):{source:null,line:null,column:null,name:null}},
/**
       * Return true if we have the source content for every source in the source
       * map, false otherwise.
       */
Xn.prototype.hasContentsOfAllSources=function(){return this._sections.every((function(e){return e.consumer.hasContentsOfAllSources()}))},
/**
       * Returns the original source content. The only argument is the url of the
       * original source file. Returns null if no original source content is
       * available.
       */
Xn.prototype.sourceContentFor=function(e,t){for(var n=0;n<this._sections.length;n++){var r=this._sections[n].consumer.sourceContentFor(e,!0);if(r)return r}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},
/**
       * Returns the generated line and column information for the original source,
       * line, and column positions provided. The only argument is an object with
       * the following properties:
       *
       *   - source: The filename of the original source.
       *   - line: The line number in the original source.  The line number
       *     is 1-based.
       *   - column: The column number in the original source.  The column
       *     number is 0-based.
       *
       * and an object is returned with the following properties:
       *
       *   - line: The line number in the generated source, or null.  The
       *     line number is 1-based. 
       *   - column: The column number in the generated source, or null.
       *     The column number is 0-based.
       */
Xn.prototype.generatedPositionFor=function(e){for(var t=0;t<this._sections.length;t++){var n=this._sections[t];// Only consider this section if the requested source is in the list of
// sources of the consumer.
if(-1!==n.consumer._findSourceIndex(Fn.getArg(e,"source"))){var r=n.consumer.generatedPositionFor(e);if(r)return{line:r.line+(n.generatedOffset.generatedLine-1),column:r.column+(n.generatedOffset.generatedLine===r.line?n.generatedOffset.generatedColumn-1:0)}}}return{line:null,column:null}},
/**
       * Parse the mappings in a string in to a data structure which we can easily
       * query (the ordered arrays in the `this.__generatedMappings` and
       * `this.__originalMappings` properties).
       */
Xn.prototype._parseMappings=function(e,t){this.__generatedMappings=[],this.__originalMappings=[];for(var n=0;n<this._sections.length;n++)for(var r=this._sections[n],o=r.consumer._generatedMappings,i=0;i<o.length;i++){var s=o[i],a=r.consumer._sources.at(s.source);a=Fn.computeSourceURL(r.consumer.sourceRoot,a,this._sourceMapURL),this._sources.add(a),a=this._sources.indexOf(a);var u=null;s.name&&(u=r.consumer._names.at(s.name),this._names.add(u),u=this._names.indexOf(u));// The mappings coming from the consumer for the section have
// generated positions relative to the start of the section, so we
// need to offset them to be relative to the start of the concatenated
// generated file.
var c={source:a,generatedLine:s.generatedLine+(r.generatedOffset.generatedLine-1),generatedColumn:s.generatedColumn+(r.generatedOffset.generatedLine===s.generatedLine?r.generatedOffset.generatedColumn-1:0),originalLine:s.originalLine,originalColumn:s.originalColumn,name:u};this.__generatedMappings.push(c),"number"==typeof c.originalLine&&this.__originalMappings.push(c)}Hn(this.__generatedMappings,Fn.compareByGeneratedPositionsDeflated),Hn(this.__originalMappings,Fn.compareByOriginalPositions)},xn.IndexedSourceMapConsumer=Xn;var Kn={},qn=mn.SourceMapGenerator,Jn=bn,Qn=/(\r?\n)/,Zn="$$$isSourceNode$$$";/* -*- Mode: js; js-indent-level: 2; -*- */
/*
       * Copyright 2011 Mozilla Foundation and contributors
       * Licensed under the New BSD license. See LICENSE or:
       * http://opensource.org/licenses/BSD-3-Clause
       */
/**
       * SourceNodes provide a way to abstract over interpolating/concatenating
       * snippets of generated JavaScript source code while maintaining the line and
       * column information associated with the original source code.
       *
       * @param aLine The original line number.
       * @param aColumn The original column number.
       * @param aSource The original source's filename.
       * @param aChunks Optional. An array of strings which are snippets of
       *        generated JS, or other SourceNodes.
       * @param aName The original identifier.
       */
function er(e,t,n,r,o){this.children=[],this.sourceContents={},this.line=null==e?null:e,this.column=null==t?null:t,this.source=null==n?null:n,this.name=null==o?null:o,this[Zn]=!0,null!=r&&this.add(r)}
/**
       * Creates a SourceNode from generated code and a SourceMapConsumer.
       *
       * @param aGeneratedCode The generated code
       * @param aSourceMapConsumer The SourceMap for the generated code
       * @param aRelativePath Optional. The path that relative sources in the
       *        SourceMapConsumer should be relative to.
       */er.fromStringWithSourceMap=function(e,t,n){// The SourceNode we want to fill with the generated code
// and the SourceMap
var r=new er,o=e.split(Qn),i=0,s=function(){return e()+(e()||"");function e(){return i<o.length?o[i++]:void 0}},a=1,u=0,c=null;// All even indices of this array are one line of the generated code,
// while all odd indices are the newlines between two adjacent lines
// (since `REGEX_NEWLINE` captures its match).
// Processed fragments are accessed by calling `shiftNextLine`.
return t.eachMapping((function(e){if(null!==c){// We add the code from "lastMapping" to "mapping":
// First check if there is a new line in between.
if(!(a<e.generatedLine)){// There is no new line in between.
// Associate the code between "lastGeneratedColumn" and
// "mapping.generatedColumn" with "lastMapping"
var t=(n=o[i]||"").substr(0,e.generatedColumn-u);return o[i]=n.substr(e.generatedColumn-u),u=e.generatedColumn,l(c,t),void(// No more remaining code, continue
c=e)}// Associate first line with "lastMapping"
l(c,s()),a++,u=0}// We add the generated code until the first mapping
// to the SourceNode without any mapping.
// Each line is added as separate string.
for(;a<e.generatedLine;)r.add(s()),a++;if(u<e.generatedColumn){var n=o[i]||"";r.add(n.substr(0,e.generatedColumn)),o[i]=n.substr(e.generatedColumn),u=e.generatedColumn}c=e}),this),// We have processed all mappings.
i<o.length&&(c&&// Associate the remaining code in the current line with "lastMapping"
l(c,s()),// and add the remaining lines without any mapping
r.add(o.splice(i).join(""))),// Copy sourcesContent into SourceNode
t.sources.forEach((function(e){var o=t.sourceContentFor(e);null!=o&&(null!=n&&(e=Jn.join(n,e)),r.setSourceContent(e,o))})),r;function l(e,t){if(null===e||void 0===e.source)r.add(t);else{var o=n?Jn.join(n,e.source):e.source;r.add(new er(e.originalLine,e.originalColumn,o,t,e.name))}}},
/**
       * Add a chunk of generated JS to this source node.
       *
       * @param aChunk A string snippet of generated JS code, another instance of
       *        SourceNode, or an array where each member is one of those things.
       */
er.prototype.add=function(e){if(Array.isArray(e))e.forEach((function(e){this.add(e)}),this);else{if(!e[Zn]&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);e&&this.children.push(e)}return this},
/**
       * Add a chunk of generated JS to the beginning of this source node.
       *
       * @param aChunk A string snippet of generated JS code, another instance of
       *        SourceNode, or an array where each member is one of those things.
       */
er.prototype.prepend=function(e){if(Array.isArray(e))for(var t=e.length-1;t>=0;t--)this.prepend(e[t]);else{if(!e[Zn]&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);this.children.unshift(e)}return this},
/**
       * Walk over the tree of JS snippets in this node and its children. The
       * walking function is called once for each snippet of JS and is passed that
       * snippet and the its original associated source's line/column location.
       *
       * @param aFn The traversal function.
       */
er.prototype.walk=function(e){for(var t,n=0,r=this.children.length;n<r;n++)(t=this.children[n])[Zn]?t.walk(e):""!==t&&e(t,{source:this.source,line:this.line,column:this.column,name:this.name})},
/**
       * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
       * each of `this.children`.
       *
       * @param aSep The separator.
       */
er.prototype.join=function(e){var t,n,r=this.children.length;if(r>0){for(t=[],n=0;n<r-1;n++)t.push(this.children[n]),t.push(e);t.push(this.children[n]),this.children=t}return this},
/**
       * Call String.prototype.replace on the very right-most source snippet. Useful
       * for trimming whitespace from the end of a source node, etc.
       *
       * @param aPattern The pattern to replace.
       * @param aReplacement The thing to replace the pattern with.
       */
er.prototype.replaceRight=function(e,t){var n=this.children[this.children.length-1];return n[Zn]?n.replaceRight(e,t):"string"==typeof n?this.children[this.children.length-1]=n.replace(e,t):this.children.push("".replace(e,t)),this},
/**
       * Set the source content for a source file. This will be added to the SourceMapGenerator
       * in the sourcesContent field.
       *
       * @param aSourceFile The filename of the source file
       * @param aSourceContent The content of the source file
       */
er.prototype.setSourceContent=function(e,t){this.sourceContents[Jn.toSetString(e)]=t},
/**
       * Walk over the tree of SourceNodes. The walking function is called for each
       * source file content and is passed the filename and source content.
       *
       * @param aFn The traversal function.
       */
er.prototype.walkSourceContents=function(e){for(var t=0,n=this.children.length;t<n;t++)this.children[t][Zn]&&this.children[t].walkSourceContents(e);var r=Object.keys(this.sourceContents);for(t=0,n=r.length;t<n;t++)e(Jn.fromSetString(r[t]),this.sourceContents[r[t]])},
/**
       * Return the string representation of this source node. Walks over the tree
       * and concatenates all the various snippets together to one string.
       */
er.prototype.toString=function(){var e="";return this.walk((function(t){e+=t})),e},
/**
       * Returns the string representation of this source node along with a source
       * map.
       */
er.prototype.toStringWithSourceMap=function(e){var t={code:"",line:1,column:0},n=new qn(e),r=!1,o=null,i=null,s=null,a=null;return this.walk((function(e,u){t.code+=e,null!==u.source&&null!==u.line&&null!==u.column?(o===u.source&&i===u.line&&s===u.column&&a===u.name||n.addMapping({source:u.source,original:{line:u.line,column:u.column},generated:{line:t.line,column:t.column},name:u.name}),o=u.source,i=u.line,s=u.column,a=u.name,r=!0):r&&(n.addMapping({generated:{line:t.line,column:t.column}}),o=null,r=!1);for(var c=0,l=e.length;c<l;c++)10===e.charCodeAt(c)?(t.line++,t.column=0,// Mappings end at eol
c+1===l?(o=null,r=!1):r&&n.addMapping({source:u.source,original:{line:u.line,column:u.column},generated:{line:t.line,column:t.column},name:u.name})):t.column++})),this.walkSourceContents((function(e,t){n.setSourceContent(e,t)})),{code:t.code,map:n}},Kn.SourceNode=er,
/*
       * Copyright 2009-2011 Mozilla Foundation and contributors
       * Licensed under the New BSD license. See LICENSE.txt or:
       * http://opensource.org/licenses/BSD-3-Clause
       */
gn.SourceMapGenerator=mn.SourceMapGenerator,gn.SourceMapConsumer=xn.SourceMapConsumer,gn.SourceNode=Kn.SourceNode,
/*!
        * message-compiler v9.2.2
        * (c) 2022 kazuya kawaguchi
        * Released under the MIT License.
        */
Object.defineProperty(dn,"__esModule",{value:!0});var tr=Kt.exports,nr=gn;const rr={// tokenizer error codes
EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,// parser error codes
MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,// Special value for higher-order compilers to pick up the last code
// to avoid collision of error codes. This should always be kept as the last
// item.
__EXTEND_POINT__:15},or={// tokenizer error messages
[rr.EXPECTED_TOKEN]:"Expected token: '{0}'",[rr.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[rr.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[rr.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[rr.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[rr.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[rr.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[rr.EMPTY_PLACEHOLDER]:"Empty placeholder",[rr.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[rr.INVALID_LINKED_FORMAT]:"Invalid linked format",// parser error messages
[rr.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[rr.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[rr.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[rr.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'"};/** @internal */function ir(e,t,n={}){const{domain:r,messages:o,args:i}=n,s=new SyntaxError(String(e));return s.code=e,t&&(s.location=t),s.domain=r,s}/** @internal */const sr={start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0}};function ar(e,t,n){return{line:e,column:t,offset:n}}function ur(e,t,n){const r={start:e,end:t};return null!=n&&(r.source=n),r}const cr=" ",lr="\n",fr=String.fromCharCode(8232),hr=String.fromCharCode(8233);function pr(e){const t=e;let n=0,r=1,o=1,i=0;const s=e=>"\r"===t[e]&&t[e+1]===lr,a=e=>t[e]===hr,u=e=>t[e]===fr,c=e=>s(e)||(e=>t[e]===lr)(e)||a(e)||u(e),l=e=>s(e)||a(e)||u(e)?lr:t[e];function f(){return i=0,c(n)&&(r++,o=0),s(n)&&n++,n++,o++,t[n]}return{index:()=>n,line:()=>r,column:()=>o,peekOffset:()=>i,charAt:l,currentChar:()=>l(n),currentPeek:()=>l(n+i),next:f,peek:function(){return s(n+i)&&i++,i++,t[n+i]},reset:function(){n=0,r=1,o=1,i=0},resetPeek:function(e=0){i=e},skipToPeek:function(){const e=n+i;// eslint-disable-next-line no-unmodified-loop-condition
for(;e!==n;)f();i=0}}}const dr=void 0;function gr(e,t={}){const n=!1!==t.location,r=pr(e),o=()=>r.index(),i=()=>ar(r.line(),r.column(),r.index()),s=i(),a=o(),u={currentType:14/* EOF */,offset:a,startLoc:s,endLoc:s,lastType:14/* EOF */,lastOffset:a,lastStartLoc:s,lastEndLoc:s,braceNest:0,inLinked:!1,text:""},c=()=>u,{onError:l}=t;function f(e,t,n,...r){const o=c();if(t.column+=n,t.offset+=n,l){const n=ir(e,ur(o.startLoc,t),{domain:"tokenizer",args:r});l(n)}}function h(e,t,r){e.endLoc=i(),e.currentType=t;const o={type:t};return n&&(o.loc=ur(e.startLoc,e.endLoc)),null!=r&&(o.value=r),o}const p=e=>h(e,14/* EOF */);function d(e,t){return e.currentChar()===t?(e.next(),t):(f(rr.EXPECTED_TOKEN,i(),0,t),"")}function g(e){let t="";for(;e.currentPeek()===cr||e.currentPeek()===lr;)t+=e.currentPeek(),e.peek();return t}function m(e){const t=g(e);return e.skipToPeek(),t}function _(e){if(e===dr)return!1;const t=e.charCodeAt(0);return t>=97&&t<=122||// a-z
t>=65&&t<=90||// A-Z
95===t}function y(e,t){const{currentType:n}=t;if(2/* BraceLeft */!==n)return!1;g(e);const r=function(e){if(e===dr)return!1;const t=e.charCodeAt(0);return t>=48&&t<=57;// 0-9
}("-"===e.currentPeek()?e.peek():e.currentPeek());return e.resetPeek(),r}function v(e){g(e);const t="|"/* Pipe */===e.currentPeek();return e.resetPeek(),t}function E(e,t=!0){const n=(t=!1,r="",o=!1)=>{const i=e.currentPeek();return"{"/* BraceLeft */===i?"%"/* Modulo */!==r&&t:"@"/* LinkedAlias */!==i&&i?"%"/* Modulo */===i?(e.peek(),n(t,"%"/* Modulo */,!0)):"|"/* Pipe */===i?!("%"/* Modulo */!==r&&!o&&(r===cr||r===lr)):i===cr?(e.peek(),n(!0,cr,o)):i!==lr||(e.peek(),n(!0,lr,o)):"%"/* Modulo */===r||t},r=n();return t&&e.resetPeek(),r}function b(e,t){const n=e.currentChar();return n===dr?dr:t(n)?(e.next(),n):null}function S(e){return b(e,(e=>{const t=e.charCodeAt(0);return t>=97&&t<=122||// a-z
t>=65&&t<=90||// A-Z
t>=48&&t<=57||// 0-9
95===t||// _
36===t}))}function O(e){return b(e,(e=>{const t=e.charCodeAt(0);return t>=48&&t<=57;// 0-9
}))}function w(e){return b(e,(e=>{const t=e.charCodeAt(0);return t>=48&&t<=57||// 0-9
t>=65&&t<=70||// A-F
t>=97&&t<=102;// a-f
}))}function C(e){let t="",n="";for(;t=O(e);)n+=t;return n}function A(e){let t="";for(;;){const n=e.currentChar();if("{"/* BraceLeft */===n||"}"/* BraceRight */===n||"@"/* LinkedAlias */===n||"|"/* Pipe */===n||!n)break;if("%"/* Modulo */===n){if(!E(e))break;t+=n,e.next()}else if(n===cr||n===lr)if(E(e))t+=n,e.next();else{if(v(e))break;t+=n,e.next()}else t+=n,e.next()}return t}function L(e){const t=e.currentChar();switch(t){case"\\":case"'":return e.next(),`\\${t}`;case"u":return N(e,t,4);case"U":return N(e,t,6);default:return f(rr.UNKNOWN_ESCAPE_SEQUENCE,i(),0,t),""}}function N(e,t,n){d(e,t);let r="";for(let o=0;o<n;o++){const n=w(e);if(!n){f(rr.INVALID_UNICODE_ESCAPE_SEQUENCE,i(),0,`\\${t}${r}${e.currentChar()}`);break}r+=n}return`\\${t}${r}`}function T(e){m(e);const t=d(e,"|"/* Pipe */);return m(e),t}// TODO: We need refactoring of token parsing ...
function M(e,t){let n=null;switch(e.currentChar()){case"{"/* BraceLeft */:return t.braceNest>=1&&f(rr.NOT_ALLOW_NEST_PLACEHOLDER,i(),0),e.next(),n=h(t,2/* BraceLeft */,"{"/* BraceLeft */),m(e),t.braceNest++,n;case"}"/* BraceRight */:return t.braceNest>0&&2/* BraceLeft */===t.currentType&&f(rr.EMPTY_PLACEHOLDER,i(),0),e.next(),n=h(t,3/* BraceRight */,"}"/* BraceRight */),t.braceNest--,t.braceNest>0&&m(e),t.inLinked&&0===t.braceNest&&(t.inLinked=!1),n;case"@"/* LinkedAlias */:return t.braceNest>0&&f(rr.UNTERMINATED_CLOSING_BRACE,i(),0),n=R(e,t)||p(t),t.braceNest=0,n;default:let r=!0,o=!0,s=!0;if(v(e))return t.braceNest>0&&f(rr.UNTERMINATED_CLOSING_BRACE,i(),0),n=h(t,1/* Pipe */,T(e)),// reset
t.braceNest=0,t.inLinked=!1,n;if(t.braceNest>0&&(5/* Named */===t.currentType||6/* List */===t.currentType||7/* Literal */===t.currentType))return f(rr.UNTERMINATED_CLOSING_BRACE,i(),0),t.braceNest=0,k(e,t);if(r=function(e,t){const{currentType:n}=t;if(2/* BraceLeft */!==n)return!1;g(e);const r=_(e.currentPeek());return e.resetPeek(),r}(e,t))return n=h(t,5/* Named */,function(e){m(e);let t="",n="";for(;t=S(e);)n+=t;return e.currentChar()===dr&&f(rr.UNTERMINATED_CLOSING_BRACE,i(),0),n}(e)),m(e),n;if(o=y(e,t))return n=h(t,6/* List */,function(e){m(e);let t="";return"-"===e.currentChar()?(e.next(),t+=`-${C(e)}`):t+=C(e),e.currentChar()===dr&&f(rr.UNTERMINATED_CLOSING_BRACE,i(),0),t}(e)),m(e),n;if(s=function(e,t){const{currentType:n}=t;if(2/* BraceLeft */!==n)return!1;g(e);const r="'"===e.currentPeek();return e.resetPeek(),r}(e,t))return n=h(t,7/* Literal */,function(e){m(e),d(e,"'");let t="",n="";const r=e=>"'"!==e&&e!==lr;for(;t=b(e,r);)n+="\\"===t?L(e):t;const o=e.currentChar();return o===lr||o===dr?(f(rr.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,i(),0),// TODO: Is it correct really?
o===lr&&(e.next(),d(e,"'")),n):(d(e,"'"),n)}(e)),m(e),n;if(!r&&!o&&!s)// TODO: we should be re-designed invalid cases, when we will extend message syntax near the future ...
return n=h(t,13/* InvalidPlace */,function(e){m(e);let t="",n="";const r=e=>"{"/* BraceLeft */!==e&&"}"/* BraceRight */!==e&&e!==cr&&e!==lr;for(;t=b(e,r);)n+=t;return n}(e)),f(rr.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,n.value),m(e),n}return n}// TODO: We need refactoring of token parsing ...
function R(e,t){const{currentType:n}=t;let r=null;const o=e.currentChar();switch(8/* LinkedAlias */!==n&&9/* LinkedDot */!==n&&12/* LinkedModifier */!==n&&10/* LinkedDelimiter */!==n||o!==lr&&o!==cr||f(rr.INVALID_LINKED_FORMAT,i(),0),o){case"@"/* LinkedAlias */:return e.next(),r=h(t,8/* LinkedAlias */,"@"/* LinkedAlias */),t.inLinked=!0,r;case"."/* LinkedDot */:return m(e),e.next(),h(t,9/* LinkedDot */,"."/* LinkedDot */);case":"/* LinkedDelimiter */:return m(e),e.next(),h(t,10/* LinkedDelimiter */,":"/* LinkedDelimiter */);default:return v(e)?(r=h(t,1/* Pipe */,T(e)),// reset
t.braceNest=0,t.inLinked=!1,r):function(e,t){const{currentType:n}=t;if(8/* LinkedAlias */!==n)return!1;g(e);const r="."/* LinkedDot */===e.currentPeek();return e.resetPeek(),r}(e,t)||function(e,t){const{currentType:n}=t;if(8/* LinkedAlias */!==n&&12/* LinkedModifier */!==n)return!1;g(e);const r=":"/* LinkedDelimiter */===e.currentPeek();return e.resetPeek(),r}(e,t)?(m(e),R(e,t)):function(e,t){const{currentType:n}=t;if(9/* LinkedDot */!==n)return!1;g(e);const r=_(e.currentPeek());return e.resetPeek(),r}(e,t)?(m(e),h(t,12/* LinkedModifier */,function(e){let t="",n="";for(;t=S(e);)n+=t;return n}(e))):function(e,t){const{currentType:n}=t;if(10/* LinkedDelimiter */!==n)return!1;const r=()=>{const t=e.currentPeek();return"{"/* BraceLeft */===t?_(e.peek()):!("@"/* LinkedAlias */===t||"%"/* Modulo */===t||"|"/* Pipe */===t||":"/* LinkedDelimiter */===t||"."/* LinkedDot */===t||t===cr||!t)&&(t===lr?(e.peek(),r()):_(t))},o=r();return e.resetPeek(),o}(e,t)?(m(e),"{"/* BraceLeft */===o?M(e,t)||r:h(t,11/* LinkedKey */,function(e){const t=(n=!1,r)=>{const o=e.currentChar();return"{"/* BraceLeft */!==o&&"%"/* Modulo */!==o&&"@"/* LinkedAlias */!==o&&"|"/* Pipe */!==o&&o?o===cr?r:o===lr?(r+=o,e.next(),t(n,r)):(r+=o,e.next(),t(!0,r)):r};return t(!1,"")}(e))):(8/* LinkedAlias */===n&&f(rr.INVALID_LINKED_FORMAT,i(),0),t.braceNest=0,t.inLinked=!1,k(e,t))}}// TODO: We need refactoring of token parsing ...
function k(e,t){let n={type:14/* EOF */};if(t.braceNest>0)return M(e,t)||p(t);if(t.inLinked)return R(e,t)||p(t);switch(e.currentChar()){case"{"/* BraceLeft */:return M(e,t)||p(t);case"}"/* BraceRight */:return f(rr.UNBALANCED_CLOSING_BRACE,i(),0),e.next(),h(t,3/* BraceRight */,"}"/* BraceRight */);case"@"/* LinkedAlias */:return R(e,t)||p(t);default:if(v(e))return n=h(t,1/* Pipe */,T(e)),// reset
t.braceNest=0,t.inLinked=!1,n;const{isModulo:r,hasSpace:o}=function(e){const t=g(e),n="%"/* Modulo */===e.currentPeek()&&"{"/* BraceLeft */===e.peek();return e.resetPeek(),{isModulo:n,hasSpace:t.length>0}}(e);if(r)return o?h(t,0/* Text */,A(e)):h(t,4/* Modulo */,function(e){m(e);const t=e.currentChar();return"%"/* Modulo */!==t&&f(rr.EXPECTED_TOKEN,i(),0,t),e.next(),"%"/* Modulo */}(e));if(E(e))return h(t,0/* Text */,A(e))}return n}return{nextToken:function(){const{currentType:e,offset:t,startLoc:n,endLoc:s}=u;return u.lastType=e,u.lastOffset=t,u.lastStartLoc=n,u.lastEndLoc=s,u.offset=o(),u.startLoc=i(),r.currentChar()===dr?h(u,14/* EOF */):k(r,u)},currentOffset:o,currentPosition:i,context:c}}const mr="parser",_r=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;// Backslash backslash, backslash quote, uHHHH, UHHHHHH.
function yr(e,t,n){switch(e){case"\\\\":return"\\";case"\\'":return"'";default:{const e=parseInt(t||n,16);return e<=55295||e>=57344?String.fromCodePoint(e):"�";// invalid ...
// Replace them with U+FFFD REPLACEMENT CHARACTER.
}}}function vr(e={}){const t=!1!==e.location,{onError:n}=e;function r(e,t,r,o,...i){const s=e.currentPosition();if(s.offset+=o,s.column+=o,n){const e=ir(t,ur(r,s),{domain:mr,args:i});n(e)}}function o(e,n,r){const o={type:e,start:n,end:n};return t&&(o.loc={start:r,end:r}),o}function i(e,n,r,o){e.end=n,o&&(e.type=o),t&&e.loc&&(e.loc.end=r)}function s(e,t){const n=e.context(),r=o(3/* Text */,n.offset,n.startLoc);return r.value=t,i(r,e.currentOffset(),e.currentPosition()),r}function a(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:s}=n,a=o(5/* List */,r,s);return a.index=parseInt(t,10),e.nextToken(),// skip brach right
i(a,e.currentOffset(),e.currentPosition()),a}function u(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:s}=n,a=o(4/* Named */,r,s);return a.key=t,e.nextToken(),// skip brach right
i(a,e.currentOffset(),e.currentPosition()),a}function c(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:s}=n,a=o(9/* Literal */,r,s);return a.value=t.replace(_r,yr),e.nextToken(),// skip brach right
i(a,e.currentOffset(),e.currentPosition()),a}function l(e){const t=e.context(),n=o(6/* Linked */,t.offset,t.startLoc);let s=e.nextToken();if(9/* LinkedDot */===s.type){const t=function(e){const t=e.nextToken(),n=e.context(),{lastOffset:s,lastStartLoc:a}=n,u=o(8/* LinkedModifier */,s,a);return 12/* LinkedModifier */!==t.type?(// empty modifier
r(e,rr.UNEXPECTED_EMPTY_LINKED_MODIFIER,n.lastStartLoc,0),u.value="",i(u,s,a),{nextConsumeToken:t,node:u}):(// check token
null==t.value&&r(e,rr.UNEXPECTED_LEXICAL_ANALYSIS,n.lastStartLoc,0,Er(t)),u.value=t.value||"",i(u,e.currentOffset(),e.currentPosition()),{node:u})}(e);n.modifier=t.node,s=t.nextConsumeToken||e.nextToken()}// asset check token
switch(10/* LinkedDelimiter */!==s.type&&r(e,rr.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,Er(s)),s=e.nextToken(),// skip brace left
2/* BraceLeft */===s.type&&(s=e.nextToken()),s.type){case 11/* LinkedKey */:null==s.value&&r(e,rr.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,Er(s)),n.key=function(e,t){const n=e.context(),r=o(7/* LinkedKey */,n.offset,n.startLoc);return r.value=t,i(r,e.currentOffset(),e.currentPosition()),r}(e,s.value||"");break;case 5/* Named */:null==s.value&&r(e,rr.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,Er(s)),n.key=u(e,s.value||"");break;case 6/* List */:null==s.value&&r(e,rr.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,Er(s)),n.key=a(e,s.value||"");break;case 7/* Literal */:null==s.value&&r(e,rr.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,Er(s)),n.key=c(e,s.value||"");break;default:// empty key
r(e,rr.UNEXPECTED_EMPTY_LINKED_KEY,t.lastStartLoc,0);const l=e.context(),f=o(7/* LinkedKey */,l.offset,l.startLoc);return f.value="",i(f,l.offset,l.startLoc),n.key=f,i(n,l.offset,l.startLoc),{nextConsumeToken:s,node:n}}return i(n,e.currentOffset(),e.currentPosition()),{node:n}}function f(e){const t=e.context(),n=o(2/* Message */,1/* Pipe */===t.currentType?e.currentOffset():t.offset,1/* Pipe */===t.currentType?t.endLoc:t.startLoc);n.items=[];let f=null;do{const o=f||e.nextToken();switch(f=null,o.type){case 0/* Text */:null==o.value&&r(e,rr.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,Er(o)),n.items.push(s(e,o.value||""));break;case 6/* List */:null==o.value&&r(e,rr.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,Er(o)),n.items.push(a(e,o.value||""));break;case 5/* Named */:null==o.value&&r(e,rr.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,Er(o)),n.items.push(u(e,o.value||""));break;case 7/* Literal */:null==o.value&&r(e,rr.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,Er(o)),n.items.push(c(e,o.value||""));break;case 8/* LinkedAlias */:const i=l(e);n.items.push(i.node),f=i.nextConsumeToken||null}}while(14/* EOF */!==t.currentType&&1/* Pipe */!==t.currentType);// adjust message node loc
return i(n,1/* Pipe */===t.currentType?t.lastOffset:e.currentOffset(),1/* Pipe */===t.currentType?t.lastEndLoc:e.currentPosition()),n}function h(e){const t=e.context(),{offset:n,startLoc:s}=t,a=f(e);return 14/* EOF */===t.currentType?a:function(e,t,n,s){const a=e.context();let u=0===s.items.length;const c=o(1/* Plural */,t,n);c.cases=[],c.cases.push(s);do{const t=f(e);u||(u=0===t.items.length),c.cases.push(t)}while(14/* EOF */!==a.currentType);return u&&r(e,rr.MUST_HAVE_MESSAGES_IN_PLURAL,n,0),i(c,e.currentOffset(),e.currentPosition()),c}(e,n,s,a)}return{parse:function(n){const s=gr(n,tr.assign({},e)),a=s.context(),u=o(0/* Resource */,a.offset,a.startLoc);return t&&u.loc&&(u.loc.source=n),u.body=h(s),// assert whether achieved to EOF
14/* EOF */!==a.currentType&&r(s,rr.UNEXPECTED_LEXICAL_ANALYSIS,a.lastStartLoc,0,n[a.offset]||""),i(u,s.currentOffset(),s.currentPosition()),u}}}function Er(e){if(14/* EOF */===e.type)return"EOF";const t=(e.value||"").replace(/\r?\n/gu,"\\n");return t.length>10?t.slice(0,9)+"…":t}function br(e,t){for(let n=0;n<e.length;n++)Sr(e[n],t)}function Sr(e,t){// TODO: if we need pre-hook of transform, should be implemented to here
switch(e.type){case 1/* Plural */:br(e.cases,t),t.helper("plural"/* PLURAL */);break;case 2/* Message */:br(e.items,t);break;case 6/* Linked */:Sr(e.key,t),t.helper("linked"/* LINKED */),t.helper("type"/* TYPE */);break;case 5/* List */:t.helper("interpolate"/* INTERPOLATE */),t.helper("list"/* LIST */);break;case 4/* Named */:t.helper("interpolate"/* INTERPOLATE */),t.helper("named"/* NAMED */)}// TODO: if we need post-hook of transform, should be implemented to here
}// transform AST
function Or(e,t={}){const n=function(e,t={}){const n={ast:e,helpers:new Set};return{context:()=>n,helper:e=>(n.helpers.add(e),e)}}(e);n.helper("normalize"/* NORMALIZE */),// traverse
e.body&&Sr(e.body,n);// set meta information
const r=n.context();e.helpers=Array.from(r.helpers)}function wr(e,t){const{sourceMap:n,filename:r,breakLineCode:o,needIndent:i}=t,s={source:e.loc.source,filename:r,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:o,needIndent:i,indentLevel:0};function a(e,t){var n,r;s.code+=e,s.map&&(t&&t.loc&&t.loc!==sr&&(n=t.loc.start,r=function(e){switch(e.type){case 3/* Text */:case 9/* Literal */:case 8/* LinkedModifier */:case 7/* LinkedKey */:return e.value;case 5/* List */:return e.index.toString();case 4/* Named */:return e.key;default:return}}(t),s.map.addMapping({name:r,source:s.filename,original:{line:n.line,column:n.column-1},generated:{line:s.line,column:s.column-1}})),function(e,t,n=t.length){let r=0,o=-1;for(let i=0;i<n;i++)10/* newline char code */===t.charCodeAt(i)&&(r++,o=i);e.offset+=n,e.line+=r,e.column=-1===o?e.column+n:n-o}(s,e))}function u(e,t=!0){const n=t?o:"";a(i?n+"  ".repeat(e):n)}return n&&(s.map=new nr.SourceMapGenerator,s.map.setSourceContent(r,s.source)),{context:()=>s,push:a,indent:function(e=!0){const t=++s.indentLevel;e&&u(t)},deindent:function(e=!0){const t=--s.indentLevel;e&&u(t)},newline:function(){u(s.indentLevel)},helper:e=>`_${e}`,needIndent:()=>s.needIndent}}function Cr(e,t){const{helper:n}=e;switch(t.type){case 0/* Resource */:!function(e,t){t.body?Cr(e,t.body):e.push("null")}(e,t);break;case 1/* Plural */:!function(e,t){const{helper:n,needIndent:r}=e;if(t.cases.length>1){e.push(`${n("plural"/* PLURAL */)}([`),e.indent(r());const o=t.cases.length;for(let n=0;n<o&&(Cr(e,t.cases[n]),n!==o-1);n++)e.push(", ");e.deindent(r()),e.push("])")}}(e,t);break;case 2/* Message */:!function(e,t){const{helper:n,needIndent:r}=e;e.push(`${n("normalize"/* NORMALIZE */)}([`),e.indent(r());const o=t.items.length;for(let i=0;i<o&&(Cr(e,t.items[i]),i!==o-1);i++)e.push(", ");e.deindent(r()),e.push("])")}(e,t);break;case 6/* Linked */:!function(e,t){const{helper:n}=e;e.push(`${n("linked"/* LINKED */)}(`),Cr(e,t.key),t.modifier?(e.push(", "),Cr(e,t.modifier),e.push(", _type")):e.push(", undefined, _type"),e.push(")")}(e,t);break;case 8/* LinkedModifier */:case 7/* LinkedKey */:case 9/* Literal */:case 3/* Text */:e.push(JSON.stringify(t.value),t);break;case 5/* List */:e.push(`${n("interpolate"/* INTERPOLATE */)}(${n("list"/* LIST */)}(${t.index}))`,t);break;case 4/* Named */:e.push(`${n("interpolate"/* INTERPOLATE */)}(${n("named"/* NAMED */)}(${JSON.stringify(t.key)}))`,t)}}// generate code from AST
dn.CompileErrorCodes=rr,dn.ERROR_DOMAIN=mr,dn.LocationStub=sr,dn.baseCompile=function(e,t={}){const n=tr.assign({},t),r=vr(n).parse(e);// parse source codes
// generate javascript codes
// transform ASTs
return Or(r,n),((e,t={})=>{const n=tr.isString(t.mode)?t.mode:"normal",r=tr.isString(t.filename)?t.filename:"message.intl",o=!!t.sourceMap,i=null!=t.breakLineCode?t.breakLineCode:"arrow"===n?";":"\n",s=t.needIndent?t.needIndent:"arrow"!==n,a=e.helpers||[],u=wr(e,{mode:n,filename:r,sourceMap:o,breakLineCode:i,needIndent:s});u.push("normal"===n?"function __msg__ (ctx) {":"(ctx) => {"),u.indent(s),a.length>0&&(u.push(`const { ${a.map((e=>`${e}: _${e}`)).join(", ")} } = ctx`),u.newline()),u.push("return "),Cr(u,e),u.deindent(s),u.push("}");const{code:c,map:l}=u.context();return{ast:e,code:c,map:l?l.toJSON():void 0}})(r,n)},dn.createCompileError=ir,dn.createLocation=ur,dn.createParser=vr,dn.createPosition=ar,dn.defaultOnError=function(e){throw e},dn.errorMessages=or,function(e){e.exports=dn}(pn);var Ar={exports:{}},Lr={};
/*!
        * devtools-if v9.2.2
        * (c) 2022 kazuya kawaguchi
        * Released under the MIT License.
        */
Object.defineProperty(Lr,"__esModule",{value:!0}),Lr.IntlifyDevToolsHooks={I18nInit:"i18n:init",FunctionTranslate:"function:translate"},function(e){e.exports=Lr}(Ar),
/*!
        * core-base v9.2.2
        * (c) 2022 kazuya kawaguchi
        * Released under the MIT License.
        */
Object.defineProperty(hn,"__esModule",{value:!0});var Nr=pn.exports,Tr=Kt.exports,Mr=Ar.exports;const Rr=[];Rr[0/* BEFORE_PATH */]={w:[0/* BEFORE_PATH */],i:[3/* IN_IDENT */,0/* APPEND */],"[":[4/* IN_SUB_PATH */],o:[7/* AFTER_PATH */]},Rr[1/* IN_PATH */]={w:[1/* IN_PATH */],".":[2/* BEFORE_IDENT */],"[":[4/* IN_SUB_PATH */],o:[7/* AFTER_PATH */]},Rr[2/* BEFORE_IDENT */]={w:[2/* BEFORE_IDENT */],i:[3/* IN_IDENT */,0/* APPEND */],0:[3/* IN_IDENT */,0/* APPEND */]},Rr[3/* IN_IDENT */]={i:[3/* IN_IDENT */,0/* APPEND */],0:[3/* IN_IDENT */,0/* APPEND */],w:[1/* IN_PATH */,1/* PUSH */],".":[2/* BEFORE_IDENT */,1/* PUSH */],"[":[4/* IN_SUB_PATH */,1/* PUSH */],o:[7/* AFTER_PATH */,1/* PUSH */]},Rr[4/* IN_SUB_PATH */]={"'":[5/* IN_SINGLE_QUOTE */,0/* APPEND */],'"':[6/* IN_DOUBLE_QUOTE */,0/* APPEND */],"[":[4/* IN_SUB_PATH */,2/* INC_SUB_PATH_DEPTH */],"]":[1/* IN_PATH */,3/* PUSH_SUB_PATH */],o:8/* ERROR */,l:[4/* IN_SUB_PATH */,0/* APPEND */]},Rr[5/* IN_SINGLE_QUOTE */]={"'":[4/* IN_SUB_PATH */,0/* APPEND */],o:8/* ERROR */,l:[5/* IN_SINGLE_QUOTE */,0/* APPEND */]},Rr[6/* IN_DOUBLE_QUOTE */]={'"':[4/* IN_SUB_PATH */,0/* APPEND */],o:8/* ERROR */,l:[6/* IN_DOUBLE_QUOTE */,0/* APPEND */]};
/**
       * Check if an expression is a literal value.
       */
const kr=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
/**
       * Determine the type of a character in a keypath.
       */
function Dr(e){if(null==e)return"o"/* END_OF_FAIL */;switch(e.charCodeAt(0)){case 91:// [
case 93:// ]
case 46:// .
case 34:// "
case 39:// '
return e;case 95:// _
case 36:// $
case 45:// -
return"i"/* IDENT */;case 9:// Tab (HT)
case 10:// Newline (LF)
case 13:// Return (CR)
case 160:// No-break space (NBSP)
case 65279:// Byte Order Mark (BOM)
case 8232:// Line Separator (LS)
case 8233:// Paragraph Separator (PS)
return"w"/* WORKSPACE */}return"i"/* IDENT */}
/**
       * Format a subPath, return its plain form if it is
       * a literal string or number. Otherwise prepend the
       * dynamic indicator (*).
       */function Pr(e){const t=e.trim();// invalid leading 0
return("0"!==e.charAt(0)||!isNaN(parseInt(e)))&&(n=t,kr.test(n)?
/**
       * Strip quotes from a string
       */
function(e){const t=e.charCodeAt(0);return t!==e.charCodeAt(e.length-1)||34!==t&&39!==t?e:e.slice(1,-1)}(t):"*"/* ASTARISK */+t);var n}
/**
       * Parse a string path into an array of segments
       */function xr(e){const t=[];let n,r,o,i,s,a,u,c=-1,l=0/* BEFORE_PATH */,f=0;const h=[];function p(){const t=e[c+1];if(5/* IN_SINGLE_QUOTE */===l&&"'"/* SINGLE_QUOTE */===t||6/* IN_DOUBLE_QUOTE */===l&&'"'/* DOUBLE_QUOTE */===t)return c++,o="\\"+t,h[0/* APPEND */](),!0}for(h[0/* APPEND */]=()=>{void 0===r?r=o:r+=o},h[1/* PUSH */]=()=>{void 0!==r&&(t.push(r),r=void 0)},h[2/* INC_SUB_PATH_DEPTH */]=()=>{h[0/* APPEND */](),f++},h[3/* PUSH_SUB_PATH */]=()=>{if(f>0)f--,l=4/* IN_SUB_PATH */,h[0/* APPEND */]();else{if(f=0,void 0===r)return!1;if(r=Pr(r),!1===r)return!1;h[1/* PUSH */]()}};null!==l;)if(c++,n=e[c],"\\"!==n||!p()){// check parse error
if(i=Dr(n),u=Rr[l],s=u[i]||u.l||8/* ERROR */,8/* ERROR */===s)return;if(l=s[0],void 0!==s[1]&&(a=h[s[1]],a&&(o=n,!1===a())))return;// check parse finish
if(7/* AFTER_PATH */===l)return t}}// path token cache
const Ir=new Map;
/**
       * key-value message resolver
       *
       * @remarks
       * Resolves messages with the key-value structure. Note that messages with a hierarchical structure such as objects cannot be resolved
       *
       * @param obj - A target object to be resolved with path
       * @param path - A {@link Path | path} to resolve the value of message
       *
       * @returns A resolved {@link PathValue | path value}
       *
       * @VueI18nGeneral
       */function $r(e,t){return Tr.isObject(e)?e[t]:null}
/**
       * message resolver
       *
       * @remarks
       * Resolves messages. messages with a hierarchical structure such as objects can be resolved. This resolver is used in VueI18n as default.
       *
       * @param obj - A target object to be resolved with path
       * @param path - A {@link Path | path} to resolve the value of message
       *
       * @returns A resolved {@link PathValue | path value}
       *
       * @VueI18nGeneral
       */const Ur=e=>e,jr=e=>""// eslint-disable-line
,Fr="text",Br=e=>0===e.length?"":e.join(""),Gr=Tr.toDisplayString;function Wr(e,t){return e=Math.abs(e),2===t?e?e>1?1:0:1:e?Math.min(e,2):0}function Hr(e={}){const t=e.locale,n=function(e){// prettier-ignore
const t=Tr.isNumber(e.pluralIndex)?e.pluralIndex:-1;// prettier-ignore
return e.named&&(Tr.isNumber(e.named.count)||Tr.isNumber(e.named.n))?Tr.isNumber(e.named.count)?e.named.count:Tr.isNumber(e.named.n)?e.named.n:t:t}(e),r=Tr.isObject(e.pluralRules)&&Tr.isString(t)&&Tr.isFunction(e.pluralRules[t])?e.pluralRules[t]:Wr,o=Tr.isObject(e.pluralRules)&&Tr.isString(t)&&Tr.isFunction(e.pluralRules[t])?Wr:void 0,i=e.list||[],s=e.named||{};function a(t){// prettier-ignore
const n=Tr.isFunction(e.messages)?e.messages(t):!!Tr.isObject(e.messages)&&e.messages[t];return n||(e.parent?e.parent.message(t):jr)}Tr.isNumber(e.pluralIndex)&&function(e,t){t.count||(t.count=e),t.n||(t.n=e)}(n,s);const u=Tr.isPlainObject(e.processor)&&Tr.isFunction(e.processor.normalize)?e.processor.normalize:Br,c=Tr.isPlainObject(e.processor)&&Tr.isFunction(e.processor.interpolate)?e.processor.interpolate:Gr,l={list:e=>i[e]// eslint-disable-next-line @typescript-eslint/no-explicit-any
,named:e=>s[e],plural:e=>e[r(n,e.length,o)],linked:(t,...n)=>{const[r,o]=n;let i="text",s="";1===n.length?Tr.isObject(r)?(s=r.modifier||s,i=r.type||i):Tr.isString(r)&&(s=r||s):2===n.length&&(Tr.isString(r)&&(s=r||s),Tr.isString(o)&&(i=o||i));let u=a(t)(l);// The message in vnode resolved with linked are returned as an array by processor.nomalize
return"vnode"===i&&Tr.isArray(u)&&s&&(u=u[0]),s?(c=s,e.modifiers?e.modifiers[c]:Ur)(u,i):u;var c},message:a,type:Tr.isPlainObject(e.processor)&&Tr.isString(e.processor.type)?e.processor.type:Fr,interpolate:c,normalize:u};return l}let Yr=null;const Vr=zr(Mr.IntlifyDevToolsHooks.FunctionTranslate);function zr(e){return t=>Yr&&Yr.emit(e,t)}const Xr={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,__EXTEND_POINT__:7},Kr={[Xr.NOT_FOUND_KEY]:"Not found '{key}' key in '{locale}' locale messages.",[Xr.FALLBACK_TO_TRANSLATE]:"Fall back to translate '{key}' key with '{target}' locale.",[Xr.CANNOT_FORMAT_NUMBER]:"Cannot format a number value due to not supported Intl.NumberFormat.",[Xr.FALLBACK_TO_NUMBER_FORMAT]:"Fall back to number format '{key}' key with '{target}' locale.",[Xr.CANNOT_FORMAT_DATE]:"Cannot format a date value due to not supported Intl.DateTimeFormat.",[Xr.FALLBACK_TO_DATE_FORMAT]:"Fall back to datetime format '{key}' key with '{target}' locale."};/** @internal */
/**
       * Fallback with simple implemenation
       *
       * @remarks
       * A fallback locale function implemented with a simple fallback algorithm.
       *
       * Basically, it returns the value as specified in the `fallbackLocale` props, and is processed with the fallback inside intlify.
       *
       * @param ctx - A {@link CoreContext | context}
       * @param fallback - A {@link FallbackLocale | fallback locale}
       * @param start - A starting {@link Locale | locale}
       *
       * @returns Fallback locales
       *
       * @VueI18nGeneral
       */
function qr(e,t,n){// prettier-ignore
return[...new Set([n,...Tr.isArray(t)?t:Tr.isObject(t)?Object.keys(t):Tr.isString(t)?[t]:[n]])]}
/**
       * Fallback with locale chain
       *
       * @remarks
       * A fallback locale function implemented with a fallback chain algorithm. It's used in VueI18n as default.
       *
       * @param ctx - A {@link CoreContext | context}
       * @param fallback - A {@link FallbackLocale | fallback locale}
       * @param start - A starting {@link Locale | locale}
       *
       * @returns Fallback locales
       *
       * @VueI18nSee [Fallbacking](../guide/essentials/fallback)
       *
       * @VueI18nGeneral
       */function Jr(e,t,n){let r=!0;for(let o=0;o<t.length&&Tr.isBoolean(r);o++){const i=t[o];Tr.isString(i)&&(r=Qr(e,t[o],n))}return r}function Qr(e,t,n){let r;const o=t.split("-");do{r=Zr(e,o.join("-"),n),o.splice(-1,1)}while(o.length&&!0===r);return r}function Zr(e,t,n){let r=!1;if(!e.includes(t)&&(r=!0,t)){r="!"!==t[t.length-1];const o=t.replace(/!/g,"");e.push(o),(Tr.isArray(n)||Tr.isPlainObject(n))&&n[o]&&(// eslint-disable-next-line @typescript-eslint/no-explicit-any
r=n[o])}return r}/* eslint-disable @typescript-eslint/no-explicit-any */
/**
       * Intlify core-base version
       * @internal
       */const eo="9.2.2",to="en-US",no=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;let ro,oo,io,so=null,ao=null,uo=0;/** @internal */function co(e,t,n,r,o){const{missing:i,onWarn:s}=e;if(null!==i){const r=i(e,n,t,o);return Tr.isString(r)?r:t}return t}/** @internal */ /* eslint-enable @typescript-eslint/no-explicit-any */const lo=e=>e;let fo=Object.create(null),ho=Nr.CompileErrorCodes.__EXTEND_POINT__;const po=()=>++ho,go={INVALID_ARGUMENT:ho,INVALID_DATE_ARGUMENT:po(),INVALID_ISO_DATE_ARGUMENT:po(),__EXTEND_POINT__:po()};function mo(e){return Nr.createCompileError(e,null,void 0)}/** @internal */const _o=()=>"",yo=e=>Tr.isFunction(e)// implementation of `translate` function;
function vo(e,t,n,r,o,i){const{messages:s,onWarn:a,messageResolver:u,localeFallbacker:c}=e,l=c(e,r,n);// eslint-disable-line @typescript-eslint/no-explicit-any
let f,h={},p=null;for(let d=0;d<l.length&&(f=l[d],h=s[f]||{},null===(p=u(h,t))&&(// if null, resolve with object key path
p=h[t]),!Tr.isString(p)&&!Tr.isFunction(p));d++){const n=co(e,// eslint-disable-line @typescript-eslint/no-explicit-any
t,f,0,"translate");n!==t&&(p=n)}return[p,f,h]}function Eo(e,t,n,r,o,i){const{messageCompiler:s,warnHtmlMessage:a}=e;if(yo(r)){const e=r;return e.locale=e.locale||n,e.key=e.key||t,e}if(null==s){const e=()=>r;return e.locale=n,e.key=t,e}const u=s(r,function(e,t,n,r,o,i){return{warnHtmlMessage:o,onError:e=>{throw i&&i(e),e},onCacheKey:e=>Tr.generateFormatCacheKey(t,n,e)}}(0,n,o,0,a,i));return u.locale=n,u.key=t,u.source=r,u}/** @internal */function bo(...e){const[t,n,r]=e,o={};if(!Tr.isString(t)&&!Tr.isNumber(t)&&!yo(t))throw mo(go.INVALID_ARGUMENT);// prettier-ignore
const i=Tr.isNumber(t)?String(t):(yo(t),t);return Tr.isNumber(n)?o.plural=n:Tr.isString(n)?o.default=n:Tr.isPlainObject(n)&&!Tr.isEmptyObject(n)?o.named=n:Tr.isArray(n)&&(o.list=n),Tr.isNumber(r)?o.plural=r:Tr.isString(r)?o.default=r:Tr.isPlainObject(r)&&Tr.assign(o,r),[i,o]}/** @internal */const So=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];/** @internal */function Oo(...e){const[t,n,r,o]=e,i={};let s,a={};if(Tr.isString(t)){// Only allow ISO strings - other date formats are often supported,
// but may cause different results in different browsers.
const e=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!e)throw mo(go.INVALID_ISO_DATE_ARGUMENT);// Some browsers can not parse the iso datetime separated by space,
// this is a compromise solution by replace the 'T'/' ' with 'T'
const n=e[3]?e[3].trim().startsWith("T")?`${e[1].trim()}${e[3].trim()}`:`${e[1].trim()}T${e[3].trim()}`:e[1].trim();s=new Date(n);try{// This will fail if the date is not valid
s.toISOString()}catch(Ao){throw mo(go.INVALID_ISO_DATE_ARGUMENT)}}else if(Tr.isDate(t)){if(isNaN(t.getTime()))throw mo(go.INVALID_DATE_ARGUMENT);s=t}else{if(!Tr.isNumber(t))throw mo(go.INVALID_ARGUMENT);s=t}return Tr.isString(n)?i.key=n:Tr.isPlainObject(n)&&Object.keys(n).forEach((e=>{So.includes(e)?a[e]=n[e]:i[e]=n[e]})),Tr.isString(r)?i.locale=r:Tr.isPlainObject(r)&&(a=r),Tr.isPlainObject(o)&&(a=o),[i.key||"",s,i,a]}/** @internal */ /** @internal */const wo=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];/** @internal */function Co(...e){const[t,n,r,o]=e,i={};let s={};if(!Tr.isNumber(t))throw mo(go.INVALID_ARGUMENT);const a=t;return Tr.isString(n)?i.key=n:Tr.isPlainObject(n)&&Object.keys(n).forEach((e=>{wo.includes(e)?s[e]=n[e]:i[e]=n[e]})),Tr.isString(r)?i.locale=r:Tr.isPlainObject(r)&&(s=r),Tr.isPlainObject(o)&&(s=o),[i.key||"",a,i,s]}/** @internal */hn.CompileErrorCodes=Nr.CompileErrorCodes,hn.createCompileError=Nr.createCompileError,hn.CoreErrorCodes=go,hn.CoreWarnCodes=Xr,hn.DATETIME_FORMAT_OPTIONS_KEYS=So,hn.DEFAULT_LOCALE=to,hn.DEFAULT_MESSAGE_DATA_TYPE=Fr,hn.MISSING_RESOLVE_VALUE="",hn.NOT_REOSLVED=-1,hn.NUMBER_FORMAT_OPTIONS_KEYS=wo,hn.VERSION=eo,hn.clearCompileCache=function(){fo=Object.create(null)},hn.clearDateTimeFormat=function(e,t,n){const r=e;for(const o in n){const e=`${t}__${o}`;r.__datetimeFormatters.has(e)&&r.__datetimeFormatters.delete(e)}}// implementation of `number` function
,hn.clearNumberFormat=function(e,t,n){const r=e;for(const o in n){const e=`${t}__${o}`;r.__numberFormatters.has(e)&&r.__numberFormatters.delete(e)}},hn.compileToFunction=function(e,t={}){{// check caches
const n=(t.onCacheKey||lo)(e),r=fo[n];if(r)return r;// compile error detecting
let o=!1;const i=t.onError||Nr.defaultOnError;t.onError=e=>{o=!0,i(e)};// compile
const{code:s}=Nr.baseCompile(e,t),a=new Function(`return ${s}`)();// evaluate function
// if occurred compile error, don't cache
return o?a:fo[n]=a}},hn.createCoreContext=function(e={}){// setup options
const t=Tr.isString(e.version)?e.version:eo,n=Tr.isString(e.locale)?e.locale:to,r=Tr.isArray(e.fallbackLocale)||Tr.isPlainObject(e.fallbackLocale)||Tr.isString(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:n,o=Tr.isPlainObject(e.messages)?e.messages:{[n]:{}},i=Tr.isPlainObject(e.datetimeFormats)?e.datetimeFormats:{[n]:{}},s=Tr.isPlainObject(e.numberFormats)?e.numberFormats:{[n]:{}},a=Tr.assign({},e.modifiers||{},{upper:(e,t)=>"text"===t&&Tr.isString(e)?e.toUpperCase():"vnode"===t&&Tr.isObject(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>"text"===t&&Tr.isString(e)?e.toLowerCase():"vnode"===t&&Tr.isObject(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>"text"===t&&Tr.isString(e)?no(e):"vnode"===t&&Tr.isObject(e)&&"__v_isVNode"in e?no(e.children):e}),u=e.pluralRules||{},c=Tr.isFunction(e.missing)?e.missing:null,l=!Tr.isBoolean(e.missingWarn)&&!Tr.isRegExp(e.missingWarn)||e.missingWarn,f=!Tr.isBoolean(e.fallbackWarn)&&!Tr.isRegExp(e.fallbackWarn)||e.fallbackWarn,h=!!e.fallbackFormat,p=!!e.unresolving,d=Tr.isFunction(e.postTranslation)?e.postTranslation:null,g=Tr.isPlainObject(e.processor)?e.processor:null,m=!Tr.isBoolean(e.warnHtmlMessage)||e.warnHtmlMessage,_=!!e.escapeParameter,y=Tr.isFunction(e.messageCompiler)?e.messageCompiler:ro,v=Tr.isFunction(e.messageResolver)?e.messageResolver:oo||$r,E=Tr.isFunction(e.localeFallbacker)?e.localeFallbacker:io||qr,b=Tr.isObject(e.fallbackContext)?e.fallbackContext:void 0,S=Tr.isFunction(e.onWarn)?e.onWarn:Tr.warn,O=e,w=Tr.isObject(O.__datetimeFormatters)?O.__datetimeFormatters:new Map,C=Tr.isObject(O.__numberFormatters)?O.__numberFormatters:new Map,A=Tr.isObject(O.__meta)?O.__meta:{};uo++;const L={version:t,cid:uo,locale:n,fallbackLocale:r,messages:o,modifiers:a,pluralRules:u,missing:c,missingWarn:l,fallbackWarn:f,fallbackFormat:h,unresolving:p,postTranslation:d,processor:g,warnHtmlMessage:m,escapeParameter:_,messageCompiler:y,messageResolver:v,localeFallbacker:E,fallbackContext:b,onWarn:S,__meta:A};return L.datetimeFormats=i,L.numberFormats=s,L.__datetimeFormatters=w,L.__numberFormatters=C,L}/** @internal */,hn.createCoreError=mo,hn.createMessageContext=Hr,hn.datetime=// implementation of `datetime` function
function(e,...t){const{datetimeFormats:n,unresolving:r,fallbackLocale:o,onWarn:i,localeFallbacker:s}=e,{__datetimeFormatters:a}=e,[u,c,l,f]=Oo(...t);Tr.isBoolean(l.missingWarn)?l.missingWarn:e.missingWarn,Tr.isBoolean(l.fallbackWarn)?l.fallbackWarn:e.fallbackWarn;const h=!!l.part,p=Tr.isString(l.locale)?l.locale:e.locale,d=s(e,// eslint-disable-line @typescript-eslint/no-explicit-any
o,p);if(!Tr.isString(u)||""===u)return new Intl.DateTimeFormat(p,f).format(c);// resolve format
let g,m={},_=null;for(let E=0;E<d.length&&(g=d[E],m=n[g]||{},_=m[u],!Tr.isPlainObject(_));E++)co(e,u,g,0,"datetime format");// checking format and target locale
if(!Tr.isPlainObject(_)||!Tr.isString(g))return r?-1:u;let y=`${g}__${u}`;Tr.isEmptyObject(f)||(y=`${y}__${JSON.stringify(f)}`);let v=a.get(y);return v||(v=new Intl.DateTimeFormat(g,Tr.assign({},_,f)),a.set(y,v)),h?v.formatToParts(c):v.format(c)},hn.fallbackWithLocaleChain=function(e,t,n){const r=Tr.isString(n)?n:to,o=e;o.__localeChainCache||(o.__localeChainCache=new Map);let i=o.__localeChainCache.get(r);if(!i){i=[];// first block defined by start
let e=[n];// while any intervening block found
for(;Tr.isArray(e);)e=Jr(i,e,t);// prettier-ignore
// last block defined by default
const s=Tr.isArray(t)||!Tr.isPlainObject(t)?t:t.default?t.default:null;// convert defaults to array
e=Tr.isString(s)?[s]:s,Tr.isArray(e)&&Jr(i,e,!1),o.__localeChainCache.set(r,i)}return i},hn.fallbackWithSimple=qr,hn.getAdditionalMeta=()=>so,hn.getDevToolsHook=function(){return Yr},hn.getFallbackContext=()=>ao// ID for CoreContext
,hn.getWarnMessage=function(e,...t){return Tr.format(Kr[e],...t)},hn.handleMissing=co,hn.initI18nDevTools=function(e,t,n){// TODO: queue if devtools is undefined
Yr&&Yr.emit(Mr.IntlifyDevToolsHooks.I18nInit,{timestamp:Date.now(),i18n:e,version:t,meta:n})},hn.isMessageFunction=yo,hn.isTranslateFallbackWarn=function(e,t){return e instanceof RegExp?e.test(t):e}/** @internal */,hn.isTranslateMissingWarn=function(e,t){return e instanceof RegExp?e.test(t):e},hn.number=function(e,...t){const{numberFormats:n,unresolving:r,fallbackLocale:o,onWarn:i,localeFallbacker:s}=e,{__numberFormatters:a}=e,[u,c,l,f]=Co(...t);Tr.isBoolean(l.missingWarn)?l.missingWarn:e.missingWarn,Tr.isBoolean(l.fallbackWarn)?l.fallbackWarn:e.fallbackWarn;const h=!!l.part,p=Tr.isString(l.locale)?l.locale:e.locale,d=s(e,// eslint-disable-line @typescript-eslint/no-explicit-any
o,p);if(!Tr.isString(u)||""===u)return new Intl.NumberFormat(p,f).format(c);// resolve format
let g,m={},_=null;for(let E=0;E<d.length&&(g=d[E],m=n[g]||{},_=m[u],!Tr.isPlainObject(_));E++)co(e,u,g,0,"number format");// checking format and target locale
if(!Tr.isPlainObject(_)||!Tr.isString(g))return r?-1:u;let y=`${g}__${u}`;Tr.isEmptyObject(f)||(y=`${y}__${JSON.stringify(f)}`);let v=a.get(y);return v||(v=new Intl.NumberFormat(g,Tr.assign({},_,f)),a.set(y,v)),h?v.formatToParts(c):v.format(c)},hn.parse=xr,hn.parseDateTimeArgs=Oo,hn.parseNumberArgs=Co,hn.parseTranslateArgs=bo,hn.registerLocaleFallbacker=
/**
       * Register the locale fallbacker
       *
       * @param fallbacker - A {@link LocaleFallbacker} function
       *
       * @VueI18nGeneral
       */
function(e){io=e}// Additional Meta for Intlify DevTools
,hn.registerMessageCompiler=function(e){ro=e},hn.registerMessageResolver=
/**
       * Register the message resolver
       *
       * @param resolver - A {@link MessageResolver} function
       *
       * @VueI18nGeneral
       */
function(e){oo=e},hn.resolveValue=function(e,t){// check object
if(!Tr.isObject(e))return null;// parse path
let n=Ir.get(t);// check hit
if(n||(n=xr(t),n&&Ir.set(t,n)),!n)return null;// resolve path value
const r=n.length;let o=e,i=0;for(;i<r;){const e=o[n[i]];if(void 0===e)return null;o=e,i++}return o},hn.resolveWithKeyValue=$r,hn.setAdditionalMeta=e=>{so=e},hn.setDevToolsHook=function(e){Yr=e},hn.setFallbackContext=e=>{ao=e},hn.translate=function(e,...t){const{fallbackFormat:n,postTranslation:r,unresolving:o,messageCompiler:i,fallbackLocale:s,messages:a}=e,[u,c]=bo(...t),l=(Tr.isBoolean(c.missingWarn)?c.missingWarn:e.missingWarn,Tr.isBoolean(c.fallbackWarn)?c.fallbackWarn:e.fallbackWarn,Tr.isBoolean(c.escapeParameter)?c.escapeParameter:e.escapeParameter),f=!!c.resolvedMessage,h=Tr.isString(c.default)||Tr.isBoolean(c.default)?Tr.isBoolean(c.default)?i?u:()=>u:c.default:n?i?u:()=>u:"",p=n||""!==h,d=Tr.isString(c.locale)?c.locale:e.locale;// escape params
l&&function(e){Tr.isArray(e.list)?e.list=e.list.map((e=>Tr.isString(e)?Tr.escapeHtml(e):e)):Tr.isObject(e.named)&&Object.keys(e.named).forEach((t=>{Tr.isString(e.named[t])&&(e.named[t]=Tr.escapeHtml(e.named[t]))}))}(c);// resolve message format
// eslint-disable-next-line prefer-const
let[g,m,_]=f?[u,d,a[d]||{}]:vo(e,u,d,s),y=g,v=u;// NOTE:
//  Fix to work around `ssrTransfrom` bug in Vite.
//  https://github.com/vitejs/vite/issues/4306
//  To get around this, use temporary variables.
//  https://github.com/nuxt/framework/issues/1461#issuecomment-954606243
// checking message format and target locale
if(f||Tr.isString(y)||yo(y)||p&&(y=h,v=y),!(f||(Tr.isString(y)||yo(y))&&Tr.isString(m)))return o?-1:u;// setup compile error detecting
let E=!1;const b=yo(y)?y:Eo(e,u,m,y,v,(()=>{E=!0}));// compile message format
// if occurred compile error, return the message format
if(E)return y;// evaluate message with context
const S=function(e,t,n,r){const{modifiers:o,pluralRules:i,messageResolver:s,fallbackLocale:a,fallbackWarn:u,missingWarn:c,fallbackContext:l}=e,f=r=>{let o=s(n,r);// fallback to root context
if(null==o&&l){const[,,e]=vo(l,r,t,a);o=s(e,r)}if(Tr.isString(o)){let n=!1;const i=Eo(e,r,t,o,r,(()=>{n=!0}));return n?_o:i}return yo(o)?o:_o},h={locale:t,modifiers:o,pluralRules:i,messages:f};return e.processor&&(h.processor=e.processor),r.list&&(h.list=r.list),r.named&&(h.named=r.named),Tr.isNumber(r.plural)&&(h.pluralIndex=r.plural),h}(e,m,_,c),O=function(e,t,n){return t(n)}(0,b,Hr(S));return r?r(O,u):O},hn.translateDevTools=Vr,hn.updateFallbackLocale=function(e,t,n){e.__localeChainCache=new Map,e.localeFallbacker(e,n,t)},function(e){e.exports=hn}(fn),e("r",r(v));var Ao,Lo=["scroll","wheel","touchstart","touchmove","touchenter","touchend","touchleave","mouseout","mouseleave","mouseup","mousedown","mousemove","mouseenter","mousewheel","mouseover"];if(function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(e){}return e}()){var No=EventTarget.prototype.addEventListener;Ao=No,EventTarget.prototype.addEventListener=function(e,t,n){var r,o="object"==typeof n&&null!==n,i=o?n.capture:n;(n=o?function(e){var t=Object.getOwnPropertyDescriptor(e,"passive");return t&&!0!==t.writable&&void 0===t.set?Object.assign({},e):e}(n):{}).passive=void 0!==(r=n.passive)?r:-1!==Lo.indexOf(e)&&!0,n.capture=void 0!==i&&i,Ao.call(this,e,t,n)},EventTarget.prototype.addEventListener._original=Ao}
/*
       *      bignumber.js v9.1.2
       *      A JavaScript library for arbitrary-precision arithmetic.
       *      https://github.com/MikeMcl/bignumber.js
       *      Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
       *      MIT Licensed.
       *
       *      BigNumber.prototype methods     |  BigNumber methods
       *                                      |
       *      absoluteValue            abs    |  clone
       *      comparedTo                      |  config               set
       *      decimalPlaces            dp     |      DECIMAL_PLACES
       *      dividedBy                div    |      ROUNDING_MODE
       *      dividedToIntegerBy       idiv   |      EXPONENTIAL_AT
       *      exponentiatedBy          pow    |      RANGE
       *      integerValue                    |      CRYPTO
       *      isEqualTo                eq     |      MODULO_MODE
       *      isFinite                        |      POW_PRECISION
       *      isGreaterThan            gt     |      FORMAT
       *      isGreaterThanOrEqualTo   gte    |      ALPHABET
       *      isInteger                       |  isBigNumber
       *      isLessThan               lt     |  maximum              max
       *      isLessThanOrEqualTo      lte    |  minimum              min
       *      isNaN                           |  random
       *      isNegative                      |  sum
       *      isPositive                      |
       *      isZero                          |
       *      minus                           |
       *      modulo                   mod    |
       *      multipliedBy             times  |
       *      negated                         |
       *      plus                            |
       *      precision                sd     |
       *      shiftedBy                       |
       *      squareRoot               sqrt   |
       *      toExponential                   |
       *      toFixed                         |
       *      toFormat                        |
       *      toFraction                      |
       *      toJSON                          |
       *      toNumber                        |
       *      toPrecision                     |
       *      toString                        |
       *      valueOf                         |
       *
       */var To=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,Mo=Math.ceil,Ro=Math.floor,ko="[BigNumber Error] ",Do=ko+"Number primitive has more than 15 significant digits: ",Po=1e14,xo=14,Io=9007199254740991,// 2^53 - 1
// MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
$o=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],Uo=1e7,// EDITABLE
// The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
// the arguments to toExponential, toFixed, toFormat, and toPrecision.
jo=1e9;// 0 to MAX_INT32
/*
       * Create and return a BigNumber constructor.
       */ // PRIVATE HELPER FUNCTIONS
// These functions don't need access to variables,
// e.g. DECIMAL_PLACES, in the scope of the `clone` function above.
function Fo(e){var t=0|e;return e>0||e===t?t:t-1}// Return a coefficient array as a string of base 10 digits.
function Bo(e){for(var t,n,r=1,o=e.length,i=e[0]+"";r<o;){for(t=e[r++]+"",n=xo-t.length;n--;t="0"+t);i+=t}// Determine trailing zeros.
for(o=i.length;48===i.charCodeAt(--o););return i.slice(0,o+1||1)}// Compare the value of BigNumbers x and y.
function Go(e,t){var n,r,o=e.c,i=t.c,s=e.s,a=t.s,u=e.e,c=t.e;// Either NaN?
if(!s||!a)return null;// Either zero?
if(n=o&&!o[0],r=i&&!i[0],n||r)return n?r?0:-a:s;// Signs differ?
if(s!=a)return s;// Either Infinity?
if(n=s<0,r=u==c,!o||!i)return r?0:!o^n?1:-1;// Compare exponents.
if(!r)return u>c^n?1:-1;// Compare digit by digit.
for(a=(u=o.length)<(c=i.length)?u:c,s=0;s<a;s++)if(o[s]!=i[s])return o[s]>i[s]^n?1:-1;// Compare lengths.
return u==c?0:u>c^n?1:-1}
/*
       * Check that n is a primitive number, an integer, and in range, otherwise throw.
       */function Wo(e,t,n,r){if(e<t||e>n||e!==Ro(e))throw Error(ko+(r||"Argument")+("number"==typeof e?e<t||e>n?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}// Assumes finite n.
function Ho(e){var t=e.c.length-1;return Fo(e.e/xo)==t&&e.c[t]%2!=0}function Yo(e,t){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(t<0?"e":"e+")+t}function Vo(e,t,n){var r,o;// Negative exponent?
if(t<0){// Prepend zeros.
for(o=n+".";++t;o+=n);e=o+e}else// Append zeros.
if(++t>(r=e.length)){for(o=n,t-=r;--t;o+=n);e+=o}else t<r&&(e=e.slice(0,t)+"."+e.slice(t));return e}// EXPORT
/**
       * @desc 解决浮动运算问题，避免小数点后产生多位数和计算精度损失。
       *
       * 问题示例：2.3 + 2.4 = 4.699999999999999，1.0 - 0.9 = 0.09999999999999998
       */
/**
       * Correct the given number to specifying significant digits.
       *
       * @param num The input number
       * @param precision An integer specifying the number of significant digits
       *
       * @example strip(0.09999999999999998) === 0.1 // true
       */
function zo(e,t){return void 0===t&&(t=15),+parseFloat(Number(e).toPrecision(t))}
/**
       * Return digits length of a number.
       *
       * @param num The input number
       */function Xo(e){// Get digit length of e
var t=e.toString().split(/[eE]/),n=(t[0].split(".")[1]||"").length-+(t[1]||0);return n>0?n:0}
/**
       * Convert the given number to integer, support scientific notation.
       * The number will be scale up if it is decimal.
       *
       * @param num The input number
       */function Ko(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=Xo(e);return t>0?zo(Number(e)*Math.pow(10,t)):Number(e)}
/**
       * Log a warning if the given number is out of bounds.
       *
       * @param num The input number
       */function qo(e){ni&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn(e+" is beyond boundary when transfer to integer, the results may not be accurate")}
/**
       * Create an operation to support rest params.
       *
       * @param operation The original operation
       */function Jo(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r=t[0],o=t.slice(1);return o.reduce((function(t,n){return e(t,n)}),r)}}
/**
       * Accurate multiplication.
       *
       * @param nums The numbers to multiply
       */e("B",function e(t){var n,r,o,i,s,a,u,c,l,f,h=A.prototype={constructor:A,toString:null,valueOf:null},p=new A(1),//----------------------------- EDITABLE CONFIG DEFAULTS -------------------------------
// The default values below must be integers within the inclusive ranges stated.
// The values can also be changed at run-time using BigNumber.set.
// The maximum number of decimal places for operations involving division.
d=20,// 0 to MAX
// The rounding mode used when rounding to the above decimal places, and when using
// toExponential, toFixed, toFormat and toPrecision, and round (default value).
// UP         0 Away from zero.
// DOWN       1 Towards zero.
// CEIL       2 Towards +Infinity.
// FLOOR      3 Towards -Infinity.
// HALF_UP    4 Towards nearest neighbour. If equidistant, up.
// HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
// HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
// HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
// HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
g=4,// 0 to 8
// EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]
// The exponent value at and beneath which toString returns exponential notation.
// Number type: -7
m=-7,// 0 to -MAX
// The exponent value at and above which toString returns exponential notation.
// Number type: 21
_=21,// 0 to MAX
// RANGE : [MIN_EXP, MAX_EXP]
// The minimum exponent value, beneath which underflow to zero occurs.
// Number type: -324  (5e-324)
y=-1e7,// -1 to -MAX
// The maximum exponent value, above which overflow to Infinity occurs.
// Number type:  308  (1.7976931348623157e+308)
// For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
v=1e7,// 1 to MAX
// Whether to use cryptographically-secure random number generation, if available.
E=!1,// true or false
// The modulo mode used when calculating the modulus: a mod n.
// The quotient (q = a / n) is calculated according to the corresponding rounding mode.
// The remainder (r) is calculated as: r = a - n * q.
// UP        0 The remainder is positive if the dividend is negative, else is negative.
// DOWN      1 The remainder has the same sign as the dividend.
//             This modulo mode is commonly known as 'truncated division' and is
//             equivalent to (a % n) in JavaScript.
// FLOOR     3 The remainder has the same sign as the divisor (Python %).
// HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
// EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
//             The remainder is always positive.
// The truncated division, floored division, Euclidian division and IEEE 754 remainder
// modes are commonly used for the modulus operation.
// Although the other rounding modes can also be used, they may not give useful results.
b=1,// 0 to 9
// The maximum number of significant digits of the result of the exponentiatedBy operation.
// If POW_PRECISION is 0, there will be unlimited significant digits.
S=0,// 0 to MAX
// The format specification used by the BigNumber.prototype.toFormat method.
O={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",// non-breaking space
suffix:""},// The alphabet used for base conversion. It must be at least 2 characters long, with no '+',
// '-', '.', whitespace, or repeated character.
// '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_'
w="0123456789abcdefghijklmnopqrstuvwxyz",C=!0;//------------------------------------------------------------------------------------------
// CONSTRUCTOR
/*
         * The BigNumber constructor and exported function.
         * Create and return a new instance of a BigNumber object.
         *
         * v {number|string|BigNumber} A numeric value.
         * [b] {number} The base of v. Integer, 2 to ALPHABET.length inclusive.
         */function A(e,t){var n,i,s,a,u,c,l,f,h=this;// Enable constructor call without `new`.
if(!(h instanceof A))return new A(e,t);if(null==t){if(e&&!0===e._isBigNumber)return h.s=e.s,void(!e.c||e.e>v?h.c=h.e=null:e.e<y?h.c=[h.e=0]:(h.e=e.e,h.c=e.c.slice()));if((c="number"==typeof e)&&0*e==0){// Fast path for integers, where n < 2147483648 (2**31).
if(// Use `1 / n` to handle minus zero also.
h.s=1/e<0?(e=-e,-1):1,e===~~e){for(a=0,u=e;u>=10;u/=10,a++);return void(a>v?h.c=h.e=null:(h.e=a,h.c=[e]))}f=String(e)}else{if(!To.test(f=String(e)))return o(h,f,c);h.s=45==f.charCodeAt(0)?(f=f.slice(1),-1):1}// Decimal point?
(a=f.indexOf("."))>-1&&(f=f.replace(".","")),// Exponential form?
(u=f.search(/e/i))>0?(// Determine exponent.
a<0&&(a=u),a+=+f.slice(u+1),f=f.substring(0,u)):a<0&&(// Integer.
a=f.length)}else{// Allow exponential notation to be used with base 10 argument, while
// also rounding to DECIMAL_PLACES as with other bases.
if(// '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
Wo(t,2,w.length,"Base"),10==t&&C)return M(h=new A(e),d+h.e+1,g);if(f=String(e),c="number"==typeof e){// Avoid potential interpretation of Infinity and NaN as base 44+ values.
if(0*e!=0)return o(h,f,c,t);// '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
if(h.s=1/e<0?(f=f.slice(1),-1):1,A.DEBUG&&f.replace(/^0\.0*|\./,"").length>15)throw Error(Do+e)}else h.s=45===f.charCodeAt(0)?(f=f.slice(1),-1):1;// Check that str is a valid base b number.
// Don't use RegExp, so alphabet can contain special characters.
for(n=w.slice(0,t),a=u=0,l=f.length;u<l;u++)if(n.indexOf(i=f.charAt(u))<0){if("."==i){// If '.' is not the first character and it has not be found before.
if(u>a){a=l;continue}}else if(!s&&(f==f.toUpperCase()&&(f=f.toLowerCase())||f==f.toLowerCase()&&(f=f.toUpperCase()))){s=!0,u=-1,a=0;continue}return o(h,String(e),c,t)}// Prevent later check for length on converted number.
c=!1,// Decimal point?
(a=(f=r(f,t,10,h.s)).indexOf("."))>-1?f=f.replace(".",""):a=f.length}// Determine leading zeros.
for(u=0;48===f.charCodeAt(u);u++);// Determine trailing zeros.
for(l=f.length;48===f.charCodeAt(--l););if(f=f.slice(u,++l)){// '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
if(l-=u,c&&A.DEBUG&&l>15&&(e>Io||e!==Ro(e)))throw Error(Do+h.s*e);// Overflow?
if((a=a-u-1)>v)// Infinity.
h.c=h.e=null;// Underflow?
else if(a<y)// Zero.
h.c=[h.e=0];else{// i < 1
if(h.e=a,h.c=[],// Transform base
// e is the base 10 exponent.
// i is where to slice str to get the first element of the coefficient array.
u=(a+1)%xo,a<0&&(u+=xo),u<l){for(u&&h.c.push(+f.slice(0,u)),l-=xo;u<l;)h.c.push(+f.slice(u,u+=xo));u=xo-(f=f.slice(u)).length}else u-=l;for(;u--;f+="0");h.c.push(+f)}}else// Zero.
h.c=[h.e=0]}// CONSTRUCTOR PROPERTIES
/*
         * Return a string representing the value of BigNumber n in fixed-point or exponential
         * notation rounded to the specified decimal places or significant digits.
         *
         * n: a BigNumber.
         * i: the index of the last digit required (i.e. the digit that may be rounded up).
         * rm: the rounding mode.
         * id: 1 (toExponential) or 2 (toPrecision).
         */
function L(e,t,n,r){var o,i,s,a,u;if(null==n?n=g:Wo(n,0,8),!e.c)return e.toString();if(o=e.c[0],s=e.e,null==t)u=Bo(e.c),u=1==r||2==r&&(s<=m||s>=_)?Yo(u,s):Vo(u,s,"0");else// toPrecision returns exponential notation if the number of significant digits
// specified is less than the number of digits necessary to represent the integer
// part of the value in fixed-point notation.
// Exponential notation.
if(// n.e may have changed if the value was rounded up.
i=(e=M(new A(e),t,n)).e,a=(u=Bo(e.c)).length,1==r||2==r&&(t<=i||i<=m)){// Append zeros?
for(;a<t;u+="0",a++);u=Yo(u,i)}else// Append zeros?
if(t-=s,u=Vo(u,i,"0"),i+1>a){if(--t>0)for(u+=".";t--;u+="0");}else if((t+=i-a)>0)for(i+1==a&&(u+=".");t--;u+="0");return e.s<0&&o?"-"+u:u}// Handle BigNumber.max and BigNumber.min.
// If any number is NaN, return NaN.
function N(e,t){for(var n,r,o=1,i=new A(e[0]);o<e.length;o++)(!(r=new A(e[o])).s||(n=Go(i,r))===t||0===n&&i.s===t)&&(i=r);return i}
/*
         * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
         * Called by minus, plus and times.
         */function T(e,t,n){// Remove trailing zeros.
for(var r=1,o=t.length;!t[--o];t.pop());// Calculate the base 10 exponent. First get the number of digits of c[0].
for(o=t[0];o>=10;o/=10,r++);// Overflow?
return(n=r+n*xo-1)>v?// Infinity.
e.c=e.e=null:n<y?// Zero.
e.c=[e.e=0]:(e.e=n,e.c=t),e}// Handle values that fail the validity test in BigNumber.
/*
         * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
         * If r is truthy, it is known that there are more digits after the rounding digit.
         */
function M(e,t,n,r){var o,i,s,a,u,c,l,f=e.c,h=$o;// if x is not Infinity or NaN...
if(f){// rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
// n is a base 1e14 number, the value of the element of array x.c containing rd.
// ni is the index of n within x.c.
// d is the number of digits of n.
// i is the index of rd within n including leading zeros.
// j is the actual index of rd within n (if < 0, rd is a leading zero).
e:{// Get the number of digits of the first element of xc.
for(o=1,a=f[0];a>=10;a/=10,o++);// If the rounding digit is in the first element of xc...
if((i=t-o)<0)i+=xo,s=t,u=f[c=0],// Get the rounding digit at index j of n.
l=Ro(u/h[o-s-1]%10);else if((c=Mo((i+1)/xo))>=f.length){if(!r)break e;// Needed by sqrt.
for(;f.length<=c;f.push(0));u=l=0,o=1,s=(i%=xo)-xo+1}else{// Get the number of digits of n.
for(u=a=f[c],o=1;a>=10;a/=10,o++);// Get the index of rd within n.
// Get the rounding digit at index j of n.
l=(// Get the index of rd within n, adjusted for leading zeros.
// The number of leading zeros of n is given by LOG_BASE - d.
s=(i%=xo)-xo+o)<0?0:Ro(u/h[o-s-1]%10)}if(r=r||t<0||// Are there any non-zero digits after the rounding digit?
// The expression  n % pows10[d - j - 1]  returns all digits of n to the right
// of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
null!=f[c+1]||(s<0?u:u%h[o-s-1]),r=n<4?(l||r)&&(0==n||n==(e.s<0?3:2)):l>5||5==l&&(4==n||r||6==n&&// Check whether the digit to the left of the rounding digit is odd.
(i>0?s>0?u/h[o-s]:0:f[c-1])%10&1||n==(e.s<0?8:7)),t<1||!f[0])return f.length=0,r?(// Convert sd to decimal places.
t-=e.e+1,// 1, 0.1, 0.01, 0.001, 0.0001 etc.
f[0]=h[(xo-t%xo)%xo],e.e=-t||0):// Zero.
f[0]=e.e=0,e;// Remove excess digits.
// Round up?
if(0==i?(f.length=c,a=1,c--):(f.length=c+1,a=h[xo-i],// E.g. 56700 becomes 56000 if 7 is the rounding digit.
// j > 0 means i > number of leading zeros of n.
f[c]=s>0?Ro(u/h[o-s]%h[s])*a:0),r)for(;;){// If the digit to be rounded up is in the first element of xc...
if(0==c){// i will be the length of xc[0] before k is added.
for(i=1,s=f[0];s>=10;s/=10,i++);for(s=f[0]+=a,a=1;s>=10;s/=10,a++);// if i != k the length has increased.
i!=a&&(e.e++,f[0]==Po&&(f[0]=1));break}if(f[c]+=a,f[c]!=Po)break;f[c--]=0,a=1}// Remove trailing zeros.
for(i=f.length;0===f[--i];f.pop());}// Overflow? Infinity.
e.e>v?e.c=e.e=null:e.e<y&&(e.c=[e.e=0])}return e}function R(e){var t,n=e.e;return null===n?e.toString():(t=Bo(e.c),t=n<=m||n>=_?Yo(t,n):Vo(t,n,"0"),e.s<0?"-"+t:t)}// PROTOTYPE/INSTANCE METHODS
/*
         * Return a new BigNumber whose value is the absolute value of this BigNumber.
         */return A.clone=e,A.ROUND_UP=0,A.ROUND_DOWN=1,A.ROUND_CEIL=2,A.ROUND_FLOOR=3,A.ROUND_HALF_UP=4,A.ROUND_HALF_DOWN=5,A.ROUND_HALF_EVEN=6,A.ROUND_HALF_CEIL=7,A.ROUND_HALF_FLOOR=8,A.EUCLID=9,
/*
         * Configure infrequently-changing library-wide settings.
         *
         * Accept an object with the following optional properties (if the value of a property is
         * a number, it must be an integer within the inclusive range stated):
         *
         *   DECIMAL_PLACES   {number}           0 to MAX
         *   ROUNDING_MODE    {number}           0 to 8
         *   EXPONENTIAL_AT   {number|number[]}  -MAX to MAX  or  [-MAX to 0, 0 to MAX]
         *   RANGE            {number|number[]}  -MAX to MAX (not zero)  or  [-MAX to -1, 1 to MAX]
         *   CRYPTO           {boolean}          true or false
         *   MODULO_MODE      {number}           0 to 9
         *   POW_PRECISION       {number}           0 to MAX
         *   ALPHABET         {string}           A string of two or more unique characters which does
         *                                       not contain '.'.
         *   FORMAT           {object}           An object with some of the following properties:
         *     prefix                 {string}
         *     groupSize              {number}
         *     secondaryGroupSize     {number}
         *     groupSeparator         {string}
         *     decimalSeparator       {string}
         *     fractionGroupSize      {number}
         *     fractionGroupSeparator {string}
         *     suffix                 {string}
         *
         * (The values assigned to the above FORMAT object properties are not checked for validity.)
         *
         * E.g.
         * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
         *
         * Ignore properties/parameters set to null or undefined, except for ALPHABET.
         *
         * Return an object with the properties current values.
         */
A.config=A.set=function(e){var t,n;if(null!=e){if("object"!=typeof e)// '[BigNumber Error] Object expected: {v}'
throw Error(ko+"Object expected: "+e);// RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
// [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
// '[BigNumber Error] RANGE {not a primitive number|not an integer|out of range|cannot be zero}: {v}'
if(// DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
// '[BigNumber Error] DECIMAL_PLACES {not a primitive number|not an integer|out of range}: {v}'
e.hasOwnProperty(t="DECIMAL_PLACES")&&(Wo(n=e[t],0,jo,t),d=n),// ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
// '[BigNumber Error] ROUNDING_MODE {not a primitive number|not an integer|out of range}: {v}'
e.hasOwnProperty(t="ROUNDING_MODE")&&(Wo(n=e[t],0,8,t),g=n),// EXPONENTIAL_AT {number|number[]}
// Integer, -MAX to MAX inclusive or
// [integer -MAX to 0 inclusive, 0 to MAX inclusive].
// '[BigNumber Error] EXPONENTIAL_AT {not a primitive number|not an integer|out of range}: {v}'
e.hasOwnProperty(t="EXPONENTIAL_AT")&&((n=e[t])&&n.pop?(Wo(n[0],-jo,0,t),Wo(n[1],0,jo,t),m=n[0],_=n[1]):(Wo(n,-jo,jo,t),m=-(_=n<0?-n:n))),e.hasOwnProperty(t="RANGE"))if((n=e[t])&&n.pop)Wo(n[0],-jo,-1,t),Wo(n[1],1,jo,t),y=n[0],v=n[1];else{if(Wo(n,-jo,jo,t),!n)throw Error(ko+t+" cannot be zero: "+n);y=-(v=n<0?-n:n)}// CRYPTO {boolean} true or false.
// '[BigNumber Error] CRYPTO not true or false: {v}'
// '[BigNumber Error] crypto unavailable'
if(e.hasOwnProperty(t="CRYPTO")){if((n=e[t])!==!!n)throw Error(ko+t+" not true or false: "+n);if(n){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw E=!n,Error(ko+"crypto unavailable");E=n}else E=n}// MODULO_MODE {number} Integer, 0 to 9 inclusive.
// '[BigNumber Error] MODULO_MODE {not a primitive number|not an integer|out of range}: {v}'
// FORMAT {object}
// '[BigNumber Error] FORMAT not an object: {v}'
if(e.hasOwnProperty(t="MODULO_MODE")&&(Wo(n=e[t],0,9,t),b=n),// POW_PRECISION {number} Integer, 0 to MAX inclusive.
// '[BigNumber Error] POW_PRECISION {not a primitive number|not an integer|out of range}: {v}'
e.hasOwnProperty(t="POW_PRECISION")&&(Wo(n=e[t],0,jo,t),S=n),e.hasOwnProperty(t="FORMAT")){if("object"!=typeof(n=e[t]))throw Error(ko+t+" not an object: "+n);O=n}// ALPHABET {string}
// '[BigNumber Error] ALPHABET invalid: {v}'
if(e.hasOwnProperty(t="ALPHABET")){// Disallow if less than two characters,
// or if it contains '+', '-', '.', whitespace, or a repeated character.
if("string"!=typeof(n=e[t])||/^.?$|[+\-.\s]|(.).*\1/.test(n))throw Error(ko+t+" invalid: "+n);C="0123456789"==n.slice(0,10),w=n}}return{DECIMAL_PLACES:d,ROUNDING_MODE:g,EXPONENTIAL_AT:[m,_],RANGE:[y,v],CRYPTO:E,MODULO_MODE:b,POW_PRECISION:S,FORMAT:O,ALPHABET:w}},
/*
         * Return true if v is a BigNumber instance, otherwise return false.
         *
         * If BigNumber.DEBUG is true, throw if a BigNumber instance is not well-formed.
         *
         * v {any}
         *
         * '[BigNumber Error] Invalid BigNumber: {v}'
         */
A.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!A.DEBUG)return!0;var t,n,r=e.c,o=e.e,i=e.s;e:if("[object Array]"=={}.toString.call(r)){if((1===i||-1===i)&&o>=-jo&&o<=jo&&o===Ro(o)){// If the first element is zero, the BigNumber value must be zero.
if(0===r[0]){if(0===o&&1===r.length)return!0;break e}// Calculate number of digits that c[0] should have, based on the exponent.
// Calculate number of digits of c[0].
//if (Math.ceil(Math.log(c[0] + 1) / Math.LN10) == i) {
if((t=(o+1)%xo)<1&&(t+=xo),String(r[0]).length==t){for(t=0;t<r.length;t++)if((n=r[t])<0||n>=Po||n!==Ro(n))break e;// Last element cannot be zero, unless it is the only element.
if(0!==n)return!0}}// Infinity/NaN
}else if(null===r&&null===o&&(null===i||1===i||-1===i))return!0;throw Error(ko+"Invalid BigNumber: "+e)},
/*
         * Return a new BigNumber whose value is the maximum of the arguments.
         *
         * arguments {number|string|BigNumber}
         */
A.maximum=A.max=function(){return N(arguments,-1)},
/*
         * Return a new BigNumber whose value is the minimum of the arguments.
         *
         * arguments {number|string|BigNumber}
         */
A.minimum=A.min=function(){return N(arguments,1)},
/*
         * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
         * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
         * zeros are produced).
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp}'
         * '[BigNumber Error] crypto unavailable'
         */
A.random=(i=9007199254740992,s=Math.random()*i&2097151?function(){return Ro(Math.random()*i)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(e){var t,n,r,o,i,a=0,u=[],c=new A(p);if(null==e?e=d:Wo(e,0,jo),o=Mo(e/xo),E)// Browsers supporting crypto.getRandomValues.
if(crypto.getRandomValues){for(t=crypto.getRandomValues(new Uint32Array(o*=2));a<o;)// 53 bits:
// ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
// 11111 11111111 11111111 11111111 11100000 00000000 00000000
// ((Math.pow(2, 32) - 1) >>> 11).toString(2)
//                                     11111 11111111 11111111
// 0x20000 is 2^21.
// Rejection sampling:
// 0 <= v < 9007199254740992
// Probability that v >= 9e15, is
// 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
(i=131072*t[a]+(t[a+1]>>>11))>=9e15?(n=crypto.getRandomValues(new Uint32Array(2)),t[a]=n[0],t[a+1]=n[1]):(// 0 <= v <= 8999999999999999
// 0 <= (v % 1e14) <= 99999999999999
u.push(i%1e14),a+=2);a=o/2}else{if(!crypto.randomBytes)throw E=!1,Error(ko+"crypto unavailable");for(// buffer
t=crypto.randomBytes(o*=7);a<o;)// 0x1000000000000 is 2^48, 0x10000000000 is 2^40
// 0x100000000 is 2^32, 0x1000000 is 2^24
// 11111 11111111 11111111 11111111 11111111 11111111 11111111
// 0 <= v < 9007199254740992
(i=281474976710656*(31&t[a])+1099511627776*t[a+1]+4294967296*t[a+2]+16777216*t[a+3]+(t[a+4]<<16)+(t[a+5]<<8)+t[a+6])>=9e15?crypto.randomBytes(7).copy(t,a):(// 0 <= (v % 1e14) <= 99999999999999
u.push(i%1e14),a+=7);a=o/7}// Use Math.random.
if(!E)for(;a<o;)(i=s())<9e15&&(u[a++]=i%1e14);// Remove trailing elements which are zero.
for(o=u[--a],e%=xo,// Convert trailing digits to zeros according to dp.
o&&e&&(i=$o[xo-e],u[a]=Ro(o/i)*i);0===u[a];u.pop(),a--);// Zero?
if(a<0)u=[r=0];else{// Remove leading elements which are zero and adjust exponent accordingly.
for(r=-1;0===u[0];u.splice(0,1),r-=xo);// Count the digits of the first element of c to determine leading zeros, and...
for(a=1,i=u[0];i>=10;i/=10,a++);// adjust the exponent accordingly.
a<xo&&(r-=xo-a)}return c.e=r,c.c=u,c}),
/*
         * Return a BigNumber whose value is the sum of the arguments.
         *
         * arguments {number|string|BigNumber}
         */
A.sum=function(){for(var e=1,t=arguments,n=new A(t[0]);e<t.length;)n=n.plus(t[e++]);return n},// PRIVATE FUNCTIONS
// Called by BigNumber and BigNumber.prototype.toString.
r=function(){var e="0123456789";
/*
           * Convert string of baseIn to an array of numbers of baseOut.
           * Eg. toBaseOut('255', 10, 16) returns [15, 15].
           * Eg. toBaseOut('ff', 16, 10) returns [2, 5, 5].
           */function t(e,t,n,r){for(var o,i,s=[0],a=0,u=e.length;a<u;){for(i=s.length;i--;s[i]*=t);for(s[0]+=r.indexOf(e.charAt(a++)),o=0;o<s.length;o++)s[o]>n-1&&(null==s[o+1]&&(s[o+1]=0),s[o+1]+=s[o]/n|0,s[o]%=n)}return s.reverse()}// Convert a numeric string of baseIn to a numeric string of baseOut.
// If the caller is toString, we are converting from base 10 to baseOut.
// If the caller is BigNumber, we are converting from baseIn to base 10.
return function(r,o,i,s,a){var u,c,l,f,h,p,m,_,y=r.indexOf("."),v=d,E=g;// Non-integer.
// Remove trailing zeros.
for(y>=0&&(f=S,// Unlimited precision.
S=0,r=r.replace(".",""),p=(_=new A(o)).pow(r.length-y),S=f,// Convert str as if an integer, then restore the fraction part by dividing the
// result by its base raised to a power.
_.c=t(Vo(Bo(p.c),p.e,"0"),10,i,e),_.e=_.c.length),// xc now represents str as an integer and converted to baseOut. e is the exponent.
l=f=(// Convert the number as integer.
m=t(r,o,i,a?(u=w,e):(u=e,w))).length;0==m[--f];m.pop());// Zero?
if(!m[0])return u.charAt(0);// Does str represent an integer? If so, no need for the division.
// If the index of the rounding digit is not greater than zero, or xc represents
// zero, then the result of the base conversion is zero or, if rounding up, a value
// such as 0.00001.
if(y<0?--l:(p.c=m,p.e=l,// The sign is needed for correct rounding.
p.s=s,m=(p=n(p,_,v,E,i)).c,h=p.r,l=p.e),// The rounding digit: the digit to the right of the digit that may be rounded up.
y=m[// xc now represents str converted to baseOut.
// THe index of the rounding digit.
c=l+v+1],// Look at the rounding digits and mode to determine whether to round up.
f=i/2,h=h||c<0||null!=m[c+1],h=E<4?(null!=y||h)&&(0==E||E==(p.s<0?3:2)):y>f||y==f&&(4==E||h||6==E&&1&m[c-1]||E==(p.s<0?8:7)),c<1||!m[0])// 1^-dp or 0
r=h?Vo(u.charAt(1),-v,u.charAt(0)):u.charAt(0);else{// Round up?
if(// Truncate xc to the required number of decimal places.
m.length=c,h)// Rounding up may mean the previous digit has to be rounded up and so on.
for(--i;++m[--c]>i;)m[c]=0,c||(++l,m=[1].concat(m));// Determine trailing zeros.
for(f=m.length;!m[--f];);// E.g. [4, 11, 15] becomes 4bf.
for(y=0,r="";y<=f;r+=u.charAt(m[y++]));// Add leading zeros, decimal point and trailing zeros as required.
r=Vo(r,l,u.charAt(0))}// The caller will add the sign.
return r}}(),// Perform division in the specified base. Called by div and convertBase.
n=function(){// Assume non-zero x and k.
function e(e,t,n){var r,o,i,s,a=0,u=e.length,c=t%Uo,l=t/Uo|0;for(e=e.slice();u--;)a=((o=c*(i=e[u]%Uo)+(r=l*i+(s=e[u]/Uo|0)*c)%Uo*Uo+a)/n|0)+(r/Uo|0)+l*s,e[u]=o%n;return a&&(e=[a].concat(e)),e}function t(e,t,n,r){var o,i;if(n!=r)i=n>r?1:-1;else for(o=i=0;o<n;o++)if(e[o]!=t[o]){i=e[o]>t[o]?1:-1;break}return i}function n(e,t,n,r){// Subtract b from a.
for(var o=0;n--;)e[n]-=o,o=e[n]<t[n]?1:0,e[n]=o*r+e[n]-t[n];// Remove leading zeros.
for(;!e[0]&&e.length>1;e.splice(0,1));}// x: dividend, y: divisor.
return function(r,o,i,s,a){var u,c,l,f,h,p,d,g,m,_,y,v,E,b,S,O,w,C=r.s==o.s?1:-1,L=r.c,N=o.c;// Either NaN, Infinity or 0?
if(!(L&&L[0]&&N&&N[0]))return new A(// Return NaN if either NaN, or both Infinity or 0.
r.s&&o.s&&(L?!N||L[0]!=N[0]:N)?// Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
L&&0==L[0]||!N?0*C:C/0:NaN);// Result exponent may be one less then the current value of e.
// The coefficients of the BigNumbers from convertBase may have trailing zeros.
for(m=(g=new A(C)).c=[],C=i+(c=r.e-o.e)+1,a||(a=Po,c=Fo(r.e/xo)-Fo(o.e/xo),C=C/xo|0),l=0;N[l]==(L[l]||0);l++);if(N[l]>(L[l]||0)&&c--,C<0)m.push(1),f=!0;else{// Add zeros to make remainder as long as divisor.
for(b=L.length,O=N.length,l=0,C+=2,// Not necessary, but to handle odd bases where yc[0] == (base / 2) - 1.
// if (n > 1 || n++ == 1 && yc[0] < base / 2) {
(// Normalise xc and yc so highest order digit of yc is >= base / 2.
h=Ro(a/(N[0]+1)))>1&&(N=e(N,h,a),L=e(L,h,a),O=N.length,b=L.length),E=O,y=(_=L.slice(0,O)).length;y<O;_[y++]=0);w=N.slice(),w=[0].concat(w),S=N[0],N[1]>=a/2&&S++;// Not necessary, but to prevent trial digit n > base, when using base 3.
// else if (base == 3 && yc0 == 1) yc0 = 1 + 1e-15;
do{// If divisor < remainder.
if(h=0,(// Compare divisor and remainder.
u=t(N,_,O,y))<0){//  Algorithm:
//  product = divisor multiplied by trial digit (n).
//  Compare product and remainder.
//  If product is greater than remainder:
//    Subtract divisor from product, decrement trial digit.
//  Subtract product from remainder.
//  If product was less than remainder at the last compare:
//    Compare new remainder and divisor.
//    If remainder is greater than divisor:
//      Subtract divisor from remainder, increment trial digit.
if(// Calculate trial digit, n.
v=_[0],O!=y&&(v=v*a+(_[1]||0)),(// n is how many times the divisor goes into the current remainder.
h=Ro(v/S))>1)// Compare product and remainder.
// If product > remainder then trial digit n too high.
// n is 1 too high about 5% of the time, and is not known to have
// ever been more than 1 too high.
for(// n may be > base only when base is 3.
h>=a&&(h=a-1),d=(// product = divisor * trial digit.
p=e(N,h,a)).length,y=_.length;1==t(p,_,d,y);)h--,// Subtract divisor from product.
n(p,O<d?w:N,d,a),d=p.length,u=1;else// n is 0 or 1, cmp is -1.
// If n is 0, there is no need to compare yc and rem again below,
// so change cmp to 1 to avoid it.
// If n is 1, leave cmp as -1, so yc and rem are compared again.
0==h&&(// divisor < remainder, so n must be at least 1.
u=h=1),d=(// product = divisor
p=N.slice()).length;// If product was < remainder.
if(d<y&&(p=[0].concat(p)),// Subtract product from remainder.
n(_,p,y,a),y=_.length,-1==u)// Compare divisor and new remainder.
// If divisor < new remainder, subtract divisor from remainder.
// Trial digit n too low.
// n is 1 too low about 5% of the time, and very rarely 2 too low.
for(;t(N,_,O,y)<1;)h++,// Subtract divisor from remainder.
n(_,O<y?w:N,y,a),y=_.length}else 0===u&&(h++,_=[0]);// else cmp === 1 and n will be 0
// Add the next digit, n, to the result array.
m[l++]=h,// Update the remainder.
_[0]?_[y++]=L[E]||0:(_=[L[E]],y=1)}while((E++<b||null!=_[0])&&C--);f=null!=_[0],// Leading zero?
m[0]||m.splice(0,1)}if(a==Po){// To calculate q.e, first get the number of digits of qc[0].
for(l=1,C=m[0];C>=10;C/=10,l++);M(g,i+(g.e=l+c*xo-1)+1,s,f)}else g.e=c,g.r=+f;return g}}(),a=/^(-?)0([xbo])(?=\w[\w.]*$)/i,u=/^([^.]+)\.$/,c=/^\.([^.]+)$/,l=/^-?(Infinity|NaN)$/,f=/^\s*\+(?=[\w.])|^\s+|\s+$/g,o=function(e,t,n,r){var o,i=n?t:t.replace(f,"");// No exception on ±Infinity or NaN.
if(l.test(i))e.s=isNaN(i)?null:i<0?-1:1;else{if(!n&&(// basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
i=i.replace(a,(function(e,t,n){return o="x"==(n=n.toLowerCase())?16:"b"==n?2:8,r&&r!=o?e:t})),r&&(o=r,// E.g. '1.' to '1', '.1' to '0.1'
i=i.replace(u,"$1").replace(c,"0.$1")),t!=i))return new A(i,o);// '[BigNumber Error] Not a number: {n}'
// '[BigNumber Error] Not a base {b} number: {n}'
if(A.DEBUG)throw Error(ko+"Not a"+(r?" base "+r:"")+" number: "+t);// NaN
e.s=null}e.c=e.e=null},h.absoluteValue=h.abs=function(){var e=new A(this);return e.s<0&&(e.s=1),e},
/*
         * Return
         *   1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
         *   -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
         *   0 if they have the same value,
         *   or null if the value of either is NaN.
         */
h.comparedTo=function(e,t){return Go(this,new A(e,t))},
/*
         * If dp is undefined or null or true or false, return the number of decimal places of the
         * value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
         *
         * Otherwise, if dp is a number, return a new BigNumber whose value is the value of this
         * BigNumber rounded to a maximum of dp decimal places using rounding mode rm, or
         * ROUNDING_MODE if rm is omitted.
         *
         * [dp] {number} Decimal places: integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
         */
h.decimalPlaces=h.dp=function(e,t){var n,r,o,i=this;if(null!=e)return Wo(e,0,jo),null==t?t=g:Wo(t,0,8),M(new A(i),e+i.e+1,t);if(!(n=i.c))return null;// Subtract the number of trailing zeros of the last number.
if(r=((o=n.length-1)-Fo(this.e/xo))*xo,o=n[o])for(;o%10==0;o/=10,r--);return r<0&&(r=0),r},
/*
         *  n / 0 = I
         *  n / N = N
         *  n / I = 0
         *  0 / n = 0
         *  0 / 0 = N
         *  0 / N = N
         *  0 / I = 0
         *  N / n = N
         *  N / 0 = N
         *  N / N = N
         *  N / I = N
         *  I / n = I
         *  I / 0 = I
         *  I / N = N
         *  I / I = N
         *
         * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
         * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
         */
h.dividedBy=h.div=function(e,t){return n(this,new A(e,t),d,g)},
/*
         * Return a new BigNumber whose value is the integer part of dividing the value of this
         * BigNumber by the value of BigNumber(y, b).
         */
h.dividedToIntegerBy=h.idiv=function(e,t){return n(this,new A(e,t),0,1)},
/*
         * Return a BigNumber whose value is the value of this BigNumber exponentiated by n.
         *
         * If m is present, return the result modulo m.
         * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
         * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using ROUNDING_MODE.
         *
         * The modular power operation works efficiently when x, n, and m are integers, otherwise it
         * is equivalent to calculating x.exponentiatedBy(n).modulo(m) with a POW_PRECISION of 0.
         *
         * n {number|string|BigNumber} The exponent. An integer.
         * [m] {number|string|BigNumber} The modulus.
         *
         * '[BigNumber Error] Exponent not an integer: {n}'
         */
h.exponentiatedBy=h.pow=function(e,t){var n,r,o,i,s,a,u,c,l=this;// Allow NaN and ±Infinity, but not other non-integers.
if((e=new A(e)).c&&!e.isInteger())throw Error(ko+"Exponent not an integer: "+R(e));// If x is NaN, ±Infinity, ±0 or ±1, or n is ±Infinity, NaN or ±0.
if(null!=t&&(t=new A(t)),// Exponent of MAX_SAFE_INTEGER is 15.
s=e.e>14,!l.c||!l.c[0]||1==l.c[0]&&!l.e&&1==l.c.length||!e.c||!e.c[0])// The sign of the result of pow when x is negative depends on the evenness of n.
// If +n overflows to ±Infinity, the evenness of n would be not be known.
return c=new A(Math.pow(+R(l),s?e.s*(2-Ho(e)):+R(e))),t?c.mod(t):c;if(a=e.s<0,t){// x % m returns NaN if abs(m) is zero, or m is NaN.
if(t.c?!t.c[0]:!t.s)return new A(NaN);(r=!a&&l.isInteger()&&t.isInteger())&&(l=l.mod(t));// Overflow to ±Infinity: >=2**1e10 or >=1.0000024**1e15.
// Underflow to ±0: <=0.79**1e10 or <=0.9999975**1e15.
}else{if(e.e>9&&(l.e>0||l.e<-1||(0==l.e?l.c[0]>1||s&&l.c[1]>=24e7:l.c[0]<8e13||s&&l.c[0]<=9999975e7)))// If n is negative return ±0, else return ±Infinity.
// If x is negative and n is odd, k = -0, else k = 0.
return i=l.s<0&&Ho(e)?-0:0,// If x >= 1, k = ±Infinity.
l.e>-1&&(i=1/i),new A(a?1/i:i);S&&(// Truncating each coefficient array to a length of k after each multiplication
// equates to truncating significant digits to POW_PRECISION + [28, 41],
// i.e. there will be a minimum of 28 guard digits retained.
i=Mo(S/xo+2))}// Performs 54 loop iterations for n of 9007199254740991.
for(s?(n=new A(.5),a&&(e.s=1),u=Ho(e)):u=(o=Math.abs(+R(e)))%2,c=new A(p);;){if(u){if(!(c=c.times(l)).c)break;i?c.c.length>i&&(c.c.length=i):r&&(c=c.mod(t))}if(o){if(0===(o=Ro(o/2)))break;u=o%2}else if(M(e=e.times(n),e.e+1,1),e.e>14)u=Ho(e);else{if(0==(o=+R(e)))break;u=o%2}l=l.times(l),i?l.c&&l.c.length>i&&(l.c.length=i):r&&(l=l.mod(t))}return r?c:(a&&(c=p.div(c)),t?c.mod(t):i?M(c,S,g,void 0):c)},
/*
         * Return a new BigNumber whose value is the value of this BigNumber rounded to an integer
         * using rounding mode rm, or ROUNDING_MODE if rm is omitted.
         *
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {rm}'
         */
h.integerValue=function(e){var t=new A(this);return null==e?e=g:Wo(e,0,8),M(t,t.e+1,e)},
/*
         * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
         * otherwise return false.
         */
h.isEqualTo=h.eq=function(e,t){return 0===Go(this,new A(e,t))},
/*
         * Return true if the value of this BigNumber is a finite number, otherwise return false.
         */
h.isFinite=function(){return!!this.c},
/*
         * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
         * otherwise return false.
         */
h.isGreaterThan=h.gt=function(e,t){return Go(this,new A(e,t))>0},
/*
         * Return true if the value of this BigNumber is greater than or equal to the value of
         * BigNumber(y, b), otherwise return false.
         */
h.isGreaterThanOrEqualTo=h.gte=function(e,t){return 1===(t=Go(this,new A(e,t)))||0===t},
/*
         * Return true if the value of this BigNumber is an integer, otherwise return false.
         */
h.isInteger=function(){return!!this.c&&Fo(this.e/xo)>this.c.length-2},
/*
         * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
         * otherwise return false.
         */
h.isLessThan=h.lt=function(e,t){return Go(this,new A(e,t))<0},
/*
         * Return true if the value of this BigNumber is less than or equal to the value of
         * BigNumber(y, b), otherwise return false.
         */
h.isLessThanOrEqualTo=h.lte=function(e,t){return-1===(t=Go(this,new A(e,t)))||0===t},
/*
         * Return true if the value of this BigNumber is NaN, otherwise return false.
         */
h.isNaN=function(){return!this.s},
/*
         * Return true if the value of this BigNumber is negative, otherwise return false.
         */
h.isNegative=function(){return this.s<0},
/*
         * Return true if the value of this BigNumber is positive, otherwise return false.
         */
h.isPositive=function(){return this.s>0},
/*
         * Return true if the value of this BigNumber is 0 or -0, otherwise return false.
         */
h.isZero=function(){return!!this.c&&0==this.c[0]},
/*
         *  n - 0 = n
         *  n - N = N
         *  n - I = -I
         *  0 - n = -n
         *  0 - 0 = 0
         *  0 - N = N
         *  0 - I = -I
         *  N - n = N
         *  N - 0 = N
         *  N - N = N
         *  N - I = N
         *  I - n = I
         *  I - 0 = I
         *  I - N = N
         *  I - I = N
         *
         * Return a new BigNumber whose value is the value of this BigNumber minus the value of
         * BigNumber(y, b).
         */
h.minus=function(e,t){var n,r,o,i,s=this,a=s.s;// Either NaN?
if(t=(e=new A(e,t)).s,!a||!t)return new A(NaN);// Signs differ?
if(a!=t)return e.s=-t,s.plus(e);var u=s.e/xo,c=e.e/xo,l=s.c,f=e.c;if(!u||!c){// Either Infinity?
if(!l||!f)return l?(e.s=-t,e):new A(f?s:NaN);// Either zero?
if(!l[0]||!f[0])// Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
return f[0]?(e.s=-t,e):new A(l[0]?s:// IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
3==g?-0:0)}// Determine which is the bigger number.
if(u=Fo(u),c=Fo(c),l=l.slice(),a=u-c){// Prepend zeros to equalise exponents.
for((i=a<0)?(a=-a,o=l):(c=u,o=f),o.reverse(),t=a;t--;o.push(0));o.reverse()}else for(// Exponents equal. Check digit by digit.
r=(i=(a=l.length)<(t=f.length))?a:t,a=t=0;t<r;t++)if(l[t]!=f[t]){i=l[t]<f[t];break}// x < y? Point xc to the array of the bigger number.
// Append zeros to xc if shorter.
// No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
if(i&&(o=l,l=f,f=o,e.s=-e.s),(t=(r=f.length)-(n=l.length))>0)for(;t--;l[n++]=0);// Subtract yc from xc.
for(t=Po-1;r>a;){if(l[--r]<f[r]){for(n=r;n&&!l[--n];l[n]=t);--l[n],l[r]+=Po}l[r]-=f[r]}// Remove leading zeros and adjust exponent accordingly.
for(;0==l[0];l.splice(0,1),--c);// Zero?
return l[0]?T(e,l,c):(// Following IEEE 754 (2008) 6.3,
// n - n = +0  but  n - n = -0  when rounding towards -Infinity.
e.s=3==g?-1:1,e.c=[e.e=0],e);// No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
// for finite x and y.
},
/*
         *   n % 0 =  N
         *   n % N =  N
         *   n % I =  n
         *   0 % n =  0
         *  -0 % n = -0
         *   0 % 0 =  N
         *   0 % N =  N
         *   0 % I =  0
         *   N % n =  N
         *   N % 0 =  N
         *   N % N =  N
         *   N % I =  N
         *   I % n =  N
         *   I % 0 =  N
         *   I % N =  N
         *   I % I =  N
         *
         * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
         * BigNumber(y, b). The result depends on the value of MODULO_MODE.
         */
h.modulo=h.mod=function(e,t){var r,o,i=this;// Return NaN if x is Infinity or NaN, or y is NaN or zero.
return e=new A(e,t),!i.c||!e.s||e.c&&!e.c[0]?new A(NaN):!e.c||i.c&&!i.c[0]?new A(i):(9==b?(// Euclidian division: q = sign(y) * floor(x / abs(y))
// r = x - qy    where  0 <= r < abs(y)
o=e.s,e.s=1,r=n(i,e,0,3),e.s=o,r.s*=o):r=n(i,e,0,b),// To match JavaScript %, ensure sign of zero is sign of dividend.
(e=i.minus(r.times(e))).c[0]||1!=b||(e.s=i.s),e)},
/*
         *  n * 0 = 0
         *  n * N = N
         *  n * I = I
         *  0 * n = 0
         *  0 * 0 = 0
         *  0 * N = N
         *  0 * I = N
         *  N * n = N
         *  N * 0 = N
         *  N * N = N
         *  N * I = N
         *  I * n = I
         *  I * 0 = N
         *  I * N = N
         *  I * I = I
         *
         * Return a new BigNumber whose value is the value of this BigNumber multiplied by the value
         * of BigNumber(y, b).
         */
h.multipliedBy=h.times=function(e,t){var n,r,o,i,s,a,u,c,l,f,h,p,d,g,m,_=this,y=_.c,v=(e=new A(e,t)).c;// Either NaN, ±Infinity or ±0?
if(!(y&&v&&y[0]&&v[0]))// Return NaN if either is NaN, or one is 0 and the other is Infinity.
return!_.s||!e.s||y&&!y[0]&&!v||v&&!v[0]&&!y?e.c=e.e=e.s=null:(e.s*=_.s,// Return ±Infinity if either is ±Infinity.
y&&v?(e.c=[0],e.e=0):e.c=e.e=null),e;// Initialise the result array with zeros.
for(r=Fo(_.e/xo)+Fo(e.e/xo),e.s*=_.s,// Ensure xc points to longer array and xcL to its length.
(u=y.length)<(f=v.length)&&(d=y,y=v,v=d,o=u,u=f,f=o),o=u+f,d=[];o--;d.push(0));for(g=Po,m=Uo,o=f;--o>=0;){for(n=0,h=v[o]%m,p=v[o]/m|0,i=o+(s=u);i>o;)n=((c=h*(c=y[--s]%m)+(a=p*c+(l=y[s]/m|0)*h)%m*m+d[i]+n)/g|0)+(a/m|0)+p*l,d[i--]=c%g;d[i]=n}return n?++r:d.splice(0,1),T(e,d,r)},
/*
         * Return a new BigNumber whose value is the value of this BigNumber negated,
         * i.e. multiplied by -1.
         */
h.negated=function(){var e=new A(this);return e.s=-e.s||null,e},
/*
         *  n + 0 = n
         *  n + N = N
         *  n + I = I
         *  0 + n = n
         *  0 + 0 = 0
         *  0 + N = N
         *  0 + I = I
         *  N + n = N
         *  N + 0 = N
         *  N + N = N
         *  N + I = N
         *  I + n = I
         *  I + 0 = I
         *  I + N = N
         *  I + I = I
         *
         * Return a new BigNumber whose value is the value of this BigNumber plus the value of
         * BigNumber(y, b).
         */
h.plus=function(e,t){var n,r=this,o=r.s;// Either NaN?
if(t=(e=new A(e,t)).s,!o||!t)return new A(NaN);// Signs differ?
if(o!=t)return e.s=-t,r.minus(e);var i=r.e/xo,s=e.e/xo,a=r.c,u=e.c;if(!i||!s){// Return ±Infinity if either ±Infinity.
if(!a||!u)return new A(o/0);// Either zero?
// Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
if(!a[0]||!u[0])return u[0]?e:new A(a[0]?r:0*o)}// Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
if(i=Fo(i),s=Fo(s),a=a.slice(),o=i-s){for(o>0?(s=i,n=u):(o=-o,n=a),n.reverse();o--;n.push(0));n.reverse()}// Only start adding at yc.length - 1 as the further digits of xc can be ignored.
for(// Point xc to the longer array, and b to the shorter length.
(o=a.length)-(t=u.length)<0&&(n=u,u=a,a=n,t=o),o=0;t;)o=(a[--t]=a[t]+u[t]+o)/Po|0,a[t]=Po===a[t]?0:a[t]%Po;// No need to check for zero, as +x + +y != 0 && -x + -y != 0
// ye = MAX_EXP + 1 possible
return o&&(a=[o].concat(a),++s),T(e,a,s)},
/*
         * If sd is undefined or null or true or false, return the number of significant digits of
         * the value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
         * If sd is true include integer-part trailing zeros in the count.
         *
         * Otherwise, if sd is a number, return a new BigNumber whose value is the value of this
         * BigNumber rounded to a maximum of sd significant digits using rounding mode rm, or
         * ROUNDING_MODE if rm is omitted.
         *
         * sd {number|boolean} number: significant digits: integer, 1 to MAX inclusive.
         *                     boolean: whether to count integer-part trailing zeros: true or false.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
         */
h.precision=h.sd=function(e,t){var n,r,o,i=this;if(null!=e&&e!==!!e)return Wo(e,1,jo),null==t?t=g:Wo(t,0,8),M(new A(i),e,t);if(!(n=i.c))return null;if(r=(o=n.length-1)*xo+1,o=n[o]){// Subtract the number of trailing zeros of the last element.
for(;o%10==0;o/=10,r--);// Add the number of digits of the first element.
for(o=n[0];o>=10;o/=10,r++);}return e&&i.e+1>r&&(r=i.e+1),r},
/*
         * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
         * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
         *
         * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {k}'
         */
h.shiftedBy=function(e){return Wo(e,-9007199254740991,Io),this.times("1e"+e)},
/*
         *  sqrt(-n) =  N
         *  sqrt(N) =  N
         *  sqrt(-I) =  N
         *  sqrt(I) =  I
         *  sqrt(0) =  0
         *  sqrt(-0) = -0
         *
         * Return a new BigNumber whose value is the square root of the value of this BigNumber,
         * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
         */
h.squareRoot=h.sqrt=function(){var e,t,r,o,i,s=this,a=s.c,u=s.s,c=s.e,l=d+4,f=new A("0.5");// Negative/NaN/Infinity/zero?
if(1!==u||!a||!a[0])return new A(!u||u<0&&(!a||a[0])?NaN:a?s:1/0);// Initial estimate.
// Check for zero.
// r could be zero if MIN_EXP is changed after the this value was created.
// This would cause a division by zero (x/t) and hence Infinity below, which would cause
// coeffToString to throw.
if(// Math.sqrt underflow/overflow?
// Pass x to Math.sqrt as integer, then adjust the exponent of the result.
0==(u=Math.sqrt(+R(s)))||u==1/0?(((t=Bo(a)).length+c)%2==0&&(t+="0"),u=Math.sqrt(+t),c=Fo((c+1)/2)-(c<0||c%2),r=new A(t=u==1/0?"5e"+c:(t=u.toExponential()).slice(0,t.indexOf("e")+1)+c)):r=new A(u+""),r.c[0])// Newton-Raphson iteration.
for((u=(c=r.e)+l)<3&&(u=0);;)if(i=r,r=f.times(i.plus(n(s,i,l,1))),Bo(i.c).slice(0,u)===(t=Bo(r.c)).slice(0,u)){// The 4th rounding digit may be in error by -1 so if the 4 rounding digits
// are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
// iteration.
if(// The exponent of r may here be one less than the final result exponent,
// e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
// are indexed correctly.
r.e<c&&--u,"9999"!=(t=t.slice(u-3,u+1))&&(o||"4999"!=t)){// If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
// result. If not, then there are further digits and m will be truthy.
+t&&(+t.slice(1)||"5"!=t.charAt(0))||(// Truncate to the first rounding digit.
M(r,r.e+d+2,1),e=!r.times(r).eq(s));break}// On the first iteration only, check to see if rounding up gives the
// exact result as the nines may infinitely repeat.
if(!o&&(M(i,i.e+d+2,0),i.times(i).eq(s))){r=i;break}l+=4,u+=4,o=1}return M(r,r.e+d+1,g,e)},
/*
         * Return a string representing the value of this BigNumber in exponential notation and
         * rounded using ROUNDING_MODE to dp fixed decimal places.
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
         */
h.toExponential=function(e,t){return null!=e&&(Wo(e,0,jo),e++),L(this,e,t,1)},
/*
         * Return a string representing the value of this BigNumber in fixed-point notation rounding
         * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
         *
         * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
         * but e.g. (-0.00001).toFixed(0) is '-0'.
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
         */
h.toFixed=function(e,t){return null!=e&&(Wo(e,0,jo),e=e+this.e+1),L(this,e,t)},
/*
         * Return a string representing the value of this BigNumber in fixed-point notation rounded
         * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
         * of the format or FORMAT object (see BigNumber.set).
         *
         * The formatting object may contain some or all of the properties shown below.
         *
         * FORMAT = {
         *   prefix: '',
         *   groupSize: 3,
         *   secondaryGroupSize: 0,
         *   groupSeparator: ',',
         *   decimalSeparator: '.',
         *   fractionGroupSize: 0,
         *   fractionGroupSeparator: '\xA0',      // non-breaking space
         *   suffix: ''
         * };
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         * [format] {object} Formatting options. See FORMAT pbject above.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
         * '[BigNumber Error] Argument not an object: {format}'
         */
h.toFormat=function(e,t,n){var r,o=this;if(null==n)null!=e&&t&&"object"==typeof t?(n=t,t=null):e&&"object"==typeof e?(n=e,e=t=null):n=O;else if("object"!=typeof n)throw Error(ko+"Argument not an object: "+n);if(r=o.toFixed(e,t),o.c){var i,s=r.split("."),a=+n.groupSize,u=+n.secondaryGroupSize,c=n.groupSeparator||"",l=s[0],f=s[1],h=o.s<0,p=h?l.slice(1):l,d=p.length;if(u&&(i=a,a=u,u=i,d-=i),a>0&&d>0){for(i=d%a||a,l=p.substr(0,i);i<d;i+=a)l+=c+p.substr(i,a);u>0&&(l+=c+p.slice(i)),h&&(l="-"+l)}r=f?l+(n.decimalSeparator||"")+((u=+n.fractionGroupSize)?f.replace(new RegExp("\\d{"+u+"}\\B","g"),"$&"+(n.fractionGroupSeparator||"")):f):l}return(n.prefix||"")+r+(n.suffix||"")},
/*
         * Return an array of two BigNumbers representing the value of this BigNumber as a simple
         * fraction with an integer numerator and an integer denominator.
         * The denominator will be a positive non-zero value less than or equal to the specified
         * maximum denominator. If a maximum denominator is not specified, the denominator will be
         * the lowest value necessary to represent the number exactly.
         *
         * [md] {number|string|BigNumber} Integer >= 1, or Infinity. The maximum denominator.
         *
         * '[BigNumber Error] Argument {not an integer|out of range} : {md}'
         */
h.toFraction=function(e){var t,r,o,i,s,a,u,c,l,f,h,d,m=this,_=m.c;if(null!=e&&(!(u=new A(e)).isInteger()&&(u.c||1!==u.s)||u.lt(p)))throw Error(ko+"Argument "+(u.isInteger()?"out of range: ":"not an integer: ")+R(u));if(!_)return new A(m);for(t=new A(p),l=r=new A(p),o=c=new A(p),d=Bo(_),// Determine initial denominator.
// d is a power of 10 and the minimum max denominator that specifies the value exactly.
s=t.e=d.length-m.e-1,t.c[0]=$o[(a=s%xo)<0?xo+a:a],e=!e||u.comparedTo(t)>0?s>0?t:l:u,a=v,v=1/0,u=new A(d),// n0 = d1 = 0
c.c[0]=0;f=n(u,t,0,1),1!=(i=r.plus(f.times(o))).comparedTo(e);)r=o,o=i,l=c.plus(f.times(i=l)),c=i,t=u.minus(f.times(i=t)),u=i;return i=n(e.minus(r),o,0,1),c=c.plus(i.times(l)),r=r.plus(i.times(o)),c.s=l.s=m.s,// Determine which fraction is closer to x, n0/d0 or n1/d1
h=n(l,o,s*=2,g).minus(m).abs().comparedTo(n(c,r,s,g).minus(m).abs())<1?[l,o]:[c,r],v=a,h},
/*
         * Return the value of this BigNumber converted to a number primitive.
         */
h.toNumber=function(){return+R(this)},
/*
         * Return a string representing the value of this BigNumber rounded to sd significant digits
         * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
         * necessary to represent the integer part of the value in fixed-point notation, then use
         * exponential notation.
         *
         * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
         */
h.toPrecision=function(e,t){return null!=e&&Wo(e,1,jo),L(this,e,t,2)},
/*
         * Return a string representing the value of this BigNumber in base b, or base 10 if b is
         * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
         * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
         * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
         * TO_EXP_NEG, return exponential notation.
         *
         * [b] {number} Integer, 2 to ALPHABET.length inclusive.
         *
         * '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
         */
h.toString=function(e){var t,n=this,o=n.s,i=n.e;// Infinity or NaN?
return null===i?o?(t="Infinity",o<0&&(t="-"+t)):t="NaN":(null==e?t=i<=m||i>=_?Yo(Bo(n.c),i):Vo(Bo(n.c),i,"0"):10===e&&C?t=Vo(Bo((n=M(new A(n),d+i+1,g)).c),n.e,"0"):(Wo(e,2,w.length,"Base"),t=r(Vo(Bo(n.c),i,"0"),10,e,o,!0)),o<0&&n.c[0]&&(t="-"+t)),t},
/*
         * Return as toString, but do not accept a base argument, and include the minus sign for
         * negative zero.
         */
h.valueOf=h.toJSON=function(){return R(this)},h._isBigNumber=!0,h[Symbol.toStringTag]="BigNumber",// Node.js v10.12.0+
h[Symbol.for("nodejs.util.inspect.custom")]=h.valueOf,null!=t&&A.set(t),A}()),function(e,t){var n=t.documentElement,r=e.devicePixelRatio||1;// set 1rem = viewWidth / 10
function o(){var e=n.clientWidth/10;n.style.fontSize=e+"px"}// detect 0.5px supports
if(// adjust body font size
function e(){t.body?t.body.style.fontSize=12*r+"px":t.addEventListener("DOMContentLoaded",e)}(),o(),// reset rem unit on page resize
e.addEventListener("resize",o),e.addEventListener("pageshow",(function(e){e.persisted&&o()})),r>=2){var i=t.createElement("body"),s=t.createElement("div");s.style.border=".5px solid transparent",i.appendChild(s),n.appendChild(i),1===s.offsetHeight&&n.classList.add("hairlines"),n.removeChild(i)}}(window,document);var Qo=Jo((function(e,t){var n=Ko(e),r=Ko(t),o=Xo(e)+Xo(t),i=n*r;return qo(i),i/Math.pow(10,o)})),Zo=Jo((function(e,t){// 取最大的小数位
var n=Math.pow(10,Math.max(Xo(e),Xo(t)));// 把小数都转为整数然后再计算
return(Qo(e,n)+Qo(t,n))/n})),ei=Jo((function(e,t){var n=Math.pow(10,Math.max(Xo(e),Xo(t)));return(Qo(e,n)-Qo(t,n))/n})),ti=Jo((function(e,t){var n=Ko(e),r=Ko(t);// fix: 类似 10 ** -4 为 0.00009999999999999999，strip 修正
return qo(n),qo(r),Qo(n/r,zo(Math.pow(10,Xo(t)-Xo(e))))})),ni=!0;
/**
       * Accurate addition.
       *
       * @param nums The numbers to add
       */e("i",{strip:zo,plus:Zo,minus:ei,times:Qo,divide:ti,round:
/**
       * Accurate rounding method.
       *
       * @param num The number to round
       * @param decimal An integer specifying the decimal digits
       */
function(e,t){var n=Math.pow(10,t),r=ti(Math.round(Math.abs(Qo(e,n))),n);return e<0&&0!==r&&(r=Qo(r,-1)),r},digitLength:Xo,float2Fixed:Ko,enableBoundaryChecking:
/**
       * Whether to check the bounds of number, default is enabled.
       *
       * @param flag The value to indicate whether is enabled
       */
function(e){void 0===e&&(e=!0),ni=e}});var ri={exports:{}};!function(e,t){e.exports=function(){var e,t,n=1e3,r=6e4,o=36e5,i=864e5,s=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,u=2592e6,c=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,l={years:a,months:u,days:i,hours:o,minutes:r,seconds:n,milliseconds:1,weeks:6048e5},f=function(e){return e instanceof y},h=function(e,t,n){return new y(e,n,t.$l)},p=function(e){return t.p(e)+"s"},d=function(e){return e<0},g=function(e){return d(e)?Math.ceil(e):Math.floor(e)},m=function(e){return Math.abs(e)},_=function(e,t){return e?d(e)?{negative:!0,format:""+m(e)+t}:{negative:!1,format:""+e+t}:{negative:!1,format:""}},y=function(){function d(e,t,n){var r=this;if(this.$d={},this.$l=n,void 0===e&&(this.$ms=0,this.parseFromMilliseconds()),t)return h(e*l[p(t)],this);if("number"==typeof e)return this.$ms=e,this.parseFromMilliseconds(),this;if("object"==typeof e)return Object.keys(e).forEach((function(t){r.$d[p(t)]=e[t]})),this.calMilliseconds(),this;if("string"==typeof e){var o=e.match(c);if(o){var i=o.slice(2).map((function(e){return null!=e?Number(e):0}));return this.$d.years=i[0],this.$d.months=i[1],this.$d.weeks=i[2],this.$d.days=i[3],this.$d.hours=i[4],this.$d.minutes=i[5],this.$d.seconds=i[6],this.calMilliseconds(),this}}return this}var m=d.prototype;return m.calMilliseconds=function(){var e=this;this.$ms=Object.keys(this.$d).reduce((function(t,n){return t+(e.$d[n]||0)*l[n]}),0)},m.parseFromMilliseconds=function(){var e=this.$ms;this.$d.years=g(e/a),e%=a,this.$d.months=g(e/u),e%=u,this.$d.days=g(e/i),e%=i,this.$d.hours=g(e/o),e%=o,this.$d.minutes=g(e/r),e%=r,this.$d.seconds=g(e/n),e%=n,this.$d.milliseconds=e},m.toISOString=function(){var e=_(this.$d.years,"Y"),t=_(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var r=_(n,"D"),o=_(this.$d.hours,"H"),i=_(this.$d.minutes,"M"),s=this.$d.seconds||0;this.$d.milliseconds&&(s+=this.$d.milliseconds/1e3);var a=_(s,"S"),u=e.negative||t.negative||r.negative||o.negative||i.negative||a.negative,c=o.format||i.format||a.format?"T":"",l=(u?"-":"")+"P"+e.format+t.format+r.format+c+o.format+i.format+a.format;return"P"===l||"-P"===l?"P0D":l},m.toJSON=function(){return this.toISOString()},m.format=function(e){var n=e||"YYYY-MM-DDTHH:mm:ss",r={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return n.replace(s,(function(e,t){return t||String(r[e])}))},m.as=function(e){return this.$ms/l[p(e)]},m.get=function(e){var t=this.$ms,n=p(e);return"milliseconds"===n?t%=1e3:t="weeks"===n?g(t/l[n]):this.$d[n],0===t?0:t},m.add=function(e,t,n){var r;return r=t?e*l[p(t)]:f(e)?e.$ms:h(e,this).$ms,h(this.$ms+r*(n?-1:1),this)},m.subtract=function(e,t){return this.add(e,t,!0)},m.locale=function(e){var t=this.clone();return t.$l=e,t},m.clone=function(){return h(this.$ms,this)},m.humanize=function(t){return e().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},m.milliseconds=function(){return this.get("milliseconds")},m.asMilliseconds=function(){return this.as("milliseconds")},m.seconds=function(){return this.get("seconds")},m.asSeconds=function(){return this.as("seconds")},m.minutes=function(){return this.get("minutes")},m.asMinutes=function(){return this.as("minutes")},m.hours=function(){return this.get("hours")},m.asHours=function(){return this.as("hours")},m.days=function(){return this.get("days")},m.asDays=function(){return this.as("days")},m.weeks=function(){return this.get("weeks")},m.asWeeks=function(){return this.as("weeks")},m.months=function(){return this.get("months")},m.asMonths=function(){return this.as("months")},m.years=function(){return this.get("years")},m.asYears=function(){return this.as("years")},d}();return function(n,r,o){e=o,t=o().$utils(),o.duration=function(e,t){var n=o.locale();return h(e,{$l:n},t)},o.isDuration=f;var i=r.prototype.add,s=r.prototype.subtract;r.prototype.add=function(e,t){return f(e)&&(e=e.asMilliseconds()),i.bind(this)(e,t)},r.prototype.subtract=function(e,t){return f(e)&&(e=e.asMilliseconds()),s.bind(this)(e,t)}}}()}(ri),e("h",ri.exports)}}}));
//# sourceMappingURL=vendor-legacy-d0deb908.js.map
