// Знайти суму всіх цілих чисел від 1 до 15


let minValue = 1;
let maxValue = 15;

let totalSum = 0;


// С каждой итерацией totalSum будет прибавлять к текущему значению значение следующей итерации и присваивать новое
// значение
for (let i = minValue; i <= maxValue; i++) {
    totalSum += i;
}

console.log(totalSum);

// DONE