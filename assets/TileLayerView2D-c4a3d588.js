import{ac as w,ad as y,ae as I,af as V,ag as v,d as H,ah as o,ai as c,aj as T,V as n,X as g,$ as q}from"./index-0f198541.js";import"./Container-b6b35da9.js";import"./BufferPool-bfbb7700.js";import"./color-1d0d833c.js";import"./WGLContainer-949324cc.js";import"./enums-bdecffa2.js";import"./Texture-2ca2dab9.js";import"./ProgramTemplate-8f0ebd47.js";import"./definitions-343e58e6.js";import"./GeometryUtils-0d98254e.js";import"./FramebufferObject-0003733f.js";import"./number-e491b09e.js";import"./StyleDefinition-29c49b98.js";import"./enums-fb086c25.js";import"./MagnifierPrograms-107bb574.js";import"./OrderIndependentTransparency-6ae10952.js";import"./floatRGBA-54708d3f.js";import"./testSVGPremultipliedAlpha-aa89bbad.js";import{r as U}from"./GraphicsView2D-fd5dd169.js";import"./AttributeStoreView-89855bb9.js";import"./earcut-039554ed.js";import"./featureConversionUtils-0b5cb3f0.js";import"./vec3f32-2da9db36.js";import{r as S,o as f,n as d}from"./imageUtils-0020570b.js";import{m as b,u as C}from"./LayerView-149b4f37.js";import{a as Q}from"./HighlightGraphicContainer-78dd19b2.js";import{a as $}from"./RefreshableLayerView-a084348f.js";import{S as P,G as k,r as F}from"./drapedUtils-288f587f.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./config-1337d16e.js";import"./OptimizedGeometry-196224d4.js";import"./alignmentUtils-ae955d28.js";import"./cimAnalyzer-945e3011.js";import"./fontUtils-523237f2.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-34e7836d.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-b420abec.js";import"./Rasterizer-85a04679.js";import"./rasterizingUtils-1ef89ca8.js";import"./pbf-739ba630.js";import"./imageutils-f78439cf.js";import"./Matcher-b5f9aeae.js";import"./visualVariablesUtils-0022dcb7.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-eaae363b.js";import"./ExpandedCIM-f11797ce.js";import"./CircularArray-ef508845.js";import"./throttle-7bf02de9.js";import"./ComputedAttributeStorage-5e8dce7d.js";import"./OptimizedFeature-e90b69df.js";import"./TimeOnly-106204d1.js";import"./basicInterfaces-11f56cb3.js";import"./normalizeUtilsSync-9e6a4f93.js";import"./projectionSupport-a6efbad8.js";import"./json-48e3ea08.js";import"./TiledDisplayObject-1d07c163.js";import"./util-2af89bd1.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./BitmapTileContainer-772d9090.js";import"./Bitmap-637e2735.js";import"./TileContainer-bf9b6b42.js";import"./BaseGraphicContainer-aa9370b3.js";import"./FeatureContainer-f0e0b4dc.js";import"./popupUtils-1f3e975e.js";const G=[0,0];let a=class extends $(S(b(C))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new w,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}get tilemapCache(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}update(t){var e;this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume(),(e=this._highlightView)==null||e.processUpdate(t)}attach(){const t="tileServers"in this.layer?this.layer.tileServers:null,e=this.tilemapCache;if(this._tileInfoView=new y(this.layer.tileInfo,this.layer.fullExtent,e==null?void 0:e.effectiveMinLOD,e==null?void 0:e.effectiveMaxLOD),this._fetchQueue=new I({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:(i,r)=>this.fetchTile(i,r)}),this._tileStrategy=new V({cachePolicy:"keep",resampling:this.resampling,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),P(this,this.layer)){const i=this._highlightView=new U({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new Q(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new k({createFetchPopupFeaturesQueryGeometry:(r,h)=>F(r,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(r,h)=>{i.graphicUpdateHandler({graphic:r,property:h})},layerView:this,updatingHandles:this._updatingHandles})}this.requestUpdate(),this.addAttachHandles(this._updatingHandles.add(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){var t,e;super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),(t=this._popupHighlightHelper)==null||t.destroy(),(e=this._highlightView)==null||e.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeatures(t,e){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeatures(t,e):[]}highlight(t){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(t):v()}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){var e;return H((e=this.layer.tileInfo)==null?void 0:e.spatialReference,t)}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(t=>this._updatingHandles.addPromise(this._enqueueTileFetch(t)))}}acquireTile(t){const e=this._bitmapView.createTile(t),i=e.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(G,e.key),i.resolution=this._tileInfoView.getTileResolution(e.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(e)),this._bitmapView.addChild(e),this.requestUpdate(),e}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}async fetchTile(t,e={}){const i=this.tilemapCache,{signal:r,resamplingLevel:h=0}=e;if(!i)try{return await this._fetchImage(t,r)}catch(s){if(!o(s)&&!this.resampling)return f(this._tileInfoView.tileInfo.size);if(h<3){const m=this._tileInfoView.getTileParentId(t.id);if(m){const u=new c(m),_=await this.fetchTile(u,{...e,resamplingLevel:h+1});return d(this._tileInfoView,_,u,t)}}throw s}const l=new c(0,0,0,0);let p;try{if(await i.fetchAvailabilityUpsample(t.level,t.row,t.col,l,{signal:r}),l.level!==t.level&&!this.resampling)return f(this._tileInfoView.tileInfo.size);p=await this._fetchImage(l,r)}catch(s){if(o(s))throw s;p=await this._fetchImage(t,r)}return this.resampling?d(this._tileInfoView,p,l,t):p}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const e=await this._fetchQueue.push(t.key);t.bitmap.source=e,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",()=>this.requestUpdate())}catch(e){o(e)||T.getLogger(this).error(e)}this.requestUpdate()}}async _fetchImage(t,e){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:e})}};n([g()],a.prototype,"resampling",null),n([g()],a.prototype,"tilemapCache",null),a=n([q("esri.views.2d.layers.TileLayerView2D")],a);const Kt=a;export{Kt as default};