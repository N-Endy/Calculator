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
const problem = document.querySelector('.problem');
const problemScreen = problem.textContent;
const solution = document.querySelector('.solution');
let firstNum = "";
let secondNum = "";

// Display Numbers On Screen
function showFirstNumbers() {
    
    numbers.forEach(number => {
        number.addEventListener('click', () => {
            firstNum = number.textContent.toString();
            problemScreen = Number(firstNum);
            getFirstNumbers(problem.textContent);
        });
    });
}
showFirstNumbers();

function showSecondNumbers() {
    
    numbers.forEach(number => {
        number.addEventListener('click', () => {
            secondNum = number.textContent.toString();
            problem.textContent += Number(secondNum);
            getSecondNumbers(problem.textContent);
        });
    });
}
showSecondNumbers();

// Function get digit
function getFirstNumbers(num) {
    return num;
}

function getSecondNumbers(num) {
    return num;
}

function calculate() {
    showNumbers();
}

// Operator Dom and Function
const operators = document.querySelectorAll('.operator');

function getOperator() {
    let operatorSign = "";
    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            operatorSign = operator.textContent;
            problem.textContent += ` ${operatorSign} `;
        })
    })
}
getOperator();

// Function Clear Screen
const clear = document.querySelector('.clear');
function clearSCreen() {
    problem.innerText = 0;
    solution.textContent = 0;
    firstNum = "";
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
    firstNum = "";
    secondNum = "";
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
            problem.innerText = 0;
            solution.textContent = 0;
        }
    
})
