import axios from 'axios';
import { createElement } from './domHelpers.js';
import { handleCategoryClick, showModal } from './eventHandlers.js';
import '../scss/style.scss';
import { basicUrl } from './common.js';
import { handleShowUserForm } from './eventHandlers.js';
import { validateUserForm, userRegExps, userFormElements } from './validation.js';


document.addEventListener('DOMContentLoaded', async () => {
    const menuParent = document.getElementById('menu');
    const { data } = await axios(`${basicUrl}/api/categories`);
    data.forEach(item => {
        createElement(
            'button',
            menuParent,
            item.name,
            {'data-id': item.id, type: 'button', className: 'btn btn-primary'},
            {click: handleCategoryClick});
    });
});

handleShowUserForm();

document.getElementById('btn-user-confirm').addEventListener('click', () => {
    const userForm = document.getElementById('userForm');
    const isValid = validateUserForm(userRegExps, userFormElements, 'btn-user-confirm');

    if (isValid) {
        userForm.classList.add('visually-hidden');
        showModal();
    }
})