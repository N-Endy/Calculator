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

function operate(operator, a, b) {
    operator(a, b);
}

// Set time on Calculator
const time = document.querySelector('.time');
let hour = new Date().getHours()
let minute = new Date().getMinutes();
time.textContent = `${hour}:${minute}`


// Numbers
const numbers = document.querySelectorAll('.number');
const problem = document.querySelector('.problem');
const solution = document.querySelector('.solution');

// Display Numbers On Screen
numbers.forEach(number => {
    number.addEventListener('click', () => {
        let num = number.textContent;
        problem.innerHTML = `<p>${num}</p>`
    });
})