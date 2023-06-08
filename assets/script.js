// NASA API: uHvPZVEr3rkpFfv76yoNrgZRaTdKeLNUEjnT7joe
//GUTHUB DOC: https://github.com/nasa/apod-api 

//This link executes an array of 5 images
//https://api.nasa.gov/planetary/apod?api_key=uHvPZVEr3rkpFfv76yoNrgZRaTdKeLNUEjnT7joe&count=5;

var spaceImage = [];

var nasaAPI = "https://api.nasa.gov/planetary/apod?api_key=uHvPZVEr3rkpFfv76yoNrgZRaTdKeLNUEjnT7joe&count=5";

fetch(nasaAPI).then(function(response) {
    if (response.status !== 200) {
        console.log(response.status);
    } else {
        return response.json();
    }
})

