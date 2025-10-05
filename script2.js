console.log("Script loaded!")
const calculatorbutton = document.getElementById("calculatorbutton");
calculatorbutton.onclick = function() {
    let number1 = parseFloat(prompt("Welcome to the calculator! Please enter the first number:"));
    let number2 = parseFloat(prompt("Please enter the second number:"))
    if (isNaN(number1) || isNaN     (number2)) {
        alert("Invalid input. Please enter valid numbers.");
        return;
    }

    let product = `${number1} x ${number2} is ${number1 * number2}!`
    let quotient = `${number1} divided by ${number2} is ${number1 / number2}!`;
    let sum = `${number1} + ${number2} is ${number1 + number2}!`
    let difference = `${number1} - ${number2} is ${number1 - number2}!`
    alert(sum);
    alert(difference);
    alert(product);
    if (number2 === 0 || number1 === 0) {
        alert("Division by zero is undefined. Well, I guess if your eally want an answer.... It's 0. Happy?");
    }
}