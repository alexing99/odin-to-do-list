(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),r=n.n(o),c=n(645),i=n.n(c)()(r());i.push([e.id,".projList {\n  list-style-type: none;\n}\n\n.projList li {\n  border: 1px solid black;\n  margin: 2px;\n  padding: 2px;\n}\n\n.toDoList {\n  list-style-type: none;\n}\n\n.toDoList li {\n  border: 1px solid black;\n}\n",""]);const a=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,c){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(i[d]=!0)}for(var u=0;u<e.length;u++){var s=[].concat(e[u]);o&&i[s[0]]||(void 0!==c&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=c),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var c={},i=[],a=0;a<e.length;a++){var d=e[a],u=o.base?d[0]+o.base:d[0],s=c[u]||0,l="".concat(u," ").concat(s);c[u]=s+1;var p=n(l),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=a,t.splice(a,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var c=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<c.length;i++){var a=n(c[i]);t[a].references--}for(var d=o(e,r),u=0;u<c.length;u++){var s=n(c[u]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}c=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{let e=[];e.push("Proj1"),e.push("Proj2");const t=()=>{const t=document.querySelector(".sidebar"),n=document.querySelector(".projList");n.innerHTML=function(e){n.innerHTML="",t.appendChild(n);let o="";for(let t=0;t<e.length;t++)o+=`<li>${e[t.toString()]}</li>`;return o}(e),t.appendChild(n)};let o=[];const r=(e,t,n,o)=>({Title:e,Description:t,DueDate:n,Checklist:o}),c=r("grocery","buy groceries","tomorrow",!1);o.push(c);var i=n(379),a=n.n(i),d=n(795),u=n.n(d),s=n(569),l=n.n(s),p=n(565),m=n.n(p),f=n(216),v=n.n(f),y=n(589),h=n.n(y),b=n(28),g={};g.styleTagTransform=h(),g.setAttributes=m(),g.insert=l().bind(null,"head"),g.domAPI=u(),g.insertStyleElement=v(),a()(b.Z,g),b.Z&&b.Z.locals&&b.Z.locals,function(){const e=document.querySelector("#content"),t=document.createElement("h1");t.textContent="ToDoy",e.appendChild(t);const n=document.createElement("div");n.classList.add("sidebar"),n.style.backgroundColor="lightblue",n.style.width="500px",e.appendChild(n);const o=document.createElement("button");o.textContent="Today",n.appendChild(o);const r=document.createElement("button");r.textContent="This Week",n.appendChild(r);const c=document.createElement("h2");c.textContent="Projects",n.appendChild(c);const i=document.createElement("ul");i.classList.add("projList"),n.appendChild(i);const a=document.createElement("button");a.classList.add("addProj"),a.textContent="Add Project",n.appendChild(a);const d=document.createElement("div");d.setAttribute("id","newProjDiv"),d.style.display="none",n.appendChild(d);const u=document.createElement("input");u.setAttribute("id","projInput");const s=document.createElement("button");s.setAttribute("id","addButt");const l=document.createElement("button");l.setAttribute("id","cancelButt"),d.appendChild(u),d.appendChild(s),d.appendChild(l)}(),(()=>{function n(){document.getElementById("projInput").value="",document.getElementById("newProjDiv").style.display="none"}document.querySelector(".addProj").addEventListener("click",(function(){document.getElementById("newProjDiv").style.display="block"})),document.getElementById("cancelButt").addEventListener("click",n),document.getElementById("addButt").addEventListener("click",(function(){return e.push(document.getElementById("projInput").value),console.log(e),t(),n(),{}}))})(),t(),r(),document.querySelector("#subButt").addEventListener("click",(function(){const e=r(document.querySelector("#title").value,document.querySelector("#description").value,document.querySelector("#dueDate").value,!1);o.push(e),console.log(o),(()=>{const e=document.querySelector("#toDoDiv"),t=document.querySelector(".toDoList");t.innerHTML=function(n){t.innerHTML="",e.appendChild(t);let o="";for(let e=0;e<n.length;e++)o+=`<li>${n[e].Title+" "+n[e].Description+" "+n[e].dueDate}</li>`;return o}(o)})()})),document.querySelectorAll("li").addEventListener("click",(function(){console.log("hi")}))})()})();