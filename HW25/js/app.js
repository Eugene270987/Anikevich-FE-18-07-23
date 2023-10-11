'use strict'
/*
   ------------------------------------------Створити та описати сутності Багатоквартирного будинку, квартири, мешканця.----------------------------
1. Додати можливість створювати нові будинки на певну кількість квартир із певною кількістю мешканців
2. Кількість квартир у будинку та мешканців у кожній квартирі задає користувач на етапі заповнення форми
3. Реалізувати функцію виведення даних по дому після створення.
4. Форма для додавання будинку - валидация только на пустые поля
5. Після її заповнення: запитуємо у користувача за допомогою форми дані про квартири в цьому будинку - валидация только на пустые поля
6. Після заповнення форми про квартиру - виводимо форму для мешканців  - валидация только на пустые поля
7. Після заповнення – доступна кнопка Виводу даних про будинок
*/
document.getElementById('btn-create-house').addEventListener('click', event => {
    event.preventDefault();
    hideForm('create-house');
    showForm('fill-house');
})

document.getElementById('btn-house-confirm').addEventListener('click', event => {
    event.preventDefault();
    const isValid = validateForm(houseRegExps, houseFormElements, 'btn-house-confirm');
    if (isValid) {
        hideForm('fill-house');
        showForm('fill-apartment');
    }
})

document.getElementById('btn-apartment-confirm').addEventListener('click', event => {
    event.preventDefault();
    const isValid = validateForm(apartmentRegExps, apartmentFormElements, 'btn-apartment-confirm');
    if (isValid) {
        hideForm('fill-apartment');
        showForm('fill-guest');
    }
})

document.getElementById('btn-guest-confirm').addEventListener('click', event => {
    event.preventDefault();
    const isHouseValid = validateForm(houseRegExps, houseFormElements, 'btn-guest-confirm');
    const isApartmentValid = validateForm(apartmentRegExps, apartmentFormElements, 'btn-guest-confirm');
    const isGuestValid = validateForm(guestRegExps, guestFormElements, 'btn-guest-confirm');
    if (isHouseValid && isApartmentValid && isGuestValid) {
        hideForm('fill-guest');
        const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
        myModal.show();
    }
})




