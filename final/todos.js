import{Todo} from './todo.js';

let toDoList = [];


if (localStorage.getItem('todos')){
    toDoList = JSON.parse(localStorage.getItem('todos'));
}
// load existing ToDos from cocal storage
displayTodos();

function displayTodos(){
    let ul = document.querySelector('ul');
    ul.innerHTML = '';

    toDoList.forEach((todoItem) =>{
        ul.innerHTML +=
        `<li class="checked">
        <span>${todoItem.content}<span>
        <button>X</button>
        </li>`;
    });

    let todoDeleteButtons = document.querySelectorAll('button');

    todoDeleteButtons.forEach((todoDeleteButton) => {
        todoDeleteButton.addEventListener('click', (e) =>{
            let selectedId = e.target.dataset.id;
            let selectedTodoIndex = toDoList.find(todo => todo.Id === parseInt(selectedId));

            // deleted object from array
            toDoList.splice(selectedTodoIndex, 1);
            
            localStorage.setItem("todos", JSON.stringify(toDoList));

            displayTodos();
        })
    })       
    
}

let button = document.querySelector('input[type="button"]').addEventListener("click", (e) => {
    let content  = document.querySelector('#content');

    let todo = new Todo(content.value);
    toDoList.push(todo);

    // Add array to local storage
    localStorage.setItem('todos', JSON.stringify(toDoList));
   //reset form
    content.value = '';

    displayTodos();
});


let searchButton = document.getElementById('recipe');
 searchButton.addEventListener('click', ()=>{
     sendApiRequest();
})

// function to fetch data from the api
async function sendApiRequest(){ 
    let input = document.getElementById('content');
    let app_id = "246b6e2a";
    let api_key = "f3b22d119c60bfaa1398ded2ba964bc6";

    //TEST:
    let ingredients = [];

    toDoList.forEach(
        (ingredient) => {
            ingredients.push(ingredient.content);
        }
    );

    let response = await fetch(`https://api.edamam.com/search?app_id=${app_id}&app_key=${api_key}&q=${ingredients.toString()}`);
    console.log(response);

    let data = await response.json();
    console.log(data);

    useApiData(data);
}

//function that has to do with the data received
function useApiData(data){
    document.getElementById("data").innerHTML = 
    
            `   <div class="container">
                    <img class="img-recipe" src="${data.hits[0].recipe.image}">
                    <div class="contents">
                        <h3><u>Recipe:</u> ${data.hits[0].recipe.label}</h3>
                        <h4><u>Cuisine Type:</u> ${data.hits[0].recipe.cuisineType}</h3>
                        <p><u>Calories:</u> ${data.hits[0].recipe.calories}</p>
                        <a href=${data.hits[0].recipe.url}>Cooking Diretions</a>
                    </div>
                </div>
                <div class="container">
                <img class="img-recipe" src="${data.hits[1].recipe.image}">
                <div class="contents">
                    <h3><u>Recipe:</U> ${data.hits[1].recipe.label}</h3>
                    <h4><u>Cuisine Type:</u> ${data.hits[1].recipe.cuisineType}</h3>
                    <p><u>Calories:</u> ${data.hits[1].recipe.calories}</p>
                    <a href=${data.hits[1].recipe.url}>Cooking Diretions</a>
                </div>
                </div>
                 
            `

}



