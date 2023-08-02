// Дано ціле число. З'ясувати, чи воно простим (простим називається число, більше ніж 1, які мають інших дільників крім 1 і себе).

let minValue = 2;
let nNumber;

do {
    nNumber = parseInt(prompt('Enter your digit from ' + minValue));
} while (minValue > nNumber);

let integerNumber = true;

if (nNumber <= 1) {
    integerNumber = false;
} else {
    for (let i = 2; i < nNumber; i++) {
        if (nNumber % i === 0) {
            integerNumber = false;
            break;
        }
    }
}

if (integerNumber) {
    alert(`${nNumber} - просте число.`);
} else {
    alert(`${nNumber} - не є простим числом.`);
}

// DONE


