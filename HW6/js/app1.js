// Вивести числа від 20 до 30 через пропуск використовуючи крок 0,5 (20 20,5 21 21,5….)

let minValue = 20;
let maxValue = 30;

let stringNumbers = "";

for (let i = minValue; i <= maxValue; i = i + 0.5) {
    stringNumbers+=`${i} `;
}

console.log(stringNumbers);

// DONE
