import{bJ as $,ch as w,bK as I,ci as T,cj as E,ck as O,cl as M,cm as R,cn as j,co as F,bg as L,cp as b,cq as g,cr as v,cs as P,ct as J,cu as N,a9 as f,a5 as q,cv as U,cw as A,cx as _,s as x,ah as k,V as i,X as n,cy as S,a2 as V,a3 as z,cz as K,$ as Z,bN as B,cA as C}from"./index-0f198541.js";import{E as D,f as G,X as H}from"./SublayersOwner-25eb9e1c.js";import{t as W}from"./imageBitmapUtils-67368ad1.js";import"./QueryTask-1363f105.js";import"./executeForIds-faba5d9e.js";import"./query-b77c185a.js";import"./pbfQueryUtils-4293a598.js";import"./pbf-739ba630.js";import"./OptimizedGeometry-196224d4.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./executeQueryJSON-973fb995.js";import"./executeQueryPBF-42cf50a4.js";import"./featureConversionUtils-0b5cb3f0.js";let s=class extends $(w(I(D(G(T(E(O(M(R(j(F(B)))))))))))){constructor(...e){super(...e),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,a){return typeof e=="string"?{url:e,...a}:e}load(e){const a=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(L).then(()=>this._fetchService(a))),Promise.resolve(this)}readImageFormat(e,a){const p=a.supportedImageFormatTypes;return p&&p.includes("PNG32")?"png32":"png24"}writeSublayers(e,a,p,t){var d;if(!this.loaded||!e)return;const o=e.slice().reverse().flatten(({sublayers:r})=>r&&r.toArray().reverse()).toArray();let l=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&((d=this.capabilities.exportMap)!=null&&d.supportsDynamicLayers)){const r=b(t.origin);if(r===g.PORTAL_ITEM){const m=this.createSublayersForOrigin("service").sublayers;l=v(o,m,g.SERVICE)}else if(r>g.PORTAL_ITEM){const m=this.createSublayersForOrigin("portal-item");l=v(o,m.sublayers,b(m.origin))}}const c=[],y={writeSublayerStructure:l,...t};let h=l;o.forEach(r=>{const m=r.write({},y);c.push(m),h=h||r.originOf("visible")==="user"}),c.some(r=>Object.keys(r).length>1)&&(a.layers=c),h&&(a.visibleLayers=o.filter(r=>r.visible).map(r=>r.id))}createExportImageParameters(e,a,p,t){const o=(t==null?void 0:t.pixelRatio)||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const l=new P({layer:this,floors:t==null?void 0:t.floors,scale:J({extent:e,width:a})*o}),c=l.toJSON();l.destroy();const y=!(t!=null&&t.rotation)||this.version<10.3?{}:{rotation:-t.rotation},h=e==null?void 0:e.spatialReference,d=N(h);c.dpi*=o;const r={};if(t!=null&&t.timeExtent){const{start:m,end:u}=t.timeExtent.toJSON();r.time=m&&u&&m===u?""+m:`${m??"null"},${u??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(r.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:d,imageSR:d,size:a+","+p,...c,...y,...r}}async fetchImage(e,a,p,t){const{data:o}=await this._fetchImage("image",e,a,p,t);return o}async fetchImageBitmap(e,a,p,t){const{data:o,url:l}=await this._fetchImage("blob",e,a,p,t);return W(o,l,t==null?void 0:t.signal)}async fetchRecomputedExtents(e={}){const a={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:p}=await f(this.url,a),{extent:t,fullExtent:o,timeExtent:l}=p,c=t||o;return{fullExtent:c&&q.fromJSON(c),timeExtent:l&&U.fromJSON({start:l[0],end:l[1]})}}loadAll(){return A(this,e=>{e(this.allSublayers)})}serviceSupportsSpatialReference(e){return _(this,e)}async _fetchImage(e,a,p,t,o){var y,h,d;const l={responseType:e,signal:(o==null?void 0:o.signal)??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(a,p,t,o),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},c=this.parsedUrl.path+"/export";if(((y=l.query)==null?void 0:y.dynamicLayers)!=null&&!((d=(h=this.capabilities)==null?void 0:h.exportMap)!=null&&d.supportsDynamicLayers))throw new x("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:l.query});try{const{data:r}=await f(c,l);return{data:r,url:c}}catch(r){throw k(r)?r:new x("mapimagelayer:image-fetch-error",`Unable to load image: ${c}`,{error:r})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:a,ssl:p}=await f(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});p&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=a,this.read(a,{origin:"service",url:this.parsedUrl})}};i([n(S("dateFieldsTimeReference"))],s.prototype,"dateFieldsTimeZone",void 0),i([n({type:Boolean})],s.prototype,"datesInUnknownTimezone",void 0),i([n()],s.prototype,"dpi",void 0),i([n()],s.prototype,"gdbVersion",void 0),i([n()],s.prototype,"imageFormat",void 0),i([V("imageFormat",["supportedImageFormatTypes"])],s.prototype,"readImageFormat",null),i([n({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],s.prototype,"imageMaxHeight",void 0),i([n({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],s.prototype,"imageMaxWidth",void 0),i([n()],s.prototype,"imageTransparency",void 0),i([n({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],s.prototype,"isReference",void 0),i([n({json:{read:!1,write:!1}})],s.prototype,"labelsVisible",void 0),i([n({type:["ArcGISMapServiceLayer"]})],s.prototype,"operationalLayerType",void 0),i([n({json:{read:!1,write:!1}})],s.prototype,"popupEnabled",void 0),i([n(S("preferredTimeReference"))],s.prototype,"preferredTimeZone",void 0),i([n()],s.prototype,"sourceJSON",void 0),i([n({json:{write:{ignoreOrigin:!0}}})],s.prototype,"sublayers",void 0),i([z("sublayers",{layers:{type:[H]},visibleLayers:{type:[C]}})],s.prototype,"writeSublayers",null),i([n({type:["show","hide","hide-children"]})],s.prototype,"listMode",void 0),i([n({json:{read:!1},readOnly:!0,value:"map-image"})],s.prototype,"type",void 0),i([n(K)],s.prototype,"url",void 0),s=i([Z("esri.layers.MapImageLayer")],s);const me=s;export{me as default};
