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

function operate(key, a, b) {
    let result = '';

    key === 'plus' ? result = add(a,b) :
    key === 'minus' ? result = subtract(a,b) :
    key === 'times' ? result = multiply(a,b) :
    key === 'divide' ? result = divide(a,b) : result = power(a,b);

    display.textContent = result;

    if (key === 'divide' && b == 0) {
        display.textContent = 'Really?! 🤨';
    }
}



// Set time on Calculator
const time = document.querySelector('.time');
let hour = new Date().getHours();
let minute = new Date().getMinutes();
time.innerText = `${hour}:${minute}`;


// Cache DOM of Numbers and Screens
const numbers = document.querySelectorAll('.number');
const display = document.querySelector('.problem');
const solution = document.querySelector('.solution');
const operators = document.querySelectorAll('.operator');
const dot = document.querySelector('.dot');
const equal = document.querySelector('.equal');
let screen = display.textContent;
let firstValue, secondValue, operationKey, previousKey;


// Display Numbers On Screen
function displayNumbers() {
    numbers.forEach(number => {
        number.addEventListener('click', () => {
            previousKey = 'number';
            enableOperators();
            if(display.textContent === '0') {
                display.textContent = number.textContent;
            } else {
                display.textContent += number.textContent;
            }

            display.textContent.includes('.') ? disableDecimal() : enableDecimal();
            
        })
    })
}
displayNumbers();

let clicked = false;
function getOperator() {
    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            previousKey = 'operator';
            disableOperators();
            enableDecimal();
            firstValue = parseFloat(display.textContent);
            console.log(firstValue)
            display.textContent = '0';

            operationKey = operator.id;


            clicked = true;
            if (firstValue && clicked === true && previousKey === 'operator') {
                console.log(operationKey);
                secondValue = parseFloat(display.textContent);
                display.textContent = operate(operationKey, firstValue, secondValue);
                console.log(firstValue, previousKey, secondValue);
            }
        })
    })
}
getOperator();

function equalTo() {
    equal.addEventListener('click', () => {
        previousKey = 'equal';
        secondValue = parseFloat(display.textContent);
        console.log(secondValue)
        operate(operationKey, firstValue, secondValue);
        secondValue = undefined;
    })
}
equalTo()



// let clicked = false;
// function pleaseWork() {
//     operators.forEach(ele => {
//         ele.addEventListener('click', () => {
//             clicked = true;
//             if (firstValue && clicked === true && previousKey == 'operator') {
//                 secondValue = parseFloat(display.textContent);
//                 console.log(firstValue, previousKey, secondValue)
//                 operate(operationKey, firstValue, secondValue);
//             }
//             console.log(firstValue, previousKey, secondValue)
//         })
//     })
// }
// pleaseWork();





// Function Clear Screen
const clear = document.querySelector('.clear');
function clearSCreen() {
    display.innerText = '0';
    // solution.textContent = 0;
}

clear.addEventListener('click', () => {
    clearSCreen();
    enableDecimal();
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

    display.textContent.includes('.') ? disableDecimal() : enableDecimal();
    
}

document.querySelector('.delete').addEventListener('click', () => {
    deleteNum();
})