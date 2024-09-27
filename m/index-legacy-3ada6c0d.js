System.register(["./index-legacy-7f75df50.js","./index-legacy-51f63e39.js","./index-legacy-06c116be.js","./index-legacy-a84d9ef3.js","./index-legacy-1cf689c4.js","./vue-legacy-ad0cdcd9.js"],(function(t,e){"use strict";var r,o,a,n,i,s,c,l,h,u,f,d,g,b,p,v,m,y,k,x,w,M,S,A,B,H,R,F,N,_,$,V,j,E;return{setters:[t=>{r=t.b,o=t.l,a=t.E,n=t._,i=t.w,s=t.d},t=>{c=t.u},t=>{l=t.k,h=t.u},t=>{u=t.u},t=>{f=t.b,d=t.c,g=t.d,b=t.i},t=>{p=t.c,v=t.i,m=t.r,y=t.aj,k=t.af,x=t.k,w=t.M,M=t.N,S=t.F,A=t.O,B=t.R,H=t.S,R=t.W,F=t.P,N=t.u,_=t.$,$=t.Q,V=t.p,j=t.a,E=t.ah}],execute:function(){const e=Symbol("buttonGroupContextKey"),I=r({size:g,disabled:Boolean,type:{type:String,values:["default","primary","success","warning","info","danger","text",""],default:""},icon:{type:b},nativeType:{type:String,values:["button","submit","reset"],default:"button"},loading:Boolean,loadingIcon:{type:b,default:()=>o},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0}}),q={click:t=>t instanceof MouseEvent};
/**
       * Take input from [0, n] and return it as [0, 1]
       * @hidden
       */
function z(t,e){(
/**
       * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
       * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
       * @hidden
       */
function(t){return"string"==typeof t&&-1!==t.indexOf(".")&&1===parseFloat(t)}
/**
       * Check to see if string passed in is a percentage
       * @hidden
       */)(t)&&(t="100%");var r=function(t){return"string"==typeof t&&-1!==t.indexOf("%")}
/**
       * Return a valid alpha value [0,1] with all invalid values being set to 1
       * @hidden
       */(t);// Handle floating point rounding errors
return t=360===e?t:Math.min(e,Math.max(0,parseFloat(t))),// Automatically convert percentage into number
r&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:// Convert into [0, 1] range if it isn't already
// If n is a hue given in degrees,
// wrap around out-of-range values into [0, 360] range
// then convert into [0, 1].
t=360===e?(t<0?t%e+e:t%e)/parseFloat(String(e)):t%e/parseFloat(String(e))}
/**
       * Force a number between 0 and 1
       * @hidden
       */function W(t){return Math.min(1,Math.max(0,t))}function C(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}
/**
       * Replace a decimal with it's percentage value
       * @hidden
       */function T(t){return t<=1?"".concat(100*Number(t),"%"):t}
/**
       * Force a hex value to have 2 characters
       * @hidden
       */function O(t){return 1===t.length?"0"+t:String(t)}// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
/**
       * Handle bounds / percentage checking to conform to CSS color spec
       * <http://www.w3.org/TR/css3-color/>
       * *Assumes:* r, g, b in [0, 255] or [0, 1]
       * *Returns:* { r, g, b } in [0, 255]
       */
/**
       * Converts an RGB color value to HSL.
       * *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
       * *Returns:* { h, s, l } in [0,1]
       */
function P(t,e,r){t=z(t,255),e=z(e,255),r=z(r,255);var o=Math.max(t,e,r),a=Math.min(t,e,r),n=0,i=0,s=(o+a)/2;if(o===a)i=0,n=0;else{var c=o-a;switch(i=s>.5?c/(2-o-a):c/(o+a),o){case t:n=(e-r)/c+(e<r?6:0);break;case e:n=(r-t)/c+2;break;case r:n=(t-e)/c+4}n/=6}return{h:n,s:i,l:s}}function U(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*r*(e-t):r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}
/**
       * Converts an HSL color value to RGB.
       *
       * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
       * *Returns:* { r, g, b } in the set [0, 255]
       */
/**
       * Converts an RGB color value to HSV
       *
       * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
       * *Returns:* { h, s, v } in [0,1]
       */
function D(t,e,r){t=z(t,255),e=z(e,255),r=z(r,255);var o=Math.max(t,e,r),a=Math.min(t,e,r),n=0,i=o,s=o-a,c=0===o?0:s/o;if(o===a)n=0;// achromatic
else{switch(o){case t:n=(e-r)/s+(e<r?6:0);break;case e:n=(r-t)/s+2;break;case r:n=(t-e)/s+4}n/=6}return{h:n,s:c,v:i}}
/**
       * Converts an HSV color value to RGB.
       *
       * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
       * *Returns:* { r, g, b } in the set [0, 255]
       */
/**
       * Converts an RGB color to hex
       *
       * Assumes r, g, and b are contained in the set [0, 255]
       * Returns a 3 or 6 character hex
       */
function G(t,e,r,o){var a=[O(Math.round(t).toString(16)),O(Math.round(e).toString(16)),O(Math.round(r).toString(16))];// Return a 3 character hex if possible
return o&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}
/**
       * Converts an RGBA color plus alpha transparency to hex
       *
       * Assumes r, g, b are contained in the set [0, 255] and
       * a in [0, 1]. Returns a 4 or 8 character rgba hex
       */
// eslint-disable-next-line max-params
/** Converts a hex value to a decimal */function L(t){return K(t)/255}/** Parse a base-16 hex value into a base-10 integer */function K(t){return parseInt(t,16)}// https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
/**
       * @hidden
       */
var Q={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};
/**
       * Given a string or object, convert that input to RGB
       *
       * Possible string inputs:
       * ```
       * "red"
       * "#f00" or "f00"
       * "#ff0000" or "ff0000"
       * "#ff000000" or "ff000000"
       * "rgb 255 0 0" or "rgb (255, 0, 0)"
       * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
       * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
       * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
       * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
       * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
       * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
       * ```
       */function J(t){var e,r,o,a={r:0,g:0,b:0},n=1,i=null,s=null,c=null,l=!1,h=!1;return"string"==typeof t&&(t=
/**
       * Permissive string parsing.  Take in a number of formats, and output an object
       * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
       */
function(t){if(0===(t=t.trim().toLowerCase()).length)return!1;var e=!1;if(Q[t])t=Q[t],e=!0;else if("transparent"===t)return{r:0,g:0,b:0,a:0,format:"name"};// Try to match string input using regular expressions.
// Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
// Just return an object and let the conversion functions handle that.
// This way the result will be the same whether the tinycolor is initialized with string or object.
var r=tt.rgb.exec(t);return r?{r:r[1],g:r[2],b:r[3]}:(r=tt.rgba.exec(t))?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=tt.hsl.exec(t))?{h:r[1],s:r[2],l:r[3]}:(r=tt.hsla.exec(t))?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=tt.hsv.exec(t))?{h:r[1],s:r[2],v:r[3]}:(r=tt.hsva.exec(t))?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=tt.hex8.exec(t))?{r:K(r[1]),g:K(r[2]),b:K(r[3]),a:L(r[4]),format:e?"name":"hex8"}:(r=tt.hex6.exec(t))?{r:K(r[1]),g:K(r[2]),b:K(r[3]),format:e?"name":"hex"}:(r=tt.hex4.exec(t))?{r:K(r[1]+r[1]),g:K(r[2]+r[2]),b:K(r[3]+r[3]),a:L(r[4]+r[4]),format:e?"name":"hex8"}:!!(r=tt.hex3.exec(t))&&{r:K(r[1]+r[1]),g:K(r[2]+r[2]),b:K(r[3]+r[3]),format:e?"name":"hex"}}
/**
       * Check to see if it looks like a CSS unit
       * (see `matchers` above for definition).
       */(t)),"object"==typeof t&&(et(t.r)&&et(t.g)&&et(t.b)?(e=t.r,r=t.g,o=t.b,a={r:255*z(e,255),g:255*z(r,255),b:255*z(o,255)},l=!0,h="%"===String(t.r).substr(-1)?"prgb":"rgb"):et(t.h)&&et(t.s)&&et(t.v)?(i=T(t.s),s=T(t.v),a=function(t,e,r){t=6*z(t,360),e=z(e,100),r=z(r,100);var o=Math.floor(t),a=t-o,n=r*(1-e),i=r*(1-a*e),s=r*(1-(1-a)*e),c=o%6;return{r:255*[r,i,n,n,s,r][c],g:255*[s,r,r,i,n,n][c],b:255*[n,n,s,r,r,i][c]}}(t.h,i,s),l=!0,h="hsv"):et(t.h)&&et(t.s)&&et(t.l)&&(i=T(t.s),c=T(t.l),a=function(t,e,r){var o,a,n;if(t=z(t,360),e=z(e,100),r=z(r,100),0===e)// achromatic
a=r,n=r,o=r;else{var i=r<.5?r*(1+e):r+e-r*e,s=2*r-i;o=U(s,i,t+1/3),a=U(s,i,t),n=U(s,i,t-1/3)}return{r:255*o,g:255*a,b:255*n}}(t.h,i,c),l=!0,h="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(n=t.a)),n=C(n),{ok:l,format:t.format||h,r:Math.min(255,Math.max(a.r,0)),g:Math.min(255,Math.max(a.g,0)),b:Math.min(255,Math.max(a.b,0)),a:n}}// <http://www.w3.org/TR/css3-values/#integers>
var X="(?:".concat("[-\\+]?\\d*\\.\\d+%?",")|(?:").concat("[-\\+]?\\d+%?",")"),Y="[\\s|\\(]+(".concat(X,")[,|\\s]+(").concat(X,")[,|\\s]+(").concat(X,")\\s*\\)?"),Z="[\\s|\\(]+(".concat(X,")[,|\\s]+(").concat(X,")[,|\\s]+(").concat(X,")[,|\\s]+(").concat(X,")\\s*\\)?"),tt={CSS_UNIT:new RegExp(X),rgb:new RegExp("rgb"+Y),rgba:new RegExp("rgba"+Z),hsl:new RegExp("hsl"+Y),hsla:new RegExp("hsla"+Z),hsv:new RegExp("hsv"+Y),hsva:new RegExp("hsva"+Z),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};// <http://www.w3.org/TR/css3-values/#number-value>
function et(t){return Boolean(tt.CSS_UNIT.exec(String(t)))}var rt=/** @class */function(){function t(e,r){var o;// If input is already a tinycolor, return itself
if(void 0===e&&(e=""),void 0===r&&(r={}),e instanceof t)// eslint-disable-next-line no-constructor-return
return e;"number"==typeof e&&(e=function(t){return{r:t>>16,g:(65280&t)>>8,b:255&t}}(e)),this.originalInput=e;var a=J(e);this.originalInput=e,this.r=a.r,this.g=a.g,this.b=a.b,this.a=a.a,this.roundA=Math.round(100*this.a)/100,this.format=null!==(o=r.format)&&void 0!==o?o:a.format,this.gradientType=r.gradientType,// Don't let the range of [0,255] come back in [0,1].
// Potentially lose a little bit of precision here, but will fix issues where
// .5 gets interpreted as half of the total, instead of half of 1
// If it was supposed to be 128, this was already taken care of by `inputToRgb`
this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=a.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},
/**
           * Returns the perceived brightness of the color, from 0-255.
           */
t.prototype.getBrightness=function(){// http://www.w3.org/TR/AERT#color-contrast
var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},
/**
           * Returns the perceived luminance of a color, from 0-1.
           */
t.prototype.getLuminance=function(){// http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
var t=this.toRgb(),e=t.r/255,r=t.g/255,o=t.b/255;return.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.0722*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))},
/**
           * Returns the alpha value of a color, from 0-1.
           */
t.prototype.getAlpha=function(){return this.a},
/**
           * Sets the alpha value on the current color.
           *
           * @param alpha - The new alpha value. The accepted range is 0-1.
           */
t.prototype.setAlpha=function(t){return this.a=C(t),this.roundA=Math.round(100*this.a)/100,this},
/**
           * Returns the object as a HSVA object.
           */
t.prototype.toHsv=function(){var t=D(this.r,this.g,this.b);return{h:360*t.h,s:t.s,v:t.v,a:this.a}},
/**
           * Returns the hsva values interpolated into a string with the following format:
           * "hsva(xxx, xxx, xxx, xx)".
           */
t.prototype.toHsvString=function(){var t=D(this.r,this.g,this.b),e=Math.round(360*t.h),r=Math.round(100*t.s),o=Math.round(100*t.v);return 1===this.a?"hsv(".concat(e,", ").concat(r,"%, ").concat(o,"%)"):"hsva(".concat(e,", ").concat(r,"%, ").concat(o,"%, ").concat(this.roundA,")")},
/**
           * Returns the object as a HSLA object.
           */
t.prototype.toHsl=function(){var t=P(this.r,this.g,this.b);return{h:360*t.h,s:t.s,l:t.l,a:this.a}},
/**
           * Returns the hsla values interpolated into a string with the following format:
           * "hsla(xxx, xxx, xxx, xx)".
           */
t.prototype.toHslString=function(){var t=P(this.r,this.g,this.b),e=Math.round(360*t.h),r=Math.round(100*t.s),o=Math.round(100*t.l);return 1===this.a?"hsl(".concat(e,", ").concat(r,"%, ").concat(o,"%)"):"hsla(".concat(e,", ").concat(r,"%, ").concat(o,"%, ").concat(this.roundA,")")},
/**
           * Returns the hex value of the color.
           * @param allow3Char will shorten hex value to 3 char if possible
           */
t.prototype.toHex=function(t){return void 0===t&&(t=!1),G(this.r,this.g,this.b,t)},
/**
           * Returns the hex value of the color -with a # appened.
           * @param allow3Char will shorten hex value to 3 char if possible
           */
t.prototype.toHexString=function(t){return void 0===t&&(t=!1),"#"+this.toHex(t)},
/**
           * Returns the hex 8 value of the color.
           * @param allow4Char will shorten hex value to 4 char if possible
           */
t.prototype.toHex8=function(t){return void 0===t&&(t=!1),function(t,e,r,o,a){var n,i=[O(Math.round(t).toString(16)),O(Math.round(e).toString(16)),O(Math.round(r).toString(16)),O((n=o,Math.round(255*parseFloat(n)).toString(16)))];// Return a 4 character hex if possible
return a&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))&&i[3].startsWith(i[3].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}/** Converts a decimal to a hex value */(this.r,this.g,this.b,this.a,t)},
/**
           * Returns the hex 8 value of the color -with a # appened.
           * @param allow4Char will shorten hex value to 4 char if possible
           */
t.prototype.toHex8String=function(t){return void 0===t&&(t=!1),"#"+this.toHex8(t)},
/**
           * Returns the object as a RGBA object.
           */
t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},
/**
           * Returns the RGBA values interpolated into a string with the following format:
           * "RGBA(xxx, xxx, xxx, xx)".
           */
t.prototype.toRgbString=function(){var t=Math.round(this.r),e=Math.round(this.g),r=Math.round(this.b);return 1===this.a?"rgb(".concat(t,", ").concat(e,", ").concat(r,")"):"rgba(".concat(t,", ").concat(e,", ").concat(r,", ").concat(this.roundA,")")},
/**
           * Returns the object as a RGBA object.
           */
t.prototype.toPercentageRgb=function(){var t=function(t){return"".concat(Math.round(100*z(t,255)),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},
/**
           * Returns the RGBA relative values interpolated into a string
           */
t.prototype.toPercentageRgbString=function(){var t=function(t){return Math.round(100*z(t,255))};return 1===this.a?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},
/**
           * The 'real' name of the color -if there is one.
           */
t.prototype.toName=function(){if(0===this.a)return"transparent";if(this.a<1)return!1;for(var t="#"+G(this.r,this.g,this.b,!1),e=0,r=Object.entries(Q);e<r.length;e++){var o=r[e],a=o[0];if(t===o[1])return a}return!1},t.prototype.toString=function(t){var e=Boolean(t);t=null!=t?t:this.format;var r=!1,o=this.a<1&&this.a>=0;return e||!o||!t.startsWith("hex")&&"name"!==t?("rgb"===t&&(r=this.toRgbString()),"prgb"===t&&(r=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(r=this.toHexString()),"hex3"===t&&(r=this.toHexString(!0)),"hex4"===t&&(r=this.toHex8String(!0)),"hex8"===t&&(r=this.toHex8String()),"name"===t&&(r=this.toName()),"hsl"===t&&(r=this.toHslString()),"hsv"===t&&(r=this.toHsvString()),r||this.toHexString()):// Special case for "transparent", all other non-alpha formats
// will return rgba when there is transparency.
"name"===t&&0===this.a?this.toName():this.toRgbString()},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},
/**
           * Lighten the color a given amount. Providing 100 will always return white.
           * @param amount - valid between 1-100
           */
t.prototype.lighten=function(e){void 0===e&&(e=10);var r=this.toHsl();return r.l+=e/100,r.l=W(r.l),new t(r)},
/**
           * Brighten the color a given amount, from 0 to 100.
           * @param amount - valid between 1-100
           */
t.prototype.brighten=function(e){void 0===e&&(e=10);var r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(-e/100*255))),r.g=Math.max(0,Math.min(255,r.g-Math.round(-e/100*255))),r.b=Math.max(0,Math.min(255,r.b-Math.round(-e/100*255))),new t(r)},
/**
           * Darken the color a given amount, from 0 to 100.
           * Providing 100 will always return black.
           * @param amount - valid between 1-100
           */
t.prototype.darken=function(e){void 0===e&&(e=10);var r=this.toHsl();return r.l-=e/100,r.l=W(r.l),new t(r)},
/**
           * Mix the color with pure white, from 0 to 100.
           * Providing 0 will do nothing, providing 100 will always return white.
           * @param amount - valid between 1-100
           */
t.prototype.tint=function(t){return void 0===t&&(t=10),this.mix("white",t)},
/**
           * Mix the color with pure black, from 0 to 100.
           * Providing 0 will do nothing, providing 100 will always return black.
           * @param amount - valid between 1-100
           */
t.prototype.shade=function(t){return void 0===t&&(t=10),this.mix("black",t)},
/**
           * Desaturate the color a given amount, from 0 to 100.
           * Providing 100 will is the same as calling greyscale
           * @param amount - valid between 1-100
           */
t.prototype.desaturate=function(e){void 0===e&&(e=10);var r=this.toHsl();return r.s-=e/100,r.s=W(r.s),new t(r)},
/**
           * Saturate the color a given amount, from 0 to 100.
           * @param amount - valid between 1-100
           */
t.prototype.saturate=function(e){void 0===e&&(e=10);var r=this.toHsl();return r.s+=e/100,r.s=W(r.s),new t(r)},
/**
           * Completely desaturates a color into greyscale.
           * Same as calling `desaturate(100)`
           */
t.prototype.greyscale=function(){return this.desaturate(100)},
/**
           * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
           * Values outside of this range will be wrapped into this range.
           */
t.prototype.spin=function(e){var r=this.toHsl(),o=(r.h+e)%360;return r.h=o<0?360+o:o,new t(r)},
/**
           * Mix the current color a given amount with another color, from 0 to 100.
           * 0 means no mixing (return current color).
           */
t.prototype.mix=function(e,r){void 0===r&&(r=50);var o=this.toRgb(),a=new t(e).toRgb(),n=r/100;return new t({r:(a.r-o.r)*n+o.r,g:(a.g-o.g)*n+o.g,b:(a.b-o.b)*n+o.b,a:(a.a-o.a)*n+o.a})},t.prototype.analogous=function(e,r){void 0===e&&(e=6),void 0===r&&(r=30);var o=this.toHsl(),a=360/r,n=[this];for(o.h=(o.h-(a*e>>1)+720)%360;--e;)o.h=(o.h+a)%360,n.push(new t(o));return n},
/**
           * taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
           */
t.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new t(e)},t.prototype.monochromatic=function(e){void 0===e&&(e=6);for(var r=this.toHsv(),o=r.h,a=r.s,n=r.v,i=[],s=1/e;e--;)i.push(new t({h:o,s:a,v:n})),n=(n+s)%1;return i},t.prototype.splitcomplement=function(){var e=this.toHsl(),r=e.h;return[this,new t({h:(r+72)%360,s:e.s,l:e.l}),new t({h:(r+216)%360,s:e.s,l:e.l})]},
/**
           * Compute how the color would appear on a background
           */
