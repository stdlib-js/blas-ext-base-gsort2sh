// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r,t="function"==typeof Object.defineProperty?Object.defineProperty:null,o=Object.defineProperty,n=Object.prototype,a=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,l=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?o:function(e,r,t){var o,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(l.call(e,r)||f.call(e,r)?(o=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=o):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),p&&u&&u.call(e,r,t.set),e};var c=r,_=Number.NEGATIVE_INFINITY;function p(e){return 0===e&&1/e===_}function d(e){return e!=e}var s=[701,301,132,57,23,10,4,1],b=s.length;function y(e,r,t,o,n,a){var i,u,l,f,c,_,y,v,g,j;if(e<=0||0===r)return t;for(r<0&&(o*=-1,a*=-1),i=o<0?(1-e)*o:0,u=a<0?(1-e)*a:0,v=0;v<b;v++)for(g=f=s[v];g<e;g++)if(!d(c=t[i+g*o])){for(_=n[u+g*a],l=p(c),j=g;j>=f&&(!((y=t[i+(j-f)*o])<=c)||l&&y===c);j-=f)t[i+j*o]=y,n[u+j*a]=n[u+(j-f)*a];t[i+j*o]=c,n[u+j*a]=_}return t}var v=s.length;function g(e,r,t,o,n,a,i,u){var l,f,c,_,b,y,g,j;if(e<=0||0===r)return t;for(r<0&&(n-=(e-1)*(o*=-1),u-=(e-1)*(i*=-1)),y=0;y<v;y++)for(g=f=s[y];g<e;g++)if(!d(c=t[n+g*o])){for(_=a[u+g*i],l=p(c),j=g;j>=f&&(!((b=t[n+(j-f)*o])<=c)||l&&b===c);j-=f)t[n+j*o]=b,a[u+j*i]=a[u+(j-f)*i];t[n+j*o]=c,a[u+j*i]=_}return t}c(y,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:g}),e.default=y,e.ndarray=g,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).gsort2sh={});
//# sourceMappingURL=index.js.map
