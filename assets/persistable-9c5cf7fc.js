import{ee as x,ef as N,eg as P,eh as v,ei as b,cp as S,ej as A,ek as R,el as U,em as O,s as F,en as z,az as J,aE as K,eo as k,aF as C,ep as E}from"./index-0f198541.js";import{i as H}from"./multiOriginJSONSupportUtils-c978f4c3.js";import{p as y}from"./resourceExtension-6a4e1bd5.js";function Q(e){const o=(e==null?void 0:e.origins)??[void 0];return(r,n)=>{const s=V(e,r,n);for(const a of o){const i=x(r,a,n);for(const t in s)i[t]=s[t]}}}function V(e,o,r){if((e==null?void 0:e.type)==="resource")return Y(e,o,r);switch((e==null?void 0:e.type)??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:n,write:s}=E;return{read:n,write:s}}}}function Y(e,o,r){const n=N(o,r);return{type:String,read:(s,a,i)=>{const t=P(s,a,i);return n.type===String?t:typeof n.type=="function"?new n.type({url:t}):void 0},write:{writer(s,a,i,t){if(!(t!=null&&t.resources))return typeof s=="string"?void(a[i]=v(s,t)):void(a[i]=s.write({},t));const c=B(s),p=v(c,{...t,verifyItemRelativeUrls:t!=null&&t.verifyItemRelativeUrls?{writtenUrls:t.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},b.NO),d=n.type!==String&&(!H(this)||(t==null?void 0:t.origin)&&this.originIdOf(r)>S(t.origin)),l={object:this,propertyName:r,value:s,targetUrl:p,dest:a,targetPropertyName:i,context:t,params:e};t!=null&&t.portalItem&&p&&!A(p)?d&&(e!=null&&e.contentAddressed)?g(l):d?Z(l):q(l):t!=null&&t.portalItem&&(p==null||R(p)!=null||U(p)||d)?g(l):a[i]=p}}}}function g(e){var h;const{targetUrl:o,params:r,value:n,context:s,dest:a,targetPropertyName:i}=e;if(!s.portalItem)return;const t=O(o),c=I(n,o,s);if(r!=null&&r.contentAddressed&&c.type!=="json")return void((h=s.messages)==null?void 0:h.push(new F("persistable:contentAddressingUnsupported",`Property "${i}" is trying to serializing a resource with content of type ${c.type} with content addressing. Content addressing is only supported for json resources.`,{content:c})));const p=r!=null&&r.contentAddressed&&c.type==="json"?z(c.jsonString):(t==null?void 0:t.filename)??J(),d=K((r==null?void 0:r.prefix)??(t==null?void 0:t.prefix),p),l=`${d}.${y(c)}`;if(r!=null&&r.contentAddressed&&s.resources&&c.type==="json"){const m=s.resources.toKeep.find(f=>f.resource.path===l)??s.resources.toAdd.find(f=>f.resource.path===l);if(m)return void(a[i]=m.resource.itemRelativeUrl)}const u=s.portalItem.resourceFromPath(l);U(o)&&s.resources&&s.resources.pendingOperations.push(k(o).then(m=>{u.path=`${d}.${y({type:"blob",blob:m})}`,a[i]=u.itemRelativeUrl}).catch(()=>{}));const j=(r==null?void 0:r.compress)??!1;s.resources&&w({...e,resource:u,content:c,compress:j,updates:s.resources.toAdd}),a[i]=u.itemRelativeUrl}function Z(e){const{context:o,targetUrl:r,params:n,value:s,dest:a,targetPropertyName:i}=e;if(!o.portalItem)return;const t=o.portalItem.resourceFromPath(r),c=I(s,r,o),p=y(c),d=C(t.path),l=(n==null?void 0:n.compress)??!1;p===d?(o.resources&&w({...e,resource:t,content:c,compress:l,updates:o.resources.toUpdate}),a[i]=r):g(e)}function q({context:e,targetUrl:o,dest:r,targetPropertyName:n}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(o),compress:!1}),r[n]=o)}function w({object:e,propertyName:o,updates:r,resource:n,content:s,compress:a}){r.push({resource:n,content:s,compress:a,finish:i=>{D(e,o,i)}})}function I(e,o,r){return typeof e=="string"?{type:"url",url:o}:{type:"json",jsonString:JSON.stringify(e.toJSON(r))}}function B(e){return e==null?null:typeof e=="string"?e:e.url}function D(e,o,r){typeof e[o]=="string"?e[o]=r.url:e[o].url=r.url}export{Q as j};