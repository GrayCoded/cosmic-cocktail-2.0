
//This is the key : 9973533
// var requestApi = 'https://www.thecocktaildb.com/api/json/v2/9973533/recent.php';

//Lookup a random cocktail
// www.thecocktaildb.com/api/json/v2/9973533/random.php

// Search cocktail by name
// www.thecocktaildb.com/api/json/v2/9973533/search.php?s=margarita

// List all cocktails by first letter
// www.thecocktaildb.com/api/json/v2/9973533/search.php?f=a

// Search ingredient by name
// www.thecocktaildb.com/api/json/v2/9973533/search.php?i=vodka

// Lookup full cocktail details by id
// www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=11007

// Lookup ingredient by ID
// www.thecocktaildb.com/api/json/v2/9973533/lookup.php?iid=552

// Lookup a random cocktail
// www.thecocktaildb.com/api/json/v2/9973533/random.php

// Lookup a selection of 10 random cocktails (only available to $2+ Patreon supporters)
// www.thecocktaildb.com/api/json/v2/9973533/randomselection.php

// List Popular cocktails (only available to $2+ Patreon supporters)
// www.thecocktaildb.com/api/json/v2/9973533/popular.php

// List most latest cocktails (only available to $2+ Patreon supporters)
// www.thecocktaildb.com/api/json/v2/9973533/latest.php

// Search by ingredient
// www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Gin
// www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Vodka

// Filter by multi-ingredient (only available to $2+ Patreon supporters)
// www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Dry_Vermouth,Gin,Anis

// Filter by alcoholic
// www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Alcoholic
// www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Non_Alcoholic

// Filter by Category
// www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=Ordinary_Drink
// www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=Cocktail

// Filter by Glass
// www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Cocktail_glass
// www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Champagne_flute

// List the categories, glasses, ingredients or alcoholic filters
// www.thecocktaildb.com/api/json/v2/9973533/list.php?c=list
// www.thecocktaildb.com/api/json/v2/9973533/list.php?g=list
// www.thecocktaildb.com/api/json/v2/9973533/list.php?i=list
// www.thecocktaildb.com/api/json/v2/9973533/list.php?a=list


//  Images
// Drink thumbnails
// Add /preview to the end of the cocktail image URL
// /images/media/drink/vrwquq1478252802.jpg/preview (100x100 pixels)


// Ingredient Thumbnails
// www.thecocktaildb.com/images/ingredients/gin-Small.png
// (100x100 pixels)
// www.thecocktaildb.com/images/ingredients/gin-Medium.png
// (350x350 pixels)
// www.thecocktaildb.com/images/ingredients/gin.png
// (700x700 pixels)
  




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