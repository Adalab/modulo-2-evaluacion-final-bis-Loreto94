console.log(">> Ready :)");const a=document.querySelector(".js-usersList"),d=document.querySelector(".js-setBttn"),u=()=>{fetch("https://randomuser.me/api/?results=10").then(l=>l.json()).then(l=>{console.log(l);const t=l.results.map(e=>({photo:e.picture.large,name:e.name.title+""+e.name.first+e.name.last,city:e.location.city,userName:e.login.username,isFriend:!1,idValue:e.id.value}));console.log(t),c(t);function c(e){let n="";for(const o of e)n+=`
            <li class="js-user" id="${o.idValue}">
                <img src="${o.photo}" alt="">
                <h2>${o.name}</h2>
                <p>${o.city}</p>
                <p>${o.userName}</p>
            </li>
            `;a.innerHTML=n;const s=document.querySelectorAll(".js-user");for(const o of s)o.addEventListener("click",i)}const r=()=>{localStorage.setItem("user",JSON.stringify(t))};d.addEventListener("click",r);function i(e){console.log("Ha hecho click");const n=e.currentTarget.id;console.log("ID del usuario clickado",n),console.log("usuarios favoritos");const s=t.find(o=>o.idValue===n);console.log(s),s&&(s.isFriend=!0,console.log("Usuario marcado"),c(t))}})};window.addEventListener("load",u);
//# sourceMappingURL=main.js.map
