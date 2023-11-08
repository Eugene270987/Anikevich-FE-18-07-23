'use strict'
function showForm(id) {
    const form = document.getElementById(id);
    form.classList.remove('visually-hidden');
}
function hideForm (id) {
    const form = document.getElementById(id);
    const successElements = document.querySelectorAll('.alert-success');
    if (successElements) {
        successElements.forEach((successElement) => {
            removeElement(successElement);
        })
    }
    form.classList.add('visually-hidden');
}

function createAlert(parent, content, type) {
    createElement('div', parent, content, {id: 'alert', className: type, role: 'alert'});
    return alert;
}

function validateForm(regExps, formElements, btnId)  {
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
function displayUserInfo(user) {
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = user.generateUserInfo();
}
function displayCarData(car) {
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = car.generateCarInfo();
}
function displayPersonData(person) {
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = person.generateAllInfo();
}




















