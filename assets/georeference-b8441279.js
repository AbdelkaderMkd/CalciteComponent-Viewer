import{ka as Nt,kb as et,kc as Lt,kd as jt,ke as f,d as Bt,hV as Vt,kf as k,kg as It,i_ as yt,c0 as w,b$ as Wt,a0 as $t,V as m,c2 as Gt,$ as mt,kh as zt,ki as qt,kj as Ht,dw as Ut,iT as Dt,X as T,kk as Yt,c1 as ht,dv as b,kl as Kt,km as At,jB as rt,kn as Xt,aj as Pt,gj as G,ko as nt,g3 as ot,g2 as at,kp as Jt,d9 as Qt,kq as Zt,cU as te,cV as ee,iR as q,kr as dt,ks as it,kt as re,dB as ne,bt as oe,ku as ae,kv as ie,hW as se,kw as le}from"./index-0f198541.js";import{e as Ft}from"./mat3f64-221ce671.js";import{e as v,o as V}from"./mat4f64-1413b4a7.js";import{c as O}from"./spatialReferenceEllipsoidUtils-c7fb8a9b.js";import{m as ce,t as st,o as ue}from"./MeshLocalVertexSpace-2b0b0d1e.js";import{m as fe}from"./MeshGeoreferencedRelativeVertexSpace-5ab44d4e.js";import{v as Y,y as pe,x as ge}from"./quat-b9d6846c.js";import{e as Q}from"./quatf64-3363c48e.js";import{n as M,s as Tt,r as E}from"./vec32-317bfbb9.js";import{i as d,T as F}from"./BufferView-5d2fbcc3.js";function Rt(t,e,r){const n=Math.sin(t),o=Math.cos(t),a=Math.sin(e),s=Math.cos(e),i=r;return i[0]=-n,i[4]=-a*o,i[8]=s*o,i[12]=0,i[1]=o,i[5]=-a*n,i[9]=s*n,i[13]=0,i[2]=0,i[6]=s,i[10]=a,i[14]=0,i[3]=0,i[7]=0,i[11]=0,i[15]=1,i}function ye(t,e,r){return Rt(t,e,r),Nt(r,r),r}function z(t,e,r,n){if(t==null||n==null)return!1;const o=et(t,Lt),a=et(n,jt);if(o===a&&!lt(a)&&(o!==f.UNKNOWN||Bt(t,n)))return Vt(r,e),!0;if(lt(a)){const s=k[o][f.LON_LAT],i=k[f.LON_LAT][a];return s!=null&&i!=null&&(s(e,0,A,0),i(A,0,P,0),Rt(S*A[0],S*A[1],r),r[12]=P[0],r[13]=P[1],r[14]=P[2],!0)}if((a===f.WEB_MERCATOR||a===f.PLATE_CARREE)&&(o===f.WGS84||o===f.CGCS2000&&a===f.PLATE_CARREE||o===f.SPHERICAL_ECEF||o===f.WEB_MERCATOR)){const s=k[o][f.LON_LAT],i=k[f.LON_LAT][a];return s!=null&&i!=null&&(s(e,0,A,0),i(A,0,P,0),o===f.SPHERICAL_ECEF?ye(S*A[0],S*A[1],r):It(r),r[12]=P[0],r[13]=P[1],r[14]=P[2],!0)}return!1}function lt(t){return t===f.SPHERICAL_ECEF||t===f.SPHERICAL_MARS_PCPF||t===f.SPHERICAL_MOON_PCPF}const S=yt(1),A=w(),P=w();let I=class extends Wt($t){constructor(){super({}),this.type="georeferenced",this.isRelative=!1,this.isGeoreferenced=!0}};m([Gt({georeferenced:"georeferenced"},{readOnly:!0})],I.prototype,"type",void 0),I=m([mt("esri.geometry.support.MeshGeoreferencedVertexSpace")],I);const $e=I;function _(t=_t){return[t[0],t[1],t[2],t[3]]}function W(t,e,r=_()){return Ut(r,t),r[3]=e,r}function ct(t,e,r=_()){return Y(N,t,K(t)),Y(ut,e,K(e)),pe(N,ut,N),he(r,Dt(ge(r,N)))}function Je(t,e,r,n=_()){return W(zt,t,L),W(qt,e,ft),W(Ht,r,pt),ct(L,ft,L),ct(L,pt,n),n}function Qe(t){return t}function me(t){return t[3]}function K(t){return yt(t[3])}function he(t,e){return t[3]=e,t}const _t=[0,0,1,0],N=Q(),ut=Q();_();const L=_(),ft=_(),pt=_();var X;let $=X=class extends $t{constructor(t){super(t),this.translation=w(),this.rotationAxis=Yt(_t),this.rotationAngle=0,this.scale=ht(1,1,1)}get rotation(){return W(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=b(t),this.rotationAngle=me(t)}get localMatrix(){const t=v();return Y(gt,this.rotation,K(this.rotation)),Kt(t,gt,this.translation,this.scale),t}get localMatrixInverse(){return At(v(),this.localMatrix)}applyLocal(t,e){return rt(e,t,this.localMatrix)}applyLocalInverse(t,e){return rt(e,t,this.localMatrixInverse)}equals(t){return this===t||t!=null&&Xt(this.localMatrix,t.localMatrix)}clone(){const t={translation:b(this.translation),rotationAxis:b(this.rotationAxis),rotationAngle:this.rotationAngle,scale:b(this.scale)};return new X(t)}};m([T({type:[Number],nonNullable:!0,json:{write:!0}})],$.prototype,"translation",void 0),m([T({type:[Number],nonNullable:!0,json:{write:!0}})],$.prototype,"rotationAxis",void 0),m([T({type:Number,nonNullable:!0,json:{write:!0}})],$.prototype,"rotationAngle",void 0),m([T({type:[Number],nonNullable:!0,json:{write:!0}})],$.prototype,"scale",void 0),m([T()],$.prototype,"rotation",null),m([T()],$.prototype,"localMatrix",null),m([T()],$.prototype,"localMatrixInverse",null),$=X=m([mt("esri.geometry.support.MeshTransform")],$);const gt=Q(),Ae=$;function Mt(t,e){return t.isGeographic||t.isWebMercator&&((e==null?void 0:e.geographic)??!0)}function Ze(t,e,r){const n=!t.isGeoreferenced;(r==null?void 0:r.geographic)!=null&&r.geographic!==n&&Pt.getLogger(e).warnOnce(`Specifying the 'geographic' parameter (${r.geographic}) for a Mesh vertex space of type "${t.type}" is not supported. This parameter will be ignored.`)}const H=Pt.getLogger("esri.geometry.support.meshUtils.normalProjection");function Pe(t,e,r,n,o){return D(n)?(U(h.TO_PCPF,d.fromTypedArray(t),F.fromTypedArray(e),F.fromTypedArray(r),n,d.fromTypedArray(o)),o):(H.error("Cannot convert spatial reference to PCPF"),o)}function de(t,e,r,n,o){return D(n)?(U(h.FROM_PCPF,d.fromTypedArray(t),F.fromTypedArray(e),F.fromTypedArray(r),n,d.fromTypedArray(o)),o):(H.error("Cannot convert to spatial reference from PCPF"),o)}function Fe(t,e,r){return G(t,e,0,r,O(e),0,t.length/3),r}function Te(t,e,r){return G(t,O(r),0,e,r,0,t.length/3),e}function Re(t,e,r){return q(u,r),M(e,t,u),dt(u)||Tt(e,e),e}function _e(t,e,r){if(q(u,r),M(e,t,u,4),dt(u)||Tt(e,e,4),t!==e)for(let n=3;n<t.length;n+=4)e[n]=t[n];return e}function Me(t,e,r,n,o){if(!D(n))return H.error("Cannot convert spatial reference to PCPF"),o;U(h.TO_PCPF,d.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),F.fromTypedArray(e),F.fromTypedArray(r),n,d.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT));for(let a=3;a<t.length;a+=4)o[a]=t[a];return o}function Ce(t,e,r,n,o){if(!D(n))return H.error("Cannot convert to spatial reference from PCPF"),o;U(h.FROM_PCPF,d.fromTypedArray(t,16),F.fromTypedArray(e),F.fromTypedArray(r),n,d.fromTypedArray(o,16));for(let a=3;a<t.length;a+=4)o[a]=t[a];return o}function U(t,e,r,n,o,a){if(!e)return;const s=r.count,i=O(o);if(Ct(o))for(let c=0;c<s;c++)n.getVec(c,j),e.getVec(c,y),z(i,j,B,i),nt(u,B),t===h.FROM_PCPF&&ot(u,u),at(y,y,u),a.setVec(c,y);else for(let c=0;c<s;c++){n.getVec(c,j),e.getVec(c,y),z(i,j,B,i),nt(u,B);const l=Jt(r.get(c,1));let p=Math.cos(l);t===h.TO_PCPF&&(p=1/p),u[0]*=p,u[1]*=p,u[2]*=p,u[3]*=p,u[4]*=p,u[5]*=p,t===h.FROM_PCPF&&ot(u,u),at(y,y,u),Qt(y,y),a.setVec(c,y)}return a}function D(t){return Ct(t)||xe(t)}function Ct(t){return t.isWGS84||Zt(t)||te(t)||ee(t)}function xe(t){return t.isWebMercator}var h;(function(t){t[t.TO_PCPF=0]="TO_PCPF",t[t.FROM_PCPF=1]="FROM_PCPF"})(h||(h={}));const j=w(),y=w(),B=v(),u=Ft();function Z(t,e,r){return Mt(e.spatialReference,r)?ke(t,e,r):Oe(t,e,r)}function xt(t,e=V){const{position:r,normal:n,tangent:o}=t;return{position:E(new Float64Array(r.length),r,e),normal:n!=null?Re(n,new Float32Array(n.length),e):null,tangent:o!=null?_e(o,new Float32Array(o.length),e):null}}function vt(t,e,r,n){const{position:o,normal:a,tangent:s}=t;return e.isRelative?Z(xt(t,r==null?void 0:r.localMatrix),e.getOriginPoint(n),{geographic:!e.isGeoreferenced}):{position:o,normal:a,tangent:s}}function ve(t,e,r){if(r!=null&&r.useTransform){const{position:n,normal:o,tangent:a}=t,{x:s,y:i,z:c}=e,l=ht(s,i,c??0);return{vertexAttributes:{position:n,normal:o,tangent:a},vertexSpace:r.geographic??1?new ce({origin:l}):new fe({origin:l}),transform:new Ae}}return{vertexAttributes:Z(t,e,r),vertexSpace:new $e,transform:null}}function J(t,e,r){return Mt(e.spatialReference,r)?Le(t,e,r):Et(t,e,r)}function Ee(t,e,r,n,o){if(!e.isRelative)return J(t,n,o);const{spatialReference:a}=n,s=vt(t,e,r,a);return n.equals(e.getOriginPoint(a))?Et(s,n,o):J(s,n,o)}function we({positions:t,transform:e,vertexSpace:r,inSpatialReference:n,outSpatialReference:o,outPositions:a,localMode:s}){const i=r.isRelative?r.origin:it,c=r.isRelative?(e==null?void 0:e.localMatrix)??V:V;if(r.isGeoreferenced){const g=a??st(t.length);if(re(c,V)?ue(g,t):E(g,t,c),!ne(i,it)){const[kt,bt,St]=i;for(let x=0;x<g.length;x+=3)g[x]+=kt,g[x+1]+=bt,g[x+2]+=St}return G(g,n,0,g,o,0,g.length/3),g}let l=n;const p=O(n);l=o.isWebMercator&&s||!oe(n,p)?l:p,z(n,i,R,l),ae(R,R,c);const C=a??st(t.length);return E(C,t,R),G(C,l,0,C,o,0,C.length/3),C}function Oe(t,e,r){const n=new Float64Array(t.position.length),o=t.position,a=e.x,s=e.y,i=e.z??0,c=tt(r?r.unit:null,e.spatialReference);for(let l=0;l<o.length;l+=3)n[l]=o[l]*c+a,n[l+1]=o[l+1]*c+s,n[l+2]=o[l+2]*c+i;return{position:n,normal:t.normal,tangent:t.tangent}}function ke(t,e,r){const n=e.spatialReference,o=wt(e,r,R),a=new Float64Array(t.position.length),s=be(t.position,o,n,a),i=q(Ot,o);return{position:s,normal:Se(s,a,t.normal,i,n),tangent:Ne(s,a,t.tangent,i,n)}}function be(t,e,r,n){E(n,t,e);const o=new Float64Array(t.length);return Te(n,o,r)}function Se(t,e,r,n,o){if(r==null)return null;const a=new Float32Array(r.length);return M(a,r,n),de(a,t,e,o,a),a}function Ne(t,e,r,n,o){if(r==null)return null;const a=new Float32Array(r.length);M(a,r,n,4);for(let s=3;s<a.length;s+=4)a[s]=r[s];return Ce(a,t,e,o,a),a}function Et(t,e,r){const n=new Float64Array(t.position.length),o=t.position,a=e.x,s=e.y,i=e.z??0,c=tt(r?r.unit:null,e.spatialReference);for(let l=0;l<o.length;l+=3)n[l]=(o[l]-a)/c,n[l+1]=(o[l+1]-s)/c,n[l+2]=(o[l+2]-i)/c;return{position:n,normal:t.normal,tangent:t.tangent}}function Le(t,e,r){const n=e.spatialReference;wt(e,r,R);const o=At(Ie,R),a=new Float64Array(t.position.length),s=je(t.position,n,o,a),i=q(Ot,o);return{position:s,normal:Be(t.normal,t.position,a,n,i),tangent:Ve(t.tangent,t.position,a,n,i)}}function wt(t,e,r){z(t.spatialReference,[t.x,t.y,t.z??0],r,O(t.spatialReference));const n=tt(e?e.unit:null,t.spatialReference);return ie(r,r,[n,n,n]),r}function je(t,e,r,n){const o=Fe(t,e,n),a=new Float64Array(o.length);return E(a,o,r),a}function Be(t,e,r,n,o){if(t==null)return null;const a=Pe(t,e,r,n,new Float32Array(t.length));return M(a,a,o),a}function Ve(t,e,r,n,o){if(t==null)return null;const a=Me(t,e,r,n,new Float32Array(t.length));return M(a,a,o,4),a}function tt(t,e){if(t==null)return 1;const r=se(e);return 1/le(r,"meters",t)}const R=v(),Ie=v(),Ot=Ft(),tr=Object.freeze(Object.defineProperty({__proto__:null,applyTransform:xt,georeference:Z,georeferenceApplyTransform:vt,georeferenceByTransform:ve,project:we,ungeoreference:J,ungeoreferenceByTransform:Ee},Symbol.toStringTag,{value:"Module"}));export{ve as B,J as D,Ee as E,we as I,z as L,Ae as N,Te as O,Me as R,Z as U,xt as V,de as _,_ as a,ct as b,tr as c,Je as g,Fe as h,Pe as j,Qe as l,Ze as o,$e as p,vt as q,Mt as r,Ce as v,K as w};