console.log(">> Ready :)");const r=document.querySelector(".js-usersList"),i=document.querySelector(".js-setBttn"),a=document.querySelector(".js-recoverBttn");let o=[];const d=()=>{fetch("https://randomuser.me/api/?results=10").then(s=>s.json()).then(s=>{console.log(s),o=s.results.map(e=>({photo:e.picture.large,name:e.name.title+""+e.name.first+e.name.last,city:e.location.city,userName:e.login.username,isFriend:!1,idValue:e.id.value})),c(o),i.addEventListener("click",m),a.addEventListener("click",g)})};function c(s){let e="";for(const t of s){const l=t.isFriend?"friend":"";e+=`
<li class="user js-user ${l}" id="${t.idValue}">
    <img class="js-image" src="${t.photo}" alt="">
    <h2 class="js-name">${t.name}</h2>
    <p class="js-city">${t.city}</p>
    <p class="js-username">${t.userName}</p>
</li>
`}r.innerHTML=e;const n=document.querySelectorAll(".js-user");for(const t of n)t.addEventListener("click",u)}function u(s){console.log("Ha hecho click");const e=s.currentTarget.id;console.log("ID del usuario clickado",e),console.log("usuarios favoritos");const n=o.findIndex(t=>(console.log(e),t.idValue===e));n!==-1&&(o[n].isFriend=!0,console.log(o[n].isFriend),c(o))}const m=()=>{localStorage.setItem("user",JSON.stringify(o))},g=()=>{const s=JSON.parse(localStorage.getItem("user"));console.log(typeof s),o=s,console.log(o),c(o)};window.addEventListener("load",d);
//# sourceMappingURL=main.js.map
