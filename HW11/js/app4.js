// Дано число. Визначити, чи закінчується воно парною цифрою чи непарною? Вивести останню цифру.

let userDigit = parseInt(prompt('Enter your digit'));

let result = userDigit % 2;

if (result) {
    alert('User digit is not even');
} else {
    alert('User digit is even');
}

result = userDigit % 10;
alert(result);

// DONE