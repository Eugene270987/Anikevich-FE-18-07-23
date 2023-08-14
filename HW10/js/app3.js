/*
Написать функцию заполнения пользовательскими данными двумерного массива. Длину основного массива и внутренних
массивов задаёт пользователь. Значения всех элементов всех массивов задаёт пользователь.
 */
function getArr(length) {
    let value;
    do {
        value = parseInt(prompt(length));
    } while (value < 1 || isNaN(value));

    return value;
}
function userArr() {
    const arr = [];
    for (let i = 0; i < userLength1; i++) {
        const innerArr = [];
        for (let y = 0; y < userLength2; y++) {
            const userValue = parseInt(prompt(`Enter the number of element [${i}][${y}]: `));
            innerArr.push(userValue);
        }
        arr.push(innerArr);
    }
    return arr;
}

const userLength1 = getArr('Enter the number of elements');
const userLength2 = getArr('Enter the number of sub-elements');

const finalArray = userArr();

console.log(finalArray);

// DONE

