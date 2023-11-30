export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';

export const addContact = (contact) => ({
    type: ADD_CONTACT,
    payload: contact,
});

export const deleteContact = (contactName) => ({
    type: DELETE_CONTACT,
    payload: contactName,
});