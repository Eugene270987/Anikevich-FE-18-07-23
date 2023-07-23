// 1. За допомогою prompt запитати як звуть користувача. За допомогою alert вивести "Hello, John! How are you?", де John це те, що ввів користувач
let userName = 'Peter';
let name = prompt('What is your name?', userName);
alert('Hello, ' + name + '! How are you?');

//2. Створити скрипт для складання, віднімання, множення та поділу двох чисел та виведення результатів

// --------Addition
let firstDigit = prompt('Enter first digit:');
let lastDigit = prompt('Enter second digit');

firstDigit = parseInt(firstDigit);
lastDigit = parseInt(lastDigit);

let additionSum = firstDigit + lastDigit;
alert(additionSum);


// -------Subtraction
let digit1 = prompt('Enter your first digit');
let digit2 = prompt('Enter your second digit');

let subtractionSum = digit1 - digit2;
alert(`The result is ${subtractionSum}`);


// -------Multiplication
let digit3 = prompt('Enter your first digit');
let digit4 = prompt('Enter your second digit');

let multiplicationSum = digit3 * digit4;
alert(`The result is ${multiplicationSum}`);


// -------Division
let digit5 = prompt('Enter your first digit');
let digit6 = prompt('Enter your second digit');

let divisionSum = digit5 / digit6;
alert(divisionSum);

//  3. Створити скрипт, який отримує два значення і виводить true, якщо значення рівні, false - якщо ні

let firstValue = prompt('Enter your first value');
let secondValue = prompt('Enter your second value');

alert(firstValue === secondValue);


//4. Визначити середнє арифметичне трьох чисел

let digit7 = prompt('Enter first digit');
let digit8 = prompt('Enter second digit');
let digit9 = prompt('Enter third digit');

digit7 = parseInt(digit7);
digit8 = parseInt(digit8);
digit9 = parseInt(digit9);

let digitValue = digit7 + digit8 + digit9;
const digitQuantity = 3;

alert(digitValue / digitQuantity);


// 5. Розкласти по цифрах п'ятизначне число і вивести у вихідному порядку через пробіл (використовувати оператор “розподіл по модулю” (%)

let digit10 = prompt('Enter a five-digit number: ');

// Пишем в обратном порядке, потому как остаток мы начинаем считать с конца.

// Выделяем остаток
let digit15 = digit10 % 10;
// Переприсваиваем переменной значение, так, чтобы мы избавились от последней цифры, и от нуля(путем деления на 10)
// Но, при этом не выводим пока результат в алерт.
digit10 = (digit10 - digit15) / 10;


// Повторяем эти процедуры некоторое количество раз.
let digit14 = digit10 % 10;
digit10 = (digit10 - digit14) / 10;

let digit13 = digit10 % 10;
digit10 = (digit10 - digit13) / 10;

let digit12 = digit10 % 10;
digit10 = (digit10 - digit12) / 10;

let digit11 = digit10 % 10;

// Вводим новую перепенную с результатом, и далее, выводим ее в alert.
let finalResult = `${digit11} ${digit12} ${digit13} ${digit14} ${digit15}`;
alert(finalResult);



