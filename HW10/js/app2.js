/*
Написать функцию doMath(x, sign, y), которая получает 3 аргумента: числа x и y, строку sign.
    В переменной sign может быть: +, -, *, /, %, ^ (степень).
Вывести результат математического действия, указанного в переменной sign. Оба числа и знак получаются от
пользователя.*/


function doMath (x, sign, y) {
    if (isNaN(x) || isNaN(y)) {
        return "None of these arguments is a number";
    }
    switch (sign) {
        case "+":
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            if (y !== 0) {
                return x / y;
            } else {
                return 'Division by 0 is not possible';
            }
        case '%':
            return x % y;
        case '^':
            return Math.pow(x, y);
        default:
            return 'Incorrect operation symbol';
    }
}

const x = parseInt(prompt('Enter your first digit: '));
const sign = prompt('Enter the correct symbol: (+, -, *, /, %, ^):');
const y = parseInt(prompt('Enter your second digit:'));

const result = doMath(x, sign, y);
console.log('Result is:', result);

// DONE