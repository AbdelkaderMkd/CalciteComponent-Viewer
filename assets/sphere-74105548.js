import{jv as O,jw as F,jx as G,jy as H,dv as A,c0 as _,dw as R,dx as m,d6 as T,dA as w,dz as d,gw as f,jt as L,jz as J,d5 as I,cX as b,iI as Q,aj as U,cW as tt,j0 as X,d7 as E,jA as et,jB as it,dy as st,jC as $,d9 as nt,jD as V,g1 as v,iw as rt,iv as ot,gx as ct}from"./index-0f198541.js";import{E as ut}from"./ByteSizeUnit-d4757d40.js";import{n as at}from"./mat3f64-221ce671.js";import{n as ft}from"./mat4f64-1413b4a7.js";import{n as ht}from"./quatf64-3363c48e.js";class mt{constructor(e){this._allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return this._itemsPtr===0&&O(()=>this._reset()),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*q);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,q));e++)this._items.push(this._allocator())}}const q=1024;let l=class a{constructor(e,i,s){this._itemByteSize=e,this._itemCreate=i,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(s/this._itemByteSize)}get(){this._itemsPtr===0&&O(()=>this._reset());const e=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=e;){const i=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize);for(let s=0;s<this._itemsPerBuffer;++s)this._items.push(this._itemCreate(i,s*this._itemByteSize));this._buffers.push(i)}return this._items[this._itemsPtr++]}_reset(){const e=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>e;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(e=g){return new a(16,F,e)}static createVec3f64(e=g){return new a(24,G,e)}static createVec4f64(e=g){return new a(32,H,e)}static createMat3f64(e=g){return new a(72,at,e)}static createMat4f64(e=g){return new a(128,ft,e)}static createQuatf64(e=g){return new a(32,ht,e)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}};const g=4*ut.KILOBYTES;l.createVec2f64();const h=l.createVec3f64();l.createVec4f64();l.createMat3f64();const gt=l.createMat4f64();l.createQuatf64();function Y(t){return t?C(A(t.origin),A(t.direction)):C(_(),_())}function C(t,e){return{origin:t,direction:e}}function Dt(t,e){const i=dt.get();return i.origin=t,i.direction=e,i}function _t(t,e,i=Y()){return R(i.origin,t),m(i.direction,e,t),i}function lt(t,e,i){const s=T(t.direction,m(i,e,t.origin));return w(i,t.origin,d(i,t.direction,s)),i}const dt=new mt(()=>Y());function pt(t,e){const i=T(t,e)/(f(t)*f(e));return-L(i)}const Pt=p();function p(){return J()}const $t=I,Mt=I;function Z(t,e=p()){return b(e,t)}function wt(t,e){return Q(t[0],t[1],t[2],e)}function yt(t){return t}function Bt(t){t[0]=t[1]=t[2]=t[3]=0}function jt(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t}function y(t){return t[3]}function St(t){return t}function bt(t,e,i,s){return Q(t,e,i,s)}function xt(t,e,i){return t!==i&&R(i,t),i[3]=t[3]+e,i}function zt(t,e,i){return U.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),t===i?i:Z(t,i)}function B(t,e,i){if(e==null||!D(t,e,M))return!1;let{t0:s,t1:n}=M;if((s<0||n<s&&n>0)&&(s=n),s<0)return!1;if(i){const{origin:r,direction:o}=e;i[0]=r[0]+o[0]*s,i[1]=r[1]+o[1]*s,i[2]=r[2]+o[2]*s}return!0}function At(t,e,i){const s=_t(e,i);if(!D(t,s,M))return[];const{origin:n,direction:r}=s,{t0:o,t1:c}=M,u=P=>{const j=_();return ct(j,n,r,P),z(t,j,j)};return Math.abs(o-c)<tt()?[u(o)]:[u(o),u(c)]}const M={t0:0,t1:0};function D(t,e,i){const{origin:s,direction:n}=e,r=Et;r[0]=s[0]-t[0],r[1]=s[1]-t[1],r[2]=s[2]-t[2];const o=n[0]*n[0]+n[1]*n[1]+n[2]*n[2];if(o===0)return!1;const c=2*(n[0]*r[0]+n[1]*r[1]+n[2]*r[2]),u=c*c-4*o*(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-t[3]*t[3]);if(u<0)return!1;const P=Math.sqrt(u);return i.t0=(-c-P)/(2*o),i.t1=(-c+P)/(2*o),!0}const Et=_();function Vt(t,e){return B(t,e,null)}function vt(t,e,i){if(B(t,e,i))return i;const s=K(t,e,h.get());return w(i,e.origin,d(h.get(),e.direction,X(e.origin,s)/f(e.direction))),i}function K(t,e,i){const s=h.get(),n=gt.get();E(s,e.origin,e.direction);const r=y(t);E(i,s,e.origin),d(i,i,1/f(i)*r);const o=N(t,e.origin),c=pt(e.origin,i);return et(n,c+o,s),it(i,i,n),i}function qt(t,e,i){return B(t,e,i)?i:(lt(e,t,i),z(t,i,i))}function z(t,e,i){const s=m(h.get(),e,t),n=d(h.get(),s,t[3]/f(s));return w(i,n,t)}function Ct(t,e){const i=m(h.get(),e,t),s=st(i),n=t[3]*t[3];return Math.sqrt(Math.abs(s-n))}function N(t,e){const i=m(h.get(),e,t),s=f(i),n=y(t),r=n+Math.abs(n-s);return L(n/r)}const S=_();function W(t,e,i,s){const n=m(S,e,t);switch(i){case $.X:{const r=V(n,S)[2];return v(s,-Math.sin(r),Math.cos(r),0)}case $.Y:{const r=V(n,S),o=r[1],c=r[2],u=Math.sin(o);return v(s,-u*Math.cos(c),-u*Math.sin(c),Math.cos(o))}case $.Z:return nt(s,n);default:return}}function k(t,e){const i=m(x,e,t);return f(i)-t[3]}function Ot(t,e,i,s){const n=k(t,e),r=W(t,e,$.Z,x),o=d(x,r,i-n);return w(s,e,o)}function Rt(t,e){const i=rt(t,e),s=y(t);return i<=s*s}function Tt(t,e,i=p()){const s=X(t,e),n=t[3],r=e[3];return s+r<n?(b(i,t),i):s+n<r?(b(i,e),i):(ot(i,t,e,(s+r-n)/(2*s)),i[3]=(s+n+r)/2,i)}const x=_(),Lt=p();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:Pt,altitudeAt:k,angleToSilhouette:N,axisAt:W,clear:Bt,closestPoint:qt,closestPointOnSilhouette:K,containsPoint:Rt,copy:Z,create:p,distanceToSilhouette:Ct,elevate:xt,equals:Mt,exactEquals:$t,fromCenterAndRadius:wt,fromRadius:jt,fromValues:bt,getCenter:St,getRadius:y,intersectLine:At,intersectRay:B,intersectRayClosestSilhouette:vt,intersectsRay:Vt,projectPoint:z,setAltitudeAt:Ot,setExtent:zt,tmpSphere:Lt,union:Tt,wrap:yt},Symbol.toStringTag,{value:"Module"}));export{y as B,p as E,Vt as J,Z as T,St as U,h as c,Y as d,Rt as i,Dt as p,mt as s};
