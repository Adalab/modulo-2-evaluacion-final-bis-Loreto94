console.log(">> Ready :)");const l=document.querySelector(".js-usersList"),i=document.querySelector(".js-setBttn"),a=document.querySelector(".js-recoverBttn");let n=[];const d=()=>{fetch("https://randomuser.me/api/?results=10").then(t=>t.json()).then(t=>{console.log(t),n=t.results.map(e=>({photo:e.picture.large,name:e.name.title+""+e.name.first+e.name.last,city:e.location.city,userName:e.login.username,isFriend:!1,idValue:e.id.value})),r(n),i.addEventListener("click",m),a.addEventListener("click",g)})};function r(t){let e="";for(const o of t){const c=o.isFriend?"friend":"";e+=`
<li class="user js-user ${c}" id="${o.idValue}">
    <img src="${o.photo}" alt="">
    <h2>${o.name}</h2>
    <p>${o.city}</p>
    <p>${o.userName}</p>
</li>
`}l.innerHTML=e;const s=document.querySelectorAll(".js-user");for(const o of s)o.addEventListener("click",u)}function u(t){console.log("Ha hecho click");const e=t.currentTarget.id;console.log("ID del usuario clickado",e),console.log("usuarios favoritos");const s=n.findIndex(o=>(console.log(e),o.idValue===e));s!==-1&&(n[s].isFriend=!0,console.log(n[s].isFriend),r(n))}const m=()=>{localStorage.setItem("user",JSON.stringify(n))},g=()=>{const t=JSON.parse(localStorage.getItem("user"));console.log(typeof t)};window.addEventListener("load",d);
//# sourceMappingURL=main.js.map
