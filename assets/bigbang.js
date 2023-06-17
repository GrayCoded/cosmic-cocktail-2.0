//This is the key : 9973533

var requestApi = "https://www.thecocktaildb.com/api/json/v2/9973533/latest.php";


//starts get drink data function
function getDrinks() {
    //convert data to json
   fetch(requestApi)
     .then(function (response) {
       return response.json();
     })
     .then(function (data) {
        //log api data into console
      console.log(data.drinks);
      var drinks = [];

      //for loop to pull data from a list of objects
      for (var i = 0; i < data.drinks.length; i++) {
        var cocktail = {
          drinkName: (data.drinks[i].strDrink),
          drinkImage: data.drinks[i].strDrinkThumb,
          drinkInstructions: data.drinks[i].drinkInstructions,
          ing1: data.drinks[i].strIngredient1,
          ing2: data.drinks[i].strIngredient2,
          ing3: data.drinks[i].strIngredient3,
          ing4: data.drinks[i].strIngredient4,
          ing5: data.drinks[i].strIngredient5,
          ing6: data.drinks[i].strIngredient6,
          ing7: data.drinks[i].strIngredient7,
        };
      
        var result1 = [
          document.querySelector(".name").innerText = data.drinks[0].strDrink,
          document.querySelector("#cocktail-image").src = data.drinks[0].strDrinkThumb,
          document.querySelector(".instructions").innerText = data.drinks[0].strInstructions,
          document.querySelector(".ing1").innerText = "-" + data.drinks[0].strIngredient1,
          document.querySelector(".ing2").innerText = "-" + data.drinks[0].strIngredient2,
          document.querySelector(".ing3").innerText = "-" + data.drinks[0].strIngredient3,
        ];

        var result2 = [
          document.querySelector(".bname").innerText = data.drinks[1].strDrink,
          document.querySelector("#bcocktail-image").src = data.drinks[1].strDrinkThumb,
          document.querySelector(".binstructions").innerText = data.drinks[1].strInstructions,
          document.querySelector(".bing1").innerText = "-" + data.drinks[1].strIngredient1,
          document.querySelector(".bing2").innerText = "-" + data.drinks[1].strIngredient2,
          document.querySelector(".bing3").innerText = "-" + data.drinks[1].strIngredient3,
          document.querySelector(".bing4").innerText = "-" + data.drinks[1].strIngredient4,
        ];

        var result3 = [
          document.querySelector(".cname").innerText = data.drinks[2].strDrink,
          document.querySelector("#ccocktail-image").src = data.drinks[2].strDrinkThumb,
          document.querySelector(".cinstructions").innerText = data.drinks[2].strInstructions,
          document.querySelector(".cing1").innerText = "-" + data.drinks[2].strIngredient1,
          document.querySelector(".cing2").innerText = "-" + data.drinks[2].strIngredient2,
          document.querySelector(".cing3").innerText = "-" + data.drinks[2].strIngredient3,
          document.querySelector(".cing4").innerText = "-" + data.drinks[2].strIngredient4,
          document.querySelector(".cing5").innerText = "-" + data.drinks[2].strIngredient5,
          document.querySelector(".cing6").innerText = "-" + data.drinks[2].strIngredient6,
        ];

        var result4 = [
          document.querySelector(".dname").innerText = data.drinks[8].strDrink,
          document.querySelector("#dcocktail-image").src = data.drinks[8].strDrinkThumb,
          document.querySelector(".dinstructions").innerText = data.drinks[8].strInstructions,
          document.querySelector(".ding1").innerText = "-" + data.drinks[8].strIngredient1,
          document.querySelector(".ding2").innerText = "-" + data.drinks[8].strIngredient2,
          document.querySelector(".ding3").innerText = "-" + data.drinks[8].strIngredient3,
        ];

        var result5 = [
          document.querySelector(".ename").innerText = data.drinks[4].strDrink,
          document.querySelector("#ecocktail-image").src = data.drinks[4].strDrinkThumb,
          document.querySelector(".einstructions").innerText = data.drinks[4].strInstructions,
          document.querySelector(".eing1").innerText = "-" + data.drinks[4].strIngredient1,
          document.querySelector(".eing2").innerText = "-" + data.drinks[4].strIngredient2,
          document.querySelector(".eing3").innerText = "-" + data.drinks[4].strIngredient3,
          document.querySelector(".eing4").innerText = "-" + data.drinks[4].strIngredient4,
        ];
      }

     })
     .catch(function (error) {
       console.log(error);
     });
    }
 
 getDrinks();