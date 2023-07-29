// Знайти добуток усіх цілих чисел від 15 до 35


let minValue = 15;
let maxValue = 35;

let multSum = 1;


for(let i = minValue; i <= maxValue; i++){
    multSum = multSum * i;
    // multSum *= i;
}

console.log(multSum);


// DONE