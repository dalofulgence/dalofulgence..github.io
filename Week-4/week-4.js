// // Submitting a Form
// const form = document.forms['search'];
// form.addEventListener ('submit', search, false);
// function search() {
//     alert(' Form Submitted');
// }
// // stop the form from being submitted to that URL
// function search(event) {
//     alert('Form Submitted');
//     event.preventDefault();
// }

// // Retrieving and Changing Values From a Form
// function search(event) {
//     alert(`You Searched for: ${input.value}`);
//     event.preventDefault();
// }

import { Car } from './car.js';
let cars = []
let car1 = new Car('Toyota', 'Tundura', 2007, 'Gold',);
let car2 = new Car('Chevy', 'Cobalt', 2001, 'WHite');
cars.push(car1);
cars.push(car2);

localStorage.setItem('cars', JSON.stringify(cars));

let ul = document.querySelector('ul');

cars.forEach(
    car => {
        ul.innerHTML +=
        `<li>${car.Make} ${car.Model} ${car.Year}</>li`;

    }
);
// let make = 'totyota';
// let model = 'Tundura';
// let year = '2007';
// let color= 'Gold';


// let car = {
//     make: 'totyota',
//     model: 'Tundura',
//     year: '2007',
//     color: 'Gold',
// }
// print(car);
// let cars = [];
// cars.push(car);
// console.log(cars);

// function print(car){
//     console.log(car.make);
//     console.log(car.model);
//     console.log(car.year);
//     console.log(car.color);
// }

// function print(make, model, year, color){
//     console.log(make);
//     console.log(model);
//     console.log(year);
//     console.log(color);
// }


