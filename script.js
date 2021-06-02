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
    operator(a, b);
}



// Set time on Calculator
const time = document.querySelector('.time');
let hour = new Date().getHours()
let minute = new Date().getMinutes();
time.textContent = `${hour}:${minute}`


// Cache DOM of Numbers and Screens
const numbers = document.querySelectorAll('.number');
const display = document.querySelector('.problem');
const solution = document.querySelector('.solution');
const operators = document.querySelectorAll('.operator');
const dot = document.querySelector('.dot');
const equal = document.querySelector('.equal');
let firstValue;
let secondValue;


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
                console.log("Got it")
                disableDecimal();
            }
            return display.textContent;
        })
    })
}
displayNumbers();

function getFirstValue(value) {
    firstValue = parseInt(value)
    console.log(firstValue)
    return firstValue;
}

function getSecondValue() {
    secondValue = parseInt(display.textContent);
    console.log(secondValue)
}
getSecondValue()


function getOperator() {
    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            disableOperators();
            enableDecimal();
            first = display.textContent;
            getFirstValue(first);
            
            display.textContent = ''
            return operator.className;
        })
    })
}
getOperator();


// Function Clear Screen
const clear = document.querySelector('.clear');
function clearSCreen() {
    display.innerText = '0';
    // solution.textContent = 0;
}

clear.addEventListener('click', () => {
    clearSCreen();
})


// Disable Buttons
const buttons = document.querySelectorAll('.button');

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    })
}

// Enable Buttons
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

window.onload = () => {
    document.querySelectorAll('.buttons')
    buttons.forEach(button => {
        button.disabled = 'true';
    })
}