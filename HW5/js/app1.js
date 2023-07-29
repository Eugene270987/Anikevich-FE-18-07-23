// Вивести на сторінку в один рядок через кому числа від 10 до 20
let userDigit;
let digitString = "";

// Трохи ускладнимо завдання :)
// Користувач має ввести число від 10 до 20. І після вводу, в алерті
// він побачить в рядок цифри, від 10 до 20. Якшо він введе менше 10, або більше 20, то
// він знову побачить вікно з полем вводу необхідних даних
let minValue = 10;
let maxValue = 20;

do {
    userDigit = parseInt(prompt('Enter your digit from ' + minValue + ' to ' + maxValue));
} while (minValue > userDigit || userDigit > maxValue);


for (let i = minValue; i <= maxValue; i++) {
    if (i < maxValue) {
        digitString += `${i}, `;
    } else {
        digitString += `${i}`;
    }
}

alert(digitString);


// DONE