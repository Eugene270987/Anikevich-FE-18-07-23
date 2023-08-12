function sum(first, second) {
    return (first + second);
}

function calcData(x, y, operation) {
    if (operation === 'sum') {
        return sum(x, y);
    }
}

let a = parseFloat(prompt('Enter digit #1'));
let b = parseFloat(prompt('Enter digit #2'));
let result = calcData(a, b, 'sum');
console.log(result);
