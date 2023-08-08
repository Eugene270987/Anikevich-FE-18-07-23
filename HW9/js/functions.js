function showProducts() {
    for(let i = 0; i < products.length; i++) {
        console.log(`#${(i + 1)} Product: ${products[i].name} | Price: $${products[i].price}`);
    }
}

// Первый вариант

/*
let productNumber;

function getProductNumber () {
    do {
        productNumber = parseInt(prompt('Enter product number which you wanna buy:'));
    } while(productNumber < 1 || productNumber > products.length || isNaN(productNumber));
}

let productAmount;

function getProductAmount () {
    do {
        productAmount = parseInt(prompt('Enter products amount:'));
    } while(productAmount < 1 || isNaN(productAmount));
}

*/

// -------------------------------------------------------------------------
// Второй вариант

const getProductNumber = function () {
    let productNumber;
    do {
        productNumber = parseInt(prompt('Enter product number which you wanna buy:'));
    } while(productNumber < 1 || productNumber > products.length || isNaN(productNumber));
    return productNumber;
}

const getProductAmount = function () {
    let productAmount;
    do {
        productAmount = parseInt(prompt('Enter products amount:'));
    } while(productAmount < 1 || isNaN(productAmount));
    return productAmount;
}
// --------------------------------------------------

let initialPrice;
let finalPrice;

function showPrice () {
    initialPrice = selectedProduct.price * productAmount;
    console.log('Price: $', initialPrice);
    if (initialPrice >= startDiscountFrom) {
        finalPrice = initialPrice * discountValue;
        console.log('Congrats! You got a discount, the final price is $' + finalPrice);
    }
}