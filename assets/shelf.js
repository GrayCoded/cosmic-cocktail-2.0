var storageBox = document.getElementById("#storage-box");
var storedName = document.querySelector(".stored-name");
var lastCocktail = JSON.parse(localStorage.getItem("user"));

console.log(lastCocktail.name);
console.log(lastCocktail.image);
console.log(lastCocktail.recipe);
console.log(lastCocktail.ingredients);

//testing display on the line below - getting a result of object

//Parsed Data lines for example
document.querySelector(".stored-name").textContent = lastCocktail.name;
document.querySelector(".stored-image").src = lastCocktail.image;
document.querySelector(".stored-ingredients").textContent = lastCocktail.ingredients;
document.querySelector(".stored-recipe").textContent = lastCocktail.recipe;


function displayCocktail() {
 
    if (lastCocktail !== null ) {
       document.querySelector('#created-name').textContent = localStorage.lastCocktail;
       document.querySelector('#cocktail-picture').children[0].src;
       document.querySelector('#cocktail-instructions').children[0].textContent;
       document.querySelector('#cocktail-ingredients').children[0].textContent;
 
       var userCocktails = document.createElement('div');
       cocktailDiv.classList.add('cocktail');
       
       var nameElement = document.createElement('h2');
       nameElement.textContent = cocktailName;
 
       var pictureElement = document.createElement('img');
       pictureElement.src = cocktailPicture;
 
       var instructionsElement = document.createElement('p');
       InstructionsElement.textContent = cocktailInstructions;
 
       var ingredientsElement = document.createElement('p');
       ingredientElement.textContent = cocktailIngredients;
 
       cocktailDiv.appendChild(nameElement);
       cocktailDiv.appendChild(pictureElement);
       cocktailDiv.appendChild(instructionsElement);
       cocktailDiv.appendChild(ingredientsElement);
 
       userCocktails.appendChild(cocktailDiv);
 
    } else {
       return;
    }
 
    console.log("hello")
 
    
 }