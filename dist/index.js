"use strict";var j=function(v,n){return function(){try{return n||v((n={exports:{}}).exports,n),n.exports}catch(r){throw (n=0, r)}};};var x=j(function(f,H){H.exports=[701,301,132,57,23,10,4,1]});var R=j(function(d,O){
var I=require('@stdlib/math-base-assert-is-negative-zero/dist'),J=require('@stdlib/math-base-assert-is-nan/dist'),m=x(),K=m.length;function L(v,n,r,a,u,i,c,o){var b,g,p,y,h,k,s,l,e,q,G,S,A,P;for(b=r.data,g=i.data,p=r.accessors[0],h=r.accessors[1],y=i.accessors[0],k=i.accessors[1],n<0&&(a*=-1,c*=-1,u-=(v-1)*a,o-=(v-1)*c),S=0;S<K;S++)for(l=m[S],A=l;A<v;A++)if(e=p(b,u+A*a),!J(e)){for(q=y(g,o+A*c),s=I(e),P=A;P>=l&&(G=p(b,u+(P-l)*a),!(G<=e&&!(s&&G===e)));P-=l)h(b,u+P*a,G),k(g,o+P*c,y(g,o+(P-l)*c));h(b,u+P*a,e),k(g,o+P*c,q)}return r}O.exports=L
});var Z=j(function(X,B){
var w=require('@stdlib/array-base-arraylike2object/dist'),M=require('@stdlib/math-base-assert-is-negative-zero/dist'),Q=require('@stdlib/math-base-assert-is-nan/dist'),z=x(),T=R(),U=z.length;function V(v,n,r,a,u,i,c,o){var b,g,p,y,h,k,s,l,e,q;if(v<=0||n===0)return r;if(k=w(r),s=w(i),k.accessorProtocol||s.accessorProtocol)return T(v,n,k,a,u,s,c,o),r;for(n<0&&(a*=-1,c*=-1,u-=(v-1)*a,o-=(v-1)*c),l=0;l<U;l++)for(g=z[l],e=g;e<v;e++)if(p=r[u+e*a],!Q(p)){for(y=i[o+e*c],b=M(p),q=e;q>=g&&(h=r[u+(q-g)*a],!(h<=p&&!(b&&h===p)));q-=g)r[u+q*a]=h,i[o+q*c]=i[o+(q-g)*c];r[u+q*a]=p,i[o+q*c]=y}return r}B.exports=V
});var E=j(function(Y,D){
var C=require('@stdlib/strided-base-stride2offset/dist'),W=Z();function _(v,n,r,a,u,i){return W(v,n,r,a,C(v,a),u,i,C(v,i))}D.exports=_
});var $=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=E(),t=Z();$(F,"ndarray",t);module.exports=F;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
