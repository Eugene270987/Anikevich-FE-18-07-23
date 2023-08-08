const startDiscountFrom = 10000;
const discount = 20;
const discountValue = (100 - discount) / 100;

showProducts();
// -----------------------------
// getProductNumber ();
// getProductAmount ();
// -----------------------------------
const productNumber = getProductNumber();
const productAmount = getProductAmount();
const selectedProduct = products[productNumber - 1];
showPrice ();