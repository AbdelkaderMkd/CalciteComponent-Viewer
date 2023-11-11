import{c3 as I,c4 as v,b2 as $,bA as E,s as i,c5 as S,c6 as b,aj as R,aI as O,c7 as k,c8 as L,an as U,as as j,bW as G,bX as T,c9 as B}from"./index-0f198541.js";function F(e){return(e==null?void 0:e.applyEdits)!=null}function V(e){return typeof e=="object"&&e!=null&&"objectId"in e&&!!e.objectId}function K(e){return e.every(V)}function D(e){return typeof e=="object"&&e!=null&&"globalId"in e&&!!e.globalId}function P(e){return e.every(D)}async function Q(e,t,a,r={}){var d;let s;const o="gdbVersion"in e?e.gdbVersion:null,p=r.gdbVersion??o;if(I(e)&&e.url)s=v(e.url,e.layerId,p,r.returnServiceEditsOption==="original-and-current-features");else{s=$(),s.promise.then(u=>{(u.addedFeatures.length||u.updatedFeatures.length||u.deletedFeatures.length||u.addedAttachments.length||u.updatedAttachments.length||u.deletedAttachments.length)&&e.emit("edits",u)});const n={result:s.promise};e.emit("apply-edits",n)}try{const{results:n,edits:u}=await W(e,t,a,r),c=h=>h.filter(A=>!A.error).map(E),l={edits:u,addedFeatures:c(n.addFeatureResults),updatedFeatures:c(n.updateFeatureResults),deletedFeatures:c(n.deleteFeatureResults),addedAttachments:c(n.addAttachmentResults),updatedAttachments:c(n.updateAttachmentResults),deletedAttachments:c(n.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:n.editMoment?new Date(n.editMoment):null,globalIdToObjectId:r.globalIdToObjectId};return(d=n.editedFeatureResults)!=null&&d.length&&(l.editedFeatures=n.editedFeatureResults),s.resolve(l),n}catch(n){throw s.reject(n),n}}async function W(e,t,a,r){var p,d,n,u,c,l;if(await e.load(),!F(t))throw new i(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!S(e))throw new i(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:s,options:o}=await M(e,a,r);return(p=s.addFeatures)!=null&&p.length||(d=s.updateFeatures)!=null&&d.length||(n=s.deleteFeatures)!=null&&n.length||(u=s.addAttachments)!=null&&u.length||(c=s.updateAttachments)!=null&&c.length||(l=s.deleteAttachments)!=null&&l.length?{edits:s,results:await t.applyEdits(s,o)}:{edits:s,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}async function M(e,t,a){const r=b(e),s=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),o=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),p=e.infoFor3D!=null;if(_(t,r,a,!!s,!!o,`${e.type}-layer`),!r.data.isVersioned&&(a==null?void 0:a.gdbVersion))throw new i(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!r.editing.supportsRollbackOnFailure&&(a!=null&&a.rollbackOnFailureEnabled))throw new i(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");const d={...a};if(d.rollbackOnFailureEnabled!=null||r.editing.supportsRollbackOnFailure||(d.rollbackOnFailureEnabled=!0),d.rollbackOnFailureEnabled||d.returnServiceEditsOption!=="original-and-current-features"||(d.rollbackOnFailureEnabled===!1&&R.getLogger("esri.layers.graphics.editingSupport").warn(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwrritten and set to true."),d.rollbackOnFailureEnabled=!0),!r.editing.supportsReturnServiceEditsInSourceSpatialReference&&d.returnServiceEditsInSourceSR)throw new i(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(d.returnServiceEditsInSourceSR&&d.returnServiceEditsOption!=="original-and-current-features")throw new i(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const n=Z(t,r,`${e.type}-layer`),u=(a==null?void 0:a.globalIdUsed)||p,c=e.fields.filter(l=>l.type==="big-integer"||l.type==="oid"&&(l.length||0)>=8);if(u){const{globalIdField:l}=e;if(l==null)throw new i(`${e.type}-layer:invalid-parameter`,"Layer does not specify a global id field.");n.addFeatures.forEach(h=>q(h,l))}return n.addFeatures.forEach(l=>z(l,e,u,c)),n.updateFeatures.forEach(l=>x(l,e,u,c)),n.deleteFeatures.forEach(l=>C(l,e,u,c)),n.addAttachments.forEach(l=>f(l,e)),n.updateAttachments.forEach(l=>f(l,e)),p&&await H(n,e),{edits:await N(n),options:d}}function y(e,t,a,r){var s,o;if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new i(`${t.type}-layer:invalid-parameter`,`Feature should have '${t.globalIdField}' when 'globalIdUsed' is true`);if(!("attributes"in e)&&!e.globalId)throw new i(`${t.type}-layer:invalid-parameter`,"`'globalId' of the feature should be passed when 'globalIdUsed' is true")}if(r.length&&"attributes"in e)for(const p of r){const d=e.attributes[p.name];if(d!==void 0&&!B(p,d))throw new i(`${t.type}-layer:invalid-parameter`,`Big-integer field '${p.name}' of the feature must be less than ${Number.MAX_SAFE_INTEGER}`,{feature:e})}if("geometry"in e&&e.geometry!=null){if(e.geometry.hasZ&&((s=t.capabilities)==null?void 0:s.data.supportsZ)===!1)throw new i(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&((o=t.capabilities)==null?void 0:o.data.supportsM)===!1)throw new i(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function w(e,t){var a;if("geometry"in e&&((a=e.geometry)==null?void 0:a.type)==="mesh"&&t.infoFor3D!=null){const{geometry:r}=e;if(r.vertexSpace.isGeoreferenced)throw new i(`${t.type}-layer:georeferenced-mesh-unsupported`,"Uploading georeferenced meshes to a layer is not supported.")}}function z(e,t,a,r){y(e,t,a,r),w(e,t)}function C(e,t,a,r){y(e,t,a,r)}function x(e,t,a,r){y(e,t,a,r),w(e,t);const s=b(t);if("geometry"in e&&e.geometry!=null&&!(s!=null&&s.editing.supportsGeometryUpdate))throw new i(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}function f(e,t){var s;const{feature:a,attachment:r}=e;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new i(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new i(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!r.globalId)throw new i(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!r.data&&!r.uploadId)throw new i(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(r.data instanceof File&&r.data.name)&&!r.name)throw new i(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!((s=t.capabilities)!=null&&s.editing.supportsUploadWithItemId)&&r.uploadId)throw new i(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if(typeof r.data=="string"){const o=O(r.data);if(o&&!o.isBase64)throw new i(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}function q(e,t){const{attributes:a}=e;a[t]==null&&(a[t]=k())}async function N(e){const t=e.addFeatures??[],a=e.updateFeatures??[],r=t.concat(a).map(d=>d.geometry),s=await L(r),o=t.length,p=a.length;return s.slice(0,o).forEach((d,n)=>t[n].geometry=d),s.slice(o,o+p).forEach((d,n)=>a[n].geometry=d),e}function X(e){return{addFeatures:Array.from((e==null?void 0:e.addFeatures)??[]),updateFeatures:Array.from((e==null?void 0:e.updateFeatures)??[]),deleteFeatures:e&&U.isCollection(e.deleteFeatures)?e.deleteFeatures.toArray():e.deleteFeatures||[],addAttachments:e.addAttachments||[],updateAttachments:e.updateAttachments||[],deleteAttachments:e.deleteAttachments||[]}}function Z(e,t,a){var s,o,p;const r=X(e);if((s=r.addFeatures)!=null&&s.length&&!t.operations.supportsAdd)throw new i(`${a}:unsupported-operation`,"Layer does not support adding features.");if((o=r.updateFeatures)!=null&&o.length&&!t.operations.supportsUpdate)throw new i(`${a}:unsupported-operation`,"Layer does not support updating features.");if((p=r.deleteFeatures)!=null&&p.length&&!t.operations.supportsDelete)throw new i(`${a}:unsupported-operation`,"Layer does not support deleting features.");return r.addFeatures=r.addFeatures.map(m),r.updateFeatures=r.updateFeatures.map(m),r.addAssetFeatures=[],r}function _(e,t,a,r,s,o){if(!e||!r&&!s)throw new i(`${o}:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!t.editing.supportsGlobalId&&(a!=null&&a.globalIdUsed))throw new i(`${o}:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!t.editing.supportsGlobalId&&s)throw new i(`${o}:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!(a!=null&&a.globalIdUsed)&&s)throw new i(`${o}:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true")}function m(e){const t=new j;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}async function H(e,t){if(t.infoFor3D==null)return;const{infoFor3D:a}=t,r=G("model/gltf-binary",a.supportedFormats)??T("glb",a.supportedFormats);if(!(r&&a.editFormats.includes(r)))throw new i(`${t.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");e.addAssetFeatures??(e.addAssetFeatures=[]);const{addAssetFeatures:s}=e;for(const o of e.addFeatures??[])g(o)&&s.push(o);for(const o of e.updateFeatures??[])g(o)&&s.push(o)}function g(e){var t;return((t=e==null?void 0:e.geometry)==null?void 0:t.type)==="mesh"}function Y(e,t,a,r){if(!F(t))throw new i(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new i(`${e.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(a,r)}export{Q as applyEdits,_ as checkEditingCapabilities,P as isFeatureIdentifierArrayWithGlobalId,K as isFeatureIdentifierArrayWithObjectId,D as isFeatureIdentifierWithGlobalId,V as isFeatureIdentifierWithObjectId,X as normalizeCollections,Z as normalizeEdits,N as normalizeGeometries,m as shallowCloneFeature,Y as uploadAssets};
