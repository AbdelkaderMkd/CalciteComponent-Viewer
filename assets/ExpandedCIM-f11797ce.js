import{E as i,S as h}from"./color-1d0d833c.js";import{f as p}from"./GeometryUtils-0d98254e.js";const S={marker:i.MARKER,fill:i.FILL,line:i.LINE,text:i.TEXT};class x{constructor(s,e,n,m){const r={minScale:e==null?void 0:e.minScale,maxScale:e==null?void 0:e.maxScale},c=f(r);this.layers=s,this.data=e,this.hash=this._createHash()+c,this.rendererKey=n;const o={isOutline:!1,placement:null,symbologyType:h.DEFAULT,vvFlags:n};for(const t of s){const l=S[t.type];o.isOutline=t.type==="line"&&t.isOutline,t.materialKey=p(l,o),t.maxVVSize=m,t.scaleInfo=r,t.templateHash+=c}}get type(){return"expanded-cim"}_createHash(){let s="";for(const e of this.layers)s+=e.templateHash;return s}}function f(a){return a.minScale||a.maxScale?a.minScale+"-"+a.maxScale:""}export{x as l};