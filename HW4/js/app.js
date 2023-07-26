// Запросити у користувача рік народження.
// Запитати в нього, в якому місті він живе.
// Запитати його улюблений вид спорту.

// При натисканні на ОК показуємо вікно, де має бути відображена наступна інформація:
// ------------ Його вік.

// ------------ Якщо користувач запровадить Київ, Вашингтон чи Лондон, то показати йому повідомлення - "Ти живеш у столиці..." і на місце точок підставляємо країну,
// столицю якої він запровадив. Інакше показуємо йому “ти живеш у місті…” і місце точок – введене місто.

// -------------Вибираємо самі три види спорту та три чемпіони у цих видах. Відповідно, якщо користувач запровадить один із цих видів спорту, то показуємо йому
// повідомлення “Круто! Хочеш стати…” і підставляємо на місце точок ім'я та прізвище чемпіона.


// Все це має бути відображено в одному вікні (алерті).

// Якщо в якомусь випадку він не захоче вводити інформацію і натисне Скасувати, показати йому повідомлення - "Шкода, що Ви не захотіли ввести свій(ю) ..." і
// вказуємо, що він не захотів вводити - дату народження, місто або вид спорту.

let yearOfBirth = prompt('Enter your year of birth');
let city = prompt("Enter the city you're living in");
let kindOfSport = prompt('Enter your favourite kind of sport');

let userAge = 2023 - yearOfBirth;

let messageData = "";

if (yearOfBirth) {
    messageData += `You're ${userAge}`;
} else {
    messageData += `Unfortunately, you haven't entered your age`;
}

if (city === 'Kyiv') {
    messageData += `\nYou're living in the capital of Ukraine`;
} else if (city === 'Washington') {
    messageData += `\nYou're living in the capital of the USA`;
} else if (city === 'London') {
    messageData += `\nYou're living in the capital of England`;
} else if (city) {
    messageData += `\nYou live in ${city}`;
} else {
    messageData += `\nUnfortunately, you haven't entered the city you live in`;
}

if (kindOfSport === 'basketball' || kindOfSport === 'Basketball') {
    messageData += `\nWOOOW! Would u like to be another Michael Jordan?`;
} else if (kindOfSport === 'football' || kindOfSport === 'Football') {
    messageData += `\nWOOOW! Would u like to be another Erling Haaland?`;
} else if (kindOfSport === 'golf' || kindOfSport === 'Golf'){
    messageData += `\nWOOOW! Would u like to be another Tiger Woods?`;
} else if (kindOfSport) {
    messageData += `\nWOOOW! ${kindOfSport} is AWESOME!`;
} else {
    messageData += `\nUnfortunately, you haven't entered your favourite kind of sport`;
}

alert(messageData);