(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Cs(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ee={},Ht=[],xe=()=>{},Hc=()=>!1,jc=/^on[^a-z]/,Ir=t=>jc.test(t),As=t=>t.startsWith("onUpdate:"),oe=Object.assign,Ps=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Wc=Object.prototype.hasOwnProperty,V=(t,e)=>Wc.call(t,e),B=Array.isArray,jt=t=>Er(t)==="[object Map]",No=t=>Er(t)==="[object Set]",F=t=>typeof t=="function",ae=t=>typeof t=="string",Os=t=>typeof t=="symbol",te=t=>t!==null&&typeof t=="object",Do=t=>te(t)&&F(t.then)&&F(t.catch),Mo=Object.prototype.toString,Er=t=>Mo.call(t),Vc=t=>Er(t).slice(8,-1),Lo=t=>Er(t)==="[object Object]",ks=t=>ae(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Qn=Cs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},zc=/-(\w)/g,Ve=wr(t=>t.replace(zc,(e,n)=>n?n.toUpperCase():"")),Kc=/\B([A-Z])/g,tn=wr(t=>t.replace(Kc,"-$1").toLowerCase()),Tr=wr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Br=wr(t=>t?`on${Tr(t)}`:""),En=(t,e)=>!Object.is(t,e),Fr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ar=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},qc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let gi;const ss=()=>gi||(gi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xs(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ae(r)?Xc(r):xs(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ae(t))return t;if(te(t))return t}}const Gc=/;(?![^(]*\))/g,Jc=/:([^]+)/,Yc=/\/\*[^]*?\*\//g;function Xc(t){const e={};return t.replace(Yc,"").split(Gc).forEach(n=>{if(n){const r=n.split(Jc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ns(t){let e="";if(ae(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const r=Ns(t[n]);r&&(e+=r+" ")}else if(te(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Qc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zc=Cs(Qc);function Uo(t){return!!t||t===""}const Rr=t=>ae(t)?t:t==null?"":B(t)||te(t)&&(t.toString===Mo||!F(t.toString))?JSON.stringify(t,$o,2):String(t),$o=(t,e)=>e&&e.__v_isRef?$o(t,e.value):jt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:No(e)?{[`Set(${e.size})`]:[...e.values()]}:te(e)&&!B(e)&&!Lo(e)?String(e):e;let Ce;class el{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ce,!e&&Ce&&(this.index=(Ce.scopes||(Ce.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ce;try{return Ce=this,e()}finally{Ce=n}}}on(){Ce=this}off(){Ce=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function tl(t,e=Ce){e&&e.active&&e.effects.push(t)}function nl(){return Ce}const Ds=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Bo=t=>(t.w&_t)>0,Fo=t=>(t.n&_t)>0,rl=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=_t},sl=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Bo(s)&&!Fo(s)?s.delete(t):e[n++]=s,s.w&=~_t,s.n&=~_t}e.length=n}},is=new WeakMap;let hn=0,_t=1;const os=30;let Ae;const St=Symbol(""),as=Symbol("");class Ms{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,tl(this,r)}run(){if(!this.active)return this.fn();let e=Ae,n=ht;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ae,Ae=this,ht=!0,_t=1<<++hn,hn<=os?rl(this):mi(this),this.fn()}finally{hn<=os&&sl(this),_t=1<<--hn,Ae=this.parent,ht=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ae===this?this.deferStop=!0:this.active&&(mi(this),this.onStop&&this.onStop(),this.active=!1)}}function mi(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ht=!0;const Ho=[];function nn(){Ho.push(ht),ht=!1}function rn(){const t=Ho.pop();ht=t===void 0?!0:t}function _e(t,e,n){if(ht&&Ae){let r=is.get(t);r||is.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ds()),jo(s)}}function jo(t,e){let n=!1;hn<=os?Fo(t)||(t.n|=_t,n=!Bo(t)):n=!t.has(Ae),n&&(t.add(Ae),Ae.deps.push(t))}function Ze(t,e,n,r,s,i){const o=is.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&B(t)){const a=Number(r);o.forEach((l,u)=>{(u==="length"||u>=a)&&c.push(l)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":B(t)?ks(n)&&c.push(o.get("length")):(c.push(o.get(St)),jt(t)&&c.push(o.get(as)));break;case"delete":B(t)||(c.push(o.get(St)),jt(t)&&c.push(o.get(as)));break;case"set":jt(t)&&c.push(o.get(St));break}if(c.length===1)c[0]&&cs(c[0]);else{const a=[];for(const l of c)l&&a.push(...l);cs(Ds(a))}}function cs(t,e){const n=B(t)?t:[...t];for(const r of n)r.computed&&_i(r);for(const r of n)r.computed||_i(r)}function _i(t,e){(t!==Ae||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const il=Cs("__proto__,__v_isRef,__isVue"),Wo=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Os)),ol=Ls(),al=Ls(!1,!0),cl=Ls(!0),vi=ll();function ll(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=z(this);for(let i=0,o=this.length;i<o;i++)_e(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(z)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){nn();const r=z(this)[e].apply(this,n);return rn(),r}}),t}function ul(t){const e=z(this);return _e(e,"has",t),e.hasOwnProperty(t)}function Ls(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Sl:Go:e?qo:Ko).get(r))return r;const o=B(r);if(!t){if(o&&V(vi,s))return Reflect.get(vi,s,i);if(s==="hasOwnProperty")return ul}const c=Reflect.get(r,s,i);return(Os(s)?Wo.has(s):il(s))||(t||_e(r,"get",s),e)?c:de(c)?o&&ks(s)?c:c.value:te(c)?t?Jo(c):sn(c):c}}const fl=Vo(),dl=Vo(!0);function Vo(t=!1){return function(n,r,s,i){let o=n[r];if(Jt(o)&&de(o)&&!de(s))return!1;if(!t&&(!cr(s)&&!Jt(s)&&(o=z(o),s=z(s)),!B(n)&&de(o)&&!de(s)))return o.value=s,!0;const c=B(n)&&ks(r)?Number(r)<n.length:V(n,r),a=Reflect.set(n,r,s,i);return n===z(i)&&(c?En(s,o)&&Ze(n,"set",r,s):Ze(n,"add",r,s)),a}}function hl(t,e){const n=V(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Ze(t,"delete",e,void 0),r}function pl(t,e){const n=Reflect.has(t,e);return(!Os(e)||!Wo.has(e))&&_e(t,"has",e),n}function gl(t){return _e(t,"iterate",B(t)?"length":St),Reflect.ownKeys(t)}const zo={get:ol,set:fl,deleteProperty:hl,has:pl,ownKeys:gl},ml={get:cl,set(t,e){return!0},deleteProperty(t,e){return!0}},_l=oe({},zo,{get:al,set:dl}),Us=t=>t,Sr=t=>Reflect.getPrototypeOf(t);function zn(t,e,n=!1,r=!1){t=t.__v_raw;const s=z(t),i=z(e);n||(e!==i&&_e(s,"get",e),_e(s,"get",i));const{has:o}=Sr(s),c=r?Us:n?Fs:wn;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function Kn(t,e=!1){const n=this.__v_raw,r=z(n),s=z(t);return e||(t!==s&&_e(r,"has",t),_e(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function qn(t,e=!1){return t=t.__v_raw,!e&&_e(z(t),"iterate",St),Reflect.get(t,"size",t)}function yi(t){t=z(t);const e=z(this);return Sr(e).has.call(e,t)||(e.add(t),Ze(e,"add",t,t)),this}function bi(t,e){e=z(e);const n=z(this),{has:r,get:s}=Sr(n);let i=r.call(n,t);i||(t=z(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?En(e,o)&&Ze(n,"set",t,e):Ze(n,"add",t,e),this}function Ii(t){const e=z(this),{has:n,get:r}=Sr(e);let s=n.call(e,t);s||(t=z(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Ze(e,"delete",t,void 0),i}function Ei(){const t=z(this),e=t.size!==0,n=t.clear();return e&&Ze(t,"clear",void 0,void 0),n}function Gn(t,e){return function(r,s){const i=this,o=i.__v_raw,c=z(o),a=e?Us:t?Fs:wn;return!t&&_e(c,"iterate",St),o.forEach((l,u)=>r.call(s,a(l),a(u),i))}}function Jn(t,e,n){return function(...r){const s=this.__v_raw,i=z(s),o=jt(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,l=s[t](...r),u=n?Us:e?Fs:wn;return!e&&_e(i,"iterate",a?as:St),{next(){const{value:h,done:g}=l.next();return g?{value:h,done:g}:{value:c?[u(h[0]),u(h[1])]:u(h),done:g}},[Symbol.iterator](){return this}}}}function it(t){return function(...e){return t==="delete"?!1:this}}function vl(){const t={get(i){return zn(this,i)},get size(){return qn(this)},has:Kn,add:yi,set:bi,delete:Ii,clear:Ei,forEach:Gn(!1,!1)},e={get(i){return zn(this,i,!1,!0)},get size(){return qn(this)},has:Kn,add:yi,set:bi,delete:Ii,clear:Ei,forEach:Gn(!1,!0)},n={get(i){return zn(this,i,!0)},get size(){return qn(this,!0)},has(i){return Kn.call(this,i,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:Gn(!0,!1)},r={get(i){return zn(this,i,!0,!0)},get size(){return qn(this,!0)},has(i){return Kn.call(this,i,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:Gn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Jn(i,!1,!1),n[i]=Jn(i,!0,!1),e[i]=Jn(i,!1,!0),r[i]=Jn(i,!0,!0)}),[t,n,e,r]}const[yl,bl,Il,El]=vl();function $s(t,e){const n=e?t?El:Il:t?bl:yl;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(V(n,s)&&s in r?n:r,s,i)}const wl={get:$s(!1,!1)},Tl={get:$s(!1,!0)},Rl={get:$s(!0,!1)},Ko=new WeakMap,qo=new WeakMap,Go=new WeakMap,Sl=new WeakMap;function Cl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Al(t){return t.__v_skip||!Object.isExtensible(t)?0:Cl(Vc(t))}function sn(t){return Jt(t)?t:Bs(t,!1,zo,wl,Ko)}function Pl(t){return Bs(t,!1,_l,Tl,qo)}function Jo(t){return Bs(t,!0,ml,Rl,Go)}function Bs(t,e,n,r,s){if(!te(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Al(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Wt(t){return Jt(t)?Wt(t.__v_raw):!!(t&&t.__v_isReactive)}function Jt(t){return!!(t&&t.__v_isReadonly)}function cr(t){return!!(t&&t.__v_isShallow)}function Yo(t){return Wt(t)||Jt(t)}function z(t){const e=t&&t.__v_raw;return e?z(e):t}function Xo(t){return ar(t,"__v_skip",!0),t}const wn=t=>te(t)?sn(t):t,Fs=t=>te(t)?Jo(t):t;function Qo(t){ht&&Ae&&(t=z(t),jo(t.dep||(t.dep=Ds())))}function Zo(t,e){t=z(t);const n=t.dep;n&&cs(n)}function de(t){return!!(t&&t.__v_isRef===!0)}function Ol(t){return ea(t,!1)}function kl(t){return ea(t,!0)}function ea(t,e){return de(t)?t:new xl(t,e)}class xl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:z(e),this._value=n?e:wn(e)}get value(){return Qo(this),this._value}set value(e){const n=this.__v_isShallow||cr(e)||Jt(e);e=n?e:z(e),En(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:wn(e),Zo(this))}}function Vt(t){return de(t)?t.value:t}const Nl={get:(t,e,n)=>Vt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return de(s)&&!de(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ta(t){return Wt(t)?t:new Proxy(t,Nl)}class Dl{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ms(e,()=>{this._dirty||(this._dirty=!0,Zo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=z(this);return Qo(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ml(t,e,n=!1){let r,s;const i=F(t);return i?(r=t,s=xe):(r=t.get,s=t.set),new Dl(r,s,i||!s,n)}function pt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Cr(i,e,n)}return s}function Ne(t,e,n,r){if(F(t)){const i=pt(t,e,n,r);return i&&Do(i)&&i.catch(o=>{Cr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ne(t[i],e,n,r));return s}function Cr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,c)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){pt(a,null,10,[t,o,c]);return}}Ll(t,n,s,r)}function Ll(t,e,n,r=!0){console.error(t)}let Tn=!1,ls=!1;const fe=[];let He=0;const zt=[];let Je=null,wt=0;const na=Promise.resolve();let Hs=null;function ra(t){const e=Hs||na;return t?e.then(this?t.bind(this):t):e}function Ul(t){let e=He+1,n=fe.length;for(;e<n;){const r=e+n>>>1;Rn(fe[r])<t?e=r+1:n=r}return e}function js(t){(!fe.length||!fe.includes(t,Tn&&t.allowRecurse?He+1:He))&&(t.id==null?fe.push(t):fe.splice(Ul(t.id),0,t),sa())}function sa(){!Tn&&!ls&&(ls=!0,Hs=na.then(oa))}function $l(t){const e=fe.indexOf(t);e>He&&fe.splice(e,1)}function Bl(t){B(t)?zt.push(...t):(!Je||!Je.includes(t,t.allowRecurse?wt+1:wt))&&zt.push(t),sa()}function wi(t,e=Tn?He+1:0){for(;e<fe.length;e++){const n=fe[e];n&&n.pre&&(fe.splice(e,1),e--,n())}}function ia(t){if(zt.length){const e=[...new Set(zt)];if(zt.length=0,Je){Je.push(...e);return}for(Je=e,Je.sort((n,r)=>Rn(n)-Rn(r)),wt=0;wt<Je.length;wt++)Je[wt]();Je=null,wt=0}}const Rn=t=>t.id==null?1/0:t.id,Fl=(t,e)=>{const n=Rn(t)-Rn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function oa(t){ls=!1,Tn=!0,fe.sort(Fl);const e=xe;try{for(He=0;He<fe.length;He++){const n=fe[He];n&&n.active!==!1&&pt(n,null,14)}}finally{He=0,fe.length=0,ia(),Tn=!1,Hs=null,(fe.length||zt.length)&&oa()}}function Hl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ee;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:g}=r[u]||ee;g&&(s=n.map(v=>ae(v)?v.trim():v)),h&&(s=n.map(qc))}let c,a=r[c=Br(e)]||r[c=Br(Ve(e))];!a&&i&&(a=r[c=Br(tn(e))]),a&&Ne(a,t,6,s);const l=r[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Ne(l,t,6,s)}}function aa(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!F(t)){const a=l=>{const u=aa(l,e,!0);u&&(c=!0,oe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(te(t)&&r.set(t,null),null):(B(i)?i.forEach(a=>o[a]=null):oe(o,i),te(t)&&r.set(t,o),o)}function Ar(t,e){return!t||!Ir(e)?!1:(e=e.slice(2).replace(/Once$/,""),V(t,e[0].toLowerCase()+e.slice(1))||V(t,tn(e))||V(t,e))}let Oe=null,Pr=null;function lr(t){const e=Oe;return Oe=t,Pr=t&&t.type.__scopeId||null,e}function Or(t){Pr=t}function kr(){Pr=null}function Ws(t,e=Oe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Di(-1);const i=lr(e);let o;try{o=t(...s)}finally{lr(i),r._d&&Di(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Hr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:c,attrs:a,emit:l,render:u,renderCache:h,data:g,setupState:v,ctx:C,inheritAttrs:P}=t;let L,k;const D=lr(t);try{if(n.shapeFlag&4){const M=s||r;L=Fe(u.call(M,M,h,i,v,g,C)),k=a}else{const M=e;L=Fe(M.length>1?M(i,{attrs:a,slots:c,emit:l}):M(i,null)),k=e.props?a:jl(a)}}catch(M){vn.length=0,Cr(M,t,1),L=W(Pt)}let j=L;if(k&&P!==!1){const M=Object.keys(k),{shapeFlag:re}=j;M.length&&re&7&&(o&&M.some(As)&&(k=Wl(k,o)),j=Yt(j,k))}return n.dirs&&(j=Yt(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),L=j,lr(D),L}const jl=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ir(n))&&((e||(e={}))[n]=t[n]);return e},Wl=(t,e)=>{const n={};for(const r in t)(!As(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Vl(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?Ti(r,o,l):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const g=u[h];if(o[g]!==r[g]&&!Ar(l,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Ti(r,o,l):!0:!!o;return!1}function Ti(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ar(n,i))return!0}return!1}function zl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Kl=t=>t.__isSuspense;function ql(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):Bl(t)}const Yn={};function Zn(t,e,n){return ca(t,e,n)}function ca(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ee){var c;const a=nl()===((c=le)==null?void 0:c.scope)?le:null;let l,u=!1,h=!1;if(de(t)?(l=()=>t.value,u=cr(t)):Wt(t)?(l=()=>t,r=!0):B(t)?(h=!0,u=t.some(M=>Wt(M)||cr(M)),l=()=>t.map(M=>{if(de(M))return M.value;if(Wt(M))return Ft(M);if(F(M))return pt(M,a,2)})):F(t)?e?l=()=>pt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return g&&g(),Ne(t,a,3,[v])}:l=xe,e&&r){const M=l;l=()=>Ft(M())}let g,v=M=>{g=D.onStop=()=>{pt(M,a,4)}},C;if(An)if(v=xe,e?n&&Ne(e,a,3,[l(),h?[]:void 0,v]):l(),s==="sync"){const M=Hu();C=M.__watcherHandles||(M.__watcherHandles=[])}else return xe;let P=h?new Array(t.length).fill(Yn):Yn;const L=()=>{if(D.active)if(e){const M=D.run();(r||u||(h?M.some((re,se)=>En(re,P[se])):En(M,P)))&&(g&&g(),Ne(e,a,3,[M,P===Yn?void 0:h&&P[0]===Yn?[]:P,v]),P=M)}else D.run()};L.allowRecurse=!!e;let k;s==="sync"?k=L:s==="post"?k=()=>me(L,a&&a.suspense):(L.pre=!0,a&&(L.id=a.uid),k=()=>js(L));const D=new Ms(l,k);e?n?L():P=D.run():s==="post"?me(D.run.bind(D),a&&a.suspense):D.run();const j=()=>{D.stop(),a&&a.scope&&Ps(a.scope.effects,D)};return C&&C.push(j),j}function Gl(t,e,n){const r=this.proxy,s=ae(t)?t.includes(".")?la(r,t):()=>r[t]:t.bind(r,r);let i;F(e)?i=e:(i=e.handler,n=e);const o=le;Xt(this);const c=ca(s,i.bind(r),n);return o?Xt(o):Ct(),c}function la(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Ft(t,e){if(!te(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),de(t))Ft(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)Ft(t[n],e);else if(No(t)||jt(t))t.forEach(n=>{Ft(n,e)});else if(Lo(t))for(const n in t)Ft(t[n],e);return t}function bt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(nn(),Ne(a,n,8,[t.el,c,t,e]),rn())}}function ua(t,e){return F(t)?(()=>oe({name:t.name},e,{setup:t}))():t}const er=t=>!!t.type.__asyncLoader,fa=t=>t.type.__isKeepAlive;function Jl(t,e){da(t,"a",e)}function Yl(t,e){da(t,"da",e)}function da(t,e,n=le){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(xr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)fa(s.parent.vnode)&&Xl(r,e,n,s),s=s.parent}}function Xl(t,e,n,r){const s=xr(e,t,r,!0);ha(()=>{Ps(r[e],s)},n)}function xr(t,e,n=le,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;nn(),Xt(n);const c=Ne(e,n,t,o);return Ct(),rn(),c});return r?s.unshift(i):s.push(i),i}}const tt=t=>(e,n=le)=>(!An||t==="sp")&&xr(t,(...r)=>e(...r),n),Ql=tt("bm"),Zl=tt("m"),eu=tt("bu"),tu=tt("u"),nu=tt("bum"),ha=tt("um"),ru=tt("sp"),su=tt("rtg"),iu=tt("rtc");function ou(t,e=le){xr("ec",t,e)}const pa="components";function ce(t,e){return cu(pa,t,!0,e)||t}const au=Symbol.for("v-ndc");function cu(t,e,n=!0,r=!1){const s=Oe||le;if(s){const i=s.type;if(t===pa){const c=$u(i,!1);if(c&&(c===e||c===Ve(e)||c===Tr(Ve(e))))return i}const o=Ri(s[t]||i[t],e)||Ri(s.appContext[t],e);return!o&&r?i:o}}function Ri(t,e){return t&&(t[e]||t[Ve(e)]||t[Tr(Ve(e))])}const us=t=>t?Sa(t)?Gs(t)||t.proxy:us(t.parent):null,_n=oe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>us(t.parent),$root:t=>us(t.root),$emit:t=>t.emit,$options:t=>Vs(t),$forceUpdate:t=>t.f||(t.f=()=>js(t.update)),$nextTick:t=>t.n||(t.n=ra.bind(t.proxy)),$watch:t=>Gl.bind(t)}),jr=(t,e)=>t!==ee&&!t.__isScriptSetup&&V(t,e),lu={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(jr(r,e))return o[e]=1,r[e];if(s!==ee&&V(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&V(l,e))return o[e]=3,i[e];if(n!==ee&&V(n,e))return o[e]=4,n[e];fs&&(o[e]=0)}}const u=_n[e];let h,g;if(u)return e==="$attrs"&&_e(t,"get",e),u(t);if((h=c.__cssModules)&&(h=h[e]))return h;if(n!==ee&&V(n,e))return o[e]=4,n[e];if(g=a.config.globalProperties,V(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return jr(s,e)?(s[e]=n,!0):r!==ee&&V(r,e)?(r[e]=n,!0):V(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==ee&&V(t,o)||jr(e,o)||(c=i[0])&&V(c,o)||V(r,o)||V(_n,o)||V(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:V(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Si(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let fs=!0;function uu(t){const e=Vs(t),n=t.proxy,r=t.ctx;fs=!1,e.beforeCreate&&Ci(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:u,beforeMount:h,mounted:g,beforeUpdate:v,updated:C,activated:P,deactivated:L,beforeDestroy:k,beforeUnmount:D,destroyed:j,unmounted:M,render:re,renderTracked:se,renderTriggered:ve,errorCaptured:Re,serverPrefetch:Me,expose:be,inheritAttrs:rt,components:yt,directives:Le,filters:ln}=e;if(l&&fu(l,r,null),o)for(const X in o){const K=o[X];F(K)&&(r[X]=K.bind(n))}if(s){const X=s.call(n,n);te(X)&&(t.data=sn(X))}if(fs=!0,i)for(const X in i){const K=i[X],qe=F(K)?K.bind(n,n):F(K.get)?K.get.bind(n,n):xe,st=!F(K)&&F(K.set)?K.set.bind(n):xe,Ue=Ee({get:qe,set:st});Object.defineProperty(r,X,{enumerable:!0,configurable:!0,get:()=>Ue.value,set:ge=>Ue.value=ge})}if(c)for(const X in c)ga(c[X],r,n,X);if(a){const X=F(a)?a.call(n):a;Reflect.ownKeys(X).forEach(K=>{tr(K,X[K])})}u&&Ci(u,t,"c");function ie(X,K){B(K)?K.forEach(qe=>X(qe.bind(n))):K&&X(K.bind(n))}if(ie(Ql,h),ie(Zl,g),ie(eu,v),ie(tu,C),ie(Jl,P),ie(Yl,L),ie(ou,Re),ie(iu,se),ie(su,ve),ie(nu,D),ie(ha,M),ie(ru,Me),B(be))if(be.length){const X=t.exposed||(t.exposed={});be.forEach(K=>{Object.defineProperty(X,K,{get:()=>n[K],set:qe=>n[K]=qe})})}else t.exposed||(t.exposed={});re&&t.render===xe&&(t.render=re),rt!=null&&(t.inheritAttrs=rt),yt&&(t.components=yt),Le&&(t.directives=Le)}function fu(t,e,n=xe){B(t)&&(t=ds(t));for(const r in t){const s=t[r];let i;te(s)?"default"in s?i=Qe(s.from||r,s.default,!0):i=Qe(s.from||r):i=Qe(s),de(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ci(t,e,n){Ne(B(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ga(t,e,n,r){const s=r.includes(".")?la(n,r):()=>n[r];if(ae(t)){const i=e[t];F(i)&&Zn(s,i)}else if(F(t))Zn(s,t.bind(n));else if(te(t))if(B(t))t.forEach(i=>ga(i,e,n,r));else{const i=F(t.handler)?t.handler.bind(n):e[t.handler];F(i)&&Zn(s,i,t)}}function Vs(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(l=>ur(a,l,o,!0)),ur(a,e,o)),te(e)&&i.set(e,a),a}function ur(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ur(t,i,n,!0),s&&s.forEach(o=>ur(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=du[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const du={data:Ai,props:Pi,emits:Pi,methods:pn,computed:pn,beforeCreate:pe,created:pe,beforeMount:pe,mounted:pe,beforeUpdate:pe,updated:pe,beforeDestroy:pe,beforeUnmount:pe,destroyed:pe,unmounted:pe,activated:pe,deactivated:pe,errorCaptured:pe,serverPrefetch:pe,components:pn,directives:pn,watch:pu,provide:Ai,inject:hu};function Ai(t,e){return e?t?function(){return oe(F(t)?t.call(this,this):t,F(e)?e.call(this,this):e)}:e:t}function hu(t,e){return pn(ds(t),ds(e))}function ds(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function pe(t,e){return t?[...new Set([].concat(t,e))]:e}function pn(t,e){return t?oe(Object.create(null),t,e):e}function Pi(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:oe(Object.create(null),Si(t),Si(e??{})):e}function pu(t,e){if(!t)return e;if(!e)return t;const n=oe(Object.create(null),t);for(const r in e)n[r]=pe(t[r],e[r]);return n}function ma(){return{app:null,config:{isNativeTag:Hc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gu=0;function mu(t,e){return function(r,s=null){F(r)||(r=oe({},r)),s!=null&&!te(s)&&(s=null);const i=ma(),o=new Set;let c=!1;const a=i.app={_uid:gu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ju,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&F(l.install)?(o.add(l),l.install(a,...u)):F(l)&&(o.add(l),l(a,...u))),a},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),a},component(l,u){return u?(i.components[l]=u,a):i.components[l]},directive(l,u){return u?(i.directives[l]=u,a):i.directives[l]},mount(l,u,h){if(!c){const g=W(r,s);return g.appContext=i,u&&e?e(g,l):t(g,l,h),c=!0,a._container=l,l.__vue_app__=a,Gs(g.component)||g.component.proxy}},unmount(){c&&(t(null,a._container),delete a._container.__vue_app__)},provide(l,u){return i.provides[l]=u,a},runWithContext(l){fr=a;try{return l()}finally{fr=null}}};return a}}let fr=null;function tr(t,e){if(le){let n=le.provides;const r=le.parent&&le.parent.provides;r===n&&(n=le.provides=Object.create(r)),n[t]=e}}function Qe(t,e,n=!1){const r=le||Oe;if(r||fr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:fr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&F(e)?e.call(r&&r.proxy):e}}function _u(t,e,n,r=!1){const s={},i={};ar(i,Dr,1),t.propsDefaults=Object.create(null),_a(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Pl(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function vu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=z(s),[a]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let g=u[h];if(Ar(t.emitsOptions,g))continue;const v=e[g];if(a)if(V(i,g))v!==i[g]&&(i[g]=v,l=!0);else{const C=Ve(g);s[C]=hs(a,c,C,v,t,!1)}else v!==i[g]&&(i[g]=v,l=!0)}}}else{_a(t,e,s,i)&&(l=!0);let u;for(const h in c)(!e||!V(e,h)&&((u=tn(h))===h||!V(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=hs(a,c,h,void 0,t,!0)):delete s[h]);if(i!==c)for(const h in i)(!e||!V(e,h))&&(delete i[h],l=!0)}l&&Ze(t,"set","$attrs")}function _a(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(Qn(a))continue;const l=e[a];let u;s&&V(s,u=Ve(a))?!i||!i.includes(u)?n[u]=l:(c||(c={}))[u]=l:Ar(t.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=z(n),l=c||ee;for(let u=0;u<i.length;u++){const h=i[u];n[h]=hs(s,a,h,l[h],t,!V(l,h))}}return o}function hs(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=V(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&F(a)){const{propsDefaults:l}=s;n in l?r=l[n]:(Xt(s),r=l[n]=a.call(null,e),Ct())}else r=a}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===tn(n))&&(r=!0))}return r}function va(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!F(t)){const u=h=>{a=!0;const[g,v]=va(h,e,!0);oe(o,g),v&&c.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!a)return te(t)&&r.set(t,Ht),Ht;if(B(i))for(let u=0;u<i.length;u++){const h=Ve(i[u]);Oi(h)&&(o[h]=ee)}else if(i)for(const u in i){const h=Ve(u);if(Oi(h)){const g=i[u],v=o[h]=B(g)||F(g)?{type:g}:oe({},g);if(v){const C=Ni(Boolean,v.type),P=Ni(String,v.type);v[0]=C>-1,v[1]=P<0||C<P,(C>-1||V(v,"default"))&&c.push(h)}}}const l=[o,c];return te(t)&&r.set(t,l),l}function Oi(t){return t[0]!=="$"}function ki(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function xi(t,e){return ki(t)===ki(e)}function Ni(t,e){return B(e)?e.findIndex(n=>xi(n,t)):F(e)&&xi(e,t)?0:-1}const ya=t=>t[0]==="_"||t==="$stable",zs=t=>B(t)?t.map(Fe):[Fe(t)],yu=(t,e,n)=>{if(e._n)return e;const r=Ws((...s)=>zs(e(...s)),n);return r._c=!1,r},ba=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ya(s))continue;const i=t[s];if(F(i))e[s]=yu(s,i,r);else if(i!=null){const o=zs(i);e[s]=()=>o}}},Ia=(t,e)=>{const n=zs(e);t.slots.default=()=>n},bu=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=z(e),ar(e,"_",n)):ba(e,t.slots={})}else t.slots={},e&&Ia(t,e);ar(t.slots,Dr,1)},Iu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ee;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(oe(s,e),!n&&c===1&&delete s._):(i=!e.$stable,ba(e,s)),o=e}else e&&(Ia(t,e),o={default:1});if(i)for(const c in s)!ya(c)&&!(c in o)&&delete s[c]};function ps(t,e,n,r,s=!1){if(B(t)){t.forEach((g,v)=>ps(g,e&&(B(e)?e[v]:e),n,r,s));return}if(er(r)&&!s)return;const i=r.shapeFlag&4?Gs(r.component)||r.component.proxy:r.el,o=s?null:i,{i:c,r:a}=t,l=e&&e.r,u=c.refs===ee?c.refs={}:c.refs,h=c.setupState;if(l!=null&&l!==a&&(ae(l)?(u[l]=null,V(h,l)&&(h[l]=null)):de(l)&&(l.value=null)),F(a))pt(a,c,12,[o,u]);else{const g=ae(a),v=de(a);if(g||v){const C=()=>{if(t.f){const P=g?V(h,a)?h[a]:u[a]:a.value;s?B(P)&&Ps(P,i):B(P)?P.includes(i)||P.push(i):g?(u[a]=[i],V(h,a)&&(h[a]=u[a])):(a.value=[i],t.k&&(u[t.k]=a.value))}else g?(u[a]=o,V(h,a)&&(h[a]=o)):v&&(a.value=o,t.k&&(u[t.k]=o))};o?(C.id=-1,me(C,n)):C()}}}const me=ql;function Eu(t){return wu(t)}function wu(t,e){const n=ss();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:u,parentNode:h,nextSibling:g,setScopeId:v=xe,insertStaticContent:C}=t,P=(f,d,p,m=null,y=null,b=null,R=!1,E=null,w=!!d.dynamicChildren)=>{if(f===d)return;f&&!fn(f,d)&&(m=_(f),ge(f,y,b,!0),f=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:I,ref:x,shapeFlag:A}=d;switch(I){case Nr:L(f,d,p,m);break;case Pt:k(f,d,p,m);break;case Wr:f==null&&D(d,p,m,R);break;case Ie:yt(f,d,p,m,y,b,R,E,w);break;default:A&1?re(f,d,p,m,y,b,R,E,w):A&6?Le(f,d,p,m,y,b,R,E,w):(A&64||A&128)&&I.process(f,d,p,m,y,b,R,E,w,T)}x!=null&&y&&ps(x,f&&f.ref,b,d||f,!d)},L=(f,d,p,m)=>{if(f==null)r(d.el=c(d.children),p,m);else{const y=d.el=f.el;d.children!==f.children&&l(y,d.children)}},k=(f,d,p,m)=>{f==null?r(d.el=a(d.children||""),p,m):d.el=f.el},D=(f,d,p,m)=>{[f.el,f.anchor]=C(f.children,d,p,m,f.el,f.anchor)},j=({el:f,anchor:d},p,m)=>{let y;for(;f&&f!==d;)y=g(f),r(f,p,m),f=y;r(d,p,m)},M=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=g(f),s(f),f=p;s(d)},re=(f,d,p,m,y,b,R,E,w)=>{R=R||d.type==="svg",f==null?se(d,p,m,y,b,R,E,w):Me(f,d,y,b,R,E,w)},se=(f,d,p,m,y,b,R,E)=>{let w,I;const{type:x,props:A,shapeFlag:N,transition:$,dirs:H}=f;if(w=f.el=o(f.type,b,A&&A.is,A),N&8?u(w,f.children):N&16&&Re(f.children,w,null,m,y,b&&x!=="foreignObject",R,E),H&&bt(f,null,m,"created"),ve(w,f,f.scopeId,R,m),A){for(const J in A)J!=="value"&&!Qn(J)&&i(w,J,null,A[J],b,f.children,m,y,ue);"value"in A&&i(w,"value",null,A.value),(I=A.onVnodeBeforeMount)&&Be(I,m,f)}H&&bt(f,null,m,"beforeMount");const Z=(!y||y&&!y.pendingBranch)&&$&&!$.persisted;Z&&$.beforeEnter(w),r(w,d,p),((I=A&&A.onVnodeMounted)||Z||H)&&me(()=>{I&&Be(I,m,f),Z&&$.enter(w),H&&bt(f,null,m,"mounted")},y)},ve=(f,d,p,m,y)=>{if(p&&v(f,p),m)for(let b=0;b<m.length;b++)v(f,m[b]);if(y){let b=y.subTree;if(d===b){const R=y.vnode;ve(f,R,R.scopeId,R.slotScopeIds,y.parent)}}},Re=(f,d,p,m,y,b,R,E,w=0)=>{for(let I=w;I<f.length;I++){const x=f[I]=E?ct(f[I]):Fe(f[I]);P(null,x,d,p,m,y,b,R,E)}},Me=(f,d,p,m,y,b,R)=>{const E=d.el=f.el;let{patchFlag:w,dynamicChildren:I,dirs:x}=d;w|=f.patchFlag&16;const A=f.props||ee,N=d.props||ee;let $;p&&It(p,!1),($=N.onVnodeBeforeUpdate)&&Be($,p,d,f),x&&bt(d,f,p,"beforeUpdate"),p&&It(p,!0);const H=y&&d.type!=="foreignObject";if(I?be(f.dynamicChildren,I,E,p,m,H,b):R||K(f,d,E,null,p,m,H,b,!1),w>0){if(w&16)rt(E,d,A,N,p,m,y);else if(w&2&&A.class!==N.class&&i(E,"class",null,N.class,y),w&4&&i(E,"style",A.style,N.style,y),w&8){const Z=d.dynamicProps;for(let J=0;J<Z.length;J++){const ne=Z[J],Se=A[ne],Ut=N[ne];(Ut!==Se||ne==="value")&&i(E,ne,Se,Ut,y,f.children,p,m,ue)}}w&1&&f.children!==d.children&&u(E,d.children)}else!R&&I==null&&rt(E,d,A,N,p,m,y);(($=N.onVnodeUpdated)||x)&&me(()=>{$&&Be($,p,d,f),x&&bt(d,f,p,"updated")},m)},be=(f,d,p,m,y,b,R)=>{for(let E=0;E<d.length;E++){const w=f[E],I=d[E],x=w.el&&(w.type===Ie||!fn(w,I)||w.shapeFlag&70)?h(w.el):p;P(w,I,x,null,m,y,b,R,!0)}},rt=(f,d,p,m,y,b,R)=>{if(p!==m){if(p!==ee)for(const E in p)!Qn(E)&&!(E in m)&&i(f,E,p[E],null,R,d.children,y,b,ue);for(const E in m){if(Qn(E))continue;const w=m[E],I=p[E];w!==I&&E!=="value"&&i(f,E,I,w,R,d.children,y,b,ue)}"value"in m&&i(f,"value",p.value,m.value)}},yt=(f,d,p,m,y,b,R,E,w)=>{const I=d.el=f?f.el:c(""),x=d.anchor=f?f.anchor:c("");let{patchFlag:A,dynamicChildren:N,slotScopeIds:$}=d;$&&(E=E?E.concat($):$),f==null?(r(I,p,m),r(x,p,m),Re(d.children,p,x,y,b,R,E,w)):A>0&&A&64&&N&&f.dynamicChildren?(be(f.dynamicChildren,N,p,y,b,R,E),(d.key!=null||y&&d===y.subTree)&&Ea(f,d,!0)):K(f,d,p,x,y,b,R,E,w)},Le=(f,d,p,m,y,b,R,E,w)=>{d.slotScopeIds=E,f==null?d.shapeFlag&512?y.ctx.activate(d,p,m,R,w):ln(d,p,m,y,b,R,w):Dt(f,d,w)},ln=(f,d,p,m,y,b,R)=>{const E=f.component=Nu(f,m,y);if(fa(f)&&(E.ctx.renderer=T),Du(E),E.asyncDep){if(y&&y.registerDep(E,ie),!f.el){const w=E.subTree=W(Pt);k(null,w,d,p)}return}ie(E,f,d,p,y,b,R)},Dt=(f,d,p)=>{const m=d.component=f.component;if(Vl(f,d,p))if(m.asyncDep&&!m.asyncResolved){X(m,d,p);return}else m.next=d,$l(m.update),m.update();else d.el=f.el,m.vnode=d},ie=(f,d,p,m,y,b,R)=>{const E=()=>{if(f.isMounted){let{next:x,bu:A,u:N,parent:$,vnode:H}=f,Z=x,J;It(f,!1),x?(x.el=H.el,X(f,x,R)):x=H,A&&Fr(A),(J=x.props&&x.props.onVnodeBeforeUpdate)&&Be(J,$,x,H),It(f,!0);const ne=Hr(f),Se=f.subTree;f.subTree=ne,P(Se,ne,h(Se.el),_(Se),f,y,b),x.el=ne.el,Z===null&&zl(f,ne.el),N&&me(N,y),(J=x.props&&x.props.onVnodeUpdated)&&me(()=>Be(J,$,x,H),y)}else{let x;const{el:A,props:N}=d,{bm:$,m:H,parent:Z}=f,J=er(d);if(It(f,!1),$&&Fr($),!J&&(x=N&&N.onVnodeBeforeMount)&&Be(x,Z,d),It(f,!0),A&&q){const ne=()=>{f.subTree=Hr(f),q(A,f.subTree,f,y,null)};J?d.type.__asyncLoader().then(()=>!f.isUnmounted&&ne()):ne()}else{const ne=f.subTree=Hr(f);P(null,ne,p,m,f,y,b),d.el=ne.el}if(H&&me(H,y),!J&&(x=N&&N.onVnodeMounted)){const ne=d;me(()=>Be(x,Z,ne),y)}(d.shapeFlag&256||Z&&er(Z.vnode)&&Z.vnode.shapeFlag&256)&&f.a&&me(f.a,y),f.isMounted=!0,d=p=m=null}},w=f.effect=new Ms(E,()=>js(I),f.scope),I=f.update=()=>w.run();I.id=f.uid,It(f,!0),I()},X=(f,d,p)=>{d.component=f;const m=f.vnode.props;f.vnode=d,f.next=null,vu(f,d.props,m,p),Iu(f,d.children,p),nn(),wi(),rn()},K=(f,d,p,m,y,b,R,E,w=!1)=>{const I=f&&f.children,x=f?f.shapeFlag:0,A=d.children,{patchFlag:N,shapeFlag:$}=d;if(N>0){if(N&128){st(I,A,p,m,y,b,R,E,w);return}else if(N&256){qe(I,A,p,m,y,b,R,E,w);return}}$&8?(x&16&&ue(I,y,b),A!==I&&u(p,A)):x&16?$&16?st(I,A,p,m,y,b,R,E,w):ue(I,y,b,!0):(x&8&&u(p,""),$&16&&Re(A,p,m,y,b,R,E,w))},qe=(f,d,p,m,y,b,R,E,w)=>{f=f||Ht,d=d||Ht;const I=f.length,x=d.length,A=Math.min(I,x);let N;for(N=0;N<A;N++){const $=d[N]=w?ct(d[N]):Fe(d[N]);P(f[N],$,p,null,y,b,R,E,w)}I>x?ue(f,y,b,!0,!1,A):Re(d,p,m,y,b,R,E,w,A)},st=(f,d,p,m,y,b,R,E,w)=>{let I=0;const x=d.length;let A=f.length-1,N=x-1;for(;I<=A&&I<=N;){const $=f[I],H=d[I]=w?ct(d[I]):Fe(d[I]);if(fn($,H))P($,H,p,null,y,b,R,E,w);else break;I++}for(;I<=A&&I<=N;){const $=f[A],H=d[N]=w?ct(d[N]):Fe(d[N]);if(fn($,H))P($,H,p,null,y,b,R,E,w);else break;A--,N--}if(I>A){if(I<=N){const $=N+1,H=$<x?d[$].el:m;for(;I<=N;)P(null,d[I]=w?ct(d[I]):Fe(d[I]),p,H,y,b,R,E,w),I++}}else if(I>N)for(;I<=A;)ge(f[I],y,b,!0),I++;else{const $=I,H=I,Z=new Map;for(I=H;I<=N;I++){const ye=d[I]=w?ct(d[I]):Fe(d[I]);ye.key!=null&&Z.set(ye.key,I)}let J,ne=0;const Se=N-H+1;let Ut=!1,di=0;const un=new Array(Se);for(I=0;I<Se;I++)un[I]=0;for(I=$;I<=A;I++){const ye=f[I];if(ne>=Se){ge(ye,y,b,!0);continue}let $e;if(ye.key!=null)$e=Z.get(ye.key);else for(J=H;J<=N;J++)if(un[J-H]===0&&fn(ye,d[J])){$e=J;break}$e===void 0?ge(ye,y,b,!0):(un[$e-H]=I+1,$e>=di?di=$e:Ut=!0,P(ye,d[$e],p,null,y,b,R,E,w),ne++)}const hi=Ut?Tu(un):Ht;for(J=hi.length-1,I=Se-1;I>=0;I--){const ye=H+I,$e=d[ye],pi=ye+1<x?d[ye+1].el:m;un[I]===0?P(null,$e,p,pi,y,b,R,E,w):Ut&&(J<0||I!==hi[J]?Ue($e,p,pi,2):J--)}}},Ue=(f,d,p,m,y=null)=>{const{el:b,type:R,transition:E,children:w,shapeFlag:I}=f;if(I&6){Ue(f.component.subTree,d,p,m);return}if(I&128){f.suspense.move(d,p,m);return}if(I&64){R.move(f,d,p,T);return}if(R===Ie){r(b,d,p);for(let A=0;A<w.length;A++)Ue(w[A],d,p,m);r(f.anchor,d,p);return}if(R===Wr){j(f,d,p);return}if(m!==2&&I&1&&E)if(m===0)E.beforeEnter(b),r(b,d,p),me(()=>E.enter(b),y);else{const{leave:A,delayLeave:N,afterLeave:$}=E,H=()=>r(b,d,p),Z=()=>{A(b,()=>{H(),$&&$()})};N?N(b,H,Z):Z()}else r(b,d,p)},ge=(f,d,p,m=!1,y=!1)=>{const{type:b,props:R,ref:E,children:w,dynamicChildren:I,shapeFlag:x,patchFlag:A,dirs:N}=f;if(E!=null&&ps(E,null,p,f,!0),x&256){d.ctx.deactivate(f);return}const $=x&1&&N,H=!er(f);let Z;if(H&&(Z=R&&R.onVnodeBeforeUnmount)&&Be(Z,d,f),x&6)Vn(f.component,p,m);else{if(x&128){f.suspense.unmount(p,m);return}$&&bt(f,null,d,"beforeUnmount"),x&64?f.type.remove(f,d,p,y,T,m):I&&(b!==Ie||A>0&&A&64)?ue(I,d,p,!1,!0):(b===Ie&&A&384||!y&&x&16)&&ue(w,d,p),m&&Mt(f)}(H&&(Z=R&&R.onVnodeUnmounted)||$)&&me(()=>{Z&&Be(Z,d,f),$&&bt(f,null,d,"unmounted")},p)},Mt=f=>{const{type:d,el:p,anchor:m,transition:y}=f;if(d===Ie){Lt(p,m);return}if(d===Wr){M(f);return}const b=()=>{s(p),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:R,delayLeave:E}=y,w=()=>R(p,b);E?E(f.el,b,w):w()}else b()},Lt=(f,d)=>{let p;for(;f!==d;)p=g(f),s(f),f=p;s(d)},Vn=(f,d,p)=>{const{bum:m,scope:y,update:b,subTree:R,um:E}=f;m&&Fr(m),y.stop(),b&&(b.active=!1,ge(R,f,d,p)),E&&me(E,d),me(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},ue=(f,d,p,m=!1,y=!1,b=0)=>{for(let R=b;R<f.length;R++)ge(f[R],d,p,m,y)},_=f=>f.shapeFlag&6?_(f.component.subTree):f.shapeFlag&128?f.suspense.next():g(f.anchor||f.el),S=(f,d,p)=>{f==null?d._vnode&&ge(d._vnode,null,null,!0):P(d._vnode||null,f,d,null,null,null,p),wi(),ia(),d._vnode=f},T={p:P,um:ge,m:Ue,r:Mt,mt:ln,mc:Re,pc:K,pbc:be,n:_,o:t};let O,q;return e&&([O,q]=e(T)),{render:S,hydrate:O,createApp:mu(S,O)}}function It({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ea(t,e,n=!1){const r=t.children,s=e.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=ct(s[i]),c.el=o.el),n||Ea(o,c)),c.type===Nr&&(c.el=o.el)}}function Tu(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<l?i=c+1:o=c;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Ru=t=>t.__isTeleport,Ie=Symbol.for("v-fgt"),Nr=Symbol.for("v-txt"),Pt=Symbol.for("v-cmt"),Wr=Symbol.for("v-stc"),vn=[];let ke=null;function we(t=!1){vn.push(ke=t?null:[])}function Su(){vn.pop(),ke=vn[vn.length-1]||null}let Sn=1;function Di(t){Sn+=t}function wa(t){return t.dynamicChildren=Sn>0?ke||Ht:null,Su(),Sn>0&&ke&&ke.push(t),t}function ze(t,e,n,r,s,i){return wa(Y(t,e,n,r,s,i,!0))}function Ta(t,e,n,r,s){return wa(W(t,e,n,r,s,!0))}function gs(t){return t?t.__v_isVNode===!0:!1}function fn(t,e){return t.type===e.type&&t.key===e.key}const Dr="__vInternal",Ra=({key:t})=>t??null,nr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ae(t)||de(t)||F(t)?{i:Oe,r:t,k:e,f:!!n}:t:null);function Y(t,e=null,n=null,r=0,s=null,i=t===Ie?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ra(e),ref:e&&nr(e),scopeId:Pr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Oe};return c?(Ks(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=ae(n)?8:16),Sn>0&&!o&&ke&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&ke.push(a),a}const W=Cu;function Cu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===au)&&(t=Pt),gs(t)){const c=Yt(t,e,!0);return n&&Ks(c,n),Sn>0&&!i&&ke&&(c.shapeFlag&6?ke[ke.indexOf(t)]=c:ke.push(c)),c.patchFlag|=-2,c}if(Bu(t)&&(t=t.__vccOpts),e){e=Au(e);let{class:c,style:a}=e;c&&!ae(c)&&(e.class=Ns(c)),te(a)&&(Yo(a)&&!B(a)&&(a=oe({},a)),e.style=xs(a))}const o=ae(t)?1:Kl(t)?128:Ru(t)?64:te(t)?4:F(t)?2:0;return Y(t,e,n,r,s,o,i,!0)}function Au(t){return t?Yo(t)||Dr in t?oe({},t):t:null}function Yt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,c=e?Ou(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Ra(c),ref:e&&e.ref?n&&s?B(s)?s.concat(nr(e)):[s,nr(e)]:nr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ie?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Yt(t.ssContent),ssFallback:t.ssFallback&&Yt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Cn(t=" ",e=0){return W(Nr,null,t,e)}function Pu(t="",e=!1){return e?(we(),Ta(Pt,null,t)):W(Pt,null,t)}function Fe(t){return t==null||typeof t=="boolean"?W(Pt):B(t)?W(Ie,null,t.slice()):typeof t=="object"?ct(t):W(Nr,null,String(t))}function ct(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Yt(t)}function Ks(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ks(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Dr in e)?e._ctx=Oe:s===3&&Oe&&(Oe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else F(e)?(e={default:e,_ctx:Oe},n=32):(e=String(e),r&64?(n=16,e=[Cn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ou(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ns([e.class,r.class]));else if(s==="style")e.style=xs([e.style,r.style]);else if(Ir(s)){const i=e[s],o=r[s];o&&i!==o&&!(B(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Be(t,e,n,r=null){Ne(t,e,7,[n,r])}const ku=ma();let xu=0;function Nu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||ku,i={uid:xu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new el(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:va(r,s),emitsOptions:aa(r,s),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:r.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Hl.bind(null,i),t.ce&&t.ce(i),i}let le=null,qs,$t,Mi="__VUE_INSTANCE_SETTERS__";($t=ss()[Mi])||($t=ss()[Mi]=[]),$t.push(t=>le=t),qs=t=>{$t.length>1?$t.forEach(e=>e(t)):$t[0](t)};const Xt=t=>{qs(t),t.scope.on()},Ct=()=>{le&&le.scope.off(),qs(null)};function Sa(t){return t.vnode.shapeFlag&4}let An=!1;function Du(t,e=!1){An=e;const{props:n,children:r}=t.vnode,s=Sa(t);_u(t,n,s,e),bu(t,r);const i=s?Mu(t,e):void 0;return An=!1,i}function Mu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Xo(new Proxy(t.ctx,lu));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Uu(t):null;Xt(t),nn();const i=pt(r,t,0,[t.props,s]);if(rn(),Ct(),Do(i)){if(i.then(Ct,Ct),e)return i.then(o=>{Li(t,o,e)}).catch(o=>{Cr(o,t,0)});t.asyncDep=i}else Li(t,i,e)}else Ca(t,e)}function Li(t,e,n){F(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:te(e)&&(t.setupState=ta(e)),Ca(t,n)}let Ui;function Ca(t,e,n){const r=t.type;if(!t.render){if(!e&&Ui&&!r.render){const s=r.template||Vs(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,l=oe(oe({isCustomElement:i,delimiters:c},o),a);r.render=Ui(s,l)}}t.render=r.render||xe}Xt(t),nn(),uu(t),rn(),Ct()}function Lu(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return _e(t,"get","$attrs"),e[n]}}))}function Uu(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Lu(t)},slots:t.slots,emit:t.emit,expose:e}}function Gs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ta(Xo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _n)return _n[n](t)},has(e,n){return n in e||n in _n}}))}function $u(t,e=!0){return F(t)?t.displayName||t.name:t.name||e&&t.__name}function Bu(t){return F(t)&&"__vccOpts"in t}const Ee=(t,e)=>Ml(t,e,An);function Aa(t,e,n){const r=arguments.length;return r===2?te(e)&&!B(e)?gs(e)?W(t,null,[e]):W(t,e):W(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&gs(n)&&(n=[n]),W(t,e,n))}const Fu=Symbol.for("v-scx"),Hu=()=>Qe(Fu),ju="3.3.4",Wu="http://www.w3.org/2000/svg",Tt=typeof document<"u"?document:null,$i=Tt&&Tt.createElement("template"),Vu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Tt.createElementNS(Wu,t):Tt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Tt.createTextNode(t),createComment:t=>Tt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Tt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{$i.innerHTML=r?`<svg>${t}</svg>`:t;const c=$i.content;if(r){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function zu(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ku(t,e,n){const r=t.style,s=ae(n);if(n&&!s){if(e&&!ae(e))for(const i in e)n[i]==null&&ms(r,i,"");for(const i in n)ms(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Bi=/\s*!important$/;function ms(t,e,n){if(B(n))n.forEach(r=>ms(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=qu(t,e);Bi.test(n)?t.setProperty(tn(r),n.replace(Bi,""),"important"):t[r]=n}}const Fi=["Webkit","Moz","ms"],Vr={};function qu(t,e){const n=Vr[e];if(n)return n;let r=Ve(e);if(r!=="filter"&&r in t)return Vr[e]=r;r=Tr(r);for(let s=0;s<Fi.length;s++){const i=Fi[s]+r;if(i in t)return Vr[e]=i}return e}const Hi="http://www.w3.org/1999/xlink";function Gu(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Hi,e.slice(6,e.length)):t.setAttributeNS(Hi,e,n);else{const i=Zc(e);n==null||i&&!Uo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Ju(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){t._value=n;const l=c==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Uo(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Yu(t,e,n,r){t.addEventListener(e,n,r)}function Xu(t,e,n,r){t.removeEventListener(e,n,r)}function Qu(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=Zu(e);if(r){const l=i[e]=nf(r,s);Yu(t,c,l,a)}else o&&(Xu(t,c,o,a),i[e]=void 0)}}const ji=/(?:Once|Passive|Capture)$/;function Zu(t){let e;if(ji.test(t)){e={};let r;for(;r=t.match(ji);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):tn(t.slice(2)),e]}let zr=0;const ef=Promise.resolve(),tf=()=>zr||(ef.then(()=>zr=0),zr=Date.now());function nf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ne(rf(r,n.value),e,5,[r])};return n.value=t,n.attached=tf(),n}function rf(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Wi=/^on[a-z]/,sf=(t,e,n,r,s=!1,i,o,c,a)=>{e==="class"?zu(t,r,s):e==="style"?Ku(t,n,r):Ir(e)?As(e)||Qu(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):of(t,e,r,s))?Ju(t,e,r,i,o,c,a):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Gu(t,e,r,s))};function of(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Wi.test(e)&&F(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Wi.test(e)&&ae(n)?!1:e in t}const af=oe({patchProp:sf},Vu);let Vi;function cf(){return Vi||(Vi=Eu(af))}const lf=(...t)=>{const e=cf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=uf(r);if(!s)return;const i=e._component;!F(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function uf(t){return ae(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Bt=typeof window<"u";function ff(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const G=Object.assign;function Kr(t,e){const n={};for(const r in e){const s=e[r];n[r]=De(s)?s.map(t):t(s)}return n}const yn=()=>{},De=Array.isArray,df=/\/$/,hf=t=>t.replace(df,"");function qr(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=_f(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function pf(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function zi(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function gf(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Qt(e.matched[r],n.matched[s])&&Pa(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Qt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Pa(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!mf(t[n],e[n]))return!1;return!0}function mf(t,e){return De(t)?Ki(t,e):De(e)?Ki(e,t):t===e}function Ki(t,e){return De(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function _f(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Pn;(function(t){t.pop="pop",t.push="push"})(Pn||(Pn={}));var bn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(bn||(bn={}));function vf(t){if(!t)if(Bt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),hf(t)}const yf=/^[^#]+#/;function bf(t,e){return t.replace(yf,"#")+e}function If(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Mr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ef(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=If(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function qi(t,e){return(history.state?history.state.position-e:-1)+t}const _s=new Map;function wf(t,e){_s.set(t,e)}function Tf(t){const e=_s.get(t);return _s.delete(t),e}let Rf=()=>location.protocol+"//"+location.host;function Oa(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),zi(a,"")}return zi(n,t)+r+s}function Sf(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const v=Oa(t,location),C=n.value,P=e.value;let L=0;if(g){if(n.value=v,e.value=g,o&&o===C){o=null;return}L=P?g.position-P.position:0}else r(v);s.forEach(k=>{k(n.value,C,{delta:L,type:Pn.pop,direction:L?L>0?bn.forward:bn.back:bn.unknown})})};function a(){o=n.value}function l(g){s.push(g);const v=()=>{const C=s.indexOf(g);C>-1&&s.splice(C,1)};return i.push(v),v}function u(){const{history:g}=window;g.state&&g.replaceState(G({},g.state,{scroll:Mr()}),"")}function h(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:l,destroy:h}}function Gi(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Mr():null}}function Cf(t){const{history:e,location:n}=window,r={value:Oa(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,l,u){const h=t.indexOf("#"),g=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:Rf()+t+a;try{e[u?"replaceState":"pushState"](l,"",g),s.value=l}catch(v){console.error(v),n[u?"replace":"assign"](g)}}function o(a,l){const u=G({},e.state,Gi(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,u,!0),r.value=a}function c(a,l){const u=G({},s.value,e.state,{forward:a,scroll:Mr()});i(u.current,u,!0);const h=G({},Gi(r.value,a,null),{position:u.position+1},l);i(a,h,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function Af(t){t=vf(t);const e=Cf(t),n=Sf(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=G({location:"",base:t,go:r,createHref:bf.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Pf(t){return typeof t=="string"||t&&typeof t=="object"}function ka(t){return typeof t=="string"||typeof t=="symbol"}const ot={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xa=Symbol("");var Ji;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ji||(Ji={}));function Zt(t,e){return G(new Error,{type:t,[xa]:!0},e)}function Ge(t,e){return t instanceof Error&&xa in t&&(e==null||!!(t.type&e))}const Yi="[^/]+?",Of={sensitive:!1,strict:!1,start:!0,end:!0},kf=/[.+*?^${}()[\]/\\]/g;function xf(t,e){const n=G({},Of,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const g=l[h];let v=40+(n.sensitive?.25:0);if(g.type===0)h||(s+="/"),s+=g.value.replace(kf,"\\$&"),v+=40;else if(g.type===1){const{value:C,repeatable:P,optional:L,regexp:k}=g;i.push({name:C,repeatable:P,optional:L});const D=k||Yi;if(D!==Yi){v+=10;try{new RegExp(`(${D})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${C}" (${D}): `+M.message)}}let j=P?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(j=L&&l.length<2?`(?:/${j})`:"/"+j),L&&(j+="?"),s+=j,v+=20,L&&(v+=-8),P&&(v+=-20),D===".*"&&(v+=-50)}u.push(v)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const u=l.match(o),h={};if(!u)return null;for(let g=1;g<u.length;g++){const v=u[g]||"",C=i[g-1];h[C.name]=v&&C.repeatable?v.split("/"):v}return h}function a(l){let u="",h=!1;for(const g of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const v of g)if(v.type===0)u+=v.value;else if(v.type===1){const{value:C,repeatable:P,optional:L}=v,k=C in l?l[C]:"";if(De(k)&&!P)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const D=De(k)?k.join("/"):k;if(!D)if(L)g.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${C}"`);u+=D}}return u||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function Nf(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Df(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Nf(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Xi(r))return 1;if(Xi(s))return-1}return s.length-r.length}function Xi(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Mf={type:0,value:""},Lf=/[a-zA-Z0-9_]/;function Uf(t){if(!t)return[[]];if(t==="/")return[[Mf]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${l}": ${v}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function g(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&h(),o()):a===":"?(h(),n=1):g();break;case 4:g(),n=r;break;case 1:a==="("?n=2:Lf.test(a)?g():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function $f(t,e,n){const r=xf(Uf(t.path),n),s=G(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Bf(t,e){const n=[],r=new Map;e=eo({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,g){const v=!g,C=Ff(u);C.aliasOf=g&&g.record;const P=eo(e,u),L=[C];if("alias"in u){const j=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of j)L.push(G({},C,{components:g?g.record.components:C.components,path:M,aliasOf:g?g.record:C}))}let k,D;for(const j of L){const{path:M}=j;if(h&&M[0]!=="/"){const re=h.record.path,se=re[re.length-1]==="/"?"":"/";j.path=h.record.path+(M&&se+M)}if(k=$f(j,h,P),g?g.alias.push(k):(D=D||k,D!==k&&D.alias.push(k),v&&u.name&&!Zi(k)&&o(u.name)),C.children){const re=C.children;for(let se=0;se<re.length;se++)i(re[se],k,g&&g.children[se])}g=g||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&a(k)}return D?()=>{o(D)}:yn}function o(u){if(ka(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function c(){return n}function a(u){let h=0;for(;h<n.length&&Df(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Na(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Zi(u)&&r.set(u.record.name,u)}function l(u,h){let g,v={},C,P;if("name"in u&&u.name){if(g=r.get(u.name),!g)throw Zt(1,{location:u});P=g.record.name,v=G(Qi(h.params,g.keys.filter(D=>!D.optional).map(D=>D.name)),u.params&&Qi(u.params,g.keys.map(D=>D.name))),C=g.stringify(v)}else if("path"in u)C=u.path,g=n.find(D=>D.re.test(C)),g&&(v=g.parse(C),P=g.record.name);else{if(g=h.name?r.get(h.name):n.find(D=>D.re.test(h.path)),!g)throw Zt(1,{location:u,currentLocation:h});P=g.record.name,v=G({},h.params,u.params),C=g.stringify(v)}const L=[];let k=g;for(;k;)L.unshift(k.record),k=k.parent;return{name:P,path:C,params:v,matched:L,meta:jf(L)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function Qi(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Ff(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Hf(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Hf(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Zi(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function jf(t){return t.reduce((e,n)=>G(e,n.meta),{})}function eo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Na(t,e){return e.children.some(n=>n===t||Na(t,n))}const Da=/#/g,Wf=/&/g,Vf=/\//g,zf=/=/g,Kf=/\?/g,Ma=/\+/g,qf=/%5B/g,Gf=/%5D/g,La=/%5E/g,Jf=/%60/g,Ua=/%7B/g,Yf=/%7C/g,$a=/%7D/g,Xf=/%20/g;function Js(t){return encodeURI(""+t).replace(Yf,"|").replace(qf,"[").replace(Gf,"]")}function Qf(t){return Js(t).replace(Ua,"{").replace($a,"}").replace(La,"^")}function vs(t){return Js(t).replace(Ma,"%2B").replace(Xf,"+").replace(Da,"%23").replace(Wf,"%26").replace(Jf,"`").replace(Ua,"{").replace($a,"}").replace(La,"^")}function Zf(t){return vs(t).replace(zf,"%3D")}function ed(t){return Js(t).replace(Da,"%23").replace(Kf,"%3F")}function td(t){return t==null?"":ed(t).replace(Vf,"%2F")}function dr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function nd(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Ma," "),o=i.indexOf("="),c=dr(o<0?i:i.slice(0,o)),a=o<0?null:dr(i.slice(o+1));if(c in e){let l=e[c];De(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function to(t){let e="";for(let n in t){const r=t[n];if(n=Zf(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(De(r)?r.map(i=>i&&vs(i)):[r&&vs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function rd(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=De(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const sd=Symbol(""),no=Symbol(""),Ys=Symbol(""),Ba=Symbol(""),ys=Symbol("");function dn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function lt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,c)=>{const a=h=>{h===!1?c(Zt(4,{from:n,to:e})):h instanceof Error?c(h):Pf(h)?c(Zt(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,a);let u=Promise.resolve(l);t.length<3&&(u=u.then(a)),u.catch(h=>c(h))})}function Gr(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let c=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(id(c)){const l=(c.__vccOpts||c)[e];l&&s.push(lt(l,n,r,i,o))}else{let a=c();s.push(()=>a.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=ff(l)?l.default:l;i.components[o]=u;const g=(u.__vccOpts||u)[e];return g&&lt(g,n,r,i,o)()}))}}return s}function id(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ro(t){const e=Qe(Ys),n=Qe(Ba),r=Ee(()=>e.resolve(Vt(t.to))),s=Ee(()=>{const{matched:a}=r.value,{length:l}=a,u=a[l-1],h=n.matched;if(!u||!h.length)return-1;const g=h.findIndex(Qt.bind(null,u));if(g>-1)return g;const v=so(a[l-2]);return l>1&&so(u)===v&&h[h.length-1].path!==v?h.findIndex(Qt.bind(null,a[l-2])):g}),i=Ee(()=>s.value>-1&&ld(n.params,r.value.params)),o=Ee(()=>s.value>-1&&s.value===n.matched.length-1&&Pa(n.params,r.value.params));function c(a={}){return cd(a)?e[Vt(t.replace)?"replace":"push"](Vt(t.to)).catch(yn):Promise.resolve()}return{route:r,href:Ee(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const od=ua({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ro,setup(t,{slots:e}){const n=sn(ro(t)),{options:r}=Qe(Ys),s=Ee(()=>({[io(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[io(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Aa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ad=od;function cd(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ld(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!De(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function so(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const io=(t,e,n)=>t??e??n,ud=ua({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Qe(ys),s=Ee(()=>t.route||r.value),i=Qe(no,0),o=Ee(()=>{let l=Vt(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),c=Ee(()=>s.value.matched[o.value]);tr(no,Ee(()=>o.value+1)),tr(sd,c),tr(ys,s);const a=Ol();return Zn(()=>[a.value,c.value,t.name],([l,u,h],[g,v,C])=>{u&&(u.instances[h]=l,v&&v!==u&&l&&l===g&&(u.leaveGuards.size||(u.leaveGuards=v.leaveGuards),u.updateGuards.size||(u.updateGuards=v.updateGuards))),l&&u&&(!v||!Qt(u,v)||!g)&&(u.enterCallbacks[h]||[]).forEach(P=>P(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=c.value,g=h&&h.components[u];if(!g)return oo(n.default,{Component:g,route:l});const v=h.props[u],C=v?v===!0?l.params:typeof v=="function"?v(l):v:null,L=Aa(g,G({},C,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return oo(n.default,{Component:L,route:l})||L}}});function oo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const fd=ud;function dd(t){const e=Bf(t.routes,t),n=t.parseQuery||nd,r=t.stringifyQuery||to,s=t.history,i=dn(),o=dn(),c=dn(),a=kl(ot);let l=ot;Bt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Kr.bind(null,_=>""+_),h=Kr.bind(null,td),g=Kr.bind(null,dr);function v(_,S){let T,O;return ka(_)?(T=e.getRecordMatcher(_),O=S):O=_,e.addRoute(O,T)}function C(_){const S=e.getRecordMatcher(_);S&&e.removeRoute(S)}function P(){return e.getRoutes().map(_=>_.record)}function L(_){return!!e.getRecordMatcher(_)}function k(_,S){if(S=G({},S||a.value),typeof _=="string"){const p=qr(n,_,S.path),m=e.resolve({path:p.path},S),y=s.createHref(p.fullPath);return G(p,m,{params:g(m.params),hash:dr(p.hash),redirectedFrom:void 0,href:y})}let T;if("path"in _)T=G({},_,{path:qr(n,_.path,S.path).path});else{const p=G({},_.params);for(const m in p)p[m]==null&&delete p[m];T=G({},_,{params:h(p)}),S.params=h(S.params)}const O=e.resolve(T,S),q=_.hash||"";O.params=u(g(O.params));const f=pf(r,G({},_,{hash:Qf(q),path:O.path})),d=s.createHref(f);return G({fullPath:f,hash:q,query:r===to?rd(_.query):_.query||{}},O,{redirectedFrom:void 0,href:d})}function D(_){return typeof _=="string"?qr(n,_,a.value.path):G({},_)}function j(_,S){if(l!==_)return Zt(8,{from:S,to:_})}function M(_){return ve(_)}function re(_){return M(G(D(_),{replace:!0}))}function se(_){const S=_.matched[_.matched.length-1];if(S&&S.redirect){const{redirect:T}=S;let O=typeof T=="function"?T(_):T;return typeof O=="string"&&(O=O.includes("?")||O.includes("#")?O=D(O):{path:O},O.params={}),G({query:_.query,hash:_.hash,params:"path"in O?{}:_.params},O)}}function ve(_,S){const T=l=k(_),O=a.value,q=_.state,f=_.force,d=_.replace===!0,p=se(T);if(p)return ve(G(D(p),{state:typeof p=="object"?G({},q,p.state):q,force:f,replace:d}),S||T);const m=T;m.redirectedFrom=S;let y;return!f&&gf(r,O,T)&&(y=Zt(16,{to:m,from:O}),Ue(O,O,!0,!1)),(y?Promise.resolve(y):be(m,O)).catch(b=>Ge(b)?Ge(b,2)?b:st(b):K(b,m,O)).then(b=>{if(b){if(Ge(b,2))return ve(G({replace:d},D(b.to),{state:typeof b.to=="object"?G({},q,b.to.state):q,force:f}),S||m)}else b=yt(m,O,!0,d,q);return rt(m,O,b),b})}function Re(_,S){const T=j(_,S);return T?Promise.reject(T):Promise.resolve()}function Me(_){const S=Lt.values().next().value;return S&&typeof S.runWithContext=="function"?S.runWithContext(_):_()}function be(_,S){let T;const[O,q,f]=hd(_,S);T=Gr(O.reverse(),"beforeRouteLeave",_,S);for(const p of O)p.leaveGuards.forEach(m=>{T.push(lt(m,_,S))});const d=Re.bind(null,_,S);return T.push(d),ue(T).then(()=>{T=[];for(const p of i.list())T.push(lt(p,_,S));return T.push(d),ue(T)}).then(()=>{T=Gr(q,"beforeRouteUpdate",_,S);for(const p of q)p.updateGuards.forEach(m=>{T.push(lt(m,_,S))});return T.push(d),ue(T)}).then(()=>{T=[];for(const p of _.matched)if(p.beforeEnter&&!S.matched.includes(p))if(De(p.beforeEnter))for(const m of p.beforeEnter)T.push(lt(m,_,S));else T.push(lt(p.beforeEnter,_,S));return T.push(d),ue(T)}).then(()=>(_.matched.forEach(p=>p.enterCallbacks={}),T=Gr(f,"beforeRouteEnter",_,S),T.push(d),ue(T))).then(()=>{T=[];for(const p of o.list())T.push(lt(p,_,S));return T.push(d),ue(T)}).catch(p=>Ge(p,8)?p:Promise.reject(p))}function rt(_,S,T){for(const O of c.list())Me(()=>O(_,S,T))}function yt(_,S,T,O,q){const f=j(_,S);if(f)return f;const d=S===ot,p=Bt?history.state:{};T&&(O||d?s.replace(_.fullPath,G({scroll:d&&p&&p.scroll},q)):s.push(_.fullPath,q)),a.value=_,Ue(_,S,T,d),st()}let Le;function ln(){Le||(Le=s.listen((_,S,T)=>{if(!Vn.listening)return;const O=k(_),q=se(O);if(q){ve(G(q,{replace:!0}),O).catch(yn);return}l=O;const f=a.value;Bt&&wf(qi(f.fullPath,T.delta),Mr()),be(O,f).catch(d=>Ge(d,12)?d:Ge(d,2)?(ve(d.to,O).then(p=>{Ge(p,20)&&!T.delta&&T.type===Pn.pop&&s.go(-1,!1)}).catch(yn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),K(d,O,f))).then(d=>{d=d||yt(O,f,!1),d&&(T.delta&&!Ge(d,8)?s.go(-T.delta,!1):T.type===Pn.pop&&Ge(d,20)&&s.go(-1,!1)),rt(O,f,d)}).catch(yn)}))}let Dt=dn(),ie=dn(),X;function K(_,S,T){st(_);const O=ie.list();return O.length?O.forEach(q=>q(_,S,T)):console.error(_),Promise.reject(_)}function qe(){return X&&a.value!==ot?Promise.resolve():new Promise((_,S)=>{Dt.add([_,S])})}function st(_){return X||(X=!_,ln(),Dt.list().forEach(([S,T])=>_?T(_):S()),Dt.reset()),_}function Ue(_,S,T,O){const{scrollBehavior:q}=t;if(!Bt||!q)return Promise.resolve();const f=!T&&Tf(qi(_.fullPath,0))||(O||!T)&&history.state&&history.state.scroll||null;return ra().then(()=>q(_,S,f)).then(d=>d&&Ef(d)).catch(d=>K(d,_,S))}const ge=_=>s.go(_);let Mt;const Lt=new Set,Vn={currentRoute:a,listening:!0,addRoute:v,removeRoute:C,hasRoute:L,getRoutes:P,resolve:k,options:t,push:M,replace:re,go:ge,back:()=>ge(-1),forward:()=>ge(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:ie.add,isReady:qe,install(_){const S=this;_.component("RouterLink",ad),_.component("RouterView",fd),_.config.globalProperties.$router=S,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Vt(a)}),Bt&&!Mt&&a.value===ot&&(Mt=!0,M(s.location).catch(q=>{}));const T={};for(const q in ot)T[q]=Ee(()=>a.value[q]);_.provide(Ys,S),_.provide(Ba,sn(T)),_.provide(ys,a);const O=_.unmount;Lt.add(_),_.unmount=function(){Lt.delete(_),Lt.size<1&&(l=ot,Le&&Le(),Le=null,a.value=ot,Mt=!1,X=!1),O()}}};function ue(_){return _.reduce((S,T)=>S.then(()=>Me(T)),Promise.resolve())}return Vn}function hd(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(l=>Qt(l,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(l=>Qt(l,a))||s.push(a))}return[n,r,s]}const Ke=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},pd={};function gd(t,e,n,r,s,i){const o=ce("RouterView");return we(),Ta(o)}const md=Ke(pd,[["render",gd]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},_d=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ha={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,l=a?t[s+2]:0,u=i>>2,h=(i&3)<<4|c>>4;let g=(c&15)<<2|l>>6,v=l&63;a||(v=64,o||(g=64)),r.push(n[u],n[h],n[g],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_d(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||l==null||h==null)throw new vd;const g=i<<2|c>>4;if(r.push(g),l!==64){const v=c<<4&240|l>>2;if(r.push(v),h!==64){const C=l<<6&192|h;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class vd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yd=function(t){const e=Fa(t);return Ha.encodeByteArray(e,!0)},ja=function(t){return yd(t).replace(/\./g,"")},Wa=function(t){try{return Ha.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=()=>bd().__FIREBASE_DEFAULTS__,Ed=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},wd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Wa(t[1]);return e&&JSON.parse(e)},Xs=()=>{try{return Id()||Ed()||wd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Td=t=>{var e,n;return(n=(e=Xs())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Va=()=>{var t;return(t=Xs())===null||t===void 0?void 0:t.config},za=t=>{var e;return(e=Xs())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(he())}function Cd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ad(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Pd(){const t=he();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Od(){try{return typeof indexedDB=="object"}catch{return!1}}function kd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd="FirebaseError";class vt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=xd,Object.setPrototypeOf(this,vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ln.prototype.create)}}class Ln{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Nd(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new vt(s,c,r)}}function Nd(t,e){return t.replace(Dd,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Dd=/\{\$([^}]+)}/g;function Md(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function hr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ao(i)&&ao(o)){if(!hr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ao(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function gn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function mn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ld(t,e){const n=new Ud(t,e);return n.subscribe.bind(n)}class Ud{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$d(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Jr),s.error===void 0&&(s.error=Jr),s.complete===void 0&&(s.complete=Jr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $d(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Jr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){return t&&t._delegate?t._delegate:t}class en{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Rd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hd(e))try{this.getOrInitializeService({instanceIdentifier:Et})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Et){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Et){return this.instances.has(e)}getOptions(e=Et){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Fd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Et){return this.component?this.component.multipleInstances?e:Et:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fd(t){return t===Et?void 0:t}function Hd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Bd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const Wd={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Vd=Q.INFO,zd={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Kd=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=zd[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ka{constructor(e){this.name=e,this._logLevel=Vd,this._logHandler=Kd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const qd=(t,e)=>e.some(n=>t instanceof n);let co,lo;function Gd(){return co||(co=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jd(){return lo||(lo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qa=new WeakMap,bs=new WeakMap,Ga=new WeakMap,Yr=new WeakMap,Qs=new WeakMap;function Yd(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(gt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qa.set(n,t)}).catch(()=>{}),Qs.set(e,t),e}function Xd(t){if(bs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});bs.set(t,e)}let Is={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ga.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Qd(t){Is=t(Is)}function Zd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xr(this),e,...n);return Ga.set(r,e.sort?e.sort():[e]),gt(r)}:Jd().includes(t)?function(...e){return t.apply(Xr(this),e),gt(qa.get(this))}:function(...e){return gt(t.apply(Xr(this),e))}}function eh(t){return typeof t=="function"?Zd(t):(t instanceof IDBTransaction&&Xd(t),qd(t,Gd())?new Proxy(t,Is):t)}function gt(t){if(t instanceof IDBRequest)return Yd(t);if(Yr.has(t))return Yr.get(t);const e=eh(t);return e!==t&&(Yr.set(t,e),Qs.set(e,t)),e}const Xr=t=>Qs.get(t);function th(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=gt(o);return r&&o.addEventListener("upgradeneeded",a=>{r(gt(o.result),a.oldVersion,a.newVersion,gt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const nh=["get","getKey","getAll","getAllKeys","count"],rh=["put","add","delete","clear"],Qr=new Map;function uo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qr.get(e))return Qr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=rh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||nh.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return Qr.set(e,i),i}Qd(t=>({...t,get:(e,n,r)=>uo(e,n)||t.get(e,n,r),has:(e,n)=>!!uo(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ih(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ih(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Es="@firebase/app",fo="0.9.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new Ka("@firebase/app"),oh="@firebase/app-compat",ah="@firebase/analytics-compat",ch="@firebase/analytics",lh="@firebase/app-check-compat",uh="@firebase/app-check",fh="@firebase/auth",dh="@firebase/auth-compat",hh="@firebase/database",ph="@firebase/database-compat",gh="@firebase/functions",mh="@firebase/functions-compat",_h="@firebase/installations",vh="@firebase/installations-compat",yh="@firebase/messaging",bh="@firebase/messaging-compat",Ih="@firebase/performance",Eh="@firebase/performance-compat",wh="@firebase/remote-config",Th="@firebase/remote-config-compat",Rh="@firebase/storage",Sh="@firebase/storage-compat",Ch="@firebase/firestore",Ah="@firebase/firestore-compat",Ph="firebase",Oh="9.22.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws="[DEFAULT]",kh={[Es]:"fire-core",[oh]:"fire-core-compat",[ch]:"fire-analytics",[ah]:"fire-analytics-compat",[uh]:"fire-app-check",[lh]:"fire-app-check-compat",[fh]:"fire-auth",[dh]:"fire-auth-compat",[hh]:"fire-rtdb",[ph]:"fire-rtdb-compat",[gh]:"fire-fn",[mh]:"fire-fn-compat",[_h]:"fire-iid",[vh]:"fire-iid-compat",[yh]:"fire-fcm",[bh]:"fire-fcm-compat",[Ih]:"fire-perf",[Eh]:"fire-perf-compat",[wh]:"fire-rc",[Th]:"fire-rc-compat",[Rh]:"fire-gcs",[Sh]:"fire-gcs-compat",[Ch]:"fire-fst",[Ah]:"fire-fst-compat","fire-js":"fire-js",[Ph]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=new Map,Ts=new Map;function xh(t,e){try{t.container.addComponent(e)}catch(n){Ot.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function On(t){const e=t.name;if(Ts.has(e))return Ot.debug(`There were multiple attempts to register component ${e}.`),!1;Ts.set(e,t);for(const n of pr.values())xh(n,t);return!0}function Ja(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},mt=new Ln("app","Firebase",Nh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new en("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=Oh;function Ya(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ws,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw mt.create("bad-app-name",{appName:String(s)});if(n||(n=Va()),!n)throw mt.create("no-options");const i=pr.get(s);if(i){if(hr(n,i.options)&&hr(r,i.config))return i;throw mt.create("duplicate-app",{appName:s})}const o=new jd(s);for(const a of Ts.values())o.addComponent(a);const c=new Dh(n,r,o);return pr.set(s,c),c}function Mh(t=ws){const e=pr.get(t);if(!e&&t===ws&&Va())return Ya();if(!e)throw mt.create("no-app",{appName:t});return e}function Kt(t,e,n){var r;let s=(r=kh[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ot.warn(c.join(" "));return}On(new en(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh="firebase-heartbeat-database",Uh=1,kn="firebase-heartbeat-store";let Zr=null;function Xa(){return Zr||(Zr=th(Lh,Uh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(kn)}}}).catch(t=>{throw mt.create("idb-open",{originalErrorMessage:t.message})})),Zr}async function $h(t){try{return await(await Xa()).transaction(kn).objectStore(kn).get(Qa(t))}catch(e){if(e instanceof vt)Ot.warn(e.message);else{const n=mt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ot.warn(n.message)}}}async function ho(t,e){try{const r=(await Xa()).transaction(kn,"readwrite");await r.objectStore(kn).put(e,Qa(t)),await r.done}catch(n){if(n instanceof vt)Ot.warn(n.message);else{const r=mt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ot.warn(r.message)}}}function Qa(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh=1024,Fh=30*24*60*60*1e3;class Hh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Wh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=po();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Fh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=po(),{heartbeatsToSend:n,unsentEntries:r}=jh(this._heartbeatsCache.heartbeats),s=ja(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function po(){return new Date().toISOString().substring(0,10)}function jh(t,e=Bh){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),go(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),go(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Wh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Od()?kd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await $h(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ho(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ho(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function go(t){return ja(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(t){On(new en("platform-logger",e=>new sh(e),"PRIVATE")),On(new en("heartbeat",e=>new Hh(e),"PRIVATE")),Kt(Es,fo,t),Kt(Es,fo,"esm2017"),Kt("fire-js","")}Vh("");var zh="firebase",Kh="9.22.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kt(zh,Kh,"app");function Zs(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Za(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qh=Za,ec=new Ln("auth","Firebase",Za());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new Ka("@firebase/auth");function Gh(t,...e){gr.logLevel<=Q.WARN&&gr.warn(`Auth (${$n}): ${t}`,...e)}function rr(t,...e){gr.logLevel<=Q.ERROR&&gr.error(`Auth (${$n}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t,...e){throw ei(t,...e)}function je(t,...e){return ei(t,...e)}function tc(t,e,n){const r=Object.assign(Object.assign({},qh()),{[e]:n});return new Ln("auth","Firebase",r).create(e,{appName:t.name})}function Jh(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Te(t,"argument-error"),tc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ei(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ec.create(t,...e)}function U(t,e,...n){if(!t)throw ei(e,...n)}function Ye(t){const e="INTERNAL ASSERTION FAILED: "+t;throw rr(e),new Error(e)}function et(t,e){t||Ye(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Yh(){return mo()==="http:"||mo()==="https:"}function mo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Yh()||Cd()||"connection"in navigator)?navigator.onLine:!0}function Qh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,n){this.shortDelay=e,this.longDelay=n,et(n>e,"Short delay should be less than long delay!"),this.isMobile=Sd()||Ad()}get(){return Xh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t,e){et(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ye("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ye("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ye("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=new Bn(3e4,6e4);function on(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function an(t,e,n,r,s={}){return rc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Un(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),nc.fetch()(sc(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function rc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Zh),e);try{const s=new tp(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Xn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xn(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Xn(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Xn(t,"user-disabled",o);const u=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw tc(t,u,l);Te(t,u)}}catch(s){if(s instanceof vt)throw s;Te(t,"network-request-failed",{message:String(s)})}}async function Fn(t,e,n,r,s={}){const i=await an(t,e,n,r,s);return"mfaPendingCredential"in i&&Te(t,"multi-factor-auth-required",{_serverResponse:i}),i}function sc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ti(t.config,s):`${t.config.apiScheme}://${s}`}class tp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(je(this.auth,"network-request-failed")),ep.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=je(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function np(t,e){return an(t,"POST","/v1/accounts:delete",e)}async function rp(t,e){return an(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sp(t,e=!1){const n=nt(t),r=await n.getIdToken(e),s=ni(r);U(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:In(es(s.auth_time)),issuedAtTime:In(es(s.iat)),expirationTime:In(es(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function es(t){return Number(t)*1e3}function ni(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return rr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Wa(n);return s?JSON.parse(s):(rr("Failed to decode base64 JWT payload"),null)}catch(s){return rr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ip(t){const e=ni(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vt&&op(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function op({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=In(this.lastLoginAt),this.creationTime=In(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await xn(t,rp(n,{idToken:r}));U(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?up(i.providerUserInfo):[],c=lp(t.providerData,o),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),u=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new ic(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function cp(t){const e=nt(t);await mr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lp(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function up(t){return t.map(e=>{var{providerId:n}=e,r=Zs(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fp(t,e){const n=await rc(t,{},async()=>{const r=Un({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=sc(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",nc.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ip(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await fp(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Nn;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Nn,this.toJSON())}_performRefresh(){return Ye("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class At{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Zs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ap(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ic(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await xn(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sp(this,e)}reload(){return cp(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new At(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await mr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await xn(this,np(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(c=n.tenantId)!==null&&c!==void 0?c:void 0,L=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:j,emailVerified:M,isAnonymous:re,providerData:se,stsTokenManager:ve}=n;U(j&&ve,e,"internal-error");const Re=Nn.fromJSON(this.name,ve);U(typeof j=="string",e,"internal-error"),at(h,e.name),at(g,e.name),U(typeof M=="boolean",e,"internal-error"),U(typeof re=="boolean",e,"internal-error"),at(v,e.name),at(C,e.name),at(P,e.name),at(L,e.name),at(k,e.name),at(D,e.name);const Me=new At({uid:j,auth:e,email:g,emailVerified:M,displayName:h,isAnonymous:re,photoURL:C,phoneNumber:v,tenantId:P,stsTokenManager:Re,createdAt:k,lastLoginAt:D});return se&&Array.isArray(se)&&(Me.providerData=se.map(be=>Object.assign({},be))),L&&(Me._redirectEventId=L),Me}static async _fromIdTokenResponse(e,n,r=!1){const s=new Nn;s.updateFromServerResponse(n);const i=new At({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await mr(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=new Map;function Xe(t){et(t instanceof Function,"Expected a class definition");let e=_o.get(t);return e?(et(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_o.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}oc.type="NONE";const vo=oc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t,e,n){return`firebase:${t}:${e}:${n}`}class qt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=sr(this.userKey,s.apiKey,i),this.fullPersistenceKey=sr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?At._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qt(Xe(vo),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Xe(vo);const o=sr(r,e.config.apiKey,e.name);let c=null;for(const l of n)try{const u=await l._get(o);if(u){const h=At._fromJSON(e,u);l!==i&&(c=h),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new qt(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new qt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ac(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fc(e))return"Blackberry";if(dc(e))return"Webos";if(ri(e))return"Safari";if((e.includes("chrome/")||cc(e))&&!e.includes("edge/"))return"Chrome";if(uc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ac(t=he()){return/firefox\//i.test(t)}function ri(t=he()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cc(t=he()){return/crios\//i.test(t)}function lc(t=he()){return/iemobile/i.test(t)}function uc(t=he()){return/android/i.test(t)}function fc(t=he()){return/blackberry/i.test(t)}function dc(t=he()){return/webos/i.test(t)}function Lr(t=he()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dp(t=he()){var e;return Lr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hp(){return Pd()&&document.documentMode===10}function hc(t=he()){return Lr(t)||uc(t)||dc(t)||fc(t)||/windows phone/i.test(t)||lc(t)}function pp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(t,e=[]){let n;switch(t){case"Browser":n=yo(he());break;case"Worker":n=`${yo(he())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$n}/${r}`}async function gc(t,e){return an(t,"GET","/v2/recaptchaConfig",on(t,e))}function bo(t){return t!==void 0&&t.enterprise!==void 0}class mc{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function _c(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=je("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",gp().appendChild(r)})}function mp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const _p="https://www.google.com/recaptcha/enterprise.js?render=",vp="recaptcha-enterprise",yp="NO_RECAPTCHA";class vc{constructor(e){this.type=vp,this.auth=Nt(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{gc(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new mc(a);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(a=>{c(a)})})}function s(i,o,c){const a=window.grecaptcha;bo(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(yp)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&bo(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}_c(_p+c).then(()=>{s(c,i,o)}).catch(a=>{o(a)})}}).catch(c=>{o(c)})})}}async function _r(t,e,n,r=!1){const s=new vc(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Io(this),this.idTokenSubscription=new Io(this),this.beforeStateQueue=new bp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ec,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xe(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await qt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await mr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Qh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?nt(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Xe(e))})}async initializeRecaptchaConfig(){const e=await gc(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new mc(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new vc(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ln("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xe(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await qt.create(this,[Xe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return U(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Gh(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Nt(t){return nt(t)}class Io{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ld(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(t,e){const n=Ja(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(hr(i,e??{}))return s;Te(s,"already-initialized")}return n.initialize({options:e})}function wp(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xe);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Tp(t,e,n){const r=Nt(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=yc(e),{host:o,port:c}=Rp(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Sp()}function yc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Rp(t){const e=yc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Eo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Eo(o)}}}function Eo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Sp(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ye("not implemented")}_getIdTokenResponse(e){return Ye("not implemented")}_linkToIdToken(e,n){return Ye("not implemented")}_getReauthenticationResolver(e){return Ye("not implemented")}}async function Cp(t,e){return an(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(t,e){return Fn(t,"POST","/v1/accounts:signInWithPassword",on(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ap(t,e){return Fn(t,"POST","/v1/accounts:signInWithEmailLink",on(t,e))}async function Pp(t,e){return Fn(t,"POST","/v1/accounts:signInWithEmailLink",on(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends si{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Dn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Dn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await _r(e,r,"signInWithPassword");return ts(e,s)}else return ts(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await _r(e,r,"signInWithPassword");return ts(e,i)}else return Promise.reject(s)});case"emailLink":return Ap(e,{email:this._email,oobCode:this._password});default:Te(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Cp(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Pp(e,{idToken:n,email:this._email,oobCode:this._password});default:Te(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gt(t,e){return Fn(t,"POST","/v1/accounts:signInWithIdp",on(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op="http://localhost";class kt extends si{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new kt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Te("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Zs(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new kt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gt(e,n)}buildRequest(){const e={requestUri:Op,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Un(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xp(t){const e=gn(mn(t)).link,n=e?gn(mn(e)).deep_link_id:null,r=gn(mn(t)).deep_link_id;return(r?gn(mn(r)).link:null)||r||n||e||t}class ii{constructor(e){var n,r,s,i,o,c;const a=gn(mn(e)),l=(n=a.apiKey)!==null&&n!==void 0?n:null,u=(r=a.oobCode)!==null&&r!==void 0?r:null,h=kp((s=a.mode)!==null&&s!==void 0?s:null);U(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=xp(e);try{return new ii(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(){this.providerId=cn.PROVIDER_ID}static credential(e,n){return Dn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ii.parseLink(n);return U(r,"argument-error"),Dn._fromEmailAndCode(e,r.code,r.tenantId)}}cn.PROVIDER_ID="password";cn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";cn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends oi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends Hn{constructor(){super("facebook.com")}static credential(e){return kt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ut.credential(e.oauthAccessToken)}catch{return null}}}ut.FACEBOOK_SIGN_IN_METHOD="facebook.com";ut.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends Hn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return kt._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Pe.credential(n,r)}catch{return null}}}Pe.GOOGLE_SIGN_IN_METHOD="google.com";Pe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends Hn{constructor(){super("github.com")}static credential(e){return kt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch{return null}}}ft.GITHUB_SIGN_IN_METHOD="github.com";ft.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends Hn{constructor(){super("twitter.com")}static credential(e,n){return kt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dt.credential(n,r)}catch{return null}}}dt.TWITTER_SIGN_IN_METHOD="twitter.com";dt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ns(t,e){return Fn(t,"POST","/v1/accounts:signUp",on(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await At._fromIdTokenResponse(e,r,s),o=wo(r);return new xt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=wo(r);return new xt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function wo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends vt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,vr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new vr(e,n,r,s)}}function bc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?vr._fromErrorAndOperation(t,i,e,r):i})}async function Np(t,e,n=!1){const r=await xn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dp(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await xn(t,bc(r,s,e,t),n);U(i.idToken,r,"internal-error");const o=ni(i.idToken);U(o,r,"internal-error");const{sub:c}=o;return U(t.uid===c,r,"user-mismatch"),xt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Te(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ic(t,e,n=!1){const r="signIn",s=await bc(t,r,e),i=await xt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Mp(t,e){return Ic(Nt(t),e)}async function Lp(t,e,n){var r;const s=Nt(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await _r(s,i,"signUpPassword");o=ns(s,l)}else o=ns(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await _r(s,i,"signUpPassword");return ns(s,u)}else return Promise.reject(l)});const c=await o.catch(l=>Promise.reject(l)),a=await xt._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(a.user),a}function Up(t,e,n){return Mp(nt(t),cn.credential(e,n))}function $p(t,e,n,r){return nt(t).onIdTokenChanged(e,n,r)}function Bp(t,e,n){return nt(t).beforeAuthStateChanged(e,n)}function Ec(t,e,n,r){return nt(t).onAuthStateChanged(e,n,r)}function Fp(t){return nt(t).signOut()}const yr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yr,"1"),this.storage.removeItem(yr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(){const t=he();return ri(t)||Lr(t)}const jp=1e3,Wp=10;class Tc extends wc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Hp()&&pp(),this.fallbackToPolling=hc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);hp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Wp):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},jp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Tc.type="LOCAL";const Vp=Tc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc extends wc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Rc.type="SESSION";const Sc=Rc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ur(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await zp(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ur.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=ai("",20);s.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const g=h;if(g.data.eventId===l)switch(g.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(){return window}function qp(t){We().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(){return typeof We().WorkerGlobalScope<"u"&&typeof We().importScripts=="function"}async function Gp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Jp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Yp(){return Cc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="firebaseLocalStorageDb",Xp=1,br="firebaseLocalStorage",Pc="fbase_key";class jn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $r(t,e){return t.transaction([br],e?"readwrite":"readonly").objectStore(br)}function Qp(){const t=indexedDB.deleteDatabase(Ac);return new jn(t).toPromise()}function Ss(){const t=indexedDB.open(Ac,Xp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(br,{keyPath:Pc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(br)?e(r):(r.close(),await Qp(),e(await Ss()))})})}async function To(t,e,n){const r=$r(t,!0).put({[Pc]:e,value:n});return new jn(r).toPromise()}async function Zp(t,e){const n=$r(t,!1).get(e),r=await new jn(n).toPromise();return r===void 0?null:r.value}function Ro(t,e){const n=$r(t,!0).delete(e);return new jn(n).toPromise()}const eg=800,tg=3;class Oc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ss(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>tg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ur._getInstance(Yp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Gp(),!this.activeServiceWorker)return;this.sender=new Kp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Jp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ss();return await To(e,yr,"1"),await Ro(e,yr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>To(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Zp(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ro(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=$r(s,!1).getAll();return new jn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Oc.type="LOCAL";const ng=Oc;new Bn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(t,e){return e?Xe(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends si{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rg(t){return Ic(t.auth,new ci(t),t.bypassAuthState)}function sg(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),Dp(n,new ci(t),t.bypassAuthState)}async function ig(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),Np(n,new ci(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rg;case"linkViaPopup":case"linkViaRedirect":return ig;case"reauthViaPopup":case"reauthViaRedirect":return sg;default:Te(this.auth,"internal-error")}}resolve(e){et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=new Bn(2e3,1e4);async function ag(t,e,n){const r=Nt(t);Jh(t,e,oi);const s=kc(r,n);return new Rt(r,"signInViaPopup",e,s).executeNotNull()}class Rt extends xc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Rt.currentPopupAction&&Rt.currentPopupAction.cancel(),Rt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){et(this.filter.length===1,"Popup operations only handle one event");const e=ai();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,og.get())};e()}}Rt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg="pendingRedirect",ir=new Map;class lg extends xc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ir.get(this.auth._key());if(!e){try{const r=await ug(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ir.set(this.auth._key(),e)}return this.bypassAuthState||ir.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ug(t,e){const n=hg(e),r=dg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function fg(t,e){ir.set(t._key(),e)}function dg(t){return Xe(t._redirectPersistence)}function hg(t){return sr(cg,t.config.apiKey,t.name)}async function pg(t,e,n=!1){const r=Nt(t),s=kc(r,e),o=await new lg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=10*60*1e3;class mg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_g(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Nc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(je(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gg&&this.cachedEventUids.clear(),this.cachedEventUids.has(So(e))}saveEventToCache(e){this.cachedEventUids.add(So(e)),this.lastProcessedEventTime=Date.now()}}function So(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Nc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _g(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vg(t,e={}){return an(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bg=/^https?/;async function Ig(t){if(t.config.emulator)return;const{authorizedDomains:e}=await vg(t);for(const n of e)try{if(Eg(n))return}catch{}Te(t,"unauthorized-domain")}function Eg(t){const e=Rs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bg.test(n))return!1;if(yg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg=new Bn(3e4,6e4);function Co(){const t=We().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Tg(t){return new Promise((e,n)=>{var r,s,i;function o(){Co(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Co(),n(je(t,"network-request-failed"))},timeout:wg.get()})}if(!((s=(r=We().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=We().gapi)===null||i===void 0)&&i.load)o();else{const c=mp("iframefcb");return We()[c]=()=>{gapi.load?o():n(je(t,"network-request-failed"))},_c(`https://apis.google.com/js/api.js?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw or=null,e})}let or=null;function Rg(t){return or=or||Tg(t),or}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=new Bn(5e3,15e3),Cg="__/auth/iframe",Ag="emulator/auth/iframe",Pg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Og=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kg(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ti(e,Ag):`https://${t.config.authDomain}/${Cg}`,r={apiKey:e.apiKey,appName:t.name,v:$n},s=Og.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Un(r).slice(1)}`}async function xg(t){const e=await Rg(t),n=We().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:kg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Pg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=je(t,"network-request-failed"),c=We().setTimeout(()=>{i(o)},Sg.get());function a(){We().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Dg=500,Mg=600,Lg="_blank",Ug="http://localhost";class Ao{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $g(t,e,n,r=Dg,s=Mg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},Ng),{width:r.toString(),height:s.toString(),top:i,left:o}),l=he().toLowerCase();n&&(c=cc(l)?Lg:n),ac(l)&&(e=e||Ug,a.scrollbars="yes");const u=Object.entries(a).reduce((g,[v,C])=>`${g}${v}=${C},`,"");if(dp(l)&&c!=="_self")return Bg(e||"",c),new Ao(null);const h=window.open(e||"",c,u);U(h,t,"popup-blocked");try{h.focus()}catch{}return new Ao(h)}function Bg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg="__/auth/handler",Hg="emulator/auth/handler",jg=encodeURIComponent("fac");async function Po(t,e,n,r,s,i){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$n,eventId:s};if(e instanceof oi){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Md(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Hn){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const a=await t._getAppCheckToken(),l=a?`#${jg}=${encodeURIComponent(a)}`:"";return`${Wg(t)}?${Un(c).slice(1)}${l}`}function Wg({config:t}){return t.emulator?ti(t,Hg):`https://${t.authDomain}/${Fg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs="webStorageSupport";class Vg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sc,this._completeRedirectFn=pg,this._overrideRedirectResult=fg}async _openPopup(e,n,r,s){var i;et((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Po(e,n,r,Rs(),s);return $g(e,o,ai())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Po(e,n,r,Rs(),s);return qp(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(et(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await xg(e),r=new mg(e);return n.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rs,{type:rs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[rs];o!==void 0&&n(!!o),Te(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ig(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hc()||ri()||Lr()}}const zg=Vg;var Oo="@firebase/auth",ko="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Gg(t){On(new en("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pc(t)},l=new Ip(r,s,i,a);return wp(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),On(new en("auth-internal",e=>{const n=Nt(e.getProvider("auth").getImmediate());return(r=>new Kg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kt(Oo,ko,qg(t)),Kt(Oo,ko,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=5*60,Yg=za("authIdTokenMaxAge")||Jg;let xo=null;const Xg=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Yg)return;const s=n==null?void 0:n.token;xo!==s&&(xo=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function li(t=Mh()){const e=Ja(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ep(t,{popupRedirectResolver:zg,persistence:[ng,Vp,Sc]}),r=za("authTokenSyncURL");if(r){const i=Xg(r);Bp(n,i,()=>i(n.currentUser)),$p(n,o=>i(o))}const s=Td("auth");return s&&Tp(n,`http://${s}`),n}Gg("Browser");const Qg={apiKey:"AIzaSyBxDVYSLfWPPT5YlqmFrJS9sea_TzZucy4",authDomain:"authentication-d7b33.firebaseapp.com",projectId:"authentication-d7b33",storageBucket:"authentication-d7b33.appspot.com",messagingSenderId:"317946103387",appId:"1:317946103387:web:2e001db5a295859cbae17e"};Ya(Qg);const Wn=li(),Zg=new Pe,Mn=sn({isSignedIn:!1});Ec(Wn,t=>{Mn.isSignedIn=t!==null});const em=(t,e)=>Lp(Wn,t,e),tm=(t,e)=>Up(Wn,t,e),nm=()=>Fp(Wn),Dc=()=>ag(Wn,Zg),rm="/assets/logo-7e7c7361.svg";const sm={},im=t=>(Or("data-v-672e26f1"),t=t(),kr(),t),om={class:"logo"},am=im(()=>Y("img",{alt:"Vue logo",src:rm,width:"50",height:"50"},null,-1)),cm=[am];function lm(t,e){return we(),ze("div",om,cm)}const ui=Ke(sm,[["render",lm],["__scopeId","data-v-672e26f1"]]);const um={props:{showWarning:{type:Boolean,required:!0},warningText:{type:String,required:!0}}},fm={class:"warningBox"},dm={key:0,class:"warning"};function hm(t,e,n,r,s,i){return we(),ze("div",fm,[n.showWarning?(we(),ze("p",dm,Rr(n.warningText),1)):Pu("",!0)])}const Mc=Ke(um,[["render",hm],["__scopeId","data-v-6ef9b70a"]]);const pm={props:{htmlFor:{type:String,required:!0},label:{type:String,required:!0}}},gm={class:"labels"},mm=["for"];function _m(t,e,n,r,s,i){return we(),ze("div",gm,[Y("label",{for:n.htmlFor},Rr(n.label),9,mm)])}const Lc=Ke(pm,[["render",_m],["__scopeId","data-v-cdbe3a83"]]);const vm={props:{htmlType:{type:String,required:!0},value:{type:String,required:!0}}},ym=["type","value"];function bm(t,e,n,r,s,i){return we(),ze("div",null,[Y("input",{type:n.htmlType,class:"input",value:n.value,onInput:e[0]||(e[0]=o=>t.$emit("update:value",o.target.value))},null,40,ym)])}const Uc=Ke(vm,[["render",bm],["__scopeId","data-v-d862bcea"]]);const Im={props:{buttonText:{type:String,required:!0},handleClick:{type:Function,required:!0}}},Em={class:"buttonBox"};function wm(t,e,n,r,s,i){return we(),ze("div",Em,[Y("button",{class:"button",onClick:e[0]||(e[0]=(...o)=>n.handleClick&&n.handleClick(...o))},Rr(n.buttonText),1)])}const fi=Ke(Im,[["render",wm],["__scopeId","data-v-4a053105"]]);const Tm={props:{buttonText:{type:String,required:!0},handleClick:{type:Function,required:!0}}},Rm=Y("span",{class:"firebaseui-idp-icon-wrapper"},[Y("img",{class:"firebaseui-idp-icon",alt:"",src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"})],-1),Sm={class:"firebaseui-idp-text firebaseui-idp-text-long"},Cm=Y("span",{class:"firebaseui-idp-text firebaseui-idp-text-short"},"Google",-1);function Am(t,e,n,r,s,i){return we(),ze("button",{class:"firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised firebaseui-idp-google firebaseui-id-idp-button","data-provider-id":"google.com",style:{"background-color":"#ffffff"},"data-upgraded":",MaterialButton",onClick:e[0]||(e[0]=(...o)=>n.handleClick&&n.handleClick(...o))},[Rm,Y("span",Sm,Rr(n.buttonText),1),Cm])}const $c=Ke(Tm,[["render",Am]]);const Pm={components:{Logo:ui,WarningBox:Mc,InputLabel:Lc,Input:Uc,ButtonBox:fi,GoogleSignInButton:$c},data(){return{email:"",password:"",passwordError:"",invalidEmail:""}},methods:{signup(){const{email:t,password:e}=this;li(),em(t,e).then(n=>{n.user,Mn.isSignedIn&&this.$router.push({name:"home"})}).catch(n=>{n.code==="auth/weak-password"?this.passwordError="Password should be at least 6 characters":n.code==="auth/invalid-email"?this.invalidEmail="Invalid email":n.code==="auth/missing-password"?this.passwordError="Password cannot be empty":n.code==="auth/email-already-in-use"?this.invalidEmail="User already exist":n.code==="auth/missing-email"&&(this.invalidEmail="Email cannot be empty")})},googlesignUp(){Dc().then(t=>{Pe.credentialFromResult(t)&&this.$router.push({name:"home"})}).catch(t=>{console.log(t.message),console.log(t.code)})}},watch:{password(t){this.passwordError=""},email(t){this.invalidEmail=""}},computed:{authState(){return Mn}}},Om=t=>(Or("data-v-2c65723f"),t=t(),kr(),t),km=Om(()=>Y("h1",{class:"heading"},"Sign up new account",-1)),xm={class:"container"},Nm={class:"form-group"},Dm={class:"googleButton"},Mm={class:"signin-callout"},Lm={class:"signin-callout-p"};function Um(t,e,n,r,s,i){const o=ce("Logo"),c=ce("WarningBox"),a=ce("InputLabel"),l=ce("Input"),u=ce("ButtonBox"),h=ce("GoogleSignInButton"),g=ce("RouterLink");return we(),ze(Ie,null,[W(o),Y("div",null,[km,W(c,{showWarning:s.invalidEmail!=="",warningText:s.invalidEmail},null,8,["showWarning","warningText"]),W(c,{showWarning:s.passwordError!=="",warningText:s.passwordError},null,8,["showWarning","warningText"]),Y("div",xm,[Y("div",Nm,[W(a,{class:"labels",htmlFor:"email",label:"Email Address"}),W(l,{htmlType:"email",value:s.email,"onUpdate:value":e[0]||(e[0]=v=>s.email=v)},null,8,["value"]),W(a,{class:"labels",htmlFor:"password",label:"Password"}),W(l,{htmlType:"password",value:s.password,"onUpdate:value":e[1]||(e[1]=v=>s.password=v)},null,8,["value"]),W(u,{buttonText:"Sign up",handleClick:i.signup},null,8,["handleClick"]),Y("div",Dm,[W(h,{buttonText:"Sign un with Google",handleClick:t.googleSignin},null,8,["handleClick"])])])]),Y("div",Mm,[Y("p",Lm,[Cn("Already have an account? "),W(g,{class:"nav",to:{name:"signin"}},{default:Ws(()=>[Cn("Sign in")]),_:1})])])])],64)}const $m=Ke(Pm,[["render",Um],["__scopeId","data-v-2c65723f"]]);const Bm={components:{Logo:ui,WarningBox:Mc,InputLabel:Lc,Input:Uc,ButtonBox:fi,GoogleSignInButton:$c},data(){return{email:"",password:"",invalidInput:""}},methods:{signin(){const{email:t,password:e}=this;tm(t,e).then(n=>{n.user,Mn.isSignedIn&&this.$router.push({name:"home"})}).catch(n=>{this.invalidInput="Incorrect email or password"})},googleSignin(){Dc().then(t=>{Pe.credentialFromResult(t)&&this.$router.push({name:"home"})}).catch(t=>{console.log(t.message),console.log(t.code)})}},watch:{password(t){this.invalidInput=""},email(t){this.invalidInput=""}},computed:{authState(){return Mn}}},Fm=t=>(Or("data-v-d46a8495"),t=t(),kr(),t),Hm=Fm(()=>Y("h1",{class:"heading"},"Sign in to your account",-1)),jm={class:"container"},Wm={class:"form-group"},Vm={class:"googleButton"},zm={class:"signup-callout"},Km={class:"signup-callout-p"};function qm(t,e,n,r,s,i){const o=ce("Logo"),c=ce("WarningBox"),a=ce("InputLabel"),l=ce("Input"),u=ce("ButtonBox"),h=ce("GoogleSignInButton"),g=ce("RouterLink");return we(),ze(Ie,null,[W(o),Y("div",null,[Hm,W(c,{showWarning:s.invalidInput!=="",warningText:s.invalidInput},null,8,["showWarning","warningText"]),Y("div",jm,[Y("div",Wm,[W(a,{class:"labels",htmlFor:"email",label:"Email Address"}),W(l,{htmlType:"email",value:s.email,"onUpdate:value":e[0]||(e[0]=v=>s.email=v)},null,8,["value"]),W(a,{class:"labels",htmlFor:"password",label:"Password"}),W(l,{htmlType:"password",value:s.password,"onUpdate:value":e[1]||(e[1]=v=>s.password=v)},null,8,["value"]),W(u,{buttonText:"Sign in",handleClick:i.signin},null,8,["handleClick"]),Y("div",Vm,[W(h,{buttonText:"Sign in with Google",handleClick:i.googleSignin},null,8,["handleClick"])])])]),Y("div",zm,[Y("p",Km,[Cn("New? "),W(g,{class:"nav",to:{name:"signup"}},{default:Ws(()=>[Cn("Create new account")]),_:1})])])])],64)}const Gm=Ke(Bm,[["render",qm],["__scopeId","data-v-d46a8495"]]);const Jm={components:{Logo:ui,ButtonBox:fi},methods:{signout(){nm().then(t=>{this.$router.push({name:"signin"})}).catch(t=>{console.log(t)})}}},Ym=t=>(Or("data-v-642a4d20"),t=t(),kr(),t),Xm={class:"signin-form"},Qm=Ym(()=>Y("h1",{class:"heading"},"Signed in!",-1)),Zm={class:"container"},e_={class:"form-group"};function t_(t,e,n,r,s,i){const o=ce("Logo"),c=ce("ButtonBox");return we(),ze(Ie,null,[W(o),Y("div",Xm,[Qm,Y("div",Zm,[Y("div",e_,[W(c,{buttonText:"Log out",handleClick:i.signout},null,8,["handleClick"])])])])],64)}const n_=Ke(Jm,[["render",t_],["__scopeId","data-v-642a4d20"]]),Bc=dd({history:Af("/"),routes:[{path:"/signup",name:"signup",component:$m},{path:"/signin",name:"signin",component:Gm},{path:"/",name:"home",component:n_,meta:{requiresAuth:!0}}]}),r_=()=>new Promise((t,e)=>{const n=Ec(li(),r=>{n(),t(r)},e)});Bc.beforeEach(async(t,e,n)=>{if(t.matched.some(s=>s.meta.requiresAuth))try{await r_()?n():n("/signin")}catch(s){console.error(s),n("/signin")}else n()});const Fc=lf(md);Fc.use(Bc);Fc.mount("#app");
