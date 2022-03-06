// select buttons 
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
const firstScreen= document.querySelector(' .first-screen');
const secondScreen = document.querySelector(' .second-screen');
const tempScreen = document.querySelector('.temp-screen');
console.log(firstScreen);
console.log(secondScreen);
console.log(tempScreen);   
console.log(equalButton);

let numberOneDisplay = '';
let numberTwoDisplay = '';
let result = null;
let lastOperation = '';
let haveDot = false;

numberButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(e.target.innerText === '.' && !haveDot)
            haveDot = true;
        else if (e.target.innerText == '.' && haveDot)
        return;
        numberTwoDisplay += e.target.innerText;
        secondScreen.innerText = numberTwoDisplay;
    });
});

operationButtons.forEach((button) => {
    button.addEventListener('click', (e) =>{
        if (!numberTwoDisplay) return;
        haveDot = false;
        const operationName = e.target.innerText;
        if (numberOneDisplay && numberTwoDisplay && lastOperation){
            doMath();
        }
        else {
            result = parseFloat(numberTwoDisplay);
        }
        clearVar(operationName);
        lastOperation = operationName;
    });
});

function clearVar(name = ''){
    numberOneDisplay +=  numberTwoDisplay + '' + name +'';
    firstScreen.innerText = numberOneDisplay;
    secondScreen.innerText = '';
    numberTwoDisplay = '';
    tempScreen.innerText = result;

}

function doMath(){
    if (lastOperation === 'x')
        result = parseFloat(result) * parseFloat(numberTwoDisplay);
    else if (lastOperation === '+')
        result = parseFloat(result) + parseFloat(numberTwoDisplay);
    else if (lastOperation === '-')
        result = parseFloat(result) - parseFloat(numberTwoDisplay);
    else if (lastOperation === '/'){
        if (numberTwoDisplay == '0') alert(' Dividing by 0 is undefinied');
        result = parseFloat(result) / parseFloat(numberTwoDisplay);
    }
}

equalButton.addEventListener('click', (e) =>{
    if(!numberOneDisplay || !numberTwoDisplay) return;
    haveDot =false;
    doMath();
    clearVar();
    secondScreen.innerText = result;
    tempScreen.innerText = '';
    numberTwoDisplay = result;
    numberOneDisplay = '';
});

clearButton.addEventListener('click', (e) => {
    firstScreen.innerText ='0';
    secondScreen.innerText = '0';
    numberOneDisplay = '';
    numberTwoDisplay = '';
    result = '';
    tempScreen.innerText = '0';
});

deleteButton.addEventListener('click', (e) =>{
    secondScreen.innerText = '';
    numberTwoDisplay = '';
});



 
// for console

// function add(a,b) {
//     return a+b;
// }

// function subtract(a,b) {
//     return a-b;
// }

// function multiply(a,b) {
//     return a*b;
// }

// function divide(a,b) {
//     return a/b;
// }

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

