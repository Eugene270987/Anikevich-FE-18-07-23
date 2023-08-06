// Дан массив чисел
let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// ------------------------------------Визначити кількість негативних елементів. -------------------------------------
// ------------------------------------Знайти кількість непарних позитивних елементів.--------------------------------
// ------------------------------------Визначити кількість парних позитивних елементів.-------------------------------
//-------------------------------------Знайти суму парних позитивних елементів.---------------------------------------
// ------------------------------------Знайти суму непарних позитивних елементів.-------------------------------------
// ------------------------------------Знайти добуток позитивних елементів.-------------------------------------------
let negativeQuantity = 0;
let oddPositiveQuantity = 0;
let evenPositiveQuantity = 0;
let evenPositiveSum = 0;
let oddPositiveSum = 0;
let multiplyPositiveSum = 1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        multiplyPositiveSum *= arr[i];
        if (arr[i] % 2 === 0) {
            evenPositiveQuantity ++;
            evenPositiveSum += arr[i];
        } else {
            oddPositiveQuantity ++;
            oddPositiveSum += arr[i];
        }
    } else{
        negativeQuantity ++;
    }
}
console.log('The quantity of negative elements is: ', negativeQuantity);
console.log('The quantity of odd positive elements is: ', oddPositiveQuantity);
console.log('The quantity of even positive elements is: ', evenPositiveQuantity);
console.log('The sum of even positive elements is: ', evenPositiveSum);
console.log('The sum of odd positive elements is: ', oddPositiveSum);
console.log('The multiplication sum of all positive elements is: ', multiplyPositiveSum);

// -------------------------------------Знайти мінімальний елемент масиву та його порядковий номер.--------------------
// -------------------------------------Знайти максимальний елемент масиву та його порядковий номер.-------------------
let minElement = arr[0];
let minElementIndex = 0;
let maxElement = arr[0];
let maxElementIndex = 0;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minElement) {
        minElement = arr[i];
        minElementIndex = i;
    } else {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
            maxElementIndex = i;
        }
    }
}
console.log('The smallest element is: ', minElement);
console.log('The smallest element index is: ', minElementIndex);
console.log('The biggest element is: ', maxElement);
console.log('The biggest element index is: ', maxElementIndex);

//--------------------------------------Знайти найбільший серед елементів масиву, решту занулити.----------------------
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== maxElement) {
        arr[i] = 0;
    }
}
console.log('The final array is: ', String(arr));
