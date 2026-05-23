(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();var Fm={exports:{}},rc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cy;function bA(){if(Cy)return rc;Cy=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,r,l){var c=null;if(l!==void 0&&(c=""+l),r.key!==void 0&&(c=""+r.key),"key"in r){l={};for(var f in r)f!=="key"&&(l[f]=r[f])}else l=r;return r=l.ref,{$$typeof:o,type:a,key:c,ref:r!==void 0?r:null,props:l}}return rc.Fragment=t,rc.jsx=n,rc.jsxs=n,rc}var wy;function TA(){return wy||(wy=1,Fm.exports=bA()),Fm.exports}var At=TA(),Im={exports:{}},Se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dy;function AA(){if(Dy)return Se;Dy=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,S={};function y(I,K,xt){this.props=I,this.context=K,this.refs=S,this.updater=xt||M}y.prototype.isReactComponent={},y.prototype.setState=function(I,K){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,K,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function A(){}A.prototype=y.prototype;function D(I,K,xt){this.props=I,this.context=K,this.refs=S,this.updater=xt||M}var C=D.prototype=new A;C.constructor=D,E(C,y.prototype),C.isPureReactComponent=!0;var P=Array.isArray;function N(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function O(I,K,xt){var Mt=xt.ref;return{$$typeof:o,type:I,key:K,ref:Mt!==void 0?Mt:null,props:xt}}function B(I,K){return O(I.type,K,I.props)}function G(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function k(I){var K={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(xt){return K[xt]})}var et=/\/+/g;function tt(I,K){return typeof I=="object"&&I!==null&&I.key!=null?k(""+I.key):K.toString(36)}function X(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(N,N):(I.status="pending",I.then(function(K){I.status==="pending"&&(I.status="fulfilled",I.value=K)},function(K){I.status==="pending"&&(I.status="rejected",I.reason=K)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function F(I,K,xt,Mt,Ut){var it=typeof I;(it==="undefined"||it==="boolean")&&(I=null);var vt=!1;if(I===null)vt=!0;else switch(it){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(I.$$typeof){case o:case t:vt=!0;break;case _:return vt=I._init,F(vt(I._payload),K,xt,Mt,Ut)}}if(vt)return Ut=Ut(I),vt=Mt===""?"."+tt(I,0):Mt,P(Ut)?(xt="",vt!=null&&(xt=vt.replace(et,"$&/")+"/"),F(Ut,K,xt,"",function(ne){return ne})):Ut!=null&&(G(Ut)&&(Ut=B(Ut,xt+(Ut.key==null||I&&I.key===Ut.key?"":(""+Ut.key).replace(et,"$&/")+"/")+vt)),K.push(Ut)),1;vt=0;var Et=Mt===""?".":Mt+":";if(P(I))for(var It=0;It<I.length;It++)Mt=I[It],it=Et+tt(Mt,It),vt+=F(Mt,K,xt,it,Ut);else if(It=x(I),typeof It=="function")for(I=It.call(I),It=0;!(Mt=I.next()).done;)Mt=Mt.value,it=Et+tt(Mt,It++),vt+=F(Mt,K,xt,it,Ut);else if(it==="object"){if(typeof I.then=="function")return F(X(I),K,xt,Mt,Ut);throw K=String(I),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return vt}function H(I,K,xt){if(I==null)return I;var Mt=[],Ut=0;return F(I,Mt,"","",function(it){return K.call(xt,it,Ut++)}),Mt}function J(I){if(I._status===-1){var K=I._result;K=K(),K.then(function(xt){(I._status===0||I._status===-1)&&(I._status=1,I._result=xt)},function(xt){(I._status===0||I._status===-1)&&(I._status=2,I._result=xt)}),I._status===-1&&(I._status=0,I._result=K)}if(I._status===1)return I._result.default;throw I._result}var ft=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},V={map:H,forEach:function(I,K,xt){H(I,function(){K.apply(this,arguments)},xt)},count:function(I){var K=0;return H(I,function(){K++}),K},toArray:function(I){return H(I,function(K){return K})||[]},only:function(I){if(!G(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return Se.Activity=v,Se.Children=V,Se.Component=y,Se.Fragment=n,Se.Profiler=r,Se.PureComponent=D,Se.StrictMode=a,Se.Suspense=p,Se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,Se.__COMPILER_RUNTIME={__proto__:null,c:function(I){return w.H.useMemoCache(I)}},Se.cache=function(I){return function(){return I.apply(null,arguments)}},Se.cacheSignal=function(){return null},Se.cloneElement=function(I,K,xt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Mt=E({},I.props),Ut=I.key;if(K!=null)for(it in K.key!==void 0&&(Ut=""+K.key),K)!T.call(K,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&K.ref===void 0||(Mt[it]=K[it]);var it=arguments.length-2;if(it===1)Mt.children=xt;else if(1<it){for(var vt=Array(it),Et=0;Et<it;Et++)vt[Et]=arguments[Et+2];Mt.children=vt}return O(I.type,Ut,Mt)},Se.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:l,_context:I},I},Se.createElement=function(I,K,xt){var Mt,Ut={},it=null;if(K!=null)for(Mt in K.key!==void 0&&(it=""+K.key),K)T.call(K,Mt)&&Mt!=="key"&&Mt!=="__self"&&Mt!=="__source"&&(Ut[Mt]=K[Mt]);var vt=arguments.length-2;if(vt===1)Ut.children=xt;else if(1<vt){for(var Et=Array(vt),It=0;It<vt;It++)Et[It]=arguments[It+2];Ut.children=Et}if(I&&I.defaultProps)for(Mt in vt=I.defaultProps,vt)Ut[Mt]===void 0&&(Ut[Mt]=vt[Mt]);return O(I,it,Ut)},Se.createRef=function(){return{current:null}},Se.forwardRef=function(I){return{$$typeof:f,render:I}},Se.isValidElement=G,Se.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:J}},Se.memo=function(I,K){return{$$typeof:d,type:I,compare:K===void 0?null:K}},Se.startTransition=function(I){var K=w.T,xt={};w.T=xt;try{var Mt=I(),Ut=w.S;Ut!==null&&Ut(xt,Mt),typeof Mt=="object"&&Mt!==null&&typeof Mt.then=="function"&&Mt.then(N,ft)}catch(it){ft(it)}finally{K!==null&&xt.types!==null&&(K.types=xt.types),w.T=K}},Se.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},Se.use=function(I){return w.H.use(I)},Se.useActionState=function(I,K,xt){return w.H.useActionState(I,K,xt)},Se.useCallback=function(I,K){return w.H.useCallback(I,K)},Se.useContext=function(I){return w.H.useContext(I)},Se.useDebugValue=function(){},Se.useDeferredValue=function(I,K){return w.H.useDeferredValue(I,K)},Se.useEffect=function(I,K){return w.H.useEffect(I,K)},Se.useEffectEvent=function(I){return w.H.useEffectEvent(I)},Se.useId=function(){return w.H.useId()},Se.useImperativeHandle=function(I,K,xt){return w.H.useImperativeHandle(I,K,xt)},Se.useInsertionEffect=function(I,K){return w.H.useInsertionEffect(I,K)},Se.useLayoutEffect=function(I,K){return w.H.useLayoutEffect(I,K)},Se.useMemo=function(I,K){return w.H.useMemo(I,K)},Se.useOptimistic=function(I,K){return w.H.useOptimistic(I,K)},Se.useReducer=function(I,K,xt){return w.H.useReducer(I,K,xt)},Se.useRef=function(I){return w.H.useRef(I)},Se.useState=function(I){return w.H.useState(I)},Se.useSyncExternalStore=function(I,K,xt){return w.H.useSyncExternalStore(I,K,xt)},Se.useTransition=function(){return w.H.useTransition()},Se.version="19.2.6",Se}var Uy;function eg(){return Uy||(Uy=1,Im.exports=AA()),Im.exports}var za=eg(),Bm={exports:{}},sc={},Hm={exports:{}},Gm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ny;function RA(){return Ny||(Ny=1,(function(o){function t(F,H){var J=F.length;F.push(H);t:for(;0<J;){var ft=J-1>>>1,V=F[ft];if(0<r(V,H))F[ft]=H,F[J]=V,J=ft;else break t}}function n(F){return F.length===0?null:F[0]}function a(F){if(F.length===0)return null;var H=F[0],J=F.pop();if(J!==H){F[0]=J;t:for(var ft=0,V=F.length,I=V>>>1;ft<I;){var K=2*(ft+1)-1,xt=F[K],Mt=K+1,Ut=F[Mt];if(0>r(xt,J))Mt<V&&0>r(Ut,xt)?(F[ft]=Ut,F[Mt]=J,ft=Mt):(F[ft]=xt,F[K]=J,ft=K);else if(Mt<V&&0>r(Ut,J))F[ft]=Ut,F[Mt]=J,ft=Mt;else break t}}return H}function r(F,H){var J=F.sortIndex-H.sortIndex;return J!==0?J:F.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();o.unstable_now=function(){return c.now()-f}}var p=[],d=[],_=1,v=null,g=3,x=!1,M=!1,E=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function C(F){for(var H=n(d);H!==null;){if(H.callback===null)a(d);else if(H.startTime<=F)a(d),H.sortIndex=H.expirationTime,t(p,H);else break;H=n(d)}}function P(F){if(E=!1,C(F),!M)if(n(p)!==null)M=!0,N||(N=!0,k());else{var H=n(d);H!==null&&X(P,H.startTime-F)}}var N=!1,w=-1,T=5,O=-1;function B(){return S?!0:!(o.unstable_now()-O<T)}function G(){if(S=!1,N){var F=o.unstable_now();O=F;var H=!0;try{t:{M=!1,E&&(E=!1,A(w),w=-1),x=!0;var J=g;try{e:{for(C(F),v=n(p);v!==null&&!(v.expirationTime>F&&B());){var ft=v.callback;if(typeof ft=="function"){v.callback=null,g=v.priorityLevel;var V=ft(v.expirationTime<=F);if(F=o.unstable_now(),typeof V=="function"){v.callback=V,C(F),H=!0;break e}v===n(p)&&a(p),C(F)}else a(p);v=n(p)}if(v!==null)H=!0;else{var I=n(d);I!==null&&X(P,I.startTime-F),H=!1}}break t}finally{v=null,g=J,x=!1}H=void 0}}finally{H?k():N=!1}}}var k;if(typeof D=="function")k=function(){D(G)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,tt=et.port2;et.port1.onmessage=G,k=function(){tt.postMessage(null)}}else k=function(){y(G,0)};function X(F,H){w=y(function(){F(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(F){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var J=g;g=H;try{return F()}finally{g=J}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var J=g;g=F;try{return H()}finally{g=J}},o.unstable_scheduleCallback=function(F,H,J){var ft=o.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ft+J:ft):J=ft,F){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=J+V,F={id:_++,callback:H,priorityLevel:F,startTime:J,expirationTime:V,sortIndex:-1},J>ft?(F.sortIndex=J,t(d,F),n(p)===null&&F===n(d)&&(E?(A(w),w=-1):E=!0,X(P,J-ft))):(F.sortIndex=V,t(p,F),M||x||(M=!0,N||(N=!0,k()))),F},o.unstable_shouldYield=B,o.unstable_wrapCallback=function(F){var H=g;return function(){var J=g;g=H;try{return F.apply(this,arguments)}finally{g=J}}}})(Gm)),Gm}var Ly;function CA(){return Ly||(Ly=1,Hm.exports=RA()),Hm.exports}var Vm={exports:{}},xi={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oy;function wA(){if(Oy)return xi;Oy=1;var o=eg();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},r=Symbol.for("react.portal");function l(p,d,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:v==null?null:""+v,children:p,containerInfo:d,implementation:_}}var c=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return xi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,xi.createPortal=function(p,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return l(p,d,null,_)},xi.flushSync=function(p){var d=c.T,_=a.p;try{if(c.T=null,a.p=2,p)return p()}finally{c.T=d,a.p=_,a.d.f()}},xi.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},xi.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},xi.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var _=d.as,v=f(_,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:x}):_==="script"&&a.d.X(p,{crossOrigin:v,integrity:g,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},xi.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=f(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},xi.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,v=f(_,d.crossOrigin);a.d.L(p,_,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},xi.preloadModule=function(p,d){if(typeof p=="string")if(d){var _=f(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},xi.requestFormReset=function(p){a.d.r(p)},xi.unstable_batchedUpdates=function(p,d){return p(d)},xi.useFormState=function(p,d,_){return c.H.useFormState(p,d,_)},xi.useFormStatus=function(){return c.H.useHostTransitionStatus()},xi.version="19.2.6",xi}var Py;function DA(){if(Py)return Vm.exports;Py=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Vm.exports=wA(),Vm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zy;function UA(){if(zy)return sc;zy=1;var o=CA(),t=eg(),n=DA();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function c(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(l(e)!==e)throw Error(a(188))}function d(e){var i=e.alternate;if(!i){if(i=l(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,u=i;;){var h=s.return;if(h===null)break;var m=h.alternate;if(m===null){if(u=h.return,u!==null){s=u;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===s)return p(h),e;if(m===u)return p(h),i;m=m.sibling}throw Error(a(188))}if(s.return!==u.return)s=h,u=m;else{for(var b=!1,L=h.child;L;){if(L===s){b=!0,s=h,u=m;break}if(L===u){b=!0,u=h,s=m;break}L=L.sibling}if(!b){for(L=m.child;L;){if(L===s){b=!0,s=m,u=h;break}if(L===u){b=!0,u=m,s=h;break}L=L.sibling}if(!b)throw Error(a(189))}}if(s.alternate!==u)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function _(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=_(e),i!==null)return i;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),D=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),w=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),B=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function k(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var et=Symbol.for("react.client.reference");function tt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===et?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case y:return"Profiler";case S:return"StrictMode";case P:return"Suspense";case N:return"SuspenseList";case O:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case D:return e.displayName||"Context";case A:return(e._context.displayName||"Context")+".Consumer";case C:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case w:return i=e.displayName||null,i!==null?i:tt(e.type)||"Memo";case T:i=e._payload,e=e._init;try{return tt(e(i))}catch{}}return null}var X=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},ft=[],V=-1;function I(e){return{current:e}}function K(e){0>V||(e.current=ft[V],ft[V]=null,V--)}function xt(e,i){V++,ft[V]=e.current,e.current=i}var Mt=I(null),Ut=I(null),it=I(null),vt=I(null);function Et(e,i){switch(xt(it,i),xt(Ut,e),xt(Mt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?QS(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=QS(i),e=JS(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}K(Mt),xt(Mt,e)}function It(){K(Mt),K(Ut),K(it)}function ne(e){e.memoizedState!==null&&xt(vt,e);var i=Mt.current,s=JS(i,e.type);i!==s&&(xt(Ut,e),xt(Mt,s))}function Zt(e){Ut.current===e&&(K(Mt),K(Ut)),vt.current===e&&(K(vt),ec._currentValue=J)}var ye,qt;function ie(e){if(ye===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);ye=i&&i[1]||"",qt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ye+e+qt}var ve=!1;function se(e,i){if(!e||ve)return"";ve=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(i){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(ht){var ct=ht}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(ht){ct=ht}e.call(yt.prototype)}}else{try{throw Error()}catch(ht){ct=ht}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(ht){if(ht&&ct&&typeof ht.stack=="string")return[ht.stack,ct.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),b=m[0],L=m[1];if(b&&L){var W=b.split(`
`),ot=L.split(`
`);for(h=u=0;u<W.length&&!W[u].includes("DetermineComponentFrameRoot");)u++;for(;h<ot.length&&!ot[h].includes("DetermineComponentFrameRoot");)h++;if(u===W.length||h===ot.length)for(u=W.length-1,h=ot.length-1;1<=u&&0<=h&&W[u]!==ot[h];)h--;for(;1<=u&&0<=h;u--,h--)if(W[u]!==ot[h]){if(u!==1||h!==1)do if(u--,h--,0>h||W[u]!==ot[h]){var gt=`
`+W[u].replace(" at new "," at ");return e.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",e.displayName)),gt}while(1<=u&&0<=h);break}}}finally{ve=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?ie(s):""}function ut(e,i){switch(e.tag){case 26:case 27:case 5:return ie(e.type);case 16:return ie("Lazy");case 13:return e.child!==i&&i!==null?ie("Suspense Fallback"):ie("Suspense");case 19:return ie("SuspenseList");case 0:case 15:return se(e.type,!1);case 11:return se(e.type.render,!1);case 1:return se(e.type,!0);case 31:return ie("Activity");default:return""}}function we(e){try{var i="",s=null;do i+=ut(e,s),s=e,e=e.return;while(e);return i}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}var pn=Object.prototype.hasOwnProperty,j=o.unstable_scheduleCallback,ge=o.unstable_cancelCallback,me=o.unstable_shouldYield,ze=o.unstable_requestPaint,Lt=o.unstable_now,Me=o.unstable_getCurrentPriorityLevel,z=o.unstable_ImmediatePriority,R=o.unstable_UserBlockingPriority,Q=o.unstable_NormalPriority,_t=o.unstable_LowPriority,bt=o.unstable_IdlePriority,zt=o.log,Dt=o.unstable_setDisableYieldValue,dt=null,pt=null;function Bt(e){if(typeof zt=="function"&&Dt(e),pt&&typeof pt.setStrictMode=="function")try{pt.setStrictMode(dt,e)}catch{}}var Ht=Math.clz32?Math.clz32:Gt,Ft=Math.log,Ot=Math.LN2;function Gt(e){return e>>>=0,e===0?32:31-(Ft(e)/Ot|0)|0}var ce=256,de=262144,Y=4194304;function Rt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function mt(e,i,s){var u=e.pendingLanes;if(u===0)return 0;var h=0,m=e.suspendedLanes,b=e.pingedLanes;e=e.warmLanes;var L=u&134217727;return L!==0?(u=L&~m,u!==0?h=Rt(u):(b&=L,b!==0?h=Rt(b):s||(s=L&~e,s!==0&&(h=Rt(s))))):(L=u&~m,L!==0?h=Rt(L):b!==0?h=Rt(b):s||(s=u&~e,s!==0&&(h=Rt(s)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:h}function Vt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Pt(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tt(){var e=Y;return Y<<=1,(Y&62914560)===0&&(Y=4194304),e}function Ct(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Nt(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function oe(e,i,s,u,h,m){var b=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var L=e.entanglements,W=e.expirationTimes,ot=e.hiddenUpdates;for(s=b&~s;0<s;){var gt=31-Ht(s),yt=1<<gt;L[gt]=0,W[gt]=-1;var ct=ot[gt];if(ct!==null)for(ot[gt]=null,gt=0;gt<ct.length;gt++){var ht=ct[gt];ht!==null&&(ht.lane&=-536870913)}s&=~yt}u!==0&&wt(e,u,0),m!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=m&~(b&~i))}function wt(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var u=31-Ht(i);e.entangledLanes|=i,e.entanglements[u]=e.entanglements[u]|1073741824|s&261930}function re(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var u=31-Ht(s),h=1<<u;h&i|e[u]&i&&(e[u]|=i),s&=~h}}function Qt(e,i){var s=i&-i;return s=(s&42)!==0?1:fe(s),(s&(e.suspendedLanes|i))!==0?0:s}function fe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Tn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Re(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:yy(e.type))}function mn(e,i){var s=H.p;try{return H.p=e,i()}finally{H.p=s}}var je=Math.random().toString(36).slice(2),xe="__reactFiber$"+je,be="__reactProps$"+je,Fe="__reactContainer$"+je,kn="__reactEvents$"+je,cn="__reactListeners$"+je,Xn="__reactHandles$"+je,_i="__reactResources$"+je,Sn="__reactMarker$"+je;function Dn(e){delete e[xe],delete e[be],delete e[kn],delete e[cn],delete e[Xn]}function yn(e){var i=e[xe];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Fe]||s[xe]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=ry(e);e!==null;){if(s=e[xe])return s;e=ry(e)}return i}e=s,s=e.parentNode}return null}function gi(e){if(e=e[xe]||e[Fe]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function Ta(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Mn(e){var i=e[_i];return i||(i=e[_i]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function De(e){e[Sn]=!0}var Di=new Set,U={};function Z(e,i){st(e,i),st(e+"Capture",i)}function st(e,i){for(U[e]=i,e=0;e<i.length;e++)Di.add(i[e])}var nt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},kt={};function Wt(e){return pn.call(kt,e)?!0:pn.call(at,e)?!1:nt.test(e)?kt[e]=!0:(at[e]=!0,!1)}function Xt(e,i,s){if(Wt(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var u=i.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function Jt(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Kt(e,i,s,u){if(u===null)e.removeAttribute(s);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+u)}}function le(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Te(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ae(e,i,s){var u=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var h=u.get,m=u.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(b){s=""+b,m.call(this,b)}}),Object.defineProperty(e,i,{enumerable:u.enumerable}),{getValue:function(){return s},setValue:function(b){s=""+b},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ke(e){if(!e._valueTracker){var i=Te(e)?"checked":"value";e._valueTracker=ae(e,i,""+e[i])}}function An(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),u="";return e&&(u=Te(e)?e.checked?"true":"false":e.value),e=u,e!==s?(i.setValue(e),!0):!1}function _n(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var nn=/[\n"\\]/g;function an(e){return e.replace(nn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function jt(e,i,s,u,h,m,b,L){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),i!=null?b==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+le(i)):e.value!==""+le(i)&&(e.value=""+le(i)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),i!=null?Ie(e,b,le(i)):s!=null?Ie(e,b,le(s)):u!=null&&e.removeAttribute("value"),h==null&&m!=null&&(e.defaultChecked=!!m),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),L!=null&&typeof L!="function"&&typeof L!="symbol"&&typeof L!="boolean"?e.name=""+le(L):e.removeAttribute("name")}function vi(e,i,s,u,h,m,b,L){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Ke(e);return}s=s!=null?""+le(s):"",i=i!=null?""+le(i):s,L||i===e.value||(e.value=i),e.defaultValue=i}u=u??h,u=typeof u!="function"&&typeof u!="symbol"&&!!u,e.checked=L?e.checked:!!u,e.defaultChecked=!!u,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b),Ke(e)}function Ie(e,i,s){i==="number"&&_n(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function Jn(e,i,s,u){if(e=e.options,i){i={};for(var h=0;h<s.length;h++)i["$"+s[h]]=!0;for(s=0;s<e.length;s++)h=i.hasOwnProperty("$"+e[s].value),e[s].selected!==h&&(e[s].selected=h),h&&u&&(e[s].defaultSelected=!0)}else{for(s=""+le(s),i=null,h=0;h<e.length;h++){if(e[h].value===s){e[h].selected=!0,u&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function ea(e,i,s){if(i!=null&&(i=""+le(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+le(s):""}function ka(e,i,s,u){if(i==null){if(u!=null){if(s!=null)throw Error(a(92));if(X(u)){if(1<u.length)throw Error(a(93));u=u[0]}s=u}s==null&&(s=""),i=s}s=le(i),e.defaultValue=s,u=e.textContent,u===s&&u!==""&&u!==null&&(e.value=u),Ke(e)}function na(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var rn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rn(e,i,s){var u=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?u?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":u?e.setProperty(i,s):typeof s!="number"||s===0||rn.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function Xa(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var u in s)!s.hasOwnProperty(u)||i!=null&&i.hasOwnProperty(u)||(u.indexOf("--")===0?e.setProperty(u,""):u==="float"?e.cssFloat="":e[u]="");for(var h in i)u=i[h],i.hasOwnProperty(h)&&s[h]!==u&&Rn(e,h,u)}else for(var m in i)i.hasOwnProperty(m)&&Rn(e,m,i[m])}function tn(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nr=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ss=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function to(e){return ss.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function br(){}var Od=null;function Pd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zo=null,Ko=null;function Kg(e){var i=gi(e);if(i&&(e=i.stateNode)){var s=e[be]||null;t:switch(e=i.stateNode,i.type){case"input":if(jt(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+an(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var u=s[i];if(u!==e&&u.form===e.form){var h=u[be]||null;if(!h)throw Error(a(90));jt(u,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<s.length;i++)u=s[i],u.form===e.form&&An(u)}break t;case"textarea":ea(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&Jn(e,!!s.multiple,i,!1)}}}var zd=!1;function Qg(e,i,s){if(zd)return e(i,s);zd=!0;try{var u=e(i);return u}finally{if(zd=!1,(Zo!==null||Ko!==null)&&(Wf(),Zo&&(i=Zo,e=Ko,Ko=Zo=null,Kg(i),e)))for(i=0;i<e.length;i++)Kg(e[i])}}function vu(e,i){var s=e.stateNode;if(s===null)return null;var u=s[be]||null;if(u===null)return null;s=u[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(e=e.type,u=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!u;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fd=!1;if(Tr)try{var xu={};Object.defineProperty(xu,"passive",{get:function(){Fd=!0}}),window.addEventListener("test",xu,xu),window.removeEventListener("test",xu,xu)}catch{Fd=!1}var os=null,Id=null,rf=null;function Jg(){if(rf)return rf;var e,i=Id,s=i.length,u,h="value"in os?os.value:os.textContent,m=h.length;for(e=0;e<s&&i[e]===h[e];e++);var b=s-e;for(u=1;u<=b&&i[s-u]===h[m-u];u++);return rf=h.slice(e,1<u?1-u:void 0)}function sf(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function of(){return!0}function $g(){return!1}function Hi(e){function i(s,u,h,m,b){this._reactName=s,this._targetInst=h,this.type=u,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var L in e)e.hasOwnProperty(L)&&(s=e[L],this[L]=s?s(m):m[L]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?of:$g,this.isPropagationStopped=$g,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=of)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=of)},persist:function(){},isPersistent:of}),i}var eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lf=Hi(eo),Su=v({},eo,{view:0,detail:0}),Mb=Hi(Su),Bd,Hd,yu,uf=v({},Su,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yu&&(yu&&e.type==="mousemove"?(Bd=e.screenX-yu.screenX,Hd=e.screenY-yu.screenY):Hd=Bd=0,yu=e),Bd)},movementY:function(e){return"movementY"in e?e.movementY:Hd}}),tv=Hi(uf),Eb=v({},uf,{dataTransfer:0}),bb=Hi(Eb),Tb=v({},Su,{relatedTarget:0}),Gd=Hi(Tb),Ab=v({},eo,{animationName:0,elapsedTime:0,pseudoElement:0}),Rb=Hi(Ab),Cb=v({},eo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wb=Hi(Cb),Db=v({},eo,{data:0}),ev=Hi(Db),Ub={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ob(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Lb[e])?!!i[e]:!1}function Vd(){return Ob}var Pb=v({},Su,{key:function(e){if(e.key){var i=Ub[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=sf(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vd,charCode:function(e){return e.type==="keypress"?sf(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?sf(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zb=Hi(Pb),Fb=v({},uf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nv=Hi(Fb),Ib=v({},Su,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vd}),Bb=Hi(Ib),Hb=v({},eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gb=Hi(Hb),Vb=v({},uf,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kb=Hi(Vb),Xb=v({},eo,{newState:0,oldState:0}),Wb=Hi(Xb),Yb=[9,13,27,32],kd=Tr&&"CompositionEvent"in window,Mu=null;Tr&&"documentMode"in document&&(Mu=document.documentMode);var qb=Tr&&"TextEvent"in window&&!Mu,iv=Tr&&(!kd||Mu&&8<Mu&&11>=Mu),av=" ",rv=!1;function sv(e,i){switch(e){case"keyup":return Yb.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ov(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qo=!1;function jb(e,i){switch(e){case"compositionend":return ov(i);case"keypress":return i.which!==32?null:(rv=!0,av);case"textInput":return e=i.data,e===av&&rv?null:e;default:return null}}function Zb(e,i){if(Qo)return e==="compositionend"||!kd&&sv(e,i)?(e=Jg(),rf=Id=os=null,Qo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return iv&&i.locale!=="ko"?null:i.data;default:return null}}var Kb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lv(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Kb[e.type]:i==="textarea"}function uv(e,i,s,u){Zo?Ko?Ko.push(u):Ko=[u]:Zo=u,i=Jf(i,"onChange"),0<i.length&&(s=new lf("onChange","change",null,s,u),e.push({event:s,listeners:i}))}var Eu=null,bu=null;function Qb(e){WS(e,0)}function cf(e){var i=Ta(e);if(An(i))return e}function cv(e,i){if(e==="change")return i}var fv=!1;if(Tr){var Xd;if(Tr){var Wd="oninput"in document;if(!Wd){var hv=document.createElement("div");hv.setAttribute("oninput","return;"),Wd=typeof hv.oninput=="function"}Xd=Wd}else Xd=!1;fv=Xd&&(!document.documentMode||9<document.documentMode)}function dv(){Eu&&(Eu.detachEvent("onpropertychange",pv),bu=Eu=null)}function pv(e){if(e.propertyName==="value"&&cf(bu)){var i=[];uv(i,bu,e,Pd(e)),Qg(Qb,i)}}function Jb(e,i,s){e==="focusin"?(dv(),Eu=i,bu=s,Eu.attachEvent("onpropertychange",pv)):e==="focusout"&&dv()}function $b(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cf(bu)}function tT(e,i){if(e==="click")return cf(i)}function eT(e,i){if(e==="input"||e==="change")return cf(i)}function nT(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var ia=typeof Object.is=="function"?Object.is:nT;function Tu(e,i){if(ia(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),u=Object.keys(i);if(s.length!==u.length)return!1;for(u=0;u<s.length;u++){var h=s[u];if(!pn.call(i,h)||!ia(e[h],i[h]))return!1}return!0}function mv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _v(e,i){var s=mv(e);e=0;for(var u;s;){if(s.nodeType===3){if(u=e+s.textContent.length,e<=i&&u>=i)return{node:s,offset:i-e};e=u}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=mv(s)}}function gv(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?gv(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function vv(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=_n(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=_n(e.document)}return i}function Yd(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var iT=Tr&&"documentMode"in document&&11>=document.documentMode,Jo=null,qd=null,Au=null,jd=!1;function xv(e,i,s){var u=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;jd||Jo==null||Jo!==_n(u)||(u=Jo,"selectionStart"in u&&Yd(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Au&&Tu(Au,u)||(Au=u,u=Jf(qd,"onSelect"),0<u.length&&(i=new lf("onSelect","select",null,i,s),e.push({event:i,listeners:u}),i.target=Jo)))}function no(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var $o={animationend:no("Animation","AnimationEnd"),animationiteration:no("Animation","AnimationIteration"),animationstart:no("Animation","AnimationStart"),transitionrun:no("Transition","TransitionRun"),transitionstart:no("Transition","TransitionStart"),transitioncancel:no("Transition","TransitionCancel"),transitionend:no("Transition","TransitionEnd")},Zd={},Sv={};Tr&&(Sv=document.createElement("div").style,"AnimationEvent"in window||(delete $o.animationend.animation,delete $o.animationiteration.animation,delete $o.animationstart.animation),"TransitionEvent"in window||delete $o.transitionend.transition);function io(e){if(Zd[e])return Zd[e];if(!$o[e])return e;var i=$o[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in Sv)return Zd[e]=i[s];return e}var yv=io("animationend"),Mv=io("animationiteration"),Ev=io("animationstart"),aT=io("transitionrun"),rT=io("transitionstart"),sT=io("transitioncancel"),bv=io("transitionend"),Tv=new Map,Kd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Kd.push("scrollEnd");function Wa(e,i){Tv.set(e,i),Z(i,[e])}var ff=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Aa=[],tl=0,Qd=0;function hf(){for(var e=tl,i=Qd=tl=0;i<e;){var s=Aa[i];Aa[i++]=null;var u=Aa[i];Aa[i++]=null;var h=Aa[i];Aa[i++]=null;var m=Aa[i];if(Aa[i++]=null,u!==null&&h!==null){var b=u.pending;b===null?h.next=h:(h.next=b.next,b.next=h),u.pending=h}m!==0&&Av(s,h,m)}}function df(e,i,s,u){Aa[tl++]=e,Aa[tl++]=i,Aa[tl++]=s,Aa[tl++]=u,Qd|=u,e.lanes|=u,e=e.alternate,e!==null&&(e.lanes|=u)}function Jd(e,i,s,u){return df(e,i,s,u),pf(e)}function ao(e,i){return df(e,null,null,i),pf(e)}function Av(e,i,s){e.lanes|=s;var u=e.alternate;u!==null&&(u.lanes|=s);for(var h=!1,m=e.return;m!==null;)m.childLanes|=s,u=m.alternate,u!==null&&(u.childLanes|=s),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(h=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,h&&i!==null&&(h=31-Ht(s),e=m.hiddenUpdates,u=e[h],u===null?e[h]=[i]:u.push(i),i.lane=s|536870912),m):null}function pf(e){if(50<ju)throw ju=0,om=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var el={};function oT(e,i,s,u){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function aa(e,i,s,u){return new oT(e,i,s,u)}function $d(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ar(e,i){var s=e.alternate;return s===null?(s=aa(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Rv(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function mf(e,i,s,u,h,m){var b=0;if(u=e,typeof e=="function")$d(e)&&(b=1);else if(typeof e=="string")b=hA(e,s,Mt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case O:return e=aa(31,s,i,h),e.elementType=O,e.lanes=m,e;case E:return ro(s.children,h,m,i);case S:b=8,h|=24;break;case y:return e=aa(12,s,i,h|2),e.elementType=y,e.lanes=m,e;case P:return e=aa(13,s,i,h),e.elementType=P,e.lanes=m,e;case N:return e=aa(19,s,i,h),e.elementType=N,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:b=10;break t;case A:b=9;break t;case C:b=11;break t;case w:b=14;break t;case T:b=16,u=null;break t}b=29,s=Error(a(130,e===null?"null":typeof e,"")),u=null}return i=aa(b,s,i,h),i.elementType=e,i.type=u,i.lanes=m,i}function ro(e,i,s,u){return e=aa(7,e,u,i),e.lanes=s,e}function tp(e,i,s){return e=aa(6,e,null,i),e.lanes=s,e}function Cv(e){var i=aa(18,null,null,0);return i.stateNode=e,i}function ep(e,i,s){return i=aa(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var wv=new WeakMap;function Ra(e,i){if(typeof e=="object"&&e!==null){var s=wv.get(e);return s!==void 0?s:(i={value:e,source:i,stack:we(i)},wv.set(e,i),i)}return{value:e,source:i,stack:we(i)}}var nl=[],il=0,_f=null,Ru=0,Ca=[],wa=0,ls=null,ir=1,ar="";function Rr(e,i){nl[il++]=Ru,nl[il++]=_f,_f=e,Ru=i}function Dv(e,i,s){Ca[wa++]=ir,Ca[wa++]=ar,Ca[wa++]=ls,ls=e;var u=ir;e=ar;var h=32-Ht(u)-1;u&=~(1<<h),s+=1;var m=32-Ht(i)+h;if(30<m){var b=h-h%5;m=(u&(1<<b)-1).toString(32),u>>=b,h-=b,ir=1<<32-Ht(i)+h|s<<h|u,ar=m+e}else ir=1<<m|s<<h|u,ar=e}function np(e){e.return!==null&&(Rr(e,1),Dv(e,1,0))}function ip(e){for(;e===_f;)_f=nl[--il],nl[il]=null,Ru=nl[--il],nl[il]=null;for(;e===ls;)ls=Ca[--wa],Ca[wa]=null,ar=Ca[--wa],Ca[wa]=null,ir=Ca[--wa],Ca[wa]=null}function Uv(e,i){Ca[wa++]=ir,Ca[wa++]=ar,Ca[wa++]=ls,ir=i.id,ar=i.overflow,ls=e}var ui=null,En=null,Xe=!1,us=null,Da=!1,ap=Error(a(519));function cs(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Cu(Ra(i,e)),ap}function Nv(e){var i=e.stateNode,s=e.type,u=e.memoizedProps;switch(i[xe]=e,i[be]=u,s){case"dialog":He("cancel",i),He("close",i);break;case"iframe":case"object":case"embed":He("load",i);break;case"video":case"audio":for(s=0;s<Ku.length;s++)He(Ku[s],i);break;case"source":He("error",i);break;case"img":case"image":case"link":He("error",i),He("load",i);break;case"details":He("toggle",i);break;case"input":He("invalid",i),vi(i,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0);break;case"select":He("invalid",i);break;case"textarea":He("invalid",i),ka(i,u.value,u.defaultValue,u.children)}s=u.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||u.suppressHydrationWarning===!0||ZS(i.textContent,s)?(u.popover!=null&&(He("beforetoggle",i),He("toggle",i)),u.onScroll!=null&&He("scroll",i),u.onScrollEnd!=null&&He("scrollend",i),u.onClick!=null&&(i.onclick=br),i=!0):i=!1,i||cs(e,!0)}function Lv(e){for(ui=e.return;ui;)switch(ui.tag){case 5:case 31:case 13:Da=!1;return;case 27:case 3:Da=!0;return;default:ui=ui.return}}function al(e){if(e!==ui)return!1;if(!Xe)return Lv(e),Xe=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Mm(e.type,e.memoizedProps)),s=!s),s&&En&&cs(e),Lv(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));En=ay(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));En=ay(e)}else i===27?(i=En,bs(e.type)?(e=Rm,Rm=null,En=e):En=i):En=ui?Na(e.stateNode.nextSibling):null;return!0}function so(){En=ui=null,Xe=!1}function rp(){var e=us;return e!==null&&(Xi===null?Xi=e:Xi.push.apply(Xi,e),us=null),e}function Cu(e){us===null?us=[e]:us.push(e)}var sp=I(null),oo=null,Cr=null;function fs(e,i,s){xt(sp,i._currentValue),i._currentValue=s}function wr(e){e._currentValue=sp.current,K(sp)}function op(e,i,s){for(;e!==null;){var u=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),e===s)break;e=e.return}}function lp(e,i,s,u){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var m=h.dependencies;if(m!==null){var b=h.child;m=m.firstContext;t:for(;m!==null;){var L=m;m=h;for(var W=0;W<i.length;W++)if(L.context===i[W]){m.lanes|=s,L=m.alternate,L!==null&&(L.lanes|=s),op(m.return,s,e),u||(b=null);break t}m=L.next}}else if(h.tag===18){if(b=h.return,b===null)throw Error(a(341));b.lanes|=s,m=b.alternate,m!==null&&(m.lanes|=s),op(b,s,e),b=null}else b=h.child;if(b!==null)b.return=h;else for(b=h;b!==null;){if(b===e){b=null;break}if(h=b.sibling,h!==null){h.return=b.return,b=h;break}b=b.return}h=b}}function rl(e,i,s,u){e=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var b=h.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var L=h.type;ia(h.pendingProps.value,b.value)||(e!==null?e.push(L):e=[L])}}else if(h===vt.current){if(b=h.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(ec):e=[ec])}h=h.return}e!==null&&lp(i,e,s,u),i.flags|=262144}function gf(e){for(e=e.firstContext;e!==null;){if(!ia(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function lo(e){oo=e,Cr=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ci(e){return Ov(oo,e)}function vf(e,i){return oo===null&&lo(e),Ov(e,i)}function Ov(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Cr===null){if(e===null)throw Error(a(308));Cr=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Cr=Cr.next=i;return s}var lT=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,u){e.push(u)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},uT=o.unstable_scheduleCallback,cT=o.unstable_NormalPriority,Wn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function up(){return{controller:new lT,data:new Map,refCount:0}}function wu(e){e.refCount--,e.refCount===0&&uT(cT,function(){e.controller.abort()})}var Du=null,cp=0,sl=0,ol=null;function fT(e,i){if(Du===null){var s=Du=[];cp=0,sl=dm(),ol={status:"pending",value:void 0,then:function(u){s.push(u)}}}return cp++,i.then(Pv,Pv),i}function Pv(){if(--cp===0&&Du!==null){ol!==null&&(ol.status="fulfilled");var e=Du;Du=null,sl=0,ol=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function hT(e,i){var s=[],u={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return e.then(function(){u.status="fulfilled",u.value=i;for(var h=0;h<s.length;h++)(0,s[h])(i)},function(h){for(u.status="rejected",u.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),u}var zv=F.S;F.S=function(e,i){xS=Lt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&fT(e,i),zv!==null&&zv(e,i)};var uo=I(null);function fp(){var e=uo.current;return e!==null?e:gn.pooledCache}function xf(e,i){i===null?xt(uo,uo.current):xt(uo,i.pool)}function Fv(){var e=fp();return e===null?null:{parent:Wn._currentValue,pool:e}}var ll=Error(a(460)),hp=Error(a(474)),Sf=Error(a(542)),yf={then:function(){}};function Iv(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Bv(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(br,br),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Gv(e),e;default:if(typeof i.status=="string")i.then(br,br);else{if(e=gn,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(u){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=u}},function(u){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=u}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Gv(e),e}throw fo=i,ll}}function co(e){try{var i=e._init;return i(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(fo=s,ll):s}}var fo=null;function Hv(){if(fo===null)throw Error(a(459));var e=fo;return fo=null,e}function Gv(e){if(e===ll||e===Sf)throw Error(a(483))}var ul=null,Uu=0;function Mf(e){var i=Uu;return Uu+=1,ul===null&&(ul=[]),Bv(ul,e,i)}function Nu(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Ef(e,i){throw i.$$typeof===g?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Vv(e){function i($,q){if(e){var rt=$.deletions;rt===null?($.deletions=[q],$.flags|=16):rt.push(q)}}function s($,q){if(!e)return null;for(;q!==null;)i($,q),q=q.sibling;return null}function u($){for(var q=new Map;$!==null;)$.key!==null?q.set($.key,$):q.set($.index,$),$=$.sibling;return q}function h($,q){return $=Ar($,q),$.index=0,$.sibling=null,$}function m($,q,rt){return $.index=rt,e?(rt=$.alternate,rt!==null?(rt=rt.index,rt<q?($.flags|=67108866,q):rt):($.flags|=67108866,q)):($.flags|=1048576,q)}function b($){return e&&$.alternate===null&&($.flags|=67108866),$}function L($,q,rt,St){return q===null||q.tag!==6?(q=tp(rt,$.mode,St),q.return=$,q):(q=h(q,rt),q.return=$,q)}function W($,q,rt,St){var ue=rt.type;return ue===E?gt($,q,rt.props.children,St,rt.key):q!==null&&(q.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===T&&co(ue)===q.type)?(q=h(q,rt.props),Nu(q,rt),q.return=$,q):(q=mf(rt.type,rt.key,rt.props,null,$.mode,St),Nu(q,rt),q.return=$,q)}function ot($,q,rt,St){return q===null||q.tag!==4||q.stateNode.containerInfo!==rt.containerInfo||q.stateNode.implementation!==rt.implementation?(q=ep(rt,$.mode,St),q.return=$,q):(q=h(q,rt.children||[]),q.return=$,q)}function gt($,q,rt,St,ue){return q===null||q.tag!==7?(q=ro(rt,$.mode,St,ue),q.return=$,q):(q=h(q,rt),q.return=$,q)}function yt($,q,rt){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=tp(""+q,$.mode,rt),q.return=$,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case x:return rt=mf(q.type,q.key,q.props,null,$.mode,rt),Nu(rt,q),rt.return=$,rt;case M:return q=ep(q,$.mode,rt),q.return=$,q;case T:return q=co(q),yt($,q,rt)}if(X(q)||k(q))return q=ro(q,$.mode,rt,null),q.return=$,q;if(typeof q.then=="function")return yt($,Mf(q),rt);if(q.$$typeof===D)return yt($,vf($,q),rt);Ef($,q)}return null}function ct($,q,rt,St){var ue=q!==null?q.key:null;if(typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint")return ue!==null?null:L($,q,""+rt,St);if(typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case x:return rt.key===ue?W($,q,rt,St):null;case M:return rt.key===ue?ot($,q,rt,St):null;case T:return rt=co(rt),ct($,q,rt,St)}if(X(rt)||k(rt))return ue!==null?null:gt($,q,rt,St,null);if(typeof rt.then=="function")return ct($,q,Mf(rt),St);if(rt.$$typeof===D)return ct($,q,vf($,rt),St);Ef($,rt)}return null}function ht($,q,rt,St,ue){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return $=$.get(rt)||null,L(q,$,""+St,ue);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case x:return $=$.get(St.key===null?rt:St.key)||null,W(q,$,St,ue);case M:return $=$.get(St.key===null?rt:St.key)||null,ot(q,$,St,ue);case T:return St=co(St),ht($,q,rt,St,ue)}if(X(St)||k(St))return $=$.get(rt)||null,gt(q,$,St,ue,null);if(typeof St.then=="function")return ht($,q,rt,Mf(St),ue);if(St.$$typeof===D)return ht($,q,rt,vf(q,St),ue);Ef(q,St)}return null}function $t($,q,rt,St){for(var ue=null,Qe=null,ee=q,Ce=q=0,ke=null;ee!==null&&Ce<rt.length;Ce++){ee.index>Ce?(ke=ee,ee=null):ke=ee.sibling;var Je=ct($,ee,rt[Ce],St);if(Je===null){ee===null&&(ee=ke);break}e&&ee&&Je.alternate===null&&i($,ee),q=m(Je,q,Ce),Qe===null?ue=Je:Qe.sibling=Je,Qe=Je,ee=ke}if(Ce===rt.length)return s($,ee),Xe&&Rr($,Ce),ue;if(ee===null){for(;Ce<rt.length;Ce++)ee=yt($,rt[Ce],St),ee!==null&&(q=m(ee,q,Ce),Qe===null?ue=ee:Qe.sibling=ee,Qe=ee);return Xe&&Rr($,Ce),ue}for(ee=u(ee);Ce<rt.length;Ce++)ke=ht(ee,$,Ce,rt[Ce],St),ke!==null&&(e&&ke.alternate!==null&&ee.delete(ke.key===null?Ce:ke.key),q=m(ke,q,Ce),Qe===null?ue=ke:Qe.sibling=ke,Qe=ke);return e&&ee.forEach(function(ws){return i($,ws)}),Xe&&Rr($,Ce),ue}function he($,q,rt,St){if(rt==null)throw Error(a(151));for(var ue=null,Qe=null,ee=q,Ce=q=0,ke=null,Je=rt.next();ee!==null&&!Je.done;Ce++,Je=rt.next()){ee.index>Ce?(ke=ee,ee=null):ke=ee.sibling;var ws=ct($,ee,Je.value,St);if(ws===null){ee===null&&(ee=ke);break}e&&ee&&ws.alternate===null&&i($,ee),q=m(ws,q,Ce),Qe===null?ue=ws:Qe.sibling=ws,Qe=ws,ee=ke}if(Je.done)return s($,ee),Xe&&Rr($,Ce),ue;if(ee===null){for(;!Je.done;Ce++,Je=rt.next())Je=yt($,Je.value,St),Je!==null&&(q=m(Je,q,Ce),Qe===null?ue=Je:Qe.sibling=Je,Qe=Je);return Xe&&Rr($,Ce),ue}for(ee=u(ee);!Je.done;Ce++,Je=rt.next())Je=ht(ee,$,Ce,Je.value,St),Je!==null&&(e&&Je.alternate!==null&&ee.delete(Je.key===null?Ce:Je.key),q=m(Je,q,Ce),Qe===null?ue=Je:Qe.sibling=Je,Qe=Je);return e&&ee.forEach(function(EA){return i($,EA)}),Xe&&Rr($,Ce),ue}function dn($,q,rt,St){if(typeof rt=="object"&&rt!==null&&rt.type===E&&rt.key===null&&(rt=rt.props.children),typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case x:t:{for(var ue=rt.key;q!==null;){if(q.key===ue){if(ue=rt.type,ue===E){if(q.tag===7){s($,q.sibling),St=h(q,rt.props.children),St.return=$,$=St;break t}}else if(q.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===T&&co(ue)===q.type){s($,q.sibling),St=h(q,rt.props),Nu(St,rt),St.return=$,$=St;break t}s($,q);break}else i($,q);q=q.sibling}rt.type===E?(St=ro(rt.props.children,$.mode,St,rt.key),St.return=$,$=St):(St=mf(rt.type,rt.key,rt.props,null,$.mode,St),Nu(St,rt),St.return=$,$=St)}return b($);case M:t:{for(ue=rt.key;q!==null;){if(q.key===ue)if(q.tag===4&&q.stateNode.containerInfo===rt.containerInfo&&q.stateNode.implementation===rt.implementation){s($,q.sibling),St=h(q,rt.children||[]),St.return=$,$=St;break t}else{s($,q);break}else i($,q);q=q.sibling}St=ep(rt,$.mode,St),St.return=$,$=St}return b($);case T:return rt=co(rt),dn($,q,rt,St)}if(X(rt))return $t($,q,rt,St);if(k(rt)){if(ue=k(rt),typeof ue!="function")throw Error(a(150));return rt=ue.call(rt),he($,q,rt,St)}if(typeof rt.then=="function")return dn($,q,Mf(rt),St);if(rt.$$typeof===D)return dn($,q,vf($,rt),St);Ef($,rt)}return typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint"?(rt=""+rt,q!==null&&q.tag===6?(s($,q.sibling),St=h(q,rt),St.return=$,$=St):(s($,q),St=tp(rt,$.mode,St),St.return=$,$=St),b($)):s($,q)}return function($,q,rt,St){try{Uu=0;var ue=dn($,q,rt,St);return ul=null,ue}catch(ee){if(ee===ll||ee===Sf)throw ee;var Qe=aa(29,ee,null,$.mode);return Qe.lanes=St,Qe.return=$,Qe}finally{}}}var ho=Vv(!0),kv=Vv(!1),hs=!1;function dp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pp(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ds(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ps(e,i,s){var u=e.updateQueue;if(u===null)return null;if(u=u.shared,($e&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,i=pf(e),Av(e,null,s),i}return df(e,u,i,s),pf(e)}function Lu(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var u=i.lanes;u&=e.pendingLanes,s|=u,i.lanes=s,re(e,s)}}function mp(e,i){var s=e.updateQueue,u=e.alternate;if(u!==null&&(u=u.updateQueue,s===u)){var h=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var b={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?h=m=b:m=m.next=b,s=s.next}while(s!==null);m===null?h=m=i:m=m.next=i}else h=m=i;s={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var _p=!1;function Ou(){if(_p){var e=ol;if(e!==null)throw e}}function Pu(e,i,s,u){_p=!1;var h=e.updateQueue;hs=!1;var m=h.firstBaseUpdate,b=h.lastBaseUpdate,L=h.shared.pending;if(L!==null){h.shared.pending=null;var W=L,ot=W.next;W.next=null,b===null?m=ot:b.next=ot,b=W;var gt=e.alternate;gt!==null&&(gt=gt.updateQueue,L=gt.lastBaseUpdate,L!==b&&(L===null?gt.firstBaseUpdate=ot:L.next=ot,gt.lastBaseUpdate=W))}if(m!==null){var yt=h.baseState;b=0,gt=ot=W=null,L=m;do{var ct=L.lane&-536870913,ht=ct!==L.lane;if(ht?(Ve&ct)===ct:(u&ct)===ct){ct!==0&&ct===sl&&(_p=!0),gt!==null&&(gt=gt.next={lane:0,tag:L.tag,payload:L.payload,callback:null,next:null});t:{var $t=e,he=L;ct=i;var dn=s;switch(he.tag){case 1:if($t=he.payload,typeof $t=="function"){yt=$t.call(dn,yt,ct);break t}yt=$t;break t;case 3:$t.flags=$t.flags&-65537|128;case 0:if($t=he.payload,ct=typeof $t=="function"?$t.call(dn,yt,ct):$t,ct==null)break t;yt=v({},yt,ct);break t;case 2:hs=!0}}ct=L.callback,ct!==null&&(e.flags|=64,ht&&(e.flags|=8192),ht=h.callbacks,ht===null?h.callbacks=[ct]:ht.push(ct))}else ht={lane:ct,tag:L.tag,payload:L.payload,callback:L.callback,next:null},gt===null?(ot=gt=ht,W=yt):gt=gt.next=ht,b|=ct;if(L=L.next,L===null){if(L=h.shared.pending,L===null)break;ht=L,L=ht.next,ht.next=null,h.lastBaseUpdate=ht,h.shared.pending=null}}while(!0);gt===null&&(W=yt),h.baseState=W,h.firstBaseUpdate=ot,h.lastBaseUpdate=gt,m===null&&(h.shared.lanes=0),xs|=b,e.lanes=b,e.memoizedState=yt}}function Xv(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function Wv(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Xv(s[e],i)}var cl=I(null),bf=I(0);function Yv(e,i){e=Ir,xt(bf,e),xt(cl,i),Ir=e|i.baseLanes}function gp(){xt(bf,Ir),xt(cl,cl.current)}function vp(){Ir=bf.current,K(cl),K(bf)}var ra=I(null),Ua=null;function ms(e){var i=e.alternate;xt(In,In.current&1),xt(ra,e),Ua===null&&(i===null||cl.current!==null||i.memoizedState!==null)&&(Ua=e)}function xp(e){xt(In,In.current),xt(ra,e),Ua===null&&(Ua=e)}function qv(e){e.tag===22?(xt(In,In.current),xt(ra,e),Ua===null&&(Ua=e)):_s()}function _s(){xt(In,In.current),xt(ra,ra.current)}function sa(e){K(ra),Ua===e&&(Ua=null),K(In)}var In=I(0);function Tf(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Tm(s)||Am(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Dr=0,Ae=null,fn=null,Yn=null,Af=!1,fl=!1,po=!1,Rf=0,zu=0,hl=null,dT=0;function On(){throw Error(a(321))}function Sp(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!ia(e[s],i[s]))return!1;return!0}function yp(e,i,s,u,h,m){return Dr=m,Ae=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=e===null||e.memoizedState===null?Dx:zp,po=!1,m=s(u,h),po=!1,fl&&(m=Zv(i,s,u,h)),jv(e),m}function jv(e){F.H=Bu;var i=fn!==null&&fn.next!==null;if(Dr=0,Yn=fn=Ae=null,Af=!1,zu=0,hl=null,i)throw Error(a(300));e===null||qn||(e=e.dependencies,e!==null&&gf(e)&&(qn=!0))}function Zv(e,i,s,u){Ae=e;var h=0;do{if(fl&&(hl=null),zu=0,fl=!1,25<=h)throw Error(a(301));if(h+=1,Yn=fn=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}F.H=Ux,m=i(s,u)}while(fl);return m}function pT(){var e=F.H,i=e.useState()[0];return i=typeof i.then=="function"?Fu(i):i,e=e.useState()[0],(fn!==null?fn.memoizedState:null)!==e&&(Ae.flags|=1024),i}function Mp(){var e=Rf!==0;return Rf=0,e}function Ep(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function bp(e){if(Af){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Af=!1}Dr=0,Yn=fn=Ae=null,fl=!1,zu=Rf=0,hl=null}function Ui(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Yn===null?Ae.memoizedState=Yn=e:Yn=Yn.next=e,Yn}function Bn(){if(fn===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=fn.next;var i=Yn===null?Ae.memoizedState:Yn.next;if(i!==null)Yn=i,fn=e;else{if(e===null)throw Ae.alternate===null?Error(a(467)):Error(a(310));fn=e,e={memoizedState:fn.memoizedState,baseState:fn.baseState,baseQueue:fn.baseQueue,queue:fn.queue,next:null},Yn===null?Ae.memoizedState=Yn=e:Yn=Yn.next=e}return Yn}function Cf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fu(e){var i=zu;return zu+=1,hl===null&&(hl=[]),e=Bv(hl,e,i),i=Ae,(Yn===null?i.memoizedState:Yn.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?Dx:zp),e}function wf(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Fu(e);if(e.$$typeof===D)return ci(e)}throw Error(a(438,String(e)))}function Tp(e){var i=null,s=Ae.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var u=Ae.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(i={data:u.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Cf(),Ae.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),u=0;u<e;u++)s[u]=B;return i.index++,s}function Ur(e,i){return typeof i=="function"?i(e):i}function Df(e){var i=Bn();return Ap(i,fn,e)}function Ap(e,i,s){var u=e.queue;if(u===null)throw Error(a(311));u.lastRenderedReducer=s;var h=e.baseQueue,m=u.pending;if(m!==null){if(h!==null){var b=h.next;h.next=m.next,m.next=b}i.baseQueue=h=m,u.pending=null}if(m=e.baseState,h===null)e.memoizedState=m;else{i=h.next;var L=b=null,W=null,ot=i,gt=!1;do{var yt=ot.lane&-536870913;if(yt!==ot.lane?(Ve&yt)===yt:(Dr&yt)===yt){var ct=ot.revertLane;if(ct===0)W!==null&&(W=W.next={lane:0,revertLane:0,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null}),yt===sl&&(gt=!0);else if((Dr&ct)===ct){ot=ot.next,ct===sl&&(gt=!0);continue}else yt={lane:0,revertLane:ot.revertLane,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},W===null?(L=W=yt,b=m):W=W.next=yt,Ae.lanes|=ct,xs|=ct;yt=ot.action,po&&s(m,yt),m=ot.hasEagerState?ot.eagerState:s(m,yt)}else ct={lane:yt,revertLane:ot.revertLane,gesture:ot.gesture,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},W===null?(L=W=ct,b=m):W=W.next=ct,Ae.lanes|=yt,xs|=yt;ot=ot.next}while(ot!==null&&ot!==i);if(W===null?b=m:W.next=L,!ia(m,e.memoizedState)&&(qn=!0,gt&&(s=ol,s!==null)))throw s;e.memoizedState=m,e.baseState=b,e.baseQueue=W,u.lastRenderedState=m}return h===null&&(u.lanes=0),[e.memoizedState,u.dispatch]}function Rp(e){var i=Bn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var u=s.dispatch,h=s.pending,m=i.memoizedState;if(h!==null){s.pending=null;var b=h=h.next;do m=e(m,b.action),b=b.next;while(b!==h);ia(m,i.memoizedState)||(qn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,u]}function Kv(e,i,s){var u=Ae,h=Bn(),m=Xe;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var b=!ia((fn||h).memoizedState,s);if(b&&(h.memoizedState=s,qn=!0),h=h.queue,Dp($v.bind(null,u,h,e),[e]),h.getSnapshot!==i||b||Yn!==null&&Yn.memoizedState.tag&1){if(u.flags|=2048,dl(9,{destroy:void 0},Jv.bind(null,u,h,s,i),null),gn===null)throw Error(a(349));m||(Dr&127)!==0||Qv(u,i,s)}return s}function Qv(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=Ae.updateQueue,i===null?(i=Cf(),Ae.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function Jv(e,i,s,u){i.value=s,i.getSnapshot=u,tx(i)&&ex(e)}function $v(e,i,s){return s(function(){tx(i)&&ex(e)})}function tx(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!ia(e,s)}catch{return!0}}function ex(e){var i=ao(e,2);i!==null&&Wi(i,e,2)}function Cp(e){var i=Ui();if(typeof e=="function"){var s=e;if(e=s(),po){Bt(!0);try{s()}finally{Bt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ur,lastRenderedState:e},i}function nx(e,i,s,u){return e.baseState=s,Ap(e,fn,typeof u=="function"?u:Ur)}function mT(e,i,s,u,h){if(Lf(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};F.T!==null?s(!0):m.isTransition=!1,u(m),s=i.pending,s===null?(m.next=i.pending=m,ix(i,m)):(m.next=s.next,i.pending=s.next=m)}}function ix(e,i){var s=i.action,u=i.payload,h=e.state;if(i.isTransition){var m=F.T,b={};F.T=b;try{var L=s(h,u),W=F.S;W!==null&&W(b,L),ax(e,i,L)}catch(ot){wp(e,i,ot)}finally{m!==null&&b.types!==null&&(m.types=b.types),F.T=m}}else try{m=s(h,u),ax(e,i,m)}catch(ot){wp(e,i,ot)}}function ax(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(u){rx(e,i,u)},function(u){return wp(e,i,u)}):rx(e,i,s)}function rx(e,i,s){i.status="fulfilled",i.value=s,sx(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,ix(e,s)))}function wp(e,i,s){var u=e.pending;if(e.pending=null,u!==null){u=u.next;do i.status="rejected",i.reason=s,sx(i),i=i.next;while(i!==u)}e.action=null}function sx(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function ox(e,i){return i}function lx(e,i){if(Xe){var s=gn.formState;if(s!==null){t:{var u=Ae;if(Xe){if(En){e:{for(var h=En,m=Da;h.nodeType!==8;){if(!m){h=null;break e}if(h=Na(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){En=Na(h.nextSibling),u=h.data==="F!";break t}}cs(u)}u=!1}u&&(i=s[0])}}return s=Ui(),s.memoizedState=s.baseState=i,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ox,lastRenderedState:i},s.queue=u,s=Rx.bind(null,Ae,u),u.dispatch=s,u=Cp(!1),m=Pp.bind(null,Ae,!1,u.queue),u=Ui(),h={state:i,dispatch:null,action:e,pending:null},u.queue=h,s=mT.bind(null,Ae,h,m,s),h.dispatch=s,u.memoizedState=e,[i,s,!1]}function ux(e){var i=Bn();return cx(i,fn,e)}function cx(e,i,s){if(i=Ap(e,i,ox)[0],e=Df(Ur)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var u=Fu(i)}catch(b){throw b===ll?Sf:b}else u=i;i=Bn();var h=i.queue,m=h.dispatch;return s!==i.memoizedState&&(Ae.flags|=2048,dl(9,{destroy:void 0},_T.bind(null,h,s),null)),[u,m,e]}function _T(e,i){e.action=i}function fx(e){var i=Bn(),s=fn;if(s!==null)return cx(i,s,e);Bn(),i=i.memoizedState,s=Bn();var u=s.queue.dispatch;return s.memoizedState=e,[i,u,!1]}function dl(e,i,s,u){return e={tag:e,create:s,deps:u,inst:i,next:null},i=Ae.updateQueue,i===null&&(i=Cf(),Ae.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(u=s.next,s.next=e,e.next=u,i.lastEffect=e),e}function hx(){return Bn().memoizedState}function Uf(e,i,s,u){var h=Ui();Ae.flags|=e,h.memoizedState=dl(1|i,{destroy:void 0},s,u===void 0?null:u)}function Nf(e,i,s,u){var h=Bn();u=u===void 0?null:u;var m=h.memoizedState.inst;fn!==null&&u!==null&&Sp(u,fn.memoizedState.deps)?h.memoizedState=dl(i,m,s,u):(Ae.flags|=e,h.memoizedState=dl(1|i,m,s,u))}function dx(e,i){Uf(8390656,8,e,i)}function Dp(e,i){Nf(2048,8,e,i)}function gT(e){Ae.flags|=4;var i=Ae.updateQueue;if(i===null)i=Cf(),Ae.updateQueue=i,i.events=[e];else{var s=i.events;s===null?i.events=[e]:s.push(e)}}function px(e){var i=Bn().memoizedState;return gT({ref:i,nextImpl:e}),function(){if(($e&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function mx(e,i){return Nf(4,2,e,i)}function _x(e,i){return Nf(4,4,e,i)}function gx(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function vx(e,i,s){s=s!=null?s.concat([e]):null,Nf(4,4,gx.bind(null,i,e),s)}function Up(){}function xx(e,i){var s=Bn();i=i===void 0?null:i;var u=s.memoizedState;return i!==null&&Sp(i,u[1])?u[0]:(s.memoizedState=[e,i],e)}function Sx(e,i){var s=Bn();i=i===void 0?null:i;var u=s.memoizedState;if(i!==null&&Sp(i,u[1]))return u[0];if(u=e(),po){Bt(!0);try{e()}finally{Bt(!1)}}return s.memoizedState=[u,i],u}function Np(e,i,s){return s===void 0||(Dr&1073741824)!==0&&(Ve&261930)===0?e.memoizedState=i:(e.memoizedState=s,e=yS(),Ae.lanes|=e,xs|=e,s)}function yx(e,i,s,u){return ia(s,i)?s:cl.current!==null?(e=Np(e,s,u),ia(e,i)||(qn=!0),e):(Dr&42)===0||(Dr&1073741824)!==0&&(Ve&261930)===0?(qn=!0,e.memoizedState=s):(e=yS(),Ae.lanes|=e,xs|=e,i)}function Mx(e,i,s,u,h){var m=H.p;H.p=m!==0&&8>m?m:8;var b=F.T,L={};F.T=L,Pp(e,!1,i,s);try{var W=h(),ot=F.S;if(ot!==null&&ot(L,W),W!==null&&typeof W=="object"&&typeof W.then=="function"){var gt=hT(W,u);Iu(e,i,gt,ua(e))}else Iu(e,i,u,ua(e))}catch(yt){Iu(e,i,{then:function(){},status:"rejected",reason:yt},ua())}finally{H.p=m,b!==null&&L.types!==null&&(b.types=L.types),F.T=b}}function vT(){}function Lp(e,i,s,u){if(e.tag!==5)throw Error(a(476));var h=Ex(e).queue;Mx(e,h,i,J,s===null?vT:function(){return bx(e),s(u)})}function Ex(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ur,lastRenderedState:J},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ur,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function bx(e){var i=Ex(e);i.next===null&&(i=e.alternate.memoizedState),Iu(e,i.next.queue,{},ua())}function Op(){return ci(ec)}function Tx(){return Bn().memoizedState}function Ax(){return Bn().memoizedState}function xT(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=ua();e=ds(s);var u=ps(i,e,s);u!==null&&(Wi(u,i,s),Lu(u,i,s)),i={cache:up()},e.payload=i;return}i=i.return}}function ST(e,i,s){var u=ua();s={lane:u,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Lf(e)?Cx(i,s):(s=Jd(e,i,s,u),s!==null&&(Wi(s,e,u),wx(s,i,u)))}function Rx(e,i,s){var u=ua();Iu(e,i,s,u)}function Iu(e,i,s,u){var h={lane:u,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Lf(e))Cx(i,h);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var b=i.lastRenderedState,L=m(b,s);if(h.hasEagerState=!0,h.eagerState=L,ia(L,b))return df(e,i,h,0),gn===null&&hf(),!1}catch{}finally{}if(s=Jd(e,i,h,u),s!==null)return Wi(s,e,u),wx(s,i,u),!0}return!1}function Pp(e,i,s,u){if(u={lane:2,revertLane:dm(),gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},Lf(e)){if(i)throw Error(a(479))}else i=Jd(e,s,u,2),i!==null&&Wi(i,e,2)}function Lf(e){var i=e.alternate;return e===Ae||i!==null&&i===Ae}function Cx(e,i){fl=Af=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function wx(e,i,s){if((s&4194048)!==0){var u=i.lanes;u&=e.pendingLanes,s|=u,i.lanes=s,re(e,s)}}var Bu={readContext:ci,use:wf,useCallback:On,useContext:On,useEffect:On,useImperativeHandle:On,useLayoutEffect:On,useInsertionEffect:On,useMemo:On,useReducer:On,useRef:On,useState:On,useDebugValue:On,useDeferredValue:On,useTransition:On,useSyncExternalStore:On,useId:On,useHostTransitionStatus:On,useFormState:On,useActionState:On,useOptimistic:On,useMemoCache:On,useCacheRefresh:On};Bu.useEffectEvent=On;var Dx={readContext:ci,use:wf,useCallback:function(e,i){return Ui().memoizedState=[e,i===void 0?null:i],e},useContext:ci,useEffect:dx,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,Uf(4194308,4,gx.bind(null,i,e),s)},useLayoutEffect:function(e,i){return Uf(4194308,4,e,i)},useInsertionEffect:function(e,i){Uf(4,2,e,i)},useMemo:function(e,i){var s=Ui();i=i===void 0?null:i;var u=e();if(po){Bt(!0);try{e()}finally{Bt(!1)}}return s.memoizedState=[u,i],u},useReducer:function(e,i,s){var u=Ui();if(s!==void 0){var h=s(i);if(po){Bt(!0);try{s(i)}finally{Bt(!1)}}}else h=i;return u.memoizedState=u.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},u.queue=e,e=e.dispatch=ST.bind(null,Ae,e),[u.memoizedState,e]},useRef:function(e){var i=Ui();return e={current:e},i.memoizedState=e},useState:function(e){e=Cp(e);var i=e.queue,s=Rx.bind(null,Ae,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:Up,useDeferredValue:function(e,i){var s=Ui();return Np(s,e,i)},useTransition:function(){var e=Cp(!1);return e=Mx.bind(null,Ae,e.queue,!0,!1),Ui().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var u=Ae,h=Ui();if(Xe){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),gn===null)throw Error(a(349));(Ve&127)!==0||Qv(u,i,s)}h.memoizedState=s;var m={value:s,getSnapshot:i};return h.queue=m,dx($v.bind(null,u,m,e),[e]),u.flags|=2048,dl(9,{destroy:void 0},Jv.bind(null,u,m,s,i),null),s},useId:function(){var e=Ui(),i=gn.identifierPrefix;if(Xe){var s=ar,u=ir;s=(u&~(1<<32-Ht(u)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Rf++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=dT++,i="_"+i+"r_"+s.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Op,useFormState:lx,useActionState:lx,useOptimistic:function(e){var i=Ui();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Pp.bind(null,Ae,!0,s),s.dispatch=i,[e,i]},useMemoCache:Tp,useCacheRefresh:function(){return Ui().memoizedState=xT.bind(null,Ae)},useEffectEvent:function(e){var i=Ui(),s={impl:e};return i.memoizedState=s,function(){if(($e&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},zp={readContext:ci,use:wf,useCallback:xx,useContext:ci,useEffect:Dp,useImperativeHandle:vx,useInsertionEffect:mx,useLayoutEffect:_x,useMemo:Sx,useReducer:Df,useRef:hx,useState:function(){return Df(Ur)},useDebugValue:Up,useDeferredValue:function(e,i){var s=Bn();return yx(s,fn.memoizedState,e,i)},useTransition:function(){var e=Df(Ur)[0],i=Bn().memoizedState;return[typeof e=="boolean"?e:Fu(e),i]},useSyncExternalStore:Kv,useId:Tx,useHostTransitionStatus:Op,useFormState:ux,useActionState:ux,useOptimistic:function(e,i){var s=Bn();return nx(s,fn,e,i)},useMemoCache:Tp,useCacheRefresh:Ax};zp.useEffectEvent=px;var Ux={readContext:ci,use:wf,useCallback:xx,useContext:ci,useEffect:Dp,useImperativeHandle:vx,useInsertionEffect:mx,useLayoutEffect:_x,useMemo:Sx,useReducer:Rp,useRef:hx,useState:function(){return Rp(Ur)},useDebugValue:Up,useDeferredValue:function(e,i){var s=Bn();return fn===null?Np(s,e,i):yx(s,fn.memoizedState,e,i)},useTransition:function(){var e=Rp(Ur)[0],i=Bn().memoizedState;return[typeof e=="boolean"?e:Fu(e),i]},useSyncExternalStore:Kv,useId:Tx,useHostTransitionStatus:Op,useFormState:fx,useActionState:fx,useOptimistic:function(e,i){var s=Bn();return fn!==null?nx(s,fn,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Tp,useCacheRefresh:Ax};Ux.useEffectEvent=px;function Fp(e,i,s,u){i=e.memoizedState,s=s(u,i),s=s==null?i:v({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Ip={enqueueSetState:function(e,i,s){e=e._reactInternals;var u=ua(),h=ds(u);h.payload=i,s!=null&&(h.callback=s),i=ps(e,h,u),i!==null&&(Wi(i,e,u),Lu(i,e,u))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var u=ua(),h=ds(u);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=ps(e,h,u),i!==null&&(Wi(i,e,u),Lu(i,e,u))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=ua(),u=ds(s);u.tag=2,i!=null&&(u.callback=i),i=ps(e,u,s),i!==null&&(Wi(i,e,s),Lu(i,e,s))}};function Nx(e,i,s,u,h,m,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(u,m,b):i.prototype&&i.prototype.isPureReactComponent?!Tu(s,u)||!Tu(h,m):!0}function Lx(e,i,s,u){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,u),i.state!==e&&Ip.enqueueReplaceState(i,i.state,null)}function mo(e,i){var s=i;if("ref"in i){s={};for(var u in i)u!=="ref"&&(s[u]=i[u])}if(e=e.defaultProps){s===i&&(s=v({},s));for(var h in e)s[h]===void 0&&(s[h]=e[h])}return s}function Ox(e){ff(e)}function Px(e){console.error(e)}function zx(e){ff(e)}function Of(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(u){setTimeout(function(){throw u})}}function Fx(e,i,s){try{var u=e.onCaughtError;u(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Bp(e,i,s){return s=ds(s),s.tag=3,s.payload={element:null},s.callback=function(){Of(e,i)},s}function Ix(e){return e=ds(e),e.tag=3,e}function Bx(e,i,s,u){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var m=u.value;e.payload=function(){return h(m)},e.callback=function(){Fx(i,s,u)}}var b=s.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){Fx(i,s,u),typeof h!="function"&&(Ss===null?Ss=new Set([this]):Ss.add(this));var L=u.stack;this.componentDidCatch(u.value,{componentStack:L!==null?L:""})})}function yT(e,i,s,u,h){if(s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(i=s.alternate,i!==null&&rl(i,s,h,!0),s=ra.current,s!==null){switch(s.tag){case 31:case 13:return Ua===null?Yf():s.alternate===null&&Pn===0&&(Pn=3),s.flags&=-257,s.flags|=65536,s.lanes=h,u===yf?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([u]):i.add(u),cm(e,u,h)),!1;case 22:return s.flags|=65536,u===yf?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([u])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([u]):s.add(u)),cm(e,u,h)),!1}throw Error(a(435,s.tag))}return cm(e,u,h),Yf(),!1}if(Xe)return i=ra.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,u!==ap&&(e=Error(a(422),{cause:u}),Cu(Ra(e,s)))):(u!==ap&&(i=Error(a(423),{cause:u}),Cu(Ra(i,s))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,u=Ra(u,s),h=Bp(e.stateNode,u,h),mp(e,h),Pn!==4&&(Pn=2)),!1;var m=Error(a(520),{cause:u});if(m=Ra(m,s),qu===null?qu=[m]:qu.push(m),Pn!==4&&(Pn=2),i===null)return!0;u=Ra(u,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=h&-h,s.lanes|=e,e=Bp(s.stateNode,u,e),mp(s,e),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ss===null||!Ss.has(m))))return s.flags|=65536,h&=-h,s.lanes|=h,h=Ix(h),Bx(h,e,s,u),mp(s,h),!1}s=s.return}while(s!==null);return!1}var Hp=Error(a(461)),qn=!1;function fi(e,i,s,u){i.child=e===null?kv(i,null,s,u):ho(i,e.child,s,u)}function Hx(e,i,s,u,h){s=s.render;var m=i.ref;if("ref"in u){var b={};for(var L in u)L!=="ref"&&(b[L]=u[L])}else b=u;return lo(i),u=yp(e,i,s,b,m,h),L=Mp(),e!==null&&!qn?(Ep(e,i,h),Nr(e,i,h)):(Xe&&L&&np(i),i.flags|=1,fi(e,i,u,h),i.child)}function Gx(e,i,s,u,h){if(e===null){var m=s.type;return typeof m=="function"&&!$d(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,Vx(e,i,m,u,h)):(e=mf(s.type,null,u,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!jp(e,h)){var b=m.memoizedProps;if(s=s.compare,s=s!==null?s:Tu,s(b,u)&&e.ref===i.ref)return Nr(e,i,h)}return i.flags|=1,e=Ar(m,u),e.ref=i.ref,e.return=i,i.child=e}function Vx(e,i,s,u,h){if(e!==null){var m=e.memoizedProps;if(Tu(m,u)&&e.ref===i.ref)if(qn=!1,i.pendingProps=u=m,jp(e,h))(e.flags&131072)!==0&&(qn=!0);else return i.lanes=e.lanes,Nr(e,i,h)}return Gp(e,i,s,u,h)}function kx(e,i,s,u){var h=u.children,m=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|s:s,e!==null){for(u=i.child=e.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;u=h&~m}else u=0,i.child=null;return Xx(e,i,m,s,u)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&xf(i,m!==null?m.cachePool:null),m!==null?Yv(i,m):gp(),qv(i);else return u=i.lanes=536870912,Xx(e,i,m!==null?m.baseLanes|s:s,s,u)}else m!==null?(xf(i,m.cachePool),Yv(i,m),_s(),i.memoizedState=null):(e!==null&&xf(i,null),gp(),_s());return fi(e,i,h,s),i.child}function Hu(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Xx(e,i,s,u,h){var m=fp();return m=m===null?null:{parent:Wn._currentValue,pool:m},i.memoizedState={baseLanes:s,cachePool:m},e!==null&&xf(i,null),gp(),qv(i),e!==null&&rl(e,i,u,!0),i.childLanes=h,null}function Pf(e,i){return i=Ff({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function Wx(e,i,s){return ho(i,e.child,null,s),e=Pf(i,i.pendingProps),e.flags|=2,sa(i),i.memoizedState=null,e}function MT(e,i,s){var u=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Xe){if(u.mode==="hidden")return e=Pf(i,u),i.lanes=536870912,Hu(null,e);if(xp(i),(e=En)?(e=iy(e,Da),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:ls!==null?{id:ir,overflow:ar}:null,retryLane:536870912,hydrationErrors:null},s=Cv(e),s.return=i,i.child=s,ui=i,En=null)):e=null,e===null)throw cs(i);return i.lanes=536870912,null}return Pf(i,u)}var m=e.memoizedState;if(m!==null){var b=m.dehydrated;if(xp(i),h)if(i.flags&256)i.flags&=-257,i=Wx(e,i,s);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(qn||rl(e,i,s,!1),h=(s&e.childLanes)!==0,qn||h){if(u=gn,u!==null&&(b=Qt(u,s),b!==0&&b!==m.retryLane))throw m.retryLane=b,ao(e,b),Wi(u,e,b),Hp;Yf(),i=Wx(e,i,s)}else e=m.treeContext,En=Na(b.nextSibling),ui=i,Xe=!0,us=null,Da=!1,e!==null&&Uv(i,e),i=Pf(i,u),i.flags|=4096;return i}return e=Ar(e.child,{mode:u.mode,children:u.children}),e.ref=i.ref,i.child=e,e.return=i,e}function zf(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function Gp(e,i,s,u,h){return lo(i),s=yp(e,i,s,u,void 0,h),u=Mp(),e!==null&&!qn?(Ep(e,i,h),Nr(e,i,h)):(Xe&&u&&np(i),i.flags|=1,fi(e,i,s,h),i.child)}function Yx(e,i,s,u,h,m){return lo(i),i.updateQueue=null,s=Zv(i,u,s,h),jv(e),u=Mp(),e!==null&&!qn?(Ep(e,i,m),Nr(e,i,m)):(Xe&&u&&np(i),i.flags|=1,fi(e,i,s,m),i.child)}function qx(e,i,s,u,h){if(lo(i),i.stateNode===null){var m=el,b=s.contextType;typeof b=="object"&&b!==null&&(m=ci(b)),m=new s(u,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Ip,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=u,m.state=i.memoizedState,m.refs={},dp(i),b=s.contextType,m.context=typeof b=="object"&&b!==null?ci(b):el,m.state=i.memoizedState,b=s.getDerivedStateFromProps,typeof b=="function"&&(Fp(i,s,b,u),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&Ip.enqueueReplaceState(m,m.state,null),Pu(i,u,m,h),Ou(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!0}else if(e===null){m=i.stateNode;var L=i.memoizedProps,W=mo(s,L);m.props=W;var ot=m.context,gt=s.contextType;b=el,typeof gt=="object"&&gt!==null&&(b=ci(gt));var yt=s.getDerivedStateFromProps;gt=typeof yt=="function"||typeof m.getSnapshotBeforeUpdate=="function",L=i.pendingProps!==L,gt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(L||ot!==b)&&Lx(i,m,u,b),hs=!1;var ct=i.memoizedState;m.state=ct,Pu(i,u,m,h),Ou(),ot=i.memoizedState,L||ct!==ot||hs?(typeof yt=="function"&&(Fp(i,s,yt,u),ot=i.memoizedState),(W=hs||Nx(i,s,W,u,ct,ot,b))?(gt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=ot),m.props=u,m.state=ot,m.context=b,u=W):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{m=i.stateNode,pp(e,i),b=i.memoizedProps,gt=mo(s,b),m.props=gt,yt=i.pendingProps,ct=m.context,ot=s.contextType,W=el,typeof ot=="object"&&ot!==null&&(W=ci(ot)),L=s.getDerivedStateFromProps,(ot=typeof L=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==yt||ct!==W)&&Lx(i,m,u,W),hs=!1,ct=i.memoizedState,m.state=ct,Pu(i,u,m,h),Ou();var ht=i.memoizedState;b!==yt||ct!==ht||hs||e!==null&&e.dependencies!==null&&gf(e.dependencies)?(typeof L=="function"&&(Fp(i,s,L,u),ht=i.memoizedState),(gt=hs||Nx(i,s,gt,u,ct,ht,W)||e!==null&&e.dependencies!==null&&gf(e.dependencies))?(ot||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,ht,W),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,ht,W)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===e.memoizedProps&&ct===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&ct===e.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=ht),m.props=u,m.state=ht,m.context=W,u=gt):(typeof m.componentDidUpdate!="function"||b===e.memoizedProps&&ct===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&ct===e.memoizedState||(i.flags|=1024),u=!1)}return m=u,zf(e,i),u=(i.flags&128)!==0,m||u?(m=i.stateNode,s=u&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&u?(i.child=ho(i,e.child,null,h),i.child=ho(i,null,s,h)):fi(e,i,s,h),i.memoizedState=m.state,e=i.child):e=Nr(e,i,h),e}function jx(e,i,s,u){return so(),i.flags|=256,fi(e,i,s,u),i.child}var Vp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function kp(e){return{baseLanes:e,cachePool:Fv()}}function Xp(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=la),e}function Zx(e,i,s){var u=i.pendingProps,h=!1,m=(i.flags&128)!==0,b;if((b=m)||(b=e!==null&&e.memoizedState===null?!1:(In.current&2)!==0),b&&(h=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,e===null){if(Xe){if(h?ms(i):_s(),(e=En)?(e=iy(e,Da),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:ls!==null?{id:ir,overflow:ar}:null,retryLane:536870912,hydrationErrors:null},s=Cv(e),s.return=i,i.child=s,ui=i,En=null)):e=null,e===null)throw cs(i);return Am(e)?i.lanes=32:i.lanes=536870912,null}var L=u.children;return u=u.fallback,h?(_s(),h=i.mode,L=Ff({mode:"hidden",children:L},h),u=ro(u,h,s,null),L.return=i,u.return=i,L.sibling=u,i.child=L,u=i.child,u.memoizedState=kp(s),u.childLanes=Xp(e,b,s),i.memoizedState=Vp,Hu(null,u)):(ms(i),Wp(i,L))}var W=e.memoizedState;if(W!==null&&(L=W.dehydrated,L!==null)){if(m)i.flags&256?(ms(i),i.flags&=-257,i=Yp(e,i,s)):i.memoizedState!==null?(_s(),i.child=e.child,i.flags|=128,i=null):(_s(),L=u.fallback,h=i.mode,u=Ff({mode:"visible",children:u.children},h),L=ro(L,h,s,null),L.flags|=2,u.return=i,L.return=i,u.sibling=L,i.child=u,ho(i,e.child,null,s),u=i.child,u.memoizedState=kp(s),u.childLanes=Xp(e,b,s),i.memoizedState=Vp,i=Hu(null,u));else if(ms(i),Am(L)){if(b=L.nextSibling&&L.nextSibling.dataset,b)var ot=b.dgst;b=ot,u=Error(a(419)),u.stack="",u.digest=b,Cu({value:u,source:null,stack:null}),i=Yp(e,i,s)}else if(qn||rl(e,i,s,!1),b=(s&e.childLanes)!==0,qn||b){if(b=gn,b!==null&&(u=Qt(b,s),u!==0&&u!==W.retryLane))throw W.retryLane=u,ao(e,u),Wi(b,e,u),Hp;Tm(L)||Yf(),i=Yp(e,i,s)}else Tm(L)?(i.flags|=192,i.child=e.child,i=null):(e=W.treeContext,En=Na(L.nextSibling),ui=i,Xe=!0,us=null,Da=!1,e!==null&&Uv(i,e),i=Wp(i,u.children),i.flags|=4096);return i}return h?(_s(),L=u.fallback,h=i.mode,W=e.child,ot=W.sibling,u=Ar(W,{mode:"hidden",children:u.children}),u.subtreeFlags=W.subtreeFlags&65011712,ot!==null?L=Ar(ot,L):(L=ro(L,h,s,null),L.flags|=2),L.return=i,u.return=i,u.sibling=L,i.child=u,Hu(null,u),u=i.child,L=e.child.memoizedState,L===null?L=kp(s):(h=L.cachePool,h!==null?(W=Wn._currentValue,h=h.parent!==W?{parent:W,pool:W}:h):h=Fv(),L={baseLanes:L.baseLanes|s,cachePool:h}),u.memoizedState=L,u.childLanes=Xp(e,b,s),i.memoizedState=Vp,Hu(e.child,u)):(ms(i),s=e.child,e=s.sibling,s=Ar(s,{mode:"visible",children:u.children}),s.return=i,s.sibling=null,e!==null&&(b=i.deletions,b===null?(i.deletions=[e],i.flags|=16):b.push(e)),i.child=s,i.memoizedState=null,s)}function Wp(e,i){return i=Ff({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Ff(e,i){return e=aa(22,e,null,i),e.lanes=0,e}function Yp(e,i,s){return ho(i,e.child,null,s),e=Wp(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Kx(e,i,s){e.lanes|=i;var u=e.alternate;u!==null&&(u.lanes|=i),op(e.return,i,s)}function qp(e,i,s,u,h,m){var b=e.memoizedState;b===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:s,tailMode:h,treeForkCount:m}:(b.isBackwards=i,b.rendering=null,b.renderingStartTime=0,b.last=u,b.tail=s,b.tailMode=h,b.treeForkCount=m)}function Qx(e,i,s){var u=i.pendingProps,h=u.revealOrder,m=u.tail;u=u.children;var b=In.current,L=(b&2)!==0;if(L?(b=b&1|2,i.flags|=128):b&=1,xt(In,b),fi(e,i,u,s),u=Xe?Ru:0,!L&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Kx(e,s,i);else if(e.tag===19)Kx(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(s=i.child,h=null;s!==null;)e=s.alternate,e!==null&&Tf(e)===null&&(h=s),s=s.sibling;s=h,s===null?(h=i.child,i.child=null):(h=s.sibling,s.sibling=null),qp(i,!1,h,s,m,u);break;case"backwards":case"unstable_legacy-backwards":for(s=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Tf(e)===null){i.child=h;break}e=h.sibling,h.sibling=s,s=h,h=e}qp(i,!0,s,null,m,u);break;case"together":qp(i,!1,null,null,void 0,u);break;default:i.memoizedState=null}return i.child}function Nr(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),xs|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(rl(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=Ar(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=Ar(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function jp(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&gf(e)))}function ET(e,i,s){switch(i.tag){case 3:Et(i,i.stateNode.containerInfo),fs(i,Wn,e.memoizedState.cache),so();break;case 27:case 5:ne(i);break;case 4:Et(i,i.stateNode.containerInfo);break;case 10:fs(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,xp(i),null;break;case 13:var u=i.memoizedState;if(u!==null)return u.dehydrated!==null?(ms(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Zx(e,i,s):(ms(i),e=Nr(e,i,s),e!==null?e.sibling:null);ms(i);break;case 19:var h=(e.flags&128)!==0;if(u=(s&i.childLanes)!==0,u||(rl(e,i,s,!1),u=(s&i.childLanes)!==0),h){if(u)return Qx(e,i,s);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),xt(In,In.current),u)break;return null;case 22:return i.lanes=0,kx(e,i,s,i.pendingProps);case 24:fs(i,Wn,e.memoizedState.cache)}return Nr(e,i,s)}function Jx(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)qn=!0;else{if(!jp(e,s)&&(i.flags&128)===0)return qn=!1,ET(e,i,s);qn=(e.flags&131072)!==0}else qn=!1,Xe&&(i.flags&1048576)!==0&&Dv(i,Ru,i.index);switch(i.lanes=0,i.tag){case 16:t:{var u=i.pendingProps;if(e=co(i.elementType),i.type=e,typeof e=="function")$d(e)?(u=mo(e,u),i.tag=1,i=qx(null,i,e,u,s)):(i.tag=0,i=Gp(null,i,e,u,s));else{if(e!=null){var h=e.$$typeof;if(h===C){i.tag=11,i=Hx(null,i,e,u,s);break t}else if(h===w){i.tag=14,i=Gx(null,i,e,u,s);break t}}throw i=tt(e)||e,Error(a(306,i,""))}}return i;case 0:return Gp(e,i,i.type,i.pendingProps,s);case 1:return u=i.type,h=mo(u,i.pendingProps),qx(e,i,u,h,s);case 3:t:{if(Et(i,i.stateNode.containerInfo),e===null)throw Error(a(387));u=i.pendingProps;var m=i.memoizedState;h=m.element,pp(e,i),Pu(i,u,null,s);var b=i.memoizedState;if(u=b.cache,fs(i,Wn,u),u!==m.cache&&lp(i,[Wn],s,!0),Ou(),u=b.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=jx(e,i,u,s);break t}else if(u!==h){h=Ra(Error(a(424)),i),Cu(h),i=jx(e,i,u,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(En=Na(e.firstChild),ui=i,Xe=!0,us=null,Da=!0,s=kv(i,null,u,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(so(),u===h){i=Nr(e,i,s);break t}fi(e,i,u,s)}i=i.child}return i;case 26:return zf(e,i),e===null?(s=uy(i.type,null,i.pendingProps,null))?i.memoizedState=s:Xe||(s=i.type,e=i.pendingProps,u=$f(it.current).createElement(s),u[xe]=i,u[be]=e,hi(u,s,e),De(u),i.stateNode=u):i.memoizedState=uy(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return ne(i),e===null&&Xe&&(u=i.stateNode=sy(i.type,i.pendingProps,it.current),ui=i,Da=!0,h=En,bs(i.type)?(Rm=h,En=Na(u.firstChild)):En=h),fi(e,i,i.pendingProps.children,s),zf(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Xe&&((h=u=En)&&(u=$T(u,i.type,i.pendingProps,Da),u!==null?(i.stateNode=u,ui=i,En=Na(u.firstChild),Da=!1,h=!0):h=!1),h||cs(i)),ne(i),h=i.type,m=i.pendingProps,b=e!==null?e.memoizedProps:null,u=m.children,Mm(h,m)?u=null:b!==null&&Mm(h,b)&&(i.flags|=32),i.memoizedState!==null&&(h=yp(e,i,pT,null,null,s),ec._currentValue=h),zf(e,i),fi(e,i,u,s),i.child;case 6:return e===null&&Xe&&((e=s=En)&&(s=tA(s,i.pendingProps,Da),s!==null?(i.stateNode=s,ui=i,En=null,e=!0):e=!1),e||cs(i)),null;case 13:return Zx(e,i,s);case 4:return Et(i,i.stateNode.containerInfo),u=i.pendingProps,e===null?i.child=ho(i,null,u,s):fi(e,i,u,s),i.child;case 11:return Hx(e,i,i.type,i.pendingProps,s);case 7:return fi(e,i,i.pendingProps,s),i.child;case 8:return fi(e,i,i.pendingProps.children,s),i.child;case 12:return fi(e,i,i.pendingProps.children,s),i.child;case 10:return u=i.pendingProps,fs(i,i.type,u.value),fi(e,i,u.children,s),i.child;case 9:return h=i.type._context,u=i.pendingProps.children,lo(i),h=ci(h),u=u(h),i.flags|=1,fi(e,i,u,s),i.child;case 14:return Gx(e,i,i.type,i.pendingProps,s);case 15:return Vx(e,i,i.type,i.pendingProps,s);case 19:return Qx(e,i,s);case 31:return MT(e,i,s);case 22:return kx(e,i,s,i.pendingProps);case 24:return lo(i),u=ci(Wn),e===null?(h=fp(),h===null&&(h=gn,m=up(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=s),h=m),i.memoizedState={parent:u,cache:h},dp(i),fs(i,Wn,h)):((e.lanes&s)!==0&&(pp(e,i),Pu(i,null,null,s),Ou()),h=e.memoizedState,m=i.memoizedState,h.parent!==u?(h={parent:u,cache:u},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),fs(i,Wn,u)):(u=m.cache,fs(i,Wn,u),u!==h.cache&&lp(i,[Wn],s,!0))),fi(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Lr(e){e.flags|=4}function Zp(e,i,s,u,h){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(TS())e.flags|=8192;else throw fo=yf,hp}else e.flags&=-16777217}function $x(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!py(i))if(TS())e.flags|=8192;else throw fo=yf,hp}function If(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Tt():536870912,e.lanes|=i,gl|=i)}function Gu(e,i){if(!Xe)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var u=null;s!==null;)s.alternate!==null&&(u=s),s=s.sibling;u===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:u.sibling=null}}function bn(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,u=0;if(i)for(var h=e.child;h!==null;)s|=h.lanes|h.childLanes,u|=h.subtreeFlags&65011712,u|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)s|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=u,e.childLanes=s,i}function bT(e,i,s){var u=i.pendingProps;switch(ip(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bn(i),null;case 1:return bn(i),null;case 3:return s=i.stateNode,u=null,e!==null&&(u=e.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),wr(Wn),It(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(al(i)?Lr(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,rp())),bn(i),null;case 26:var h=i.type,m=i.memoizedState;return e===null?(Lr(i),m!==null?(bn(i),$x(i,m)):(bn(i),Zp(i,h,null,u,s))):m?m!==e.memoizedState?(Lr(i),bn(i),$x(i,m)):(bn(i),i.flags&=-16777217):(e=e.memoizedProps,e!==u&&Lr(i),bn(i),Zp(i,h,e,u,s)),null;case 27:if(Zt(i),s=it.current,h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==u&&Lr(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return bn(i),null}e=Mt.current,al(i)?Nv(i):(e=sy(h,u,s),i.stateNode=e,Lr(i))}return bn(i),null;case 5:if(Zt(i),h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==u&&Lr(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return bn(i),null}if(m=Mt.current,al(i))Nv(i);else{var b=$f(it.current);switch(m){case 1:m=b.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=b.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=b.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=b.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=b.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof u.is=="string"?b.createElement("select",{is:u.is}):b.createElement("select"),u.multiple?m.multiple=!0:u.size&&(m.size=u.size);break;default:m=typeof u.is=="string"?b.createElement(h,{is:u.is}):b.createElement(h)}}m[xe]=i,m[be]=u;t:for(b=i.child;b!==null;){if(b.tag===5||b.tag===6)m.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===i)break t;for(;b.sibling===null;){if(b.return===null||b.return===i)break t;b=b.return}b.sibling.return=b.return,b=b.sibling}i.stateNode=m;t:switch(hi(m,h,u),h){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break t;case"img":u=!0;break t;default:u=!1}u&&Lr(i)}}return bn(i),Zp(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,s),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==u&&Lr(i);else{if(typeof u!="string"&&i.stateNode===null)throw Error(a(166));if(e=it.current,al(i)){if(e=i.stateNode,s=i.memoizedProps,u=null,h=ui,h!==null)switch(h.tag){case 27:case 5:u=h.memoizedProps}e[xe]=i,e=!!(e.nodeValue===s||u!==null&&u.suppressHydrationWarning===!0||ZS(e.nodeValue,s)),e||cs(i,!0)}else e=$f(e).createTextNode(u),e[xe]=i,i.stateNode=e}return bn(i),null;case 31:if(s=i.memoizedState,e===null||e.memoizedState!==null){if(u=al(i),s!==null){if(e===null){if(!u)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[xe]=i}else so(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;bn(i),e=!1}else s=rp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return i.flags&256?(sa(i),i):(sa(i),null);if((i.flags&128)!==0)throw Error(a(558))}return bn(i),null;case 13:if(u=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=al(i),u!==null&&u.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[xe]=i}else so(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;bn(i),h=!1}else h=rp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(sa(i),i):(sa(i),null)}return sa(i),(i.flags&128)!==0?(i.lanes=s,i):(s=u!==null,e=e!==null&&e.memoizedState!==null,s&&(u=i.child,h=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(h=u.alternate.memoizedState.cachePool.pool),m=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==h&&(u.flags|=2048)),s!==e&&s&&(i.child.flags|=8192),If(i,i.updateQueue),bn(i),null);case 4:return It(),e===null&&gm(i.stateNode.containerInfo),bn(i),null;case 10:return wr(i.type),bn(i),null;case 19:if(K(In),u=i.memoizedState,u===null)return bn(i),null;if(h=(i.flags&128)!==0,m=u.rendering,m===null)if(h)Gu(u,!1);else{if(Pn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=Tf(e),m!==null){for(i.flags|=128,Gu(u,!1),e=m.updateQueue,i.updateQueue=e,If(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)Rv(s,e),s=s.sibling;return xt(In,In.current&1|2),Xe&&Rr(i,u.treeForkCount),i.child}e=e.sibling}u.tail!==null&&Lt()>kf&&(i.flags|=128,h=!0,Gu(u,!1),i.lanes=4194304)}else{if(!h)if(e=Tf(m),e!==null){if(i.flags|=128,h=!0,e=e.updateQueue,i.updateQueue=e,If(i,e),Gu(u,!0),u.tail===null&&u.tailMode==="hidden"&&!m.alternate&&!Xe)return bn(i),null}else 2*Lt()-u.renderingStartTime>kf&&s!==536870912&&(i.flags|=128,h=!0,Gu(u,!1),i.lanes=4194304);u.isBackwards?(m.sibling=i.child,i.child=m):(e=u.last,e!==null?e.sibling=m:i.child=m,u.last=m)}return u.tail!==null?(e=u.tail,u.rendering=e,u.tail=e.sibling,u.renderingStartTime=Lt(),e.sibling=null,s=In.current,xt(In,h?s&1|2:s&1),Xe&&Rr(i,u.treeForkCount),e):(bn(i),null);case 22:case 23:return sa(i),vp(),u=i.memoizedState!==null,e!==null?e.memoizedState!==null!==u&&(i.flags|=8192):u&&(i.flags|=8192),u?(s&536870912)!==0&&(i.flags&128)===0&&(bn(i),i.subtreeFlags&6&&(i.flags|=8192)):bn(i),s=i.updateQueue,s!==null&&If(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==s&&(i.flags|=2048),e!==null&&K(uo),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),wr(Wn),bn(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function TT(e,i){switch(ip(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return wr(Wn),It(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Zt(i),null;case 31:if(i.memoizedState!==null){if(sa(i),i.alternate===null)throw Error(a(340));so()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(sa(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));so()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return K(In),null;case 4:return It(),null;case 10:return wr(i.type),null;case 22:case 23:return sa(i),vp(),e!==null&&K(uo),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return wr(Wn),null;case 25:return null;default:return null}}function tS(e,i){switch(ip(i),i.tag){case 3:wr(Wn),It();break;case 26:case 27:case 5:Zt(i);break;case 4:It();break;case 31:i.memoizedState!==null&&sa(i);break;case 13:sa(i);break;case 19:K(In);break;case 10:wr(i.type);break;case 22:case 23:sa(i),vp(),e!==null&&K(uo);break;case 24:wr(Wn)}}function Vu(e,i){try{var s=i.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var h=u.next;s=h;do{if((s.tag&e)===e){u=void 0;var m=s.create,b=s.inst;u=m(),b.destroy=u}s=s.next}while(s!==h)}}catch(L){on(i,i.return,L)}}function gs(e,i,s){try{var u=i.updateQueue,h=u!==null?u.lastEffect:null;if(h!==null){var m=h.next;u=m;do{if((u.tag&e)===e){var b=u.inst,L=b.destroy;if(L!==void 0){b.destroy=void 0,h=i;var W=s,ot=L;try{ot()}catch(gt){on(h,W,gt)}}}u=u.next}while(u!==m)}}catch(gt){on(i,i.return,gt)}}function eS(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{Wv(i,s)}catch(u){on(e,e.return,u)}}}function nS(e,i,s){s.props=mo(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(u){on(e,i,u)}}function ku(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var u=e.stateNode;break;case 30:u=e.stateNode;break;default:u=e.stateNode}typeof s=="function"?e.refCleanup=s(u):s.current=u}}catch(h){on(e,i,h)}}function rr(e,i){var s=e.ref,u=e.refCleanup;if(s!==null)if(typeof u=="function")try{u()}catch(h){on(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){on(e,i,h)}else s.current=null}function iS(e){var i=e.type,s=e.memoizedProps,u=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&u.focus();break t;case"img":s.src?u.src=s.src:s.srcSet&&(u.srcset=s.srcSet)}}catch(h){on(e,e.return,h)}}function Kp(e,i,s){try{var u=e.stateNode;qT(u,e.type,s,i),u[be]=i}catch(h){on(e,e.return,h)}}function aS(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&bs(e.type)||e.tag===4}function Qp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||aS(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&bs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jp(e,i,s){var u=e.tag;if(u===5||u===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=br));else if(u!==4&&(u===27&&bs(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(Jp(e,i,s),e=e.sibling;e!==null;)Jp(e,i,s),e=e.sibling}function Bf(e,i,s){var u=e.tag;if(u===5||u===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(u!==4&&(u===27&&bs(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(Bf(e,i,s),e=e.sibling;e!==null;)Bf(e,i,s),e=e.sibling}function rS(e){var i=e.stateNode,s=e.memoizedProps;try{for(var u=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);hi(i,u,s),i[xe]=e,i[be]=s}catch(m){on(e,e.return,m)}}var Or=!1,jn=!1,$p=!1,sS=typeof WeakSet=="function"?WeakSet:Set,ai=null;function AT(e,i){if(e=e.containerInfo,Sm=sh,e=vv(e),Yd(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var h=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var b=0,L=-1,W=-1,ot=0,gt=0,yt=e,ct=null;e:for(;;){for(var ht;yt!==s||h!==0&&yt.nodeType!==3||(L=b+h),yt!==m||u!==0&&yt.nodeType!==3||(W=b+u),yt.nodeType===3&&(b+=yt.nodeValue.length),(ht=yt.firstChild)!==null;)ct=yt,yt=ht;for(;;){if(yt===e)break e;if(ct===s&&++ot===h&&(L=b),ct===m&&++gt===u&&(W=b),(ht=yt.nextSibling)!==null)break;yt=ct,ct=yt.parentNode}yt=ht}s=L===-1||W===-1?null:{start:L,end:W}}else s=null}s=s||{start:0,end:0}}else s=null;for(ym={focusedElem:e,selectionRange:s},sh=!1,ai=i;ai!==null;)if(i=ai,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,ai=e;else for(;ai!==null;){switch(i=ai,m=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)h=e[s],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,s=i,h=m.memoizedProps,m=m.memoizedState,u=s.stateNode;try{var $t=mo(s.type,h);e=u.getSnapshotBeforeUpdate($t,m),u.__reactInternalSnapshotBeforeUpdate=e}catch(he){on(s,s.return,he)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)bm(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":bm(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,ai=e;break}ai=i.return}}function oS(e,i,s){var u=s.flags;switch(s.tag){case 0:case 11:case 15:zr(e,s),u&4&&Vu(5,s);break;case 1:if(zr(e,s),u&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(b){on(s,s.return,b)}else{var h=mo(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(b){on(s,s.return,b)}}u&64&&eS(s),u&512&&ku(s,s.return);break;case 3:if(zr(e,s),u&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Wv(e,i)}catch(b){on(s,s.return,b)}}break;case 27:i===null&&u&4&&rS(s);case 26:case 5:zr(e,s),i===null&&u&4&&iS(s),u&512&&ku(s,s.return);break;case 12:zr(e,s);break;case 31:zr(e,s),u&4&&cS(e,s);break;case 13:zr(e,s),u&4&&fS(e,s),u&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=PT.bind(null,s),eA(e,s))));break;case 22:if(u=s.memoizedState!==null||Or,!u){i=i!==null&&i.memoizedState!==null||jn,h=Or;var m=jn;Or=u,(jn=i)&&!m?Fr(e,s,(s.subtreeFlags&8772)!==0):zr(e,s),Or=h,jn=m}break;case 30:break;default:zr(e,s)}}function lS(e){var i=e.alternate;i!==null&&(e.alternate=null,lS(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Dn(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Cn=null,Gi=!1;function Pr(e,i,s){for(s=s.child;s!==null;)uS(e,i,s),s=s.sibling}function uS(e,i,s){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(dt,s)}catch{}switch(s.tag){case 26:jn||rr(s,i),Pr(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:jn||rr(s,i);var u=Cn,h=Gi;bs(s.type)&&(Cn=s.stateNode,Gi=!1),Pr(e,i,s),Ju(s.stateNode),Cn=u,Gi=h;break;case 5:jn||rr(s,i);case 6:if(u=Cn,h=Gi,Cn=null,Pr(e,i,s),Cn=u,Gi=h,Cn!==null)if(Gi)try{(Cn.nodeType===9?Cn.body:Cn.nodeName==="HTML"?Cn.ownerDocument.body:Cn).removeChild(s.stateNode)}catch(m){on(s,i,m)}else try{Cn.removeChild(s.stateNode)}catch(m){on(s,i,m)}break;case 18:Cn!==null&&(Gi?(e=Cn,ey(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Tl(e)):ey(Cn,s.stateNode));break;case 4:u=Cn,h=Gi,Cn=s.stateNode.containerInfo,Gi=!0,Pr(e,i,s),Cn=u,Gi=h;break;case 0:case 11:case 14:case 15:gs(2,s,i),jn||gs(4,s,i),Pr(e,i,s);break;case 1:jn||(rr(s,i),u=s.stateNode,typeof u.componentWillUnmount=="function"&&nS(s,i,u)),Pr(e,i,s);break;case 21:Pr(e,i,s);break;case 22:jn=(u=jn)||s.memoizedState!==null,Pr(e,i,s),jn=u;break;default:Pr(e,i,s)}}function cS(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Tl(e)}catch(s){on(i,i.return,s)}}}function fS(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Tl(e)}catch(s){on(i,i.return,s)}}function RT(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new sS),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new sS),i;default:throw Error(a(435,e.tag))}}function Hf(e,i){var s=RT(e);i.forEach(function(u){if(!s.has(u)){s.add(u);var h=zT.bind(null,e,u);u.then(h,h)}})}function Vi(e,i){var s=i.deletions;if(s!==null)for(var u=0;u<s.length;u++){var h=s[u],m=e,b=i,L=b;t:for(;L!==null;){switch(L.tag){case 27:if(bs(L.type)){Cn=L.stateNode,Gi=!1;break t}break;case 5:Cn=L.stateNode,Gi=!1;break t;case 3:case 4:Cn=L.stateNode.containerInfo,Gi=!0;break t}L=L.return}if(Cn===null)throw Error(a(160));uS(m,b,h),Cn=null,Gi=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)hS(i,e),i=i.sibling}var Ya=null;function hS(e,i){var s=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Vi(i,e),ki(e),u&4&&(gs(3,e,e.return),Vu(3,e),gs(5,e,e.return));break;case 1:Vi(i,e),ki(e),u&512&&(jn||s===null||rr(s,s.return)),u&64&&Or&&(e=e.updateQueue,e!==null&&(u=e.callbacks,u!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?u:s.concat(u))));break;case 26:var h=Ya;if(Vi(i,e),ki(e),u&512&&(jn||s===null||rr(s,s.return)),u&4){var m=s!==null?s.memoizedState:null;if(u=e.memoizedState,s===null)if(u===null)if(e.stateNode===null){t:{u=e.type,s=e.memoizedProps,h=h.ownerDocument||h;e:switch(u){case"title":m=h.getElementsByTagName("title")[0],(!m||m[Sn]||m[xe]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(u),h.head.insertBefore(m,h.querySelector("head > title"))),hi(m,u,s),m[xe]=e,De(m),u=m;break t;case"link":var b=hy("link","href",h).get(u+(s.href||""));if(b){for(var L=0;L<b.length;L++)if(m=b[L],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){b.splice(L,1);break e}}m=h.createElement(u),hi(m,u,s),h.head.appendChild(m);break;case"meta":if(b=hy("meta","content",h).get(u+(s.content||""))){for(L=0;L<b.length;L++)if(m=b[L],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){b.splice(L,1);break e}}m=h.createElement(u),hi(m,u,s),h.head.appendChild(m);break;default:throw Error(a(468,u))}m[xe]=e,De(m),u=m}e.stateNode=u}else dy(h,e.type,e.stateNode);else e.stateNode=fy(h,u,e.memoizedProps);else m!==u?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,u===null?dy(h,e.type,e.stateNode):fy(h,u,e.memoizedProps)):u===null&&e.stateNode!==null&&Kp(e,e.memoizedProps,s.memoizedProps)}break;case 27:Vi(i,e),ki(e),u&512&&(jn||s===null||rr(s,s.return)),s!==null&&u&4&&Kp(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Vi(i,e),ki(e),u&512&&(jn||s===null||rr(s,s.return)),e.flags&32){h=e.stateNode;try{na(h,"")}catch($t){on(e,e.return,$t)}}u&4&&e.stateNode!=null&&(h=e.memoizedProps,Kp(e,h,s!==null?s.memoizedProps:h)),u&1024&&($p=!0);break;case 6:if(Vi(i,e),ki(e),u&4){if(e.stateNode===null)throw Error(a(162));u=e.memoizedProps,s=e.stateNode;try{s.nodeValue=u}catch($t){on(e,e.return,$t)}}break;case 3:if(nh=null,h=Ya,Ya=th(i.containerInfo),Vi(i,e),Ya=h,ki(e),u&4&&s!==null&&s.memoizedState.isDehydrated)try{Tl(i.containerInfo)}catch($t){on(e,e.return,$t)}$p&&($p=!1,dS(e));break;case 4:u=Ya,Ya=th(e.stateNode.containerInfo),Vi(i,e),ki(e),Ya=u;break;case 12:Vi(i,e),ki(e);break;case 31:Vi(i,e),ki(e),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,Hf(e,u)));break;case 13:Vi(i,e),ki(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Vf=Lt()),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,Hf(e,u)));break;case 22:h=e.memoizedState!==null;var W=s!==null&&s.memoizedState!==null,ot=Or,gt=jn;if(Or=ot||h,jn=gt||W,Vi(i,e),jn=gt,Or=ot,ki(e),u&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(s===null||W||Or||jn||_o(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){W=s=i;try{if(m=W.stateNode,h)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{L=W.stateNode;var yt=W.memoizedProps.style,ct=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;L.style.display=ct==null||typeof ct=="boolean"?"":(""+ct).trim()}}catch($t){on(W,W.return,$t)}}}else if(i.tag===6){if(s===null){W=i;try{W.stateNode.nodeValue=h?"":W.memoizedProps}catch($t){on(W,W.return,$t)}}}else if(i.tag===18){if(s===null){W=i;try{var ht=W.stateNode;h?ny(ht,!0):ny(W.stateNode,!1)}catch($t){on(W,W.return,$t)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}u&4&&(u=e.updateQueue,u!==null&&(s=u.retryQueue,s!==null&&(u.retryQueue=null,Hf(e,s))));break;case 19:Vi(i,e),ki(e),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,Hf(e,u)));break;case 30:break;case 21:break;default:Vi(i,e),ki(e)}}function ki(e){var i=e.flags;if(i&2){try{for(var s,u=e.return;u!==null;){if(aS(u)){s=u;break}u=u.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,m=Qp(e);Bf(e,m,h);break;case 5:var b=s.stateNode;s.flags&32&&(na(b,""),s.flags&=-33);var L=Qp(e);Bf(e,L,b);break;case 3:case 4:var W=s.stateNode.containerInfo,ot=Qp(e);Jp(e,ot,W);break;default:throw Error(a(161))}}catch(gt){on(e,e.return,gt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function dS(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;dS(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function zr(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)oS(e,i.alternate,i),i=i.sibling}function _o(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:gs(4,i,i.return),_o(i);break;case 1:rr(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&nS(i,i.return,s),_o(i);break;case 27:Ju(i.stateNode);case 26:case 5:rr(i,i.return),_o(i);break;case 22:i.memoizedState===null&&_o(i);break;case 30:_o(i);break;default:_o(i)}e=e.sibling}}function Fr(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var u=i.alternate,h=e,m=i,b=m.flags;switch(m.tag){case 0:case 11:case 15:Fr(h,m,s),Vu(4,m);break;case 1:if(Fr(h,m,s),u=m,h=u.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(ot){on(u,u.return,ot)}if(u=m,h=u.updateQueue,h!==null){var L=u.stateNode;try{var W=h.shared.hiddenCallbacks;if(W!==null)for(h.shared.hiddenCallbacks=null,h=0;h<W.length;h++)Xv(W[h],L)}catch(ot){on(u,u.return,ot)}}s&&b&64&&eS(m),ku(m,m.return);break;case 27:rS(m);case 26:case 5:Fr(h,m,s),s&&u===null&&b&4&&iS(m),ku(m,m.return);break;case 12:Fr(h,m,s);break;case 31:Fr(h,m,s),s&&b&4&&cS(h,m);break;case 13:Fr(h,m,s),s&&b&4&&fS(h,m);break;case 22:m.memoizedState===null&&Fr(h,m,s),ku(m,m.return);break;case 30:break;default:Fr(h,m,s)}i=i.sibling}}function tm(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&wu(s))}function em(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&wu(e))}function qa(e,i,s,u){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)pS(e,i,s,u),i=i.sibling}function pS(e,i,s,u){var h=i.flags;switch(i.tag){case 0:case 11:case 15:qa(e,i,s,u),h&2048&&Vu(9,i);break;case 1:qa(e,i,s,u);break;case 3:qa(e,i,s,u),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&wu(e)));break;case 12:if(h&2048){qa(e,i,s,u),e=i.stateNode;try{var m=i.memoizedProps,b=m.id,L=m.onPostCommit;typeof L=="function"&&L(b,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(W){on(i,i.return,W)}}else qa(e,i,s,u);break;case 31:qa(e,i,s,u);break;case 13:qa(e,i,s,u);break;case 23:break;case 22:m=i.stateNode,b=i.alternate,i.memoizedState!==null?m._visibility&2?qa(e,i,s,u):Xu(e,i):m._visibility&2?qa(e,i,s,u):(m._visibility|=2,pl(e,i,s,u,(i.subtreeFlags&10256)!==0||!1)),h&2048&&tm(b,i);break;case 24:qa(e,i,s,u),h&2048&&em(i.alternate,i);break;default:qa(e,i,s,u)}}function pl(e,i,s,u,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=e,b=i,L=s,W=u,ot=b.flags;switch(b.tag){case 0:case 11:case 15:pl(m,b,L,W,h),Vu(8,b);break;case 23:break;case 22:var gt=b.stateNode;b.memoizedState!==null?gt._visibility&2?pl(m,b,L,W,h):Xu(m,b):(gt._visibility|=2,pl(m,b,L,W,h)),h&&ot&2048&&tm(b.alternate,b);break;case 24:pl(m,b,L,W,h),h&&ot&2048&&em(b.alternate,b);break;default:pl(m,b,L,W,h)}i=i.sibling}}function Xu(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,u=i,h=u.flags;switch(u.tag){case 22:Xu(s,u),h&2048&&tm(u.alternate,u);break;case 24:Xu(s,u),h&2048&&em(u.alternate,u);break;default:Xu(s,u)}i=i.sibling}}var Wu=8192;function ml(e,i,s){if(e.subtreeFlags&Wu)for(e=e.child;e!==null;)mS(e,i,s),e=e.sibling}function mS(e,i,s){switch(e.tag){case 26:ml(e,i,s),e.flags&Wu&&e.memoizedState!==null&&dA(s,Ya,e.memoizedState,e.memoizedProps);break;case 5:ml(e,i,s);break;case 3:case 4:var u=Ya;Ya=th(e.stateNode.containerInfo),ml(e,i,s),Ya=u;break;case 22:e.memoizedState===null&&(u=e.alternate,u!==null&&u.memoizedState!==null?(u=Wu,Wu=16777216,ml(e,i,s),Wu=u):ml(e,i,s));break;default:ml(e,i,s)}}function _S(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Yu(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var u=i[s];ai=u,vS(u,e)}_S(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)gS(e),e=e.sibling}function gS(e){switch(e.tag){case 0:case 11:case 15:Yu(e),e.flags&2048&&gs(9,e,e.return);break;case 3:Yu(e);break;case 12:Yu(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Gf(e)):Yu(e);break;default:Yu(e)}}function Gf(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var u=i[s];ai=u,vS(u,e)}_S(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:gs(8,i,i.return),Gf(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Gf(i));break;default:Gf(i)}e=e.sibling}}function vS(e,i){for(;ai!==null;){var s=ai;switch(s.tag){case 0:case 11:case 15:gs(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var u=s.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:wu(s.memoizedState.cache)}if(u=s.child,u!==null)u.return=s,ai=u;else t:for(s=e;ai!==null;){u=ai;var h=u.sibling,m=u.return;if(lS(u),u===s){ai=null;break t}if(h!==null){h.return=m,ai=h;break t}ai=m}}}var CT={getCacheForType:function(e){var i=ci(Wn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s},cacheSignal:function(){return ci(Wn).controller.signal}},wT=typeof WeakMap=="function"?WeakMap:Map,$e=0,gn=null,Be=null,Ve=0,sn=0,oa=null,vs=!1,_l=!1,nm=!1,Ir=0,Pn=0,xs=0,go=0,im=0,la=0,gl=0,qu=null,Xi=null,am=!1,Vf=0,xS=0,kf=1/0,Xf=null,Ss=null,$n=0,ys=null,vl=null,Br=0,rm=0,sm=null,SS=null,ju=0,om=null;function ua(){return($e&2)!==0&&Ve!==0?Ve&-Ve:F.T!==null?dm():Re()}function yS(){if(la===0)if((Ve&536870912)===0||Xe){var e=de;de<<=1,(de&3932160)===0&&(de=262144),la=e}else la=536870912;return e=ra.current,e!==null&&(e.flags|=32),la}function Wi(e,i,s){(e===gn&&(sn===2||sn===9)||e.cancelPendingCommit!==null)&&(xl(e,0),Ms(e,Ve,la,!1)),Nt(e,s),(($e&2)===0||e!==gn)&&(e===gn&&(($e&2)===0&&(go|=s),Pn===4&&Ms(e,Ve,la,!1)),sr(e))}function MS(e,i,s){if(($e&6)!==0)throw Error(a(327));var u=!s&&(i&127)===0&&(i&e.expiredLanes)===0||Vt(e,i),h=u?NT(e,i):um(e,i,!0),m=u;do{if(h===0){_l&&!u&&Ms(e,i,0,!1);break}else{if(s=e.current.alternate,m&&!DT(s)){h=um(e,i,!1),m=!1;continue}if(h===2){if(m=i,e.errorRecoveryDisabledLanes&m)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;t:{var L=e;h=qu;var W=L.current.memoizedState.isDehydrated;if(W&&(xl(L,b).flags|=256),b=um(L,b,!1),b!==2){if(nm&&!W){L.errorRecoveryDisabledLanes|=m,go|=m,h=4;break t}m=Xi,Xi=h,m!==null&&(Xi===null?Xi=m:Xi.push.apply(Xi,m))}h=b}if(m=!1,h!==2)continue}}if(h===1){xl(e,0),Ms(e,i,0,!0);break}t:{switch(u=e,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Ms(u,i,la,!vs);break t;case 2:Xi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=Vf+300-Lt(),10<h)){if(Ms(u,i,la,!vs),mt(u,0,!0)!==0)break t;Br=i,u.timeoutHandle=$S(ES.bind(null,u,s,Xi,Xf,am,i,la,go,gl,vs,m,"Throttled",-0,0),h);break t}ES(u,s,Xi,Xf,am,i,la,go,gl,vs,m,null,-0,0)}}break}while(!0);sr(e)}function ES(e,i,s,u,h,m,b,L,W,ot,gt,yt,ct,ht){if(e.timeoutHandle=-1,yt=i.subtreeFlags,yt&8192||(yt&16785408)===16785408){yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:br},mS(i,m,yt);var $t=(m&62914560)===m?Vf-Lt():(m&4194048)===m?xS-Lt():0;if($t=pA(yt,$t),$t!==null){Br=m,e.cancelPendingCommit=$t(US.bind(null,e,i,m,s,u,h,b,L,W,gt,yt,null,ct,ht)),Ms(e,m,b,!ot);return}}US(e,i,m,s,u,h,b,L,W)}function DT(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var u=0;u<s.length;u++){var h=s[u],m=h.getSnapshot;h=h.value;try{if(!ia(m(),h))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ms(e,i,s,u){i&=~im,i&=~go,e.suspendedLanes|=i,e.pingedLanes&=~i,u&&(e.warmLanes|=i),u=e.expirationTimes;for(var h=i;0<h;){var m=31-Ht(h),b=1<<m;u[m]=-1,h&=~b}s!==0&&wt(e,s,i)}function Wf(){return($e&6)===0?(Zu(0),!1):!0}function lm(){if(Be!==null){if(sn===0)var e=Be.return;else e=Be,Cr=oo=null,bp(e),ul=null,Uu=0,e=Be;for(;e!==null;)tS(e.alternate,e),e=e.return;Be=null}}function xl(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,KT(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Br=0,lm(),gn=e,Be=s=Ar(e.current,null),Ve=i,sn=0,oa=null,vs=!1,_l=Vt(e,i),nm=!1,gl=la=im=go=xs=Pn=0,Xi=qu=null,am=!1,(i&8)!==0&&(i|=i&32);var u=e.entangledLanes;if(u!==0)for(e=e.entanglements,u&=i;0<u;){var h=31-Ht(u),m=1<<h;i|=e[h],u&=~m}return Ir=i,hf(),s}function bS(e,i){Ae=null,F.H=Bu,i===ll||i===Sf?(i=Hv(),sn=3):i===hp?(i=Hv(),sn=4):sn=i===Hp?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,oa=i,Be===null&&(Pn=1,Of(e,Ra(i,e.current)))}function TS(){var e=ra.current;return e===null?!0:(Ve&4194048)===Ve?Ua===null:(Ve&62914560)===Ve||(Ve&536870912)!==0?e===Ua:!1}function AS(){var e=F.H;return F.H=Bu,e===null?Bu:e}function RS(){var e=F.A;return F.A=CT,e}function Yf(){Pn=4,vs||(Ve&4194048)!==Ve&&ra.current!==null||(_l=!0),(xs&134217727)===0&&(go&134217727)===0||gn===null||Ms(gn,Ve,la,!1)}function um(e,i,s){var u=$e;$e|=2;var h=AS(),m=RS();(gn!==e||Ve!==i)&&(Xf=null,xl(e,i)),i=!1;var b=Pn;t:do try{if(sn!==0&&Be!==null){var L=Be,W=oa;switch(sn){case 8:lm(),b=6;break t;case 3:case 2:case 9:case 6:ra.current===null&&(i=!0);var ot=sn;if(sn=0,oa=null,Sl(e,L,W,ot),s&&_l){b=0;break t}break;default:ot=sn,sn=0,oa=null,Sl(e,L,W,ot)}}UT(),b=Pn;break}catch(gt){bS(e,gt)}while(!0);return i&&e.shellSuspendCounter++,Cr=oo=null,$e=u,F.H=h,F.A=m,Be===null&&(gn=null,Ve=0,hf()),b}function UT(){for(;Be!==null;)CS(Be)}function NT(e,i){var s=$e;$e|=2;var u=AS(),h=RS();gn!==e||Ve!==i?(Xf=null,kf=Lt()+500,xl(e,i)):_l=Vt(e,i);t:do try{if(sn!==0&&Be!==null){i=Be;var m=oa;e:switch(sn){case 1:sn=0,oa=null,Sl(e,i,m,1);break;case 2:case 9:if(Iv(m)){sn=0,oa=null,wS(i);break}i=function(){sn!==2&&sn!==9||gn!==e||(sn=7),sr(e)},m.then(i,i);break t;case 3:sn=7;break t;case 4:sn=5;break t;case 7:Iv(m)?(sn=0,oa=null,wS(i)):(sn=0,oa=null,Sl(e,i,m,7));break;case 5:var b=null;switch(Be.tag){case 26:b=Be.memoizedState;case 5:case 27:var L=Be;if(b?py(b):L.stateNode.complete){sn=0,oa=null;var W=L.sibling;if(W!==null)Be=W;else{var ot=L.return;ot!==null?(Be=ot,qf(ot)):Be=null}break e}}sn=0,oa=null,Sl(e,i,m,5);break;case 6:sn=0,oa=null,Sl(e,i,m,6);break;case 8:lm(),Pn=6;break t;default:throw Error(a(462))}}LT();break}catch(gt){bS(e,gt)}while(!0);return Cr=oo=null,F.H=u,F.A=h,$e=s,Be!==null?0:(gn=null,Ve=0,hf(),Pn)}function LT(){for(;Be!==null&&!me();)CS(Be)}function CS(e){var i=Jx(e.alternate,e,Ir);e.memoizedProps=e.pendingProps,i===null?qf(e):Be=i}function wS(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=Yx(s,i,i.pendingProps,i.type,void 0,Ve);break;case 11:i=Yx(s,i,i.pendingProps,i.type.render,i.ref,Ve);break;case 5:bp(i);default:tS(s,i),i=Be=Rv(i,Ir),i=Jx(s,i,Ir)}e.memoizedProps=e.pendingProps,i===null?qf(e):Be=i}function Sl(e,i,s,u){Cr=oo=null,bp(i),ul=null,Uu=0;var h=i.return;try{if(yT(e,h,i,s,Ve)){Pn=1,Of(e,Ra(s,e.current)),Be=null;return}}catch(m){if(h!==null)throw Be=h,m;Pn=1,Of(e,Ra(s,e.current)),Be=null;return}i.flags&32768?(Xe||u===1?e=!0:_l||(Ve&536870912)!==0?e=!1:(vs=e=!0,(u===2||u===9||u===3||u===6)&&(u=ra.current,u!==null&&u.tag===13&&(u.flags|=16384))),DS(i,e)):qf(i)}function qf(e){var i=e;do{if((i.flags&32768)!==0){DS(i,vs);return}e=i.return;var s=bT(i.alternate,i,Ir);if(s!==null){Be=s;return}if(i=i.sibling,i!==null){Be=i;return}Be=i=e}while(i!==null);Pn===0&&(Pn=5)}function DS(e,i){do{var s=TT(e.alternate,e);if(s!==null){s.flags&=32767,Be=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){Be=e;return}Be=e=s}while(e!==null);Pn=6,Be=null}function US(e,i,s,u,h,m,b,L,W){e.cancelPendingCommit=null;do jf();while($n!==0);if(($e&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Qd,oe(e,s,m,b,L,W),e===gn&&(Be=gn=null,Ve=0),vl=i,ys=e,Br=s,rm=m,sm=h,SS=u,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,FT(Q,function(){return zS(),null})):(e.callbackNode=null,e.callbackPriority=0),u=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||u){u=F.T,F.T=null,h=H.p,H.p=2,b=$e,$e|=4;try{AT(e,i,s)}finally{$e=b,H.p=h,F.T=u}}$n=1,NS(),LS(),OS()}}function NS(){if($n===1){$n=0;var e=ys,i=vl,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=F.T,F.T=null;var u=H.p;H.p=2;var h=$e;$e|=4;try{hS(i,e);var m=ym,b=vv(e.containerInfo),L=m.focusedElem,W=m.selectionRange;if(b!==L&&L&&L.ownerDocument&&gv(L.ownerDocument.documentElement,L)){if(W!==null&&Yd(L)){var ot=W.start,gt=W.end;if(gt===void 0&&(gt=ot),"selectionStart"in L)L.selectionStart=ot,L.selectionEnd=Math.min(gt,L.value.length);else{var yt=L.ownerDocument||document,ct=yt&&yt.defaultView||window;if(ct.getSelection){var ht=ct.getSelection(),$t=L.textContent.length,he=Math.min(W.start,$t),dn=W.end===void 0?he:Math.min(W.end,$t);!ht.extend&&he>dn&&(b=dn,dn=he,he=b);var $=_v(L,he),q=_v(L,dn);if($&&q&&(ht.rangeCount!==1||ht.anchorNode!==$.node||ht.anchorOffset!==$.offset||ht.focusNode!==q.node||ht.focusOffset!==q.offset)){var rt=yt.createRange();rt.setStart($.node,$.offset),ht.removeAllRanges(),he>dn?(ht.addRange(rt),ht.extend(q.node,q.offset)):(rt.setEnd(q.node,q.offset),ht.addRange(rt))}}}}for(yt=[],ht=L;ht=ht.parentNode;)ht.nodeType===1&&yt.push({element:ht,left:ht.scrollLeft,top:ht.scrollTop});for(typeof L.focus=="function"&&L.focus(),L=0;L<yt.length;L++){var St=yt[L];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}sh=!!Sm,ym=Sm=null}finally{$e=h,H.p=u,F.T=s}}e.current=i,$n=2}}function LS(){if($n===2){$n=0;var e=ys,i=vl,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=F.T,F.T=null;var u=H.p;H.p=2;var h=$e;$e|=4;try{oS(e,i.alternate,i)}finally{$e=h,H.p=u,F.T=s}}$n=3}}function OS(){if($n===4||$n===3){$n=0,ze();var e=ys,i=vl,s=Br,u=SS;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?$n=5:($n=0,vl=ys=null,PS(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Ss=null),Tn(s),i=i.stateNode,pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(dt,i,void 0,(i.current.flags&128)===128)}catch{}if(u!==null){i=F.T,h=H.p,H.p=2,F.T=null;try{for(var m=e.onRecoverableError,b=0;b<u.length;b++){var L=u[b];m(L.value,{componentStack:L.stack})}}finally{F.T=i,H.p=h}}(Br&3)!==0&&jf(),sr(e),h=e.pendingLanes,(s&261930)!==0&&(h&42)!==0?e===om?ju++:(ju=0,om=e):ju=0,Zu(0)}}function PS(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,wu(i)))}function jf(){return NS(),LS(),OS(),zS()}function zS(){if($n!==5)return!1;var e=ys,i=rm;rm=0;var s=Tn(Br),u=F.T,h=H.p;try{H.p=32>s?32:s,F.T=null,s=sm,sm=null;var m=ys,b=Br;if($n=0,vl=ys=null,Br=0,($e&6)!==0)throw Error(a(331));var L=$e;if($e|=4,gS(m.current),pS(m,m.current,b,s),$e=L,Zu(0,!1),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(dt,m)}catch{}return!0}finally{H.p=h,F.T=u,PS(e,i)}}function FS(e,i,s){i=Ra(s,i),i=Bp(e.stateNode,i,2),e=ps(e,i,2),e!==null&&(Nt(e,2),sr(e))}function on(e,i,s){if(e.tag===3)FS(e,e,s);else for(;i!==null;){if(i.tag===3){FS(i,e,s);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Ss===null||!Ss.has(u))){e=Ra(s,e),s=Ix(2),u=ps(i,s,2),u!==null&&(Bx(s,u,i,e),Nt(u,2),sr(u));break}}i=i.return}}function cm(e,i,s){var u=e.pingCache;if(u===null){u=e.pingCache=new wT;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(s)||(nm=!0,h.add(s),e=OT.bind(null,e,i,s),i.then(e,e))}function OT(e,i,s){var u=e.pingCache;u!==null&&u.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,gn===e&&(Ve&s)===s&&(Pn===4||Pn===3&&(Ve&62914560)===Ve&&300>Lt()-Vf?($e&2)===0&&xl(e,0):im|=s,gl===Ve&&(gl=0)),sr(e)}function IS(e,i){i===0&&(i=Tt()),e=ao(e,i),e!==null&&(Nt(e,i),sr(e))}function PT(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),IS(e,s)}function zT(e,i){var s=0;switch(e.tag){case 31:case 13:var u=e.stateNode,h=e.memoizedState;h!==null&&(s=h.retryLane);break;case 19:u=e.stateNode;break;case 22:u=e.stateNode._retryCache;break;default:throw Error(a(314))}u!==null&&u.delete(i),IS(e,s)}function FT(e,i){return j(e,i)}var Zf=null,yl=null,fm=!1,Kf=!1,hm=!1,Es=0;function sr(e){e!==yl&&e.next===null&&(yl===null?Zf=yl=e:yl=yl.next=e),Kf=!0,fm||(fm=!0,BT())}function Zu(e,i){if(!hm&&Kf){hm=!0;do for(var s=!1,u=Zf;u!==null;){if(e!==0){var h=u.pendingLanes;if(h===0)var m=0;else{var b=u.suspendedLanes,L=u.pingedLanes;m=(1<<31-Ht(42|e)+1)-1,m&=h&~(b&~L),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,VS(u,m))}else m=Ve,m=mt(u,u===gn?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Vt(u,m)||(s=!0,VS(u,m));u=u.next}while(s);hm=!1}}function IT(){BS()}function BS(){Kf=fm=!1;var e=0;Es!==0&&ZT()&&(e=Es);for(var i=Lt(),s=null,u=Zf;u!==null;){var h=u.next,m=HS(u,i);m===0?(u.next=null,s===null?Zf=h:s.next=h,h===null&&(yl=s)):(s=u,(e!==0||(m&3)!==0)&&(Kf=!0)),u=h}$n!==0&&$n!==5||Zu(e),Es!==0&&(Es=0)}function HS(e,i){for(var s=e.suspendedLanes,u=e.pingedLanes,h=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var b=31-Ht(m),L=1<<b,W=h[b];W===-1?((L&s)===0||(L&u)!==0)&&(h[b]=Pt(L,i)):W<=i&&(e.expiredLanes|=L),m&=~L}if(i=gn,s=Ve,s=mt(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u=e.callbackNode,s===0||e===i&&(sn===2||sn===9)||e.cancelPendingCommit!==null)return u!==null&&u!==null&&ge(u),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Vt(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(u!==null&&ge(u),Tn(s)){case 2:case 8:s=R;break;case 32:s=Q;break;case 268435456:s=bt;break;default:s=Q}return u=GS.bind(null,e),s=j(s,u),e.callbackPriority=i,e.callbackNode=s,i}return u!==null&&u!==null&&ge(u),e.callbackPriority=2,e.callbackNode=null,2}function GS(e,i){if($n!==0&&$n!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(jf()&&e.callbackNode!==s)return null;var u=Ve;return u=mt(e,e===gn?u:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u===0?null:(MS(e,u,i),HS(e,Lt()),e.callbackNode!=null&&e.callbackNode===s?GS.bind(null,e):null)}function VS(e,i){if(jf())return null;MS(e,i,!0)}function BT(){QT(function(){($e&6)!==0?j(z,IT):BS()})}function dm(){if(Es===0){var e=sl;e===0&&(e=ce,ce<<=1,(ce&261888)===0&&(ce=256)),Es=e}return Es}function kS(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:to(""+e)}function XS(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function HT(e,i,s,u,h){if(i==="submit"&&s&&s.stateNode===h){var m=kS((h[be]||null).action),b=u.submitter;b&&(i=(i=b[be]||null)?kS(i.formAction):b.getAttribute("formAction"),i!==null&&(m=i,b=null));var L=new lf("action","action",null,u,h);e.push({event:L,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Es!==0){var W=b?XS(h,b):new FormData(h);Lp(s,{pending:!0,data:W,method:h.method,action:m},null,W)}}else typeof m=="function"&&(L.preventDefault(),W=b?XS(h,b):new FormData(h),Lp(s,{pending:!0,data:W,method:h.method,action:m},m,W))},currentTarget:h}]})}}for(var pm=0;pm<Kd.length;pm++){var mm=Kd[pm],GT=mm.toLowerCase(),VT=mm[0].toUpperCase()+mm.slice(1);Wa(GT,"on"+VT)}Wa(yv,"onAnimationEnd"),Wa(Mv,"onAnimationIteration"),Wa(Ev,"onAnimationStart"),Wa("dblclick","onDoubleClick"),Wa("focusin","onFocus"),Wa("focusout","onBlur"),Wa(aT,"onTransitionRun"),Wa(rT,"onTransitionStart"),Wa(sT,"onTransitionCancel"),Wa(bv,"onTransitionEnd"),st("onMouseEnter",["mouseout","mouseover"]),st("onMouseLeave",["mouseout","mouseover"]),st("onPointerEnter",["pointerout","pointerover"]),st("onPointerLeave",["pointerout","pointerover"]),Z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Z("onBeforeInput",["compositionend","keypress","textInput","paste"]),Z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ku="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ku));function WS(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var u=e[s],h=u.event;u=u.listeners;t:{var m=void 0;if(i)for(var b=u.length-1;0<=b;b--){var L=u[b],W=L.instance,ot=L.currentTarget;if(L=L.listener,W!==m&&h.isPropagationStopped())break t;m=L,h.currentTarget=ot;try{m(h)}catch(gt){ff(gt)}h.currentTarget=null,m=W}else for(b=0;b<u.length;b++){if(L=u[b],W=L.instance,ot=L.currentTarget,L=L.listener,W!==m&&h.isPropagationStopped())break t;m=L,h.currentTarget=ot;try{m(h)}catch(gt){ff(gt)}h.currentTarget=null,m=W}}}}function He(e,i){var s=i[kn];s===void 0&&(s=i[kn]=new Set);var u=e+"__bubble";s.has(u)||(YS(i,e,2,!1),s.add(u))}function _m(e,i,s){var u=0;i&&(u|=4),YS(s,e,u,i)}var Qf="_reactListening"+Math.random().toString(36).slice(2);function gm(e){if(!e[Qf]){e[Qf]=!0,Di.forEach(function(s){s!=="selectionchange"&&(kT.has(s)||_m(s,!1,e),_m(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Qf]||(i[Qf]=!0,_m("selectionchange",!1,i))}}function YS(e,i,s,u){switch(yy(i)){case 2:var h=gA;break;case 8:h=vA;break;default:h=Nm}s=h.bind(null,i,s,e),h=void 0,!Fd||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?e.addEventListener(i,s,{capture:!0,passive:h}):e.addEventListener(i,s,!0):h!==void 0?e.addEventListener(i,s,{passive:h}):e.addEventListener(i,s,!1)}function vm(e,i,s,u,h){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)t:for(;;){if(u===null)return;var b=u.tag;if(b===3||b===4){var L=u.stateNode.containerInfo;if(L===h)break;if(b===4)for(b=u.return;b!==null;){var W=b.tag;if((W===3||W===4)&&b.stateNode.containerInfo===h)return;b=b.return}for(;L!==null;){if(b=yn(L),b===null)return;if(W=b.tag,W===5||W===6||W===26||W===27){u=m=b;continue t}L=L.parentNode}}u=u.return}Qg(function(){var ot=m,gt=Pd(s),yt=[];t:{var ct=Tv.get(e);if(ct!==void 0){var ht=lf,$t=e;switch(e){case"keypress":if(sf(s)===0)break t;case"keydown":case"keyup":ht=zb;break;case"focusin":$t="focus",ht=Gd;break;case"focusout":$t="blur",ht=Gd;break;case"beforeblur":case"afterblur":ht=Gd;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ht=tv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ht=bb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ht=Bb;break;case yv:case Mv:case Ev:ht=Rb;break;case bv:ht=Gb;break;case"scroll":case"scrollend":ht=Mb;break;case"wheel":ht=kb;break;case"copy":case"cut":case"paste":ht=wb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ht=nv;break;case"toggle":case"beforetoggle":ht=Wb}var he=(i&4)!==0,dn=!he&&(e==="scroll"||e==="scrollend"),$=he?ct!==null?ct+"Capture":null:ct;he=[];for(var q=ot,rt;q!==null;){var St=q;if(rt=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||rt===null||$===null||(St=vu(q,$),St!=null&&he.push(Qu(q,St,rt))),dn)break;q=q.return}0<he.length&&(ct=new ht(ct,$t,null,s,gt),yt.push({event:ct,listeners:he}))}}if((i&7)===0){t:{if(ct=e==="mouseover"||e==="pointerover",ht=e==="mouseout"||e==="pointerout",ct&&s!==Od&&($t=s.relatedTarget||s.fromElement)&&(yn($t)||$t[Fe]))break t;if((ht||ct)&&(ct=gt.window===gt?gt:(ct=gt.ownerDocument)?ct.defaultView||ct.parentWindow:window,ht?($t=s.relatedTarget||s.toElement,ht=ot,$t=$t?yn($t):null,$t!==null&&(dn=l($t),he=$t.tag,$t!==dn||he!==5&&he!==27&&he!==6)&&($t=null)):(ht=null,$t=ot),ht!==$t)){if(he=tv,St="onMouseLeave",$="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&(he=nv,St="onPointerLeave",$="onPointerEnter",q="pointer"),dn=ht==null?ct:Ta(ht),rt=$t==null?ct:Ta($t),ct=new he(St,q+"leave",ht,s,gt),ct.target=dn,ct.relatedTarget=rt,St=null,yn(gt)===ot&&(he=new he($,q+"enter",$t,s,gt),he.target=rt,he.relatedTarget=dn,St=he),dn=St,ht&&$t)e:{for(he=XT,$=ht,q=$t,rt=0,St=$;St;St=he(St))rt++;St=0;for(var ue=q;ue;ue=he(ue))St++;for(;0<rt-St;)$=he($),rt--;for(;0<St-rt;)q=he(q),St--;for(;rt--;){if($===q||q!==null&&$===q.alternate){he=$;break e}$=he($),q=he(q)}he=null}else he=null;ht!==null&&qS(yt,ct,ht,he,!1),$t!==null&&dn!==null&&qS(yt,dn,$t,he,!0)}}t:{if(ct=ot?Ta(ot):window,ht=ct.nodeName&&ct.nodeName.toLowerCase(),ht==="select"||ht==="input"&&ct.type==="file")var Qe=cv;else if(lv(ct))if(fv)Qe=eT;else{Qe=$b;var ee=Jb}else ht=ct.nodeName,!ht||ht.toLowerCase()!=="input"||ct.type!=="checkbox"&&ct.type!=="radio"?ot&&tn(ot.elementType)&&(Qe=cv):Qe=tT;if(Qe&&(Qe=Qe(e,ot))){uv(yt,Qe,s,gt);break t}ee&&ee(e,ct,ot),e==="focusout"&&ot&&ct.type==="number"&&ot.memoizedProps.value!=null&&Ie(ct,"number",ct.value)}switch(ee=ot?Ta(ot):window,e){case"focusin":(lv(ee)||ee.contentEditable==="true")&&(Jo=ee,qd=ot,Au=null);break;case"focusout":Au=qd=Jo=null;break;case"mousedown":jd=!0;break;case"contextmenu":case"mouseup":case"dragend":jd=!1,xv(yt,s,gt);break;case"selectionchange":if(iT)break;case"keydown":case"keyup":xv(yt,s,gt)}var Ce;if(kd)t:{switch(e){case"compositionstart":var ke="onCompositionStart";break t;case"compositionend":ke="onCompositionEnd";break t;case"compositionupdate":ke="onCompositionUpdate";break t}ke=void 0}else Qo?sv(e,s)&&(ke="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(ke="onCompositionStart");ke&&(iv&&s.locale!=="ko"&&(Qo||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&Qo&&(Ce=Jg()):(os=gt,Id="value"in os?os.value:os.textContent,Qo=!0)),ee=Jf(ot,ke),0<ee.length&&(ke=new ev(ke,e,null,s,gt),yt.push({event:ke,listeners:ee}),Ce?ke.data=Ce:(Ce=ov(s),Ce!==null&&(ke.data=Ce)))),(Ce=qb?jb(e,s):Zb(e,s))&&(ke=Jf(ot,"onBeforeInput"),0<ke.length&&(ee=new ev("onBeforeInput","beforeinput",null,s,gt),yt.push({event:ee,listeners:ke}),ee.data=Ce)),HT(yt,e,ot,s,gt)}WS(yt,i)})}function Qu(e,i,s){return{instance:e,listener:i,currentTarget:s}}function Jf(e,i){for(var s=i+"Capture",u=[];e!==null;){var h=e,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=vu(e,s),h!=null&&u.unshift(Qu(e,h,m)),h=vu(e,i),h!=null&&u.push(Qu(e,h,m))),e.tag===3)return u;e=e.return}return[]}function XT(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function qS(e,i,s,u,h){for(var m=i._reactName,b=[];s!==null&&s!==u;){var L=s,W=L.alternate,ot=L.stateNode;if(L=L.tag,W!==null&&W===u)break;L!==5&&L!==26&&L!==27||ot===null||(W=ot,h?(ot=vu(s,m),ot!=null&&b.unshift(Qu(s,ot,W))):h||(ot=vu(s,m),ot!=null&&b.push(Qu(s,ot,W)))),s=s.return}b.length!==0&&e.push({event:i,listeners:b})}var WT=/\r\n?/g,YT=/\u0000|\uFFFD/g;function jS(e){return(typeof e=="string"?e:""+e).replace(WT,`
`).replace(YT,"")}function ZS(e,i){return i=jS(i),jS(e)===i}function hn(e,i,s,u,h,m){switch(s){case"children":typeof u=="string"?i==="body"||i==="textarea"&&u===""||na(e,u):(typeof u=="number"||typeof u=="bigint")&&i!=="body"&&na(e,""+u);break;case"className":Jt(e,"class",u);break;case"tabIndex":Jt(e,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Jt(e,s,u);break;case"style":Xa(e,u,m);break;case"data":if(i!=="object"){Jt(e,"data",u);break}case"src":case"href":if(u===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(s);break}u=to(""+u),e.setAttribute(s,u);break;case"action":case"formAction":if(typeof u=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&hn(e,i,"name",h.name,h,null),hn(e,i,"formEncType",h.formEncType,h,null),hn(e,i,"formMethod",h.formMethod,h,null),hn(e,i,"formTarget",h.formTarget,h,null)):(hn(e,i,"encType",h.encType,h,null),hn(e,i,"method",h.method,h,null),hn(e,i,"target",h.target,h,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(s);break}u=to(""+u),e.setAttribute(s,u);break;case"onClick":u!=null&&(e.onclick=br);break;case"onScroll":u!=null&&He("scroll",e);break;case"onScrollEnd":u!=null&&He("scrollend",e);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(s=u.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":e.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){e.removeAttribute("xlink:href");break}s=to(""+u),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(s,""+u):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":u===!0?e.setAttribute(s,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(s,u):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?e.setAttribute(s,u):e.removeAttribute(s);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?e.removeAttribute(s):e.setAttribute(s,u);break;case"popover":He("beforetoggle",e),He("toggle",e),Xt(e,"popover",u);break;case"xlinkActuate":Kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Kt(e,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Kt(e,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Kt(e,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Kt(e,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Xt(e,"is",u);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=nr.get(s)||s,Xt(e,s,u))}}function xm(e,i,s,u,h,m){switch(s){case"style":Xa(e,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(s=u.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof u=="string"?na(e,u):(typeof u=="number"||typeof u=="bigint")&&na(e,""+u);break;case"onScroll":u!=null&&He("scroll",e);break;case"onScrollEnd":u!=null&&He("scrollend",e);break;case"onClick":u!=null&&(e.onclick=br);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!U.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),i=s.slice(2,h?s.length-7:void 0),m=e[be]||null,m=m!=null?m[s]:null,typeof m=="function"&&e.removeEventListener(i,m,h),typeof u=="function")){typeof m!="function"&&m!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,u,h);break t}s in e?e[s]=u:u===!0?e.setAttribute(s,""):Xt(e,s,u)}}}function hi(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":He("error",e),He("load",e);var u=!1,h=!1,m;for(m in s)if(s.hasOwnProperty(m)){var b=s[m];if(b!=null)switch(m){case"src":u=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:hn(e,i,m,b,s,null)}}h&&hn(e,i,"srcSet",s.srcSet,s,null),u&&hn(e,i,"src",s.src,s,null);return;case"input":He("invalid",e);var L=m=b=h=null,W=null,ot=null;for(u in s)if(s.hasOwnProperty(u)){var gt=s[u];if(gt!=null)switch(u){case"name":h=gt;break;case"type":b=gt;break;case"checked":W=gt;break;case"defaultChecked":ot=gt;break;case"value":m=gt;break;case"defaultValue":L=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(a(137,i));break;default:hn(e,i,u,gt,s,null)}}vi(e,m,L,W,ot,b,h,!1);return;case"select":He("invalid",e),u=b=m=null;for(h in s)if(s.hasOwnProperty(h)&&(L=s[h],L!=null))switch(h){case"value":m=L;break;case"defaultValue":b=L;break;case"multiple":u=L;default:hn(e,i,h,L,s,null)}i=m,s=b,e.multiple=!!u,i!=null?Jn(e,!!u,i,!1):s!=null&&Jn(e,!!u,s,!0);return;case"textarea":He("invalid",e),m=h=u=null;for(b in s)if(s.hasOwnProperty(b)&&(L=s[b],L!=null))switch(b){case"value":u=L;break;case"defaultValue":h=L;break;case"children":m=L;break;case"dangerouslySetInnerHTML":if(L!=null)throw Error(a(91));break;default:hn(e,i,b,L,s,null)}ka(e,u,h,m);return;case"option":for(W in s)if(s.hasOwnProperty(W)&&(u=s[W],u!=null))switch(W){case"selected":e.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:hn(e,i,W,u,s,null)}return;case"dialog":He("beforetoggle",e),He("toggle",e),He("cancel",e),He("close",e);break;case"iframe":case"object":He("load",e);break;case"video":case"audio":for(u=0;u<Ku.length;u++)He(Ku[u],e);break;case"image":He("error",e),He("load",e);break;case"details":He("toggle",e);break;case"embed":case"source":case"link":He("error",e),He("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ot in s)if(s.hasOwnProperty(ot)&&(u=s[ot],u!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:hn(e,i,ot,u,s,null)}return;default:if(tn(i)){for(gt in s)s.hasOwnProperty(gt)&&(u=s[gt],u!==void 0&&xm(e,i,gt,u,s,void 0));return}}for(L in s)s.hasOwnProperty(L)&&(u=s[L],u!=null&&hn(e,i,L,u,s,null))}function qT(e,i,s,u){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,b=null,L=null,W=null,ot=null,gt=null;for(ht in s){var yt=s[ht];if(s.hasOwnProperty(ht)&&yt!=null)switch(ht){case"checked":break;case"value":break;case"defaultValue":W=yt;default:u.hasOwnProperty(ht)||hn(e,i,ht,null,u,yt)}}for(var ct in u){var ht=u[ct];if(yt=s[ct],u.hasOwnProperty(ct)&&(ht!=null||yt!=null))switch(ct){case"type":m=ht;break;case"name":h=ht;break;case"checked":ot=ht;break;case"defaultChecked":gt=ht;break;case"value":b=ht;break;case"defaultValue":L=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(a(137,i));break;default:ht!==yt&&hn(e,i,ct,ht,u,yt)}}jt(e,b,L,W,ot,gt,m,h);return;case"select":ht=b=L=ct=null;for(m in s)if(W=s[m],s.hasOwnProperty(m)&&W!=null)switch(m){case"value":break;case"multiple":ht=W;default:u.hasOwnProperty(m)||hn(e,i,m,null,u,W)}for(h in u)if(m=u[h],W=s[h],u.hasOwnProperty(h)&&(m!=null||W!=null))switch(h){case"value":ct=m;break;case"defaultValue":L=m;break;case"multiple":b=m;default:m!==W&&hn(e,i,h,m,u,W)}i=L,s=b,u=ht,ct!=null?Jn(e,!!s,ct,!1):!!u!=!!s&&(i!=null?Jn(e,!!s,i,!0):Jn(e,!!s,s?[]:"",!1));return;case"textarea":ht=ct=null;for(L in s)if(h=s[L],s.hasOwnProperty(L)&&h!=null&&!u.hasOwnProperty(L))switch(L){case"value":break;case"children":break;default:hn(e,i,L,null,u,h)}for(b in u)if(h=u[b],m=s[b],u.hasOwnProperty(b)&&(h!=null||m!=null))switch(b){case"value":ct=h;break;case"defaultValue":ht=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&hn(e,i,b,h,u,m)}ea(e,ct,ht);return;case"option":for(var $t in s)if(ct=s[$t],s.hasOwnProperty($t)&&ct!=null&&!u.hasOwnProperty($t))switch($t){case"selected":e.selected=!1;break;default:hn(e,i,$t,null,u,ct)}for(W in u)if(ct=u[W],ht=s[W],u.hasOwnProperty(W)&&ct!==ht&&(ct!=null||ht!=null))switch(W){case"selected":e.selected=ct&&typeof ct!="function"&&typeof ct!="symbol";break;default:hn(e,i,W,ct,u,ht)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var he in s)ct=s[he],s.hasOwnProperty(he)&&ct!=null&&!u.hasOwnProperty(he)&&hn(e,i,he,null,u,ct);for(ot in u)if(ct=u[ot],ht=s[ot],u.hasOwnProperty(ot)&&ct!==ht&&(ct!=null||ht!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(a(137,i));break;default:hn(e,i,ot,ct,u,ht)}return;default:if(tn(i)){for(var dn in s)ct=s[dn],s.hasOwnProperty(dn)&&ct!==void 0&&!u.hasOwnProperty(dn)&&xm(e,i,dn,void 0,u,ct);for(gt in u)ct=u[gt],ht=s[gt],!u.hasOwnProperty(gt)||ct===ht||ct===void 0&&ht===void 0||xm(e,i,gt,ct,u,ht);return}}for(var $ in s)ct=s[$],s.hasOwnProperty($)&&ct!=null&&!u.hasOwnProperty($)&&hn(e,i,$,null,u,ct);for(yt in u)ct=u[yt],ht=s[yt],!u.hasOwnProperty(yt)||ct===ht||ct==null&&ht==null||hn(e,i,yt,ct,u,ht)}function KS(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jT(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,s=performance.getEntriesByType("resource"),u=0;u<s.length;u++){var h=s[u],m=h.transferSize,b=h.initiatorType,L=h.duration;if(m&&L&&KS(b)){for(b=0,L=h.responseEnd,u+=1;u<s.length;u++){var W=s[u],ot=W.startTime;if(ot>L)break;var gt=W.transferSize,yt=W.initiatorType;gt&&KS(yt)&&(W=W.responseEnd,b+=gt*(W<L?1:(L-ot)/(W-ot)))}if(--u,i+=8*(m+b)/(h.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Sm=null,ym=null;function $f(e){return e.nodeType===9?e:e.ownerDocument}function QS(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function JS(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Mm(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Em=null;function ZT(){var e=window.event;return e&&e.type==="popstate"?e===Em?!1:(Em=e,!0):(Em=null,!1)}var $S=typeof setTimeout=="function"?setTimeout:void 0,KT=typeof clearTimeout=="function"?clearTimeout:void 0,ty=typeof Promise=="function"?Promise:void 0,QT=typeof queueMicrotask=="function"?queueMicrotask:typeof ty<"u"?function(e){return ty.resolve(null).then(e).catch(JT)}:$S;function JT(e){setTimeout(function(){throw e})}function bs(e){return e==="head"}function ey(e,i){var s=i,u=0;do{var h=s.nextSibling;if(e.removeChild(s),h&&h.nodeType===8)if(s=h.data,s==="/$"||s==="/&"){if(u===0){e.removeChild(h),Tl(i);return}u--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")u++;else if(s==="html")Ju(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,Ju(s);for(var m=s.firstChild;m;){var b=m.nextSibling,L=m.nodeName;m[Sn]||L==="SCRIPT"||L==="STYLE"||L==="LINK"&&m.rel.toLowerCase()==="stylesheet"||s.removeChild(m),m=b}}else s==="body"&&Ju(e.ownerDocument.body);s=h}while(s);Tl(i)}function ny(e,i){var s=e;e=0;do{var u=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),u&&u.nodeType===8)if(s=u.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=u}while(s)}function bm(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":bm(s),Dn(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function $T(e,i,s,u){for(;e.nodeType===1;){var h=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!u&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(u){if(!e[Sn])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Na(e.nextSibling),e===null)break}return null}function tA(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Na(e.nextSibling),e===null))return null;return e}function iy(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Na(e.nextSibling),e===null))return null;return e}function Tm(e){return e.data==="$?"||e.data==="$~"}function Am(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function eA(e,i){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||s.readyState!=="loading")i();else{var u=function(){i(),s.removeEventListener("DOMContentLoaded",u)};s.addEventListener("DOMContentLoaded",u),e._reactRetry=u}}function Na(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Rm=null;function ay(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(i===0)return Na(e.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}e=e.nextSibling}return null}function ry(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return e;i--}else s!=="/$"&&s!=="/&"||i++}e=e.previousSibling}return null}function sy(e,i,s){switch(i=$f(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Ju(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Dn(e)}var La=new Map,oy=new Set;function th(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Hr=H.d;H.d={f:nA,r:iA,D:aA,C:rA,L:sA,m:oA,X:uA,S:lA,M:cA};function nA(){var e=Hr.f(),i=Wf();return e||i}function iA(e){var i=gi(e);i!==null&&i.tag===5&&i.type==="form"?bx(i):Hr.r(e)}var Ml=typeof document>"u"?null:document;function ly(e,i,s){var u=Ml;if(u&&typeof i=="string"&&i){var h=an(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),oy.has(h)||(oy.add(h),e={rel:e,crossOrigin:s,href:i},u.querySelector(h)===null&&(i=u.createElement("link"),hi(i,"link",e),De(i),u.head.appendChild(i)))}}function aA(e){Hr.D(e),ly("dns-prefetch",e,null)}function rA(e,i){Hr.C(e,i),ly("preconnect",e,i)}function sA(e,i,s){Hr.L(e,i,s);var u=Ml;if(u&&e&&i){var h='link[rel="preload"][as="'+an(i)+'"]';i==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+an(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+an(s.imageSizes)+'"]')):h+='[href="'+an(e)+'"]';var m=h;switch(i){case"style":m=El(e);break;case"script":m=bl(e)}La.has(m)||(e=v({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),La.set(m,e),u.querySelector(h)!==null||i==="style"&&u.querySelector($u(m))||i==="script"&&u.querySelector(tc(m))||(i=u.createElement("link"),hi(i,"link",e),De(i),u.head.appendChild(i)))}}function oA(e,i){Hr.m(e,i);var s=Ml;if(s&&e){var u=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+an(u)+'"][href="'+an(e)+'"]',m=h;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=bl(e)}if(!La.has(m)&&(e=v({rel:"modulepreload",href:e},i),La.set(m,e),s.querySelector(h)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(tc(m)))return}u=s.createElement("link"),hi(u,"link",e),De(u),s.head.appendChild(u)}}}function lA(e,i,s){Hr.S(e,i,s);var u=Ml;if(u&&e){var h=Mn(u).hoistableStyles,m=El(e);i=i||"default";var b=h.get(m);if(!b){var L={loading:0,preload:null};if(b=u.querySelector($u(m)))L.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":i},s),(s=La.get(m))&&Cm(e,s);var W=b=u.createElement("link");De(W),hi(W,"link",e),W._p=new Promise(function(ot,gt){W.onload=ot,W.onerror=gt}),W.addEventListener("load",function(){L.loading|=1}),W.addEventListener("error",function(){L.loading|=2}),L.loading|=4,eh(b,i,u)}b={type:"stylesheet",instance:b,count:1,state:L},h.set(m,b)}}}function uA(e,i){Hr.X(e,i);var s=Ml;if(s&&e){var u=Mn(s).hoistableScripts,h=bl(e),m=u.get(h);m||(m=s.querySelector(tc(h)),m||(e=v({src:e,async:!0},i),(i=La.get(h))&&wm(e,i),m=s.createElement("script"),De(m),hi(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function cA(e,i){Hr.M(e,i);var s=Ml;if(s&&e){var u=Mn(s).hoistableScripts,h=bl(e),m=u.get(h);m||(m=s.querySelector(tc(h)),m||(e=v({src:e,async:!0,type:"module"},i),(i=La.get(h))&&wm(e,i),m=s.createElement("script"),De(m),hi(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function uy(e,i,s,u){var h=(h=it.current)?th(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=El(s.href),s=Mn(h).hoistableStyles,u=s.get(i),u||(u={type:"style",instance:null,count:0,state:null},s.set(i,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=El(s.href);var m=Mn(h).hoistableStyles,b=m.get(e);if(b||(h=h.ownerDocument||h,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,b),(m=h.querySelector($u(e)))&&!m._p&&(b.instance=m,b.state.loading=5),La.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},La.set(e,s),m||fA(h,e,s,b.state))),i&&u===null)throw Error(a(528,""));return b}if(i&&u!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=bl(s),s=Mn(h).hoistableScripts,u=s.get(i),u||(u={type:"script",instance:null,count:0,state:null},s.set(i,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function El(e){return'href="'+an(e)+'"'}function $u(e){return'link[rel="stylesheet"]['+e+"]"}function cy(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function fA(e,i,s,u){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?u.loading=1:(i=e.createElement("link"),u.preload=i,i.addEventListener("load",function(){return u.loading|=1}),i.addEventListener("error",function(){return u.loading|=2}),hi(i,"link",s),De(i),e.head.appendChild(i))}function bl(e){return'[src="'+an(e)+'"]'}function tc(e){return"script[async]"+e}function fy(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var u=e.querySelector('style[data-href~="'+an(s.href)+'"]');if(u)return i.instance=u,De(u),u;var h=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return u=(e.ownerDocument||e).createElement("style"),De(u),hi(u,"style",h),eh(u,s.precedence,e),i.instance=u;case"stylesheet":h=El(s.href);var m=e.querySelector($u(h));if(m)return i.state.loading|=4,i.instance=m,De(m),m;u=cy(s),(h=La.get(h))&&Cm(u,h),m=(e.ownerDocument||e).createElement("link"),De(m);var b=m;return b._p=new Promise(function(L,W){b.onload=L,b.onerror=W}),hi(m,"link",u),i.state.loading|=4,eh(m,s.precedence,e),i.instance=m;case"script":return m=bl(s.src),(h=e.querySelector(tc(m)))?(i.instance=h,De(h),h):(u=s,(h=La.get(m))&&(u=v({},s),wm(u,h)),e=e.ownerDocument||e,h=e.createElement("script"),De(h),hi(h,"link",u),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(u=i.instance,i.state.loading|=4,eh(u,s.precedence,e));return i.instance}function eh(e,i,s){for(var u=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=u.length?u[u.length-1]:null,m=h,b=0;b<u.length;b++){var L=u[b];if(L.dataset.precedence===i)m=L;else if(m!==h)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function Cm(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function wm(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var nh=null;function hy(e,i,s){if(nh===null){var u=new Map,h=nh=new Map;h.set(s,u)}else h=nh,u=h.get(s),u||(u=new Map,h.set(s,u));if(u.has(e))return u;for(u.set(e,null),s=s.getElementsByTagName(e),h=0;h<s.length;h++){var m=s[h];if(!(m[Sn]||m[xe]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(i)||"";b=e+b;var L=u.get(b);L?L.push(m):u.set(b,[m])}}return u}function dy(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function hA(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function py(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function dA(e,i,s,u){if(s.type==="stylesheet"&&(typeof u.media!="string"||matchMedia(u.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var h=El(u.href),m=i.querySelector($u(h));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=ih.bind(e),i.then(e,e)),s.state.loading|=4,s.instance=m,De(m);return}m=i.ownerDocument||i,u=cy(u),(h=La.get(h))&&Cm(u,h),m=m.createElement("link"),De(m);var b=m;b._p=new Promise(function(L,W){b.onload=L,b.onerror=W}),hi(m,"link",u),s.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=ih.bind(e),i.addEventListener("load",s),i.addEventListener("error",s))}}var Dm=0;function pA(e,i){return e.stylesheets&&e.count===0&&rh(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var u=setTimeout(function(){if(e.stylesheets&&rh(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+i);0<e.imgBytes&&Dm===0&&(Dm=62500*jT());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&rh(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Dm?50:800)+i);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(u),clearTimeout(h)}}:null}function ih(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)rh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ah=null;function rh(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ah=new Map,i.forEach(mA,e),ah=null,ih.call(e))}function mA(e,i){if(!(i.state.loading&4)){var s=ah.get(e);if(s)var u=s.get(null);else{s=new Map,ah.set(e,s);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var b=h[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(s.set(b.dataset.precedence,b),u=b)}u&&s.set(null,u)}h=i.instance,b=h.getAttribute("data-precedence"),m=s.get(b)||u,m===u&&s.set(null,h),s.set(b,h),this.count++,u=ih.bind(this),h.addEventListener("load",u),h.addEventListener("error",u),m?m.parentNode.insertBefore(h,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var ec={$$typeof:D,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function _A(e,i,s,u,h,m,b,L,W){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=u,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=W,this.incompleteTransitions=new Map}function my(e,i,s,u,h,m,b,L,W,ot,gt,yt){return e=new _A(e,i,s,b,W,ot,gt,yt,L),i=1,m===!0&&(i|=24),m=aa(3,null,null,i),e.current=m,m.stateNode=e,i=up(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:u,isDehydrated:s,cache:i},dp(m),e}function _y(e){return e?(e=el,e):el}function gy(e,i,s,u,h,m){h=_y(h),u.context===null?u.context=h:u.pendingContext=h,u=ds(i),u.payload={element:s},m=m===void 0?null:m,m!==null&&(u.callback=m),s=ps(e,u,i),s!==null&&(Wi(s,e,i),Lu(s,e,i))}function vy(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function Um(e,i){vy(e,i),(e=e.alternate)&&vy(e,i)}function xy(e){if(e.tag===13||e.tag===31){var i=ao(e,67108864);i!==null&&Wi(i,e,67108864),Um(e,67108864)}}function Sy(e){if(e.tag===13||e.tag===31){var i=ua();i=fe(i);var s=ao(e,i);s!==null&&Wi(s,e,i),Um(e,i)}}var sh=!0;function gA(e,i,s,u){var h=F.T;F.T=null;var m=H.p;try{H.p=2,Nm(e,i,s,u)}finally{H.p=m,F.T=h}}function vA(e,i,s,u){var h=F.T;F.T=null;var m=H.p;try{H.p=8,Nm(e,i,s,u)}finally{H.p=m,F.T=h}}function Nm(e,i,s,u){if(sh){var h=Lm(u);if(h===null)vm(e,i,u,oh,s),My(e,u);else if(SA(h,e,i,s,u))u.stopPropagation();else if(My(e,u),i&4&&-1<xA.indexOf(e)){for(;h!==null;){var m=gi(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=Rt(m.pendingLanes);if(b!==0){var L=m;for(L.pendingLanes|=2,L.entangledLanes|=2;b;){var W=1<<31-Ht(b);L.entanglements[1]|=W,b&=~W}sr(m),($e&6)===0&&(kf=Lt()+500,Zu(0))}}break;case 31:case 13:L=ao(m,2),L!==null&&Wi(L,m,2),Wf(),Um(m,2)}if(m=Lm(u),m===null&&vm(e,i,u,oh,s),m===h)break;h=m}h!==null&&u.stopPropagation()}else vm(e,i,u,null,s)}}function Lm(e){return e=Pd(e),Om(e)}var oh=null;function Om(e){if(oh=null,e=yn(e),e!==null){var i=l(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=c(i),e!==null)return e;e=null}else if(s===31){if(e=f(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return oh=e,null}function yy(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Me()){case z:return 2;case R:return 8;case Q:case _t:return 32;case bt:return 268435456;default:return 32}default:return 32}}var Pm=!1,Ts=null,As=null,Rs=null,nc=new Map,ic=new Map,Cs=[],xA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function My(e,i){switch(e){case"focusin":case"focusout":Ts=null;break;case"dragenter":case"dragleave":As=null;break;case"mouseover":case"mouseout":Rs=null;break;case"pointerover":case"pointerout":nc.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ic.delete(i.pointerId)}}function ac(e,i,s,u,h,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:s,eventSystemFlags:u,nativeEvent:m,targetContainers:[h]},i!==null&&(i=gi(i),i!==null&&xy(i)),e):(e.eventSystemFlags|=u,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function SA(e,i,s,u,h){switch(i){case"focusin":return Ts=ac(Ts,e,i,s,u,h),!0;case"dragenter":return As=ac(As,e,i,s,u,h),!0;case"mouseover":return Rs=ac(Rs,e,i,s,u,h),!0;case"pointerover":var m=h.pointerId;return nc.set(m,ac(nc.get(m)||null,e,i,s,u,h)),!0;case"gotpointercapture":return m=h.pointerId,ic.set(m,ac(ic.get(m)||null,e,i,s,u,h)),!0}return!1}function Ey(e){var i=yn(e.target);if(i!==null){var s=l(i);if(s!==null){if(i=s.tag,i===13){if(i=c(s),i!==null){e.blockedOn=i,mn(e.priority,function(){Sy(s)});return}}else if(i===31){if(i=f(s),i!==null){e.blockedOn=i,mn(e.priority,function(){Sy(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lh(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=Lm(e.nativeEvent);if(s===null){s=e.nativeEvent;var u=new s.constructor(s.type,s);Od=u,s.target.dispatchEvent(u),Od=null}else return i=gi(s),i!==null&&xy(i),e.blockedOn=s,!1;i.shift()}return!0}function by(e,i,s){lh(e)&&s.delete(i)}function yA(){Pm=!1,Ts!==null&&lh(Ts)&&(Ts=null),As!==null&&lh(As)&&(As=null),Rs!==null&&lh(Rs)&&(Rs=null),nc.forEach(by),ic.forEach(by)}function uh(e,i){e.blockedOn===i&&(e.blockedOn=null,Pm||(Pm=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,yA)))}var ch=null;function Ty(e){ch!==e&&(ch=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ch===e&&(ch=null);for(var i=0;i<e.length;i+=3){var s=e[i],u=e[i+1],h=e[i+2];if(typeof u!="function"){if(Om(u||s)===null)continue;break}var m=gi(s);m!==null&&(e.splice(i,3),i-=3,Lp(m,{pending:!0,data:h,method:s.method,action:u},u,h))}}))}function Tl(e){function i(W){return uh(W,e)}Ts!==null&&uh(Ts,e),As!==null&&uh(As,e),Rs!==null&&uh(Rs,e),nc.forEach(i),ic.forEach(i);for(var s=0;s<Cs.length;s++){var u=Cs[s];u.blockedOn===e&&(u.blockedOn=null)}for(;0<Cs.length&&(s=Cs[0],s.blockedOn===null);)Ey(s),s.blockedOn===null&&Cs.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(u=0;u<s.length;u+=3){var h=s[u],m=s[u+1],b=h[be]||null;if(typeof m=="function")b||Ty(s);else if(b){var L=null;if(m&&m.hasAttribute("formAction")){if(h=m,b=m[be]||null)L=b.formAction;else if(Om(h)!==null)continue}else L=b.action;typeof L=="function"?s[u+1]=L:(s.splice(u,3),u-=3),Ty(s)}}}function Ay(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(b){return h=b})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),u||setTimeout(s,20)}function s(){if(!u&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var u=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){u=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function zm(e){this._internalRoot=e}fh.prototype.render=zm.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,u=ua();gy(s,u,e,i,null,null)},fh.prototype.unmount=zm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;gy(e.current,2,null,e,null,null),Wf(),i[Fe]=null}};function fh(e){this._internalRoot=e}fh.prototype.unstable_scheduleHydration=function(e){if(e){var i=Re();e={blockedOn:null,target:e,priority:i};for(var s=0;s<Cs.length&&i!==0&&i<Cs[s].priority;s++);Cs.splice(s,0,e),s===0&&Ey(e)}};var Ry=t.version;if(Ry!=="19.2.6")throw Error(a(527,Ry,"19.2.6"));H.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=d(i),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var MA={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hh.isDisabled&&hh.supportsFiber)try{dt=hh.inject(MA),pt=hh}catch{}}return sc.createRoot=function(e,i){if(!r(e))throw Error(a(299));var s=!1,u="",h=Ox,m=Px,b=zx;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError)),i=my(e,1,!1,null,null,s,u,null,h,m,b,Ay),e[Fe]=i.current,gm(e),new zm(i)},sc.hydrateRoot=function(e,i,s){if(!r(e))throw Error(a(299));var u=!1,h="",m=Ox,b=Px,L=zx,W=null;return s!=null&&(s.unstable_strictMode===!0&&(u=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(b=s.onCaughtError),s.onRecoverableError!==void 0&&(L=s.onRecoverableError),s.formState!==void 0&&(W=s.formState)),i=my(e,1,!0,i,s??null,u,h,W,m,b,L,Ay),i.context=_y(null),s=i.current,u=ua(),u=fe(u),h=ds(u),h.callback=null,ps(s,h,u),s=u,i.current.lanes=s,Nt(i,s),sr(i),e[Fe]=i.current,gm(e),new fh(i)},sc.version="19.2.6",sc}var Fy;function NA(){if(Fy)return Bm.exports;Fy=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Bm.exports=UA(),Bm.exports}var LA=NA();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ng="184",OA=0,Iy=1,PA=2,jh=1,zA=2,vc=3,es=0,Zi=1,jr=2,Jr=0,Kl=1,By=2,Hy=3,Gy=4,FA=5,Co=100,IA=101,BA=102,HA=103,GA=104,VA=200,kA=201,XA=202,WA=203,H_=204,G_=205,YA=206,qA=207,jA=208,ZA=209,KA=210,QA=211,JA=212,$A=213,tR=214,V_=0,k_=1,X_=2,ru=3,W_=4,Y_=5,q_=6,j_=7,S1=0,eR=1,nR=2,gr=0,y1=1,M1=2,E1=3,b1=4,T1=5,A1=6,R1=7,C1=300,Vo=301,su=302,km=303,Xm=304,Ad=306,ud=1e3,Kr=1001,Z_=1002,di=1003,iR=1004,dh=1005,Ai=1006,Wm=1007,Do=1008,ga=1009,w1=1010,D1=1011,Bc=1012,ig=1013,yr=1014,dr=1015,ns=1016,ag=1017,rg=1018,Hc=1020,U1=35902,N1=35899,L1=1021,O1=1022,$a=1023,is=1026,Uo=1027,P1=1028,sg=1029,ko=1030,og=1031,lg=1033,Zh=33776,Kh=33777,Qh=33778,Jh=33779,K_=35840,Q_=35841,J_=35842,$_=35843,t0=36196,e0=37492,n0=37496,i0=37488,a0=37489,cd=37490,r0=37491,s0=37808,o0=37809,l0=37810,u0=37811,c0=37812,f0=37813,h0=37814,d0=37815,p0=37816,m0=37817,_0=37818,g0=37819,v0=37820,x0=37821,S0=36492,y0=36494,M0=36495,E0=36283,b0=36284,fd=36285,T0=36286,aR=3200,A0=0,rR=1,Fs="",pa="srgb",hd="srgb-linear",dd="linear",un="srgb",Al=7680,Vy=519,sR=512,oR=513,lR=514,ug=515,uR=516,cR=517,cg=518,fR=519,ky=35044,Xy="300 es",pr=2e3,Gc=2001;function hR(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Vc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function dR(){const o=Vc("canvas");return o.style.display="block",o}const Wy={};function Yy(...o){const t="THREE."+o.shift();console.log(t,...o)}function z1(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=o[1];n&&n.isStackTrace?o[0]+=" "+n.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function _e(...o){o=z1(o);const t="THREE."+o.shift();{const n=o[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...o)}}function Ze(...o){o=z1(o);const t="THREE."+o.shift();{const n=o[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...o)}}function R0(...o){const t=o.join(" ");t in Wy||(Wy[t]=!0,_e(...o))}function pR(o,t,n){return new Promise(function(a,r){function l(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:a()}}setTimeout(l,n)})}const mR={[V_]:k_,[X_]:q_,[W_]:j_,[ru]:Y_,[k_]:V_,[q_]:X_,[j_]:W_,[Y_]:ru};class qo{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const r=a[t];if(r!==void 0){const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const r=a.slice(0);for(let l=0,c=r.length;l<c;l++)r[l].call(this,t);t.target=null}}}const Si=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ym=Math.PI/180,C0=180/Math.PI;function $c(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Si[o&255]+Si[o>>8&255]+Si[o>>16&255]+Si[o>>24&255]+"-"+Si[t&255]+Si[t>>8&255]+"-"+Si[t>>16&15|64]+Si[t>>24&255]+"-"+Si[n&63|128]+Si[n>>8&255]+"-"+Si[n>>16&255]+Si[n>>24&255]+Si[a&255]+Si[a>>8&255]+Si[a>>16&255]+Si[a>>24&255]).toLowerCase()}function Ge(o,t,n){return Math.max(t,Math.min(n,o))}function _R(o,t){return(o%t+t)%t}function qm(o,t,n){return(1-n)*o+n*t}function oc(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Yi(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Wg=class Wg{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,r=t.elements;return this.x=r[0]*n+r[3]*a+r[6],this.y=r[1]*n+r[4]*a+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Ge(this.x,t.x,n.x),this.y=Ge(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Ge(this.x,t,n),this.y=Ge(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ge(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Ge(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),r=Math.sin(n),l=this.x-t.x,c=this.y-t.y;return this.x=l*a-c*r+t.x,this.y=l*r+c*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wg.prototype.isVector2=!0;let pe=Wg;class mu{constructor(t=0,n=0,a=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=r}static slerpFlat(t,n,a,r,l,c,f){let p=a[r+0],d=a[r+1],_=a[r+2],v=a[r+3],g=l[c+0],x=l[c+1],M=l[c+2],E=l[c+3];if(v!==E||p!==g||d!==x||_!==M){let S=p*g+d*x+_*M+v*E;S<0&&(g=-g,x=-x,M=-M,E=-E,S=-S);let y=1-f;if(S<.9995){const A=Math.acos(S),D=Math.sin(A);y=Math.sin(y*A)/D,f=Math.sin(f*A)/D,p=p*y+g*f,d=d*y+x*f,_=_*y+M*f,v=v*y+E*f}else{p=p*y+g*f,d=d*y+x*f,_=_*y+M*f,v=v*y+E*f;const A=1/Math.sqrt(p*p+d*d+_*_+v*v);p*=A,d*=A,_*=A,v*=A}}t[n]=p,t[n+1]=d,t[n+2]=_,t[n+3]=v}static multiplyQuaternionsFlat(t,n,a,r,l,c){const f=a[r],p=a[r+1],d=a[r+2],_=a[r+3],v=l[c],g=l[c+1],x=l[c+2],M=l[c+3];return t[n]=f*M+_*v+p*x-d*g,t[n+1]=p*M+_*g+d*v-f*x,t[n+2]=d*M+_*x+f*g-p*v,t[n+3]=_*M-f*v-p*g-d*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,r){return this._x=t,this._y=n,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,r=t._y,l=t._z,c=t._order,f=Math.cos,p=Math.sin,d=f(a/2),_=f(r/2),v=f(l/2),g=p(a/2),x=p(r/2),M=p(l/2);switch(c){case"XYZ":this._x=g*_*v+d*x*M,this._y=d*x*v-g*_*M,this._z=d*_*M+g*x*v,this._w=d*_*v-g*x*M;break;case"YXZ":this._x=g*_*v+d*x*M,this._y=d*x*v-g*_*M,this._z=d*_*M-g*x*v,this._w=d*_*v+g*x*M;break;case"ZXY":this._x=g*_*v-d*x*M,this._y=d*x*v+g*_*M,this._z=d*_*M+g*x*v,this._w=d*_*v-g*x*M;break;case"ZYX":this._x=g*_*v-d*x*M,this._y=d*x*v+g*_*M,this._z=d*_*M-g*x*v,this._w=d*_*v+g*x*M;break;case"YZX":this._x=g*_*v+d*x*M,this._y=d*x*v+g*_*M,this._z=d*_*M-g*x*v,this._w=d*_*v-g*x*M;break;case"XZY":this._x=g*_*v-d*x*M,this._y=d*x*v-g*_*M,this._z=d*_*M+g*x*v,this._w=d*_*v+g*x*M;break;default:_e("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,r=Math.sin(a);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],r=n[4],l=n[8],c=n[1],f=n[5],p=n[9],d=n[2],_=n[6],v=n[10],g=a+f+v;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(_-p)*x,this._y=(l-d)*x,this._z=(c-r)*x}else if(a>f&&a>v){const x=2*Math.sqrt(1+a-f-v);this._w=(_-p)/x,this._x=.25*x,this._y=(r+c)/x,this._z=(l+d)/x}else if(f>v){const x=2*Math.sqrt(1+f-a-v);this._w=(l-d)/x,this._x=(r+c)/x,this._y=.25*x,this._z=(p+_)/x}else{const x=2*Math.sqrt(1+v-a-f);this._w=(c-r)/x,this._x=(l+d)/x,this._y=(p+_)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const r=Math.min(1,n/a);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,r=t._y,l=t._z,c=t._w,f=n._x,p=n._y,d=n._z,_=n._w;return this._x=a*_+c*f+r*d-l*p,this._y=r*_+c*p+l*f-a*d,this._z=l*_+c*d+a*p-r*f,this._w=c*_-a*f-r*p-l*d,this._onChangeCallback(),this}slerp(t,n){let a=t._x,r=t._y,l=t._z,c=t._w,f=this.dot(t);f<0&&(a=-a,r=-r,l=-l,c=-c,f=-f);let p=1-n;if(f<.9995){const d=Math.acos(f),_=Math.sin(d);p=Math.sin(p*d)/_,n=Math.sin(n*d)/_,this._x=this._x*p+a*n,this._y=this._y*p+r*n,this._z=this._z*p+l*n,this._w=this._w*p+c*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+r*n,this._z=this._z*p+l*n,this._w=this._w*p+c*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(r*Math.sin(t),r*Math.cos(t),l*Math.sin(n),l*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Yg=class Yg{constructor(t=0,n=0,a=0){this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(qy.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(qy.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,r=this.z,l=t.elements;return this.x=l[0]*n+l[3]*a+l[6]*r,this.y=l[1]*n+l[4]*a+l[7]*r,this.z=l[2]*n+l[5]*a+l[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,r=this.z,l=t.elements,c=1/(l[3]*n+l[7]*a+l[11]*r+l[15]);return this.x=(l[0]*n+l[4]*a+l[8]*r+l[12])*c,this.y=(l[1]*n+l[5]*a+l[9]*r+l[13])*c,this.z=(l[2]*n+l[6]*a+l[10]*r+l[14])*c,this}applyQuaternion(t){const n=this.x,a=this.y,r=this.z,l=t.x,c=t.y,f=t.z,p=t.w,d=2*(c*r-f*a),_=2*(f*n-l*r),v=2*(l*a-c*n);return this.x=n+p*d+c*v-f*_,this.y=a+p*_+f*d-l*v,this.z=r+p*v+l*_-c*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,r=this.z,l=t.elements;return this.x=l[0]*n+l[4]*a+l[8]*r,this.y=l[1]*n+l[5]*a+l[9]*r,this.z=l[2]*n+l[6]*a+l[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Ge(this.x,t.x,n.x),this.y=Ge(this.y,t.y,n.y),this.z=Ge(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Ge(this.x,t,n),this.y=Ge(this.y,t,n),this.z=Ge(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ge(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,r=t.y,l=t.z,c=n.x,f=n.y,p=n.z;return this.x=r*p-l*f,this.y=l*c-a*p,this.z=a*f-r*c,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return jm.copy(this).projectOnVector(t),this.sub(jm)}reflect(t){return this.sub(jm.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Ge(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,r=this.z-t.z;return n*n+a*a+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const r=Math.sin(n)*t;return this.x=r*Math.sin(a),this.y=Math.cos(n)*t,this.z=r*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yg.prototype.isVector3=!0;let lt=Yg;const jm=new lt,qy=new mu,qg=class qg{constructor(t,n,a,r,l,c,f,p,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,r,l,c,f,p,d)}set(t,n,a,r,l,c,f,p,d){const _=this.elements;return _[0]=t,_[1]=r,_[2]=f,_[3]=n,_[4]=l,_[5]=p,_[6]=a,_[7]=c,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,r=n.elements,l=this.elements,c=a[0],f=a[3],p=a[6],d=a[1],_=a[4],v=a[7],g=a[2],x=a[5],M=a[8],E=r[0],S=r[3],y=r[6],A=r[1],D=r[4],C=r[7],P=r[2],N=r[5],w=r[8];return l[0]=c*E+f*A+p*P,l[3]=c*S+f*D+p*N,l[6]=c*y+f*C+p*w,l[1]=d*E+_*A+v*P,l[4]=d*S+_*D+v*N,l[7]=d*y+_*C+v*w,l[2]=g*E+x*A+M*P,l[5]=g*S+x*D+M*N,l[8]=g*y+x*C+M*w,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],r=t[2],l=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8];return n*c*_-n*f*d-a*l*_+a*f*p+r*l*d-r*c*p}invert(){const t=this.elements,n=t[0],a=t[1],r=t[2],l=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8],v=_*c-f*d,g=f*p-_*l,x=d*l-c*p,M=n*v+a*g+r*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return t[0]=v*E,t[1]=(r*d-_*a)*E,t[2]=(f*a-r*c)*E,t[3]=g*E,t[4]=(_*n-r*p)*E,t[5]=(r*l-f*n)*E,t[6]=x*E,t[7]=(a*p-d*n)*E,t[8]=(c*n-a*l)*E,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,r,l,c,f){const p=Math.cos(l),d=Math.sin(l);return this.set(a*p,a*d,-a*(p*c+d*f)+c+t,-r*d,r*p,-r*(-d*c+p*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(Zm.makeScale(t,n)),this}rotate(t){return this.premultiply(Zm.makeRotation(-t)),this}translate(t,n){return this.premultiply(Zm.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let r=0;r<9;r++)if(n[r]!==a[r])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}};qg.prototype.isMatrix3=!0;let Ee=qg;const Zm=new Ee,jy=new Ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zy=new Ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gR(){const o={enabled:!0,workingColorSpace:hd,spaces:{},convert:function(r,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===un&&(r.r=$r(r.r),r.g=$r(r.g),r.b=$r(r.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(r.applyMatrix3(this.spaces[l].toXYZ),r.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===un&&(r.r=Ql(r.r),r.g=Ql(r.g),r.b=Ql(r.b))),r},workingToColorSpace:function(r,l){return this.convert(r,this.workingColorSpace,l)},colorSpaceToWorking:function(r,l){return this.convert(r,l,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Fs?dd:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,l=this.workingColorSpace){return r.fromArray(this.spaces[l].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,l,c){return r.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,l){return R0("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(r,l)},toWorkingColorSpace:function(r,l){return R0("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(r,l)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[hd]:{primaries:t,whitePoint:a,transfer:dd,toXYZ:jy,fromXYZ:Zy,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:pa},outputColorSpaceConfig:{drawingBufferColorSpace:pa}},[pa]:{primaries:t,whitePoint:a,transfer:un,toXYZ:jy,fromXYZ:Zy,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:pa}}}),o}const We=gR();function $r(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ql(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Rl;class vR{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{Rl===void 0&&(Rl=Vc("canvas")),Rl.width=t.width,Rl.height=t.height;const r=Rl.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),a=Rl}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Vc("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const r=a.getImageData(0,0,t.width,t.height),l=r.data;for(let c=0;c<l.length;c++)l[c]=$r(l[c]/255)*255;return a.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor($r(n[a]/255)*255):n[a]=$r(n[a]);return{data:n,width:t.width,height:t.height}}else return _e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xR=0;class fg{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xR++}),this.uuid=$c(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let l;if(Array.isArray(r)){l=[];for(let c=0,f=r.length;c<f;c++)r[c].isDataTexture?l.push(Km(r[c].image)):l.push(Km(r[c]))}else l=Km(r);a.url=l}return n||(t.images[this.uuid]=a),a}}function Km(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?vR.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(_e("Texture: Unable to serialize Texture."),{})}let SR=0;const Qm=new lt;class Ri extends qo{constructor(t=Ri.DEFAULT_IMAGE,n=Ri.DEFAULT_MAPPING,a=Kr,r=Kr,l=Ai,c=Do,f=$a,p=ga,d=Ri.DEFAULT_ANISOTROPY,_=Fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SR++}),this.uuid=$c(),this.name="",this.source=new fg(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=l,this.minFilter=c,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qm).x}get height(){return this.source.getSize(Qm).y}get depth(){return this.source.getSize(Qm).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){_e(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){_e(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&a&&r.isVector2&&a.isVector2||r&&a&&r.isVector3&&a.isVector3||r&&a&&r.isMatrix3&&a.isMatrix3?r.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==C1)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ud:t.x=t.x-Math.floor(t.x);break;case Kr:t.x=t.x<0?0:1;break;case Z_:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ud:t.y=t.y-Math.floor(t.y);break;case Kr:t.y=t.y<0?0:1;break;case Z_:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ri.DEFAULT_IMAGE=null;Ri.DEFAULT_MAPPING=C1;Ri.DEFAULT_ANISOTROPY=1;const jg=class jg{constructor(t=0,n=0,a=0,r=1){this.x=t,this.y=n,this.z=a,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,r){return this.x=t,this.y=n,this.z=a,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,r=this.z,l=this.w,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*r+c[12]*l,this.y=c[1]*n+c[5]*a+c[9]*r+c[13]*l,this.z=c[2]*n+c[6]*a+c[10]*r+c[14]*l,this.w=c[3]*n+c[7]*a+c[11]*r+c[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,r,l;const p=t.elements,d=p[0],_=p[4],v=p[8],g=p[1],x=p[5],M=p[9],E=p[2],S=p[6],y=p[10];if(Math.abs(_-g)<.01&&Math.abs(v-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+E)<.1&&Math.abs(M+S)<.1&&Math.abs(d+x+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(d+1)/2,C=(x+1)/2,P=(y+1)/2,N=(_+g)/4,w=(v+E)/4,T=(M+S)/4;return D>C&&D>P?D<.01?(a=0,r=.707106781,l=.707106781):(a=Math.sqrt(D),r=N/a,l=w/a):C>P?C<.01?(a=.707106781,r=0,l=.707106781):(r=Math.sqrt(C),a=N/r,l=T/r):P<.01?(a=.707106781,r=.707106781,l=0):(l=Math.sqrt(P),a=w/l,r=T/l),this.set(a,r,l,n),this}let A=Math.sqrt((S-M)*(S-M)+(v-E)*(v-E)+(g-_)*(g-_));return Math.abs(A)<.001&&(A=1),this.x=(S-M)/A,this.y=(v-E)/A,this.z=(g-_)/A,this.w=Math.acos((d+x+y-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Ge(this.x,t.x,n.x),this.y=Ge(this.y,t.y,n.y),this.z=Ge(this.z,t.z,n.z),this.w=Ge(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Ge(this.x,t,n),this.y=Ge(this.y,t,n),this.z=Ge(this.z,t,n),this.w=Ge(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ge(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};jg.prototype.isVector4=!0;let zn=jg;class yR extends qo{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new zn(0,0,t,n),this.scissorTest=!1,this.viewport=new zn(0,0,t,n),this.textures=[];const r={width:t,height:n,depth:a.depth},l=new Ri(r),c=a.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:Ai,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let r=0,l=this.textures.length;r<l;r++)this.textures[r].image.width=t,this.textures[r].image.height=n,this.textures[r].image.depth=a,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},t.textures[n].image);this.textures[n].source=new fg(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vr extends yR{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class F1 extends Ri{constructor(t=null,n=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:r},this.magFilter=di,this.minFilter=di,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class MR extends Ri{constructor(t=null,n=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:r},this.magFilter=di,this.minFilter=di,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Td=class Td{constructor(t,n,a,r,l,c,f,p,d,_,v,g,x,M,E,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,r,l,c,f,p,d,_,v,g,x,M,E,S)}set(t,n,a,r,l,c,f,p,d,_,v,g,x,M,E,S){const y=this.elements;return y[0]=t,y[4]=n,y[8]=a,y[12]=r,y[1]=l,y[5]=c,y[9]=f,y[13]=p,y[2]=d,y[6]=_,y[10]=v,y[14]=g,y[3]=x,y[7]=M,y[11]=E,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Td().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,a=t.elements,r=1/Cl.setFromMatrixColumn(t,0).length(),l=1/Cl.setFromMatrixColumn(t,1).length(),c=1/Cl.setFromMatrixColumn(t,2).length();return n[0]=a[0]*r,n[1]=a[1]*r,n[2]=a[2]*r,n[3]=0,n[4]=a[4]*l,n[5]=a[5]*l,n[6]=a[6]*l,n[7]=0,n[8]=a[8]*c,n[9]=a[9]*c,n[10]=a[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,r=t.y,l=t.z,c=Math.cos(a),f=Math.sin(a),p=Math.cos(r),d=Math.sin(r),_=Math.cos(l),v=Math.sin(l);if(t.order==="XYZ"){const g=c*_,x=c*v,M=f*_,E=f*v;n[0]=p*_,n[4]=-p*v,n[8]=d,n[1]=x+M*d,n[5]=g-E*d,n[9]=-f*p,n[2]=E-g*d,n[6]=M+x*d,n[10]=c*p}else if(t.order==="YXZ"){const g=p*_,x=p*v,M=d*_,E=d*v;n[0]=g+E*f,n[4]=M*f-x,n[8]=c*d,n[1]=c*v,n[5]=c*_,n[9]=-f,n[2]=x*f-M,n[6]=E+g*f,n[10]=c*p}else if(t.order==="ZXY"){const g=p*_,x=p*v,M=d*_,E=d*v;n[0]=g-E*f,n[4]=-c*v,n[8]=M+x*f,n[1]=x+M*f,n[5]=c*_,n[9]=E-g*f,n[2]=-c*d,n[6]=f,n[10]=c*p}else if(t.order==="ZYX"){const g=c*_,x=c*v,M=f*_,E=f*v;n[0]=p*_,n[4]=M*d-x,n[8]=g*d+E,n[1]=p*v,n[5]=E*d+g,n[9]=x*d-M,n[2]=-d,n[6]=f*p,n[10]=c*p}else if(t.order==="YZX"){const g=c*p,x=c*d,M=f*p,E=f*d;n[0]=p*_,n[4]=E-g*v,n[8]=M*v+x,n[1]=v,n[5]=c*_,n[9]=-f*_,n[2]=-d*_,n[6]=x*v+M,n[10]=g-E*v}else if(t.order==="XZY"){const g=c*p,x=c*d,M=f*p,E=f*d;n[0]=p*_,n[4]=-v,n[8]=d*_,n[1]=g*v+E,n[5]=c*_,n[9]=x*v-M,n[2]=M*v-x,n[6]=f*_,n[10]=E*v+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ER,t,bR)}lookAt(t,n,a){const r=this.elements;return ca.subVectors(t,n),ca.lengthSq()===0&&(ca.z=1),ca.normalize(),Ds.crossVectors(a,ca),Ds.lengthSq()===0&&(Math.abs(a.z)===1?ca.x+=1e-4:ca.z+=1e-4,ca.normalize(),Ds.crossVectors(a,ca)),Ds.normalize(),ph.crossVectors(ca,Ds),r[0]=Ds.x,r[4]=ph.x,r[8]=ca.x,r[1]=Ds.y,r[5]=ph.y,r[9]=ca.y,r[2]=Ds.z,r[6]=ph.z,r[10]=ca.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,r=n.elements,l=this.elements,c=a[0],f=a[4],p=a[8],d=a[12],_=a[1],v=a[5],g=a[9],x=a[13],M=a[2],E=a[6],S=a[10],y=a[14],A=a[3],D=a[7],C=a[11],P=a[15],N=r[0],w=r[4],T=r[8],O=r[12],B=r[1],G=r[5],k=r[9],et=r[13],tt=r[2],X=r[6],F=r[10],H=r[14],J=r[3],ft=r[7],V=r[11],I=r[15];return l[0]=c*N+f*B+p*tt+d*J,l[4]=c*w+f*G+p*X+d*ft,l[8]=c*T+f*k+p*F+d*V,l[12]=c*O+f*et+p*H+d*I,l[1]=_*N+v*B+g*tt+x*J,l[5]=_*w+v*G+g*X+x*ft,l[9]=_*T+v*k+g*F+x*V,l[13]=_*O+v*et+g*H+x*I,l[2]=M*N+E*B+S*tt+y*J,l[6]=M*w+E*G+S*X+y*ft,l[10]=M*T+E*k+S*F+y*V,l[14]=M*O+E*et+S*H+y*I,l[3]=A*N+D*B+C*tt+P*J,l[7]=A*w+D*G+C*X+P*ft,l[11]=A*T+D*k+C*F+P*V,l[15]=A*O+D*et+C*H+P*I,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],r=t[8],l=t[12],c=t[1],f=t[5],p=t[9],d=t[13],_=t[2],v=t[6],g=t[10],x=t[14],M=t[3],E=t[7],S=t[11],y=t[15],A=p*x-d*g,D=f*x-d*v,C=f*g-p*v,P=c*x-d*_,N=c*g-p*_,w=c*v-f*_;return n*(E*A-S*D+y*C)-a*(M*A-S*P+y*N)+r*(M*D-E*P+y*w)-l*(M*C-E*N+S*w)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],r=t[2],l=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8],v=t[9],g=t[10],x=t[11],M=t[12],E=t[13],S=t[14],y=t[15],A=n*f-a*c,D=n*p-r*c,C=n*d-l*c,P=a*p-r*f,N=a*d-l*f,w=r*d-l*p,T=_*E-v*M,O=_*S-g*M,B=_*y-x*M,G=v*S-g*E,k=v*y-x*E,et=g*y-x*S,tt=A*et-D*k+C*G+P*B-N*O+w*T;if(tt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/tt;return t[0]=(f*et-p*k+d*G)*X,t[1]=(r*k-a*et-l*G)*X,t[2]=(E*w-S*N+y*P)*X,t[3]=(g*N-v*w-x*P)*X,t[4]=(p*B-c*et-d*O)*X,t[5]=(n*et-r*B+l*O)*X,t[6]=(S*C-M*w-y*D)*X,t[7]=(_*w-g*C+x*D)*X,t[8]=(c*k-f*B+d*T)*X,t[9]=(a*B-n*k-l*T)*X,t[10]=(M*N-E*C+y*A)*X,t[11]=(v*C-_*N-x*A)*X,t[12]=(f*O-c*G-p*T)*X,t[13]=(n*G-a*O+r*T)*X,t[14]=(E*D-M*P-S*A)*X,t[15]=(_*P-v*D+g*A)*X,this}scale(t){const n=this.elements,a=t.x,r=t.y,l=t.z;return n[0]*=a,n[4]*=r,n[8]*=l,n[1]*=a,n[5]*=r,n[9]*=l,n[2]*=a,n[6]*=r,n[10]*=l,n[3]*=a,n[7]*=r,n[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,r))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),r=Math.sin(n),l=1-a,c=t.x,f=t.y,p=t.z,d=l*c,_=l*f;return this.set(d*c+a,d*f-r*p,d*p+r*f,0,d*f+r*p,_*f+a,_*p-r*c,0,d*p-r*f,_*p+r*c,l*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,r,l,c){return this.set(1,a,l,0,t,1,c,0,n,r,1,0,0,0,0,1),this}compose(t,n,a){const r=this.elements,l=n._x,c=n._y,f=n._z,p=n._w,d=l+l,_=c+c,v=f+f,g=l*d,x=l*_,M=l*v,E=c*_,S=c*v,y=f*v,A=p*d,D=p*_,C=p*v,P=a.x,N=a.y,w=a.z;return r[0]=(1-(E+y))*P,r[1]=(x+C)*P,r[2]=(M-D)*P,r[3]=0,r[4]=(x-C)*N,r[5]=(1-(g+y))*N,r[6]=(S+A)*N,r[7]=0,r[8]=(M+D)*w,r[9]=(S-A)*w,r[10]=(1-(g+E))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,a){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const l=this.determinant();if(l===0)return a.set(1,1,1),n.identity(),this;let c=Cl.set(r[0],r[1],r[2]).length();const f=Cl.set(r[4],r[5],r[6]).length(),p=Cl.set(r[8],r[9],r[10]).length();l<0&&(c=-c),ja.copy(this);const d=1/c,_=1/f,v=1/p;return ja.elements[0]*=d,ja.elements[1]*=d,ja.elements[2]*=d,ja.elements[4]*=_,ja.elements[5]*=_,ja.elements[6]*=_,ja.elements[8]*=v,ja.elements[9]*=v,ja.elements[10]*=v,n.setFromRotationMatrix(ja),a.x=c,a.y=f,a.z=p,this}makePerspective(t,n,a,r,l,c,f=pr,p=!1){const d=this.elements,_=2*l/(n-t),v=2*l/(a-r),g=(n+t)/(n-t),x=(a+r)/(a-r);let M,E;if(p)M=l/(c-l),E=c*l/(c-l);else if(f===pr)M=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===Gc)M=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=v,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=M,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,r,l,c,f=pr,p=!1){const d=this.elements,_=2/(n-t),v=2/(a-r),g=-(n+t)/(n-t),x=-(a+r)/(a-r);let M,E;if(p)M=1/(c-l),E=c/(c-l);else if(f===pr)M=-2/(c-l),E=-(c+l)/(c-l);else if(f===Gc)M=-1/(c-l),E=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=v,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=M,d[14]=E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let r=0;r<16;r++)if(n[r]!==a[r])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}};Td.prototype.isMatrix4=!0;let Vn=Td;const Cl=new lt,ja=new Vn,ER=new lt(0,0,0),bR=new lt(1,1,1),Ds=new lt,ph=new lt,ca=new lt,Ky=new Vn,Qy=new mu;class js{constructor(t=0,n=0,a=0,r=js.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,r=this._order){return this._x=t,this._y=n,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const r=t.elements,l=r[0],c=r[4],f=r[8],p=r[1],d=r[5],_=r[9],v=r[2],g=r[6],x=r[10];switch(n){case"XYZ":this._y=Math.asin(Ge(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,x),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Ge(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Ge(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,x),this._y=0);break;default:_e("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return Ky.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ky,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Qy.setFromEuler(this),this.setFromQuaternion(Qy,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}js.DEFAULT_ORDER="XYZ";class I1{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let TR=0;const Jy=new lt,wl=new mu,Gr=new Vn,mh=new lt,lc=new lt,AR=new lt,RR=new mu,$y=new lt(1,0,0),tM=new lt(0,1,0),eM=new lt(0,0,1),nM={type:"added"},CR={type:"removed"},Dl={type:"childadded",child:null},Jm={type:"childremoved",child:null};class Ci extends qo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TR++}),this.uuid=$c(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ci.DEFAULT_UP.clone();const t=new lt,n=new js,a=new mu,r=new lt(1,1,1);function l(){a.setFromEuler(n,!1)}function c(){n.setFromQuaternion(a,void 0,!1)}n._onChange(l),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Vn},normalMatrix:{value:new Ee}}),this.matrix=new Vn,this.matrixWorld=new Vn,this.matrixAutoUpdate=Ci.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new I1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return wl.setFromAxisAngle(t,n),this.quaternion.multiply(wl),this}rotateOnWorldAxis(t,n){return wl.setFromAxisAngle(t,n),this.quaternion.premultiply(wl),this}rotateX(t){return this.rotateOnAxis($y,t)}rotateY(t){return this.rotateOnAxis(tM,t)}rotateZ(t){return this.rotateOnAxis(eM,t)}translateOnAxis(t,n){return Jy.copy(t).applyQuaternion(this.quaternion),this.position.add(Jy.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis($y,t)}translateY(t){return this.translateOnAxis(tM,t)}translateZ(t){return this.translateOnAxis(eM,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gr.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?mh.copy(t):mh.set(t,n,a);const r=this.parent;this.updateWorldMatrix(!0,!1),lc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gr.lookAt(lc,mh,this.up):Gr.lookAt(mh,lc,this.up),this.quaternion.setFromRotationMatrix(Gr),r&&(Gr.extractRotation(r.matrixWorld),wl.setFromRotationMatrix(Gr),this.quaternion.premultiply(wl.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ze("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nM),Dl.child=t,this.dispatchEvent(Dl),Dl.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(CR),Jm.child=t,this.dispatchEvent(Jm),Jm.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gr.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nM),Dl.child=t,this.dispatchEvent(Dl),Dl.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,r=this.children.length;a<r;a++){const c=this.children[a].getObjectByProperty(t,n);if(c!==void 0)return c}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const r=this.children;for(let l=0,c=r.length;l<c;l++)r[l].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lc,t,AR),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lc,RR,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,a=t.y,r=t.z,l=this.matrix.elements;l[12]+=n-l[0]*n-l[4]*a-l[8]*r,l[13]+=a-l[1]*n-l[5]*a-l[9]*r,l[14]+=r-l[2]*n-l[6]*a-l[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let l=0,c=r.length;l<c;l++)r[l].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(f=>({...f})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,_=p.length;d<_;d++){const v=p[d];l(t.shapes,v)}else l(t.shapes,p)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(l(t.materials,this.material[p]));r.material=f}else r.material=l(t.materials,this.material);if(this.children.length>0){r.children=[];for(let f=0;f<this.children.length;f++)r.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];r.animations.push(l(t.animations,p))}}if(n){const f=c(t.geometries),p=c(t.materials),d=c(t.textures),_=c(t.images),v=c(t.shapes),g=c(t.skeletons),x=c(t.animations),M=c(t.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),_.length>0&&(a.images=_),v.length>0&&(a.shapes=v),g.length>0&&(a.skeletons=g),x.length>0&&(a.animations=x),M.length>0&&(a.nodes=M)}return a.object=r,a;function c(f){const p=[];for(const d in f){const _=f[d];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const r=t.children[a];this.add(r.clone())}return this}}Ci.DEFAULT_UP=new lt(0,1,0);Ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class No extends Ci{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wR={type:"move"};class $m{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new No,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new No,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new lt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new lt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new No,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new lt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new lt,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let r=null,l=null,c=null;const f=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){c=!0;for(const E of t.hand.values()){const S=n.getJointPose(E,a),y=this._getHandJoint(d,E);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const _=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],g=_.position.distanceTo(v.position),x=.02,M=.005;d.inputState.pinching&&g>x+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=x-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(l=n.getPose(t.gripSpace,a),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:t,target:this})));f!==null&&(r=n.getPose(t.targetRaySpace,a),r===null&&l!==null&&(r=l),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(wR)))}return f!==null&&(f.visible=r!==null),p!==null&&(p.visible=l!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new No;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}const B1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Us={h:0,s:0,l:0},_h={h:0,s:0,l:0};function t_(o,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(t-o)*6*n:n<1/2?t:n<2/3?o+(t-o)*6*(2/3-n):o}class qe{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=pa){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,We.colorSpaceToWorking(this,n),this}setRGB(t,n,a,r=We.workingColorSpace){return this.r=t,this.g=n,this.b=a,We.colorSpaceToWorking(this,r),this}setHSL(t,n,a,r=We.workingColorSpace){if(t=_R(t,1),n=Ge(n,0,1),a=Ge(a,0,1),n===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+n):a+n-a*n,c=2*a-l;this.r=t_(c,l,t+1/3),this.g=t_(c,l,t),this.b=t_(c,l,t-1/3)}return We.colorSpaceToWorking(this,r),this}setStyle(t,n=pa){function a(l){l!==void 0&&parseFloat(l)<1&&_e("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const c=r[1],f=r[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:_e("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=r[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);_e("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=pa){const a=B1[t.toLowerCase()];return a!==void 0?this.setHex(a,n):_e("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$r(t.r),this.g=$r(t.g),this.b=$r(t.b),this}copyLinearToSRGB(t){return this.r=Ql(t.r),this.g=Ql(t.g),this.b=Ql(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pa){return We.workingToColorSpace(yi.copy(this),t),Math.round(Ge(yi.r*255,0,255))*65536+Math.round(Ge(yi.g*255,0,255))*256+Math.round(Ge(yi.b*255,0,255))}getHexString(t=pa){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=We.workingColorSpace){We.workingToColorSpace(yi.copy(this),n);const a=yi.r,r=yi.g,l=yi.b,c=Math.max(a,r,l),f=Math.min(a,r,l);let p,d;const _=(f+c)/2;if(f===c)p=0,d=0;else{const v=c-f;switch(d=_<=.5?v/(c+f):v/(2-c-f),c){case a:p=(r-l)/v+(r<l?6:0);break;case r:p=(l-a)/v+2;break;case l:p=(a-r)/v+4;break}p/=6}return t.h=p,t.s=d,t.l=_,t}getRGB(t,n=We.workingColorSpace){return We.workingToColorSpace(yi.copy(this),n),t.r=yi.r,t.g=yi.g,t.b=yi.b,t}getStyle(t=pa){We.workingToColorSpace(yi.copy(this),t);const n=yi.r,a=yi.g,r=yi.b;return t!==pa?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(t,n,a){return this.getHSL(Us),this.setHSL(Us.h+t,Us.s+n,Us.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(Us),t.getHSL(_h);const a=qm(Us.h,_h.h,n),r=qm(Us.s,_h.s,n),l=qm(Us.l,_h.l,n);return this.setHSL(a,r,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,r=this.b,l=t.elements;return this.r=l[0]*n+l[3]*a+l[6]*r,this.g=l[1]*n+l[4]*a+l[7]*r,this.b=l[2]*n+l[5]*a+l[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yi=new qe;qe.NAMES=B1;class DR extends Ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new js,this.environmentIntensity=1,this.environmentRotation=new js,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Za=new lt,Vr=new lt,e_=new lt,kr=new lt,Ul=new lt,Nl=new lt,iM=new lt,n_=new lt,i_=new lt,a_=new lt,r_=new zn,s_=new zn,o_=new zn;class Ja{constructor(t=new lt,n=new lt,a=new lt){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,r){r.subVectors(a,n),Za.subVectors(t,n),r.cross(Za);const l=r.lengthSq();return l>0?r.multiplyScalar(1/Math.sqrt(l)):r.set(0,0,0)}static getBarycoord(t,n,a,r,l){Za.subVectors(r,n),Vr.subVectors(a,n),e_.subVectors(t,n);const c=Za.dot(Za),f=Za.dot(Vr),p=Za.dot(e_),d=Vr.dot(Vr),_=Vr.dot(e_),v=c*d-f*f;if(v===0)return l.set(0,0,0),null;const g=1/v,x=(d*p-f*_)*g,M=(c*_-f*p)*g;return l.set(1-x-M,M,x)}static containsPoint(t,n,a,r){return this.getBarycoord(t,n,a,r,kr)===null?!1:kr.x>=0&&kr.y>=0&&kr.x+kr.y<=1}static getInterpolation(t,n,a,r,l,c,f,p){return this.getBarycoord(t,n,a,r,kr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,kr.x),p.addScaledVector(c,kr.y),p.addScaledVector(f,kr.z),p)}static getInterpolatedAttribute(t,n,a,r,l,c){return r_.setScalar(0),s_.setScalar(0),o_.setScalar(0),r_.fromBufferAttribute(t,n),s_.fromBufferAttribute(t,a),o_.fromBufferAttribute(t,r),c.setScalar(0),c.addScaledVector(r_,l.x),c.addScaledVector(s_,l.y),c.addScaledVector(o_,l.z),c}static isFrontFacing(t,n,a,r){return Za.subVectors(a,n),Vr.subVectors(t,n),Za.cross(Vr).dot(r)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,r){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,a,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Za.subVectors(this.c,this.b),Vr.subVectors(this.a,this.b),Za.cross(Vr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ja.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ja.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,r,l){return Ja.getInterpolation(t,this.a,this.b,this.c,n,a,r,l)}containsPoint(t){return Ja.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ja.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,r=this.b,l=this.c;let c,f;Ul.subVectors(r,a),Nl.subVectors(l,a),n_.subVectors(t,a);const p=Ul.dot(n_),d=Nl.dot(n_);if(p<=0&&d<=0)return n.copy(a);i_.subVectors(t,r);const _=Ul.dot(i_),v=Nl.dot(i_);if(_>=0&&v<=_)return n.copy(r);const g=p*v-_*d;if(g<=0&&p>=0&&_<=0)return c=p/(p-_),n.copy(a).addScaledVector(Ul,c);a_.subVectors(t,l);const x=Ul.dot(a_),M=Nl.dot(a_);if(M>=0&&x<=M)return n.copy(l);const E=x*d-p*M;if(E<=0&&d>=0&&M<=0)return f=d/(d-M),n.copy(a).addScaledVector(Nl,f);const S=_*M-x*v;if(S<=0&&v-_>=0&&x-M>=0)return iM.subVectors(l,r),f=(v-_)/(v-_+(x-M)),n.copy(r).addScaledVector(iM,f);const y=1/(S+E+g);return c=E*y,f=g*y,n.copy(a).addScaledVector(Ul,c).addScaledVector(Nl,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class tf{constructor(t=new lt(1/0,1/0,1/0),n=new lt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Ka.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Ka.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Ka.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const l=a.getAttribute("position");if(n===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)t.isMesh===!0?t.getVertexPosition(c,Ka):Ka.fromBufferAttribute(l,c),Ka.applyMatrix4(t.matrixWorld),this.expandByPoint(Ka);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gh.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),gh.copy(a.boundingBox)),gh.applyMatrix4(t.matrixWorld),this.union(gh)}const r=t.children;for(let l=0,c=r.length;l<c;l++)this.expandByObject(r[l],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ka),Ka.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(uc),vh.subVectors(this.max,uc),Ll.subVectors(t.a,uc),Ol.subVectors(t.b,uc),Pl.subVectors(t.c,uc),Ns.subVectors(Ol,Ll),Ls.subVectors(Pl,Ol),vo.subVectors(Ll,Pl);let n=[0,-Ns.z,Ns.y,0,-Ls.z,Ls.y,0,-vo.z,vo.y,Ns.z,0,-Ns.x,Ls.z,0,-Ls.x,vo.z,0,-vo.x,-Ns.y,Ns.x,0,-Ls.y,Ls.x,0,-vo.y,vo.x,0];return!l_(n,Ll,Ol,Pl,vh)||(n=[1,0,0,0,1,0,0,0,1],!l_(n,Ll,Ol,Pl,vh))?!1:(xh.crossVectors(Ns,Ls),n=[xh.x,xh.y,xh.z],l_(n,Ll,Ol,Pl,vh))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ka).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ka).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Xr=[new lt,new lt,new lt,new lt,new lt,new lt,new lt,new lt],Ka=new lt,gh=new tf,Ll=new lt,Ol=new lt,Pl=new lt,Ns=new lt,Ls=new lt,vo=new lt,uc=new lt,vh=new lt,xh=new lt,xo=new lt;function l_(o,t,n,a,r){for(let l=0,c=o.length-3;l<=c;l+=3){xo.fromArray(o,l);const f=r.x*Math.abs(xo.x)+r.y*Math.abs(xo.y)+r.z*Math.abs(xo.z),p=t.dot(xo),d=n.dot(xo),_=a.dot(xo);if(Math.max(-Math.max(p,d,_),Math.min(p,d,_))>f)return!1}return!0}const Zn=new lt,Sh=new pe;let UR=0;class xr extends qo{constructor(t,n,a=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:UR++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=ky,this.updateRanges=[],this.gpuType=dr,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let r=0,l=this.itemSize;r<l;r++)this.array[t+r]=n.array[a+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Sh.fromBufferAttribute(this,n),Sh.applyMatrix3(t),this.setXY(n,Sh.x,Sh.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Zn.fromBufferAttribute(this,n),Zn.applyMatrix3(t),this.setXYZ(n,Zn.x,Zn.y,Zn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)Zn.fromBufferAttribute(this,n),Zn.applyMatrix4(t),this.setXYZ(n,Zn.x,Zn.y,Zn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)Zn.fromBufferAttribute(this,n),Zn.applyNormalMatrix(t),this.setXYZ(n,Zn.x,Zn.y,Zn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)Zn.fromBufferAttribute(this,n),Zn.transformDirection(t),this.setXYZ(n,Zn.x,Zn.y,Zn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=oc(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Yi(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=oc(n,this.array)),n}setX(t,n){return this.normalized&&(n=Yi(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=oc(n,this.array)),n}setY(t,n){return this.normalized&&(n=Yi(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=oc(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Yi(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=oc(n,this.array)),n}setW(t,n){return this.normalized&&(n=Yi(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Yi(n,this.array),a=Yi(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,r){return t*=this.itemSize,this.normalized&&(n=Yi(n,this.array),a=Yi(a,this.array),r=Yi(r,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=r,this}setXYZW(t,n,a,r,l){return t*=this.itemSize,this.normalized&&(n=Yi(n,this.array),a=Yi(a,this.array),r=Yi(r,this.array),l=Yi(l,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=r,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ky&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class H1 extends xr{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class G1 extends xr{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class Bi extends xr{constructor(t,n,a){super(new Float32Array(t),n,a)}}const NR=new tf,cc=new lt,u_=new lt;class hg{constructor(t=new lt,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):NR.setFromPoints(t).getCenter(a);let r=0;for(let l=0,c=t.length;l<c;l++)r=Math.max(r,a.distanceToSquared(t[l]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cc.subVectors(t,this.center);const n=cc.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),r=(a-this.radius)*.5;this.center.addScaledVector(cc,r/a),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(u_.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cc.copy(t.center).add(u_)),this.expandByPoint(cc.copy(t.center).sub(u_))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let LR=0;const Oa=new Vn,c_=new Ci,zl=new lt,fa=new tf,fc=new tf,ri=new lt;class er extends qo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LR++}),this.uuid=$c(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hR(t)?G1:H1)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new Ee().getNormalMatrix(t);a.applyNormalMatrix(l),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Oa.makeRotationFromQuaternion(t),this.applyMatrix4(Oa),this}rotateX(t){return Oa.makeRotationX(t),this.applyMatrix4(Oa),this}rotateY(t){return Oa.makeRotationY(t),this.applyMatrix4(Oa),this}rotateZ(t){return Oa.makeRotationZ(t),this.applyMatrix4(Oa),this}translate(t,n,a){return Oa.makeTranslation(t,n,a),this.applyMatrix4(Oa),this}scale(t,n,a){return Oa.makeScale(t,n,a),this.applyMatrix4(Oa),this}lookAt(t){return c_.lookAt(t),c_.updateMatrix(),this.applyMatrix4(c_.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zl).negate(),this.translate(zl.x,zl.y,zl.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let r=0,l=t.length;r<l;r++){const c=t[r];a.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Bi(a,3))}else{const a=Math.min(t.length,n.count);for(let r=0;r<a;r++){const l=t[r];n.setXYZ(r,l.x,l.y,l.z||0)}t.length>n.count&&_e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tf);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new lt(-1/0,-1/0,-1/0),new lt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){const l=n[a];fa.setFromBufferAttribute(l),this.morphTargetsRelative?(ri.addVectors(this.boundingBox.min,fa.min),this.boundingBox.expandByPoint(ri),ri.addVectors(this.boundingBox.max,fa.max),this.boundingBox.expandByPoint(ri)):(this.boundingBox.expandByPoint(fa.min),this.boundingBox.expandByPoint(fa.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hg);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new lt,1/0);return}if(t){const a=this.boundingSphere.center;if(fa.setFromBufferAttribute(t),n)for(let l=0,c=n.length;l<c;l++){const f=n[l];fc.setFromBufferAttribute(f),this.morphTargetsRelative?(ri.addVectors(fa.min,fc.min),fa.expandByPoint(ri),ri.addVectors(fa.max,fc.max),fa.expandByPoint(ri)):(fa.expandByPoint(fc.min),fa.expandByPoint(fc.max))}fa.getCenter(a);let r=0;for(let l=0,c=t.count;l<c;l++)ri.fromBufferAttribute(t,l),r=Math.max(r,a.distanceToSquared(ri));if(n)for(let l=0,c=n.length;l<c;l++){const f=n[l],p=this.morphTargetsRelative;for(let d=0,_=f.count;d<_;d++)ri.fromBufferAttribute(f,d),p&&(zl.fromBufferAttribute(t,d),ri.add(zl)),r=Math.max(r,a.distanceToSquared(ri))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,r=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xr(new Float32Array(4*a.count),4));const c=this.getAttribute("tangent"),f=[],p=[];for(let T=0;T<a.count;T++)f[T]=new lt,p[T]=new lt;const d=new lt,_=new lt,v=new lt,g=new pe,x=new pe,M=new pe,E=new lt,S=new lt;function y(T,O,B){d.fromBufferAttribute(a,T),_.fromBufferAttribute(a,O),v.fromBufferAttribute(a,B),g.fromBufferAttribute(l,T),x.fromBufferAttribute(l,O),M.fromBufferAttribute(l,B),_.sub(d),v.sub(d),x.sub(g),M.sub(g);const G=1/(x.x*M.y-M.x*x.y);isFinite(G)&&(E.copy(_).multiplyScalar(M.y).addScaledVector(v,-x.y).multiplyScalar(G),S.copy(v).multiplyScalar(x.x).addScaledVector(_,-M.x).multiplyScalar(G),f[T].add(E),f[O].add(E),f[B].add(E),p[T].add(S),p[O].add(S),p[B].add(S))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let T=0,O=A.length;T<O;++T){const B=A[T],G=B.start,k=B.count;for(let et=G,tt=G+k;et<tt;et+=3)y(t.getX(et+0),t.getX(et+1),t.getX(et+2))}const D=new lt,C=new lt,P=new lt,N=new lt;function w(T){P.fromBufferAttribute(r,T),N.copy(P);const O=f[T];D.copy(O),D.sub(P.multiplyScalar(P.dot(O))).normalize(),C.crossVectors(N,O);const G=C.dot(p[T])<0?-1:1;c.setXYZW(T,D.x,D.y,D.z,G)}for(let T=0,O=A.length;T<O;++T){const B=A[T],G=B.start,k=B.count;for(let et=G,tt=G+k;et<tt;et+=3)w(t.getX(et+0)),w(t.getX(et+1)),w(t.getX(et+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new xr(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let g=0,x=a.count;g<x;g++)a.setXYZ(g,0,0,0);const r=new lt,l=new lt,c=new lt,f=new lt,p=new lt,d=new lt,_=new lt,v=new lt;if(t)for(let g=0,x=t.count;g<x;g+=3){const M=t.getX(g+0),E=t.getX(g+1),S=t.getX(g+2);r.fromBufferAttribute(n,M),l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,S),_.subVectors(c,l),v.subVectors(r,l),_.cross(v),f.fromBufferAttribute(a,M),p.fromBufferAttribute(a,E),d.fromBufferAttribute(a,S),f.add(_),p.add(_),d.add(_),a.setXYZ(M,f.x,f.y,f.z),a.setXYZ(E,p.x,p.y,p.z),a.setXYZ(S,d.x,d.y,d.z)}else for(let g=0,x=n.count;g<x;g+=3)r.fromBufferAttribute(n,g+0),l.fromBufferAttribute(n,g+1),c.fromBufferAttribute(n,g+2),_.subVectors(c,l),v.subVectors(r,l),_.cross(v),a.setXYZ(g+0,_.x,_.y,_.z),a.setXYZ(g+1,_.x,_.y,_.z),a.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)ri.fromBufferAttribute(t,n),ri.normalize(),t.setXYZ(n,ri.x,ri.y,ri.z)}toNonIndexed(){function t(f,p){const d=f.array,_=f.itemSize,v=f.normalized,g=new d.constructor(p.length*_);let x=0,M=0;for(let E=0,S=p.length;E<S;E++){f.isInterleavedBufferAttribute?x=p[E]*f.data.stride+f.offset:x=p[E]*_;for(let y=0;y<_;y++)g[M++]=d[x++]}return new xr(g,_,v)}if(this.index===null)return _e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new er,a=this.index.array,r=this.attributes;for(const f in r){const p=r[f],d=t(p,a);n.setAttribute(f,d)}const l=this.morphAttributes;for(const f in l){const p=[],d=l[f];for(let _=0,v=d.length;_<v;_++){const g=d[_],x=t(g,a);p.push(x)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const d=c[f];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];t.data.attributes[p]=d.toJSON(t.data)}const r={};let l=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],_=[];for(let v=0,g=d.length;v<g;v++){const x=d[v];_.push(x.toJSON(t.data))}_.length>0&&(r[p]=_,l=!0)}l&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const r=t.attributes;for(const d in r){const _=r[d];this.setAttribute(d,_.clone(n))}const l=t.morphAttributes;for(const d in l){const _=[],v=l[d];for(let g=0,x=v.length;g<x;g++)_.push(v[g].clone(n));this.morphAttributes[d]=_}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let d=0,_=c.length;d<_;d++){const v=c[d];this.addGroup(v.start,v.count,v.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let OR=0;class ef extends qo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:OR++}),this.uuid=$c(),this.name="",this.type="Material",this.blending=Kl,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=H_,this.blendDst=G_,this.blendEquation=Co,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=ru,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Al,this.stencilZFail=Al,this.stencilZPass=Al,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){_e(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){_e(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Kl&&(a.blending=this.blending),this.side!==es&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==H_&&(a.blendSrc=this.blendSrc),this.blendDst!==G_&&(a.blendDst=this.blendDst),this.blendEquation!==Co&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==ru&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vy&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Al&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Al&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Al&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(l){const c=[];for(const f in l){const p=l[f];delete p.metadata,c.push(p)}return c}if(n){const l=r(t.textures),c=r(t.images);l.length>0&&(a.textures=l),c.length>0&&(a.images=c)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const r=n.length;a=new Array(r);for(let l=0;l!==r;++l)a[l]=n[l].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Wr=new lt,f_=new lt,yh=new lt,Os=new lt,h_=new lt,Mh=new lt,d_=new lt;class PR{constructor(t=new lt,n=new lt(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wr)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Wr.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Wr.copy(this.origin).addScaledVector(this.direction,n),Wr.distanceToSquared(t))}distanceSqToSegment(t,n,a,r){f_.copy(t).add(n).multiplyScalar(.5),yh.copy(n).sub(t).normalize(),Os.copy(this.origin).sub(f_);const l=t.distanceTo(n)*.5,c=-this.direction.dot(yh),f=Os.dot(this.direction),p=-Os.dot(yh),d=Os.lengthSq(),_=Math.abs(1-c*c);let v,g,x,M;if(_>0)if(v=c*p-f,g=c*f-p,M=l*_,v>=0)if(g>=-M)if(g<=M){const E=1/_;v*=E,g*=E,x=v*(v+c*g+2*f)+g*(c*v+g+2*p)+d}else g=l,v=Math.max(0,-(c*g+f)),x=-v*v+g*(g+2*p)+d;else g=-l,v=Math.max(0,-(c*g+f)),x=-v*v+g*(g+2*p)+d;else g<=-M?(v=Math.max(0,-(-c*l+f)),g=v>0?-l:Math.min(Math.max(-l,-p),l),x=-v*v+g*(g+2*p)+d):g<=M?(v=0,g=Math.min(Math.max(-l,-p),l),x=g*(g+2*p)+d):(v=Math.max(0,-(c*l+f)),g=v>0?l:Math.min(Math.max(-l,-p),l),x=-v*v+g*(g+2*p)+d);else g=c>0?-l:l,v=Math.max(0,-(c*g+f)),x=-v*v+g*(g+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,v),r&&r.copy(f_).addScaledVector(yh,g),x}intersectSphere(t,n){Wr.subVectors(t.center,this.origin);const a=Wr.dot(this.direction),r=Wr.dot(Wr)-a*a,l=t.radius*t.radius;if(r>l)return null;const c=Math.sqrt(l-r),f=a-c,p=a+c;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,r,l,c,f,p;const d=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return d>=0?(a=(t.min.x-g.x)*d,r=(t.max.x-g.x)*d):(a=(t.max.x-g.x)*d,r=(t.min.x-g.x)*d),_>=0?(l=(t.min.y-g.y)*_,c=(t.max.y-g.y)*_):(l=(t.max.y-g.y)*_,c=(t.min.y-g.y)*_),a>c||l>r||((l>a||isNaN(a))&&(a=l),(c<r||isNaN(r))&&(r=c),v>=0?(f=(t.min.z-g.z)*v,p=(t.max.z-g.z)*v):(f=(t.max.z-g.z)*v,p=(t.min.z-g.z)*v),a>p||f>r)||((f>a||a!==a)&&(a=f),(p<r||r!==r)&&(r=p),r<0)?null:this.at(a>=0?a:r,n)}intersectsBox(t){return this.intersectBox(t,Wr)!==null}intersectTriangle(t,n,a,r,l){h_.subVectors(n,t),Mh.subVectors(a,t),d_.crossVectors(h_,Mh);let c=this.direction.dot(d_),f;if(c>0){if(r)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Os.subVectors(this.origin,t);const p=f*this.direction.dot(Mh.crossVectors(Os,Mh));if(p<0)return null;const d=f*this.direction.dot(h_.cross(Os));if(d<0||p+d>c)return null;const _=-f*Os.dot(d_);return _<0?null:this.at(_/c,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dg extends ef{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new js,this.combine=S1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const aM=new Vn,So=new PR,Eh=new hg,rM=new lt,bh=new lt,Th=new lt,Ah=new lt,p_=new lt,Rh=new lt,sM=new lt,Ch=new lt;class tr extends Ci{constructor(t=new er,n=new dg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=r.length;l<c;l++){const f=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,n){const a=this.geometry,r=a.attributes.position,l=a.morphAttributes.position,c=a.morphTargetsRelative;n.fromBufferAttribute(r,t);const f=this.morphTargetInfluences;if(l&&f){Rh.set(0,0,0);for(let p=0,d=l.length;p<d;p++){const _=f[p],v=l[p];_!==0&&(p_.fromBufferAttribute(v,t),c?Rh.addScaledVector(p_,_):Rh.addScaledVector(p_.sub(n),_))}n.add(Rh)}return n}raycast(t,n){const a=this.geometry,r=this.material,l=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Eh.copy(a.boundingSphere),Eh.applyMatrix4(l),So.copy(t.ray).recast(t.near),!(Eh.containsPoint(So.origin)===!1&&(So.intersectSphere(Eh,rM)===null||So.origin.distanceToSquared(rM)>(t.far-t.near)**2))&&(aM.copy(l).invert(),So.copy(t.ray).applyMatrix4(aM),!(a.boundingBox!==null&&So.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,So)))}_computeIntersections(t,n,a){let r;const l=this.geometry,c=this.material,f=l.index,p=l.attributes.position,d=l.attributes.uv,_=l.attributes.uv1,v=l.attributes.normal,g=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,E=g.length;M<E;M++){const S=g[M],y=c[S.materialIndex],A=Math.max(S.start,x.start),D=Math.min(f.count,Math.min(S.start+S.count,x.start+x.count));for(let C=A,P=D;C<P;C+=3){const N=f.getX(C),w=f.getX(C+1),T=f.getX(C+2);r=wh(this,y,t,a,d,_,v,N,w,T),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=S.materialIndex,n.push(r))}}else{const M=Math.max(0,x.start),E=Math.min(f.count,x.start+x.count);for(let S=M,y=E;S<y;S+=3){const A=f.getX(S),D=f.getX(S+1),C=f.getX(S+2);r=wh(this,c,t,a,d,_,v,A,D,C),r&&(r.faceIndex=Math.floor(S/3),n.push(r))}}else if(p!==void 0)if(Array.isArray(c))for(let M=0,E=g.length;M<E;M++){const S=g[M],y=c[S.materialIndex],A=Math.max(S.start,x.start),D=Math.min(p.count,Math.min(S.start+S.count,x.start+x.count));for(let C=A,P=D;C<P;C+=3){const N=C,w=C+1,T=C+2;r=wh(this,y,t,a,d,_,v,N,w,T),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=S.materialIndex,n.push(r))}}else{const M=Math.max(0,x.start),E=Math.min(p.count,x.start+x.count);for(let S=M,y=E;S<y;S+=3){const A=S,D=S+1,C=S+2;r=wh(this,c,t,a,d,_,v,A,D,C),r&&(r.faceIndex=Math.floor(S/3),n.push(r))}}}}function zR(o,t,n,a,r,l,c,f){let p;if(t.side===Zi?p=a.intersectTriangle(c,l,r,!0,f):p=a.intersectTriangle(r,l,c,t.side===es,f),p===null)return null;Ch.copy(f),Ch.applyMatrix4(o.matrixWorld);const d=n.ray.origin.distanceTo(Ch);return d<n.near||d>n.far?null:{distance:d,point:Ch.clone(),object:o}}function wh(o,t,n,a,r,l,c,f,p,d){o.getVertexPosition(f,bh),o.getVertexPosition(p,Th),o.getVertexPosition(d,Ah);const _=zR(o,t,n,a,bh,Th,Ah,sM);if(_){const v=new lt;Ja.getBarycoord(sM,bh,Th,Ah,v),r&&(_.uv=Ja.getInterpolatedAttribute(r,f,p,d,v,new pe)),l&&(_.uv1=Ja.getInterpolatedAttribute(l,f,p,d,v,new pe)),c&&(_.normal=Ja.getInterpolatedAttribute(c,f,p,d,v,new lt),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const g={a:f,b:p,c:d,normal:new lt,materialIndex:0};Ja.getNormal(bh,Th,Ah,g.normal),_.face=g,_.barycoord=v}return _}class FR extends Ri{constructor(t=null,n=1,a=1,r,l,c,f,p,d=di,_=di,v,g){super(null,c,f,p,d,_,r,l,v,g),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const m_=new lt,IR=new lt,BR=new Ee;class bo{constructor(t=new lt(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,r){return this.normal.set(t,n,a),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const r=m_.subVectors(a,n).cross(IR.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,a=!0){const r=t.delta(m_),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return a===!0&&(c<0||c>1)?null:n.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||BR.getNormalMatrix(t),r=this.coplanarPoint(m_).applyMatrix4(t),l=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yo=new hg,HR=new pe(.5,.5),Dh=new lt;class pg{constructor(t=new bo,n=new bo,a=new bo,r=new bo,l=new bo,c=new bo){this.planes=[t,n,a,r,l,c]}set(t,n,a,r,l,c){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(r),f[4].copy(l),f[5].copy(c),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=pr,a=!1){const r=this.planes,l=t.elements,c=l[0],f=l[1],p=l[2],d=l[3],_=l[4],v=l[5],g=l[6],x=l[7],M=l[8],E=l[9],S=l[10],y=l[11],A=l[12],D=l[13],C=l[14],P=l[15];if(r[0].setComponents(d-c,x-_,y-M,P-A).normalize(),r[1].setComponents(d+c,x+_,y+M,P+A).normalize(),r[2].setComponents(d+f,x+v,y+E,P+D).normalize(),r[3].setComponents(d-f,x-v,y-E,P-D).normalize(),a)r[4].setComponents(p,g,S,C).normalize(),r[5].setComponents(d-p,x-g,y-S,P-C).normalize();else if(r[4].setComponents(d-p,x-g,y-S,P-C).normalize(),n===pr)r[5].setComponents(d+p,x+g,y+S,P+C).normalize();else if(n===Gc)r[5].setComponents(p,g,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yo.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yo)}intersectsSprite(t){yo.center.set(0,0,0);const n=HR.distanceTo(t.center);return yo.radius=.7071067811865476+n,yo.applyMatrix4(t.matrixWorld),this.intersectsSphere(yo)}intersectsSphere(t){const n=this.planes,a=t.center,r=-t.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(a)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const r=n[a];if(Dh.x=r.normal.x>0?t.max.x:t.min.x,Dh.y=r.normal.y>0?t.max.y:t.min.y,Dh.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Dh)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class V1 extends Ri{constructor(t=[],n=Vo,a,r,l,c,f,p,d,_){super(t,n,a,r,l,c,f,p,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ou extends Ri{constructor(t,n,a=yr,r,l,c,f=di,p=di,d,_=is,v=1){if(_!==is&&_!==Uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:n,depth:v};super(g,r,l,c,f,p,_,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fg(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class GR extends ou{constructor(t,n=yr,a=Vo,r,l,c=di,f=di,p,d=is){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,n,a,r,l,c,f,p,d),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class k1 extends Ri{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class nf extends er{constructor(t=1,n=1,a=1,r=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:r,heightSegments:l,depthSegments:c};const f=this;r=Math.floor(r),l=Math.floor(l),c=Math.floor(c);const p=[],d=[],_=[],v=[];let g=0,x=0;M("z","y","x",-1,-1,a,n,t,c,l,0),M("z","y","x",1,-1,a,n,-t,c,l,1),M("x","z","y",1,1,t,a,n,r,c,2),M("x","z","y",1,-1,t,a,-n,r,c,3),M("x","y","z",1,-1,t,n,a,r,l,4),M("x","y","z",-1,-1,t,n,-a,r,l,5),this.setIndex(p),this.setAttribute("position",new Bi(d,3)),this.setAttribute("normal",new Bi(_,3)),this.setAttribute("uv",new Bi(v,2));function M(E,S,y,A,D,C,P,N,w,T,O){const B=C/w,G=P/T,k=C/2,et=P/2,tt=N/2,X=w+1,F=T+1;let H=0,J=0;const ft=new lt;for(let V=0;V<F;V++){const I=V*G-et;for(let K=0;K<X;K++){const xt=K*B-k;ft[E]=xt*A,ft[S]=I*D,ft[y]=tt,d.push(ft.x,ft.y,ft.z),ft[E]=0,ft[S]=0,ft[y]=N>0?1:-1,_.push(ft.x,ft.y,ft.z),v.push(K/w),v.push(1-V/T),H+=1}}for(let V=0;V<T;V++)for(let I=0;I<w;I++){const K=g+I+X*V,xt=g+I+X*(V+1),Mt=g+(I+1)+X*(V+1),Ut=g+(I+1)+X*V;p.push(K,xt,Ut),p.push(xt,Mt,Ut),J+=6}f.addGroup(x,J,O),x+=J,g+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nf(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class mg extends er{constructor(t=1,n=1,a=1,r=32,l=1,c=!1,f=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:a,radialSegments:r,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:p};const d=this;r=Math.floor(r),l=Math.floor(l);const _=[],v=[],g=[],x=[];let M=0;const E=[],S=a/2;let y=0;A(),c===!1&&(t>0&&D(!0),n>0&&D(!1)),this.setIndex(_),this.setAttribute("position",new Bi(v,3)),this.setAttribute("normal",new Bi(g,3)),this.setAttribute("uv",new Bi(x,2));function A(){const C=new lt,P=new lt;let N=0;const w=(n-t)/a;for(let T=0;T<=l;T++){const O=[],B=T/l,G=B*(n-t)+t;for(let k=0;k<=r;k++){const et=k/r,tt=et*p+f,X=Math.sin(tt),F=Math.cos(tt);P.x=G*X,P.y=-B*a+S,P.z=G*F,v.push(P.x,P.y,P.z),C.set(X,w,F).normalize(),g.push(C.x,C.y,C.z),x.push(et,1-B),O.push(M++)}E.push(O)}for(let T=0;T<r;T++)for(let O=0;O<l;O++){const B=E[O][T],G=E[O+1][T],k=E[O+1][T+1],et=E[O][T+1];(t>0||O!==0)&&(_.push(B,G,et),N+=3),(n>0||O!==l-1)&&(_.push(G,k,et),N+=3)}d.addGroup(y,N,0),y+=N}function D(C){const P=M,N=new pe,w=new lt;let T=0;const O=C===!0?t:n,B=C===!0?1:-1;for(let k=1;k<=r;k++)v.push(0,S*B,0),g.push(0,B,0),x.push(.5,.5),M++;const G=M;for(let k=0;k<=r;k++){const tt=k/r*p+f,X=Math.cos(tt),F=Math.sin(tt);w.x=O*F,w.y=S*B,w.z=O*X,v.push(w.x,w.y,w.z),g.push(0,B,0),N.x=X*.5+.5,N.y=F*.5*B+.5,x.push(N.x,N.y),M++}for(let k=0;k<r;k++){const et=P+k,tt=G+k;C===!0?_.push(tt,tt+1,et):_.push(tt+1,tt,et),T+=3}d.addGroup(y,T,C===!0?1:2),y+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mg(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _g extends er{constructor(t=[new pe(0,-.5),new pe(.5,0),new pe(0,.5)],n=12,a=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:n,phiStart:a,phiLength:r},n=Math.floor(n),r=Ge(r,0,Math.PI*2);const l=[],c=[],f=[],p=[],d=[],_=1/n,v=new lt,g=new pe,x=new lt,M=new lt,E=new lt;let S=0,y=0;for(let A=0;A<=t.length-1;A++)switch(A){case 0:S=t[A+1].x-t[A].x,y=t[A+1].y-t[A].y,x.x=y*1,x.y=-S,x.z=y*0,E.copy(x),x.normalize(),p.push(x.x,x.y,x.z);break;case t.length-1:p.push(E.x,E.y,E.z);break;default:S=t[A+1].x-t[A].x,y=t[A+1].y-t[A].y,x.x=y*1,x.y=-S,x.z=y*0,M.copy(x),x.x+=E.x,x.y+=E.y,x.z+=E.z,x.normalize(),p.push(x.x,x.y,x.z),E.copy(M)}for(let A=0;A<=n;A++){const D=a+A*_*r,C=Math.sin(D),P=Math.cos(D);for(let N=0;N<=t.length-1;N++){v.x=t[N].x*C,v.y=t[N].y,v.z=t[N].x*P,c.push(v.x,v.y,v.z),g.x=A/n,g.y=N/(t.length-1),f.push(g.x,g.y);const w=p[3*N+0]*C,T=p[3*N+1],O=p[3*N+0]*P;d.push(w,T,O)}}for(let A=0;A<n;A++)for(let D=0;D<t.length-1;D++){const C=D+A*t.length,P=C,N=C+t.length,w=C+t.length+1,T=C+1;l.push(P,N,T),l.push(w,T,N)}this.setIndex(l),this.setAttribute("position",new Bi(c,3)),this.setAttribute("uv",new Bi(f,2)),this.setAttribute("normal",new Bi(d,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _g(t.points,t.segments,t.phiStart,t.phiLength)}}class Rd extends er{constructor(t=1,n=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:r};const l=t/2,c=n/2,f=Math.floor(a),p=Math.floor(r),d=f+1,_=p+1,v=t/f,g=n/p,x=[],M=[],E=[],S=[];for(let y=0;y<_;y++){const A=y*g-c;for(let D=0;D<d;D++){const C=D*v-l;M.push(C,-A,0),E.push(0,0,1),S.push(D/f),S.push(1-y/p)}}for(let y=0;y<p;y++)for(let A=0;A<f;A++){const D=A+d*y,C=A+d*(y+1),P=A+1+d*(y+1),N=A+1+d*y;x.push(D,C,N),x.push(C,P,N)}this.setIndex(x),this.setAttribute("position",new Bi(M,3)),this.setAttribute("normal",new Bi(E,3)),this.setAttribute("uv",new Bi(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rd(t.width,t.height,t.widthSegments,t.heightSegments)}}function lu(o){const t={};for(const n in o){t[n]={};for(const a in o[n]){const r=o[n][a];if(oM(r))r.isRenderTargetTexture?(_e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=r.clone();else if(Array.isArray(r))if(oM(r[0])){const l=[];for(let c=0,f=r.length;c<f;c++)l[c]=r[c].clone();t[n][a]=l}else t[n][a]=r.slice();else t[n][a]=r}}return t}function Oi(o){const t={};for(let n=0;n<o.length;n++){const a=lu(o[n]);for(const r in a)t[r]=a[r]}return t}function oM(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function VR(o){const t=[];for(let n=0;n<o.length;n++)t.push(o[n].clone());return t}function X1(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:We.workingColorSpace}const kR={clone:lu,merge:Oi};var XR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mr extends ef{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=XR,this.fragmentShader=WR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=lu(t.uniforms),this.uniformsGroups=VR(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?n.uniforms[r]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?n.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[r]={type:"m4",value:c.toArray()}:n.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class YR extends Mr{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qR extends ef{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=A0,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new js,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jR extends qR{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class ZR extends ef{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class KR extends ef{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const __={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(lM(o)||(this.files[o]=t))},get:function(o){if(this.enabled!==!1&&!lM(o))return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};function lM(o){try{const t=o.slice(o.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class QR{constructor(t,n,a){const r=this;let l=!1,c=0,f=0,p;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(_){f++,l===!1&&r.onStart!==void 0&&r.onStart(_,c,f),l=!0},this.itemEnd=function(_){c++,r.onProgress!==void 0&&r.onProgress(_,c,f),c===f&&(l=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(_){r.onError!==void 0&&r.onError(_)},this.resolveURL=function(_){return p?p(_):_},this.setURLModifier=function(_){return p=_,this},this.addHandler=function(_,v){return d.push(_,v),this},this.removeHandler=function(_){const v=d.indexOf(_);return v!==-1&&d.splice(v,2),this},this.getHandler=function(_){for(let v=0,g=d.length;v<g;v+=2){const x=d[v],M=d[v+1];if(x.global&&(x.lastIndex=0),x.test(_))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const JR=new QR;class gg{constructor(t){this.manager=t!==void 0?t:JR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){const a=this;return new Promise(function(r,l){a.load(t,r,n,l)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}gg.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fl=new WeakMap;class $R extends gg{constructor(t){super(t)}load(t,n,a,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const l=this,c=__.get(`image:${t}`);if(c!==void 0){if(c.complete===!0)l.manager.itemStart(t),setTimeout(function(){n&&n(c),l.manager.itemEnd(t)},0);else{let v=Fl.get(c);v===void 0&&(v=[],Fl.set(c,v)),v.push({onLoad:n,onError:r})}return c}const f=Vc("img");function p(){_(),n&&n(this);const v=Fl.get(this)||[];for(let g=0;g<v.length;g++){const x=v[g];x.onLoad&&x.onLoad(this)}Fl.delete(this),l.manager.itemEnd(t)}function d(v){_(),r&&r(v),__.remove(`image:${t}`);const g=Fl.get(this)||[];for(let x=0;x<g.length;x++){const M=g[x];M.onError&&M.onError(v)}Fl.delete(this),l.manager.itemError(t),l.manager.itemEnd(t)}function _(){f.removeEventListener("load",p,!1),f.removeEventListener("error",d,!1)}return f.addEventListener("load",p,!1),f.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),__.add(`image:${t}`,f),l.manager.itemStart(t),f.src=t,f}}class tC extends gg{constructor(t){super(t)}load(t,n,a,r){const l=new Ri,c=new $R(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(t,function(f){l.image=f,l.needsUpdate=!0,n!==void 0&&n(l)},a,r),l}}class W1 extends Ci{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const g_=new Vn,uM=new lt,cM=new lt;class eC{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=ga,this.map=null,this.mapPass=null,this.matrix=new Vn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pg,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new zn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;uM.setFromMatrixPosition(t.matrixWorld),n.position.copy(uM),cM.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(cM),n.updateMatrixWorld(),g_.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(g_,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Gc||n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(g_)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Uh=new lt,Nh=new mu,or=new lt;class Y1 extends Ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vn,this.projectionMatrix=new Vn,this.projectionMatrixInverse=new Vn,this.coordinateSystem=pr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Uh,Nh,or),or.x===1&&or.y===1&&or.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uh,Nh,or.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(Uh,Nh,or),or.x===1&&or.y===1&&or.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uh,Nh,or.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ps=new lt,fM=new pe,hM=new pe;class Fa extends Y1{constructor(t=50,n=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=C0*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ym*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return C0*2*Math.atan(Math.tan(Ym*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ps.x,Ps.y).multiplyScalar(-t/Ps.z),Ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ps.x,Ps.y).multiplyScalar(-t/Ps.z)}getViewSize(t,n){return this.getViewBounds(t,fM,hM),n.subVectors(hM,fM)}setViewOffset(t,n,a,r,l,c){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Ym*.5*this.fov)/this.zoom,a=2*n,r=this.aspect*a,l=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,d=c.fullHeight;l+=c.offsetX*r/p,n-=c.offsetY*a/d,r*=c.width/p,a*=c.height/d}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+r,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class vg extends Y1{constructor(t=-1,n=1,a=1,r=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=r,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,r,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let l=a-t,c=a+t,f=r+n,p=r-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,c=l+d*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class nC extends eC{constructor(){super(new vg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class v_ extends W1{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ci.DEFAULT_UP),this.updateMatrix(),this.target=new Ci,this.shadow=new nC}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class iC extends W1{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Il=-90,Bl=1;class aC extends Ci{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Fa(Il,Bl,t,n);r.layers=this.layers,this.add(r);const l=new Fa(Il,Bl,t,n);l.layers=this.layers,this.add(l);const c=new Fa(Il,Bl,t,n);c.layers=this.layers,this.add(c);const f=new Fa(Il,Bl,t,n);f.layers=this.layers,this.add(f);const p=new Fa(Il,Bl,t,n);p.layers=this.layers,this.add(p);const d=new Fa(Il,Bl,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,r,l,c,f,p]=n;for(const d of n)this.remove(d);if(t===pr)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Gc)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,p,d,_]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const E=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(a,0,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(a,1,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(a,2,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,f),t.setRenderTarget(a,3,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,p),t.setRenderTarget(a,4,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),a.texture.generateMipmaps=E,t.setRenderTarget(a,5,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,_),t.setRenderTarget(v,g,x),t.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class rC extends Fa{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Zg=class Zg{constructor(t,n,a,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,a,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let a=0;a<4;a++)this.elements[a]=t[a+n];return this}set(t,n,a,r){const l=this.elements;return l[0]=t,l[2]=n,l[1]=a,l[3]=r,this}};Zg.prototype.isMatrix2=!0;let dM=Zg;function pM(o,t,n,a){const r=sC(a);switch(n){case L1:return o*t;case P1:return o*t/r.components*r.byteLength;case sg:return o*t/r.components*r.byteLength;case ko:return o*t*2/r.components*r.byteLength;case og:return o*t*2/r.components*r.byteLength;case O1:return o*t*3/r.components*r.byteLength;case $a:return o*t*4/r.components*r.byteLength;case lg:return o*t*4/r.components*r.byteLength;case Zh:case Kh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Qh:case Jh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Q_:case $_:return Math.max(o,16)*Math.max(t,8)/4;case K_:case J_:return Math.max(o,8)*Math.max(t,8)/2;case t0:case e0:case i0:case a0:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case n0:case cd:case r0:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case s0:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case o0:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case l0:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case u0:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case c0:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case f0:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case h0:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case d0:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case p0:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case m0:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case _0:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case g0:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case v0:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case x0:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case S0:case y0:case M0:return Math.ceil(o/4)*Math.ceil(t/4)*16;case E0:case b0:return Math.ceil(o/4)*Math.ceil(t/4)*8;case fd:case T0:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function sC(o){switch(o){case ga:case w1:return{byteLength:1,components:1};case Bc:case D1:case ns:return{byteLength:2,components:1};case ag:case rg:return{byteLength:2,components:4};case yr:case ig:case dr:return{byteLength:4,components:1};case U1:case N1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ng}}));typeof window<"u"&&(window.__THREE__?_e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ng);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function q1(){let o=null,t=!1,n=null,a=null;function r(l,c){n(l,c),a=o.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&o!==null&&(a=o.requestAnimationFrame(r),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(l){n=l},setContext:function(l){o=l}}}function oC(o){const t=new WeakMap;function n(f,p){const d=f.array,_=f.usage,v=d.byteLength,g=o.createBuffer();o.bindBuffer(p,g),o.bufferData(p,d,_),f.onUploadCallback();let x;if(d instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=o.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=o.SHORT;else if(d instanceof Uint32Array)x=o.UNSIGNED_INT;else if(d instanceof Int32Array)x=o.INT;else if(d instanceof Int8Array)x=o.BYTE;else if(d instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:v}}function a(f,p,d){const _=p.array,v=p.updateRanges;if(o.bindBuffer(d,f),v.length===0)o.bufferSubData(d,0,_);else{v.sort((x,M)=>x.start-M.start);let g=0;for(let x=1;x<v.length;x++){const M=v[g],E=v[x];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++g,v[g]=E)}v.length=g+1;for(let x=0,M=v.length;x<M;x++){const E=v[x];o.bufferSubData(d,E.start*_.BYTES_PER_ELEMENT,_,E.start,E.count)}p.clearUpdateRanges()}p.onUploadCallback()}function r(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(o.deleteBuffer(p.buffer),t.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=t.get(f);(!_||_.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=t.get(f);if(d===void 0)t.set(f,n(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,f,p),d.version=f.version}}return{get:r,remove:l,update:c}}var lC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_C=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,gC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,MC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,EC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,CC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,DC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,UC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,NC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,LC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,OC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IC="gl_FragColor = linearToOutputTexel( gl_FragColor );",BC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,HC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,GC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,VC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,WC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,KC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$C=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,t2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,e2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,s2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,o2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,l2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,u2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c2=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,f2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,v2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,T2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,R2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,C2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,U2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,N2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,I2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,W2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Y2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,q2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,j2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,K2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,J2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ew=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ow=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_w=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,vw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ew=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Aw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ww=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ow=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Iw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:lC,alphahash_pars_fragment:uC,alphamap_fragment:cC,alphamap_pars_fragment:fC,alphatest_fragment:hC,alphatest_pars_fragment:dC,aomap_fragment:pC,aomap_pars_fragment:mC,batching_pars_vertex:_C,batching_vertex:gC,begin_vertex:vC,beginnormal_vertex:xC,bsdfs:SC,iridescence_fragment:yC,bumpmap_pars_fragment:MC,clipping_planes_fragment:EC,clipping_planes_pars_fragment:bC,clipping_planes_pars_vertex:TC,clipping_planes_vertex:AC,color_fragment:RC,color_pars_fragment:CC,color_pars_vertex:wC,color_vertex:DC,common:UC,cube_uv_reflection_fragment:NC,defaultnormal_vertex:LC,displacementmap_pars_vertex:OC,displacementmap_vertex:PC,emissivemap_fragment:zC,emissivemap_pars_fragment:FC,colorspace_fragment:IC,colorspace_pars_fragment:BC,envmap_fragment:HC,envmap_common_pars_fragment:GC,envmap_pars_fragment:VC,envmap_pars_vertex:kC,envmap_physical_pars_fragment:t2,envmap_vertex:XC,fog_vertex:WC,fog_pars_vertex:YC,fog_fragment:qC,fog_pars_fragment:jC,gradientmap_pars_fragment:ZC,lightmap_pars_fragment:KC,lights_lambert_fragment:QC,lights_lambert_pars_fragment:JC,lights_pars_begin:$C,lights_toon_fragment:e2,lights_toon_pars_fragment:n2,lights_phong_fragment:i2,lights_phong_pars_fragment:a2,lights_physical_fragment:r2,lights_physical_pars_fragment:s2,lights_fragment_begin:o2,lights_fragment_maps:l2,lights_fragment_end:u2,lightprobes_pars_fragment:c2,logdepthbuf_fragment:f2,logdepthbuf_pars_fragment:h2,logdepthbuf_pars_vertex:d2,logdepthbuf_vertex:p2,map_fragment:m2,map_pars_fragment:_2,map_particle_fragment:g2,map_particle_pars_fragment:v2,metalnessmap_fragment:x2,metalnessmap_pars_fragment:S2,morphinstance_vertex:y2,morphcolor_vertex:M2,morphnormal_vertex:E2,morphtarget_pars_vertex:b2,morphtarget_vertex:T2,normal_fragment_begin:A2,normal_fragment_maps:R2,normal_pars_fragment:C2,normal_pars_vertex:w2,normal_vertex:D2,normalmap_pars_fragment:U2,clearcoat_normal_fragment_begin:N2,clearcoat_normal_fragment_maps:L2,clearcoat_pars_fragment:O2,iridescence_pars_fragment:P2,opaque_fragment:z2,packing:F2,premultiplied_alpha_fragment:I2,project_vertex:B2,dithering_fragment:H2,dithering_pars_fragment:G2,roughnessmap_fragment:V2,roughnessmap_pars_fragment:k2,shadowmap_pars_fragment:X2,shadowmap_pars_vertex:W2,shadowmap_vertex:Y2,shadowmask_pars_fragment:q2,skinbase_vertex:j2,skinning_pars_vertex:Z2,skinning_vertex:K2,skinnormal_vertex:Q2,specularmap_fragment:J2,specularmap_pars_fragment:$2,tonemapping_fragment:tw,tonemapping_pars_fragment:ew,transmission_fragment:nw,transmission_pars_fragment:iw,uv_pars_fragment:aw,uv_pars_vertex:rw,uv_vertex:sw,worldpos_vertex:ow,background_vert:lw,background_frag:uw,backgroundCube_vert:cw,backgroundCube_frag:fw,cube_vert:hw,cube_frag:dw,depth_vert:pw,depth_frag:mw,distance_vert:_w,distance_frag:gw,equirect_vert:vw,equirect_frag:xw,linedashed_vert:Sw,linedashed_frag:yw,meshbasic_vert:Mw,meshbasic_frag:Ew,meshlambert_vert:bw,meshlambert_frag:Tw,meshmatcap_vert:Aw,meshmatcap_frag:Rw,meshnormal_vert:Cw,meshnormal_frag:ww,meshphong_vert:Dw,meshphong_frag:Uw,meshphysical_vert:Nw,meshphysical_frag:Lw,meshtoon_vert:Ow,meshtoon_frag:Pw,points_vert:zw,points_frag:Fw,shadow_vert:Iw,shadow_frag:Bw,sprite_vert:Hw,sprite_frag:Gw},Yt={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ee},alphaMap:{value:null},alphaMapTransform:{value:new Ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ee}},envmap:{envMap:{value:null},envMapRotation:{value:new Ee},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ee},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new lt},probesMax:{value:new lt},probesResolution:{value:new lt}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ee},alphaTest:{value:0},uvTransform:{value:new Ee}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ee},alphaMap:{value:null},alphaMapTransform:{value:new Ee},alphaTest:{value:0}}},fr={basic:{uniforms:Oi([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Oi([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,Yt.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Oi([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,Yt.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Oi([Yt.common,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.roughnessmap,Yt.metalnessmap,Yt.fog,Yt.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Oi([Yt.common,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.gradientmap,Yt.fog,Yt.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Oi([Yt.common,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Oi([Yt.points,Yt.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Oi([Yt.common,Yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Oi([Yt.common,Yt.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Oi([Yt.common,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Oi([Yt.sprite,Yt.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ee}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:Oi([Yt.common,Yt.displacementmap,{referencePosition:{value:new lt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:Oi([Yt.lights,Yt.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};fr.physical={uniforms:Oi([fr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ee},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ee},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ee},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ee},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ee},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ee}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Lh={r:0,b:0,g:0},Vw=new Vn,j1=new Ee;j1.set(-1,0,0,0,1,0,0,0,1);function kw(o,t,n,a,r,l){const c=new qe(0);let f=r===!0?0:1,p,d,_=null,v=0,g=null;function x(A){let D=A.isScene===!0?A.background:null;if(D&&D.isTexture){const C=A.backgroundBlurriness>0;D=t.get(D,C)}return D}function M(A){let D=!1;const C=x(A);C===null?S(c,f):C&&C.isColor&&(S(C,1),D=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,l):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(o.autoClear||D)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function E(A,D){const C=x(D);C&&(C.isCubeTexture||C.mapping===Ad)?(d===void 0&&(d=new tr(new nf(1,1,1),new Mr({name:"BackgroundCubeMaterial",uniforms:lu(fr.backgroundCube.uniforms),vertexShader:fr.backgroundCube.vertexShader,fragmentShader:fr.backgroundCube.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,N,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),d.material.uniforms.envMap.value=C,d.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Vw.makeRotationFromEuler(D.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(j1),d.material.toneMapped=We.getTransfer(C.colorSpace)!==un,(_!==C||v!==C.version||g!==o.toneMapping)&&(d.material.needsUpdate=!0,_=C,v=C.version,g=o.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new tr(new Rd(2,2),new Mr({name:"BackgroundMaterial",uniforms:lu(fr.background.uniforms),vertexShader:fr.background.vertexShader,fragmentShader:fr.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=We.getTransfer(C.colorSpace)!==un,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(_!==C||v!==C.version||g!==o.toneMapping)&&(p.material.needsUpdate=!0,_=C,v=C.version,g=o.toneMapping),p.layers.enableAll(),A.unshift(p,p.geometry,p.material,0,0,null))}function S(A,D){A.getRGB(Lh,X1(o)),n.buffers.color.setClear(Lh.r,Lh.g,Lh.b,D,l)}function y(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return c},setClearColor:function(A,D=1){c.set(A),f=D,S(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(A){f=A,S(c,f)},render:M,addToRenderList:E,dispose:y}}function Xw(o,t){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},r=g(null);let l=r,c=!1;function f(G,k,et,tt,X){let F=!1;const H=v(G,tt,et,k);l!==H&&(l=H,d(l.object)),F=x(G,tt,et,X),F&&M(G,tt,et,X),X!==null&&t.update(X,o.ELEMENT_ARRAY_BUFFER),(F||c)&&(c=!1,C(G,k,et,tt),X!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function p(){return o.createVertexArray()}function d(G){return o.bindVertexArray(G)}function _(G){return o.deleteVertexArray(G)}function v(G,k,et,tt){const X=tt.wireframe===!0;let F=a[k.id];F===void 0&&(F={},a[k.id]=F);const H=G.isInstancedMesh===!0?G.id:0;let J=F[H];J===void 0&&(J={},F[H]=J);let ft=J[et.id];ft===void 0&&(ft={},J[et.id]=ft);let V=ft[X];return V===void 0&&(V=g(p()),ft[X]=V),V}function g(G){const k=[],et=[],tt=[];for(let X=0;X<n;X++)k[X]=0,et[X]=0,tt[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:et,attributeDivisors:tt,object:G,attributes:{},index:null}}function x(G,k,et,tt){const X=l.attributes,F=k.attributes;let H=0;const J=et.getAttributes();for(const ft in J)if(J[ft].location>=0){const I=X[ft];let K=F[ft];if(K===void 0&&(ft==="instanceMatrix"&&G.instanceMatrix&&(K=G.instanceMatrix),ft==="instanceColor"&&G.instanceColor&&(K=G.instanceColor)),I===void 0||I.attribute!==K||K&&I.data!==K.data)return!0;H++}return l.attributesNum!==H||l.index!==tt}function M(G,k,et,tt){const X={},F=k.attributes;let H=0;const J=et.getAttributes();for(const ft in J)if(J[ft].location>=0){let I=F[ft];I===void 0&&(ft==="instanceMatrix"&&G.instanceMatrix&&(I=G.instanceMatrix),ft==="instanceColor"&&G.instanceColor&&(I=G.instanceColor));const K={};K.attribute=I,I&&I.data&&(K.data=I.data),X[ft]=K,H++}l.attributes=X,l.attributesNum=H,l.index=tt}function E(){const G=l.newAttributes;for(let k=0,et=G.length;k<et;k++)G[k]=0}function S(G){y(G,0)}function y(G,k){const et=l.newAttributes,tt=l.enabledAttributes,X=l.attributeDivisors;et[G]=1,tt[G]===0&&(o.enableVertexAttribArray(G),tt[G]=1),X[G]!==k&&(o.vertexAttribDivisor(G,k),X[G]=k)}function A(){const G=l.newAttributes,k=l.enabledAttributes;for(let et=0,tt=k.length;et<tt;et++)k[et]!==G[et]&&(o.disableVertexAttribArray(et),k[et]=0)}function D(G,k,et,tt,X,F,H){H===!0?o.vertexAttribIPointer(G,k,et,X,F):o.vertexAttribPointer(G,k,et,tt,X,F)}function C(G,k,et,tt){E();const X=tt.attributes,F=et.getAttributes(),H=k.defaultAttributeValues;for(const J in F){const ft=F[J];if(ft.location>=0){let V=X[J];if(V===void 0&&(J==="instanceMatrix"&&G.instanceMatrix&&(V=G.instanceMatrix),J==="instanceColor"&&G.instanceColor&&(V=G.instanceColor)),V!==void 0){const I=V.normalized,K=V.itemSize,xt=t.get(V);if(xt===void 0)continue;const Mt=xt.buffer,Ut=xt.type,it=xt.bytesPerElement,vt=Ut===o.INT||Ut===o.UNSIGNED_INT||V.gpuType===ig;if(V.isInterleavedBufferAttribute){const Et=V.data,It=Et.stride,ne=V.offset;if(Et.isInstancedInterleavedBuffer){for(let Zt=0;Zt<ft.locationSize;Zt++)y(ft.location+Zt,Et.meshPerAttribute);G.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Zt=0;Zt<ft.locationSize;Zt++)S(ft.location+Zt);o.bindBuffer(o.ARRAY_BUFFER,Mt);for(let Zt=0;Zt<ft.locationSize;Zt++)D(ft.location+Zt,K/ft.locationSize,Ut,I,It*it,(ne+K/ft.locationSize*Zt)*it,vt)}else{if(V.isInstancedBufferAttribute){for(let Et=0;Et<ft.locationSize;Et++)y(ft.location+Et,V.meshPerAttribute);G.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Et=0;Et<ft.locationSize;Et++)S(ft.location+Et);o.bindBuffer(o.ARRAY_BUFFER,Mt);for(let Et=0;Et<ft.locationSize;Et++)D(ft.location+Et,K/ft.locationSize,Ut,I,K*it,K/ft.locationSize*Et*it,vt)}}else if(H!==void 0){const I=H[J];if(I!==void 0)switch(I.length){case 2:o.vertexAttrib2fv(ft.location,I);break;case 3:o.vertexAttrib3fv(ft.location,I);break;case 4:o.vertexAttrib4fv(ft.location,I);break;default:o.vertexAttrib1fv(ft.location,I)}}}}A()}function P(){O();for(const G in a){const k=a[G];for(const et in k){const tt=k[et];for(const X in tt){const F=tt[X];for(const H in F)_(F[H].object),delete F[H];delete tt[X]}}delete a[G]}}function N(G){if(a[G.id]===void 0)return;const k=a[G.id];for(const et in k){const tt=k[et];for(const X in tt){const F=tt[X];for(const H in F)_(F[H].object),delete F[H];delete tt[X]}}delete a[G.id]}function w(G){for(const k in a){const et=a[k];for(const tt in et){const X=et[tt];if(X[G.id]===void 0)continue;const F=X[G.id];for(const H in F)_(F[H].object),delete F[H];delete X[G.id]}}}function T(G){for(const k in a){const et=a[k],tt=G.isInstancedMesh===!0?G.id:0,X=et[tt];if(X!==void 0){for(const F in X){const H=X[F];for(const J in H)_(H[J].object),delete H[J];delete X[F]}delete et[tt],Object.keys(et).length===0&&delete a[k]}}}function O(){B(),c=!0,l!==r&&(l=r,d(l.object))}function B(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:f,reset:O,resetDefaultState:B,dispose:P,releaseStatesOfGeometry:N,releaseStatesOfObject:T,releaseStatesOfProgram:w,initAttributes:E,enableAttribute:S,disableUnusedAttributes:A}}function Ww(o,t,n){let a;function r(p){a=p}function l(p,d){o.drawArrays(a,p,d),n.update(d,a,1)}function c(p,d,_){_!==0&&(o.drawArraysInstanced(a,p,d,_),n.update(d,a,_))}function f(p,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,d,0,_);let g=0;for(let x=0;x<_;x++)g+=d[x];n.update(g,a,1)}this.setMode=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function Yw(o,t,n,a){let r;function l(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=o.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(w){return!(w!==$a&&a.convert(w)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(w){const T=w===ns&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==ga&&a.convert(w)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==dr&&!T)}function p(w){if(w==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const _=p(d);_!==d&&(_e("WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const v=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&_e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),A=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),P=o.getParameter(o.MAX_SAMPLES),N=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:x,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:A,maxVaryings:D,maxFragmentUniforms:C,maxSamples:P,samples:N}}function qw(o){const t=this;let n=null,a=0,r=!1,l=!1;const c=new bo,f=new Ee,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const x=v.length!==0||g||a!==0||r;return r=g,a=v.length,x},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,g){n=_(v,g,0)},this.setState=function(v,g,x){const M=v.clippingPlanes,E=v.clipIntersection,S=v.clipShadows,y=o.get(v);if(!r||M===null||M.length===0||l&&!S)l?_(null):d();else{const A=l?0:a,D=A*4;let C=y.clippingState||null;p.value=C,C=_(M,g,D,x);for(let P=0;P!==D;++P)C[P]=n[P];y.clippingState=C,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=A}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function _(v,g,x,M){const E=v!==null?v.length:0;let S=null;if(E!==0){if(S=p.value,M!==!0||S===null){const y=x+E*4,A=g.matrixWorldInverse;f.getNormalMatrix(A),(S===null||S.length<y)&&(S=new Float32Array(y));for(let D=0,C=x;D!==E;++D,C+=4)c.copy(v[D]).applyMatrix4(A,f),c.normal.toArray(S,C),S[C+3]=c.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,S}}const Is=4,mM=[.125,.215,.35,.446,.526,.582],wo=20,jw=256,hc=new vg,_M=new qe;let x_=null,S_=0,y_=0,M_=!1;const Zw=new lt;class gM{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,r=100,l={}){const{size:c=256,position:f=Zw}=l;x_=this._renderer.getRenderTarget(),S_=this._renderer.getActiveCubeFace(),y_=this._renderer.getActiveMipmapLevel(),M_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,r,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=SM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(x_,S_,y_),this._renderer.xr.enabled=M_,t.scissorTest=!1,Hl(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Vo||t.mapping===su?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),x_=this._renderer.getRenderTarget(),S_=this._renderer.getActiveCubeFace(),y_=this._renderer.getActiveMipmapLevel(),M_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:ns,format:$a,colorSpace:hd,depthBuffer:!1},r=vM(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vM(t,n,a);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Kw(l)),this._blurMaterial=Jw(l,t,n),this._ggxMaterial=Qw(l,t,n)}return r}_compileMaterial(t){const n=new tr(new er,t);this._renderer.compile(n,hc)}_sceneToCubeUV(t,n,a,r,l){const p=new Fa(90,1,n,a),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,x=v.toneMapping;v.getClearColor(_M),v.toneMapping=gr,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(r),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new tr(new nf,new dg({name:"PMREM.Background",side:Zi,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,S=E.material;let y=!1;const A=t.background;A?A.isColor&&(S.color.copy(A),t.background=null,y=!0):(S.color.copy(_M),y=!0);for(let D=0;D<6;D++){const C=D%3;C===0?(p.up.set(0,d[D],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+_[D],l.y,l.z)):C===1?(p.up.set(0,0,d[D]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+_[D],l.z)):(p.up.set(0,d[D],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+_[D]));const P=this._cubeSize;Hl(r,C*P,D>2?P:0,P,P),v.setRenderTarget(r),y&&v.render(E,p),v.render(t,p)}v.toneMapping=x,v.autoClear=g,t.background=A}_textureToCubeUV(t,n){const a=this._renderer,r=t.mapping===Vo||t.mapping===su;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=SM()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xM());const l=r?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=t;const p=this._cubeSize;Hl(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(c,hc)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let l=1;l<r;l++)this._applyGGXFilter(t,l-1,l);n.autoClear=a}_applyGGXFilter(t,n,a){const r=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[a];f.material=c;const p=c.uniforms,d=a/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),v=Math.sqrt(d*d-_*_),g=0+d*1.25,x=v*g,{_lodMax:M}=this,E=this._sizeLods[a],S=3*E*(a>M-Is?a-M+Is:0),y=4*(this._cubeSize-E);p.envMap.value=t.texture,p.roughness.value=x,p.mipInt.value=M-n,Hl(l,S,y,3*E,2*E),r.setRenderTarget(l),r.render(f,hc),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=M-a,Hl(t,S,y,3*E,2*E),r.setRenderTarget(t),r.render(f,hc)}_blur(t,n,a,r,l){const c=this._pingPongRenderTarget;this._halfBlur(t,c,n,a,r,"latitudinal",l),this._halfBlur(c,t,a,a,r,"longitudinal",l)}_halfBlur(t,n,a,r,l,c,f){const p=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[r];v.material=d;const g=d.uniforms,x=this._sizeLods[a]-1,M=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*wo-1),E=l/M,S=isFinite(l)?1+Math.floor(_*E):wo;S>wo&&_e(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${wo}`);const y=[];let A=0;for(let w=0;w<wo;++w){const T=w/E,O=Math.exp(-T*T/2);y.push(O),w===0?A+=O:w<S&&(A+=2*O)}for(let w=0;w<y.length;w++)y[w]=y[w]/A;g.envMap.value=t.texture,g.samples.value=S,g.weights.value=y,g.latitudinal.value=c==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:D}=this;g.dTheta.value=M,g.mipInt.value=D-a;const C=this._sizeLods[r],P=3*C*(r>D-Is?r-D+Is:0),N=4*(this._cubeSize-C);Hl(n,P,N,3*C,2*C),p.setRenderTarget(n),p.render(v,hc)}}function Kw(o){const t=[],n=[],a=[];let r=o;const l=o-Is+1+mM.length;for(let c=0;c<l;c++){const f=Math.pow(2,r);t.push(f);let p=1/f;c>o-Is?p=mM[c-o+Is-1]:c===0&&(p=0),n.push(p);const d=1/(f-2),_=-d,v=1+d,g=[_,_,v,_,v,v,_,_,v,v,_,v],x=6,M=6,E=3,S=2,y=1,A=new Float32Array(E*M*x),D=new Float32Array(S*M*x),C=new Float32Array(y*M*x);for(let N=0;N<x;N++){const w=N%3*2/3-1,T=N>2?0:-1,O=[w,T,0,w+2/3,T,0,w+2/3,T+1,0,w,T,0,w+2/3,T+1,0,w,T+1,0];A.set(O,E*M*N),D.set(g,S*M*N);const B=[N,N,N,N,N,N];C.set(B,y*M*N)}const P=new er;P.setAttribute("position",new xr(A,E)),P.setAttribute("uv",new xr(D,S)),P.setAttribute("faceIndex",new xr(C,y)),a.push(new tr(P,null)),r>Is&&r--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function vM(o,t,n){const a=new vr(o,t,n);return a.texture.mapping=Ad,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Hl(o,t,n,a,r){o.viewport.set(t,n,a,r),o.scissor.set(t,n,a,r)}function Qw(o,t,n){return new Mr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jw,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cd(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Jr,depthTest:!1,depthWrite:!1})}function Jw(o,t,n){const a=new Float32Array(wo),r=new lt(0,1,0);return new Mr({name:"SphericalGaussianBlur",defines:{n:wo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Jr,depthTest:!1,depthWrite:!1})}function xM(){return new Mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jr,depthTest:!1,depthWrite:!1})}function SM(){return new Mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jr,depthTest:!1,depthWrite:!1})}function Cd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Z1 extends vr{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},r=[a,a,a,a,a,a];this.texture=new V1(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new nf(5,5,5),l=new Mr({name:"CubemapFromEquirect",uniforms:lu(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Zi,blending:Jr});l.uniforms.tEquirect.value=n;const c=new tr(r,l),f=n.minFilter;return n.minFilter===Do&&(n.minFilter=Ai),new aC(1,10,this).update(t,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(t,n=!0,a=!0,r=!0){const l=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(n,a,r);t.setRenderTarget(l)}}function $w(o){let t=new WeakMap,n=new WeakMap,a=null;function r(g,x=!1){return g==null?null:x?c(g):l(g)}function l(g){if(g&&g.isTexture){const x=g.mapping;if(x===km||x===Xm)if(t.has(g)){const M=t.get(g).texture;return f(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const E=new Z1(M.height);return E.fromEquirectangularTexture(o,g),t.set(g,E),g.addEventListener("dispose",d),f(E.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const x=g.mapping,M=x===km||x===Xm,E=x===Vo||x===su;if(M||E){let S=n.get(g);const y=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return a===null&&(a=new gM(o)),S=M?a.fromEquirectangular(g,S):a.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,n.set(g,S),S.texture;if(S!==void 0)return S.texture;{const A=g.image;return M&&A&&A.height>0||E&&A&&p(A)?(a===null&&(a=new gM(o)),S=M?a.fromEquirectangular(g):a.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,n.set(g,S),g.addEventListener("dispose",_),S.texture):null}}}return g}function f(g,x){return x===km?g.mapping=Vo:x===Xm&&(g.mapping=su),g}function p(g){let x=0;const M=6;for(let E=0;E<M;E++)g[E]!==void 0&&x++;return x===M}function d(g){const x=g.target;x.removeEventListener("dispose",d);const M=t.get(x);M!==void 0&&(t.delete(x),M.dispose())}function _(g){const x=g.target;x.removeEventListener("dispose",_);const M=n.get(x);M!==void 0&&(n.delete(x),M.dispose())}function v(){t=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:r,dispose:v}}function t3(o){const t={};function n(a){if(t[a]!==void 0)return t[a];const r=o.getExtension(a);return t[a]=r,r}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const r=n(a);return r===null&&R0("WebGLRenderer: "+a+" extension not supported."),r}}}function e3(o,t,n,a){const r={},l=new WeakMap;function c(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const M in g.attributes)t.remove(g.attributes[M]);g.removeEventListener("dispose",c),delete r[g.id];const x=l.get(g);x&&(t.remove(x),l.delete(g)),a.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function f(v,g){return r[g.id]===!0||(g.addEventListener("dispose",c),r[g.id]=!0,n.memory.geometries++),g}function p(v){const g=v.attributes;for(const x in g)t.update(g[x],o.ARRAY_BUFFER)}function d(v){const g=[],x=v.index,M=v.attributes.position;let E=0;if(M===void 0)return;if(x!==null){const A=x.array;E=x.version;for(let D=0,C=A.length;D<C;D+=3){const P=A[D+0],N=A[D+1],w=A[D+2];g.push(P,N,N,w,w,P)}}else{const A=M.array;E=M.version;for(let D=0,C=A.length/3-1;D<C;D+=3){const P=D+0,N=D+1,w=D+2;g.push(P,N,N,w,w,P)}}const S=new(M.count>=65535?G1:H1)(g,1);S.version=E;const y=l.get(v);y&&t.remove(y),l.set(v,S)}function _(v){const g=l.get(v);if(g){const x=v.index;x!==null&&g.version<x.version&&d(v)}else d(v);return l.get(v)}return{get:f,update:p,getWireframeAttribute:_}}function n3(o,t,n){let a;function r(v){a=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function p(v,g){o.drawElements(a,g,l,v*c),n.update(g,a,1)}function d(v,g,x){x!==0&&(o.drawElementsInstanced(a,g,l,v*c,x),n.update(g,a,x))}function _(v,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,g,0,l,v,0,x);let E=0;for(let S=0;S<x;S++)E+=g[S];n.update(E,a,1)}this.setMode=r,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=_}function i3(o){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,c,f){switch(n.calls++,c){case o.TRIANGLES:n.triangles+=f*(l/3);break;case o.LINES:n.lines+=f*(l/2);break;case o.LINE_STRIP:n.lines+=f*(l-1);break;case o.LINE_LOOP:n.lines+=f*l;break;case o.POINTS:n.points+=f*l;break;default:Ze("WebGLInfo: Unknown draw mode:",c);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:a}}function a3(o,t,n){const a=new WeakMap,r=new zn;function l(c,f,p){const d=c.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=_!==void 0?_.length:0;let g=a.get(f);if(g===void 0||g.count!==v){let B=function(){T.dispose(),a.delete(f),f.removeEventListener("dispose",B)};var x=B;g!==void 0&&g.texture.dispose();const M=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],A=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let C=0;M===!0&&(C=1),E===!0&&(C=2),S===!0&&(C=3);let P=f.attributes.position.count*C,N=1;P>t.maxTextureSize&&(N=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const w=new Float32Array(P*N*4*v),T=new F1(w,P,N,v);T.type=dr,T.needsUpdate=!0;const O=C*4;for(let G=0;G<v;G++){const k=y[G],et=A[G],tt=D[G],X=P*N*4*G;for(let F=0;F<k.count;F++){const H=F*O;M===!0&&(r.fromBufferAttribute(k,F),w[X+H+0]=r.x,w[X+H+1]=r.y,w[X+H+2]=r.z,w[X+H+3]=0),E===!0&&(r.fromBufferAttribute(et,F),w[X+H+4]=r.x,w[X+H+5]=r.y,w[X+H+6]=r.z,w[X+H+7]=0),S===!0&&(r.fromBufferAttribute(tt,F),w[X+H+8]=r.x,w[X+H+9]=r.y,w[X+H+10]=r.z,w[X+H+11]=tt.itemSize===4?r.w:1)}}g={count:v,texture:T,size:new pe(P,N)},a.set(f,g),f.addEventListener("dispose",B)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",c.morphTexture,n);else{let M=0;for(let S=0;S<d.length;S++)M+=d[S];const E=f.morphTargetsRelative?1:1-M;p.getUniforms().setValue(o,"morphTargetBaseInfluence",E),p.getUniforms().setValue(o,"morphTargetInfluences",d)}p.getUniforms().setValue(o,"morphTargetsTexture",g.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:l}}function r3(o,t,n,a,r){let l=new WeakMap;function c(d){const _=r.render.frame,v=d.geometry,g=t.get(d,v);if(l.get(g)!==_&&(t.update(g),l.set(g,_)),d.isInstancedMesh&&(d.hasEventListener("dispose",p)===!1&&d.addEventListener("dispose",p),l.get(d)!==_&&(n.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,o.ARRAY_BUFFER),l.set(d,_))),d.isSkinnedMesh){const x=d.skeleton;l.get(x)!==_&&(x.update(),l.set(x,_))}return g}function f(){l=new WeakMap}function p(d){const _=d.target;_.removeEventListener("dispose",p),a.releaseStatesOfObject(_),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:c,dispose:f}}const s3={[y1]:"LINEAR_TONE_MAPPING",[M1]:"REINHARD_TONE_MAPPING",[E1]:"CINEON_TONE_MAPPING",[b1]:"ACES_FILMIC_TONE_MAPPING",[A1]:"AGX_TONE_MAPPING",[R1]:"NEUTRAL_TONE_MAPPING",[T1]:"CUSTOM_TONE_MAPPING"};function o3(o,t,n,a,r){const l=new vr(t,n,{type:o,depthBuffer:a,stencilBuffer:r,depthTexture:a?new ou(t,n):void 0}),c=new vr(t,n,{type:ns,depthBuffer:!1,stencilBuffer:!1}),f=new er;f.setAttribute("position",new Bi([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Bi([0,2,0,0,2,0],2));const p=new YR({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new tr(f,p),_=new vg(-1,1,1,-1,0,1);let v=null,g=null,x=!1,M,E=null,S=[],y=!1;this.setSize=function(A,D){l.setSize(A,D),c.setSize(A,D);for(let C=0;C<S.length;C++){const P=S[C];P.setSize&&P.setSize(A,D)}},this.setEffects=function(A){S=A,y=S.length>0&&S[0].isRenderPass===!0;const D=l.width,C=l.height;for(let P=0;P<S.length;P++){const N=S[P];N.setSize&&N.setSize(D,C)}},this.begin=function(A,D){if(x||A.toneMapping===gr&&S.length===0)return!1;if(E=D,D!==null){const C=D.width,P=D.height;(l.width!==C||l.height!==P)&&this.setSize(C,P)}return y===!1&&A.setRenderTarget(l),M=A.toneMapping,A.toneMapping=gr,!0},this.hasRenderPass=function(){return y},this.end=function(A,D){A.toneMapping=M,x=!0;let C=l,P=c;for(let N=0;N<S.length;N++){const w=S[N];if(w.enabled!==!1&&(w.render(A,P,C,D),w.needsSwap!==!1)){const T=C;C=P,P=T}}if(v!==A.outputColorSpace||g!==A.toneMapping){v=A.outputColorSpace,g=A.toneMapping,p.defines={},We.getTransfer(v)===un&&(p.defines.SRGB_TRANSFER="");const N=s3[g];N&&(p.defines[N]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=C.texture,A.setRenderTarget(E),A.render(d,_),E=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),c.dispose(),f.dispose(),p.dispose()}}const K1=new Ri,w0=new ou(1,1),Q1=new F1,J1=new MR,$1=new V1,yM=[],MM=[],EM=new Float32Array(16),bM=new Float32Array(9),TM=new Float32Array(4);function _u(o,t,n){const a=o[0];if(a<=0||a>0)return o;const r=t*n;let l=yM[r];if(l===void 0&&(l=new Float32Array(r),yM[r]=l),t!==0){a.toArray(l,0);for(let c=1,f=0;c!==t;++c)f+=n,o[c].toArray(l,f)}return l}function ni(o,t){if(o.length!==t.length)return!1;for(let n=0,a=o.length;n<a;n++)if(o[n]!==t[n])return!1;return!0}function ii(o,t){for(let n=0,a=t.length;n<a;n++)o[n]=t[n]}function wd(o,t){let n=MM[t];n===void 0&&(n=new Int32Array(t),MM[t]=n);for(let a=0;a!==t;++a)n[a]=o.allocateTextureUnit();return n}function l3(o,t){const n=this.cache;n[0]!==t&&(o.uniform1f(this.addr,t),n[0]=t)}function u3(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ni(n,t))return;o.uniform2fv(this.addr,t),ii(n,t)}}function c3(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ni(n,t))return;o.uniform3fv(this.addr,t),ii(n,t)}}function f3(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ni(n,t))return;o.uniform4fv(this.addr,t),ii(n,t)}}function h3(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(ni(n,t))return;o.uniformMatrix2fv(this.addr,!1,t),ii(n,t)}else{if(ni(n,a))return;TM.set(a),o.uniformMatrix2fv(this.addr,!1,TM),ii(n,a)}}function d3(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(ni(n,t))return;o.uniformMatrix3fv(this.addr,!1,t),ii(n,t)}else{if(ni(n,a))return;bM.set(a),o.uniformMatrix3fv(this.addr,!1,bM),ii(n,a)}}function p3(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(ni(n,t))return;o.uniformMatrix4fv(this.addr,!1,t),ii(n,t)}else{if(ni(n,a))return;EM.set(a),o.uniformMatrix4fv(this.addr,!1,EM),ii(n,a)}}function m3(o,t){const n=this.cache;n[0]!==t&&(o.uniform1i(this.addr,t),n[0]=t)}function _3(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ni(n,t))return;o.uniform2iv(this.addr,t),ii(n,t)}}function g3(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ni(n,t))return;o.uniform3iv(this.addr,t),ii(n,t)}}function v3(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ni(n,t))return;o.uniform4iv(this.addr,t),ii(n,t)}}function x3(o,t){const n=this.cache;n[0]!==t&&(o.uniform1ui(this.addr,t),n[0]=t)}function S3(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ni(n,t))return;o.uniform2uiv(this.addr,t),ii(n,t)}}function y3(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ni(n,t))return;o.uniform3uiv(this.addr,t),ii(n,t)}}function M3(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ni(n,t))return;o.uniform4uiv(this.addr,t),ii(n,t)}}function E3(o,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r);let l;this.type===o.SAMPLER_2D_SHADOW?(w0.compareFunction=n.isReversedDepthBuffer()?cg:ug,l=w0):l=K1,n.setTexture2D(t||l,r)}function b3(o,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture3D(t||J1,r)}function T3(o,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTextureCube(t||$1,r)}function A3(o,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture2DArray(t||Q1,r)}function R3(o){switch(o){case 5126:return l3;case 35664:return u3;case 35665:return c3;case 35666:return f3;case 35674:return h3;case 35675:return d3;case 35676:return p3;case 5124:case 35670:return m3;case 35667:case 35671:return _3;case 35668:case 35672:return g3;case 35669:case 35673:return v3;case 5125:return x3;case 36294:return S3;case 36295:return y3;case 36296:return M3;case 35678:case 36198:case 36298:case 36306:case 35682:return E3;case 35679:case 36299:case 36307:return b3;case 35680:case 36300:case 36308:case 36293:return T3;case 36289:case 36303:case 36311:case 36292:return A3}}function C3(o,t){o.uniform1fv(this.addr,t)}function w3(o,t){const n=_u(t,this.size,2);o.uniform2fv(this.addr,n)}function D3(o,t){const n=_u(t,this.size,3);o.uniform3fv(this.addr,n)}function U3(o,t){const n=_u(t,this.size,4);o.uniform4fv(this.addr,n)}function N3(o,t){const n=_u(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function L3(o,t){const n=_u(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function O3(o,t){const n=_u(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function P3(o,t){o.uniform1iv(this.addr,t)}function z3(o,t){o.uniform2iv(this.addr,t)}function F3(o,t){o.uniform3iv(this.addr,t)}function I3(o,t){o.uniform4iv(this.addr,t)}function B3(o,t){o.uniform1uiv(this.addr,t)}function H3(o,t){o.uniform2uiv(this.addr,t)}function G3(o,t){o.uniform3uiv(this.addr,t)}function V3(o,t){o.uniform4uiv(this.addr,t)}function k3(o,t,n){const a=this.cache,r=t.length,l=wd(n,r);ni(a,l)||(o.uniform1iv(this.addr,l),ii(a,l));let c;this.type===o.SAMPLER_2D_SHADOW?c=w0:c=K1;for(let f=0;f!==r;++f)n.setTexture2D(t[f]||c,l[f])}function X3(o,t,n){const a=this.cache,r=t.length,l=wd(n,r);ni(a,l)||(o.uniform1iv(this.addr,l),ii(a,l));for(let c=0;c!==r;++c)n.setTexture3D(t[c]||J1,l[c])}function W3(o,t,n){const a=this.cache,r=t.length,l=wd(n,r);ni(a,l)||(o.uniform1iv(this.addr,l),ii(a,l));for(let c=0;c!==r;++c)n.setTextureCube(t[c]||$1,l[c])}function Y3(o,t,n){const a=this.cache,r=t.length,l=wd(n,r);ni(a,l)||(o.uniform1iv(this.addr,l),ii(a,l));for(let c=0;c!==r;++c)n.setTexture2DArray(t[c]||Q1,l[c])}function q3(o){switch(o){case 5126:return C3;case 35664:return w3;case 35665:return D3;case 35666:return U3;case 35674:return N3;case 35675:return L3;case 35676:return O3;case 5124:case 35670:return P3;case 35667:case 35671:return z3;case 35668:case 35672:return F3;case 35669:case 35673:return I3;case 5125:return B3;case 36294:return H3;case 36295:return G3;case 36296:return V3;case 35678:case 36198:case 36298:case 36306:case 35682:return k3;case 35679:case 36299:case 36307:return X3;case 35680:case 36300:case 36308:case 36293:return W3;case 36289:case 36303:case 36311:case 36292:return Y3}}class j3{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=R3(n.type)}}class Z3{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=q3(n.type)}}class K3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const r=this.seq;for(let l=0,c=r.length;l!==c;++l){const f=r[l];f.setValue(t,n[f.id],a)}}}const E_=/(\w+)(\])?(\[|\.)?/g;function AM(o,t){o.seq.push(t),o.map[t.id]=t}function Q3(o,t,n){const a=o.name,r=a.length;for(E_.lastIndex=0;;){const l=E_.exec(a),c=E_.lastIndex;let f=l[1];const p=l[2]==="]",d=l[3];if(p&&(f=f|0),d===void 0||d==="["&&c+2===r){AM(n,d===void 0?new j3(f,o,t):new Z3(f,o,t));break}else{let v=n.map[f];v===void 0&&(v=new K3(f),AM(n,v)),n=v}}}class $h{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let c=0;c<a;++c){const f=t.getActiveUniform(n,c),p=t.getUniformLocation(n,f.name);Q3(f,p,this)}const r=[],l=[];for(const c of this.seq)c.type===t.SAMPLER_2D_SHADOW||c.type===t.SAMPLER_CUBE_SHADOW||c.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(c):l.push(c);r.length>0&&(this.seq=r.concat(l))}setValue(t,n,a,r){const l=this.map[n];l!==void 0&&l.setValue(t,a,r)}setOptional(t,n,a){const r=n[a];r!==void 0&&this.setValue(t,a,r)}static upload(t,n,a,r){for(let l=0,c=n.length;l!==c;++l){const f=n[l],p=a[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,r)}}static seqWithValue(t,n){const a=[];for(let r=0,l=t.length;r!==l;++r){const c=t[r];c.id in n&&a.push(c)}return a}}function RM(o,t,n){const a=o.createShader(t);return o.shaderSource(a,n),o.compileShader(a),a}const J3=37297;let $3=0;function tD(o,t){const n=o.split(`
`),a=[],r=Math.max(t-6,0),l=Math.min(t+6,n.length);for(let c=r;c<l;c++){const f=c+1;a.push(`${f===t?">":" "} ${f}: ${n[c]}`)}return a.join(`
`)}const CM=new Ee;function eD(o){We._getMatrix(CM,We.workingColorSpace,o);const t=`mat3( ${CM.elements.map(n=>n.toFixed(4))} )`;switch(We.getTransfer(o)){case dd:return[t,"LinearTransferOETF"];case un:return[t,"sRGBTransferOETF"];default:return _e("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function wM(o,t,n){const a=o.getShaderParameter(t,o.COMPILE_STATUS),l=(o.getShaderInfoLog(t)||"").trim();if(a&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+l+`

`+tD(o.getShaderSource(t),f)}else return l}function nD(o,t){const n=eD(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const iD={[y1]:"Linear",[M1]:"Reinhard",[E1]:"Cineon",[b1]:"ACESFilmic",[A1]:"AgX",[R1]:"Neutral",[T1]:"Custom"};function aD(o,t){const n=iD[t];return n===void 0?(_e("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Oh=new lt;function rD(){We.getLuminanceCoefficients(Oh);const o=Oh.x.toFixed(4),t=Oh.y.toFixed(4),n=Oh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sD(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xc).join(`
`)}function oD(o){const t=[];for(const n in o){const a=o[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function lD(o,t){const n={},a=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const l=o.getActiveAttrib(t,r),c=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),n[c]={type:l.type,location:o.getAttribLocation(t,c),locationSize:f}}return n}function xc(o){return o!==""}function DM(o,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function UM(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const uD=/^[ \t]*#include +<([\w\d./]+)>/gm;function D0(o){return o.replace(uD,fD)}const cD=new Map;function fD(o,t){let n=Ue[t];if(n===void 0){const a=cD.get(t);if(a!==void 0)n=Ue[a],_e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return D0(n)}const hD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function NM(o){return o.replace(hD,dD)}function dD(o,t,n,a){let r="";for(let l=parseInt(t);l<parseInt(n);l++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return r}function LM(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const pD={[jh]:"SHADOWMAP_TYPE_PCF",[vc]:"SHADOWMAP_TYPE_VSM"};function mD(o){return pD[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _D={[Vo]:"ENVMAP_TYPE_CUBE",[su]:"ENVMAP_TYPE_CUBE",[Ad]:"ENVMAP_TYPE_CUBE_UV"};function gD(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":_D[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const vD={[su]:"ENVMAP_MODE_REFRACTION"};function xD(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":vD[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const SD={[S1]:"ENVMAP_BLENDING_MULTIPLY",[eR]:"ENVMAP_BLENDING_MIX",[nR]:"ENVMAP_BLENDING_ADD"};function yD(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":SD[o.combine]||"ENVMAP_BLENDING_NONE"}function MD(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function ED(o,t,n,a){const r=o.getContext(),l=n.defines;let c=n.vertexShader,f=n.fragmentShader;const p=mD(n),d=gD(n),_=xD(n),v=yD(n),g=MD(n),x=sD(n),M=oD(l),E=r.createProgram();let S,y,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(xc).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(xc).join(`
`),y.length>0&&(y+=`
`)):(S=[LM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xc).join(`
`),y=[LM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==gr?"#define TONE_MAPPING":"",n.toneMapping!==gr?Ue.tonemapping_pars_fragment:"",n.toneMapping!==gr?aD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,nD("linearToOutputTexel",n.outputColorSpace),rD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(xc).join(`
`)),c=D0(c),c=DM(c,n),c=UM(c,n),f=D0(f),f=DM(f,n),f=UM(f,n),c=NM(c),f=NM(f),n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",n.glslVersion===Xy?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const D=A+S+c,C=A+y+f,P=RM(r,r.VERTEX_SHADER,D),N=RM(r,r.FRAGMENT_SHADER,C);r.attachShader(E,P),r.attachShader(E,N),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function w(G){if(o.debug.checkShaderErrors){const k=r.getProgramInfoLog(E)||"",et=r.getShaderInfoLog(P)||"",tt=r.getShaderInfoLog(N)||"",X=k.trim(),F=et.trim(),H=tt.trim();let J=!0,ft=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(J=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,E,P,N);else{const V=wM(r,P,"vertex"),I=wM(r,N,"fragment");Ze("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+X+`
`+V+`
`+I)}else X!==""?_e("WebGLProgram: Program Info Log:",X):(F===""||H==="")&&(ft=!1);ft&&(G.diagnostics={runnable:J,programLog:X,vertexShader:{log:F,prefix:S},fragmentShader:{log:H,prefix:y}})}r.deleteShader(P),r.deleteShader(N),T=new $h(r,E),O=lD(r,E)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let O;this.getAttributes=function(){return O===void 0&&w(this),O};let B=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=r.getProgramParameter(E,J3)),B},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$3++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=P,this.fragmentShader=N,this}let bD=0;class TD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,r=this._getShaderStage(n),l=this._getShaderStage(a),c=this._getShaderCacheForMaterial(t);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new AD(t),n.set(t,a)),a}}class AD{constructor(t){this.id=bD++,this.code=t,this.usedTimes=0}}function RD(o){return o===ko||o===cd||o===fd}function CD(o,t,n,a,r,l){const c=new I1,f=new TD,p=new Set,d=[],_=new Map,v=a.logarithmicDepthBuffer;let g=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return p.add(T),T===0?"uv":`uv${T}`}function E(T,O,B,G,k,et){const tt=G.fog,X=k.geometry,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,J=t.get(T.envMap||F,H),ft=J&&J.mapping===Ad?J.image.height:null,V=x[T.type];T.precision!==null&&(g=a.getMaxPrecision(T.precision),g!==T.precision&&_e("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const I=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,K=I!==void 0?I.length:0;let xt=0;X.morphAttributes.position!==void 0&&(xt=1),X.morphAttributes.normal!==void 0&&(xt=2),X.morphAttributes.color!==void 0&&(xt=3);let Mt,Ut,it,vt;if(V){const Nt=fr[V];Mt=Nt.vertexShader,Ut=Nt.fragmentShader}else Mt=T.vertexShader,Ut=T.fragmentShader,f.update(T),it=f.getVertexShaderID(T),vt=f.getFragmentShaderID(T);const Et=o.getRenderTarget(),It=o.state.buffers.depth.getReversed(),ne=k.isInstancedMesh===!0,Zt=k.isBatchedMesh===!0,ye=!!T.map,qt=!!T.matcap,ie=!!J,ve=!!T.aoMap,se=!!T.lightMap,ut=!!T.bumpMap,we=!!T.normalMap,pn=!!T.displacementMap,j=!!T.emissiveMap,ge=!!T.metalnessMap,me=!!T.roughnessMap,ze=T.anisotropy>0,Lt=T.clearcoat>0,Me=T.dispersion>0,z=T.iridescence>0,R=T.sheen>0,Q=T.transmission>0,_t=ze&&!!T.anisotropyMap,bt=Lt&&!!T.clearcoatMap,zt=Lt&&!!T.clearcoatNormalMap,Dt=Lt&&!!T.clearcoatRoughnessMap,dt=z&&!!T.iridescenceMap,pt=z&&!!T.iridescenceThicknessMap,Bt=R&&!!T.sheenColorMap,Ht=R&&!!T.sheenRoughnessMap,Ft=!!T.specularMap,Ot=!!T.specularColorMap,Gt=!!T.specularIntensityMap,ce=Q&&!!T.transmissionMap,de=Q&&!!T.thicknessMap,Y=!!T.gradientMap,Rt=!!T.alphaMap,mt=T.alphaTest>0,Vt=!!T.alphaHash,Pt=!!T.extensions;let Tt=gr;T.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(Tt=o.toneMapping);const Ct={shaderID:V,shaderType:T.type,shaderName:T.name,vertexShader:Mt,fragmentShader:Ut,defines:T.defines,customVertexShaderID:it,customFragmentShaderID:vt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Zt,batchingColor:Zt&&k._colorsTexture!==null,instancing:ne,instancingColor:ne&&k.instanceColor!==null,instancingMorph:ne&&k.morphTexture!==null,outputColorSpace:Et===null?o.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:ye,matcap:qt,envMap:ie,envMapMode:ie&&J.mapping,envMapCubeUVHeight:ft,aoMap:ve,lightMap:se,bumpMap:ut,normalMap:we,displacementMap:pn,emissiveMap:j,normalMapObjectSpace:we&&T.normalMapType===rR,normalMapTangentSpace:we&&T.normalMapType===A0,packedNormalMap:we&&T.normalMapType===A0&&RD(T.normalMap.format),metalnessMap:ge,roughnessMap:me,anisotropy:ze,anisotropyMap:_t,clearcoat:Lt,clearcoatMap:bt,clearcoatNormalMap:zt,clearcoatRoughnessMap:Dt,dispersion:Me,iridescence:z,iridescenceMap:dt,iridescenceThicknessMap:pt,sheen:R,sheenColorMap:Bt,sheenRoughnessMap:Ht,specularMap:Ft,specularColorMap:Ot,specularIntensityMap:Gt,transmission:Q,transmissionMap:ce,thicknessMap:de,gradientMap:Y,opaque:T.transparent===!1&&T.blending===Kl&&T.alphaToCoverage===!1,alphaMap:Rt,alphaTest:mt,alphaHash:Vt,combine:T.combine,mapUv:ye&&M(T.map.channel),aoMapUv:ve&&M(T.aoMap.channel),lightMapUv:se&&M(T.lightMap.channel),bumpMapUv:ut&&M(T.bumpMap.channel),normalMapUv:we&&M(T.normalMap.channel),displacementMapUv:pn&&M(T.displacementMap.channel),emissiveMapUv:j&&M(T.emissiveMap.channel),metalnessMapUv:ge&&M(T.metalnessMap.channel),roughnessMapUv:me&&M(T.roughnessMap.channel),anisotropyMapUv:_t&&M(T.anisotropyMap.channel),clearcoatMapUv:bt&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:zt&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Dt&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&M(T.sheenRoughnessMap.channel),specularMapUv:Ft&&M(T.specularMap.channel),specularColorMapUv:Ot&&M(T.specularColorMap.channel),specularIntensityMapUv:Gt&&M(T.specularIntensityMap.channel),transmissionMapUv:ce&&M(T.transmissionMap.channel),thicknessMapUv:de&&M(T.thicknessMap.channel),alphaMapUv:Rt&&M(T.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(we||ze),vertexNormals:!!X.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!X.attributes.uv&&(ye||Rt),fog:!!tt,useFog:T.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||X.attributes.normal===void 0&&we===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:It,skinning:k.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:xt,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:et.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:Tt,decodeVideoTexture:ye&&T.map.isVideoTexture===!0&&We.getTransfer(T.map.colorSpace)===un,decodeVideoTextureEmissive:j&&T.emissiveMap.isVideoTexture===!0&&We.getTransfer(T.emissiveMap.colorSpace)===un,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===jr,flipSided:T.side===Zi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Pt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&T.extensions.multiDraw===!0||Zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ct.vertexUv1s=p.has(1),Ct.vertexUv2s=p.has(2),Ct.vertexUv3s=p.has(3),p.clear(),Ct}function S(T){const O=[];if(T.shaderID?O.push(T.shaderID):(O.push(T.customVertexShaderID),O.push(T.customFragmentShaderID)),T.defines!==void 0)for(const B in T.defines)O.push(B),O.push(T.defines[B]);return T.isRawShaderMaterial===!1&&(y(O,T),A(O,T),O.push(o.outputColorSpace)),O.push(T.customProgramCacheKey),O.join()}function y(T,O){T.push(O.precision),T.push(O.outputColorSpace),T.push(O.envMapMode),T.push(O.envMapCubeUVHeight),T.push(O.mapUv),T.push(O.alphaMapUv),T.push(O.lightMapUv),T.push(O.aoMapUv),T.push(O.bumpMapUv),T.push(O.normalMapUv),T.push(O.displacementMapUv),T.push(O.emissiveMapUv),T.push(O.metalnessMapUv),T.push(O.roughnessMapUv),T.push(O.anisotropyMapUv),T.push(O.clearcoatMapUv),T.push(O.clearcoatNormalMapUv),T.push(O.clearcoatRoughnessMapUv),T.push(O.iridescenceMapUv),T.push(O.iridescenceThicknessMapUv),T.push(O.sheenColorMapUv),T.push(O.sheenRoughnessMapUv),T.push(O.specularMapUv),T.push(O.specularColorMapUv),T.push(O.specularIntensityMapUv),T.push(O.transmissionMapUv),T.push(O.thicknessMapUv),T.push(O.combine),T.push(O.fogExp2),T.push(O.sizeAttenuation),T.push(O.morphTargetsCount),T.push(O.morphAttributeCount),T.push(O.numDirLights),T.push(O.numPointLights),T.push(O.numSpotLights),T.push(O.numSpotLightMaps),T.push(O.numHemiLights),T.push(O.numRectAreaLights),T.push(O.numDirLightShadows),T.push(O.numPointLightShadows),T.push(O.numSpotLightShadows),T.push(O.numSpotLightShadowsWithMaps),T.push(O.numLightProbes),T.push(O.shadowMapType),T.push(O.toneMapping),T.push(O.numClippingPlanes),T.push(O.numClipIntersection),T.push(O.depthPacking)}function A(T,O){c.disableAll(),O.instancing&&c.enable(0),O.instancingColor&&c.enable(1),O.instancingMorph&&c.enable(2),O.matcap&&c.enable(3),O.envMap&&c.enable(4),O.normalMapObjectSpace&&c.enable(5),O.normalMapTangentSpace&&c.enable(6),O.clearcoat&&c.enable(7),O.iridescence&&c.enable(8),O.alphaTest&&c.enable(9),O.vertexColors&&c.enable(10),O.vertexAlphas&&c.enable(11),O.vertexUv1s&&c.enable(12),O.vertexUv2s&&c.enable(13),O.vertexUv3s&&c.enable(14),O.vertexTangents&&c.enable(15),O.anisotropy&&c.enable(16),O.alphaHash&&c.enable(17),O.batching&&c.enable(18),O.dispersion&&c.enable(19),O.batchingColor&&c.enable(20),O.gradientMap&&c.enable(21),O.packedNormalMap&&c.enable(22),O.vertexNormals&&c.enable(23),T.push(c.mask),c.disableAll(),O.fog&&c.enable(0),O.useFog&&c.enable(1),O.flatShading&&c.enable(2),O.logarithmicDepthBuffer&&c.enable(3),O.reversedDepthBuffer&&c.enable(4),O.skinning&&c.enable(5),O.morphTargets&&c.enable(6),O.morphNormals&&c.enable(7),O.morphColors&&c.enable(8),O.premultipliedAlpha&&c.enable(9),O.shadowMapEnabled&&c.enable(10),O.doubleSided&&c.enable(11),O.flipSided&&c.enable(12),O.useDepthPacking&&c.enable(13),O.dithering&&c.enable(14),O.transmission&&c.enable(15),O.sheen&&c.enable(16),O.opaque&&c.enable(17),O.pointsUvs&&c.enable(18),O.decodeVideoTexture&&c.enable(19),O.decodeVideoTextureEmissive&&c.enable(20),O.alphaToCoverage&&c.enable(21),O.numLightProbeGrids>0&&c.enable(22),T.push(c.mask)}function D(T){const O=x[T.type];let B;if(O){const G=fr[O];B=kR.clone(G.uniforms)}else B=T.uniforms;return B}function C(T,O){let B=_.get(O);return B!==void 0?++B.usedTimes:(B=new ED(o,O,T,r),d.push(B),_.set(O,B)),B}function P(T){if(--T.usedTimes===0){const O=d.indexOf(T);d[O]=d[d.length-1],d.pop(),_.delete(T.cacheKey),T.destroy()}}function N(T){f.remove(T)}function w(){f.dispose()}return{getParameters:E,getProgramCacheKey:S,getUniforms:D,acquireProgram:C,releaseProgram:P,releaseShaderCache:N,programs:d,dispose:w}}function wD(){let o=new WeakMap;function t(c){return o.has(c)}function n(c){let f=o.get(c);return f===void 0&&(f={},o.set(c,f)),f}function a(c){o.delete(c)}function r(c,f,p){o.get(c)[f]=p}function l(){o=new WeakMap}return{has:t,get:n,remove:a,update:r,dispose:l}}function DD(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function OM(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function PM(){const o=[];let t=0;const n=[],a=[],r=[];function l(){t=0,n.length=0,a.length=0,r.length=0}function c(g){let x=0;return g.isInstancedMesh&&(x+=2),g.isSkinnedMesh&&(x+=1),x}function f(g,x,M,E,S,y){let A=o[t];return A===void 0?(A={id:g.id,object:g,geometry:x,material:M,materialVariant:c(g),groupOrder:E,renderOrder:g.renderOrder,z:S,group:y},o[t]=A):(A.id=g.id,A.object=g,A.geometry=x,A.material=M,A.materialVariant=c(g),A.groupOrder=E,A.renderOrder=g.renderOrder,A.z=S,A.group=y),t++,A}function p(g,x,M,E,S,y){const A=f(g,x,M,E,S,y);M.transmission>0?a.push(A):M.transparent===!0?r.push(A):n.push(A)}function d(g,x,M,E,S,y){const A=f(g,x,M,E,S,y);M.transmission>0?a.unshift(A):M.transparent===!0?r.unshift(A):n.unshift(A)}function _(g,x){n.length>1&&n.sort(g||DD),a.length>1&&a.sort(x||OM),r.length>1&&r.sort(x||OM)}function v(){for(let g=t,x=o.length;g<x;g++){const M=o[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:a,transparent:r,init:l,push:p,unshift:d,finish:v,sort:_}}function UD(){let o=new WeakMap;function t(a,r){const l=o.get(a);let c;return l===void 0?(c=new PM,o.set(a,[c])):r>=l.length?(c=new PM,l.push(c)):c=l[r],c}function n(){o=new WeakMap}return{get:t,dispose:n}}function ND(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new lt,color:new qe};break;case"SpotLight":n={position:new lt,direction:new lt,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new lt,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new lt,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new lt,halfWidth:new lt,halfHeight:new lt};break}return o[t.id]=n,n}}}function LD(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=n,n}}}let OD=0;function PD(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function zD(o){const t=new ND,n=LD(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new lt);const r=new lt,l=new Vn,c=new Vn;function f(d){let _=0,v=0,g=0;for(let O=0;O<9;O++)a.probe[O].set(0,0,0);let x=0,M=0,E=0,S=0,y=0,A=0,D=0,C=0,P=0,N=0,w=0;d.sort(PD);for(let O=0,B=d.length;O<B;O++){const G=d[O],k=G.color,et=G.intensity,tt=G.distance;let X=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===ko?X=G.shadow.map.texture:X=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=k.r*et,v+=k.g*et,g+=k.b*et;else if(G.isLightProbe){for(let F=0;F<9;F++)a.probe[F].addScaledVector(G.sh.coefficients[F],et);w++}else if(G.isDirectionalLight){const F=t.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,J=n.get(G);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,a.directionalShadow[x]=J,a.directionalShadowMap[x]=X,a.directionalShadowMatrix[x]=G.shadow.matrix,A++}a.directional[x]=F,x++}else if(G.isSpotLight){const F=t.get(G);F.position.setFromMatrixPosition(G.matrixWorld),F.color.copy(k).multiplyScalar(et),F.distance=tt,F.coneCos=Math.cos(G.angle),F.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),F.decay=G.decay,a.spot[E]=F;const H=G.shadow;if(G.map&&(a.spotLightMap[P]=G.map,P++,H.updateMatrices(G),G.castShadow&&N++),a.spotLightMatrix[E]=H.matrix,G.castShadow){const J=n.get(G);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,a.spotShadow[E]=J,a.spotShadowMap[E]=X,C++}E++}else if(G.isRectAreaLight){const F=t.get(G);F.color.copy(k).multiplyScalar(et),F.halfWidth.set(G.width*.5,0,0),F.halfHeight.set(0,G.height*.5,0),a.rectArea[S]=F,S++}else if(G.isPointLight){const F=t.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),F.distance=G.distance,F.decay=G.decay,G.castShadow){const H=G.shadow,J=n.get(G);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,J.shadowCameraNear=H.camera.near,J.shadowCameraFar=H.camera.far,a.pointShadow[M]=J,a.pointShadowMap[M]=X,a.pointShadowMatrix[M]=G.shadow.matrix,D++}a.point[M]=F,M++}else if(G.isHemisphereLight){const F=t.get(G);F.skyColor.copy(G.color).multiplyScalar(et),F.groundColor.copy(G.groundColor).multiplyScalar(et),a.hemi[y]=F,y++}}S>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Yt.LTC_FLOAT_1,a.rectAreaLTC2=Yt.LTC_FLOAT_2):(a.rectAreaLTC1=Yt.LTC_HALF_1,a.rectAreaLTC2=Yt.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=v,a.ambient[2]=g;const T=a.hash;(T.directionalLength!==x||T.pointLength!==M||T.spotLength!==E||T.rectAreaLength!==S||T.hemiLength!==y||T.numDirectionalShadows!==A||T.numPointShadows!==D||T.numSpotShadows!==C||T.numSpotMaps!==P||T.numLightProbes!==w)&&(a.directional.length=x,a.spot.length=E,a.rectArea.length=S,a.point.length=M,a.hemi.length=y,a.directionalShadow.length=A,a.directionalShadowMap.length=A,a.pointShadow.length=D,a.pointShadowMap.length=D,a.spotShadow.length=C,a.spotShadowMap.length=C,a.directionalShadowMatrix.length=A,a.pointShadowMatrix.length=D,a.spotLightMatrix.length=C+P-N,a.spotLightMap.length=P,a.numSpotLightShadowsWithMaps=N,a.numLightProbes=w,T.directionalLength=x,T.pointLength=M,T.spotLength=E,T.rectAreaLength=S,T.hemiLength=y,T.numDirectionalShadows=A,T.numPointShadows=D,T.numSpotShadows=C,T.numSpotMaps=P,T.numLightProbes=w,a.version=OD++)}function p(d,_){let v=0,g=0,x=0,M=0,E=0;const S=_.matrixWorldInverse;for(let y=0,A=d.length;y<A;y++){const D=d[y];if(D.isDirectionalLight){const C=a.directional[v];C.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(S),v++}else if(D.isSpotLight){const C=a.spot[x];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(S),x++}else if(D.isRectAreaLight){const C=a.rectArea[M];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),c.identity(),l.copy(D.matrixWorld),l.premultiply(S),c.extractRotation(l),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),M++}else if(D.isPointLight){const C=a.point[g];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),g++}else if(D.isHemisphereLight){const C=a.hemi[E];C.direction.setFromMatrixPosition(D.matrixWorld),C.direction.transformDirection(S),E++}}}return{setup:f,setupView:p,state:a}}function zM(o){const t=new zD(o),n=[],a=[],r=[];function l(g){v.camera=g,n.length=0,a.length=0,r.length=0}function c(g){n.push(g)}function f(g){a.push(g)}function p(g){r.push(g)}function d(){t.setup(n)}function _(g){t.setupView(n,g)}const v={lightsArray:n,shadowsArray:a,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:v,setupLights:d,setupLightsView:_,pushLight:c,pushShadow:f,pushLightProbeGrid:p}}function FD(o){let t=new WeakMap;function n(r,l=0){const c=t.get(r);let f;return c===void 0?(f=new zM(o),t.set(r,[f])):l>=c.length?(f=new zM(o),c.push(f)):f=c[l],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const ID=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,HD=[new lt(1,0,0),new lt(-1,0,0),new lt(0,1,0),new lt(0,-1,0),new lt(0,0,1),new lt(0,0,-1)],GD=[new lt(0,-1,0),new lt(0,-1,0),new lt(0,0,1),new lt(0,0,-1),new lt(0,-1,0),new lt(0,-1,0)],FM=new Vn,dc=new lt,b_=new lt;function VD(o,t,n){let a=new pg;const r=new pe,l=new pe,c=new zn,f=new ZR,p=new KR,d={},_=n.maxTextureSize,v={[es]:Zi,[Zi]:es,[jr]:jr},g=new Mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:ID,fragmentShader:BD}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const M=new er;M.setAttribute("position",new xr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new tr(M,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jh;let y=this.type;this.render=function(N,w,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;this.type===zA&&(_e("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=jh);const O=o.getRenderTarget(),B=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),k=o.state;k.setBlending(Jr),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const et=y!==this.type;et&&w.traverse(function(tt){tt.material&&(Array.isArray(tt.material)?tt.material.forEach(X=>X.needsUpdate=!0):tt.material.needsUpdate=!0)});for(let tt=0,X=N.length;tt<X;tt++){const F=N[tt],H=F.shadow;if(H===void 0){_e("WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const J=H.getFrameExtents();r.multiply(J),l.copy(H.mapSize),(r.x>_||r.y>_)&&(r.x>_&&(l.x=Math.floor(_/J.x),r.x=l.x*J.x,H.mapSize.x=l.x),r.y>_&&(l.y=Math.floor(_/J.y),r.y=l.y*J.y,H.mapSize.y=l.y));const ft=o.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ft,H.map===null||et===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===vc){if(F.isPointLight){_e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new vr(r.x,r.y,{format:ko,type:ns,minFilter:Ai,magFilter:Ai,generateMipmaps:!1}),H.map.texture.name=F.name+".shadowMap",H.map.depthTexture=new ou(r.x,r.y,dr),H.map.depthTexture.name=F.name+".shadowMapDepth",H.map.depthTexture.format=is,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=di,H.map.depthTexture.magFilter=di}else F.isPointLight?(H.map=new Z1(r.x),H.map.depthTexture=new GR(r.x,yr)):(H.map=new vr(r.x,r.y),H.map.depthTexture=new ou(r.x,r.y,yr)),H.map.depthTexture.name=F.name+".shadowMap",H.map.depthTexture.format=is,this.type===jh?(H.map.depthTexture.compareFunction=ft?cg:ug,H.map.depthTexture.minFilter=Ai,H.map.depthTexture.magFilter=Ai):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=di,H.map.depthTexture.magFilter=di);H.camera.updateProjectionMatrix()}const V=H.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<V;I++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,I),o.clear();else{I===0&&(o.setRenderTarget(H.map),o.clear());const K=H.getViewport(I);c.set(l.x*K.x,l.y*K.y,l.x*K.z,l.y*K.w),k.viewport(c)}if(F.isPointLight){const K=H.camera,xt=H.matrix,Mt=F.distance||K.far;Mt!==K.far&&(K.far=Mt,K.updateProjectionMatrix()),dc.setFromMatrixPosition(F.matrixWorld),K.position.copy(dc),b_.copy(K.position),b_.add(HD[I]),K.up.copy(GD[I]),K.lookAt(b_),K.updateMatrixWorld(),xt.makeTranslation(-dc.x,-dc.y,-dc.z),FM.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),H._frustum.setFromProjectionMatrix(FM,K.coordinateSystem,K.reversedDepth)}else H.updateMatrices(F);a=H.getFrustum(),C(w,T,H.camera,F,this.type)}H.isPointLightShadow!==!0&&this.type===vc&&A(H,T),H.needsUpdate=!1}y=this.type,S.needsUpdate=!1,o.setRenderTarget(O,B,G)};function A(N,w){const T=t.update(E);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new vr(r.x,r.y,{format:ko,type:ns})),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(w,null,T,g,E,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(w,null,T,x,E,null)}function D(N,w,T,O){let B=null;const G=T.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(G!==void 0)B=G;else if(B=T.isPointLight===!0?p:f,o.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const k=B.uuid,et=w.uuid;let tt=d[k];tt===void 0&&(tt={},d[k]=tt);let X=tt[et];X===void 0&&(X=B.clone(),tt[et]=X,w.addEventListener("dispose",P)),B=X}if(B.visible=w.visible,B.wireframe=w.wireframe,O===vc?B.side=w.shadowSide!==null?w.shadowSide:w.side:B.side=w.shadowSide!==null?w.shadowSide:v[w.side],B.alphaMap=w.alphaMap,B.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,B.map=w.map,B.clipShadows=w.clipShadows,B.clippingPlanes=w.clippingPlanes,B.clipIntersection=w.clipIntersection,B.displacementMap=w.displacementMap,B.displacementScale=w.displacementScale,B.displacementBias=w.displacementBias,B.wireframeLinewidth=w.wireframeLinewidth,B.linewidth=w.linewidth,T.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const k=o.properties.get(B);k.light=T}return B}function C(N,w,T,O,B){if(N.visible===!1)return;if(N.layers.test(w.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&B===vc)&&(!N.frustumCulled||a.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,N.matrixWorld);const et=t.update(N),tt=N.material;if(Array.isArray(tt)){const X=et.groups;for(let F=0,H=X.length;F<H;F++){const J=X[F],ft=tt[J.materialIndex];if(ft&&ft.visible){const V=D(N,ft,O,B);N.onBeforeShadow(o,N,w,T,et,V,J),o.renderBufferDirect(T,null,et,V,N,J),N.onAfterShadow(o,N,w,T,et,V,J)}}}else if(tt.visible){const X=D(N,tt,O,B);N.onBeforeShadow(o,N,w,T,et,X,null),o.renderBufferDirect(T,null,et,X,N,null),N.onAfterShadow(o,N,w,T,et,X,null)}}const k=N.children;for(let et=0,tt=k.length;et<tt;et++)C(k[et],w,T,O,B)}function P(N){N.target.removeEventListener("dispose",P);for(const T in d){const O=d[T],B=N.target.uuid;B in O&&(O[B].dispose(),delete O[B])}}}function kD(o,t){function n(){let Y=!1;const Rt=new zn;let mt=null;const Vt=new zn(0,0,0,0);return{setMask:function(Pt){mt!==Pt&&!Y&&(o.colorMask(Pt,Pt,Pt,Pt),mt=Pt)},setLocked:function(Pt){Y=Pt},setClear:function(Pt,Tt,Ct,Nt,oe){oe===!0&&(Pt*=Nt,Tt*=Nt,Ct*=Nt),Rt.set(Pt,Tt,Ct,Nt),Vt.equals(Rt)===!1&&(o.clearColor(Pt,Tt,Ct,Nt),Vt.copy(Rt))},reset:function(){Y=!1,mt=null,Vt.set(-1,0,0,0)}}}function a(){let Y=!1,Rt=!1,mt=null,Vt=null,Pt=null;return{setReversed:function(Tt){if(Rt!==Tt){const Ct=t.get("EXT_clip_control");Tt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),Rt=Tt;const Nt=Pt;Pt=null,this.setClear(Nt)}},getReversed:function(){return Rt},setTest:function(Tt){Tt?Et(o.DEPTH_TEST):It(o.DEPTH_TEST)},setMask:function(Tt){mt!==Tt&&!Y&&(o.depthMask(Tt),mt=Tt)},setFunc:function(Tt){if(Rt&&(Tt=mR[Tt]),Vt!==Tt){switch(Tt){case V_:o.depthFunc(o.NEVER);break;case k_:o.depthFunc(o.ALWAYS);break;case X_:o.depthFunc(o.LESS);break;case ru:o.depthFunc(o.LEQUAL);break;case W_:o.depthFunc(o.EQUAL);break;case Y_:o.depthFunc(o.GEQUAL);break;case q_:o.depthFunc(o.GREATER);break;case j_:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Vt=Tt}},setLocked:function(Tt){Y=Tt},setClear:function(Tt){Pt!==Tt&&(Pt=Tt,Rt&&(Tt=1-Tt),o.clearDepth(Tt))},reset:function(){Y=!1,mt=null,Vt=null,Pt=null,Rt=!1}}}function r(){let Y=!1,Rt=null,mt=null,Vt=null,Pt=null,Tt=null,Ct=null,Nt=null,oe=null;return{setTest:function(wt){Y||(wt?Et(o.STENCIL_TEST):It(o.STENCIL_TEST))},setMask:function(wt){Rt!==wt&&!Y&&(o.stencilMask(wt),Rt=wt)},setFunc:function(wt,re,Qt){(mt!==wt||Vt!==re||Pt!==Qt)&&(o.stencilFunc(wt,re,Qt),mt=wt,Vt=re,Pt=Qt)},setOp:function(wt,re,Qt){(Tt!==wt||Ct!==re||Nt!==Qt)&&(o.stencilOp(wt,re,Qt),Tt=wt,Ct=re,Nt=Qt)},setLocked:function(wt){Y=wt},setClear:function(wt){oe!==wt&&(o.clearStencil(wt),oe=wt)},reset:function(){Y=!1,Rt=null,mt=null,Vt=null,Pt=null,Tt=null,Ct=null,Nt=null,oe=null}}}const l=new n,c=new a,f=new r,p=new WeakMap,d=new WeakMap;let _={},v={},g={},x=new WeakMap,M=[],E=null,S=!1,y=null,A=null,D=null,C=null,P=null,N=null,w=null,T=new qe(0,0,0),O=0,B=!1,G=null,k=null,et=null,tt=null,X=null;const F=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,J=0;const ft=o.getParameter(o.VERSION);ft.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(ft)[1]),H=J>=1):ft.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(ft)[1]),H=J>=2);let V=null,I={};const K=o.getParameter(o.SCISSOR_BOX),xt=o.getParameter(o.VIEWPORT),Mt=new zn().fromArray(K),Ut=new zn().fromArray(xt);function it(Y,Rt,mt,Vt){const Pt=new Uint8Array(4),Tt=o.createTexture();o.bindTexture(Y,Tt),o.texParameteri(Y,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Y,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ct=0;Ct<mt;Ct++)Y===o.TEXTURE_3D||Y===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,Vt,0,o.RGBA,o.UNSIGNED_BYTE,Pt):o.texImage2D(Rt+Ct,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Pt);return Tt}const vt={};vt[o.TEXTURE_2D]=it(o.TEXTURE_2D,o.TEXTURE_2D,1),vt[o.TEXTURE_CUBE_MAP]=it(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[o.TEXTURE_2D_ARRAY]=it(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),vt[o.TEXTURE_3D]=it(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),Et(o.DEPTH_TEST),c.setFunc(ru),ut(!1),we(Iy),Et(o.CULL_FACE),ve(Jr);function Et(Y){_[Y]!==!0&&(o.enable(Y),_[Y]=!0)}function It(Y){_[Y]!==!1&&(o.disable(Y),_[Y]=!1)}function ne(Y,Rt){return g[Y]!==Rt?(o.bindFramebuffer(Y,Rt),g[Y]=Rt,Y===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Rt),Y===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Zt(Y,Rt){let mt=M,Vt=!1;if(Y){mt=x.get(Rt),mt===void 0&&(mt=[],x.set(Rt,mt));const Pt=Y.textures;if(mt.length!==Pt.length||mt[0]!==o.COLOR_ATTACHMENT0){for(let Tt=0,Ct=Pt.length;Tt<Ct;Tt++)mt[Tt]=o.COLOR_ATTACHMENT0+Tt;mt.length=Pt.length,Vt=!0}}else mt[0]!==o.BACK&&(mt[0]=o.BACK,Vt=!0);Vt&&o.drawBuffers(mt)}function ye(Y){return E!==Y?(o.useProgram(Y),E=Y,!0):!1}const qt={[Co]:o.FUNC_ADD,[IA]:o.FUNC_SUBTRACT,[BA]:o.FUNC_REVERSE_SUBTRACT};qt[HA]=o.MIN,qt[GA]=o.MAX;const ie={[VA]:o.ZERO,[kA]:o.ONE,[XA]:o.SRC_COLOR,[H_]:o.SRC_ALPHA,[KA]:o.SRC_ALPHA_SATURATE,[jA]:o.DST_COLOR,[YA]:o.DST_ALPHA,[WA]:o.ONE_MINUS_SRC_COLOR,[G_]:o.ONE_MINUS_SRC_ALPHA,[ZA]:o.ONE_MINUS_DST_COLOR,[qA]:o.ONE_MINUS_DST_ALPHA,[QA]:o.CONSTANT_COLOR,[JA]:o.ONE_MINUS_CONSTANT_COLOR,[$A]:o.CONSTANT_ALPHA,[tR]:o.ONE_MINUS_CONSTANT_ALPHA};function ve(Y,Rt,mt,Vt,Pt,Tt,Ct,Nt,oe,wt){if(Y===Jr){S===!0&&(It(o.BLEND),S=!1);return}if(S===!1&&(Et(o.BLEND),S=!0),Y!==FA){if(Y!==y||wt!==B){if((A!==Co||P!==Co)&&(o.blendEquation(o.FUNC_ADD),A=Co,P=Co),wt)switch(Y){case Kl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case By:o.blendFunc(o.ONE,o.ONE);break;case Hy:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Gy:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ze("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Kl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case By:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Hy:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gy:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",Y);break}D=null,C=null,N=null,w=null,T.set(0,0,0),O=0,y=Y,B=wt}return}Pt=Pt||Rt,Tt=Tt||mt,Ct=Ct||Vt,(Rt!==A||Pt!==P)&&(o.blendEquationSeparate(qt[Rt],qt[Pt]),A=Rt,P=Pt),(mt!==D||Vt!==C||Tt!==N||Ct!==w)&&(o.blendFuncSeparate(ie[mt],ie[Vt],ie[Tt],ie[Ct]),D=mt,C=Vt,N=Tt,w=Ct),(Nt.equals(T)===!1||oe!==O)&&(o.blendColor(Nt.r,Nt.g,Nt.b,oe),T.copy(Nt),O=oe),y=Y,B=!1}function se(Y,Rt){Y.side===jr?It(o.CULL_FACE):Et(o.CULL_FACE);let mt=Y.side===Zi;Rt&&(mt=!mt),ut(mt),Y.blending===Kl&&Y.transparent===!1?ve(Jr):ve(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),c.setFunc(Y.depthFunc),c.setTest(Y.depthTest),c.setMask(Y.depthWrite),l.setMask(Y.colorWrite);const Vt=Y.stencilWrite;f.setTest(Vt),Vt&&(f.setMask(Y.stencilWriteMask),f.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),f.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),j(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Et(o.SAMPLE_ALPHA_TO_COVERAGE):It(o.SAMPLE_ALPHA_TO_COVERAGE)}function ut(Y){G!==Y&&(Y?o.frontFace(o.CW):o.frontFace(o.CCW),G=Y)}function we(Y){Y!==OA?(Et(o.CULL_FACE),Y!==k&&(Y===Iy?o.cullFace(o.BACK):Y===PA?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):It(o.CULL_FACE),k=Y}function pn(Y){Y!==et&&(H&&o.lineWidth(Y),et=Y)}function j(Y,Rt,mt){Y?(Et(o.POLYGON_OFFSET_FILL),(tt!==Rt||X!==mt)&&(tt=Rt,X=mt,c.getReversed()&&(Rt=-Rt),o.polygonOffset(Rt,mt))):It(o.POLYGON_OFFSET_FILL)}function ge(Y){Y?Et(o.SCISSOR_TEST):It(o.SCISSOR_TEST)}function me(Y){Y===void 0&&(Y=o.TEXTURE0+F-1),V!==Y&&(o.activeTexture(Y),V=Y)}function ze(Y,Rt,mt){mt===void 0&&(V===null?mt=o.TEXTURE0+F-1:mt=V);let Vt=I[mt];Vt===void 0&&(Vt={type:void 0,texture:void 0},I[mt]=Vt),(Vt.type!==Y||Vt.texture!==Rt)&&(V!==mt&&(o.activeTexture(mt),V=mt),o.bindTexture(Y,Rt||vt[Y]),Vt.type=Y,Vt.texture=Rt)}function Lt(){const Y=I[V];Y!==void 0&&Y.type!==void 0&&(o.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function Me(){try{o.compressedTexImage2D(...arguments)}catch(Y){Ze("WebGLState:",Y)}}function z(){try{o.compressedTexImage3D(...arguments)}catch(Y){Ze("WebGLState:",Y)}}function R(){try{o.texSubImage2D(...arguments)}catch(Y){Ze("WebGLState:",Y)}}function Q(){try{o.texSubImage3D(...arguments)}catch(Y){Ze("WebGLState:",Y)}}function _t(){try{o.compressedTexSubImage2D(...arguments)}catch(Y){Ze("WebGLState:",Y)}}function bt(){try{o.compressedTexSubImage3D(...arguments)}catch(Y){Ze("WebGLState:",Y)}}function zt(){try{o.texStorage2D(...arguments)}catch(Y){Ze("WebGLState:",Y)}}function Dt(){try{o.texStorage3D(...arguments)}catch(Y){Ze("WebGLState:",Y)}}function dt(){try{o.texImage2D(...arguments)}catch(Y){Ze("WebGLState:",Y)}}function pt(){try{o.texImage3D(...arguments)}catch(Y){Ze("WebGLState:",Y)}}function Bt(Y){return v[Y]!==void 0?v[Y]:o.getParameter(Y)}function Ht(Y,Rt){v[Y]!==Rt&&(o.pixelStorei(Y,Rt),v[Y]=Rt)}function Ft(Y){Mt.equals(Y)===!1&&(o.scissor(Y.x,Y.y,Y.z,Y.w),Mt.copy(Y))}function Ot(Y){Ut.equals(Y)===!1&&(o.viewport(Y.x,Y.y,Y.z,Y.w),Ut.copy(Y))}function Gt(Y,Rt){let mt=d.get(Rt);mt===void 0&&(mt=new WeakMap,d.set(Rt,mt));let Vt=mt.get(Y);Vt===void 0&&(Vt=o.getUniformBlockIndex(Rt,Y.name),mt.set(Y,Vt))}function ce(Y,Rt){const Vt=d.get(Rt).get(Y);p.get(Rt)!==Vt&&(o.uniformBlockBinding(Rt,Vt,Y.__bindingPointIndex),p.set(Rt,Vt))}function de(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),_={},v={},V=null,I={},g={},x=new WeakMap,M=[],E=null,S=!1,y=null,A=null,D=null,C=null,P=null,N=null,w=null,T=new qe(0,0,0),O=0,B=!1,G=null,k=null,et=null,tt=null,X=null,Mt.set(0,0,o.canvas.width,o.canvas.height),Ut.set(0,0,o.canvas.width,o.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:Et,disable:It,bindFramebuffer:ne,drawBuffers:Zt,useProgram:ye,setBlending:ve,setMaterial:se,setFlipSided:ut,setCullFace:we,setLineWidth:pn,setPolygonOffset:j,setScissorTest:ge,activeTexture:me,bindTexture:ze,unbindTexture:Lt,compressedTexImage2D:Me,compressedTexImage3D:z,texImage2D:dt,texImage3D:pt,pixelStorei:Ht,getParameter:Bt,updateUBOMapping:Gt,uniformBlockBinding:ce,texStorage2D:zt,texStorage3D:Dt,texSubImage2D:R,texSubImage3D:Q,compressedTexSubImage2D:_t,compressedTexSubImage3D:bt,scissor:Ft,viewport:Ot,reset:de}}function XD(o,t,n,a,r,l,c){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new pe,_=new WeakMap,v=new Set;let g;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(z,R){return M?new OffscreenCanvas(z,R):Vc("canvas")}function S(z,R,Q){let _t=1;const bt=Me(z);if((bt.width>Q||bt.height>Q)&&(_t=Q/Math.max(bt.width,bt.height)),_t<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const zt=Math.floor(_t*bt.width),Dt=Math.floor(_t*bt.height);g===void 0&&(g=E(zt,Dt));const dt=R?E(zt,Dt):g;return dt.width=zt,dt.height=Dt,dt.getContext("2d").drawImage(z,0,0,zt,Dt),_e("WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+zt+"x"+Dt+")."),dt}else return"data"in z&&_e("WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),z;return z}function y(z){return z.generateMipmaps}function A(z){o.generateMipmap(z)}function D(z){return z.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?o.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(z,R,Q,_t,bt,zt=!1){if(z!==null){if(o[z]!==void 0)return o[z];_e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Dt;_t&&(Dt=t.get("EXT_texture_norm16"),Dt||_e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let dt=R;if(R===o.RED&&(Q===o.FLOAT&&(dt=o.R32F),Q===o.HALF_FLOAT&&(dt=o.R16F),Q===o.UNSIGNED_BYTE&&(dt=o.R8),Q===o.UNSIGNED_SHORT&&Dt&&(dt=Dt.R16_EXT),Q===o.SHORT&&Dt&&(dt=Dt.R16_SNORM_EXT)),R===o.RED_INTEGER&&(Q===o.UNSIGNED_BYTE&&(dt=o.R8UI),Q===o.UNSIGNED_SHORT&&(dt=o.R16UI),Q===o.UNSIGNED_INT&&(dt=o.R32UI),Q===o.BYTE&&(dt=o.R8I),Q===o.SHORT&&(dt=o.R16I),Q===o.INT&&(dt=o.R32I)),R===o.RG&&(Q===o.FLOAT&&(dt=o.RG32F),Q===o.HALF_FLOAT&&(dt=o.RG16F),Q===o.UNSIGNED_BYTE&&(dt=o.RG8),Q===o.UNSIGNED_SHORT&&Dt&&(dt=Dt.RG16_EXT),Q===o.SHORT&&Dt&&(dt=Dt.RG16_SNORM_EXT)),R===o.RG_INTEGER&&(Q===o.UNSIGNED_BYTE&&(dt=o.RG8UI),Q===o.UNSIGNED_SHORT&&(dt=o.RG16UI),Q===o.UNSIGNED_INT&&(dt=o.RG32UI),Q===o.BYTE&&(dt=o.RG8I),Q===o.SHORT&&(dt=o.RG16I),Q===o.INT&&(dt=o.RG32I)),R===o.RGB_INTEGER&&(Q===o.UNSIGNED_BYTE&&(dt=o.RGB8UI),Q===o.UNSIGNED_SHORT&&(dt=o.RGB16UI),Q===o.UNSIGNED_INT&&(dt=o.RGB32UI),Q===o.BYTE&&(dt=o.RGB8I),Q===o.SHORT&&(dt=o.RGB16I),Q===o.INT&&(dt=o.RGB32I)),R===o.RGBA_INTEGER&&(Q===o.UNSIGNED_BYTE&&(dt=o.RGBA8UI),Q===o.UNSIGNED_SHORT&&(dt=o.RGBA16UI),Q===o.UNSIGNED_INT&&(dt=o.RGBA32UI),Q===o.BYTE&&(dt=o.RGBA8I),Q===o.SHORT&&(dt=o.RGBA16I),Q===o.INT&&(dt=o.RGBA32I)),R===o.RGB&&(Q===o.UNSIGNED_SHORT&&Dt&&(dt=Dt.RGB16_EXT),Q===o.SHORT&&Dt&&(dt=Dt.RGB16_SNORM_EXT),Q===o.UNSIGNED_INT_5_9_9_9_REV&&(dt=o.RGB9_E5),Q===o.UNSIGNED_INT_10F_11F_11F_REV&&(dt=o.R11F_G11F_B10F)),R===o.RGBA){const pt=zt?dd:We.getTransfer(bt);Q===o.FLOAT&&(dt=o.RGBA32F),Q===o.HALF_FLOAT&&(dt=o.RGBA16F),Q===o.UNSIGNED_BYTE&&(dt=pt===un?o.SRGB8_ALPHA8:o.RGBA8),Q===o.UNSIGNED_SHORT&&Dt&&(dt=Dt.RGBA16_EXT),Q===o.SHORT&&Dt&&(dt=Dt.RGBA16_SNORM_EXT),Q===o.UNSIGNED_SHORT_4_4_4_4&&(dt=o.RGBA4),Q===o.UNSIGNED_SHORT_5_5_5_1&&(dt=o.RGB5_A1)}return(dt===o.R16F||dt===o.R32F||dt===o.RG16F||dt===o.RG32F||dt===o.RGBA16F||dt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function P(z,R){let Q;return z?R===null||R===yr||R===Hc?Q=o.DEPTH24_STENCIL8:R===dr?Q=o.DEPTH32F_STENCIL8:R===Bc&&(Q=o.DEPTH24_STENCIL8,_e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===yr||R===Hc?Q=o.DEPTH_COMPONENT24:R===dr?Q=o.DEPTH_COMPONENT32F:R===Bc&&(Q=o.DEPTH_COMPONENT16),Q}function N(z,R){return y(z)===!0||z.isFramebufferTexture&&z.minFilter!==di&&z.minFilter!==Ai?Math.log2(Math.max(R.width,R.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?R.mipmaps.length:1}function w(z){const R=z.target;R.removeEventListener("dispose",w),O(R),R.isVideoTexture&&_.delete(R),R.isHTMLTexture&&v.delete(R)}function T(z){const R=z.target;R.removeEventListener("dispose",T),G(R)}function O(z){const R=a.get(z);if(R.__webglInit===void 0)return;const Q=z.source,_t=x.get(Q);if(_t){const bt=_t[R.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&B(z),Object.keys(_t).length===0&&x.delete(Q)}a.remove(z)}function B(z){const R=a.get(z);o.deleteTexture(R.__webglTexture);const Q=z.source,_t=x.get(Q);delete _t[R.__cacheKey],c.memory.textures--}function G(z){const R=a.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),a.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(R.__webglFramebuffer[_t]))for(let bt=0;bt<R.__webglFramebuffer[_t].length;bt++)o.deleteFramebuffer(R.__webglFramebuffer[_t][bt]);else o.deleteFramebuffer(R.__webglFramebuffer[_t]);R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer[_t])}else{if(Array.isArray(R.__webglFramebuffer))for(let _t=0;_t<R.__webglFramebuffer.length;_t++)o.deleteFramebuffer(R.__webglFramebuffer[_t]);else o.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&o.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let _t=0;_t<R.__webglColorRenderbuffer.length;_t++)R.__webglColorRenderbuffer[_t]&&o.deleteRenderbuffer(R.__webglColorRenderbuffer[_t]);R.__webglDepthRenderbuffer&&o.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const Q=z.textures;for(let _t=0,bt=Q.length;_t<bt;_t++){const zt=a.get(Q[_t]);zt.__webglTexture&&(o.deleteTexture(zt.__webglTexture),c.memory.textures--),a.remove(Q[_t])}a.remove(z)}let k=0;function et(){k=0}function tt(){return k}function X(z){k=z}function F(){const z=k;return z>=r.maxTextures&&_e("WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+r.maxTextures),k+=1,z}function H(z){const R=[];return R.push(z.wrapS),R.push(z.wrapT),R.push(z.wrapR||0),R.push(z.magFilter),R.push(z.minFilter),R.push(z.anisotropy),R.push(z.internalFormat),R.push(z.format),R.push(z.type),R.push(z.generateMipmaps),R.push(z.premultiplyAlpha),R.push(z.flipY),R.push(z.unpackAlignment),R.push(z.colorSpace),R.join()}function J(z,R){const Q=a.get(z);if(z.isVideoTexture&&ze(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&Q.__version!==z.version){const _t=z.image;if(_t===null)_e("WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)_e("WebGLRenderer: Texture marked for update but image is incomplete");else{It(Q,z,R);return}}else z.isExternalTexture&&(Q.__webglTexture=z.sourceTexture?z.sourceTexture:null);n.bindTexture(o.TEXTURE_2D,Q.__webglTexture,o.TEXTURE0+R)}function ft(z,R){const Q=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&Q.__version!==z.version){It(Q,z,R);return}else z.isExternalTexture&&(Q.__webglTexture=z.sourceTexture?z.sourceTexture:null);n.bindTexture(o.TEXTURE_2D_ARRAY,Q.__webglTexture,o.TEXTURE0+R)}function V(z,R){const Q=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&Q.__version!==z.version){It(Q,z,R);return}n.bindTexture(o.TEXTURE_3D,Q.__webglTexture,o.TEXTURE0+R)}function I(z,R){const Q=a.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&Q.__version!==z.version){ne(Q,z,R);return}n.bindTexture(o.TEXTURE_CUBE_MAP,Q.__webglTexture,o.TEXTURE0+R)}const K={[ud]:o.REPEAT,[Kr]:o.CLAMP_TO_EDGE,[Z_]:o.MIRRORED_REPEAT},xt={[di]:o.NEAREST,[iR]:o.NEAREST_MIPMAP_NEAREST,[dh]:o.NEAREST_MIPMAP_LINEAR,[Ai]:o.LINEAR,[Wm]:o.LINEAR_MIPMAP_NEAREST,[Do]:o.LINEAR_MIPMAP_LINEAR},Mt={[sR]:o.NEVER,[fR]:o.ALWAYS,[oR]:o.LESS,[ug]:o.LEQUAL,[lR]:o.EQUAL,[cg]:o.GEQUAL,[uR]:o.GREATER,[cR]:o.NOTEQUAL};function Ut(z,R){if(R.type===dr&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===Ai||R.magFilter===Wm||R.magFilter===dh||R.magFilter===Do||R.minFilter===Ai||R.minFilter===Wm||R.minFilter===dh||R.minFilter===Do)&&_e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(z,o.TEXTURE_WRAP_S,K[R.wrapS]),o.texParameteri(z,o.TEXTURE_WRAP_T,K[R.wrapT]),(z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY)&&o.texParameteri(z,o.TEXTURE_WRAP_R,K[R.wrapR]),o.texParameteri(z,o.TEXTURE_MAG_FILTER,xt[R.magFilter]),o.texParameteri(z,o.TEXTURE_MIN_FILTER,xt[R.minFilter]),R.compareFunction&&(o.texParameteri(z,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(z,o.TEXTURE_COMPARE_FUNC,Mt[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===di||R.minFilter!==dh&&R.minFilter!==Do||R.type===dr&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||a.get(R).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");o.texParameterf(z,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),a.get(R).__currentAnisotropy=R.anisotropy}}}function it(z,R){let Q=!1;z.__webglInit===void 0&&(z.__webglInit=!0,R.addEventListener("dispose",w));const _t=R.source;let bt=x.get(_t);bt===void 0&&(bt={},x.set(_t,bt));const zt=H(R);if(zt!==z.__cacheKey){bt[zt]===void 0&&(bt[zt]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,Q=!0),bt[zt].usedTimes++;const Dt=bt[z.__cacheKey];Dt!==void 0&&(bt[z.__cacheKey].usedTimes--,Dt.usedTimes===0&&B(R)),z.__cacheKey=zt,z.__webglTexture=bt[zt].texture}return Q}function vt(z,R,Q){return Math.floor(Math.floor(z/Q)/R)}function Et(z,R,Q,_t){const zt=z.updateRanges;if(zt.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,R.width,R.height,Q,_t,R.data);else{zt.sort((Ht,Ft)=>Ht.start-Ft.start);let Dt=0;for(let Ht=1;Ht<zt.length;Ht++){const Ft=zt[Dt],Ot=zt[Ht],Gt=Ft.start+Ft.count,ce=vt(Ot.start,R.width,4),de=vt(Ft.start,R.width,4);Ot.start<=Gt+1&&ce===de&&vt(Ot.start+Ot.count-1,R.width,4)===ce?Ft.count=Math.max(Ft.count,Ot.start+Ot.count-Ft.start):(++Dt,zt[Dt]=Ot)}zt.length=Dt+1;const dt=n.getParameter(o.UNPACK_ROW_LENGTH),pt=n.getParameter(o.UNPACK_SKIP_PIXELS),Bt=n.getParameter(o.UNPACK_SKIP_ROWS);n.pixelStorei(o.UNPACK_ROW_LENGTH,R.width);for(let Ht=0,Ft=zt.length;Ht<Ft;Ht++){const Ot=zt[Ht],Gt=Math.floor(Ot.start/4),ce=Math.ceil(Ot.count/4),de=Gt%R.width,Y=Math.floor(Gt/R.width),Rt=ce,mt=1;n.pixelStorei(o.UNPACK_SKIP_PIXELS,de),n.pixelStorei(o.UNPACK_SKIP_ROWS,Y),n.texSubImage2D(o.TEXTURE_2D,0,de,Y,Rt,mt,Q,_t,R.data)}z.clearUpdateRanges(),n.pixelStorei(o.UNPACK_ROW_LENGTH,dt),n.pixelStorei(o.UNPACK_SKIP_PIXELS,pt),n.pixelStorei(o.UNPACK_SKIP_ROWS,Bt)}}function It(z,R,Q){let _t=o.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(_t=o.TEXTURE_2D_ARRAY),R.isData3DTexture&&(_t=o.TEXTURE_3D);const bt=it(z,R),zt=R.source;n.bindTexture(_t,z.__webglTexture,o.TEXTURE0+Q);const Dt=a.get(zt);if(zt.version!==Dt.__version||bt===!0){if(n.activeTexture(o.TEXTURE0+Q),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){const mt=We.getPrimaries(We.workingColorSpace),Vt=R.colorSpace===Fs?null:We.getPrimaries(R.colorSpace),Pt=R.colorSpace===Fs||mt===Vt?o.NONE:o.BROWSER_DEFAULT_WEBGL;n.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt)}n.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment);let pt=S(R.image,!1,r.maxTextureSize);pt=Lt(R,pt);const Bt=l.convert(R.format,R.colorSpace),Ht=l.convert(R.type);let Ft=C(R.internalFormat,Bt,Ht,R.normalized,R.colorSpace,R.isVideoTexture);Ut(_t,R);let Ot;const Gt=R.mipmaps,ce=R.isVideoTexture!==!0,de=Dt.__version===void 0||bt===!0,Y=zt.dataReady,Rt=N(R,pt);if(R.isDepthTexture)Ft=P(R.format===Uo,R.type),de&&(ce?n.texStorage2D(o.TEXTURE_2D,1,Ft,pt.width,pt.height):n.texImage2D(o.TEXTURE_2D,0,Ft,pt.width,pt.height,0,Bt,Ht,null));else if(R.isDataTexture)if(Gt.length>0){ce&&de&&n.texStorage2D(o.TEXTURE_2D,Rt,Ft,Gt[0].width,Gt[0].height);for(let mt=0,Vt=Gt.length;mt<Vt;mt++)Ot=Gt[mt],ce?Y&&n.texSubImage2D(o.TEXTURE_2D,mt,0,0,Ot.width,Ot.height,Bt,Ht,Ot.data):n.texImage2D(o.TEXTURE_2D,mt,Ft,Ot.width,Ot.height,0,Bt,Ht,Ot.data);R.generateMipmaps=!1}else ce?(de&&n.texStorage2D(o.TEXTURE_2D,Rt,Ft,pt.width,pt.height),Y&&Et(R,pt,Bt,Ht)):n.texImage2D(o.TEXTURE_2D,0,Ft,pt.width,pt.height,0,Bt,Ht,pt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ce&&de&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Ft,Gt[0].width,Gt[0].height,pt.depth);for(let mt=0,Vt=Gt.length;mt<Vt;mt++)if(Ot=Gt[mt],R.format!==$a)if(Bt!==null)if(ce){if(Y)if(R.layerUpdates.size>0){const Pt=pM(Ot.width,Ot.height,R.format,R.type);for(const Tt of R.layerUpdates){const Ct=Ot.data.subarray(Tt*Pt/Ot.data.BYTES_PER_ELEMENT,(Tt+1)*Pt/Ot.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,mt,0,0,Tt,Ot.width,Ot.height,1,Bt,Ct)}R.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,mt,0,0,0,Ot.width,Ot.height,pt.depth,Bt,Ot.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,mt,Ft,Ot.width,Ot.height,pt.depth,0,Ot.data,0,0);else _e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?Y&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,mt,0,0,0,Ot.width,Ot.height,pt.depth,Bt,Ht,Ot.data):n.texImage3D(o.TEXTURE_2D_ARRAY,mt,Ft,Ot.width,Ot.height,pt.depth,0,Bt,Ht,Ot.data)}else{ce&&de&&n.texStorage2D(o.TEXTURE_2D,Rt,Ft,Gt[0].width,Gt[0].height);for(let mt=0,Vt=Gt.length;mt<Vt;mt++)Ot=Gt[mt],R.format!==$a?Bt!==null?ce?Y&&n.compressedTexSubImage2D(o.TEXTURE_2D,mt,0,0,Ot.width,Ot.height,Bt,Ot.data):n.compressedTexImage2D(o.TEXTURE_2D,mt,Ft,Ot.width,Ot.height,0,Ot.data):_e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?Y&&n.texSubImage2D(o.TEXTURE_2D,mt,0,0,Ot.width,Ot.height,Bt,Ht,Ot.data):n.texImage2D(o.TEXTURE_2D,mt,Ft,Ot.width,Ot.height,0,Bt,Ht,Ot.data)}else if(R.isDataArrayTexture)if(ce){if(de&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Ft,pt.width,pt.height,pt.depth),Y)if(R.layerUpdates.size>0){const mt=pM(pt.width,pt.height,R.format,R.type);for(const Vt of R.layerUpdates){const Pt=pt.data.subarray(Vt*mt/pt.data.BYTES_PER_ELEMENT,(Vt+1)*mt/pt.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Vt,pt.width,pt.height,1,Bt,Ht,Pt)}R.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Bt,Ht,pt.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Ft,pt.width,pt.height,pt.depth,0,Bt,Ht,pt.data);else if(R.isData3DTexture)ce?(de&&n.texStorage3D(o.TEXTURE_3D,Rt,Ft,pt.width,pt.height,pt.depth),Y&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Bt,Ht,pt.data)):n.texImage3D(o.TEXTURE_3D,0,Ft,pt.width,pt.height,pt.depth,0,Bt,Ht,pt.data);else if(R.isFramebufferTexture){if(de)if(ce)n.texStorage2D(o.TEXTURE_2D,Rt,Ft,pt.width,pt.height);else{let mt=pt.width,Vt=pt.height;for(let Pt=0;Pt<Rt;Pt++)n.texImage2D(o.TEXTURE_2D,Pt,Ft,mt,Vt,0,Bt,Ht,null),mt>>=1,Vt>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in o){const mt=o.canvas;if(mt.hasAttribute("layoutsubtree")||mt.setAttribute("layoutsubtree","true"),pt.parentNode!==mt){mt.appendChild(pt),v.add(R),mt.onpaint=Nt=>{const oe=Nt.changedElements;for(const wt of v)oe.includes(wt.image)&&(wt.needsUpdate=!0)},mt.requestPaint();return}const Vt=0,Pt=o.RGBA,Tt=o.RGBA,Ct=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,Vt,Pt,Tt,Ct,pt),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Gt.length>0){if(ce&&de){const mt=Me(Gt[0]);n.texStorage2D(o.TEXTURE_2D,Rt,Ft,mt.width,mt.height)}for(let mt=0,Vt=Gt.length;mt<Vt;mt++)Ot=Gt[mt],ce?Y&&n.texSubImage2D(o.TEXTURE_2D,mt,0,0,Bt,Ht,Ot):n.texImage2D(o.TEXTURE_2D,mt,Ft,Bt,Ht,Ot);R.generateMipmaps=!1}else if(ce){if(de){const mt=Me(pt);n.texStorage2D(o.TEXTURE_2D,Rt,Ft,mt.width,mt.height)}Y&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Bt,Ht,pt)}else n.texImage2D(o.TEXTURE_2D,0,Ft,Bt,Ht,pt);y(R)&&A(_t),Dt.__version=zt.version,R.onUpdate&&R.onUpdate(R)}z.__version=R.version}function ne(z,R,Q){if(R.image.length!==6)return;const _t=it(z,R),bt=R.source;n.bindTexture(o.TEXTURE_CUBE_MAP,z.__webglTexture,o.TEXTURE0+Q);const zt=a.get(bt);if(bt.version!==zt.__version||_t===!0){n.activeTexture(o.TEXTURE0+Q);const Dt=We.getPrimaries(We.workingColorSpace),dt=R.colorSpace===Fs?null:We.getPrimaries(R.colorSpace),pt=R.colorSpace===Fs||Dt===dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;n.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Bt=R.isCompressedTexture||R.image[0].isCompressedTexture,Ht=R.image[0]&&R.image[0].isDataTexture,Ft=[];for(let Tt=0;Tt<6;Tt++)!Bt&&!Ht?Ft[Tt]=S(R.image[Tt],!0,r.maxCubemapSize):Ft[Tt]=Ht?R.image[Tt].image:R.image[Tt],Ft[Tt]=Lt(R,Ft[Tt]);const Ot=Ft[0],Gt=l.convert(R.format,R.colorSpace),ce=l.convert(R.type),de=C(R.internalFormat,Gt,ce,R.normalized,R.colorSpace),Y=R.isVideoTexture!==!0,Rt=zt.__version===void 0||_t===!0,mt=bt.dataReady;let Vt=N(R,Ot);Ut(o.TEXTURE_CUBE_MAP,R);let Pt;if(Bt){Y&&Rt&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Vt,de,Ot.width,Ot.height);for(let Tt=0;Tt<6;Tt++){Pt=Ft[Tt].mipmaps;for(let Ct=0;Ct<Pt.length;Ct++){const Nt=Pt[Ct];R.format!==$a?Gt!==null?Y?mt&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Ct,0,0,Nt.width,Nt.height,Gt,Nt.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Ct,de,Nt.width,Nt.height,0,Nt.data):_e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?mt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Ct,0,0,Nt.width,Nt.height,Gt,ce,Nt.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Ct,de,Nt.width,Nt.height,0,Gt,ce,Nt.data)}}}else{if(Pt=R.mipmaps,Y&&Rt){Pt.length>0&&Vt++;const Tt=Me(Ft[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Vt,de,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(Ht){Y?mt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,Ft[Tt].width,Ft[Tt].height,Gt,ce,Ft[Tt].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,de,Ft[Tt].width,Ft[Tt].height,0,Gt,ce,Ft[Tt].data);for(let Ct=0;Ct<Pt.length;Ct++){const oe=Pt[Ct].image[Tt].image;Y?mt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Ct+1,0,0,oe.width,oe.height,Gt,ce,oe.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Ct+1,de,oe.width,oe.height,0,Gt,ce,oe.data)}}else{Y?mt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,Gt,ce,Ft[Tt]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,de,Gt,ce,Ft[Tt]);for(let Ct=0;Ct<Pt.length;Ct++){const Nt=Pt[Ct];Y?mt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Ct+1,0,0,Gt,ce,Nt.image[Tt]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Ct+1,de,Gt,ce,Nt.image[Tt])}}}y(R)&&A(o.TEXTURE_CUBE_MAP),zt.__version=bt.version,R.onUpdate&&R.onUpdate(R)}z.__version=R.version}function Zt(z,R,Q,_t,bt,zt){const Dt=l.convert(Q.format,Q.colorSpace),dt=l.convert(Q.type),pt=C(Q.internalFormat,Dt,dt,Q.normalized,Q.colorSpace),Bt=a.get(R),Ht=a.get(Q);if(Ht.__renderTarget=R,!Bt.__hasExternalTextures){const Ft=Math.max(1,R.width>>zt),Ot=Math.max(1,R.height>>zt);bt===o.TEXTURE_3D||bt===o.TEXTURE_2D_ARRAY?n.texImage3D(bt,zt,pt,Ft,Ot,R.depth,0,Dt,dt,null):n.texImage2D(bt,zt,pt,Ft,Ot,0,Dt,dt,null)}n.bindFramebuffer(o.FRAMEBUFFER,z),me(R)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_t,bt,Ht.__webglTexture,0,ge(R)):(bt===o.TEXTURE_2D||bt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_t,bt,Ht.__webglTexture,zt),n.bindFramebuffer(o.FRAMEBUFFER,null)}function ye(z,R,Q){if(o.bindRenderbuffer(o.RENDERBUFFER,z),R.depthBuffer){const _t=R.depthTexture,bt=_t&&_t.isDepthTexture?_t.type:null,zt=P(R.stencilBuffer,bt),Dt=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;me(R)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ge(R),zt,R.width,R.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,ge(R),zt,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,zt,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Dt,o.RENDERBUFFER,z)}else{const _t=R.textures;for(let bt=0;bt<_t.length;bt++){const zt=_t[bt],Dt=l.convert(zt.format,zt.colorSpace),dt=l.convert(zt.type),pt=C(zt.internalFormat,Dt,dt,zt.normalized,zt.colorSpace);me(R)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ge(R),pt,R.width,R.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,ge(R),pt,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,pt,R.width,R.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function qt(z,R,Q){const _t=R.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(o.FRAMEBUFFER,z),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const bt=a.get(R.depthTexture);if(bt.__renderTarget=R,(!bt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),_t){if(bt.__webglInit===void 0&&(bt.__webglInit=!0,R.depthTexture.addEventListener("dispose",w)),bt.__webglTexture===void 0){bt.__webglTexture=o.createTexture(),n.bindTexture(o.TEXTURE_CUBE_MAP,bt.__webglTexture),Ut(o.TEXTURE_CUBE_MAP,R.depthTexture);const Bt=l.convert(R.depthTexture.format),Ht=l.convert(R.depthTexture.type);let Ft;R.depthTexture.format===is?Ft=o.DEPTH_COMPONENT24:R.depthTexture.format===Uo&&(Ft=o.DEPTH24_STENCIL8);for(let Ot=0;Ot<6;Ot++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,Ft,R.width,R.height,0,Bt,Ht,null)}}else J(R.depthTexture,0);const zt=bt.__webglTexture,Dt=ge(R),dt=_t?o.TEXTURE_CUBE_MAP_POSITIVE_X+Q:o.TEXTURE_2D,pt=R.depthTexture.format===Uo?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(R.depthTexture.format===is)me(R)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,dt,zt,0,Dt):o.framebufferTexture2D(o.FRAMEBUFFER,pt,dt,zt,0);else if(R.depthTexture.format===Uo)me(R)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,dt,zt,0,Dt):o.framebufferTexture2D(o.FRAMEBUFFER,pt,dt,zt,0);else throw new Error("Unknown depthTexture format")}function ie(z){const R=a.get(z),Q=z.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==z.depthTexture){const _t=z.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),_t){const bt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,_t.removeEventListener("dispose",bt)};_t.addEventListener("dispose",bt),R.__depthDisposeCallback=bt}R.__boundDepthTexture=_t}if(z.depthTexture&&!R.__autoAllocateDepthBuffer)if(Q)for(let _t=0;_t<6;_t++)qt(R.__webglFramebuffer[_t],z,_t);else{const _t=z.texture.mipmaps;_t&&_t.length>0?qt(R.__webglFramebuffer[0],z,0):qt(R.__webglFramebuffer,z,0)}else if(Q){R.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(n.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[_t]),R.__webglDepthbuffer[_t]===void 0)R.__webglDepthbuffer[_t]=o.createRenderbuffer(),ye(R.__webglDepthbuffer[_t],z,!1);else{const bt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,zt=R.__webglDepthbuffer[_t];o.bindRenderbuffer(o.RENDERBUFFER,zt),o.framebufferRenderbuffer(o.FRAMEBUFFER,bt,o.RENDERBUFFER,zt)}}else{const _t=z.texture.mipmaps;if(_t&&_t.length>0?n.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=o.createRenderbuffer(),ye(R.__webglDepthbuffer,z,!1);else{const bt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,zt=R.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,zt),o.framebufferRenderbuffer(o.FRAMEBUFFER,bt,o.RENDERBUFFER,zt)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function ve(z,R,Q){const _t=a.get(z);R!==void 0&&Zt(_t.__webglFramebuffer,z,z.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Q!==void 0&&ie(z)}function se(z){const R=z.texture,Q=a.get(z),_t=a.get(R);z.addEventListener("dispose",T);const bt=z.textures,zt=z.isWebGLCubeRenderTarget===!0,Dt=bt.length>1;if(Dt||(_t.__webglTexture===void 0&&(_t.__webglTexture=o.createTexture()),_t.__version=R.version,c.memory.textures++),zt){Q.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(R.mipmaps&&R.mipmaps.length>0){Q.__webglFramebuffer[dt]=[];for(let pt=0;pt<R.mipmaps.length;pt++)Q.__webglFramebuffer[dt][pt]=o.createFramebuffer()}else Q.__webglFramebuffer[dt]=o.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){Q.__webglFramebuffer=[];for(let dt=0;dt<R.mipmaps.length;dt++)Q.__webglFramebuffer[dt]=o.createFramebuffer()}else Q.__webglFramebuffer=o.createFramebuffer();if(Dt)for(let dt=0,pt=bt.length;dt<pt;dt++){const Bt=a.get(bt[dt]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=o.createTexture(),c.memory.textures++)}if(z.samples>0&&me(z)===!1){Q.__webglMultisampledFramebuffer=o.createFramebuffer(),Q.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let dt=0;dt<bt.length;dt++){const pt=bt[dt];Q.__webglColorRenderbuffer[dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Q.__webglColorRenderbuffer[dt]);const Bt=l.convert(pt.format,pt.colorSpace),Ht=l.convert(pt.type),Ft=C(pt.internalFormat,Bt,Ht,pt.normalized,pt.colorSpace,z.isXRRenderTarget===!0),Ot=ge(z);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ot,Ft,z.width,z.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+dt,o.RENDERBUFFER,Q.__webglColorRenderbuffer[dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),z.depthBuffer&&(Q.__webglDepthRenderbuffer=o.createRenderbuffer(),ye(Q.__webglDepthRenderbuffer,z,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(zt){n.bindTexture(o.TEXTURE_CUBE_MAP,_t.__webglTexture),Ut(o.TEXTURE_CUBE_MAP,R);for(let dt=0;dt<6;dt++)if(R.mipmaps&&R.mipmaps.length>0)for(let pt=0;pt<R.mipmaps.length;pt++)Zt(Q.__webglFramebuffer[dt][pt],z,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,pt);else Zt(Q.__webglFramebuffer[dt],z,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);y(R)&&A(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Dt){for(let dt=0,pt=bt.length;dt<pt;dt++){const Bt=bt[dt],Ht=a.get(Bt);let Ft=o.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Ft=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Ft,Ht.__webglTexture),Ut(Ft,Bt),Zt(Q.__webglFramebuffer,z,Bt,o.COLOR_ATTACHMENT0+dt,Ft,0),y(Bt)&&A(Ft)}n.unbindTexture()}else{let dt=o.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(dt=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(dt,_t.__webglTexture),Ut(dt,R),R.mipmaps&&R.mipmaps.length>0)for(let pt=0;pt<R.mipmaps.length;pt++)Zt(Q.__webglFramebuffer[pt],z,R,o.COLOR_ATTACHMENT0,dt,pt);else Zt(Q.__webglFramebuffer,z,R,o.COLOR_ATTACHMENT0,dt,0);y(R)&&A(dt),n.unbindTexture()}z.depthBuffer&&ie(z)}function ut(z){const R=z.textures;for(let Q=0,_t=R.length;Q<_t;Q++){const bt=R[Q];if(y(bt)){const zt=D(z),Dt=a.get(bt).__webglTexture;n.bindTexture(zt,Dt),A(zt),n.unbindTexture()}}}const we=[],pn=[];function j(z){if(z.samples>0){if(me(z)===!1){const R=z.textures,Q=z.width,_t=z.height;let bt=o.COLOR_BUFFER_BIT;const zt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=a.get(z),dt=R.length>1;if(dt)for(let Bt=0;Bt<R.length;Bt++)n.bindFramebuffer(o.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Dt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer);const pt=z.texture.mipmaps;pt&&pt.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Bt=0;Bt<R.length;Bt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(bt|=o.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(bt|=o.STENCIL_BUFFER_BIT)),dt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Dt.__webglColorRenderbuffer[Bt]);const Ht=a.get(R[Bt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ht,0)}o.blitFramebuffer(0,0,Q,_t,0,0,Q,_t,bt,o.NEAREST),p===!0&&(we.length=0,pn.length=0,we.push(o.COLOR_ATTACHMENT0+Bt),z.depthBuffer&&z.resolveDepthBuffer===!1&&(we.push(zt),pn.push(zt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,pn)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,we))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),dt)for(let Bt=0;Bt<R.length;Bt++){n.bindFramebuffer(o.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,Dt.__webglColorRenderbuffer[Bt]);const Ht=a.get(R[Bt]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Dt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,Ht,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&p){const R=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[R])}}}function ge(z){return Math.min(r.maxSamples,z.samples)}function me(z){const R=a.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function ze(z){const R=c.render.frame;_.get(z)!==R&&(_.set(z,R),z.update())}function Lt(z,R){const Q=z.colorSpace,_t=z.format,bt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||Q!==hd&&Q!==Fs&&(We.getTransfer(Q)===un?(_t!==$a||bt!==ga)&&_e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",Q)),R}function Me(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(d.width=z.naturalWidth||z.width,d.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(d.width=z.displayWidth,d.height=z.displayHeight):(d.width=z.width,d.height=z.height),d}this.allocateTextureUnit=F,this.resetTextureUnits=et,this.getTextureUnits=tt,this.setTextureUnits=X,this.setTexture2D=J,this.setTexture2DArray=ft,this.setTexture3D=V,this.setTextureCube=I,this.rebindTextures=ve,this.setupRenderTarget=se,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=Zt,this.useMultisampledRTT=me,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function WD(o,t){function n(a,r=Fs){let l;const c=We.getTransfer(r);if(a===ga)return o.UNSIGNED_BYTE;if(a===ag)return o.UNSIGNED_SHORT_4_4_4_4;if(a===rg)return o.UNSIGNED_SHORT_5_5_5_1;if(a===U1)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===N1)return o.UNSIGNED_INT_10F_11F_11F_REV;if(a===w1)return o.BYTE;if(a===D1)return o.SHORT;if(a===Bc)return o.UNSIGNED_SHORT;if(a===ig)return o.INT;if(a===yr)return o.UNSIGNED_INT;if(a===dr)return o.FLOAT;if(a===ns)return o.HALF_FLOAT;if(a===L1)return o.ALPHA;if(a===O1)return o.RGB;if(a===$a)return o.RGBA;if(a===is)return o.DEPTH_COMPONENT;if(a===Uo)return o.DEPTH_STENCIL;if(a===P1)return o.RED;if(a===sg)return o.RED_INTEGER;if(a===ko)return o.RG;if(a===og)return o.RG_INTEGER;if(a===lg)return o.RGBA_INTEGER;if(a===Zh||a===Kh||a===Qh||a===Jh)if(c===un)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===Zh)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Kh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Qh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Jh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===Zh)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Kh)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Qh)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Jh)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===K_||a===Q_||a===J_||a===$_)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===K_)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Q_)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===J_)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===$_)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===t0||a===e0||a===n0||a===i0||a===a0||a===cd||a===r0)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(a===t0||a===e0)return c===un?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===n0)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(a===i0)return l.COMPRESSED_R11_EAC;if(a===a0)return l.COMPRESSED_SIGNED_R11_EAC;if(a===cd)return l.COMPRESSED_RG11_EAC;if(a===r0)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===s0||a===o0||a===l0||a===u0||a===c0||a===f0||a===h0||a===d0||a===p0||a===m0||a===_0||a===g0||a===v0||a===x0)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(a===s0)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===o0)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===l0)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===u0)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===c0)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===f0)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===h0)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===d0)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===p0)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===m0)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===_0)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===g0)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===v0)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===x0)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===S0||a===y0||a===M0)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(a===S0)return c===un?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===y0)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===M0)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===E0||a===b0||a===fd||a===T0)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(a===E0)return l.COMPRESSED_RED_RGTC1_EXT;if(a===b0)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===fd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===T0)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Hc?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:n}}const YD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new k1(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Mr({vertexShader:YD,fragmentShader:qD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new tr(new Rd(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZD extends qo{constructor(t,n){super();const a=this;let r=null,l=1,c=null,f="local-floor",p=1,d=null,_=null,v=null,g=null,x=null,M=null;const E=typeof XRWebGLBinding<"u",S=new jD,y={},A=n.getContextAttributes();let D=null,C=null;const P=[],N=[],w=new pe;let T=null;const O=new Fa;O.viewport=new zn;const B=new Fa;B.viewport=new zn;const G=[O,B],k=new rC;let et=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let vt=P[it];return vt===void 0&&(vt=new $m,P[it]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(it){let vt=P[it];return vt===void 0&&(vt=new $m,P[it]=vt),vt.getGripSpace()},this.getHand=function(it){let vt=P[it];return vt===void 0&&(vt=new $m,P[it]=vt),vt.getHandSpace()};function X(it){const vt=N.indexOf(it.inputSource);if(vt===-1)return;const Et=P[vt];Et!==void 0&&(Et.update(it.inputSource,it.frame,d||c),Et.dispatchEvent({type:it.type,data:it.inputSource}))}function F(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",H);for(let it=0;it<P.length;it++){const vt=N[it];vt!==null&&(N[it]=null,P[it].disconnect(vt))}et=null,tt=null,S.reset();for(const it in y)delete y[it];t.setRenderTarget(D),x=null,g=null,v=null,r=null,C=null,Ut.stop(),a.isPresenting=!1,t.setPixelRatio(T),t.setSize(w.width,w.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){l=it,a.isPresenting===!0&&_e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){f=it,a.isPresenting===!0&&_e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(it){d=it},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return v===null&&E&&(v=new XRWebGLBinding(r,n)),v},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(it){if(r=it,r!==null){if(D=t.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",F),r.addEventListener("inputsourceschange",H),A.xrCompatible!==!0&&await n.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(w),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,It=null,ne=null;A.depth&&(ne=A.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Et=A.stencil?Uo:is,It=A.stencil?Hc:yr);const Zt={colorFormat:n.RGBA8,depthFormat:ne,scaleFactor:l};v=this.getBinding(),g=v.createProjectionLayer(Zt),r.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),C=new vr(g.textureWidth,g.textureHeight,{format:$a,type:ga,depthTexture:new ou(g.textureWidth,g.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Et={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(r,n,Et),r.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),C=new vr(x.framebufferWidth,x.framebufferHeight,{format:$a,type:ga,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),d=null,c=await r.requestReferenceSpace(f),Ut.setContext(r),Ut.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function H(it){for(let vt=0;vt<it.removed.length;vt++){const Et=it.removed[vt],It=N.indexOf(Et);It>=0&&(N[It]=null,P[It].disconnect(Et))}for(let vt=0;vt<it.added.length;vt++){const Et=it.added[vt];let It=N.indexOf(Et);if(It===-1){for(let Zt=0;Zt<P.length;Zt++)if(Zt>=N.length){N.push(Et),It=Zt;break}else if(N[Zt]===null){N[Zt]=Et,It=Zt;break}if(It===-1)break}const ne=P[It];ne&&ne.connect(Et)}}const J=new lt,ft=new lt;function V(it,vt,Et){J.setFromMatrixPosition(vt.matrixWorld),ft.setFromMatrixPosition(Et.matrixWorld);const It=J.distanceTo(ft),ne=vt.projectionMatrix.elements,Zt=Et.projectionMatrix.elements,ye=ne[14]/(ne[10]-1),qt=ne[14]/(ne[10]+1),ie=(ne[9]+1)/ne[5],ve=(ne[9]-1)/ne[5],se=(ne[8]-1)/ne[0],ut=(Zt[8]+1)/Zt[0],we=ye*se,pn=ye*ut,j=It/(-se+ut),ge=j*-se;if(vt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(ge),it.translateZ(j),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),ne[10]===-1)it.projectionMatrix.copy(vt.projectionMatrix),it.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const me=ye+j,ze=qt+j,Lt=we-ge,Me=pn+(It-ge),z=ie*qt/ze*me,R=ve*qt/ze*me;it.projectionMatrix.makePerspective(Lt,Me,z,R,me,ze),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function I(it,vt){vt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(vt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(r===null)return;let vt=it.near,Et=it.far;S.texture!==null&&(S.depthNear>0&&(vt=S.depthNear),S.depthFar>0&&(Et=S.depthFar)),k.near=B.near=O.near=vt,k.far=B.far=O.far=Et,(et!==k.near||tt!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),et=k.near,tt=k.far),k.layers.mask=it.layers.mask|6,O.layers.mask=k.layers.mask&-5,B.layers.mask=k.layers.mask&-3;const It=it.parent,ne=k.cameras;I(k,It);for(let Zt=0;Zt<ne.length;Zt++)I(ne[Zt],It);ne.length===2?V(k,O,B):k.projectionMatrix.copy(O.projectionMatrix),K(it,k,It)};function K(it,vt,Et){Et===null?it.matrix.copy(vt.matrixWorld):(it.matrix.copy(Et.matrixWorld),it.matrix.invert(),it.matrix.multiply(vt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(vt.projectionMatrix),it.projectionMatrixInverse.copy(vt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=C0*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(g===null&&x===null))return p},this.setFoveation=function(it){p=it,g!==null&&(g.fixedFoveation=it),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=it)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(k)},this.getCameraTexture=function(it){return y[it]};let xt=null;function Mt(it,vt){if(_=vt.getViewerPose(d||c),M=vt,_!==null){const Et=_.views;x!==null&&(t.setRenderTargetFramebuffer(C,x.framebuffer),t.setRenderTarget(C));let It=!1;Et.length!==k.cameras.length&&(k.cameras.length=0,It=!0);for(let qt=0;qt<Et.length;qt++){const ie=Et[qt];let ve=null;if(x!==null)ve=x.getViewport(ie);else{const ut=v.getViewSubImage(g,ie);ve=ut.viewport,qt===0&&(t.setRenderTargetTextures(C,ut.colorTexture,ut.depthStencilTexture),t.setRenderTarget(C))}let se=G[qt];se===void 0&&(se=new Fa,se.layers.enable(qt),se.viewport=new zn,G[qt]=se),se.matrix.fromArray(ie.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(ie.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(ve.x,ve.y,ve.width,ve.height),qt===0&&(k.matrix.copy(se.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),It===!0&&k.cameras.push(se)}const ne=r.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){v=a.getBinding();const qt=v.getDepthInformation(Et[0]);qt&&qt.isValid&&qt.texture&&S.init(qt,r.renderState)}if(ne&&ne.includes("camera-access")&&E){t.state.unbindTexture(),v=a.getBinding();for(let qt=0;qt<Et.length;qt++){const ie=Et[qt].camera;if(ie){let ve=y[ie];ve||(ve=new k1,y[ie]=ve);const se=v.getCameraImage(ie);ve.sourceTexture=se}}}}for(let Et=0;Et<P.length;Et++){const It=N[Et],ne=P[Et];It!==null&&ne!==void 0&&ne.update(It,vt,d||c)}xt&&xt(it,vt),vt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:vt}),M=null}const Ut=new q1;Ut.setAnimationLoop(Mt),this.setAnimationLoop=function(it){xt=it},this.dispose=function(){}}}const KD=new Vn,tE=new Ee;tE.set(-1,0,0,0,1,0,0,0,1);function QD(o,t){function n(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function a(S,y){y.color.getRGB(S.fogColor.value,X1(o)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function r(S,y,A,D,C){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?l(S,y):y.isMeshLambertMaterial?(l(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(l(S,y),v(S,y)):y.isMeshPhongMaterial?(l(S,y),_(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(l(S,y),g(S,y),y.isMeshPhysicalMaterial&&x(S,y,C)):y.isMeshMatcapMaterial?(l(S,y),M(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),E(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&f(S,y)):y.isPointsMaterial?p(S,y,A,D):y.isSpriteMaterial?d(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,n(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Zi&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,n(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Zi&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,n(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,n(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const A=t.get(y),D=A.envMap,C=A.envMapRotation;D&&(S.envMap.value=D,S.envMapRotation.value.setFromMatrix4(KD.makeRotationFromEuler(C)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(tE),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform))}function f(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function p(S,y,A,D){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*A,S.scale.value=D*.5,y.map&&(S.map.value=y.map,n(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function d(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function _(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function v(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function g(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,A){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Zi&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=A.texture,S.transmissionSamplerSize.value.set(A.width,A.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function E(S,y){const A=t.get(y).light;S.referencePosition.value.setFromMatrixPosition(A.matrixWorld),S.nearDistance.value=A.shadow.camera.near,S.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function JD(o,t,n,a){let r={},l={},c=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(A,D){const C=D.program;a.uniformBlockBinding(A,C)}function d(A,D){let C=r[A.id];C===void 0&&(M(A),C=_(A),r[A.id]=C,A.addEventListener("dispose",S));const P=D.program;a.updateUBOMapping(A,P);const N=t.render.frame;l[A.id]!==N&&(g(A),l[A.id]=N)}function _(A){const D=v();A.__bindingPointIndex=D;const C=o.createBuffer(),P=A.__size,N=A.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,P,N),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,C),C}function v(){for(let A=0;A<f;A++)if(c.indexOf(A)===-1)return c.push(A),A;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const D=r[A.id],C=A.uniforms,P=A.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let N=0,w=C.length;N<w;N++){const T=Array.isArray(C[N])?C[N]:[C[N]];for(let O=0,B=T.length;O<B;O++){const G=T[O];if(x(G,N,O,P)===!0){const k=G.__offset,et=Array.isArray(G.value)?G.value:[G.value];let tt=0;for(let X=0;X<et.length;X++){const F=et[X],H=E(F);typeof F=="number"||typeof F=="boolean"?(G.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,k+tt,G.__data)):F.isMatrix3?(G.__data[0]=F.elements[0],G.__data[1]=F.elements[1],G.__data[2]=F.elements[2],G.__data[3]=0,G.__data[4]=F.elements[3],G.__data[5]=F.elements[4],G.__data[6]=F.elements[5],G.__data[7]=0,G.__data[8]=F.elements[6],G.__data[9]=F.elements[7],G.__data[10]=F.elements[8],G.__data[11]=0):ArrayBuffer.isView(F)?G.__data.set(new F.constructor(F.buffer,F.byteOffset,G.__data.length)):(F.toArray(G.__data,tt),tt+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,k,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(A,D,C,P){const N=A.value,w=D+"_"+C;if(P[w]===void 0)return typeof N=="number"||typeof N=="boolean"?P[w]=N:ArrayBuffer.isView(N)?P[w]=N.slice():P[w]=N.clone(),!0;{const T=P[w];if(typeof N=="number"||typeof N=="boolean"){if(T!==N)return P[w]=N,!0}else{if(ArrayBuffer.isView(N))return!0;if(T.equals(N)===!1)return T.copy(N),!0}}return!1}function M(A){const D=A.uniforms;let C=0;const P=16;for(let w=0,T=D.length;w<T;w++){const O=Array.isArray(D[w])?D[w]:[D[w]];for(let B=0,G=O.length;B<G;B++){const k=O[B],et=Array.isArray(k.value)?k.value:[k.value];for(let tt=0,X=et.length;tt<X;tt++){const F=et[tt],H=E(F),J=C%P,ft=J%H.boundary,V=J+ft;C+=ft,V!==0&&P-V<H.storage&&(C+=P-V),k.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=C,C+=H.storage}}}const N=C%P;return N>0&&(C+=P-N),A.__size=C,A.__cache={},this}function E(A){const D={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(D.boundary=4,D.storage=4):A.isVector2?(D.boundary=8,D.storage=8):A.isVector3||A.isColor?(D.boundary=16,D.storage=12):A.isVector4?(D.boundary=16,D.storage=16):A.isMatrix3?(D.boundary=48,D.storage=48):A.isMatrix4?(D.boundary=64,D.storage=64):A.isTexture?_e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(D.boundary=16,D.storage=A.byteLength):_e("WebGLRenderer: Unsupported uniform value type.",A),D}function S(A){const D=A.target;D.removeEventListener("dispose",S);const C=c.indexOf(D.__bindingPointIndex);c.splice(C,1),o.deleteBuffer(r[D.id]),delete r[D.id],delete l[D.id]}function y(){for(const A in r)o.deleteBuffer(r[A]);c=[],r={},l={}}return{bind:p,update:d,dispose:y}}const $D=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let lr=null;function tU(){return lr===null&&(lr=new FR($D,16,16,ko,ns),lr.name="DFG_LUT",lr.minFilter=Ai,lr.magFilter=Ai,lr.wrapS=Kr,lr.wrapT=Kr,lr.generateMipmaps=!1,lr.needsUpdate=!0),lr}class eU{constructor(t={}){const{canvas:n=dR(),context:a=null,depth:r=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:x=ga}=t;this.isWebGLRenderer=!0;let M;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=a.getContextAttributes().alpha}else M=c;const E=x,S=new Set([lg,og,sg]),y=new Set([ga,yr,Bc,Hc,ag,rg]),A=new Uint32Array(4),D=new Int32Array(4),C=new lt;let P=null,N=null;const w=[],T=[];let O=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let G=!1,k=null;this._outputColorSpace=pa;let et=0,tt=0,X=null,F=-1,H=null;const J=new zn,ft=new zn;let V=null;const I=new qe(0);let K=0,xt=n.width,Mt=n.height,Ut=1,it=null,vt=null;const Et=new zn(0,0,xt,Mt),It=new zn(0,0,xt,Mt);let ne=!1;const Zt=new pg;let ye=!1,qt=!1;const ie=new Vn,ve=new lt,se=new zn,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function pn(){return X===null?Ut:1}let j=a;function ge(U,Z){return n.getContext(U,Z)}try{const U={alpha:!0,depth:r,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ng}`),n.addEventListener("webglcontextlost",Tt,!1),n.addEventListener("webglcontextrestored",Ct,!1),n.addEventListener("webglcontextcreationerror",Nt,!1),j===null){const Z="webgl2";if(j=ge(Z,U),j===null)throw ge(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw Ze("WebGLRenderer: "+U.message),U}let me,ze,Lt,Me,z,R,Q,_t,bt,zt,Dt,dt,pt,Bt,Ht,Ft,Ot,Gt,ce,de,Y,Rt,mt;function Vt(){me=new t3(j),me.init(),Y=new WD(j,me),ze=new Yw(j,me,t,Y),Lt=new kD(j,me),ze.reversedDepthBuffer&&g&&Lt.buffers.depth.setReversed(!0),Me=new i3(j),z=new wD,R=new XD(j,me,Lt,z,ze,Y,Me),Q=new $w(B),_t=new oC(j),Rt=new Xw(j,_t),bt=new e3(j,_t,Me,Rt),zt=new r3(j,bt,_t,Rt,Me),Gt=new a3(j,ze,R),Ht=new qw(z),Dt=new CD(B,Q,me,ze,Rt,Ht),dt=new QD(B,z),pt=new UD,Bt=new FD(me),Ot=new kw(B,Q,Lt,zt,M,p),Ft=new VD(B,zt,ze),mt=new JD(j,Me,ze,Lt),ce=new Ww(j,me,Me),de=new n3(j,me,Me),Me.programs=Dt.programs,B.capabilities=ze,B.extensions=me,B.properties=z,B.renderLists=pt,B.shadowMap=Ft,B.state=Lt,B.info=Me}Vt(),E!==ga&&(O=new o3(E,n.width,n.height,r,l));const Pt=new ZD(B,j);this.xr=Pt,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const U=me.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=me.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return Ut},this.setPixelRatio=function(U){U!==void 0&&(Ut=U,this.setSize(xt,Mt,!1))},this.getSize=function(U){return U.set(xt,Mt)},this.setSize=function(U,Z,st=!0){if(Pt.isPresenting){_e("WebGLRenderer: Can't change size while VR device is presenting.");return}xt=U,Mt=Z,n.width=Math.floor(U*Ut),n.height=Math.floor(Z*Ut),st===!0&&(n.style.width=U+"px",n.style.height=Z+"px"),O!==null&&O.setSize(n.width,n.height),this.setViewport(0,0,U,Z)},this.getDrawingBufferSize=function(U){return U.set(xt*Ut,Mt*Ut).floor()},this.setDrawingBufferSize=function(U,Z,st){xt=U,Mt=Z,Ut=st,n.width=Math.floor(U*st),n.height=Math.floor(Z*st),this.setViewport(0,0,U,Z)},this.setEffects=function(U){if(E===ga){Ze("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(U){for(let Z=0;Z<U.length;Z++)if(U[Z].isOutputPass===!0){_e("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(U||[])},this.getCurrentViewport=function(U){return U.copy(J)},this.getViewport=function(U){return U.copy(Et)},this.setViewport=function(U,Z,st,nt){U.isVector4?Et.set(U.x,U.y,U.z,U.w):Et.set(U,Z,st,nt),Lt.viewport(J.copy(Et).multiplyScalar(Ut).round())},this.getScissor=function(U){return U.copy(It)},this.setScissor=function(U,Z,st,nt){U.isVector4?It.set(U.x,U.y,U.z,U.w):It.set(U,Z,st,nt),Lt.scissor(ft.copy(It).multiplyScalar(Ut).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(U){Lt.setScissorTest(ne=U)},this.setOpaqueSort=function(U){it=U},this.setTransparentSort=function(U){vt=U},this.getClearColor=function(U){return U.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(U=!0,Z=!0,st=!0){let nt=0;if(U){let at=!1;if(X!==null){const kt=X.texture.format;at=S.has(kt)}if(at){const kt=X.texture.type,Wt=y.has(kt),Xt=Ot.getClearColor(),Jt=Ot.getClearAlpha(),Kt=Xt.r,le=Xt.g,Te=Xt.b;Wt?(A[0]=Kt,A[1]=le,A[2]=Te,A[3]=Jt,j.clearBufferuiv(j.COLOR,0,A)):(D[0]=Kt,D[1]=le,D[2]=Te,D[3]=Jt,j.clearBufferiv(j.COLOR,0,D))}else nt|=j.COLOR_BUFFER_BIT}Z&&(nt|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),st&&(nt|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&j.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(U){U.setRenderer(this),k=U},this.dispose=function(){n.removeEventListener("webglcontextlost",Tt,!1),n.removeEventListener("webglcontextrestored",Ct,!1),n.removeEventListener("webglcontextcreationerror",Nt,!1),Ot.dispose(),pt.dispose(),Bt.dispose(),z.dispose(),Q.dispose(),zt.dispose(),Rt.dispose(),mt.dispose(),Dt.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",Re),Pt.removeEventListener("sessionend",mn),je.stop()};function Tt(U){U.preventDefault(),Yy("WebGLRenderer: Context Lost."),G=!0}function Ct(){Yy("WebGLRenderer: Context Restored."),G=!1;const U=Me.autoReset,Z=Ft.enabled,st=Ft.autoUpdate,nt=Ft.needsUpdate,at=Ft.type;Vt(),Me.autoReset=U,Ft.enabled=Z,Ft.autoUpdate=st,Ft.needsUpdate=nt,Ft.type=at}function Nt(U){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function oe(U){const Z=U.target;Z.removeEventListener("dispose",oe),wt(Z)}function wt(U){re(U),z.remove(U)}function re(U){const Z=z.get(U).programs;Z!==void 0&&(Z.forEach(function(st){Dt.releaseProgram(st)}),U.isShaderMaterial&&Dt.releaseShaderCache(U))}this.renderBufferDirect=function(U,Z,st,nt,at,kt){Z===null&&(Z=ut);const Wt=at.isMesh&&at.matrixWorld.determinant()<0,Xt=yn(U,Z,st,nt,at);Lt.setMaterial(nt,Wt);let Jt=st.index,Kt=1;if(nt.wireframe===!0){if(Jt=bt.getWireframeAttribute(st),Jt===void 0)return;Kt=2}const le=st.drawRange,Te=st.attributes.position;let ae=le.start*Kt,Ke=(le.start+le.count)*Kt;kt!==null&&(ae=Math.max(ae,kt.start*Kt),Ke=Math.min(Ke,(kt.start+kt.count)*Kt)),Jt!==null?(ae=Math.max(ae,0),Ke=Math.min(Ke,Jt.count)):Te!=null&&(ae=Math.max(ae,0),Ke=Math.min(Ke,Te.count));const An=Ke-ae;if(An<0||An===1/0)return;Rt.setup(at,nt,Xt,st,Jt);let _n,nn=ce;if(Jt!==null&&(_n=_t.get(Jt),nn=de,nn.setIndex(_n)),at.isMesh)nt.wireframe===!0?(Lt.setLineWidth(nt.wireframeLinewidth*pn()),nn.setMode(j.LINES)):nn.setMode(j.TRIANGLES);else if(at.isLine){let an=nt.linewidth;an===void 0&&(an=1),Lt.setLineWidth(an*pn()),at.isLineSegments?nn.setMode(j.LINES):at.isLineLoop?nn.setMode(j.LINE_LOOP):nn.setMode(j.LINE_STRIP)}else at.isPoints?nn.setMode(j.POINTS):at.isSprite&&nn.setMode(j.TRIANGLES);if(at.isBatchedMesh)if(me.get("WEBGL_multi_draw"))nn.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{const an=at._multiDrawStarts,jt=at._multiDrawCounts,vi=at._multiDrawCount,Ie=Jt?_t.get(Jt).bytesPerElement:1,Jn=z.get(nt).currentProgram.getUniforms();for(let ea=0;ea<vi;ea++)Jn.setValue(j,"_gl_DrawID",ea),nn.render(an[ea]/Ie,jt[ea])}else if(at.isInstancedMesh)nn.renderInstances(ae,An,at.count);else if(st.isInstancedBufferGeometry){const an=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,jt=Math.min(st.instanceCount,an);nn.renderInstances(ae,An,jt)}else nn.render(ae,An)};function Qt(U,Z,st){U.transparent===!0&&U.side===jr&&U.forceSinglePass===!1?(U.side=Zi,U.needsUpdate=!0,Xn(U,Z,st),U.side=es,U.needsUpdate=!0,Xn(U,Z,st),U.side=jr):Xn(U,Z,st)}this.compile=function(U,Z,st=null){st===null&&(st=U),N=Bt.get(st),N.init(Z),T.push(N),st.traverseVisible(function(at){at.isLight&&at.layers.test(Z.layers)&&(N.pushLight(at),at.castShadow&&N.pushShadow(at))}),U!==st&&U.traverseVisible(function(at){at.isLight&&at.layers.test(Z.layers)&&(N.pushLight(at),at.castShadow&&N.pushShadow(at))}),N.setupLights();const nt=new Set;return U.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;const kt=at.material;if(kt)if(Array.isArray(kt))for(let Wt=0;Wt<kt.length;Wt++){const Xt=kt[Wt];Qt(Xt,st,at),nt.add(Xt)}else Qt(kt,st,at),nt.add(kt)}),N=T.pop(),nt},this.compileAsync=function(U,Z,st=null){const nt=this.compile(U,Z,st);return new Promise(at=>{function kt(){if(nt.forEach(function(Wt){z.get(Wt).currentProgram.isReady()&&nt.delete(Wt)}),nt.size===0){at(U);return}setTimeout(kt,10)}me.get("KHR_parallel_shader_compile")!==null?kt():setTimeout(kt,10)})};let fe=null;function Tn(U){fe&&fe(U)}function Re(){je.stop()}function mn(){je.start()}const je=new q1;je.setAnimationLoop(Tn),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(U){fe=U,Pt.setAnimationLoop(U),U===null?je.stop():je.start()},Pt.addEventListener("sessionstart",Re),Pt.addEventListener("sessionend",mn),this.render=function(U,Z){if(Z!==void 0&&Z.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;k!==null&&k.renderStart(U,Z);const st=Pt.enabled===!0&&Pt.isPresenting===!0,nt=O!==null&&(X===null||st)&&O.begin(B,X);if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(Z),Z=Pt.getCamera()),U.isScene===!0&&U.onBeforeRender(B,U,Z,X),N=Bt.get(U,T.length),N.init(Z),N.state.textureUnits=R.getTextureUnits(),T.push(N),ie.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Zt.setFromProjectionMatrix(ie,pr,Z.reversedDepth),qt=this.localClippingEnabled,ye=Ht.init(this.clippingPlanes,qt),P=pt.get(U,w.length),P.init(),w.push(P),Pt.enabled===!0&&Pt.isPresenting===!0){const Wt=B.xr.getDepthSensingMesh();Wt!==null&&xe(Wt,Z,-1/0,B.sortObjects)}xe(U,Z,0,B.sortObjects),P.finish(),B.sortObjects===!0&&P.sort(it,vt),we=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1,we&&Ot.addToRenderList(P,U),this.info.render.frame++,ye===!0&&Ht.beginShadows();const at=N.state.shadowsArray;if(Ft.render(at,U,Z),ye===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),(nt&&O.hasRenderPass())===!1){const Wt=P.opaque,Xt=P.transmissive;if(N.setupLights(),Z.isArrayCamera){const Jt=Z.cameras;if(Xt.length>0)for(let Kt=0,le=Jt.length;Kt<le;Kt++){const Te=Jt[Kt];Fe(Wt,Xt,U,Te)}we&&Ot.render(U);for(let Kt=0,le=Jt.length;Kt<le;Kt++){const Te=Jt[Kt];be(P,U,Te,Te.viewport)}}else Xt.length>0&&Fe(Wt,Xt,U,Z),we&&Ot.render(U),be(P,U,Z)}X!==null&&tt===0&&(R.updateMultisampleRenderTarget(X),R.updateRenderTargetMipmap(X)),nt&&O.end(B),U.isScene===!0&&U.onAfterRender(B,U,Z),Rt.resetDefaultState(),F=-1,H=null,T.pop(),T.length>0?(N=T[T.length-1],R.setTextureUnits(N.state.textureUnits),ye===!0&&Ht.setGlobalState(B.clippingPlanes,N.state.camera)):N=null,w.pop(),w.length>0?P=w[w.length-1]:P=null,k!==null&&k.renderEnd()};function xe(U,Z,st,nt){if(U.visible===!1)return;if(U.layers.test(Z.layers)){if(U.isGroup)st=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(Z);else if(U.isLightProbeGrid)N.pushLightProbeGrid(U);else if(U.isLight)N.pushLight(U),U.castShadow&&N.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||Zt.intersectsSprite(U)){nt&&se.setFromMatrixPosition(U.matrixWorld).applyMatrix4(ie);const Wt=zt.update(U),Xt=U.material;Xt.visible&&P.push(U,Wt,Xt,st,se.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||Zt.intersectsObject(U))){const Wt=zt.update(U),Xt=U.material;if(nt&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),se.copy(U.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),se.copy(Wt.boundingSphere.center)),se.applyMatrix4(U.matrixWorld).applyMatrix4(ie)),Array.isArray(Xt)){const Jt=Wt.groups;for(let Kt=0,le=Jt.length;Kt<le;Kt++){const Te=Jt[Kt],ae=Xt[Te.materialIndex];ae&&ae.visible&&P.push(U,Wt,ae,st,se.z,Te)}}else Xt.visible&&P.push(U,Wt,Xt,st,se.z,null)}}const kt=U.children;for(let Wt=0,Xt=kt.length;Wt<Xt;Wt++)xe(kt[Wt],Z,st,nt)}function be(U,Z,st,nt){const{opaque:at,transmissive:kt,transparent:Wt}=U;N.setupLightsView(st),ye===!0&&Ht.setGlobalState(B.clippingPlanes,st),nt&&Lt.viewport(J.copy(nt)),at.length>0&&kn(at,Z,st),kt.length>0&&kn(kt,Z,st),Wt.length>0&&kn(Wt,Z,st),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function Fe(U,Z,st,nt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[nt.id]===void 0){const ae=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[nt.id]=new vr(1,1,{generateMipmaps:!0,type:ae?ns:ga,minFilter:Do,samples:Math.max(4,ze.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace})}const kt=N.state.transmissionRenderTarget[nt.id],Wt=nt.viewport||J;kt.setSize(Wt.z*B.transmissionResolutionScale,Wt.w*B.transmissionResolutionScale);const Xt=B.getRenderTarget(),Jt=B.getActiveCubeFace(),Kt=B.getActiveMipmapLevel();B.setRenderTarget(kt),B.getClearColor(I),K=B.getClearAlpha(),K<1&&B.setClearColor(16777215,.5),B.clear(),we&&Ot.render(st);const le=B.toneMapping;B.toneMapping=gr;const Te=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),N.setupLightsView(nt),ye===!0&&Ht.setGlobalState(B.clippingPlanes,nt),kn(U,st,nt),R.updateMultisampleRenderTarget(kt),R.updateRenderTargetMipmap(kt),me.has("WEBGL_multisampled_render_to_texture")===!1){let ae=!1;for(let Ke=0,An=Z.length;Ke<An;Ke++){const _n=Z[Ke],{object:nn,geometry:an,material:jt,group:vi}=_n;if(jt.side===jr&&nn.layers.test(nt.layers)){const Ie=jt.side;jt.side=Zi,jt.needsUpdate=!0,cn(nn,st,nt,an,jt,vi),jt.side=Ie,jt.needsUpdate=!0,ae=!0}}ae===!0&&(R.updateMultisampleRenderTarget(kt),R.updateRenderTargetMipmap(kt))}B.setRenderTarget(Xt,Jt,Kt),B.setClearColor(I,K),Te!==void 0&&(nt.viewport=Te),B.toneMapping=le}function kn(U,Z,st){const nt=Z.isScene===!0?Z.overrideMaterial:null;for(let at=0,kt=U.length;at<kt;at++){const Wt=U[at],{object:Xt,geometry:Jt,group:Kt}=Wt;let le=Wt.material;le.allowOverride===!0&&nt!==null&&(le=nt),Xt.layers.test(st.layers)&&cn(Xt,Z,st,Jt,le,Kt)}}function cn(U,Z,st,nt,at,kt){U.onBeforeRender(B,Z,st,nt,at,kt),U.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),at.onBeforeRender(B,Z,st,nt,U,kt),at.transparent===!0&&at.side===jr&&at.forceSinglePass===!1?(at.side=Zi,at.needsUpdate=!0,B.renderBufferDirect(st,Z,nt,at,U,kt),at.side=es,at.needsUpdate=!0,B.renderBufferDirect(st,Z,nt,at,U,kt),at.side=jr):B.renderBufferDirect(st,Z,nt,at,U,kt),U.onAfterRender(B,Z,st,nt,at,kt)}function Xn(U,Z,st){Z.isScene!==!0&&(Z=ut);const nt=z.get(U),at=N.state.lights,kt=N.state.shadowsArray,Wt=at.state.version,Xt=Dt.getParameters(U,at.state,kt,Z,st,N.state.lightProbeGridArray),Jt=Dt.getProgramCacheKey(Xt);let Kt=nt.programs;nt.environment=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?Z.environment:null,nt.fog=Z.fog;const le=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap;nt.envMap=Q.get(U.envMap||nt.environment,le),nt.envMapRotation=nt.environment!==null&&U.envMap===null?Z.environmentRotation:U.envMapRotation,Kt===void 0&&(U.addEventListener("dispose",oe),Kt=new Map,nt.programs=Kt);let Te=Kt.get(Jt);if(Te!==void 0){if(nt.currentProgram===Te&&nt.lightsStateVersion===Wt)return Sn(U,Xt),Te}else Xt.uniforms=Dt.getUniforms(U),k!==null&&U.isNodeMaterial&&k.build(U,st,Xt),U.onBeforeCompile(Xt,B),Te=Dt.acquireProgram(Xt,Jt),Kt.set(Jt,Te),nt.uniforms=Xt.uniforms;const ae=nt.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(ae.clippingPlanes=Ht.uniform),Sn(U,Xt),nt.needsLights=Ta(U),nt.lightsStateVersion=Wt,nt.needsLights&&(ae.ambientLightColor.value=at.state.ambient,ae.lightProbe.value=at.state.probe,ae.directionalLights.value=at.state.directional,ae.directionalLightShadows.value=at.state.directionalShadow,ae.spotLights.value=at.state.spot,ae.spotLightShadows.value=at.state.spotShadow,ae.rectAreaLights.value=at.state.rectArea,ae.ltc_1.value=at.state.rectAreaLTC1,ae.ltc_2.value=at.state.rectAreaLTC2,ae.pointLights.value=at.state.point,ae.pointLightShadows.value=at.state.pointShadow,ae.hemisphereLights.value=at.state.hemi,ae.directionalShadowMatrix.value=at.state.directionalShadowMatrix,ae.spotLightMatrix.value=at.state.spotLightMatrix,ae.spotLightMap.value=at.state.spotLightMap,ae.pointShadowMatrix.value=at.state.pointShadowMatrix),nt.lightProbeGrid=N.state.lightProbeGridArray.length>0,nt.currentProgram=Te,nt.uniformsList=null,Te}function _i(U){if(U.uniformsList===null){const Z=U.currentProgram.getUniforms();U.uniformsList=$h.seqWithValue(Z.seq,U.uniforms)}return U.uniformsList}function Sn(U,Z){const st=z.get(U);st.outputColorSpace=Z.outputColorSpace,st.batching=Z.batching,st.batchingColor=Z.batchingColor,st.instancing=Z.instancing,st.instancingColor=Z.instancingColor,st.instancingMorph=Z.instancingMorph,st.skinning=Z.skinning,st.morphTargets=Z.morphTargets,st.morphNormals=Z.morphNormals,st.morphColors=Z.morphColors,st.morphTargetsCount=Z.morphTargetsCount,st.numClippingPlanes=Z.numClippingPlanes,st.numIntersection=Z.numClipIntersection,st.vertexAlphas=Z.vertexAlphas,st.vertexTangents=Z.vertexTangents,st.toneMapping=Z.toneMapping}function Dn(U,Z){if(U.length===0)return null;if(U.length===1)return U[0].texture!==null?U[0]:null;C.setFromMatrixPosition(Z.matrixWorld);for(let st=0,nt=U.length;st<nt;st++){const at=U[st];if(at.texture!==null&&at.boundingBox.containsPoint(C))return at}return null}function yn(U,Z,st,nt,at){Z.isScene!==!0&&(Z=ut),R.resetTextureUnits();const kt=Z.fog,Wt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?Z.environment:null,Xt=X===null?B.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:We.workingColorSpace,Jt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,Kt=Q.get(nt.envMap||Wt,Jt),le=nt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Te=!!st.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),ae=!!st.morphAttributes.position,Ke=!!st.morphAttributes.normal,An=!!st.morphAttributes.color;let _n=gr;nt.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(_n=B.toneMapping);const nn=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,an=nn!==void 0?nn.length:0,jt=z.get(nt),vi=N.state.lights;if(ye===!0&&(qt===!0||U!==H)){const tn=U===H&&nt.id===F;Ht.setState(nt,U,tn)}let Ie=!1;nt.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==vi.state.version||jt.outputColorSpace!==Xt||at.isBatchedMesh&&jt.batching===!1||!at.isBatchedMesh&&jt.batching===!0||at.isBatchedMesh&&jt.batchingColor===!0&&at.colorTexture===null||at.isBatchedMesh&&jt.batchingColor===!1&&at.colorTexture!==null||at.isInstancedMesh&&jt.instancing===!1||!at.isInstancedMesh&&jt.instancing===!0||at.isSkinnedMesh&&jt.skinning===!1||!at.isSkinnedMesh&&jt.skinning===!0||at.isInstancedMesh&&jt.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&jt.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&jt.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&jt.instancingMorph===!1&&at.morphTexture!==null||jt.envMap!==Kt||nt.fog===!0&&jt.fog!==kt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==Ht.numPlanes||jt.numIntersection!==Ht.numIntersection)||jt.vertexAlphas!==le||jt.vertexTangents!==Te||jt.morphTargets!==ae||jt.morphNormals!==Ke||jt.morphColors!==An||jt.toneMapping!==_n||jt.morphTargetsCount!==an||!!jt.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(Ie=!0):(Ie=!0,jt.__version=nt.version);let Jn=jt.currentProgram;Ie===!0&&(Jn=Xn(nt,Z,at),k&&nt.isNodeMaterial&&k.onUpdateProgram(nt,Jn,jt));let ea=!1,ka=!1,na=!1;const rn=Jn.getUniforms(),Rn=jt.uniforms;if(Lt.useProgram(Jn.program)&&(ea=!0,ka=!0,na=!0),nt.id!==F&&(F=nt.id,ka=!0),jt.needsLights){const tn=Dn(N.state.lightProbeGridArray,at);jt.lightProbeGrid!==tn&&(jt.lightProbeGrid=tn,ka=!0)}if(ea||H!==U){Lt.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),rn.setValue(j,"projectionMatrix",U.projectionMatrix),rn.setValue(j,"viewMatrix",U.matrixWorldInverse);const nr=rn.map.cameraPosition;nr!==void 0&&nr.setValue(j,ve.setFromMatrixPosition(U.matrixWorld)),ze.logarithmicDepthBuffer&&rn.setValue(j,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&rn.setValue(j,"isOrthographic",U.isOrthographicCamera===!0),H!==U&&(H=U,ka=!0,na=!0)}if(jt.needsLights&&(vi.state.directionalShadowMap.length>0&&rn.setValue(j,"directionalShadowMap",vi.state.directionalShadowMap,R),vi.state.spotShadowMap.length>0&&rn.setValue(j,"spotShadowMap",vi.state.spotShadowMap,R),vi.state.pointShadowMap.length>0&&rn.setValue(j,"pointShadowMap",vi.state.pointShadowMap,R)),at.isSkinnedMesh){rn.setOptional(j,at,"bindMatrix"),rn.setOptional(j,at,"bindMatrixInverse");const tn=at.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),rn.setValue(j,"boneTexture",tn.boneTexture,R))}at.isBatchedMesh&&(rn.setOptional(j,at,"batchingTexture"),rn.setValue(j,"batchingTexture",at._matricesTexture,R),rn.setOptional(j,at,"batchingIdTexture"),rn.setValue(j,"batchingIdTexture",at._indirectTexture,R),rn.setOptional(j,at,"batchingColorTexture"),at._colorsTexture!==null&&rn.setValue(j,"batchingColorTexture",at._colorsTexture,R));const Xa=st.morphAttributes;if((Xa.position!==void 0||Xa.normal!==void 0||Xa.color!==void 0)&&Gt.update(at,st,Jn),(ka||jt.receiveShadow!==at.receiveShadow)&&(jt.receiveShadow=at.receiveShadow,rn.setValue(j,"receiveShadow",at.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&Z.environment!==null&&(Rn.envMapIntensity.value=Z.environmentIntensity),Rn.dfgLUT!==void 0&&(Rn.dfgLUT.value=tU()),ka){if(rn.setValue(j,"toneMappingExposure",B.toneMappingExposure),jt.needsLights&&gi(Rn,na),kt&&nt.fog===!0&&dt.refreshFogUniforms(Rn,kt),dt.refreshMaterialUniforms(Rn,nt,Ut,Mt,N.state.transmissionRenderTarget[U.id]),jt.needsLights&&jt.lightProbeGrid){const tn=jt.lightProbeGrid;Rn.probesSH.value=tn.texture,Rn.probesMin.value.copy(tn.boundingBox.min),Rn.probesMax.value.copy(tn.boundingBox.max),Rn.probesResolution.value.copy(tn.resolution)}$h.upload(j,_i(jt),Rn,R)}if(nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&($h.upload(j,_i(jt),Rn,R),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&rn.setValue(j,"center",at.center),rn.setValue(j,"modelViewMatrix",at.modelViewMatrix),rn.setValue(j,"normalMatrix",at.normalMatrix),rn.setValue(j,"modelMatrix",at.matrixWorld),nt.uniformsGroups!==void 0){const tn=nt.uniformsGroups;for(let nr=0,ss=tn.length;nr<ss;nr++){const to=tn[nr];mt.update(to,Jn),mt.bind(to,Jn)}}return Jn}function gi(U,Z){U.ambientLightColor.needsUpdate=Z,U.lightProbe.needsUpdate=Z,U.directionalLights.needsUpdate=Z,U.directionalLightShadows.needsUpdate=Z,U.pointLights.needsUpdate=Z,U.pointLightShadows.needsUpdate=Z,U.spotLights.needsUpdate=Z,U.spotLightShadows.needsUpdate=Z,U.rectAreaLights.needsUpdate=Z,U.hemisphereLights.needsUpdate=Z}function Ta(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return et},this.getActiveMipmapLevel=function(){return tt},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(U,Z,st){const nt=z.get(U);nt.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),z.get(U.texture).__webglTexture=Z,z.get(U.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:st,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,Z){const st=z.get(U);st.__webglFramebuffer=Z,st.__useDefaultFramebuffer=Z===void 0};const Mn=j.createFramebuffer();this.setRenderTarget=function(U,Z=0,st=0){X=U,et=Z,tt=st;let nt=null,at=!1,kt=!1;if(U){const Xt=z.get(U);if(Xt.__useDefaultFramebuffer!==void 0){Lt.bindFramebuffer(j.FRAMEBUFFER,Xt.__webglFramebuffer),J.copy(U.viewport),ft.copy(U.scissor),V=U.scissorTest,Lt.viewport(J),Lt.scissor(ft),Lt.setScissorTest(V),F=-1;return}else if(Xt.__webglFramebuffer===void 0)R.setupRenderTarget(U);else if(Xt.__hasExternalTextures)R.rebindTextures(U,z.get(U.texture).__webglTexture,z.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const le=U.depthTexture;if(Xt.__boundDepthTexture!==le){if(le!==null&&z.has(le)&&(U.width!==le.image.width||U.height!==le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(U)}}const Jt=U.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(kt=!0);const Kt=z.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Kt[Z])?nt=Kt[Z][st]:nt=Kt[Z],at=!0):U.samples>0&&R.useMultisampledRTT(U)===!1?nt=z.get(U).__webglMultisampledFramebuffer:Array.isArray(Kt)?nt=Kt[st]:nt=Kt,J.copy(U.viewport),ft.copy(U.scissor),V=U.scissorTest}else J.copy(Et).multiplyScalar(Ut).floor(),ft.copy(It).multiplyScalar(Ut).floor(),V=ne;if(st!==0&&(nt=Mn),Lt.bindFramebuffer(j.FRAMEBUFFER,nt)&&Lt.drawBuffers(U,nt),Lt.viewport(J),Lt.scissor(ft),Lt.setScissorTest(V),at){const Xt=z.get(U.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Xt.__webglTexture,st)}else if(kt){const Xt=Z;for(let Jt=0;Jt<U.textures.length;Jt++){const Kt=z.get(U.textures[Jt]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Jt,Kt.__webglTexture,st,Xt)}}else if(U!==null&&st!==0){const Xt=z.get(U.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Xt.__webglTexture,st)}F=-1},this.readRenderTargetPixels=function(U,Z,st,nt,at,kt,Wt,Xt=0){if(!(U&&U.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=z.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Wt!==void 0&&(Jt=Jt[Wt]),Jt){Lt.bindFramebuffer(j.FRAMEBUFFER,Jt);try{const Kt=U.textures[Xt],le=Kt.format,Te=Kt.type;if(U.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Xt),!ze.textureFormatReadable(le)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Te)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=U.width-nt&&st>=0&&st<=U.height-at&&j.readPixels(Z,st,nt,at,Y.convert(le),Y.convert(Te),kt)}finally{const Kt=X!==null?z.get(X).__webglFramebuffer:null;Lt.bindFramebuffer(j.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(U,Z,st,nt,at,kt,Wt,Xt=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=z.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Wt!==void 0&&(Jt=Jt[Wt]),Jt)if(Z>=0&&Z<=U.width-nt&&st>=0&&st<=U.height-at){Lt.bindFramebuffer(j.FRAMEBUFFER,Jt);const Kt=U.textures[Xt],le=Kt.format,Te=Kt.type;if(U.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Xt),!ze.textureFormatReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ae=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,ae),j.bufferData(j.PIXEL_PACK_BUFFER,kt.byteLength,j.STREAM_READ),j.readPixels(Z,st,nt,at,Y.convert(le),Y.convert(Te),0);const Ke=X!==null?z.get(X).__webglFramebuffer:null;Lt.bindFramebuffer(j.FRAMEBUFFER,Ke);const An=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await pR(j,An,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,ae),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,kt),j.deleteBuffer(ae),j.deleteSync(An),kt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,Z=null,st=0){const nt=Math.pow(2,-st),at=Math.floor(U.image.width*nt),kt=Math.floor(U.image.height*nt),Wt=Z!==null?Z.x:0,Xt=Z!==null?Z.y:0;R.setTexture2D(U,0),j.copyTexSubImage2D(j.TEXTURE_2D,st,0,0,Wt,Xt,at,kt),Lt.unbindTexture()};const De=j.createFramebuffer(),Di=j.createFramebuffer();this.copyTextureToTexture=function(U,Z,st=null,nt=null,at=0,kt=0){let Wt,Xt,Jt,Kt,le,Te,ae,Ke,An;const _n=U.isCompressedTexture?U.mipmaps[kt]:U.image;if(st!==null)Wt=st.max.x-st.min.x,Xt=st.max.y-st.min.y,Jt=st.isBox3?st.max.z-st.min.z:1,Kt=st.min.x,le=st.min.y,Te=st.isBox3?st.min.z:0;else{const Rn=Math.pow(2,-at);Wt=Math.floor(_n.width*Rn),Xt=Math.floor(_n.height*Rn),U.isDataArrayTexture?Jt=_n.depth:U.isData3DTexture?Jt=Math.floor(_n.depth*Rn):Jt=1,Kt=0,le=0,Te=0}nt!==null?(ae=nt.x,Ke=nt.y,An=nt.z):(ae=0,Ke=0,An=0);const nn=Y.convert(Z.format),an=Y.convert(Z.type);let jt;Z.isData3DTexture?(R.setTexture3D(Z,0),jt=j.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(R.setTexture2DArray(Z,0),jt=j.TEXTURE_2D_ARRAY):(R.setTexture2D(Z,0),jt=j.TEXTURE_2D),Lt.activeTexture(j.TEXTURE0),Lt.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Z.flipY),Lt.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),Lt.pixelStorei(j.UNPACK_ALIGNMENT,Z.unpackAlignment);const vi=Lt.getParameter(j.UNPACK_ROW_LENGTH),Ie=Lt.getParameter(j.UNPACK_IMAGE_HEIGHT),Jn=Lt.getParameter(j.UNPACK_SKIP_PIXELS),ea=Lt.getParameter(j.UNPACK_SKIP_ROWS),ka=Lt.getParameter(j.UNPACK_SKIP_IMAGES);Lt.pixelStorei(j.UNPACK_ROW_LENGTH,_n.width),Lt.pixelStorei(j.UNPACK_IMAGE_HEIGHT,_n.height),Lt.pixelStorei(j.UNPACK_SKIP_PIXELS,Kt),Lt.pixelStorei(j.UNPACK_SKIP_ROWS,le),Lt.pixelStorei(j.UNPACK_SKIP_IMAGES,Te);const na=U.isDataArrayTexture||U.isData3DTexture,rn=Z.isDataArrayTexture||Z.isData3DTexture;if(U.isDepthTexture){const Rn=z.get(U),Xa=z.get(Z),tn=z.get(Rn.__renderTarget),nr=z.get(Xa.__renderTarget);Lt.bindFramebuffer(j.READ_FRAMEBUFFER,tn.__webglFramebuffer),Lt.bindFramebuffer(j.DRAW_FRAMEBUFFER,nr.__webglFramebuffer);for(let ss=0;ss<Jt;ss++)na&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,z.get(U).__webglTexture,at,Te+ss),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,z.get(Z).__webglTexture,kt,An+ss)),j.blitFramebuffer(Kt,le,Wt,Xt,ae,Ke,Wt,Xt,j.DEPTH_BUFFER_BIT,j.NEAREST);Lt.bindFramebuffer(j.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(at!==0||U.isRenderTargetTexture||z.has(U)){const Rn=z.get(U),Xa=z.get(Z);Lt.bindFramebuffer(j.READ_FRAMEBUFFER,De),Lt.bindFramebuffer(j.DRAW_FRAMEBUFFER,Di);for(let tn=0;tn<Jt;tn++)na?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Rn.__webglTexture,at,Te+tn):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Rn.__webglTexture,at),rn?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Xa.__webglTexture,kt,An+tn):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Xa.__webglTexture,kt),at!==0?j.blitFramebuffer(Kt,le,Wt,Xt,ae,Ke,Wt,Xt,j.COLOR_BUFFER_BIT,j.NEAREST):rn?j.copyTexSubImage3D(jt,kt,ae,Ke,An+tn,Kt,le,Wt,Xt):j.copyTexSubImage2D(jt,kt,ae,Ke,Kt,le,Wt,Xt);Lt.bindFramebuffer(j.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else rn?U.isDataTexture||U.isData3DTexture?j.texSubImage3D(jt,kt,ae,Ke,An,Wt,Xt,Jt,nn,an,_n.data):Z.isCompressedArrayTexture?j.compressedTexSubImage3D(jt,kt,ae,Ke,An,Wt,Xt,Jt,nn,_n.data):j.texSubImage3D(jt,kt,ae,Ke,An,Wt,Xt,Jt,nn,an,_n):U.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,kt,ae,Ke,Wt,Xt,nn,an,_n.data):U.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,kt,ae,Ke,_n.width,_n.height,nn,_n.data):j.texSubImage2D(j.TEXTURE_2D,kt,ae,Ke,Wt,Xt,nn,an,_n);Lt.pixelStorei(j.UNPACK_ROW_LENGTH,vi),Lt.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ie),Lt.pixelStorei(j.UNPACK_SKIP_PIXELS,Jn),Lt.pixelStorei(j.UNPACK_SKIP_ROWS,ea),Lt.pixelStorei(j.UNPACK_SKIP_IMAGES,ka),kt===0&&Z.generateMipmaps&&j.generateMipmap(jt),Lt.unbindTexture()},this.initRenderTarget=function(U){z.get(U).__webglFramebuffer===void 0&&R.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?R.setTextureCube(U,0):U.isData3DTexture?R.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?R.setTexture2DArray(U,0):R.setTexture2D(U,0),Lt.unbindTexture()},this.resetState=function(){et=0,tt=0,X=null,Lt.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=We._getDrawingBufferColorSpace(t),n.unpackColorSpace=We._getUnpackColorSpace()}}function Yr(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function eE(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ma={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},kc={duration:.5,overwrite:!1,delay:0},xg,mi,wn,Ha=1e8,xn=1/Ha,U0=Math.PI*2,nU=U0/4,iU=0,nE=Math.sqrt,aU=Math.cos,rU=Math.sin,li=function(t){return typeof t=="string"},Fn=function(t){return typeof t=="function"},as=function(t){return typeof t=="number"},Sg=function(t){return typeof t>"u"},Er=function(t){return typeof t=="object"},Ki=function(t){return t!==!1},yg=function(){return typeof window<"u"},Ph=function(t){return Fn(t)||li(t)},iE=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},wi=Array.isArray,sU=/random\([^)]+\)/g,oU=/,\s*/g,IM=/(?:-?\.?\d|\.)+/gi,aE=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ql=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,T_=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,rE=/[+-]=-?[.\d]+/,lU=/[^,'"\[\]\s]+/gi,uU=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Nn,ur,N0,Mg,Ea={},pd={},sE,oE=function(t){return(pd=uu(t,Ea))&&ta},Eg=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},Xc=function(t,n){return!n&&console.warn(t)},lE=function(t,n){return t&&(Ea[t]=n)&&pd&&(pd[t]=n)||Ea},Wc=function(){return 0},cU={suppressEvents:!0,isStart:!0,kill:!1},td={suppressEvents:!0,kill:!1},fU={suppressEvents:!0},bg={},Ws=[],L0={},uE,ma={},A_={},BM=30,ed=[],Tg="",Ag=function(t){var n=t[0],a,r;if(Er(n)||Fn(n)||(t=[t]),!(a=(n._gsap||{}).harness)){for(r=ed.length;r--&&!ed[r].targetTest(n););a=ed[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new UE(t[r],a)))||t.splice(r,1);return t},Po=function(t){return t._gsap||Ag(Ga(t))[0]._gsap},cE=function(t,n,a){return(a=t[n])&&Fn(a)?t[n]():Sg(a)&&t.getAttribute&&t.getAttribute(n)||a},Qi=function(t,n){return(t=t.split(",")).forEach(n)||t},Hn=function(t){return Math.round(t*1e5)/1e5||0},Un=function(t){return Math.round(t*1e7)/1e7||0},Jl=function(t,n){var a=n.charAt(0),r=parseFloat(n.substr(2));return t=parseFloat(t),a==="+"?t+r:a==="-"?t-r:a==="*"?t*r:t/r},hU=function(t,n){for(var a=n.length,r=0;t.indexOf(n[r])<0&&++r<a;);return r<a},md=function(){var t=Ws.length,n=Ws.slice(0),a,r;for(L0={},Ws.length=0,a=0;a<t;a++)r=n[a],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Rg=function(t){return!!(t._initted||t._startAt||t.add)},fE=function(t,n,a,r){Ws.length&&!mi&&md(),t.render(n,a,!!(mi&&n<0&&Rg(t))),Ws.length&&!mi&&md()},hE=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(lU).length<2?n:li(t)?t.trim():t},dE=function(t){return t},ba=function(t,n){for(var a in n)a in t||(t[a]=n[a]);return t},dU=function(t){return function(n,a){for(var r in a)r in n||r==="duration"&&t||r==="ease"||(n[r]=a[r])}},uu=function(t,n){for(var a in n)t[a]=n[a];return t},HM=function o(t,n){for(var a in n)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(t[a]=Er(n[a])?o(t[a]||(t[a]={}),n[a]):n[a]);return t},_d=function(t,n){var a={},r;for(r in t)r in n||(a[r]=t[r]);return a},Rc=function(t){var n=t.parent||Nn,a=t.keyframes?dU(wi(t.keyframes)):ba;if(Ki(t.inherit))for(;n;)a(t,n.vars.defaults),n=n.parent||n._dp;return t},pU=function(t,n){for(var a=t.length,r=a===n.length;r&&a--&&t[a]===n[a];);return a<0},pE=function(t,n,a,r,l){var c=t[r],f;if(l)for(f=n[l];c&&c[l]>f;)c=c._prev;return c?(n._next=c._next,c._next=n):(n._next=t[a],t[a]=n),n._next?n._next._prev=n:t[r]=n,n._prev=c,n.parent=n._dp=t,n},Dd=function(t,n,a,r){a===void 0&&(a="_first"),r===void 0&&(r="_last");var l=n._prev,c=n._next;l?l._next=c:t[a]===n&&(t[a]=c),c?c._prev=l:t[r]===n&&(t[r]=l),n._next=n._prev=n.parent=null},Zs=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},zo=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var a=t;a;)a._dirty=1,a=a.parent;return t},mU=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},O0=function(t,n,a,r){return t._startAt&&(mi?t._startAt.revert(td):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,r))},_U=function o(t){return!t||t._ts&&o(t.parent)},GM=function(t){return t._repeat?cu(t._tTime,t=t.duration()+t._rDelay)*t:0},cu=function(t,n){var a=Math.floor(t=Un(t/n));return t&&a===t?a-1:a},gd=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},Ud=function(t){return t._end=Un(t._start+(t._tDur/Math.abs(t._ts||t._rts||xn)||0))},Nd=function(t,n){var a=t._dp;return a&&a.smoothChildTiming&&t._ts&&(t._start=Un(a._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),Ud(t),a._dirty||zo(a,t)),t},mE=function(t,n){var a;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(a=gd(t.rawTime(),n),(!n._dur||af(0,n.totalDuration(),a)-n._tTime>xn)&&n.render(a,!0)),zo(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(a=t;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;t._zTime=-xn}},hr=function(t,n,a,r){return n.parent&&Zs(n),n._start=Un((as(a)?a:a||t!==Nn?Pa(t,a,n):t._time)+n._delay),n._end=Un(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),pE(t,n,"_first","_last",t._sort?"_start":0),P0(n)||(t._recent=n),r||mE(t,n),t._ts<0&&Nd(t,t._tTime),t},_E=function(t,n){return(Ea.ScrollTrigger||Eg("scrollTrigger",n))&&Ea.ScrollTrigger.create(n,t)},gE=function(t,n,a,r,l){if(wg(t,n,l),!t._initted)return 1;if(!a&&t._pt&&!mi&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&uE!==va.frame)return Ws.push(t),t._lazy=[l,r],1},gU=function o(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||o(n))},P0=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},vU=function(t,n,a,r){var l=t.ratio,c=n<0||!n&&(!t._start&&gU(t)&&!(!t._initted&&P0(t))||(t._ts<0||t._dp._ts<0)&&!P0(t))?0:1,f=t._rDelay,p=0,d,_,v;if(f&&t._repeat&&(p=af(0,t._tDur,n),_=cu(p,f),t._yoyo&&_&1&&(c=1-c),_!==cu(t._tTime,f)&&(l=1-c,t.vars.repeatRefresh&&t._initted&&t.invalidate())),c!==l||mi||r||t._zTime===xn||!n&&t._zTime){if(!t._initted&&gE(t,n,r,a,p))return;for(v=t._zTime,t._zTime=n||(a?xn:0),a||(a=n&&!v),t.ratio=c,t._from&&(c=1-c),t._time=0,t._tTime=p,d=t._pt;d;)d.r(c,d.d),d=d._next;n<0&&O0(t,n,a,!0),t._onUpdate&&!a&&Sa(t,"onUpdate"),p&&t._repeat&&!a&&t.parent&&Sa(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===c&&(c&&Zs(t,1),!a&&!mi&&(Sa(t,c?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},xU=function(t,n,a){var r;if(a>n)for(r=t._first;r&&r._start<=a;){if(r.data==="isPause"&&r._start>n)return r;r=r._next}else for(r=t._last;r&&r._start>=a;){if(r.data==="isPause"&&r._start<n)return r;r=r._prev}},fu=function(t,n,a,r){var l=t._repeat,c=Un(n)||0,f=t._tTime/t._tDur;return f&&!r&&(t._time*=c/t._dur),t._dur=c,t._tDur=l?l<0?1e10:Un(c*(l+1)+t._rDelay*l):c,f>0&&!r&&Nd(t,t._tTime=t._tDur*f),t.parent&&Ud(t),a||zo(t.parent,t),t},VM=function(t){return t instanceof ji?zo(t):fu(t,t._dur)},SU={_start:0,endTime:Wc,totalDuration:Wc},Pa=function o(t,n,a){var r=t.labels,l=t._recent||SU,c=t.duration()>=Ha?l.endTime(!1):t._dur,f,p,d;return li(n)&&(isNaN(n)||n in r)?(p=n.charAt(0),d=n.substr(-1)==="%",f=n.indexOf("="),p==="<"||p===">"?(f>=0&&(n=n.replace(/=/,"")),(p==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(n.substr(1))||0)*(d?(f<0?l:a).totalDuration()/100:1)):f<0?(n in r||(r[n]=c),r[n]):(p=parseFloat(n.charAt(f-1)+n.substr(f+1)),d&&a&&(p=p/100*(wi(a)?a[0]:a).totalDuration()),f>1?o(t,n.substr(0,f-1),a)+p:c+p)):n==null?c:+n},Cc=function(t,n,a){var r=as(n[1]),l=(r?2:1)+(t<2?0:1),c=n[l],f,p;if(r&&(c.duration=n[1]),c.parent=a,t){for(f=c,p=a;p&&!("immediateRender"in f);)f=p.vars.defaults||{},p=Ki(p.vars.inherit)&&p.parent;c.immediateRender=Ki(f.immediateRender),t<2?c.runBackwards=1:c.startAt=n[l-1]}return new Qn(n[0],c,n[l+1])},$s=function(t,n){return t||t===0?n(t):n},af=function(t,n,a){return a<t?t:a>n?n:a},bi=function(t,n){return!li(t)||!(n=uU.exec(t))?"":n[1]},yU=function(t,n,a){return $s(a,function(r){return af(t,n,r)})},z0=[].slice,vE=function(t,n){return t&&Er(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&Er(t[0]))&&!t.nodeType&&t!==ur},MU=function(t,n,a){return a===void 0&&(a=[]),t.forEach(function(r){var l;return li(r)&&!n||vE(r,1)?(l=a).push.apply(l,Ga(r)):a.push(r)})||a},Ga=function(t,n,a){return wn&&!n&&wn.selector?wn.selector(t):li(t)&&!a&&(N0||!hu())?z0.call((n||Mg).querySelectorAll(t),0):wi(t)?MU(t,a):vE(t)?z0.call(t,0):t?[t]:[]},F0=function(t){return t=Ga(t)[0]||Xc("Invalid scope")||{},function(n){var a=t.current||t.nativeElement||t;return Ga(n,a.querySelectorAll?a:a===t?Xc("Invalid scope")||Mg.createElement("div"):t)}},xE=function(t){return t.sort(function(){return .5-Math.random()})},SE=function(t){if(Fn(t))return t;var n=Er(t)?t:{each:t},a=Fo(n.ease),r=n.from||0,l=parseFloat(n.base)||0,c={},f=r>0&&r<1,p=isNaN(r)||f,d=n.axis,_=r,v=r;return li(r)?_=v={center:.5,edges:.5,end:1}[r]||0:!f&&p&&(_=r[0],v=r[1]),function(g,x,M){var E=(M||n).length,S=c[E],y,A,D,C,P,N,w,T,O;if(!S){if(O=n.grid==="auto"?0:(n.grid||[1,Ha])[1],!O){for(w=-Ha;w<(w=M[O++].getBoundingClientRect().left)&&O<E;);O<E&&O--}for(S=c[E]=[],y=p?Math.min(O,E)*_-.5:r%O,A=O===Ha?0:p?E*v/O-.5:r/O|0,w=0,T=Ha,N=0;N<E;N++)D=N%O-y,C=A-(N/O|0),S[N]=P=d?Math.abs(d==="y"?C:D):nE(D*D+C*C),P>w&&(w=P),P<T&&(T=P);r==="random"&&xE(S),S.max=w-T,S.min=T,S.v=E=(parseFloat(n.amount)||parseFloat(n.each)*(O>E?E-1:d?d==="y"?E/O:O:Math.max(O,E/O))||0)*(r==="edges"?-1:1),S.b=E<0?l-E:l,S.u=bi(n.amount||n.each)||0,a=a&&E<0?PU(a):a}return E=(S[g]-S.min)/S.max||0,Un(S.b+(a?a(E):E)*S.v)+S.u}},I0=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(a){var r=Un(Math.round(parseFloat(a)/t)*t*n);return(r-r%1)/n+(as(a)?0:bi(a))}},yE=function(t,n){var a=wi(t),r,l;return!a&&Er(t)&&(r=a=t.radius||Ha,t.values?(t=Ga(t.values),(l=!as(t[0]))&&(r*=r)):t=I0(t.increment)),$s(n,a?Fn(t)?function(c){return l=t(c),Math.abs(l-c)<=r?l:c}:function(c){for(var f=parseFloat(l?c.x:c),p=parseFloat(l?c.y:0),d=Ha,_=0,v=t.length,g,x;v--;)l?(g=t[v].x-f,x=t[v].y-p,g=g*g+x*x):g=Math.abs(t[v]-f),g<d&&(d=g,_=v);return _=!r||d<=r?t[_]:c,l||_===c||as(c)?_:_+bi(c)}:I0(t))},ME=function(t,n,a,r){return $s(wi(t)?!n:a===!0?!!(a=0):!r,function(){return wi(t)?t[~~(Math.random()*t.length)]:(a=a||1e-5)&&(r=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((t-a/2+Math.random()*(n-t+a*.99))/a)*a*r)/r})},EU=function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return function(r){return n.reduce(function(l,c){return c(l)},r)}},bU=function(t,n){return function(a){return t(parseFloat(a))+(n||bi(a))}},TU=function(t,n,a){return bE(t,n,0,1,a)},EE=function(t,n,a){return $s(a,function(r){return t[~~n(r)]})},AU=function o(t,n,a){var r=n-t;return wi(t)?EE(t,o(0,t.length),n):$s(a,function(l){return(r+(l-t)%r)%r+t})},RU=function o(t,n,a){var r=n-t,l=r*2;return wi(t)?EE(t,o(0,t.length-1),n):$s(a,function(c){return c=(l+(c-t)%l)%l||0,t+(c>r?l-c:c)})},Yc=function(t){return t.replace(sU,function(n){var a=n.indexOf("[")+1,r=n.substring(a||7,a?n.indexOf("]"):n.length-1).split(oU);return ME(a?r:+r[0],a?0:+r[1],+r[2]||1e-5)})},bE=function(t,n,a,r,l){var c=n-t,f=r-a;return $s(l,function(p){return a+((p-t)/c*f||0)})},CU=function o(t,n,a,r){var l=isNaN(t+n)?0:function(x){return(1-x)*t+x*n};if(!l){var c=li(t),f={},p,d,_,v,g;if(a===!0&&(r=1)&&(a=null),c)t={p:t},n={p:n};else if(wi(t)&&!wi(n)){for(_=[],v=t.length,g=v-2,d=1;d<v;d++)_.push(o(t[d-1],t[d]));v--,l=function(M){M*=v;var E=Math.min(g,~~M);return _[E](M-E)},a=n}else r||(t=uu(wi(t)?[]:{},t));if(!_){for(p in n)Cg.call(f,t,p,"get",n[p]);l=function(M){return Ng(M,f)||(c?t.p:t)}}}return $s(a,l)},kM=function(t,n,a){var r=t.labels,l=Ha,c,f,p;for(c in r)f=r[c]-n,f<0==!!a&&f&&l>(f=Math.abs(f))&&(p=c,l=f);return p},Sa=function(t,n,a){var r=t.vars,l=r[n],c=wn,f=t._ctx,p,d,_;if(l)return p=r[n+"Params"],d=r.callbackScope||t,a&&Ws.length&&md(),f&&(wn=f),_=p?l.apply(d,p):l.call(d),wn=c,_},Sc=function(t){return Zs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!mi),t.progress()<1&&Sa(t,"onInterrupt"),t},jl,TE=[],AE=function(t){if(t)if(t=!t.name&&t.default||t,yg()||t.headless){var n=t.name,a=Fn(t),r=n&&!a&&t.init?function(){this._props=[]}:t,l={init:Wc,render:Ng,add:Cg,kill:WU,modifier:XU,rawVars:0},c={targetTest:0,get:0,getSetter:Ug,aliases:{},register:0};if(hu(),t!==r){if(ma[n])return;ba(r,ba(_d(t,l),c)),uu(r.prototype,uu(l,_d(t,c))),ma[r.prop=n]=r,t.targetTest&&(ed.push(r),bg[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}lE(n,r),t.register&&t.register(ta,r,Ji)}else TE.push(t)},vn=255,yc={aqua:[0,vn,vn],lime:[0,vn,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,vn],navy:[0,0,128],white:[vn,vn,vn],olive:[128,128,0],yellow:[vn,vn,0],orange:[vn,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[vn,0,0],pink:[vn,192,203],cyan:[0,vn,vn],transparent:[vn,vn,vn,0]},R_=function(t,n,a){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(a-n)*t*6:t<.5?a:t*3<2?n+(a-n)*(2/3-t)*6:n)*vn+.5|0},RE=function(t,n,a){var r=t?as(t)?[t>>16,t>>8&vn,t&vn]:0:yc.black,l,c,f,p,d,_,v,g,x,M;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),yc[t])r=yc[t];else if(t.charAt(0)==="#"){if(t.length<6&&(l=t.charAt(1),c=t.charAt(2),f=t.charAt(3),t="#"+l+l+c+c+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&vn,r&vn,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&vn,t&vn]}else if(t.substr(0,3)==="hsl"){if(r=M=t.match(IM),!n)p=+r[0]%360/360,d=+r[1]/100,_=+r[2]/100,c=_<=.5?_*(d+1):_+d-_*d,l=_*2-c,r.length>3&&(r[3]*=1),r[0]=R_(p+1/3,l,c),r[1]=R_(p,l,c),r[2]=R_(p-1/3,l,c);else if(~t.indexOf("="))return r=t.match(aE),a&&r.length<4&&(r[3]=1),r}else r=t.match(IM)||yc.transparent;r=r.map(Number)}return n&&!M&&(l=r[0]/vn,c=r[1]/vn,f=r[2]/vn,v=Math.max(l,c,f),g=Math.min(l,c,f),_=(v+g)/2,v===g?p=d=0:(x=v-g,d=_>.5?x/(2-v-g):x/(v+g),p=v===l?(c-f)/x+(c<f?6:0):v===c?(f-l)/x+2:(l-c)/x+4,p*=60),r[0]=~~(p+.5),r[1]=~~(d*100+.5),r[2]=~~(_*100+.5)),a&&r.length<4&&(r[3]=1),r},CE=function(t){var n=[],a=[],r=-1;return t.split(Ys).forEach(function(l){var c=l.match(ql)||[];n.push.apply(n,c),a.push(r+=c.length+1)}),n.c=a,n},XM=function(t,n,a){var r="",l=(t+r).match(Ys),c=n?"hsla(":"rgba(",f=0,p,d,_,v;if(!l)return t;if(l=l.map(function(g){return(g=RE(g,n,1))&&c+(n?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),a&&(_=CE(t),p=a.c,p.join(r)!==_.c.join(r)))for(d=t.replace(Ys,"1").split(ql),v=d.length-1;f<v;f++)r+=d[f]+(~p.indexOf(f)?l.shift()||c+"0,0,0,0)":(_.length?_:l.length?l:a).shift());if(!d)for(d=t.split(Ys),v=d.length-1;f<v;f++)r+=d[f]+l[f];return r+d[v]},Ys=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in yc)o+="|"+t+"\\b";return new RegExp(o+")","gi")})(),wU=/hsl[a]?\(/,wE=function(t){var n=t.join(" "),a;if(Ys.lastIndex=0,Ys.test(n))return a=wU.test(n),t[1]=XM(t[1],a),t[0]=XM(t[0],a,CE(t[1])),!0},qc,va=(function(){var o=Date.now,t=500,n=33,a=o(),r=a,l=1e3/240,c=l,f=[],p,d,_,v,g,x,M=function E(S){var y=o()-r,A=S===!0,D,C,P,N;if((y>t||y<0)&&(a+=y-n),r+=y,P=r-a,D=P-c,(D>0||A)&&(N=++v.frame,g=P-v.time*1e3,v.time=P=P/1e3,c+=D+(D>=l?4:l-D),C=1),A||(p=d(E)),C)for(x=0;x<f.length;x++)f[x](P,g,N,S)};return v={time:0,frame:0,tick:function(){M(!0)},deltaRatio:function(S){return g/(1e3/(S||60))},wake:function(){sE&&(!N0&&yg()&&(ur=N0=window,Mg=ur.document||{},Ea.gsap=ta,(ur.gsapVersions||(ur.gsapVersions=[])).push(ta.version),oE(pd||ur.GreenSockGlobals||!ur.gsap&&ur||{}),TE.forEach(AE)),_=typeof requestAnimationFrame<"u"&&requestAnimationFrame,p&&v.sleep(),d=_||function(S){return setTimeout(S,c-v.time*1e3+1|0)},qc=1,M(2))},sleep:function(){(_?cancelAnimationFrame:clearTimeout)(p),qc=0,d=Wc},lagSmoothing:function(S,y){t=S||1/0,n=Math.min(y||33,t)},fps:function(S){l=1e3/(S||240),c=v.time*1e3+l},add:function(S,y,A){var D=y?function(C,P,N,w){S(C,P,N,w),v.remove(D)}:S;return v.remove(S),f[A?"unshift":"push"](D),hu(),D},remove:function(S,y){~(y=f.indexOf(S))&&f.splice(y,1)&&x>=y&&x--},_listeners:f},v})(),hu=function(){return!qc&&va.wake()},Ye={},DU=/^[\d.\-M][\d.\-,\s]/,UU=/["']/g,NU=function(t){for(var n={},a=t.substr(1,t.length-3).split(":"),r=a[0],l=1,c=a.length,f,p,d;l<c;l++)p=a[l],f=l!==c-1?p.lastIndexOf(","):p.length,d=p.substr(0,f),n[r]=isNaN(d)?d.replace(UU,"").trim():+d,r=p.substr(f+1).trim();return n},LU=function(t){var n=t.indexOf("(")+1,a=t.indexOf(")"),r=t.indexOf("(",n);return t.substring(n,~r&&r<a?t.indexOf(")",a+1):a)},OU=function(t){var n=(t+"").split("("),a=Ye[n[0]];return a&&n.length>1&&a.config?a.config.apply(null,~t.indexOf("{")?[NU(n[1])]:LU(t).split(",").map(hE)):Ye._CE&&DU.test(t)?Ye._CE("",t):a},PU=function(t){return function(n){return 1-t(1-n)}},Fo=function(t,n){return t&&(Fn(t)?t:Ye[t]||OU(t))||n},jo=function(t,n,a,r){a===void 0&&(a=function(p){return 1-n(1-p)}),r===void 0&&(r=function(p){return p<.5?n(p*2)/2:1-n((1-p)*2)/2});var l={easeIn:n,easeOut:a,easeInOut:r},c;return Qi(t,function(f){Ye[f]=Ea[f]=l,Ye[c=f.toLowerCase()]=a;for(var p in l)Ye[c+(p==="easeIn"?".in":p==="easeOut"?".out":".inOut")]=Ye[f+"."+p]=l[p]}),l},DE=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},C_=function o(t,n,a){var r=n>=1?n:1,l=(a||(t?.3:.45))/(n<1?n:1),c=l/U0*(Math.asin(1/r)||0),f=function(_){return _===1?1:r*Math.pow(2,-10*_)*rU((_-c)*l)+1},p=t==="out"?f:t==="in"?function(d){return 1-f(1-d)}:DE(f);return l=U0/l,p.config=function(d,_){return o(t,d,_)},p},w_=function o(t,n){n===void 0&&(n=1.70158);var a=function(c){return c?--c*c*((n+1)*c+n)+1:0},r=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:DE(a);return r.config=function(l){return o(t,l)},r};Qi("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var n=t<5?t+1:t;jo(o+",Power"+(n-1),t?function(a){return Math.pow(a,n)}:function(a){return a},function(a){return 1-Math.pow(1-a,n)},function(a){return a<.5?Math.pow(a*2,n)/2:1-Math.pow((1-a)*2,n)/2})});Ye.Linear.easeNone=Ye.none=Ye.Linear.easeIn;jo("Elastic",C_("in"),C_("out"),C_());(function(o,t){var n=1/t,a=2*n,r=2.5*n,l=function(f){return f<n?o*f*f:f<a?o*Math.pow(f-1.5/t,2)+.75:f<r?o*(f-=2.25/t)*f+.9375:o*Math.pow(f-2.625/t,2)+.984375};jo("Bounce",function(c){return 1-l(1-c)},l)})(7.5625,2.75);jo("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});jo("Circ",function(o){return-(nE(1-o*o)-1)});jo("Sine",function(o){return o===1?1:-aU(o*nU)+1});jo("Back",w_("in"),w_("out"),w_());Ye.SteppedEase=Ye.steps=Ea.SteppedEase={config:function(t,n){t===void 0&&(t=1);var a=1/t,r=t+(n?0:1),l=n?1:0,c=1-xn;return function(f){return((r*af(0,c,f)|0)+l)*a}}};kc.ease=Ye["quad.out"];Qi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Tg+=o+","+o+"Params,"});var UE=function(t,n){this.id=iU++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:cE,this.set=n?n.getSetter:Ug},jc=(function(){function o(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,fu(this,+n.duration,1,1),this.data=n.data,wn&&(this._ctx=wn,wn.data.push(this)),qc||va.wake()}var t=o.prototype;return t.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},t.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},t.totalDuration=function(a){return arguments.length?(this._dirty=0,fu(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(a,r){if(hu(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(Nd(this,a),!l._dp||l.parent||mE(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&hr(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===xn||!this._initted&&this._dur&&a||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),fE(this,a,r)),this},t.time=function(a,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+GM(this))%(this._dur+this._rDelay)||(a?this._dur:0),r):this._time},t.totalProgress=function(a,r){return arguments.length?this.totalTime(this.totalDuration()*a,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(a,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+GM(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(a,r){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*l,r):this._repeat?cu(this._tTime,l)+1:1},t.timeScale=function(a,r){if(!arguments.length)return this._rts===-xn?0:this._rts;if(this._rts===a)return this;var l=this.parent&&this._ts?gd(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-xn?0:this._rts,this.totalTime(af(-Math.abs(this._delay),this.totalDuration(),l),r!==!1),Ud(this),mU(this)},t.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(hu(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==xn&&(this._tTime-=xn)))),this):this._ps},t.startTime=function(a){if(arguments.length){this._start=Un(a);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&hr(r,this,this._start-this._delay),this}return this._start},t.endTime=function(a){return this._start+(Ki(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(a){var r=this.parent||this._dp;return r?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?gd(r.rawTime(a),this):this._tTime:this._tTime},t.revert=function(a){a===void 0&&(a=fU);var r=mi;return mi=a,Rg(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),mi=r,this},t.globalTime=function(a){for(var r=this,l=arguments.length?a:r.rawTime();r;)l=r._start+l/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(a):l},t.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,VM(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(a){if(arguments.length){var r=this._time;return this._rDelay=a,VM(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},t.seek=function(a,r){return this.totalTime(Pa(this,a),Ki(r))},t.restart=function(a,r){return this.play().totalTime(a?-this._delay:0,Ki(r)),this._dur||(this._zTime=-xn),this},t.play=function(a,r){return a!=null&&this.seek(a,r),this.reversed(!1).paused(!1)},t.reverse=function(a,r){return a!=null&&this.seek(a||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(a,r){return a!=null&&this.seek(a,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-xn:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-xn,this},t.isActive=function(){var a=this.parent||this._dp,r=this._start,l;return!!(!a||this._ts&&this._initted&&a.isActive()&&(l=a.rawTime(!0))>=r&&l<this.endTime(!0)-xn)},t.eventCallback=function(a,r,l){var c=this.vars;return arguments.length>1?(r?(c[a]=r,l&&(c[a+"Params"]=l),a==="onUpdate"&&(this._onUpdate=r)):delete c[a],this):c[a]},t.then=function(a){var r=this,l=r._prom;return new Promise(function(c){var f=Fn(a)?a:dE,p=function(){var _=r.then;r.then=null,l&&l(),Fn(f)&&(f=f(r))&&(f.then||f===r)&&(r.then=_),c(f),r.then=_};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?p():r._prom=p})},t.kill=function(){Sc(this)},o})();ba(jc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-xn,_prom:0,_ps:!1,_rts:1});var ji=(function(o){eE(t,o);function t(a,r){var l;return a===void 0&&(a={}),l=o.call(this,a)||this,l.labels={},l.smoothChildTiming=!!a.smoothChildTiming,l.autoRemoveChildren=!!a.autoRemoveChildren,l._sort=Ki(a.sortChildren),Nn&&hr(a.parent||Nn,Yr(l),r),a.reversed&&l.reverse(),a.paused&&l.paused(!0),a.scrollTrigger&&_E(Yr(l),a.scrollTrigger),l}var n=t.prototype;return n.to=function(r,l,c){return Cc(0,arguments,this),this},n.from=function(r,l,c){return Cc(1,arguments,this),this},n.fromTo=function(r,l,c,f){return Cc(2,arguments,this),this},n.set=function(r,l,c){return l.duration=0,l.parent=this,Rc(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new Qn(r,l,Pa(this,c),1),this},n.call=function(r,l,c){return hr(this,Qn.delayedCall(0,r,l),c)},n.staggerTo=function(r,l,c,f,p,d,_){return c.duration=l,c.stagger=c.stagger||f,c.onComplete=d,c.onCompleteParams=_,c.parent=this,new Qn(r,c,Pa(this,p)),this},n.staggerFrom=function(r,l,c,f,p,d,_){return c.runBackwards=1,Rc(c).immediateRender=Ki(c.immediateRender),this.staggerTo(r,l,c,f,p,d,_)},n.staggerFromTo=function(r,l,c,f,p,d,_,v){return f.startAt=c,Rc(f).immediateRender=Ki(f.immediateRender),this.staggerTo(r,l,f,p,d,_,v)},n.render=function(r,l,c){var f=this._time,p=this._dirty?this.totalDuration():this._tDur,d=this._dur,_=r<=0?0:Un(r),v=this._zTime<0!=r<0&&(this._initted||!d),g,x,M,E,S,y,A,D,C,P,N,w;if(this!==Nn&&_>p&&r>=0&&(_=p),_!==this._tTime||c||v){if(f!==this._time&&d&&(_+=this._time-f,r+=this._time-f),g=_,C=this._start,D=this._ts,y=!D,v&&(d||(f=this._zTime),(r||!l)&&(this._zTime=r)),this._repeat){if(N=this._yoyo,S=d+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(S*100+r,l,c);if(g=Un(_%S),_===p?(E=this._repeat,g=d):(P=Un(_/S),E=~~P,E&&E===P&&(g=d,E--),g>d&&(g=d)),P=cu(this._tTime,S),!f&&this._tTime&&P!==E&&this._tTime-P*S-this._dur<=0&&(P=E),N&&E&1&&(g=d-g,w=1),E!==P&&!this._lock){var T=N&&P&1,O=T===(N&&E&1);if(E<P&&(T=!T),f=T?0:_%d?d:_,this._lock=1,this.render(f||(w?0:Un(E*S)),l,!d)._lock=0,this._tTime=_,!l&&this.parent&&Sa(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,P=E),f&&f!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,p=this._tDur,O&&(this._lock=2,f=T?d:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!y)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(A=xU(this,Un(f),Un(g)),A&&(_-=g-(g=A._start))),this._tTime=_,this._time=g,this._act=!!D,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,f=0),!f&&_&&d&&!l&&!P&&(Sa(this,"onStart"),this._tTime!==_))return this;if(g>=f&&r>=0)for(x=this._first;x;){if(M=x._next,(x._act||g>=x._start)&&x._ts&&A!==x){if(x.parent!==this)return this.render(r,l,c);if(x.render(x._ts>0?(g-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(g-x._start)*x._ts,l,c),g!==this._time||!this._ts&&!y){A=0,M&&(_+=this._zTime=-xn);break}}x=M}else{x=this._last;for(var B=r<0?r:g;x;){if(M=x._prev,(x._act||B<=x._end)&&x._ts&&A!==x){if(x.parent!==this)return this.render(r,l,c);if(x.render(x._ts>0?(B-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(B-x._start)*x._ts,l,c||mi&&Rg(x)),g!==this._time||!this._ts&&!y){A=0,M&&(_+=this._zTime=B?-xn:xn);break}}x=M}}if(A&&!l&&(this.pause(),A.render(g>=f?0:-xn)._zTime=g>=f?1:-1,this._ts))return this._start=C,Ud(this),this.render(r,l,c);this._onUpdate&&!l&&Sa(this,"onUpdate",!0),(_===p&&this._tTime>=this.totalDuration()||!_&&f)&&(C===this._start||Math.abs(D)!==Math.abs(this._ts))&&(this._lock||((r||!d)&&(_===p&&this._ts>0||!_&&this._ts<0)&&Zs(this,1),!l&&!(r<0&&!f)&&(_||f||!p)&&(Sa(this,_===p&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(_<p&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(r,l){var c=this;if(as(l)||(l=Pa(this,l,r)),!(r instanceof jc)){if(wi(r))return r.forEach(function(f){return c.add(f,l)}),this;if(li(r))return this.addLabel(r,l);if(Fn(r))r=Qn.delayedCall(0,r);else return this}return this!==r?hr(this,r,l):this},n.getChildren=function(r,l,c,f){r===void 0&&(r=!0),l===void 0&&(l=!0),c===void 0&&(c=!0),f===void 0&&(f=-Ha);for(var p=[],d=this._first;d;)d._start>=f&&(d instanceof Qn?l&&p.push(d):(c&&p.push(d),r&&p.push.apply(p,d.getChildren(!0,l,c)))),d=d._next;return p},n.getById=function(r){for(var l=this.getChildren(1,1,1),c=l.length;c--;)if(l[c].vars.id===r)return l[c]},n.remove=function(r){return li(r)?this.removeLabel(r):Fn(r)?this.killTweensOf(r):(r.parent===this&&Dd(this,r),r===this._recent&&(this._recent=this._last),zo(this))},n.totalTime=function(r,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Un(va.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),o.prototype.totalTime.call(this,r,l),this._forcing=0,this):this._tTime},n.addLabel=function(r,l){return this.labels[r]=Pa(this,l),this},n.removeLabel=function(r){return delete this.labels[r],this},n.addPause=function(r,l,c){var f=Qn.delayedCall(0,l||Wc,c);return f.data="isPause",this._hasPause=1,hr(this,f,Pa(this,r))},n.removePause=function(r){var l=this._first;for(r=Pa(this,r);l;)l._start===r&&l.data==="isPause"&&Zs(l),l=l._next},n.killTweensOf=function(r,l,c){for(var f=this.getTweensOf(r,c),p=f.length;p--;)Bs!==f[p]&&f[p].kill(r,l);return this},n.getTweensOf=function(r,l){for(var c=[],f=Ga(r),p=this._first,d=as(l),_;p;)p instanceof Qn?hU(p._targets,f)&&(d?(!Bs||p._initted&&p._ts)&&p.globalTime(0)<=l&&p.globalTime(p.totalDuration())>l:!l||p.isActive())&&c.push(p):(_=p.getTweensOf(f,l)).length&&c.push.apply(c,_),p=p._next;return c},n.tweenTo=function(r,l){l=l||{};var c=this,f=Pa(c,r),p=l,d=p.startAt,_=p.onStart,v=p.onStartParams,g=p.immediateRender,x,M=Qn.to(c,ba({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale())||xn,onStart:function(){if(c.pause(),!x){var S=l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale());M._dur!==S&&fu(M,S,0,1).render(M._time,!0,!0),x=1}_&&_.apply(M,v||[])}},l));return g?M.render(0):M},n.tweenFromTo=function(r,l,c){return this.tweenTo(l,ba({startAt:{time:Pa(this,r)}},c))},n.recent=function(){return this._recent},n.nextLabel=function(r){return r===void 0&&(r=this._time),kM(this,Pa(this,r))},n.previousLabel=function(r){return r===void 0&&(r=this._time),kM(this,Pa(this,r),1)},n.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+xn)},n.shiftChildren=function(r,l,c){c===void 0&&(c=0);var f=this._first,p=this.labels,d;for(r=Un(r);f;)f._start>=c&&(f._start+=r,f._end+=r),f=f._next;if(l)for(d in p)p[d]>=c&&(p[d]+=r);return zo(this)},n.invalidate=function(r){var l=this._first;for(this._lock=0;l;)l.invalidate(r),l=l._next;return o.prototype.invalidate.call(this,r)},n.clear=function(r){r===void 0&&(r=!0);for(var l=this._first,c;l;)c=l._next,this.remove(l),l=c;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),zo(this)},n.totalDuration=function(r){var l=0,c=this,f=c._last,p=Ha,d,_,v;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-r:r));if(c._dirty){for(v=c.parent;f;)d=f._prev,f._dirty&&f.totalDuration(),_=f._start,_>p&&c._sort&&f._ts&&!c._lock?(c._lock=1,hr(c,f,_-f._delay,1)._lock=0):p=_,_<0&&f._ts&&(l-=_,(!v&&!c._dp||v&&v.smoothChildTiming)&&(c._start+=Un(_/c._ts),c._time-=_,c._tTime-=_),c.shiftChildren(-_,!1,-1/0),p=0),f._end>l&&f._ts&&(l=f._end),f=d;fu(c,c===Nn&&c._time>l?c._time:l,1,1),c._dirty=0}return c._tDur},t.updateRoot=function(r){if(Nn._ts&&(fE(Nn,gd(r,Nn)),uE=va.frame),va.frame>=BM){BM+=Ma.autoSleep||120;var l=Nn._first;if((!l||!l._ts)&&Ma.autoSleep&&va._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||va.sleep()}}},t})(jc);ba(ji.prototype,{_lock:0,_hasPause:0,_forcing:0});var zU=function(t,n,a,r,l,c,f){var p=new Ji(this._pt,t,n,0,1,FE,null,l),d=0,_=0,v,g,x,M,E,S,y,A;for(p.b=a,p.e=r,a+="",r+="",(y=~r.indexOf("random("))&&(r=Yc(r)),c&&(A=[a,r],c(A,t,n),a=A[0],r=A[1]),g=a.match(T_)||[];v=T_.exec(r);)M=v[0],E=r.substring(d,v.index),x?x=(x+1)%5:E.substr(-5)==="rgba("&&(x=1),M!==g[_++]&&(S=parseFloat(g[_-1])||0,p._pt={_next:p._pt,p:E||_===1?E:",",s:S,c:M.charAt(1)==="="?Jl(S,M)-S:parseFloat(M)-S,m:x&&x<4?Math.round:0},d=T_.lastIndex);return p.c=d<r.length?r.substring(d,r.length):"",p.fp=f,(rE.test(r)||y)&&(p.e=0),this._pt=p,p},Cg=function(t,n,a,r,l,c,f,p,d,_){Fn(r)&&(r=r(l||0,t,c));var v=t[n],g=a!=="get"?a:Fn(v)?d?t[n.indexOf("set")||!Fn(t["get"+n.substr(3)])?n:"get"+n.substr(3)](d):t[n]():v,x=Fn(v)?d?GU:PE:Dg,M;if(li(r)&&(~r.indexOf("random(")&&(r=Yc(r)),r.charAt(1)==="="&&(M=Jl(g,r)+(bi(g)||0),(M||M===0)&&(r=M))),!_||g!==r||B0)return!isNaN(g*r)&&r!==""?(M=new Ji(this._pt,t,n,+g||0,r-(g||0),typeof v=="boolean"?kU:zE,0,x),d&&(M.fp=d),f&&M.modifier(f,this,t),this._pt=M):(!v&&!(n in t)&&Eg(n,r),zU.call(this,t,n,g,r,x,p||Ma.stringFilter,d))},FU=function(t,n,a,r,l){if(Fn(t)&&(t=wc(t,l,n,a,r)),!Er(t)||t.style&&t.nodeType||wi(t)||iE(t))return li(t)?wc(t,l,n,a,r):t;var c={},f;for(f in t)c[f]=wc(t[f],l,n,a,r);return c},NE=function(t,n,a,r,l,c){var f,p,d,_;if(ma[t]&&(f=new ma[t]).init(l,f.rawVars?n[t]:FU(n[t],r,l,c,a),a,r,c)!==!1&&(a._pt=p=new Ji(a._pt,l,t,0,1,f.render,f,0,f.priority),a!==jl))for(d=a._ptLookup[a._targets.indexOf(l)],_=f._props.length;_--;)d[f._props[_]]=p;return f},Bs,B0,wg=function o(t,n,a){var r=t.vars,l=r.ease,c=r.startAt,f=r.immediateRender,p=r.lazy,d=r.onUpdate,_=r.runBackwards,v=r.yoyoEase,g=r.keyframes,x=r.autoRevert,M=t._dur,E=t._startAt,S=t._targets,y=t.parent,A=y&&y.data==="nested"?y.vars.targets:S,D=t._overwrite==="auto"&&!xg,C=t.timeline,P=r.easeReverse||v,N,w,T,O,B,G,k,et,tt,X,F,H,J;if(C&&(!g||!l)&&(l="none"),t._ease=Fo(l,kc.ease),t._rEase=P&&(Fo(P)||t._ease),t._from=!C&&!!r.runBackwards,t._from&&(t.ratio=1),!C||g&&!r.stagger){if(et=S[0]?Po(S[0]).harness:0,H=et&&r[et.prop],N=_d(r,bg),E&&(E._zTime<0&&E.progress(1),n<0&&_&&f&&!x?E.render(-1,!0):E.revert(_&&M?td:cU),E._lazy=0),c){if(Zs(t._startAt=Qn.set(S,ba({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!E&&Ki(p),startAt:null,delay:0,onUpdate:d&&function(){return Sa(t,"onUpdate")},stagger:0},c))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(mi||!f&&!x)&&t._startAt.revert(td),f&&M&&n<=0&&a<=0){n&&(t._zTime=n);return}}else if(_&&M&&!E){if(n&&(f=!1),T=ba({overwrite:!1,data:"isFromStart",lazy:f&&!E&&Ki(p),immediateRender:f,stagger:0,parent:y},N),H&&(T[et.prop]=H),Zs(t._startAt=Qn.set(S,T)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(mi?t._startAt.revert(td):t._startAt.render(-1,!0)),t._zTime=n,!f)o(t._startAt,xn,xn);else if(!n)return}for(t._pt=t._ptCache=0,p=M&&Ki(p)||p&&!M,w=0;w<S.length;w++){if(B=S[w],k=B._gsap||Ag(S)[w]._gsap,t._ptLookup[w]=X={},L0[k.id]&&Ws.length&&md(),F=A===S?w:A.indexOf(B),et&&(tt=new et).init(B,H||N,t,F,A)!==!1&&(t._pt=O=new Ji(t._pt,B,tt.name,0,1,tt.render,tt,0,tt.priority),tt._props.forEach(function(ft){X[ft]=O}),tt.priority&&(G=1)),!et||H)for(T in N)ma[T]&&(tt=NE(T,N,t,F,B,A))?tt.priority&&(G=1):X[T]=O=Cg.call(t,B,T,"get",N[T],F,A,0,r.stringFilter);t._op&&t._op[w]&&t.kill(B,t._op[w]),D&&t._pt&&(Bs=t,Nn.killTweensOf(B,X,t.globalTime(n)),J=!t.parent,Bs=0),t._pt&&p&&(L0[k.id]=1)}G&&IE(t),t._onInit&&t._onInit(t)}t._onUpdate=d,t._initted=(!t._op||t._pt)&&!J,g&&n<=0&&C.render(Ha,!0,!0)},IU=function(t,n,a,r,l,c,f,p){var d=(t._pt&&t._ptCache||(t._ptCache={}))[n],_,v,g,x;if(!d)for(d=t._ptCache[n]=[],g=t._ptLookup,x=t._targets.length;x--;){if(_=g[x][n],_&&_.d&&_.d._pt)for(_=_.d._pt;_&&_.p!==n&&_.fp!==n;)_=_._next;if(!_)return B0=1,t.vars[n]="+=0",wg(t,f),B0=0,p?Xc(n+" not eligible for reset. Try splitting into individual properties"):1;d.push(_)}for(x=d.length;x--;)v=d[x],_=v._pt||v,_.s=(r||r===0)&&!l?r:_.s+(r||0)+c*_.c,_.c=a-_.s,v.e&&(v.e=Hn(a)+bi(v.e)),v.b&&(v.b=_.s+bi(v.b))},BU=function(t,n){var a=t[0]?Po(t[0]).harness:0,r=a&&a.aliases,l,c,f,p;if(!r)return n;l=uu({},n);for(c in r)if(c in l)for(p=r[c].split(","),f=p.length;f--;)l[p[f]]=l[c];return l},HU=function(t,n,a,r){var l=n.ease||r||"power1.inOut",c,f;if(wi(n))f=a[t]||(a[t]=[]),n.forEach(function(p,d){return f.push({t:d/(n.length-1)*100,v:p,e:l})});else for(c in n)f=a[c]||(a[c]=[]),c==="ease"||f.push({t:parseFloat(t),v:n[c],e:l})},wc=function(t,n,a,r,l){return Fn(t)?t.call(n,a,r,l):li(t)&&~t.indexOf("random(")?Yc(t):t},LE=Tg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",OE={};Qi(LE+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return OE[o]=1});var Qn=(function(o){eE(t,o);function t(a,r,l,c){var f;typeof r=="number"&&(l.duration=r,r=l,l=null),f=o.call(this,c?r:Rc(r))||this;var p=f.vars,d=p.duration,_=p.delay,v=p.immediateRender,g=p.stagger,x=p.overwrite,M=p.keyframes,E=p.defaults,S=p.scrollTrigger,y=r.parent||Nn,A=(wi(a)||iE(a)?as(a[0]):"length"in r)?[a]:Ga(a),D,C,P,N,w,T,O,B;if(f._targets=A.length?Ag(A):Xc("GSAP target "+a+" not found. https://gsap.com",!Ma.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=x,M||g||Ph(d)||Ph(_)){r=f.vars;var G=r.easeReverse||r.yoyoEase;if(D=f.timeline=new ji({data:"nested",defaults:E||{},targets:y&&y.data==="nested"?y.vars.targets:A}),D.kill(),D.parent=D._dp=Yr(f),D._start=0,g||Ph(d)||Ph(_)){if(N=A.length,O=g&&SE(g),Er(g))for(w in g)~LE.indexOf(w)&&(B||(B={}),B[w]=g[w]);for(C=0;C<N;C++)P=_d(r,OE),P.stagger=0,G&&(P.easeReverse=G),B&&uu(P,B),T=A[C],P.duration=+wc(d,Yr(f),C,T,A),P.delay=(+wc(_,Yr(f),C,T,A)||0)-f._delay,!g&&N===1&&P.delay&&(f._delay=_=P.delay,f._start+=_,P.delay=0),D.to(T,P,O?O(C,T,A):0),D._ease=Ye.none;D.duration()?d=_=0:f.timeline=0}else if(M){Rc(ba(D.vars.defaults,{ease:"none"})),D._ease=Fo(M.ease||r.ease||"none");var k=0,et,tt,X;if(wi(M))M.forEach(function(F){return D.to(A,F,">")}),D.duration();else{P={};for(w in M)w==="ease"||w==="easeEach"||HU(w,M[w],P,M.easeEach);for(w in P)for(et=P[w].sort(function(F,H){return F.t-H.t}),k=0,C=0;C<et.length;C++)tt=et[C],X={ease:tt.e,duration:(tt.t-(C?et[C-1].t:0))/100*d},X[w]=tt.v,D.to(A,X,k),k+=X.duration;D.duration()<d&&D.to({},{duration:d-D.duration()})}}d||f.duration(d=D.duration())}else f.timeline=0;return x===!0&&!xg&&(Bs=Yr(f),Nn.killTweensOf(A),Bs=0),hr(y,Yr(f),l),r.reversed&&f.reverse(),r.paused&&f.paused(!0),(v||!d&&!M&&f._start===Un(y._time)&&Ki(v)&&_U(Yr(f))&&y.data!=="nested")&&(f._tTime=-xn,f.render(Math.max(0,-_)||0)),S&&_E(Yr(f),S),f}var n=t.prototype;return n.render=function(r,l,c){var f=this._time,p=this._tDur,d=this._dur,_=r<0,v=r>p-xn&&!_?p:r<xn?0:r,g,x,M,E,S,y,A,D;if(!d)vU(this,r,l,c);else if(v!==this._tTime||!r||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==_||this._lazy){if(g=v,D=this.timeline,this._repeat){if(E=d+this._rDelay,this._repeat<-1&&_)return this.totalTime(E*100+r,l,c);if(g=Un(v%E),v===p?(M=this._repeat,g=d):(S=Un(v/E),M=~~S,M&&M===S?(g=d,M--):g>d&&(g=d)),y=this._yoyo&&M&1,y&&(g=d-g),S=cu(this._tTime,E),g===f&&!c&&this._initted&&M===S)return this._tTime=v,this;M!==S&&this.vars.repeatRefresh&&!y&&!this._lock&&g!==E&&this._initted&&(this._lock=c=1,this.render(Un(E*M),!0).invalidate()._lock=0)}if(!this._initted){if(gE(this,_?r:g,c,l,v))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&M!==S))return this;if(d!==this._dur)return this.render(r,l,c)}if(this._rEase){var C=g<f;if(C!==this._inv){var P=C?f:d-f;this._inv=C,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=f,this._invRecip=P?(C?-1:1)/P:0,this._invScale=C?-this.ratio:1-this.ratio,this._invEase=C?this._rEase:this._ease}this.ratio=A=this._invRatio+this._invScale*this._invEase((g-this._invTime)*this._invRecip)}else this.ratio=A=this._ease(g/d);if(this._from&&(this.ratio=A=1-A),this._tTime=v,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),!f&&v&&!l&&!S&&(Sa(this,"onStart"),this._tTime!==v))return this;for(x=this._pt;x;)x.r(A,x.d),x=x._next;D&&D.render(r<0?r:D._dur*D._ease(g/this._dur),l,c)||this._startAt&&(this._zTime=r),this._onUpdate&&!l&&(_&&O0(this,r,l,c),Sa(this,"onUpdate")),this._repeat&&M!==S&&this.vars.onRepeat&&!l&&this.parent&&Sa(this,"onRepeat"),(v===this._tDur||!v)&&this._tTime===v&&(_&&!this._onUpdate&&O0(this,r,!0,!0),(r||!d)&&(v===this._tDur&&this._ts>0||!v&&this._ts<0)&&Zs(this,1),!l&&!(_&&!f)&&(v||f||y)&&(Sa(this,v===p?"onComplete":"onReverseComplete",!0),this._prom&&!(v<p&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),o.prototype.invalidate.call(this,r)},n.resetTo=function(r,l,c,f,p){qc||va.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),_;return this._initted||wg(this,d),_=this._ease(d/this._dur),IU(this,r,l,c,f,_,d,p)?this.resetTo(r,l,c,f,1):(Nd(this,0),this.parent||pE(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(r,l){if(l===void 0&&(l="all"),!r&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?Sc(this):this.scrollTrigger&&this.scrollTrigger.kill(!!mi),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(r,l,Bs&&Bs.vars.overwrite!==!0)._first||Sc(this),this.parent&&c!==this.timeline.totalDuration()&&fu(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,p=r?Ga(r):f,d=this._ptLookup,_=this._pt,v,g,x,M,E,S,y;if((!l||l==="all")&&pU(f,p))return l==="all"&&(this._pt=0),Sc(this);for(v=this._op=this._op||[],l!=="all"&&(li(l)&&(E={},Qi(l,function(A){return E[A]=1}),l=E),l=BU(f,l)),y=f.length;y--;)if(~p.indexOf(f[y])){g=d[y],l==="all"?(v[y]=l,M=g,x={}):(x=v[y]=v[y]||{},M=l);for(E in M)S=g&&g[E],S&&((!("kill"in S.d)||S.d.kill(E)===!0)&&Dd(this,S,"_pt"),delete g[E]),x!=="all"&&(x[E]=1)}return this._initted&&!this._pt&&_&&Sc(this),this},t.to=function(r,l){return new t(r,l,arguments[2])},t.from=function(r,l){return Cc(1,arguments)},t.delayedCall=function(r,l,c,f){return new t(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:l,onReverseComplete:l,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},t.fromTo=function(r,l,c){return Cc(2,arguments)},t.set=function(r,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new t(r,l)},t.killTweensOf=function(r,l,c){return Nn.killTweensOf(r,l,c)},t})(jc);ba(Qn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Qi("staggerTo,staggerFrom,staggerFromTo",function(o){Qn[o]=function(){var t=new ji,n=z0.call(arguments,0);return n.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,n)}});var Dg=function(t,n,a){return t[n]=a},PE=function(t,n,a){return t[n](a)},GU=function(t,n,a,r){return t[n](r.fp,a)},VU=function(t,n,a){return t.setAttribute(n,a)},Ug=function(t,n){return Fn(t[n])?PE:Sg(t[n])&&t.setAttribute?VU:Dg},zE=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},kU=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},FE=function(t,n){var a=n._pt,r="";if(!t&&n.b)r=n.b;else if(t===1&&n.e)r=n.e;else{for(;a;)r=a.p+(a.m?a.m(a.s+a.c*t):Math.round((a.s+a.c*t)*1e4)/1e4)+r,a=a._next;r+=n.c}n.set(n.t,n.p,r,n)},Ng=function(t,n){for(var a=n._pt;a;)a.r(t,a.d),a=a._next},XU=function(t,n,a,r){for(var l=this._pt,c;l;)c=l._next,l.p===r&&l.modifier(t,n,a),l=c},WU=function(t){for(var n=this._pt,a,r;n;)r=n._next,n.p===t&&!n.op||n.op===t?Dd(this,n,"_pt"):n.dep||(a=1),n=r;return!a},YU=function(t,n,a,r){r.mSet(t,n,r.m.call(r.tween,a,r.mt),r)},IE=function(t){for(var n=t._pt,a,r,l,c;n;){for(a=n._next,r=l;r&&r.pr>n.pr;)r=r._next;(n._prev=r?r._prev:c)?n._prev._next=n:l=n,(n._next=r)?r._prev=n:c=n,n=a}t._pt=l},Ji=(function(){function o(n,a,r,l,c,f,p,d,_){this.t=a,this.s=l,this.c=c,this.p=r,this.r=f||zE,this.d=p||this,this.set=d||Dg,this.pr=_||0,this._next=n,n&&(n._prev=this)}var t=o.prototype;return t.modifier=function(a,r,l){this.mSet=this.mSet||this.set,this.set=YU,this.m=a,this.mt=l,this.tween=r},o})();Qi(Tg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(o){return bg[o]=1});Ea.TweenMax=Ea.TweenLite=Qn;Ea.TimelineLite=Ea.TimelineMax=ji;Nn=new ji({sortChildren:!1,defaults:kc,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ma.stringFilter=wE;var Io=[],nd={},qU=[],WM=0,jU=0,D_=function(t){return(nd[t]||qU).map(function(n){return n()})},H0=function(){var t=Date.now(),n=[];t-WM>2&&(D_("matchMediaInit"),Io.forEach(function(a){var r=a.queries,l=a.conditions,c,f,p,d;for(f in r)c=ur.matchMedia(r[f]).matches,c&&(p=1),c!==l[f]&&(l[f]=c,d=1);d&&(a.revert(),p&&n.push(a))}),D_("matchMediaRevert"),n.forEach(function(a){return a.onMatch(a,function(r){return a.add(null,r)})}),WM=t,D_("matchMedia"))},BE=(function(){function o(n,a){this.selector=a&&F0(a),this.data=[],this._r=[],this.isReverted=!1,this.id=jU++,n&&this.add(n)}var t=o.prototype;return t.add=function(a,r,l){Fn(a)&&(l=r,r=a,a=Fn);var c=this,f=function(){var d=wn,_=c.selector,v;return d&&d!==c&&d.data.push(c),l&&(c.selector=F0(l)),wn=c,v=r.apply(c,arguments),Fn(v)&&c._r.push(v),wn=d,c.selector=_,c.isReverted=!1,v};return c.last=f,a===Fn?f(c,function(p){return c.add(null,p)}):a?c[a]=f:f},t.ignore=function(a){var r=wn;wn=null,a(this),wn=r},t.getTweens=function(){var a=[];return this.data.forEach(function(r){return r instanceof o?a.push.apply(a,r.getTweens()):r instanceof Qn&&!(r.parent&&r.parent.data==="nested")&&a.push(r)}),a},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(a,r){var l=this;if(a?(function(){for(var f=l.getTweens(),p=l.data.length,d;p--;)d=l.data[p],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(_){return f.splice(f.indexOf(_),1)}));for(f.map(function(_){return{g:_._dur||_._delay||_._sat&&!_._sat.vars.immediateRender?_.globalTime(0):-1/0,t:_}}).sort(function(_,v){return v.g-_.g||-1/0}).forEach(function(_){return _.t.revert(a)}),p=l.data.length;p--;)d=l.data[p],d instanceof ji?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof Qn)&&d.revert&&d.revert(a);l._r.forEach(function(_){return _(a,l)}),l.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),r)for(var c=Io.length;c--;)Io[c].id===this.id&&Io.splice(c,1)},t.revert=function(a){this.kill(a||{})},o})(),ZU=(function(){function o(n){this.contexts=[],this.scope=n,wn&&wn.data.push(this)}var t=o.prototype;return t.add=function(a,r,l){Er(a)||(a={matches:a});var c=new BE(0,l||this.scope),f=c.conditions={},p,d,_;wn&&!c.selector&&(c.selector=wn.selector),this.contexts.push(c),r=c.add("onMatch",r),c.queries=a;for(d in a)d==="all"?_=1:(p=ur.matchMedia(a[d]),p&&(Io.indexOf(c)<0&&Io.push(c),(f[d]=p.matches)&&(_=1),p.addListener?p.addListener(H0):p.addEventListener("change",H0)));return _&&r(c,function(v){return c.add(null,v)}),this},t.revert=function(a){this.kill(a||{})},t.kill=function(a){this.contexts.forEach(function(r){return r.kill(a,!0)})},o})(),vd={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];n.forEach(function(r){return AE(r)})},timeline:function(t){return new ji(t)},getTweensOf:function(t,n){return Nn.getTweensOf(t,n)},getProperty:function(t,n,a,r){li(t)&&(t=Ga(t)[0]);var l=Po(t||{}).get,c=a?dE:hE;return a==="native"&&(a=""),t&&(n?c((ma[n]&&ma[n].get||l)(t,n,a,r)):function(f,p,d){return c((ma[f]&&ma[f].get||l)(t,f,p,d))})},quickSetter:function(t,n,a){if(t=Ga(t),t.length>1){var r=t.map(function(_){return ta.quickSetter(_,n,a)}),l=r.length;return function(_){for(var v=l;v--;)r[v](_)}}t=t[0]||{};var c=ma[n],f=Po(t),p=f.harness&&(f.harness.aliases||{})[n]||n,d=c?function(_){var v=new c;jl._pt=0,v.init(t,a?_+a:_,jl,0,[t]),v.render(1,v),jl._pt&&Ng(1,jl)}:f.set(t,p);return c?d:function(_){return d(t,p,a?_+a:_,f,1)}},quickTo:function(t,n,a){var r,l=ta.to(t,ba((r={},r[n]="+=0.1",r.paused=!0,r.stagger=0,r),a||{})),c=function(p,d,_){return l.resetTo(n,p,d,_)};return c.tween=l,c},isTweening:function(t){return Nn.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Fo(t.ease,kc.ease)),HM(kc,t||{})},config:function(t){return HM(Ma,t||{})},registerEffect:function(t){var n=t.name,a=t.effect,r=t.plugins,l=t.defaults,c=t.extendTimeline;(r||"").split(",").forEach(function(f){return f&&!ma[f]&&!Ea[f]&&Xc(n+" effect requires "+f+" plugin.")}),A_[n]=function(f,p,d){return a(Ga(f),ba(p||{},l),d)},c&&(ji.prototype[n]=function(f,p,d){return this.add(A_[n](f,Er(p)?p:(d=p)&&{},this),d)})},registerEase:function(t,n){Ye[t]=Fo(n)},parseEase:function(t,n){return arguments.length?Fo(t,n):Ye},getById:function(t){return Nn.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var a=new ji(t),r,l;for(a.smoothChildTiming=Ki(t.smoothChildTiming),Nn.remove(a),a._dp=0,a._time=a._tTime=Nn._time,r=Nn._first;r;)l=r._next,(n||!(!r._dur&&r instanceof Qn&&r.vars.onComplete===r._targets[0]))&&hr(a,r,r._start-r._delay),r=l;return hr(Nn,a,0),a},context:function(t,n){return t?new BE(t,n):wn},matchMedia:function(t){return new ZU(t)},matchMediaRefresh:function(){return Io.forEach(function(t){var n=t.conditions,a,r;for(r in n)n[r]&&(n[r]=!1,a=1);a&&t.revert()})||H0()},addEventListener:function(t,n){var a=nd[t]||(nd[t]=[]);~a.indexOf(n)||a.push(n)},removeEventListener:function(t,n){var a=nd[t],r=a&&a.indexOf(n);r>=0&&a.splice(r,1)},utils:{wrap:AU,wrapYoyo:RU,distribute:SE,random:ME,snap:yE,normalize:TU,getUnit:bi,clamp:yU,splitColor:RE,toArray:Ga,selector:F0,mapRange:bE,pipe:EU,unitize:bU,interpolate:CU,shuffle:xE},install:oE,effects:A_,ticker:va,updateRoot:ji.updateRoot,plugins:ma,globalTimeline:Nn,core:{PropTween:Ji,globals:lE,Tween:Qn,Timeline:ji,Animation:jc,getCache:Po,_removeLinkedListItem:Dd,reverting:function(){return mi},context:function(t){return t&&wn&&(wn.data.push(t),t._ctx=wn),wn},suppressOverwrites:function(t){return xg=t}}};Qi("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return vd[o]=Qn[o]});va.add(ji.updateRoot);jl=vd.to({},{duration:0});var KU=function(t,n){for(var a=t._pt;a&&a.p!==n&&a.op!==n&&a.fp!==n;)a=a._next;return a},QU=function(t,n){var a=t._targets,r,l,c;for(r in n)for(l=a.length;l--;)c=t._ptLookup[l][r],c&&(c=c.d)&&(c._pt&&(c=KU(c,r)),c&&c.modifier&&c.modifier(n[r],t,a[l],r))},U_=function(t,n){return{name:t,headless:1,rawVars:1,init:function(r,l,c){c._onInit=function(f){var p,d;if(li(l)&&(p={},Qi(l,function(_){return p[_]=1}),l=p),n){p={};for(d in l)p[d]=n(l[d]);l=p}QU(f,l)}}}},ta=vd.registerPlugin({name:"attr",init:function(t,n,a,r,l){var c,f,p;this.tween=a;for(c in n)p=t.getAttribute(c)||"",f=this.add(t,"setAttribute",(p||0)+"",n[c],r,l,0,0,c),f.op=c,f.b=p,this._props.push(c)},render:function(t,n){for(var a=n._pt;a;)mi?a.set(a.t,a.p,a.b,a):a.r(t,a.d),a=a._next}},{name:"endArray",headless:1,init:function(t,n){for(var a=n.length;a--;)this.add(t,a,t[a]||0,n[a],0,0,0,0,0,1)}},U_("roundProps",I0),U_("modifiers"),U_("snap",yE))||vd;Qn.version=ji.version=ta.version="3.15.0";sE=1;yg()&&hu();Ye.Power0;Ye.Power1;Ye.Power2;Ye.Power3;Ye.Power4;Ye.Linear;Ye.Quad;Ye.Cubic;Ye.Quart;Ye.Quint;Ye.Strong;Ye.Elastic;Ye.Back;Ye.SteppedEase;Ye.Bounce;Ye.Sine;Ye.Expo;Ye.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var YM,Hs,$l,Lg,Lo,qM,Og,JU=function(){return typeof window<"u"},rs={},To=180/Math.PI,tu=Math.PI/180,Gl=Math.atan2,jM=1e8,Pg=/([A-Z])/g,$U=/(left|right|width|margin|padding|x)/i,tN=/[\s,\(]\S/,mr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},G0=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},eN=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},nN=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},iN=function(t,n){return n.set(n.t,n.p,t===1?n.e:t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},aN=function(t,n){var a=n.s+n.c*t;n.set(n.t,n.p,~~(a+(a<0?-.5:.5))+n.u,n)},HE=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},GE=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},rN=function(t,n,a){return t.style[n]=a},sN=function(t,n,a){return t.style.setProperty(n,a)},oN=function(t,n,a){return t._gsap[n]=a},lN=function(t,n,a){return t._gsap.scaleX=t._gsap.scaleY=a},uN=function(t,n,a,r,l){var c=t._gsap;c.scaleX=c.scaleY=a,c.renderTransform(l,c)},cN=function(t,n,a,r,l){var c=t._gsap;c[n]=a,c.renderTransform(l,c)},Ln="transform",$i=Ln+"Origin",fN=function o(t,n){var a=this,r=this.target,l=r.style,c=r._gsap;if(t in rs&&l){if(this.tfm=this.tfm||{},t!=="transform")t=mr[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return a.tfm[f]=qr(r,f)}):this.tfm[t]=c.x?c[t]:qr(r,t),t===$i&&(this.tfm.zOrigin=c.zOrigin);else return mr.transform.split(",").forEach(function(f){return o.call(a,f,n)});if(this.props.indexOf(Ln)>=0)return;c.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push($i,n,"")),t=Ln}(l||n)&&this.props.push(t,n,l[t])},VE=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},hN=function(){var t=this.props,n=this.target,a=n.style,r=n._gsap,l,c;for(l=0;l<t.length;l+=3)t[l+1]?t[l+1]===2?n[t[l]](t[l+2]):n[t[l]]=t[l+2]:t[l+2]?a[t[l]]=t[l+2]:a.removeProperty(t[l].substr(0,2)==="--"?t[l]:t[l].replace(Pg,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)r[c]=this.tfm[c];r.svg&&(r.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),l=Og(),(!l||!l.isStart)&&!a[Ln]&&(VE(a),r.zOrigin&&a[$i]&&(a[$i]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},kE=function(t,n){var a={target:t,props:[],revert:hN,save:fN};return t._gsap||ta.core.getCache(t),n&&t.style&&t.nodeType&&n.split(",").forEach(function(r){return a.save(r)}),a},XE,V0=function(t,n){var a=Hs.createElementNS?Hs.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Hs.createElement(t);return a&&a.style?a:Hs.createElement(t)},ya=function o(t,n,a){var r=getComputedStyle(t);return r[n]||r.getPropertyValue(n.replace(Pg,"-$1").toLowerCase())||r.getPropertyValue(n)||!a&&o(t,du(n)||n,1)||""},ZM="O,Moz,ms,Ms,Webkit".split(","),du=function(t,n,a){var r=n||Lo,l=r.style,c=5;if(t in l&&!a)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);c--&&!(ZM[c]+t in l););return c<0?null:(c===3?"ms":c>=0?ZM[c]:"")+t},k0=function(){JU()&&window.document&&(YM=window,Hs=YM.document,$l=Hs.documentElement,Lo=V0("div")||{style:{}},V0("div"),Ln=du(Ln),$i=Ln+"Origin",Lo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",XE=!!du("perspective"),Og=ta.core.reverting,Lg=1)},KM=function(t){var n=t.ownerSVGElement,a=V0("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),l;r.style.display="block",a.appendChild(r),$l.appendChild(a);try{l=r.getBBox()}catch{}return a.removeChild(r),$l.removeChild(a),l},QM=function(t,n){for(var a=n.length;a--;)if(t.hasAttribute(n[a]))return t.getAttribute(n[a])},WE=function(t){var n,a;try{n=t.getBBox()}catch{n=KM(t),a=1}return n&&(n.width||n.height)||a||(n=KM(t)),n&&!n.width&&!n.x&&!n.y?{x:+QM(t,["x","cx","x1"])||0,y:+QM(t,["y","cy","y1"])||0,width:0,height:0}:n},YE=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&WE(t))},Ks=function(t,n){if(n){var a=t.style,r;n in rs&&n!==$i&&(n=Ln),a.removeProperty?(r=n.substr(0,2),(r==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),a.removeProperty(r==="--"?n:n.replace(Pg,"-$1").toLowerCase())):a.removeAttribute(n)}},Gs=function(t,n,a,r,l,c){var f=new Ji(t._pt,n,a,0,1,c?GE:HE);return t._pt=f,f.b=r,f.e=l,t._props.push(a),f},JM={deg:1,rad:1,turn:1},dN={grid:1,flex:1},Qs=function o(t,n,a,r){var l=parseFloat(a)||0,c=(a+"").trim().substr((l+"").length)||"px",f=Lo.style,p=$U.test(n),d=t.tagName.toLowerCase()==="svg",_=(d?"client":"offset")+(p?"Width":"Height"),v=100,g=r==="px",x=r==="%",M,E,S,y;if(r===c||!l||JM[r]||JM[c])return l;if(c!=="px"&&!g&&(l=o(t,n,a,"px")),y=t.getCTM&&YE(t),(x||c==="%")&&(rs[n]||~n.indexOf("adius")))return M=y?t.getBBox()[p?"width":"height"]:t[_],Hn(x?l/M*v:l/100*M);if(f[p?"width":"height"]=v+(g?c:r),E=r!=="rem"&&~n.indexOf("adius")||r==="em"&&t.appendChild&&!d?t:t.parentNode,y&&(E=(t.ownerSVGElement||{}).parentNode),(!E||E===Hs||!E.appendChild)&&(E=Hs.body),S=E._gsap,S&&x&&S.width&&p&&S.time===va.time&&!S.uncache)return Hn(l/S.width*v);if(x&&(n==="height"||n==="width")){var A=t.style[n];t.style[n]=v+r,M=t[_],A?t.style[n]=A:Ks(t,n)}else(x||c==="%")&&!dN[ya(E,"display")]&&(f.position=ya(t,"position")),E===t&&(f.position="static"),E.appendChild(Lo),M=Lo[_],E.removeChild(Lo),f.position="absolute";return p&&x&&(S=Po(E),S.time=va.time,S.width=E[_]),Hn(g?M*l/v:M&&l?v/M*l:0)},qr=function(t,n,a,r){var l;return Lg||k0(),n in mr&&n!=="transform"&&(n=mr[n],~n.indexOf(",")&&(n=n.split(",")[0])),rs[n]&&n!=="transform"?(l=Kc(t,r),l=n!=="transformOrigin"?l[n]:l.svg?l.origin:Sd(ya(t,$i))+" "+l.zOrigin+"px"):(l=t.style[n],(!l||l==="auto"||r||~(l+"").indexOf("calc("))&&(l=xd[n]&&xd[n](t,n,a)||ya(t,n)||cE(t,n)||(n==="opacity"?1:0))),a&&!~(l+"").trim().indexOf(" ")?Qs(t,n,l,a)+a:l},pN=function(t,n,a,r){if(!a||a==="none"){var l=du(n,t,1),c=l&&ya(t,l,1);c&&c!==a?(n=l,a=c):n==="borderColor"&&(a=ya(t,"borderTopColor"))}var f=new Ji(this._pt,t.style,n,0,1,FE),p=0,d=0,_,v,g,x,M,E,S,y,A,D,C,P;if(f.b=a,f.e=r,a+="",r+="",r.substring(0,6)==="var(--"&&(r=ya(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(E=t.style[n],t.style[n]=r,r=ya(t,n)||r,E?t.style[n]=E:Ks(t,n)),_=[a,r],wE(_),a=_[0],r=_[1],g=a.match(ql)||[],P=r.match(ql)||[],P.length){for(;v=ql.exec(r);)S=v[0],A=r.substring(p,v.index),M?M=(M+1)%5:(A.substr(-5)==="rgba("||A.substr(-5)==="hsla(")&&(M=1),S!==(E=g[d++]||"")&&(x=parseFloat(E)||0,C=E.substr((x+"").length),S.charAt(1)==="="&&(S=Jl(x,S)+C),y=parseFloat(S),D=S.substr((y+"").length),p=ql.lastIndex-D.length,D||(D=D||Ma.units[n]||C,p===r.length&&(r+=D,f.e+=D)),C!==D&&(x=Qs(t,n,E,D)||0),f._pt={_next:f._pt,p:A||d===1?A:",",s:x,c:y-x,m:M&&M<4||n==="zIndex"?Math.round:0});f.c=p<r.length?r.substring(p,r.length):""}else f.r=n==="display"&&r==="none"?GE:HE;return rE.test(r)&&(f.e=0),this._pt=f,f},$M={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},mN=function(t){var n=t.split(" "),a=n[0],r=n[1]||"50%";return(a==="top"||a==="bottom"||r==="left"||r==="right")&&(t=a,a=r,r=t),n[0]=$M[a]||a,n[1]=$M[r]||r,n.join(" ")},_N=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var a=n.t,r=a.style,l=n.u,c=a._gsap,f,p,d;if(l==="all"||l===!0)r.cssText="",p=1;else for(l=l.split(","),d=l.length;--d>-1;)f=l[d],rs[f]&&(p=1,f=f==="transformOrigin"?$i:Ln),Ks(a,f);p&&(Ks(a,Ln),c&&(c.svg&&a.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Kc(a,1),c.uncache=1,VE(r)))}},xd={clearProps:function(t,n,a,r,l){if(l.data!=="isFromStart"){var c=t._pt=new Ji(t._pt,n,a,0,0,_N);return c.u=r,c.pr=-10,c.tween=l,t._props.push(a),1}}},Zc=[1,0,0,1,0,0],qE={},jE=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},t1=function(t){var n=ya(t,Ln);return jE(n)?Zc:n.substr(7).match(aE).map(Hn)},zg=function(t,n){var a=t._gsap||Po(t),r=t.style,l=t1(t),c,f,p,d;return a.svg&&t.getAttribute("transform")?(p=t.transform.baseVal.consolidate().matrix,l=[p.a,p.b,p.c,p.d,p.e,p.f],l.join(",")==="1,0,0,1,0,0"?Zc:l):(l===Zc&&!t.offsetParent&&t!==$l&&!a.svg&&(p=r.display,r.display="block",c=t.parentNode,(!c||!t.offsetParent&&!t.getBoundingClientRect().width)&&(d=1,f=t.nextElementSibling,$l.appendChild(t)),l=t1(t),p?r.display=p:Ks(t,"display"),d&&(f?c.insertBefore(t,f):c?c.appendChild(t):$l.removeChild(t))),n&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},X0=function(t,n,a,r,l,c){var f=t._gsap,p=l||zg(t,!0),d=f.xOrigin||0,_=f.yOrigin||0,v=f.xOffset||0,g=f.yOffset||0,x=p[0],M=p[1],E=p[2],S=p[3],y=p[4],A=p[5],D=n.split(" "),C=parseFloat(D[0])||0,P=parseFloat(D[1])||0,N,w,T,O;a?p!==Zc&&(w=x*S-M*E)&&(T=C*(S/w)+P*(-E/w)+(E*A-S*y)/w,O=C*(-M/w)+P*(x/w)-(x*A-M*y)/w,C=T,P=O):(N=WE(t),C=N.x+(~D[0].indexOf("%")?C/100*N.width:C),P=N.y+(~(D[1]||D[0]).indexOf("%")?P/100*N.height:P)),r||r!==!1&&f.smooth?(y=C-d,A=P-_,f.xOffset=v+(y*x+A*E)-y,f.yOffset=g+(y*M+A*S)-A):f.xOffset=f.yOffset=0,f.xOrigin=C,f.yOrigin=P,f.smooth=!!r,f.origin=n,f.originIsAbsolute=!!a,t.style[$i]="0px 0px",c&&(Gs(c,f,"xOrigin",d,C),Gs(c,f,"yOrigin",_,P),Gs(c,f,"xOffset",v,f.xOffset),Gs(c,f,"yOffset",g,f.yOffset)),t.setAttribute("data-svg-origin",C+" "+P)},Kc=function(t,n){var a=t._gsap||new UE(t);if("x"in a&&!n&&!a.uncache)return a;var r=t.style,l=a.scaleX<0,c="px",f="deg",p=getComputedStyle(t),d=ya(t,$i)||"0",_,v,g,x,M,E,S,y,A,D,C,P,N,w,T,O,B,G,k,et,tt,X,F,H,J,ft,V,I,K,xt,Mt,Ut;return _=v=g=E=S=y=A=D=C=0,x=M=1,a.svg=!!(t.getCTM&&YE(t)),p.translate&&((p.translate!=="none"||p.scale!=="none"||p.rotate!=="none")&&(r[Ln]=(p.translate!=="none"?"translate3d("+(p.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(p.rotate!=="none"?"rotate("+p.rotate+") ":"")+(p.scale!=="none"?"scale("+p.scale.split(" ").join(",")+") ":"")+(p[Ln]!=="none"?p[Ln]:"")),r.scale=r.rotate=r.translate="none"),w=zg(t,a.svg),a.svg&&(a.uncache?(J=t.getBBox(),d=a.xOrigin-J.x+"px "+(a.yOrigin-J.y)+"px",H=""):H=!n&&t.getAttribute("data-svg-origin"),X0(t,H||d,!!H||a.originIsAbsolute,a.smooth!==!1,w)),P=a.xOrigin||0,N=a.yOrigin||0,w!==Zc&&(G=w[0],k=w[1],et=w[2],tt=w[3],_=X=w[4],v=F=w[5],w.length===6?(x=Math.sqrt(G*G+k*k),M=Math.sqrt(tt*tt+et*et),E=G||k?Gl(k,G)*To:0,A=et||tt?Gl(et,tt)*To+E:0,A&&(M*=Math.abs(Math.cos(A*tu))),a.svg&&(_-=P-(P*G+N*et),v-=N-(P*k+N*tt))):(Ut=w[6],xt=w[7],V=w[8],I=w[9],K=w[10],Mt=w[11],_=w[12],v=w[13],g=w[14],T=Gl(Ut,K),S=T*To,T&&(O=Math.cos(-T),B=Math.sin(-T),H=X*O+V*B,J=F*O+I*B,ft=Ut*O+K*B,V=X*-B+V*O,I=F*-B+I*O,K=Ut*-B+K*O,Mt=xt*-B+Mt*O,X=H,F=J,Ut=ft),T=Gl(-et,K),y=T*To,T&&(O=Math.cos(-T),B=Math.sin(-T),H=G*O-V*B,J=k*O-I*B,ft=et*O-K*B,Mt=tt*B+Mt*O,G=H,k=J,et=ft),T=Gl(k,G),E=T*To,T&&(O=Math.cos(T),B=Math.sin(T),H=G*O+k*B,J=X*O+F*B,k=k*O-G*B,F=F*O-X*B,G=H,X=J),S&&Math.abs(S)+Math.abs(E)>359.9&&(S=E=0,y=180-y),x=Hn(Math.sqrt(G*G+k*k+et*et)),M=Hn(Math.sqrt(F*F+Ut*Ut)),T=Gl(X,F),A=Math.abs(T)>2e-4?T*To:0,C=Mt?1/(Mt<0?-Mt:Mt):0),a.svg&&(H=t.getAttribute("transform"),a.forceCSS=t.setAttribute("transform","")||!jE(ya(t,Ln)),H&&t.setAttribute("transform",H))),Math.abs(A)>90&&Math.abs(A)<270&&(l?(x*=-1,A+=E<=0?180:-180,E+=E<=0?180:-180):(M*=-1,A+=A<=0?180:-180)),n=n||a.uncache,a.x=_-((a.xPercent=_&&(!n&&a.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-_)?-50:0)))?t.offsetWidth*a.xPercent/100:0)+c,a.y=v-((a.yPercent=v&&(!n&&a.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-v)?-50:0)))?t.offsetHeight*a.yPercent/100:0)+c,a.z=g+c,a.scaleX=Hn(x),a.scaleY=Hn(M),a.rotation=Hn(E)+f,a.rotationX=Hn(S)+f,a.rotationY=Hn(y)+f,a.skewX=A+f,a.skewY=D+f,a.transformPerspective=C+c,(a.zOrigin=parseFloat(d.split(" ")[2])||!n&&a.zOrigin||0)&&(r[$i]=Sd(d)),a.xOffset=a.yOffset=0,a.force3D=Ma.force3D,a.renderTransform=a.svg?vN:XE?ZE:gN,a.uncache=0,a},Sd=function(t){return(t=t.split(" "))[0]+" "+t[1]},N_=function(t,n,a){var r=bi(n);return Hn(parseFloat(n)+parseFloat(Qs(t,"x",a+"px",r)))+r},gN=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,ZE(t,n)},Mo="0deg",pc="0px",Eo=") ",ZE=function(t,n){var a=n||this,r=a.xPercent,l=a.yPercent,c=a.x,f=a.y,p=a.z,d=a.rotation,_=a.rotationY,v=a.rotationX,g=a.skewX,x=a.skewY,M=a.scaleX,E=a.scaleY,S=a.transformPerspective,y=a.force3D,A=a.target,D=a.zOrigin,C="",P=y==="auto"&&t&&t!==1||y===!0;if(D&&(v!==Mo||_!==Mo)){var N=parseFloat(_)*tu,w=Math.sin(N),T=Math.cos(N),O;N=parseFloat(v)*tu,O=Math.cos(N),c=N_(A,c,w*O*-D),f=N_(A,f,-Math.sin(N)*-D),p=N_(A,p,T*O*-D+D)}S!==pc&&(C+="perspective("+S+Eo),(r||l)&&(C+="translate("+r+"%, "+l+"%) "),(P||c!==pc||f!==pc||p!==pc)&&(C+=p!==pc||P?"translate3d("+c+", "+f+", "+p+") ":"translate("+c+", "+f+Eo),d!==Mo&&(C+="rotate("+d+Eo),_!==Mo&&(C+="rotateY("+_+Eo),v!==Mo&&(C+="rotateX("+v+Eo),(g!==Mo||x!==Mo)&&(C+="skew("+g+", "+x+Eo),(M!==1||E!==1)&&(C+="scale("+M+", "+E+Eo),A.style[Ln]=C||"translate(0, 0)"},vN=function(t,n){var a=n||this,r=a.xPercent,l=a.yPercent,c=a.x,f=a.y,p=a.rotation,d=a.skewX,_=a.skewY,v=a.scaleX,g=a.scaleY,x=a.target,M=a.xOrigin,E=a.yOrigin,S=a.xOffset,y=a.yOffset,A=a.forceCSS,D=parseFloat(c),C=parseFloat(f),P,N,w,T,O;p=parseFloat(p),d=parseFloat(d),_=parseFloat(_),_&&(_=parseFloat(_),d+=_,p+=_),p||d?(p*=tu,d*=tu,P=Math.cos(p)*v,N=Math.sin(p)*v,w=Math.sin(p-d)*-g,T=Math.cos(p-d)*g,d&&(_*=tu,O=Math.tan(d-_),O=Math.sqrt(1+O*O),w*=O,T*=O,_&&(O=Math.tan(_),O=Math.sqrt(1+O*O),P*=O,N*=O)),P=Hn(P),N=Hn(N),w=Hn(w),T=Hn(T)):(P=v,T=g,N=w=0),(D&&!~(c+"").indexOf("px")||C&&!~(f+"").indexOf("px"))&&(D=Qs(x,"x",c,"px"),C=Qs(x,"y",f,"px")),(M||E||S||y)&&(D=Hn(D+M-(M*P+E*w)+S),C=Hn(C+E-(M*N+E*T)+y)),(r||l)&&(O=x.getBBox(),D=Hn(D+r/100*O.width),C=Hn(C+l/100*O.height)),O="matrix("+P+","+N+","+w+","+T+","+D+","+C+")",x.setAttribute("transform",O),A&&(x.style[Ln]=O)},xN=function(t,n,a,r,l){var c=360,f=li(l),p=parseFloat(l)*(f&&~l.indexOf("rad")?To:1),d=p-r,_=r+d+"deg",v,g;return f&&(v=l.split("_")[1],v==="short"&&(d%=c,d!==d%(c/2)&&(d+=d<0?c:-c)),v==="cw"&&d<0?d=(d+c*jM)%c-~~(d/c)*c:v==="ccw"&&d>0&&(d=(d-c*jM)%c-~~(d/c)*c)),t._pt=g=new Ji(t._pt,n,a,r,d,eN),g.e=_,g.u="deg",t._props.push(a),g},e1=function(t,n){for(var a in n)t[a]=n[a];return t},SN=function(t,n,a){var r=e1({},a._gsap),l="perspective,force3D,transformOrigin,svgOrigin",c=a.style,f,p,d,_,v,g,x,M;r.svg?(d=a.getAttribute("transform"),a.setAttribute("transform",""),c[Ln]=n,f=Kc(a,1),Ks(a,Ln),a.setAttribute("transform",d)):(d=getComputedStyle(a)[Ln],c[Ln]=n,f=Kc(a,1),c[Ln]=d);for(p in rs)d=r[p],_=f[p],d!==_&&l.indexOf(p)<0&&(x=bi(d),M=bi(_),v=x!==M?Qs(a,p,d,M):parseFloat(d),g=parseFloat(_),t._pt=new Ji(t._pt,f,p,v,g-v,G0),t._pt.u=M||0,t._props.push(p));e1(f,r)};Qi("padding,margin,Width,Radius",function(o,t){var n="Top",a="Right",r="Bottom",l="Left",c=(t<3?[n,a,r,l]:[n+l,n+a,r+a,r+l]).map(function(f){return t<2?o+f:"border"+f+o});xd[t>1?"border"+o:o]=function(f,p,d,_,v){var g,x;if(arguments.length<4)return g=c.map(function(M){return qr(f,M,d)}),x=g.join(" "),x.split(g[0]).length===5?g[0]:x;g=(_+"").split(" "),x={},c.forEach(function(M,E){return x[M]=g[E]=g[E]||g[(E-1)/2|0]}),f.init(p,x,v)}});var KE={name:"css",register:k0,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,a,r,l){var c=this._props,f=t.style,p=a.vars.startAt,d,_,v,g,x,M,E,S,y,A,D,C,P,N,w,T,O;Lg||k0(),this.styles=this.styles||kE(t),T=this.styles.props,this.tween=a;for(E in n)if(E!=="autoRound"&&(_=n[E],!(ma[E]&&NE(E,n,a,r,t,l)))){if(x=typeof _,M=xd[E],x==="function"&&(_=_.call(a,r,t,l),x=typeof _),x==="string"&&~_.indexOf("random(")&&(_=Yc(_)),M)M(this,t,E,_,a)&&(w=1);else if(E.substr(0,2)==="--")d=(getComputedStyle(t).getPropertyValue(E)+"").trim(),_+="",Ys.lastIndex=0,Ys.test(d)||(S=bi(d),y=bi(_),y?S!==y&&(d=Qs(t,E,d,y)+y):S&&(_+=S)),this.add(f,"setProperty",d,_,r,l,0,0,E),c.push(E),T.push(E,0,f[E]);else if(x!=="undefined"){if(p&&E in p?(d=typeof p[E]=="function"?p[E].call(a,r,t,l):p[E],li(d)&&~d.indexOf("random(")&&(d=Yc(d)),bi(d+"")||d==="auto"||(d+=Ma.units[E]||bi(qr(t,E))||""),(d+"").charAt(1)==="="&&(d=qr(t,E))):d=qr(t,E),g=parseFloat(d),A=x==="string"&&_.charAt(1)==="="&&_.substr(0,2),A&&(_=_.substr(2)),v=parseFloat(_),E in mr&&(E==="autoAlpha"&&(g===1&&qr(t,"visibility")==="hidden"&&v&&(g=0),T.push("visibility",0,f.visibility),Gs(this,f,"visibility",g?"inherit":"hidden",v?"inherit":"hidden",!v)),E!=="scale"&&E!=="transform"&&(E=mr[E],~E.indexOf(",")&&(E=E.split(",")[0]))),D=E in rs,D){if(this.styles.save(E),O=_,x==="string"&&_.substring(0,6)==="var(--"){if(_=ya(t,_.substring(4,_.indexOf(")"))),_.substring(0,5)==="calc("){var B=t.style.perspective;t.style.perspective=_,_=ya(t,"perspective"),B?t.style.perspective=B:Ks(t,"perspective")}v=parseFloat(_)}if(C||(P=t._gsap,P.renderTransform&&!n.parseTransform||Kc(t,n.parseTransform),N=n.smoothOrigin!==!1&&P.smooth,C=this._pt=new Ji(this._pt,f,Ln,0,1,P.renderTransform,P,0,-1),C.dep=1),E==="scale")this._pt=new Ji(this._pt,P,"scaleY",P.scaleY,(A?Jl(P.scaleY,A+v):v)-P.scaleY||0,G0),this._pt.u=0,c.push("scaleY",E),E+="X";else if(E==="transformOrigin"){T.push($i,0,f[$i]),_=mN(_),P.svg?X0(t,_,0,N,0,this):(y=parseFloat(_.split(" ")[2])||0,y!==P.zOrigin&&Gs(this,P,"zOrigin",P.zOrigin,y),Gs(this,f,E,Sd(d),Sd(_)));continue}else if(E==="svgOrigin"){X0(t,_,1,N,0,this);continue}else if(E in qE){xN(this,P,E,g,A?Jl(g,A+_):_);continue}else if(E==="smoothOrigin"){Gs(this,P,"smooth",P.smooth,_);continue}else if(E==="force3D"){P[E]=_;continue}else if(E==="transform"){SN(this,_,t);continue}}else E in f||(E=du(E)||E);if(D||(v||v===0)&&(g||g===0)&&!tN.test(_)&&E in f)S=(d+"").substr((g+"").length),v||(v=0),y=bi(_)||(E in Ma.units?Ma.units[E]:S),S!==y&&(g=Qs(t,E,d,y)),this._pt=new Ji(this._pt,D?P:f,E,g,(A?Jl(g,A+v):v)-g,!D&&(y==="px"||E==="zIndex")&&n.autoRound!==!1?aN:G0),this._pt.u=y||0,D&&O!==_?(this._pt.b=d,this._pt.e=O,this._pt.r=iN):S!==y&&y!=="%"&&(this._pt.b=d,this._pt.r=nN);else if(E in f)pN.call(this,t,E,d,A?A+_:_);else if(E in t)this.add(t,E,d||t[E],A?A+_:_,r,l);else if(E!=="parseTransform"){Eg(E,_);continue}D||(E in f?T.push(E,0,f[E]):typeof t[E]=="function"?T.push(E,2,t[E]()):T.push(E,1,d||t[E])),c.push(E)}}w&&IE(this)},render:function(t,n){if(n.tween._time||!Og())for(var a=n._pt;a;)a.r(t,a.d),a=a._next;else n.styles.revert()},get:qr,aliases:mr,getSetter:function(t,n,a){var r=mr[n];return r&&r.indexOf(",")<0&&(n=r),n in rs&&n!==$i&&(t._gsap.x||qr(t,"x"))?a&&qM===a?n==="scale"?lN:oN:(qM=a||{})&&(n==="scale"?uN:cN):t.style&&!Sg(t.style[n])?rN:~n.indexOf("-")?sN:Ug(t,n)},core:{_removeProperty:Ks,_getMatrix:zg}};ta.utils.checkPrefix=du;ta.core.getStyleSaver=kE;(function(o,t,n,a){var r=Qi(o+","+t+","+n,function(l){rs[l]=1});Qi(t,function(l){Ma.units[l]="deg",qE[l]=1}),mr[r[13]]=o+","+t,Qi(a,function(l){var c=l.split(":");mr[c[1]]=r[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Qi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Ma.units[o]="px"});ta.registerPlugin(KE);var Vs=ta.registerPlugin(KE)||ta;Vs.core.Tween;function yN(o,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(o,a.key,a)}}function MN(o,t,n){return t&&yN(o.prototype,t),o}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var pi,id,xa,ks,Xs,eu,QE,Ao,nu,JE,Qr,Qa,$E,tb=function(){return pi||typeof window<"u"&&(pi=window.gsap)&&pi.registerPlugin&&pi},eb=1,Zl=[],Pe=[],Sr=[],Dc=Date.now,W0=function(t,n){return n},EN=function(){var t=nu.core,n=t.bridge||{},a=t._scrollers,r=t._proxies;a.push.apply(a,Pe),r.push.apply(r,Sr),Pe=a,Sr=r,W0=function(c,f){return n[c](f)}},qs=function(t,n){return~Sr.indexOf(t)&&Sr[Sr.indexOf(t)+1][n]},Uc=function(t){return!!~JE.indexOf(t)},Li=function(t,n,a,r,l){return t.addEventListener(n,a,{passive:r!==!1,capture:!!l})},Ni=function(t,n,a,r){return t.removeEventListener(n,a,!!r)},zh="scrollLeft",Fh="scrollTop",Y0=function(){return Qr&&Qr.isPressed||Pe.cache++},yd=function(t,n){var a=function r(l){if(l||l===0){eb&&(xa.history.scrollRestoration="manual");var c=Qr&&Qr.isPressed;l=r.v=Math.round(l)||(Qr&&Qr.iOS?1:0),t(l),r.cacheID=Pe.cache,c&&W0("ss",l)}else(n||Pe.cache!==r.cacheID||W0("ref"))&&(r.cacheID=Pe.cache,r.v=t());return r.v+r.offset};return a.offset=0,t&&a},Ii={s:zh,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:yd(function(o){return arguments.length?xa.scrollTo(o,ei.sc()):xa.pageXOffset||ks[zh]||Xs[zh]||eu[zh]||0})},ei={s:Fh,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ii,sc:yd(function(o){return arguments.length?xa.scrollTo(Ii.sc(),o):xa.pageYOffset||ks[Fh]||Xs[Fh]||eu[Fh]||0})},qi=function(t,n){return(n&&n._ctx&&n._ctx.selector||pi.utils.toArray)(t)[0]||(typeof t=="string"&&pi.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},bN=function(t,n){for(var a=n.length;a--;)if(n[a]===t||n[a].contains(t))return!0;return!1},Js=function(t,n){var a=n.s,r=n.sc;Uc(t)&&(t=ks.scrollingElement||Xs);var l=Pe.indexOf(t),c=r===ei.sc?1:2;!~l&&(l=Pe.push(t)-1),Pe[l+c]||Li(t,"scroll",Y0);var f=Pe[l+c],p=f||(Pe[l+c]=yd(qs(t,a),!0)||(Uc(t)?r:yd(function(d){return arguments.length?t[a]=d:t[a]})));return p.target=t,f||(p.smooth=pi.getProperty(t,"scrollBehavior")==="smooth"),p},q0=function(t,n,a){var r=t,l=t,c=Dc(),f=c,p=n||50,d=Math.max(500,p*3),_=function(M,E){var S=Dc();E||S-c>p?(l=r,r=M,f=c,c=S):a?r+=M:r=l+(M-l)/(S-f)*(c-f)},v=function(){l=r=a?0:r,f=c=0},g=function(M){var E=f,S=l,y=Dc();return(M||M===0)&&M!==r&&_(M),c===f||y-f>d?0:(r+(a?S:-S))/((a?y:c)-E)*1e3};return{update:_,reset:v,getVelocity:g}},mc=function(t,n){return n&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},n1=function(t){var n=Math.max.apply(Math,t),a=Math.min.apply(Math,t);return Math.abs(n)>=Math.abs(a)?n:a},nb=function(){nu=pi.core.globals().ScrollTrigger,nu&&nu.core&&EN()},ib=function(t){return pi=t||tb(),!id&&pi&&typeof document<"u"&&document.body&&(xa=window,ks=document,Xs=ks.documentElement,eu=ks.body,JE=[xa,ks,Xs,eu],pi.utils.clamp,$E=pi.core.context||function(){},Ao="onpointerenter"in eu?"pointer":"mouse",QE=Gn.isTouch=xa.matchMedia&&xa.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in xa||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Qa=Gn.eventTypes=("ontouchstart"in Xs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Xs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return eb=0},500),id=1),nu||nb(),id};Ii.op=ei;Pe.cache=0;var Gn=(function(){function o(n){this.init(n)}var t=o.prototype;return t.init=function(a){id||ib(pi)||console.warn("Please gsap.registerPlugin(Observer)"),nu||nb();var r=a.tolerance,l=a.dragMinimum,c=a.type,f=a.target,p=a.lineHeight,d=a.debounce,_=a.preventDefault,v=a.onStop,g=a.onStopDelay,x=a.ignore,M=a.wheelSpeed,E=a.event,S=a.onDragStart,y=a.onDragEnd,A=a.onDrag,D=a.onPress,C=a.onRelease,P=a.onRight,N=a.onLeft,w=a.onUp,T=a.onDown,O=a.onChangeX,B=a.onChangeY,G=a.onChange,k=a.onToggleX,et=a.onToggleY,tt=a.onHover,X=a.onHoverEnd,F=a.onMove,H=a.ignoreCheck,J=a.isNormalizer,ft=a.onGestureStart,V=a.onGestureEnd,I=a.onWheel,K=a.onEnable,xt=a.onDisable,Mt=a.onClick,Ut=a.scrollSpeed,it=a.capture,vt=a.allowClicks,Et=a.lockAxis,It=a.onLockAxis;this.target=f=qi(f)||Xs,this.vars=a,x&&(x=pi.utils.toArray(x)),r=r||1e-9,l=l||0,M=M||1,Ut=Ut||1,c=c||"wheel,touch,pointer",d=d!==!1,p||(p=parseFloat(xa.getComputedStyle(eu).lineHeight)||22);var ne,Zt,ye,qt,ie,ve,se,ut=this,we=0,pn=0,j=a.passive||!_&&a.passive!==!1,ge=Js(f,Ii),me=Js(f,ei),ze=ge(),Lt=me(),Me=~c.indexOf("touch")&&!~c.indexOf("pointer")&&Qa[0]==="pointerdown",z=Uc(f),R=f.ownerDocument||ks,Q=[0,0,0],_t=[0,0,0],bt=0,zt=function(){return bt=Dc()},Dt=function(Nt,oe){return(ut.event=Nt)&&x&&bN(Nt.target,x)||oe&&Me&&Nt.pointerType!=="touch"||H&&H(Nt,oe)},dt=function(){ut._vx.reset(),ut._vy.reset(),Zt.pause(),v&&v(ut)},pt=function(){var Nt=ut.deltaX=n1(Q),oe=ut.deltaY=n1(_t),wt=Math.abs(Nt)>=r,re=Math.abs(oe)>=r;G&&(wt||re)&&G(ut,Nt,oe,Q,_t),wt&&(P&&ut.deltaX>0&&P(ut),N&&ut.deltaX<0&&N(ut),O&&O(ut),k&&ut.deltaX<0!=we<0&&k(ut),we=ut.deltaX,Q[0]=Q[1]=Q[2]=0),re&&(T&&ut.deltaY>0&&T(ut),w&&ut.deltaY<0&&w(ut),B&&B(ut),et&&ut.deltaY<0!=pn<0&&et(ut),pn=ut.deltaY,_t[0]=_t[1]=_t[2]=0),(qt||ye)&&(F&&F(ut),ye&&(S&&ye===1&&S(ut),A&&A(ut),ye=0),qt=!1),ve&&!(ve=!1)&&It&&It(ut),ie&&(I(ut),ie=!1),ne=0},Bt=function(Nt,oe,wt){Q[wt]+=Nt,_t[wt]+=oe,ut._vx.update(Nt),ut._vy.update(oe),d?ne||(ne=requestAnimationFrame(pt)):pt()},Ht=function(Nt,oe){Et&&!se&&(ut.axis=se=Math.abs(Nt)>Math.abs(oe)?"x":"y",ve=!0),se!=="y"&&(Q[2]+=Nt,ut._vx.update(Nt,!0)),se!=="x"&&(_t[2]+=oe,ut._vy.update(oe,!0)),d?ne||(ne=requestAnimationFrame(pt)):pt()},Ft=function(Nt){if(!Dt(Nt,1)){Nt=mc(Nt,_);var oe=Nt.clientX,wt=Nt.clientY,re=oe-ut.x,Qt=wt-ut.y,fe=ut.isDragging;ut.x=oe,ut.y=wt,(fe||(re||Qt)&&(Math.abs(ut.startX-oe)>=l||Math.abs(ut.startY-wt)>=l))&&(ye||(ye=fe?2:1),fe||(ut.isDragging=!0),Ht(re,Qt))}},Ot=ut.onPress=function(Ct){Dt(Ct,1)||Ct&&Ct.button||(ut.axis=se=null,Zt.pause(),ut.isPressed=!0,Ct=mc(Ct),we=pn=0,ut.startX=ut.x=Ct.clientX,ut.startY=ut.y=Ct.clientY,ut._vx.reset(),ut._vy.reset(),Li(J?f:R,Qa[1],Ft,j,!0),ut.deltaX=ut.deltaY=0,D&&D(ut))},Gt=ut.onRelease=function(Ct){if(!Dt(Ct,1)){Ni(J?f:R,Qa[1],Ft,!0);var Nt=!isNaN(ut.y-ut.startY),oe=ut.isDragging,wt=oe&&(Math.abs(ut.x-ut.startX)>3||Math.abs(ut.y-ut.startY)>3),re=mc(Ct);!wt&&Nt&&(ut._vx.reset(),ut._vy.reset(),_&&vt&&pi.delayedCall(.08,function(){if(Dc()-bt>300&&!Ct.defaultPrevented){if(Ct.target.click)Ct.target.click();else if(R.createEvent){var Qt=R.createEvent("MouseEvents");Qt.initMouseEvent("click",!0,!0,xa,1,re.screenX,re.screenY,re.clientX,re.clientY,!1,!1,!1,!1,0,null),Ct.target.dispatchEvent(Qt)}}})),ut.isDragging=ut.isGesturing=ut.isPressed=!1,v&&oe&&!J&&Zt.restart(!0),ye&&pt(),y&&oe&&y(ut),C&&C(ut,wt)}},ce=function(Nt){return Nt.touches&&Nt.touches.length>1&&(ut.isGesturing=!0)&&ft(Nt,ut.isDragging)},de=function(){return(ut.isGesturing=!1)||V(ut)},Y=function(Nt){if(!Dt(Nt)){var oe=ge(),wt=me();Bt((oe-ze)*Ut,(wt-Lt)*Ut,1),ze=oe,Lt=wt,v&&Zt.restart(!0)}},Rt=function(Nt){if(!Dt(Nt)){Nt=mc(Nt,_),I&&(ie=!0);var oe=(Nt.deltaMode===1?p:Nt.deltaMode===2?xa.innerHeight:1)*M;Bt(Nt.deltaX*oe,Nt.deltaY*oe,0),v&&!J&&Zt.restart(!0)}},mt=function(Nt){if(!Dt(Nt)){var oe=Nt.clientX,wt=Nt.clientY,re=oe-ut.x,Qt=wt-ut.y;ut.x=oe,ut.y=wt,qt=!0,v&&Zt.restart(!0),(re||Qt)&&Ht(re,Qt)}},Vt=function(Nt){ut.event=Nt,tt(ut)},Pt=function(Nt){ut.event=Nt,X(ut)},Tt=function(Nt){return Dt(Nt)||mc(Nt,_)&&Mt(ut)};Zt=ut._dc=pi.delayedCall(g||.25,dt).pause(),ut.deltaX=ut.deltaY=0,ut._vx=q0(0,50,!0),ut._vy=q0(0,50,!0),ut.scrollX=ge,ut.scrollY=me,ut.isDragging=ut.isGesturing=ut.isPressed=!1,$E(this),ut.enable=function(Ct){return ut.isEnabled||(Li(z?R:f,"scroll",Y0),c.indexOf("scroll")>=0&&Li(z?R:f,"scroll",Y,j,it),c.indexOf("wheel")>=0&&Li(f,"wheel",Rt,j,it),(c.indexOf("touch")>=0&&QE||c.indexOf("pointer")>=0)&&(Li(f,Qa[0],Ot,j,it),Li(R,Qa[2],Gt),Li(R,Qa[3],Gt),vt&&Li(f,"click",zt,!0,!0),Mt&&Li(f,"click",Tt),ft&&Li(R,"gesturestart",ce),V&&Li(R,"gestureend",de),tt&&Li(f,Ao+"enter",Vt),X&&Li(f,Ao+"leave",Pt),F&&Li(f,Ao+"move",mt)),ut.isEnabled=!0,ut.isDragging=ut.isGesturing=ut.isPressed=qt=ye=!1,ut._vx.reset(),ut._vy.reset(),ze=ge(),Lt=me(),Ct&&Ct.type&&Ot(Ct),K&&K(ut)),ut},ut.disable=function(){ut.isEnabled&&(Zl.filter(function(Ct){return Ct!==ut&&Uc(Ct.target)}).length||Ni(z?R:f,"scroll",Y0),ut.isPressed&&(ut._vx.reset(),ut._vy.reset(),Ni(J?f:R,Qa[1],Ft,!0)),Ni(z?R:f,"scroll",Y,it),Ni(f,"wheel",Rt,it),Ni(f,Qa[0],Ot,it),Ni(R,Qa[2],Gt),Ni(R,Qa[3],Gt),Ni(f,"click",zt,!0),Ni(f,"click",Tt),Ni(R,"gesturestart",ce),Ni(R,"gestureend",de),Ni(f,Ao+"enter",Vt),Ni(f,Ao+"leave",Pt),Ni(f,Ao+"move",mt),ut.isEnabled=ut.isPressed=ut.isDragging=!1,xt&&xt(ut))},ut.kill=ut.revert=function(){ut.disable();var Ct=Zl.indexOf(ut);Ct>=0&&Zl.splice(Ct,1),Qr===ut&&(Qr=0)},Zl.push(ut),J&&Uc(f)&&(Qr=ut),ut.enable(E)},MN(o,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),o})();Gn.version="3.15.0";Gn.create=function(o){return new Gn(o)};Gn.register=ib;Gn.getAll=function(){return Zl.slice()};Gn.getById=function(o){return Zl.filter(function(t){return t.vars.id===o})[0]};tb()&&pi.registerPlugin(Gn);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var te,Wl,Oe,ln,_a,en,Fg,Md,Qc,Nc,Mc,Ih,Mi,Ld,j0,zi,i1,a1,Yl,ab,L_,rb,Pi,Z0,sb,ob,zs,K0,Ig,iu,Bg,Lc,Q0,O_,Bh=1,Ei=Date.now,P_=Ei(),Va=0,Ec=0,r1=function(t,n,a){var r=da(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return a["_"+n+"Clamp"]=r,r?t.substr(6,t.length-7):t},s1=function(t,n){return n&&(!da(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},TN=function o(){return Ec&&requestAnimationFrame(o)},o1=function(){return Ld=1},l1=function(){return Ld=0},cr=function(t){return t},bc=function(t){return Math.round(t*1e5)/1e5||0},lb=function(){return typeof window<"u"},ub=function(){return te||lb()&&(te=window.gsap)&&te.registerPlugin&&te},Xo=function(t){return!!~Fg.indexOf(t)},cb=function(t){return(t==="Height"?Bg:Oe["inner"+t])||_a["client"+t]||en["client"+t]},fb=function(t){return qs(t,"getBoundingClientRect")||(Xo(t)?function(){return ld.width=Oe.innerWidth,ld.height=Bg,ld}:function(){return Zr(t)})},AN=function(t,n,a){var r=a.d,l=a.d2,c=a.a;return(c=qs(t,"getBoundingClientRect"))?function(){return c()[r]}:function(){return(n?cb(l):t["client"+l])||0}},RN=function(t,n){return!n||~Sr.indexOf(t)?fb(t):function(){return ld}},_r=function(t,n){var a=n.s,r=n.d2,l=n.d,c=n.a;return Math.max(0,(a="scroll"+r)&&(c=qs(t,a))?c()-fb(t)()[l]:Xo(t)?(_a[a]||en[a])-cb(r):t[a]-t["offset"+r])},Hh=function(t,n){for(var a=0;a<Yl.length;a+=3)(!n||~n.indexOf(Yl[a+1]))&&t(Yl[a],Yl[a+1],Yl[a+2])},da=function(t){return typeof t=="string"},Ti=function(t){return typeof t=="function"},Tc=function(t){return typeof t=="number"},Ro=function(t){return typeof t=="object"},_c=function(t,n,a){return t&&t.progress(n?0:1)&&a&&t.pause()},Vl=function(t,n,a){if(t.enabled){var r=t._ctx?t._ctx.add(function(){return n(t,a)}):n(t,a);r&&r.totalTime&&(t.callbackAnimation=r)}},kl=Math.abs,hb="left",db="top",Hg="right",Gg="bottom",Bo="width",Ho="height",Oc="Right",Pc="Left",zc="Top",Fc="Bottom",Kn="padding",Ia="margin",pu="Width",Vg="Height",ti="px",Ba=function(t){return Oe.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},CN=function(t){var n=Ba(t).position;t.style.position=n==="absolute"||n==="fixed"?n:"relative"},u1=function(t,n){for(var a in n)a in t||(t[a]=n[a]);return t},Zr=function(t,n){var a=n&&Ba(t)[j0]!=="matrix(1, 0, 0, 1, 0, 0)"&&te.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return a&&a.progress(0).kill(),r},Ed=function(t,n){var a=n.d2;return t["offset"+a]||t["client"+a]||0},pb=function(t){var n=[],a=t.labels,r=t.duration(),l;for(l in a)n.push(a[l]/r);return n},wN=function(t){return function(n){return te.utils.snap(pb(t),n)}},kg=function(t){var n=te.utils.snap(t),a=Array.isArray(t)&&t.slice(0).sort(function(r,l){return r-l});return a?function(r,l,c){c===void 0&&(c=.001);var f;if(!l)return n(r);if(l>0){for(r-=c,f=0;f<a.length;f++)if(a[f]>=r)return a[f];return a[f-1]}else for(f=a.length,r+=c;f--;)if(a[f]<=r)return a[f];return a[0]}:function(r,l,c){c===void 0&&(c=.001);var f=n(r);return!l||Math.abs(f-r)<c||f-r<0==l<0?f:n(l<0?r-t:r+t)}},DN=function(t){return function(n,a){return kg(pb(t))(n,a.direction)}},Gh=function(t,n,a,r){return a.split(",").forEach(function(l){return t(n,l,r)})},oi=function(t,n,a,r,l){return t.addEventListener(n,a,{passive:!r,capture:!!l})},si=function(t,n,a,r){return t.removeEventListener(n,a,!!r)},Vh=function(t,n,a){a=a&&a.wheelHandler,a&&(t(n,"wheel",a),t(n,"touchmove",a))},c1={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},kh={toggleActions:"play",anticipatePin:0},bd={top:0,left:0,center:.5,bottom:1,right:1},ad=function(t,n){if(da(t)){var a=t.indexOf("="),r=~a?+(t.charAt(a-1)+1)*parseFloat(t.substr(a+1)):0;~a&&(t.indexOf("%")>a&&(r*=n/100),t=t.substr(0,a-1)),t=r+(t in bd?bd[t]*n:~t.indexOf("%")?parseFloat(t)*n/100:parseFloat(t)||0)}return t},Xh=function(t,n,a,r,l,c,f,p){var d=l.startColor,_=l.endColor,v=l.fontSize,g=l.indent,x=l.fontWeight,M=ln.createElement("div"),E=Xo(a)||qs(a,"pinType")==="fixed",S=t.indexOf("scroller")!==-1,y=E?en:a.tagName==="IFRAME"?a.contentDocument.body:a,A=t.indexOf("start")!==-1,D=A?d:_,C="border-color:"+D+";font-size:"+v+";color:"+D+";font-weight:"+x+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return C+="position:"+((S||p)&&E?"fixed;":"absolute;"),(S||p||!E)&&(C+=(r===ei?Hg:Gg)+":"+(c+parseFloat(g))+"px;"),f&&(C+="box-sizing:border-box;text-align:left;width:"+f.offsetWidth+"px;"),M._isStart=A,M.setAttribute("class","gsap-marker-"+t+(n?" marker-"+n:"")),M.style.cssText=C,M.innerText=n||n===0?t+"-"+n:t,y.children[0]?y.insertBefore(M,y.children[0]):y.appendChild(M),M._offset=M["offset"+r.op.d2],rd(M,0,r,A),M},rd=function(t,n,a,r){var l={display:"block"},c=a[r?"os2":"p2"],f=a[r?"p2":"os2"];t._isFlipped=r,l[a.a+"Percent"]=r?-100:0,l[a.a]=r?"1px":0,l["border"+c+pu]=1,l["border"+f+pu]=0,l[a.p]=n+"px",te.set(t,l)},Ne=[],J0={},Jc,f1=function(){return Ei()-Va>34&&(Jc||(Jc=requestAnimationFrame(ts)))},Xl=function(){(!Pi||!Pi.isPressed||Pi.startX>en.clientWidth)&&(Pe.cache++,Pi?Jc||(Jc=requestAnimationFrame(ts)):ts(),Va||Yo("scrollStart"),Va=Ei())},z_=function(){ob=Oe.innerWidth,sb=Oe.innerHeight},Ac=function(t){Pe.cache++,(t===!0||!Mi&&!rb&&!ln.fullscreenElement&&!ln.webkitFullscreenElement&&(!Z0||ob!==Oe.innerWidth||Math.abs(Oe.innerHeight-sb)>Oe.innerHeight*.25))&&Md.restart(!0)},Wo={},UN=[],mb=function o(){return si(Le,"scrollEnd",o)||Oo(!0)},Yo=function(t){return Wo[t]&&Wo[t].map(function(n){return n()})||UN},ha=[],_b=function(t){for(var n=0;n<ha.length;n+=5)(!t||ha[n+4]&&ha[n+4].query===t)&&(ha[n].style.cssText=ha[n+1],ha[n].getBBox&&ha[n].setAttribute("transform",ha[n+2]||""),ha[n+3].uncache=1)},gb=function(){return Pe.forEach(function(t){return Ti(t)&&++t.cacheID&&(t.rec=t())})},Xg=function(t,n){var a;for(zi=0;zi<Ne.length;zi++)a=Ne[zi],a&&(!n||a._ctx===n)&&(t?a.kill(1):a.revert(!0,!0));Lc=!0,n&&_b(n),n||Yo("revert")},vb=function(t,n){Pe.cache++,(n||!Fi)&&Pe.forEach(function(a){return Ti(a)&&a.cacheID++&&(a.rec=0)}),da(t)&&(Oe.history.scrollRestoration=Ig=t)},Fi,Go=0,h1,NN=function(){if(h1!==Go){var t=h1=Go;requestAnimationFrame(function(){return t===Go&&Oo(!0)})}},xb=function(){en.appendChild(iu),Bg=!Pi&&iu.offsetHeight||Oe.innerHeight,en.removeChild(iu)},d1=function(t){return Qc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(n){return n.style.display=t?"none":"block"})},Oo=function(t,n){if(_a=ln.documentElement,en=ln.body,Fg=[Oe,ln,_a,en],Va&&!t&&!Lc){oi(Le,"scrollEnd",mb);return}xb(),Fi=Le.isRefreshing=!0,Lc||gb();var a=Yo("refreshInit");ab&&Le.sort(),n||Xg(),Pe.forEach(function(r){Ti(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Ne.slice(0).forEach(function(r){return r.refresh()}),Lc=!1,Ne.forEach(function(r){if(r._subPinOffset&&r.pin){var l=r.vars.horizontal?"offsetWidth":"offsetHeight",c=r.pin[l];r.revert(!0,1),r.adjustPinSpacing(r.pin[l]-c),r.refresh()}}),Q0=1,d1(!0),Ne.forEach(function(r){var l=_r(r.scroller,r._dir),c=r.vars.end==="max"||r._endClamp&&r.end>l,f=r._startClamp&&r.start>=l;(c||f)&&r.setPositions(f?l-1:r.start,c?Math.max(f?l:r.start+1,l):r.end,!0)}),d1(!1),Q0=0,a.forEach(function(r){return r&&r.render&&r.render(-1)}),Pe.forEach(function(r){Ti(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),vb(Ig,1),Md.pause(),Go++,Fi=2,ts(2),Ne.forEach(function(r){return Ti(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Fi=Le.isRefreshing=!1,Yo("refresh")},$0=0,sd=1,Ic,ts=function(t){if(t===2||!Fi&&!Lc){Le.isUpdating=!0,Ic&&Ic.update(0);var n=Ne.length,a=Ei(),r=a-P_>=50,l=n&&Ne[0].scroll();if(sd=$0>l?-1:1,Fi||($0=l),r&&(Va&&!Ld&&a-Va>200&&(Va=0,Yo("scrollEnd")),Mc=P_,P_=a),sd<0){for(zi=n;zi-- >0;)Ne[zi]&&Ne[zi].update(0,r);sd=1}else for(zi=0;zi<n;zi++)Ne[zi]&&Ne[zi].update(0,r);Le.isUpdating=!1}Jc=0},tg=[hb,db,Gg,Hg,Ia+Fc,Ia+Oc,Ia+zc,Ia+Pc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],od=tg.concat([Bo,Ho,"boxSizing","max"+pu,"max"+Vg,"position",Ia,Kn,Kn+zc,Kn+Oc,Kn+Fc,Kn+Pc]),LN=function(t,n,a){au(a);var r=t._gsap;if(r.spacerIsNative)au(r.spacerState);else if(t._gsap.swappedIn){var l=n.parentNode;l&&(l.insertBefore(t,n),l.removeChild(n))}t._gsap.swappedIn=!1},F_=function(t,n,a,r){if(!t._gsap.swappedIn){for(var l=tg.length,c=n.style,f=t.style,p;l--;)p=tg[l],c[p]=a[p];c.position=a.position==="absolute"?"absolute":"relative",a.display==="inline"&&(c.display="inline-block"),f[Gg]=f[Hg]="auto",c.flexBasis=a.flexBasis||"auto",c.overflow="visible",c.boxSizing="border-box",c[Bo]=Ed(t,Ii)+ti,c[Ho]=Ed(t,ei)+ti,c[Kn]=f[Ia]=f[db]=f[hb]="0",au(r),f[Bo]=f["max"+pu]=a[Bo],f[Ho]=f["max"+Vg]=a[Ho],f[Kn]=a[Kn],t.parentNode!==n&&(t.parentNode.insertBefore(n,t),n.appendChild(t)),t._gsap.swappedIn=!0}},ON=/([A-Z])/g,au=function(t){if(t){var n=t.t.style,a=t.length,r=0,l,c;for((t.t._gsap||te.core.getCache(t.t)).uncache=1;r<a;r+=2)c=t[r+1],l=t[r],c?n[l]=c:n[l]&&n.removeProperty(l.replace(ON,"-$1").toLowerCase())}},Wh=function(t){for(var n=od.length,a=t.style,r=[],l=0;l<n;l++)r.push(od[l],a[od[l]]);return r.t=t,r},PN=function(t,n,a){for(var r=[],l=t.length,c=a?8:0,f;c<l;c+=2)f=t[c],r.push(f,f in n?n[f]:t[c+1]);return r.t=t.t,r},ld={left:0,top:0},p1=function(t,n,a,r,l,c,f,p,d,_,v,g,x,M){Ti(t)&&(t=t(p)),da(t)&&t.substr(0,3)==="max"&&(t=g+(t.charAt(4)==="="?ad("0"+t.substr(3),a):0));var E=x?x.time():0,S,y,A;if(x&&x.seek(0),isNaN(t)||(t=+t),Tc(t))x&&(t=te.utils.mapRange(x.scrollTrigger.start,x.scrollTrigger.end,0,g,t)),f&&rd(f,a,r,!0);else{Ti(n)&&(n=n(p));var D=(t||"0").split(" "),C,P,N,w;A=qi(n,p)||en,C=Zr(A)||{},(!C||!C.left&&!C.top)&&Ba(A).display==="none"&&(w=A.style.display,A.style.display="block",C=Zr(A),w?A.style.display=w:A.style.removeProperty("display")),P=ad(D[0],C[r.d]),N=ad(D[1]||"0",a),t=C[r.p]-d[r.p]-_+P+l-N,f&&rd(f,N,r,a-N<20||f._isStart&&N>20),a-=a-N}if(M&&(p[M]=t||-.001,t<0&&(t=0)),c){var T=t+a,O=c._isStart;S="scroll"+r.d2,rd(c,T,r,O&&T>20||!O&&(v?Math.max(en[S],_a[S]):c.parentNode[S])<=T+1),v&&(d=Zr(f),v&&(c.style[r.op.p]=d[r.op.p]-r.op.m-c._offset+ti))}return x&&A&&(S=Zr(A),x.seek(g),y=Zr(A),x._caScrollDist=S[r.p]-y[r.p],t=t/x._caScrollDist*g),x&&x.seek(E),x?t:Math.round(t)},zN=/(webkit|moz|length|cssText|inset)/i,m1=function(t,n,a,r){if(t.parentNode!==n){var l=t.style,c,f;if(n===en){t._stOrig=l.cssText,f=Ba(t);for(c in f)!+c&&!zN.test(c)&&f[c]&&typeof l[c]=="string"&&c!=="0"&&(l[c]=f[c]);l.top=a,l.left=r}else l.cssText=t._stOrig;te.core.getCache(t).uncache=1,n.appendChild(t)}},Sb=function(t,n,a){var r=n,l=r;return function(c){var f=Math.round(t());return f!==r&&f!==l&&Math.abs(f-r)>3&&Math.abs(f-l)>3&&(c=f,a&&a()),l=r,r=Math.round(c),r}},Yh=function(t,n,a){var r={};r[n.p]="+="+a,te.set(t,r)},_1=function(t,n){var a=Js(t,n),r="_scroll"+n.p2,l=function c(f,p,d,_,v){var g=c.tween,x=p.onComplete,M={};d=d||a();var E=Sb(a,d,function(){g.kill(),c.tween=0});return v=_&&v||0,_=_||f-d,g&&g.kill(),p[r]=f,p.inherit=!1,p.modifiers=M,M[r]=function(){return E(d+_*g.ratio+v*g.ratio*g.ratio)},p.onUpdate=function(){Pe.cache++,c.tween&&ts()},p.onComplete=function(){c.tween=0,x&&x.call(g)},g=c.tween=te.to(t,p),g};return t[r]=a,a.wheelHandler=function(){return l.tween&&l.tween.kill()&&(l.tween=0)},oi(t,"wheel",a.wheelHandler),Le.isTouch&&oi(t,"touchmove",a.wheelHandler),l},Le=(function(){function o(n,a){Wl||o.register(te)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),K0(this),this.init(n,a)}var t=o.prototype;return t.init=function(a,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ec){this.update=this.refresh=this.kill=cr;return}a=u1(da(a)||Tc(a)||a.nodeType?{trigger:a}:a,kh);var l=a,c=l.onUpdate,f=l.toggleClass,p=l.id,d=l.onToggle,_=l.onRefresh,v=l.scrub,g=l.trigger,x=l.pin,M=l.pinSpacing,E=l.invalidateOnRefresh,S=l.anticipatePin,y=l.onScrubComplete,A=l.onSnapComplete,D=l.once,C=l.snap,P=l.pinReparent,N=l.pinSpacer,w=l.containerAnimation,T=l.fastScrollEnd,O=l.preventOverlaps,B=a.horizontal||a.containerAnimation&&a.horizontal!==!1?Ii:ei,G=!v&&v!==0,k=qi(a.scroller||Oe),et=te.core.getCache(k),tt=Xo(k),X=("pinType"in a?a.pinType:qs(k,"pinType")||tt&&"fixed")==="fixed",F=[a.onEnter,a.onLeave,a.onEnterBack,a.onLeaveBack],H=G&&a.toggleActions.split(" "),J="markers"in a?a.markers:kh.markers,ft=tt?0:parseFloat(Ba(k)["border"+B.p2+pu])||0,V=this,I=a.onRefreshInit&&function(){return a.onRefreshInit(V)},K=AN(k,tt,B),xt=RN(k,tt),Mt=0,Ut=0,it=0,vt=Js(k,B),Et,It,ne,Zt,ye,qt,ie,ve,se,ut,we,pn,j,ge,me,ze,Lt,Me,z,R,Q,_t,bt,zt,Dt,dt,pt,Bt,Ht,Ft,Ot,Gt,ce,de,Y,Rt,mt,Vt,Pt;if(V._startClamp=V._endClamp=!1,V._dir=B,S*=45,V.scroller=k,V.scroll=w?w.time.bind(w):vt,Zt=vt(),V.vars=a,r=r||a.animation,"refreshPriority"in a&&(ab=1,a.refreshPriority===-9999&&(Ic=V)),et.tweenScroll=et.tweenScroll||{top:_1(k,ei),left:_1(k,Ii)},V.tweenTo=Et=et.tweenScroll[B.p],V.scrubDuration=function(wt){ce=Tc(wt)&&wt,ce?Gt?Gt.duration(wt):Gt=te.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ce,paused:!0,onComplete:function(){return y&&y(V)}}):(Gt&&Gt.progress(1).kill(),Gt=0)},r&&(r.vars.lazy=!1,r._initted&&!V.isReverted||r.vars.immediateRender!==!1&&a.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),V.animation=r.pause(),r.scrollTrigger=V,V.scrubDuration(v),Ft=0,p||(p=r.vars.id)),C&&((!Ro(C)||C.push)&&(C={snapTo:C}),"scrollBehavior"in en.style&&te.set(tt?[en,_a]:k,{scrollBehavior:"auto"}),Pe.forEach(function(wt){return Ti(wt)&&wt.target===(tt?ln.scrollingElement||_a:k)&&(wt.smooth=!1)}),ne=Ti(C.snapTo)?C.snapTo:C.snapTo==="labels"?wN(r):C.snapTo==="labelsDirectional"?DN(r):C.directional!==!1?function(wt,re){return kg(C.snapTo)(wt,Ei()-Ut<500?0:re.direction)}:te.utils.snap(C.snapTo),de=C.duration||{min:.1,max:2},de=Ro(de)?Nc(de.min,de.max):Nc(de,de),Y=te.delayedCall(C.delay||ce/2||.1,function(){var wt=vt(),re=Ei()-Ut<500,Qt=Et.tween;if((re||Math.abs(V.getVelocity())<10)&&!Qt&&!Ld&&Mt!==wt){var fe=(wt-qt)/ge,Tn=r&&!G?r.totalProgress():fe,Re=re?0:(Tn-Ot)/(Ei()-Mc)*1e3||0,mn=te.utils.clamp(-fe,1-fe,kl(Re/2)*Re/.185),je=fe+(C.inertia===!1?0:mn),xe,be,Fe=C,kn=Fe.onStart,cn=Fe.onInterrupt,Xn=Fe.onComplete;if(xe=ne(je,V),Tc(xe)||(xe=je),be=Math.max(0,Math.round(qt+xe*ge)),wt<=ie&&wt>=qt&&be!==wt){if(Qt&&!Qt._initted&&Qt.data<=kl(be-wt))return;C.inertia===!1&&(mn=xe-fe),Et(be,{duration:de(kl(Math.max(kl(je-Tn),kl(xe-Tn))*.185/Re/.05||0)),ease:C.ease||"power3",data:kl(be-wt),onInterrupt:function(){return Y.restart(!0)&&cn&&Vl(V,cn)},onComplete:function(){V.update(),Mt=vt(),r&&!G&&(Gt?Gt.resetTo("totalProgress",xe,r._tTime/r._tDur):r.progress(xe)),Ft=Ot=r&&!G?r.totalProgress():V.progress,A&&A(V),Xn&&Vl(V,Xn)}},wt,mn*ge,be-wt-mn*ge),kn&&Vl(V,kn,Et.tween)}}else V.isActive&&Mt!==wt&&Y.restart(!0)}).pause()),p&&(J0[p]=V),g=V.trigger=qi(g||x!==!0&&x),Pt=g&&g._gsap&&g._gsap.stRevert,Pt&&(Pt=Pt(V)),x=x===!0?g:qi(x),da(f)&&(f={targets:g,className:f}),x&&(M===!1||M===Ia||(M=!M&&x.parentNode&&x.parentNode.style&&Ba(x.parentNode).display==="flex"?!1:Kn),V.pin=x,It=te.core.getCache(x),It.spacer?me=It.pinState:(N&&(N=qi(N),N&&!N.nodeType&&(N=N.current||N.nativeElement),It.spacerIsNative=!!N,N&&(It.spacerState=Wh(N))),It.spacer=Me=N||ln.createElement("div"),Me.classList.add("pin-spacer"),p&&Me.classList.add("pin-spacer-"+p),It.pinState=me=Wh(x)),a.force3D!==!1&&te.set(x,{force3D:!0}),V.spacer=Me=It.spacer,Ht=Ba(x),zt=Ht[M+B.os2],R=te.getProperty(x),Q=te.quickSetter(x,B.a,ti),F_(x,Me,Ht),Lt=Wh(x)),J){pn=Ro(J)?u1(J,c1):c1,ut=Xh("scroller-start",p,k,B,pn,0),we=Xh("scroller-end",p,k,B,pn,0,ut),z=ut["offset"+B.op.d2];var Tt=qi(qs(k,"content")||k);ve=this.markerStart=Xh("start",p,Tt,B,pn,z,0,w),se=this.markerEnd=Xh("end",p,Tt,B,pn,z,0,w),w&&(Vt=te.quickSetter([ve,se],B.a,ti)),!X&&!(Sr.length&&qs(k,"fixedMarkers")===!0)&&(CN(tt?en:k),te.set([ut,we],{force3D:!0}),dt=te.quickSetter(ut,B.a,ti),Bt=te.quickSetter(we,B.a,ti))}if(w){var Ct=w.vars.onUpdate,Nt=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){V.update(0,0,1),Ct&&Ct.apply(w,Nt||[])})}if(V.previous=function(){return Ne[Ne.indexOf(V)-1]},V.next=function(){return Ne[Ne.indexOf(V)+1]},V.revert=function(wt,re){if(!re)return V.kill(!0);var Qt=wt!==!1||!V.enabled,fe=Mi;Qt!==V.isReverted&&(Qt&&(Rt=Math.max(vt(),V.scroll.rec||0),it=V.progress,mt=r&&r.progress()),ve&&[ve,se,ut,we].forEach(function(Tn){return Tn.style.display=Qt?"none":"block"}),Qt&&(Mi=V,V.update(Qt)),x&&(!P||!V.isActive)&&(Qt?LN(x,Me,me):F_(x,Me,Ba(x),Dt)),Qt||V.update(Qt),Mi=fe,V.isReverted=Qt)},V.refresh=function(wt,re,Qt,fe){if(!((Mi||!V.enabled)&&!re)){if(x&&wt&&Va){oi(o,"scrollEnd",mb);return}!Fi&&I&&I(V),Mi=V,Et.tween&&!Qt&&(Et.tween.kill(),Et.tween=0),Gt&&Gt.pause(),E&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Wt){return Wt.vars.immediateRender&&Wt.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),V.isReverted||V.revert(!0,!0),V._subPinOffset=!1;var Tn=K(),Re=xt(),mn=w?w.duration():_r(k,B),je=ge<=.01||!ge,xe=0,be=fe||0,Fe=Ro(Qt)?Qt.end:a.end,kn=a.endTrigger||g,cn=Ro(Qt)?Qt.start:a.start||(a.start===0||!g?0:x?"0 0":"0 100%"),Xn=V.pinnedContainer=a.pinnedContainer&&qi(a.pinnedContainer,V),_i=g&&Math.max(0,Ne.indexOf(V))||0,Sn=_i,Dn,yn,gi,Ta,Mn,De,Di,U,Z,st,nt,at,kt;for(J&&Ro(Qt)&&(at=te.getProperty(ut,B.p),kt=te.getProperty(we,B.p));Sn-- >0;)De=Ne[Sn],De.end||De.refresh(0,1)||(Mi=V),Di=De.pin,Di&&(Di===g||Di===x||Di===Xn)&&!De.isReverted&&(st||(st=[]),st.unshift(De),De.revert(!0,!0)),De!==Ne[Sn]&&(_i--,Sn--);for(Ti(cn)&&(cn=cn(V)),cn=r1(cn,"start",V),qt=p1(cn,g,Tn,B,vt(),ve,ut,V,Re,ft,X,mn,w,V._startClamp&&"_startClamp")||(x?-.001:0),Ti(Fe)&&(Fe=Fe(V)),da(Fe)&&!Fe.indexOf("+=")&&(~Fe.indexOf(" ")?Fe=(da(cn)?cn.split(" ")[0]:"")+Fe:(xe=ad(Fe.substr(2),Tn),Fe=da(cn)?cn:(w?te.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,qt):qt)+xe,kn=g)),Fe=r1(Fe,"end",V),ie=Math.max(qt,p1(Fe||(kn?"100% 0":mn),kn,Tn,B,vt()+xe,se,we,V,Re,ft,X,mn,w,V._endClamp&&"_endClamp"))||-.001,xe=0,Sn=_i;Sn--;)De=Ne[Sn]||{},Di=De.pin,Di&&De.start-De._pinPush<=qt&&!w&&De.end>0&&(Dn=De.end-(V._startClamp?Math.max(0,De.start):De.start),(Di===g&&De.start-De._pinPush<qt||Di===Xn)&&isNaN(cn)&&(xe+=Dn*(1-De.progress)),Di===x&&(be+=Dn));if(qt+=xe,ie+=xe,V._startClamp&&(V._startClamp+=xe),V._endClamp&&!Fi&&(V._endClamp=ie||-.001,ie=Math.min(ie,_r(k,B))),ge=ie-qt||(qt-=.01)&&.001,je&&(it=te.utils.clamp(0,1,te.utils.normalize(qt,ie,Rt))),V._pinPush=be,ve&&xe&&(Dn={},Dn[B.a]="+="+xe,Xn&&(Dn[B.p]="-="+vt()),te.set([ve,se],Dn)),x&&!(Q0&&V.end>=_r(k,B)))Dn=Ba(x),Ta=B===ei,gi=vt(),_t=parseFloat(R(B.a))+be,!mn&&ie>1&&(nt=(tt?ln.scrollingElement||_a:k).style,nt={style:nt,value:nt["overflow"+B.a.toUpperCase()]},tt&&Ba(en)["overflow"+B.a.toUpperCase()]!=="scroll"&&(nt.style["overflow"+B.a.toUpperCase()]="scroll")),F_(x,Me,Dn),Lt=Wh(x),yn=Zr(x,!0),U=X&&Js(k,Ta?Ii:ei)(),M?(Dt=[M+B.os2,ge+be+ti],Dt.t=Me,Sn=M===Kn?Ed(x,B)+ge+be:0,Sn&&(Dt.push(B.d,Sn+ti),Me.style.flexBasis!=="auto"&&(Me.style.flexBasis=Sn+ti)),au(Dt),Xn&&Ne.forEach(function(Wt){Wt.pin===Xn&&Wt.vars.pinSpacing!==!1&&(Wt._subPinOffset=!0)}),X&&vt(Rt)):(Sn=Ed(x,B),Sn&&Me.style.flexBasis!=="auto"&&(Me.style.flexBasis=Sn+ti)),X&&(Mn={top:yn.top+(Ta?gi-qt:U)+ti,left:yn.left+(Ta?U:gi-qt)+ti,boxSizing:"border-box",position:"fixed"},Mn[Bo]=Mn["max"+pu]=Math.ceil(yn.width)+ti,Mn[Ho]=Mn["max"+Vg]=Math.ceil(yn.height)+ti,Mn[Ia]=Mn[Ia+zc]=Mn[Ia+Oc]=Mn[Ia+Fc]=Mn[Ia+Pc]="0",Mn[Kn]=Dn[Kn],Mn[Kn+zc]=Dn[Kn+zc],Mn[Kn+Oc]=Dn[Kn+Oc],Mn[Kn+Fc]=Dn[Kn+Fc],Mn[Kn+Pc]=Dn[Kn+Pc],ze=PN(me,Mn,P),Fi&&vt(0)),r?(Z=r._initted,L_(1),r.render(r.duration(),!0,!0),bt=R(B.a)-_t+ge+be,pt=Math.abs(ge-bt)>1,X&&pt&&ze.splice(ze.length-2,2),r.render(0,!0,!0),Z||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),L_(0)):bt=ge,nt&&(nt.value?nt.style["overflow"+B.a.toUpperCase()]=nt.value:nt.style.removeProperty("overflow-"+B.a));else if(g&&vt()&&!w)for(yn=g.parentNode;yn&&yn!==en;)yn._pinOffset&&(qt-=yn._pinOffset,ie-=yn._pinOffset),yn=yn.parentNode;st&&st.forEach(function(Wt){return Wt.revert(!1,!0)}),V.start=qt,V.end=ie,Zt=ye=Fi?Rt:vt(),!w&&!Fi&&(Zt<Rt&&vt(Rt),V.scroll.rec=0),V.revert(!1,!0),Ut=Ei(),Y&&(Mt=-1,Y.restart(!0)),Mi=0,r&&G&&(r._initted||mt)&&r.progress()!==mt&&r.progress(mt||0,!0).render(r.time(),!0,!0),(je||it!==V.progress||w||E||r&&!r._initted)&&(r&&!G&&(r._initted||it||r.vars.immediateRender!==!1)&&r.totalProgress(w&&qt<-.001&&!it?te.utils.normalize(qt,ie,0):it,!0),V.progress=je||(Zt-qt)/ge===it?0:it),x&&M&&(Me._pinOffset=Math.round(V.progress*bt)),Gt&&Gt.invalidate(),isNaN(at)||(at-=te.getProperty(ut,B.p),kt-=te.getProperty(we,B.p),Yh(ut,B,at),Yh(ve,B,at-(fe||0)),Yh(we,B,kt),Yh(se,B,kt-(fe||0))),je&&!Fi&&V.update(),_&&!Fi&&!j&&(j=!0,_(V),j=!1)}},V.getVelocity=function(){return(vt()-ye)/(Ei()-Mc)*1e3||0},V.endAnimation=function(){_c(V.callbackAnimation),r&&(Gt?Gt.progress(1):r.paused()?G||_c(r,V.direction<0,1):_c(r,r.reversed()))},V.labelToScroll=function(wt){return r&&r.labels&&(qt||V.refresh()||qt)+r.labels[wt]/r.duration()*ge||0},V.getTrailing=function(wt){var re=Ne.indexOf(V),Qt=V.direction>0?Ne.slice(0,re).reverse():Ne.slice(re+1);return(da(wt)?Qt.filter(function(fe){return fe.vars.preventOverlaps===wt}):Qt).filter(function(fe){return V.direction>0?fe.end<=qt:fe.start>=ie})},V.update=function(wt,re,Qt){if(!(w&&!Qt&&!wt)){var fe=Fi===!0?Rt:V.scroll(),Tn=wt?0:(fe-qt)/ge,Re=Tn<0?0:Tn>1?1:Tn||0,mn=V.progress,je,xe,be,Fe,kn,cn,Xn,_i;if(re&&(ye=Zt,Zt=w?vt():fe,C&&(Ot=Ft,Ft=r&&!G?r.totalProgress():Re)),S&&x&&!Mi&&!Bh&&Va&&(!Re&&qt<fe+(fe-ye)/(Ei()-Mc)*S?Re=1e-4:Re===1&&ie>fe+(fe-ye)/(Ei()-Mc)*S&&(Re=.9999)),Re!==mn&&V.enabled){if(je=V.isActive=!!Re&&Re<1,xe=!!mn&&mn<1,cn=je!==xe,kn=cn||!!Re!=!!mn,V.direction=Re>mn?1:-1,V.progress=Re,kn&&!Mi&&(be=Re&&!mn?0:Re===1?1:mn===1?2:3,G&&(Fe=!cn&&H[be+1]!=="none"&&H[be+1]||H[be],_i=r&&(Fe==="complete"||Fe==="reset"||Fe in r))),O&&(cn||_i)&&(_i||v||!r)&&(Ti(O)?O(V):V.getTrailing(O).forEach(function(gi){return gi.endAnimation()})),G||(Gt&&!Mi&&!Bh?(Gt._dp._time-Gt._start!==Gt._time&&Gt.render(Gt._dp._time-Gt._start),Gt.resetTo?Gt.resetTo("totalProgress",Re,r._tTime/r._tDur):(Gt.vars.totalProgress=Re,Gt.invalidate().restart())):r&&r.totalProgress(Re,!!(Mi&&(Ut||wt)))),x){if(wt&&M&&(Me.style[M+B.os2]=zt),!X)Q(bc(_t+bt*Re));else if(kn){if(Xn=!wt&&Re>mn&&ie+1>fe&&fe+1>=_r(k,B),P)if(!wt&&(je||Xn)){var Sn=Zr(x,!0),Dn=fe-qt;m1(x,en,Sn.top+(B===ei?Dn:0)+ti,Sn.left+(B===ei?0:Dn)+ti)}else m1(x,Me);au(je||Xn?ze:Lt),pt&&Re<1&&je||Q(_t+(Re===1&&!Xn?bt:0))}}C&&!Et.tween&&!Mi&&!Bh&&Y.restart(!0),f&&(cn||D&&Re&&(Re<1||!O_))&&Qc(f.targets).forEach(function(gi){return gi.classList[je||D?"add":"remove"](f.className)}),c&&!G&&!wt&&c(V),kn&&!Mi?(G&&(_i&&(Fe==="complete"?r.pause().totalProgress(1):Fe==="reset"?r.restart(!0).pause():Fe==="restart"?r.restart(!0):r[Fe]()),c&&c(V)),(cn||!O_)&&(d&&cn&&Vl(V,d),F[be]&&Vl(V,F[be]),D&&(Re===1?V.kill(!1,1):F[be]=0),cn||(be=Re===1?1:3,F[be]&&Vl(V,F[be]))),T&&!je&&Math.abs(V.getVelocity())>(Tc(T)?T:2500)&&(_c(V.callbackAnimation),Gt?Gt.progress(1):_c(r,Fe==="reverse"?1:!Re,1))):G&&c&&!Mi&&c(V)}if(Bt){var yn=w?fe/w.duration()*(w._caScrollDist||0):fe;dt(yn+(ut._isFlipped?1:0)),Bt(yn)}Vt&&Vt(-fe/w.duration()*(w._caScrollDist||0))}},V.enable=function(wt,re){V.enabled||(V.enabled=!0,oi(k,"resize",Ac),tt||oi(k,"scroll",Xl),I&&oi(o,"refreshInit",I),wt!==!1&&(V.progress=it=0,Zt=ye=Mt=vt()),re!==!1&&V.refresh())},V.getTween=function(wt){return wt&&Et?Et.tween:Gt},V.setPositions=function(wt,re,Qt,fe){if(w){var Tn=w.scrollTrigger,Re=w.duration(),mn=Tn.end-Tn.start;wt=Tn.start+mn*wt/Re,re=Tn.start+mn*re/Re}V.refresh(!1,!1,{start:s1(wt,Qt&&!!V._startClamp),end:s1(re,Qt&&!!V._endClamp)},fe),V.update()},V.adjustPinSpacing=function(wt){if(Dt&&wt){var re=Dt.indexOf(B.d)+1;Dt[re]=parseFloat(Dt[re])+wt+ti,Dt[1]=parseFloat(Dt[1])+wt+ti,au(Dt)}},V.disable=function(wt,re){if(wt!==!1&&V.revert(!0,!0),V.enabled&&(V.enabled=V.isActive=!1,re||Gt&&Gt.pause(),Rt=0,It&&(It.uncache=1),I&&si(o,"refreshInit",I),Y&&(Y.pause(),Et.tween&&Et.tween.kill()&&(Et.tween=0)),!tt)){for(var Qt=Ne.length;Qt--;)if(Ne[Qt].scroller===k&&Ne[Qt]!==V)return;si(k,"resize",Ac),tt||si(k,"scroll",Xl)}},V.kill=function(wt,re){V.disable(wt,re),Gt&&!re&&Gt.kill(),p&&delete J0[p];var Qt=Ne.indexOf(V);Qt>=0&&Ne.splice(Qt,1),Qt===zi&&sd>0&&zi--,Qt=0,Ne.forEach(function(fe){return fe.scroller===V.scroller&&(Qt=1)}),Qt||Fi||(V.scroll.rec=0),r&&(r.scrollTrigger=null,wt&&r.revert({kill:!1}),re||r.kill()),ve&&[ve,se,ut,we].forEach(function(fe){return fe.parentNode&&fe.parentNode.removeChild(fe)}),Ic===V&&(Ic=0),x&&(It&&(It.uncache=1),Qt=0,Ne.forEach(function(fe){return fe.pin===x&&Qt++}),Qt||(It.spacer=0)),a.onKill&&a.onKill(V)},Ne.push(V),V.enable(!1,!1),Pt&&Pt(V),r&&r.add&&!ge){var oe=V.update;V.update=function(){V.update=oe,Pe.cache++,qt||ie||V.refresh()},te.delayedCall(.01,V.update),ge=.01,qt=ie=0}else V.refresh();x&&NN()},o.register=function(a){return Wl||(te=a||ub(),lb()&&window.document&&o.enable(),Wl=Ec),Wl},o.defaults=function(a){if(a)for(var r in a)kh[r]=a[r];return kh},o.disable=function(a,r){Ec=0,Ne.forEach(function(c){return c[r?"kill":"disable"](a)}),si(Oe,"wheel",Xl),si(ln,"scroll",Xl),clearInterval(Ih),si(ln,"touchcancel",cr),si(en,"touchstart",cr),Gh(si,ln,"pointerdown,touchstart,mousedown",o1),Gh(si,ln,"pointerup,touchend,mouseup",l1),Md.kill(),Hh(si);for(var l=0;l<Pe.length;l+=3)Vh(si,Pe[l],Pe[l+1]),Vh(si,Pe[l],Pe[l+2])},o.enable=function(){if(Oe=window,ln=document,_a=ln.documentElement,en=ln.body,te){if(Qc=te.utils.toArray,Nc=te.utils.clamp,K0=te.core.context||cr,L_=te.core.suppressOverwrites||cr,Ig=Oe.history.scrollRestoration||"auto",$0=Oe.pageYOffset||0,te.core.globals("ScrollTrigger",o),en){Ec=1,iu=document.createElement("div"),iu.style.height="100vh",iu.style.position="absolute",xb(),TN(),Gn.register(te),o.isTouch=Gn.isTouch,zs=Gn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Z0=Gn.isTouch===1,oi(Oe,"wheel",Xl),Fg=[Oe,ln,_a,en],te.matchMedia?(o.matchMedia=function(_){var v=te.matchMedia(),g;for(g in _)v.add(g,_[g]);return v},te.addEventListener("matchMediaInit",function(){gb(),Xg()}),te.addEventListener("matchMediaRevert",function(){return _b()}),te.addEventListener("matchMedia",function(){Oo(0,1),Yo("matchMedia")}),te.matchMedia().add("(orientation: portrait)",function(){return z_(),z_})):console.warn("Requires GSAP 3.11.0 or later"),z_(),oi(ln,"scroll",Xl);var a=en.hasAttribute("style"),r=en.style,l=r.borderTopStyle,c=te.core.Animation.prototype,f,p;for(c.revert||Object.defineProperty(c,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",f=Zr(en),ei.m=Math.round(f.top+ei.sc())||0,Ii.m=Math.round(f.left+Ii.sc())||0,l?r.borderTopStyle=l:r.removeProperty("border-top-style"),a||(en.setAttribute("style",""),en.removeAttribute("style")),Ih=setInterval(f1,250),te.delayedCall(.5,function(){return Bh=0}),oi(ln,"touchcancel",cr),oi(en,"touchstart",cr),Gh(oi,ln,"pointerdown,touchstart,mousedown",o1),Gh(oi,ln,"pointerup,touchend,mouseup",l1),j0=te.utils.checkPrefix("transform"),od.push(j0),Wl=Ei(),Md=te.delayedCall(.2,Oo).pause(),Yl=[ln,"visibilitychange",function(){var _=Oe.innerWidth,v=Oe.innerHeight;ln.hidden?(i1=_,a1=v):(i1!==_||a1!==v)&&Ac()},ln,"DOMContentLoaded",Oo,Oe,"load",Oo,Oe,"resize",Ac],Hh(oi),Ne.forEach(function(_){return _.enable(0,1)}),p=0;p<Pe.length;p+=3)Vh(si,Pe[p],Pe[p+1]),Vh(si,Pe[p],Pe[p+2])}else if(ln){var d=function _(){o.enable(),ln.removeEventListener("DOMContentLoaded",_)};ln.addEventListener("DOMContentLoaded",d)}}},o.config=function(a){"limitCallbacks"in a&&(O_=!!a.limitCallbacks);var r=a.syncInterval;r&&clearInterval(Ih)||(Ih=r)&&setInterval(f1,r),"ignoreMobileResize"in a&&(Z0=o.isTouch===1&&a.ignoreMobileResize),"autoRefreshEvents"in a&&(Hh(si)||Hh(oi,a.autoRefreshEvents||"none"),rb=(a.autoRefreshEvents+"").indexOf("resize")===-1)},o.scrollerProxy=function(a,r){var l=qi(a),c=Pe.indexOf(l),f=Xo(l);~c&&Pe.splice(c,f?6:2),r&&(f?Sr.unshift(Oe,r,en,r,_a,r):Sr.unshift(l,r))},o.clearMatchMedia=function(a){Ne.forEach(function(r){return r._ctx&&r._ctx.query===a&&r._ctx.kill(!0,!0)})},o.isInViewport=function(a,r,l){var c=(da(a)?qi(a):a).getBoundingClientRect(),f=c[l?Bo:Ho]*r||0;return l?c.right-f>0&&c.left+f<Oe.innerWidth:c.bottom-f>0&&c.top+f<Oe.innerHeight},o.positionInViewport=function(a,r,l){da(a)&&(a=qi(a));var c=a.getBoundingClientRect(),f=c[l?Bo:Ho],p=r==null?f/2:r in bd?bd[r]*f:~r.indexOf("%")?parseFloat(r)*f/100:parseFloat(r)||0;return l?(c.left+p)/Oe.innerWidth:(c.top+p)/Oe.innerHeight},o.killAll=function(a){if(Ne.slice(0).forEach(function(l){return l.vars.id!=="ScrollSmoother"&&l.kill()}),a!==!0){var r=Wo.killAll||[];Wo={},r.forEach(function(l){return l()})}},o})();Le.version="3.15.0";Le.saveStyles=function(o){return o?Qc(o).forEach(function(t){if(t&&t.style){var n=ha.indexOf(t);n>=0&&ha.splice(n,5),ha.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),te.core.getCache(t),K0())}}):ha};Le.revert=function(o,t){return Xg(!o,t)};Le.create=function(o,t){return new Le(o,t)};Le.refresh=function(o){return o?Ac(!0):(Wl||Le.register())&&Oo(!0)};Le.update=function(o){return++Pe.cache&&ts(o===!0?2:0)};Le.clearScrollMemory=vb;Le.maxScroll=function(o,t){return _r(o,t?Ii:ei)};Le.getScrollFunc=function(o,t){return Js(qi(o),t?Ii:ei)};Le.getById=function(o){return J0[o]};Le.getAll=function(){return Ne.filter(function(o){return o.vars.id!=="ScrollSmoother"})};Le.isScrolling=function(){return!!Va};Le.snapDirectional=kg;Le.addEventListener=function(o,t){var n=Wo[o]||(Wo[o]=[]);~n.indexOf(t)||n.push(t)};Le.removeEventListener=function(o,t){var n=Wo[o],a=n&&n.indexOf(t);a>=0&&n.splice(a,1)};Le.batch=function(o,t){var n=[],a={},r=t.interval||.016,l=t.batchMax||1e9,c=function(d,_){var v=[],g=[],x=te.delayedCall(r,function(){_(v,g),v=[],g=[]}).pause();return function(M){v.length||x.restart(!0),v.push(M.trigger),g.push(M),l<=v.length&&x.progress(1)}},f;for(f in t)a[f]=f.substr(0,2)==="on"&&Ti(t[f])&&f!=="onRefreshInit"?c(f,t[f]):t[f];return Ti(l)&&(l=l(),oi(Le,"refresh",function(){return l=t.batchMax()})),Qc(o).forEach(function(p){var d={};for(f in a)d[f]=a[f];d.trigger=p,n.push(Le.create(d))}),n};var g1=function(t,n,a,r){return n>r?t(r):n<0&&t(0),a>r?(r-n)/(a-n):a<0?n/(n-a):1},I_=function o(t,n){n===!0?t.style.removeProperty("touch-action"):t.style.touchAction=n===!0?"auto":n?"pan-"+n+(Gn.isTouch?" pinch-zoom":""):"none",t===_a&&o(en,n)},qh={auto:1,scroll:1},FN=function(t){var n=t.event,a=t.target,r=t.axis,l=(n.changedTouches?n.changedTouches[0]:n).target,c=l._gsap||te.core.getCache(l),f=Ei(),p;if(!c._isScrollT||f-c._isScrollT>2e3){for(;l&&l!==en&&(l.scrollHeight<=l.clientHeight&&l.scrollWidth<=l.clientWidth||!(qh[(p=Ba(l)).overflowY]||qh[p.overflowX]));)l=l.parentNode;c._isScroll=l&&l!==a&&!Xo(l)&&(qh[(p=Ba(l)).overflowY]||qh[p.overflowX]),c._isScrollT=f}(c._isScroll||r==="x")&&(n.stopPropagation(),n._gsapAllow=!0)},yb=function(t,n,a,r){return Gn.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:n,onWheel:r=r&&FN,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return a&&oi(ln,Gn.eventTypes[0],x1,!1,!0)},onDisable:function(){return si(ln,Gn.eventTypes[0],x1,!0)}})},IN=/(input|label|select|textarea)/i,v1,x1=function(t){var n=IN.test(t.target.tagName);(n||v1)&&(t._gsapAllow=!0,v1=n)},BN=function(t){Ro(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var n=t,a=n.normalizeScrollX,r=n.momentum,l=n.allowNestedScroll,c=n.onRelease,f,p,d=qi(t.target)||_a,_=te.core.globals().ScrollSmoother,v=_&&_.get(),g=zs&&(t.content&&qi(t.content)||v&&t.content!==!1&&!v.smooth()&&v.content()),x=Js(d,ei),M=Js(d,Ii),E=1,S=(Gn.isTouch&&Oe.visualViewport?Oe.visualViewport.scale*Oe.visualViewport.width:Oe.outerWidth)/Oe.innerWidth,y=0,A=Ti(r)?function(){return r(f)}:function(){return r||2.8},D,C,P=yb(d,t.type,!0,l),N=function(){return C=!1},w=cr,T=cr,O=function(){p=_r(d,ei),T=Nc(zs?1:0,p),a&&(w=Nc(0,_r(d,Ii))),D=Go},B=function(){g._gsap.y=bc(parseFloat(g._gsap.y)+x.offset)+"px",g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(g._gsap.y)+", 0, 1)",x.offset=x.cacheID=0},G=function(){if(C){requestAnimationFrame(N);var J=bc(f.deltaY/2),ft=T(x.v-J);if(g&&ft!==x.v+x.offset){x.offset=ft-x.v;var V=bc((parseFloat(g&&g._gsap.y)||0)-x.offset);g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+V+", 0, 1)",g._gsap.y=V+"px",x.cacheID=Pe.cache,ts()}return!0}x.offset&&B(),C=!0},k,et,tt,X,F=function(){O(),k.isActive()&&k.vars.scrollY>p&&(x()>p?k.progress(1)&&x(p):k.resetTo("scrollY",p))};return g&&te.set(g,{y:"+=0"}),t.ignoreCheck=function(H){return zs&&H.type==="touchmove"&&G()||E>1.05&&H.type!=="touchstart"||f.isGesturing||H.touches&&H.touches.length>1},t.onPress=function(){C=!1;var H=E;E=bc((Oe.visualViewport&&Oe.visualViewport.scale||1)/S),k.pause(),H!==E&&I_(d,E>1.01?!0:a?!1:"x"),et=M(),tt=x(),O(),D=Go},t.onRelease=t.onGestureStart=function(H,J){if(x.offset&&B(),!J)X.restart(!0);else{Pe.cache++;var ft=A(),V,I;a&&(V=M(),I=V+ft*.05*-H.velocityX/.227,ft*=g1(M,V,I,_r(d,Ii)),k.vars.scrollX=w(I)),V=x(),I=V+ft*.05*-H.velocityY/.227,ft*=g1(x,V,I,_r(d,ei)),k.vars.scrollY=T(I),k.invalidate().duration(ft).play(.01),(zs&&k.vars.scrollY>=p||V>=p-1)&&te.to({},{onUpdate:F,duration:ft})}c&&c(H)},t.onWheel=function(){k._ts&&k.pause(),Ei()-y>1e3&&(D=0,y=Ei())},t.onChange=function(H,J,ft,V,I){if(Go!==D&&O(),J&&a&&M(w(V[2]===J?et+(H.startX-H.x):M()+J-V[1])),ft){x.offset&&B();var K=I[2]===ft,xt=K?tt+H.startY-H.y:x()+ft-I[1],Mt=T(xt);K&&xt!==Mt&&(tt+=Mt-xt),x(Mt)}(ft||J)&&ts()},t.onEnable=function(){I_(d,a?!1:"x"),Le.addEventListener("refresh",F),oi(Oe,"resize",F),x.smooth&&(x.target.style.scrollBehavior="auto",x.smooth=M.smooth=!1),P.enable()},t.onDisable=function(){I_(d,!0),si(Oe,"resize",F),Le.removeEventListener("refresh",F),P.kill()},t.lockAxis=t.lockAxis!==!1,f=new Gn(t),f.iOS=zs,zs&&!x()&&x(1),zs&&te.ticker.add(cr),X=f._dc,k=te.to(f,{ease:"power4",paused:!0,inherit:!1,scrollX:a?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Sb(x,x(),function(){return k.pause()})},onUpdate:ts,onComplete:X.vars.onComplete}),f};Le.sort=function(o){if(Ti(o))return Ne.sort(o);var t=Oe.pageYOffset||0;return Le.getAll().forEach(function(n){return n._sortY=n.trigger?t+n.trigger.getBoundingClientRect().top:n.start+Oe.innerHeight}),Ne.sort(o||function(n,a){return(n.vars.refreshPriority||0)*-1e6+(n.vars.containerAnimation?1e6:n._sortY)-((a.vars.containerAnimation?1e6:a._sortY)+(a.vars.refreshPriority||0)*-1e6)})};Le.observe=function(o){return new Gn(o)};Le.normalizeScroll=function(o){if(typeof o>"u")return Pi;if(o===!0&&Pi)return Pi.enable();if(o===!1){Pi&&Pi.kill(),Pi=o;return}var t=o instanceof Gn?o:BN(o);return Pi&&Pi.target===t.target&&Pi.kill(),Xo(t.target)&&(Pi=t),t};Le.core={_getVelocityProp:q0,_inputObserver:yb,_scrollers:Pe,_proxies:Sr,bridge:{ss:function(){Va||Yo("scrollStart"),Va=Ei()},ref:function(){return Mi}}};ub()&&te.registerPlugin(Le);const HN="/assets/bottle-DD1fsH__.jpg";Vs.registerPlugin(Le);const gc=[{id:"#hero",x:-1.5,scale:1,rotZ:0},{id:"#advantages",x:0,scale:.85,rotZ:0},{id:"#features",x:1.8,scale:.65,rotZ:-.383},{id:"#product",x:1.5,scale:.75,rotZ:0},{id:"#about",x:0,scale:.25,rotZ:0},{id:"#footer",x:0,scale:0,rotZ:0}],B_=(o,t,n)=>o+(t-o)*n;function GN(){const o=za.useRef(null);return za.useEffect(()=>{const t=o.current,n=new eU({antialias:!0,alpha:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setSize(window.innerWidth,window.innerHeight),t.appendChild(n.domElement);const a=new DR,r=new Fa(38,window.innerWidth/window.innerHeight,.1,100);r.position.set(0,.4,5.5),r.lookAt(0,.4,0),a.add(new iC(16777215,.9));const l=new v_(16777215,1.6);l.position.set(3,5,5),a.add(l);const c=new v_(10092475,.7);c.position.set(-4,2,-3),a.add(c);const f=new v_(16772829,.4);f.position.set(0,-3,4),a.add(f);const p=new No,d=new No,_=new No;p.add(d),d.add(_),a.add(p),p.position.x=gc[0].x,p.scale.setScalar(gc[0].scale),d.rotation.z=gc[0].rotZ;const v=[new pe(0,0),new pe(.36,0),new pe(.37,.06),new pe(.34,.14),new pe(.31,.5),new pe(.3,1.05),new pe(.3,1.42),new pe(.23,1.68),new pe(.13,1.96),new pe(.115,2.3),new pe(.13,2.37),new pe(.09,2.44)],g=new _g(v,80),x=new jR({color:4029008,metalness:.05,roughness:.07,transmission:.55,thickness:.9,transparent:!0,opacity:.88,ior:1.52}),M=new tr(g,x);M.position.y=-1.22,_.add(M);const S=new tC().load(HN);S.wrapS=ud,S.colorSpace=pa;const y=new mg(.308,.308,.88,80,1,!0),A=new dg({map:S,transparent:!0,side:es,depthWrite:!1}),D=new tr(y,A);D.position.y=-.46,_.add(D);const C=Vs.to(d.rotation,{y:Math.PI*2,duration:10,repeat:-1,ease:"none"}),P=Vs.to(_.position,{y:.18,duration:2.4,repeat:-1,yoyo:!0,ease:"sine.inOut"}),N=Le.create({trigger:document.body,start:"top top",end:"bottom bottom",onUpdate:({progress:G})=>{d.rotation.x=(G-.5)*.45}}),w=gc.slice(1).map((G,k)=>{const et=gc[k];return Le.create({trigger:G.id,start:"top bottom",end:"top top",scrub:.6,onUpdate:({progress:tt})=>{p.position.x=B_(et.x,G.x,tt),p.scale.setScalar(B_(et.scale,G.scale,tt)),d.rotation.z=B_(et.rotZ,G.rotZ,tt)}})});let T;const O=()=>{T=requestAnimationFrame(O),n.render(a,r)};O();const B=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",B),()=>{cancelAnimationFrame(T),C.kill(),P.kill(),N.kill(),w.forEach(G=>G.kill()),window.removeEventListener("resize",B),t.contains(n.domElement)&&t.removeChild(n.domElement),n.dispose(),g.dispose(),x.dispose(),y.dispose(),A.dispose(),S.dispose()}},[]),At.jsx("div",{ref:o,className:"fixed inset-0 pointer-events-none z-40","aria-hidden":"true"})}const VN=[{label:"Home",href:"#hero"},{label:"Products",href:"#product"},{label:"About",href:"#about"},{label:"Contact",href:"#footer"}];function kN(){const[o,t]=za.useState(!1),[n,a]=za.useState(!1),[r]=za.useState(0),l=za.useRef(null),c=za.useRef(null);za.useEffect(()=>{o&&l.current&&Vs.fromTo(l.current,{x:"-100%"},{x:"0%",duration:.35,ease:"power2.out"})},[o]),za.useEffect(()=>{n&&c.current&&Vs.fromTo(c.current,{x:"100%"},{x:"0%",duration:.35,ease:"power2.out"})},[n]);const f=za.useCallback(()=>{l.current?Vs.to(l.current,{x:"-100%",duration:.25,ease:"power2.in",onComplete:()=>t(!1)}):t(!1)},[]),p=za.useCallback(()=>{c.current?Vs.to(c.current,{x:"100%",duration:.25,ease:"power2.in",onComplete:()=>a(!1)}):a(!1)},[]);return At.jsxs(At.Fragment,{children:[At.jsxs("nav",{className:"sticky top-0 z-50 h-14 bg-[#0c6338] flex items-center justify-between px-6",children:[At.jsx("button",{onClick:()=>t(!0),className:"flex flex-col gap-[5px] p-1 cursor-pointer group","aria-label":"Open navigation menu",children:[0,1,2].map(d=>At.jsx("span",{className:"block w-6 h-[2px] bg-white rounded-full transition-opacity group-hover:opacity-70"},d))}),At.jsx("span",{className:"font-modak text-[#fffdc7] whitespace-nowrap",style:{fontSize:"36px"},children:"RATISH REIGNS"}),At.jsxs("button",{onClick:()=>a(!0),className:"relative p-1 cursor-pointer hover:opacity-80 transition-opacity","aria-label":`Cart — ${r} item${r!==1?"s":""}`,children:[At.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",children:[At.jsx("path",{d:"M2 3h3l1.5 9.5M5.5 7.5h15l-2 8H7.5",stroke:"white",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"}),At.jsx("circle",{cx:"10",cy:"21",r:"1.5",fill:"white"}),At.jsx("circle",{cx:"18",cy:"21",r:"1.5",fill:"white"})]}),r>0&&At.jsx("span",{className:"absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center font-inter",children:r})]})]}),o&&At.jsxs(At.Fragment,{children:[At.jsx("div",{className:"fixed inset-0 bg-black/50 z-[55] cursor-pointer",onClick:f}),At.jsxs("div",{ref:l,className:"fixed left-0 top-0 h-full w-72 bg-[#0c6338] z-[60] flex flex-col p-8 shadow-2xl",children:[At.jsx("button",{onClick:f,className:"self-end text-white/60 hover:text-white transition-colors mb-10","aria-label":"Close menu",children:At.jsx("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",children:At.jsx("path",{d:"M17 5L5 17M5 5l12 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})}),At.jsx("nav",{className:"flex flex-col gap-7",children:VN.map(({label:d,href:_})=>At.jsx("a",{href:_,onClick:f,className:"font-bagel text-white text-2xl hover:text-[#fffdc7] transition-colors",children:d},d))}),At.jsx("div",{className:"mt-auto pt-8 border-t border-white/20",children:At.jsx("p",{className:"font-inter text-white/40 text-xs",children:"© 2025 Ratish Reigns"})})]})]}),n&&At.jsxs(At.Fragment,{children:[At.jsx("div",{className:"fixed inset-0 bg-black/50 z-[55] cursor-pointer",onClick:p}),At.jsxs("div",{ref:c,className:"fixed right-0 top-0 h-full w-80 bg-white z-[60] flex flex-col shadow-2xl",children:[At.jsxs("div",{className:"p-6 border-b border-gray-100 flex items-center justify-between shrink-0",children:[At.jsx("h2",{className:"font-bagel text-[#254d32] text-2xl m-0",children:"Your Cart"}),At.jsx("button",{onClick:p,className:"text-gray-400 hover:text-gray-600 transition-colors","aria-label":"Close cart",children:At.jsx("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",children:At.jsx("path",{d:"M17 5L5 17M5 5l12 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})})]}),At.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center gap-4 px-6",children:[At.jsxs("svg",{width:"60",height:"60",viewBox:"0 0 60 60",fill:"none",className:"opacity-20",children:[At.jsx("path",{d:"M5 7h8l4 24M14 18h35l-5 20H19",stroke:"#254d32",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),At.jsx("circle",{cx:"25",cy:"50",r:"3.5",fill:"#254d32"}),At.jsx("circle",{cx:"42",cy:"50",r:"3.5",fill:"#254d32"})]}),At.jsx("p",{className:"font-bagel text-gray-300 text-xl m-0",children:"Cart is empty"}),At.jsx("p",{className:"font-inter text-gray-400 text-sm text-center m-0",children:"Grab a bottle of Ratish Reigns!"})]}),At.jsx("div",{className:"p-6 border-t border-gray-100 shrink-0",children:At.jsx("button",{onClick:p,className:"w-full bg-[#254d32] text-white font-bagel text-lg py-3 rounded-full hover:bg-[#336744] transition-colors",children:"Continue Shopping"})})]})]})]})}const XN=[{path:"M0,40 C50,15 100,65 150,40 C200,15 250,65 300,40 C350,15 400,65 450,40 C500,22 550,32 600,30",top:"25%",zClass:"z-[10]"},{path:"M0,40 C75,8 150,72 225,40 C300,8 375,72 450,40 C510,16 560,38 600,35",top:"38%",zClass:"z-[45]"},{path:"M0,40 C50,65 100,15 150,40 C200,65 250,15 300,40 C350,65 400,15 450,40 C500,58 550,48 600,50",top:"52%",zClass:"z-[10]"},{path:"M0,40 C38,12 75,68 112,40 C150,12 187,68 225,40 C262,12 300,68 337,40 C375,12 412,68 450,40 C490,18 540,36 600,32",top:"65%",zClass:"z-[45]"}];function WN(){return At.jsxs("section",{id:"hero",className:"h-screen w-full flex items-center overflow-hidden bg-[#254d32]",children:[At.jsx("div",{className:"relative w-1/2 h-full",children:XN.map(({path:o,top:t,zClass:n},a)=>At.jsx("svg",{viewBox:"0 0 600 80",preserveAspectRatio:"none",fill:"none",className:`absolute w-full pointer-events-none select-none ${n}`,style:{top:t,height:"60px"},children:At.jsx("path",{d:o,stroke:"rgba(255,255,255,0.65)",strokeWidth:"2"})},a))}),At.jsx("div",{className:"w-1/2 flex items-center pr-12",children:At.jsx("h1",{className:"font-bagel text-[#e2e2e2] not-italic uppercase m-0",style:{fontSize:"clamp(28px, 3.75vw, 54px)",lineHeight:1.01,letterSpacing:"0.06em"},children:"FROM SACRED GROVES TO MODERN CHEERS."})})]})}const gu="https://www.figma.com/api/mcp/asset",YN=`${gu}/308a5df0-d188-4308-a8a5-f7059271fb33`,qN=`${gu}/91cbfe94-cf9d-4ad2-87b6-b76d71ef8da8`,jN=`${gu}/5c889fcf-e2ff-498a-b5eb-d5d43df5c198`,ZN=`${gu}/fb49772b-da3c-4249-aa9a-b4f47ee2fb02`,KN=`${gu}/f0b4fcb5-48c7-4557-92f4-722497b5c1fd`,QN=`${gu}/5f1afe83-8026-4d45-81b8-11adb7fee4b9`,JN=[{label:"Energy Boost",active:!0},{label:"Healthy Microbes",active:!1},{label:"Plant brewed",active:!1},{label:"Antioxidant",active:!1},{label:"Probiotic",active:!1}];function $N(){return At.jsxs("section",{id:"advantages",className:"h-screen w-full flex flex-col overflow-hidden bg-[#336744]",children:[At.jsx("div",{className:"flex gap-7 pl-8 pt-16 shrink-0",children:JN.map(({label:o,active:t})=>At.jsxs("div",{className:"relative w-[117px] h-10 flex items-center justify-center",children:[At.jsx("img",{src:t?YN:qN,alt:"","aria-hidden":!0,className:"absolute inset-0 w-full h-full object-fill"}),At.jsx("span",{className:"relative z-10 font-inter text-black whitespace-nowrap",style:{fontSize:t?"13px":"12px"},children:o})]},o))}),At.jsxs("div",{className:"flex flex-1 items-center min-h-0",children:[At.jsx("div",{className:"pl-8 w-56 shrink-0",children:At.jsxs("div",{className:"font-inter font-normal text-white",style:{fontSize:"24px",lineHeight:0},children:[At.jsx("p",{style:{lineHeight:"normal",marginBottom:0},children:"ENERGY"}),At.jsx("p",{style:{lineHeight:"normal",margin:0},children:"      BOOST"})]})}),At.jsx("div",{className:"flex-1"}),At.jsx("div",{className:"w-60 pr-12 shrink-0",children:At.jsx("p",{className:"font-inter font-normal text-[#0b0b0b] m-0",style:{fontSize:"12px",lineHeight:"normal"},children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to"})})]}),At.jsx("div",{className:"pl-8 pb-16 shrink-0",children:At.jsx("p",{className:"font-inter font-normal text-[#0b0b0b] m-0 max-w-[242px]",style:{fontSize:"12px",lineHeight:"normal"},children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"})})]})}const tL=["FARM FRESH",`CONSISTENT
QUALITY`,`NATURALLY
AGED`,"100% NATURAL",`HANCRAFTED
BREWING`,`SMOOTH
FINISH`];function eL(){return At.jsxs("section",{id:"features",className:"h-screen w-full flex overflow-hidden bg-[#337247]",children:[At.jsxs("div",{className:"w-[58%] h-full flex flex-col justify-center pl-8 pr-8",children:[At.jsx("div",{className:"grid grid-cols-3 gap-4 mb-8",children:tL.map(o=>At.jsx("div",{className:"bg-white/10 rounded-[30px] h-[90px] flex items-center justify-center text-center px-3",children:At.jsx("span",{className:"font-inter font-normal text-white whitespace-pre-line",style:{fontSize:"18px",lineHeight:"normal"},children:o})},o))}),At.jsx("h2",{className:"font-bagel text-white not-italic m-0 mb-3",style:{fontSize:"clamp(32px, 3.3vw, 48px)",lineHeight:"1.001"},children:"ANCIENT WISDOM"}),At.jsx("p",{className:"font-inter font-normal text-[#0b0b0b] m-0",style:{maxWidth:"510px",fontSize:"12px",lineHeight:"normal"},children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to"})]}),At.jsx("div",{className:"w-[42%]"})]})}function nL(){return At.jsxs("section",{id:"product",className:"h-screen w-full flex overflow-hidden bg-[#254d32]",children:[At.jsxs("div",{className:"w-1/2 flex flex-col justify-center pl-8",children:[At.jsx("p",{className:"font-modak text-[#fffdc7] whitespace-nowrap m-0 mb-2",style:{fontSize:"36px",lineHeight:"normal"},children:"RATISH REIGNS"}),At.jsx("h2",{className:"font-bagel text-white not-italic m-0",style:{fontSize:"clamp(42px, 5.1vw, 74px)",lineHeight:"1.001",maxWidth:"580px"},children:"GRAB YOUR BOTTLE!!"})]}),At.jsxs("div",{className:"relative w-1/2 h-full",children:[At.jsxs("div",{className:"absolute left-1/2 -translate-x-1/2 font-inter font-normal text-[#0b0b0b] text-center",style:{top:"72%",fontSize:"16px",letterSpacing:"0.64px",lineHeight:0},children:[At.jsx("p",{style:{lineHeight:"1.0075",margin:0},children:"1 LITRE"}),At.jsx("p",{style:{lineHeight:"1.0075",margin:0},children:"Glass Bottle"})]}),At.jsxs("div",{className:"absolute left-1/2 -translate-x-1/2 w-[117px] h-10 flex items-center justify-center",style:{top:"82%"},children:[At.jsx("img",{src:jN,alt:"","aria-hidden":!0,className:"absolute inset-0 w-full h-full object-fill"}),At.jsx("span",{className:"relative z-10 font-inter font-normal text-[#0b0b0b]",style:{fontSize:"15px"},children:"BUY"})]}),At.jsx("div",{className:"absolute right-6 top-1/2 -translate-y-1/2 w-[114px] h-[75px]",children:At.jsx("img",{src:ZN,alt:"Next",className:"w-full h-full object-contain"})})]})]})}function iL(){return At.jsx("section",{id:"about",className:"h-screen w-full flex items-center overflow-hidden bg-[#3f7651]",children:At.jsx("div",{className:"pl-8 pr-16",children:At.jsx("p",{className:"font-bagel text-white not-italic m-0",style:{fontSize:"clamp(28px, 3.75vw, 54px)",lineHeight:"1.001",maxWidth:"80vw"},children:"A bridge between generations, nurturing friendship, culture, and celebration in every meaningful community gathering and ceremony."})})})}function aL(){return At.jsxs("footer",{id:"footer",className:"h-screen w-full flex flex-col items-center justify-center gap-8 overflow-hidden bg-[#4f9265]",children:[At.jsx("h2",{className:"font-bungee text-white not-italic m-0",style:{fontSize:"clamp(42px, 5.1vw, 74px)",lineHeight:"1.001"},children:"FOLLOW US"}),At.jsx("div",{className:"w-20 rotate-90",children:At.jsx("img",{src:KN,alt:"","aria-hidden":!0,className:"w-full h-auto object-contain"})}),At.jsx("div",{className:"flex items-center gap-6 flex-wrap justify-center",children:["Instagram","X","TikTok"].map((o,t)=>At.jsxs("div",{className:"flex items-center gap-6",children:[At.jsx("span",{className:"font-bagel text-white not-italic",style:{fontSize:"32px",lineHeight:"1.001"},children:o}),t<2&&At.jsx("div",{className:"w-[72px]",children:At.jsx("img",{src:QN,alt:"","aria-hidden":!0,className:"w-full object-contain"})})]},o))})]})}function rL(){return At.jsxs("div",{className:"font-inter w-full overflow-x-hidden",children:[At.jsx(GN,{}),At.jsx(kN,{}),At.jsxs("main",{children:[At.jsx(WN,{}),At.jsx($N,{}),At.jsx(eL,{}),At.jsx(nL,{}),At.jsx(iL,{})]}),At.jsx(aL,{})]})}LA.createRoot(document.getElementById("root")).render(At.jsx(za.StrictMode,{children:At.jsx(rL,{})}));
