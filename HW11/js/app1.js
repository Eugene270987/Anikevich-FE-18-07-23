/*
 Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву
 array.
*/
function getValue (digit) {
    let value;
    do {
        value = parseInt((prompt(digit)));
    } while (isNaN(value));

    return value;
}

function createArr (value) {
    const userArr = [];
    for (let i = 0; i < value; i++) {
      userArr.push(getValue(`Enter the digit for element: ${i + 1}`));
    }
    return userArr;
}

function deleteDigit (array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            array.splice(i, 1);
        }
    }
    return array;
}

const userArrayLength = getValue('Enter the number of elements in the array: ');
const startUserArr = createArr(userArrayLength);

console.log(startUserArr);

const digitToDelete = getValue('Enter the number you would like to delete: ');
deleteDigit(startUserArr, digitToDelete);
console.log(startUserArr);

// DONE




