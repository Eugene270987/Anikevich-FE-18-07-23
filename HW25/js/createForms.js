function createApartmentForm () {
    const apartmentForm = createElement('form', '#wrapper',
        '',
        {id: 'fill-apartment', className: 'd-flex flex-column visually-hidden'});
    const fieldSet = createElement('fieldset', apartmentForm, '', {className: 'd-flex flex-column'});
    createElement('legend', fieldSet, 'Please, also fill the fields below!', {className: 'text-center'});

    const apartmentNumberWrapper = createElement('div', fieldSet, '', {id: 'apartmentNumber-error', className: 'mb-4'});
    createElement('label', apartmentNumberWrapper, 'Apartment number', {className: 'form-label', for: 'apartmentNumberInput'});
    createElement('input', apartmentNumberWrapper,
        '',
        {type: 'text', name: 'apartmentNumber', className: 'form-control', id: 'apartmentNumberInput', placeholder: 'Enter apartment number'});

    const roomsNumberWrapper = createElement('div', fieldSet, '', {id: 'roomsNumber-error', className: 'mb-4'});
    createElement('label', roomsNumberWrapper, 'Number of rooms', {className: 'form-label', for: 'roomsNumberInput'});
    createElement('input', roomsNumberWrapper,
        '',
        {type: 'text', name: 'roomsNumber', className: 'form-control', id: 'roomsNumberInput', placeholder: 'Enter the number of rooms'});

    const guestNumberWrapper = createElement('div', fieldSet, '', {id: 'guestNumber-error', className: 'mb-4'});
    createElement('label', guestNumberWrapper, 'Number of guests', {className: 'form-label', for: 'guestNumberInput'});
    createElement('input', guestNumberWrapper,
        '',
        {type: 'text', name: 'guestNumber', className: 'form-control', id: 'guestNumberInput', placeholder: 'Enter the number of guests'});

    createElement('button', apartmentForm,
        'Next step',
        {id: 'btn-apartment-confirm', className: 'btn btn-success align-self-center'});
}

function createGuestForm () {
    const guestForm = createElement('form', '#wrapper',
        '',
        {id: 'fill-guest', className: 'd-flex flex-column visually-hidden'});
    const fieldSet = createElement('fieldset', guestForm, '', {className: 'd-flex flex-column'});
    createElement('legend', fieldSet, 'Please, fill these fields as well!', {className: 'text-center'});

    const nameWrapper = createElement('div', fieldSet, '', {id: 'name-error', className: 'mb-4'});
    createElement('label', nameWrapper, 'Name', {className: 'form-label', for: 'nameInput'});
    createElement('input', nameWrapper,
        '',
        {type: 'text', name: 'name', className: 'form-control', id: 'nameInput', placeholder: 'Enter name'});

    const surnameWrapper = createElement('div', fieldSet, '', {id: 'surname-error', className: 'mb-4'});
    createElement('label', surnameWrapper, 'Surname', {className: 'form-label', for: 'surnameInput'});
    createElement('input', surnameWrapper,
        '',
        {type: 'text', name: 'surname', className: 'form-control', id: 'surnameInput', placeholder: 'Enter surname'});

    createElement('button', guestForm,
        'Next step',
        {id: 'btn-guest-confirm', className: 'btn btn-success align-self-center', 'data-bs-target': '#exampleModal'});
}

createApartmentForm();
createGuestForm();