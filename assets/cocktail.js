var drinkEL = document.querySelector('.listEl');
var drinkImg = document.getElementById('#img-1');
var drinkName = document.getElementById('#drink-1');
var drinkInfo = document.getElementById('#desc-1');


var requestApi = 'https://www.thecocktaildb.com/api/json/v2/9973533/latest.php';

document.body.onload = () => {
   randomizer();  
  }
  
function randomizer() {

   fetch(requestApi)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        console.log(data.drinks); 

        // let drinks = data.drinks;

       for (i = 0; i < 5; i++) {

        // console.log(drinks[0].strInstructions);
        // console.log(drinks[0].idDrink);
        // console.log(drinks[0].strDrink);
        // console.log(drinks[0].strDrinkThumb);

        // var drinkTitle = drinks[0].strDrink;
        // var drinkInst = drinks[0].strInstructions;
        // var drinkImg = drinks[0].strDrinkThumb;
        
        // cocktailNameEl.append(drinkTitle)
        // cocktailImgEl.append(drinkImg)
        // cocktailDescriptionEl.append(drinkInst)

       }

 
    
            
})

   .catch(function(error) {
      console.log(error);
 })
 };


randomizer();






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
    
 // spits out random facts to put in a div
    let randomFactIndex = Math.floor(Math.random() * spaceFacts.length)
    let randomFact = spaceFacts[randomFactIndex]

    console.log(randomFact)