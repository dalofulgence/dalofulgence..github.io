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
} 

/*var header = document.getElementById("navigation");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}*/

const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=f5597f72a3504f64f27f4c96c72b88cc&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.table(jsObject);
        
    document.getElementById('currently').textContent = jsObject.list[4].weather[0].description;
    document.getElementById('high').textContent = jsObject.list[4].main.temp;
    document.getElementById('wind').textContent = jsObject.list[4].wind.deg;
    document.getElementById('humidity').textContent = jsObject.list[4].main.humidity;
    document.getElementById('speed').textContent = jsObject.list[4].wind.speed;




    
  });
  


  