'use strict'

function showMyBirthday () {
    const parentElement = document.querySelector('main');
    createElement('div', parentElement, moment('27 September 1987, 7:00 AM').format('MMMM Do YYYY, h:mm:ss a'), {className: 'my__birthday'});
}

function showButtons() {
    const parentElement = createElement('div', 'main', '', {className: 'btn-container btn-group d-flex justify-content-center flex-wrap', role: 'group'});
    createElement(
        'button', parentElement,
        'TOOLTIP + MODAL',
        {type: 'button',
            className: 'btn btn-primary',
            'container': 'body',
            'data-bs-toggle': 'tooltip',
            'data-bs-custom-class': 'custom-tooltip',
            'data-bs-title': 'Click me!'},
        {click: showModal});

    createElement(
        'button',
        parentElement,
        'ALERT',
        {type: 'button', className: 'btn btn-danger'}, {click: toggleAlert});

    createElement('div', parentElement, '', {className: 'alert__container'});
}

function toggleAlert() {
    const parentElement = document.querySelector('.alert__container');
    const alertElement = document.getElementById('alert');
    const description = 'Here is my Alert';
    if (alertElement) {
        removeElement(alertElement);
    } else {
        const newAlert = createAlert(parentElement, description);
        newAlert.id = 'alert';
    }
}

function createAlert (parent, content) {
    const alert = createElement('div', parent, content, {id: 'alert', className: 'alert alert-primary', role: 'alert'});
    alert.style.background = 'grey';
    return alert;
}

function createModal () {
    const modal = createElement('div', 'main', '', {id: 'myModal', className: 'modal'});
    const modalDialog = createElement('div', modal, '', {className: 'modal-dialog'});
    const modalContent = createElement('div', modalDialog, '', {className: 'modal-content'});

    const modalHeader = createElement('div', modalContent, '', {className: 'modal-header'});
    createElement('h5', modalHeader, 'Here I will show you my modal window', {className: 'modal-title'});
    createElement('button', modalHeader, '', {type: 'button', className: 'btn-close', 'data-bs-dismiss': 'modal', 'aria-label': 'close'});

    const modalBody = createElement('div', modalContent, '', {className: 'modal-body'});
    createElement('p', modalBody, 'Here you can see that I managed to make a popup using Bootstrap and JS');

    const modalFooter = createElement('div', modalContent, '', {className: 'modal-footer'});
    createElement('button', modalFooter, 'CLOSE', {type: 'button', className: 'btn btn-secondary', 'data-bs-dismiss': 'modal'});
    createElement('button', modalFooter, 'SAVE CHANGES', {type: 'button', className: 'btn btn-primary'});
}

function showModal () {
    const myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
}

function createForm() {
    const formContainer = createElement('div', 'main', '', {className: 'form__container'});
    const userForm = createElement('form', formContainer, '', {id: 'form'});
    const dateLabel = createElement('label', userForm, 'Enter your birthdate: ', {className: 'label__date'});
    createElement('input', dateLabel, '', {class: 'user-date', type: 'text', placeholder: 'Format: DD.MM.YYYY'});
    createElement('button', userForm, 'SHOW DATE', {type: 'button', className: 'btn btn-success'}, {click: validateUserDate});
    const dateOutput = createElement('div', 'form', '', {className: 'date-output'});
    createElement('div', dateOutput, '', {className: 'date-output-error'});
    createElement('div', dateOutput, '', {className: 'date-output-result'});
}



/*- Отримати від користувача дату його народження в певному форматі і через moment.js перетворити в інший формат----DONE

- реалізувати перевірку (за допомогою регулярних виразів) на коректність користувацького введення (перевірити, що формат введення відповідає очікуванням) ----DONE

- якщо формат не відповідає - виводимо помилку (використовуємо bootstrap стилі)*!/ // --------------*/


function validateUserDate () {
    const userDateInputs = document.querySelectorAll('.user-date');
    let isValid = true;
    const parentElement = document.querySelector('.date-output-error');
    const alertElement = document.getElementById('alert');
    const description = 'Please, enter correct date!';
    for (let input of userDateInputs) {
        if (checkDate(input)) {
            document.querySelector('.date-output-result').textContent = moment(String(input.value)).format("MMM Do YY");
            input.value = '';
        } else {
            if (alertElement) {
                removeElement(alertElement)
            }
            createAlert(parentElement, description);
            input.value = '';
            isValid = false;
        }
    }
    return isValid;
}

function checkDate(inputDate) {
    const inputValue = inputDate.value;
    const pattern = /^\d{2}\.\d{2}\.\d{4}$/;
    const result = inputValue.match(pattern);
    return Boolean(result);
}