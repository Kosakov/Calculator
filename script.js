// Selecting all elements with class "button"
let buttons = document.querySelectorAll(".button");
let display = document.querySelector("#displaySum");

let floatingPointBtn=document.querySelector(".floatingPoint");
let firstNum = ""
let secondNum = ""
let operator = ""
let hasResult = false
let displayContent=display.textContent

// Add eventListeners to all buttons
buttons.forEach(button => button.addEventListener("click", handleButtonClick))

function handleButtonClick(e) {
    let target = e.target
    let button = target.textContent

    checkContentLength()
    
    // Checking if the display contains more than one floating point
    if (checkfloatingPointsCount(display.textContent) >0){
        console.log(checkfloatingPointsCount(display.textContent))
        floatingPointBtn.removeEventListener("click", handleButtonClick)
    }

    //console.log(button)
    if (button == "AC") {
        display.textContent = ""
        hasResult = false
        firstNum = ""
        secondNum = ""
        operator = ""
    }

    // Handling digit buttons and floating point: appending to display if length is within limit and no result is present
    if (button == 0 || button == 1 || button == 2 || button == 3 || button == 4 || button == 5 || button == 6 || button == 7 || button == 8 || button == 9 || button == ".") {
        if (display.textContent.length > 10 || hasResult) {
            return
        }
        display.textContent = display.textContent + button
    }
    // Handling operator buttons: setting operator, storing first number, clearing display, and adding event listener to floating point button
    if (button == "+" || button == "-" || button == "*" || button == "/" || button == "%") {
        operator = button
        firstNum = display.textContent
        hasResult = false
        display.textContent = ""
        floatingPointBtn.addEventListener("click", handleButtonClick)
    }

    // Handling equals button: storing second number, calculating result, updating display, setting result status, and adding event listener to floating point button
    if (button == "=") {
        secondNum = display.textContent
        let result = calculate(firstNum, secondNum, operator)
        checkContentLength(result)
        display.textContent=result
        hasResult = true
        floatingPointBtn.addEventListener("click", handleButtonClick)
    }

}
// Function to perform the calculation

function calculate(firstNumber, secondNumber, operator) {
    if(firstNumber && secondNumber && operator){
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    let result

    if (operator === "+") {
        result= firstNumber+secondNumber
    }
    if (operator === "-") {
        result= firstNumber-secondNumber
    }
    if (operator === "*") {
        result= firstNumber*secondNumber
    }
    if (operator === "/") {
        // It's impossible to divide by 0
        if (firstNumber == 0 || secondNumber == 0) {
            return "Invalid"
        }
        result= firstNumber/secondNumber
    }

    if (operator === "%") {
        result= firstNumber%secondNumber
    }
// Checks if the result id floating point number-->If true, the result has only 2 digits after the floating point
    if (result%1!==0){
        result=result.toFixed(2)
    }
    return result
}
    else{
        return
    }
}




// Function to adjust font size based on content length
function checkContentLength(content) {

    if (String(content).length > 10 && String(content).length < 20) {
        display.style.fontSize = "1.5em"
    }
    else if (String(content).length >= 20) {
        display.style.fontSize = "1em"
    }
    else {
        display.style.fontSize = "2em"
    }
}

// Function to check the count of floating points in content

function checkfloatingPointsCount(content) {
    let matches = content.match(/\./g);

    if (!matches) {
        return 0;
    }
    return matches.length;
}


