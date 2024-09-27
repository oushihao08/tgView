import{b as e,e as t,q as a,n as s,o as r,A as n,g as o,E as l,_ as i,w as u}from"./index-8763a24f.js";import{u as c}from"./index-dea076ad.js";import{k as p,c as d,ad as f,Y as h,M as y,N as g,P as v,u as k,Z as m,Q as x,O as $,U as b,$ as w,R as N,S as I,W as S}from"./vue-10f3042e.js";const D=e({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:e=>e>=0&&e<=100},status:{type:String,default:"",values:["","success","exception","warning"]},indeterminate:{type:Boolean,default:!1},duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:t(String),default:"round"},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:t([String,Array,Function]),default:""},format:{type:t(Function),default:e=>`${e}%`}}),T=["aria-valuenow"],W={viewBox:"0 0 100 100"},B=["d","stroke","stroke-width"],F=["d","stroke","opacity","stroke-linecap","stroke-width"],_={key:0},j=p({name:"ElProgress"});const E=u(i(p({...j,props:D,setup(e){const t=e,i={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},u=c("progress"),p=d((()=>({width:`${t.percentage}%`,animationDuration:`${t.duration}s`,backgroundColor:R(t.percentage)}))),D=d((()=>(t.strokeWidth/t.width*100).toFixed(1))),j=d((()=>["circle","dashboard"].includes(t.type)?Number.parseInt(""+(50-Number.parseFloat(D.value)/2),10):0)),E=d((()=>{const e=j.value,a="dashboard"===t.type;return`\n          M 50 50\n          m 0 ${a?"":"-"}${e}\n          a ${e} ${e} 0 1 1 0 ${a?"-":""}${2*e}\n          a ${e} ${e} 0 1 1 0 ${a?"":"-"}${2*e}\n          `})),M=d((()=>2*Math.PI*j.value)),P=d((()=>"dashboard"===t.type?.75:1)),A=d((()=>`${-1*M.value*(1-P.value)/2}px`)),L=d((()=>({strokeDasharray:`${M.value*P.value}px, ${M.value}px`,strokeDashoffset:A.value}))),q=d((()=>({strokeDasharray:`${M.value*P.value*(t.percentage/100)}px, ${M.value}px`,strokeDashoffset:A.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"}))),z=d((()=>{let e;return e=t.color?R(t.percentage):i[t.status]||i.default,e})),C=d((()=>"warning"===t.status?a:"line"===t.type?"success"===t.status?s:r:"success"===t.status?n:o)),O=d((()=>"line"===t.type?12+.4*t.strokeWidth:.111111*t.width+2)),Q=d((()=>t.format(t.percentage)));const R=e=>{var a;const{color:s}=t;if(f(s))return s(e);if(h(s))return s;{const t=function(e){const t=100/e.length;return e.map(((e,a)=>h(e)?{color:e,percentage:(a+1)*t}:e)).sort(((e,t)=>e.percentage-t.percentage))}(s);for(const a of t)if(a.percentage>e)return a.color;return null==(a=t[t.length-1])?void 0:a.color}};return(e,t)=>(y(),g("div",{class:v([k(u).b(),k(u).m(e.type),k(u).is(e.status),{[k(u).m("without-text")]:!e.showText,[k(u).m("text-inside")]:e.textInside}]),role:"progressbar","aria-valuenow":e.percentage,"aria-valuemin":"0","aria-valuemax":"100"},["line"===e.type?(y(),g("div",{key:0,class:v(k(u).b("bar"))},[m("div",{class:v(k(u).be("bar","outer")),style:x({height:`${e.strokeWidth}px`})},[m("div",{class:v([k(u).be("bar","inner"),{[k(u).bem("bar","inner","indeterminate")]:e.indeterminate}]),style:x(k(p))},[(e.showText||e.$slots.default)&&e.textInside?(y(),g("div",{key:0,class:v(k(u).be("bar","innerText"))},[$(e.$slots,"default",{percentage:e.percentage},(()=>[m("span",null,b(k(Q)),1)]))],2)):w("v-if",!0)],6)],6)],2)):(y(),g("div",{key:1,class:v(k(u).b("circle")),style:x({height:`${e.width}px`,width:`${e.width}px`})},[(y(),g("svg",W,[m("path",{class:v(k(u).be("circle","track")),d:k(E),stroke:`var(${k(u).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-width":k(D),fill:"none",style:x(k(L))},null,14,B),m("path",{class:v(k(u).be("circle","path")),d:k(E),stroke:k(z),fill:"none",opacity:e.percentage?1:0,"stroke-linecap":e.strokeLinecap,"stroke-width":k(D),style:x(k(q))},null,14,F)]))],6)),!e.showText&&!e.$slots.default||e.textInside?w("v-if",!0):(y(),g("div",{key:2,class:v(k(u).e("text")),style:x({fontSize:`${k(O)}px`})},[$(e.$slots,"default",{percentage:e.percentage},(()=>[e.status?(y(),N(k(l),{key:1},{default:I((()=>[(y(),N(S(k(C))))])),_:1})):(y(),g("span",_,b(k(Q)),1))]))],6))],10,T))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/progress/src/progress.vue"]]));export{E};
//# sourceMappingURL=index-ef6f53b9.js.map
