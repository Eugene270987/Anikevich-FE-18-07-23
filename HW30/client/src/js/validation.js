import {createAlert} from './eventHandlers.js';
import {removeElement} from './domHelpers.js';
export const userFormElements = document.forms[0].elements;
export const userRegExps = {
    name: {
        regExp: /^[a-zA-Zа-яА-Я]{3,}$/,
        error: {
            errorMsg: 'Enter your name correctly!',
            element: document.getElementById('name-error'),
        },
        formElement: userFormElements.name,
    },
    surname: {
        regExp: /^[a-zA-Zа-яА-Я]{3,}$/,
        error: {
            errorMsg: 'Enter your surname correctly!',
            element: document.getElementById('surname-error'),
        },
        formElement: userFormElements.surname,
    },
    mobile: {
        regExp: /^\d{10}$/,
        error: {
            errorMsg: 'Enter your number correctly!',
            element: document.getElementById('number-error'),
        },
        formElement: userFormElements.mobile,
    },
}

export function validateUserForm (regExps, formElements, btnId) {
    const successElements = document.querySelectorAll('.alert-success');
    const errorElements = document.querySelectorAll('.alert-danger');
    const wrappers = document.querySelectorAll('.mb-4');
    const btnShow = document.getElementById(btnId);

    errorElements.forEach((errorElement) => {
        removeElement(errorElement);
    });
    successElements.forEach((successElement) => {
        removeElement(successElement);
    })

    let allFieldsValid = true;

    for (let key in regExps) {
        const item = regExps[key];
        if (!item.regExp.test(formElements[key].value)) {
            createAlert(item.error.element, item.error.errorMsg, 'alert alert-danger');
            allFieldsValid = false;
        }
    }
    if (allFieldsValid) {
        wrappers.forEach((wrapper) => {
            createAlert(wrapper, 'This field is valid!', 'alert alert-success');
        });
        btnShow.setAttribute('data-bs-toggle', 'modal');
    }

    return allFieldsValid;
}




/*
import { showOrder } from './eventHandlers.js';
export function handleShowOrder () {
    const getCheckedStuffing = document.querySelector('input[name="stuffing"]:checked');
    if (getCheckedStuffing !== null) {
        this.setAttribute('data-bs-toggle', 'modal');
        showOrder();
    }
}*/
