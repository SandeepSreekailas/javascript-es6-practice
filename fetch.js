// fetch = Function used for making HTTP requests to fetch resources.
// (JSON style data, images, files)
// Simplifies asynchronous data fetching in JavaScript and used for interacting with APIs to retrieve and send data asynchronously over the web.
// fetch(url, {options}->(get, post, put, delete))

// fetch("https://api.jikan.moe/v4/seasons/now")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error));


// fetch("https://api.jikan.moe/v4/seasons/now")
// .then(response => {
//     if(!response.ok){
//         throw new Error("Network response was not ok");
//     }
//     return response.json();
// })
// .then(data => console.log(data.data[2].title))
// .catch(error => console.log(error));


// async function pokemons() {

//     try {
//         const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//         if (!response) {
//             throw new Error("could not fetch Resources");
//         }
//         const data = await response.json()
//         console.log(data);

//     }
//     catch (error) {
//         console.error(error);

//     }

// }
// pokemons()


async function Pokemons(){

    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if(!response){
            throw new Error("could not fetch resources");
        }
        const data = await response.json()
        // console.log(data);
        const PokemonSprite = data.sprites.front_default;
        const pokemonImage = document.getElementById("pokemonimg")

        pokemonImage.src = PokemonSprite
        pokemonImage.style.display = "block"
        pokemonImage.style.width = "500px"

    }
    catch(error){
        console.error(error);
    }
    
}

