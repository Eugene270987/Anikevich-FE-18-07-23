'use strict'

function createAlert(parent, content, type) {
    createElement('div', parent, content, {id: 'alert', className: type, role: 'alert'});
}

function clearFields () {
    const elements = document.querySelectorAll('.error');
    elements.forEach(element => {
        const alert = element.querySelector('.alert.alert-danger');
        if (alert) {
            removeElement(alert);
        }
    })
}
function validateForm () {
    const formElements = document.forms[0].elements;
    const burgerType = formElements.burger.value;
    const inputs = document.querySelectorAll('input');
    const error = document.querySelector('.alert.alert-danger');
    if (burgerType === 'Choose the size of your burger') {
        createAlert('#size-error', 'Please, choose the burger type!', 'alert alert-danger');
        if (error) {
            removeElement(error);
        }
        return false;
    }
    let hasValidationError = false;

    inputs.forEach(input => {
        if (input.value < 0 || input.value > 3) {
            const parent = input.closest('.error');
            if (!error) {
                createAlert(parent, `Please, enter the correct amount of ${input.name}`, 'alert alert-danger');
            }
            hasValidationError = true;
        }
    });

    return !hasValidationError;
}
//-----------------------------------------------------
function resetQuantity() {
    const resetButtons = document.querySelectorAll('.btn-danger');
    resetButtons.forEach(resetButton => {
        resetButton.addEventListener('click', () => {
            const parent = resetButton.closest('.field-wrapper');
            const input = parent.querySelector('input[type="number"]');
            if (input) {
                input.value = 0;
            }
        });
    });
}
function deleteQuantity () {
    const deleteButtons = document.querySelectorAll('.btn-warning');
    deleteButtons.forEach(deleteButton => {
        deleteButton.addEventListener('click', () => {
            const parent = deleteButton.closest('.field-wrapper');
            const input = parent.querySelector('input[type="number"]');
            if (input.value > 0) {
                input.value = parseInt(input.value) - 1;
            }
        });
    });
}
function increaseQuantity () {
    const addButtons = document.querySelectorAll('.btn-success');
    addButtons.forEach(addButton => {
        addButton.addEventListener('click', () => {
            const parent = addButton.closest('.field-wrapper');
            const input = parent.querySelector('input[type="number"]');
            if (input.value >= 0 && input.value <= 2) {
                input.value = parseInt(input.value) + 1;
            }
        });
    });
}

function calculateOrder () {

}



