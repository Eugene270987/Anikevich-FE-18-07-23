// Вивести суму лише парних чисел у діапазоні від 30 до 80

let minValue = 30;
let maxValue = 80;

let totalSum = 0;

for (let i = minValue; i<= maxValue; i++) {
    if (i % 2) {
        totalSum += 0;
    } else {
        totalSum += i;
    }
}


console.log(totalSum);

//DONE