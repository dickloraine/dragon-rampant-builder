if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const t=e=>i(e,o),a={module:{uri:o},exports:l,require:t};s[o]=Promise.all(r.map((e=>a[e]||t(e)))).then((e=>(n(...e),l)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/hookform-a5aa7ee8.js",revision:null},{url:"assets/index-f4a3b6c7.js",revision:null},{url:"assets/localstorage-1d97b8aa.js",revision:null},{url:"assets/mui-163807b7.js",revision:null},{url:"assets/react-adf67704.js",revision:null},{url:"assets/redux-54592e7e.js",revision:null},{url:"index.html",revision:"76dd294fc64708b2f6b360934c90e442"},{url:"registerSW.js",revision:"d3e611da965a31e85d5e2dc10d8f2e25"},{url:"favicon.ico",revision:"ba865e60201333d615762ac47a5303fb"},{url:"icon-192x192.png",revision:"f445aa3cca677193d1a02987496896fa"},{url:"icon-512x512.png",revision:"ba2aa4446cf63a86b3ee628181fedafa"},{url:"manifest.webmanifest",revision:"ee678d502d399a3d316dbfa061f61c1e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
