// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// Визначити кількість його парних дільників
// Знайти суму його парних дільників


let minValue = 1;
let maxValue = "...";
let n = parseInt(prompt('Enter the natural digit from ' + minValue + ' to ' + maxValue));

let dividerString = "";
let evenDividerQuantity = 0;
let evenDividerSum = 0;


// Натуральные числа - от 1 до ....

// Нам нужно, чтобы мы проверили условие: введенное натуральное число делилось без остатка на
// любое из чисел этого же массива чисел. Поэтому, нам нужно запускать цикл для делителя, чтобы
// проверить, может ли число делиться без остатка на число от 1 до ...(На 0 не делим, естественно).
for (let i = minValue; i <= n; i++) {
    if (n % i === 0) {
        dividerString += `${i} `;
        if (n % 2 ===0) {
            evenDividerQuantity ++;
            evenDividerSum += i;
        }
    }
}

let messageData = `\n${dividerString} \n${evenDividerQuantity} \n${evenDividerSum}`;

alert(messageData);

// DONE