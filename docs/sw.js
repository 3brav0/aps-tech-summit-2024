if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const u=s=>i(s,r),o={module:{uri:r},exports:t,require:u};e[r]=Promise.all(l.map((s=>o[s]||u(s)))).then((s=>(n(...s),t)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/focus-visible-legacy-CdO5cX4I.js",revision:null},{url:"assets/focus-visible-supuXXMI.js",revision:null},{url:"assets/index-CESHOk1n.css",revision:null},{url:"assets/index-D8G871HQ.js",revision:null},{url:"assets/index-legacy-DUEe-JNU.js",revision:null},{url:"assets/index9-CdJ2hRsE.js",revision:null},{url:"assets/index9-legacy-BYc5lxEG.js",revision:null},{url:"assets/input-shims-JC7a17MZ.js",revision:null},{url:"assets/input-shims-legacy-CH-ZdX-E.js",revision:null},{url:"assets/ios.transition-legacy-DbKw7o0f.js",revision:null},{url:"assets/ios.transition-Ypr0D5AD.js",revision:null},{url:"assets/keyboard2-BW3YRsvs.js",revision:null},{url:"assets/keyboard2-legacy-Bv9hL3wo.js",revision:null},{url:"assets/md.transition-D07MiO8_.js",revision:null},{url:"assets/md.transition-legacy-BpA1IzdC.js",revision:null},{url:"assets/polyfills-legacy-BH1f10e0.js",revision:null},{url:"assets/status-tap-CbZPIEH2.js",revision:null},{url:"assets/status-tap-legacy-_q6hwcb-.js",revision:null},{url:"assets/swipe-back-Cum0kzP9.js",revision:null},{url:"assets/swipe-back-legacy-CNci97Gc.js",revision:null},{url:"index.html",revision:"da408a268746a20ed10efa925e6a3de6"},{url:"registerSW.js",revision:"361c5b20f66eb0d06f4a1478f73539b9"},{url:"manifest.webmanifest",revision:"4d91d3e9c7c17c4d3de37efb6ff9f35e"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
