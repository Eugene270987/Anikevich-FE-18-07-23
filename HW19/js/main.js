/*Bootstrap:

- Вивести на сторінку кнопку (застосувати стилі бутстрапа) при натисканні на яку відкривається модальне вікно з деякими даними ------DONE

- Повісити на цю кнопку Tooltip із довільним текстом //-----------DONE

- Створити ще одну кнопку, при натисканні на яку показується бутстрапівський алерт. При повторному натисканні - ховається.------DONE

    Moment:

- Вивести дату вашого народження в довільному форматі з використанням moment.js // ------------DONE

- Отримати від користувача дату його народження в певному форматі і через moment.js перетворити в інший формат

- реалізувати перевірку (за допомогою регулярних виразів) на коректність користувацького введення (перевірити, що формат введення відповідає очікуванням)

- якщо формат не відповідає - виводимо помилку (використовуємо bootstrap стилі)*/ // --------------

'use strict'
//Must be in the end of the document, otherwise it won't work.
/*const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));*/

//Or, we may use the following in the beginning:
window.addEventListener('load', function(){
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
})

showMyBirthday();
showButtons();
createModal();
createForm();


