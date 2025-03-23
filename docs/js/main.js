console.log(">> Ready :)");const i=document.querySelector(".js-usersList"),a=()=>{fetch("https://randomuser.me/api/?results=10").then(t=>t.json()).then(t=>{console.log(t);const o=t.results.map(e=>({photo:e.picture.large,name:e.name.title+""+e.name.first+e.name.last,city:e.location.city,userName:e.login.username,isFriend:!1}));console.log(o),l(o);function l(e){let s="";for(const n of e)s+=`
            <li class="js-user">
                <img src="${n.photo}" alt="">
                <h2>${n.name}</h2>
                <p>${n.city}</p>
                <p>${n.userName}</p>
            </li>
            `;i.innerHTML=s;const r=document.querySelectorAll(".js-user");for(const n of r)n.addEventListener("click",c)}function c(){console.log("Ha hecho click")}})};window.addEventListener("load",a);
//# sourceMappingURL=main.js.map
