let country = new XMLHttpRequest();

country.open("GET","https://restcountries.com/v3.1/all");
country.send();
country.onload = function(){
    let data = JSON.parse(country.response);

    let filteredcountry = data.filter((index) => index.currencies.USD.symbol =="$");
    console.log(filteredcountry);
}