// Реалізуйте функцію generateKey(length, characters), що повертає рядок випадкових символів із
// набору characters довжиною length.
// Наприклад
// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i

'use strict'

const getKeyLength = someValue => {
    let value;
    do {
        value = parseInt(prompt(someValue));
    } while (isNaN(value) || value <= 0);

    return value;
}

const generateKey = (length, characters) => {
    let key = '';
    for (let i = 0; i < length; i++) {
        let elementIndex;
        elementIndex = Math.floor(Math.random() * characters.length);
        key += characters[elementIndex];
    }
    return key;
}

const characters = '0123456789abcdefghijklmnopqrstuvwxyz';

const keyLength = getKeyLength(`Please, enter your key length: `);

const userKey = generateKey(keyLength, characters);

console.log(userKey);



