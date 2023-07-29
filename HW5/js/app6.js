// Знайти середнє арифметичне всіх цілих чисел від 1 до 500

let minValue = 1;
let maxValue = 500;

let totalSum = 0;

for (let i = minValue; i <= maxValue; i++) {
    totalSum += i;
}

let average = totalSum / maxValue;

console.log(average);

// DONE