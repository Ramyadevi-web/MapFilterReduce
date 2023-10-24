let country = new XMLHttpRequest();

country.open("GET","https://restcountries.com/v3.1/all");
country.send();

country.onload = function(){
    let data = JSON.parse(country.response);

    let totPopulation = data.reduce((acc,curr) => acc + curr.population,0);
    console.log(totPopulation);
}
