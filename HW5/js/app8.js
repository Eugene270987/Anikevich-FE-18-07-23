// Вивести всі числа в діапазоні від 100 до 200 які кратні 3

let minValue = 100;
let maxValue = 200;

let digitString = "";

for (let i = minValue; i <= maxValue; i++) {
    if( i % 3) {
        digitString += "";
    } else {
        digitString += `${i} `;
    }
}

console.log(digitString);

// DONE

