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


const mainForm = document.forms[0];
const mainFormElements = mainForm.elements;
const userNameInputs = mainFormElements.userName;

const selectedCity = document.getElementById('city');
const city = selectedCity.value;
const label = selectedCity.parentElement;
const existingErrorMsg = label.querySelector('.required__text');

const selectedDep = document.getElementById('department');
const depValue = selectedDep.value;
const selectedLabel = selectedDep.parentElement;
const selectErrorMessage = selectedLabel.querySelector('.required__text');

const paymentParent = document.getElementById('card');
const selectedPayment = document.getElementById('paymentMethods');
const selectedPValue = selectedPayment.value;
const cardField = document.createElement('input');
const cardNumber = cardField.value;

paymentParent.appendChild(cardField);
cardField.classList.add('hidden');
selectedPayment.addEventListener('change', () => {
    const cardNumber = cardField.value; // Получаем номер карты внутри обработчика события

    if (selectedPayment.value === 'before') {
        cardField.classList.remove('hidden');

        if (cardNumber.length !== 16 || isNaN(cardNumber)) {
            const existingErrorMsg = paymentParent.querySelector('.required__text');
            if (!existingErrorMsg) {
                const errorMsg = document.createElement('span');
                errorMsg.textContent = 'Please, enter a valid card number';
                errorMsg.classList.add('required__text');
                paymentParent.appendChild(errorMsg);
            }
        } else {
            const existingErrorMsg = paymentParent.querySelector('.required__text');
            if (existingErrorMsg) {
                existingErrorMsg.remove();
            }
        }
    } else {
        cardField.classList.add('hidden');
        const existingErrorMsg = paymentParent.querySelector('.required__text');
        if (existingErrorMsg) {
            existingErrorMsg.remove();
        }
    }
});



const inputQuantity = document.getElementById('number');
const quantityLabel = inputQuantity.parentElement;
const inputErrorMessage = quantityLabel.querySelector('.required__text');

const comment = document.getElementById('comment');


const showFormBtn = document.getElementById('btn');
showFormBtn.addEventListener('click', (event) => {
    event.preventDefault();

    validateForm();

    const userForm = document.forms[0];
    const userFormElements = document.forms[0].elements;
    const mainTable = document.getElementById('infoTable');
    const modalElement = document.createElement('div');

    modalElement.textContent = 'Results';
    modalElement.style.textAlign = 'center';
    modalElement.classList.add('modal');

    userForm.classList.add('hidden');
    mainTable.classList.remove('hidden');
    mainTable.style.textAlign = 'center';
    modalElement.classList.add('modal-open');
    modalElement.appendChild(mainTable);

    document.body.appendChild(modalElement);

    document.getElementById('userSurnameLabel').textContent = 'Surname:';
    const surnameValue = document.getElementById('userSurname');
    document.getElementById('userSurnameValue').textContent = surnameValue.value;

    document.getElementById('userNameLabel').textContent = 'Name:';
    const nameValue = document.getElementById('userName');
    document.getElementById('userNameValue').textContent = nameValue.value;

    document.getElementById('userPatroLabel').textContent = 'Patronymic:';
    const patroValue = document.getElementById('userPatro');
    document.getElementById('userPatroValue').textContent = patroValue.value;

    const cityKey = userFormElements.city.value;
    const city = cities[cityKey];
    document.getElementById('userCityLabel').textContent = 'City:';
    document.getElementById('userCityValue').textContent = city;

    const depKey = userFormElements.department.value
    const department = departments[depKey];
    document.getElementById('userDepLabel').textContent = 'Department:';
    document.getElementById('userDepValue').textContent = department;

    document.getElementById('userCardLabel').textContent = 'Card Number: ';
    document.getElementById('userCardValue').textContent = cardField.value;

    document.getElementById('productQuantityLabel').textContent = 'Product Quantity: ';
    document.getElementById('productQuantityValue').textContent = inputQuantity.value;

    document.getElementById('userCommentLabel').textContent = 'User comment: ';
    document.getElementById('userCommentValue').textContent = comment.value;
})





