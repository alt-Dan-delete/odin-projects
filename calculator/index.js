function add(numA, numB) {
    return numA + numB;
}

function substract(numA, numB) {
    return numA - numB;
}

function multiply(numA, numB) {
    return numA * numB;
}

function divide(numA, numB) {
    return numA / numB;
}

function operate(numA, numB, operator) {    
    if (operator === "+") {
        result = add(numA, numB);
    }
    else if (operator === "-") {
        return substract(numA, numB)
    }
    else if (operator === "=") {

    }     
}


let numInputA = "";
let numInputB = "";
let operInput = "";
let lastChar = "";
let result = 0;

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const controls = document.querySelectorAll(".control");

function handleClick(btn) {
    const btnContent = btn.textContent;
    // console.log(btnContent);
    return btnContent;
}

numbers.forEach(btn => {
    btn.addEventListener("click", () => {
        if (!operInput) {
            numInputA += handleClick(btn);
            // document.getElementById("numberA").innerText = numInputA;
            updateDisplay(numInputA);
            console.log(`numA: ${numInputA}`);
        }
        else {
            numInputB += handleClick(btn);
            // document.getElementById("numberA").innerText = numInputB;
            updateDisplay(numInputA);
            console.log(`numB: ${numInputB}`);
        }
    })
})

operators.forEach(btn => {
    btn.addEventListener("click", () => {        
        operInput = handleClick(btn);
        // document.getElementById("numberOperator").innerHTML = operInput;
        updateDisplay(operInput);
        if (operInput === "=") {
            const numA = Number(numInputA);
            const numB = Number(numInputB);
            result = numA + numB;
            document.getElementById("result").innerHTML = result;
        }
        console.log(`operator: ${operInput}`);
    })
})

function updateDisplay (value) {
    value = numInputA + operInput + numInputB;    
    document.getElementById("result").innerHTML = value;    
    console.log(`visible: ${value}`);
}
