import{dm as f,dn as h,dl as m,dp as p,dq as y,dr as g,a$ as a,_ as w}from"./index-0f198541.js";import{n as _}from"./date-294ce3fb.js";class I{constructor(){this.code=null,this.description=null}}class b{constructor(r){this.error=new I,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=r}}function c(n){return new b(n)}class q{constructor(r){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=r}}function A(n){return new q(n)}const l=new Set;function F(n,r,e,d=!1){l.clear();for(const i in e){const t=n.get(i);if(!t)continue;const o=P(t,e[i]);if(l.add(t.name),t&&(d||t.editable)){const u=f(t,o);if(u)return c(h(u,t,o));r[t.name]=o}}for(const i of(n==null?void 0:n.requiredFields)??[])if(!l.has(i.name))return c(`missing required field "${i.name}"`);return null}function P(n,r){let e=r;return m(n)&&typeof r=="string"?e=parseFloat(r):p(n)&&r!=null&&typeof r!="string"?e=String(r):y(n)&&typeof r=="string"&&(e=_(r)),g(e)}let s;function G(n,r){if(!n||!a(r))return n;if("rings"in n||"paths"in n){if(s==null)throw new TypeError("geometry engine not loaded");return s.simplify(r,n)}return n}async function j(){return s==null&&(s=await w(()=>import("./geometryEngineJSON-dc8e8321.js"),["assets/geometryEngineJSON-dc8e8321.js","assets/geometryEngineBase-a9201d5d.js","assets/index-0f198541.js","assets/index-18a8f54e.css","assets/geometryEngineJSON-5880f0ed.js","assets/json-48e3ea08.js"])),s}async function S(n,r){!a(n)||r!=="esriGeometryPolygon"&&r!=="esriGeometryPolyline"||await j()}export{S as I,A as d,c as f,F as p,G as w};
