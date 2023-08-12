// Вивести квадрати чисел від 10 до 20;

let userDigit;
let digitString = "";

let minValue = 10;
let maxValue = 20;

// Умови ті ж самі, як і у завданні 1.

do {
    userDigit = parseInt(prompt('Enter your digit from ' + minValue + ' to ' + maxValue));
} while (minValue > userDigit || userDigit > maxValue);

for (let i = minValue; i <= maxValue; i++) {
    let squareNumber = i**2;
    if (i < maxValue) {
        digitString += `${squareNumber}, `;
    } else {
        digitString += `${squareNumber}`;
    }
}

alert(digitString);

// DONE

//RE-DONE