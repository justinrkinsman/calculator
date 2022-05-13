let operand = document.querySelectorAll('button');

function buttonClick() {
    let newDigits = [].slice(0, 10)
for (const button of operand) {
    button.addEventListener('click', () => {
    if ((button.textContent == '1') || (button.textContent == '2') || (button.textContent == '3') || 
        (button.textContent == '4') || (button.textContent == '5') || (button.textContent == '6') || 
        (button.textContent == '7') || (button.textContent == '8') || (button.textContent == '9') ||
        (button.textContent == '0') || (button.textContent == '.')){
            if (displayLarge.textContent.includes('.')){
                disableDecimal()
             }
                newDigits.push(button.textContent), modifyDisplayLarge((newDigits.join('')).substring(0, 10)), console.log(newDigits)
    }else if ((button.textContent == '+') || (button.textContent == '-') || (button.textContent == 'x') || 
                (button.textContent == '/')){
            if (displayMini.textContent.includes('+')){
                if (displayMini.textContent.includes('+') && displayMini.textContent.includes('=')){
                    displayMini.textContent = displayLarge.textContent
                }else{
                    add((displayLarge.textContent), (displayMini.textContent))
                }
            }else if (displayMini.textContent.includes('-')){
                if (displayMini.textContent.includes('-') && displayMini.textContent.includes('=')){
                    displayMini.textContent = displayLarge.textContent
                }else{
                    subtract((displayMini.textContent), displayLarge.textContent)
                }
            }else if (displayMini.textContent.includes('/')){
                if (displayMini.textContent.includes('/') && displayMini.textContent.includes('=')){
                    displayMini.textContent = displayLarge.textContent
                }else{
                    divide((displayMini.textContent), (displayLarge.textContent))
                }
            }else if (displayMini.textContent.includes('x')){
                if (displayMini.textContent.includes('x') && displayMini.textContent.includes('=')){
                    displayMini.textContent = displayLarge.textContent
                }else{
                    multiply((displayLarge.textContent), displayMini.textContent)
                }
            }
        modifyDisplayMini(`${displayLarge.textContent} ${button.textContent}`), operand1(), operator(), 
        newDigits = [], enableEquals()
    }else if (button.textContent == 'Clear'){
        modifyDisplayLarge('0'), modifyDisplayMini(''), currentDisplay = '0', newDigits = [], enableEquals()
    }else if ((button.textContent == '=')){
        if (!(displayMini.textContent.includes('+') || (displayMini.textContent.includes('-')) || 
            (displayMini.textContent.includes('/')) || (displayMini.textContent.includes('x')))){
            button.disabled = true
        }else{
        modifyDisplayMini(`${displayMini.textContent} ${displayLarge.textContent} =`), operate(), operand2(), 
        newDigits = [], button.disabled = true;
    }
    }})}}

function modifyDisplayLarge(input) {
    const displayLarge = document.querySelector('#displayLarge')
    if (input.length > 10) {
        input = input.slice(0, 10)
    }else{
        displayLarge.textContent = input
    }
}

function enableEquals(){
    for (const button of operand)
    if (button.textContent == '='){
        button.disabled = false
    }
}

function disableDecimal(){
    for (const button of operand)
    if (button.textContent == '.'){
        button.disabled = true
    }
}

function modifyDisplayMini(input) {
    const displayMini = document.querySelector('#displayMini')
    displayMini.textContent = input
    }

function operate(){
    let array = displayMini.textContent.split(' ')
    let operand1 = array[0]
    let operand2 = array[2]
    let operator = array[1]
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
    if (operand2 == '0'){
        modifyDisplayLarge('lmao')
    }else{
        //modifyDisplayLarge((parseInt(operand1) / parseInt(operand2)))
        modifyDisplayLarge((Math.round(parseInt(operand1) / parseInt(operand2) * 100) / 100 ))
    }
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
}*/