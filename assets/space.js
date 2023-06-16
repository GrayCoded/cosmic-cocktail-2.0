document.addEventListener('DOMContentLoaded', function() {

// NASA API: uHvPZVEr3rkpFfv76yoNrgZRaTdKeLNUEjnT7joe
//GUTHUB DOC: https://github.com/nasa/apod-api 

//This link executes an array of 5 images
//https://api.nasa.gov/planetary/apod?api_key=uHvPZVEr3rkpFfv76yoNrgZRaTdKeLNUEjnT7joe&count=5;


  var nasaAPI = "https://api.nasa.gov/planetary/apod?api_key=uHvPZVEr3rkpFfv76yoNrgZRaTdKeLNUEjnT7joe&count=50";

  function generateRandomBackground() {
  fetch(nasaAPI) // replace url with your API endpoint
  .then(function(response) {
    //Convert to JSON object
        return response.json();
  })
  .then(function(data) {
    console.log(data);
    document.querySelector(".loader-hidden").style.display = "none";
    document.querySelector("#all-content-hider").style.display = "block";
    var image = data.map(x => x.url);
    var randomImageURL = image[Math.floor(Math.random() * (image.length))];
    console.log(randomImageURL);
    document.body.style.backgroundImage= 'url('+randomImageURL+')';
})
.catch(function(error) {
    console.log(error);
  })
  }
  

  document.body.onload = () => {
    document.querySelector(".loader-hidden").style.display = "block";
    document.querySelector("#all-content-hider").style.display = "none";
    generateRandomBackground();  
   }


 let zodiacs = document.querySelectorAll('.zodiac-img')

 function zodiacClick() {
  location.assign('user-creations.html')
 }

 zodiacs.forEach(function(zodiac) {
  zodiac.addEventListener('click', zodiacClick)
 })

})

let zodiacImg = document.querySelectorAll('.hoverChange');

zodiacImg.forEach(function(img) {


img.addEventListener('mouseover', function() {
  document.body.classList.add('hovered');
 });

img.addEventListener('mouseout', function() {
  document.body.classList.remove('hovered');
 });

})