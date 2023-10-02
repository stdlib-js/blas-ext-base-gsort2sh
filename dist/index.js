"use strict";var A=function(q,f){return function(){return f||q((f={exports:{}}).exports,f),f.exports}};var G=A(function(L,R){R.exports=[701,301,132,57,23,10,4,1]});var b=A(function(M,S){
var w=require('@stdlib/math-base-assert-is-negative-zero/dist'),z=require('@stdlib/math-base-assert-is-nan/dist'),P=G(),B=P.length;function C(q,f,v,a,c,g){var n,o,h,u,e,k,l,p,i,r;if(q<=0||f===0)return v;for(f<0&&(a*=-1,g*=-1),a<0?n=(1-q)*a:n=0,g<0?o=(1-q)*g:o=0,p=0;p<B;p++)for(u=P[p],i=u;i<q;i++)if(e=v[n+i*a],!z(e)){for(k=c[o+i*g],h=w(e),r=i;r>=u&&(l=v[n+(r-u)*a],!(l<=e&&!(h&&l===e)));r-=u)v[n+r*a]=l,c[o+r*g]=c[o+(r-u)*g];v[n+r*a]=e,c[o+r*g]=k}return v}S.exports=C
});var m=A(function(Q,Z){
var D=require('@stdlib/math-base-assert-is-negative-zero/dist'),E=require('@stdlib/math-base-assert-is-nan/dist'),j=G(),F=j.length;function H(q,f,v,a,c,g,n,o){var h,u,e,k,l,p,i,r;if(q<=0||f===0)return v;for(f<0&&(a*=-1,n*=-1,c-=(q-1)*a,o-=(q-1)*n),p=0;p<F;p++)for(u=j[p],i=u;i<q;i++)if(e=v[c+i*a],!E(e)){for(k=g[o+i*n],h=D(e),r=i;r>=u&&(l=v[c+(r-u)*a],!(l<=e&&!(h&&l===e)));r-=u)v[c+r*a]=l,g[o+r*n]=g[o+(r-u)*n];v[c+r*a]=e,g[o+r*n]=k}return v}Z.exports=H
});var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=b(),J=m();I(O,"ndarray",J);module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
