import{e6 as ce,V as t,X as s,a2 as I,cA as he,ls as q,$ as p,e as ge,aj as x,gA as ee,jk as te,dc as fe,er as re,gH as me,a9 as se,bl as be,iM as ve,s as F,as as Se,a5 as we,f as ie,bL as $e,gP as Oe,gN as xe,ao as Fe,c2 as oe,b3 as Ie,gT as je,an as v,ex as Le,lt as Te,a0 as f,bA as d,lu as Ee,az as Ae,ci as Be,cj as _e,ck as qe,bK as Ne,cl as Re,cn as Pe,bH as Me,aE as ke,bg as Qe,cw as Ue,lv as Ke,e8 as Ve,gI as Ce,bN as De}from"./index-0f198541.js";import{s as He,i as Je}from"./I3SUtil-6c99a5b8.js";import{r as Ze,E as ze,P as H}from"./SceneService-e8d45f8d.js";import{s as Ge,l as Xe,u as We,m as Ye}from"./I3SLayerDefinitions-a52b87d0.js";import{n as et,p as tt}from"./popupUtils-1f3e975e.js";import{l as rt}from"./associatedFeatureServiceUtils-668c47ea.js";import{x as J,p as st,E as it}from"./elevationInfoUtils-cc4fd3f5.js";import"./mat3f64-221ce671.js";import"./mat4f64-1413b4a7.js";import"./quat-b9d6846c.js";import"./quatf64-3363c48e.js";import"./spatialReferenceEllipsoidUtils-c7fb8a9b.js";import"./I3SBinaryReader-cb0dabe1.js";import"./VertexAttribute-0e674613.js";import"./orientedBoundingBox-1fd5454b.js";import"./plane-ae0f52de.js";import"./sphere-74105548.js";import"./ByteSizeUnit-d4757d40.js";import"./originUtils-cfe4feaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./saveAPIKeyUtils-f7e15c9b.js";import"./saveUtils-989cfa16.js";import"./resourceUtils-baf26f2f.js";let y=class extends ce(ge){constructor(r){super(r),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.legendEnabled=!0,this.visible=!0,this.opacity=1}readTitle(r,i){return typeof i.alias=="string"?i.alias:typeof i.name=="string"?i.name:""}readIdOnlyOnce(r){return this.id!==-1?this.id:typeof r=="number"?r:-1}};t([s({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],y.prototype,"title",void 0),t([I("service","title",["alias","name"])],y.prototype,"readTitle",null),t([s()],y.prototype,"layer",void 0),t([s({type:he,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],y.prototype,"id",void 0),t([I("service","id")],y.prototype,"readIdOnlyOnce",null),t([s(q(String))],y.prototype,"modelName",void 0),t([s(q(Boolean))],y.prototype,"isEmpty",void 0),t([s({type:Boolean,nonNullable:!0})],y.prototype,"legendEnabled",void 0),t([s({type:Boolean,json:{name:"visibility",write:!0}})],y.prototype,"visible",void 0),t([s({type:Number,json:{write:!0}})],y.prototype,"opacity",void 0),y=t([p("esri.layers.buildingSublayers.BuildingSublayer")],y);const ae=y,le="esri.layers.buildingSublayers.BuildingComponentSublayer",ot=x.getLogger(le),Z=je();let a=class extends ee.LoadableMixin(te(ae)){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){var e,r;return this.layer?{path:`${(e=this.layer.parsedUrl)==null?void 0:e.path}/sublayers/${this.id}`,query:(r=this.layer.parsedUrl)==null?void 0:r.query}:{path:""}}get fieldsIndex(){return new fe(this.fields)}readAssociatedLayer(e,r){const i=this.layer.associatedFeatureServiceItem,o=r.associatedLayerID;return i!=null&&typeof o=="number"?new re({portalItem:i,layerId:o}):null}get objectIdField(){if(this.fields!=null){for(const e of this.fields)if(e.type==="oid")return e.name}return null}get displayField(){return this.associatedLayer!=null?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const r=e!=null?e.signal:null,i=this._fetchService(r).then(()=>{this.indexInfo=Ze(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,ot,r)});return this.addResolvingPromise(i),Promise.resolve(this)}createPopupTemplate(e){return me(this,e)}async _fetchService(e){const r=(await se(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){var o,l,c;const i=(l=(o=this.getFeatureType(r==null?void 0:r.feature))==null?void 0:o.domains)==null?void 0:l[e];return i&&i.type!=="inherited"?i:((c=this.getField(e))==null?void 0:c.domain)??null}getFeatureType(e){return e&&this.associatedLayer!=null?this.associatedLayer.getFeatureType(e):null}get types(){return this.associatedLayer!=null?this.associatedLayer.types??[]:[]}get typeIdField(){return this.associatedLayer!=null?this.associatedLayer.typeIdField:null}get geometryType(){return this.layerType==="3d-object"?"mesh":"point"}get profile(){return this.layerType==="3d-object"?"mesh-pyramids":"points"}get capabilities(){const e=this.associatedLayer!=null&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:He,{query:r,data:{supportsZ:i,supportsM:o,isVersioned:l}}=e;return{query:r,data:{supportsZ:i,supportsM:o,isVersioned:l}}}createQuery(){const e=new be;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,r){return this._getAssociatedLayerForQuery().then(i=>i.queryExtent(e||this.createQuery(),r))}queryFeatureCount(e,r){return this._getAssociatedLayerForQuery().then(i=>i.queryFeatureCount(e||this.createQuery(),r))}queryFeatures(e,r){return this._getAssociatedLayerForQuery().then(i=>i.queryFeatures(e||this.createQuery(),r)).then(i=>{if(i!=null&&i.features)for(const o of i.features)o.layer=this.layer,o.sourceLayer=this;return i})}queryObjectIds(e,r){return this._getAssociatedLayerForQuery().then(i=>i.queryObjectIds(e||this.createQuery(),r))}async queryCachedAttributes(e,r){const i=ve(this.fieldsIndex,await et(this,tt(this)));return Je(this.parsedUrl.path,this.attributeStorageInfo,e,r,i)}async queryCachedFeature(e,r){const i=await this.queryCachedAttributes(e,[r]);if(!i||i.length===0)throw new F("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const o=new Se;return o.attributes=i[0],o.layer=this,o.sourceLayer=this,o}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:this.associatedLayer!=null}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e!=null&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),this.associatedLayer==null)throw new F("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new F("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};t([s({readOnly:!0})],a.prototype,"parsedUrl",null),t([s({type:Ge,readOnly:!0})],a.prototype,"nodePages",void 0),t([s({type:[Xe],readOnly:!0})],a.prototype,"materialDefinitions",void 0),t([s({type:[We],readOnly:!0})],a.prototype,"textureSetDefinitions",void 0),t([s({type:[Ye],readOnly:!0})],a.prototype,"geometryDefinitions",void 0),t([s({readOnly:!0})],a.prototype,"serviceUpdateTimeStamp",void 0),t([s({readOnly:!0})],a.prototype,"store",void 0),t([s({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],a.prototype,"rootNode",void 0),t([s({readOnly:!0})],a.prototype,"attributeStorageInfo",void 0),t([s(Z.fields)],a.prototype,"fields",void 0),t([s({readOnly:!0})],a.prototype,"fieldsIndex",null),t([s({readOnly:!0,type:re})],a.prototype,"associatedLayer",void 0),t([I("service","associatedLayer",["associatedLayerID"])],a.prototype,"readAssociatedLayer",null),t([s(Z.outFields)],a.prototype,"outFields",void 0),t([s({type:String,readOnly:!0})],a.prototype,"objectIdField",null),t([s({readOnly:!0,type:String,json:{read:!1}})],a.prototype,"displayField",null),t([s({readOnly:!0,type:String})],a.prototype,"apiKey",null),t([s({readOnly:!0,type:we})],a.prototype,"fullExtent",null),t([s({readOnly:!0,type:ie})],a.prototype,"spatialReference",null),t([s({readOnly:!0})],a.prototype,"version",null),t([s({readOnly:!0,type:$e})],a.prototype,"elevationInfo",null),t([s({readOnly:!0,type:Number})],a.prototype,"minScale",null),t([s({readOnly:!0,type:Number})],a.prototype,"maxScale",null),t([s({readOnly:!0,type:Number})],a.prototype,"effectiveScaleRange",null),t([s({type:["hide","show"],json:{write:!0}})],a.prototype,"listMode",void 0),t([s({types:Oe,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],a.prototype,"renderer",void 0),t([s({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],a.prototype,"definitionExpression",void 0),t([s(xe)],a.prototype,"popupEnabled",void 0),t([s({type:Fe,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],a.prototype,"popupTemplate",void 0),t([s({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],a.prototype,"normalReferenceFrame",void 0),t([s({readOnly:!0,json:{read:!1}})],a.prototype,"defaultPopupTemplate",null),t([s()],a.prototype,"types",null),t([s()],a.prototype,"typeIdField",null),t([s({json:{write:!1}}),oe(new Ie({"3DObject":"3d-object",Point:"point"}))],a.prototype,"layerType",void 0),t([s()],a.prototype,"geometryType",null),t([s()],a.prototype,"profile",null),t([s({readOnly:!0,json:{read:!1}})],a.prototype,"capabilities",null),a=t([p(le)],a);const N=a;var R;const z={type:v,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:ne}}},read:!1}};function ne(e,r,i){if(e&&Array.isArray(e))return new v(e.map(o=>{const l=at(o);if(l){const c=new l;return c.read(o,i),c}return i!=null&&i.messages&&o&&i.messages.push(new Le("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(o.type||"unknown")+"' are not supported",{definition:o,context:i})),null}))}let g=R=class extends ae{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return Te(this,e=>R.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}))}};function at(e){return e.layerType==="group"?g:N}t([s({type:["hide","show","hide-children"],json:{write:!0}})],g.prototype,"listMode",void 0),t([s(z)],g.prototype,"sublayers",void 0),g=R=t([p("esri.layers.buildingSublayers.BuildingGroupSublayer")],g),function(e){function r(i,o){i.forEach(l=>{o(l),l.type==="building-group"&&r(l.sublayers,o)})}e.sublayersProperty=z,e.readSublayers=ne,e.forEachSublayer=r}(g||(g={}));const m=g;let j=class extends f{constructor(){super(...arguments),this.type=null}};t([s({type:String,readOnly:!0,json:{write:!0}})],j.prototype,"type",void 0),j=t([p("esri.layers.support.BuildingFilterAuthoringInfo")],j);const pe=j;var P;let S=P=class extends f{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new P({filterType:this.filterType,filterValues:d(this.filterValues)})}};t([s({type:String,json:{write:!0}})],S.prototype,"filterType",void 0),t([s({type:[String],json:{write:!0}})],S.prototype,"filterValues",void 0),S=P=t([p("esri.layers.support.BuildingFilterAuthoringInfoType")],S);const lt=S;var M;const nt=v.ofType(lt);let L=M=class extends f{clone(){return new M({filterTypes:d(this.filterTypes)})}};t([s({type:nt,json:{write:!0}})],L.prototype,"filterTypes",void 0),L=M=t([p("esri.layers.support.BuildingFilterAuthoringInfoBlock")],L);const pt=L;var k;const yt=v.ofType(pt);let w=k=class extends pe{constructor(){super(...arguments),this.type="checkbox"}clone(){return new k({filterBlocks:d(this.filterBlocks)})}};t([s({type:["checkbox"]})],w.prototype,"type",void 0),t([s({type:yt,json:{write:!0}})],w.prototype,"filterBlocks",void 0),w=k=t([p("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],w);const G=w;let T=class extends f{};t([s({readOnly:!0,json:{read:!1}})],T.prototype,"type",void 0),T=t([p("esri.layers.support.BuildingFilterMode")],T);const B=T;var Q;let E=Q=class extends B{constructor(){super(...arguments),this.type="solid"}clone(){return new Q}};t([s({type:["solid"],readOnly:!0,json:{write:!0}})],E.prototype,"type",void 0),E=Q=t([p("esri.layers.support.BuildingFilterModeSolid")],E);const U=E;var K;let $=K=class extends B{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new K({edges:d(this.edges)})}};t([oe({wireFrame:"wire-frame"})],$.prototype,"type",void 0),t([s(Ee)],$.prototype,"edges",void 0),$=K=t([p("esri.layers.support.BuildingFilterModeWireFrame")],$);const X=$;var V;let A=V=class extends B{constructor(){super(...arguments),this.type="x-ray"}clone(){return new V}};t([s({type:["x-ray"],readOnly:!0,json:{write:!0}})],A.prototype,"type",void 0),A=V=t([p("esri.layers.support.BuildingFilterModeXRay")],A);const W=A;var C;const ut={nonNullable:!0,types:{key:"type",base:B,typeMap:{solid:U,"wire-frame":X,"x-ray":W}},json:{read:e=>{switch(e==null?void 0:e.type){case"solid":return U.fromJSON(e);case"wireFrame":return X.fromJSON(e);case"x-ray":return W.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let b=C=class extends f{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new U,this.title=""}clone(){return new C({filterExpression:this.filterExpression,filterMode:d(this.filterMode),title:this.title})}};t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"filterExpression",void 0),t([s(ut)],b.prototype,"filterMode",void 0),t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"title",void 0),b=C=t([p("esri.layers.support.BuildingFilterBlock")],b);const dt=b;var D;const ct=v.ofType(dt);let h=D=class extends f{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=Ae(),this.name=null}clone(){return new D({description:this.description,filterBlocks:d(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:d(this.filterAuthoringInfo)})}};t([s({type:String,json:{write:!0}})],h.prototype,"description",void 0),t([s({type:ct,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"filterBlocks",void 0),t([s({types:{key:"type",base:pe,typeMap:{checkbox:G}},json:{read:e=>(e==null?void 0:e.type)==="checkbox"?G.fromJSON(e):null,write:!0}})],h.prototype,"filterAuthoringInfo",void 0),t([s({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"id",void 0),t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"name",void 0),h=D=t([p("esri.layers.support.BuildingFilter")],h);const ht=h;let u=class extends f{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};t([s({type:String})],u.prototype,"fieldName",void 0),t([s({type:String})],u.prototype,"modelName",void 0),t([s({type:String})],u.prototype,"label",void 0),t([s({type:Number})],u.prototype,"min",void 0),t([s({type:Number})],u.prototype,"max",void 0),t([s({json:{read:e=>Array.isArray(e)&&(e.every(r=>typeof r=="string")||e.every(r=>typeof r=="number"))?e.slice():null}})],u.prototype,"mostFrequentValues",void 0),t([s({type:[Number]})],u.prototype,"subLayerIds",void 0),u=t([p("esri.layers.support.BuildingFieldStatistics")],u);let O=class extends ee.LoadableMixin(te(f)){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||this.loadStatus==="loading"?this._get("fields"):(x.getLogger(this).error("building summary statistics are not loaded"),null)}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)}async _fetchService(e){const r=(await se(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(r,{origin:"service"})}};t([s({constructOnly:!0,type:String})],O.prototype,"url",void 0),t([s({readOnly:!0,type:[u],json:{read:{source:"summary"}}})],O.prototype,"fields",null),O=t([p("esri.layers.support.BuildingSummaryStatistics")],O);const ye=O,ue=v.ofType(ht),de=d(m.sublayersProperty);var Y;const _=(Y=de.json)==null?void 0:Y.origins;_&&(_["web-scene"]={type:[N],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},_["portal-item"]={type:[N],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let n=class extends ze(Be(_e(qe(Ne(Re(Pe(De))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new Me({getCollections:()=>[this.sublayers],getChildrenFunction:r=>r.type==="building-group"?r.sublayers:null}),this.sublayers=null,this._sublayerOverrides=null,this.filters=new ue,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.legendEnabled=!0,this.type="building-scene"}normalizeCtorArgs(e){return typeof e=="string"?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,r,i){const o=m.readSublayers(e,r,i);return m.forEachSublayer(o,l=>l.layer=this),this._sublayerOverrides&&(this.applySublayerOverrides(o,this._sublayerOverrides),this._sublayerOverrides=null),o}applySublayerOverrides(e,{overrides:r,context:i}){m.forEachSublayer(e,o=>o.read(r.get(o.id),i))}readSublayerOverrides(e,r){var o;const i=new Map;for(const l of e)l!=null&&typeof l=="object"&&typeof l.id=="number"?i.set(l.id,l):(o=r.messages)==null||o.push(new F("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:l}));return{overrides:i,context:r}}writeSublayerOverrides(e,r,i){const o=[];m.forEachSublayer(this.sublayers,l=>{const c=l.write({},i);Object.keys(c).length>1&&o.push(c)}),o.length>0&&(r.sublayers=o)}writeUnappliedOverrides(e,r){r.sublayers=[],e.overrides.forEach(i=>{r.sublayers.push(d(i))})}write(e,r){return e=super.write(e,r),!r||r.origin!=="web-scene"&&r.origin!=="portal-item"||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this._sublayerOverrides&&this.writeUnappliedOverrides(this._sublayerOverrides,e)),e}read(e,r){if(super.read(e,r),r&&(r.origin==="web-scene"||r.origin==="portal-item")&&e!=null&&Array.isArray(e.sublayers)){const i=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,i):this._sublayerOverrides=i}}readSummaryStatistics(e,r){var i;if(typeof r.statisticsHRef=="string"){const o=ke((i=this.parsedUrl)==null?void 0:i.path,r.statisticsHRef);return new ye({url:o})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const r=e!=null?e.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(Qe).then(()=>this._fetchService(r)).then(()=>this._fetchAssociatedFeatureService(r));return this.addResolvingPromise(i),Promise.resolve(this)}loadAll(){return Ue(this,e=>{m.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}),this.summaryStatistics&&e(this.summaryStatistics)})}async saveAs(e,r){return this._debouncedSaveOperations(H.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(H.SAVE,e)}validateLayer(e){if(!e.layerType||e.layerType!=="Building")throw new F("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}async _fetchAssociatedFeatureService(e){try{const{portalItem:r}=await rt(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,apiKey:this.apiKey,signal:e});this.associatedFeatureServiceItem=r}catch(r){x.getLogger(this).warn("Associated feature service item could not be loaded",r)}}_validateElevationInfo(){const e=this.elevationInfo,r="Building scene layers";J(x.getLogger(this),st(r,"absolute-height",e)),J(x.getLogger(this),it(r,e))}};t([s({type:["BuildingSceneLayer"]})],n.prototype,"operationalLayerType",void 0),t([s({readOnly:!0})],n.prototype,"allSublayers",void 0),t([s(de)],n.prototype,"sublayers",void 0),t([I("service","sublayers")],n.prototype,"readSublayers",null),t([s({type:ue,nonNullable:!0,json:{write:!0}})],n.prototype,"filters",void 0),t([s({type:String,json:{write:!0}})],n.prototype,"activeFilterId",void 0),t([s({readOnly:!0,type:ye})],n.prototype,"summaryStatistics",void 0),t([I("summaryStatistics",["statisticsHRef"])],n.prototype,"readSummaryStatistics",null),t([s({type:[String],json:{read:!1}})],n.prototype,"outFields",void 0),t([s(Ke)],n.prototype,"fullExtent",void 0),t([s(Ve)],n.prototype,"legendEnabled",void 0),t([s({type:["show","hide","hide-children"]})],n.prototype,"listMode",void 0),t([s(q(ie))],n.prototype,"spatialReference",void 0),t([s(Ce)],n.prototype,"elevationInfo",null),t([s({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),t([s()],n.prototype,"associatedFeatureServiceItem",void 0),n=t([p("esri.layers.BuildingSceneLayer")],n);const Qt=n;export{Qt as default};
