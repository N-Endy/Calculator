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

    key == 'plus' ? result = add(a,b) :
    key == 'minus' ? result = subtract(a,b) :
    key == 'times' ? result = multiply(a,b) :
    key == 'divide' ? result = divide(a,b) : result = power(a,b);

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
    // Loop through the node list of numbers
    numbers.forEach(number => {
        number.addEventListener('click', () => {
            // Know which key type was clicked
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


function getOperator() {
    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            previousKey = 'operator';
            // Disable operator keys to prevent continous clicking
            disableOperators();
            enableDecimal();
            // Sets and converts first value
            firstValue = parseFloat(display.textContent);
            console.log(firstValue)
            display.textContent = '0';

            // Gets the type of operator key clicked
            operationKey = operator.id;


            // For chain calculation. Checks if first value and previous key clicked is an operator key
            // It assignes the display value as second value
            if (firstValue && operator && previousKey === 'operator') {
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
        // Sets second value to displayed number
        secondValue = parseFloat(display.textContent);
        console.log(secondValue)
        // Call calculate function
        operate(operationKey, firstValue, secondValue);
    })
}
equalTo()



// Function Clear Screen
// Removes all value from screen
const clear = document.querySelector('.clear');
function clearSCreen() {
    display.innerText = '0';
    // solution.textContent = 0;
}

clear.addEventListener('click', () => {
    clearSCreen();
    enableDecimal();
})
// *****************************************



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
// *****************************************




// Disable operators function
function disableOperators() {
    operators.forEach(operator => operator.classList.add('disabled'))
}

function enableOperators() {
    operators.forEach(operator => operator.classList.remove('disabled'))
}
// ********************************************



// Disable decimal function
function disableDecimal() {
    let decimal = document.querySelector('.dot');
    decimal.classList.add('disabled');
}

function enableDecimal() {
    let decimal = document.querySelector('.dot');
    decimal.classList.remove('disabled');
}
// ********************************************




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
// **********************************************




// Disable all buttons on load. Turn on calc
window.onload = () => {
    document.querySelectorAll('.buttons')
    buttons.forEach(button => {
        button.disabled = 'true';
    })
    disableOperators();
}
// **********************************************



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

    // Checks for decimal in display
    display.textContent.includes('.') ? disableDecimal() : enableDecimal();
    
}

document.querySelector('.delete').addEventListener('click', () => {
    deleteNum();
})
// **************************************************8