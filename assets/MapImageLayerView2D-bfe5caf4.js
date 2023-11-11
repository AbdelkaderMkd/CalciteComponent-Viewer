import{V as r,X as a,f$ as g,$ as m,cs as l,ac as d,ah as u,aj as c,ak as y}from"./index-0f198541.js";import{a as f}from"./BitmapContainer-f77df259.js";import{m as x,u as w}from"./LayerView-149b4f37.js";import{r as _}from"./GraphicsView2D-fd5dd169.js";import{a as v}from"./HighlightGraphicContainer-78dd19b2.js";import{v as H}from"./ExportStrategy-011ebb46.js";import{a as I}from"./RefreshableLayerView-a084348f.js";import{G as V,r as P}from"./drapedUtils-288f587f.js";import"./WGLContainer-949324cc.js";import"./definitions-343e58e6.js";import"./FramebufferObject-0003733f.js";import"./Texture-2ca2dab9.js";import"./enums-bdecffa2.js";import"./ProgramTemplate-8f0ebd47.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-1d0d833c.js";import"./enums-f1a6a48a.js";import"./number-e491b09e.js";import"./GeometryUtils-0d98254e.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./Container-b6b35da9.js";import"./earcut-039554ed.js";import"./featureConversionUtils-0b5cb3f0.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./cimAnalyzer-945e3011.js";import"./fontUtils-523237f2.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-34e7836d.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-b420abec.js";import"./floatRGBA-54708d3f.js";import"./normalizeUtilsSync-9e6a4f93.js";import"./projectionSupport-a6efbad8.js";import"./json-48e3ea08.js";import"./AttributeStoreView-89855bb9.js";import"./TiledDisplayObject-1d07c163.js";import"./visualVariablesUtils-0022dcb7.js";import"./ExpandedCIM-f11797ce.js";import"./util-2af89bd1.js";import"./Matcher-b5f9aeae.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-eaae363b.js";import"./ComputedAttributeStorage-5e8dce7d.js";import"./TimeOnly-106204d1.js";import"./BaseGraphicContainer-aa9370b3.js";import"./FeatureContainer-f0e0b4dc.js";import"./TileContainer-bf9b6b42.js";import"./vec3f32-2da9db36.js";import"./Bitmap-637e2735.js";import"./popupUtils-1f3e975e.js";const U=t=>{let e=class extends t{initialize(){this.exportImageParameters=new l({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var i;return((i=this.view)==null?void 0:i.floors)??null}get exportImageVersion(){var i;return(i=this.exportImageParameters)==null||i.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return r([a()],e.prototype,"exportImageParameters",void 0),r([a({readOnly:!0})],e.prototype,"floors",null),r([a({readOnly:!0})],e.prototype,"exportImageVersion",null),r([a()],e.prototype,"layer",void 0),r([a()],e.prototype,"suspended",void 0),r([a(g)],e.prototype,"timeExtent",void 0),e=r([m("esri.views.layers.MapImageLayerView")],e),e};let s=class extends U(I(x(w))){constructor(){super(...arguments),this._highlightGraphics=new d,this._updateHash=""}fetchPopupFeatures(t,e){return this._popupHighlightHelper.fetchPopupFeatures(t,e)}update(t){const e=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==e&&(this._updateHash=e,this.strategy.update(t).catch(i=>{u(i)||c.getLogger(this).error(i)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:i}=this.layer,o=i>=10.3,n=i>=10;this._bitmapContainer=new f,this.container.addChild(this._bitmapContainer),this._highlightView=new _({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new v(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new V({createFetchPopupFeaturesQueryGeometry:(p,h)=>P(p,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(p,h)=>{this._highlightView.graphicUpdateHandler({graphic:p,property:h})},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new H({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:o,imageNormalizationSupported:n,hidpi:!0}),this.addAttachHandles(y(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,o){return this.layer.fetchImage(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...o})}fetchImageBitmap(t,e,i,o){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...o})}highlight(t){return this._popupHighlightHelper.highlight(t)}};r([a()],s.prototype,"strategy",void 0),r([a()],s.prototype,"updating",void 0),s=r([m("esri.views.2d.layers.MapImageLayerView2D")],s);const bt=s;export{bt as default};