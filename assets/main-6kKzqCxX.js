import"./modulepreload-polyfill-B5Qt9EMX.js";const s=o=>{var n;const t=(n=document.scrollingElement)==null?void 0:n.scrollTop;if(t){const e="center",c=t*.1,l=`${e} -${c}px`;o.style.backgroundPosition=l}};window.onload=()=>{var t;const o=document.getElementsByTagName("body")[0];s(o),o.onscroll=()=>{s(o)},(t=document.getElementById("theme"))==null||t.addEventListener("click",()=>{const n=o.className.split(" "),e=n.indexOf("night");e>=0?n.splice(e):n.push("night"),o.className=n.join(" ")})};
