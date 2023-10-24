let restCountry = new XMLHttpRequest();
restCountry.open("GET","https://restcountries.com/v3.1/all");
restCountry.send();

restCountry.onload = function(){
    let data = JSON.parse(restCountry.response);
    console.log("Countries from Asia Continent");
   
        let country = data.filter((index)=>index.continents == "Asia");
        console.log(country);
    
}