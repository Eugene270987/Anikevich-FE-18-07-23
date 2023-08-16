/*
Реалізувати рекурсивну функцію, яка зводить число в ступінь.
Число, яке потрібно звести в ступінь, передається як перший аргумент у функцію
Ступінь передається як другий аргумент у функцію
Назвати функцію pow(num, degree);
*/

function getValue (digit) {
    let value;
    do {
        value = parseInt((prompt(digit)));
    } while (value < 0 || isNaN(value));

    return value;
}
function pow(num, degree) {
  if (degree === 0) {
    return 1;
  } else {
      return num * pow(num, degree - 1);
  }
}

const userFreeDigit = getValue('Enter the digit you would like to exponentiate: ');
const userExponent = getValue('Enter your exponent: ');

const result = pow(userFreeDigit, userExponent);
console.log(`The result is: ${result}`);

//DONE