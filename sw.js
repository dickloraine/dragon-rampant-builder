if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let o={};const l=e=>i(e,a),t={module:{uri:a},exports:o,require:l};s[a]=Promise.all(r.map((e=>t[e]||l(e)))).then((e=>(n(...e),o)))}}define(["./workbox-9517df1b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/hookform-2edf2b83.js",revision:null},{url:"assets/index-f7beffd2.js",revision:null},{url:"assets/localstorage-1d97b8aa.js",revision:null},{url:"assets/mui-a187ba0c.js",revision:null},{url:"assets/react-adf67704.js",revision:null},{url:"assets/redux-67cba2d4.js",revision:null},{url:"index.html",revision:"dff33ae607b7441d25b13a9e9ec79550"},{url:"registerSW.js",revision:"d3e611da965a31e85d5e2dc10d8f2e25"},{url:"favicon.ico",revision:"ba865e60201333d615762ac47a5303fb"},{url:"icon-192x192.png",revision:"f445aa3cca677193d1a02987496896fa"},{url:"icon-512x512.png",revision:"ba2aa4446cf63a86b3ee628181fedafa"},{url:"maskable.png",revision:"98d92e9ea974467c4f695db48cca0cae"},{url:"manifest.webmanifest",revision:"82ab6e11fc37fd0fadab3cf0bf14e78e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
