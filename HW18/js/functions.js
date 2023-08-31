'use strict'
function showCategories() {
    const parentElement = document.getElementById('left');

    for (let categoryKey in categories) {
        const category = categories[categoryKey];

        let element = document.createElement('div');
        element.textContent = category.name;
        element.setAttribute('data-category', categoryKey)
        parentElement.appendChild(element);
    }
}

function showProducts(products, category) {
    const parentElement = document.getElementById('center');
    parentElement.innerHTML = '';

    for (let product of products) {
        let element = document.createElement('div');
        element.textContent = `${product.name} $${product.price}`;
        element.setAttribute('data-product', product.id);
        element.setAttribute('data-category', category);

        parentElement.appendChild(element);
    }
}

function showInfo(product) {
    const parentElement = document.getElementById('right');
    parentElement.innerHTML = '';

    let element = document.createElement('div');
    element.textContent = `Name: ${product.name} Price: ${product.price} Description: ${product.description}`;
    parentElement.appendChild(element);

    const btnBuy = document.createElement('button');
    btnBuy.textContent = 'Buy now';
    parentElement.appendChild(btnBuy);
}
function buyProduct(btnBuy, parentElement) {
    const modalElement = document.createElement('div');
    modalElement.textContent = 'Thanks for buying';
    modalElement.classList.add('modal');
    modalElement.style.textAlign = 'center';
    parentElement.appendChild(modalElement);

    setTimeout(() => {
        parentElement.removeChild(modalElement);
    }, 3000);
}


