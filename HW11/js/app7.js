// Дано тризначне число.
// Чи правда, що всі цифри однакові?
// Чи є серед цифр цифри однакові?


let userDigit = parseInt(prompt('Enter your digit'));

let thirdDigit = userDigit % 10;
userDigit = (userDigit - thirdDigit) / 10;

let secondDigit = userDigit % 10;
userDigit = (userDigit - secondDigit) / 10;

let firstDigit = userDigit % 10;


if (firstDigit === secondDigit && secondDigit === thirdDigit) {
    alert('All digits are equal');
} else {
    alert('Not all digits are equal');
}


// Через тернарный оператор
// alert(firstDigit === secondDigit && secondDigit === thirdDigit ? 'All digits are equal' : 'Not all digits are equal'); - запись слишком
// длинная, что может быть минусом в тч для понимания, хотя, кому как :)

if (firstDigit === thirdDigit || firstDigit === secondDigit || secondDigit === thirdDigit) {
    alert('Some of three digits are equal');
} else {
    alert('Not a single digit is equal to another');
}

// DONE