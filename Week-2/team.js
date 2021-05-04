function getValues() {

    let value = document.getElementById('number').value;
    document.getElementById('outputDiv').innerHTML = 'You entered: ' + value;
    
}

function addNumber() {
    let value = document.getElementById('value').value;
    let numberValue = parseInt(value);
    document.getElementById('sumOutput').innerHTML = 'The sum of your number is: ' + sum(numberValue);
    
}
function sum(numberValue) {
    let sumNumber = 0;
    for(let i = 1; i <= numberValue; i++) {
        sumNumber += i;
    }
    return sumNumber;

}
function add() {
    let number1 = parseInt(document.getElementById('number1').value);
    let number2 = parseInt(document.getElementById('number2').value);
    let sum = number1 + number2;
    document.getElementById('sum').innerHTML = 'The sum of your numbers is: ' + sum;
    
}


