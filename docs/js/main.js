console.log(">> Ready :)");const l=document.querySelector(".js-usersList");document.querySelector(".js-setBttn");document.querySelector(".js-recoverBttn");let s=[];function r(o){let n="";for(const e of o){const c=e.isFriend?"friend":"";n+=`
<li class="user js-user ${c}" id="${e.idValue}">
    <img class="js-image" src="${e.photo}" alt="">
    <h2 class="js-name">${e.name}</h2>
    <p class="js-city">${e.city}</p>
    <p class="js-username">${e.userName}</p>
    <p>${e.phone}<p/>
</li>
`}l.innerHTML=n;const t=document.querySelectorAll(".js-user");for(const e of t)e.addEventListener("click",i)}function i(o){console.log("Ha hecho click");const n=o.currentTarget.id;console.log("ID del usuario clickado",n),console.log("usuarios favoritos");const t=s.findIndex(e=>(console.log(n),e.idValue===n));t!==-1&&(s[t].isFriend=!0,console.log(s[t].isFriend),r(s))}const u=()=>{const o=JSON.parse(localStorage.getItem("user"));console.log(typeof o),s=o,console.log(s),r(s)};u();
//# sourceMappingURL=main.js.map
