'use strict'
function showInfo (users) {
    for (let user of users) {
        showUserInfo(user);
    }
}
function showUserInfo (user) {
    const container = createElement('div', '#users', '', {className: 'user__container', 'data-user-id': user.id});
    createElement('div', container, user.id); //idElement - не используем, поэтому мы не заносим функцию в переменную
    createElement('div', container, user.name + ' ' + user.lastName); //nameElement - также не заносим в переменную

    const actionsElement = createElement('div', container, '', {className: 'actions', 'data-id': user.id});

    createElement('input', actionsElement, '', {type: 'button', value: 'VIEW', 'data-type': 'view'}, {click: handleViewUserInfo});
    createElement('input', actionsElement, '', {type: 'button', value: 'EDIT', 'data-type': 'edit'}, {click: handleEditUser});
    createElement('input', actionsElement, '', {type: 'button', value: 'DELETE', 'data-type': 'delete'}, {click: handleDeleteUser});
}
function showAddUserForm () {
    const parentSelector = '#form form';

    createElement('input',
        parentSelector,
        '',
        {name: 'login', type: 'text', placeholder: 'Enter your login'});

    createElement('input',
        parentSelector,
        '',
        {name: 'name', type: 'text', placeholder: 'Enter your name'});

    createElement('input',
        parentSelector,
        '',
        {name: 'lastName', type: 'text', placeholder: 'Enter your last name'});

    createElement('input',
        parentSelector,
        '',
        {name: 'email', type: 'text', placeholder: 'Enter your e-mail'});

    createElement('input',
        parentSelector,
        '',
        {type: 'button', value: 'Save'},
        {click: () => handleSaveUser()});
}
function handleSaveUser() {
    const formElements = document.forms[0].elements;

    const login = formElements.login.value;
    const name = formElements.name.value;
    const lastName = formElements.lastName.value;
    const email = formElements.email.value;

    const user = {
        login: login,
        name: name,
        lastName: lastName,
        email: email,
        id: Date.now()
    };

    const isValid = validate(user);
    let hasErrors = false;

    for (let key in isValid) {
        const inputElement = document.querySelector(`input[name='${key}']`);
        const value = isValid[key];
        if (!value) {
            showMessage(inputElement, 'error__message', 'Fill in the field correctly');
            inputElement.classList.add('error');
            hasErrors = true;
        } else {
            deleteMessage(inputElement, 'error');
        }
    }

    if (hasErrors) {
        return;
    }


    saveUser(user);
    cleanElement('#form form');
}


function validate(user) {
    return {
        login: !(user.login === '' || user.login === ' '),
        name: !(user.name === '' || user.name === ' ' || !isNaN(user.name)),
        lastName: !(user.lastName === '' || user.lastName === ' ' || !isNaN(user.lastName)),
        email: !(user.email === '' || !isNaN(user.email)),
    };
}

function showMessage(element, className, errorMessage) {
    element.classList.add(className);
    element.placeholder = errorMessage;
}
function deleteMessage(element, className) {
    element.classList.remove(className);
}



function saveUser(newUser) {
    users.push(newUser);
    updateStorage();
    showUserInfo(newUser);
}
function getUserId (event) {
    return event.target.parentNode.getAttribute('data-id');
}
function handleDeleteUser(event) {
    const userId = getUserId(event);
    handleDeleteOrNot(userId);
}
function deleteUserById (id) {
    const indexToRemove = users.findIndex(user => user.id == id);
    users.splice(indexToRemove, 1);
    removeElement(`div[data-user-id="${id}"]`);
    updateStorage();
}
function updateStorage () {
    localStorage.setItem('users', JSON.stringify(users));
}
function handleDeleteOrNot(userId) {
    const modal = createElement('div', '#users', '', {className: 'modal__open'})
    createElement('h1', modal, 'Do you really want to delete your account?', {className: 'modal__title'});

    const buttonContainer = createElement('div', modal, '', {className: 'button__container'})
    createElement('input', buttonContainer, '', {type: 'button', value: 'NO', 'data-type': 'deny'}, {click: () => {removeElement(modal);}});
    createElement('input', buttonContainer, '', {type: 'button', value: 'YES', 'data-type': 'accept'}, {click: () => {removeElement(modal); deleteUserById(userId)}});
}


// --При натисканні на кнопку “View” відкриваються дані користувача у блоці під списком
function handleViewUserInfo (event) {
    const userId = getUserId(event);
    showTable(userId);
}

function showTable() {
    const parentSelector = document.querySelector('#users') ;
    const gridContainer = createElement('div', parentSelector, '', {className: 'table__container'});

    createElement('h2', gridContainer, 'Login: ' );
    createElement('p', gridContainer, '' );
    createElement('h2', gridContainer, 'Name: ');
    createElement('p', gridContainer, '');
    createElement('h2', gridContainer, 'Last Name: ');
    createElement('p', gridContainer, '' );
    createElement('h2', gridContainer, 'Email: ');
    createElement('p', gridContainer, '');

    createElement('input', gridContainer, '', {type: 'button', value: 'CLOSE', className: 'btn__close', 'data-type': 'close'})
}

//--При натисканні на кнопку “Edit” з'являється можливість редагувати дані в блоці під списком. Дані зберігаються при натисканні на кнопку “Save” та оновлюють дані у списку
function handleEditUser (event) {
    const userId = getUserId(event);
    showAddUserForm(userId);
}








