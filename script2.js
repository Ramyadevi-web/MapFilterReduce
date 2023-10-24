let restcountry = new XMLHttpRequest();

restcountry.open("GET","https://restcountries.com/v3.1/all");
restcountry.send();

restcountry.onload = function(){
    let data = JSON.parse(restcountry.response);

    let Countries = data.filter((index)=>index.population<200000);
    console.log(Countries);
}