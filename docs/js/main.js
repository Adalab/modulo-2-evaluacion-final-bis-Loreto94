console.log(">> Ready :)");const r=document.querySelector(".js-usersList"),a=()=>{fetch("https://randomuser.me/api/?results=10").then(t=>t.json()).then(t=>{console.log(t);const l=t.results.map(e=>({photo:e.picture.large,name:e.name.title+""+e.name.first+e.name.last,city:e.location.city,userName:e.login.username,isFriend:!1,idValue:e.id.value}));console.log(l),c(l);function c(e){let s="";for(const o of e)s+=`
            <li class="js-user" id="${o.idValue}">
                <img src="${o.photo}" alt="">
                <h2>${o.name}</h2>
                <p>${o.city}</p>
                <p>${o.userName}</p>
            </li>
            `;r.innerHTML=s;const n=document.querySelectorAll(".js-user");for(const o of n)o.addEventListener("click",i)}function i(e){console.log("Ha hecho click");const s=e.currentTarget.id;console.log("ID del usuario clickado",s),console.log("usuarios favoritos");const n=l.find(o=>o.idValue===s);console.log(n),n&&(n.isFriend=!0,console.log("Usuario seleccionado",n),c(l))}})};window.addEventListener("load",a);
//# sourceMappingURL=main.js.map
