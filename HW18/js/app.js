'use strict'

const mainForm = document.forms[0];
const mainFormElements = mainForm.elements;
const modalElement = document.createElement('div');

const cardInput = document.createElement('input');
cardInput.type = 'text';
cardInput.id = 'cardNumber';
cardInput.placeholder = 'Enter your card number';
const cardLabel = document.getElementById('card');
cardLabel.appendChild(cardInput);
cardInput.style.display = 'none';

const paymentMethodsSelect = document.getElementById('paymentMethods');
paymentMethodsSelect.addEventListener('change', checkSelect);


const inputQuantity = document.getElementById('number');
const comment = document.getElementById('comment');
const mainTable = document.getElementById('infoTable');

showCategories();

document.getElementById('left').addEventListener('click', event => {
    const infoBlock = document.getElementById('right');
    infoBlock.innerHTML = '';
    if (event.target.nodeName === 'DIV') {
        const categoryKey = event.target.getAttribute('data-category');
        const categoryProducts = categories[categoryKey].products;
        showProducts(categoryProducts, categoryKey);
    }
});


document.getElementById('center').addEventListener('click', event => {
    if (event.target.nodeName === 'DIV') {
        const productId = event.target.getAttribute('data-product');
        const categoryKey = event.target.getAttribute('data-category');

        const product = categories[categoryKey].products.find(product => product.id == productId);

        showInfo(product);
    }
});

document.getElementById('right').addEventListener('click', event => {
    const parent = document.getElementById('main');

    if (event.target.nodeName === 'BUTTON') {
        buyProduct(event.target, parent);
    }
});

const showFormBtn = document.getElementById('btn');
showFormBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const isValid = validateForm();

    if(isValid) {
        showTable();
    }
});






