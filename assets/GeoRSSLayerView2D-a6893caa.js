import{ak as l,al as n,am as g,an as w,ao as f,ap as d,aq as h,V as u,$ as V}from"./index-0f198541.js";import{m as b,u as S}from"./LayerView-149b4f37.js";import{i as _}from"./GraphicContainer-395c34d2.js";import{r as T}from"./GraphicsView2D-fd5dd169.js";import"./Container-b6b35da9.js";import"./definitions-343e58e6.js";import"./enums-bdecffa2.js";import"./Texture-2ca2dab9.js";import"./color-1d0d833c.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./BaseGraphicContainer-aa9370b3.js";import"./FeatureContainer-f0e0b4dc.js";import"./AttributeStoreView-89855bb9.js";import"./TiledDisplayObject-1d07c163.js";import"./WGLContainer-949324cc.js";import"./FramebufferObject-0003733f.js";import"./ProgramTemplate-8f0ebd47.js";import"./GeometryUtils-0d98254e.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-039554ed.js";import"./featureConversionUtils-0b5cb3f0.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-0022dcb7.js";import"./cimAnalyzer-945e3011.js";import"./fontUtils-523237f2.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-34e7836d.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-b420abec.js";import"./floatRGBA-54708d3f.js";import"./ExpandedCIM-f11797ce.js";import"./util-2af89bd1.js";import"./TileContainer-bf9b6b42.js";import"./vec3f32-2da9db36.js";import"./normalizeUtilsSync-9e6a4f93.js";import"./projectionSupport-a6efbad8.js";import"./json-48e3ea08.js";import"./Matcher-b5f9aeae.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-eaae363b.js";import"./ComputedAttributeStorage-5e8dce7d.js";import"./TimeOnly-106204d1.js";let y=class extends b(S){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(i,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().flatMap(e=>{const t=this._popupTemplates.get(e),s=e.hitTest(i);for(const p of s)p.layer=o,p.sourceLayer=o,p.popupTemplate=t;return s}).map(e=>({type:"graphic",graphic:e,layer:o,mapPoint:i}))}update(i){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(i)}attach(){this.addAttachHandles([l(()=>{var i;return(i=this.layer)==null?void 0:i.featureCollections},i=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:e}of i){const t=g.fromJSON(o),s=new w(t.features),p=e.drawingInfo,c=r?f.fromJSON(r):null,a=d(p.renderer),m=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:a,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=m,this._popupTemplates.set(m,c),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},n),l(()=>{var i;return(i=this.layer)==null?void 0:i.polygonSymbol},i=>{this._graphicsViewMap.polygon.renderer=new h({symbol:i})},n),l(()=>{var i;return(i=this.layer)==null?void 0:i.lineSymbol},i=>{this._graphicsViewMap.polyline.renderer=new h({symbol:i})},n),l(()=>{var i;return(i=this.layer)==null?void 0:i.pointSymbol},i=>{this._graphicsViewMap.point.renderer=new h({symbol:i})},n)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews)i.viewChange()}_clear(){this.container.removeAllChildren();for(const i of this.graphicsViews)i.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=u([V("esri.views.2d.layers.GeoRSSLayerView2D")],y);const Vi=y;export{Vi as default};
