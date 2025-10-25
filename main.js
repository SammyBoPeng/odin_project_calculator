let num1;
let num2;
let Operator;

function add (a, b)
{
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

function multiply(a, b)
{
    return a * b;
}

function divide(a, b)
{
    return a / b;
}

function opertation(num1, num2, operator){
    // make sure every variable is defined
    if (num1 === undefined){
        console.log("ERROR: Number 1 is undefined");
    }
    if (num2 === undefined){
        console.log("ERROR: Number 2 is undefined");
    }
    if (operator === undefined){
        console.log("ERROR: Operator is undefined");
    }

    switch(operator){
        case 'add':
            return num1 + num2;

        case 'subtract':
            return num1 - num2;

        case 'multiply':
            return num1 * num2;

        case 'divide':
            if (num2 === 0){
                console.log("ERROR: Zero divide error");
                break;
            }
            return num1 / num2;
    }
}
