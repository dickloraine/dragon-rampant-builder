import{d as K,g as Yr}from"./react-adf67704.js";function ae(q){throw new Error('Could not dynamically require "'+q+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ue={exports:{}};/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/(function(q,Ye){(function(F){q.exports=F()})(function(){return function F(O,$,R){function A(m,p){if(!$[m]){if(!O[m]){var l=typeof ae=="function"&&ae;if(!p&&l)return l(m,!0);if(_)return _(m,!0);var v=new Error("Cannot find module '"+m+"'");throw v.code="MODULE_NOT_FOUND",v}var b=$[m]={exports:{}};O[m][0].call(b.exports,function(N){var P=O[m][1][N];return A(P||N)},b,b.exports,F,O,$,R)}return $[m].exports}for(var _=typeof ae=="function"&&ae,x=0;x<R.length;x++)A(R[x]);return A}({1:[function(F,O,$){(function(R){var A=R.MutationObserver||R.WebKitMutationObserver,_;if(A){var x=0,m=new A(N),p=R.document.createTextNode("");m.observe(p,{characterData:!0}),_=function(){p.data=x=++x%2}}else if(!R.setImmediate&&typeof R.MessageChannel<"u"){var l=new R.MessageChannel;l.port1.onmessage=N,_=function(){l.port2.postMessage(0)}}else"document"in R&&"onreadystatechange"in R.document.createElement("script")?_=function(){var T=R.document.createElement("script");T.onreadystatechange=function(){N(),T.onreadystatechange=null,T.parentNode.removeChild(T),T=null},R.document.documentElement.appendChild(T)}:_=function(){setTimeout(N,0)};var v,b=[];function N(){v=!0;for(var T,M,D=b.length;D;){for(M=b,b=[],T=-1;++T<D;)M[T]();D=b.length}v=!1}O.exports=P;function P(T){b.push(T)===1&&!v&&_()}}).call(this,typeof K<"u"?K:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(F,O,$){var R=F(1);function A(){}var _={},x=["REJECTED"],m=["FULFILLED"],p=["PENDING"];O.exports=l;function l(d){if(typeof d!="function")throw new TypeError("resolver must be a function");this.state=p,this.queue=[],this.outcome=void 0,d!==A&&P(this,d)}l.prototype.catch=function(d){return this.then(null,d)},l.prototype.then=function(d,w){if(typeof d!="function"&&this.state===m||typeof w!="function"&&this.state===x)return this;var g=new this.constructor(A);if(this.state!==p){var I=this.state===m?d:w;b(g,I,this.outcome)}else this.queue.push(new v(g,d,w));return g};function v(d,w,g){this.promise=d,typeof w=="function"&&(this.onFulfilled=w,this.callFulfilled=this.otherCallFulfilled),typeof g=="function"&&(this.onRejected=g,this.callRejected=this.otherCallRejected)}v.prototype.callFulfilled=function(d){_.resolve(this.promise,d)},v.prototype.otherCallFulfilled=function(d){b(this.promise,this.onFulfilled,d)},v.prototype.callRejected=function(d){_.reject(this.promise,d)},v.prototype.otherCallRejected=function(d){b(this.promise,this.onRejected,d)};function b(d,w,g){R(function(){var I;try{I=w(g)}catch(C){return _.reject(d,C)}I===d?_.reject(d,new TypeError("Cannot resolve promise with itself")):_.resolve(d,I)})}_.resolve=function(d,w){var g=T(N,w);if(g.status==="error")return _.reject(d,g.value);var I=g.value;if(I)P(d,I);else{d.state=m,d.outcome=w;for(var C=-1,U=d.queue.length;++C<U;)d.queue[C].callFulfilled(w)}return d},_.reject=function(d,w){d.state=x,d.outcome=w;for(var g=-1,I=d.queue.length;++g<I;)d.queue[g].callRejected(w);return d};function N(d){var w=d&&d.then;if(d&&(typeof d=="object"||typeof d=="function")&&typeof w=="function")return function(){w.apply(d,arguments)}}function P(d,w){var g=!1;function I(W){g||(g=!0,_.reject(d,W))}function C(W){g||(g=!0,_.resolve(d,W))}function U(){w(C,I)}var Y=T(U);Y.status==="error"&&I(Y.value)}function T(d,w){var g={};try{g.value=d(w),g.status="success"}catch(I){g.status="error",g.value=I}return g}l.resolve=M;function M(d){return d instanceof this?d:_.resolve(new this(A),d)}l.reject=D;function D(d){var w=new this(A);return _.reject(w,d)}l.all=j;function j(d){var w=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var g=d.length,I=!1;if(!g)return this.resolve([]);for(var C=new Array(g),U=0,Y=-1,W=new this(A);++Y<g;)H(d[Y],Y);return W;function H(Z,ne){w.resolve(Z).then(ie,function(k){I||(I=!0,_.reject(W,k))});function ie(k){C[ne]=k,++U===g&&!I&&(I=!0,_.resolve(W,C))}}}l.race=X;function X(d){var w=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var g=d.length,I=!1;if(!g)return this.resolve([]);for(var C=-1,U=new this(A);++C<g;)Y(d[C]);return U;function Y(W){w.resolve(W).then(function(H){I||(I=!0,_.resolve(U,H))},function(H){I||(I=!0,_.reject(U,H))})}}},{1:1}],3:[function(F,O,$){(function(R){typeof R.Promise!="function"&&(R.Promise=F(2))}).call(this,typeof K<"u"?K:typeof self<"u"?self:typeof window<"u"?window:{})},{2:2}],4:[function(F,O,$){var R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function A(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var x=_();function m(){try{if(!x||!x.open)return!1;var e=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),n=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!e||n)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function p(e,n){e=e||[],n=n||{};try{return new Blob(e,n)}catch(t){if(t.name!=="TypeError")throw t;for(var r=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,o=new r,a=0;a<e.length;a+=1)o.append(e[a]);return o.getBlob(n.type)}}typeof Promise>"u"&&F(3);var l=Promise;function v(e,n){n&&e.then(function(r){n(null,r)},function(r){n(r)})}function b(e,n,r){typeof n=="function"&&e.then(n),typeof r=="function"&&e.catch(r)}function N(e){return typeof e!="string"&&(console.warn(e+" used as a key, but it is not a string."),e=String(e)),e}function P(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var T="local-forage-detect-blob-support",M=void 0,D={},j=Object.prototype.toString,X="readonly",d="readwrite";function w(e){for(var n=e.length,r=new ArrayBuffer(n),o=new Uint8Array(r),a=0;a<n;a++)o[a]=e.charCodeAt(a);return r}function g(e){return new l(function(n){var r=e.transaction(T,d),o=p([""]);r.objectStore(T).put(o,"key"),r.onabort=function(a){a.preventDefault(),a.stopPropagation(),n(!1)},r.oncomplete=function(){var a=navigator.userAgent.match(/Chrome\/(\d+)/),t=navigator.userAgent.match(/Edge\//);n(t||!a||parseInt(a[1],10)>=43)}}).catch(function(){return!1})}function I(e){return typeof M=="boolean"?l.resolve(M):g(e).then(function(n){return M=n,M})}function C(e){var n=D[e.name],r={};r.promise=new l(function(o,a){r.resolve=o,r.reject=a}),n.deferredOperations.push(r),n.dbReady?n.dbReady=n.dbReady.then(function(){return r.promise}):n.dbReady=r.promise}function U(e){var n=D[e.name],r=n.deferredOperations.pop();if(r)return r.resolve(),r.promise}function Y(e,n){var r=D[e.name],o=r.deferredOperations.pop();if(o)return o.reject(n),o.promise}function W(e,n){return new l(function(r,o){if(D[e.name]=D[e.name]||ye(),e.db)if(n)C(e),e.db.close();else return r(e.db);var a=[e.name];n&&a.push(e.version);var t=x.open.apply(x,a);n&&(t.onupgradeneeded=function(i){var f=t.result;try{f.createObjectStore(e.storeName),i.oldVersion<=1&&f.createObjectStore(T)}catch(u){if(u.name==="ConstraintError")console.warn('The database "'+e.name+'" has been upgraded from version '+i.oldVersion+" to version "+i.newVersion+', but the storage "'+e.storeName+'" already exists.');else throw u}}),t.onerror=function(i){i.preventDefault(),o(t.error)},t.onsuccess=function(){var i=t.result;i.onversionchange=function(f){f.target.close()},r(i),U(e)}})}function H(e){return W(e,!1)}function Z(e){return W(e,!0)}function ne(e,n){if(!e.db)return!0;var r=!e.db.objectStoreNames.contains(e.storeName),o=e.version<e.db.version,a=e.version>e.db.version;if(o&&(e.version!==n&&console.warn('The database "'+e.name+`" can't be downgraded from version `+e.db.version+" to version "+e.version+"."),e.version=e.db.version),a||r){if(r){var t=e.db.version+1;t>e.version&&(e.version=t)}return!0}return!1}function ie(e){return new l(function(n,r){var o=new FileReader;o.onerror=r,o.onloadend=function(a){var t=btoa(a.target.result||"");n({__local_forage_encoded_blob:!0,data:t,type:e.type})},o.readAsBinaryString(e)})}function k(e){var n=w(atob(e.data));return p([n],{type:e.type})}function pe(e){return e&&e.__local_forage_encoded_blob}function We(e){var n=this,r=n._initReady().then(function(){var o=D[n._dbInfo.name];if(o&&o.dbReady)return o.dbReady});return b(r,e,e),r}function ze(e){C(e);for(var n=D[e.name],r=n.forages,o=0;o<r.length;o++){var a=r[o];a._dbInfo.db&&(a._dbInfo.db.close(),a._dbInfo.db=null)}return e.db=null,H(e).then(function(t){return e.db=t,ne(e)?Z(e):t}).then(function(t){e.db=n.db=t;for(var i=0;i<r.length;i++)r[i]._dbInfo.db=t}).catch(function(t){throw Y(e,t),t})}function V(e,n,r,o){o===void 0&&(o=1);try{var a=e.db.transaction(e.storeName,n);r(null,a)}catch(t){if(o>0&&(!e.db||t.name==="InvalidStateError"||t.name==="NotFoundError"))return l.resolve().then(function(){if(!e.db||t.name==="NotFoundError"&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),Z(e)}).then(function(){return ze(e).then(function(){V(e,n,r,o-1)})}).catch(r);r(t)}}function ye(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function $e(e){var n=this,r={db:null};if(e)for(var o in e)r[o]=e[o];var a=D[r.name];a||(a=ye(),D[r.name]=a),a.forages.push(n),n._initReady||(n._initReady=n.ready,n.ready=We);var t=[];function i(){return l.resolve()}for(var f=0;f<a.forages.length;f++){var u=a.forages[f];u!==n&&t.push(u._initReady().catch(i))}var c=a.forages.slice(0);return l.all(t).then(function(){return r.db=a.db,H(r)}).then(function(s){return r.db=s,ne(r,n._defaultConfig.version)?Z(r):s}).then(function(s){r.db=a.db=s,n._dbInfo=r;for(var h=0;h<c.length;h++){var y=c[h];y!==n&&(y._dbInfo.db=r.db,y._dbInfo.version=r.version)}})}function je(e,n){var r=this;e=N(e);var o=new l(function(a,t){r.ready().then(function(){V(r._dbInfo,X,function(i,f){if(i)return t(i);try{var u=f.objectStore(r._dbInfo.storeName),c=u.get(e);c.onsuccess=function(){var s=c.result;s===void 0&&(s=null),pe(s)&&(s=k(s)),a(s)},c.onerror=function(){t(c.error)}}catch(s){t(s)}})}).catch(t)});return v(o,n),o}function He(e,n){var r=this,o=new l(function(a,t){r.ready().then(function(){V(r._dbInfo,X,function(i,f){if(i)return t(i);try{var u=f.objectStore(r._dbInfo.storeName),c=u.openCursor(),s=1;c.onsuccess=function(){var h=c.result;if(h){var y=h.value;pe(y)&&(y=k(y));var E=e(y,h.key,s++);E!==void 0?a(E):h.continue()}else a()},c.onerror=function(){t(c.error)}}catch(h){t(h)}})}).catch(t)});return v(o,n),o}function Ve(e,n,r){var o=this;e=N(e);var a=new l(function(t,i){var f;o.ready().then(function(){return f=o._dbInfo,j.call(n)==="[object Blob]"?I(f.db).then(function(u){return u?n:ie(n)}):n}).then(function(u){V(o._dbInfo,d,function(c,s){if(c)return i(c);try{var h=s.objectStore(o._dbInfo.storeName);u===null&&(u=void 0);var y=h.put(u,e);s.oncomplete=function(){u===void 0&&(u=null),t(u)},s.onabort=s.onerror=function(){var E=y.error?y.error:y.transaction.error;i(E)}}catch(E){i(E)}})}).catch(i)});return v(a,r),a}function Ke(e,n){var r=this;e=N(e);var o=new l(function(a,t){r.ready().then(function(){V(r._dbInfo,d,function(i,f){if(i)return t(i);try{var u=f.objectStore(r._dbInfo.storeName),c=u.delete(e);f.oncomplete=function(){a()},f.onerror=function(){t(c.error)},f.onabort=function(){var s=c.error?c.error:c.transaction.error;t(s)}}catch(s){t(s)}})}).catch(t)});return v(o,n),o}function Ge(e){var n=this,r=new l(function(o,a){n.ready().then(function(){V(n._dbInfo,d,function(t,i){if(t)return a(t);try{var f=i.objectStore(n._dbInfo.storeName),u=f.clear();i.oncomplete=function(){o()},i.onabort=i.onerror=function(){var c=u.error?u.error:u.transaction.error;a(c)}}catch(c){a(c)}})}).catch(a)});return v(r,e),r}function Qe(e){var n=this,r=new l(function(o,a){n.ready().then(function(){V(n._dbInfo,X,function(t,i){if(t)return a(t);try{var f=i.objectStore(n._dbInfo.storeName),u=f.count();u.onsuccess=function(){o(u.result)},u.onerror=function(){a(u.error)}}catch(c){a(c)}})}).catch(a)});return v(r,e),r}function Xe(e,n){var r=this,o=new l(function(a,t){if(e<0){a(null);return}r.ready().then(function(){V(r._dbInfo,X,function(i,f){if(i)return t(i);try{var u=f.objectStore(r._dbInfo.storeName),c=!1,s=u.openKeyCursor();s.onsuccess=function(){var h=s.result;if(!h){a(null);return}e===0||c?a(h.key):(c=!0,h.advance(e))},s.onerror=function(){t(s.error)}}catch(h){t(h)}})}).catch(t)});return v(o,n),o}function ke(e){var n=this,r=new l(function(o,a){n.ready().then(function(){V(n._dbInfo,X,function(t,i){if(t)return a(t);try{var f=i.objectStore(n._dbInfo.storeName),u=f.openKeyCursor(),c=[];u.onsuccess=function(){var s=u.result;if(!s){o(c);return}c.push(s.key),s.continue()},u.onerror=function(){a(u.error)}}catch(s){a(s)}})}).catch(a)});return v(r,e),r}function Je(e,n){n=P.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var o=this,a;if(!e.name)a=l.reject("Invalid arguments");else{var t=e.name===r.name&&o._dbInfo.db,i=t?l.resolve(o._dbInfo.db):H(e).then(function(f){var u=D[e.name],c=u.forages;u.db=f;for(var s=0;s<c.length;s++)c[s]._dbInfo.db=f;return f});e.storeName?a=i.then(function(f){if(f.objectStoreNames.contains(e.storeName)){var u=f.version+1;C(e);var c=D[e.name],s=c.forages;f.close();for(var h=0;h<s.length;h++){var y=s[h];y._dbInfo.db=null,y._dbInfo.version=u}var E=new l(function(S,L){var B=x.open(e.name,u);B.onerror=function(z){var re=B.result;re.close(),L(z)},B.onupgradeneeded=function(){var z=B.result;z.deleteObjectStore(e.storeName)},B.onsuccess=function(){var z=B.result;z.close(),S(z)}});return E.then(function(S){c.db=S;for(var L=0;L<s.length;L++){var B=s[L];B._dbInfo.db=S,U(B._dbInfo)}}).catch(function(S){throw(Y(e,S)||l.resolve()).catch(function(){}),S})}}):a=i.then(function(f){C(e);var u=D[e.name],c=u.forages;f.close();for(var s=0;s<c.length;s++){var h=c[s];h._dbInfo.db=null}var y=new l(function(E,S){var L=x.deleteDatabase(e.name);L.onerror=function(){var B=L.result;B&&B.close(),S(L.error)},L.onblocked=function(){console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},L.onsuccess=function(){var B=L.result;B&&B.close(),E(B)}});return y.then(function(E){u.db=E;for(var S=0;S<c.length;S++){var L=c[S];U(L._dbInfo)}}).catch(function(E){throw(Y(e,E)||l.resolve()).catch(function(){}),E})})}return v(a,n),a}var qe={_driver:"asyncStorage",_initStorage:$e,_support:m(),iterate:He,getItem:je,setItem:Ve,removeItem:Ke,clear:Ge,length:Qe,key:Xe,keys:ke,dropInstance:Je};function Ze(){return typeof openDatabase=="function"}var G="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",er="~~local_forage_type~",ge=/^~~local_forage_type~([^~]+)~/,te="__lfsc__:",fe=te.length,ue="arbf",ce="blob",be="si08",_e="ui08",we="uic8",Ee="si16",Se="si32",Ie="ur16",Re="ui32",Ae="fl32",Te="fl64",De=fe+ue.length,xe=Object.prototype.toString;function Ne(e){var n=e.length*.75,r=e.length,o,a=0,t,i,f,u;e[e.length-1]==="="&&(n--,e[e.length-2]==="="&&n--);var c=new ArrayBuffer(n),s=new Uint8Array(c);for(o=0;o<r;o+=4)t=G.indexOf(e[o]),i=G.indexOf(e[o+1]),f=G.indexOf(e[o+2]),u=G.indexOf(e[o+3]),s[a++]=t<<2|i>>4,s[a++]=(i&15)<<4|f>>2,s[a++]=(f&3)<<6|u&63;return c}function se(e){var n=new Uint8Array(e),r="",o;for(o=0;o<n.length;o+=3)r+=G[n[o]>>2],r+=G[(n[o]&3)<<4|n[o+1]>>4],r+=G[(n[o+1]&15)<<2|n[o+2]>>6],r+=G[n[o+2]&63];return n.length%3===2?r=r.substring(0,r.length-1)+"=":n.length%3===1&&(r=r.substring(0,r.length-2)+"=="),r}function rr(e,n){var r="";if(e&&(r=xe.call(e)),e&&(r==="[object ArrayBuffer]"||e.buffer&&xe.call(e.buffer)==="[object ArrayBuffer]")){var o,a=te;e instanceof ArrayBuffer?(o=e,a+=ue):(o=e.buffer,r==="[object Int8Array]"?a+=be:r==="[object Uint8Array]"?a+=_e:r==="[object Uint8ClampedArray]"?a+=we:r==="[object Int16Array]"?a+=Ee:r==="[object Uint16Array]"?a+=Ie:r==="[object Int32Array]"?a+=Se:r==="[object Uint32Array]"?a+=Re:r==="[object Float32Array]"?a+=Ae:r==="[object Float64Array]"?a+=Te:n(new Error("Failed to get type for BinaryArray"))),n(a+se(o))}else if(r==="[object Blob]"){var t=new FileReader;t.onload=function(){var i=er+e.type+"~"+se(this.result);n(te+ce+i)},t.readAsArrayBuffer(e)}else try{n(JSON.stringify(e))}catch(i){console.error("Couldn't convert value into a JSON string: ",e),n(null,i)}}function nr(e){if(e.substring(0,fe)!==te)return JSON.parse(e);var n=e.substring(De),r=e.substring(fe,De),o;if(r===ce&&ge.test(n)){var a=n.match(ge);o=a[1],n=n.substring(a[0].length)}var t=Ne(n);switch(r){case ue:return t;case ce:return p([t],{type:o});case be:return new Int8Array(t);case _e:return new Uint8Array(t);case we:return new Uint8ClampedArray(t);case Ee:return new Int16Array(t);case Ie:return new Uint16Array(t);case Se:return new Int32Array(t);case Re:return new Uint32Array(t);case Ae:return new Float32Array(t);case Te:return new Float64Array(t);default:throw new Error("Unkown type: "+r)}}var le={serialize:rr,deserialize:nr,stringToBuffer:Ne,bufferToString:se};function Be(e,n,r,o){e.executeSql("CREATE TABLE IF NOT EXISTS "+n.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],r,o)}function tr(e){var n=this,r={db:null};if(e)for(var o in e)r[o]=typeof e[o]!="string"?e[o].toString():e[o];var a=new l(function(t,i){try{r.db=openDatabase(r.name,String(r.version),r.description,r.size)}catch(f){return i(f)}r.db.transaction(function(f){Be(f,r,function(){n._dbInfo=r,t()},function(u,c){i(c)})},i)});return r.serializer=le,a}function Q(e,n,r,o,a,t){e.executeSql(r,o,a,function(i,f){f.code===f.SYNTAX_ERR?i.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[n.storeName],function(u,c){c.rows.length?t(u,f):Be(u,n,function(){u.executeSql(r,o,a,t)},t)},t):t(i,f)},t)}function or(e,n){var r=this;e=N(e);var o=new l(function(a,t){r.ready().then(function(){var i=r._dbInfo;i.db.transaction(function(f){Q(f,i,"SELECT * FROM "+i.storeName+" WHERE key = ? LIMIT 1",[e],function(u,c){var s=c.rows.length?c.rows.item(0).value:null;s&&(s=i.serializer.deserialize(s)),a(s)},function(u,c){t(c)})})}).catch(t)});return v(o,n),o}function ar(e,n){var r=this,o=new l(function(a,t){r.ready().then(function(){var i=r._dbInfo;i.db.transaction(function(f){Q(f,i,"SELECT * FROM "+i.storeName,[],function(u,c){for(var s=c.rows,h=s.length,y=0;y<h;y++){var E=s.item(y),S=E.value;if(S&&(S=i.serializer.deserialize(S)),S=e(S,E.key,y+1),S!==void 0){a(S);return}}a()},function(u,c){t(c)})})}).catch(t)});return v(o,n),o}function Le(e,n,r,o){var a=this;e=N(e);var t=new l(function(i,f){a.ready().then(function(){n===void 0&&(n=null);var u=n,c=a._dbInfo;c.serializer.serialize(n,function(s,h){h?f(h):c.db.transaction(function(y){Q(y,c,"INSERT OR REPLACE INTO "+c.storeName+" (key, value) VALUES (?, ?)",[e,s],function(){i(u)},function(E,S){f(S)})},function(y){if(y.code===y.QUOTA_ERR){if(o>0){i(Le.apply(a,[e,u,r,o-1]));return}f(y)}})})}).catch(f)});return v(t,r),t}function ir(e,n,r){return Le.apply(this,[e,n,r,1])}function fr(e,n){var r=this;e=N(e);var o=new l(function(a,t){r.ready().then(function(){var i=r._dbInfo;i.db.transaction(function(f){Q(f,i,"DELETE FROM "+i.storeName+" WHERE key = ?",[e],function(){a()},function(u,c){t(c)})})}).catch(t)});return v(o,n),o}function ur(e){var n=this,r=new l(function(o,a){n.ready().then(function(){var t=n._dbInfo;t.db.transaction(function(i){Q(i,t,"DELETE FROM "+t.storeName,[],function(){o()},function(f,u){a(u)})})}).catch(a)});return v(r,e),r}function cr(e){var n=this,r=new l(function(o,a){n.ready().then(function(){var t=n._dbInfo;t.db.transaction(function(i){Q(i,t,"SELECT COUNT(key) as c FROM "+t.storeName,[],function(f,u){var c=u.rows.item(0).c;o(c)},function(f,u){a(u)})})}).catch(a)});return v(r,e),r}function sr(e,n){var r=this,o=new l(function(a,t){r.ready().then(function(){var i=r._dbInfo;i.db.transaction(function(f){Q(f,i,"SELECT key FROM "+i.storeName+" WHERE id = ? LIMIT 1",[e+1],function(u,c){var s=c.rows.length?c.rows.item(0).key:null;a(s)},function(u,c){t(c)})})}).catch(t)});return v(o,n),o}function lr(e){var n=this,r=new l(function(o,a){n.ready().then(function(){var t=n._dbInfo;t.db.transaction(function(i){Q(i,t,"SELECT key FROM "+t.storeName,[],function(f,u){for(var c=[],s=0;s<u.rows.length;s++)c.push(u.rows.item(s).key);o(c)},function(f,u){a(u)})})}).catch(a)});return v(r,e),r}function dr(e){return new l(function(n,r){e.transaction(function(o){o.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(a,t){for(var i=[],f=0;f<t.rows.length;f++)i.push(t.rows.item(f).name);n({db:e,storeNames:i})},function(a,t){r(t)})},function(o){r(o)})})}function vr(e,n){n=P.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var o=this,a;return e.name?a=new l(function(t){var i;e.name===r.name?i=o._dbInfo.db:i=openDatabase(e.name,"","",0),e.storeName?t({db:i,storeNames:[e.storeName]}):t(dr(i))}).then(function(t){return new l(function(i,f){t.db.transaction(function(u){function c(E){return new l(function(S,L){u.executeSql("DROP TABLE IF EXISTS "+E,[],function(){S()},function(B,z){L(z)})})}for(var s=[],h=0,y=t.storeNames.length;h<y;h++)s.push(c(t.storeNames[h]));l.all(s).then(function(){i()}).catch(function(E){f(E)})},function(u){f(u)})})}):a=l.reject("Invalid arguments"),v(a,n),a}var hr={_driver:"webSQLStorage",_initStorage:tr,_support:Ze(),iterate:ar,getItem:or,setItem:ir,removeItem:fr,clear:ur,length:cr,key:sr,keys:lr,dropInstance:vr};function mr(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function Oe(e,n){var r=e.name+"/";return e.storeName!==n.storeName&&(r+=e.storeName+"/"),r}function pr(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch{return!0}}function yr(){return!pr()||localStorage.length>0}function gr(e){var n=this,r={};if(e)for(var o in e)r[o]=e[o];return r.keyPrefix=Oe(e,n._defaultConfig),yr()?(n._dbInfo=r,r.serializer=le,l.resolve()):l.reject()}function br(e){var n=this,r=n.ready().then(function(){for(var o=n._dbInfo.keyPrefix,a=localStorage.length-1;a>=0;a--){var t=localStorage.key(a);t.indexOf(o)===0&&localStorage.removeItem(t)}});return v(r,e),r}function _r(e,n){var r=this;e=N(e);var o=r.ready().then(function(){var a=r._dbInfo,t=localStorage.getItem(a.keyPrefix+e);return t&&(t=a.serializer.deserialize(t)),t});return v(o,n),o}function wr(e,n){var r=this,o=r.ready().then(function(){for(var a=r._dbInfo,t=a.keyPrefix,i=t.length,f=localStorage.length,u=1,c=0;c<f;c++){var s=localStorage.key(c);if(s.indexOf(t)===0){var h=localStorage.getItem(s);if(h&&(h=a.serializer.deserialize(h)),h=e(h,s.substring(i),u++),h!==void 0)return h}}});return v(o,n),o}function Er(e,n){var r=this,o=r.ready().then(function(){var a=r._dbInfo,t;try{t=localStorage.key(e)}catch{t=null}return t&&(t=t.substring(a.keyPrefix.length)),t});return v(o,n),o}function Sr(e){var n=this,r=n.ready().then(function(){for(var o=n._dbInfo,a=localStorage.length,t=[],i=0;i<a;i++){var f=localStorage.key(i);f.indexOf(o.keyPrefix)===0&&t.push(f.substring(o.keyPrefix.length))}return t});return v(r,e),r}function Ir(e){var n=this,r=n.keys().then(function(o){return o.length});return v(r,e),r}function Rr(e,n){var r=this;e=N(e);var o=r.ready().then(function(){var a=r._dbInfo;localStorage.removeItem(a.keyPrefix+e)});return v(o,n),o}function Ar(e,n,r){var o=this;e=N(e);var a=o.ready().then(function(){n===void 0&&(n=null);var t=n;return new l(function(i,f){var u=o._dbInfo;u.serializer.serialize(n,function(c,s){if(s)f(s);else try{localStorage.setItem(u.keyPrefix+e,c),i(t)}catch(h){(h.name==="QuotaExceededError"||h.name==="NS_ERROR_DOM_QUOTA_REACHED")&&f(h),f(h)}})})});return v(a,r),a}function Tr(e,n){if(n=P.apply(this,arguments),e=typeof e!="function"&&e||{},!e.name){var r=this.config();e.name=e.name||r.name,e.storeName=e.storeName||r.storeName}var o=this,a;return e.name?a=new l(function(t){e.storeName?t(Oe(e,o._defaultConfig)):t(e.name+"/")}).then(function(t){for(var i=localStorage.length-1;i>=0;i--){var f=localStorage.key(i);f.indexOf(t)===0&&localStorage.removeItem(f)}}):a=l.reject("Invalid arguments"),v(a,n),a}var Dr={_driver:"localStorageWrapper",_initStorage:gr,_support:mr(),iterate:wr,getItem:_r,setItem:Ar,removeItem:Rr,clear:br,length:Ir,key:Er,keys:Sr,dropInstance:Tr},xr=function(n,r){return n===r||typeof n=="number"&&typeof r=="number"&&isNaN(n)&&isNaN(r)},Nr=function(n,r){for(var o=n.length,a=0;a<o;){if(xr(n[a],r))return!0;a++}return!1},Ce=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},ee={},Pe={},J={INDEXEDDB:qe,WEBSQL:hr,LOCALSTORAGE:Dr},Br=[J.INDEXEDDB._driver,J.WEBSQL._driver,J.LOCALSTORAGE._driver],oe=["dropInstance"],de=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(oe),Lr={description:"",driver:Br.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Or(e,n){e[n]=function(){var r=arguments;return e.ready().then(function(){return e[n].apply(e,r)})}}function ve(){for(var e=1;e<arguments.length;e++){var n=arguments[e];if(n)for(var r in n)n.hasOwnProperty(r)&&(Ce(n[r])?arguments[0][r]=n[r].slice():arguments[0][r]=n[r])}return arguments[0]}var Cr=function(){function e(n){A(this,e);for(var r in J)if(J.hasOwnProperty(r)){var o=J[r],a=o._driver;this[r]=a,ee[a]||this.defineDriver(o)}this._defaultConfig=ve({},Lr),this._config=ve({},this._defaultConfig,n),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return e.prototype.config=function(r){if((typeof r>"u"?"undefined":R(r))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var o in r){if(o==="storeName"&&(r[o]=r[o].replace(/\W/g,"_")),o==="version"&&typeof r[o]!="number")return new Error("Database version must be a number.");this._config[o]=r[o]}return"driver"in r&&r.driver?this.setDriver(this._config.driver):!0}else return typeof r=="string"?this._config[r]:this._config},e.prototype.defineDriver=function(r,o,a){var t=new l(function(i,f){try{var u=r._driver,c=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!r._driver){f(c);return}for(var s=de.concat("_initStorage"),h=0,y=s.length;h<y;h++){var E=s[h],S=!Nr(oe,E);if((S||r[E])&&typeof r[E]!="function"){f(c);return}}var L=function(){for(var re=function(Ur){return function(){var Mr=new Error("Method "+Ur+" is not implemented by the current driver"),Fe=l.reject(Mr);return v(Fe,arguments[arguments.length-1]),Fe}},he=0,Fr=oe.length;he<Fr;he++){var me=oe[he];r[me]||(r[me]=re(me))}};L();var B=function(re){ee[u]&&console.info("Redefining LocalForage driver: "+u),ee[u]=r,Pe[u]=re,i()};"_support"in r?r._support&&typeof r._support=="function"?r._support().then(B,f):B(!!r._support):B(!0)}catch(z){f(z)}});return b(t,o,a),t},e.prototype.driver=function(){return this._driver||null},e.prototype.getDriver=function(r,o,a){var t=ee[r]?l.resolve(ee[r]):l.reject(new Error("Driver not found."));return b(t,o,a),t},e.prototype.getSerializer=function(r){var o=l.resolve(le);return b(o,r),o},e.prototype.ready=function(r){var o=this,a=o._driverSet.then(function(){return o._ready===null&&(o._ready=o._initDriver()),o._ready});return b(a,r,r),a},e.prototype.setDriver=function(r,o,a){var t=this;Ce(r)||(r=[r]);var i=this._getSupportedDrivers(r);function f(){t._config.driver=t.driver()}function u(h){return t._extend(h),f(),t._ready=t._initStorage(t._config),t._ready}function c(h){return function(){var y=0;function E(){for(;y<h.length;){var S=h[y];return y++,t._dbInfo=null,t._ready=null,t.getDriver(S).then(u).catch(E)}f();var L=new Error("No available storage method found.");return t._driverSet=l.reject(L),t._driverSet}return E()}}var s=this._driverSet!==null?this._driverSet.catch(function(){return l.resolve()}):l.resolve();return this._driverSet=s.then(function(){var h=i[0];return t._dbInfo=null,t._ready=null,t.getDriver(h).then(function(y){t._driver=y._driver,f(),t._wrapLibraryMethodsWithReady(),t._initDriver=c(i)})}).catch(function(){f();var h=new Error("No available storage method found.");return t._driverSet=l.reject(h),t._driverSet}),b(this._driverSet,o,a),this._driverSet},e.prototype.supports=function(r){return!!Pe[r]},e.prototype._extend=function(r){ve(this,r)},e.prototype._getSupportedDrivers=function(r){for(var o=[],a=0,t=r.length;a<t;a++){var i=r[a];this.supports(i)&&o.push(i)}return o},e.prototype._wrapLibraryMethodsWithReady=function(){for(var r=0,o=de.length;r<o;r++)Or(this,de[r])},e.prototype.createInstance=function(r){return new e(r)},e}(),Pr=new Cr;O.exports=Pr},{3:3}]},{},[4])(4)})})(Ue);var Wr=Ue.exports;const jr=Yr(Wr);var Me={exports:{}};(function(q,Ye){(function(F,O){O()})(K,function(){function F(m,p){return typeof p>"u"?p={autoBom:!1}:typeof p!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),p={autoBom:!p}),p.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(m.type)?new Blob(["\uFEFF",m],{type:m.type}):m}function O(m,p,l){var v=new XMLHttpRequest;v.open("GET",m),v.responseType="blob",v.onload=function(){x(v.response,p,l)},v.onerror=function(){console.error("could not download file")},v.send()}function $(m){var p=new XMLHttpRequest;p.open("HEAD",m,!1);try{p.send()}catch{}return 200<=p.status&&299>=p.status}function R(m){try{m.dispatchEvent(new MouseEvent("click"))}catch{var p=document.createEvent("MouseEvents");p.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),m.dispatchEvent(p)}}var A=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof K=="object"&&K.global===K?K:void 0,_=A.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),x=A.saveAs||(typeof window!="object"||window!==A?function(){}:"download"in HTMLAnchorElement.prototype&&!_?function(m,p,l){var v=A.URL||A.webkitURL,b=document.createElement("a");p=p||m.name||"download",b.download=p,b.rel="noopener",typeof m=="string"?(b.href=m,b.origin===location.origin?R(b):$(b.href)?O(m,p,l):R(b,b.target="_blank")):(b.href=v.createObjectURL(m),setTimeout(function(){v.revokeObjectURL(b.href)},4e4),setTimeout(function(){R(b)},0))}:"msSaveOrOpenBlob"in navigator?function(m,p,l){if(p=p||m.name||"download",typeof m!="string")navigator.msSaveOrOpenBlob(F(m,l),p);else if($(m))O(m,p,l);else{var v=document.createElement("a");v.href=m,v.target="_blank",setTimeout(function(){R(v)})}}:function(m,p,l,v){if(v=v||open("","_blank"),v&&(v.document.title=v.document.body.innerText="downloading..."),typeof m=="string")return O(m,p,l);var b=m.type==="application/octet-stream",N=/constructor/i.test(A.HTMLElement)||A.safari,P=/CriOS\/[\d]+/.test(navigator.userAgent);if((P||b&&N||_)&&typeof FileReader<"u"){var T=new FileReader;T.onloadend=function(){var j=T.result;j=P?j:j.replace(/^data:[^;]*;/,"data:attachment/file;"),v?v.location.href=j:location=j,v=null},T.readAsDataURL(m)}else{var M=A.URL||A.webkitURL,D=M.createObjectURL(m);v?v.location=D:location.href=D,v=null,setTimeout(function(){M.revokeObjectURL(D)},4e4)}});A.saveAs=x.saveAs=x,q.exports=x})})(Me);var Hr=Me.exports;export{Hr as F,jr as l};
