"use strict";var j=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var x=j(function(f,H){H.exports=[701,301,132,57,23,10,4,1]});var R=j(function(d,O){
var I=require('@stdlib/math-base-assert-is-negative-zero/dist'),J=require('@stdlib/math-base-assert-is-nan/dist'),m=x(),K=m.length;function L(a,e,v,r,u,i,c,o){var b,g,p,y,h,k,s,l,n,q,G,S,A,P;for(b=v.data,g=i.data,p=v.accessors[0],h=v.accessors[1],y=i.accessors[0],k=i.accessors[1],e<0&&(r*=-1,c*=-1,u-=(a-1)*r,o-=(a-1)*c),S=0;S<K;S++)for(l=m[S],A=l;A<a;A++)if(n=p(b,u+A*r),!J(n)){for(q=y(g,o+A*c),s=I(n),P=A;P>=l&&(G=p(b,u+(P-l)*r),!(G<=n&&!(s&&G===n)));P-=l)h(b,u+P*r,G),k(g,o+P*c,y(g,o+(P-l)*c));h(b,u+P*r,n),k(g,o+P*c,q)}return v}O.exports=L
});var Z=j(function(X,B){
var w=require('@stdlib/array-base-arraylike2object/dist'),M=require('@stdlib/math-base-assert-is-negative-zero/dist'),Q=require('@stdlib/math-base-assert-is-nan/dist'),z=x(),T=R(),U=z.length;function V(a,e,v,r,u,i,c,o){var b,g,p,y,h,k,s,l,n,q;if(a<=0||e===0)return v;if(k=w(v),s=w(i),k.accessorProtocol||s.accessorProtocol)return T(a,e,k,r,u,s,c,o),v;for(e<0&&(r*=-1,c*=-1,u-=(a-1)*r,o-=(a-1)*c),l=0;l<U;l++)for(g=z[l],n=g;n<a;n++)if(p=v[u+n*r],!Q(p)){for(y=i[o+n*c],b=M(p),q=n;q>=g&&(h=v[u+(q-g)*r],!(h<=p&&!(b&&h===p)));q-=g)v[u+q*r]=h,i[o+q*c]=i[o+(q-g)*c];v[u+q*r]=p,i[o+q*c]=y}return v}B.exports=V
});var E=j(function(Y,D){
var C=require('@stdlib/strided-base-stride2offset/dist'),W=Z();function _(a,e,v,r,u,i){return W(a,e,v,r,C(a,r),u,i,C(a,i))}D.exports=_
});var $=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=E(),t=Z();$(F,"ndarray",t);module.exports=F;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
