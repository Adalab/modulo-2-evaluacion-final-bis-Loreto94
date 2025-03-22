console.log(">> Ready :)");const l=document.querySelector(".js-usersList"),c=()=>{fetch("https://randomuser.me/api/?results=10").then(t=>t.json()).then(t=>{console.log(t);const o=t.results.map(e=>({photo:e.picture.large,name:e.name.title+""+e.name.first+e.name.last,city:e.location.city,userName:e.login.username}));console.log(o),r(o);function r(e){let s="";for(const n of e)s+=`
            <li>
                <img src="${n.photo}" alt="">
                <h2>${n.name}</h2>
                <p>${n.city}</p>
                <p>${n.userName}</p>
            </li>
            `;l.innerHTML=s}})};window.addEventListener("load",c);
//# sourceMappingURL=main.js.map
