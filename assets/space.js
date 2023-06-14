// NASA API: uHvPZVEr3rkpFfv76yoNrgZRaTdKeLNUEjnT7joe
//GUTHUB DOC: https://github.com/nasa/apod-api 

//This link executes an array of 5 images
//https://api.nasa.gov/planetary/apod?api_key=uHvPZVEr3rkpFfv76yoNrgZRaTdKeLNUEjnT7joe&count=5;


  var nasaAPI = "https://api.nasa.gov/planetary/apod?api_key=uHvPZVEr3rkpFfv76yoNrgZRaTdKeLNUEjnT7joe&count=12";

  function generateRandomBackground() {
  fetch(nasaAPI) // replace url with your API endpoint
  .then(function(response) {
    //Convert to JSON object
        return response.json();
  })
  .then(function(data) {
    console.log(data);
    var image = ["https://apod.nasa.gov/apod/image/2003/marshole2r_hirise_960.jpg", 
    "https://apod.nasa.gov/apod/image/9901/cl2244_vlt.jpg", 
    "https://apod.nasa.gov/apod/image/moon1_gal_big.gif", 
    "https://apod.nasa.gov/apod/image/1506/AntaresRho_Noller_1080.jpg", 
    "https://apod.nasa.gov/apod/image/pks2349_hst.gif",
    "https://apod.nasa.gov/apod/image/0009/spirograph_heritage.jpg", 
    "https://apod.nasa.gov/apod/image/1006/partialeclipse_riza.jpg"];
    var randomImageURL = image[Math.floor(Math.random() * (image.length))];
    console.log(randomImageURL);
    document.body.style.backgroundImage= 'url('+randomImageURL+')';
})
.catch(function(error) {
    console.log(error);
  })
  }
  
  document.body.onload = () => {
    generateRandomBackground();  
   }
