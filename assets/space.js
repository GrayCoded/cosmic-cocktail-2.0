// NASA API: uHvPZVEr3rkpFfv76yoNrgZRaTdKeLNUEjnT7joe
//GUTHUB DOC: https://github.com/nasa/apod-api 

//This link executes an array of 5 images
//https://api.nasa.gov/planetary/apod?api_key=uHvPZVEr3rkpFfv76yoNrgZRaTdKeLNUEjnT7joe&count=5;


var spaceImage = [];

var nasaAPI = "https://api.nasa.gov/planetary/apod?api_key=uHvPZVEr3rkpFfv76yoNrgZRaTdKeLNUEjnT7joe&count=12";

//CHANGE THESE VARIABLES TO MATCH HTML ELEMENTS!!

//var backgroundContainer = document.getElementbyId('background');

//backgroundContainer.addEventListener('load', getRandomImage);

function getRandomImage() {
  
    fetch(nasaAPI)
    .then(function(response) {
        //Convert to JSON object
            return response.json();
            if (!response.ok) {
                document.location.replace("./404.html")
            } else {
                return response.json();
            }
      })
      .then(function(data) {
        var imageUrl = data.hdurl;
        var title = data.title;
        var explanation = data.explanation;
  
        displayImage(imageUrl);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  
  function displayImage(url) {
    var imageHtml = `
      <img src="${url}" alt="NASA Image">
    `;
    //CHANGE TO MATCHING DIV IN HTML
    //backgroundContainer.innerHTML = imageHtml;
  }
