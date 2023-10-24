let countryData = new XMLHttpRequest();
countryData.open("GET","https://restcountries.com/v3.1/all");
countryData.send();

countryData.onload = function(){
    let data = JSON.parse(countryData.response);

    let details = data.forEach(element => {
        console.log(`Common Name Of the Country: ${element.name.common}`);
        console.log(`Official Name Of the Country: ${element.name.official}`);
        console.log(`Capital: ${element.capital}`);
        console.log(`Flag:${element.flag}`);
    });
}