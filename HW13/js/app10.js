// Надрукувати повну таблицю множення від 1 до 10

let minValue = 1;
let maxValue = 10;

for (let i = minValue; i <= maxValue; i++) {
    console.log(`Table for ${i}`)
    for (let j = minValue; j <= maxValue; j++) {
        let value = i * j;
        console.log(`${i} * ${j} = ${value}`);
    }
}

// DONE