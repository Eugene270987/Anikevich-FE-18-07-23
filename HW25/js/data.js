const houseFormElements = document.getElementById('fill-house').elements;
const apartmentFormElements = document.getElementById('fill-apartment').elements;
const guestFormElements = document.getElementById('fill-guest').elements;

const houseRegExps = {
    address: {
        regExp: /^[a-zA-Z]{3,}[,\s]+\d+$/,
        error: {
            errorMsg: 'Enter address correctly!',
            element: document.getElementById('address-error'),
        },
        formElement: houseFormElements.address,
    },
    floors: {
        regExp: /^[0-9]{1,2}$/,
        error: {
            errorMsg: 'Enter the number of floors correctly!',
            element: document.getElementById('floors-error'),
        },
        formElement: houseFormElements.floors,
    },
    apartments: {
        regExp: /^(?:[1-9]|10)$/,
        error: {
            errorMsg: 'Enter the number of apartments correctly!',
            element: document.getElementById('apartments-error'),
        },
        formElement: houseFormElements.apartments,
    },
}

const apartmentRegExps = {
    apartmentNumber: {
        regExp: /^(?:[1-9]|10)$/,
        error: {
            errorMsg: 'Enter apartment number correctly!',
            element: document.getElementById('apartmentNumber-error'),
        },
        formElement: apartmentFormElements.apartmentNumber,
    },
    roomsNumber: {
        regExp: /^[1-3]$/,
        error: {
            errorMsg: 'Enter the number of rooms correctly!',
            element: document.getElementById('roomsNumber-error'),
        },
        formElement: apartmentFormElements.roomsNumber,
    },
    guestNumber: {
        regExp: /^[1-3]$/,
        error: {
            errorMsg: 'Enter the number of guests correctly!',
            element: document.getElementById('guestNumber-error'),
        },
        formElement: apartmentFormElements.guestNumber,
    },
}

const guestRegExps = {
    name: {
        regExp: /^[a-zA-Zа-яА-Я]{3,}$/,
        error: {
            errorMsg: 'Enter your name correctly!',
            element: document.getElementById('name-error'),
        },
        formElement: guestFormElements.name,
    },
    surname: {
        regExp: /^[a-zA-Zа-яА-Я]{3,}$/,
        error: {
            errorMsg: 'Enter your surname correctly!',
            element: document.getElementById('surname-error'),
        },
        formElement: guestFormElements.surname,
    },
}






