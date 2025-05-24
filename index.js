
window.addEventListener('load', function () {

})

const a = 1
let b = 2


function botao() {

    let bulbassaur = {
        "name": "Bulbassaur",
        "types": [
           "Grass",
           "Poison"
        ],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    }


    console.log('Fui clicado')
    let cardGroup = document.getElementById('card-group')

    let divCard = document.createElement('div')
    divCard.className = 'card'
    cardGroup.appendChild(divCard)

    let divImageBorder = document.createElement('div')
    divImageBorder.className = 'card-img-border'
    divCard.appendChild(divImageBorder)

    let imgMargin = document.createElement('img')
    imgMargin.className = 'margin0'
    imgMargin.src = bulbassaur.sprite
    imgMargin.height = '70'
    imgMargin.width = '70' 
    divImageBorder.appendChild(imgMargin)


    let divCardName = document.createElement('div')
    divCardName.className = 'card-pokemon-name'
    divCardName.innerText = bulbassaur.name
    divCard.appendChild(divCardName)

    let divElementGroup = document.createElement('div')
    divElementGroup.className = 'element-group margin0'
    divCard.appendChild(divElementGroup)
    
    let divElementGrass = document.createElement('div')
    divElementGrass.className = 'element-grass'
    divElementGrass.innerText = bulbassaur.types[0]
    divElementGroup.appendChild(divElementGrass)

    let divElementPoison = document.createElement('div')
    divElementPoison.className = 'element-poison'
    divElementPoison.innerText = bulbassaur.types[1]
    divElementGroup.appendChild(divElementPoison)










}
