const display = document.getElementById("display");

const listenerBtn = [];

listenerBtn.push(document.getElementById("num0"));
listenerBtn.push(document.getElementById("num1"));
listenerBtn.push(document.getElementById("num2"));
listenerBtn.push(document.getElementById("num3"));
listenerBtn.push(document.getElementById("num4"));
listenerBtn.push(document.getElementById("num5"));
listenerBtn.push(document.getElementById("num6"));
listenerBtn.push(document.getElementById("num7"));
listenerBtn.push(document.getElementById("num8"));
listenerBtn.push(document.getElementById("num9"));

listenerBtn.push(document.getElementById("sum"));
listenerBtn.push(document.getElementById("subtraction"));
listenerBtn.push(document.getElementById("multiplication"));
listenerBtn.push(document.getElementById("division"));

const result = listenerBtn.push(document.getElementById("result"));
const cleanDisplay = listenerBtn.push(document.getElementById("clear"));
const delDigit = listenerBtn.push(document.getElementById("delDigit"));
listenerBtn.push(document.getElementById("point"));

let lastDigit = "";

listenerBtn.forEach((button) => {
    button.addEventListener('click', () => {
        lastDigit = button.value;
        writeOnDisplay();
    });
});

const operators = ["+", "-", "*", "/"]

function writeOnDisplay() {
    if(lastDigit === '=') {
        calcResult();
    } else if (lastDigit === 'C') {
        clean();
    } else if (lastDigit === 'CE') {
        delLastDigit();
    } else if (lastDigit === ".") {
        if(pointCounter < listenerBtn.length) {
            addPoint();
        }

    } else if(verifyOperators(lastDigit)) {
        addOperator()
    } else {
        display.value += lastDigit;
    };
};

function clean() {
    display.value = "";
    pointCounter = 0;
    operatorCounter = 0;
};

function delLastDigit() {
    if (display.value[display.value.length -1] === ".") {
        pointCounter = 0;
    } else if (display.value[display.value.length -1] === operator) {
        operatorCounter = 0;
    }
    display.value = display.value.substring(0, display.value.length - 1);
};

function calcResult() {
    const expression = display.value;
    const result = eval(expression);

    display.value = result;
};

let pointCounter = 0;

function addPoint () {
    const pointLimit = 1;

    if(display.value.length > 0 && pointCounter < pointLimit) {
        display.value += ".";

        pointCounter++;
    };
};

let operator = "";

function verifyOperators(lastDigit) {
    switch(lastDigit) {
        case "+":
        case "-":
        case "*":
        case "/":
            pointCounter = "0"
            return operator = lastDigit;
        default:
            return false;
    }
};

let operatorCounter = 0;
const opLimit = 1;

function addOperator () {
    if(display.value.length > 0 && operatorCounter < opLimit) {
        display.value += operator;

        operatorCounter++;
    };
};