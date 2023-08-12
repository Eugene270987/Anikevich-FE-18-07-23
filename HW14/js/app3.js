// Дано ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

let minValue = 1;
let nNumber;

do {
    nNumber = parseInt(prompt('Enter your digit from ' + minValue));
} while (minValue > nNumber);

let minNumber = 1;
let maxNumber = 100;

let strNumber = "";

for (let i = minNumber; i <= maxNumber; i++) {
    let squareNumber = i**2;
    if (squareNumber <= nNumber) {
        strNumber += `${i} `;
    }
}

alert(strNumber);

// DONE
