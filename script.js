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

// Numbers
const numbers = document.querySelectorAll('.number');
const problem = document.querySelector('.problem');
const solution = document.querySelector('.solution');

// Display Numbers On Screen
numbers.forEach(number => {
    number.addEventListener('click', () => {
        problem.innerHTML = `<p>${number.textContent}</p>`
    });
})