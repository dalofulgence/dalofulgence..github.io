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
        <input type="checkbox" id="${todoItem.Id}" ${todoItem.Completed ? 'checked' : ''}>
        <span>${todoItem.content}<span>
        <button>X</button>
        </li>`;
    });

     let todoCheckboxes = document.querySelectorAll('input [type="checkbox"]');

     todoCheckboxes.forEach((todoCheckbox) =>{
         todoCheckbox.addEventListener("click", (e) =>{
    
              let selectedId = e.target.dataset.id;
              let selectedTodo = toDoList.find(todo => todo.Id === parseInt(selectedId));
              selectedTodo.completed = !selectedTodo.completed;
              localStorage.setItem("todos", JSON.stringify(toDoList));
         });
    
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
//         //reset form
        content.value = '';

        displayTodos();
 });

