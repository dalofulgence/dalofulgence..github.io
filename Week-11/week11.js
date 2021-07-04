import { makeRequest } from "./authHelpers.js";
import { Auth } from "./auth.js";

makeRequest('login', 'POST', {
    password: 'user1',
    email: 'user1@email.com'
});

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();

    let authentication = new Auth();

    let token = authentication.login();

    console.log(token);


});

// let submit = document.getElementById('submit')
//     .addEventListener('click', (e) => {
//         authentication.login()
//     });
