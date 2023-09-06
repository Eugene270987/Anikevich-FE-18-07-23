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
    const mainForm = document.forms[0];

    modalElement.textContent = 'Fill in the following form';
    modalElement.style.textAlign = 'center';
    modalElement.classList.add('modal');

    mainForm.classList.remove('hidden');

    modalElement.classList.add('modal-open');

    modalElement.appendChild(mainForm);
    parentElement.appendChild(modalElement);
}


function validateForm() {
    const mainForm = document.forms[0];
    const mainFormElements = mainForm.elements;

    const userNameInputs = mainFormElements.userName;

    for (let i = 0; i < userNameInputs.length; i++) {
        const userNameInput = userNameInputs[i];
        const label = userNameInput.parentElement;

        const existingErrorMsg = label.querySelector('.required__text');

        if (userNameInput.value === '' && !existingErrorMsg) {
            const errorMsg = document.createElement('span');

            userNameInput.classList.add('required');
            errorMsg.classList.add('required__text');
            errorMsg.textContent = 'Please, fill in the field!';

            label.appendChild(errorMsg);
        } else if (userNameInput.value !== '' && existingErrorMsg) {
            existingErrorMsg.remove();
            userNameInput.classList.remove('required');
        }
    }

    const selectField = mainFormElements.city;

}






