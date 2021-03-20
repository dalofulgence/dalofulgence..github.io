const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=f5597f72a3504f64f27f4c96c72b88cc&units=imperial";
fetch(requestURL)
  .then(function (response) {return response.json();})
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const forecast = jsonObject['main'];




    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        let date_birth = document.createElement('p')
        let place_birth = document.createElement('p')
      
        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname + '-' + prophets[i].order;
        date_birth.textContent = "Date Of Birth: " + prophets[i].birthdate;
        place_birth.textContent = "Place Of Birth: " + prophets[i].birthplace;
        image.setAttribute('src', prophets[i].imageurl);
       


        card.appendChild(h2);
        card.appendChild(date_birth);
        card.appendChild(place_birth);
        card.appendChild(image);
        

        document.querySelector('div.cards').appendChild(card);}
    
  });

