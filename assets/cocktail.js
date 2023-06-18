
//This is the key : 9973533
// var requestApi = 'https://www.thecocktaildb.com/api/json/v2/9973533/recent.php';

//Lookup a random cocktail
// www.thecocktaildb.com/api/json/v2/9973533/random.php

// Search cocktail by name
// www.thecocktaildb.com/api/json/v2/9973533/search.php?s=margarita
var spaceWords = ['Space', 'Galactic', 'Stellar', 'Orbiting', 'Astronomic', 'Lunar', 'Solar', 'Martian', "Nyx's", "Thor's"];
var randomWordIndex = Math.floor(Math.random() * spaceWords.length);
var spaceWord = spaceWords[randomWordIndex];


var requestApi = 'https://www.thecocktaildb.com/api/json/v2/9973533/latest.php';
var randomApi = 'https://www.thecocktaildb.com/api/json/v2/9973533/random.php'
var randomishApi = 'https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php'

var randomApi = 'https://www.thecocktaildb.com/api/json/v2/9973533/random.php';


function userCocktail() {
   fetch(randomApi)
      .then(response => {
         if (!response.ok) {
            alert('Bad network request')
         }
         return response.json()
      })
      .then(data => {
         writeCocktail(data.drinks[0])
      })
}
userCocktail()

//Spacewords needs to be declared before this function in order to work

function writeCocktail(drink) {
   let randomWordIndex = Math.floor(Math.random() * spaceWords.length)
   let spaceWord = spaceWords[randomWordIndex]
   let ingredients = []
   console.log(drink)
   document.getElementById('created-name').textContent = `${spaceWord} ${drink.strDrink}`
   document.getElementById('cocktail-picture').children[0].src = drink.strDrinkThumb
   document.getElementById('cocktail-instructions').children[0].textContent = drink.strInstructions

   // this loop makes sure 'null' wont be displayed, or any 'falsey' values
   for (let i = 1; i <= 15; i++) {
      if (drink['strIngredient' + i]) {
         ingredients.push(drink['strIngredient' + i])
      }
   }
   let ingredientsText = ingredients.join(', ')

   document.getElementById('cocktail-ingredients').children[0].textContent = ingredientsText
}

var addBtn = document.getElementById('add-Btn')




addBtn.addEventListener('click', storage);

function storage() {

     var cocktailStorage = {
         name: document.querySelector('#created-name').textContent,
         image: document.querySelector('#cocktail-picture').children[0].src,
         recipe: document.querySelector('#cocktail-instructions').children[0].textContent,
         ingredients: document.querySelector('#cocktail-ingredients').children[0].textContent,
     };

    localStorage.setItem("user", JSON.stringify(cocktailStorage));
    console.log(localStorage);
}


      






// this will be displayed somewhere below the generated cocktail
let spaceFacts = [
   `Did you know that some breweries around the world use actual meteorites in their brewing process?`,

   `The Sagittarius B2 interstellar cloud is a gas cloud in space spanning 140 light years across 
    and is comprised of materials that would make it taste and smell like Raspberry Rum!`,

   `"Cosmic Cocktails" is a term coined by astronomers to describe complex mixtures of chemicals that are 
    found in interstellar gas clouds.`,

   `In 2019, NASA sent whiskey to the ISS to experiment with the aging process in space and how it would 
    react to the different environment.`,

   `There is a cloud in our very own Milky Way Galaxy that contains BILLIONS of liters of alcohol!`,

   `Scientists use spectroscopy to analyze the light emitted by stars allowing them to see what chemicals
    are in distant celestial objects, this is how they found alcohol nebulae in distant galaxies across the
    universe.`,

   `Carbon, the material essential to life is made from the fiery center of a star, when a star goes
    supernova, that carbon is exploded across the universe, which means we are walking cocktails 
    of stardust!`,

   `Winemakers are exploring the effects of the harsh enviroment of space on the wine aging process,
    they aim to uncover new techniques leading to an innovation in the taste of wine!`,

   `The comet "Lovejoy" which passed close to the sun, shot massive amounts of sugar and alcohol into space
    comets like this might hold the key to the existence of alcohol on earth, and even life itself.`,

   `On Titan, the atmosphere is rich in methane and nitrogen, meaning if you were to order a cocktail, 
    the low gravity combined with the lakes of methane would make your drink float in the air, talk about
    being lightheaded...`,

   `The first man-made alcohol originated in 7000 BCE, meaning at that time the "North Star" would not have
    been the same star we use for navigation in modern times.`]

// spits out random facts to put in a paragraph
let randomFactIndex = Math.floor(Math.random() * spaceFacts.length)
let randomFact = spaceFacts[randomFactIndex]
let pFacts = document.querySelector('.space-facts')
pFacts.textContent = randomFact


//  let spaceWords = ['Space', 'Galactic', 'Stellar', 'Orbiting', 'Astronomic', 'Lunar', 'Solar','Martian', "Nyx's", "Thor's"]

// spits out random facts to put in a div
console.log(randomFact);

