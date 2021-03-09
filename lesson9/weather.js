const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {return response.json();})
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];




        let card = document.createElement('section');
        let detail = document.createElement('section');

        let card2 = document.createElement('section');
        let detail2 = document.createElement('section');

        let card3 = document.createElement('section');
        let detail3 = document.createElement('section');

        let name = document.createElement('h2');
        let image = document.createElement('img');
        let mot = document.createElement('p');
        let pop = document.createElement('p');
        let year_founded = document.createElement('p');
        let rainfall = document.createElement('p');

        let name_2 = document.createElement('h2');
        let image_2 = document.createElement('img');
        let mot_2 = document.createElement('p');
        let pop_2 = document.createElement('p');
        let year_founded_2 = document.createElement('p');
        let rainfall_2 = document.createElement('p');

        let name_3 = document.createElement('h2');
        let image_3 = document.createElement('img');
        let mot_3 = document.createElement('p');
        let pop_3 = document.createElement('p');
        let year_founded_3 = document.createElement('p');
        let rainfall_3 = document.createElement('p');




        name.textContent = towns[1].name;
        mot.textContent = towns[1].motto;
        year_founded.textContent = "Year Founded: " + towns[1].yearFounded;
        pop.textContent = "Population: " + towns[1].currentPopulation;
        rainfall.textContent = "Anual Rain Fall: " + towns[1].averageRainfall;
        image.setAttribute('src', "../lesson9/image/fish haven.jpg");

        name_2.textContent = towns[5].name;
        mot_2.textContent = towns[5].motto;
        year_founded_2.textContent = "Year Founded: " + towns[5].yearFounded;
        pop_2.textContent = "Population: " + towns[5].currentPopulation;
        rainfall_2.textContent = "Anual Rain Fall: " + towns[5].averageRainfall;
        image_2.setAttribute('src', "../lesson9/image/preston.jpg");

        name_3.textContent = towns[6].name;
        mot_3.textContent = towns[6].motto;
        year_founded_3.textContent = "Year Founded: " + towns[6].yearFounded;
        pop_3.textContent = "Population: " + towns[6].currentPopulation;
        rainfall_3.textContent = "Anual Rain Fall: " + towns[6].averageRainfall;
        image_3.setAttribute('src', "../lesson9/image/soda spring.jpg");
       


        detail.appendChild(name);
        detail.appendChild(mot);
        detail.appendChild(year_founded);
        detail.appendChild(pop);
        detail.appendChild(rainfall);
        card.appendChild(image);
        card.appendChild(detail);

        detail2.appendChild(name_2);
        detail2.appendChild(mot_2);
        detail2.appendChild(year_founded_2);
        detail2.appendChild(pop_2);
        detail2.appendChild(rainfall_2);
        card2.appendChild(image_2);
        card2.appendChild(detail2);

        detail3.appendChild(name_3);
        detail3.appendChild(mot_3);
        detail3.appendChild(year_founded_3);
        detail3.appendChild(pop_3);
        detail3.appendChild(rainfall_3);
        card3.appendChild(image_3);
        card3.appendChild(detail3);
        

        document.querySelector('div.cards').appendChild(card);
        document.querySelector('div.cards').appendChild(card2);
        document.querySelector('div.cards').appendChild(card3);
       
  });



 
  
  