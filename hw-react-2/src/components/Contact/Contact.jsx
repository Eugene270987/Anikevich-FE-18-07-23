import './Contact.scss'

function Contact ({contact, onDeleteContact}) {
    const handleDeleteContact = () => {
        onDeleteContact(contact.name);
    }
    return (
        <div key={contact.name}>
            <ul className="contact__list">
                <li>Name: {contact.name}</li>
                <li>Username: {contact.username}</li>
                <li>Phone: {contact.phone}</li>
                <button className="btn-del" type="button" onClick={handleDeleteContact}>Delete</button>
            </ul>
        </div>
    )
}

export default Contact;