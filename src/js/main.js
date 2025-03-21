'use strict';

console.log('>> Ready :)');

const handleFetch = () => {
    fetch ("https://randomuser.me/api/?results=10")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const newArray= data.results.map((user)=>{
            return {
                name: user.name,
                userName: user.login.username,
                city: user.location.city,
                photo: user.picture.large,
            }
        })
    })
}
window.addEventListener("load", handleFetch);

