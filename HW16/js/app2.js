/*
На сторінці є дві кнопки. При натисканні на першу кнопку просимо користувача ввести в prompt посилання,
при натисканні на другу - переадресовується на інший сайт (за раніше введеним посиланням). Реалізувати перевірку на
http/https. Якщо протокол не вказано - додаємо.
*/
const btnInput = document.querySelector('.btn__input');
const btnFollow = document.querySelector('.btn__follow');

btnInput.addEventListener('click', function () {
    const userLink = prompt('Enter your URL: ');
    if (userLink !== null && userLink !== '') {
        if (userLink.startsWith('http://' || 'https://')) {
            localStorage.setItem('validLink', userLink);
        } else {
            localStorage.setItem('validLink', 'https://' + userLink);
        }
    }
});

btnFollow.addEventListener('click', function () {
    const validLink = localStorage.getItem('validLink');

    if (validLink) {
        window.location.href = validLink;
    }
});

//

