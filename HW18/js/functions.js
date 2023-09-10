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
    modalElement.textContent = 'Fill in the following form';
    modalElement.style.textAlign = 'center';
    modalElement.classList.add('modal');
    mainForm.classList.remove('hidden');
    modalElement.classList.add('modal-open');

    modalElement.appendChild(mainForm);
    parentElement.appendChild(modalElement);
}

function showError(value, parent, error, errorText) {
    if (error) {
        parent.removeChild(error);
    }

    if (value === 'any' || value === '') {
        const errorSpan = document.createElement('span');
        errorSpan.classList.add('required__text');
        errorSpan.textContent = errorText;
        parent.appendChild(errorSpan);
    }

    return value === 'any' || value === '';
}

function checkCardInput(cardInput, cardLabel) {
    const cardValue = cardInput.value;

    if (cardValue === '' || cardValue.length !== 16 || isNaN(cardValue)) {
        const errorSpan = document.createElement('span');
        errorSpan.classList.add('required__text');
        errorSpan.textContent = 'Please, enter your valid card number.';
        cardLabel.appendChild(errorSpan);

        return false;
    }

    return true;
}

function checkInputs() {
    let isValid = true;

    const inputElements = [
        { input: document.getElementById('userSurname'), errorText: 'Please, enter your Surname' },
        { input: document.getElementById('userName'), errorText: 'Please, enter your Name' },
        { input: document.getElementById('userPatro'), errorText: 'Please, enter your Patronymic Name' }
    ];

    inputElements.forEach(({ input, errorText }) => {
        const label = input.parentElement;
        const existingErrorSpan = label.querySelector('.required__text');

        if (input.value === '') {
            isValid = false;
            showError(input.value, label, existingErrorSpan, errorText);
        } else if (existingErrorSpan) {
            label.removeChild(existingErrorSpan);
        }
    });

    return isValid;
}

function checkSelect() {
    let isValid = true;

    const selectElements = [
        { id: 'city', errorText: 'Enter your city' },
        { id: 'department', errorText: 'Please select a department' },
        { id: 'paymentMethods', errorText: 'Please select a valid payment method' }
    ];

    selectElements.forEach(({ id, errorText }) => {
        const select = document.getElementById(id);
        const label = select.parentElement;
        const existingErrorSpan = label.querySelector('.required__text');

        if (select.value === 'any' || select.value === '') {
            isValid = false;
            showError(select.value, label, existingErrorSpan, errorText);
        } else if (existingErrorSpan) {
            label.removeChild(existingErrorSpan);
        }

        if (id === 'paymentMethods' && select.value === 'before') {
            cardInput.style.display = 'block';
            cardInput.addEventListener('input', () => {
                const cardErrorSpan = label.querySelector('.required__text');

                if (cardErrorSpan) {
                    label.removeChild(cardErrorSpan);
                }

                isValid = checkCardInput(cardInput, label);
            });
        } else if (id === 'paymentMethods' && select.value !== 'before') {
            cardInput.style.display = 'none';
            const cardErrorSpan = label.querySelector('.required__text');
            if (cardErrorSpan) {
                label.removeChild(cardErrorSpan);
            }
        }
    });

    return isValid;
}

function checkQuantity() {
    let isValid = true;

    const input = document.getElementById('number');
    const label = input.parentElement;
    const existingErrorSpan = label.querySelector('.required__text');
    const inputValue = parseFloat(input.value);

    if (inputValue <= 0 || isNaN(inputValue)) {
        isValid = false;

        if (!existingErrorSpan) {
            const errorSpan = document.createElement('span');
            errorSpan.classList.add('required__text');
            errorSpan.textContent = 'Quantity must be a positive number';
            label.appendChild(errorSpan);
        }
    } else if (existingErrorSpan) {
        label.removeChild(existingErrorSpan);
    }

    return isValid;
}

function validateForm () {
    const isInputValid = checkInputs();
    const isSelectValid = checkSelect();
    const isQuantityValid = checkQuantity();

    return isInputValid && isSelectValid && isQuantityValid;
}

function showTable() {
    const isValid = validateForm();

    if (isValid) {
        document.getElementById('userSurnameLabel').textContent = 'Surname:';
        const surnameValue = document.getElementById('userSurname');
        document.getElementById('userSurnameValue').textContent = surnameValue.value;

        document.getElementById('userNameLabel').textContent = 'Name:';
        const nameValue = document.getElementById('userName');
        document.getElementById('userNameValue').textContent = nameValue.value;

        document.getElementById('userPatroLabel').textContent = 'Patronymic:';
        const patroValue = document.getElementById('userPatro');
        document.getElementById('userPatroValue').textContent = patroValue.value;

        const cityKey = mainFormElements.city.value;
        const city = cities[cityKey];
        document.getElementById('userCityLabel').textContent = 'City:';
        document.getElementById('userCityValue').textContent = city;

        const depKey = mainFormElements.department.value;
        const department = departments[depKey];
        document.getElementById('userDepLabel').textContent = 'Department:';
        document.getElementById('userDepValue').textContent = department;

        document.getElementById('userCardLabel').textContent = 'Card Number: ';
        document.getElementById('userCardValue').textContent = cardInput.value;

        document.getElementById('productQuantityLabel').textContent = 'Product Quantity: ';
        document.getElementById('productQuantityValue').textContent = inputQuantity.value;

        document.getElementById('userCommentLabel').textContent = 'User comment: ';
        document.getElementById('userCommentValue').textContent = comment.value;
    }

    modalElement.textContent = 'Results';
    modalElement.style.textAlign = 'center';
    modalElement.classList.add('modal');

    mainForm.classList.add('hidden');

    mainTable.classList.remove('hidden');
    mainTable.style.textAlign = 'center';

    modalElement.classList.add('modal-open');
    modalElement.appendChild(mainTable);

    document.body.appendChild(modalElement);
}

