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

        console.log(userNameInput.value);
    }

    if (city === 'any') {
        if (!selectedCity.classList.contains('required')) {
            selectedCity.classList.add('required');
            const errorMsg = document.createElement('span');
            errorMsg.textContent = 'Please, choose your city';
            errorMsg.classList.add('required__text');
            selectedCity.parentElement.appendChild(errorMsg);
        }
    } else {
        if (selectedCity.classList.contains('required')) {
            selectedCity.classList.remove('required');
            if (existingErrorMsg) {
                existingErrorMsg.remove();
            }
        }
    }

    if (depValue === "any") {
        if (!selectedDep.classList.contains('required')) {
            selectedDep.classList.add('required');
            const errorMsg = document.createElement('span');
            errorMsg.textContent = 'Please, choose a department';
            errorMsg.classList.add('required__text');
            selectedLabel.appendChild(errorMsg);
        }
    } else {
        if (selectedDep.classList.contains('required')) {
            selectedDep.classList.remove('required');
            if(existingErrorMsg) {
                existingErrorMsg.remove();
            }
        }
    }


    if(inputQuantity.value <= 0 || isNaN(inputQuantity.value)) {
        if (!inputErrorMessage) {
            const errorMsg = document.createElement('span');
            errorMsg.textContent = 'Please, enter positive quantity';
            errorMsg.classList.add('required__text');
            quantityLabel.appendChild(errorMsg);
        }
    } else if (inputErrorMessage) {
        inputErrorMessage.remove();
    }
}






