// Визначити, чи є число a дільником числа b? І навпаки. (Дати дві відповіді)

let digitA = parseInt(prompt('Enter first number'));
let digitB = parseInt(prompt('Enter last number'));

let firstResult = digitB % digitA;

if (firstResult) {
    alert('digitA is not divider for digitB');
} else{
    alert('digitA is a divider for digitB');
}


let secondResult = digitA % digitB;

if (secondResult) {
    alert('digitB is not divider for digitA');
} else{
    alert('digitB is a divider for digitA');
}

//DONE