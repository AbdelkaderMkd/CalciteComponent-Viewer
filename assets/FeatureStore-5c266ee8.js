import{bC as k,g$ as A,at as V,ik as Y,aj as F,s as v,aK as M}from"./index-0f198541.js";import{y as C}from"./featureConversionUtils-0b5cb3f0.js";import{o as w}from"./BoundsStore-8e1a9703.js";import{h as x}from"./timeSupport-b9765ddf.js";import{t as $}from"./OptimizedFeature-e90b69df.js";import{t as j}from"./OptimizedGeometry-196224d4.js";function T(r,t){return r?t?4:3:t?3:2}function G(r,t,e,s,o){if(!(t!=null&&t.lengths.length))return null;const u=(o==null?void 0:o.originPosition)==="upperLeft"?-1:1;r.lengths.length&&(r.lengths.length=0),r.coords.length&&(r.coords.length=0);const n=r.coords,h=[],a=e?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:f,coords:g}=t,b=T(e,s);let y=0;for(const i of f){const d=Z(a,g,y,i,e,s,u);d&&h.push(d),y+=i*b}if(h.sort((i,d)=>{let I=u*i[2]-u*d[2];return I===0&&e&&(I=i[4]-d[4]),I}),h.length){let i=6*h[0][2];n[0]=h[0][0]/i,n[1]=h[0][1]/i,e&&(i=6*h[0][4],n[2]=i!==0?h[0][3]/i:0),(n[0]<a[0]||n[0]>a[1]||n[1]<a[2]||n[1]>a[3]||e&&(n[2]<a[4]||n[2]>a[5]))&&(n.length=0)}if(!n.length){const i=t.lengths[0]?O(g,0,f[0],e,s):null;if(!i)return null;n[0]=i[0],n[1]=i[1],e&&i.length>2&&(n[2]=i[2])}return r}function Z(r,t,e,s,o,u,n=1){const h=T(o,u);let a=e,f=e+h,g=0,b=0,y=0,i=0,d=0;for(let E=0,N=s-1;E<N;E++,a+=h,f+=h){const c=t[a],_=t[a+1],l=t[a+2],m=t[f],p=t[f+1],S=t[f+2];let B=c*p-m*_;i+=B,g+=(c+m)*B,b+=(_+p)*B,o&&(B=c*S-m*l,y+=(l+S)*B,d+=B),c<r[0]&&(r[0]=c),c>r[1]&&(r[1]=c),_<r[2]&&(r[2]=_),_>r[3]&&(r[3]=_),o&&(l<r[4]&&(r[4]=l),l>r[5]&&(r[5]=l))}if(i*n>0&&(i*=-1),d*n>0&&(d*=-1),!i)return null;const I=[g,b,.5*i];return o&&(I[3]=y,I[4]=.5*d),I}function O(r,t,e,s,o){const u=T(s,o);let n=t,h=t+u,a=0,f=0,g=0,b=0;for(let y=0,i=e-1;y<i;y++,n+=u,h+=u){const d=r[n],I=r[n+1],E=r[n+2],N=r[h],c=r[h+1],_=r[h+2],l=s?L(d,I,E,N,c,_):P(d,I,N,c);if(l)if(a+=l,s){const m=q(d,I,E,N,c,_);f+=l*m[0],g+=l*m[1],b+=l*m[2]}else{const m=R(d,I,N,c);f+=l*m[0],g+=l*m[1]}}return a>0?s?[f/a,g/a,b/a]:[f/a,g/a]:e>0?s?[r[t],r[t+1],r[t+2]]:[r[t],r[t+1]]:null}function P(r,t,e,s){const o=e-r,u=s-t;return Math.sqrt(o*o+u*u)}function L(r,t,e,s,o,u){const n=s-r,h=o-t,a=u-e;return Math.sqrt(n*n+h*h+a*a)}function R(r,t,e,s){return[r+.5*(e-r),t+.5*(s-t)]}function q(r,t,e,s,o,u){return[r+.5*(s-r),t+.5*(o-t),e+.5*(u-e)]}const z={getObjectId:r=>r.objectId,getAttributes:r=>r.attributes,getAttribute:(r,t)=>r.attributes[t],cloneWithGeometry:(r,t)=>new $(t,r.attributes,null,r.objectId),getGeometry:r=>r.geometry,getCentroid:(r,t)=>(r.centroid==null&&(r.centroid=G(new j,r.geometry,t.hasZ,t.hasM)),r.centroid)},K=k();class X{constructor(t){this.geometryInfo=t,this._boundsStore=new w,this._featuresById=new Map,this._markedIds=new Set,this.events=new A,this.featureAdapter=z}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let t=0;return this._featuresById.forEach(e=>{e.geometry!=null&&e.geometry.coords&&(t+=e.geometry.coords.length)}),{featureCount:this._featuresById.size,vertexCount:t/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(t){if(this.fullBounds==null)return null;const[e,s,o,u]=this.fullBounds;return{xmin:e,ymin:s,xmax:o,ymax:u,spatialReference:x(t)}}add(t){this._add(t),this._emitChanged()}addMany(t){for(const e of t)this._add(e);this._emitChanged()}upsertMany(t){const e=t.map(s=>this._upsert(s));return this._emitChanged(),e.filter(V)}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(t){const e=this._featuresById.get(t);return e?(this._remove(e),this._emitChanged(),e):null}removeManyById(t){this._boundsStore.invalidateIndex();for(const e of t){const s=this._featuresById.get(e);s&&this._remove(s)}this._emitChanged()}forEachBounds(t,e){for(const s of t){const o=this._boundsStore.get(s.objectId);o&&e(Y(K,o))}}getFeature(t){return this._featuresById.get(t)}has(t){return this._featuresById.has(t)}forEach(t){this._featuresById.forEach(e=>t(e))}forEachInBounds(t,e){this._boundsStore.forEachInBounds(t,s=>{e(this._featuresById.get(s))})}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let t=!1;this._featuresById.forEach((e,s)=>{this._markedIds.has(s)||(t=!0,this._remove(e))}),this._markedIds.clear(),t&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(t){var u,n;if(!t)return;const e=t.objectId;if(e==null)return void F.getLogger("esri.layers.graphics.data.FeatureStore").error(new v("featurestore:invalid-feature","feature id is missing",{feature:t}));const s=this._featuresById.get(e);let o;if(this._markedIds.add(e),s?(t.displayId=s.displayId,o=this._boundsStore.get(e),this._boundsStore.delete(e)):this.onFeatureAdd!=null&&this.onFeatureAdd(t),!((n=(u=t.geometry)==null?void 0:u.coords)!=null&&n.length))return this._boundsStore.set(e,null),void this._featuresById.set(e,t);o=C(o??M(),t.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),o!=null&&this._boundsStore.set(e,o),this._featuresById.set(e,t)}_upsert(t){const e=t==null?void 0:t.objectId;if(e==null)return F.getLogger("esri.layers.graphics.data.FeatureStore").error(new v("featurestore:invalid-feature","feature id is missing",{feature:t})),null;const s=this._featuresById.get(e);if(!s)return this._add(t),t;this._markedIds.add(e);const{geometry:o,attributes:u}=t;for(const n in u)s.attributes[n]=u[n];return o&&(s.geometry=o,this._boundsStore.set(e,C(M(),o,this.geometryInfo.hasZ,this.geometryInfo.hasM)??null)),s}_remove(t){this.onFeatureRemove!=null&&this.onFeatureRemove(t);const e=t.objectId;return this._markedIds.delete(e),this._boundsStore.delete(e),this._featuresById.delete(e),t}}export{X as m};
