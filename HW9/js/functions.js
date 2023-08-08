function showProducts() {
    for(let i = 0; i < products.length; i++) {
        console.log(`#${(i + 1)} Product: ${products[i].name} | Price: $${products[i].price}`);
    }
}

let productNumber;

function getProductNumber () {
    do {
        productNumber = parseInt(prompt('Enter product number which you wanna buy:'));
    } while(productNumber < 1 || productNumber > products.length || isNaN(productNumber));
    return productNumber;
}

let productAmount;

function getProductAmount () {
    do {
        productAmount = parseInt(prompt('Enter products amount:'));
    } while(productAmount < 1 || isNaN(productAmount));
    return productAmount;
}

let initialPrice;
let finalPrice;

function showPrice (initialPrice, finalPrice) {
    initialPrice = selectedProduct.price * productAmount;
    console.log('Price: $', initialPrice);
    if (initialPrice >= startDiscountFrom) {
        finalPrice = initialPrice * discountValue;
        console.log('Congrats! You got a discount, the final price is $' + finalPrice);
    }
}