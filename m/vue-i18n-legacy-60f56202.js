System.register(["./vendor-legacy-d0deb908.js"],(function(e,a){"use strict";var t,l,n;return{setters:[e=>{t=e.s,l=e.c,n=e.r}],execute:function(){var a={};
/*!
        * vue-i18n v9.2.2
        * (c) 2022 kazuya kawaguchi
        * Released under the MIT License.
        */Object.defineProperty(a,"__esModule",{value:!0});var r=t.exports,s=l.exports,o=n;
/**
       * Vue I18n Version
       *
       * @remarks
       * Semver format. Same format as the package.json `version` field.
       *
       * @VueI18nGeneral
       */
const i="9.2.2";let c=s.CoreWarnCodes.__EXTEND_POINT__;const u=()=>++c,m={FALLBACK_TO_ROOT:c,NOT_SUPPORTED_PRESERVE:u(),NOT_SUPPORTED_FORMATTER:u(),NOT_SUPPORTED_PRESERVE_DIRECTIVE:u(),NOT_SUPPORTED_GET_CHOICE_INDEX:u(),COMPONENT_NAME_LEGACY_COMPATIBLE:u(),NOT_FOUND_PARENT_SCOPE:u()},_={[m.FALLBACK_TO_ROOT]:"Fall back to {type} '{key}' with root locale.",[m.NOT_SUPPORTED_PRESERVE]:"Not supported 'preserve'.",[m.NOT_SUPPORTED_FORMATTER]:"Not supported 'formatter'.",[m.NOT_SUPPORTED_PRESERVE_DIRECTIVE]:"Not supported 'preserveDirectiveContent'.",[m.NOT_SUPPORTED_GET_CHOICE_INDEX]:"Not supported 'getChoiceIndex'.",[m.COMPONENT_NAME_LEGACY_COMPATIBLE]:"Component name legacy compatible: '{name}' -> 'i18n'",[m.NOT_FOUND_PARENT_SCOPE]:"Not found parent scope. use the global scope."};function g(e,...a){return r.format(_[e],...a)}let f=s.CompileErrorCodes.__EXTEND_POINT__;const p=()=>++f,v={// composer module errors
UNEXPECTED_RETURN_TYPE:f,// legacy module errors
INVALID_ARGUMENT:p(),// i18n module errors
MUST_BE_CALL_SETUP_TOP:p(),NOT_INSLALLED:p(),NOT_AVAILABLE_IN_LEGACY_MODE:p(),// directive module errors
REQUIRED_VALUE:p(),INVALID_VALUE:p(),// vue-devtools errors
CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:p(),NOT_INSLALLED_WITH_PROVIDE:p(),// unexpected error
UNEXPECTED_ERROR:p(),// not compatible legacy vue-i18n constructor
NOT_COMPATIBLE_LEGACY_VUE_I18N:p(),// bridge support vue 2.x only
BRIDGE_SUPPORT_VUE_2_ONLY:p(),// need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:p(),// Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
NOT_AVAILABLE_COMPOSITION_IN_LEGACY:p(),// for enhancement
__EXTEND_POINT__:p()};function b(e,...a){return s.createCompileError(e,null,{messages:E,args:a})}const E={[v.UNEXPECTED_RETURN_TYPE]:"Unexpected return type in composer",[v.INVALID_ARGUMENT]:"Invalid argument",[v.MUST_BE_CALL_SETUP_TOP]:"Must be called at the top of a `setup` function",[v.NOT_INSLALLED]:"Need to install with `app.use` function",[v.UNEXPECTED_ERROR]:"Unexpected error",[v.NOT_AVAILABLE_IN_LEGACY_MODE]:"Not available in legacy mode",[v.REQUIRED_VALUE]:"Required in value: {0}",[v.INVALID_VALUE]:"Invalid value",[v.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]:"Cannot setup vue-devtools plugin",[v.NOT_INSLALLED_WITH_PROVIDE]:"Need to install with `provide` function",[v.NOT_COMPATIBLE_LEGACY_VUE_I18N]:"Not compatible legacy VueI18n.",[v.BRIDGE_SUPPORT_VUE_2_ONLY]:"vue-i18n-bridge support Vue 2.x only",[v.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]:"Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",[v.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]:"Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"},O=r.makeSymbol("__transrateVNode"),T=r.makeSymbol("__datetimeParts"),d=r.makeSymbol("__numberParts"),L=r.makeSymbol("__enableEmitter"),N=r.makeSymbol("__disableEmitter"),R=r.makeSymbol("__setPluralRules");r.makeSymbol("__intlifyMeta");const I=r.makeSymbol("__injectWithOption");/* eslint-disable @typescript-eslint/no-explicit-any */
/**
       * Transform flat json in obj to normal json in obj
       */
function P(e){// check obj
if(!r.isObject(e))return e;for(const a in e)// check key
if(r.hasOwn(e,a))// handle for normal json
if(a.includes(".")){// go to the last object
const t=a.split("."),l=t.length-1;let n=e;for(let e=0;e<l;e++)t[e]in n||(n[t[e]]={}),n=n[t[e]];// update last object value, delete old property
n[t[l]]=e[a],delete e[a],// recursive process value if value is also a object
r.isObject(n[t[l]])&&P(n[t[l]])}else// recursive process value if value is also a object
r.isObject(e[a])&&P(e[a]);return e}function k(e,a){const{messages:t,__i18n:l,messageResolver:n,flatJson:s}=a,o=r.isPlainObject(t)?t:r.isArray(l)?{}:{[e]:{}};// prettier-ignore
// handle messages for flat json
if(// merge locale messages of i18n custom block
r.isArray(l)&&l.forEach((e=>{if("locale"in e&&"resource"in e){const{locale:a,resource:t}=e;a?(o[a]=o[a]||{},h(t,o[a])):h(t,o)}else r.isString(e)&&h(JSON.parse(e),o)})),null==n&&s)for(const i in o)r.hasOwn(o,i)&&P(o[i]);return o}const F=e=>!r.isObject(e)||r.isArray(e)// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types;
function h(e,a){// src and des should both be objects, and non of then can be a array
if(F(e)||F(a))throw b(v.INVALID_VALUE);for(const t in e)r.hasOwn(e,t)&&(F(e[t])||F(a[t])?// replace with src[key] when:
// src[key] or des[key] is not a object, or
// src[key] or des[key] is a array
a[t]=e[t]:// src[key] and des[key] are both object, merge them
h(e[t],a[t]))}// eslint-disable-next-line @typescript-eslint/no-explicit-any
function y(e){return e.type}function A(e,a,t){let l=r.isObject(a.messages)?a.messages:{};"__i18nGlobal"in t&&(l=k(e.locale.value,{messages:l,__i18n:t.__i18nGlobal}));// merge locale messages
const n=Object.keys(l);// merge datetime formats
if(n.length&&n.forEach((a=>{e.mergeLocaleMessage(a,l[a])})),r.isObject(a.datetimeFormats)){const t=Object.keys(a.datetimeFormats);t.length&&t.forEach((t=>{e.mergeDateTimeFormat(t,a.datetimeFormats[t])}))}// merge number formats
if(r.isObject(a.numberFormats)){const t=Object.keys(a.numberFormats);t.length&&t.forEach((t=>{e.mergeNumberFormat(t,a.numberFormats[t])}))}}function S(e){return o.createVNode(o.Text,null,e,0)}/* eslint-enable @typescript-eslint/no-explicit-any */ /* eslint-disable @typescript-eslint/no-explicit-any */ // extend VNode interface
const M="__INTLIFY_META__";let C=0;function D(e){return(a,t,l,n)=>e(t,l,o.getCurrentInstance()||void 0,n)}// for Intlify DevTools
/**
       * Create composer interface factory
       *
       * @internal
       */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function U(e={},a){const{__root:t}=e,l=void 0===t;let n=!r.isBoolean(e.inheritLocale)||e.inheritLocale;const c=o.ref(// prettier-ignore
t&&n?t.locale.value:r.isString(e.locale)?e.locale:s.DEFAULT_LOCALE),u=o.ref(// prettier-ignore
t&&n?t.fallbackLocale.value:r.isString(e.fallbackLocale)||r.isArray(e.fallbackLocale)||r.isPlainObject(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:c.value),_=o.ref(k(c.value,e)),f=o.ref(r.isPlainObject(e.datetimeFormats)?e.datetimeFormats:{[c.value]:{}}),p=o.ref(r.isPlainObject(e.numberFormats)?e.numberFormats:{[c.value]:{}});// warning suppress options
// prettier-ignore
let E=t?t.missingWarn:!r.isBoolean(e.missingWarn)&&!r.isRegExp(e.missingWarn)||e.missingWarn,P=t?t.fallbackWarn:!r.isBoolean(e.fallbackWarn)&&!r.isRegExp(e.fallbackWarn)||e.fallbackWarn,F=t?t.fallbackRoot:!r.isBoolean(e.fallbackRoot)||e.fallbackRoot,A=!!e.fallbackFormat,U=r.isFunction(e.missing)?e.missing:null,W=r.isFunction(e.missing)?D(e.missing):null,w=r.isFunction(e.postTranslation)?e.postTranslation:null,j=t?t.warnHtmlMessage:!r.isBoolean(e.warnHtmlMessage)||e.warnHtmlMessage,V=!!e.escapeParameter;// prettier-ignore
// custom linked modifiers
// prettier-ignore
const H=t?t.modifiers:r.isPlainObject(e.modifiers)?e.modifiers:{};// pluralRules
let B,$=e.pluralRules||t&&t.pluralRules;// runtime context
// eslint-disable-next-line prefer-const
B=(()=>{l&&s.setFallbackContext(null);const a={version:i,locale:c.value,fallbackLocale:u.value,messages:_.value,modifiers:H,pluralRules:$,missing:null===W?void 0:W,missingWarn:E,fallbackWarn:P,fallbackFormat:A,unresolving:!0,postTranslation:null===w?void 0:w,warnHtmlMessage:j,escapeParameter:V,messageResolver:e.messageResolver,__meta:{framework:"vue"}};a.datetimeFormats=f.value,a.numberFormats=p.value,a.__datetimeFormatters=r.isPlainObject(B)?B.__datetimeFormatters:void 0,a.__numberFormatters=r.isPlainObject(B)?B.__numberFormatters:void 0,a.__v_emitter=r.isPlainObject(B)?B.__v_emitter:void 0;const t=s.createCoreContext(a);return l&&s.setFallbackContext(t),t})(),s.updateFallbackLocale(B,c.value,u.value);// locale
const x=o.computed({get:()=>c.value,set:e=>{c.value=e,B.locale=c.value}}),G=o.computed({get:()=>u.value,set:e=>{u.value=e,B.fallbackLocale=u.value,s.updateFallbackLocale(B,c.value,e)}}),Y=o.computed((()=>_.value)),X=o.computed((()=>f.value)),K=o.computed((()=>p.value)),z=(e,a,n,i,O,T)=>{// track reactive dependency
// NOTE: experimental !!
let d;c.value,u.value,_.value,f.value,p.value;try{s.setAdditionalMeta((()=>{const e=o.getCurrentInstance();let a=null;// eslint-disable-line @typescript-eslint/no-explicit-any
return e&&(a=y(e)[M])?{[M]:a}:null})()),l||(B.fallbackContext=t?s.getFallbackContext():void 0),d=e(B)}finally{s.setAdditionalMeta(null),l||(B.fallbackContext=void 0)}if(r.isNumber(d)&&d===s.NOT_REOSLVED){const[e,l]=a();if(t&&r.isString(e)&&(L=l,"translate"!==n||!L.resolvedMessage)){F&&(s.isTranslateFallbackWarn(P,e)||s.isTranslateMissingWarn(E,e))&&r.warn(g(m.FALLBACK_TO_ROOT,{key:e,type:n}));// for vue-devtools timeline event
{const{__v_emitter:a}=B;a&&F&&a.emit("fallback"/* FALBACK */,{type:n,key:e,to:"global",groupId:`${n}:${e}`})}}return t&&F?i(t):O(e)}if(T(d))return d;/* istanbul ignore next */throw b(v.UNEXPECTED_RETURN_TYPE);var L};// fallbackLocale
// t
function q(...e){return z((a=>Reflect.apply(s.translate,null,[a,...e])),(()=>s.parseTranslateArgs(...e)),"translate",(a=>Reflect.apply(a.t,a,[...e])),(e=>e),(e=>r.isString(e)))}// rt
const J={normalize:// for custom processor
function(e){return e.map((e=>r.isString(e)||r.isNumber(e)||r.isBoolean(e)?S(String(e)):e))},interpolate:e=>e,type:"vnode"};// getLocaleMessage
function Q(e){return _.value[e]||{}}// setLocaleMessage
// for debug
C++,// watch root locale & fallbackLocale
t&&r.inBrowser&&(o.watch(t.locale,(e=>{n&&(c.value=e,B.locale=e,s.updateFallbackLocale(B,c.value,u.value))})),o.watch(t.fallbackLocale,(e=>{n&&(u.value=e,B.fallbackLocale=e,s.updateFallbackLocale(B,c.value,u.value))})));// define basic composition API!
const Z={id:C,locale:x,fallbackLocale:G,get inheritLocale(){return n},set inheritLocale(e){n=e,e&&t&&(c.value=t.locale.value,u.value=t.fallbackLocale.value,s.updateFallbackLocale(B,c.value,u.value))},get availableLocales(){return Object.keys(_.value).sort()},messages:Y,get modifiers(){return H},get pluralRules(){return $||{}},get isGlobal(){return l},get missingWarn(){return E},set missingWarn(e){E=e,B.missingWarn=E},get fallbackWarn(){return P},set fallbackWarn(e){P=e,B.fallbackWarn=P},get fallbackRoot(){return F},set fallbackRoot(e){F=e},get fallbackFormat(){return A},set fallbackFormat(e){A=e,B.fallbackFormat=A},get warnHtmlMessage(){return j},set warnHtmlMessage(e){j=e,B.warnHtmlMessage=e},get escapeParameter(){return V},set escapeParameter(e){V=e,B.escapeParameter=e},t:q,getLocaleMessage:Q,setLocaleMessage:function(e,a){_.value[e]=a,B.messages=_.value}// mergeLocaleMessage
,mergeLocaleMessage:function(e,a){_.value[e]=_.value[e]||{},h(a,_.value[e]),B.messages=_.value}// getDateTimeFormat
,getPostTranslationHandler:// getPostTranslationHandler
function(){return r.isFunction(w)?w:null}// setPostTranslationHandler
,setPostTranslationHandler:function(e){w=e,B.postTranslation=e}// getMissingHandler
,getMissingHandler:function(){return U}// setMissingHandler
,setMissingHandler:function(e){null!==e&&(W=D(e)),U=e,B.missing=W},[R]:function(e){$=e,B.pluralRules=$}// te
};return Z.datetimeFormats=X,Z.numberFormats=K,Z.rt=function(...e){const[a,t,l]=e;if(l&&!r.isObject(l))throw b(v.INVALID_ARGUMENT);return q(a,t,r.assign({resolvedMessage:!0},l||{}))}// d
,Z.te=function(e,a){const t=Q(r.isString(a)?a:c.value);return null!==B.messageResolver(t,e)},Z.tm=// tm
function(e){const a=function(e){let a=null;const t=s.fallbackWithLocaleChain(B,u.value,c.value);for(let l=0;l<t.length;l++){const n=_.value[t[l]]||{},r=B.messageResolver(n,e);if(null!=r){a=r;break}}return a}(e);// prettier-ignore
return null!=a?a:t&&t.tm(e)||{}},Z.d=function(...e){return z((a=>Reflect.apply(s.datetime,null,[a,...e])),(()=>s.parseDateTimeArgs(...e)),"datetime format",(a=>Reflect.apply(a.d,a,[...e])),(()=>s.MISSING_RESOLVE_VALUE),(e=>r.isString(e)))}// n
,Z.n=function(...e){return z((a=>Reflect.apply(s.number,null,[a,...e])),(()=>s.parseNumberArgs(...e)),"number format",(a=>Reflect.apply(a.n,a,[...e])),(()=>s.MISSING_RESOLVE_VALUE),(e=>r.isString(e)))},Z.getDateTimeFormat=function(e){return f.value[e]||{}}// setDateTimeFormat
,Z.setDateTimeFormat=function(e,a){f.value[e]=a,B.datetimeFormats=f.value,s.clearDateTimeFormat(B,e,a)}// mergeDateTimeFormat
,Z.mergeDateTimeFormat=function(e,a){f.value[e]=r.assign(f.value[e]||{},a),B.datetimeFormats=f.value,s.clearDateTimeFormat(B,e,a)}// getNumberFormat
,Z.getNumberFormat=function(e){return p.value[e]||{}}// setNumberFormat
,Z.setNumberFormat=function(e,a){p.value[e]=a,B.numberFormats=p.value,s.clearNumberFormat(B,e,a)}// mergeNumberFormat
,Z.mergeNumberFormat=function(e,a){p.value[e]=r.assign(p.value[e]||{},a),B.numberFormats=p.value,s.clearNumberFormat(B,e,a)},Z[I]=e.__injectWithOption,Z[O]=// transrateVNode, using for `i18n-t` component
function(...e){return z((a=>{let t;const l=a;try{l.processor=J,t=Reflect.apply(s.translate,null,[l,...e])}finally{l.processor=null}return t}),(()=>s.parseTranslateArgs(...e)),"translate",(// eslint-disable-next-line @typescript-eslint/no-explicit-any
a=>a[O](...e)),(e=>[S(e)]),(e=>r.isArray(e)))}// numberParts, using for `i18n-n` component
,Z[T]=// datetimeParts, using for `i18n-d` component
function(...e){return z((a=>Reflect.apply(s.datetime,null,[a,...e])),(()=>s.parseDateTimeArgs(...e)),"datetime format",(// eslint-disable-next-line @typescript-eslint/no-explicit-any
a=>a[T](...e)),(()=>[]),(e=>r.isString(e)||r.isArray(e)))},Z[d]=function(...e){return z((a=>Reflect.apply(s.number,null,[a,...e])),(()=>s.parseNumberArgs(...e)),"number format",(// eslint-disable-next-line @typescript-eslint/no-explicit-any
a=>a[d](...e)),(()=>[]),(e=>r.isString(e)||r.isArray(e)))},Z[L]=e=>{B.__v_emitter=e},Z[N]=()=>{B.__v_emitter=void 0},Z}/* eslint-enable @typescript-eslint/no-explicit-any */ /* eslint-disable @typescript-eslint/no-explicit-any */
/**
       * Convert to I18n Composer Options from VueI18n Options
       *
       * @internal
       */
/**
       * create VueI18n interface factory
       *
       * @internal
       */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function W(e={},a){{const a=U(function(e){const a=r.isString(e.locale)?e.locale:s.DEFAULT_LOCALE,t=r.isString(e.fallbackLocale)||r.isArray(e.fallbackLocale)||r.isPlainObject(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:a,l=r.isFunction(e.missing)?e.missing:void 0,n=!r.isBoolean(e.silentTranslationWarn)&&!r.isRegExp(e.silentTranslationWarn)||!e.silentTranslationWarn,o=!r.isBoolean(e.silentFallbackWarn)&&!r.isRegExp(e.silentFallbackWarn)||!e.silentFallbackWarn,i=!r.isBoolean(e.fallbackRoot)||e.fallbackRoot,c=!!e.formatFallbackMessages,u=r.isPlainObject(e.modifiers)?e.modifiers:{},_=e.pluralizationRules,f=r.isFunction(e.postTranslation)?e.postTranslation:void 0,p=!r.isString(e.warnHtmlInMessage)||"off"!==e.warnHtmlInMessage,v=!!e.escapeParameterHtml,b=!r.isBoolean(e.sync)||e.sync;e.formatter&&r.warn(g(m.NOT_SUPPORTED_FORMATTER)),e.preserveDirectiveContent&&r.warn(g(m.NOT_SUPPORTED_PRESERVE_DIRECTIVE));let E=e.messages;if(r.isPlainObject(e.sharedMessages)){const a=e.sharedMessages;E=Object.keys(a).reduce(((e,t)=>{const l=e[t]||(e[t]={});return r.assign(l,a[t]),e}),E||{})}const{__i18n:O,__root:T,__injectWithOption:d}=e,L=e.datetimeFormats,N=e.numberFormats;return{locale:a,fallbackLocale:t,messages:E,flatJson:e.flatJson,datetimeFormats:L,numberFormats:N,missing:l,missingWarn:n,fallbackWarn:o,fallbackRoot:i,fallbackFormat:c,modifiers:u,pluralRules:_,postTranslation:f,warnHtmlMessage:p,escapeParameter:v,messageResolver:e.messageResolver,inheritLocale:b,__i18n:O,__root:T,__injectWithOption:d}}(e)),t={// id
id:a.id,// locale
get locale(){return a.locale.value},set locale(e){a.locale.value=e},// fallbackLocale
get fallbackLocale(){return a.fallbackLocale.value},set fallbackLocale(e){a.fallbackLocale.value=e},// messages
get messages(){return a.messages.value},// datetimeFormats
get datetimeFormats(){return a.datetimeFormats.value},// numberFormats
get numberFormats(){return a.numberFormats.value},// availableLocales
get availableLocales(){return a.availableLocales},// formatter
get formatter(){// dummy
return r.warn(g(m.NOT_SUPPORTED_FORMATTER)),{interpolate:()=>[]}},set formatter(e){r.warn(g(m.NOT_SUPPORTED_FORMATTER))},// missing
get missing(){return a.getMissingHandler()},set missing(e){a.setMissingHandler(e)},// silentTranslationWarn
get silentTranslationWarn(){return r.isBoolean(a.missingWarn)?!a.missingWarn:a.missingWarn},set silentTranslationWarn(e){a.missingWarn=r.isBoolean(e)?!e:e},// silentFallbackWarn
get silentFallbackWarn(){return r.isBoolean(a.fallbackWarn)?!a.fallbackWarn:a.fallbackWarn},set silentFallbackWarn(e){a.fallbackWarn=r.isBoolean(e)?!e:e},// modifiers
get modifiers(){return a.modifiers},// formatFallbackMessages
get formatFallbackMessages(){return a.fallbackFormat},set formatFallbackMessages(e){a.fallbackFormat=e},// postTranslation
get postTranslation(){return a.getPostTranslationHandler()},set postTranslation(e){a.setPostTranslationHandler(e)},// sync
get sync(){return a.inheritLocale},set sync(e){a.inheritLocale=e},// warnInHtmlMessage
get warnHtmlInMessage(){return a.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(e){a.warnHtmlMessage="off"!==e},// escapeParameterHtml
get escapeParameterHtml(){return a.escapeParameter},set escapeParameterHtml(e){a.escapeParameter=e},// preserveDirectiveContent
get preserveDirectiveContent(){return r.warn(g(m.NOT_SUPPORTED_PRESERVE_DIRECTIVE)),!0},set preserveDirectiveContent(e){r.warn(g(m.NOT_SUPPORTED_PRESERVE_DIRECTIVE))},// pluralizationRules
get pluralizationRules(){return a.pluralRules||{}},// for internal
__composer:a,// t
t(...e){const[t,l,n]=e,s={};let o=null,i=null;if(!r.isString(t))throw b(v.INVALID_ARGUMENT);const c=t;// return composer.t(key, (list || named || {}) as any, options)
return r.isString(l)?s.locale=l:r.isArray(l)?o=l:r.isPlainObject(l)&&(i=l),r.isArray(n)?o=n:r.isPlainObject(n)&&(i=n),Reflect.apply(a.t,a,[c,o||i||{},s])},rt:(...e)=>Reflect.apply(a.rt,a,[...e]),// tc
tc(...e){const[t,l,n]=e,s={plural:1};let o=null,i=null;if(!r.isString(t))throw b(v.INVALID_ARGUMENT);const c=t;// return composer.t(key, (list || named || {}) as any, options)
return r.isString(l)?s.locale=l:r.isNumber(l)?s.plural=l:r.isArray(l)?o=l:r.isPlainObject(l)&&(i=l),r.isString(n)?s.locale=n:r.isArray(n)?o=n:r.isPlainObject(n)&&(i=n),Reflect.apply(a.t,a,[c,o||i||{},s])},// te
te:(e,t)=>a.te(e,t),// tm
tm:e=>a.tm(e),// getLocaleMessage
getLocaleMessage:e=>a.getLocaleMessage(e),// setLocaleMessage
setLocaleMessage(e,t){a.setLocaleMessage(e,t)},// mergeLocaleMessage
mergeLocaleMessage(e,t){a.mergeLocaleMessage(e,t)},// d
d:(...e)=>Reflect.apply(a.d,a,[...e]),// getDateTimeFormat
getDateTimeFormat:e=>a.getDateTimeFormat(e),// setDateTimeFormat
setDateTimeFormat(e,t){a.setDateTimeFormat(e,t)},// mergeDateTimeFormat
mergeDateTimeFormat(e,t){a.mergeDateTimeFormat(e,t)},// n
n:(...e)=>Reflect.apply(a.n,a,[...e]),// getNumberFormat
getNumberFormat:e=>a.getNumberFormat(e),// setNumberFormat
setNumberFormat(e,t){a.setNumberFormat(e,t)},// mergeNumberFormat
mergeNumberFormat(e,t){a.mergeNumberFormat(e,t)},// getChoiceIndex
// eslint-disable-next-line @typescript-eslint/no-unused-vars
getChoiceIndex:(e,a)=>(r.warn(g(m.NOT_SUPPORTED_GET_CHOICE_INDEX)),-1),// for internal
__onComponentInstanceCreated(a){const{componentInstanceCreatedListener:l}=e;l&&l(a,t)}};// defines VueI18n
return t.__enableEmitter=e=>{const t=a;t[L]&&t[L](e)},t.__disableEmitter=()=>{const e=a;e[N]&&e[N]()},t}}/* eslint-enable @typescript-eslint/no-explicit-any */const w={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,// NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
validator:e/* ComponetI18nScope */=>"parent"===e||"global"===e,default:"parent"/* ComponetI18nScope */},i18n:{type:Object}};// eslint-disable-next-line @typescript-eslint/no-explicit-any
function j(e){return o.Fragment}
/**
       * Translation Component
       *
       * @remarks
       * See the following items for property about details
       *
       * @VueI18nSee [TranslationProps](component#translationprops)
       * @VueI18nSee [BaseFormatProps](component#baseformatprops)
       * @VueI18nSee [Component Interpolation](../guide/advanced/component)
       *
       * @example
       * ```html
       * <div id="app">
       *   <!-- ... -->
       *   <i18n path="term" tag="label" for="tos">
       *     <a :href="url" target="_blank">{{ $t('tos') }}</a>
       *   </i18n>
       *   <!-- ... -->
       * </div>
       * ```
       * ```js
       * import { createApp } from 'vue'
       * import { createI18n } from 'vue-i18n'
       *
       * const messages = {
       *   en: {
       *     tos: 'Term of Service',
       *     term: 'I accept xxx {0}.'
       *   },
       *   ja: {
       *     tos: '利用規約',
       *     term: '私は xxx の{0}に同意します。'
       *   }
       * }
       *
       * const i18n = createI18n({
       *   locale: 'en',
       *   messages
       * })
       *
       * const app = createApp({
       *   data: {
       *     url: '/term'
       *   }
       * }).use(i18n).mount('#app')
       * ```
       *
       * @VueI18nComponent
       */const V=/* defineComponent */{/* eslint-disable */name:"i18n-t",props:r.assign({keypath:{type:String,required:!0},plural:{type:[Number,String],// eslint-disable-next-line @typescript-eslint/no-explicit-any
validator:e=>r.isNumber(e)||!isNaN(e)}},w),/* eslint-enable */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
setup(e,a){const{slots:t,attrs:l}=a,n=e.i18n||z({useScope:e.scope,__useComponent:!0});// NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
return()=>{const s=Object.keys(t).filter((e=>"_"!==e)),i={};e.locale&&(i.locale=e.locale),void 0!==e.plural&&(i.plural=r.isString(e.plural)?+e.plural:e.plural);const c=function(// eslint-disable-next-line @typescript-eslint/no-explicit-any
{slots:e},// SetupContext,
a){return 1===a.length&&"default"===a[0]?(e.default?e.default():[]).reduce(((e,a)=>[...e,...r.isArray(a.children)?a.children:[a]]),[]):a.reduce(((a,t)=>{const l=e[t];return l&&(a[t]=l()),a}),{})}(a,s),u=n[O](e.keypath,c,i),m=r.assign({},l),_=r.isString(e.tag)||r.isObject(e.tag)?e.tag:j();// eslint-disable-next-line @typescript-eslint/no-explicit-any
return o.h(_,m,u)}}};function H(e,a,t,l){const{slots:n,attrs:s}=a;return()=>{const a={part:!0};let i={};e.locale&&(a.locale=e.locale),r.isString(e.format)?a.key=e.format:r.isObject(e.format)&&(// eslint-disable-next-line @typescript-eslint/no-explicit-any
r.isString(e.format.key)&&(// eslint-disable-next-line @typescript-eslint/no-explicit-any
a.key=e.format.key),// Filter out number format options only
i=Object.keys(e.format).reduce(((a,l)=>t.includes(l)?r.assign({},a,{[l]:e.format[l]}):a),{}));const c=l(e.value,a,i);let u=[a.key];r.isArray(c)?u=c.map(((e,a)=>{const t=n[e.type],l=t?t({[e.type]:e.value,index:a,parts:c}):[e.value];var s;return s=l,r.isArray(s)&&!r.isString(s[0])&&(l[0].key=`${e.type}-${a}`),l})):r.isString(c)&&(u=[c]);const m=r.assign({},s),_=r.isString(e.tag)||r.isObject(e.tag)?e.tag:j();return o.h(_,m,u)}}
/**
       * Number Format Component
       *
       * @remarks
       * See the following items for property about details
       *
       * @VueI18nSee [FormattableProps](component#formattableprops)
       * @VueI18nSee [BaseFormatProps](component#baseformatprops)
       * @VueI18nSee [Custom Formatting](../guide/essentials/number#custom-formatting)
       *
       * @VueI18nDanger
       * Not supported IE, due to no support `Intl.NumberFormat#formatToParts` in [IE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts)
       *
       * If you want to use it, you need to use [polyfill](https://github.com/formatjs/formatjs/tree/main/packages/intl-numberformat)
       *
       * @VueI18nComponent
       */const B=/* defineComponent */{/* eslint-disable */name:"i18n-n",props:r.assign({value:{type:Number,required:!0},format:{type:[String,Object]}},w),/* eslint-enable */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
setup(e,a){const t=e.i18n||z({useScope:"parent",__useComponent:!0});return H(e,a,s.NUMBER_FORMAT_OPTIONS_KEYS,((...e)=>// eslint-disable-next-line @typescript-eslint/no-explicit-any
t[d](...e)))}},$=/*defineComponent */{/* eslint-disable */name:"i18n-d",props:r.assign({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},w),/* eslint-enable */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
setup(e,a){const t=e.i18n||z({useScope:"parent",__useComponent:!0});return H(e,a,s.DATETIME_FORMAT_OPTIONS_KEYS,((...e)=>// eslint-disable-next-line @typescript-eslint/no-explicit-any
t[T](...e)))}};
/**
       * Datetime Format Component
       *
       * @remarks
       * See the following items for property about details
       *
       * @VueI18nSee [FormattableProps](component#formattableprops)
       * @VueI18nSee [BaseFormatProps](component#baseformatprops)
       * @VueI18nSee [Custom Formatting](../guide/essentials/datetime#custom-formatting)
       *
       * @VueI18nDanger
       * Not supported IE, due to no support `Intl.DateTimeFormat#formatToParts` in [IE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts)
       *
       * If you want to use it, you need to use [polyfill](https://github.com/formatjs/formatjs/tree/main/packages/intl-datetimeformat)
       *
       * @VueI18nComponent
       */function x(e){const a=a=>{const{instance:t,modifiers:l,value:n}=a;/* istanbul ignore if */if(!t||!t.$)throw b(v.UNEXPECTED_ERROR);const s=function(e,a){const t=e;if("composition"===e.mode)return t.__getInstance(a)||e.global;{const l=t.__getInstance(a);return null!=l?l.__composer:e.global.__composer}}(e,t.$);l.preserve&&r.warn(g(m.NOT_SUPPORTED_PRESERVE));const o=G(n);return[Reflect.apply(s.t,s,[...Y(o)]),s]};return{created:(t,l)=>{const[n,s]=a(l);r.inBrowser&&e.global===s&&(// global scope only
t.__i18nWatcher=o.watch(s.locale,(()=>{l.instance&&l.instance.$forceUpdate()}))),t.__composer=s,t.textContent=n},unmounted:e=>{r.inBrowser&&e.__i18nWatcher&&(e.__i18nWatcher(),e.__i18nWatcher=void 0,delete e.__i18nWatcher),e.__composer&&(e.__composer=void 0,delete e.__composer)},beforeUpdate:(e,{value:a})=>{if(e.__composer){const t=e.__composer,l=G(a);e.textContent=Reflect.apply(t.t,t,[...Y(l)])}},getSSRProps:e=>{const[t]=a(e);return{textContent:t}}}}function G(e){if(r.isString(e))return{path:e};if(r.isPlainObject(e)){if(!("path"in e))throw b(v.REQUIRED_VALUE,"path");return e}throw b(v.INVALID_VALUE)}function Y(e){const{path:a,locale:t,args:l,choice:n,plural:s}=e,o={},i=l||{};return r.isString(t)&&(o.locale=t),r.isNumber(n)&&(o.plural=n),r.isNumber(s)&&(o.plural=s),[a,i,o]}function X(e,a){e.locale=a.locale||e.locale,e.fallbackLocale=a.fallbackLocale||e.fallbackLocale,e.missing=a.missing||e.missing,e.silentTranslationWarn=a.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=a.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=a.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=a.postTranslation||e.postTranslation,e.warnHtmlInMessage=a.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=a.escapeParameterHtml||e.escapeParameterHtml,e.sync=a.sync||e.sync,e.__composer[R](a.pluralizationRules||e.pluralizationRules);const t=k(e.locale,{messages:a.messages,__i18n:a.__i18n});return Object.keys(t).forEach((a=>e.mergeLocaleMessage(a,t[a]))),a.datetimeFormats&&Object.keys(a.datetimeFormats).forEach((t=>e.mergeDateTimeFormat(t,a.datetimeFormats[t]))),a.numberFormats&&Object.keys(a.numberFormats).forEach((t=>e.mergeNumberFormat(t,a.numberFormats[t]))),e}
/**
       * Injection key for {@link useI18n}
       *
       * @remarks
       * The global injection key for I18n instances with `useI18n`. this injection key is used in Web Components.
       * Specify the i18n instance created by {@link createI18n} together with `provide` function.
       *
       * @VueI18nGeneral
       */const K=r.makeSymbol("global-vue-i18n");// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function z(e={}){const a=o.getCurrentInstance();if(null==a)throw b(v.MUST_BE_CALL_SETUP_TOP);if(!a.isCE&&null!=a.appContext.app&&!a.appContext.app.__VUE_I18N_SYMBOL__)throw b(v.NOT_INSLALLED);const t=function(e){{const a=o.inject(e.isCE?K:e.appContext.app.__VUE_I18N_SYMBOL__);/* istanbul ignore if */if(!a)throw b(e.isCE?v.NOT_INSLALLED_WITH_PROVIDE:v.UNEXPECTED_ERROR);return a}}// eslint-disable-next-line @typescript-eslint/no-explicit-any
(a),l=function(e){// prettier-ignore
return"composition"===e.mode?e.global:e.global.__composer}(t),n=y(a),i=function(e,a){// prettier-ignore
return r.isEmptyObject(e)?"__i18n"in a?"local":"global":e.useScope?e.useScope:"local"}(e,n);// eslint-disable-next-line @typescript-eslint/no-explicit-any
if("legacy"===t.mode&&!e.__useComponent){if(!t.allowComposition)throw b(v.NOT_AVAILABLE_IN_LEGACY_MODE);return function(e,a,t,l={}){const n="local"===a,i=o.shallowRef(null);if(n&&e.proxy&&!e.proxy.$options.i18n&&!e.proxy.$options.__i18n)throw b(v.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const c=!r.isBoolean(l.inheritLocale)||l.inheritLocale,u=o.ref(// prettier-ignore
n&&c?t.locale.value:r.isString(l.locale)?l.locale:s.DEFAULT_LOCALE),m=o.ref(// prettier-ignore
n&&c?t.fallbackLocale.value:r.isString(l.fallbackLocale)||r.isArray(l.fallbackLocale)||r.isPlainObject(l.fallbackLocale)||!1===l.fallbackLocale?l.fallbackLocale:u.value),_=o.ref(k(u.value,l)),g=o.ref(r.isPlainObject(l.datetimeFormats)?l.datetimeFormats:{[u.value]:{}}),f=o.ref(r.isPlainObject(l.numberFormats)?l.numberFormats:{[u.value]:{}}),p=n?t.missingWarn:!r.isBoolean(l.missingWarn)&&!r.isRegExp(l.missingWarn)||l.missingWarn,E=n?t.fallbackWarn:!r.isBoolean(l.fallbackWarn)&&!r.isRegExp(l.fallbackWarn)||l.fallbackWarn,O=n?t.fallbackRoot:!r.isBoolean(l.fallbackRoot)||l.fallbackRoot,T=!!l.fallbackFormat,d=r.isFunction(l.missing)?l.missing:null,L=r.isFunction(l.postTranslation)?l.postTranslation:null,N=n?t.warnHtmlMessage:!r.isBoolean(l.warnHtmlMessage)||l.warnHtmlMessage,R=!!l.escapeParameter,I=n?t.modifiers:r.isPlainObject(l.modifiers)?l.modifiers:{},P=l.pluralRules||n&&t.pluralRules;// track reactivity
function F(){return[u.value,m.value,_.value,g.value,f.value]}// locale
const h=o.computed({get:()=>i.value?i.value.locale.value:u.value,set:e=>{i.value&&(i.value.locale.value=e),u.value=e}}),y=o.computed({get:()=>i.value?i.value.fallbackLocale.value:m.value,set:e=>{i.value&&(i.value.fallbackLocale.value=e),m.value=e}}),A=o.computed((()=>i.value?i.value.messages.value:_.value)),S=o.computed((()=>g.value)),M=o.computed((()=>f.value));// fallbackLocale
function C(){return i.value?i.value.getPostTranslationHandler():L}function D(e){i.value&&i.value.setPostTranslationHandler(e)}function U(){return i.value?i.value.getMissingHandler():d}function W(e){i.value&&i.value.setMissingHandler(e)}function w(e){return F(),e()}function j(...e){return i.value?w((()=>Reflect.apply(i.value.t,null,[...e]))):w((()=>""))}function V(...e){return i.value?Reflect.apply(i.value.rt,null,[...e]):""}function H(...e){return i.value?w((()=>Reflect.apply(i.value.d,null,[...e]))):w((()=>""))}function B(...e){return i.value?w((()=>Reflect.apply(i.value.n,null,[...e]))):w((()=>""))}function $(e){return i.value?i.value.tm(e):{}}function x(e,a){return!!i.value&&i.value.te(e,a)}function G(e){return i.value?i.value.getLocaleMessage(e):{}}function Y(e,a){i.value&&(i.value.setLocaleMessage(e,a),_.value[e]=a)}function X(e,a){i.value&&i.value.mergeLocaleMessage(e,a)}function K(e){return i.value?i.value.getDateTimeFormat(e):{}}function z(e,a){i.value&&(i.value.setDateTimeFormat(e,a),g.value[e]=a)}function q(e,a){i.value&&i.value.mergeDateTimeFormat(e,a)}function J(e){return i.value?i.value.getNumberFormat(e):{}}function Q(e,a){i.value&&(i.value.setNumberFormat(e,a),f.value[e]=a)}function Z(e,a){i.value&&i.value.mergeNumberFormat(e,a)}const ee={get id(){return i.value?i.value.id:-1},locale:h,fallbackLocale:y,messages:A,datetimeFormats:S,numberFormats:M,get inheritLocale(){return i.value?i.value.inheritLocale:c},set inheritLocale(e){i.value&&(i.value.inheritLocale=e)},get availableLocales(){return i.value?i.value.availableLocales:Object.keys(_.value)},get modifiers(){return i.value?i.value.modifiers:I},get pluralRules(){return i.value?i.value.pluralRules:P},get isGlobal(){return!!i.value&&i.value.isGlobal},get missingWarn(){return i.value?i.value.missingWarn:p},set missingWarn(e){i.value&&(i.value.missingWarn=e)},get fallbackWarn(){return i.value?i.value.fallbackWarn:E},set fallbackWarn(e){i.value&&(i.value.missingWarn=e)},get fallbackRoot(){return i.value?i.value.fallbackRoot:O},set fallbackRoot(e){i.value&&(i.value.fallbackRoot=e)},get fallbackFormat(){return i.value?i.value.fallbackFormat:T},set fallbackFormat(e){i.value&&(i.value.fallbackFormat=e)},get warnHtmlMessage(){return i.value?i.value.warnHtmlMessage:N},set warnHtmlMessage(e){i.value&&(i.value.warnHtmlMessage=e)},get escapeParameter(){return i.value?i.value.escapeParameter:R},set escapeParameter(e){i.value&&(i.value.escapeParameter=e)},t:j,getPostTranslationHandler:C,setPostTranslationHandler:D,getMissingHandler:U,setMissingHandler:W,rt:V,d:H,n:B,tm:$,te:x,getLocaleMessage:G,setLocaleMessage:Y,mergeLocaleMessage:X,getDateTimeFormat:K,setDateTimeFormat:z,mergeDateTimeFormat:q,getNumberFormat:J,setNumberFormat:Q,mergeNumberFormat:Z};function ae(e){e.locale.value=u.value,e.fallbackLocale.value=m.value,Object.keys(_.value).forEach((a=>{e.mergeLocaleMessage(a,_.value[a])})),Object.keys(g.value).forEach((a=>{e.mergeDateTimeFormat(a,g.value[a])})),Object.keys(f.value).forEach((a=>{e.mergeNumberFormat(a,f.value[a])})),e.escapeParameter=R,e.fallbackFormat=T,e.fallbackRoot=O,e.fallbackWarn=E,e.missingWarn=p,e.warnHtmlMessage=N}return o.onBeforeMount((()=>{if(null==e.proxy||null==e.proxy.$i18n)throw b(v.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);// eslint-disable-next-line @typescript-eslint/no-explicit-any
const t=i.value=e.proxy.$i18n.__composer;"global"===a?(u.value=t.locale.value,m.value=t.fallbackLocale.value,_.value=t.messages.value,g.value=t.datetimeFormats.value,f.value=t.numberFormats.value):n&&ae(t)})),ee}(a,i,l,e)}if("global"===i)return A(l,e,n),l;if("parent"===i){// eslint-disable-next-line @typescript-eslint/no-explicit-any
let n=function(e,a,t=!1){let l=null;const n=a.root;let r=a.parent;for(;null!=r;){const a=e;if("composition"===e.mode)l=a.__getInstance(r);else{const e=a.__getInstance(r);null!=e&&(l=e.__composer,t&&l&&!l[I]&&(l=null))}if(null!=l)break;if(n===r)break;r=r.parent}return l}(t,a,e.__useComponent);return null==n&&(r.warn(g(m.NOT_FOUND_PARENT_SCOPE)),n=l),n}const c=t;let u=c.__getInstance(a);if(null==u){const t=r.assign({},e);"__i18n"in n&&(t.__i18n=n.__i18n),l&&(t.__root=l),u=U(t),function(e,a,t){o.onMounted((()=>{}),a),o.onUnmounted((()=>{e.__deleteInstance(a)}),a)}(c,a),c.__setInstance(a,u)}return u}
/**
       * Cast to VueI18n legacy compatible type
       *
       * @remarks
       * This API is provided only with [vue-i18n-bridge](https://vue-i18n.intlify.dev/guide/migration/ways.html#what-is-vue-i18n-bridge).
       *
       * The purpose of this function is to convert an {@link I18n} instance created with {@link createI18n | createI18n(legacy: true)} into a `vue-i18n@v8.x` compatible instance of `new VueI18n` in a TypeScript environment.
       *
       * @param i18n - An instance of {@link I18n}
       * @returns A i18n instance which is casted to {@link VueI18n} type
       *
       * @VueI18nTip
       * :new: provided by **vue-i18n-bridge only**
       *
       * @VueI18nGeneral
       */const q=["locale","fallbackLocale","availableLocales"],J=["t","rt","d","n","tm"];// register message compiler at vue-i18n
s.registerMessageCompiler(s.compileToFunction),// register message resolver at vue-i18n
s.registerMessageResolver(s.resolveValue),// register fallback locale at vue-i18n
s.registerLocaleFallbacker(s.fallbackWithLocaleChain);// NOTE: experimental !!
{const e=r.getGlobalThis();e.__INTLIFY__=!0,s.setDevToolsHook(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}a.DatetimeFormat=$,a.I18nInjectionKey=K,a.NumberFormat=B,a.Translation=V,a.VERSION=i,a.castToVueI18n=e=>{if(!("__VUE_I18N_BRIDGE__"in e))throw b(v.NOT_COMPATIBLE_LEGACY_VUE_I18N);return e},e("c",a.createI18n=function(e={},a){// prettier-ignore
const t=!r.isBoolean(e.legacy)||e.legacy,l=!r.isBoolean(e.globalInjection)||e.globalInjection,n=!t||!!e.allowComposition,s=new Map,[i,c]=function(e,a,t){const l=o.effectScope();{const t=a?l.run((()=>W(e))):l.run((()=>U(e)));if(null==t)throw b(v.UNEXPECTED_ERROR);return[l,t]}}(e,t),u=r.makeSymbol("vue-i18n");// prettier-ignore
{const e={// mode
get mode(){return t?"legacy":"composition"},// allowComposition
get allowComposition(){return n},// install plugin
async install(a,...n){// setup global provider
a.__VUE_I18N_SYMBOL__=u,a.provide(a.__VUE_I18N_SYMBOL__,e),// global method and properties injection for Composition API
!t&&l&&function(e,a){const t=Object.create(null);q.forEach((e=>{const l=Object.getOwnPropertyDescriptor(a,e);if(!l)throw b(v.UNEXPECTED_ERROR);const n=o.isRef(l.value)?{get:()=>l.value.value,// eslint-disable-next-line @typescript-eslint/no-explicit-any
set(e){l.value.value=e}}:{get:()=>l.get&&l.get()};Object.defineProperty(t,e,n)})),e.config.globalProperties.$i18n=t,J.forEach((t=>{const l=Object.getOwnPropertyDescriptor(a,t);if(!l||!l.value)throw b(v.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${t}`,l)}))}(a,e.global),function(e,a,...t){const l=r.isPlainObject(t[0])?t[0]:{},n=!!l.useI18nComponentName,s=!r.isBoolean(l.globalInstall)||l.globalInstall;s&&n&&r.warn(g(m.COMPONENT_NAME_LEGACY_COMPATIBLE,{name:V.name})),s&&(// install components
e.component(n?"i18n":V.name,V),e.component(B.name,B),e.component($.name,$)),e.directive("t",x(a))}
/**
       * Supports compatibility for legacy vue-i18n APIs
       * This mixin is used when we use vue-i18n@v9.x or later
       */(a,e,...n),// setup mixin for Legacy API
t&&a.mixin(function(e,a,t){return{beforeCreate(){const l=o.getCurrentInstance();/* istanbul ignore if */if(!l)throw b(v.UNEXPECTED_ERROR);const n=this.$options;if(n.i18n){const t=n.i18n;n.__i18n&&(t.__i18n=n.__i18n),t.__root=a,this===this.$root?this.$i18n=X(e,t):(t.__injectWithOption=!0,this.$i18n=W(t))}else n.__i18n?this===this.$root?this.$i18n=X(e,n):this.$i18n=W({__i18n:n.__i18n,__injectWithOption:!0,__root:a}):// set global
this.$i18n=e;n.__i18nGlobal&&A(a,n,n),e.__onComponentInstanceCreated(this.$i18n),t.__setInstance(l,this.$i18n),// defines vue-i18n legacy APIs
this.$t=(...e)=>this.$i18n.t(...e),this.$rt=(...e)=>this.$i18n.rt(...e),this.$tc=(...e)=>this.$i18n.tc(...e),this.$te=(e,a)=>this.$i18n.te(e,a),this.$d=(...e)=>this.$i18n.d(...e),this.$n=(...e)=>this.$i18n.n(...e),this.$tm=e=>this.$i18n.tm(e)},mounted(){},unmounted(){const e=o.getCurrentInstance();/* istanbul ignore if */if(!e)throw b(v.UNEXPECTED_ERROR);delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,t.__deleteInstance(e),delete this.$i18n}}}(c,c.__composer,e));// release global scope
const s=a.unmount;a.unmount=()=>{e.dispose(),s()}},// global accessor
get global(){return c},dispose(){i.stop()},// @internal
__instances:s,// @internal
__getInstance:function(e){return s.get(e)||null},// @internal
__setInstance:function(e,a){s.set(e,a)},// @internal
__deleteInstance:function(e){s.delete(e)}};return e}}),a.useI18n=z,a.vTDirective=x}}}));
//# sourceMappingURL=vue-i18n-legacy-60f56202.js.map
