import{ah as s,aj as p,V as r,X as a,$ as m}from"./index-0f198541.js";import{a as h}from"./BitmapContainer-f77df259.js";import{m as n,u as d}from"./LayerView-149b4f37.js";import{v as c}from"./ExportStrategy-011ebb46.js";import{a as u}from"./RefreshableLayerView-a084348f.js";import"./WGLContainer-949324cc.js";import"./definitions-343e58e6.js";import"./FramebufferObject-0003733f.js";import"./Texture-2ca2dab9.js";import"./enums-bdecffa2.js";import"./ProgramTemplate-8f0ebd47.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-1d0d833c.js";import"./enums-f1a6a48a.js";import"./number-e491b09e.js";import"./GeometryUtils-0d98254e.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./Container-b6b35da9.js";import"./earcut-039554ed.js";import"./featureConversionUtils-0b5cb3f0.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./Bitmap-637e2735.js";let t=class extends u(n(d)){update(e){this._strategy.update(e).catch(i=>{s(i)||p.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new h,this.container.addChild(this._bitmapContainer),this._strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,i,o){return this.layer.fetchImageBitmap(e,i,o)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};r([a()],t.prototype,"_strategy",void 0),r([a()],t.prototype,"updating",void 0),t=r([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const F=t;export{F as default};
