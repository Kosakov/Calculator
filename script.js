let buttons=document.querySelectorAll(".button");
let display=document.querySelector("#displaySum");
let firstNum=""
let secondNum=""
let operator=""

console.log(buttons)

buttons.forEach(button=>button.addEventListener("click",log))

function log(e){
    let target=e.target
    let button=target.textContent

    console.log(button)

    if(button=="AC"){
        display.textContent=""
    }

    //(button==0 || button==1 || button==2 || button==3 || button==4 || button==5 || button==6 || button==7 || button==8 || button==9)
    
    if (button==0 || button==1 || button==2 || button==3 || button==4 || button==5 || button==6 || button==7 || button==8 || button==9)
    {
        display.textContent=display.textContent+button
    }

    if (button=="+" || button=="-" || button=="*" || button=="/"){
        operator=button
        firstNum=display.textContent
        display.textContent=""
    }

    if (button=="="){
        secondNum=display.textContent
        console.log(firstNum)
        console.log(secondNum)
        let result=calculate(firstNum,secondNum,operator)
        checkContentLength(result)
        display.textContent=calculate(firstNum,secondNum,operator)
    }

}

function calculate(firstNumber,secondNumber,operator){
    if (operator==="+"){
        return Number(firstNumber)+Number(secondNumber)
    }
    if (operator==="-"){
        return Number(firstNumber)-Number(secondNumber)
    }
    if (operator==="*"){
        return Number(firstNumber)*Number(secondNumber)
    }
    if (operator==="/"){
        return Number(firstNumber)/Number(secondNumber)
    }
}



function checkContentLength(content){
    
    if (String(content).length>=9){
        display.style.fontSize="1.3em"
    }
}