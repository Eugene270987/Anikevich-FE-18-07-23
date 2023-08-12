// Дано масив об’єктів. Вивести масив телефонних номерів користувачів в яких баланс більше ніж 2000 доларів. І знайти суму всіх балансів користувачів

let users = [
    {
        index:0,
        isActive:true,
        balance:"2226.60",
        name:"Eugenia Sawyer",
        gender:"female",
        phone:"+1 (840) 583-3207",
        address:"949 John Street, Rose, Puerto Rico, 1857",
    },
    {
        index:1,
        isActive:true,
        balance:"2613.77",
        name:"Pauline Gallegos",
        gender:"female",
        phone:"+1 (985) 593-3328",
        address:"328 Greenpoint Avenue, Torboy, North Dakota, 6857",
    },
    {
        index:2,
        isActive:false,
        balance:"3976.41",
        name:"Middleton Chaney",
        gender:"male",
        phone:"+1 (995) 591-2478",
        address:"807 Fleet Walk, Brutus, Arkansas, 9783",
    },
    {
        index:3,
        isActive:true,
        balance:"1934.58",
        name:"Burns Poole",
        gender:"male",
        phone:"+1 (885) 559-3422",
        address:"730 Seba Avenue, Osage, Alabama, 6290",
    },
    {
        index:4,
        isActive:true,
        balance:"3261.65",
        name:"Mcfadden Horne",
        gender:"male",
        phone:"+1 (942) 565-3988",
        address:"120 Scholes Street, Kirk, Michigan, 1018",
    },
    {
        index:5,
        isActive:false,
        balance:"1790.56",
        name:"Suzette Lewis",
        gender:"female",
        phone:"+1 (837) 586-3283",
        address:"314 Dunne Place, Bawcomville, Guam, 9053",
    },
    ]

//Выводим массив телефонных номеров пользователей, у которых баланс больше 2000 и сумму баланса всех пользователей

// Создаем пустой массив
let phoneArr = [];
// Создаем переменную, которая на данный момент равна нулю, к которой мы будем добавлять баланс с каждой итерацией
// цикла и переприсваивать ей значение
let balanceSum = 0;

// Проверяем в цикле все элементы массива (то есть, обьекты)
// Создаем внутри цикла 2 переменные, в одной - парсим значение свойства баланс каждого из обьектов массива,
// Другой переменной - присваиваем значение свойства номер каждого из обьектов массива.
for (let i = 0; i < users.length; i++) {
    let userBalance = parseInt(users[i].balance);
    let userPhone = users[i].phone;
    // Добавляем значение с каждой итерацией и Переприсваиваем конечное значение.
    balanceSum += userBalance;
    // И только в случае, если баланс у нас больше чем 2000, то мы пушим значение свойства "Phone" обьекта массива в наш пустой массив, обьявленный ранее
    // вне цикла
    if (userBalance > 2000) {
        phoneArr.push(userPhone);
    }
}

// Выводим через запятую, значения свойства "phone" подряд.
console.log("Phone numbers are: ", String(phoneArr.join(', ')));

// Выводим общую сумму баланса всех пользователей! Сумма всех балансов пользователей - 15803.57 - но нам округлило автоматически до 15800. Почему? :)
console.log('Total balance of all users is: ', balanceSum);

// DONE
