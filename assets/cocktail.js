//API Ninja: 
//Cocktail Generator API: oWUzYJAGMIbEDuN8am6SZg==dhh7Xz8OwlWHwy2K

//COCKTAIL LINK & PAREMETER: https://api.api-ninjas.com/v1/cocktail?name=
//Search by name, ingredient, or instruction

var name = 'bloody mary'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/cocktail?name=' + name,
    headers: { 'X-Api-Key': 'YOUR_API_KEY'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});