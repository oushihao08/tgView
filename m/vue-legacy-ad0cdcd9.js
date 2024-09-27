System.register([],(function(e,t){"use strict";return{execute:function(){
/**
             * Make a map and return a function for checking if a key
             * is in that map.
             * IMPORTANT: all calls of this function must be prefixed with
             * \/\*#\_\_PURE\_\_\*\/
             * So that rollup can tree-shake them if necessary.
             */
function t(e,t){const n=Object.create(null),o=e.split(",");for(let r=0;r<o.length;r++)n[o[r]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}e({$:Qr,A:Oo,C:ee,D:bt,E:mt,G:_t,H:Nt,J:Tt,K:As,M:Br,N:Ur,O:Bo,P:a,Q:s,R:Dr,S:Sn,V:Ao,W:Fo,Z:Gr,a:pt,a0:No,a1:bn,a2:Cn,a5:Ut,a7:ne,a8:oe,ac:Es,ae:Xr,ah:Bt,ai:dt,aj:ks,ak:ft,am:$t,an:Vo,aq:u,ar:Yr,at:Qs,d:io,e:lo,f:kt,h:Hr,i:Bn,k:eo,m:In,n:nn,p:Vn,q:os,r:Et,s:ko,u:Ft,w:jn,y:Zr});const n=t("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt"),o=t("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
/**
             * Boolean attributes should be included if the value is truthy or ''.
             * e.g. `<select multiple>` compiles to `{ multiple: '' }`
             */
function r(e){return!!e||""===e}function s(e){if(E(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],r=O(o)?c(o):s(o);if(r)for(const e in r)t[e]=r[e]}return t}return O(e)||M(e)?e:void 0}const i=/;(?![^(]*\))/g,l=/:(.+)/;function c(e){const t={};return e.split(i).forEach((e=>{if(e){const n=e.split(l);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function a(e){let t="";if(O(e))t=e;else if(E(e))for(let n=0;n<e.length;n++){const o=a(e[n]);o&&(t+=o+" ")}else if(M(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function u(e){if(!e)return null;let{class:t,style:n}=e;return t&&!O(t)&&(e.class=a(t)),n&&(e.style=s(n)),e}function p(e,t){if(e===t)return!0;let n=R(e),o=R(t);if(n||o)return!(!n||!o)&&e.getTime()===t.getTime();if(n=P(e),o=P(t),n||o)return e===t;if(n=E(e),o=E(t),n||o)return!(!n||!o)&&function(e,t){if(e.length!==t.length)return!1;let n=!0;for(let o=0;n&&o<e.length;o++)n=p(e[o],t[o]);return n}(e,t);if(n=M(e),o=M(t),n||o){/* istanbul ignore if: this if will probably never be called */if(!n||!o)return!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e){const o=e.hasOwnProperty(n),r=t.hasOwnProperty(n);if(o&&!r||!o&&r||!p(e[n],t[n]))return!1}}return String(e)===String(t)}function f(e,t){return e.findIndex((e=>p(e,t)))}
/**
             * For converting {{ interpolation }} values to displayed strings.
             * @private
             */const d=e("U",(e=>O(e)?e:null==e?"":E(e)||M(e)&&(e.toString===V||!F(e.toString))?JSON.stringify(e,h,2):String(e))),h=(e,t)=>// can't use isRef here since @vue/shared has no deps
t&&t.__v_isRef?h(e,t.value):T(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:A(t)?{[`Set(${t.size})`]:[...t.values()]}:!M(t)||E(t)||I(t)?t:String(t),m={},v=[],g=e("a6",(()=>{})),y=()=>!1,_=/^on[^a-z]/,b=e=>_.test(e),C=e=>e.startsWith("onUpdate:"),S=Object.assign,x=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},w=Object.prototype.hasOwnProperty,k=e("a4",((e,t)=>w.call(e,t))),E=e("aa",Array.isArray),T=e=>"[object Map]"===B(e),A=e=>"[object Set]"===B(e),R=e=>"[object Date]"===B(e),F=e("ad",(e=>"function"==typeof e)),O=e("Y",(e=>"string"==typeof e)),P=e=>"symbol"==typeof e,M=e("a3",(e=>null!==e&&"object"==typeof e)),N=e("as",(e=>M(e)&&F(e.then)&&F(e.catch))),V=Object.prototype.toString,B=e=>V.call(e),I=e=>"[object Object]"===B(e),L=e=>O(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,$=t(// the leading comma is intentional so empty string "" is also included
",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),j=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},U=/-(\w)/g,D=e("a9",j((e=>e.replace(U,((e,t)=>t?t.toUpperCase():""))))),H=/\B([A-Z])/g,z=e("ab",j((e=>e.replace(H,"-$1").toLowerCase()))),W=j((e=>e.charAt(0).toUpperCase()+e.slice(1))),K=j((e=>e?`on${W(e)}`:"")),q=(e,t)=>!Object.is(e,t),G=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},J=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Y=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let X,Z;class Q{constructor(e=!1){
/**
                     * @internal
                     */
this.active=!0,
/**
                     * @internal
                     */
this.effects=[],
/**
                     * @internal
                     */
this.cleanups=[],!e&&Z&&(this.parent=Z,this.index=(Z.scopes||(Z.scopes=[])).push(this)-1)}run(e){if(this.active){const t=Z;try{return Z=this,e()}finally{Z=t}}}
/**
                 * This should only be called on non-detached scopes
                 * @internal
                 */on(){Z=this}
/**
                 * This should only be called on non-detached scopes
                 * @internal
                 */off(){Z=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);// nested scope, dereference from parent to avoid memory leaks
if(this.parent&&!e){// optimized O(1) removal
const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function ee(e){return new Q(e)}function te(e,t=Z){t&&t.active&&t.effects.push(e)}function ne(){return Z}function oe(e){Z&&Z.cleanups.push(e)}const re=e=>{const t=new Set(e);return t.w=0,t.n=0,t},se=e=>(e.w&ue)>0,ie=e=>(e.n&ue)>0,le=new WeakMap;// The number of effects currently being tracked recursively.
let ce,ae=0,ue=1;const pe=Symbol(""),fe=Symbol("");class de{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,te(this,n)}run(){if(!this.active)return this.fn();let e=ce,t=me;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ce,ce=this,me=!0,ue=1<<++ae,ae<=30?(({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ue;// set was tracked
})(this):he(this),this.fn()}finally{ae<=30&&(e=>{const{deps:t}=e;if(t.length){let n=0;for(let o=0;o<t.length;o++){const r=t[o];se(r)&&!ie(r)?r.delete(e):t[n++]=r,// clear bits
r.w&=~ue,r.n&=~ue}t.length=n}})(this),ue=1<<--ae,ce=this.parent,me=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){// stopped while running itself - defer the cleanup
ce===this?this.deferStop=!0:this.active&&(he(this),this.onStop&&this.onStop(),this.active=!1)}}function he(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let me=!0;const ve=[];function ge(){ve.push(me),me=!1}function ye(){const e=ve.pop();me=void 0===e||e}function _e(e,t,n){if(me&&ce){let t=le.get(e);t||le.set(e,t=new Map);let o=t.get(n);o||t.set(n,o=re()),be(o)}}function be(e,t){let n=!1;ae<=30?ie(e)||(e.n|=ue,// set newly tracked
n=!se(e)):// Full cleanup mode.
n=!e.has(ce),n&&(e.add(ce),ce.deps.push(e))}function Ce(e,t,n,o,r,s){const i=le.get(e);if(!i)// never been tracked
return;let l=[];if("clear"/* TriggerOpTypes.CLEAR */===t)// collection being cleared
// trigger all effects for target
l=[...i.values()];else if("length"===n&&E(e))i.forEach(((e,t)=>{("length"===t||t>=o)&&l.push(e)}));else// also run for iteration key on ADD | DELETE | Map.SET
switch(// schedule runs for SET | ADD | DELETE
void 0!==n&&l.push(i.get(n)),t){case"add"/* TriggerOpTypes.ADD */:E(e)?L(n)&&// new index added to array -> length changes
l.push(i.get("length")):(l.push(i.get(pe)),T(e)&&l.push(i.get(fe)));break;case"delete"/* TriggerOpTypes.DELETE */:E(e)||(l.push(i.get(pe)),T(e)&&l.push(i.get(fe)));break;case"set"/* TriggerOpTypes.SET */:T(e)&&l.push(i.get(pe))}if(1===l.length)l[0]&&Se(l[0]);else{const e=[];for(const t of l)t&&e.push(...t);Se(re(e))}}function Se(e,t){// spread into array for stabilization
const n=E(e)?e:[...e];for(const o of n)o.computed&&xe(o);for(const o of n)o.computed||xe(o)}function xe(e,t){(e!==ce||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const we=t("__proto__,__v_isRef,__isVue"),ke=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(P)),Ee=Pe(),Te=Pe(!1,!0),Ae=Pe(!0),Re=Pe(!0,!0),Fe=Oe();function Oe(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=_t(this);for(let t=0,r=this.length;t<r;t++)_e(n,0/* TrackOpTypes.GET */,t+"");// we run the method using the original args first (which may be reactive)
const o=n[t](...e);return-1===o||!1===o?n[t](...e.map(_t)):o}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){ge();const n=_t(this)[t].apply(this,e);return ye(),n}})),e}function Pe(e=!1,t=!1){return function(n,o,r){if("__v_isReactive"/* ReactiveFlags.IS_REACTIVE */===o)return!e;if("__v_isReadonly"/* ReactiveFlags.IS_READONLY */===o)return e;if("__v_isShallow"/* ReactiveFlags.IS_SHALLOW */===o)return t;if("__v_raw"/* ReactiveFlags.RAW */===o&&r===(e?t?at:ct:t?lt:it).get(n))return n;const s=E(n);if(!e&&s&&k(Fe,o))return Reflect.get(Fe,o,r);const i=Reflect.get(n,o,r);return(P(o)?ke.has(o):we(o))?i:(e||_e(n,0/* TrackOpTypes.GET */,o),t?i:kt(i)?s&&L(o)?i:i.value:M(i)?e?dt(i):pt(i):i)}}function Me(e=!1){return function(t,n,o,r){let s=t[n];if(vt(s)&&kt(s)&&!kt(o))return!1;if(!e&&(gt(o)||vt(o)||(s=_t(s),o=_t(o)),!E(t)&&kt(s)&&!kt(o)))return s.value=o,!0;const i=E(t)&&L(n)?Number(n)<t.length:k(t,n),l=Reflect.set(t,n,o,r);// don't trigger if target is something up in the prototype chain of original
return t===_t(r)&&(i?q(o,s)&&Ce(t,"set"/* TriggerOpTypes.SET */,n,o):Ce(t,"add"/* TriggerOpTypes.ADD */,n,o)),l}}const Ne={get:Ee,set:Me(),deleteProperty:function(e,t){const n=k(e,t);e[t];const o=Reflect.deleteProperty(e,t);return o&&n&&Ce(e,"delete"/* TriggerOpTypes.DELETE */,t,void 0),o},has:function(e,t){const n=Reflect.has(e,t);return P(t)&&ke.has(t)||_e(e,0/* TrackOpTypes.HAS */,t),n},ownKeys:function(e){return _e(e,0/* TrackOpTypes.ITERATE */,E(e)?"length":pe),Reflect.ownKeys(e)}},Ve={get:Ae,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},Be=S({},Ne,{get:Te,set:Me(!0)}),Ie=S({},Ve,{get:Re}),Le=e=>e,$e=e=>Reflect.getPrototypeOf(e);function je(e,t,n=!1,o=!1){const r=_t(// #1772: readonly(reactive(Map)) should return readonly + reactive version
// of the value
e=e.__v_raw),s=_t(t);n||(t!==s&&_e(r,0/* TrackOpTypes.GET */,t),_e(r,0/* TrackOpTypes.GET */,s));const{has:i}=$e(r),l=o?Le:n?St:Ct;return i.call(r,t)?l(e.get(t)):i.call(r,s)?l(e.get(s)):void(e!==r&&// #3602 readonly(reactive(Map))
// ensure that the nested reactive `Map` can do tracking for itself
e.get(t))}function Ue(e,t=!1){const n=this.__v_raw,o=_t(n),r=_t(e);return t||(e!==r&&_e(o,0/* TrackOpTypes.HAS */,e),_e(o,0/* TrackOpTypes.HAS */,r)),e===r?n.has(e):n.has(e)||n.has(r)}function De(e,t=!1){return e=e.__v_raw,!t&&_e(_t(e),0/* TrackOpTypes.ITERATE */,pe),Reflect.get(e,"size",e)}function He(e){e=_t(e);const t=_t(this);return $e(t).has.call(t,e)||(t.add(e),Ce(t,"add"/* TriggerOpTypes.ADD */,e,e)),this}function ze(e,t){t=_t(t);const n=_t(this),{has:o,get:r}=$e(n);let s=o.call(n,e);s||(e=_t(e),s=o.call(n,e));const i=r.call(n,e);return n.set(e,t),s?q(t,i)&&Ce(n,"set"/* TriggerOpTypes.SET */,e,t):Ce(n,"add"/* TriggerOpTypes.ADD */,e,t),this}function We(e){const t=_t(this),{has:n,get:o}=$e(t);let r=n.call(t,e);r||(e=_t(e),r=n.call(t,e)),o&&o.call(t,e);// forward the operation before queueing reactions
const s=t.delete(e);return r&&Ce(t,"delete"/* TriggerOpTypes.DELETE */,e,void 0),s}function Ke(){const e=_t(this),t=0!==e.size,n=e.clear();return t&&Ce(e,"clear"/* TriggerOpTypes.CLEAR */,void 0,void 0),n}function qe(e,t){return function(n,o){const r=this,s=r.__v_raw,i=_t(s),l=t?Le:e?St:Ct;return!e&&_e(i,0/* TrackOpTypes.ITERATE */,pe),s.forEach(((e,t)=>n.call(o,l(e),l(t),r)))}}function Ge(e,t,n){return function(...o){const r=this.__v_raw,s=_t(r),i=T(s),l="entries"===e||e===Symbol.iterator&&i,c="keys"===e&&i,a=r[e](...o),u=n?Le:t?St:Ct;// return a wrapped iterator which returns observed versions of the
// values emitted from the real iterator
return!t&&_e(s,0/* TrackOpTypes.ITERATE */,c?fe:pe),{// iterator protocol
next(){const{value:e,done:t}=a.next();return t?{value:e,done:t}:{value:l?[u(e[0]),u(e[1])]:u(e),done:t}},// iterable protocol
[Symbol.iterator](){return this}}}}function Je(e){return function(...t){return"delete"/* TriggerOpTypes.DELETE */!==e&&this}}function Ye(){const e={get(e){return je(this,e)},get size(){return De(this)},has:Ue,add:He,set:ze,delete:We,clear:Ke,forEach:qe(!1,!1)},t={get(e){return je(this,e,!1,!0)},get size(){return De(this)},has:Ue,add:He,set:ze,delete:We,clear:Ke,forEach:qe(!1,!0)},n={get(e){return je(this,e,!0)},get size(){return De(this,!0)},has(e){return Ue.call(this,e,!0)},add:Je("add"/* TriggerOpTypes.ADD */),set:Je("set"/* TriggerOpTypes.SET */),delete:Je("delete"/* TriggerOpTypes.DELETE */),clear:Je("clear"/* TriggerOpTypes.CLEAR */),forEach:qe(!0,!1)},o={get(e){return je(this,e,!0,!0)},get size(){return De(this,!0)},has(e){return Ue.call(this,e,!0)},add:Je("add"/* TriggerOpTypes.ADD */),set:Je("set"/* TriggerOpTypes.SET */),delete:Je("delete"/* TriggerOpTypes.DELETE */),clear:Je("clear"/* TriggerOpTypes.CLEAR */),forEach:qe(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((r=>{e[r]=Ge(r,!1,!1),n[r]=Ge(r,!0,!1),t[r]=Ge(r,!1,!0),o[r]=Ge(r,!0,!0)})),[e,n,t,o]}const[Xe,Ze,Qe,et]=Ye();function tt(e,t){const n=t?e?et:Qe:e?Ze:Xe;return(t,o,r)=>"__v_isReactive"/* ReactiveFlags.IS_REACTIVE */===o?!e:"__v_isReadonly"/* ReactiveFlags.IS_READONLY */===o?e:"__v_raw"/* ReactiveFlags.RAW */===o?t:Reflect.get(k(n,o)&&o in t?n:t,o,r)}const nt={get:tt(!1,!1)},ot={get:tt(!1,!0)},rt={get:tt(!0,!1)},st={get:tt(!0,!0)},it=new WeakMap,lt=new WeakMap,ct=new WeakMap,at=new WeakMap;function ut(e){return e.__v_skip||!Object.isExtensible(e)?0/* TargetType.INVALID */:function(e){switch(e){case"Object":case"Array":return 1/* TargetType.COMMON */;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2/* TargetType.COLLECTION */;default:return 0/* TargetType.INVALID */}}((e=>B(e).slice(8,-1))(e))}function pt(e){// if trying to observe a readonly proxy, return the readonly version.
return vt(e)?e:ht(e,!1,Ne,nt,it)}
/**
             * Return a shallowly-reactive copy of the original object, where only the root
             * level properties are reactive. It also does not auto-unwrap refs (even at the
             * root level).
             */function ft(e){return ht(e,!1,Be,ot,lt)}
/**
             * Creates a readonly copy of the original object. Note the returned copy is not
             * made reactive, but `readonly` can be called on an already reactive object.
             */function dt(e){return ht(e,!0,Ve,rt,ct)}
/**
             * Returns a reactive-copy of the original object, where only the root level
             * properties are readonly, and does NOT unwrap refs nor recursively convert
             * returned properties.
             * This is used for creating the props proxy object for stateful components.
             */function ht(e,t,n,o,r){if(!M(e))return e;// target is already a Proxy, return it.
// exception: calling readonly() on a reactive object
if(e.__v_raw&&(!t||!e.__v_isReactive))return e;// target already has corresponding Proxy
const s=r.get(e);if(s)return s;// only specific value types can be observed.
const i=ut(e);if(0/* TargetType.INVALID */===i)return e;const l=new Proxy(e,2/* TargetType.COLLECTION */===i?o:n);return r.set(e,l),l}function mt(e){return vt(e)?mt(e.__v_raw):!(!e||!e.__v_isReactive)}function vt(e){return!(!e||!e.__v_isReadonly)}function gt(e){return!(!e||!e.__v_isShallow)}function yt(e){return mt(e)||vt(e)}function _t(e){const t=e&&e.__v_raw;return t?_t(t):e}function bt(e){return J(e,"__v_skip"/* ReactiveFlags.SKIP */,!0),e}const Ct=e=>M(e)?pt(e):e,St=e=>M(e)?dt(e):e;function xt(e){me&&ce&&be((e=_t(e)).dep||(e.dep=re()))}function wt(e,t){(e=_t(e)).dep&&Se(e.dep)}function kt(e){return!(!e||!0!==e.__v_isRef)}function Et(e){return At(e,!1)}function Tt(e){return At(e,!0)}function At(e,t){return kt(e)?e:new Rt(e,t)}class Rt{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:_t(e),this._value=t?e:Ct(e)}get value(){return xt(this),this._value}set value(e){const t=this.__v_isShallow||gt(e)||vt(e);e=t?e:_t(e),q(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Ct(e),wt(this))}}function Ft(e){return kt(e)?e.value:e}const Ot={get:(e,t,n)=>Ft(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const r=e[t];return kt(r)&&!kt(n)?(r.value=n,!0):Reflect.set(e,t,n,o)}};function Pt(e){return mt(e)?e:new Proxy(e,Ot)}class Mt{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:t,set:n}=e((()=>xt(this)),(()=>wt(this)));this._get=t,this._set=n}get value(){return this._get()}set value(e){this._set(e)}}function Nt(e){const t=E(e)?new Array(e.length):{};for(const n in e)t[n]=Bt(e,n);return t}class Vt{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Bt(e,t,n){const o=e[t];return kt(o)?o:new Vt(e,t,n)}var It;class Lt{constructor(e,t,n,o){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[It]=!1,this._dirty=!0,this.effect=new de(e,(()=>{this._dirty||(this._dirty=!0,wt(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=n}get value(){// the computed ref may get wrapped by other proxies e.g. readonly() #3376
const e=_t(this);return xt(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function $t(e,t,n=!1){let o,r;const s=F(e);return s?(o=e,r=g):(o=e.get,r=e.set),new Lt(o,r,s||!r,n)}It="__v_isReadonly"/* ReactiveFlags.IS_READONLY */;const jt=[];function Ut(e,...t){// avoid props formatting or warn handler tracking deps that might be mutated
// during patch, leading to infinite recursion.
ge();const n=jt.length?jt[jt.length-1].component:null,o=n&&n.appContext.config.warnHandler,r=function(){let e=jt[jt.length-1];if(!e)return[];// we can't just use the stack because it will be incomplete during updates
// that did not start from the root. Re-construct the parent chain using
// instance parent pointers.
const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode}return t}/* istanbul ignore next */();if(o)zt(o,n,11/* ErrorCodes.APP_WARN_HANDLER */,[e+t.join(""),n&&n.proxy,r.map((({vnode:e})=>`at <${xs(n,e.type)}>`)).join("\n"),r]);else{const n=[`[Vue warn]: ${e}`,...t];/* istanbul ignore if */r.length&&n.push("\n",...function(e){const t=[];return e.forEach(((e,n)=>{t.push(...0===n?[]:["\n"],...function({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",o=!!e.component&&null==e.component.parent,r=` at <${xs(e.component,e.type,o)}`,s=">"+n;return e.props?[r,...Dt(e.props),s]:[r+s]}/* istanbul ignore next */(e))})),t}(r)),console.warn(...n)}ye()}function Dt(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach((n=>{t.push(...Ht(n,e[n]))})),n.length>3&&t.push(" ..."),t}/* istanbul ignore next */function Ht(e,t,n){return O(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):"number"==typeof t||"boolean"==typeof t||null==t?n?t:[`${e}=${t}`]:kt(t)?(t=Ht(e,_t(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):F(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=_t(t),n?t:[`${e}=`,t])}function zt(e,t,n,o){let r;try{r=o?e(...o):e()}catch(s){Kt(s,t,n)}return r}function Wt(e,t,n,o){if(F(e)){const r=zt(e,t,n,o);return r&&N(r)&&r.catch((e=>{Kt(e,t,n)})),r}const r=[];for(let s=0;s<e.length;s++)r.push(Wt(e[s],t,n,o));return r}function Kt(e,t,n,o=!0){if(t&&t.vnode,t){let o=t.parent;// the exposed instance is the render proxy to keep it consistent with 2.x
const r=t.proxy,s=n;// in production the hook receives only the error code
for(;o;){const t=o.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,r,s))return;o=o.parent}// app-level handling
const i=t.appContext.config.errorHandler;if(i)return void zt(i,null,10/* ErrorCodes.APP_ERROR_HANDLER */,[e,r,s])}!function(e,t,n,o=!0){// recover in prod to reduce the impact on end-user
console.error(e)}(e,0,0,o)}let qt=!1,Gt=!1;const Jt=[];let Yt=0;const Xt=[];let Zt=null,Qt=0;const en=Promise.resolve();let tn=null;function nn(e){const t=tn||en;return e?t.then(this?e.bind(this):e):t}// #2768
// Use binary-search to find a suitable position in the queue,
// so that the queue maintains the increasing order of job's id,
// which can prevent the job from being skipped and also can avoid repeated patching.
function on(e){// the dedupe search uses the startIndex argument of Array.includes()
// by default the search index includes the current job that is being run
// so it cannot recursively trigger itself again.
// if the job is a watch() callback, the search will start with a +1 index to
// allow it recursively trigger itself - it is the user's responsibility to
// ensure it doesn't end up in an infinite loop.
Jt.length&&Jt.includes(e,qt&&e.allowRecurse?Yt+1:Yt)||(null==e.id?Jt.push(e):Jt.splice(function(e){// the start index should be `flushIndex + 1`
let t=Yt+1,n=Jt.length;for(;t<n;){const o=t+n>>>1;an(Jt[o])<e?t=o+1:n=o}return t}(e.id),0,e),rn())}function rn(){qt||Gt||(Gt=!0,tn=en.then(pn))}function sn(e){E(e)?// if cb is an array, it is a component lifecycle hook which can only be
// triggered by a job, which is already deduped in the main queue, so
// we can skip duplicate check here to improve perf
Xt.push(...e):Zt&&Zt.includes(e,e.allowRecurse?Qt+1:Qt)||Xt.push(e),rn()}function ln(e,t=Yt){for(;t<Jt.length;t++){const e=Jt[t];e&&e.pre&&(Jt.splice(t,1),t--,e())}}function cn(e){if(Xt.length){const e=[...new Set(Xt)];// #1947 already has active queue, nested flushPostFlushCbs call
if(Xt.length=0,Zt)return void Zt.push(...e);for(Zt=e,Zt.sort(((e,t)=>an(e)-an(t))),Qt=0;Qt<Zt.length;Qt++)Zt[Qt]();Zt=null,Qt=0}}const an=e=>null==e.id?1/0:e.id,un=(e,t)=>{const n=an(e)-an(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function pn(e){Gt=!1,qt=!0,// Sort queue before flush.
// This ensures that:
// 1. Components are updated from parent to child. (because parent is always
//    created before the child so its render effect will have smaller
//    priority number)
// 2. If a component is unmounted during a parent component's update,
//    its update can be skipped.
Jt.sort(un);try{for(Yt=0;Yt<Jt.length;Yt++){const e=Jt[Yt];e&&!1!==e.active&&// console.log(`running:`, job.id)
zt(e,null,14/* ErrorCodes.SCHEDULER */)}}finally{Yt=0,Jt.length=0,cn(),qt=!1,tn=null,// some postFlushCb queued jobs!
// keep flushing until it drains.
(Jt.length||Xt.length)&&pn()}}let fn,dn=[];function hn(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||m;let r=n;const s=t.startsWith("update:"),i=s&&t.slice(7);// for v-model update:xxx events, apply modifiers on args
if(i&&i in o){const e=`${"modelValue"===i?"model":i}Modifiers`,{number:t,trim:s}=o[e]||m;s&&(r=n.map((e=>e.trim()))),t&&(r=n.map(Y))}let l,c=o[l=K(t)]||// also try camelCase event handler (#2249)
o[l=K(D(t))];// for v-model update:xxx events, also trigger kebab-case equivalent
// for props passed via kebab-case
!c&&s&&(c=o[l=K(z(t))]),c&&Wt(c,e,6/* ErrorCodes.COMPONENT_EVENT_HANDLER */,r);const a=o[l+"Once"];if(a){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,Wt(a,e,6/* ErrorCodes.COMPONENT_EVENT_HANDLER */,r)}}function mn(e,t,n=!1){const o=t.emitsCache,r=o.get(e);if(void 0!==r)return r;const s=e.emits;let i={},l=!1;// apply mixin/extends props
if(!F(e)){const o=e=>{const n=mn(e,t,!0);n&&(l=!0,S(i,n))};!n&&t.mixins.length&&t.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}return s||l?(E(s)?s.forEach((e=>i[e]=null)):S(i,s),M(e)&&o.set(e,i),i):(M(e)&&o.set(e,null),null)}// Check if an incoming prop key is a declared emit event listener.
// e.g. With `emits: { click: null }`, props named `onClick` and `onclick` are
// both considered matched listeners.
function vn(e,t){return!(!e||!b(t))&&(t=t.slice(2).replace(/Once$/,""),k(e,t[0].toLowerCase()+t.slice(1))||k(e,z(t))||k(e,t))}
/**
             * mark the current rendering instance for asset resolution (e.g.
             * resolveComponent, resolveDirective) during render
             */let gn=null,yn=null;
/**
             * Note: rendering calls maybe nested. The function returns the parent rendering
             * instance if present, which should be restored after the render is done:
             *
             * ```js
             * const prev = setCurrentRenderingInstance(i)
             * // ...render
             * setCurrentRenderingInstance(prev)
             * ```
             */
function _n(e){const t=gn;return gn=e,yn=e&&e.type.__scopeId||null,t}
/**
             * Set scope id when creating hoisted vnodes.
             * @private compiler helper
             */function bn(e){yn=e}
/**
             * Technically we no longer need this after 3.0.8 but we need to keep the same
             * API for backwards compat w/ code generated by compilers.
             * @private
             */function Cn(){yn=null}
/**
             * Only for backwards compat
             * @private
             */
/**
             * Wrap a slot function to memoize current rendering instance
             * @private compiler helper
             */
function Sn(e,t=gn,n){if(!t)return e;// already normalized
if(e._n)return e;const o=(...n)=>{// If a user calls a compiled slot inside a template expression (#1745), it
// can mess up block tracking, so by default we disable block tracking and
// force bail out when invoking a compiled slot (indicated by the ._d flag).
// This isn't necessary if rendering a compiled `<slot>`, so we flip the
// ._d flag off when invoking the wrapped fn inside `renderSlot`.
o._d&&$r(-1);const r=_n(t),s=e(...n);return _n(r),o._d&&$r(1),s};// mark normalized to avoid duplicated wrapping
return o._n=!0,// mark this as compiled by default
// this is used in vnode.ts -> normalizeChildren() to set the slot
// rendering flag.
o._c=!0,// disable block tracking by default
o._d=!0,o}function xn(e){const{type:t,vnode:n,proxy:o,withProxy:r,props:s,propsOptions:[i],slots:l,attrs:c,emit:a,render:u,renderCache:p,data:f,setupState:d,ctx:h,inheritAttrs:m}=e;let v,g;const y=_n(e);try{if(4/* ShapeFlags.STATEFUL_COMPONENT */&n.shapeFlag){// withProxy is a proxy with a different `has` trap only for
// runtime-compiled render functions using `with` block.
const e=r||o;v=es(u.call(e,e,p,s,d,f,h)),g=c}else{// functional
const e=t;// in dev, mark attrs accessed if optional props (attrs === props)
v=es(e.length>1?e(s,{attrs:c,slots:l,emit:a}):e(s,null/* we know it doesn't need it */)),g=t.props?c:wn(c)}}catch(b){Nr.length=0,Kt(b,e,1/* ErrorCodes.RENDER_FUNCTION */),v=Jr(Pr)}// attr merging
// in dev mode, comments are preserved, and it's possible for a template
// to have comments along side the root element which makes it a fragment
let _=v;if(g&&!1!==m){const e=Object.keys(g),{shapeFlag:t}=_;e.length&&7/* ShapeFlags.COMPONENT */&t&&(i&&e.some(C)&&(// If a v-model listener (onUpdate:xxx) has a corresponding declared
// prop, it indicates this component expects to handle v-model and
// it should not fallthrough.
// related: #1543, #1643, #1989
g=kn(g,i)),_=Xr(_,g))}// inherit directives
return n.dirs&&(// clone before mutating since the root may be a hoisted vnode
_=Xr(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),// inherit transition data
n.transition&&(_.transition=n.transition),v=_,_n(y),v}const wn=e=>{let t;for(const n in e)("class"===n||"style"===n||b(n))&&((t||(t={}))[n]=e[n]);return t},kn=(e,t)=>{const n={};for(const o in e)C(o)&&o.slice(9)in t||(n[o]=e[o]);return n};function En(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const s=o[r];if(t[s]!==e[s]&&!vn(n,s))return!0}return!1}function Tn({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const An=e=>e.__isSuspense// Suspense exposes a component-like API, and is treated like a component
// in the compiler, but internally it's a special built-in type that hooks
// directly into the renderer.
,Rn={name:"Suspense",// In order to make Suspense tree-shakable, we need to avoid importing it
// directly in the renderer. The renderer checks for the __isSuspense flag
// on a vnode's type and calls the `process` method, passing in renderer
// internals.
__isSuspense:!0,process(e,t,n,o,r,s,i,l,c,// platform-specific impl passed from renderer
a){null==e?function(e,t,n,o,r,s,i,l,c){const{p:a,o:{createElement:u}}=c,p=u("div"),f=e.suspense=On(e,r,o,t,p,n,s,i,l,c);// start mounting the content subtree in an off-dom container
a(null,f.pendingBranch=e.ssContent,p,null,o,f,s,i),// now check if we have encountered any async deps
f.deps>0?(// has async
// invoke @fallback event
Fn(e,"onPending"),Fn(e,"onFallback"),// mount the fallback tree
a(null,e.ssFallback,t,n,o,null,// fallback tree will not have suspense context
s,i),Nn(f,e.ssFallback)):// Suspense has no async deps. Just resolve.
f.resolve()}(t,n,o,r,s,i,l,c,a):function(e,t,n,o,r,s,i,l,{p:c,um:a,o:{createElement:u}}){const p=t.suspense=e.suspense;p.vnode=t,t.el=e.el;const f=t.ssContent,d=t.ssFallback,{activeBranch:h,pendingBranch:m,isInFallback:v,isHydrating:g}=p;if(m)p.pendingBranch=f,zr(f,m)?(// same root type but content may have changed.
c(m,f,p.hiddenContainer,null,r,p,s,i,l),p.deps<=0?p.resolve():v&&(c(h,d,n,o,r,null,// fallback tree will not have suspense context
s,i,l),Nn(p,d))):(// toggled before pending tree is resolved
p.pendingId++,g?(// if toggled before hydration is finished, the current DOM tree is
// no longer valid. set it as the active branch so it will be unmounted
// when resolved
p.isHydrating=!1,p.activeBranch=m):a(m,r,p),// increment pending ID. this is used to invalidate async callbacks
// reset suspense state
p.deps=0,// discard effects from pending branch
p.effects.length=0,// discard previous container
p.hiddenContainer=u("div"),v?(// already in fallback state
c(null,f,p.hiddenContainer,null,r,p,s,i,l),p.deps<=0?p.resolve():(c(h,d,n,o,r,null,// fallback tree will not have suspense context
s,i,l),Nn(p,d))):h&&zr(f,h)?(// toggled "back" to current active branch
c(h,f,n,o,r,p,s,i,l),// force resolve
p.resolve(!0)):(// switched to a 3rd branch
c(null,f,p.hiddenContainer,null,r,p,s,i,l),p.deps<=0&&p.resolve()));else if(h&&zr(f,h))// root did not change, just normal patch
c(h,f,n,o,r,p,s,i,l),Nn(p,f);else if(// root node toggled
// invoke @pending event
Fn(t,"onPending"),// mount pending branch in off-dom container
p.pendingBranch=f,p.pendingId++,c(null,f,p.hiddenContainer,null,r,p,s,i,l),p.deps<=0)// incoming branch has no async deps, resolve now.
p.resolve();else{const{timeout:e,pendingId:t}=p;e>0?setTimeout((()=>{p.pendingId===t&&p.fallback(d)}),e):0===e&&p.fallback(d)}}(e,t,n,o,r,i,l,c,a)},hydrate:function(e,t,n,o,r,s,i,l,c){/* eslint-disable no-restricted-globals */const a=t.suspense=On(t,o,n,e.parentNode,document.createElement("div"),null,r,s,i,l,!0/* hydrating */),u=c(e,a.pendingBranch=t.ssContent,n,a,s,i);// there are two possible scenarios for server-rendered suspense:
// - success: ssr content should be fully resolved
// - failure: ssr content should be the fallback branch.
// however, on the client we don't really know if it has failed or not
// attempt to hydrate the DOM assuming it has succeeded, but we still
// need to construct a suspense boundary first
return 0===a.deps&&a.resolve(),u;/* eslint-enable no-restricted-globals */},create:On,normalize:function(e){const{shapeFlag:t,children:n}=e,o=32/* ShapeFlags.SLOTS_CHILDREN */&t;e.ssContent=Pn(o?n.default:n),e.ssFallback=o?Pn(n.fallback):Jr(Pr)}};function Fn(e,t){const n=e.props&&e.props[t];F(n)&&n()}function On(e,t,n,o,r,s,i,l,c,a,u=!1){const{p:p,m:f,um:d,n:h,o:{parentNode:m,remove:v}}=a,g=Y(e.props&&e.props.timeout),y={vnode:e,parent:t,parentComponent:n,isSVG:i,container:o,hiddenContainer:r,anchor:s,deps:0,pendingId:0,timeout:"number"==typeof g?g:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(e=!1){const{vnode:t,activeBranch:n,pendingBranch:o,pendingId:r,effects:s,parentComponent:i,container:l}=y;if(y.isHydrating)y.isHydrating=!1;else if(!e){const e=n&&o.transition&&"out-in"===o.transition.mode;e&&(n.transition.afterLeave=()=>{r===y.pendingId&&f(o,l,t,0/* MoveType.ENTER */)});// this is initial anchor on mount
let{anchor:t}=y;// unmount current active tree
n&&(// if the fallback tree was mounted, it may have been moved
// as part of a parent suspense. get the latest anchor for insertion
t=h(n),d(n,i,y,!0)),e||// move content from off-dom container to actual container
f(o,l,t,0/* MoveType.ENTER */)}Nn(y,o),y.pendingBranch=null,y.isInFallback=!1;// flush buffered effects
// check if there is a pending parent suspense
let c=y.parent,a=!1;for(;c;){if(c.pendingBranch){// found a pending parent suspense, merge buffered post jobs
// into that parent
c.effects.push(...s),a=!0;break}c=c.parent}// no pending parent suspense, flush all jobs
a||sn(s),y.effects=[],// invoke @resolve event
Fn(t,"onResolve")},fallback(e){if(!y.pendingBranch)return;const{vnode:t,activeBranch:n,parentComponent:o,container:r,isSVG:s}=y;// invoke @fallback event
Fn(t,"onFallback");const i=h(n),a=()=>{y.isInFallback&&(// mount the fallback tree
p(null,e,r,i,o,null,// fallback tree will not have suspense context
s,l,c),Nn(y,e))},u=e.transition&&"out-in"===e.transition.mode;u&&(n.transition.afterLeave=a),y.isInFallback=!0,// unmount current active branch
d(n,o,null,// no suspense so unmount hooks fire now
!0),u||a()},move(e,t,n){y.activeBranch&&f(y.activeBranch,e,t,n),y.container=e},next:()=>y.activeBranch&&h(y.activeBranch),registerDep(e,t){const n=!!y.pendingBranch;n&&y.deps++;const o=e.vnode.el;e.asyncDep.catch((t=>{Kt(t,e,0/* ErrorCodes.SETUP_FUNCTION */)})).then((r=>{// retry when the setup() promise resolves.
// component may have been unmounted before resolve.
if(e.isUnmounted||y.isUnmounted||y.pendingId!==e.suspenseId)return;// retry from this component
e.asyncResolved=!0;const{vnode:s}=e;gs(e,r,!1),o&&(// vnode may have been replaced if an update happened before the
// async dep is resolved.
s.el=o);const l=!o&&e.subTree.el;t(e,s,// component may have been moved before resolve.
// if this is not a hydration, instance.subTree will be the comment
// placeholder.
m(o||e.subTree.el),// anchor will not be used if this is hydration, so only need to
// consider the comment placeholder case.
o?null:h(e.subTree),y,i,c),l&&v(l),Tn(e,s.el),// only decrease deps count if suspense is not already resolved
n&&0==--y.deps&&y.resolve()}))},unmount(e,t){y.isUnmounted=!0,y.activeBranch&&d(y.activeBranch,n,e,t),y.pendingBranch&&d(y.pendingBranch,n,e,t)}};return y}function Pn(e){let t;if(F(e)){const n=Lr&&e._c;n&&(// disableTracking: false
// allow block tracking for compiled slots
// (see ./componentRenderContext.ts)
e._d=!1,Br()),e=e(),n&&(e._d=!0,t=Vr,Ir())}if(E(e)){const t=function(e){let t;for(let n=0;n<e.length;n++){const o=e[n];if(!Hr(o))return;// ignore user comment
if(o.type!==Pr||"v-if"===o.children){if(t)// has more than 1 non-comment child, return now
return;t=o}}return t}(e);e=t}return e=es(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter((t=>t!==e))),e}function Mn(e,t){t&&t.pendingBranch?E(e)?t.effects.push(...e):t.effects.push(e):sn(e)}function Nn(e,t){e.activeBranch=t;const{vnode:n,parentComponent:o}=e,r=n.el=t.el;// in case suspense is the root node of a component,
// recursively update the HOC el
o&&o.subTree===n&&(o.vnode.el=r,Tn(o,r))}function Vn(e,t){if(cs){let n=cs.provides;// by default an instance inherits its parent's provides object
// but when it needs to provide values of its own, it creates its
// own provides object using parent provides object as prototype.
// this way in `inject` we can simply look up injections from direct
// parent and let the prototype chain do the work.
const o=cs.parent&&cs.parent.provides;o===n&&(n=cs.provides=Object.create(o)),// TS doesn't allow symbol as index type
n[e]=t}}function Bn(e,t,n=!1){// fallback to `currentRenderingInstance` so that this can be called in
// a functional component
const o=cs||gn;if(o){// #2400
// to support `app.use` plugins,
// fallback to appContext's `provides` if the instance is at root
const r=null==o.parent?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(r&&e in r)// TS doesn't allow symbol as index type
return r[e];if(arguments.length>1)return n&&F(t)?t.call(o.proxy):t}}// Simple effect.
function In(e,t){return Un(e,null,t)}function Ln(e,t){return Un(e,null,{flush:"post"})}// initial value for watchers to trigger on undefined initial values
const $n={};// implementation
function jn(e,t,n){return Un(e,t,n)}function Un(e,t,{immediate:n,deep:o,flush:r,onTrack:s,onTrigger:i}=m){const l=cs;let c,a,u=!1,p=!1;if(kt(e)?(c=()=>e.value,u=gt(e)):mt(e)?(c=()=>e,o=!0):E(e)?(p=!0,u=e.some((e=>mt(e)||gt(e))),c=()=>e.map((e=>kt(e)?e.value:mt(e)?zn(e):F(e)?zt(e,l,2/* ErrorCodes.WATCH_GETTER */):void 0))):// getter with cb
c=F(e)?t?()=>zt(e,l,2/* ErrorCodes.WATCH_GETTER */):()=>{if(!l||!l.isUnmounted)return a&&a(),Wt(e,l,3/* ErrorCodes.WATCH_CALLBACK */,[f])}:g,t&&o){const e=c;c=()=>zn(e())}let f=e=>{a=y.onStop=()=>{zt(e,l,4/* ErrorCodes.WATCH_CLEANUP */)}};// in SSR there is no need to setup an actual effect, and it should be noop
// unless it's eager
if(ms)// we will also not call the invalidate callback (+ runner is not set up)
return f=g,t?n&&Wt(t,l,3/* ErrorCodes.WATCH_CALLBACK */,[c(),p?[]:void 0,f]):c(),g;let d=p?[]:$n;const h=()=>{if(y.active)if(t){// watch(source, cb)
const e=y.run();(o||u||(p?e.some(((e,t)=>q(e,d[t]))):q(e,d)))&&(// cleanup before running cb again
a&&a(),Wt(t,l,3/* ErrorCodes.WATCH_CALLBACK */,[e,// pass undefined as the old value when it's changed for the first time
d===$n?void 0:d,f]),d=e)}else// watchEffect
y.run()};// important: mark the job as a watcher callback so that scheduler knows
// it is allowed to self-trigger (#1727)
let v;h.allowRecurse=!!t,"sync"===r?v=h:"post"===r?v=()=>_r(h,l&&l.suspense):(// default: 'pre'
h.pre=!0,l&&(h.id=l.uid),v=()=>on(h));const y=new de(c,v);// initial run
return t?n?h():d=y.run():"post"===r?_r(y.run.bind(y),l&&l.suspense):y.run(),()=>{y.stop(),l&&l.scope&&x(l.scope.effects,y)}}// this.$watch
function Dn(e,t,n){const o=this.proxy,r=O(e)?e.includes(".")?Hn(o,e):()=>o[e]:e.bind(o,o);let s;F(t)?s=t:(s=t.handler,n=t);const i=cs;us(this);const l=Un(r,s.bind(o),n);return i?us(i):ps(),l}function Hn(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function zn(e,t){if(!M(e)||e.__v_skip)return e;if((t=t||new Set).has(e))return e;if(t.add(e),kt(e))zn(e.value,t);else if(E(e))for(let n=0;n<e.length;n++)zn(e[n],t);else if(A(e)||T(e))e.forEach((e=>{zn(e,t)}));else if(I(e))for(const n in e)zn(e[n],t);return e}function Wn(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return vo((()=>{e.isMounted=!0})),_o((()=>{e.isUnmounting=!0})),e}const Kn=[Function,Array],qn={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,// enter
onBeforeEnter:Kn,onEnter:Kn,onAfterEnter:Kn,onEnterCancelled:Kn,// leave
onBeforeLeave:Kn,onLeave:Kn,onAfterLeave:Kn,onLeaveCancelled:Kn,// appear
onBeforeAppear:Kn,onAppear:Kn,onAfterAppear:Kn,onAppearCancelled:Kn},setup(e,{slots:t}){const n=as(),o=Wn();let r;return()=>{const s=t.default&&Qn(t.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1)// locate first non-comment child
for(const e of s)if(e.type!==Pr){i=e;break}// there's no need to track reactivity for these props so use the raw
// props for a bit better perf
const l=_t(e),{mode:c}=l;if(o.isLeaving)return Yn(i);// in the case of <transition><keep-alive/></transition>, we need to
// compare the type of the kept-alive children.
const a=Xn(i);if(!a)return Yn(i);const u=Jn(a,l,o,n);Zn(a,u);const p=n.subTree,f=p&&Xn(p);let d=!1;const{getTransitionKey:h}=a.type;if(h){const e=h();void 0===r?r=e:e!==r&&(r=e,d=!0)}// handle mode
if(f&&f.type!==Pr&&(!zr(a,f)||d)){const e=Jn(f,l,o,n);// update old tree's hooks in case of dynamic transition
// switching between different views
if(Zn(f,e),"out-in"===c)return o.isLeaving=!0,// return placeholder node and queue update when leave finishes
e.afterLeave=()=>{o.isLeaving=!1,n.update()},Yn(i);"in-out"===c&&a.type!==Pr&&(e.delayLeave=(e,t,n)=>{Gn(o,f)[String(f.key)]=f,// early removal callback
e._leaveCb=()=>{t(),e._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=n})}return i}}};function Gn(e,t){const{leavingVNodes:n}=e;let o=n.get(t.type);return o||(o=Object.create(null),n.set(t.type,o)),o}// The transition hooks are attached to the vnode as vnode.transition
// and will be called at appropriate timing in the renderer.
function Jn(e,t,n,o){const{appear:r,mode:s,persisted:i=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:a,onEnterCancelled:u,onBeforeLeave:p,onLeave:f,onAfterLeave:d,onLeaveCancelled:h,onBeforeAppear:m,onAppear:v,onAfterAppear:g,onAppearCancelled:y}=t,_=String(e.key),b=Gn(n,e),C=(e,t)=>{e&&Wt(e,o,9/* ErrorCodes.TRANSITION_HOOK */,t)},S=(e,t)=>{const n=t[1];C(e,t),E(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},x={mode:s,persisted:i,beforeEnter(t){let o=l;if(!n.isMounted){if(!r)return;o=m||l}// for same element (v-show)
t._leaveCb&&t._leaveCb(!0/* cancelled */);// for toggled element with same key (v-if)
const s=b[_];s&&zr(e,s)&&s.el._leaveCb&&// force early removal (not cancelled)
s.el._leaveCb(),C(o,[t])},enter(e){let t=c,o=a,s=u;if(!n.isMounted){if(!r)return;t=v||c,o=g||a,s=y||u}let i=!1;const l=e._enterCb=t=>{i||(i=!0,C(t?s:o,[e]),x.delayedLeave&&x.delayedLeave(),e._enterCb=void 0)};t?S(t,[e,l]):l()},leave(t,o){const r=String(e.key);if(t._enterCb&&t._enterCb(!0/* cancelled */),n.isUnmounting)return o();C(p,[t]);let s=!1;const i=t._leaveCb=n=>{s||(s=!0,o(),C(n?h:d,[t]),t._leaveCb=void 0,b[r]===e&&delete b[r])};b[r]=e,f?S(f,[t,i]):i()},clone:e=>Jn(e,t,n,o)};return x}// the placeholder really only handles one special case: KeepAlive
// in the case of a KeepAlive in a leave phase we need to return a KeepAlive
// placeholder with empty content to avoid the KeepAlive instance from being
// unmounted.
function Yn(e){if(oo(e))return(e=Xr(e)).children=null,e}function Xn(e){return oo(e)?e.children?e.children[0]:void 0:e}function Zn(e,t){6/* ShapeFlags.COMPONENT */&e.shapeFlag&&e.component?Zn(e.component.subTree,t):128/* ShapeFlags.SUSPENSE */&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Qn(e,t=!1,n){let o=[],r=0;for(let s=0;s<e.length;s++){let i=e[s];// #5360 inherit parent key in case of <template v-for>
const l=null==n?i.key:String(n)+String(null!=i.key?i.key:s);// handle fragment children case, e.g. v-for
i.type===Fr?(128/* PatchFlags.KEYED_FRAGMENT */&i.patchFlag&&r++,o=o.concat(Qn(i.children,t,l))):(t||i.type!==Pr)&&o.push(null!=l?Xr(i,{key:l}):i)}// #1126 if a transition children list contains multiple sub fragments, these
// fragments will be merged into a flat children array. Since each v-for
// fragment may contain different static bindings inside, we need to de-op
// these children to force full diffs to ensure correct behavior.
if(r>1)for(let s=0;s<o.length;s++)o[s].patchFlag=-2/* PatchFlags.BAIL */;return o}// implementation, close to no-op
function eo(e){return F(e)?{setup:e,name:e.name}:e}const to=e=>!!e.type.__asyncLoader;function no(e,{vnode:{ref:t,props:n,children:o,shapeFlag:r},parent:s}){const i=Jr(e,n,o);// ensure inner component inherits the async wrapper's ref owner
return i.ref=t,i}const oo=e=>e.type.__isKeepAlive,ro={name:"KeepAlive",// Marker for special handling inside the renderer. We are not using a ===
// check directly on KeepAlive in the renderer, because importing it directly
// would prevent it from being tree-shaken.
__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=as(),o=n.ctx;// KeepAlive communicates with the instantiated renderer via the
// ctx where the renderer passes in its internals,
// and the KeepAlive instance exposes activate/deactivate implementations.
// The whole point of this is to avoid importing KeepAlive directly in the
// renderer to facilitate tree-shaking.
// if the internal renderer is not registered, it indicates that this is server-side rendering,
// for KeepAlive, we just need to render its children
if(!o.renderer)return()=>{const e=t.default&&t.default();return e&&1===e.length?e[0]:e};const r=new Map,s=new Set;let i=null;const l=n.suspense,{renderer:{p:c,m:a,um:u,o:{createElement:p}}}=o,f=p("div");function d(e){// reset the shapeFlag so it can be properly unmounted
uo(e),u(e,n,l,!0)}function h(e){r.forEach(((t,n)=>{const o=Ss(t.type);!o||e&&e(o)||m(n)}))}function m(e){const t=r.get(e);i&&t.type===i.type?i&&// current active instance should no longer be kept-alive.
// we can't unmount it now but it might be later, so reset its flag now.
uo(i):d(t),r.delete(e),s.delete(e)}// prune cache on include/exclude prop change
o.activate=(e,t,n,o,r)=>{const s=e.component;a(e,t,n,0/* MoveType.ENTER */,l),// in case props have changed
c(s.vnode,e,t,n,s,l,o,e.slotScopeIds,r),_r((()=>{s.isDeactivated=!1,s.a&&G(s.a);const t=e.props&&e.props.onVnodeMounted;t&&rs(t,s.parent,e)}),l)},o.deactivate=e=>{const t=e.component;a(e,f,null,1/* MoveType.LEAVE */,l),_r((()=>{t.da&&G(t.da);const n=e.props&&e.props.onVnodeUnmounted;n&&rs(n,t.parent,e),t.isDeactivated=!0}),l)},jn((()=>[e.include,e.exclude]),(([e,t])=>{e&&h((t=>so(e,t))),t&&h((e=>!so(t,e)))}),// prune post-render after `current` has been updated
{flush:"post",deep:!0});// cache sub tree after render
let v=null;const g=()=>{// fix #1621, the pendingCacheKey could be 0
null!=v&&r.set(v,po(n.subTree))};return vo(g),yo(g),_o((()=>{r.forEach((e=>{const{subTree:t,suspense:o}=n,r=po(t);if(e.type!==r.type)d(e);else{// current instance will be unmounted as part of keep-alive's unmount
uo(r);// but invoke its deactivated hook here
const e=r.component.da;e&&_r(e,o)}}))})),()=>{if(v=null,!t.default)return null;const n=t.default(),o=n[0];if(n.length>1)return i=null,n;if(!Hr(o)||!(4/* ShapeFlags.STATEFUL_COMPONENT */&o.shapeFlag||128/* ShapeFlags.SUSPENSE */&o.shapeFlag))return i=null,o;let l=po(o);const c=l.type,a=Ss(to(l)?l.type.__asyncResolved||{}:c),{include:u,exclude:p,max:f}=e;// for async components, name check should be based in its loaded
// inner component if available
if(u&&(!a||!so(u,a))||p&&a&&so(p,a))return i=l,o;const d=null==l.key?c:l.key,h=r.get(d);// clone vnode if it's reused because we are going to mutate it
return l.el&&(l=Xr(l),128/* ShapeFlags.SUSPENSE */&o.shapeFlag&&(o.ssContent=l)),// #1513 it's possible for the returned vnode to be cloned due to attr
// fallthrough or scopeId, so the vnode here may not be the final vnode
// that is mounted. Instead of caching it directly, we store the pending
// key and cache `instance.subTree` (the normalized vnode) in
// beforeMount/beforeUpdate hooks.
v=d,h?(// copy over mounted state
l.el=h.el,l.component=h.component,l.transition&&// recursively update transition hooks on subTree
Zn(l,l.transition),// avoid vnode being mounted as fresh
l.shapeFlag|=512/* ShapeFlags.COMPONENT_KEPT_ALIVE */,// make this key the freshest
s.delete(d),s.add(d)):(s.add(d),// prune oldest entry
f&&s.size>parseInt(f,10)&&m(s.values().next().value)),// avoid vnode being unmounted
l.shapeFlag|=256/* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */,i=l,An(o.type)?o:l}}};function so(e,t){return E(e)?e.some((e=>so(e,t))):O(e)?e.split(",").includes(t):!!e.test&&e.test(t)/* istanbul ignore next */}function io(e,t){co(e,"a"/* LifecycleHooks.ACTIVATED */,t)}function lo(e,t){co(e,"da"/* LifecycleHooks.DEACTIVATED */,t)}function co(e,t,n=cs){// cache the deactivate branch check wrapper for injected hooks so the same
// hook can be properly deduped by the scheduler. "__wdc" stands for "with
// deactivation check".
const o=e.__wdc||(e.__wdc=()=>{// only fire the hook if the target instance is NOT in a deactivated branch.
let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()});// In addition to registering it on the target instance, we walk up the parent
// chain and register it on all ancestor instances that are keep-alive roots.
// This avoids the need to walk the entire component tree when invoking these
// hooks, and more importantly, avoids the need to track child components in
// arrays.
if(fo(t,o,n),n){let e=n.parent;for(;e&&e.parent;)oo(e.parent.vnode)&&ao(o,t,n,e),e=e.parent}}function ao(e,t,n,o){// injectHook wraps the original for error handling, so make sure to remove
// the wrapped version.
const r=fo(t,e,o,!0/* prepend */);bo((()=>{x(o[t],r)}),n)}function uo(e){let t=e.shapeFlag;256/* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */&t&&(t-=256/* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */),512/* ShapeFlags.COMPONENT_KEPT_ALIVE */&t&&(t-=512/* ShapeFlags.COMPONENT_KEPT_ALIVE */),e.shapeFlag=t}function po(e){return 128/* ShapeFlags.SUSPENSE */&e.shapeFlag?e.ssContent:e}function fo(e,t,n=cs,o=!1){if(n){const r=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;// disable tracking inside all lifecycle hooks
// since they can potentially be called inside effects.
ge(),// Set currentInstance during hook invocation.
// This assumes the hook does not synchronously trigger other hooks, which
// can only be false when the user does something really funky.
us(n);const r=Wt(t,n,e,o);return ps(),ye(),r});// cache the error handling wrapper for injected hooks so the same hook
// can be properly deduped by the scheduler. "__weh" stands for "with error
// handling".
return o?r.unshift(s):r.push(s),s}}const ho=e=>(t,n=cs)=>// post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
(!ms||"sp"/* LifecycleHooks.SERVER_PREFETCH */===e)&&fo(e,t,n),mo=e("L",ho("bm"/* LifecycleHooks.BEFORE_MOUNT */)),vo=e("b",ho("m"/* LifecycleHooks.MOUNTED */)),go=e("x",ho("bu"/* LifecycleHooks.BEFORE_UPDATE */)),yo=e("B",ho("u"/* LifecycleHooks.UPDATED */)),_o=e("l",ho("bum"/* LifecycleHooks.BEFORE_UNMOUNT */)),bo=e("o",ho("um"/* LifecycleHooks.UNMOUNTED */)),Co=ho("sp"/* LifecycleHooks.SERVER_PREFETCH */),So=ho("rtg"/* LifecycleHooks.RENDER_TRIGGERED */),xo=ho("rtc"/* LifecycleHooks.RENDER_TRACKED */);function wo(e,t=cs){fo("ec"/* LifecycleHooks.ERROR_CAPTURED */,e,t)}
/**
             * Adds directives to a VNode.
             */function ko(e,t){const n=gn;if(null===n)return e;const o=bs(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,n,i,l=m]=t[s];F(e)&&(e={mounted:e,updated:e}),e.deep&&zn(n),r.push({dir:e,instance:o,value:n,oldValue:void 0,arg:i,modifiers:l})}return e}function Eo(e,t,n,o){const r=e.dirs,s=t&&t.dirs;for(let i=0;i<r.length;i++){const l=r[i];s&&(l.oldValue=s[i].value);let c=l.dir[o];c&&(// disable tracking inside all lifecycle hooks
// since they can potentially be called inside effects.
ge(),Wt(c,n,8/* ErrorCodes.DIRECTIVE_HOOK */,[e.el,l,e,t]),ye())}}const To="components";
/**
             * @private
             */
function Ao(e,t){return Po(To,e,!0,t)||e}const Ro=Symbol();
/**
             * @private
             */function Fo(e){return O(e)?Po(To,e,!1)||e:e||Ro}
/**
             * @private
             */function Oo(e){return Po("directives",e)}// implementation
function Po(e,t,n=!0,o=!1){const r=gn||cs;if(r){const n=r.type;// explicit self name has highest priority
if(e===To){const e=Ss(n,!1/* do not include inferred name to avoid breaking existing code */);if(e&&(e===t||e===D(t)||e===W(D(t))))return n}const s=// local registration
// check instance[type] first which is resolved for options API
Mo(r[e]||n[e],t)||// global registration
Mo(r.appContext[e],t);return!s&&o?n:s}}function Mo(e,t){return e&&(e[t]||e[D(t)]||e[W(D(t))])}
/**
             * Actual implementation
             */function No(e,t,n,o){let r;const s=n&&n[o];if(E(e)||O(e)){r=new Array(e.length);for(let n=0,o=e.length;n<o;n++)r[n]=t(e[n],n,void 0,s&&s[n])}else if("number"==typeof e){r=new Array(e);for(let n=0;n<e;n++)r[n]=t(n+1,n,void 0,s&&s[n])}else if(M(e))if(e[Symbol.iterator])r=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else{const n=Object.keys(e);r=new Array(n.length);for(let o=0,i=n.length;o<i;o++){const i=n[o];r[o]=t(e[i],i,o,s&&s[o])}}else r=[];return n&&(n[o]=r),r}
/**
             * Compiler runtime helper for creating dynamic slots object
             * @private
             */function Vo(e,t){for(let n=0;n<t.length;n++){const o=t[n];// array of dynamic slot generated by <template v-for="..." #[...]>
if(E(o))for(let t=0;t<o.length;t++)e[o[t].name]=o[t].fn;else o&&(// conditional single slot generated by <template v-if="..." #foo>
e[o.name]=o.key?(...e)=>{const t=o.fn(...e);return t.key=o.key,t}:o.fn)}return e}
/**
             * Compiler runtime helper for rendering `<slot/>`
             * @private
             */function Bo(e,t,n={},// this is not a user-facing function, so the fallback is always generated by
// the compiler and guaranteed to be a function returning an array
o,r){if(gn.isCE||gn.parent&&to(gn.parent)&&gn.parent.isCE)return Jr("slot","default"===t?null:{name:t},o&&o());let s=e[t];// a compiled slot disables block tracking by default to avoid manual
// invocation interfering with template-based block tracking, but in
// `renderSlot` we can be sure that it's template-based so we can force
// enable it.
s&&s._c&&(s._d=!1),Br();const i=s&&Io(s(n)),l=Dr(Fr,{key:n.key||// slot content array of a dynamic conditional slot may have a branch
// key attached in the `createSlots` helper, respect that
i&&i.key||`_${t}`},i||(o?o():[]),i&&1/* SlotFlags.STABLE */===e._?64/* PatchFlags.STABLE_FRAGMENT */:-2/* PatchFlags.BAIL */);return!r&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function Io(e){return e.some((e=>!Hr(e)||e.type!==Pr&&!(e.type===Fr&&!Io(e.children))))?e:null}
/**
             * For prefixing keys in v-on="obj" with "on"
             * @private
             */
/**
             * #2437 In Vue 3, functional components do not have a public instance proxy but
             * they exist in the internal parent chain. For code that relies on traversing
             * public $parent chains, skip functional ones and go to the parent instead.
             */
const Lo=e=>e?fs(e)?bs(e)||e.proxy:Lo(e.parent):null,$o=// Move PURE marker to new line to workaround compiler discarding it
// due to type annotation
S(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Lo(e.parent),$root:e=>Lo(e.root),$emit:e=>e.emit,$options:e=>Ko(e),$forceUpdate:e=>e.f||(e.f=()=>on(e.update)),$nextTick:e=>e.n||(e.n=nn.bind(e.proxy)),$watch:e=>Dn.bind(e)}),jo={get({_:e},t){const{ctx:n,setupState:o,data:r,props:s,accessCache:i,type:l,appContext:c}=e;// data / props / ctx
// This getter gets called for every property access on the render context
// during render and is a major hotspot. The most expensive part of this
// is the multiple hasOwn() calls. It's much faster to do a simple property
// access on a plain object, so we use an accessCache object (with null
// prototype) to memoize what access type a key corresponds to.
let a;if("$"!==t[0]){const l=i[t];if(void 0!==l)switch(l){case 1/* AccessTypes.SETUP */:return o[t];case 2/* AccessTypes.DATA */:return r[t];case 4/* AccessTypes.CONTEXT */:return n[t];case 3/* AccessTypes.PROPS */:return s[t];// default: just fallthrough
}else{if(o!==m&&k(o,t))return i[t]=1/* AccessTypes.SETUP */,o[t];if(r!==m&&k(r,t))return i[t]=2/* AccessTypes.DATA */,r[t];if(// only cache other properties when instance has declared (thus stable)
// props
(a=e.propsOptions[0])&&k(a,t))return i[t]=3/* AccessTypes.PROPS */,s[t];if(n!==m&&k(n,t))return i[t]=4/* AccessTypes.CONTEXT */,n[t];Do&&(i[t]=0/* AccessTypes.OTHER */)}}const u=$o[t];let p,f;// public $xxx properties
return u?("$attrs"===t&&_e(e,0/* TrackOpTypes.GET */,t),u(e)):// css module (injected by vue-loader)
(p=l.__cssModules)&&(p=p[t])?p:n!==m&&k(n,t)?(// user may set custom properties to `this` that start with `$`
i[t]=4/* AccessTypes.CONTEXT */,n[t]):(// global properties
f=c.config.globalProperties,k(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:o,setupState:r,ctx:s}=e;return r!==m&&k(r,t)?(r[t]=n,!0):o!==m&&k(o,t)?(o[t]=n,!0):!(k(e.props,t)||"$"===t[0]&&t.slice(1)in e||(s[t]=n,0))},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:r,propsOptions:s}},i){let l;return!!n[i]||e!==m&&k(e,i)||t!==m&&k(t,i)||(l=s[0])&&k(l,i)||k(o,i)||k($o,i)||k(r.config.globalProperties,i)},defineProperty(e,t,n){return null!=n.get?// invalidate key cache of a getter based property #5417
e._.accessCache[t]=0:k(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},Uo=S({},jo,{get(e,t){// fast path for unscopables when using `with` block
if(t!==Symbol.unscopables)return jo.get(e,t,e)},has:(e,t)=>"_"!==t[0]&&!n(t)});let Do=!0;function Ho(e){const t=Ko(e),n=e.proxy,o=e.ctx;// do not cache property access on public proxy during state initialization
Do=!1,// call beforeCreate first before accessing other options since
// the hook may mutate resolved options (#2791)
t.beforeCreate&&zo(t.beforeCreate,e,"bc"/* LifecycleHooks.BEFORE_CREATE */);const{// state
data:r,computed:s,methods:i,watch:l,provide:c,inject:a,created:// lifecycle
u,beforeMount:p,mounted:f,beforeUpdate:d,updated:h,activated:m,deactivated:v,beforeDestroy:y,beforeUnmount:_,destroyed:b,unmounted:C,render:S,renderTracked:x,renderTriggered:w,errorCaptured:k,serverPrefetch:T,expose:// public API
A,inheritAttrs:R,components:// assets
O,directives:P,filters:N}=t;if(// options initialization order (to be consistent with Vue 2):
// - props (already done outside of this function)
// - inject
// - methods
// - data (deferred since it relies on `this` access)
// - computed
// - watch (deferred since it relies on `this` access)
a&&function(e,t,n=g,o=!1){E(e)&&(e=Yo(e));for(const r in e){const n=e[r];let s;s=M(n)?"default"in n?Bn(n.from||r,n.default,!0/* treat default function as factory */):Bn(n.from||r):Bn(n),kt(s)&&o?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[r]=s}}(a,o,null,e.appContext.config.unwrapInjectedRef),i)for(const g in i){const e=i[g];F(e)&&(o[g]=e.bind(n))}if(r){const t=r.call(n,n);M(t)&&(e.data=pt(t))}// state initialization complete at this point - start caching access
if(Do=!0,s)for(const E in s){const e=s[E],t=F(e)?e.bind(n,n):F(e.get)?e.get.bind(n,n):g,r=!F(e)&&F(e.set)?e.set.bind(n):g,i=ws({get:t,set:r});Object.defineProperty(o,E,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e})}if(l)for(const g in l)Wo(l[g],o,n,g);if(c){const e=F(c)?c.call(n):c;Reflect.ownKeys(e).forEach((t=>{Vn(t,e[t])}))}function V(e,t){E(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(u&&zo(u,e,"c"/* LifecycleHooks.CREATED */),V(mo,p),V(vo,f),V(go,d),V(yo,h),V(io,m),V(lo,v),V(wo,k),V(xo,x),V(So,w),V(_o,_),V(bo,C),V(Co,T),E(A))if(A.length){const t=e.exposed||(e.exposed={});A.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});// options that are handled when creating the instance but also need to be
// applied from mixins
S&&e.render===g&&(e.render=S),null!=R&&(e.inheritAttrs=R),// asset options.
O&&(e.components=O),P&&(e.directives=P)}function zo(e,t,n){Wt(E(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Wo(e,t,n,o){const r=o.includes(".")?Hn(n,o):()=>n[o];if(O(e)){const n=t[e];F(n)&&jn(r,n)}else if(F(e))jn(r,e.bind(n));else if(M(e))if(E(e))e.forEach((e=>Wo(e,t,n,o)));else{const o=F(e.handler)?e.handler.bind(n):t[e.handler];F(o)&&jn(r,o,e)}}
/**
             * Resolve merged options and cache it on the component.
             * This is done only once per-component since the merging does not involve
             * instances.
             */function Ko(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,l=s.get(t);let c;return l?c=l:r.length||n||o?(c={},r.length&&r.forEach((e=>qo(c,e,i,!0))),qo(c,t,i)):c=t,M(t)&&s.set(t,c),c}function qo(e,t,n,o=!1){const{mixins:r,extends:s}=t;s&&qo(e,s,n,!0),r&&r.forEach((t=>qo(e,t,n,!0)));for(const i in t)if(o&&"expose"===i);else{const o=Go[i]||n&&n[i];e[i]=o?o(e[i],t[i]):t[i]}return e}const Go={data:Jo,props:Zo,emits:Zo,// objects
methods:Zo,computed:Zo,// lifecycle
beforeCreate:Xo,created:Xo,beforeMount:Xo,mounted:Xo,beforeUpdate:Xo,updated:Xo,beforeDestroy:Xo,beforeUnmount:Xo,destroyed:Xo,unmounted:Xo,activated:Xo,deactivated:Xo,errorCaptured:Xo,serverPrefetch:Xo,// assets
components:Zo,directives:Zo,// watch
watch:function(e,t){if(!e)return t;if(!t)return e;const n=S(Object.create(null),e);for(const o in t)n[o]=Xo(e[o],t[o]);return n},// provide / inject
provide:Jo,inject:function(e,t){return Zo(Yo(e),Yo(t))}};function Jo(e,t){return t?e?function(){return S(F(e)?e.call(this,this):e,F(t)?t.call(this,this):t)}:t:e}function Yo(e){if(E(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Xo(e,t){return e?[...new Set([].concat(e,t))]:t}function Zo(e,t){return e?S(S(Object.create(null),e),t):t}function Qo(e,t,n,o){const[r,s]=e.propsOptions;let i,l=!1;if(t)for(let c in t){// key, ref are reserved and never passed down
if($(c))continue;const a=t[c];// prop option names are camelized during normalization, so to support
// kebab -> camel conversion here we need to camelize the key.
let u;r&&k(r,u=D(c))?s&&s.includes(u)?(i||(i={}))[u]=a:n[u]=a:vn(e.emitsOptions,c)||c in o&&a===o[c]||(o[c]=a,l=!0)}if(s){const t=_t(n),o=i||m;for(let i=0;i<s.length;i++){const l=s[i];n[l]=er(r,t,l,o[l],e,!k(o,l))}}return l}function er(e,t,n,o,r,s){const i=e[n];if(null!=i){const e=k(i,"default");// default values
if(e&&void 0===o){const e=i.default;if(i.type!==Function&&F(e)){const{propsDefaults:s}=r;n in s?o=s[n]:(us(r),o=s[n]=e.call(null,t),ps())}else o=e}// boolean casting
i[0/* BooleanFlags.shouldCast */]&&(s&&!e?o=!1:!i[1/* BooleanFlags.shouldCastTrue */]||""!==o&&o!==z(n)||(o=!0))}return o}function tr(e,t,n=!1){const o=t.propsCache,r=o.get(e);if(r)return r;const s=e.props,i={},l=[];// apply mixin/extends props
let c=!1;if(!F(e)){const o=e=>{c=!0;const[n,o]=tr(e,t,!0);S(i,n),o&&l.push(...o)};!n&&t.mixins.length&&t.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}if(!s&&!c)return M(e)&&o.set(e,v),v;if(E(s))for(let u=0;u<s.length;u++){const e=D(s[u]);nr(e)&&(i[e]=m)}else if(s)for(const u in s){const e=D(u);if(nr(e)){const t=s[u],n=i[e]=E(t)||F(t)?{type:t}:t;if(n){const t=sr(Boolean,n.type),o=sr(String,n.type);n[0/* BooleanFlags.shouldCast */]=t>-1,n[1/* BooleanFlags.shouldCastTrue */]=o<0||t<o,// if the prop needs boolean casting or default value
(t>-1||k(n,"default"))&&l.push(e)}}}const a=[i,l];return M(e)&&o.set(e,a),a}function nr(e){return"$"!==e[0]}// use function string name to check type constructors
// so that it works across vms / iframes.
function or(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function rr(e,t){return or(e)===or(t)}function sr(e,t){return E(t)?t.findIndex((t=>rr(t,e))):F(t)&&rr(t,e)?0:-1}const ir=e=>"_"===e[0]||"$stable"===e,lr=e=>E(e)?e.map(es):[es(e)],cr=(e,t,n)=>{if(t._n)// already normalized - #5353
return t;const o=Sn(((...e)=>lr(t(...e))),n);return o._c=!1,o},ar=(e,t,n)=>{const o=e._ctx;for(const r in e){if(ir(r))continue;const n=e[r];if(F(n))t[r]=cr(0,n,o);else if(null!=n){const e=lr(n);t[r]=()=>e}}},ur=(e,t)=>{const n=lr(t);e.slots.default=()=>n};function pr(){return{app:null,config:{isNativeTag:y,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fr=0;function dr(e,t){return function(n,o=null){F(n)||(n=Object.assign({},n)),null==o||M(o)||(o=null);const r=pr(),s=new Set;let i=!1;const l=r.app={_uid:fr++,_component:n,_props:o,_container:null,_context:r,_instance:null,version:Os,get config(){return r.config},set config(e){},use:(e,...t)=>(s.has(e)||(e&&F(e.install)?(s.add(e),e.install(l,...t)):F(e)&&(s.add(e),e(l,...t))),l),mixin:e=>(r.mixins.includes(e)||r.mixins.push(e),l),component:(e,t)=>t?(r.components[e]=t,l):r.components[e],directive:(e,t)=>t?(r.directives[e]=t,l):r.directives[e],mount(s,c,a){if(!i){const u=Jr(n,o);// store app context on the root VNode.
// this will be set on the root instance on initial mount.
return u.appContext=r,c&&t?t(u,s):e(u,s,a),i=!0,l._container=s,s.__vue_app__=l,bs(u.component)||u.component.proxy}},unmount(){i&&(e(null,l._container),delete l._container.__vue_app__)},provide:(e,t)=>(r.provides[e]=t,l)};return l}}
/**
             * Function for handling a template ref
             */function hr(e,t,n,o,r=!1){if(E(e))return void e.forEach(((e,s)=>hr(e,t&&(E(t)?t[s]:t),n,o,r)));if(to(o)&&!r)// when mounting async components, nothing needs to be done,
// because the template ref is forwarded to inner component
return;const s=4/* ShapeFlags.STATEFUL_COMPONENT */&o.shapeFlag?bs(o.component)||o.component.proxy:o.el,i=r?null:s,{i:l,r:c}=e,a=t&&t.r,u=l.refs===m?l.refs={}:l.refs,p=l.setupState;if(// dynamic ref changed. unset old ref
null!=a&&a!==c&&(O(a)?(u[a]=null,k(p,a)&&(p[a]=null)):kt(a)&&(a.value=null)),F(c))zt(c,l,12/* ErrorCodes.FUNCTION_REF */,[i,u]);else{const t=O(c),o=kt(c);if(t||o){const l=()=>{if(e.f){const n=t?u[c]:c.value;r?E(n)&&x(n,s):E(n)?n.includes(s)||n.push(s):t?(u[c]=[s],k(p,c)&&(p[c]=u[c])):(c.value=[s],e.k&&(u[e.k]=c.value))}else t?(u[c]=i,k(p,c)&&(p[c]=i)):o&&(c.value=i,e.k&&(u[e.k]=i))};i?(l.id=-1,_r(l,n)):l()}}}let mr=!1;const vr=e=>/svg/.test(e.namespaceURI)&&"foreignObject"!==e.tagName,gr=e=>8/* DOMNodeTypes.COMMENT */===e.nodeType// Note: hydration is DOM-specific
// But we have to place it in core due to tight coupling with core - splitting
// it out creates a ton of unnecessary complexity.
// Hydration also depends on some renderer internal logic which needs to be
// passed in via arguments.;
function yr(e){const{mt:t,p:n,o:{patchProp:o,createText:r,nextSibling:s,parentNode:i,remove:l,insert:c,createComment:a}}=e,u=(n,o,l,a,v,g=!1)=>{const y=gr(n)&&"["===n.data,_=()=>h(n,o,l,a,v,y),{type:b,ref:C,shapeFlag:S,patchFlag:x}=o,w=n.nodeType;o.el=n,-2/* PatchFlags.BAIL */===x&&(g=!1,o.dynamicChildren=null);let k=null;switch(b){case Or:3/* DOMNodeTypes.TEXT */!==w?// #5728 empty text node inside a slot can cause hydration failure
// because the server rendered HTML won't contain a text node
""===o.children?(c(o.el=r(""),i(n),n),k=n):k=_():(n.data!==o.children&&(mr=!0,n.data=o.children),k=s(n));break;case Pr:k=8/* DOMNodeTypes.COMMENT */!==w||y?_():s(n);break;case Mr:if(1/* DOMNodeTypes.ELEMENT */===w||3/* DOMNodeTypes.TEXT */===w){// determine anchor, adopt content
k=n;// if the static vnode has its content stripped during build,
// adopt it from the server-rendered HTML.
const e=!o.children.length;for(let t=0;t<o.staticCount;t++)e&&(o.children+=1/* DOMNodeTypes.ELEMENT */===k.nodeType?k.outerHTML:k.data),t===o.staticCount-1&&(o.anchor=k),k=s(k);return k}k=_();break;case Fr:k=y?d(n,o,l,a,v,g):_();break;default:if(1/* ShapeFlags.ELEMENT */&S)k=1/* DOMNodeTypes.ELEMENT */!==w||o.type.toLowerCase()!==n.tagName.toLowerCase()?_():p(n,o,l,a,v,g);else if(6/* ShapeFlags.COMPONENT */&S){// when setting up the render effect, if the initial vnode already
// has .el set, the component will perform hydration instead of mount
// on its sub-tree.
o.slotScopeIds=v;const e=i(n);// #3787
// if component is async, it may get moved / unmounted before its
// inner component is loaded, so we need to give it a placeholder
// vnode that matches its adopted DOM.
if(t(o,e,null,l,a,vr(e),g),// component may be async, so in the case of fragments we cannot rely
// on component's rendered output to determine the end of the fragment
// instead, we do a lookahead to find the end anchor node.
k=y?m(n):s(n),// #4293 teleport as component root
k&&gr(k)&&"teleport end"===k.data&&(k=s(k)),to(o)){let t;y?(t=Jr(Fr),t.anchor=k?k.previousSibling:e.lastChild):t=3===n.nodeType?Zr(""):Jr("div"),t.el=n,o.component.subTree=t}}else 64/* ShapeFlags.TELEPORT */&S?k=8/* DOMNodeTypes.COMMENT */!==w?_():o.type.hydrate(n,o,l,a,v,g,e,f):128/* ShapeFlags.SUSPENSE */&S&&(k=o.type.hydrate(n,o,l,a,vr(i(n)),v,g,e,u))}return null!=C&&hr(C,null,a,o),k},p=(e,t,n,r,s,i)=>{i=i||!!t.dynamicChildren;const{type:c,props:a,patchFlag:u,shapeFlag:p,dirs:d}=t,h="input"===c&&d||"option"===c;// #4006 for form elements with non-string v-model value bindings
// e.g. <option :value="obj">, <input type="checkbox" :true-value="1">
// skip props & children if this is hoisted static nodes
// #5405 in dev, always hydrate children for HMR
if(h||-1/* PatchFlags.HOISTED */!==u){// props
if(d&&Eo(t,null,n,"created"),a)if(h||!i||48/* PatchFlags.HYDRATE_EVENTS */&u)for(const t in a)(h&&t.endsWith("value")||b(t)&&!$(t))&&o(e,t,null,a[t],!1,void 0,n);else a.onClick&&// Fast path for click listeners (which is most often) to avoid
// iterating through props.
o(e,"onClick",null,a.onClick,!1,void 0,n);// vnode / directive hooks
let c;// children
if((c=a&&a.onVnodeBeforeMount)&&rs(c,n,t),d&&Eo(t,null,n,"beforeMount"),((c=a&&a.onVnodeMounted)||d)&&Mn((()=>{c&&rs(c,n,t),d&&Eo(t,null,n,"mounted")}),r),16/* ShapeFlags.ARRAY_CHILDREN */&p&&(!a||!a.innerHTML&&!a.textContent)){let o=f(e.firstChild,t,e,n,r,s,i);for(;o;){mr=!0;// The SSRed DOM contains more nodes than it should. Remove them.
const e=o;o=o.nextSibling,l(e)}}else 8/* ShapeFlags.TEXT_CHILDREN */&p&&e.textContent!==t.children&&(mr=!0,e.textContent=t.children)}return e.nextSibling},f=(e,t,o,r,s,i,l)=>{l=l||!!t.dynamicChildren;const c=t.children,a=c.length;for(let p=0;p<a;p++){const t=l?c[p]:c[p]=es(c[p]);if(e)e=u(e,t,r,s,i,l);else{if(t.type===Or&&!t.children)continue;mr=!0,// the SSRed DOM didn't contain enough nodes. Mount the missing ones.
n(null,t,o,null,r,s,vr(o),i)}}return e},d=(e,t,n,o,r,l)=>{const{slotScopeIds:u}=t;u&&(r=r?r.concat(u):u);const p=i(e),d=f(s(e),t,p,n,o,r,l);return d&&gr(d)&&"]"===d.data?s(t.anchor=d):(// fragment didn't hydrate successfully, since we didn't get a end anchor
// back. This should have led to node/children mismatch warnings.
mr=!0,// since the anchor is missing, we need to create one and insert it
c(t.anchor=a("]"),p,d),d)},h=(e,t,o,r,c,a)=>{if(mr=!0,t.el=null,a){// remove excessive fragment nodes
const t=m(e);for(;;){const n=s(e);if(!n||n===t)break;l(n)}}const u=s(e),p=i(e);return l(e),n(null,t,p,u,o,r,vr(p),c),u},m=e=>{let t=0;for(;e;)if((e=s(e))&&gr(e)&&("["===e.data&&t++,"]"===e.data)){if(0===t)return s(e);t--}return e};return[(e,t)=>{if(!t.hasChildNodes())return n(null,e,t),cn(),void(t._vnode=e);mr=!1,u(t.firstChild,e,null,null,null),cn(),t._vnode=e,mr&&// this error should show up in production
console.error("Hydration completed but contains mismatches.")},u]}const _r=Mn;
/**
             * The createRenderer function accepts two generic arguments:
             * HostNode and HostElement, corresponding to Node and Element types in the
             * host environment. For example, for runtime-dom, HostNode would be the DOM
             * `Node` interface and HostElement would be the DOM `Element` interface.
             *
             * Custom renderers can pass in the platform specific types like this:
             *
             * ``` js
             * const { render, createApp } = createRenderer<Node, Element>({
             *   patchProp,
             *   ...nodeOps
             * })
             * ```
             */function br(e){return Sr(e)}// Separate API for creating hydration-enabled renderer.
// Hydration logic is only used when calling this function, making it
// tree-shakable.
function Cr(e){return Sr(e,yr)}// implementation
function Sr(e,t){(X||(X="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})).__VUE__=!0;const{insert:n,remove:o,patchProp:r,createElement:s,createText:i,createComment:l,setText:c,setElementText:a,parentNode:u,nextSibling:p,setScopeId:f=g,cloneNode:d,insertStaticContent:h}=e,y=(e,t,n,o=null,r=null,s=null,i=!1,l=null,c=!!t.dynamicChildren)=>{if(e===t)return;// patching & not same type, unmount old tree
e&&!zr(e,t)&&(o=Y(e),H(e,r,s,!0),e=null),-2/* PatchFlags.BAIL */===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:a,ref:u,shapeFlag:p}=t;switch(a){case Or:_(e,t,n,o);break;case Pr:b(e,t,n,o);break;case Mr:null==e&&C(t,n,o,i);break;case Fr:O(e,t,n,o,r,s,i,l,c);break;default:1/* ShapeFlags.ELEMENT */&p?x(e,t,n,o,r,s,i,l,c):6/* ShapeFlags.COMPONENT */&p?P(e,t,n,o,r,s,i,l,c):(64/* ShapeFlags.TELEPORT */&p||128/* ShapeFlags.SUSPENSE */&p)&&a.process(e,t,n,o,r,s,i,l,c,Q)}// set ref
null!=u&&r&&hr(u,e&&e.ref,s,t||e,!t)},_=(e,t,o,r)=>{if(null==e)n(t.el=i(t.children),o,r);else{const n=t.el=e.el;t.children!==e.children&&c(n,t.children)}},b=(e,t,o,r)=>{null==e?n(t.el=l(t.children||""),o,r):// there's no support for dynamic comments
t.el=e.el},C=(e,t,n,o)=>{[e.el,e.anchor]=h(e.children,t,n,o,e.el,e.anchor)},x=(e,t,n,o,r,s,i,l,c)=>{i=i||"svg"===t.type,null==e?w(t,n,o,r,s,i,l,c):A(e,t,r,s,i,l,c)},w=(e,t,o,i,l,c,u,p)=>{let f,h;const{type:m,props:v,shapeFlag:g,transition:y,patchFlag:_,dirs:b}=e;if(e.el&&void 0!==d&&-1/* PatchFlags.HOISTED */===_)// If a vnode has non-null el, it means it's being reused.
// Only static vnodes can be reused, so its mounted DOM nodes should be
// exactly the same, and we can simply do a clone here.
// only do this in production since cloned trees cannot be HMR updated.
f=e.el=d(e.el);else{// props
if(f=e.el=s(e.type,c,v&&v.is,v),// mount children first, since some props may rely on child content
// being already rendered, e.g. `<select value>`
8/* ShapeFlags.TEXT_CHILDREN */&g?a(f,e.children):16/* ShapeFlags.ARRAY_CHILDREN */&g&&T(e.children,f,null,i,l,c&&"foreignObject"!==m,u,p),b&&Eo(e,null,i,"created"),v){for(const t in v)"value"===t||$(t)||r(f,t,null,v[t],c,e.children,i,l,J);
/**
                             * Special case for setting value on DOM elements:
                             * - it can be order-sensitive (e.g. should be set *after* min/max, #2325, #4024)
                             * - it needs to be forced (#1471)
                             * #2353 proposes adding another renderer option to configure this, but
                             * the properties affects are so finite it is worth special casing it
                             * here to reduce the complexity. (Special casing it also should not
                             * affect non-DOM renderers)
                             */"value"in v&&r(f,"value",null,v.value),(h=v.onVnodeBeforeMount)&&rs(h,i,e)}// scopeId
E(f,e,e.scopeId,u,i)}b&&Eo(e,null,i,"beforeMount");// #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
// #1689 For inside suspense + suspense resolved case, just call it
const C=(!l||l&&!l.pendingBranch)&&y&&!y.persisted;C&&y.beforeEnter(f),n(f,t,o),((h=v&&v.onVnodeMounted)||C||b)&&_r((()=>{h&&rs(h,i,e),C&&y.enter(f),b&&Eo(e,null,i,"mounted")}),l)},E=(e,t,n,o,r)=>{if(n&&f(e,n),o)for(let s=0;s<o.length;s++)f(e,o[s]);if(r&&t===r.subTree){const t=r.vnode;E(e,t,t.scopeId,t.slotScopeIds,r.parent)}},T=(e,t,n,o,r,s,i,l,c=0)=>{for(let a=c;a<e.length;a++){const c=e[a]=l?ts(e[a]):es(e[a]);y(null,c,t,n,o,r,s,i,l)}},A=(e,t,n,o,s,i,l)=>{const c=t.el=e.el;let{patchFlag:u,dynamicChildren:p,dirs:f}=t;// #1426 take the old vnode's patch flag into account since user may clone a
// compiler-generated vnode, which de-opts to FULL_PROPS
u|=16/* PatchFlags.FULL_PROPS */&e.patchFlag;const d=e.props||m,h=t.props||m;let v;// disable recurse in beforeUpdate hooks
n&&xr(n,!1),(v=h.onVnodeBeforeUpdate)&&rs(v,n,t,e),f&&Eo(t,e,n,"beforeUpdate"),n&&xr(n,!0);const g=s&&"foreignObject"!==t.type;if(p?R(e.dynamicChildren,p,c,n,o,g,i):l||// full diff
I(e,t,c,null,n,o,g,i,!1),u>0){// the presence of a patchFlag means this element's render code was
// generated by the compiler and can take the fast path.
// in this path old node and new node are guaranteed to have the same shape
// (i.e. at the exact same position in the source template)
if(16/* PatchFlags.FULL_PROPS */&u)// element props contain dynamic keys, full diff needed
F(c,t,d,h,n,o,s);else// props
// This flag is matched when the element has dynamic prop/attr bindings
// other than class and style. The keys of dynamic prop/attrs are saved for
// faster iteration.
// Note dynamic keys like :[foo]="bar" will cause this optimization to
// bail out and go through a full diff because we need to unset the old key
if(// class
// this flag is matched when the element has dynamic class bindings.
2/* PatchFlags.CLASS */&u&&d.class!==h.class&&r(c,"class",null,h.class,s),// style
// this flag is matched when the element has dynamic style bindings
4/* PatchFlags.STYLE */&u&&r(c,"style",d.style,h.style,s),8/* PatchFlags.PROPS */&u){// if the flag is present then dynamicProps must be non-null
const i=t.dynamicProps;for(let t=0;t<i.length;t++){const l=i[t],a=d[l],u=h[l];// #1471 force patch value
u===a&&"value"!==l||r(c,l,a,u,s,e.children,n,o,J)}}// text
// This flag is matched when the element has only dynamic text children.
1/* PatchFlags.TEXT */&u&&e.children!==t.children&&a(c,t.children)}else l||null!=p||// unoptimized, full diff
F(c,t,d,h,n,o,s);((v=h.onVnodeUpdated)||f)&&_r((()=>{v&&rs(v,n,t,e),f&&Eo(t,e,n,"updated")}),o)},R=(e,t,n,o,r,s,i)=>{for(let l=0;l<t.length;l++){const c=e[l],a=t[l],p=// oldVNode may be an errored async setup() component inside Suspense
// which will not have a mounted element
c.el&&(// - In the case of a Fragment, we need to provide the actual parent
// of the Fragment itself so it can move its children.
c.type===Fr||// - In the case of different nodes, there is going to be a replacement
// which also requires the correct parent container
!zr(c,a)||// - In the case of a component, it could contain anything.
70/* ShapeFlags.TELEPORT */&c.shapeFlag)?u(c.el):// In other cases, the parent container is not actually used so we
// just pass the block element here to avoid a DOM parentNode call.
n;y(c,a,p,null,o,r,s,i,!0)}},F=(e,t,n,o,s,i,l)=>{if(n!==o){for(const c in o){// empty string is not valid prop
if($(c))continue;const a=o[c],u=n[c];// defer patching value
a!==u&&"value"!==c&&r(e,c,u,a,l,t.children,s,i,J)}if(n!==m)for(const c in n)$(c)||c in o||r(e,c,n[c],null,l,t.children,s,i,J);"value"in o&&r(e,"value",n.value,o.value)}},O=(e,t,o,r,s,l,c,a,u)=>{const p=t.el=e?e.el:i(""),f=t.anchor=e?e.anchor:i("");let{patchFlag:d,dynamicChildren:h,slotScopeIds:m}=t;// check if this is a slot fragment with :slotted scope ids
m&&(a=a?a.concat(m):m),null==e?(n(p,o,r),n(f,o,r),// a fragment can only have array children
// since they are either generated by the compiler, or implicitly created
// from arrays.
T(t.children,o,f,s,l,c,a,u)):d>0&&64/* PatchFlags.STABLE_FRAGMENT */&d&&h&&// #2715 the previous fragment could've been a BAILed one as a result
// of renderSlot() with no valid children
e.dynamicChildren?(// a stable fragment (template root or <template v-for>) doesn't need to
// patch children order, but it may contain dynamicChildren.
R(e.dynamicChildren,h,o,s,l,c,a),(// #2080 if the stable fragment has a key, it's a <template v-for> that may
//  get moved around. Make sure all root level vnodes inherit el.
// #2134 or if it's a component root, it may also get moved around
// as the component is being moved.
null!=t.key||s&&t===s.subTree)&&wr(e,t,!0/* shallow */)):// keyed / unkeyed, or manual fragments.
// for keyed & unkeyed, since they are compiler generated from v-for,
// each child is guaranteed to be a block so the fragment will never
// have dynamicChildren.
I(e,t,o,f,s,l,c,a,u)},P=(e,t,n,o,r,s,i,l,c)=>{t.slotScopeIds=l,null==e?512/* ShapeFlags.COMPONENT_KEPT_ALIVE */&t.shapeFlag?r.ctx.activate(t,n,o,i,c):M(t,n,o,r,s,i,c):N(e,t,c)},M=(e,t,n,o,r,s,i)=>{const l=e.component=ls(e,o,r);// inject renderer internals for keepAlive
// setup() is async. This component relies on async logic to be resolved
// before proceeding
if(oo(e)&&(l.ctx.renderer=Q),vs(l),l.asyncDep){// Give it a placeholder if this is not hydration
// TODO handle self-defined fallback
if(r&&r.registerDep(l,V),!e.el){const e=l.subTree=Jr(Pr);b(null,e,t,n)}}else V(l,e,t,n,r,s,i)},N=(e,t,n)=>{const o=t.component=e.component;if(function(e,t,n){const{props:o,children:r,component:s}=e,{props:i,children:l,patchFlag:c}=t,a=s.emitsOptions;// force child update for runtime directive or transition on component vnode.
if(t.dirs||t.transition)return!0;if(!(n&&c>=0))// this path is only taken by manually written render functions
// so presence of any children leads to a forced update
return!(!r&&!l||l&&l.$stable)||o!==i&&(o?!i||En(o,i,a):!!i);if(1024/* PatchFlags.DYNAMIC_SLOTS */&c)// slot content that references values that might have changed,
// e.g. in a v-for
return!0;if(16/* PatchFlags.FULL_PROPS */&c)return o?En(o,i,a):!!i;// presence of this flag indicates props are always non-null
if(8/* PatchFlags.PROPS */&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(i[n]!==o[n]&&!vn(a,n))return!0}}return!1}(e,t,n)){if(o.asyncDep&&!o.asyncResolved)return void B(o,t,n);// normal update
o.next=t,// in case the child component is also queued, remove it to avoid
// double updating the same child component in the same flush.
function(e){const t=Jt.indexOf(e);t>Yt&&Jt.splice(t,1)}(o.update),// instance.update is the reactive effect.
o.update()}else// no update needed. just copy over properties
t.el=e.el,o.vnode=t},V=(e,t,n,o,r,s,i)=>{const l=e.effect=new de((()=>{if(e.isMounted){// updateComponent
// This is triggered by mutation of component's own state (next: null)
// OR parent calling processComponent (next: VNode)
let t,{next:n,bu:o,u:l,parent:c,vnode:a}=e,p=n;// Disallow component effect recursion during pre-lifecycle hooks.
xr(e,!1),n?(n.el=a.el,B(e,n,i)):n=a,// beforeUpdate hook
o&&G(o),// onVnodeBeforeUpdate
(t=n.props&&n.props.onVnodeBeforeUpdate)&&rs(t,c,n,a),xr(e,!0);const f=xn(e),d=e.subTree;e.subTree=f,y(d,f,// parent may have changed if it's in a teleport
u(d.el),// anchor may have changed if it's in a fragment
Y(d),e,r,s),n.el=f.el,null===p&&// self-triggered update. In case of HOC, update parent component
// vnode el. HOC is indicated by parent instance's subTree pointing
// to child component's vnode
Tn(e,f.el),// updated hook
l&&_r(l,r),// onVnodeUpdated
(t=n.props&&n.props.onVnodeUpdated)&&_r((()=>rs(t,c,n,a)),r)}else{let i;const{el:l,props:c}=t,{bm:a,m:u,parent:p}=e,f=to(t);if(xr(e,!1),// beforeMount hook
a&&G(a),// onVnodeBeforeMount
!f&&(i=c&&c.onVnodeBeforeMount)&&rs(i,p,t),xr(e,!0),l&&te){// vnode has adopted host node - perform hydration instead of mount.
const n=()=>{e.subTree=xn(e),te(l,e.subTree,e,r,null)};f?t.type.__asyncLoader().then((// note: we are moving the render call into an async callback,
// which means it won't track dependencies - but it's ok because
// a server-rendered async wrapper is already in resolved state
// and it will never need to change.
()=>!e.isUnmounted&&n())):n()}else{const i=e.subTree=xn(e);y(null,i,n,o,e,r,s),t.el=i.el}// mounted hook
// onVnodeMounted
if(u&&_r(u,r),!f&&(i=c&&c.onVnodeMounted)){const e=t;_r((()=>rs(i,p,e)),r)}// activated hook for keep-alive roots.
// #1742 activated hook must be accessed after first render
// since the hook may be injected by a child keep-alive
(256/* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */&t.shapeFlag||p&&to(p.vnode)&&256/* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */&p.vnode.shapeFlag)&&e.a&&_r(e.a,r),e.isMounted=!0,// #2458: deference mount-only object parameters to prevent memleaks
t=n=o=null}}),(()=>on(c)),e.scope),c=e.update=()=>l.run();// create reactive effect for rendering
c.id=e.uid,// allowRecurse
// #1801, #2043 component render effects should allow recursive updates
xr(e,!0),c()},B=(e,t,n)=>{t.component=e;const o=e.vnode.props;e.vnode=t,e.next=null,function(e,t,n,o){const{props:r,attrs:s,vnode:{patchFlag:i}}=e,l=_t(r),[c]=e.propsOptions;let a=!1;if(// always force full diff in dev
// - #1942 if hmr is enabled with sfc component
// - vite#872 non-sfc component used by sfc component
!(o||i>0)||16/* PatchFlags.FULL_PROPS */&i){// in case of dynamic props, check if we need to delete keys from
// the props object
let o;// full props update.
Qo(e,t,r,s)&&(a=!0);for(const s in l)t&&(// for camelCase
k(t,s)||// it's possible the original props was passed in as kebab-case
// and converted to camelCase (#955)
(o=z(s))!==s&&k(t,o))||(c?!n||// for camelCase
void 0===n[s]&&// for kebab-case
void 0===n[o]||(r[s]=er(c,l,s,void 0,e,!0/* isAbsent */)):delete r[s]);// in the case of functional component w/o props declaration, props and
// attrs point to the same object so it should already have been updated.
if(s!==l)for(const e in s)t&&k(t,e)||(delete s[e],a=!0)}// trigger updates for $attrs in case it's used in component slots
else if(8/* PatchFlags.PROPS */&i){// Compiler-generated props & no keys change, just set the updated
// the props.
const n=e.vnode.dynamicProps;for(let o=0;o<n.length;o++){let i=n[o];// skip if the prop key is a declared emit event listener
if(vn(e.emitsOptions,i))continue;// PROPS flag guarantees rawProps to be non-null
const u=t[i];if(c)// attr / props separation was done on init and will be consistent
// in this code path, so just check if attrs have it.
if(k(s,i))u!==s[i]&&(s[i]=u,a=!0);else{const t=D(i);r[t]=er(c,l,t,u,e,!1/* isAbsent */)}else u!==s[i]&&(s[i]=u,a=!0)}}a&&Ce(e,"set"/* TriggerOpTypes.SET */,"$attrs")}(e,t.props,o,n),((e,t,n)=>{const{vnode:o,slots:r}=e;let s=!0,i=m;if(32/* ShapeFlags.SLOTS_CHILDREN */&o.shapeFlag){const e=t._;e?// compiled slots.
n&&1/* SlotFlags.STABLE */===e?// compiled AND stable.
// no need to update, and skip stale slots removal.
s=!1:(// compiled but dynamic (v-if/v-for on slots) - update slots, but skip
// normalization.
S(r,t),// #2893
// when rendering the optimized slots by manually written render function,
// we need to delete the `slots._` flag if necessary to make subsequent updates reliable,
// i.e. let the `renderSlot` create the bailed Fragment
n||1/* SlotFlags.STABLE */!==e||delete r._):(s=!t.$stable,ar(t,r)),i=t}else t&&(// non slot object children (direct value) passed to a component
ur(e,t),i={default:1});// delete stale slots
if(s)for(const l in r)ir(l)||l in i||delete r[l]})(e,t.children,n),ge(),// props update may have triggered pre-flush watchers.
// flush them before the render update.
ln(),ye()},I=(e,t,n,o,r,s,i,l,c=!1)=>{const u=e&&e.children,p=e?e.shapeFlag:0,f=t.children,{patchFlag:d,shapeFlag:h}=t;// fast path
if(d>0){if(128/* PatchFlags.KEYED_FRAGMENT */&d)// this could be either fully-keyed or mixed (some keyed some not)
// presence of patchFlag means children are guaranteed to be arrays
return void j(u,f,n,o,r,s,i,l,c);if(256/* PatchFlags.UNKEYED_FRAGMENT */&d)// unkeyed
return void L(u,f,n,o,r,s,i,l,c)}// children has 3 possibilities: text, array or no children.
8/* ShapeFlags.TEXT_CHILDREN */&h?(// text children fast path
16/* ShapeFlags.ARRAY_CHILDREN */&p&&J(u,r,s),f!==u&&a(n,f)):16/* ShapeFlags.ARRAY_CHILDREN */&p?// prev children was array
16/* ShapeFlags.ARRAY_CHILDREN */&h?// two arrays, cannot assume anything, do full diff
j(u,f,n,o,r,s,i,l,c):// no new children, just unmount old
J(u,r,s,!0):(// prev children was text OR null
// new children is array OR null
8/* ShapeFlags.TEXT_CHILDREN */&p&&a(n,""),// mount new if array
16/* ShapeFlags.ARRAY_CHILDREN */&h&&T(f,n,o,r,s,i,l,c))},L=(e,t,n,o,r,s,i,l,c)=>{t=t||v;const a=(e=e||v).length,u=t.length,p=Math.min(a,u);let f;for(f=0;f<p;f++){const o=t[f]=c?ts(t[f]):es(t[f]);y(e[f],o,n,null,r,s,i,l,c)}a>u?// remove old
J(e,r,s,!0,!1,p):// mount new
T(t,n,o,r,s,i,l,c,p)},j=(e,t,n,o,r,s,i,l,c)=>{let a=0;const u=t.length;let p=e.length-1,f=u-1;// prev ending index
// next ending index
// 1. sync from start
// (a b) c
// (a b) d e
for(;a<=p&&a<=f;){const o=e[a],u=t[a]=c?ts(t[a]):es(t[a]);if(!zr(o,u))break;y(o,u,n,null,r,s,i,l,c),a++}// 2. sync from end
// a (b c)
// d e (b c)
for(;a<=p&&a<=f;){const o=e[p],a=t[f]=c?ts(t[f]):es(t[f]);if(!zr(o,a))break;y(o,a,n,null,r,s,i,l,c),p--,f--}// 3. common sequence + mount
// (a b)
// (a b) c
// i = 2, e1 = 1, e2 = 2
// (a b)
// c (a b)
// i = 0, e1 = -1, e2 = 0
if(a>p){if(a<=f){const e=f+1,p=e<u?t[e].el:o;for(;a<=f;)y(null,t[a]=c?ts(t[a]):es(t[a]),n,p,r,s,i,l,c),a++}}else if(a>f)for(;a<=p;)H(e[a],r,s,!0),a++;else{const d=a,h=a,m=new Map;// prev starting index
for(a=h;a<=f;a++){const e=t[a]=c?ts(t[a]):es(t[a]);null!=e.key&&m.set(e.key,a)}// 5.2 loop through old children left to be patched and try to patch
// matching nodes & remove nodes that are no longer present
let g,_=0;const b=f-h+1;let C=!1,S=0;// used to track whether any node has moved
// works as Map<newIndex, oldIndex>
// Note that oldIndex is offset by +1
// and oldIndex = 0 is a special value indicating the new node has
// no corresponding old node.
// used for determining longest stable subsequence
const x=new Array(b);for(a=0;a<b;a++)x[a]=0;for(a=d;a<=p;a++){const o=e[a];if(_>=b){// all new children have been patched so this can only be a removal
H(o,r,s,!0);continue}let u;if(null!=o.key)u=m.get(o.key);else// key-less node, try to locate a key-less node of the same type
for(g=h;g<=f;g++)if(0===x[g-h]&&zr(o,t[g])){u=g;break}void 0===u?H(o,r,s,!0):(x[u-h]=a+1,u>=S?S=u:C=!0,y(o,t[u],n,null,r,s,i,l,c),_++)}// 5.3 move and mount
// generate longest stable subsequence only when nodes have moved
const w=C?// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function(e){const t=e.slice(),n=[0];let o,r,s,i,l;const c=e.length;for(o=0;o<c;o++){const c=e[o];if(0!==c){if(r=n[n.length-1],e[r]<c){t[o]=r,n.push(o);continue}for(s=0,i=n.length-1;s<i;)l=s+i>>1,e[n[l]]<c?s=l+1:i=l;c<e[n[s]]&&(s>0&&(t[o]=n[s-1]),n[s]=o)}}for(s=n.length,i=n[s-1];s-- >0;)n[s]=i,i=t[i];return n}(x):v;// looping backwards so that we can use last patched node as anchor
for(g=w.length-1,a=b-1;a>=0;a--){const e=h+a,p=t[e],f=e+1<u?t[e+1].el:o;0===x[a]?// mount new
y(null,p,n,f,r,s,i,l,c):C&&(// move if:
// There is no stable subsequence (e.g. a reverse)
// OR current node is not among the stable sequence
g<0||a!==w[g]?U(p,n,f,2/* MoveType.REORDER */):g--)}}},U=(e,t,o,r,s=null)=>{const{el:i,type:l,transition:c,children:a,shapeFlag:u}=e;if(6/* ShapeFlags.COMPONENT */&u)U(e.component.subTree,t,o,r);else if(128/* ShapeFlags.SUSPENSE */&u)e.suspense.move(t,o,r);else if(64/* ShapeFlags.TELEPORT */&u)l.move(e,t,o,Q);else if(l!==Fr)if(l!==Mr)if(2/* MoveType.REORDER */!==r&&1/* ShapeFlags.ELEMENT */&u&&c)if(0/* MoveType.ENTER */===r)c.beforeEnter(i),n(i,t,o),_r((()=>c.enter(i)),s);else{const{leave:e,delayLeave:r,afterLeave:s}=c,l=()=>n(i,t,o),a=()=>{e(i,(()=>{l(),s&&s()}))};r?r(i,l,a):a()}else n(i,t,o);else(({el:e,anchor:t},o,r)=>{let s;for(;e&&e!==t;)s=p(e),n(e,o,r),e=s;n(t,o,r)})(e,t,o);// single nodes
else{n(i,t,o);for(let e=0;e<a.length;e++)U(a[e],t,o,r);n(e.anchor,t,o)}},H=(e,t,n,o=!1,r=!1)=>{const{type:s,props:i,ref:l,children:c,dynamicChildren:a,shapeFlag:u,patchFlag:p,dirs:f}=e;// unset ref
if(null!=l&&hr(l,null,n,e,!0),256/* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */&u)return void t.ctx.deactivate(e);const d=1/* ShapeFlags.ELEMENT */&u&&f,h=!to(e);let m;if(h&&(m=i&&i.onVnodeBeforeUnmount)&&rs(m,t,e),6/* ShapeFlags.COMPONENT */&u)q(e.component,n,o);else{if(128/* ShapeFlags.SUSPENSE */&u)return void e.suspense.unmount(n,o);d&&Eo(e,null,t,"beforeUnmount"),64/* ShapeFlags.TELEPORT */&u?e.type.remove(e,t,n,r,Q,o):a&&(// #1153: fast path should not be taken for non-stable (v-for) fragments
s!==Fr||p>0&&64/* PatchFlags.STABLE_FRAGMENT */&p)?// fast path for block nodes: only need to unmount dynamic children.
J(a,t,n,!1,!0):(s===Fr&&384/* PatchFlags.UNKEYED_FRAGMENT */&p||!r&&16/* ShapeFlags.ARRAY_CHILDREN */&u)&&J(c,t,n),o&&W(e)}(h&&(m=i&&i.onVnodeUnmounted)||d)&&_r((()=>{m&&rs(m,t,e),d&&Eo(e,null,t,"unmounted")}),n)},W=e=>{const{type:t,el:n,anchor:r,transition:s}=e;if(t===Fr)return void K(n,r);if(t===Mr)return void(({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=p(e),o(e),e=n;o(t)})(e);const i=()=>{o(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1/* ShapeFlags.ELEMENT */&e.shapeFlag&&s&&!s.persisted){const{leave:t,delayLeave:o}=s,r=()=>t(n,i);o?o(e.el,i,r):r()}else i()},K=(e,t)=>{// For fragments, directly remove all contained DOM nodes.
// (fragment child nodes cannot have transition)
let n;for(;e!==t;)n=p(e),o(e),e=n;o(t)},q=(e,t,n)=>{const{bum:o,scope:r,update:s,subTree:i,um:l}=e;// beforeUnmount hook
o&&G(o),// stop effects in component scope
r.stop(),// update may be null if a component is unmounted before its async
// setup has resolved.
s&&(// so that scheduler will no longer invoke it
s.active=!1,H(i,e,t,n)),// unmounted hook
l&&_r(l,t),_r((()=>{e.isUnmounted=!0}),t),// A component with async dep inside a pending suspense is unmounted before
// its async dep resolves. This should remove the dep from the suspense, and
// cause the suspense to resolve immediately if that was the last dep.
t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},J=(e,t,n,o=!1,r=!1,s=0)=>{for(let i=s;i<e.length;i++)H(e[i],t,n,o,r)},Y=e=>6/* ShapeFlags.COMPONENT */&e.shapeFlag?Y(e.component.subTree):128/* ShapeFlags.SUSPENSE */&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),Z=(e,t,n)=>{null==e?t._vnode&&H(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),ln(),cn(),t._vnode=e},Q={p:y,um:H,m:U,r:W,mt:M,mc:T,pc:I,pbc:R,n:Y,o:e};// Note: functions inside this closure should use `const xxx = () => {}`
// style in order to prevent being inlined by minifiers.
let ee,te;return t&&([ee,te]=t(Q)),{render:Z,hydrate:ee,createApp:dr(Z,ee)}}function xr({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}
/**
             * #1156
             * When a component is HMR-enabled, we need to make sure that all static nodes
             * inside a block also inherit the DOM element from the previous tree so that
             * HMR updates (which are full updates) can retrieve the element for patching.
             *
             * #2080
             * Inside keyed `template` fragment static children, if a fragment is moved,
             * the children will always be moved. Therefore, in order to ensure correct move
             * position, el should be inherited from previous nodes.
             */function wr(e,t,n=!1){const o=e.children,r=t.children;if(E(o)&&E(r))for(let s=0;s<o.length;s++){// this is only called in the optimized path so array children are
// guaranteed to be vnodes
const e=o[s];let t=r[s];1/* ShapeFlags.ELEMENT */&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32/* PatchFlags.HYDRATE_EVENTS */===t.patchFlag)&&(t=r[s]=ts(r[s]),t.el=e.el),n||wr(e,t))}}const kr=e=>e&&(e.disabled||""===e.disabled),Er=e=>"undefined"!=typeof SVGElement&&e instanceof SVGElement,Tr=(e,t)=>{const n=e&&e.to;return O(n)?t?t(n):null:n};function Ar(e,t,n,{o:{insert:o},m:r},s=2/* TeleportMoveTypes.REORDER */){// move target anchor if this is a target change.
0/* TeleportMoveTypes.TARGET_CHANGE */===s&&o(e.targetAnchor,t,n);const{el:i,anchor:l,shapeFlag:c,children:a,props:u}=e,p=2/* TeleportMoveTypes.REORDER */===s;// if this is a re-order and teleport is enabled (content is in target)
// do not move children. So the opposite is: only move children if this
// is not a reorder, or the teleport is disabled
if(// move main view anchor if this is a re-order.
p&&o(i,t,n),(!p||kr(u))&&16/* ShapeFlags.ARRAY_CHILDREN */&c)for(let f=0;f<a.length;f++)r(a[f],t,n,2/* MoveType.REORDER */);// move main view anchor if this is a re-order.
p&&o(l,t,n)}// Force-casted public typing for h and TSX props inference
const Rr=e("t",{__isTeleport:!0,process(e,t,n,o,r,s,i,l,c,a){const{mc:u,pc:p,pbc:f,o:{insert:d,querySelector:h,createText:m,createComment:v}}=a,g=kr(t.props);let{shapeFlag:y,children:_,dynamicChildren:b}=t;if(null==e){// insert anchors in the main view
const e=t.el=m(""),a=t.anchor=m("");d(e,n,o),d(a,n,o);const p=t.target=Tr(t.props,h),f=t.targetAnchor=m("");p&&(d(f,p),// #2652 we could be teleporting from a non-SVG tree into an SVG tree
i=i||Er(p));const v=(e,t)=>{// Teleport *always* has Array children. This is enforced in both the
// compiler and vnode children normalization.
16/* ShapeFlags.ARRAY_CHILDREN */&y&&u(_,e,t,r,s,i,l,c)};g?v(n,a):p&&v(p,f)}else{// update content
t.el=e.el;const o=t.anchor=e.anchor,u=t.target=e.target,d=t.targetAnchor=e.targetAnchor,m=kr(e.props),v=m?n:u,y=m?o:d;if(i=i||Er(u),b?(// fast path when the teleport happens to be a block root
f(e.dynamicChildren,b,v,r,s,i,l),// even in block tree mode we need to make sure all root-level nodes
// in the teleport inherit previous DOM references so that they can
// be moved in future patches.
wr(e,t,!0)):c||p(e,t,v,y,r,s,i,l,!1),g)m||// enabled -> disabled
// move into main container
Ar(t,n,o,a,1/* TeleportMoveTypes.TOGGLE */);else// target changed
if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=Tr(t.props,h);e&&Ar(t,e,null,a,0/* TeleportMoveTypes.TARGET_CHANGE */)}else m&&// disabled -> enabled
// move into teleport target
Ar(t,u,d,a,1/* TeleportMoveTypes.TOGGLE */)}},remove(e,t,n,o,{um:r,o:{remove:s}},i){const{shapeFlag:l,children:c,anchor:a,targetAnchor:u,target:p,props:f}=e;// an unmounted teleport should always remove its children if not disabled
if(p&&s(u),(i||!kr(f))&&(s(a),16/* ShapeFlags.ARRAY_CHILDREN */&l))for(let d=0;d<c.length;d++){const e=c[d];r(e,t,n,!0,!!e.dynamicChildren)}},move:Ar,hydrate:function(e,t,n,o,r,s,{o:{nextSibling:i,parentNode:l,querySelector:c}},a){const u=t.target=Tr(t.props,c);if(u){// if multiple teleports rendered to the same target element, we need to
// pick up from where the last teleport finished instead of the first node
const c=u._lpa||u.firstChild;if(16/* ShapeFlags.ARRAY_CHILDREN */&t.shapeFlag)if(kr(t.props))t.anchor=a(i(e),t,l(e),n,o,r,s),t.targetAnchor=c;else{t.anchor=i(e);// lookahead until we find the target anchor
// we cannot rely on return value of hydrateChildren() because there
// could be nested teleports
let l=c;for(;l;)if(l=i(l),l&&8===l.nodeType&&"teleport anchor"===l.data){t.targetAnchor=l,u._lpa=t.targetAnchor&&i(t.targetAnchor);break}a(c,t,u,n,o,r,s)}}return t.anchor&&i(t.anchor)}}),Fr=e("F",Symbol(void 0)),Or=e("af",Symbol(void 0)),Pr=e("ag",Symbol(void 0)),Mr=Symbol(void 0),Nr=[];let Vr=null;
/**
             * Open a block.
             * This must be called before `createBlock`. It cannot be part of `createBlock`
             * because the children of the block are evaluated before `createBlock` itself
             * is called. The generated code typically looks like this:
             *
             * ```js
             * function render() {
             *   return (openBlock(),createBlock('div', null, [...]))
             * }
             * ```
             * disableTracking is true when creating a v-for fragment block, since a v-for
             * fragment always diffs its children.
             *
             * @private
             */function Br(e=!1){Nr.push(Vr=e?null:[])}function Ir(){Nr.pop(),Vr=Nr[Nr.length-1]||null}// Whether we should be tracking dynamic child nodes inside a block.
// Only tracks when this value is > 0
// We are not using a simple boolean because this value may need to be
// incremented/decremented by nested usage of v-once (see below)
let Lr=1;
/**
             * Block tracking sometimes needs to be disabled, for example during the
             * creation of a tree that needs to be cached by v-once. The compiler generates
             * code like this:
             *
             * ``` js
             * _cache[1] || (
             *   setBlockTracking(-1),
             *   _cache[1] = createVNode(...),
             *   setBlockTracking(1),
             *   _cache[1]
             * )
             * ```
             *
             * @private
             */function $r(e){Lr+=e}function jr(e){// save current block children on the block vnode
return e.dynamicChildren=Lr>0?Vr||v:null,// close block
Ir(),// a block is always going to be patched, so track it as a child of its
// parent block
Lr>0&&Vr&&Vr.push(e),e}
/**
             * @private
             */function Ur(e,t,n,o,r,s){return jr(Gr(e,t,n,o,r,s,!0/* isBlock */))}
/**
             * Create a block root vnode. Takes the same exact arguments as `createVNode`.
             * A block root keeps track of dynamic nodes within the block in the
             * `dynamicChildren` array.
             *
             * @private
             */function Dr(e,t,n,o,r){return jr(Jr(e,t,n,o,r,!0/* isBlock: prevent a block from tracking itself */))}function Hr(e){return!!e&&!0===e.__v_isVNode}function zr(e,t){return e.type===t.type&&e.key===t.key}
/**
             * Internal API for registering an arguments transform for createVNode
             * used for creating stubs in the test-utils
             * It is *internal* but needs to be exposed for test-utils to pick up proper
             * typings
             */const Wr="__vInternal",Kr=({key:e})=>null!=e?e:null,qr=({ref:e,ref_key:t,ref_for:n})=>null!=e?O(e)||kt(e)||F(e)?{i:gn,r:e,k:t,f:!!n}:e:null;function Gr(e,t=null,n=null,o=0,r=null,s=(e===Fr?0:1/* ShapeFlags.ELEMENT */),i=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Kr(t),ref:t&&qr(t),scopeId:yn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null};return l?(ns(c,n),// normalize suspense children
128/* ShapeFlags.SUSPENSE */&s&&e.normalize(c)):n&&(// compiled element vnode - if children is passed, only possible types are
// string or Array.
c.shapeFlag|=O(n)?8/* ShapeFlags.TEXT_CHILDREN */:16/* ShapeFlags.ARRAY_CHILDREN */),// track vnode for block tree
Lr>0&&// avoid a block node from tracking itself
!i&&// has current parent block
Vr&&(// presence of a patch flag indicates this node needs patching on updates.
// component nodes also should always be patched, because even if the
// component doesn't need to update, it needs to persist the instance on to
// the next vnode so that it can be properly unmounted later.
c.patchFlag>0||6/* ShapeFlags.COMPONENT */&s)&&// the EVENTS flag is only for hydration and if it is the only flag, the
// vnode should not be considered dynamic due to handler caching.
32/* PatchFlags.HYDRATE_EVENTS */!==c.patchFlag&&Vr.push(c),c}const Jr=e("j",(function(e,t=null,n=null,o=0,r=null,i=!1){if(e&&e!==Ro||(e=Pr),Hr(e)){// createVNode receiving an existing vnode. This happens in cases like
// <component :is="vnode"/>
// #2078 make sure to merge refs during the clone instead of overwriting it
const o=Xr(e,t,!0/* mergeRef: true */);return n&&ns(o,n),Lr>0&&!i&&Vr&&(6/* ShapeFlags.COMPONENT */&o.shapeFlag?Vr[Vr.indexOf(e)]=o:Vr.push(o)),o.patchFlag|=-2/* PatchFlags.BAIL */,o}// class component normalization.
var l;// class & style normalization.
if(F(l=e)&&"__vccOpts"in l&&(e=e.__vccOpts),t){// for reactive or proxy objects, we need to clone it to enable mutation.
t=Yr(t);let{class:e,style:n}=t;e&&!O(e)&&(t.class=a(e)),M(n)&&(// reactive state objects need to be cloned since they are likely to be
// mutated
yt(n)&&!E(n)&&(n=S({},n)),t.style=s(n))}// encode the vnode type information into a bitmap
const c=O(e)?1/* ShapeFlags.ELEMENT */:An(e)?128/* ShapeFlags.SUSPENSE */:(e=>e.__isTeleport)(e)?64/* ShapeFlags.TELEPORT */:M(e)?4/* ShapeFlags.STATEFUL_COMPONENT */:F(e)?2/* ShapeFlags.FUNCTIONAL_COMPONENT */:0;return Gr(e,t,n,o,r,c,i,!0)}));function Yr(e){return e?yt(e)||Wr in e?S({},e):e:null}function Xr(e,t,n=!1){// This is intentionally NOT using spread or extend to avoid the runtime
// key enumeration cost.
const{props:o,ref:r,patchFlag:s,children:i}=e,l=t?os(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Kr(l),ref:t&&t.ref?// #2078 in the case of <component :is="vnode" ref="extra"/>
// if the vnode itself already has a ref, cloneVNode will need to merge
// the refs so the single vnode can be set on multiple refs
n&&r?E(r)?r.concat(qr(t)):[r,qr(t)]:qr(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,// if the vnode is cloned with extra props, we can no longer assume its
// existing patch flag to be reliable and need to add the FULL_PROPS flag.
// note: preserve flag for fragments since they use the flag for children
// fast paths only.
patchFlag:t&&e.type!==Fr?-1===s?16/* PatchFlags.FULL_PROPS */:16/* PatchFlags.FULL_PROPS */|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,// These should technically only be non-null on mounted VNodes. However,
// they *should* be copied for kept-alive vnodes. So we just always copy
// them since them being non-null during a mount doesn't affect the logic as
// they will simply be overwritten.
component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xr(e.ssContent),ssFallback:e.ssFallback&&Xr(e.ssFallback),el:e.el,anchor:e.anchor}}
/**
             * @private
             */function Zr(e=" ",t=0){return Jr(Or,null,e,t)}
/**
             * @private
             */
/**
             * @private
             */
function Qr(e="",// when used as the v-else branch, the comment node must be created as a
// block to ensure correct updates.
t=!1){return t?(Br(),Dr(Pr,null,e)):Jr(Pr,null,e)}function es(e){return null==e||"boolean"==typeof e?Jr(Pr):E(e)?Jr(Fr,null,// #3666, avoid reference pollution when reusing vnode
e.slice()):"object"==typeof e?ts(e):Jr(Or,null,String(e))}// optimized normalization for template-compiled render fns
function ts(e){return null===e.el||e.memo?e:Xr(e)}function ns(e,t){let n=0;const{shapeFlag:o}=e;if(null==t)t=null;else if(E(t))n=16/* ShapeFlags.ARRAY_CHILDREN */;else if("object"==typeof t){if(65/* ShapeFlags.TELEPORT */&o){// Normalize slot to plain children for plain element and Teleport
const n=t.default;return void(n&&(// _c marker is added by withCtx() indicating this is a compiled slot
n._c&&(n._d=!1),ns(e,n()),n._c&&(n._d=!0)))}{n=32/* ShapeFlags.SLOTS_CHILDREN */;const o=t._;o||Wr in t?3/* SlotFlags.FORWARDED */===o&&gn&&(// a child component receives forwarded slots from the parent.
// its slot type is determined by its parent's slot type.
1/* SlotFlags.STABLE */===gn.slots._?t._=1/* SlotFlags.STABLE */:(t._=2/* SlotFlags.DYNAMIC */,e.patchFlag|=1024/* PatchFlags.DYNAMIC_SLOTS */)):t._ctx=gn}}else F(t)?(t={default:t,_ctx:gn},n=32/* ShapeFlags.SLOTS_CHILDREN */):(t=String(t),// force teleport children to array so it can be moved around
64/* ShapeFlags.TELEPORT */&o?(n=16/* ShapeFlags.ARRAY_CHILDREN */,t=[Zr(t)]):n=8/* ShapeFlags.TEXT_CHILDREN */);e.children=t,e.shapeFlag|=n}function os(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const e in o)if("class"===e)t.class!==o.class&&(t.class=a([t.class,o.class]));else if("style"===e)t.style=s([t.style,o.style]);else if(b(e)){const n=t[e],r=o[e];!r||n===r||E(n)&&n.includes(r)||(t[e]=n?[].concat(n,r):r)}else""!==e&&(t[e]=o[e])}return t}function rs(e,t,n,o=null){Wt(e,t,7/* ErrorCodes.VNODE_HOOK */,[n,o])}const ss=pr();let is=0;function ls(e,t,n){const o=e.type,r=(t?t.appContext:e.appContext)||ss,s={uid:is++,vnode:e,type:o,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Q(!0/* detached */),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],// local resolved assets
components:null,directives:null,// resolved props and emits options
propsOptions:tr(o,r),emitsOptions:mn(o,r),// emit
emit:null,emitted:null,// props default value
propsDefaults:m,// inheritAttrs
inheritAttrs:o.inheritAttrs,// state
ctx:m,data:m,props:m,attrs:m,slots:m,refs:m,setupState:m,setupContext:null,// suspense related
suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,// lifecycle hooks
// not using enums here because it results in computed properties
isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};// inherit parent app context - or - if root, adopt from root vnode
return s.ctx={_:s},s.root=t?t.root:s,s.emit=hn.bind(null,s),// apply custom element special handling
e.ce&&e.ce(s),s}let cs=null;const as=e("g",(()=>cs||gn)),us=e=>{cs=e,e.scope.on()},ps=()=>{cs&&cs.scope.off(),cs=null};function fs(e){return 4/* ShapeFlags.STATEFUL_COMPONENT */&e.vnode.shapeFlag}let ds,hs,ms=!1;function vs(e,t=!1){ms=t;const{props:n,children:o}=e.vnode,r=fs(e);!function(e,t,n,// result of bitwise flag comparison
o=!1){const r={},s={};J(s,Wr,1),e.propsDefaults=Object.create(null),Qo(e,t,r,s);// ensure all declared prop keys are present
for(const i in e.propsOptions[0])i in r||(r[i]=void 0);n?// stateful
e.props=o?r:ft(r):e.type.props?// functional w/ declared props
e.props=r:// functional w/ optional props, props === attrs
e.props=s,e.attrs=s}(e,n,r,t),((e,t)=>{if(32/* ShapeFlags.SLOTS_CHILDREN */&e.vnode.shapeFlag){const n=t._;n?(// users can get the shallow readonly version of the slots object through `this.$slots`,
// we should avoid the proxy object polluting the slots of the internal instance
e.slots=_t(t),// make compiler marker non-enumerable
J(t,"_",n)):ar(t,e.slots={})}else e.slots={},t&&ur(e,t);J(e.slots,Wr,1)})(e,o);const s=r?function(e,t){const n=e.type;// 0. create render proxy property access cache
e.accessCache=Object.create(null),// 1. create public instance / render proxy
// also mark it raw so it's never observed
e.proxy=bt(new Proxy(e.ctx,jo));// 2. call setup()
const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?_s(e):null;us(e),ge();const r=zt(o,e,0/* ErrorCodes.SETUP_FUNCTION */,[e.props,n]);if(ye(),ps(),N(r)){if(r.then(ps,ps),t)// return the promise so server-renderer can wait on it
return r.then((n=>{gs(e,n,t)})).catch((t=>{Kt(t,e,0/* ErrorCodes.SETUP_FUNCTION */)}));// async setup returned Promise.
// bail here and wait for re-entry.
e.asyncDep=r}else gs(e,r,t)}else ys(e,t)}(e,t):void 0;return ms=!1,s}function gs(e,t,n){F(t)?// setup returned an inline render function
e.type.__ssrInlineRender?// when the function's name is `ssrRender` (compiled by SFC inline mode),
// set it as ssrRender instead.
e.ssrRender=t:e.render=t:M(t)&&(e.setupState=Pt(t)),ys(e,n)}function ys(e,t,n){const o=e.type;// template / render function normalization
// could be already set when returned from setup()
if(!e.render){// only do on-the-fly compile if not in SSR - SSR on-the-fly compilation
// is done by server-renderer
if(!t&&ds&&!o.render){const t=o.template;if(t){const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:s,compilerOptions:i}=o,l=S(S({isCustomElement:n,delimiters:s},r),i);o.render=ds(t,l)}}e.render=o.render||g,// for runtime-compiled render functions using `with` blocks, the render
// proxy used needs a different `has` handler which is more performant and
// also only allows a whitelist of globals to fallthrough.
hs&&hs(e)}// support for 2.x options
us(e),ge(),Ho(e),ye(),ps()}function _s(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=function(e){return new Proxy(e.attrs,{get:(t,n)=>(_e(e,0/* TrackOpTypes.GET */,"$attrs"),t[n])})}(e))},slots:e.slots,emit:e.emit,expose:t}}function bs(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Pt(bt(e.exposed)),{get:(t,n)=>n in t?t[n]:n in $o?$o[n](e):void 0}))}const Cs=/(?:^|[-_])(\w)/g;function Ss(e,t=!0){return F(e)?e.displayName||e.name:e.name||t&&e.__name}/* istanbul ignore next */function xs(e,t,n=!1){let o=Ss(t);if(!o&&t.__file){const e=t.__file.match(/([^/\\]+)\.\w+$/);e&&(o=e[1])}if(!o&&e&&e.parent){// try to infer the name based on reverse resolution
const n=e=>{for(const n in e)if(e[n]===t)return n};o=n(e.components||e.parent.type.components)||n(e.appContext.components)}return o?o.replace(Cs,(e=>e.toUpperCase())).replace(/[-_]/g,""):n?"App":"Anonymous"}const ws=e("c",((e,t)=>$t(e,0,ms)));// implementation
function ks(){return Ts().slots}function Es(){return Ts().attrs}function Ts(){const e=as();return e.setupContext||(e.setupContext=_s(e))}
/**
             * Runtime helper for merging default declarations. Imported by compiled code
             * only.
             * @internal
             */ // Actual implementation
function As(e,t,n){const o=arguments.length;return 2===o?M(t)&&!E(t)?// single vnode without props
Hr(t)?Jr(e,null,[t]):Jr(e,t):Jr(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):3===o&&Hr(n)&&(n=[n]),Jr(e,t,n))}const Rs=Symbol("");function Fs(e,t){const n=e.memo;if(n.length!=t.length)return!1;for(let o=0;o<n.length;o++)if(q(n[o],t[o]))return!1;// make sure to let parent block track it when returning cached
return Lr>0&&Vr&&Vr.push(e),!0}// Core API ------------------------------------------------------------------
const Os="3.2.38",Ps={createComponentInstance:ls,setupComponent:vs,renderComponentRoot:xn,setCurrentRenderingInstance:_n,isVNode:Hr,normalizeVNode:es},Ms="undefined"!=typeof document?document:null,Ns=Ms&&Ms.createElement("template"),Vs={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const r=t?Ms.createElementNS("http://www.w3.org/2000/svg",e):Ms.createElement(e,n?{is:n}:void 0);return"select"===e&&o&&null!=o.multiple&&r.setAttribute("multiple",o.multiple),r},createText:e=>Ms.createTextNode(e),createComment:e=>Ms.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ms.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);// #3072
// - in `patchDOMProp`, we store the actual value in the `el._value` property.
// - normally, elements using `:value` bindings will not be hoisted, but if
//   the bound value is a constant, e.g. `:value="true"` - they do get
//   hoisted.
// - in production, hoisted nodes are cloned when subsequent inserts, but
//   cloneNode() does not copy the custom property we attached.
// - This may need to account for other custom DOM properties we attach to
//   elements in addition to `_value` in the future.
return"_value"in e&&(t._value=e._value),t},// __UNSAFE__
// Reason: innerHTML.
// Static content here can only come from compiled templates.
// As long as the user only uses trusted templates, this is safe.
insertStaticContent(e,t,n,o,r,s){// <parent> before | first ... last | anchor </parent>
const i=n?n.previousSibling:t.lastChild;// #5308 can only take cached path if:
// - has a single root node
// - nextSibling info is still available
if(r&&(r===s||r.nextSibling))// cached
for(;t.insertBefore(r.cloneNode(!0),n),r!==s&&(r=r.nextSibling););else{// fresh insert
Ns.innerHTML=o?`<svg>${e}</svg>`:e;const r=Ns.content;if(o){// remove outer svg wrapper
const e=r.firstChild;for(;e.firstChild;)r.appendChild(e.firstChild);r.removeChild(e)}t.insertBefore(r,n)}return[// first
i?i.nextSibling:t.firstChild,// last
n?n.previousSibling:t.lastChild]}},Bs=/\s*!important$/;function Is(e,t,n){if(E(n))n.forEach((n=>Is(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))// custom property definition
e.setProperty(t,n);else{const o=function(e,t){const n=$s[t];if(n)return n;let o=D(t);if("filter"!==o&&o in e)return $s[t]=o;o=W(o);for(let r=0;r<Ls.length;r++){const n=Ls[r]+o;if(n in e)return $s[t]=n}return t}(e,t);Bs.test(n)?// !important
e.setProperty(z(o),n.replace(Bs,""),"important"):e[o]=n}}const Ls=["Webkit","Moz","ms"],$s={},js="http://www.w3.org/1999/xlink",[Us,Ds]=(()=>{let e=Date.now,t=!1;if("undefined"!=typeof window){// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
Date.now()>document.createEvent("Event").timeStamp&&(// if the low-res timestamp which is bigger than the event timestamp
// (which is evaluated AFTER) it means the event is using a hi-res timestamp,
// and we need to use the hi-res version for event listeners as well.
e=performance.now.bind(performance));// #3485: Firefox <= 53 has incorrect Event.timeStamp implementation
// and does not fire microtasks in between event propagation, so safe to exclude.
const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();// To avoid the overhead of repeatedly calling performance.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.
let Hs=0;const zs=Promise.resolve(),Ws=()=>{Hs=0};function Ks(e,t,n,o){e.addEventListener(t,n,o)}function qs(e,t,n,o,r=null){// vei = vue event invokers
const s=e._vei||(e._vei={}),i=s[t];if(o&&i)// patch
i.value=o;else{const[n,l]=function(e){let t;if(Gs.test(e)){let n;for(t={};n=e.match(Gs);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[":"===e[2]?e.slice(3):z(e.slice(2)),t]}(t);if(o){// add
const i=s[t]=function(e,t){const n=e=>{// async edge case #6566: inner click event triggers patch, event handler
// attached to outer element during patch, and triggered again. This
// happens because browsers fire microtask ticks between event propagation.
// the solution is simple: we save the timestamp when a handler is attached,
// and the handler would only fire if the event passed to it was fired
// AFTER it was attached.
const o=e.timeStamp||Us();(Ds||o>=n.attached-1)&&Wt(function(e,t){if(E(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}(e,n.value),t,5/* ErrorCodes.NATIVE_EVENT_HANDLER */,[e])};return n.value=e,n.attached=Hs||(zs.then(Ws),Hs=Us()),n}(o,r);Ks(e,n,i,l)}else i&&(// remove
function(e,t,n,o){e.removeEventListener(t,n,o)}(e,n,i,l),s[t]=void 0)}}const Gs=/(?:Once|Passive|Capture)$/,Js=/^on[a-z]/;function Ys(e,t){const n=eo(e);class o extends Zs{constructor(e){super(n,e,t)}}return o.def=n,o}const Xs="undefined"!=typeof HTMLElement?HTMLElement:class{};class Zs extends Xs{constructor(e,t={},n){super(),this._def=e,this._props=t,
/**
                     * @internal
                     */
this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&n?n(this._createVNode(),this.shadowRoot):this.attachShadow({mode:"open"})}connectedCallback(){this._connected=!0,this._instance||this._resolveDef()}disconnectedCallback(){this._connected=!1,nn((()=>{this._connected||(Zi(null,this.shadowRoot),this._instance=null)}))}
/**
                 * resolve inner component definition (handle possible async component)
                 */_resolveDef(){if(this._resolved)return;this._resolved=!0;// set initial attrs
for(let n=0;n<this.attributes.length;n++)this._setAttr(this.attributes[n].name);// watch future attr changes
new MutationObserver((e=>{for(const t of e)this._setAttr(t.attributeName)})).observe(this,{attributes:!0});const e=e=>{const{props:t,styles:n}=e,o=!E(t),r=t?o?Object.keys(t):t:[];// cast Number-type props set before resolve
let s;if(o)for(const i in this._props){const e=t[i];(e===Number||e&&e.type===Number)&&(this._props[i]=Y(this._props[i]),(s||(s=Object.create(null)))[i]=!0)}this._numberProps=s;// check if there are props set pre-upgrade or connect
for(const i of Object.keys(this))"_"!==i[0]&&this._setProp(i,this[i],!0,!1);// defining getter/setters on prototype
for(const i of r.map(D))Object.defineProperty(this,i,{get(){return this._getProp(i)},set(e){this._setProp(i,e)}});// apply CSS
this._applyStyles(n),// initial render
this._update()},t=this._def.__asyncLoader;t?t().then(e):e(this._def)}_setAttr(e){let t=this.getAttribute(e);this._numberProps&&this._numberProps[e]&&(t=Y(t)),this._setProp(D(e),t,!1)}
/**
                 * @internal
                 */_getProp(e){return this._props[e]}
/**
                 * @internal
                 */_setProp(e,t,n=!0,o=!0){t!==this._props[e]&&(this._props[e]=t,o&&this._instance&&this._update(),// reflect
n&&(!0===t?this.setAttribute(z(e),""):"string"==typeof t||"number"==typeof t?this.setAttribute(z(e),t+""):t||this.removeAttribute(z(e))))}_update(){Zi(this._createVNode(),this.shadowRoot)}_createVNode(){const e=Jr(this._def,S({},this._props));return this._instance||(e.ce=e=>{this._instance=e,e.isCE=!0,// intercept emit
e.emit=(e,...t)=>{this.dispatchEvent(new CustomEvent(e,{detail:t}))};// locate nearest Vue custom element parent for provide/inject
let t=this;for(;t=t&&(t.parentNode||t.host);)if(t instanceof Zs){e.parent=t._instance;break}}),e}_applyStyles(e){e&&e.forEach((e=>{const t=document.createElement("style");t.textContent=e,this.shadowRoot.appendChild(t)}))}}
/**
             * Runtime helper for SFC's CSS variable injection feature.
             * @private
             */
function Qs(e){const t=as();/* istanbul ignore next */if(!t)return;const n=()=>ei(t.subTree,e(t.proxy));Ln(n),vo((()=>{const e=new MutationObserver(n);e.observe(t.subTree.el.parentNode,{childList:!0}),bo((()=>e.disconnect()))}))}function ei(e,t){if(128/* ShapeFlags.SUSPENSE */&e.shapeFlag){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push((()=>{ei(n.activeBranch,t)}))}// drill down HOCs until it's a non-component vnode
for(;e.component;)e=e.component.subTree;if(1/* ShapeFlags.ELEMENT */&e.shapeFlag&&e.el)ti(e.el,t);else if(e.type===Fr)e.children.forEach((e=>ei(e,t)));else if(e.type===Mr){let{el:n,anchor:o}=e;for(;n&&(ti(n,t),n!==o);)n=n.nextSibling}}function ti(e,t){if(1===e.nodeType){const n=e.style;for(const e in t)n.setProperty(`--${e}`,t[e])}}const ni="transition",oi="animation",ri=e("T",((e,{slots:t})=>As(qn,ai(e),t)));ri.displayName="Transition";const si={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ii=ri.props=S({},qn.props,si),li=(e,t=[])=>{E(e)?e.forEach((e=>e(...t))):e&&e(...t)},ci=e=>!!e&&(E(e)?e.some((e=>e.length>1)):e.length>1);function ai(e){const t={};for(const S in e)S in si||(t[S]=e[S]);if(!1===e.css)return t;const{name:n="v",type:o,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:a=i,appearToClass:u=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=e,h=function(e){if(null==e)return null;if(M(e))return[ui(e.enter),ui(e.leave)];{const t=ui(e);return[t,t]}}(r),m=h&&h[0],v=h&&h[1],{onBeforeEnter:g,onEnter:y,onEnterCancelled:_,onLeave:b,onLeaveCancelled:C,onBeforeAppear:x=g,onAppear:w=y,onAppearCancelled:k=_}=t,E=(e,t,n)=>{fi(e,t?u:l),fi(e,t?a:i),n&&n()},T=(e,t)=>{e._isLeaving=!1,fi(e,p),fi(e,d),fi(e,f),t&&t()},A=e=>(t,n)=>{const r=e?w:y,i=()=>E(t,e,n);li(r,[t,i]),di((()=>{fi(t,e?c:s),pi(t,e?u:l),ci(r)||mi(t,o,m,i)}))};return S(t,{onBeforeEnter(e){li(g,[e]),pi(e,s),pi(e,i)},onBeforeAppear(e){li(x,[e]),pi(e,c),pi(e,a)},onEnter:A(!1),onAppear:A(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>T(e,t);pi(e,p),// force reflow so *-leave-from classes immediately take effect (#2593)
_i(),pi(e,f),di((()=>{e._isLeaving&&(fi(e,p),pi(e,d),ci(b)||mi(e,o,v,n))})),li(b,[e,n])},onEnterCancelled(e){E(e,!1),li(_,[e])},onAppearCancelled(e){E(e,!0),li(k,[e])},onLeaveCancelled(e){T(e),li(C,[e])}})}function ui(e){return Y(e)}function pi(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function fi(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function di(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let hi=0;function mi(e,t,n,o){const r=e._endId=++hi,s=()=>{r===e._endId&&o()};if(n)return setTimeout(s,n);const{type:i,timeout:l,propCount:c}=vi(e,t);if(!i)return o();const a=i+"end";let u=0;const p=()=>{e.removeEventListener(a,f),s()},f=t=>{t.target===e&&++u>=c&&p()};setTimeout((()=>{u<c&&p()}),l+1),e.addEventListener(a,f)}function vi(e,t){const n=window.getComputedStyle(e),o=e=>(n[e]||"").split(", "),r=o("transitionDelay"),s=o("transitionDuration"),i=gi(r,s),l=o("animationDelay"),c=o("animationDuration"),a=gi(l,c);// JSDOM may return undefined for transition properties
let u=null,p=0,f=0;/* istanbul ignore if */return t===ni?i>0&&(u=ni,p=i,f=s.length):t===oi?a>0&&(u=oi,p=a,f=c.length):(p=Math.max(i,a),u=p>0?i>a?ni:oi:null,f=u?u===ni?s.length:c.length:0),{type:u,timeout:p,propCount:f,hasTransform:u===ni&&/\b(transform|all)(,|$)/.test(n.transitionProperty)}}function gi(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map(((t,n)=>yi(t)+yi(e[n]))))}// Old versions of Chromium (below 61.0.3163.100) formats floating pointer
// numbers in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down
// (i.e. acting as a floor function) causing unexpected behaviors
function yi(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}// synchronously force layout to put elements into a certain state
function _i(){return document.body.offsetHeight}const bi=new WeakMap,Ci=new WeakMap,Si={name:"TransitionGroup",props:S({},ii,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=as(),o=Wn();let r,s;return yo((()=>{// children is guaranteed to exist after initial render
if(!r.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!function(e,t,n){// Detect whether an element with the move class applied has
// CSS transitions. Since the element may be inside an entering
// transition at this very moment, we make a clone of it and remove
// all other transition classes applied to ensure only the move class
// is applied.
const o=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&o.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&o.classList.add(e))),o.style.display="none";const r=1===t.nodeType?t:t.parentNode;r.appendChild(o);const{hasTransform:s}=vi(o);return r.removeChild(o),s}(r[0].el,n.vnode.el,t))return;// we divide the work into three loops to avoid mixing DOM reads and writes
// in each iteration - which helps prevent layout thrashing.
r.forEach(xi),r.forEach(wi);const o=r.filter(ki);// force reflow to put everything in position
_i(),o.forEach((e=>{const n=e.el,o=n.style;pi(n,t),o.transform=o.webkitTransform=o.transitionDuration="";const r=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",r),n._moveCb=null,fi(n,t))};n.addEventListener("transitionend",r)}))})),()=>{const i=_t(e),l=ai(i);let c=i.tag||Fr;r=s,s=t.default?Qn(t.default()):[];for(let e=0;e<s.length;e++){const t=s[e];null!=t.key&&Zn(t,Jn(t,l,o,n))}if(r)for(let e=0;e<r.length;e++){const t=r[e];Zn(t,Jn(t,l,o,n)),bi.set(t,t.el.getBoundingClientRect())}return Jr(c,null,s)}}};function xi(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function wi(e){Ci.set(e,e.el.getBoundingClientRect())}function ki(e){const t=bi.get(e),n=Ci.get(e),o=t.left-n.left,r=t.top-n.top;if(o||r){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${o}px,${r}px)`,t.transitionDuration="0s",e}}const Ei=e=>{const t=e.props["onUpdate:modelValue"]||!1;return E(t)?e=>G(t,e):t};function Ti(e){e.target.composing=!0}function Ai(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}// We are exporting the v-model runtime directly as vnode hooks so that it can
// be tree-shaken in case v-model is never used.
const Ri={created(e,{modifiers:{lazy:t,trim:n,number:o}},r){e._assign=Ei(r);const s=o||r.props&&"number"===r.props.type;Ks(e,t?"change":"input",(t=>{if(t.target.composing)return;let o=e.value;n&&(o=o.trim()),s&&(o=Y(o)),e._assign(o)})),n&&Ks(e,"change",(()=>{e.value=e.value.trim()})),t||(Ks(e,"compositionstart",Ti),Ks(e,"compositionend",Ai),// Safari < 10.2 & UIWebView doesn't fire compositionend when
// switching focus before confirming composition choice
// this also fixes the issue where some browsers e.g. iOS Chrome
// fires "change" instead of "input" on autocomplete.
Ks(e,"change",Ai))},// set value on mounted so it's after min/max for type="range"
mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:o,number:r}},s){// avoid clearing unresolved text. #2302
if(e._assign=Ei(s),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(o&&e.value.trim()===t)return;if((r||"number"===e.type)&&Y(e.value)===t)return}const i=null==t?"":t;e.value!==i&&(e.value=i)}},Fi=e("ap",{// #4096 array checkboxes need to be deep traversed
deep:!0,created(e,t,n){e._assign=Ei(n),Ks(e,"change",(()=>{const t=e._modelValue,n=Vi(e),o=e.checked,r=e._assign;if(E(t)){const e=f(t,n),s=-1!==e;if(o&&!s)r(t.concat(n));else if(!o&&s){const n=[...t];n.splice(e,1),r(n)}}else if(A(t)){const e=new Set(t);o?e.add(n):e.delete(n),r(e)}else r(Bi(e,o))}))},// set initial checked on mount to wait for true-value/false-value
mounted:Oi,beforeUpdate(e,t,n){e._assign=Ei(n),Oi(e,t,n)}});function Oi(e,{value:t,oldValue:n},o){e._modelValue=t,E(t)?e.checked=f(t,o.props.value)>-1:A(t)?e.checked=t.has(o.props.value):t!==n&&(e.checked=p(t,Bi(e,!0)))}const Pi={created(e,{value:t},n){e.checked=p(t,n.props.value),e._assign=Ei(n),Ks(e,"change",(()=>{e._assign(Vi(e))}))},beforeUpdate(e,{value:t,oldValue:n},o){e._assign=Ei(o),t!==n&&(e.checked=p(t,o.props.value))}},Mi={// <select multiple> value need to be deep traversed
deep:!0,created(e,{value:t,modifiers:{number:n}},o){const r=A(t);Ks(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?Y(Vi(e)):Vi(e)));e._assign(e.multiple?r?new Set(t):t:t[0])})),e._assign=Ei(o)},// set value in mounted & updated because <select> relies on its children
// <option>s.
mounted(e,{value:t}){Ni(e,t)},beforeUpdate(e,t,n){e._assign=Ei(n)},updated(e,{value:t}){Ni(e,t)}};function Ni(e,t){const n=e.multiple;if(!n||E(t)||A(t)){for(let o=0,r=e.options.length;o<r;o++){const r=e.options[o],s=Vi(r);if(n)E(t)?r.selected=f(t,s)>-1:r.selected=t.has(s);else if(p(Vi(r),t))return void(e.selectedIndex!==o&&(e.selectedIndex=o))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}// retrieve raw value set via :value bindings
function Vi(e){return"_value"in e?e._value:e.value}// retrieve raw value for true-value and false-value set via :true-value or :false-value bindings
function Bi(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Ii={created(e,t,n){$i(e,t,n,null,"created")},mounted(e,t,n){$i(e,t,n,null,"mounted")},beforeUpdate(e,t,n,o){$i(e,t,n,o,"beforeUpdate")},updated(e,t,n,o){$i(e,t,n,o,"updated")}};function Li(e,t){switch(e){case"SELECT":return Mi;case"TEXTAREA":return Ri;default:switch(t){case"checkbox":return Fi;case"radio":return Pi;default:return Ri}}}function $i(e,t,n,o,r){const s=Li(e.tagName,n.props&&n.props.type)[r];s&&s(e,t,n,o)}// SSR vnode transforms, only used when user includes client-oriented render
// function in SSR
const ji=["ctrl","shift","alt","meta"],Ui={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>ji.some((n=>e[`${n}Key`]&&!t.includes(n)))},Di=e("_",((e,t)=>(n,...o)=>{for(let e=0;e<t.length;e++){const o=Ui[t[e]];if(o&&o(n,t))return}return e(n,...o)})),Hi={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},zi=e("ao",((e,t)=>n=>{if(!("key"in n))return;const o=z(n.key);return t.some((e=>e===o||Hi[e]===o))?e(n):void 0})),Wi=e("v",{beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):Ki(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(e),Ki(e,!0),o.enter(e)):o.leave(e,(()=>{Ki(e,!1)})):Ki(e,t))},beforeUnmount(e,{value:t}){Ki(e,t)}});function Ki(e,t){e.style.display=t?e._vod:"none"}// SSR vnode transforms, only used when user includes client-oriented render
// function in SSR
const qi=S({patchProp:(e,t,n,s,i=!1,l,c,a,u)=>{"class"===t?// compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]
function(e,t,n){// directly setting className should be faster than setAttribute in theory
// if this is an element during a transition, take the temporary transition
// classes into account.
const o=e._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}(e,s,i):"style"===t?function(e,t,n){const o=e.style,r=O(n);if(n&&!r){for(const e in n)Is(o,e,n[e]);if(t&&!O(t))for(const e in t)null==n[e]&&Is(o,e,"")}else{const s=o.display;r?t!==n&&(o.cssText=n):t&&e.removeAttribute("style"),// indicates that the `display` of the element is controlled by `v-show`,
// so we always keep the current `display` value regardless of the `style`
// value, thus handing over control to `v-show`.
"_vod"in e&&(o.display=s)}}(e,n,s):b(t)?// ignore v-model listeners
C(t)||qs(e,t,0,s,c):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):function(e,t,n,o){return o?// most keys must be set as attribute on svg elements to work
// ...except innerHTML & textContent
"innerHTML"===t||"textContent"===t||!!(t in e&&Js.test(t)&&F(n)):// these are enumerated attrs, however their corresponding DOM properties
// are actually booleans - this leads to setting it with a string "false"
// value leading it to be coerced to `true`, so we need to always treat
// them as attributes.
// Note that `contentEditable` doesn't have this problem: its DOM
// property is also enumerated string values.
"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&(// #1787, #2840 form property on form elements is readonly and must be set as
// attribute.
"form"!==t&&(// #1526 <input list> must be set as attribute
("list"!==t||"INPUT"!==e.tagName)&&(// #2766 <textarea type> must be set as attribute
("type"!==t||"TEXTAREA"!==e.tagName)&&(// native onclick with string value, must be set as attribute
(!Js.test(t)||!O(n))&&t in e))))}(e,t,s,i))?// __UNSAFE__
// functions. The user is responsible for using them with only trusted content.
function(e,t,n,// the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
// unmounted.
o,s,i,l){if("innerHTML"===t||"textContent"===t)return o&&l(o,s,i),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&// custom elements may use _value internally
!e.tagName.includes("-")){// store value as _value as well since
// non-string values will be stringified.
e._value=n;const o=null==n?"":n;return e.value===o&&// #4956: always set for OPTION elements because its value falls back to
// textContent if no value attribute is present. And setting .value for
// OPTION has no side effect
"OPTION"!==e.tagName||(e.value=o),void(null==n&&e.removeAttribute(t))}let c=!1;if(""===n||null==n){const o=typeof e[t];"boolean"===o?// e.g. <select multiple> compiles to { multiple: '' }
n=r(n):null==n&&"string"===o?(// e.g. <div :id="null">
n="",c=!0):"number"===o&&(// e.g. <img :width="null">
// the value of some IDL attr must be greater than 0, e.g. input.size = 0 -> error
n=0,c=!0)}// some properties perform value validation and throw,
// some properties has getter, no setter, will error in 'use strict'
// eg. <select :type="null"></select> <select :willValidate="null"></select>
try{e[t]=n}catch(a){}c&&e.removeAttribute(t)}// Async edge case fix requires storing an event listener's attach timestamp.
(e,t,s,l,c,a,u):(// special case for <input v-model type="checkbox"> with
// :true-value & :false-value
// store value as dom properties since non-string values will be
// stringified.
"true-value"===t?e._trueValue=s:"false-value"===t&&(e._falseValue=s),function(e,t,n,s,i){if(s&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(js,t.slice(6,t.length)):e.setAttributeNS(js,t,n);else{// note we are only checking boolean attributes that don't have a
// corresponding dom prop of the same name here.
const s=o(t);null==n||s&&!r(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}(e,t,s,i))}},Vs);// lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.
let Gi,Ji=!1;function Yi(){return Gi||(Gi=br(qi))}function Xi(){return Gi=Ji?Gi:Cr(qi),Ji=!0,Gi}// use explicit type casts here to avoid import() calls in rolled-up d.ts
const Zi=e("al",((...e)=>{Yi().render(...e)})),Qi=(...e)=>{Xi().hydrate(...e)},el=e("z",((...e)=>{const t=Yi().createApp(...e),{mount:n}=t;return t.mount=e=>{const o=nl(e);if(!o)return;const r=t._component;F(r)||r.render||r.template||(// __UNSAFE__
// Reason: potential execution of JS expressions in in-DOM template.
// The user must make sure the in-DOM template is trusted. If it's
// rendered by the server, the template should not contain any user data.
r.template=o.innerHTML),// clear content before mounting
o.innerHTML="";const s=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},t})),tl=e("X",((...e)=>{const t=Xi().createApp(...e),{mount:n}=t;return t.mount=e=>{const t=nl(e);if(t)return n(t,!0,t instanceof SVGElement)},t}));function nl(e){return O(e)?document.querySelector(e):e}let ol=!1;
/**
             * @internal
             */const rl=Object.freeze(Object.defineProperty({__proto__:null,compile:()=>{},EffectScope:Q,ReactiveEffect:de,customRef:function(e){return new Mt(e)},effect:function(e,t){e.effect&&(e=e.effect.fn);const n=new de(e);t&&(S(n,t),t.scope&&te(n,t.scope)),t&&t.lazy||n.run();const o=n.run.bind(n);return o.effect=n,o},effectScope:ee,getCurrentScope:ne,isProxy:yt,isReactive:mt,isReadonly:vt,isRef:kt,isShallow:gt,markRaw:bt,onScopeDispose:oe,proxyRefs:Pt,reactive:pt,readonly:dt,ref:Et,shallowReactive:ft,shallowReadonly:function(e){return ht(e,!0,Ie,st,at)},shallowRef:Tt,stop:function(e){e.effect.stop()},toRaw:_t,toRef:Bt,toRefs:Nt,triggerRef:function(e){wt(e)},unref:Ft,camelize:D,capitalize:W,normalizeClass:a,normalizeProps:u,normalizeStyle:s,toDisplayString:d,toHandlerKey:K,BaseTransition:qn,Comment:Pr,Fragment:Fr,KeepAlive:ro,Static:Mr,Suspense:Rn,Teleport:Rr,Text:Or,callWithAsyncErrorHandling:Wt,callWithErrorHandling:zt,cloneVNode:Xr,compatUtils:null,computed:ws,createBlock:Dr,createCommentVNode:Qr,createElementBlock:Ur,createElementVNode:Gr,createHydrationRenderer:Cr,createPropsRestProxy:
/**
             * Used to create a proxy for the rest element when destructuring props with
             * defineProps().
             * @internal
             */
function(e,t){const n={};for(const o in e)t.includes(o)||Object.defineProperty(n,o,{enumerable:!0,get:()=>e[o]});return n}
/**
             * `<script setup>` helper for persisting the current instance context over
             * async/await flows.
             *
             * `@vue/compiler-sfc` converts the following:
             *
             * ```ts
             * const x = await foo()
             * ```
             *
             * into:
             *
             * ```ts
             * let __temp, __restore
             * const x = (([__temp, __restore] = withAsyncContext(() => foo())),__temp=await __temp,__restore(),__temp)
             * ```
             * @internal
             */,createRenderer:br,createSlots:Vo,createStaticVNode:function(e,t){// A static vnode can contain multiple stringified elements, and the number
// of elements is necessary for hydration.
const n=Jr(Mr,null,e);return n.staticCount=t,n},createTextVNode:Zr,createVNode:Jr,defineAsyncComponent:function(e){F(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:o,delay:r=200,timeout:s,suspensible:// undefined = never times out
i=!0,onError:l}=e;let c,a=null,u=0;const p=()=>{let e;return a||(e=a=t().catch((e=>{if(e=e instanceof Error?e:new Error(String(e)),l)return new Promise(((t,n)=>{l(e,(()=>t((u++,a=null,p()))),(()=>n(e)),u+1)}));throw e})).then((t=>e!==a&&a?a:(// interop module default
t&&(t.__esModule||"Module"===t[Symbol.toStringTag])&&(t=t.default),c=t,t))))};return eo({name:"AsyncComponentWrapper",__asyncLoader:p,get __asyncResolved(){return c},setup(){const e=cs;// already resolved
if(c)return()=>no(c,e);const t=t=>{a=null,Kt(t,e,13/* ErrorCodes.ASYNC_COMPONENT_LOADER */,!o/* do not throw in dev if user provided error component */)};// suspense-controlled or SSR.
if(i&&e.suspense||ms)return p().then((t=>()=>no(t,e))).catch((e=>(t(e),()=>o?Jr(o,{error:e}):null)));const l=Et(!1),u=Et(),f=Et(!!r);return r&&setTimeout((()=>{f.value=!1}),r),null!=s&&setTimeout((()=>{if(!l.value&&!u.value){const e=new Error(`Async component timed out after ${s}ms.`);t(e),u.value=e}}),s),p().then((()=>{l.value=!0,e.parent&&oo(e.parent.vnode)&&// parent is keep-alive, force update so the loaded component's
// name is taken into account
on(e.parent.update)})).catch((e=>{t(e),u.value=e})),()=>l.value&&c?no(c,e):u.value&&o?Jr(o,{error:u.value}):n&&!f.value?Jr(n):void 0}})},defineComponent:eo,defineEmits:// implementation
function(){return null}
/**
             * Vue `<script setup>` compiler macro for declaring a component's exposed
             * instance properties when it is accessed by a parent component via template
             * refs.
             *
             * `<script setup>` components are closed by default - i.e. variables inside
             * the `<script setup>` scope is not exposed to parent unless explicitly exposed
             * via `defineExpose`.
             *
             * This is only usable inside `<script setup>`, is compiled away in the
             * output and should **not** be actually called at runtime.
             */,defineExpose:function(e){}
/**
             * Vue `<script setup>` compiler macro for providing props default values when
             * using type-based `defineProps` declaration.
             *
             * Example usage:
             * ```ts
             * withDefaults(defineProps<{
             *   size?: number
             *   labels?: string[]
             * }>(), {
             *   size: 3,
             *   labels: () => ['default label']
             * })
             * ```
             *
             * This is only usable inside `<script setup>`, is compiled away in the output
             * and should **not** be actually called at runtime.
             */,defineProps:function(){return null},get devtools(){return fn},getCurrentInstance:as,getTransitionRawChildren:Qn,guardReactiveProps:Yr,h:As,handleError:Kt,initCustomFormatter:function(){},inject:Bn,isMemoSame:Fs,isRuntimeOnly:()=>!ds,isVNode:Hr,mergeDefaults:function(e,t){const n=E(e)?e.reduce(((e,t)=>(e[t]={},e)),{}):e;for(const o in t){const e=n[o];e?E(e)||F(e)?n[o]={type:e,default:t[o]}:e.default=t[o]:null===e&&(n[o]={default:t[o]})}return n},mergeProps:os,nextTick:nn,onActivated:io,onBeforeMount:mo,onBeforeUnmount:_o,onBeforeUpdate:go,onDeactivated:lo,onErrorCaptured:wo,onMounted:vo,onRenderTracked:xo,onRenderTriggered:So,onServerPrefetch:Co,onUnmounted:bo,onUpdated:yo,openBlock:Br,popScopeId:Cn,provide:Vn,pushScopeId:bn,queuePostFlushCb:sn,registerRuntimeCompiler:
/**
             * For runtime-dom to register the compiler.
             * Note the exported method uses any to avoid d.ts relying on the compiler types.
             */
function(e){ds=e,hs=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,Uo))}}// dev only
,renderList:No,renderSlot:Bo,resolveComponent:Ao,resolveDirective:Oo,resolveDynamicComponent:Fo,resolveFilter:null,resolveTransitionHooks:Jn,setBlockTracking:$r,setDevtoolsHook:function e(t,n){var o,r;fn=t,fn?(fn.enabled=!0,dn.forEach((({event:e,args:t})=>fn.emit(e,...t))),dn=[]):// handle late devtools injection - only do this if we are in an actual
// browser environment to avoid the timer handle stalling test runner exit
// (#4815)
"undefined"!=typeof window&&// some envs mock window but not fully
window.HTMLElement&&// also exclude jsdom
!(null===(r=null===(o=window.navigator)||void 0===o?void 0:o.userAgent)||void 0===r?void 0:r.includes("jsdom"))?((n.__VUE_DEVTOOLS_HOOK_REPLAY__=n.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push((t=>{e(t,n)})),// clear buffer after 3s - the user probably doesn't have devtools installed
// at all, and keeping the buffer will cause memory leaks (#4738)
setTimeout((()=>{fn||(n.__VUE_DEVTOOLS_HOOK_REPLAY__=null,dn=[])}),3e3)):dn=[]},setTransitionHooks:Zn,ssrContextKey:Rs,ssrUtils:Ps,toHandlers:function(e,t){const n={};for(const o in e)n[t&&/[A-Z]/.test(o)?`on:${o}`:K(o)]=e[o];return n},transformVNodeArgs:function(e){},useAttrs:Es,useSSRContext:()=>{{const e=Bn(Rs);return e||Ut("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}},useSlots:ks,useTransitionState:Wn,version:Os,warn:Ut,watch:jn,watchEffect:In,watchPostEffect:Ln,watchSyncEffect:function(e,t){return Un(e,null,{flush:"sync"})},withAsyncContext:function(e){const t=as();let n=e();return ps(),N(n)&&(n=n.catch((e=>{throw us(t),e}))),[n,()=>us(t)]},withCtx:Sn,withDefaults:function(e,t){return null},withDirectives:ko,withMemo:function(e,t,n,o){const r=n[o];if(r&&Fs(r,e))return r;const s=t();// shallow clone
return s.memo=e.slice(),n[o]=s},withScopeId:e=>Sn,Transition:ri,TransitionGroup:Si,VueElement:Zs,createApp:el,createSSRApp:tl,defineCustomElement:Ys,defineSSRCustomElement:e=>Ys(e,Qi),hydrate:Qi,initDirectivesForSSR:()=>{ol||(ol=!0,Ri.getSSRProps=({value:e})=>({value:e}),Pi.getSSRProps=({value:e},t)=>{if(t.props&&p(t.props.value,e))return{checked:!0}},Fi.getSSRProps=({value:e},t)=>{if(E(e)){if(t.props&&f(e,t.props.value)>-1)return{checked:!0}}else if(A(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}},Ii.getSSRProps=(e,t)=>{if("string"!=typeof t.type)return;const n=Li(// resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
t.type.toUpperCase(),t.props&&t.props.type);return n.getSSRProps?n.getSSRProps(e,t):void 0},Wi.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}})},render:Zi,useCssModule:function(e="$style"){/* istanbul ignore else */{const t=as();if(!t)return m;const n=t.type.__cssModules;if(!n)return m;const o=n[e];return o||m}},useCssVars:Qs,vModelCheckbox:Fi,vModelDynamic:Ii,vModelRadio:Pi,vModelSelect:Mi,vModelText:Ri,vShow:Wi,withKeys:zi,withModifiers:Di},Symbol.toStringTag,{value:"Module"}));e("I",rl)}}}));
//# sourceMappingURL=vue-legacy-ad0cdcd9.js.map
