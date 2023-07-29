// Вивести таблицю множення на 7

let userDigit;
let digitString = "";

let minValue = 1;
let maxValue = 10;

let minPossibleValue = 6;
let maxPossibleValue = 8;
// Умови ті ж самі, як і у завданні 1,2.

do {
    userDigit = parseInt(prompt('Enter the digit between ' + minPossibleValue + ' and ' + maxPossibleValue + ' and I will show you multiplication table for it'));
} while (userDigit !== 7);

for (let i = minValue; i <= maxValue; i++) {
    if (i < maxValue) {
        digitString += `${i*userDigit}, `;
    } else {
        digitString += `${i*userDigit}`;
    }
}

alert(digitString);

// // DONE