t.prototype.onBackground=function(e){var r=this.toRgb(),o=new t(e).toRgb();return new t({r:o.r+(r.r-o.r)*r.a,g:o.g+(r.g-o.g)*r.a,b:o.b+(r.b-o.b)*r.a})},
/**
           * Alias for `polyad(3)`
           */
t.prototype.triad=function(){return this.polyad(3)},
/**
           * Alias for `polyad(4)`
           */
t.prototype.tetrad=function(){return this.polyad(4)},
/**
           * Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
           * monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
           */
t.prototype.polyad=function(e){for(var r=this.toHsl(),o=r.h,a=[this],n=360/e,i=1;i<e;i++)a.push(new t({h:(o+i*n)%360,s:r.s,l:r.l}));return a},
/**
           * compare color vs current color
           */
t.prototype.equals=function(e){return this.toRgbString()===new t(e).toRgbString()},t}();function ot(t,e=20){return t.mix("#141414",e).toString()}const at=["aria-disabled","disabled","autofocus","type"],nt=x({name:"ElButton"}),it=x({...nt,props:I,emits:q,setup(t,{expose:r,emit:o}){const n=t,i=function(t){const e=d(),r=h("button");return p((()=>{let o={};const a=t.color;if(a){const n=new rt(a),i=t.dark?n.tint(20).toString():ot(n,20);if(t.plain)o=r.cssVarBlock({"bg-color":t.dark?ot(n,90):n.tint(90).toString(),"text-color":a,"border-color":t.dark?ot(n,50):n.tint(50).toString(),"hover-text-color":`var(${r.cssVarName("color-white")})`,"hover-bg-color":a,"hover-border-color":a,"active-bg-color":i,"active-text-color":`var(${r.cssVarName("color-white")})`,"active-border-color":i}),e.value&&(o[r.cssVarBlockName("disabled-bg-color")]=t.dark?ot(n,90):n.tint(90).toString(),o[r.cssVarBlockName("disabled-text-color")]=t.dark?ot(n,50):n.tint(50).toString(),o[r.cssVarBlockName("disabled-border-color")]=t.dark?ot(n,80):n.tint(80).toString());else{const s=t.dark?ot(n,30):n.tint(30).toString(),c=n.isDark()?`var(${r.cssVarName("color-white")})`:`var(${r.cssVarName("color-black")})`;if(o=r.cssVarBlock({"bg-color":a,"text-color":c,"border-color":a,"hover-bg-color":s,"hover-text-color":c,"hover-border-color":s,"active-bg-color":i,"active-border-color":i}),e.value){const e=t.dark?ot(n,50):n.tint(50).toString();o[r.cssVarBlockName("disabled-bg-color")]=e,o[r.cssVarBlockName("disabled-text-color")]=t.dark?"rgba(255, 255, 255, 0.5)":`var(${r.cssVarName("color-white")})`,o[r.cssVarBlockName("disabled-border-color")]=e}}}return o}))}(n),s=h("button"),{_ref:g,_size:b,_type:x,_disabled:V,shouldAddSpace:j,handleClick:E}=((t,r)=>{c({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},p((()=>"text"===t.type)));const o=v(e,void 0),a=l("button"),{form:n}=u(),i=f(p((()=>null==o?void 0:o.size))),s=d(),h=m(),g=y(),b=p((()=>t.type||(null==o?void 0:o.type)||"")),x=p((()=>{var e,r,o;return null!=(o=null!=(r=t.autoInsertSpace)?r:null==(e=a.value)?void 0:e.autoInsertSpace)&&o}));return{_disabled:s,_size:i,_type:b,_ref:h,shouldAddSpace:p((()=>{var t;const e=null==(t=g.default)?void 0:t.call(g);if(x.value&&1===(null==e?void 0:e.length)){const t=e[0];if((null==t?void 0:t.type)===k){const e=t.children;return/^\p{Unified_Ideograph}{2}$/u.test(e.trim())}}return!1})),handleClick:e=>{"reset"===t.nativeType&&(null==n||n.resetFields()),r("click",e)}}})(n,o);return r({ref:g,size:b,type:x,disabled:V,shouldAddSpace:j}),(t,e)=>(w(),M("button",{ref_key:"_ref",ref:g,class:F([N(s).b(),N(s).m(N(x)),N(s).m(N(b)),N(s).is("disabled",N(V)),N(s).is("loading",t.loading),N(s).is("plain",t.plain),N(s).is("round",t.round),N(s).is("circle",t.circle),N(s).is("text",t.text),N(s).is("link",t.link),N(s).is("has-bg",t.bg)]),"aria-disabled":N(V)||t.loading,disabled:N(V)||t.loading,autofocus:t.autofocus,type:t.nativeType,style:$(N(i)),onClick:e[0]||(e[0]=(...t)=>N(E)&&N(E)(...t))},[t.loading?(w(),M(S,{key:0},[t.$slots.loading?A(t.$slots,"loading",{key:0}):(w(),B(N(a),{key:1,class:F(N(s).is("loading"))},{default:H((()=>[(w(),B(R(t.loadingIcon)))])),_:1},8,["class"]))],64)):t.icon||t.$slots.icon?(w(),B(N(a),{key:1},{default:H((()=>[t.icon?(w(),B(R(t.icon),{key:0})):A(t.$slots,"icon",{key:1})])),_:3})):_("v-if",!0),t.$slots.default?(w(),M("span",{key:2,class:F({[N(s).em("text","expand")]:N(j)})},[A(t.$slots,"default")],2)):_("v-if",!0)],14,at))}});var st=n(it,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);const ct={size:I.size,type:I.type},lt=x({name:"ElButtonGroup"}),ht=x({...lt,props:ct,setup(t){const r=t;V(e,j({size:E(r,"size"),type:E(r,"type")}));const o=h("button");return(t,e)=>(w(),M("div",{class:F(`${N(o).b("group")}`)},[A(t.$slots,"default")],2))}});var ut=n(ht,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);t("E",i(st,{ButtonGroup:ut})),s(ut)}}}));
//# sourceMappingURL=index-legacy-3ada6c0d.js.map
