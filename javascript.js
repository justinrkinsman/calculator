function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum);
}

function subtract() {
    let difference = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        difference -= arguments[i];
    }
    console.log(difference);
}

function multiply() {
    let product = 1;
    for (let i = 0; i < arguments.length; i++) {
        product *= arguments[i];
    }
    console.log(product)
}

function divide() {
    let quotient = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        quotient /= arguments[i];
        if (quotient == Infinity) {
            quotient = 'lmao'
        }
    }
    console.log(quotient)
}

function operate(operand1, operator, operand2){
    if (operator == '+') {
        add(operand1, operand2)
    }else if (operator == '-') {
        subtract(operand1, operand2)
    }else if (operator == '*') {
        multiply(operand1, operand2)
    }else if (operator == '/') {
        divide(operand1, operand2)
    }else{
        console.log("You can't do that")
    }
}

let buttons = document.querySelectorAll('button')
for (const button of buttons) {
    button.addEventListener('click', () => {
    modifyDisplay(button.textContent)
})}

function modifyDisplay(input) {
    const display = document.querySelector('#display')
    display.textContent = input
}
