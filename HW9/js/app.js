
showProducts();

const productNumber = getNumericValue('Enter product number which you wanna buy:', products.length);

const productAmount = getNumericValue('Enter products amount:');

const selectedProduct = getProduct(productNumber);

calculateAndShowPrice(selectedProduct, productAmount);

