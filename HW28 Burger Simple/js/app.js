'use strict'
/*
    Мережа фастфудів пропонує кілька видів гамбургерів:
    - маленький (50 тугриків, 20 калорій)
    - великий (100 тугриків, 40 калорій)

    Гамбургер може бути з одним із кількох видів начинок:
    - сиром (+ 10 тугриків, + 20 калорій)
    - салатом (+ 20 тугриків, + 5 калорій)
    - картоплею (+ 15 тугриків, + 10 калорій)

    Можна додати добавки:
    - посипати приправою (+ 15 тугриків, 0 калорій)
    - полити майонезом (+ 20 тугриків, + 5 калорій).

    --- Напишіть програму, яка розраховує вартість та калорійність гамбургера.
    --- Використовуй ОВП підхід (підказка: необхідний клас Гамбургер, константи,
    способи вибору опцій і розрахунку необхідних величин).
*/

document.getElementById('btn-show-order').addEventListener('click', handleShowOrder);