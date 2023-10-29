let country = new XMLHttpRequest();

country.open("GET","https://restcountries.com/v3.1/all");
country.send();
country.onload = function(){
    let data = JSON.parse(country.response);
    // console.log(data)
for(ele of data){

    if(ele.currencies.USD){
        console.log(ele)
    }
}
}