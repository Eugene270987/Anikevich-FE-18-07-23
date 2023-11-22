import './Contact.scss'
import { useState } from 'react';
import CreateModal from '../CreateModal/CreateModal';

function Contact ({contact, onDeleteContact}) {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const handleDeleteContact = () => {
        onDeleteContact(contact.name);
        handleCloseModal();
    };

    return (
        <div>
            <div key={contact.name}>
                <ul className="contact__list">
                    <li>Name: {contact.name}</li>
                    <li>Username: {contact.username}</li>
                    <li>Phone: {contact.phone}</li>
                    <button className="btn-del" type="button" onClick={handleShowModal}>Delete</button>
                </ul>
            </div>

           <CreateModal show={showModal} onClose={handleCloseModal} onDelete={handleDeleteContact}></CreateModal>
        </div>
    )
}

export default Contact;