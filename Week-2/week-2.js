function getName() {
    let name = document.querySelector('#name').Value;
    let outputDiv = document.querySelector('#output').textContent = name;
}

let button = document.querySelector('button');
button.addEventListener('click', getName);
