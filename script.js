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
let SeconValue;


// Display Numbers On Screen
function displayNumbers() {
    numbers.forEach(number => {
        number.addEventListener('click', () => {
            if(display.textContent === '0') {
                display.textContent = number.textContent;
            } else {
                display.textContent = display.textContent + number.textContent;
            }
            return display.textContent;
        })
    })
}
displayNumbers();

function getFirstValue(value) {
    console.log(value);
}


function getOperator() {
    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            firstValue = display.textContent;
            getFirstValue(firstValue);
            
            display.textContent = "";
            
            display.textContent += " " + operator.textContent + " ";
            return operator.className
        })
    })
}
getOperator();


// Function Clear Screen
const clear = document.querySelector('.clear');
function clearSCreen() {
    display.innerText = '0';
    solution.textContent = 0;
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
            solution.textContent = "";
            
        } else {
            enableButtons();
            display.innerText = '0';
            solution.textContent = 0;
        }
    
})

window.onload = () => {
    document.querySelectorAll('.buttons')
    buttons.forEach(button => {
        button.disabled = 'true';
    })
}