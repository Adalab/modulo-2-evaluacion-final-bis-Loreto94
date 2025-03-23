'use strict';

console.log('>> Ready :)');

const usersList= document.querySelector(".js-usersList");



const handleFetch = () => {
    fetch ("https://randomuser.me/api/?results=10")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const newArray= data.results.map((user)=>{//Recorro el array con map y devuelvo un nueva array con cada elemento (user) cambiado
            return {//Propiedades del objeto
                photo: user.picture.large,
                name: user.name.title + "" + user.name.first + "" + user.name.last,
                city: user.location.city,
                userName: user.login.username,
                isFriend: false, 
                idValue: user.id.value,  
            }
        })
        console.log(newArray);
        renderUsers(newArray); 
        function renderUsers(users){
            let content= "";
            for (const user of users)
            content+= `
            <li class="js-user" id="${user.idValue}">
                <img src="${user.photo}" alt="">
                <h2>${user.name}</h2>
                <p>${user.city}</p>
                <p>${user.userName}</p>
            </li>
            `
            usersList.innerHTML= content;
    //Cuando la usuaria haga click en un usuario
        const elementsList= document.querySelectorAll(".js-user");//Me devuelve una lista de elementos del html con esa clase (un array)
        for (const element of elementsList){
            element.addEventListener("click", handleAddFavorite);  
        }
        }
        function handleAddFavorite(event){
            console.log("Ha hecho click");
            const userClicked= event.currentTarget.id; //¿Por qué id y no idValue?
            console.log("ID del usuario clickado",userClicked);//Tengo que saber en cúal ha clickado con el id
            
            console.log("usuarios favoritos");
            //Bucar el elemento clickado
            const userSelected = newArray.find((user)=>{
                return user.idValue === userClicked;
               })
            console.log(userSelected);
            if(userSelected){
                userSelected.isFriend = true; //¿No se podría directamente añadir una clase con el background?
                console.log("Usuario seleccionado", userSelected);
                renderUsers(newArray);
                
            }
        
            
        
        }
         
    
        //Estilo los usuarios favoritos
        
    
    })
    
}
window.addEventListener("load", handleFetch);



