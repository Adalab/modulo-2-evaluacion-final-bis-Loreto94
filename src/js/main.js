'use strict';

console.log('>> Ready :)');

const usersList = document.querySelector(".js-usersList");
const setButtn = document.querySelector(".js-setBttn");
const recoverBttn = document.querySelector(".js-recoverBttn");
let users = []; //ESTE ES EL ARRAY CON EL ELEMENTO SELECCIONADO, SOBRE EL QUE USAR METODO FUNCIONAL ¿?

const handleFetch = () => {
    fetch("https://randomuser.me/api/?results=10")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            users = data.results.map((user) => {//Recorro el array con map y devuelvo un nueva array con cada elemento (user) cambiado
                return {//Propiedades del objeto
                    photo: user.picture.large,
                    name: user.name.title + "" + user.name.first + "" + user.name.last,
                    city: user.location.city,
                    userName: user.login.username,
                    isFriend: false,
                    idValue: user.id.value,
                }
            })


            renderUsers(users);


            setButtn.addEventListener("click", handleClick);
            recoverBttn.addEventListener("click", handleRecover);

        })
}

function renderUsers(users) {
    let content = "";
    for (const user of users) {
        const friendClass = user.isFriend ? "friend" : "";
        content += `
<li class="user js-user ${friendClass}" id="${user.idValue}">
    <img class="js-image" src="${user.photo}" alt="">
    <h2 class="js-name">${user.name}</h2>
    <p class="js-city">${user.city}</p>
    <p class="js-username">${user.userName}</p>
</li>
`
    }

    usersList.innerHTML = content;


    //Cuando la usuaria haga click en un usuario
    const elementsList = document.querySelectorAll(".js-user");//Me devuelve una lista de elementos del html con esa clase (un array)
    for (const element of elementsList) {
        element.addEventListener("click", handleAddFavorite);
    }
}

function handleAddFavorite(event) {
    console.log("Ha hecho click");
    const idUser = event.currentTarget.id; //¿Por qué id y no idValue?
    console.log("ID del usuario clickado", idUser);//Tengo que saber en cúal ha clickado con el id

    console.log("usuarios favoritos");
    //Bucar el elemento clickado
    const userSelected = users.findIndex((user) => { //El find siempre me devuelve el elemento de un array (userSelected)
        console.log(idUser); //es el id //selecciona de uno en uno
        return user.idValue === idUser;

    })

    if (userSelected !== -1) {  // Verificamos si el índice es válido (no -1, lo que indica que el usuario fue encontrado)
        users[userSelected].isFriend = true;  // Modificar el objeto directamente en el array usando el índice
        console.log(users[userSelected].isFriend);
        renderUsers(users);  // Volver a renderizar la lista de usuarios con los cambios
    }
}

const handleClick = () => {
    localStorage.setItem("user", JSON.stringify(users));

}
const handleRecover = () => {
    const userLocalStorage = JSON.parse(localStorage.getItem("user"));
    console.log(typeof userLocalStorage);
    users = userLocalStorage;  // Sobrescribir el array de usuarios con los datos recuperados
    console.log(users);
    renderUsers(users);
}
window.addEventListener("load", handleFetch);



