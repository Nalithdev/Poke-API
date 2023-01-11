
let poke = []
document.querySelector('.pokemon_area').innerHTML = '';
for(let i =0 ; i<6 ; i++){
    poke =Math.floor(Math.random()*  900 )
    if(poke == 0){
        poke =Math.floor(Math.random()*  900 )
    }
    else{

console.log(poke)
let allpokemon = fetch('https://pokeapi.co/api/v2/pokemon/'+ poke)
allpokemon.then(function (response) {
    return response.json();
    }).then(function (data) {
    console.log(data);

        let div = document.createElement('div')
        div.innerHTML += `<div><h2>${data.name}</h2><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png"></div>`
        document.querySelector('.pokemon_area').appendChild(div)

});
    }
}
