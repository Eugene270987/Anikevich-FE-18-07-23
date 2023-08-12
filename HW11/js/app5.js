// Дано двозначне число. Визначити, яка з його цифр більша: перша чи друга?

let userDigit = parseInt(prompt('Enter your digit'));

let secondDigit = userDigit % 10;
userDigit = (userDigit - secondDigit) / 10;

let firstDigit = userDigit % 10;

// Также, выводит то число, которое больше, или же первое число, если числа равны.
if (firstDigit > secondDigit) {
    alert(`First number is bigger than the last one, ${firstDigit}`);
} else if (firstDigit < secondDigit) {
    alert(`First number is less than the last one, ${secondDigit}`);
} else {
    alert(`Numbers are equal, ${firstDigit}`);
}