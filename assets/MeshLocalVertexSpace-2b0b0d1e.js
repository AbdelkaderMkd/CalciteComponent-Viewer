import{cP as a,cO as s,b$ as c,a0 as l,c0 as y,bi as u,c1 as p,V as i,c2 as f,X as g,$ as h}from"./index-0f198541.js";function $(r,e=!1){return r<=a?e?new Array(r).fill(0):new Array(r):new Float64Array(r)}function m(r){return(s(r)?r.length:r.byteLength/8)<=a?Array.from(r):new Float64Array(r)}function w(r,e,t){return Array.isArray(r)?r.slice(e,e+t):r.subarray(e,e+t)}function b(r,e){for(let t=0;t<e.length;++t)r[t]=e[t];return r}function x(r){return Array.isArray(r)?new Float64Array(r):r}let o=class extends c(l){constructor(r){super(r),this.type="local",this.isRelative=!0,this.isGeoreferenced=!1,this.origin=y()}getOriginPoint(r){const[e,t,n]=this.origin;return new u({x:e,y:t,z:n,spatialReference:r})}setOriginFromPoint({x:r,y:e,z:t}){this.origin=p(r,e,t??0)}};i([f({local:"local"},{readOnly:!0})],o.prototype,"type",void 0),i([g({type:[Number],nonNullable:!0,json:{write:!0}})],o.prototype,"origin",void 0),o=i([h("esri.geometry.support.MeshLocalVertexSpace")],o);const d=o;export{w as a,m as e,d as m,b as o,$ as t,x as y};
