import './Contact.scss'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Contact ({contact, onDeleteContact}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDeleteContact = () => {
        onDeleteContact(contact.name);
        handleClose();
    }
    return (
        <div>
            <div key={contact.name}>
                <ul className="contact__list">
                    <li>Name: {contact.name}</li>
                    <li>Username: {contact.username}</li>
                    <li>Phone: {contact.phone}</li>
                    <button className="btn-del" type="button" onClick={handleShow}>Delete</button>
                </ul>
            </div>

            {/*Как вариант можно вынести в отдельный компонент модалку, и импортировать сюда этот компонент */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you really want to delete this contact?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="primary" onClick={handleDeleteContact}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Contact;