/*key = f5597f72a3504f64f27f4c96c72b88cc*/

const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5605242&appid=f5597f72a3504f64f27f4c96c72b88cc&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
    document.getElementById('current-temp').textContent = jsObject.list[0].main.temp;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.list[0].weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
  });
  