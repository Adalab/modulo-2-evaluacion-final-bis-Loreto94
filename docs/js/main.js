console.log(">> Ready :)");const i=document.querySelector(".js-usersList"),a=()=>{fetch("https://randomuser.me/api/?results=10").then(t=>t.json()).then(t=>{console.log(t);const s=t.results.map(e=>({photo:e.picture.large,name:e.name.title+""+e.name.first+e.name.last,city:e.location.city,userName:e.login.username,isFriend:!1,idValue:e.id.value}));console.log(s),l(s);function l(e){let o="";for(const n of e)o+=`
            <li class="js-user" id="${n.idValue}">
                <img src="${n.photo}" alt="">
                <h2>${n.name}</h2>
                <p>${n.city}</p>
                <p>${n.userName}</p>
            </li>
            `;i.innerHTML=o;const r=document.querySelectorAll(".js-user");for(const n of r)n.addEventListener("click",c)}function c(e){console.log("Ha hecho click");const o=e.currentTarget.id;console.log(o)}})};window.addEventListener("load",a);
//# sourceMappingURL=main.js.map
