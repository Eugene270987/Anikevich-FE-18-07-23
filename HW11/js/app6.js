// Дано тризначне число.
// -----Визначити чи є парною сума його цифр.
// -----Визначити, чи кратна сума цифр п'яти.
// -----Визначити чи є добуток його цифр більше 100.

let userDigit = parseInt(prompt('Enter your digit'));

let thirdDigit = userDigit % 10;
userDigit = (userDigit - thirdDigit) / 10;

let secondDigit = userDigit % 10;
userDigit = (userDigit - secondDigit) / 10;

let firstDigit = userDigit % 10;

let sumOfThree = thirdDigit + secondDigit + firstDigit;
let multiplicationOfThree = thirdDigit * secondDigit * firstDigit;

let remainderOne = sumOfThree % 2;
let remainderTwo = sumOfThree % 5;

if (remainderOne) {
    alert(`${sumOfThree} is an odd digit`);
} else {
    alert(`${sumOfThree} is an even digit`);
}

if (remainderTwo) {
    alert(`We have the remainder left: ${remainderTwo}`);
} else {
    alert(`${sumOfThree} can be divided by 5 without no remainder left`);
}

if (multiplicationOfThree > 100) {
    alert(`${multiplicationOfThree} is bigger than 100`);
} else if (multiplicationOfThree === 100) {
    alert(`${multiplicationOfThree} is equal to 100`);
} else {
    alert(`${multiplicationOfThree} is less than 100`);
}

// DONE