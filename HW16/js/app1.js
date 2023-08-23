/*
    Є текстове поле на сторінці. При фокусі на цьому полі збоку з'являється <div> з інформацією. При зникненні фокуса -
    так само пропадає
*/

const textInput = document.getElementById('input');
const textDiv = document.querySelector('.text');

textInput.addEventListener("focus", function () {
    textDiv.style.display = 'block';
});
textInput.addEventListener("blur", function () {
    textDiv.style.display = 'none';
});

// DONE










