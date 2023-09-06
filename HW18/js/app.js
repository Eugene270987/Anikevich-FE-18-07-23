'use strict'

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
    validateForm();
})


