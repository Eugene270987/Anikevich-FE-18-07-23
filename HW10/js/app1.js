/*Написать функцию, которая принимает 1 параметр. При первом вызове, она его запоминает, при втором — суммирует переданный
параметр с тем, что передали первый раз и тд. Всё это с замыканиями, например: sum(3) = 3 sum(5) = 8 sum(20) = 28*/

function getValue() {
    let value = 0;
    return function (anyValue) {
        value += anyValue;
        return value;
    }
}

const showValue = getValue();

console.log(showValue(8));
console.log(showValue(13));
console.log(showValue(15));

//DONE