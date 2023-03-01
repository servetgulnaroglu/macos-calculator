// Get all the button elements
const buttons = document.querySelectorAll(".calc-button");
// Get the display element
const display = document.querySelector(".calc-display");

let firstOperand = null;
let operator = null;
let currentOperand = "";

// Add click event listeners to all buttons
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        // Get the value of the button that was clicked
        const target = event.target;
        const value = target.innerText;

        if (target.id === "clear") {
            firstOperand = null;
            operator = null;
            currentOperand = "";
            display.innerText = "0";
        } else if (target.id === "plus-minus") {
            display.innerText = -1 * display.innerText;
        } else if (target.id === "percentage") {
            display.innerText = parseFloat(display.innerText) / 100;
        } else if (
            target.id === "divide" ||
            target.id === "multiply" ||
            target.id === "subtract" ||
            target.id === "add"
        ) {
            operator = value;
            firstOperand = parseFloat(display.innerText);
            currentOperand = "";
        } else if (target.id === "equals") {
            if (operator) {
                const secondOperand = parseFloat(display.innerText);
                console.log(firstOperand, secondOperand, operator);
                if (operator === "+") {
                    firstOperand = firstOperand + secondOperand;
                } else if (operator === "−") {
                    firstOperand = firstOperand - secondOperand;
                } else if (operator === "\u00D7") {
                    firstOperand = firstOperand * secondOperand;
                } else if (operator === "\u00F7") {
                    firstOperand = firstOperand / secondOperand;
                }
                operator = null;
                currentOperand = firstOperand.toString();
                display.innerText = firstOperand;
            }
        } else {
            if (value === "." && currentOperand.includes(".")) {
                return;
            }
            currentOperand += value;
            display.innerText = currentOperand;
        }
        console.log(operator);
    });
});
