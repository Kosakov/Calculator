let buttons = document.querySelectorAll(".button");
let display = document.querySelector("#displaySum");
let floatingPointBtn=document.querySelector(".floatingPoint");
let firstNum = ""
let secondNum = ""
let operator = ""
let hasResult = false


buttons.forEach(button => button.addEventListener("click", log))

function log(e) {
    let target = e.target
    let button = target.textContent

    checkContentLength()

    if (checkfloatingPointsCount(display.textContent) >0){
        console.log(checkfloatingPointsCount(display.textContent))
        floatingPointBtn.removeEventListener("click", log)
    }

    //console.log(button)
    if (button == "AC") {
        display.textContent = ""
        hasResult = false
        firstNum = ""
        secondNum = ""
        operator = ""
    }

    if (button == 0 || button == 2 || button == 2 || button == 3 || button == 4 || button == 5 || button == 6 || button == 7 || button == 8 || button == 9 || button == ".") {
        if (display.textContent.length > 10 || hasResult) {
            return
        }
        display.textContent = display.textContent + button
    }

    if (button == "+" || button == "-" || button == "*" || button == "/" || button == "%") {
        operator = button
        firstNum = display.textContent
        hasResult = false
        display.textContent = ""
        floatingPointBtn.addEventListener("click", log)
    }

    if (button == "=") {
        secondNum = display.textContent
        let result = calculate(firstNum, secondNum, operator)
        checkContentLength(result)
        console.log(result)
        if(result){
            display.textContent=result
        }
        else{
            display.textContent = "Inalid Operation"
        }
        
        hasResult = true
        floatingPointBtn.addEventListener("click", log)
    }

}

function calculate(firstNumber, secondNumber, operator) {
    if (operator === "+") {
        return (Number(firstNumber) + Number(secondNumber)).toFixed(2)
    }
    if (operator === "-") {
        return (Number(firstNumber) - Number(secondNumber)).toFixed(2)
    }
    if (operator === "*") {
        return (Number(firstNumber) * Number(secondNumber)).toFixed(2)
    }
    if (operator === "/") {
        if (firstNumber == 0 || secondNumber == 0) {
            return "Invalid"
        }
        return (Number(firstNumber) / Number(secondNumber)).toFixed(2)
    }
    if (operator === "%") {
        return (Number(firstNumber) % Number(secondNumber)).toFixed(2)
    }
}



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


function checkfloatingPointsCount(content) {
    let matches = content.match(/\./g);

    if (!matches) {
        return 0;
    }
    return matches.length;
}


