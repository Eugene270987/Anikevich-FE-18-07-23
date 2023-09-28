/*
Вам потрібно написати функцію, яка як параметр приймає функцію і додає їй можливість кешувати дзвінки.
Ідея полягає в тому, що при виклику функції з однаковими аргументами немає сенсу викликати функцію щоразу, достатньо
зберігати дані про результати виклику.
Зберігати потрібно останні 10 дзвінків.*/


function createCachedFunction(originalFunction, cacheLength = 10) {
    const cache = new Map();
    const recentCalls = [];

    return function (...args) {
        const argsKey = JSON.stringify(args);

        if (cache.has(argsKey)) {
            console.log('Using cached result...');

            const index = recentCalls.indexOf(argsKey);

            recentCalls.splice(index, 1);
            recentCalls.push(argsKey);

            return cache.get(argsKey);
        }

        const result = simpleCalc(...args);

        if (recentCalls.length >= cacheLength) {
            const oldestArgsKey = recentCalls.shift();
            cache.delete(oldestArgsKey);
        }

        recentCalls.push(argsKey);
        cache.set(argsKey, result);

        console.log('Calculating and caching result...');
        return result;
    };
}

function simpleCalc(n) {
    console.log(`Making calculation for ${n}`);
    return n * 3;
}

const cachedExpensiveCalculation = createCachedFunction(simpleCalc(), 10);

console.log(cachedExpensiveCalculation(5));
console.log(cachedExpensiveCalculation(5));
console.log(cachedExpensiveCalculation(10));
console.log(cachedExpensiveCalculation(10));