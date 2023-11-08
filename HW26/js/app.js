'use strict'
document.addEventListener('DOMContentLoaded', () => {
    resetQuantity();
    deleteQuantity();
    increaseQuantity();
});


const btnConfirm = document.getElementById('btn-data-confirm');
btnConfirm.addEventListener('click', event => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
        clearFields();
        calculateOrder();
        btnConfirm.setAttribute('data-bs-toggle', 'modal');
        const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
        myModal.show();
    }
});