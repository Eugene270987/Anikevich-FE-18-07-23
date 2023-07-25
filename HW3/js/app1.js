// Дано два різні числа. Визначити, яке з них більше, а яке менше.

let digit1 = parseInt(prompt('Enter your first digit'));
let digit2 = parseInt(prompt('Enter your second digit'));

if (digit1 > digit2) {
    alert('digit1 is bigger');
} else if (digit1 === digit2) {
    alert('Both digits are equals');
} else {
    alert('digit1 is lesser');
}

// DONE
