// select buttons 
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const screen = document.querySelector('.display .screen')

for (let i = 0; i < 11; i++){
    numberButtons[i].addEventListener('click', () => 
    appendNumber(numberButtons[i].textContent));   
}


function appendNumber(number){
    if (screen.textContent === "0")
        clearScreen();
    screen.textContent += number;
}

function equals (){

}

function operate (operator, num1,num2){

}

function clearScreen(){
    screen.textContent = "";
}


function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}
 
// let a = +prompt("enter first number");
// let b = +prompt("enter second number ");
// let operator = prompt("choose type of operation + - * or /");
// let result = 0;

// switch (operator){
//     case "+":
//         result = add(a,b);
//         break;
//     case "-":
//         result = subtract(a,b);
//         break;
//     case "*":
//         result = multiply(a,b);
//         break;
//     case "/":
//         result =divide(a,b);
//         break;
//     default:
//         alert("you entered wrong operator make sure to use + - * or / operators");
// }
// if (operator === "+" || operator === "-"|| operator === "*" || operator === "/")
// alert(`${a} ${operator} ${b} = ${result}`); 

