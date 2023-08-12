// Один долар коштує 40 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

let minDollarSum = 10;
let maxDollarSum = 100;

let hryvnaPerDollar = 40;

for (let i = minDollarSum; i <= maxDollarSum; i += 10) {
    let hryvnaSum = hryvnaPerDollar * i;
    console.log(`${i} * ${hryvnaPerDollar} = ${hryvnaSum}`);
}

//DONE