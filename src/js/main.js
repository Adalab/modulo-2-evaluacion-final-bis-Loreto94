'use strict';

console.log('>> Ready :)');

const usersList= document.querySelector(".js-usersList");

const handleFetch = () => {
    fetch ("https://randomuser.me/api/?results=10")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const newArray= data.results.map((user)=>{
            return {
                photo: user.picture.large,
                name: user.name.title + "" + user.name.first + "" + user.name.last,
                city: user.location.city,
                userName: user.login.username,  
            }
        })
        console.log(newArray);
        renderUsers(newArray); 
        function renderUsers(users){
            let content= "";
            for (const user of users)
            content+= `
            <li>
                <img src="${user.photo}" alt="">
                <h2>${user.name}</h2>
                <p>${user.city}</p>
                <p>${user.userName}</p>
            </li>
            `
            usersList.innerHTML= content;
        }
    })
}
window.addEventListener("load", handleFetch);


