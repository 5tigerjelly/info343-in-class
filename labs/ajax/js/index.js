// @ts-check
"use strict";

const POKEMON_API = "https://pokeapi.co/api/v2/pokemon/{name}/";
const ERROR_ALERT = document.querySelector("#error-alert");

function handleError(err) {
    console.error(err);
    ERROR_ALERT.textContent = err.message;
    ERROR_ALERT.classList.remove("d-none");
}

function handleResponse(response) {
    if (response.ok) {
        return response.json();
    } else {
        return response.text()
            .then(function(message) {
                throw new Error(message);
            });
    }
}

function displayPokemon(data){  
    console.log(data);  
    let typeElem = document.querySelector("#types");
    let moveElem = document.querySelector("#moves");
    let gameElem = document.querySelector("#games");
    let imgElem = document.querySelector("#pokemon-pic");
    let nameElem = document.querySelector("#name");

    let pokeType = getArray(data, typeElem, "types","type");
    let pokeMove = getArray(data, moveElem, "moves", "move");
    let gameMove = getArray(data, gameElem, "game_indices", "version");
    let pokemonImg = document.createElement("img");
    imgElem.src = data.sprites.front_default;
    nameElem.textContent = data.name[0].toUpperCase() + data.name.slice(1);
    console.log(pokemonImg);
}

function getArray(data, typeElem, parantName, tag){
    let pokeType = data[parantName].reduce(function(typeArr, pokemon){
        typeArr.push(pokemon[tag].name);
        return typeArr;
    }, []);

    let typeUl = document.createElement("ul");

    if(parantName === "game_indices"){
        pokeType = pokeType.filter(e => e[0] === 's');
    }
    pokeType = pokeType.slice(0,10);
    pokeType.forEach(function(type) {
        let typeLi = document.createElement("li");
        typeLi.textContent = type;
        typeUl.appendChild(typeLi);
    });
    typeElem.appendChild(typeUl);

}

fetch(POKEMON_API.replace("{name}", "pikachu"))
    .then(handleResponse)
    .then(displayPokemon)
    .catch(handleError)