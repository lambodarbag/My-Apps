const input = document.querySelector("#input-box");
const buttons = document.querySelectorAll(".number");
const add = document.querySelector(".add");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const percent = document.querySelector(".percent");
const dlt = document.querySelector(".delete");
const clear = document.querySelector(".clear");
const dot = document.querySelector(".dot");
const equal = document.querySelector(".equal");


let previousOperand = "";
let result= "";
let operator = "";


function appendNumber(number) {
    if (number === "." && result.includes("."))return;
    result += number;
    console.log(result);
    console.log(previousOperand);
    updateDisplay();
}


const updateDisplay = () => {
    if (operator) {
        input.value = `${previousOperand}${operator}${result}`
    }else {
        input.value = result;
    }
}

function selectOperator (operatorValue) {
    if (result == "") return;

    if (operator !== "" && previousOperand !== "") {
        calculateResult();
    }

    operator = operatorValue;
    previousOperand = result;
    result = "";
    updateDisplay();
}


function calculateResult() {
    let evalutedResult;
    const prev = Number(previousOperand);
    const current = Number(result);

    if (isNaN(prev) || isNaN(current))return;

    switch (operator) {
        case '+' : 
            evalutedResult = prev + current;
            break;
        case '-' :
            evalutedResult = prev - current;
            break;
        case '*' :
            evalutedResult = prev * current;
            break;
        case '/' : 
            evalutedResult = prev / current;
            break;
        case '%' :
            evalutedResult = prev % current;
            break;
        default :
            return;
    }

    result = evalutedResult.toString();
    operator = "";
    previousOperand = "";
    updateDisplay();
}


buttons.forEach(button =>  {
    button.addEventListener("click", function() {
        appendNumber(button.textContent);
    });
});




dot.addEventListener("click", () => appendNumber(".") );
add.addEventListener("click", () => selectOperator("+") );
minus.addEventListener("click", () => selectOperator("-") );
multiply.addEventListener("click", () => selectOperator("*") );
divide.addEventListener("click", () => selectOperator("/") );
percent.addEventListener("click", () => selectOperator("%") );
equal.addEventListener("click", () => {
    if (result === "") return;
    calculateResult();
    updateDisplay();
});