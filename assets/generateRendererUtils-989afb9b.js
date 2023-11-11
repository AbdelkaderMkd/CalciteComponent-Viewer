import{b3 as C,V as v,c2 as I,X as g,$ as S,a0 as F,aj as j}from"./index-0f198541.js";const q=new C({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),w=new C({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});let V=class extends F{constructor(s){super(s),this.type="class-breaks-definition",this.breakCount=null,this.classificationField=null,this.classificationMethod=null,this.normalizationField=null,this.normalizationType=null}set standardDeviationInterval(s){this.classificationMethod==="standard-deviation"&&this._set("standardDeviationInterval",s)}set definedInterval(s){this.classificationMethod==="defined-interval"&&this._set("definedInterval",s)}};v([I({classBreaksDef:"class-breaks-definition"})],V.prototype,"type",void 0),v([g({json:{write:!0}})],V.prototype,"breakCount",void 0),v([g({json:{write:!0}})],V.prototype,"classificationField",void 0),v([g({type:String,json:{read:q.read,write:q.write}})],V.prototype,"classificationMethod",void 0),v([g({json:{write:!0}})],V.prototype,"normalizationField",void 0),v([g({json:{read:w.read,write:w.write}})],V.prototype,"normalizationType",void 0),v([g({value:null,json:{write:!0}})],V.prototype,"standardDeviationInterval",null),v([g({value:null,json:{write:!0}})],V.prototype,"definedInterval",null),V=v([S("esri.rest.support.ClassBreaksDefinition")],V);const O=V,B=j.getLogger("esri.rest.support.generateRendererUtils");function M(n,s){return Number(n.toFixed(s))}function P(n){const{normalizationTotal:s}=n;return{classBreaks:N(n),normalizationTotal:s}}function N(n){const s=n.definition,{classificationMethod:a,normalizationType:i,definedInterval:h}=s,f=s.breakCount??1,u=[];let l=n.values;if(l.length===0)return[];l=l.sort((o,c)=>o-c);const d=l[0],m=l[l.length-1];if(a==="equal-interval")if(l.length>=f){const o=(m-d)/f;let c=d;for(let t=1;t<f;t++){const e=M(d+t*o,6);u.push({minValue:c,maxValue:e,label:b(c,e,i)}),c=e}u.push({minValue:c,maxValue:m,label:b(c,m,i)})}else l.forEach(o=>{u.push({minValue:o,maxValue:o,label:b(o,o,i)})});else if(a==="natural-breaks"){const o=$(l),c=n.valueFrequency||o.valueFrequency,t=D(o.uniqueValues,c,f);let e=d;for(let r=1;r<f;r++)if(o.uniqueValues.length>r){const p=M(o.uniqueValues[t[r]],6);u.push({minValue:e,maxValue:p,label:b(e,p,i)}),e=p}u.push({minValue:e,maxValue:m,label:b(e,m,i)})}else if(a==="quantile")if(l.length>=f&&d!==m){let o=d,c=Math.ceil(l.length/f),t=0;for(let e=1;e<f;e++){let r=c+t-1;r>l.length&&(r=l.length-1),r<0&&(r=0),u.push({minValue:o,maxValue:l[r],label:b(o,l[r],i)}),o=l[r],t+=c,c=Math.ceil((l.length-t)/(f-e))}u.push({minValue:o,maxValue:m,label:b(o,m,i)})}else{let o=-1;for(let c=0;c<l.length;c++){const t=l[c];t!==o&&(o=t,u.push({minValue:o,maxValue:t,label:b(o,t,i)}),o=t)}}else if(a==="standard-deviation"){const o=L(l),c=_(l,o);if(c===0)u.push({minValue:l[0],maxValue:l[0],label:b(l[0],l[0],i)});else{const t=E(d,m,f,o,c)*c;let e=0,r=d;for(let y=f;y>=1;y--){const k=M(o-(y-.5)*t,6);u.push({minValue:r,maxValue:k,label:b(r,k,i)}),r=k,e++}let p=M(o+.5*t,6);u.push({minValue:r,maxValue:p,label:b(r,p,i)}),r=p,e++;for(let y=1;y<=f;y++)p=e===2*f?m:M(o+(y+.5)*t,6),u.push({minValue:r,maxValue:p,label:b(r,p,i)}),r=p,e++}}else if(a==="defined-interval"){if(!h)return u;const o=l[0],c=l[l.length-1],t=Math.ceil((c-o)/h);let e=o;for(let r=1;r<t;r++){const p=M(o+r*h,6);u.push({minValue:e,maxValue:p,label:b(e,p,i)}),e=p}u.push({minValue:e,maxValue:c,label:b(e,c,i)})}return u}function b(n,s,a){let i=null;return i=n===s?a&&a==="percent-of-total"?n+"%":n.toString():a&&a==="percent-of-total"?n+"% - "+s+"%":n+" - "+s,i}function $(n){const s=[],a=[];let i=Number.MIN_VALUE,h=1,f=-1;for(let u=0;u<n.length;u++){const l=n[u];l===i?(h++,a[f]=h):l!==null&&(s.push(l),i=l,h=1,a.push(h),f++)}return{uniqueValues:s,valueFrequency:a}}function D(n,s,a){const i=n.length,h=[];a>i&&(a=i);for(let u=0;u<a;u++)h.push(Math.round(u*i/a-1));h.push(i-1);let f=z(h,n,s,a);return T(f.mean,f.sdcm,h,n,s,a)&&(f=z(h,n,s,a)),h}function z(n,s,a,i){let h=[],f=[],u=[],l=0;const d=[],m=[];for(let e=0;e<i;e++){const r=x(e,n,s,a);d.push(r.sbMean),m.push(r.sbSdcm),l+=m[e]}let o,c=l,t=!0;for(;t||l<c;){t=!1,h=[];for(let e=0;e<i;e++)h.push(n[e]);for(let e=0;e<i;e++)for(let r=n[e]+1;r<=n[e+1];r++)if(o=s[r],e>0&&r!==n[e+1]&&Math.abs(o-d[e])>Math.abs(o-d[e-1]))n[e]=r;else if(e<i-1&&n[e]!==r-1&&Math.abs(o-d[e])>Math.abs(o-d[e+1])){n[e+1]=r-1;break}c=l,l=0,f=[],u=[];for(let e=0;e<i;e++){f.push(d[e]),u.push(m[e]);const r=x(e,n,s,a);d[e]=r.sbMean,m[e]=r.sbSdcm,l+=m[e]}}if(l>c){for(let e=0;e<i;e++)n[e]=h[e],d[e]=f[e],m[e]=u[e];l=c}return{mean:d,sdcm:m}}function T(n,s,a,i,h,f){let u=0,l=0,d=0,m=0,o=!0;for(let c=0;c<2&&o;c++){c===0&&(o=!1);for(let t=0;t<f-1;t++)for(;a[t+1]+1!==a[t+2];){a[t+1]=a[t+1]+1;const e=x(t,a,i,h);d=e.sbMean,u=e.sbSdcm;const r=x(t+1,a,i,h);if(m=r.sbMean,l=r.sbSdcm,!(u+l<s[t]+s[t+1])){a[t+1]=a[t+1]-1;break}s[t]=u,s[t+1]=l,n[t]=d,n[t+1]=m,o=!0}for(let t=f-1;t>0;t--)for(;a[t]!==a[t-1]+1;){a[t]=a[t]-1;const e=x(t-1,a,i,h);d=e.sbMean,u=e.sbSdcm;const r=x(t,a,i,h);if(m=r.sbMean,l=r.sbSdcm,!(u+l<s[t-1]+s[t])){a[t]=a[t]+1;break}s[t-1]=u,s[t]=l,n[t-1]=d,n[t]=m,o=!0}}return o}function E(n,s,a,i,h){let f=Math.max(i-n,s-i)/h/a;return f=f>=1?1:f>=.5?.5:.25,f}function L(n){let s=0;for(let a=0;a<n.length;a++)s+=n[a];return s/=n.length,s}function _(n,s){let a=0;for(let i=0;i<n.length;i++){const h=n[i];a+=(h-s)*(h-s)}return a/=n.length,Math.sqrt(a)}function x(n,s,a,i){let h=0,f=0;for(let d=s[n]+1;d<=s[n+1];d++){const m=i[d];h+=a[d]*m,f+=m}f<=0&&B.warn("Exception in Natural Breaks calculation");const u=h/f;let l=0;for(let d=s[n]+1;d<=s[n+1];d++)l+=i[d]*(a[d]-u)**2;return{sbMean:u,sbSdcm:l}}export{P as a,O as d};
