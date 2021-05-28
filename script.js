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

// Display Numbers On Screen
function displayValue() {
    numbers.forEach(number => {
        number.addEventListener('click', () => {
            const value = display.textContent;

            if (display.textContent == '0') {
                display.textContent = number.textContent;
            } else {
                display.textContent = value + number.textContent;
            }
        })
    })
}
displayValue();



// Operator Dom and Function
const operators = document.querySelectorAll('.operator');

function getOperator() {
    
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

// // Function Delete
// const del = document.querySelector('.delete');

// function deleteNumber(digit) {
//     digit.toString();
//     let array = [...digit];
//     array.pop();
// }

// del.addEventListener('click', () => {
//     let num = getNumber();
//     deleteNumber(num);
// })



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
            problem.innerText = "";
            solution.textContent = "";
            
        } else {
            enableButtons();
            display.innerText = '0';
            solution.textContent = 0;
        }
    
})
