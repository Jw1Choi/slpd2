!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.DisableDevtool=n():e.DisableDevtool=n()}(this,(function(){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(n){return e[n]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var o=null,i=null,r=[],u=0;function c(){var e,n,t,c,a,l,d=!1,s=function(){d=!0},v=function(){d=!1};e=s,n=v,t=window.alert,c=window.confirm,a=window.prompt,l=function(t){return function(){e&&e(),t.apply(void 0,arguments),n&&n()}},window.alert=l(t),window.confirm=l(c),window.prompt=l(a),function(e,n){var t,o,i;void 0!==document.hidden?(t="hidden",i="visibilitychange",o="visibilityState"):void 0!==document.mozHidden?(t="mozHidden",i="mozvisibilitychange",o="mozVisibilityState"):void 0!==document.msHidden?(t="msHidden",i="msvisibilitychange",o="msVisibilityState"):void 0!==document.webkitHidden&&(t="webkitHidden",i="webkitvisibilitychange",o="webkitVisibilityState");var r=function(){document[o]===t?n():e()};document.removeEventListener(i,r,!1),document.addEventListener(i,r,!1)}(v,s),o=window.setInterval((function(){d||(r.forEach((function(e){e(u++)})),console.clear())}),w.interval),i=setTimeout((function(){/(iphone|ipad|ipod|ios|android)/i.test(navigator.userAgent.toLowerCase())&&f()}),w.stopIntervalTime)}function a(e){r.push(e)}function f(){window.clearInterval(o)}function l(){window.clearTimeout(i)}function d(e){return-1!==navigator.userAgent.toLocaleLowerCase().indexOf(e)}var s=console.log;function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var w={md5:"",ondevtoolopen:function(){if(f(),w.url)window.location.href=w.url;else{try{window.opener=null,window.open("","_self"),window.close(),window.history.back()}catch(e){console.log(e)}setTimeout((function(){window.location.href="https://tackchen.gitee.io/404.html?h=".concat(encodeURIComponent(location.host))}),500)}},url:"",tkName:"ddtk",interval:200,disableMenu:!0,stopIntervalTime:5e3,clearIntervalWhenDevOpenTrigger:!1,detectors:"all"},m=["detectors"];
function p(){var e="shiftKey",n="ctrlKey";d("macintosh")&&(e="metaKey",n="altKey"),window.addEventListener("keydown",(function(t){if(123===((t=t||window.event).keyCode||t.which)||t[e]&&t[n]&&73===t.keyCode||t[n]&&85===t.keyCode)return t.returnValue=!1,t.preventDefault(),!1}),!0),w.disableMenu&&window.addEventListener("contextmenu",(function(e){return(e=e||window.event).returnValue=!1,e.preventDefault(),!1}),!0)}function y(e,n,t,o,i,r){return _((u=_(_(n,e),_(o,r)))<<(c=i)|u>>>32-c,t);var u,c}function b(e,n,t,o,i,r,u){return y(n&t|~n&o,e,n,i,r,u)}function h(e,n,t,o,i,r,u){return y(n&o|t&~o,e,n,i,r,u)}function g(e,n,t,o,i,r,u){return y(n^t^o,e,n,i,r,u)}function T(e,n,t,o,i,r,u){return y(t^(n|~o),e,n,i,r,u)}function _(e,n){var t=(65535&e)+(65535&n);return(e>>16)+(n>>16)+(t>>16)<<16|65535&t}var I,E=function(e){return function(e){for(var n="0123456789abcdef",t="",o=0;o<4*e.length;o++)t+=n.charAt(e[o>>2]>>o%4*8+4&15)+n.charAt(e[o>>2]>>o%4*8&15);return t}(function(e,n){e[n>>5]|=128<<n%32,e[14+(n+64>>>9<<4)]=n;for(var t=1732584193,o=-271733879,i=-1732584194,r=271733878,u=0;u<e.length;u+=16){var c=t,a=o,f=i,l=r;t=b(t,o,i,r,e[u+0],7,-680876936),r=b(r,t,o,i,e[u+1],12,-389564586),i=b(i,r,t,o,e[u+2],17,606105819),o=b(o,i,r,t,e[u+3],22,-1044525330),t=b(t,o,i,r,e[u+4],7,-176418897),r=b(r,t,o,i,e[u+5],12,1200080426),i=b(i,r,t,o,e[u+6],17,-1473231341),o=b(o,i,r,t,e[u+7],22,-45705983),t=b(t,o,i,r,e[u+8],7,1770035416),r=b(r,t,o,i,e[u+9],12,-1958414417),i=b(i,r,t,o,e[u+10],17,-42063),o=b(o,i,r,t,e[u+11],22,-1990404162),t=b(t,o,i,r,e[u+12],7,1804603682),r=b(r,t,o,i,e[u+13],12,-40341101),i=b(i,r,t,o,e[u+14],17,-1502002290),o=b(o,i,r,t,e[u+15],22,1236535329),t=h(t,o,i,r,e[u+1],5,-165796510),r=h(r,t,o,i,e[u+6],9,-1069501632),i=h(i,r,t,o,e[u+11],14,643717713),o=h(o,i,r,t,e[u+0],20,-373897302),t=h(t,o,i,r,e[u+5],5,-701558691),r=h(r,t,o,i,e[u+10],9,38016083),i=h(i,r,t,o,e[u+15],14,-660478335),o=h(o,i,r,t,e[u+4],20,-405537848),t=h(t,o,i,r,e[u+9],5,568446438),r=h(r,t,o,i,e[u+14],9,-1019803690),i=h(i,r,t,o,e[u+3],14,-187363961),o=h(o,i,r,t,e[u+8],20,1163531501),t=h(t,o,i,r,e[u+13],5,-1444681467),r=h(r,t,o,i,e[u+2],9,-51403784),i=h(i,r,t,o,e[u+7],14,1735328473),o=h(o,i,r,t,e[u+12],20,-1926607734),t=g(t,o,i,r,e[u+5],4,-378558),r=g(r,t,o,i,e[u+8],11,-2022574463),i=g(i,r,t,o,e[u+11],16,1839030562),o=g(o,i,r,t,e[u+14],23,-35309556),t=g(t,o,i,r,e[u+1],4,-1530992060),r=g(r,t,o,i,e[u+4],11,1272893353),i=g(i,r,t,o,e[u+7],16,-155497632),o=g(o,i,r,t,e[u+10],23,-1094730640),t=g(t,o,i,r,e[u+13],4,681279174),r=g(r,t,o,i,e[u+0],11,-358537222),i=g(i,r,t,o,e[u+3],16,-722521979),o=g(o,i,r,t,e[u+6],23,76029189),t=g(t,o,i,r,e[u+9],4,-640364487),r=g(r,t,o,i,e[u+12],11,-421815835),i=g(i,r,t,o,e[u+15],16,530742520),o=g(o,i,r,t,e[u+2],23,-995338651),t=T(t,o,i,r,e[u+0],6,-198630844),r=T(r,t,o,i,e[u+7],10,1126891415),i=T(i,r,t,o,e[u+14],15,-1416354905),o=T(o,i,r,t,e[u+5],21,-57434055),t=T(t,o,i,r,e[u+12],6,1700485571),r=T(r,t,o,i,e[u+3],10,-1894986606),i=T(i,r,t,o,e[u+10],15,-1051523),o=T(o,i,r,t,e[u+1],21,-2054922799),t=T(t,o,i,r,e[u+8],6,1873313359),r=T(r,t,o,i,e[u+15],10,-30611744),i=T(i,r,t,o,e[u+6],15,-1560198380),o=T(o,i,r,t,e[u+13],21,1309151649),t=T(t,o,i,r,e[u+4],6,-145523070),r=T(r,t,o,i,e[u+11],10,-1120210379),i=T(i,r,t,o,e[u+2],15,718787259),o=T(o,i,r,t,e[u+9],21,-343485551),t=_(t,c),o=_(o,a),i=_(i,f),r=_(r,l)}return Array(t,o,i,r)}(function(e){for(var n=Array(),t=0;t<8*e.length;t+=8)n[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return n}(e),8*e.length))};function S(){var e=function(){if(O(window.devicePixelRatio))return window.devicePixelRatio;var e=window.screen;if(O(e))return!1;if(e.deviceXDPI&&e.logicalXDPI)return e.deviceXDPI/e.logicalXDPI;return!1}();if(!1===e)return!0;var n=window.outerWidth-window.innerWidth*e>200,t=window.outerHeight-window.innerHeight*e>300;return!n&&!t||(x(N.SIZE),!1)}function O(e){return null!=e}function D(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var N={UNKONW:-1,REG_TO_STRING:0,DEFINE_ID:1,SIZE:2,DATE_TO_STRING:3,FUNC_TO_STRING:4},R=(D(I={},N.REG_TO_STRING,(function(){var e=d("qqbrowser"),n=d("firefox");if(e||n){var t=0,o=/./;s(o),o.toString=function(){if(e){var o=(new Date).getTime();t&&o-t<100?x(N.REG_TO_STRING):t=o}else n&&x(N.REG_TO_STRING);return""},a((function(){s(o)}))}})),D(I,N.DEFINE_ID,(function(){var e=document.createElement("div");e.__defineGetter__("id",(function(){x(N.DEFINE_ID)})),Object.defineProperty(e,"id",{get:function(){x(N.DEFINE_ID)}}),a((function(){s(e)}))})),D(I,N.SIZE,(function(){!function(){try{return window.self!==window.top}catch(e){return!0}}()?(S(),window.addEventListener("resize",(function(){setTimeout(S,100)}),!0)):console.warn("SizeDetector is disabled in IFrame")})),D(I,N.DATE_TO_STRING,(function(){var e=0,n=new Date;n.toString=function(){return e++,""},a((function(){e=0,s(n),console.clear(),e>=2&&x(N.DATE_TO_STRING)}))})),D(I,N.FUNC_TO_STRING,(function(){var e=0,n=function(){};n.toString=function(){return e++,""},a((function(){e=0,s(n),console.clear(),e>=2&&x(N.FUNC_TO_STRING)}))})),I);function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N.UNKONW;console.warn("You ar not allow to use DEVTOOL! 【type = ".concat(e,"】")),w.clearIntervalWhenDevOpenTrigger&&f(),l(),w.ondevtoolopen(e)}function G(e){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var n in w)void 0===e[n]||v(w[n])!==v(e[n])&&!m.includes(n)||(w[n]=e[n])}(e),function(){if(w.md5){var e=function(e){var n=window.location.search;if(""!==n){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),o=n.substr(1).match(t);if(null!=o)return unescape(o[2])}return""}(w.tkName);if(E(e)===w.md5)return!0}return!1}()||(c(),p(),("all"===w.detectors?Object.keys(R):w.detectors).forEach((function(e){R[e]&&R[e]()})))}G.md5=E,G.version="0.1.11",G.DETECTOR_TYPE=N,function(){if("undefined"!=typeof document){var e=document.querySelector("[disable-devtool-auto]");if(e){var n={};["md5","url","tk-name","interval","disable-menu","detectors"].forEach((function(t){var o=e.getAttribute(t);null!==o&&("interval"===t?o=parseInt(o):"disable-menu"===t?o="false"!==o:"detector"===t&&"all"!==o&&(o=o.split(" ")),n[function(e){if(-1===e.indexOf("-"))return e;var n=!1;return e.split("").map((function(e){return"-"===e?(n=!0,""):n?(n=!1,e.toUpperCase()):e})).join("")}(t)]=o)})),G(n)}}}();n.default=G}]).default}));