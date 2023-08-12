// Дано число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна)

let minValue = 0;

do {
    nNumber = parseInt(prompt('Enter your digit from ' + minValue));
} while (minValue > nNumber);

let i;
let possible = false;

for (i = 0; 3**i <= nNumber; i++) {
    if (3**i === nNumber) {
        possible = true;
        break;
    }
}

if (possible) {
    alert(`${nNumber} можна отримати як 3 в ступіні`);
} else {
    alert(`${nNumber} не можна отримати як 3 в ступіні`);
}

// DONE
