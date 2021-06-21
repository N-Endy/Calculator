// Operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function power(a, b) {
    return Math.pow(a, b);
}

function operate(operator, a, b) {
    operator = operationKey;
    if (operator === add) {
        display.textContent = add(a,b);
    } else if (operator == 'subtract') {
        display.textContent = subtract(a,b);
    } else if (operator == 'multiply') {
        display.textContent = multiply(a,b);
    } else if (operator == 'divide') {
        display.textContent = divide(a,b);
    } else {
        display.textContent = power(a,b);
    }
}



// Set time on Calculator
const time = document.querySelector('.time');
let hour = new Date().getHours();
let minute = new Date().getMinutes();
time.textContent = `${hour}:${minute}`;


// Cache DOM of Numbers and Screens
const numbers = document.querySelectorAll('.number');
const display = document.querySelector('.problem');
const solution = document.querySelector('.solution');
const operators = document.querySelectorAll('.operator');
const dot = document.querySelector('.dot');
const equal = document.querySelector('.equal');
let firstValue, secondValue;


// Display Numbers On Screen
function displayNumbers() {
    numbers.forEach(number => {
        number.addEventListener('click', () => {
            enableOperators();
            if(display.textContent === '0') {
                display.textContent = number.textContent;
            } else {
                display.textContent += number.textContent;
            }

            if (number.textContent === ".") {
                disableDecimal();
            }
        })
    })
}
displayNumbers();


function getOperator() {
    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            disableOperators();
            enableDecimal();
            firstValue = parseInt(display.textContent);
            display.textContent = "";

            if (operator.id == 'plus') {
                operationKey = 'plus';
            } else if (operator.id == 'subtract'){
                operationKey = "subtract";
            } else if (operator.id == 'multiply') {
                operationKey = "multiply";
            } else if (operator.id == 'divide') {
                operationKey = "divide";
            } else {
                operationKey = "power";
            }
        })
    })
}
getOperator();

function equalTo() {
    equal.addEventListener('click', () => {
        secondValue = parseInt(display.textContent);
        operate(getOperator, firstValue, secondValue);
    })
}
equalTo()













// Function Clear Screen
const clear = document.querySelector('.clear');
function clearSCreen() {
    display.innerText = '0';
    // solution.textContent = 0;
}

clear.addEventListener('click', () => {
    clearSCreen();
})


// Enable and disable Functions
const buttons = document.querySelectorAll('.button');

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    })
}

function enableButtons() {
    buttons.forEach(button => {
        button.disabled = false;
    })
}

function disableOperators() {
    operators.forEach(operator => operator.classList.add('disabled'))
}

function enableOperators() {
    operators.forEach(operator => operator.classList.remove('disabled'))
}

function disableDecimal() {
    let decimal = document.querySelector('.dot');
    decimal.classList.add('disabled');
}

function enableDecimal() {
    let decimal = document.querySelector('.dot');
    decimal.classList.remove('disabled');
}


// On and Off
const on = document.querySelector('.on');
function onAndOff() {
    on.classList.toggle("green");
}

on.addEventListener('click', () => {
    onAndOff();
    let onClass = on.className;
    let name = onClass.slice(onClass.length -5);
        if(name !== "green") {
            disableButtons();
            display.innerText = "";
            // solution.textContent = "";
            
        } else {
            enableButtons();
            display.innerText = '0';
            // solution.textContent = 0;
        }
    
})

// Disable all buttons on load. Turn on calc
window.onload = () => {
    document.querySelectorAll('.buttons')
    buttons.forEach(button => {
        button.disabled = 'true';
    })
    disableOperators();
}

// Delete numbers function
function deleteNum() {
    // Changes display to array and removes last character. It joins back to string and displays on screen
    let array = display.textContent.split('')
    let result = array.slice(0, array.length - 1);
    if (Array.isArray(result) && !result.length) {
        display.textContent = '0'
    } else {
        display.textContent = result.join('')
    }
}

document.querySelector('.delete').addEventListener('click', () => {
    deleteNum();
})