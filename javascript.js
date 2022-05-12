let operand = document.querySelectorAll('button')
let array = displayMini.textContent

function buttonClick() {
for (const button of operand) {
    button.addEventListener('click', () => {
    if ((button.textContent == '1') || (button.textContent == '2') || (button.textContent == '3') || 
        (button.textContent == '4') || (button.textContent == '5') || (button.textContent == '6') || 
        (button.textContent == '7') || (button.textContent == '8') || (button.textContent == '9')){
        modifyDisplayLarge(button.textContent)
    }else if ((button.textContent == '+') || (button.textContent == '-') || (button.textContent == 'x') || 
                (button.textContent == '/')){
        modifyDisplayMini(`${displayLarge.textContent} ${button.textContent}`), operand1(), operator()
    }else if (button.textContent == 'Clear'){
        modifyDisplayLarge('0'), modifyDisplayMini('')
    }else if (button.textContent == '='){
        modifyDisplayMini(`${displayMini.textContent} ${displayLarge.textContent} =`), 
        modifyDisplayLarge(), operate(), operand2()
    }
})}}

function modifyDisplayLarge(input) {
    const displayLarge = document.querySelector('#displayLarge')
    displayLarge.textContent = input
}

function modifyDisplayMini(input) {
    const displayMini = document.querySelector('#displayMini')
    displayMini.textContent = input
}

function operate(){
    let operand1 = displayMini.textContent.substr(0, 1)
    let operand2 = displayMini.textContent.substr(4, 1)
    let operator = displayMini.textContent.substr(2, 1)
    if (operator == "+"){
        add(operand1, operand2)
    }else if (operator == '-'){
        subtract(operand1, operand2)
    }else if (operator == 'x'){
        multiply(operand1, operand2)
    }else if (operator == '/'){
        divide(operand1, operand2)
    }
}

function add(operand1, operand2){
    modifyDisplayLarge(parseInt(operand1) + parseInt(operand2))
}

function subtract(operand1, operand2){
    modifyDisplayLarge(parseInt(operand1) - parseInt(operand2))
}

function divide(operand1, operand2){
    modifyDisplayLarge(parseInt(operand1) / parseInt(operand2))
}

function multiply(operand1, operand2){
    modifyDisplayLarge(parseInt(operand1) * parseInt(operand2))
}

buttonClick()

function operand1() {
    let operand1 = (displayMini.textContent.charAt(displayMini.textContent.length - 1))
    if ((operand1 == '+') || (operand1 == "-") || (operand1 == 'x') || (operand1 == '/')){
        console.log(displayMini.textContent.substring(0, displayMini.textContent.length - 1))
    }
}

function operator() {
    let operator = displayMini.textContent.charAt(displayMini.textContent.length - 1)
    if ((operator == '+') || (operator == '-') || (operator == 'x') || (operator == '/')){
        console.log(operator)
    }
}

function operand2() {
    let operand2 = displayMini.textContent.charAt(displayMini.textContent.length - 3)
    console.log(operand2)
}

/*
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

let operators = document.querySelectorAll('#operatorBtns')
for (const button of operators) {
    button.addEventListener('click', () => {
    if (!(button.textContent === '+') || (button.textContent === '-') || (button.textContent === '*') || 
        (button.textContent === '/')){ 
        console.log(button.textContent)
    }else{
        console.log('Hello')
    }
})}

let operator = button.textContent
    let operand1 = button.textContent
    let operand2 = button.textContent

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
}*/