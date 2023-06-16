(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),r=n.n(o),c=n(645),i=n.n(c)()(r());i.push([e.id,".projList {\n  list-style-type: none;\n}\n\n.projList li {\n  border: 1px solid black;\n  margin: 2px;\n  padding: 2px;\n}\n\n.toDoList {\n  list-style-type: none;\n}\n\n.toDoList li {\n  border: 1px solid black;\n}\n\n.listItems {\n  font: 600;\n}\n",""]);const a=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,c){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(i[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&i[s[0]]||(void 0!==c&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=c),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var c={},i=[],a=0;a<e.length;a++){var d=e[a],l=o.base?d[0]+o.base:d[0],s=c[l]||0,u="".concat(l," ").concat(s);c[l]=s+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=a,t.splice(a,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var c=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<c.length;i++){var a=n(c[i]);t[a].references--}for(var d=o(e,r),l=0;l<c.length;l++){var s=n(c[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}c=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{let e=[];e.push("Proj1"),e.push("Proj2");const t=()=>{const t=document.querySelector(".sidebar"),n=document.querySelector(".projList");n.innerHTML=function(e){n.innerHTML="",t.appendChild(n);let o="";for(let t=0;t<e.length;t++)o+=`<li id=proj${t}>${e[t.toString()]}<button id="deleteProj${t}" ></li>`;return o}(e),t.appendChild(n)},o=()=>{const n=n=>{const r=n.target.id.split("")[10];e.splice(r,1),t(),o()};0!=e.length&&document.querySelectorAll('[id *= "deleteProj"]').forEach((e=>e.addEventListener("click",n)))},r=()=>{const e=document.querySelector("#toDoDiv"),t=document.querySelector(".toDoList");t.innerHTML=function(n){t.innerHTML="",e.appendChild(t);let o="";for(let e=0;e<n.length;e++)o+=`<li class="listItem${[e]}">${`<input type="checkbox" class="itemCheck${[e]}"> `+n[e].Title+" "+n[e].Description+" "+n[e].dueDate+" "+`<button id="deleteItem${[e]}">`}</li>`;return o}(i),c(),console.log("hiiii")},c=()=>{const e=e=>{const t=e.target.id.split("")[10];i.splice(t,1),r()};0!=i.length&&document.querySelectorAll('[id *= "deleteItem"]').forEach((t=>t.addEventListener("click",e)))};let i=[];const a=(e,t,n,o)=>({Title:e,Description:t,DueDate:n,Checklist:o}),d=a("grocery","buy groceries","tomorrow",!1);i.push(d);var l=n(379),s=n.n(l),u=n(795),p=n.n(u),m=n(569),f=n.n(m),v=n(565),h=n.n(v),y=n(216),b=n.n(y),g=n(589),E=n.n(g),C=n(28),x={};x.styleTagTransform=E(),x.setAttributes=h(),x.insert=f().bind(null,"head"),x.domAPI=p(),x.insertStyleElement=b(),s()(C.Z,x),C.Z&&C.Z.locals&&C.Z.locals,function(){const e=document.querySelector("#content"),t=document.createElement("h1");t.textContent="ToDoy",e.appendChild(t);const n=document.createElement("div");n.classList.add("sidebar"),n.style.backgroundColor="lightblue",n.style.width="500px",e.appendChild(n);const o=document.createElement("button");o.textContent="Today",n.appendChild(o);const r=document.createElement("button");r.textContent="This Week",n.appendChild(r);const c=document.createElement("h2");c.textContent="Projects",n.appendChild(c);const i=document.createElement("ul");i.classList.add("projList"),n.appendChild(i);const a=document.createElement("button");a.classList.add("addProj"),a.textContent="Add Project",n.appendChild(a);const d=document.createElement("div");d.setAttribute("id","newProjDiv"),d.style.display="none",n.appendChild(d);const l=document.createElement("input");l.setAttribute("id","projInput");const s=document.createElement("button");s.setAttribute("id","addButt");const u=document.createElement("button");u.setAttribute("id","cancelButt"),d.appendChild(l),d.appendChild(s),d.appendChild(u),document.createElement("div").classList.add("toDoDiv")}(),(()=>{function n(){document.getElementById("projInput").value="",document.getElementById("newProjDiv").style.display="none"}document.querySelector(".addProj").addEventListener("click",(function(){document.getElementById("newProjDiv").style.display="block"})),document.getElementById("cancelButt").addEventListener("click",n),document.getElementById("addButt").addEventListener("click",(function(){return e.push(document.getElementById("projInput").value),console.log(e),t(),n(),o(),{}}))})(),t(),a(),document.querySelector("#subButt").addEventListener("click",(function(){const e=a(document.querySelector("#title").value,document.querySelector("#description").value,document.querySelector("#dueDate").value,!1);i.push(e),console.log(i),document.querySelector("#title").value="",document.querySelector("#description").value="",document.querySelector("#dueDate").value="",r()})),r(),c(),o(),document.querySelectorAll('[id ^= "proj').forEach((e=>e.addEventListener("click",r)))})()})();