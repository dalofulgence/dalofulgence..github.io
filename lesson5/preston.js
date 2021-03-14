var d = new Date();
//document.getElementById("lastupdated").innerHTML = d;

function announceMsg() {
var day = d.getDay()
console.log("day", day);
if ( day === 5) {
    var element = document.getElementById('announce')
    element.style.display = "block";
}    
else {
    var element = document.getElementById('announce')
    element.style.display = "none";

}

const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=f5597f72a3504f64f27f4c96c72b88cc&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);



    /*const days = jsonObject['sunday', 'Monday', 'Teasday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    /*let days = document.createElement('section')
    /*let forecast = document.createElement('section');
    /*let icon = document.createElement('icon');
    /*let degree = document.createElement('')*/
    
    document.getElementById('currently').textContent = jsObject.list[4].weather[0].description;
    document.getElementById('high').textContent = jsObject.list[4].main.temp;
    document.getElementById('wind').textContent = jsObject.list[4].wind.deg;
    document.getElementById('humidity').textContent = jsObject.list[4].main.humidity;
    document.getElementById('speed').textContent = jsObject.list[4].wind.speed;


    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.list[0].weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
  });
  


  