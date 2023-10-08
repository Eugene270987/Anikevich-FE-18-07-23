const userFormElements = document.forms[0].elements;

const userRegExps = {
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
    age: {
        regExp: /^(1[89])|([2-9]\d)|(1[0-2]\d)$/,
        error: {
            errorMsg: 'Enter your age correctly!',
            element: document.getElementById('age-error'),
        },
        formElement: userFormElements.age,
    },
    experience: {
        regExp: /^\d+$/,
        error: {
            errorMsg: 'Enter your experience correctly!',
            element: document.getElementById('exp-error'),
        },
        formElement: userFormElements.experience,
    },
}


const carFormElements = document.forms[1].elements;

let carRegExps = {
    brand: {
        regExp: /^[a-zA-Zа-яА-Я]{3,}$/,
        error: {
            errorMsg: 'Enter car brand correctly!',
            element: document.getElementById('brand-error'),
        },
        formElement: carFormElements.brand,
    },
    color: {
        regExp: /^[a-zA-Zа-яА-Я]{3,}$/,
        error: {
            errorMsg: 'Enter car color correctly!',
            element: document.getElementById('color-error'),
        },
        formElement: carFormElements.color,
    },
    year: {
        regExp: /^(19[6-9][0-9]|20[0-2][0-4])$/,
        error: {
            errorMsg: 'Enter the year correctly!',
            element: document.getElementById('year-error'),
        },
        formElement: carFormElements.year,
    },
    country: {
        regExp: /^[a-zA-Zа-яА-Я]{3,}$/,
        error: {
            errorMsg: 'Enter the country correctly!',
            element: document.getElementById('country-error'),
        },
        formElement: carFormElements.country,
    },
}

