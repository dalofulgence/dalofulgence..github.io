
function ticTacToe(){
    const container = document.querySelector('.container');
    for (let i = 0; i < container.children.length; i++) {
        container.children[i].innerText = '';
    }

    container.addEventListener('click');
}