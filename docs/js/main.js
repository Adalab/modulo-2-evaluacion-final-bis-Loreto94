console.log(">> Ready :)");const d=document.querySelector(".js-usersList"),u=document.querySelector(".js-setBttn"),m=document.querySelector(".js-recoverBttn"),g=()=>{fetch("https://randomuser.me/api/?results=10").then(s=>s.json()).then(s=>{console.log(s);const c=s.results.map(e=>({photo:e.picture.large,name:e.name.title+""+e.name.first+e.name.last,city:e.location.city,userName:e.login.username,isFriend:!1,idValue:e.id.value}));r(c);function r(e){let o="";for(const t of e)o+=`
            <li class="js-user" id="${t.idValue}">
                <img src="${t.photo}" alt="">
                <h2>${t.name}</h2>
                <p>${t.city}</p>
                <p>${t.userName}</p>
            </li>
            `;d.innerHTML=o;const n=document.querySelectorAll(".js-user");for(const t of n)t.addEventListener("click",a)}const l=()=>{localStorage.setItem("user",JSON.stringify(c))},i=()=>{const e=JSON.parse(localStorage.getItem("user"));console.log(typeof e)};u.addEventListener("click",l),m.addEventListener("click",i);function a(e){console.log("Ha hecho click");const o=e.currentTarget.id;console.log("ID del usuario clickado",o),console.log("usuarios favoritos");const n=c.find(t=>t.idValue===o);console.log(n),n&&(n.isFriend=!0,console.log("Usuario marcado"),r(c))}})};window.addEventListener("load",g);
//# sourceMappingURL=main.js.map
