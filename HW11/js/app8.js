// Визначити, чи є задане шестизначне число дзеркальним? (123321, 147741)

let userDigit = parseInt(prompt('Enter your digit'));

let sixthDigit = userDigit % 10;
userDigit = (userDigit - sixthDigit) / 10;

let fifthDigit = userDigit % 10;
userDigit = (userDigit - fifthDigit) / 10;

let fourthDigit = userDigit % 10;
userDigit = (userDigit - fourthDigit) / 10;

let thirdDigit = userDigit % 10;
userDigit = (userDigit - thirdDigit) / 10;

let secondDigit = userDigit % 10;
userDigit = (userDigit - secondDigit) / 10;

let firstDigit = userDigit % 10;



if (firstDigit === sixthDigit && secondDigit === fifthDigit && thirdDigit === fourthDigit) {
    alert('This number is mirror-reversible');
} else {
    alert('This number is not mirror-reversible');
}

// Через тернарный оператор
alert(firstDigit === sixthDigit && secondDigit === fifthDigit && thirdDigit === fourthDigit ? 'This number is mirror-reversible' : 'This number is not mirror-reversible');

// DONE