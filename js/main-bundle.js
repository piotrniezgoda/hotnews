!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=7)}([function(e,t,n){e.exports=n.p+"about.html"},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},function(e,t,r){var n,o,i,s={},u=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),a=(i={},function(e,t){if("function"==typeof e)return e();if(void 0===i[e]){var n=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}i[e]=n}return i[e]}),l=null,f=0,c=[],d=r(4);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=s[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(g(r.parts[i],t))}else{var a=[];for(i=0;i<r.parts.length;i++)a.push(g(r.parts[i],t));s[r.id]={id:r.id,refs:1,parts:a}}}}function h(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}function v(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(e.insertAt.before,n);n.insertBefore(t,o)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);0<=t&&c.splice(t,1)}function b(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=function(){0;return r.nc}();n&&(e.attrs.nonce=n)}return y(t,e.attrs),v(e,t),t}function y(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function g(t,e){var n,r,o,i,a,c;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var s=f++;n=l||(l=b(e)),r=x.bind(null,n,s,!1),o=x.bind(null,n,s,!0)}else o=t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(a=e,c=document.createElement("link"),void 0===a.attrs.type&&(a.attrs.type="text/css"),a.attrs.rel="stylesheet",y(c,a.attrs),v(a,c),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=d(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,n=c,e),function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(e),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),function(){m(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}e.exports=function(e,a){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(a=a||{}).attrs="object"==typeof a.attrs?a.attrs:{},a.singleton||"boolean"==typeof a.singleton||(a.singleton=u()),a.insertInto||(a.insertInto="head"),a.insertAt||(a.insertAt="bottom");var c=h(e,a);return p(c,a),function(e){for(var t=[],n=0;n<c.length;n++){var r=c[n];(o=s[r.id]).refs--,t.push(o)}e&&p(h(e,a),a);for(n=0;n<t.length;n++){var o;if(0===(o=t[n]).refs){for(var i=0;i<o.parts.length;i++)o.parts[i]();delete s[o.id]}}}};var w,_=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")});function x(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var o=t.protocol+"//"+t.host,i=o+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var n,r=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?e:(n=0===r.indexOf("//")?r:0===r.indexOf("/")?o+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")})}},function(e,t,n){e.exports=n.p+"index.html"},,function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var i=function(){function t(e){for(!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.articles=e,this.main=document.querySelector("#main"),this.section=document.createElement("section"),this.section.classList.add("news");this.main.firstChild;)this.main.removeChild(this.main.firstChild);this.insertData()}var e,n,r;return e=t,(n=[{key:"insertData",value:function(){var n=this;this.articles.forEach(function(e){var t=document.createElement("article");t.classList.add("news__article"),t.innerHTML='\n        <header>\n          <img src="'.concat(e.urlToImage||"../images/app-bg.jpg",'" class="article__image">\n          <h2 itemprop="headline" class="article__title"><a target="_blank" class="article__link" href="').concat(e.url,'">').concat(e.title,'</a></h2>\n        </header>\n        <div class="article__text-container">\n          <p class="article__desc">').concat(e.description,'</p>\n          <footer class="article__source-container">\n            <p class="article__source">Source: ').concat(e.source.name,'</p>\n            <p class="article__source">Author: ').concat(e.author||"(no data)",'</p>\n            <p class="article__source">Date of publication: <time datetime="').concat(e.publishedAt.slice(0,10),'">').concat(e.publishedAt.slice(0,10),"</time></p>\n          </footer>\n        </div>\n      "),n.section.appendChild(t)}),this.main.appendChild(this.section)}}])&&o(e.prototype,n),r&&o(e,r),t}(),a=function(e,t){var n;n=void 0===t||""===t?"https://newsapi.org/v2/top-headlines?country=".concat(e,"&apiKey=314fc35f08b84216baf1a59ca8736a3c"):"https://newsapi.org/v2/top-headlines?country=".concat(e,"&q=").concat(t,"&apiKey=314fc35f08b84216baf1a59ca8736a3c");var r=new Request(n);fetch(r).then(function(e){return e.json()}).then(function(e){var t=e.articles;return new i(t)})};n(5),n(0),n(1),window.addEventListener("load",function(){var t,e=document.querySelectorAll('input[name="region"]'),n=document.querySelector('input[name="region"]:checked').value,r=document.querySelector("#searchInput"),o=document.querySelector("#searchButton");function i(){var e=r.value;""!==e&&a(t||n,e)}a(n),e.forEach(function(e){e.addEventListener("change",function(){t=this.value;var e=r.value;a(this.value,e)})}),r.addEventListener("keyup",function(e){13===e.keyCode&&i(),""===r.value&&a(t,r.value)}),o.addEventListener("click",i)})}]);