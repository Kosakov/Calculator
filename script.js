let buttons=document.querySelectorAll(".button");
let display=document.querySelector("#displaySum");
let firstNum=""
let secondNum=""
let operator=""
let hasResult=false

console.log(buttons)

buttons.forEach(button=>button.addEventListener("click",log))

function log(e){
    let target=e.target
    let button=target.textContent

    checkContentLength()

    //console.log(button)
    if(button=="AC"){
        display.textContent=""
        hasResult=false
    }
    

    
    if (button==0 || button==1 || button==2 || button==3 || button==4 || button==5 || button==6 || button==7 || button==8 || button==9 || button==".")
    {
        if(display.textContent.length>10 || hasResult || checkDecimalPointsCount(display.textContent)){
            return
        }
        //if(hasResult){
        //    return
        //}
        display.textContent=display.textContent+button
    }

    if (button=="+" || button=="-" || button=="*" || button=="/" || button=="%"){
        operator=button
        firstNum=display.textContent
        hasResult=false
        display.textContent=""
    }

    if (button=="="){
        secondNum=display.textContent
        console.log(firstNum)
        console.log(secondNum)
        let result=calculate(firstNum,secondNum,operator)
        checkContentLength(result)
        display.textContent=calculate(firstNum,secondNum,operator)
        hasResult=true
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
        if (firstNumber==0 || secondNumber==0){
            return "Invalid"
        }
        return Number(firstNumber)/Number(secondNumber)
    }
    if (operator==="%"){
        return Number(firstNumber)%Number(secondNumber)
    }
}



function checkContentLength(content){
    
    if (String(content).length>10 && String(content).length<20){
        display.style.fontSize="1.5em"
    }
    else if (String(content).lengt>=20){
        display.style.fontSize="1.5em"
    }
    else{
        display.style.fontSize="2em"
    }
}

//function checkDecimalPointsCount(content){
//    let regex="/^[^.]*\.[^.]*[^.]$/g"
//    if (((content.split(".").length)>2 && content.split(".")[1]!=="")){
//    console.log(content.split("."))
//    return true
//}
//}